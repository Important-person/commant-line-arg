#!/usr/bin/env node

const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

function addDate(date, unit, value) {
    if (unit === "day") {
        date.setDate(date.getDate() + value);
    } else if (unit === "month") {
        date.setMonth(date.getMonth() + value);
    } else if (unit === "year") {
        date.setFullYear(date.getFullYear() + value);
    }
    return date;
}

function subDate(date, unit, value) {
    if (unit === "day") {
        date.setDate(date.getDate() - value);
    } else if (unit === "month") {
        date.setMonth(date.getMonth() - value);
    } else if (unit === "year") {
        date.setFullYear(date.getFullYear() - value);
    }
    return date;
}

yargs(hideBin(process.argv))
    .command(
        "current",
        "Показать текущую дату и время в формате ISO",
        (yargs) => {
            return yargs
                .option("date", {
                    alias: "d",
                    type: "boolean",
                    description: "Вывод дня",
                })
                .option("month", {
                    alias: "m",
                    type: "boolean",
                    description: "Вывод месяца",
                })
                .option("year", {
                    alias: "y",
                    type: "boolean",
                    description: "Вывод года"
                })
        },
        (argv) => {
            const date = new Date();

            if(argv.date) {
                console.log(date.getDate());
            } else if(argv.month) {
                console.log(date.getMonth() + 1);
            } else if(argv.year) {
                console.log(date.getFullYear());
            } else {
                console.log(date.toISOString())
            }
        }
    )
    .command(
        "add",
        "Добавить значение к текущей дате",
        (yargs) => {
            return yargs
                .option("days", {
                    alias: "d",
                    type: "number",
                    description: "Добавить дни",
                })
                .option("months", {
                    alias: "m",
                    type: "number",
                    description: "Добавить месяцы",
                })
                .option("years", {
                    alias: "y",
                    type: "number",
                    description: "Добавить годы",
                });
        },
        (argv) => {
            const date = new Date();

            if (argv.days) {
                addDate(date, "day", argv.days);
            }
            if (argv.months) {
                addDate(date, "month", argv.months);
            }
            if (argv.years) {
                addDate(date, "year", argv.years);
            }

            console.log(date.toISOString());
        }
    )
    .command(
        "sub",
        "Отнять значение от текущей даты",
        (yargs) => {
            return yargs
                .option("days", {
                    alias: "d",
                    type: "number",
                    description: "Отнять дни",
                })
                .option("months", {
                    alias: "m",
                    type: "number",
                    description: "Отнять месяцы",
                })
                .option("years", {
                    alias: "y",
                    type: "number",
                    description: "Отнять годы",
                });
        },
        (argv) => {
            const date = new Date();

            if (argv.days) {
                subDate(date, "day", argv.days);
            }
            if (argv.months) {
                subDate(date, "month", argv.months);
            }
            if (argv.years) {
                subDate(date, "year", argv.years);
            }

            console.log(date.toISOString());
        }
    )
    .help()
    .alias("help", "h")
    .argv;


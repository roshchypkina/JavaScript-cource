let startPayment = document.getElementById('start');
    budget = document.getElementById('budget-value');
    dayBadget = document.getElementById('daybudget-value');
    level = document.getElementById('level-value');
    expecses = document.getElementById('expenses-value');
    optionalExpenses = document.getElementById('optionalexpenses-value');
    income = document.getElementById('income-value');
    monthSaving = document.getElementById('monthsavings-value');
    yearSaving = document.getElementById('yearsavings-value');
    expensesItem = document.querySelector('.expenses-item');
    approve = document.getElementsByTagName('button')[0];
    calculate = document.getElementsByClassName('button')[2];
    optionalExpenses = document.querySelectorAll('.optionalexpenses-item');
    chooseIncome = document.querySelector('.choose-income');
    checksavings = document.querySelector('.savings');
    sum = document.querySelector('choose-sum');
    percent = document.querySelector('.choose-percent');
    year = document.querySelector('.year-value');
    month = document.querySelector('.month-value');
    day = document.querySelector('.day-value');

    let money, time;

    function start() {
        money = +prompt ("Ваш бюджет на месяц?", "");
        time = prompt ("Введите дату в формате YYYY-MM-DD", "");
    
        while (isNaN(money) || money == "" || money == null) {
            money = +prompt ("Ваш бюджет на месяц?", ""); 
        }
    
    }
    start();
        
    let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true,
        chooseExpenses: function () {
            for (let i = 0; i < 2; i++) {
                let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
                    b = prompt ("Во сколько обойдется?", "");
            
                if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
            
                    console.log ("done");
            
                    appData.expenses[a] = b;
                } else {
                    console.log ("bad result");
                    i--;
                }
            
            }
        },
        detectDayBudget: function () {
            appData.moneyPerDay = (appData.budget / 30).toFixed();
            alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
        },
        detectLevel: function () {
            if (appData.moneyPerDay < 100) {
                console.log ("Это минимальный уровень достатка!");
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                console.log ("Это средний уровень достатка!");
            } else if (appData.moneyPerDay > 2000) {
                console.log ("Это высокий уровень достатка!");
            } else {
                console.log ("Ошибочка...!");
            }
        },
        checkSavings: function () {
            if (appData.savings == true) {
                let save = +prompt("Какова сумма накоплений?"),
                    percent = +prompt("Под какой процент?");
        
                    appData.monthIncome = save/100/12*percent;
                    alert("Доход с Вашего депозита в месяц: " + appData.monthIncome);
            }
        },
        chooseOptExpenses: function () {
            for (let i = 1; i <= 3; i++) {
                let questionOptExpenses = prompt("Статья необязательных расходов?");
                appData.optionalExpenses[i] = questionOptExpenses;
                console.log(appData.optionalExpenses);
            }
        },
        chooseIncome: function () {
    
            let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
    
            if (typeof(items) != "string" || items == "" || typeof(items) == null) {
                console.log("Вы ввели некорректные данные или не ввели их вовсе");
            } else {
                appData.income = items.split(", ");
                appData.income.push(prompt("Может что-то еще?"));
                appData.income.sort();
            }
    
            appData.income.forEach (function (itemmassive, i) {
                alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
            });
    
        }
    
    
    };
    
    for (let key in appData) {
        console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
    }


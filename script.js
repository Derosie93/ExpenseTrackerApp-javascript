const account = {
    accountName: "Simon Rosie",
    expenseArray: [],
    incomeArray: [],

    // denna funktion bevisar vilket namn accontet tillhör
    getName: function (){
        prompt(`Name: ${this.accountName}`)
    },

    // skapat en funktion där jag kan lägga till en inkomst med tillhörande beskrivning, som pushar informationen till min incomearray.
    addIncome: function (description, amount){
        this.incomeArray.push({
            description: description,
            amount: amount,
        });
    },

    // skapat dennan funktion som förklarar alla mina inkomster i en lista och loopar över incomearray för att se om det blivit uppdateringar
    listIncome: function () {
        let allIncome = "";
        this.incomeArray.forEach(function (income){
            allIncome += `${income.description}: ${income.amount}kr\n`
        });
        prompt(`Income:
        ${allIncome}`)
    },

    // skapat denna funktion för att kunna lägga till mina utgifter med tillhörande beskrivning som pushar informationen till min expensearray
    addExepnses: function (description, amount) {
        this.expenseArray.push({
            description: description, 
            amount: amount,
        });
    },

    // skapat denna funktion som förklarar mina utgifter i en lista och loopar genom expensarray för uppdateringar
    listExpenses: function () {
        let allExpenses = "";
        this.expenseArray.forEach(function (expenses){
            allExpenses += `${expenses.description}: ${expenses.amount}kr\n`
        });
        prompt(`Expenses:
        ${allExpenses}`)
    },

    // skapat denna funktion för att visa vad den totala inkomst och 
    // utgifter ligger på samt total balans för att veta vad som finns kvar,
    // plus att det finns ens skapad funktion som loopar genom både inkomst
    // och utgifter för uppdateringar.
    summary: function () {
        let totalIncome = 0;
        let totalExpenses = 0;

        this.incomeArray.forEach(function (income){
            totalIncome += income.amount;
        });

        this.expenseArray.forEach(function (expenses){
            totalExpenses += expenses.amount;
        });

        const totalBalance = totalIncome - totalExpenses;
        prompt(
            `Summary:
            
            Total Income: ${totalIncome}kr
            
            Total Expenses: ${totalExpenses}kr
            
            Your Balance: ${totalBalance}kr`
        );
    },
};

// skapat en funktion för att visa vad som ingår i menyn och vilka alternativ som finns.

function menu(){
    const menuChoice = parseFloat(
        prompt(`
        Make A Choice:

        1) Account Name
        2) Add Your Income
        3) List Of Your Income
        4) Add Your Expenses
        5) List Of Your Expenses
        6) Summary
        `)
        );

// Skapat en if and else där jag kallar på dom olika funktionerna jag skapat i min const account,
// använder mig av både prompt och parsefloat för att dela upp strings och nummer och göra det möjligt
// att räkna ut allt i slutet. 
    if(menuChoice === 1) {
        account.getName();
        return menu();
    } else if (menuChoice === 2) {
        const incomeDesc = prompt(`Description Of Your Income`);
        const incomeAmount = parseFloat(prompt(`Enter Your Amount`));
        account.addIncome(incomeDesc, incomeAmount);
        return menu();
    } else if (menuChoice === 3) {
        account.listIncome();
        return menu();
    } else if (menuChoice === 4) {
        const expensesDesc = prompt(`Description Of Your Expenses`);
        const expensesAmount = parseFloat(prompt(`Enter Your Amount`));
        account.addExepnses(expensesDesc, expensesAmount);
        return menu();
    }   else if (menuChoice === 5) {
        account.listExpenses();
        return menu();
    } else if (menuChoice === 6) {
        account.summary();
        return menu();
    }
}

menu();



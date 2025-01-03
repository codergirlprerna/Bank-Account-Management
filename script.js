function createBankAccount(initialBalance){
    let balance = initialBalance;
    const transactionHistory = [];

    return{
        deposit(amount){
            if(amount>0){
                balance += amount;
                transactionHistory.push(`Deposited:$${amount}`);
                updateUI();
            }else{
                alert('Deposit amount must be positive:');
            }
        },
        withdraw(amount){
            if(amount>0 && amount<=balance){
                balance-=amount;
                transactionHistory.push(`Withdrew:$${amount}`);
                updateUI();
            }else{
                alert('Invalid withdrawal amount');
            }
        },

        getbalance(){
            return balance;
        },

        getTransactionHistory(){
            return transactionHistory;
        }
    };
}

const myAccount = createBankAccount(0);

function updateUI(){
    document.getElementById('balance').innerText = myAccount.getbalance();


const historyList = document.getElementById('history');
historyList.innerHTML = '';
myAccount.getTransactionHistory().forEach(transaction=>{
    const listItem = document.createElement('Li');
    listItem.innerText = transaction;
    historyList.appendChild(listItem);
});
}

document.getElementById('deposit-button').addEventListener('click',()=>{
    const amount = parseFloat(document.getElementById('amount').value);
    myAccount.deposit(amount);
});

document.getElementById('withdraw-button').addEventListener('click',()=>{
    const amount = parseFloat(document.getElementById('amount').value);
    myAccount.withdraw(amount);
})

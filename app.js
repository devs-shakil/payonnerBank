const loginBtn = document.querySelector('#login');

loginBtn.addEventListener('click', function(){
    console.log("amake click marce");

    const loginArea = document.querySelector('#login-area').style.display = 'none';   
    
    const transactionArea = document.querySelector('#transaction-area').style.display = 'block';
} );
//deposit button


const depositBtn = document.querySelector('.deposit-btn');



depositBtn.addEventListener('click', function(){
    
    const depositInput = document.querySelector('.deposit-input').value;
    const depositInputNumber = parseFloat(depositInput);
    
    const currentDeposit = document.querySelector('.current-deposit').innerHTML;
    const currentDepositNumber = parseFloat(currentDeposit);
    const depositTotal = currentDepositNumber + depositInputNumber;
    document.querySelector('.current-deposit').innerText = depositTotal;
    document.querySelector('.deposit-input').value = "";
    const totalBalance = document.querySelector('.total-balance').innerText;
    const totalBalanceNumber =  parseFloat(totalBalance);
    const updateTotalBalance = totalBalanceNumber + depositInputNumber;
    document.querySelector('.total-balance').innerText = updateTotalBalance;
    console.log( updateTotalBalance);
    
})

const withdraw = document.querySelector('.withdraw-btn');
withdraw.addEventListener('click', function(){
    const withdrawInput = document.querySelector('.withdraw-input').value;
    const withdrawInputNumber = parseFloat(withdrawInput);
    const withdrawAmount = document.querySelector('.withdraw-amount').innerHTML;
    const withdrawAmountNumber = parseFloat(withdrawAmount);
    const withdrawTotal = withdrawInputNumber + withdrawAmountNumber;
    document.querySelector('.withdraw-amount').innerText = withdrawTotal;
    document.querySelector('.withdraw-input').value = "";
    const totalBalanceWithdraw = document.querySelector('.total-balance').innerText;
    const totalBalanceWithdrawNumber = parseFloat(totalBalanceWithdraw);
    const updateTotalBalanceWithdraw = totalBalanceWithdrawNumber - withdrawInputNumber;
    document.querySelector('.total-balance').innerText = updateTotalBalanceWithdraw;


    console.log(updateTotalBalanceWithdraw);
})
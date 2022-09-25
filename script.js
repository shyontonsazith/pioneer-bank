//login button event handler
document.getElementById('login').addEventListener('click', function(event) {
    document.getElementById('loginArea').style.display='none';
    document.getElementById('transactionArea').style.display='block';
});

//deposit button event handler
document.getElementById('addDeposit').addEventListener('click', function(event) {
    const deposit = document.getElementById('depositAmount').value;
    const Amount = parseFloat(deposit);
    
    const currentDeposit = document.getElementById('currentDeposit').innerText; 
    const currentDepositNUmber = parseFloat(currentDeposit);
    const totalDeposit = Amount + currentDepositNUmber;
    
    document.getElementById('currentDeposit').innerText = totalDeposit;
    document.getElementById('depositAmount').value ="";

    const currentBalance = document.getElementById('balance').innerText;
    const currentBalanceAmount = parseFloat(currentBalance);
    const newBalance = currentBalanceAmount + Amount;
    document.getElementById('balance').innerText = newBalance;
});

//Withdraw event handler
document.getElementById('withdrawBtn').addEventListener('click',function(){
    const withdrawAmount = document.getElementById('withdrawAmountValue').value;
    const withdrawAmountConvert = parseFloat(withdrawAmount);

    const currentWithdraw = document.getElementById('withdrawStatus').innerText;
    const currentWithdrawConvert = parseFloat(currentWithdraw);

    const newWithdraw = withdrawAmountConvert+currentWithdrawConvert;

    document.getElementById('withdrawStatus').innerText= newWithdraw;

    document.getElementById('withdrawAmountValue').value = "";


    const currentBalance = document.getElementById('balance').innerText;
    const currentBalanceAmount = parseFloat(currentBalance);
    const newBalance = currentBalanceAmount - withdrawAmountConvert;
    document.getElementById('balance').innerText = newBalance;




});


//Deposit by clicking button 
document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    const newDepositAmmount = parseFloat(newDepositText);

    //validate input
    //Deposit Input field error
    if(typeof (newDepositAmmount) == 'false' | newDepositText == ''){
        document.getElementById('deposit-field-error').style.display = 'block';
        return
    }
    document.getElementById('deposit-field-error').style.display = 'none';
    //minimum deposit input value error
    if (newDepositAmmount < 1) {
        document.getElementById('deposit-error').style.display = 'block';
        return
    }
    document.getElementById('deposit-error').style.display = 'none';
    
    //deposit total
    const depositTotal = document.getElementById('deposit-total');
    const priviousDepositText = depositTotal.innerText;
    const priviousDepositAmmount = parseFloat(priviousDepositText);

    const newDepositTotal = priviousDepositAmmount + newDepositAmmount;
    depositTotal.innerText = newDepositTotal;

    //Balance Update
    const balanceTotal = document.getElementById('balance-total');
    const priviousBalanceTotalText = balanceTotal.innerText;
    const priviousBalanceTotalAmmount = parseFloat(priviousBalanceTotalText);

    const newBalanceTotal = priviousBalanceTotalAmmount + newDepositAmmount;
    balanceTotal.innerText = newBalanceTotal;

    //Clear Deposit Input Value
    depositInput.value = "";
})


//Withdraw by clicking button
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawText = withdrawInput.value;
    const newWithdrawAmmount = parseFloat(newWithdrawText); 

    //validate input
    //withdraw input field error
    if(typeof (newWithdrawAmmount) == 'false' | newWithdrawText == ''){
        document.getElementById('withdraw-field-error').style.display = 'block';
        return
    }
    document.getElementById('withdraw-field-error').style.display = 'none';
    //minimum withdraw input value error
    if (newWithdrawAmmount < 10) {
        document.getElementById('withdraw-error').style.display = 'block';
        return
    }
    document.getElementById('withdraw-error').style.display = 'none';

    //Withdraw Total
    const withdrawTotal = document.getElementById("withdraw-total");
    const priviousWithdrawText = withdrawTotal.innerText;
    const priviousWithdrawAmmount = parseFloat(priviousWithdrawText);
    
    
    const newWithdrawTotal = priviousWithdrawAmmount + newWithdrawAmmount;
    withdrawTotal.innerText = newWithdrawTotal;
    
    //Balance Update
    const balanceTotal = document.getElementById('balance-total');
    const priviousBalanceTotalText = balanceTotal.innerText;
    const priviousBalanceTotalAmmount = parseFloat(priviousBalanceTotalText);
    
    if(priviousBalanceTotalAmmount <= newWithdrawAmmount){
        document.getElementById('withdraw-more').style.display = 'block';
        return
    }
    document.getElementById('withdraw-more').style.display = '';
    
    const newBalanceTotal = priviousBalanceTotalAmmount - newWithdrawAmmount;
    balanceTotal.innerText = newBalanceTotal;

    //Clear Withdraw Input Value
    withdrawInput.value = "";
})


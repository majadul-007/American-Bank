const loginBtn = document.querySelector(".btn");

loginBtn.addEventListener("click", function () {

    console.log("Successfully login");
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

//Transaction part


// document.getElementsByClassName(".add-transaction")[1].value;
const depositBtn = document.querySelector(".deposit-btn");
// const getBalance = document.querySelector(".balance-status");



depositBtn.addEventListener("click", function () {
    
    addDeposit();
});

function addDeposit() {
    var getDeposit = document.getElementById("add-deposit").value;
    var getDepositNumber = parseFloat(getDeposit);
    var setDeposit = document.getElementById("deposit-value").innerText;
    var setDepositNumber = parseFloat(setDeposit);
    console.log(getDepositNumber)

    const totalDeposit = setDepositNumber + getDepositNumber;
    //getBalance.event.target.value +=  getDeposit; 
    document.getElementById("deposit-value").innerText = totalDeposit;
    let setBalance = document.querySelector(".balance-value").innerText;
    let setBalanceNumber = parseFloat(setBalance);
    const totalBalance = setBalanceNumber + getDepositNumber
    document.querySelector(".balance-value").innerText = totalBalance;
    document.getElementById("add-deposit").value = "";
    //withdraw(totalBalance);
    
}

const withdrawBtn = document.querySelector(".withdraw-btn");
withdrawBtn.addEventListener("click", function(){
    withdraw();

})

function withdraw(){
    let setBalance = document.querySelector(".balance-value").innerText;
    let setBalanceNumber = parseFloat(setBalance);
    const getWithdraw = document.getElementById("withdraw-transaction").value;
    const mainBalance = setBalanceNumber-getWithdraw;
    if(mainBalance<=500){
        console.log("You dont have enough mone y to withdraw");
    }else{
        
        document.getElementById("withdraw-value").innerHTML = getWithdraw;
        // balance = balance-getWithdraw;
        document.querySelector(".balance-value").innerText = mainBalance;

    }
}


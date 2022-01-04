function login(){
    document.getElementById('transection-area').style.display = "block";
    document.getElementById('login-menu').style.display = "none"
}

function depositMain(){
    var diposit = document.getElementById('deposit-inp').value;
    var dipositAMT = parseInt(diposit);

    var dipositPST = document.getElementById('dipositPST').innerText;
    var PSTdipositNumber = parseInt(dipositPST);

    var totalDiposit = dipositAMT + PSTdipositNumber;
    document.getElementById('dipositPST').innerText = totalDiposit;

    var totalBalance = document.getElementById('total-balance').innerText;
    var totalBalanceNumber = parseInt(totalBalance);

    var total = totalBalanceNumber + dipositAMT;
    document.getElementById('total-balance').innerText = total;
    document.getElementById('deposit-inp').value = '';
}
function Withdraw(){
    var withdrawInut = document.getElementById('withdraw-inp').value;
    var withdrawAmount = parseInt(withdrawInut);
    var withdrawBalance =document.getElementById('withdraw-balance').innerText;
    var withdrawNumber = parseInt(withdrawBalance);
    var totalWithdraw = withdrawAmount + withdrawNumber;
    document.getElementById('withdraw-balance').innerText = totalWithdraw;

    var totalBalance = document.getElementById('total-balance').innerText;
    var totalBalanceNumber = parseInt(totalBalance);
    var totalAmount = totalBalanceNumber - withdrawAmount;
    document.getElementById('total-balance').innerText = totalAmount;
    document.getElementById('withdraw-inp').value = '';
}
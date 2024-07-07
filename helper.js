var sidemenu = document.getElementById('sidemenu');
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-500px"
}

function updateRemaining() {
    const total = parseFloat(document.getElementById('total').value) || 0;
    const rent = parseFloat(document.getElementById('rent').value) || 0;
    const food = parseFloat(document.getElementById('food').value) || 0;
    const gas = parseFloat(document.getElementById('gas').value) || 0;
    const subs = parseFloat(document.getElementById('subs').value) || 0;
    const extra = parseFloat(document.getElementById('extra').value) || 0;
    const insur = parseFloat(document.getElementById('insurance').value) || 0;

    const totalExpenses = rent + food + gas + subs + extra + insur;
    const remaining = total - totalExpenses;

    document.getElementById('remaining').textContent = remaining.toFixed(2);

    if (remaining < 0) {
        alert('Expenses exceed provided budget!');
    }
}
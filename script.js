let clock = document.getElementById('dg-clk');

setInterval(() => {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000);
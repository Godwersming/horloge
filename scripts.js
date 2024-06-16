document.addEventListener('DOMContentLoaded', function () {
    const targetDate = new Date('June 25, 2024 12:00:00').getTime();

    const interval = setInterval(function() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        document.getElementById('days').innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
        document.getElementById('hours').innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.getElementById('minutes').innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById('seconds').innerText = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance < 0) {
            clearInterval(interval);
            document.getElementById('countdown').innerHTML = "Nous sommes lancés!";
        }
    }, 1000);
});

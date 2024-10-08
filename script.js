function updateCountdown() {
    const targetDate = new Date('2024-08-23T15:30:00');  // Set the target date and time to 15:30 on 23-08-2024
    const now = new Date();
    const timeDifference = targetDate - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeDifference < 0) {
        document.getElementById('countdown').innerHTML = "The countdown is over!";
    }
}

setInterval(updateCountdown, 1000);

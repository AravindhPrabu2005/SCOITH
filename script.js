document.getElementById("refreshBtn").addEventListener("click", fetchEarthingStatus);

function fetchEarthingStatus() {
    const statusIcon = document.getElementById("status-icon");
    const statusText = document.getElementById("status-text");

    statusIcon.textContent = "🔄";
    statusIcon.className = "status-icon status-loading";
    statusText.textContent = "Checking Status...";

    fetch('http://your-nodemcu-url/earthing-status')
        .then(response => response.json())
        .then(data => {
            updateStatus(data.earthingOk);
        })
        .catch(error => {
            console.error('Error fetching status:', error);
            updateStatus(null);
        });
}

function updateStatus(earthingOk) {
    const statusIcon = document.getElementById("status-icon");
    const statusText = document.getElementById("status-text");

    if (earthingOk === true) {
        statusIcon.textContent = "✅";
        statusIcon.className = "status-icon status-ok";
        statusText.textContent = "Earthing is Proper";
    } else if (earthingOk === false) {
        statusIcon.textContent = "❌";
        statusIcon.className = "status-icon status-error";
        statusText.textContent = "Earthing is Not Proper";
    } else {
        statusIcon.textContent = "⚠️";
        statusIcon.className = "status-icon status-error";
        statusText.textContent = "Error fetching status";
    }
}

fetchEarthingStatus();

const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
        sidebar.classList.remove('active');
    }
});

// Bar Chart

var ctx = document.getElementById('myBarChart').getContext('2d');
var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

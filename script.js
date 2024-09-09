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


// Setup audio commands with Annyang
function setupAudioCommands() {
    // Check if annyang is available
    if (annyang) {
        // Define commands
        const commands = {
            'hello': function() {
                alert('Hello World');
            },
            'change the color to *color': function(color) {
                document.body.style.backgroundColor = color;
            },
            'navigate to *page': function(page) {
                navigateToPage(page);
            }
        };

        // Add commands to annyang
        annyang.addCommands(commands);
        
        // Start listening on button click
        turnOnAudioBtn.addEventListener('click', () => {
            annyang.start();
            console.log('Annyang started');
        });
        
        // Stop listening on button click
        turnOffAudioBtn.addEventListener('click', () => {
            annyang.abort();
            console.log('Annyang stopped');
        });
    } else {
        console.log('Speech recognition is not supported');
        // Disable audio buttons if annyang is not available
        turnOnAudioBtn.disabled = true;
        turnOffAudioBtn.disabled = true;
        
        // Show a message to the user
        const audioInstructions = document.querySelector('.audio-instructions');
        if (audioInstructions) {
            const warningMsg = document.createElement('p');
            warningMsg.textContent = 'Speech recognition is not supported in your browser.';
            warningMsg.style.color = 'yellow';
            warningMsg.style.fontWeight = 'bold';
            audioInstructions.prepend(warningMsg);
        }
    }
}

const labels = Array.from({ length: days }, (_, i) => `Day ${i + 1}`);
const prices = Array.from({ length: days }, () => Math.random() * 100 + 100);

const ctx = document.getElementById('stockChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: `${ticker} Price`,
            data: prices,
            borderColor: 'blue',
            fill: false
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});


// Function to navigate to different pages
function navigateToPage(page) {
    page = page.toLowerCase();
    
    if (page === 'home' || page === 'index') {
        window.location.href = 'index.html';
    } else if (page === 'stocks' || page === 'stock') {
        window.location.href = 'stocks.html';
    } else if (page === 'dogs' || page === 'dog') {
        window.location.href = 'dogs.html';
    } else {
        console.log('Unknown page:', page);
    }
}
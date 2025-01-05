document.getElementById('imageUpload').addEventListener('change', function(event) {
    handleImageUpload(event.target.files[0]);
});

// Listen for paste event on the document
document.addEventListener('paste', function(event) {
    const items = event.clipboardData.items;
    for (let i = 0; i < items.length; i++) {
        if (items[i].type.startsWith('image/')) {
            const file = items[i].getAsFile();
            handleImageUpload(file);
            break; // Handle only the first image if multiple are pasted
        }
    }
});

function handleImageUpload(file) {
    if (file) {
        const loading = document.getElementById('loading');
        const loadingBar = document.querySelector('.loading-bar');
        const loadingText = document.querySelector('.loading-text');
        const result = document.getElementById('result');

        // Show loading animation
        loading.style.display = 'block';
        result.textContent = '';

        // Simulate loading animation
        let progress = 0;
        const interval = setInterval(() => {
            progress += 10;
            loadingBar.style.width = `${progress}%`;
            loadingText.textContent = `${progress}%`;

            if (progress >= 100) {
                clearInterval(interval);
            }
        }, 300);

        // Send the image to the backend for prediction
        const formData = new FormData();
        formData.append('image', file);

        fetch('/predict', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            // Hide loading indicator
            loading.style.display = 'none';
            loadingBar.style.width = '0%';
            loadingText.textContent = '0%';

            // Update the result with the prediction from the backend
            result.textContent = `Prediction: ${data.prediction}`;
        })
        .catch(error => {
            console.error('Error:', error);
            // Hide loading indicator in case of error
            loading.style.display = 'none';
            loadingBar.style.width = '0%';
            loadingText.textContent = '0%';
            result.textContent = 'Error predicting the image.';
        });
    }
}
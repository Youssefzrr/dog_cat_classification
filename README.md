# dog_cat_classification

## Overview

The **Dog-Cat Classification** project is a Flask-based web application that utilizes a deep learning Convolutional Neural Network (CNN) to predict whether an uploaded image contains a dog or a cat. The model processes the uploaded image and generates predictions that are returned to the user.

---

## Features

- **Image Prediction**: Allows users to upload an image of a dog or a cat and predicts the label as either *dog* or *cat*.
- **Deep Learning Model**: Based on a pre-trained CNN stored in the `model/cat_or_dog.keras` file.
- **Web Interface**: Includes a minimal web interface (`index.html`) for easy interaction. Users can upload images through this interface.
- **API Endpoint**: A `/predict` API endpoint to allow programmatic image uploads and predictions (useful for integration with other applications).

### Running the Application from Repository

1. Clone the repository:
   ```bash
   git clone https://github.com/Youssefzrr/dog_cat_classification.git
   ```
2. Navigate to the cloned repository directory:
   ```bash
   cd dog_cat_classification
   ```
3. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Ensure the `cat_or_dog.keras` model file is located in the `model/` directory.
5. Start the Flask server:
   ```bash
   python app.py
   ```
6. Open a web browser and navigate to `http://127.0.0.1:5000/` to access the application.
---

## Project Structure

- **`app.py`**: The main Flask application script. Handles routes, predictions, and rendering of the web interface.
- **`model/cat_or_dog.keras`**: The pre-trained CNN model file used for prediction.
- **`templates/index.html`**: The client-side web page for uploading images (not shown but assumed as part of the project structure).

---

## How It Works

1. **Input**: The `/predict` endpoint accepts an image file uploaded as part of a POST request.
2. **Image Preprocessing**: The uploaded image is resized to a fixed size (`64x64`) and normalized to prepare it for the CNN.
3. **Model Prediction**: The pre-processed image is fed into the model, which predicts the probability of the image depicting a dog or a cat.
4. **Output**: The prediction (`dog` or `cat`) is returned as a JSON object.


## Usage Instructions

### Running the Application
1. Clone the repository or download the project files.
2. Ensure the `cat_or_dog.keras` model file is located in the `model/` directory.
3. Start the Flask server:
   ```bash
   python app.py
   ```
4. Open a web browser and navigate to `http://127.0.0.1:5000/` to access the application.

### Using the Endpoint
You can interact with the `/predict` API endpoint programmatically. Example cURL command:
```bash
curl -X POST -F "image=@dog_image.jpg" http://127.0.0.1:5000/predict
```

The server will respond with:
```json
{
    "prediction": "dog"
}
```

---

## Model Details

The application uses a Convolutional Neural Network (CNN) for binary classification. The model predicts whether the given image is of a **dog** or a **cat**. The model accepts images of size `64x64` and uses normalization to scale the pixel values to the `[0-1]` range.

---

## Folder Structure

The basic directory structure of the project is as follows:

```
dog_cat_classification/
│
├── CNN/                    # related CNN experiments             
├── app.py                  # Main Flask application script
├── model/                  # Pre-trained deep learning model
└── templates/
    └── index.html          # Web interface template
```

---

## Future Enhancements

- Improve the user interface for better usability.
- Use a more advanced pre-trained model to improve prediction accuracy.
- Extend the application to classify additional categories of animals.
- Integrate a feature for saving prediction history.



from flask import Flask, request, jsonify, render_template
from keras.models import load_model
from keras.preprocessing import image
import numpy as np
from io import BytesIO

app = Flask(__name__)

cnn = load_model('model/cat_or_dog.keras')

@app.route('/predict', methods=['POST'])
def predict():
    file = request.files['image']
    file_like_object = BytesIO(file.read())
    img = image.load_img(file_like_object, target_size=(64, 64))
    img_array = image.img_to_array(img)
    img_array = img_array / 255.0
    img_array = np.expand_dims(img_array, axis=0)

    result = cnn.predict(img_array)
    print(result)
    prediction = 'dog' if result[0][0] > 0.5 else 'cat'

    return jsonify({'prediction': prediction})

@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)
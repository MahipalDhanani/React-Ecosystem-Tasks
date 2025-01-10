import React, { useState } from 'react';
import Cropper from 'react-cropper'; // Import Cropper component
import 'cropperjs/dist/cropper.css'; // Import Cropper CSS

function ImageUploader() {
  const [image, setImage] = useState(null); // To store the uploaded image
  const [croppedImage, setCroppedImage] = useState(null); // To store the cropped image

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result); // Set the image to preview
      };
      reader.readAsDataURL(file); // Read the file as a base64 string
    }
  };

  // Handle cropping
  const handleCrop = () => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
      const croppedData = cropper.getCroppedCanvas({ width: 200, height: 200 }).toDataURL();
      setCroppedImage(croppedData); // Store the cropped image in state
    }
  };

  // Save the cropped image to localStorage
  const handleSaveToLocalStorage = () => {
    if (croppedImage) {
      localStorage.setItem('croppedImage', croppedImage); // Store in localStorage
      alert('Cropped image saved to localStorage!');
    }
  };

  // Ref for the Cropper component
  const cropperRef = React.useRef(null);

  return (
    <div>
      <h2>Upload and Crop Image to 200x200</h2>
      <input type="file" accept="image/*" onChange={handleImageUpload} />

      {image && (
        <div>
          <h3>Image Preview</h3>
          <Cropper
            src={image}
            style={{ height: 400, width: '50%' }}
            aspectRatio={1/2}
            guides={false}
            ref={cropperRef}
          />
          <button onClick={handleCrop}>Crop Image</button>
        </div>
      )}

      {croppedImage && (
        <div>
          <h3>Cropped Image</h3>
          <img src={croppedImage} alt="Cropped" width="200px" height="200px" />
          <button onClick={handleSaveToLocalStorage}>Save to Local Storage</button>
        </div>
      )}
    </div>
  );
}

export default ImageUploader;

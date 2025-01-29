import { useState } from "react";
import axios from "axios";

const DragAndDropUpload = () => {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [previewImage, setPreviewImage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [retryCount, setRetryCount] = useState(0);

  const maxAttempts = 3;
  const retryDelay = 1000;

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      handleFileRead(selectedFile);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      handleFileRead(droppedFile);
    }
  };

  const handleFileRead = (selectedFile) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewImage(e.target.result); // Display preview if necessary
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleUpload = async () => {
    setLoading(true);
    setMessage("Calculating MTF... Please wait in a couple of minutes!");
    setRetryCount(0);
    setUploadStatus("");

    if (!file) {
      alert("No file selected.");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        const response = await axios.post("https://thisone-py.onrender.com/upload", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setMessage("Processing Done!");
        setUploadStatus("Your result is ready");
        setLoading(false);
        setResult(response.data);
      } catch (error) {
        setRetryCount(attempt);

        if (attempt === maxAttempts) {
          setMessage("Request time out, please refresh the page!");
          setLoading(false);
        } else {
          setMessage(`Attempt ${attempt} failed. Retrying in ${retryDelay / 1000} seconds...`);
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
        }
      }
    }
  };

  return (
    <div className="bg-mtf-bg backdrop-blur-md bg-opacity-5 bg-top flex flex-col items-center justify-center min-h-screen">
      <div className="min-w-72 min-h-52 flex flex-col justify-center items-center border-2 border-dashed border-red-950 rounded-lg text-center bg-fuchsia-100 shadow-md" onDragOver={handleDragOver} onDrop={handleDrop}>
        <p className="text-red-950 text-center font-bold text-4xl px-20 mb-4">MTF 10% Calculator</p>
        <p className="text-red-950 text-center px-20">Drag and drop your DICOM file here, or click below to select a file</p>
      </div>
      <div className="mx-10">
        <input type="file" onChange={handleFileChange} className="text-red-950 ml-20 mt-4" />
      </div>

      {file && (
        <p className="mt-2 text-sm bg-green-500 p-1 text-red-950">
          Selected File: <span className="font-medium">{file.name}</span>
        </p>
      )}
      <button onClick={handleUpload} className="mt-4 px-16 py-3 bg-fuchsia-500 text-white rounded-lg shadow" disabled={loading}>
        {loading ? "Processing..." : "Upload & Calculate"}
      </button>
      {message && <p className="mt-4 text-red-950 text-2xl">{message}</p>}
      {retryCount > 0 && (
        <p className="mt-2 text-red-950 text-xl">
          Retry count: {retryCount}/{maxAttempts}
        </p>
      )}
      {uploadStatus && <p className={`mt-4 text-2xl underline font-medium ${uploadStatus.includes("Your result is ready") ? "text-green-900" : "text-red-500"}`}>{uploadStatus}</p>}
      {result && (
        <div>
          <p className="text-green-950 text-2xl font-bold mt-2">MTF 10% Frequency: {result.mtf_10_frequency}</p>
          <img src={result.plot} alt="MTF Plot" />
        </div>
      )}
    </div>
  );
};

export default DragAndDropUpload;

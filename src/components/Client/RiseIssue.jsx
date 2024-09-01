import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RiseIssue = () => {
  const [formData, setFormData] = useState({
    issueType: "",
    issueTitle: "",
    issueMessage: "",
  });
  const handleBody=e=>{
    console.log(e)
    setBody(e)
  }
  const [body, setBody]=useState("");

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (formData.issueType.trim() === "") {
      tempErrors.issueType = "Issue Type is required";
      isValid = false;
    }
    if (formData.issueTitle.trim() === "") {
      tempErrors.issueTitle = "Issue Title is required";
      isValid = false;
    }
    if (formData.issueMessage.trim() === "") {
      tempErrors.issueMessage = "Issue Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Issue Data Submitted: ", formData);
      // Perform submit actions here (e.g., send data to backend)
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Rise Issue
        </h2>

        {/* Issue Type Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Issue Type</label>
          <select
            name="issueType"
            value={formData.issueType}
            onChange={handleChange}
            className={`w-full p-3 border rounded-md focus:outline-none ${
              errors.issueType ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select an issue type</option>
            <option value="Civil">Civil</option>
            <option value="Criminal">Criminal</option>
            <option value="Family">Family</option>
            <option value="Intellectual Property">Intellectual Property</option>
            <option value="Tax">Tax</option>
          </select>
          {errors.issueType && (
            <p className="text-red-500 text-xs mt-2">{errors.issueType}</p>
          )}
        </div>

        {/* Issue Title Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Issue Title</label>
          <input
            type="text"
            name="issueTitle"
            value={formData.issueTitle}
            onChange={handleChange}
            className={`w-full p-3 border rounded-md focus:outline-none ${
              errors.issueTitle ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter the issue title"
          />
          {errors.issueTitle && (
            <p className="text-red-500 text-xs mt-2">{errors.issueTitle}</p>
          )}
        </div>

        {/* Issue Message Field */}
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2">Issue Message</label>
          <textarea
            name="issueMessage"
            value={formData.issueMessage}
            onChange={handleChange}
            className={`w-full p-3 border rounded-md focus:outline-none h-32 ${
              errors.issueMessage ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Describe the issue here..."
          />
          {errors.issueMessage && (
            <p className="text-red-500 text-xs mt-2">{errors.issueMessage}</p>
          )}
        </div>





        {/* <div>
        <div className="App">
            <h1>Text editer</h1>
<ReactQuill
placeholder="write something amazing..."
modules={App.modules}
formats={App.modules}
onChange={handleBody}
value={body}
/>
</div>
        </div> */}




        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Submit Issue
          </button>
        </div>
      </form>
    </div>
  );
};



    // App.modules={
    //     toolbar:[
    //     [{ header: "1" }, {header: "2" }, {header: [3, 4, 5, 6] }, { font: []}],
    //     [{size:[]}],
    //     ["bold","italic","underline","strike","blackquote"],
    //     [ {list: "ordered"},{list:"bullet"}],
    //     ["link", "image","video"],
    //     ["clean"],
    //     ["code-block"],]};
    //     App. formats = [
    //         "header",
    //         "font",
    //         "size",
    //         "bold",
    //         "italic",
    //         "underline",
    //         "strike",
    //         "blockquote",
    //         "list",
    //         "bullet",
    //         "link",
    //         "image",
    //         "video",
    //         "code-block"];

export default RiseIssue;

// {
//     App.modules={
//         toolbar:[{ header: "1" }, {header: "2" }, {header: [3, 4, 5, 6] }, { font: []}],
//         [{size:[]}],
//         ["bold","italic","underline","strike",blackquote"],
        // [ {list: "ordered"},{list:"bullet"}],
        // ["link", "image","video"],
        // ["clean"],
        // ["code-block"],]};
        // App. formats = [
        //     "header",
        //     "font",
        //     "size",
        //     "bold",
        //     "italic",
        //     "underline",
        //     "strike",
        //     "blockquote",
        //     "list",
        //     "bullet",
        //     "link",
        //     "image",
        //     "video",
        //     "code-block"];
// }
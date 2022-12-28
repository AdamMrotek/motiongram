import ProgressBar from "./ProgressBar";
import React, { useState } from "react";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const changeHandler = (e) => {
    let selected = e.target.files[0];
    console.log(e.target.files[0].type);
    const allowedTypes = ["image/png", "image/jpeg"];
    if (selected && allowedTypes.includes(selected.type)) {
      setError(null);
      setFile(selected);
    } else {
      setFile(null);
      setError("Please select image in PNG or JPEG formats");
    }
  };

  return (
    <form>
      <input type="file" onChange={changeHandler} />
      <div className="output">
        {error && <div>{error}</div>}

        {file && <div>{file.name}</div>}
      </div>
      {file && <ProgressBar file = {file} setFile={setFile} />}
    </form>
  );
};
export default UploadForm;

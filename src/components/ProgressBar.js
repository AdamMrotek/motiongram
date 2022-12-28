import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import "./ProgressBar.css";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);
  console.log(progress, url);
  useEffect(() => {
    console.log("URL", url);
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);
  return <div className="progress-bar" style={{ width: progress + "%" }}></div>;
};
export default ProgressBar;

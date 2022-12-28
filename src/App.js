import React from "react";
import { motion } from "framer-motion";
import "./styles.css";
import UploadForm from "./components/UploadForm";
import ImageGrid from "./components/ImageGrid.js";

export default function App() {
  return (
    <div className="app">
      <UploadForm />
      <ImageGrid />
    </div>
  );
}


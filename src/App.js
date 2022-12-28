import React from "react";
import { motion } from "framer-motion";
import "./styles.css";
import UploadForm from "./components/UploadForm";

export default function App() {
  return (
    <div className="app">
      <UploadForm />
    </div>
  );
}

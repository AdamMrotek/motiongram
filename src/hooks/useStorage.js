import { useState, useEffect } from "react";
import { projectStorage, projectFirestore } from "../firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {
  collection,
  addDoc,
  Timestamp,
  serverTimestamp
} from "firebase/firestore";
const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    //references
    const storageRef = ref(projectStorage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    const collectionRef = collection(projectFirestore, "images");

    uploadTask.on(
      "state_change",
      (snap) => {
        let procentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(procentage);
      },
      (err) => {
        setError(err);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setUrl(downloadURL);
          addDoc(collectionRef, {
            url: downloadURL,
            createdAt: serverTimestamp()
          });
        });
      }
    );
  }, [file]);
  return { progress, url, error };
  useEffect(() => {
    console.log("URL", url);
  }, [url]);
};
export default useStorage;

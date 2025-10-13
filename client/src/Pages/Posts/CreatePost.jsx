import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserContext from "../../components/UserContext";
import styles from "../../Styles/CreatePost.module.css"; // Import custom CSS module

const CreatePost = () => {
  const [name, setName] = useState("");
  const [caption, setCaption] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const { userEmail } = useContext(UserContext);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const addUserData = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("caption", caption);
    formData.append("description", description);
    formData.append("email", userEmail);
    selectedFiles.forEach((file) => {
      formData.append("photos", file);
    });

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      const res = await axios.post(
        "https://aurore-latest.onrender.com/posts/register",
        formData,
        config
      );

      if (res.status === 200) {
        navigate("/main");
      } else {
        alert("Error");
      }
    } catch (error) {
      console.error("Error adding user data:", error);
      alert("Error adding user data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUserDetails(JSON.parse(loggedInUser));
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.heading}>Upload Your Image</h1>
        <form onSubmit={addUserData} className={styles.form}>
          <div className={styles.formGroup}>
            <div className={styles.leftdiv}>
              <h3>Title</h3>
              <h3>Caption</h3>
              <h3>Description</h3>
              <h3>Upload Image</h3>
            </div>
            <div className={styles.rightdiv}>
              <input
                type="text"
                id="name"
                className={styles.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <input
                type="text"
                id="caption"
                className={styles.input}
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                required
              />

              <input
                id="description"
                className={styles.input}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />

              <input
                type="file"
                id="file"
                className={styles.input}
                multiple
                onChange={handleFileChange}
                required
              />

            </div>
          </div>
          <button
            className={styles.submitButton}
            type="submit"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;

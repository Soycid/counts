import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import axios from "axios";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const Uploader = () => {
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();
  let requestCompleted = false;

  /**
   * handleOnChange
   * @description Triggers when the file input changes (ex: when a file is selected)
   */

  function handleOnChange(changeEvent) {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
  }

  /**
   * handleOnSubmit
   * @description Triggers when the main form is submitted
   */

  async function handleOnSubmit(event) {
    const form = event.currentTarget;
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === "file"
    );
    event.preventDefault();
    console.log("fileInput", fileInput);

    const formData = new FormData();
    for (const file of fileInput.files) {
      formData.append("file", file);
    }
    formData.append("upload_preset", "my-uploads");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dyofebyjd/image/upload",
      {
        method: "POST",
        body: formData,
      }
    ).then((res) => res.json());
    console.log("res", res.secure_url);
    //document.location.href = 'recieve?'+res.secure_url;
    //downloadFile(res.secure_url, 'download');
    //
    //request upscale and then redirect

    requestCompleted = true;
    //window.location.replace(tempUpscale);
    // console.log('tempUpscale', tempUpscale);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Image Uploader</title>
        <meta name="description" content="Upload your image to Cloudinary!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>📜 Notes Upload 📜</h1>
        {requestCompleted && <h1>{}</h1>}
        <p className={styles.description}>Upload your notes to the cloud :).</p>

        <form
          className={styles.form}
          method="post"
          onChange={handleOnChange}
          onSubmit={handleOnSubmit}
        >
          <p>
            <input type="file" name="file" />
          </p>
          <div className="image_container">
            <img src={imageSrc} />
            <br />
            {imageSrc && !uploadData && (
              <p>
                <button>Upload Files</button>
              </p>
            )}
          </div>

          {uploadData && (
            <code>
              <pre>{JSON.stringify(uploadData, null, 2)}</pre>
            </code>
          )}
        </form>
      </main>
    </div>
  );
};

export default Uploader;

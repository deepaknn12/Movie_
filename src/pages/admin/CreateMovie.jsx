import React, { useState } from 'react';
import logo from "../../images/logo.png";
import { Link } from 'react-router-dom';

const CreateMovie = () => {
  const [imageFile, setImageFile] = useState(null);  // Store file object here
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [video, setVideo] = useState("");

  function getImage(e) {
    const file = e.target.files[0];
    let temURL = URL.createObjectURL(file);
    setImageFile(file);  // Set the file object in state
    document.getElementById("realImg").src = temURL;
    document.querySelector(".uploadImg > h2").style.display = "none";
  }

  return (
    <>
      <div className="nav flex items-center justify-between h-[90px] bg-[#18181B] px-[50px]">
        <img className="w-[150px] cursor-pointer" src={logo} alt="" />
      </div>
      <div className="flex">
        <div className="sideBar w-[20vw] bg-[#18181B] p-[10px]" style={{ height: "calc(100vh - 90px)" }}>
          <div className="w-full flex items-center justify-center"><Link>Add new movie</Link></div>
        </div>

        <form className="p-[15px]">
          <h3 className="text-2xl">Add a new movie</h3>

          <div className="inputBox w-[50vw] mt-5">
            <input required onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder="Movie name" />
          </div>

          <div className="inputBox w-[50vw] mt-5">
            <input required onChange={(e) => setVideo(e.target.value)} value={video} type="text" placeholder="YouTube Video URL" />
          </div>

          <div className="inputBox w-[50vw] mt-5">
            <textarea required onChange={(e) => setDesc(e.target.value)} value={desc} placeholder="Movie Description"></textarea>
          </div>

          <input type="file" id="file" onChange={getImage} hidden />
          <div onClick={() => document.getElementById("file").click()} className="uploadImg overflow-hidden bg-[#27272A] mt-5 flex items-center justify-center w-[250px] h-[300px] rounded-lg cursor-pointer">
            <img id="realImg" alt="" />
            <h2>Image</h2>
          </div>

          <button className="btnBlue mt-5 mb-5 w-[140px]">Add Movie</button>
        </form>
      </div>
    </>
  );
};

export default CreateMovie;

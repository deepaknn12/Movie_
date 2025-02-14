import React from "react";
import Navbar from "../components/Navbar";
import Avatar from "react-avatar";

function SingleMovie() {
  return (
    <>
      <Navbar />
      <div className="px-[100px]">
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/FoWeJ4wtLUQ?si=xgMjG-YbUAyh-iAZ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <h3 className="text-2xl mt-4 mb-2">CID</h3>
        <p className="text-gray-400">THIS IS AN INDIAN TV SHOW</p>

        <h3 className="text-2xl mt-5 mb-3">Comments</h3>
        <input
          type="text"
          className="mb-4 border-b-[1px] w-[70%] p-[5px] pl-0 border-b-[#fff] bg-transparent outline-0"
          placeholder="Add a comment..."
        />

        <div className="comments w-[70%] space-y-4">
          {/* Comment 1 */}
          <div className="comment w-full flex items-center p-[10px] bg-[#27272A] rounded-lg cursor-pointer">
            <Avatar name="User Name" size="50" round="50%" className="cursor-pointer mr-3" />
            <div>
              <p className="text-gray-400 text-[14px]">@userName</p>
              <p>This is very amazing</p>
            </div>
          </div>

          {/* Comment 2 */}
          <div className="comment w-full flex items-center p-[10px] bg-[#27272A] rounded-lg cursor-pointer">
            <Avatar name="User Name" size="50" round="50%" className="cursor-pointer mr-3" />
            <div>
              <p className="text-gray-400 text-[14px]">@userName</p>
              <p>Great content! Really enjoyed watching.</p>
            </div>
          </div>

          {/* Comment 3 */}
          <div className="comment w-full flex items-center p-[10px] bg-[#27272A] rounded-lg cursor-pointer">
            <Avatar name="User Name" size="50" round="50%" className="cursor-pointer mr-3" />
            <div>
              <p className="text-gray-400 text-[14px]">@userName</p>
              <p>Very informative and well explained!</p>
            </div>
          </div>

          {/* Comment 4 */}
          <div className="comment w-full flex items-center p-[10px] bg-[#27272A] rounded-lg cursor-pointer">
            <Avatar name="User Name" size="50" round="50%" className="cursor-pointer mr-3" />
            <div>
              <p className="text-gray-400 text-[14px]">@userName</p>
              <p>Love this, keep posting more!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleMovie;
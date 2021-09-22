import React, { useEffect, useRef, useState } from "react";
import "./ReactionBar.scss";

const ReactionBar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHoveredLike, setIsHoveredLike] = useState(false);
  const [isHoveredLove, setIsHoveredLove] = useState(false);
  const [isHoveredAppreciate, setIsHoveredAppreciate] = useState(false);

  const node = useRef();

  const likeClicked = () => {
    console.log("hello");
  };

  const addEmojiClick = (e) => {
    setIsClicked(!isClicked);
  };

  const handleOutsideClick = (e) => {
    if (!node.current.contains(e.target)) {
      setIsClicked(false);
      setIsHoveredLike(false);
      setIsHoveredLove(false);
      setIsHoveredAppreciate(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const isHoveredLikeEnter = () => {
    setIsHoveredLike(true);
  };

  const isHoveredLikeLeave = () => {
    setIsHoveredLike(false);
  };

  const isHoveredLoveEnter = () => {
    setIsHoveredLove(true);
  };

  const isHoveredLoveLeave = () => {
    setIsHoveredLove(false);
  };

  const isHoveredAppreciateEnter = () => {
    setIsHoveredAppreciate(true);
  };

  const isHoveredAppreciateLeave = () => {
    setIsHoveredAppreciate(false);
  };

  return (
    <div ref={node}>
      <div className="emoji-wrapper">
        {isClicked && (
          <div className="bar-wrapper">
            {isHoveredLike && <span className="tooltip">Like</span>}
            <img
              className="emoji-item"
              src="like-emoji.png"
              alt="like"
              loading="lazy"
              onMouseEnter={() => isHoveredLikeEnter()}
              onMouseLeave={() => isHoveredLikeLeave()}
              onClick={() => likeClicked()}
              value="like"
            />
            {isHoveredLove && (
              <span className="tooltip tooltip-love">Love</span>
            )}
            <img
              className="emoji-item"
              src="love-emoji.png"
              alt="love"
              loading="lazy"
              onMouseEnter={() => isHoveredLoveEnter()}
              onMouseLeave={() => isHoveredLoveLeave()}
              value="love"
            />
            {isHoveredAppreciate && (
              <span className="tooltip tooltip-appreciate">Appreciate</span>
            )}
            <img
              className="emoji-item"
              src="appreciate-emoji.png"
              alt="appreciate"
              loading="lazy"
              onMouseEnter={() => isHoveredAppreciateEnter()}
              onMouseLeave={() => isHoveredAppreciateLeave()}
              value="appreciate"
            />
          </div>
        )}
        <div className="image-wrapper" onClick={(e) => addEmojiClick(e)}>
          <img src="add-emoji.png" alt="add-emoji" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default ReactionBar;

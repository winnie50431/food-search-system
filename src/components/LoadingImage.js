import React from "react";
import Loading from "../Images/loading.gif";

const LoadingImage = () => {
  return (
    <div className="loadingImage">
      <img src={Loading} alt="" />
      <p>資料下載中...請稍後</p>
    </div>
  );
};

export default LoadingImage;

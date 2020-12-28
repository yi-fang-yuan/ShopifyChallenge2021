import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Upload from "./component/Upload";
import ImageCarousel from "./component/ImageCarousel";
import ImageBoard from "./component/ImageBoard";
function App() {
  return (
    <div className="container">
    {/* <ImageCarousel /> */}
    <Upload />
    <ImageBoard />
    </div>
    );
}
export default App;
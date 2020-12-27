import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Upload from "./component/Upload";
import ImageCarousel from "./component/ImageCarousel";
function App() {
  return (
    <div className="container">
    <ImageCarousel />
    <Upload />
    </div>
    );
}
export default App;
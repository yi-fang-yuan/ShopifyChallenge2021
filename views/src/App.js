import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Upload from "./component/Upload";
import ImageBoard from "./component/ImageBoard";
function App() {
  return (
    <div className="container">
    <Upload />
    <ImageBoard />
    </div>
    );
}
export default App;
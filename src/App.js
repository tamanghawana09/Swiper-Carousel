import "./App.css";
import ImageSlider from "./ImageSlider";
import one from "./images/1.png";
import two from "./images/2.png";
import three from "./images/3.png";

function App() {
  const images = [
    one,
    two,
    three,
  ];
  
  return (
    <div className="App">
      <div style={{padding: "10px"}}>
        <ImageSlider images={images} />
      </div>
    </div>
  );
}

export default App;
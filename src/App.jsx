import "./App.css";
import Button from "./components/Button";
import ImageFrame from "./components/ImageFrame";

function App() {
  return (
    <>
      <div>
        <h1>Hello world!</h1>
        <Button />
        <ImageFrame
          src="https://images.unsplash.com/photo-1589656966895-2f33e7653819"
          alt="a polar bear waves at the photographer"
          caption="This polar bear says hello!"
        />
        <ImageFrame
          src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7"
          alt="a panda eats bamboo"
          caption="This panda is too busy to say hello."
        />
      </div>
    </>
  );
}

export default App;

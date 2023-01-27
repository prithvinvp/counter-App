import "./display.css";

function display(props) {
  return (
    <p className="text-9xl text-center my-12 border-4 text-black py-3 rounded-2xl">
      {props.name}
    </p>
  );
}

export default display;

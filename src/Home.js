import "./stylesheets/Home.css";

const Home = (prop) => {
  return (
    <div className="selectCardMenu">
      <select name="" id="card-select" onChange={(e) => prop.test(e)}>
        <option value="Basic Card">Basic Card</option>
        <option value="Text over image">Basic w/Text over Media</option>
        <option value="">Basic w/Header</option>
        <option value="">Basic w/Only Buttons</option>
        <option value="OnlyIconCard">Basic w/only Icons</option>
        <option value="HorizontalImageText">Horizontal Image and Text</option>
      </select>
    </div>
  );
};

export default Home;

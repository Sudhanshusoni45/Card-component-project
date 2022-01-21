import "../stylesheets/HorizontalImageText.css";

const HorizontalImageText = () => {
  return (
    <div className="horizontal-image-text">
      <div className="card">
        <div className="upper">
          <img src={require("../images/Changing-planet.jpg")} alt="" />

          <div className="upperContent">
            <h2 className="title">Our Changing Planet</h2>
            <h3 className="author">by Kurt Wagner</h3>
          </div>
        </div>
        <div className="lower">
          <div className="lowerLinks">
            <button>
              <small>READ</small>
            </button>
            <button>
              <small>BOOKMARK</small>
            </button>
          </div>
          <div className="icons">
            <img src={require("../images/love.png")} alt="" />
            <img src={require("../images/share.png")} alt="" />
            <img src={require("../images/dots.png")} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalImageText;

import "../stylesheets/OnlyIconCard";

const OnlyIconCard = () => {
  return (
    <div className="basic-card">
      <div className="card">
        <div className="upperSection">
          <img
            src={require("../images/Changing-planet.jpg")}
            alt=""
            className="header-image"
          />

          <div className="heading">
            <h2 className="title">Our changing planet</h2>
            <h3 className="author">by Kurt Wagner</h3>
          </div>
          <div className="details">
            <p>
              Visit ten places on our planet that are undergoing the biggest
              changes today.
            </p>
          </div>
        </div>
        <div className="lower">
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

export default OnlyIconCard;

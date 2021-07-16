import "main-section.styles.scss";
import { withRouter } from "react-router-dom";
import studioBag from "../../assests/studio-bag.png";

const MainSection = ({ history }) => {
  return (
    <div className="main-section-container">
      <div className="main-section-middle">
        <div className="ms-m-image">
          <img src={studioBag} alt="studio bag" />
        </div>
        <div className="ms-m-description"></div>
      </div>
    </div>
  );
};

export default MainSection;

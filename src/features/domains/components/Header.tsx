import Button from "@mui/material/Button";
import { AiOutlinePlus } from "react-icons/ai";
import "./Header.css";

type HeaderProps = {
  onAddBtnClick: () => void;
};
const Header: React.FC<HeaderProps> = function (props: HeaderProps) {
  return (
    <div className="header">
      <div>
        <h2>Dasboard / domains</h2>
        <h1>Domains</h1>
      </div>
      <div>
        <Button
          variant="outlined"
          startIcon={<AiOutlinePlus />}
          onClick={props.onAddBtnClick}
        >
          Buy Domain
        </Button>
      </div>
    </div>
  );
};

export default Header;

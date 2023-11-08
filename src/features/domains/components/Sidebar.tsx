import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import {
  box,
  activity,
  home,
  nimbus_marketing,
  shoppingbag,
  settings,
  users,
} from "../../../assets/assets";
import "./Sidebar.css";

const Sidebar: React.FC = function () {
  return (
    <div className="nav">
      <Stack direction="column" spacing={1}>
        <IconButton>
          <img src={box} alt="Box icon" />
        </IconButton>
        <IconButton>
          <img src={users} alt="Domains icon" />
        </IconButton>
        <IconButton>
          <img src={home} alt="Home icon" />
        </IconButton>
        <IconButton>
          <img src={activity} alt="Activity icon" />
        </IconButton>
        <IconButton>
          <img src={nimbus_marketing} alt="Marketing icon" />
        </IconButton>
        <IconButton>
          <img src={shoppingbag} alt="`Shoppingbag icon" />
        </IconButton>
        <IconButton>
          <img src={settings} alt="Settings icon" />
        </IconButton>
      </Stack>
    </div>
  );
};

export default Sidebar;

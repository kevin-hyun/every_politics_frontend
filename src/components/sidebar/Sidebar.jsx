import "./sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import GradeIcon from "@mui/icons-material/Grade";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <HomeIcon className="sidebarIcon" />
              Home
            </li>

            <li className="sidebarListItem">
              <GradeIcon className="sidebarIcon" />
              Like
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./Header.css";
import PrintIcon from "@mui/icons-material/Print";
import DuoIcon from "@mui/icons-material/Duo";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

export default function Header(props) {
  return (
    <div className="header">
      <img
        src={require("./googledoc.png")}
        alt="doc"
        width="40px"
        height="50px"
       />
        <div>
            <div className="input-div">
              <input type="text" placeholder="Google Doc" />
            </div>
            <div className="name-div">
              <p>
                <PopupState variant="popover" popupId="demo-popup-menu">
                  {(popupState) => (
                    <React.Fragment>
                      <Button variant="contained" {...bindTrigger(popupState)}>
                        File
                      </Button>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem onClick={props.handlePrint}>Print</MenuItem>
                    <MenuItem onClick={popupState.close}>Profile</MenuItem>
                    <MenuItem onClick={popupState.close}>My account</MenuItem>
                    <MenuItem onClick={popupState.close}>Logout</MenuItem>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
          </p>
          <p>
            <Button> Edit</Button>
          </p>
          <p>
            <Button> View</Button>
          </p>
          <p>
            <Button> Tool</Button>
          </p>
          <p>
            <Button> Help</Button>
          </p>
        </div>
      </div>
      <div className="icon-nav">
        <p>
          <PrintIcon onClick={props.handlePrint} />{" "}
        </p>
        <p>
          <DuoIcon onClick={() => alert("Join a Call")} />
        </p>
        <p>
          <InsertCommentIcon onClick={() => alert("Open Comment History")} />
        </p>
      </div>
    </div>
  );
}

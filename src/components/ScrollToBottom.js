import React from "react";
import { arrowDownCircleOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

const ScrollToBottom = (props) => {
  return (
    <div className="scroll-bottom">
      <IonIcon
        icon={arrowDownCircleOutline}
        className="scrollBottom"
        onClick={props.scrollBottom}
        style={{
          color: "dimgray",
          width: "40px",
          marginRight: "35px",
          height: 40,
          display: props.showScroll ? "flex" : "none",
        }}
      />
    </div>
  );
};

export default ScrollToBottom;

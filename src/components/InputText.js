import React, { useState, useEffect } from "react";
import { IonTextarea, IonItem, IonIcon, IonButton } from "@ionic/react";
import { send } from "ionicons/icons";

const InputText = (props) => {
  const [text, setText] = useState();

  const autosize = () => {
    const textArea = document.getElementsByTagName("textarea")[0];
    if (textArea) {
      textArea.style.overflow = "hidden";
      textArea.style.height = "auto";
      textArea.style.height = textArea.scrollHeight + "px";
    }
  };
  const handleReset = () => {
    setText("");
  };
  useEffect(() => {
    autosize();
  }, [text]);

  return (
    <IonItem class="input-Text ion-align-items-center">
      <IonTextarea
        id="textarea"
        placeholder="Enter message..."
        value={text}
        onIonChange={(event) => setText(event.target.value)}
      ></IonTextarea>
      <IonButton
        style={{ height: "50px", width: "50px" }}
        shape="round"
        onClick={() => {
          props.sendMessage(text);
          handleReset();

        }}
        onMouseDown={(event) => event.preventDefault()}
      >
        <IonIcon
          slot="icon-only"
          icon={send}
        />
      </IonButton>
    </IonItem>
  );
};

export default InputText;

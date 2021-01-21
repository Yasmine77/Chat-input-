import React from "react";
import { IonPage } from "@ionic/react";
import ChatMeaasgeContainer from "../pages/ChatMeaasgeContainer";

import "./Tab1.css";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <ChatMeaasgeContainer />
    </IonPage>
  );
};

export default Tab1;

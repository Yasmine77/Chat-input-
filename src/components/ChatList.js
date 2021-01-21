import React from "react";
import { IonList, IonAvatar } from "@ionic/react";
import ChatBubble from "./../components/ChatBubble";
import styled from "styled-components";

const ChatList = (props) => {
  const Avatar = styled(IonAvatar)`
  float: right !important;
  width: 25px !important;
  height: 25px !important
  `;
  return (
    <IonList class="msg-list sender">
      {props.messages &&
        props.messages.map((item, id) => (
          <div key={id}>
            <div className="clear"></div>
            <Avatar className="ion-avatar">
              <img src="https://imagizer.imageshack.com/img924/9468/vFNu9n.jpg" />
            </Avatar>
            <ChatBubble message={item.message} />

          </div>
        ))}
    </IonList>
  );
};

export default ChatList;

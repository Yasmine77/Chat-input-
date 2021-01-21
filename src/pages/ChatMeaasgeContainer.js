import React, { useState, useEffect } from "react";
import {
  IonContent,
  IonToolbar,
  IonHeader,
  IonFooter,
  IonAvatar,
  IonLabel
} from "@ionic/react";

import InputText from "../components/InputText";
import ChatList from "../components/ChatList";
import styled from "styled-components";
import ScrollToBottom from "./../components/ScrollToBottom";
import SearchComponent from "./../components/SearchComponent";

const ChatMeaasgeContainer = (props) => {
  const Img = styled.img`
    width: 50px !important;
    height: 50px !important;
  `;
  const Label = styled(IonLabel)`
  fontWeight: bold 
  `;
  const [messages, setMessages] = useState([]);
  const [showScroll, setShowScroll] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [scrollTop, setScrollTop] = useState(0);

  const sendMessage = (text) => {
    if (!text.trim()) {
      return;
    }
    setMessages((prevState) => [...prevState, { message: text }]);
  };

  function getContent() {
    return document.querySelector("ion-content");
  }

  function scrollBottom() {
    getContent().scrollToBottom(500);
  }

  const checkScrollBottom = (event) => {
    var heightList = document.querySelector("ion-list").scrollHeight
    var scrollTop = event.detail.scrollTop
    setShowScroll(heightList > 476 && scrollTop == 0); // show scroll-buttom when scroll in top of list
  };

  useEffect(() => {
    setSearchText('')
    scrollBottom();
  }, [messages]);

  return (
    <>
      <IonHeader className="header">
        <IonToolbar>
          <div className="ion-header">
            <IonAvatar className="ion-avatar">
              <Img src="https://imagizer.imageshack.com/img924/9468/vFNu9n.jpg" />
            </IonAvatar>
            <Label >Yasmine MEJRI</Label>
          </div>
        </IonToolbar>
        <SearchComponent searchText={searchText} setSearchText={setSearchText} />
      </IonHeader>
      <IonContent
        class="IonContent"
        scrollEvents={true}
        onIonScroll={(event) => checkScrollBottom(event)}
        fullscreen
      >
        <ChatList messages={messages.filter(el => el.message.toUpperCase().trim().indexOf(searchText && searchText.toUpperCase().trim()) > -1)} />
      </IonContent>
      <IonFooter className="ion-no-border">
        <ScrollToBottom showScroll={showScroll} scrollBottom={scrollBottom} />
        <InputText sendMessage={sendMessage} />
      </IonFooter>
    </>
  );
};

export default ChatMeaasgeContainer;

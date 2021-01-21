import React from "react";

const ChatBubble = (props) => {

  return (
    <div className="messenger-container">
      <p>{props.message}</p>
    </div>
  );
};

export default ChatBubble;

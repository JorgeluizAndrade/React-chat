import { useMultiChatLogic, MultiChatSocket, MultiChatWindow  } from "react-chat-engine-advanced";
import PropTypes from "prop-types";

const ChatPage = (props) => {
  ChatPage.propTypes = {
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
      secret: PropTypes.string.isRequired,
    }).isRequired,
  };
  const chatProps = useMultiChatLogic('99ae3832-f347-4610-bafa-040c4f5cd21b', props.user.username, props.user.secret) 

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} 
        style={{height:"100%"}}
        />
    </div>
  )
}

export default ChatPage
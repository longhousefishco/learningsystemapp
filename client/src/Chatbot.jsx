import { useState } from "react";
import ai from "./assets/chatbot.svg?web";

const Chatbot = () => {
  // State variables
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  // Function that will toggle chatbox visibility
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle input field changes (from the user)
  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  // Function to handle sending a message
  const handleSendMessage = (e) => {
    e.preventDefault();
    // Used .trim to remove whitespace from beginning and end of a string
    if (inputMessage.trim() !== "") {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { user: inputMessage, type: "user" },
      ]);

      // *** BLAISE CHATBOT LOGIC INPUT *** ----------------------------------------------------------

      // Placeholder for Blaise chatbox logic
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { bot: "Bot response: Your message is received!", type: "bot" },
      ]);
      // *** END OF BLAISE CHATBOX LOGIC *** ------------------------------------------------------------
      setInputMessage("");
    }
  };

  return (
    <div className="relative">
      <div
        className={`${
          !isOpen
            ? "hidden"
            : "flex flex-col items-center gap-5 fixed bottom-16 right-0 mr-5 mb-12 p-2 rounded-lg shadow-xl bg-sky-700"
        }`}
      >
        <div>
          <div
            className={`flex flex-col gap-1 bg-sky-900 ${
              chatMessages.length !== 0 && `p-4`
            } rounded`}
          >
            {chatMessages.map((message) => (
              <>
                <div className="bg-sky-300 text-stone-800 rounded px-1 shadow-md">
                  {message.user}
                </div>
                <div className="bg-sky-950 rounded px-1 shadow-md">
                  {message.bot}
                </div>
              </>
            ))}
          </div>
          <form
            onSubmit={handleSendMessage}
            className="flex justify-between gap-2 pt-5"
          >
            <input
              type="text"
              placeholder="Ask"
              value={inputMessage}
              onChange={handleInputChange}
              className="w-full rounded px-1 bg-sky-200/60 placeholder:text-black text-black"
            />
            <button
              type="submit"
              className="bg-stone-800 rounded px-2 shadow-md"
            >
              Send
            </button>
          </form>
        </div>
        <button className={"bg-stone-800 shadow rounded w-full"}>
          {isOpen && "Chat"}
        </button>
      </div>
      <img
        src={ai}
        alt="ai"
        onClick={toggleChatbot}
        className="fixed bottom-0 right-0 m-5 drop-shadow-xl cursor-pointer"
      />
    </div>
  );
};

export default Chatbot;

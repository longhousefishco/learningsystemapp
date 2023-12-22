import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Landing from "./Landing";
import { useState } from "react";
import Modal from "./Modal";

function App() {
  const [openModal, setOpenModal] = useState(false);

  const handleToggleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <div id="main" className="mx-auto max-w-7xl h-[100dvh] text-stone-200">
      <Header onToggleModal={handleToggleModal} />
      {openModal && <Modal />}
      <Landing />
      <Footer />
    </div>
  );
}

export default App;

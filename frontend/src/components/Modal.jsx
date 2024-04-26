/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
const ModalContext = createContext();
const Modal = ({ children }) => {
  const [openModalName, setOpenModalName] = useState("");

  const open = setOpenModalName;

  const close = () => setOpenModalName("");

  return (
    <ModalContext.Provider value={{ openModalName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
};

const Open = ({ name: openWindowName, children }) => {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(openWindowName) });
};
const Window = ({ windowName, children }) => {
  const { close, openModalName } = useContext(ModalContext);

  if (windowName !== openModalName) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 transition-all duration-300">
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-4">
        {cloneElement(children, { onCloseModal: close })}
      </div>
    </div>
  );
};
Modal.Open = Open;

Modal.Window = Window;
export default Modal;

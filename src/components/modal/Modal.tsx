import { useEffect } from "react";
import "../../assets/styles/modal/modal.scss";
import Close from "../../assets/svg/close.svg";
import MySVG from "../../assets/svg/Closenew";

type ModalProps = {
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const modal = document.getElementById("modal");
      if (modal && !modal.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div className='modal-overlay'>
      <div className='modal' id='modal'>
        <div className='close-button' onClick={onClose}>
          {/* <img src={Close} alt='close' className='close-button-svg' /> */}
          <MySVG />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;

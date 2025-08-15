import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function EditableSection() {
  const [buttons, setButtons] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newButtonText, setNewButtonText] = useState("");
  const [newButtonAction, setNewButtonAction] = useState("");
 

 
  const openModal = () => {
    setModalIsOpen(true);
  };

 
  const closeModal = () => {
    setModalIsOpen(false);
    setNewButtonText("");
    setNewButtonAction("");
   
  };

  
  const addButton = () => {
    if (newButtonText && newButtonAction) {
      setButtons([
        ...buttons,
        {
          label: newButtonText,
          action: newButtonAction,
         
        },
      ]);
      closeModal();
    } else {
      alert("Please enter both button text and action.");
    }
  };

  return (
    <div className="add-btun">
      <div>
        <button className="btnuuu2" onClick={openModal}>
          Add Button
        </button>

        {buttons.map((btn, index) => (
          <button
            className="btnuuu"
            key={index}
            onClick={() => window.open(btn.action)}
            
          >
            {btn.label}
          </button>
        ))}
      </div>

      <Modal
        className="custom-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <h2 className="modal-title">Add New Button</h2>
        <form
          className="modal-form"
          onSubmit={(e) => {
            e.preventDefault();
            addButton();
          }}
        >
          <div className="form-group">
            <label className="form-label">Button Text:</label>
            <input
              type="text"
              className="form-input"
              value={newButtonText}
              onChange={(e) => setNewButtonText(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">
              Action URL (e.g., tel:1234567890):
            </label>
            <input
              type="text"
              className="form-input"
              value={newButtonAction}
              onChange={(e) => setNewButtonAction(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-add">
            Add Button
          </button>
          <button type="button" className="btn-close" onClick={closeModal}>
            Close
          </button>
        </form>
      </Modal>
    </div>
  );
}

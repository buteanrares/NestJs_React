import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";

const Invoices = () => {
  const dispatch = useDispatch();
  const invoices = useSelector((state) => state.invoices.invoices); // select invoices from state

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/invoices")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "SET_INVOICES", payload: data }));
  }, [dispatch]);

  const openInvoiceModal = (invoice) => {
    fetch(`/invoices/${invoice.id}`)
      .then((response) => response.json())
      .then((data) => setSelectedInvoice(data));

    setModalIsOpen(true);
  };

  const closeInvoiceModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      {invoices.map((invoice) => (
        <div key={invoice.id} className="flex-shrink-0">
          <h2 className="text-xl font-medium text-black">{invoice.title}</h2>
          <button
            onClick={() => openInvoiceModal(invoice)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            View Details
          </button>
        </div>
      ))}
      <Modal isOpen={modalIsOpen} onRequestClose={closeInvoiceModal}>
        <h2 className="text-2xl font-bold mb-2">{selectedInvoice?.title}</h2>
        <button
          onClick={closeInvoiceModal}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default Invoices;

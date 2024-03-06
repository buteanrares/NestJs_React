import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";

const Bills = () => {
  const dispatch = useDispatch();
  const bills = useSelector((state) => state.bills.bills);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedBill, setSelectedBill] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/bills")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "SET_BILLS", payload: data }));
  }, [dispatch]);

  const openBillModal = (bill) => {
    fetch(`/bills/${bill.id}`)
      .then((response) => response.json())
      .then((data) => setSelectedBill(data));

    setModalIsOpen(true);
  };

  const closeBillModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      {bills.map((bill) => (
        <div key={bill.id} className="flex-shrink-0">
          <h2 className="text-xl font-medium text-black">{bill.title}</h2>
          <button
            onClick={() => openBillModal(bill)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            View Details
          </button>
        </div>
      ))}
      <Modal isOpen={modalIsOpen} onRequestClose={closeBillModal}>
        <h2 className="text-2xl font-bold mb-2">{selectedBill?.title}</h2>
        <button
          onClick={closeBillModal}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default Bills;

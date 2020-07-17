import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './home.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, {
   
    useState,
  } from 'react';

function Example() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow} >
          Hi Sameer!
        </Button>
        <div className="modal">
            <div className="modal-content">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton >
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Good Work!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" className="close-button" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
        </div>
      </>
    );
  }
  
  export default  Example;
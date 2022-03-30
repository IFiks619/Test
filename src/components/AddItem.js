import React from "react";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

function AddItem({onCreate}) {
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [count, setCount] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    function addItem(){
        if(name && count && height && width && weight){
            onCreate(name, count, width, height, weight)
        }
        setShow(false)
    }

    return (
        <div>
            <Button variant="primary" onClick={handleShow} style={{width:'100%', fontSize:'20px', margin:'10px'}}>
                Add new Item
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create new item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Item name</Form.Label>
                            <Form.Control
                                placeholder="Item name"
                                autoFocus
                                value = {name}
                                onChange={e => setName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Item count</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Item count"
                                value = {count}
                                onChange={e => setCount(e.target.value)}

                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Item width</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Item width"
                                value = {width}
                                onChange={e => setWidth(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Item height</Form.Label>
                            <Form.Control
                                placeholder="Item height"
                                type="number"
                                value = {height}
                                onChange={e => setHeight(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Item weight</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Item weight"
                                value = {weight}
                                onChange={e => setWeight(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addItem}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default AddItem
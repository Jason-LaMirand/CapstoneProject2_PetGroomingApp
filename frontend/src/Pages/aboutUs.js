import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';



function AboutUs() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div class="container">
            <Card>
                <Card.Img variant="top" src="https://lirp.cdn-website.com/a260dfb94a6a4869b9b2ba89c8894bec/dms3rep/multi/opt/231-960w.jpg" />
                <Card.Header>Our Philosophy</Card.Header>
                <Card.Body>
                    <Card.Text>
                        We're in this business because we love animals and their humans.
                        We believe in going the extra mile to keep you and your pets happy and healthy.
                        We aim for loyal lifetime customers, not just a one-time transactions.
                        (Of course, if you’re in town temporarily and need a fur baby spa day, then we are glad to help!)
                        We take care to use environmentally-friendly products for all of our services.
                        We choose shampoos and other products that are not only safer for the environment, but safer for your pets health, and your health.
                        We are committed to creating a safe, caring environment that brings out the best in you, your pets, and our team.
                    </Card.Text>
                    <Button variant="primary" onClick={handleShow}>
                        Contact Us
                    </Button>
                </Card.Body>
            </Card>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Write your comment here!</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    );
};

export default AboutUs;

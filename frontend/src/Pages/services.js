import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardBody, CardTitle, CardGroup } from 'reactstrap';
import './services.css';

function Services(args) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <CardGroup>
            <Card
                style={{
                    width: '18rem'
                }}>
                <img
                    alt="services"
                    top
                    width="100%"
                    height="75%"
                    src="https://petcube.com/blog/content/images/2017/07/brushing-a-dog.jpg"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        1-minute brushing
                    </CardTitle>
                    <Button color="danger" onClick={toggle}>
                        Details
                    </Button>
                    <Modal isOpen={modal} toggle={toggle} {...args}>
                        <ModalHeader toggle={toggle}>1-minute brushing</ModalHeader>
                        <ModalBody>
                            Price: $5.00 <br />
                            Duration: 15 mintues
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={toggle}>
                                Back
                            </Button>
                        </ModalFooter>
                    </Modal>
                </CardBody>
            </Card>
            <Card
                style={{
                    width: '18rem'
                }}>
                <img
                    alt="services"
                    top
                    width="100%"
                    height="75%"
                    src="https://www.allstargroomingwy.com/wp-content/uploads/2021/07/nail-trim-serv.jpg"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        Nail Trim
                    </CardTitle>
                    <Button color="danger" onClick={toggle}>
                        Details
                    </Button>
                    <Modal isOpen={modal} toggle={toggle} {...args}>
                        <ModalHeader toggle={toggle}>Nail Trimming</ModalHeader>
                        <ModalBody>
                            Price: $12.00 <br />
                            Duration: 5 mintues
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={toggle}>
                                Back
                            </Button>
                        </ModalFooter>
                    </Modal>
                </CardBody>
            </Card>
            <Card
                style={{
                    width: '18rem'
                }}>
                <img
                    alt="services"
                    top
                    width="100%"
                    height="75%"
                    src="https://cdn.woofbeach.com/wp-content/uploads/Batavia-Dog-Ear-Cleaning.jpg"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        Ear Cleaning
                    </CardTitle>
                    <Button color="danger" onClick={toggle}>
                        Details
                    </Button>
                    <Modal isOpen={modal} toggle={toggle} {...args}>
                        <ModalHeader toggle={toggle}>Ear Cleaning</ModalHeader>
                        <ModalBody>
                            Price: $8.00 <br />
                            Duration: 5 mintues
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={toggle}>
                                Back
                            </Button>
                        </ModalFooter>
                    </Modal>
                </CardBody>
            </Card>
            <Card
                style={{
                    width: '18rem'
                }}>
                <img
                    alt="services"
                    top
                    width="100%"
                    height="75%"
                    src="https://thegroomhaus.com/wp-content/uploads/2023/06/asian-fusion-doodle-sarah-drouin-3.jpg"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        Scissoring feet & pad shaving
                    </CardTitle>
                    <Button color="danger" onClick={toggle}>
                        Details
                    </Button>
                    <Modal isOpen={modal} toggle={toggle} {...args}>
                        <ModalHeader toggle={toggle}>Scissoring feet & pad shaving</ModalHeader>
                        <ModalBody>
                            Price: $15.00 <br />
                            Duration: 10 mintues
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={toggle}>
                                Back
                            </Button>
                        </ModalFooter>
                    </Modal>
                </CardBody>
            </Card>
            <Card
                style={{
                    width: '18rem'
                }}>
                <img
                    alt="services"
                    top
                    width="100%"
                    height="75%"
                    src="https://www.dogingtonpost.com/wp-content/uploads/2021/01/Butttrim-300x180.jpg"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        Sanitary trim
                    </CardTitle>
                    <Button color="danger" onClick={toggle}>
                        Details
                    </Button>
                    <Modal isOpen={modal} toggle={toggle} {...args}>
                        <ModalHeader toggle={toggle}>Sanitary trim</ModalHeader>
                        <ModalBody>
                            Price: $20.00 <br />
                            Duration: 20 mintues
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={toggle}>
                                Back
                            </Button>
                        </ModalFooter>
                    </Modal>
                </CardBody>
            </Card>
            <Card
                style={{
                    width: '18rem'
                }}>
                <img
                    alt="services"
                    top
                    width="100%"
                    height="75%"
                    src="https://www.metlifepetinsurance.com/content/dam/metlifecom/us/metlifepetinsurance/images/blog/Pet-Health/anal-gland-expression-hero-minimized.webp"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        Anal gland cleaning
                    </CardTitle>
                    <Button color="danger" onClick={toggle}>
                        Details
                    </Button>
                    <Modal isOpen={modal} toggle={toggle} {...args}>
                        <ModalHeader toggle={toggle}>Anal gland cleaning</ModalHeader>
                        <ModalBody>
                            Price: $16.00 <br />
                            Duration: 10 mintues
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={toggle}>
                                Back
                            </Button>
                        </ModalFooter>
                    </Modal>
                </CardBody>
            </Card>
            <Card
                style={{
                    width: '18rem'
                }}>
                <img
                    alt="services"
                    top
                    width="100%"
                    height="75%"
                    src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/9f7178a6fe6384169f0bfe557550b524.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        Bandana or bow
                    </CardTitle>
                    <Button color="danger" onClick={toggle}>
                        Details
                    </Button>
                    <Modal isOpen={modal} toggle={toggle} {...args}>
                        <ModalHeader toggle={toggle}>Bandana or bow</ModalHeader>
                        <ModalBody>
                            Price: $25.00 <br />
                            Duration: 5 mintues
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={toggle}>
                                Back
                            </Button>
                        </ModalFooter>
                    </Modal>
                </CardBody>
            </Card>
        </CardGroup>
    );
}

export default Services;
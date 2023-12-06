import React, { useState, useEffect, useContext } from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

import UserContext from '../UserContext';
import './myPetsCard.css';


// Shows each individual card component. Gives simple detail on each job on the list.

const myPetsCard = ({ id, petName, age, gender, spayedOrNeutered, adopted, weigh, color, img }) => {
    const { hasAddedPet, addPet } = useContext(UserContext);
    const [applied, setApplied] = useState();

    useEffect(() => {
        console.debug('MyPetCard useEffect update applied status', 'id=', id);
        setApplied(hasAddedPet(id));
    }, [id, hasAddedPet]);

    async function handleApply(evt) {
        if (hasAppliedToJob(id)) return;
        addPet(id);
        setApplied(true);
    }

    return (
        <Card key={id} className="myPetCard mb-3">
            <CardBody>
                <CardTitle>{petName}</CardTitle>
                <img src={img} />
                <CardText>Gender: {gender}</CardText>
                <CardText>Age: {age}</CardText>
                <CardText>Spayed or Neutered: {spayedOrNeutered}</CardText>
                <CardText>Adopted: {adopted}</CardText>
                <CardText>Weight: {weigh}</CardText>
                <CardText>Color: {color}</CardText>
                <Button
                    onClick={handleApply}
                    disabled={applied}
                    color="danger"
                    className="font-weight-bold text-uppercase float-right"
                >
                    {applied ? 'Applied' : 'Apply'}
                </Button>
            </CardBody>
        </Card>
    );
};

export default myPetsCard;
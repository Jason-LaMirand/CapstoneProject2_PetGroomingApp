import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function Appointment() {


    return (

        <div className="SignUpForm col-md-5 offset-md-4 col-lg-4 offset-lg-4">
            <h1>Add Your Pet!</h1>
            <p>Please add inforamtion about your pet.</p>
            <Form>
                <h1>Make your appointment here!</h1>
                <FormGroup>
                    <Label for="name">
                        Full Name (First, Last)
                    </Label>
                    <Input
                        id="exampleText"
                        name="text"
                        type="textarea"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">
                        Email
                    </Label>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="with a placeholder"
                        type="email"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleNumber">
                        Phone Number
                    </Label>
                    <Input
                        id="exampleNumber"
                        name="number"
                        placeholder="number placeholder"
                        type="number"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">
                        Pet's Name
                    </Label>
                    <Input
                        id="exampleText"
                        name="text"
                        type="textarea"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleColor">
                        Dog's Color
                    </Label>
                    <Input
                        id="exampleColor"
                        name="color"
                        placeholder="color placeholder"
                        type="color"
                    />
                </FormGroup>
                <FormGroup tag="fieldset1">
                    <legend>
                        Was your pet adopted?
                    </legend>
                    <FormGroup check>
                        <Input
                            name="radio1"
                            type="radio"
                        />
                        {' '}
                        <Label check>
                            Yes
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input
                            name="radio1"
                            type="radio"
                        />
                        {' '}
                        <Label check>
                            No
                        </Label>
                    </FormGroup>
                </FormGroup>
                <FormGroup tag="fieldset2">
                    <legend>
                        Was your pet spayed or neutered?
                    </legend>
                    <FormGroup check>
                        <Input
                            name="radio1"
                            type="radio"
                        />
                        {' '}
                        <Label check>
                            Yes
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input
                            name="radio1"
                            type="radio"
                        />
                        {' '}
                        <Label check>
                            No
                        </Label>
                    </FormGroup>
                </FormGroup>
                <FormGroup tag="fieldset3">
                    <legend>
                        Which Groomer would you like?
                    </legend>
                    <FormGroup check>
                        <Input
                            name="radio1"
                            type="radio"
                        />
                        {' '}
                        <Label check>
                            Barbra Biggs
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input
                            name="radio1"
                            type="radio"
                        />
                        {' '}
                        <Label check>
                            Tina Fey
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input
                            name="radio1"
                            type="radio"
                        />
                        {' '}
                        <Label check>
                            Bard Pitt
                        </Label>
                    </FormGroup>
                </FormGroup>

                <FormGroup>
                    <Label for="exampleDatetime">
                        Datetime
                    </Label>
                    <Input
                        id="exampleDatetime"
                        name="datetime"
                        placeholder="datetime placeholder"
                        type="datetime"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleDate">
                        Date
                    </Label>
                    <Input
                        id="exampleDate"
                        name="date"
                        placeholder="date placeholder"
                        type="date"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleTime">
                        Time
                    </Label>
                    <Input
                        id="exampleTime"
                        name="time"
                        placeholder="time placeholder"
                        type="time"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelectMulti">
                        Select the service(s) you would like.
                    </Label>
                    <Input
                        id="exampleSelectMulti"
                        multiple
                        name="selectMulti"
                        type="select"
                    >
                        <option>
                            1-minute Brushing
                        </option>
                        <option>
                            Nail Trim
                        </option>
                        <option>
                            Ear Cleaning
                        </option>
                        <option>
                            Scissoring feet & pad shaving
                        </option>
                        <option>
                            Sanitary Trimming
                        </option>
                        <option>
                            Anal gland cleaning
                        </option><option>
                            Bandana or bow
                        </option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">
                        Anything we need to know about your pup?
                    </Label>
                    <Input
                        id="exampleText"
                        name="text"
                        type="textarea"
                    />
                </FormGroup>
                <Button>
                    Submit
                </Button>
            </Form>
        </div>
    );
};


export default Appointment;
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardBody, Form, Label, Input, Button } from 'reactstrap';


// User addPet Form:
// Shows form and manages update to state changes.

const addPet = ({ myDog }) => {
  const history = useHistory();
  const INITIAL_STATE = {
    petName: '',
    age: '',
    dogbreed: '',
    gender: '',
    spayedOrNeutered: '',
    adopted: '',
    weight: '',
    color: '',
    img: ''
  };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [formErrors] = useState([]);

  console.debug(
    'MyDogForm',
    'myDog=',
    typeof myDog,
    'formData=',
    formData,
    'formErrors=',
    formErrors
  );

  //  Update form fields 
  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }));
  };

  //  Handle form submit: Calls submit func prop and, if successful, redirect to /=.

  const handleSubmit = async evt => {
    evt.preventDefault();
    // try {
    //   // let result = await addPet(formData);
    //   // makes a POST request to Api.js and adds corresponding data to matching category in db.json
    //   if (result.success) {
    //     // imperatively redirect to correct page and refresh to see new data
    //     history.push('/');
    //   } else {
    //     setFormErrors(result.errors);
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <div className="SignUpForm col-md-5 offset-md-4 col-lg-4 offset-lg-4">
      <h1>Add Your Pet!</h1>
      <p>Please add inforamtion about your pet.</p>
      <Card>
        <CardBody>
          <Form className="MyDog-form" onSubmit={handleSubmit}>
            <Label htmlFor="petName" className="MyDog-Label">
              Pet's Name
            </Label>
            <Input
              className="MyDog-Input"
              id="petName"
              name="petName"
              type="text"
              placeholder="Pet's Name"
              value={formData.petName}
              onChange={handleChange}
              required
            ></Input>
            <Label htmlFor="age" className="MyDog-Label">
              Age of your pet.
            </Label>
            <Input
              className="MyDog-Input"
              id="age"
              name="age"
              type="text"
              placeholder="Pet's Age"
              value={formData.age}
              onChange={handleChange}
              required
            ></Input>
            <Label htmlFor="breed" className="MyDog-Label">
              What is your dog's breed?
            </Label>
            <Input
              className="MyDog-Input"
              id="breed"
              name="breed"
              type="text"
              placeholder="Dog Breed"
              value={formData.breed}
              onChange={handleChange}
              required
            ></Input>
            <Label htmlFor="gender" className="MyDog-Label">
              What is your pet's gender?
            </Label>
            <Input
              className="MyDog-Input"
              id="gender"
              name="gender"
              type="text"
              placeholder="Pet's Gender"
              value={formData.gender}
              onChange={handleChange}
              required
            ></Input>
            <Label htmlFor="spayedOrNeutered" className="MyDog-Label">
              Is your pet spayed or neutered?
            </Label>
            <Input
              className="MyDog-Input"
              id="spayedOrNeutered"
              name="spayedOrNeutered"
              type="text"
              placeholder="Spayed or Neutered"
              value={formData.spayedOrNeutered}
              onChange={handleChange}
              required
            ></Input>
            <Label htmlFor="adopted" className="MyDog-Label">
              Is your pet adopted?
            </Label>
            <Input
              className="MyDog-Input"
              id="adopted"
              name="adopted"
              type="text"
              placeholder="adopted"
              value={formData.adopted}
              onChange={handleChange}
              required
            ></Input>
            <Label htmlFor="weight" className="MyDog-Label">
              Pet's Weight
            </Label>
            <Input
              className="MyDog-Input"
              id="weight"
              name="weight"
              type="text"
              placeholder="weight"
              value={formData.weight}
              onChange={handleChange}
              required
            ></Input>
            <Label htmlFor="color" className="MyDog-Label">
              What color(s) is your pet?
            </Label>
            <Input
              className="MyDog-Input"
              id="color"
              name="color"
              type="text"
              placeholder="color"
              value={formData.color}
              onChange={handleChange}
              required
            ></Input>
            <Label htmlFor="color" className="MyDog-Label">
              Submit a picture of your pet.
            </Label>
            <Input
              className="MyDog-Input"
              id="img"
              name="img"
              type="text"
              placeholder="img url"
              value={formData.img}
              onChange={handleChange}
              required
            ></Input>
            <span className="NewItemForm-formErrors">
              {formErrors ? <p>{formErrors}</p> : null}
            </span>
            <Button
              type="submit"
              className="btn btn-lg btn-block"
              color="primary"
            >
              Submit
            </Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default addPet;

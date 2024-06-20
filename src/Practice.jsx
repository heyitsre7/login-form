import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const LoginInto = () =>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");

    const [city , setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
     };


    return(
        <>
            <h1>Login Into</h1>

            <form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter Username" value={username} onChange={(e) =>setUsername(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="123 Main St" value={address1} onChange={(e) => setAddress1(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" value={address2} onChange={(e) => setAddress2(e.target.value)}/>
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" value={city} onChange={(e) => setCity(e.target.value)}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Select defaultValue="select">
                        <option>select </option>
                        <option>Maharastra</option>
                        <option>Madhya Pradesh</option>
                        <option>Punjab</option>
                        <option>West Bengal</option>
                        <option>Bihar</option>
                        <option>Gujrat</option>
                        <option>Uttar Pradesh</option>
                        <option>Odisha</option>
                        <option>Karnataka</option>
                        <option>TamilNadu</option>
                    </Form.Select>
                    </Form.Group>
                </Row>

                <fieldset>
                    <Form.Group as={Row} className="mb-3">
                    <Form.Label as="legend" column sm={2}>
                        Occupation
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Check
                        type="radio"
                        label="Student"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        />
                        <Form.Check
                        type="radio"
                        label="Employee"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        />
                        <Form.Check
                        type="radio"
                        label="Unemployed"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                        />
                    </Col>
                    </Form.Group>
                </fieldset>

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Upload Your Resume</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                <Button variant="outline-primary">Submit</Button>

            </form>
        </>
    )
        
}

export default LoginInto;
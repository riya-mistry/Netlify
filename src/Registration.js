import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import './App.css';

function Registration() {

    const navigate = useNavigate()

    const [firstName, updateFirstName] = useState('');
    const [isFirstNameValid, updateIsFirstNameValid] = useState(true);
    const [lastName, updateLastName] = useState('');
    const [isLastNameValid, updateIsLastNameValid] = useState(true);
    const [email, updateEmail] = useState('');
    const [isEmailValid, updateIsEmailValid] = useState(true);
    const [password, updatePassword] = useState('');
    const [isPasswordValid, updateIsPasswordValid] = useState(true);
    const [confirmPassword, updateConfirmPassword] = useState('');
    const [isConfirmPasswordValid, updateIsConfirmPasswordValid] = useState(true);

    const onlyLettersRe = /^[A-Za-z]+$/;
    const emailRe = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const passwordRe = /^(?=.[a-zA-Z0-9])(?=.[\W_])[a-zA-Z0-9\W_]{8,}$/;

    const handleFirstNameChange = (value) => {
        updateFirstName(value)
        if (!onlyLettersRe.test(value)) {
            updateIsFirstNameValid(false)
            return;
        }
        updateIsFirstNameValid(true)
    }

    const handleLastNameChange = (value) => {
        updateLastName(value)
        if (!onlyLettersRe.test(value)) {
            updateIsLastNameValid(false)
            return;
        }
        updateIsLastNameValid(true)
    }

    const handleEmailChange = (value) => {
        updateEmail(value)
        if (!emailRe.test(value)) {
            updateIsEmailValid(false)
            return;
        }
        updateIsEmailValid(true)
    }

    const handlePasswordChange = (value) => {
        updatePassword(value)
        if (!passwordRe.test(value)) {
            updateIsPasswordValid(false)
            return;
        }
        updateIsPasswordValid(true)
    }

    const handleSubmit = (event) => {
        if (firstName === '') {
            updateIsFirstNameValid(false)
            event.preventDefault();
            event.stopPropagation();
            return;
        }
        if (lastName === '') {
            updateIsLastNameValid(false)
            event.preventDefault();
            event.stopPropagation();
            return;
        }
        if (email === '') {
            updateIsEmailValid(false)
            event.preventDefault();
            event.stopPropagation();
            return;
        }
        if (password === '') {
            updateIsPasswordValid(false)
            event.preventDefault();
            event.stopPropagation();
            return;
        }
        if (confirmPassword === '') {
            updateIsConfirmPasswordValid(false)
            event.preventDefault();
            event.stopPropagation();
            return;
        }
        if (isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
            localStorage.setItem('profile-details', JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email
            }));
            navigate('/profile');
        } else {
            event.preventDefault();
            event.stopPropagation();
            return;
        }
    }


    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p className="header">Registration</p>
            <div className='form-body'>
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group controlId="validationCustom01" className='mb-10'>
                        <Form.Control
                            required
                            type="text"
                            placeholder="First name"
                            value={firstName}
                            onChange={(e) => handleFirstNameChange(e.target.value)}
                            isInvalid={!isFirstNameValid}
                        />
                        <Form.Control.Feedback type="invalid">Invalid value.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="validationCustom02" className='mb-10'>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Last name"
                            value={lastName}
                            onChange={(e) => handleLastNameChange(e.target.value)}
                            isInvalid={!isLastNameValid}
                        />
                        <Form.Control.Feedback type="invalid">Invalid value.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="validationCustom03" className='mb-10'>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => handleEmailChange(e.target.value)}
                            isInvalid={!isEmailValid}
                        />
                        <Form.Control.Feedback type="invalid">Invalid value.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="validationCustom04" className='mb-10'>
                        <Form.Control
                            required
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => handlePasswordChange(e.target.value)}
                            isInvalid={!isPasswordValid}
                        />
                        <Form.Control.Feedback type="invalid">Invalid value.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="validationCustom05" className='mb-10'>
                        <Form.Control
                            required
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => {
                                updateConfirmPassword(e.target.value)
                                if (e.target.value !== password) {
                                    updateIsConfirmPasswordValid(false)
                                    return;
                                }
                                updateIsConfirmPasswordValid(true)
                            }}
                            isInvalid={!isConfirmPasswordValid}
                        />
                        <Form.Control.Feedback type="invalid">Password does not match.</Form.Control.Feedback>
                    </Form.Group>
                    <Button type="submit">Submit form</Button>
                </Form>
            </div>
        </div>
    );
}

export default Registration;

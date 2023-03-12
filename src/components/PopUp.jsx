import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Button, Form, Modal } from "react-bootstrap";

import Actions from "redux/actions/personCase";

const PopUp = () => {
    const popUp = useSelector((state) => state.personCase.popUp);

    const { setPopup } = Actions();
    const { data, open } = popUp || {};

    useEffect(() => {
        if (Object.keys(data).length > 0) {
            setState(data);
            toggleTitle();
        }
    }, [data]);

    const handleClose = () => {
        setPopup(false);
    };

    const [title, setTitle] = useState();
    const toggleTitle = () => {
        const title = Object.keys(data).length === 0 ? " Създай " : "Редактирай";
        setTitle(title);
    };

    const initialState = {
        settlementName: "",
        address: "",
    };

    const [state, setState] = useState(initialState);
    const onChange = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value,
        });
    };

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        } else {
            setValidated(false);
            handleClose();
        }
    };

    const { settlementName, address } = state;
    return (
        <Modal
            show={open}
            onHide={handleClose}
            centered
            onExited={() => {
                toggleTitle();
                setState(initialState);
                setValidated(false);
            }}
        >
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group className='mb-3'>
                        <Form.Label>Град</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='моля попълнете Град'
                            value={settlementName}
                            name='settlementName'
                            onChange={onChange}
                        />
                        <Form.Control.Feedback type='invalid'>
                            Моля попълнете Град !
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Адрес</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='моля попълнете Адрес'
                            value={address}
                            name='address'
                            onChange={onChange}
                        />
                        <Form.Control.Feedback type='invalid'>
                            Моля попълнете Адрес !
                        </Form.Control.Feedback>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        Отказ
                    </Button>
                    <Button variant='primary' type='submit'>
                        Добави
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
};

export default PopUp;

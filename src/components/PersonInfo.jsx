import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Table, Button, Form } from "react-bootstrap";
import Actions from "redux/actions/personCase";

const PersonInfo = () => {
    const { setPopup } = Actions();

    const selectedUser = useSelector((state) => state.personCase.selectedUser);
    const allPersonsInfo = useSelector((state) => state.personCase.allPersonsInfo);
    const [personInfo, setPersonInfo] = useState([]);

    useEffect(() => {
        if (selectedUser && Object.keys(allPersonsInfo).length > 0) {
            setPersonInfo([]);
            const filtered = allPersonsInfo.addresses.filter((item) => item.id === selectedUser);
            setPersonInfo(filtered);
        }
    }, [selectedUser, allPersonsInfo]);

    return (
        <>
            <section>
                {personInfo.length > 0 ? (
                    <>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Действия</th>
                                    <th>Град</th>
                                    <th>Адрес</th>
                                    <th>Статус</th>
                                </tr>
                            </thead>
                            <tbody>
                                {personInfo.map((item, i) => {
                                    const { settlementName, address } = item;
                                    return (
                                        <tr key={i}>
                                            <td>
                                                <Button
                                                    variant='primary'
                                                    onClick={() => {
                                                        setPopup(true, {
                                                            settlementName,
                                                            address,
                                                        });
                                                    }}
                                                >
                                                    Редактирай
                                                </Button>
                                            </td>
                                            <td>{settlementName}</td>
                                            <td>{address}</td>
                                            <td>
                                                <Form.Group controlId='formBasicCheckbox'>
                                                    <Form.Check type='checkbox' />
                                                </Form.Group>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                        <br />
                        <Button
                            variant='secondary'
                            onClick={() => {
                                setPopup(true);
                            }}
                        >
                            <i className='fa-solid fa-circle-plus'></i> Добави
                        </Button>
                    </>
                ) : (
                    ""
                )}
            </section>
        </>
    );
};

export default PersonInfo;

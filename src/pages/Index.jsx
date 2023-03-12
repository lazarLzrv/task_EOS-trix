import React, { useState, useEffect } from "react";

import PersonInfo from "components/PersonInfo";
import Sidebar from "components/Sidebar";
import PopUp from "components/PopUp";

import useJson from "api/useJson";
import Actions from "redux/actions/personCase";

import { Container, Row, Col } from "react-bootstrap";

const Index = () => {
    const { getWorkUnits, getCaseInfo, getPersonsInfo } = useJson();

    const { setWorkUnits, setCases, setAllPersonsInfo } = Actions();

    useEffect(() => {
        Promise.all([getWorkUnits(), getCaseInfo(), getPersonsInfo()]).then((data) => {
            setWorkUnits(data[0]);
            setCases(data[1]);
            setAllPersonsInfo(data[2]);
        });
    }, []);

    return (
        <Container fluid>
            <Row>
                <Col className='sidebar'>
                    <Sidebar />
                </Col>
                <Col>
                    <PersonInfo />
                    <PopUp />
                </Col>
            </Row>
        </Container>
    );
};

export default Index;

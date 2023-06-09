import React from 'react';
import Header from '../pages/sheard/Header/Header';
import Footer from '../pages/sheard/footer/Footer';
import Leftnav from '../pages/sheard/leftNav/Leftnav';
import RightNav from '../pages/sheard/rightNav/RightNav';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../pages/sheard/NavigationBar/NavigationBar';

const Main = () => {
    return (
        <div>
            <Header />
            <NavigationBar />
            <Container>
                <Row>
                    <Col lg={3}>
                     <Leftnav ></Leftnav>
                    </Col>
                    <Col lg={6}>
                       <Outlet ></Outlet>
                    </Col>
                    <Col lg={3}>
                    <RightNav ></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Main;
import React from 'react';
import { Container, Column } from 'bloomer';

const Wrapper = props => {
    return (
        <Container>
            <Column isSize='1/3'>{props.children}</Column>
        </Container>
    );
};

export default Wrapper;
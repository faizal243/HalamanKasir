import React, { Component } from 'react'
import { Col, ListGroup, Row } from 'react-bootstrap'
import { numberWithCommas } from '../utils/utils';

export default class Hasil extends Component {
    render() {
        const { keranjangs } = this.props
        return (
            <Col md={3} mt="2">
                <h5>
                    <strong>Hasil</strong>
                </h5>
                <hr />
                {keranjangs.lenght !== 0 &&
                    <ListGroup variant="flush">
                        {keranjangs.map((menuKeranjang) => (
                            <ListGroup.Item>
                                <Row>
                                    <Col xs={2}>
                                        <h4>
                                            {menuKeranjang.jumlah}
                                            {/* <Badge variant="primary">
                                               
                                            </Badge> */}
                                            
                                        </h4>
                                    </Col>
                                    <Col>
                                        <h6>{menuKeranjang.product.nama}</h6>
                                        <p>Rp. {numberWithCommas(menuKeranjang.product.harga)}</p>
                                    </Col>
                                    <Col>
                                        <strong className="float-right">Rp. {numberWithCommas(menuKeranjang.total_harga)}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                }
            </Col>
        );
    }
}

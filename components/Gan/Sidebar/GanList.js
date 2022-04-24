import React, { useState, useEffect } from 'react';
import { Row, Col, Card } from 'antd';
import gans from './gans';

const GanList = () => {
    const [ganList, setGanList] = useState(gans);

    const onClick = (gan) => {
        console.log(gan);
    }

    if (ganList.length === 0) {
        return (
            <div>
                <h1>No gans found</h1>
            </div>
        )
    }
    return (
        <>
            <Row gutter={[16, 16]}>
                {ganList.map((gan, index) => (
                    <Col span={12} key={index}>
                        <Card
                            hoverable
                            style={{ width: '100%' }}
                            cover={<img style={{height: 150}} alt="example" src={gan.image} />}
                            onClick={() => onClick(gan)}
                        >
                            <Card.Meta title={gan.name}  />
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default GanList;
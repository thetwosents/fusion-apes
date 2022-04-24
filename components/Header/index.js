import Container from '../Container';
import {Row, Col} from 'antd';
import NavMenu from './menu';

const Header = () => {
    return (
        <header>
            <Container>
                <Row>
                    <Col span={8}>

                    </Col>
                    <Col span={16}>
                        <NavMenu />
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header;
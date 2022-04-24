import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/Gan/Sidebar';
import Canvas from '../components/Gan/Canvas';
import { Layout,Row,Col } from 'antd';
const { Content } = Layout;

export default function Gan() {

    return (
        <div className={styles.container}>
            <Head>
                <title>FusionApes - GAN</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <Layout>
                <Content>
                    <Row>
                        <Col span={6}>
                            <Sidebar />
                        </Col>
                        <Col span={16} offset={2} align="center">
                            <Canvas />
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </div>
    )
}

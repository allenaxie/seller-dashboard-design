import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Row, Col, Layout} from 'antd';
import classes from '../styles/Home.module.css';
import Navbar from '../components/Navbar/Navbar';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import ProductForm from '../components/ProductForm/ProductForm';

const Home: NextPage = () => {

  const {Header, Content, Footer} = Layout;

  return (
    <div className={classes.container}>
      <Head>
        <title>Logo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
      className={classes.header}
      >
        <Navbar/>
      </Header>
      <Row className={classes.content}>
        <Col span={12} className={classes.imageGalleryCol}>
          <ImageGallery />
        </Col>
        <Col span={12} className={classes.productFormCol}>
          <ProductForm/>
        </Col>
      </Row>
     
    </div>
  )
}

export default Home

import classes from './ProductForm.module.css';
import { Form, Checkbox, Input, Button, Radio, Row, Col, Slider, Upload, DatePicker, Tag, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useState } from 'react';
import moment from 'moment';

const ProductForm = () => {
    const [categoryForm, setCategoryForm] = useState('Collectibles');

    console.log(categoryForm)

    function handleCategoryChange(e: any) {
        setCategoryForm(e.target.value);
    }

    const sliderMarks = {
        0: '0%',
        25: '25%',
        50: '50%',
        75: '75%',
        100: '100%',
    }


    return (
        <Form
            name="productForm"
            labelCol={{ span: 24 }}
            layout="vertical"
        >
            <Form.Item
                label={<span className={classes.formLabel}>Product Name</span>}
                name="productName"
                rules={[{
                    required: true, message: 'Please input the product name.'
                }]}
            >
                <Input placeholder="Name your listing. Keep it short and sweet" />
            </Form.Item>
            <Row>
                <Col span={12}>
                    <Form.Item
                        label={<span className={classes.formLabel}>Category</span>}
                        name="category"
                        required
                    >
                        <Radio.Group
                            value={categoryForm}
                            onChange={handleCategoryChange}
                            className={classes.radioGroup}
                        >
                            <Radio.Button value="Collectibles">Collectibles</Radio.Button>
                            <Radio.Button value="Accessories">Accessories</Radio.Button>
                            <Radio.Button value="T-Shirts">T-Shirts</Radio.Button>
                        </Radio.Group>

                    </Form.Item>
                </Col>
                <Col span={10} className={classes.thumbnailContainer}>
                    <Form.Item
                        label={<span className={classes.formLabel}>Thumbnail Image</span>}
                        name="thumbnailImage"
                        required
                    >
                        <Upload>
                            <Button icon={<UploadOutlined />}>Add Image</Button>
                        </Upload>

                    </Form.Item>
                </Col>
            </Row>
            <Form.Item
                label={<span className={classes.formLabel}>Brand (up to 2)</span>}
                name="brand"
                required
            >
                <Form name="brandForm">
                    <Input placeholder="Add a keyword and press Enter" />
                </Form>

            </Form.Item>
            <Form.Item
                label={<span className={classes.formLabel}>Description</span>}
                name="description"
                required
            >
                <Input
                    placeholder="Add more informationa bout the product"
                    maxLength={200}
                    showCount
                />

            </Form.Item>
            <Form.Item
                label={<span className={classes.formLabel}>Condition</span>}
                name="condition"
                className={classes.condition}
            >
                <Radio.Group className={classes.radioGroup}>
                    <Radio.Button value="Bad">Bad</Radio.Button>
                    <Radio.Button value="Fair">Fair</Radio.Button>
                    <Radio.Button value="Good">Good</Radio.Button>
                    <Radio.Button value="New">New</Radio.Button>
                </Radio.Group>
            </Form.Item>
            <Row>
                <Col span={12}>
                    <Form.Item
                        label={<span className={classes.formLabel}>Season</span>}
                        name="season"
                    >
                        <Input
                            placeholder="SS20"
                        />

                    </Form.Item>
                </Col>
                <Col span={10} offset={1}>
                    <Form.Item
                        className={classes.releaseDate}
                        label={<span className={classes.formLabel}>Release Date</span>}
                        name="releaseDate"
                    >
                        <DatePicker
                            defaultValue={moment()}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <Form.Item
                        label={<span className={classes.formLabel}>Dimensions</span>}
                        name="dimensions"
                    >
                        <Input
                            placeholder="IN"
                        />

                    </Form.Item>
                </Col>
                <Col span={10} offset={1}>
                    <Form.Item
                        className={classes.retail}
                        label={<span className={classes.formLabel}>Retail</span>}
                        name="retail"
                    >
                        <Input
                            placeholder="E.g. $400"
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item
                className={classes.authenticity}
                label={<span className={classes.formLabel}>Authenticity</span>}
                name="authenticity"
            >
                <Slider marks={sliderMarks} step={10} defaultValue={100} />
            </Form.Item>
            <Form.Item
                className={classes.declaration}
                label={<span className={classes.formLabel}>Declaration</span>}
                name="declaration"
            >
            </Form.Item>
            <Form.Item>
                <Checkbox>I hereby declare that the information given in this application is true and correct to the best of my knwoeldge and belief. In case any information given in this application proves to be false or incorrect, I shall be responsible for the consequences.</Checkbox>
            </Form.Item>
            <Row>
                <span>*</span> indicates required
            </Row>
            <Row className={classes.buttonGroup}>
                <Button className={classes.cancelBtn}>Cancel</Button>
                <Button className={classes.publishBtn}>Publish</Button>
            </Row>
        </Form>
    )
}


export default ProductForm;
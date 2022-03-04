import classes from './ImageGallery.module.css';
import {Tabs, Skeleton} from 'antd';

const ImageGallery = () => {

    const {TabPane} = Tabs;

    return (
        <>
        <Tabs>
            <TabPane tab="Image Gallery" key="1" className={classes.tabPane1}>
                <Skeleton.Image/>
                <span>
                    You may upload up to 5 images (including thumbnail)
                    <br/>
                    Supported file types: jpeg, jpg, png
                </span>
            </TabPane>
            <TabPane tab="Preview" key="2" className={classes.tabPane2}>
                Nothing to preview! Start adding product details on the right.
            </TabPane>
        </Tabs>
        </>
    )
}

export default ImageGallery;
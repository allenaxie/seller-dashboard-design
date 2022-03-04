import classes from './ImageGallery.module.css';
import {Tabs, Skeleton} from 'antd';
import { useState } from 'react';

const ImageGallery = () => {

    const {TabPane} = Tabs;
    // const {imageUploaded, setImageUploaded} = useState(false)

    return (
        <div className={classes.imageTabsContainer}>
            <Tabs>
                <TabPane tab="Image Gallery" key="1" className={classes.tabPane1}>
                    <div className={classes.imageSkeleton}>
                        <Skeleton.Image/>
                    </div>
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
        </div>
    )
}

export default ImageGallery;
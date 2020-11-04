import React from 'react';
import { Row, Col } from 'reactstrap';
import './FilteredImage.css'

function FilteredImage() {

    const arr = new Array(24).fill('');

    return (
        <>
            <Row style={{ width: '100%' }}>
                {
                    arr.map((value, index) => {
                        return (
                            <Col 
                                className='image-container'
                                sm='1'
                                style={{ padding: '1px' }}>
                                <img src={process.env.PUBLIC_URL + 'assets/images/img.jpg'} style={{ width: '100%', height: '100px' }} />
                                <img src={process.env.PUBLIC_URL + 'assets/images/check-mark.png'} className='check-mark' />
                            </Col>
                        )
                    })
                }
            </Row>
        </>
    )
}

export default FilteredImage;

import React, { useState, useCallback, useEffect, useContext } from 'react';
import { Row, Col } from 'reactstrap';
import axios from 'axios';
import './FilteredImage.css';
import StoreContext from '../store/StoreContext';

function FilteredImage() {

    const [exerciseProperties, setExerciseProperties] = useState([]);
    const [, updateState] = useState();
    const forceUpdate = useCallback( () => updateState({}), []);

    const [selectedExerciseProp, setSelectedExerciseProp] = useContext(StoreContext);

    useEffect( () => {
        axios.get('http://127.0.0.1:3333', {params: selectedExerciseProp})
            .then(resp => {
                console.log(resp);
                setExerciseProperties(resp.data);
            })
            .catch(err => {
                console.log(err);
            });

    }, [selectedExerciseProp]);

    const onClickImage = (index) => {
        exerciseProperties[index].isSelected = !exerciseProperties[index].isSelected;
        forceUpdate();
    }

    return (
        <>
            <Row style={{ width: '100%'}}>
                {
                    exerciseProperties.length > 0?
                        exerciseProperties.map((value, index) => {
                            return (
                                <Col 
                                    className='image-container'
                                    lg='1' md='2' sm='4'
                                    onClick={() => onClickImage(index)}
                                    key={index}
                                    style={{ padding: '1px' }}>
                                    <img 
                                        src={process.env.PUBLIC_URL + 'assets/images/' + value.imageUrl} 
                                        style={{ width: '100%', height: '100px' }} 
                                     />
                                    <img 
                                        className={'check-mark ' + (value.isSelected?'selected':'')}
                                        src={process.env.PUBLIC_URL + 'assets/images/check-mark.png'} 
                                    />
                                </Col>
                            )
                        })
                        :<div>Result No found</div>
                }
            </Row>
        </>
    )
}

export default FilteredImage;

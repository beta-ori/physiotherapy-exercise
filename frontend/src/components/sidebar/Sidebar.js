import React, { useState, useContext } from 'react';
import { Collapse } from 'reactstrap';
import './Sidebar.css';
import { BsCaretDown, BsSearch, BsCaretRight } from 'react-icons/bs';
import StoreContext from '../store/StoreContext';


function Sidebar() {

    const initialActiveStatus = {
        search: false,
        condition: false,
        ageCategory: false,
        difficulty: false,
        imageOrientation: false,
        equipment: false,
        exerciseType: false,
        bodyPart: false
    };

    const [activeStatus, setActiveStatus] = useState(initialActiveStatus);

    const [selectedExerciseProp, setSelectedExerciseProp] = useContext(StoreContext);

    const onClickUpdateDifficulty = (e) => {
        let arr = [...selectedExerciseProp.difficulty];

        if (e.target.checked)
            arr.push(e.target.value);
        else {
            let index = arr.indexOf(e.target.value);
            arr.splice(index, 1);
        }

        setSelectedExerciseProp({ ...selectedExerciseProp, difficulty: arr });
    }

    const onClickUpdateEquipment = (e) => {
        let arr = [...selectedExerciseProp.equipment];

        if (e.target.checked)
            arr.push(e.target.value);
        else {
            let index = arr.indexOf(e.target.value);
            arr.splice(index, 1);
        }

        setSelectedExerciseProp({ ...selectedExerciseProp, equipment: arr });
    }


    const onClickUpdateExerciseType = e => {
        let arr = [...selectedExerciseProp.exerciseType];

        if (e.target.checked)
            arr.push(e.target.value);
        else {
            let index = arr.indexOf(e.target.value);
            arr.splice(index, 1);
        }
        setSelectedExerciseProp({ ...selectedExerciseProp, exerciseType: arr });
    }

    const onClickUpdateBodyPart = e => {
        let arr = [...selectedExerciseProp.bodyPart];

        if (e.target.checked)
            arr.push(e.target.value);
        else {
            let index = arr.indexOf(e.target.value);
            arr.splice(index, 1);
        }
        setSelectedExerciseProp({ ...selectedExerciseProp, bodyPart: arr });
    }

    return (
        <div className='sidebar-container'>

            <div className='search'>
                <button
                    className={'button ' + (activeStatus.searh ? 'active' : '')}
                    onClick={e => setActiveStatus({ ...initialActiveStatus, searh: activeStatus.searh ? false : true })}>
                    {
                        activeStatus.searh ?
                            <BsCaretRight /> :
                            <BsCaretDown />
                    }
                    <span>Search</span>
                </button>
                <button className='button-inner'><BsSearch size='12px' /></button>
            </div>

            <Collapse isOpen={activeStatus.searh}>
                <div className='search-field'>
                    <input 
                        type='text' 
                        name='search'
                        value={selectedExerciseProp.searchText}
                        placeholder='Enter keywords here'
                        onChange={e => setSelectedExerciseProp({...selectedExerciseProp, searchText: e.target.value})}
                    />

                    <ul>
                        {
                            selectedExerciseProp.searchText !== '' ?
                                <li>Search text is {selectedExerciseProp.searchText}</li> : ''
                        }

                        {
                            selectedExerciseProp.condition !== '' ?
                                <li>Condition is {selectedExerciseProp.condition}</li> : ''
                        }

                        {
                            selectedExerciseProp.difficulty.length > 0 ?
                                <li>Difficulty is {selectedExerciseProp.difficulty.join(' or ')}</li> : ''
                        }

                        {
                            selectedExerciseProp.equipment.length > 0 ?
                                <li>Equipment is {selectedExerciseProp.equipment.join(' or ')}</li> : ''
                        }

                        {
                            selectedExerciseProp.exerciseType.length > 0 ?
                                <li>Exercise type is {selectedExerciseProp.exerciseType.join(' or ')}</li> : ''
                        }

                        {
                            selectedExerciseProp.bodyPart.length > 0 ?
                                <li>Body part is {selectedExerciseProp.bodyPart.join(' or ')}</li> : ''
                        }

                        {
                            selectedExerciseProp.ageCategory !== '' ?
                                <li>Age category is {selectedExerciseProp.ageCategory}</li> : ''
                        }


                        {
                            selectedExerciseProp.imageOrientation !== '' ?
                                <li>Image orientation is {selectedExerciseProp.imageOrientation}</li> : ''
                        }

                    </ul>
                </div>
            </Collapse>


            <button
                className={'button ' + (activeStatus.condition ? 'active' : '')}
                onClick={e => setActiveStatus({ ...initialActiveStatus, condition: activeStatus.condition ? false : true })}>
                {
                    activeStatus.condition ?
                        <BsCaretRight /> :
                        <BsCaretDown />
                }
                <span> Condition </span>
            </button>

            <Collapse isOpen={activeStatus.condition}>
                <div className='condition-outer'>
                    Spinal Cord Injury
                    <div className='condition-inner'>
                        <div>
                            <input
                                type='radio'
                                value='C1-C4 Tetraplegia'
                                name='condition'
                                onChange={e => setSelectedExerciseProp({ ...selectedExerciseProp, condition: e.target.value })}
                            />
                            <label>C1-C4 Tetraplegia</label>
                        </div>


                        <div>
                            <input
                                type='radio'
                                value='C5 Tetraplegia'
                                name='condition'
                                onChange={e => setSelectedExerciseProp({ ...selectedExerciseProp, condition: e.target.value })}
                            />
                            <label>C5 Tetraplegia</label>
                        </div>


                        <div>
                            <input
                                type='radio'
                                value='C6 Tetraplegia'
                                name='condition'
                                onChange={e => setSelectedExerciseProp({ ...selectedExerciseProp, condition: e.target.value })}
                            />
                            <label>C6 Tetraplegia</label>
                        </div>

                    </div>

                    <div>
                        <input
                            type='radio'
                            value='Traumatic brain injury'
                            name='condition'
                            onChange={e => setSelectedExerciseProp({ ...selectedExerciseProp, condition: e.target.value })}
                        />
                        <label>Traumatic brain injur</label>
                    </div>


                    <div>
                        <input
                            type='radio'
                            value='Strok'
                            name='condition'
                            onChange={e => setSelectedExerciseProp({ ...selectedExerciseProp, condition: e.target.value })}
                        />
                        <label>Strok</label>
                    </div>

                    <div>
                        <input
                            type='radio'
                            value='Motor delay'
                            name='condition'
                            onChange={e => setSelectedExerciseProp({ ...selectedExerciseProp, condition: e.target.value })}
                        />
                        <label>Motor dela</label>
                    </div>

                </div>

            </Collapse>


            <button
                className={'button ' + (activeStatus.difficulty ? 'active' : '')}
                onClick={e => setActiveStatus({ ...initialActiveStatus, difficulty: activeStatus.difficulty ? false : true })}>
                {
                    activeStatus.difficulty ?
                        <BsCaretRight /> :
                        <BsCaretDown />
                }
                <span>Exercise difficulty</span>
            </button>

            <Collapse isOpen={activeStatus.difficulty}>
                <div className='difficulty'>
                    <label>
                        <input
                            type='checkbox'
                            value='Low'
                            onChange={e => onClickUpdateDifficulty(e)}
                        />
                        Low
                    </label>

                    <label>
                        <input
                            type='checkbox'
                            value='Medium'
                            onChange={e => onClickUpdateDifficulty(e)}
                        />
                        Meduim
                    </label>

                    <label>
                        <input
                            type='checkbox'
                            value='High'
                            onChange={e => onClickUpdateDifficulty(e)}
                        />
                        High
                    </label>
                </div>
            </Collapse>



            <button
                className={'button ' + (activeStatus.equipment ? 'active' : '')}
                onClick={e => setActiveStatus({ ...initialActiveStatus, equipment: activeStatus.equipment ? false : true })}>
                {
                    activeStatus.equipment ?
                        <BsCaretRight /> :
                        <BsCaretDown />
                }
                <span>Equipment available</span>
            </button>

            <Collapse isOpen={activeStatus.equipment}>
                <div className='equipment'>
                    <label>
                        <input
                            type='checkbox'
                            value='Free weights'
                            onChange={e => onClickUpdateEquipment(e)}
                        />
                        Free weights
                    </label>

                    <label>
                        <input
                            type='checkbox'
                            value='Weight machine'
                            onChange={e => onClickUpdateEquipment(e)}
                        />
                        Weight machine
                    </label>

                    <label>
                        <input
                            type='checkbox'
                            value='Wall mounted pulleys'
                            onChange={e => onClickUpdateEquipment(e)}
                        />
                        Wall mounted pulleys
                    </label>

                </div>
            </Collapse>


            <button
                className={'button ' + (activeStatus.exerciseType ? 'active' : '')}
                onClick={e => setActiveStatus({ ...initialActiveStatus, exerciseType: activeStatus.exerciseType ? false : true })}>
                {
                    activeStatus.exerciseType ?
                        <BsCaretRight /> :
                        <BsCaretDown />
                }
                <span>Exercise type</span>
            </button>

            <Collapse isOpen={activeStatus.exerciseType}>
                <div className='exercise'>
                    <label>
                        <input
                            type='checkbox'
                            value='Stretching/ROW'
                            onChange={e => onClickUpdateExerciseType(e)}
                        />
                        Stretching/ROW
                    </label>

                    <label>
                        <input
                            type='checkbox'
                            value='Fitness training'
                            onChange={e => onClickUpdateExerciseType(e)}
                        />
                        Fitness training
                    </label>

                    <label>
                        <input
                            type='checkbox'
                            value='Control exercises'
                            onChange={e => onClickUpdateExerciseType(e)}
                        />
                        Control exercises
                    </label>

                </div>
            </Collapse>


            <button
                className={'button ' + (activeStatus.bodyPart ? 'active' : '')}
                onClick={e => setActiveStatus({ ...initialActiveStatus, bodyPart: activeStatus.bodyPart ? false : true })}>
                {
                    activeStatus.bodyPart ?
                        <BsCaretRight /> :
                        <BsCaretDown />
                }
                <span>Body part</span>
            </button>

            <Collapse isOpen={activeStatus.bodyPart}>
                <div className='body-part'>
                    <label>
                        <input
                            type='checkbox'
                            value='Head/neck'
                            onChange={e => onClickUpdateBodyPart(e)}
                        />
                        Head/neck
                    </label>

                    <label>
                        <input
                            type='checkbox'
                            value='Shoulder/upper arm'
                            onChange={e => onClickUpdateBodyPart(e)}
                        />
                        Shoulder/upper arm
                    </label>

                    <label>
                        <input
                            type='checkbox'
                            value='Elbow/forearm'
                            onChange={e => onClickUpdateBodyPart(e)}
                        />
                        Elbow/forearm
                    </label>

                </div>
            </Collapse>

            <button
                className={'button ' + (activeStatus.ageCategory ? 'active' : '')}
                onClick={e => setActiveStatus({ ...initialActiveStatus, ageCategory: activeStatus.ageCategory ? false : true })}>
                {
                    activeStatus.ageCategory ?
                        <BsCaretRight /> :
                        <BsCaretDown />
                }
                <span>Age category</span>
            </button>

            <Collapse isOpen={activeStatus.ageCategory}>
                <div className='age-category'>
                    <div>
                        <input
                            type='radio'
                            value='Infant/young child'
                            name='ageCategory'
                            onChange={e => setSelectedExerciseProp({ ...selectedExerciseProp, ageCategory: e.target.value })}
                        />
                        <label>Infant/young child</label>
                    </div>

                    <div>
                        <input
                            type='radio'
                            value='Child'
                            name='ageCategory'
                            onChange={e => setSelectedExerciseProp({ ...selectedExerciseProp, ageCategory: e.target.value })}
                        />
                        <label>Child</label>
                    </div>

                    <div>
                        <input
                            type='radio'
                            value='Adult'
                            name='ageCategory'
                            onChange={e => setSelectedExerciseProp({ ...selectedExerciseProp, ageCategory: e.target.value })}
                        />
                        <label>Adult</label>
                    </div>

                    <div>
                        <input
                            type='radio'
                            value='Senior'
                            name='ageCategory'
                            onChange={e => setSelectedExerciseProp({ ...selectedExerciseProp, ageCategory: e.target.value })}
                        />
                        <label>Senior</label>
                    </div>

                </div>
            </Collapse>


            <button
                className={'button ' + (activeStatus.imageOrientation ? 'active' : '')}
                onClick={e => setActiveStatus({ ...initialActiveStatus, imageOrientation: activeStatus.imageOrientation ? false : true })}>
                {
                    activeStatus.imageOrientation ?
                        <BsCaretRight /> :
                        <BsCaretDown />
                }
                <span>Image orientation</span>
            </button>

            <Collapse isOpen={activeStatus.imageOrientation}>
                <div className='image-orientation'>
                    <div>
                        <input
                            type='radio'
                            value='Not specified'
                            name='image-orientation'
                            onChange={e => setSelectedExerciseProp({ ...selectedExerciseProp, imageOrientation: e.target.value })}
                        />
                        <label>Not specified</label>
                    </div>

                    <div>
                        <input
                            type='radio'
                            value='Left specified'
                            name='image-orientation'
                            onChange={e => setSelectedExerciseProp({ ...selectedExerciseProp, imageOrientation: e.target.value })}
                        />
                        <label>Left specified</label>
                    </div>

                    <div>
                        <input
                            type='radio'
                            value='Right specified'
                            name='image-orientation'
                            onChange={e => setSelectedExerciseProp({ ...selectedExerciseProp, imageOrientation: e.target.value })}
                        />
                        <label>Right specified</label>
                    </div>

                </div>
            </Collapse>


            <button
                className={'button ' + (activeStatus.exerciseImage ? 'active' : '')}
                onClick={e => setActiveStatus({ ...initialActiveStatus, exerciseImage: activeStatus.exerciseImage ? false : true })}>
                {
                    activeStatus.exerciseImage ?
                        <BsCaretRight /> :
                        <BsCaretDown />
                }
                <span>Update text to display with exercise images</span>
            </button>

            <Collapse isOpen={activeStatus.exerciseImage}>
                <div className='exercise-image'>
                    <label>
                        <input type='checkbox' />
                        Therapist`s aim
                    </label>

                    <label>
                        <input type='checkbox' />
                        Client`s aim
                    </label>

                    <label>
                        <input type='checkbox' />
                        Therapist`s intructions
                    </label>

                    <label>
                        <input type='checkbox' />
                        Client`s intructions
                    </label>

                    <label>
                        <input type='checkbox' />
                        Progressions and variations
                    </label>

                    <label>
                        <input type='checkbox' />
                        Precoutions
                    </label>
                </div>
            </Collapse>

        </div>
    )
}

export default Sidebar;

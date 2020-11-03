/***  Left side bar***/

import React, { useState, useEffect } from 'react'
import {Collapse} from 'reactstrap'
import './Sidebar.css'
import { BsCaretDown, BsSearch, BsCaretRight } from 'react-icons/bs'


function Sidebar() {

    const [isOpen, setIsOpen] = useState({})
    const [condition, setCondition] = useState('')
    const [ageCategory, setAgeCategory] = useState('')
    const [difficulty, setDifficulty] = useState(new Array(3).fill(''))
    const [imageOrientation, setImageOrientation] = useState('')


    const handleDifficultyArr = (e, index) => {
        let arr = [...difficulty]

        console.log(arr)
        if(arr[index] != '')
            arr[index] = e.target.value 
        else 
            arr[index] = ''
        
        setDifficulty(arr)

        console.log(arr)
    }
        
    useEffect( () => {
        console.log(condition)
        console.log(ageCategory)
        console.log(difficulty)
    }, [condition, ageCategory])

    return (
        <div className='sidebar-container'>

            <div className='search'>
                <button className={'button '+ (isOpen.searh?'active':'')}
                    onClick={ e => setIsOpen({searh: isOpen.searh?false: true})}>
                    {
                        isOpen.searh?
                        <BsCaretRight />:
                        <BsCaretDown />    
                    }
                    <span>Search</span>
                </button>
                <button className='button-inner'><BsSearch size='12px'/></button>
            </div>

            <Collapse isOpen={isOpen.searh}>
                <div className='search-field'>
                    <input type='text' name='search' placeholder='Enter keywords here'/>
                    
                    <ul>
                        {
                            condition !== ''?
                            <li>Condition is {condition}</li>:null
                        }
                        {
                            ageCategory !== ''?
                            <li>Age category is {ageCategory}</li>:null
                        }
                        {
                                <li>Difficulty is {difficulty.join(' or ')}</li>
                        }
                    </ul>
                </div>
            </Collapse>

            
            <button className={'button '+ (isOpen.condition?'active':'')} 
                onClick={ e => setIsOpen({condition: isOpen.condition?false: true})}>
                {
                    isOpen.condition?
                    <BsCaretRight />:
                    <BsCaretDown />    
                }
                <span> Condition </span>
            </button>

            <Collapse isOpen={isOpen.condition}>
                <div className='condition-outer'>
                    Spinal Cord Injury
                    <div className='condition-inner'>
                        <div>
                            <input 
                                type='radio'
                                value='C1-C4 Tetraplegia'
                                name='condition'
                                onChange={e => setCondition(e.target.value)}
                            />
                            <label>C1-C4 Tetraplegia</label>
                        </div>


                        <div>
                            <input 
                                type='radio'
                                value='C5 Tetraplegia'
                                name='condition'
                                onChange={e => setCondition(e.target.value)}
                            />
                            <label>C5 Tetraplegia</label>
                        </div>


                        <div>
                            <input 
                                type='radio'
                                value='C6 Tetraplegia'
                                name='condition'
                                onChange={e => setCondition(e.target.value)}
                            />
                            <label>C6 Tetraplegia</label>
                        </div>


                        <div>
                            <input 
                                type='radio'
                                value='C7-C8 Tetraplegia'
                                name='condition'
                                onChange={e => setCondition(e.target.value)}
                            />
                            <label>C7-C8 Tetraplegia</label>
                        </div>


                        <div>
                            <input 
                                type='radio'
                                value='T1-C4 Tetraplegia'
                                name='condition'
                                onChange={e => setCondition(e.target.value)}
                            />
                            <label>T1-C4 Tetraplegia</label>
                        </div>


                        <div>
                            <input 
                                type='radio'
                                value='L2-S1 Tetraplegia'
                                name='condition'
                                onChange={e => setCondition(e.target.value)}
                            />
                            <label>L2-S1 Tetraplegia</label>
                        </div>


                        <div>
                            <input 
                                type='radio'
                                value='Motor incomplete SCI'
                                name='condition'
                                onChange={e => setCondition(e.target.value)}
                            />
                            <label>Motor incomplete SCI</label>
                        </div>

                    </div>

                    <div>
                        <input 
                            type='radio'
                            value='Traumatic brain injury'
                            name='condition'
                            onChange={e => setCondition(e.target.value)}
                        />
                        <label>Traumatic brain injur</label>
                    </div>


                    <div>
                        <input 
                            type='radio'
                            value='Stroke'
                            name='condition'
                            onChange={e => setCondition(e.target.value)}
                        />
                        <label>Strok</label>
                    </div>


                    <div>
                        <input 
                            type='radio'
                            value='Motor delay'
                            name='condition'
                            onChange={e => setCondition(e.target.value)}
                        />
                        <label>Motor dela</label>
                    </div>


                    <div>
                        <input 
                            type='radio'
                            value='Aged'
                            name='condition'
                            onChange={e => setCondition(e.target.value)}
                        />
                        <label>Age</label>
                    </div>


                    <div>
                        <input 
                            type='radio'
                            value='Multiple sclerosis'
                            name='condition'
                            onChange={e => setCondition(e.target.value)}
                        />
                        <label>Multiple sclerosi</label>
                    </div>


                    <div>
                        <input 
                            type='radio'
                            value='Hand injury'
                            name='condition'
                            onChange={e => setCondition(e.target.value)}
                        />
                        <label>Hand injur</label>
                    </div>


                    <div>
                        <input 
                            type='radio'
                            value='Whiplash'
                            name='condition'
                            onChange={e => setCondition(e.target.value)}
                        />
                        <label>Whiplas</label>
                    </div>


                    <div>
                        <input 
                            type='radio'
                            value='Orthopaedic injury'
                            name='condition'
                            onChange={e => setCondition(e.target.value)}
                        />
                        <label>Orthopaedic injur</label>
                    </div>


                    <div>
                        <input 
                            type='radio'
                            value="Parkinson's disease"
                            name='condition'
                            onChange={e => setCondition(e.target.value)}
                        />
                        <label>Parkinson's diseas</label>
                    </div>


                    <div>
                        <input 
                            type='radio'
                            value='Burn injures'
                            name='condition'
                            onChange={e => setCondition(e.target.value)}
                        />
                        <label>Burn injure</label>
                    </div>


                    <div>
                        <input 
                            type='radio'
                            value='Amputation'
                            name='condition'
                            onChange={e => setCondition(e.target.value)}
                        />
                        <label>Amputation</label>
                    </div>


                    <div>
                        <input 
                            type='radio'
                            value='Osteoarthritis'
                            name='condition'
                            onChange={e => setCondition(e.target.value)}
                        />
                        <label>Osteoarthriti</label>
                    </div>

                </div>   

            </Collapse>


            <button className='button' onClick={ e => setIsOpen({difficulty: isOpen.difficulty?false: true})}>
                {
                    isOpen.difficulty?
                    <BsCaretRight />:
                    <BsCaretDown />    
                }
                <span>Exercise difficulty</span>
            </button>

            <Collapse isOpen={isOpen.difficulty}>
                <div className='difficulty'>
                    <label>
                        <input 
                            type='checkbox' value='Low' 
                            onChange={e => handleDifficultyArr(e, 0)}
                        />
                        Low
                    </label>

                    <label>
                        <input 
                            type='checkbox' value='Medium' 
                            onChange={e => handleDifficultyArr(e, 1)}
                        />
                        Meduim
                    </label>

                    <label>
                        <input 
                            type='checkbox' value='High' 
                            onChange={e => handleDifficultyArr(e, 2)}
                        />
                        High
                    </label>
                </div>
            </Collapse>



            <button className='button' onClick={ e => setIsOpen({equipment: isOpen.equipment?false: true})}>
                {
                    isOpen.equipment?
                    <BsCaretRight />:
                    <BsCaretDown />    
                }
                <span>Equipment available</span>
            </button>

            <Collapse isOpen={isOpen.equipment}>
                <div className='equipment'>
                    <label>
                        <input type='checkbox'/>
                        Free weights
                    </label>

                    <label>
                        <input type='checkbox'/>
                        Weight machine
                    </label>

                    <label>
                        <input type='checkbox'/>
                        Wall mounted pulleys
                    </label>

                    <label>
                        <input type='checkbox'/>
                        Theraband
                    </label>

                    <label>
                        <input type='checkbox'/>
                        Step/block
                    </label>

                    <label>
                        <input type='checkbox'/>
                        Standing equipment
                    </label>

                    <label>
                        <input type='checkbox'/>
                        Spints
                    </label>

                </div>
            </Collapse>


            <button className='button' onClick={ e => setIsOpen({exercise: isOpen.exercise?false: true})}>
                {
                    isOpen.exercise?
                    <BsCaretRight />:
                    <BsCaretDown />    
                }
                <span>Exercise type</span>
            </button>

            <Collapse isOpen={isOpen.exercise}>
                <div className='exercise'>
                    <label>
                        <input type='checkbox'/>
                        Stretching/ROW
                    </label>

                    <label>
                        <input type='checkbox'/>
                        Fitness training
                    </label>

                    <label>
                        <input type='checkbox'/>
                        Control exercises
                    </label>

                    <label>
                        <input type='checkbox'/>
                        Amplitude exercises
                    </label>

                    <label>
                        <input type='checkbox'/>
                        Clearing secretions
                    </label>

                    <label>
                        <input type='checkbox'/>
                        Manipulating objects
                    </label>

                </div>
            </Collapse>


            <button className='button' onClick={ e => setIsOpen({bodyPart: isOpen.bodyPart?false: true})}>
                {
                    isOpen.bodyPart?
                    <BsCaretRight />:
                    <BsCaretDown />    
                }
                <span>Body part</span>
            </button>

            <Collapse isOpen={isOpen.bodyPart}>
                <div className='body-part'>
                    <label>
                        <input type='checkbox'/>
                        Head/neck
                    </label>

                    <label>
                        <input type='checkbox'/>
                        Shoulder/upper arm
                    </label>

                    <label>
                        <input type='checkbox'/>
                        Elbow/forearm
                    </label>

                    <label>
                        <input type='checkbox'/>
                        Wrist/hand
                    </label>

                    <label>
                        <input type='checkbox'/>
                        Trunk/back
                    </label>

                    <label>
                        <input type='checkbox'/>
                        Hip/thigh
                    </label>

                    <label>
                        <input type='checkbox'/>
                        Knee/lower leg
                    </label>

                    <label>
                        <input type='checkbox'/>
                        Ankle/foot
                    </label>

                    <label>
                        <input type='checkbox'/>
                        Whole body
                    </label>

                </div>
            </Collapse>


            <button className='button' onClick={ e => setIsOpen({ageCategory: isOpen.ageCategory?false: true})}>
                {
                    isOpen.ageCategory?
                    <BsCaretRight />:
                    <BsCaretDown />    
                }
                <span>Age category</span>
            </button>

            <Collapse isOpen={isOpen.ageCategory}>
                <div className='age-category'>
                    <div>
                        <input 
                            type='radio'
                            value='Infant/young child'
                            name='ageCategory'
                            onChange={e => setAgeCategory(e.target.value)}
                        />
                        <label>Infant/young child</label>
                    </div>

                    <div>
                        <input 
                            type='radio'
                            value='Child'
                            name='ageCategory'
                            onChange={e => setAgeCategory(e.target.value)}
                        />
                        <label>Child</label>
                    </div>

                    <div>
                        <input 
                            type='radio'
                            value='Adult'
                            name='ageCategory'
                            onChange={e => setAgeCategory(e.target.value)}
                        />
                        <label>Adult</label>
                    </div>

                    <div>
                        <input 
                            type='radio'
                            value='Senior'
                            name='ageCategory'
                            onChange={e => setAgeCategory(e.target.value)}
                        />
                        <label>Senior</label>
                    </div>

                </div>
            </Collapse>


            <button className='button' onClick={ e => setIsOpen({imageOrientation: isOpen.imageOrientation?false: true})}>
            {
                    isOpen.imageOrientation?
                    <BsCaretRight />:
                    <BsCaretDown />    
                }
                <span>Image orientation</span>
            </button>

            <Collapse isOpen={isOpen.imageOrientation}>
                <div className='image-orientation'>
                    <div>
                        <input 
                            type='radio'
                            value='Not specified'
                            name='image-orientation'
                            onChange={e => setImageOrientation(e.target.value)}
                        />
                        <label>Not specified</label>
                    </div>

                    <div>
                        <input 
                            type='radio'
                            value='Left specified'
                            name='image-orientation'
                            onChange={e => setImageOrientation(e.target.value)}
                        />
                        <label>Left specified</label>
                    </div>

                    <div>
                        <input 
                            type='radio'
                            value='Right specified'
                            name='image-orientation'
                            onChange={e => setImageOrientation(e.target.value)}
                        />
                        <label>Right specified</label>
                    </div>
                    
                </div>
            </Collapse>


            <button className='button' onClick={ e => setIsOpen({exerciseImage: isOpen.exerciseImage?false: true})}>
                {
                    isOpen.exerciseImage?
                    <BsCaretRight />:
                    <BsCaretDown />    
                }
                <span>Select text to display with exercise images</span>
            </button>

            <Collapse isOpen={isOpen.exerciseImage}>
                <div className='exercise-image'>
                    <label>
                        <input type='checkbox'/>
                        Therapist`s aim
                    </label>

                    <label>
                        <input type='checkbox'/>
                        Client`s aim
                    </label>

                    <label>
                        <input type='checkbox'/>
                        Therapist`s intructions
                    </label>

                    <label>
                        <input type='checkbox'/>
                        Client`s intructions
                    </label>

                    <label>
                        <input type='checkbox'/>
                        Progressions and variations
                    </label>

                    <label>
                        <input type='checkbox'/>
                        Precoutions
                    </label>
                </div>
            </Collapse>

        </div>
    )
}

export default Sidebar

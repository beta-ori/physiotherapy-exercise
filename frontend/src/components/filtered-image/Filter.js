
export const filterExerciseProperties = (exercisePropertiesData, filterProperties) =>{
    console.log('hello');
    console.log(exercisePropertiesData);
    const data = exercisePropertiesData.filter(value => {
        let flag = true;

        if(filterProperties.searchText !== '')
            flag = flag && value.title.search(filterProperties.searchText) > -1;
    
        if(filterProperties.condition !== '')
            flag = flag && filterProperties.condition === value.condition;

        if(filterProperties.ageCategory !== '')
            flag = flag && filterProperties.ageCategory === value.ageCategory;
        
        if(filterProperties.difficulty.length > 0)
            flag = flag && filterProperties.difficulty.includes(value.difficulty);

        if(filterProperties.imageOrientaion !== '')
            flag = flag && filterProperties.imageOrientaion === value.imageOrientaion;

        if(filterProperties.equipment.length > 0)
            flag = flag && filterProperties.equipment.includes(value.equipment);

        if(filterProperties.exerciseType.length > 0)
            flag = flag && filterProperties.exerciseType.includes(value.exerciseType);

        if(filterProperties.bodyPart.length > 0)
            flag = flag && filterProperties.bodyPart.includes(value.bodyPart);

        return flag;
    })
    return data;
}

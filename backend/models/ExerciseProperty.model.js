const ExerciseProperty = (sequelize, DataTypes) => {
    const ExerciseProperty = sequelize.define('ExerciseProperty', {
        title: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },

        condition: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },

        difficulty: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },

        equipment: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },

        exerciseType: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },

        bodyPart: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },

        ageCategory: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },

        imageOrientation: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },

        imageUrl: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        }
    })

    return ExerciseProperty
}

module.exports = ExerciseProperty;
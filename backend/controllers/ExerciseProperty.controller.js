const { Op } = require("sequelize");
const db = require('../models');
const ExerciseProperty = db.ExerciseProperty;

exports.create = (req, res) => {

    ExerciseProperty.create(req.body)
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json(err);
        })
}

exports.findAll = (req, res) => {

    const queryData = req.query;
    let query = {};

    if(queryData.condition !== '')
        query["condition"] = queryData.condition;

    if(queryData.ageCategory !== '')
        query["ageCategory"] = queryData.ageCategory;

    if(queryData.imageOrientation !== '')
        query["imageOrientation"] = queryData.imageOrientation;

    if(queryData.difficulty && queryData.difficulty.length > 0)
        query["difficulty"] = queryData.difficulty;

    if(queryData.equipment && queryData.equipment.length > 0)
        query["equipment"] = queryData.equipment;

    if(queryData.exerciseType && queryData.exerciseType.length > 0)
        query["exerciseType"] = queryData.exerciseType;

    if(queryData.bodyPart && queryData.bodyPart.length > 0)
        query["bodyPart"] = queryData.bodyPart;

    ExerciseProperty.findAll({where: query })
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.json(err);
        })
}

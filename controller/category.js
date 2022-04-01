const categoryModel = require("../model/category");


exports.add = (request,response)=>{
    categoryModel.create({
        name : request.body.name,
        image : "https://book-my-meal-api.herokuapp.com/images/"+request.file.filename
    }).then(result=>{
        return response.status(200).json(result);
    }).catch(err=>{
        return response.status(500).json(err);
    });
}
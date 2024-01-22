const knex = require("./knex");

function getAllCars(){
    return knex("cars").select("*");
};

function createCar(car){
    return knex("cars").insert(car);
};

module.exports = {
    getAllCars,
    createCar
};
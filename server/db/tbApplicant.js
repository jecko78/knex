const knex = require("./knex");

function getAllApplicant(){
    return knex("applicant").select("*");
};

function createApplicant(applicant){
    return knex("applicant").insert(applicant);
};

module.exports = {
    getAllApplicant,
    createApplicant
};
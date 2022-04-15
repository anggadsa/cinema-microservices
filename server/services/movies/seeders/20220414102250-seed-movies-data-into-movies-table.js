'use strict';

const moviesData = require(`../masterdata/movies.json`)
// const moviesSeedData = moviesData.map(eachMoviesData =>{
//   return eachMoviesData
// });

// console.log(moviesSeedData)

module.exports = {
  async up (queryInterface, Sequelize) {
    //seed all moviesData json into Movies table
    const moviesSeedData = moviesData.map((eachMoviesData) => {
      eachMoviesData.createdAt = new Date()
      eachMoviesData.updatedAt = new Date()
      return eachMoviesData
    })
    
    await queryInterface.bulkInsert('Movies', moviesSeedData);
  },

  async down (queryInterface, Sequelize) {
    // delete all movies table values
    await queryInterface.bulkDelete('Movies', null, { truncate: true, restartIdentity:true });
  }
};

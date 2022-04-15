'use strict';

const seriesData = require('../masterdata/series.json');

module.exports = {
  async up (queryInterface, Sequelize) {
      //seed all moviesData json into Movies table
      const seriesSeedData = seriesData.map((eachSeriesData) => {
        eachSeriesData.createdAt = new Date()
        eachSeriesData.updatedAt = new Date()
        return eachSeriesData
      })
      
      await queryInterface.bulkInsert('Series', eachSeriesData);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Series', null, { truncate: true, restartIdentity:true });
  }
};

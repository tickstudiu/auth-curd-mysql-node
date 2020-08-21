const pool = require("../../config/database");

module.exports = {
  getDatas: callBack => {
    pool.query(
      `select TITLE, FIRSTNAME from mock_data`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getDatasBypage: callBack => {
    pool.query(
      `select TITLE, FIRSTNAME from mock_data`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

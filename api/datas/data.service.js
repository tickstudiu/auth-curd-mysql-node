const pool = require("../../config/database");

module.exports = {
  getDatas: (sqlQuery, callBack) => {
    pool.query(
      `select ${sqlQuery} from mock_data`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getDatasBypage: (sqlQuery, callBack) => {
    pool.query(
      `select ${sqlQuery} from mock_data`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getDatasByName: (sqlQuery, callBack) => {
    pool.query(
      `select ${sqlQuery} from mock_data`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getDatasByNameByPage: (sqlQuery, callBack) => {
    pool.query(
      `select ${sqlQuery} from mock_data`,
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

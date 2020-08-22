const {
  getDatas,
  getDatasBypage,
  getUserByName,
  getUserByNameByPage,
} = require("./data.service");

let sqlQuery = {
  query: "TITLE, FIRSTNAME, LASTNAME, GENDER, LANGUAGE, SHIRT_SIZE, UNIVERSITY",
  title: true,
  firstName: true,
  lastName: true,
  gender: true,
  language: true,
  shirtSize: true,
  university: true,
  companyName: false,
  department: false,
  jobTitle: false,
  phone: false,
  city: false,
  countryCode: false,
  country: false,
  postCode: false,
  state: false,
  streetAddress: false,
  movieGenres: false,
  carMark: false,
  money: false,
  color: false,
};

module.exports = {
  getDatas: (req, res) => {
    getDatas(sqlQuery.query, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }

      // limit as 20
      const limit = 15;
      // page number
      const page = 1;

      let pagination = {
        limitPerPage: limit,
        currentPage: Number(page),
        totalPage: Math.ceil(results.length / limit),
        nextPage:
          Number(page) + 1 > Math.ceil(results.length / limit) ? false : true,
        backPage: Number(page) - 1 == 0 ? false : true,
        dataPage: results.slice(page * limit - 15, page * limit),
      };
      return res.json({
        success: 1,
        data: pagination,
      });
    });
  },

  getDatasBypage: (req, res) => {
    getDatasBypage(sqlQuery.query, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      // limit as 20
      const limit = 15;
      // page number
      const page = req.params.page;

      let pagination = {
        limitPerPage: limit,
        currentPage: Number(page),
        totalPage: Math.ceil(results.length / limit),
        nextPage:
          Number(page) + 1 > Math.ceil(results.length / limit) ? false : true,
        backPage: Number(page) - 1 == 0 ? false : true,
        dataPage: results.slice(page * limit - 15, page * limit),
      };
      return res.json({
        success: 1,
        data: pagination,
      });
    });
  },

  getUserByName: (req, res) => {
    getUserByName(sqlQuery.query, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not Found",
        });
      }

      // get text
      const text = req.body.text;
      // filter
      const filterByName = results.filter((row) => {
        return (
          row.FIRSTNAME.toLowerCase().indexOf(text.toLowerCase()) !== -1 ||
          row.LASTNAME.toLowerCase().indexOf(text.toLowerCase()) !== -1
        );
      });

      // limit as 20
      const limit = 15;
      // page number
      const page = 1;

      let pagination = {
        limitPerPage: limit,
        currentPage: Number(page),
        totalPage: Math.ceil(filterByName.length / limit),
        nextPage:
          Number(page) + 1 > Math.ceil(filterByName.length / limit)
            ? false
            : true,
        backPage: Number(page) - 1 == 0 ? false : true,
        dataPage: filterByName.slice(page * limit - 15, page * limit),
      };

      return res.json({
        success: 1,
        data: pagination,
      });
    });
  },

  getUserByNameByPage: (req, res) => {
    getUserByNameByPage(sqlQuery.query, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not Found",
        });
      }

      // get text
      const text = req.body.text;
      // filter
      const filterByName = results.filter((row) => {
        return (
          row.FIRSTNAME.toLowerCase().indexOf(text.toLowerCase()) !== -1 ||
          row.LASTNAME.toLowerCase().indexOf(text.toLowerCase()) !== -1
        );
      });

      // limit as 20
      const limit = 15;
      // page number
      const page = req.params.page;

      let pagination = {
        limitPerPage: limit,
        currentPage: Number(page),
        totalPage: Math.ceil(filterByName.length / limit),
        nextPage:
          Number(page) + 1 > Math.ceil(filterByName.length / limit)
            ? false
            : true,
        backPage: Number(page) - 1 == 0 ? false : true,
        dataPage: filterByName.slice(page * limit - 15, page * limit),
      };

      return res.json({
        success: 1,
        data: pagination,
      });
    });
  },

  setSqlQuery: (req, res) => {
    if (!req.body) {
      return res.status(400).json({
        success: 0,
        message: "Not data to send.",
      });
    }

    console.log(req.body)

    // if(req.body.title) sqlQuery.title = true;
    // else sqlQuery.title = false;

    // if(req.body.firstName) sqlQuery.firstName = true;
    // else sqlQuery.firstName = false;

    // let newSqlQuery = `${sqlQuery.title ? 'TITLE':''} ${sqlQuery.firstName ? sqlQuery.title ? ',FIRSTNAME':'FIRSTNAME':''}`;
    // sqlQuery.query = newSqlQuery

    return res.status(200).json({
      success: 1,
      query: sqlQuery,
    });
  },
};

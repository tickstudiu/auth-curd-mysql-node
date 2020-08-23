const {
  getDatas,
  getDatasBypage,
  getDatasByName,
  getDatasByNameByPage,
} = require("./data.service");

const { getVisbleByEmail } = require("../visibles/visible.service");

let sqlQuery = {
  query: "TITLE, FIRSTNAME, LASTNAME, GENDER, LANGUAGE, SHIRT_SIZE, UNIVERSITY",
};

const genQuery = (data) => {
  const {
    TITLE,
    FIRSTNAME,
    LASTNAME,
    GENDER,
    LANGUAGE,
    SHIRT_SIZE,
    UNIVERSITY,
    COMPANY_NAME,
    DEPARTMENT,
    JOB_TITLE,
    PHONE,
    CITY,
    COUNTRY,
    COUNTRY_CODE,
    POSTAL_CODE,
    STATE,
    STREET_ADDRESS,
    MOVIE_GENRES,
    CAR_MARK,
    MONEY,
    COLOR,
  } = data;

  let query = [];

  if (TITLE) query.push("TITLE");
  if (FIRSTNAME) query.push("FIRSTNAME");
  if (LASTNAME) query.push("LASTNAME");
  if (GENDER) query.push("GENDER");
  if (LANGUAGE) query.push("LANGUAGE");
  if (SHIRT_SIZE) query.push("SHIRT_SIZE");
  if (UNIVERSITY) query.push("UNIVERSITY");
  if (COMPANY_NAME) query.push("COMPANY_NAME");
  if (DEPARTMENT) query.push("DEPARTMENT");
  if (JOB_TITLE) query.push("JOB_TITLE");
  if (PHONE) query.push("PHONE");
  if (CITY) query.push("CITY");
  if (COUNTRY) query.push("COUNTRY");
  if (COUNTRY_CODE) query.push("COUNTRY_CODE");
  if (POSTAL_CODE) query.push("POSTAL_CODE");
  if (STATE) query.push("STATE");
  if (STREET_ADDRESS) query.push("STREET_ADDRESS");
  if (MOVIE_GENRES) query.push("MOVIE_GENRES");
  if (CAR_MARK) query.push("CAR_MARK");
  if (MONEY) query.push("MONEY");
  if (COLOR) query.push("COLOR");

  return query;
};

module.exports = {
  getDatas: (req, res) => {
    getVisbleByEmail(req.body.email, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(400).json({
          success: 0,
          message: "Error",
        });
      }
      if (!results || results.length === 0) {
        return res.status(400).json({
          success: 0,
          message: "Record not Found",
        });
      }

      getDatas(genQuery(results[0]), (err, results) => {
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

        return res.status(200).json({
          success: 1,
          data: pagination,
        });
      });
    });
  },

  getDatasBypage: (req, res) => {
    getVisbleByEmail(req.body.email, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(400).json({
          success: 0,
          message: "Error",
        });
      }
      if (!results || results.length === 0) {
        return res.status(400).json({
          success: 0,
          message: "Record not Found",
        });
      }

      getDatasBypage(genQuery(results[0]), (err, results) => {
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
    });
  },

  getDatasByName: (req, res) => {
    getVisbleByEmail(req.body.email, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(400).json({
          success: 0,
          message: "Error",
        });
      }
      if (!results || results.length === 0) {
        return res.status(400).json({
          success: 0,
          message: "Record not Found",
        });
      }

      getDatasByName(genQuery(results[0]), (err, results) => {
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
    });
  },

  getDatasByNameByPage: (req, res) => {
    getVisbleByEmail(req.body.email, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(400).json({
          success: 0,
          message: "Error",
        });
      }
      if (!results || results.length === 0) {
        return res.status(400).json({
          success: 0,
          message: "Record not Found",
        });
      }

      getDatasByNameByPage(genQuery(results[0]), (err, results) => {
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
    });
  },
};

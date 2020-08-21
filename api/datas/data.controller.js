const { getDatas, getDatasBypage, getUserByName, getUserByNameByPage } = require("./data.service");

module.exports = {
  getDatas: (req, res) => {
    getDatas((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getDatasBypage: (req, res) => {
    getDatasBypage((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      // limit as 20
      const limit = 15
      // page number
      const page = req.params.page

      let pagination = {
        limitPerPage: limit,
        currentPage: Number(page),
        totalPage: Math.ceil(results.length / limit),
        nextPage: Number(page) + 1 >= Math.ceil(results.length / limit) ? false : true,
        backPage: Number(page) - 1 == 0 ? false : true,
        dataPage: results.slice((page * limit) - 15, page * limit)
      }
      return res.json({
        success: 1,
        data: pagination,
      });
    });
  },

  getUserByName: (req, res) => {
    getUserByName((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not Found"
        });
      }

      // get text
      const text = req.body.text;
      // filter
      const filterByName = results.filter( row => {
        return row.FIRSTNAME.toLowerCase().indexOf(text.toLowerCase()) !== -1 || row.LASTNAME.toLowerCase().indexOf(text.toLowerCase()) !== -1;
      })

      // limit as 20
      const limit = 15
      // page number
      const page = 1

      let pagination = {
        limitPerPage: limit,
        currentPage: Number(page),
        totalPage: Math.ceil(filterByName.length / limit),
        nextPage: Number(page) + 1 >= Math.ceil(filterByName.length / limit) ? false : true,
        backPage: Number(page) - 1 == 0 ? false : true,
        dataPage: filterByName.slice((page * limit) - 15, page * limit)
      }
      
      return res.json({
        success: 1,
        data: pagination
      });
    });
  },

  getUserByNameByPage: (req, res) => {
    getUserByNameByPage((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not Found"
        });
      }

      // get text
      const text = req.body.text;
      // filter
      const filterByName = results.filter( row => {
        return row.FIRSTNAME.toLowerCase().indexOf(text.toLowerCase()) !== -1 || row.LASTNAME.toLowerCase().indexOf(text.toLowerCase()) !== -1;
      })

      // limit as 20
      const limit = 15
      // page number
      const page = req.params.page

      let pagination = {
        limitPerPage: limit,
        currentPage: Number(page),
        totalPage: Math.ceil(filterByName.length / limit),
        nextPage: Number(page) + 1 >= Math.ceil(filterByName.length / limit) ? false : true,
        backPage: Number(page) - 1 == 0 ? false : true,
        dataPage: filterByName.slice((page * limit) - 15, page * limit)
      }
      
      return res.json({
        success: 1,
        data: pagination
      });
    });
  },
};

const { getDatas, getDatasBypage } = require("./data.service");

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
};

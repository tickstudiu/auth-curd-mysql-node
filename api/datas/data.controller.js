const { getDatas } = require("./data.service");

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
};

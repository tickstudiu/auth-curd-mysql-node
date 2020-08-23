const {
  setVisible,
  getVisbleByEmail,
  updateVisibleByEmail,
} = require("./visible.service");

module.exports = {
  setVisible: (req, res) => {
    const body = req.body;
    setVisible(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(400).json({
          success: 0,
          message: "error",
        });
      }
      return res.status(200).json({
        success: 1,
        message: "updated successfully",
        data: results,
      });
    });
  },

  getVisbleByEmail: (req, res) => {
    const email = req.params.email;
    getVisbleByEmail(email, (err, results) => {
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
      return res.status(200).json({
        success: 1,
        data: results[0],
      });
    });
  },

  updateVisibleByEmail: (req, res) => {
    const body = req.body;
    updateVisibleByEmail(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(400).json({
          success: 1,
          message: "error"
        });
      }
      return res.status(200).json({
        success: 1,
        message: "updated successfully",
        data: results,
      });
    });
  },
};

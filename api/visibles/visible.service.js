const pool = require("../../config/database");

module.exports = {
  setVisible: (data, callBack) => {
    pool.query(
      `insert into visible(email, TITLE, FIRSTNAME, LASTNAME, GENDER, LANGUAGE, SHIRT_SIZE, UNIVERSITY, COMPANY_NAME, DEPARTMENT, JOB_TITLE, PHONE, CITY, COUNTRY, COUNTRY_CODE, POSTAL_CODE, STATE, STREET_ADDRESS, MOVIE_GENRES, CAR_MARK, MONEY, COLOR) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        data.email,
        data.title,
        data.firstName,
        data.lastName,
        data.gender,
        data.language,
        data.shirtSize,
        data.university,
        data.companyName,
        data.department,
        data.jobTitle,
        data.phone,
        data.city,
        data.country,
        data.countryCode,
        data.postalCode,
        data.state,
        data.streetAddress,
        data.movieGenres,
        data.carMark,
        data.money,
        data.color,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getVisbleByEmail: (email, callBack) => {
    pool.query(
      `select * from visible where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateVisibleByEmail: (data, callBack) => {
    pool.query(
      `update visible set TITLE=?, FIRSTNAME=?, LASTNAME=?, GENDER=?, LANGUAGE=?, SHIRT_SIZE=?, UNIVERSITY=?, COMPANY_NAME=?, DEPARTMENT=?, JOB_TITLE=?, PHONE=?, CITY=?, COUNTRY=?, COUNTRY_CODE=?, POSTAL_CODE=?, STATE=?, STREET_ADDRESS=?, MOVIE_GENRES=?, CAR_MARK=?, MONEY=?, COLOR=? where email=?`,
      [
        data.title,
        data.firstName,
        data.lastName,
        data.gender,
        data.language,
        data.shirtSize,
        data.university,
        data.companyName,
        data.department,
        data.jobTitle,
        data.phone,
        data.city,
        data.country,
        data.countryCode,
        data.postalCode,
        data.state,
        data.streetAddress,
        data.movieGenres,
        data.carMark,
        data.money,
        data.color,
        data.email,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
};

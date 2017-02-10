function login(cb, succeeds = true) {
  return succeeds ? cb(null, 'Success') : cb('Unauthorized');
}

function fetchData(cb, succeeds = true) {
  return succeeds ? cb(null, [1, 2, 3]) : cb('Unable to fetch data');
}

function processResult(data, cb, succeeds = true) {
  return succeeds ? cb(null, 'Done') : cb('Unable to fetch data');
}

function fullFlow({ loginSucceeds = true, fetchSucceeds = true, processResultSucceeds = true, cb }) {
  login((err) => {
    if (err) {
      return cb({ error: err, code: 401 });
    }

    // Login successful

    fetchData((er, res) => {
      if (er) {
        return cb({ error: er, code: 500 });
      }

      // Fetch data successful

      processResult(res, (e, r) => {
        if (e) {
          return cb({ error: e, code: 500 });
        }

        return cb(null, r);
      });
    });
  });
}

function demo({ loginSucceeds = true, fetchSucceeds = true, processResultSucceeds = true } = {}) {
  let cb = (err, result) => {
    if (err) {
      console.error(`An error occured: ${err}`);
      return;
    }

    console.log(result);
  };

  fullFlow({ loginSucceeds, fetchSucceeds, processResultSucceeds, cb });
}

module.exports = {
  demo,
  fetchData,
  login,
  processResult
};

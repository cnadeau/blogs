function login(succeeds = true) {
  return succeeds ? Promise.resolve('Success') : Promise.reject('Unauthorized');
}

function fetchData(succeeds = true) {
  return succeeds ? Promise.resolve([1, 2, 3]) : Promise.reject('Unable to fetch data');
}


function processResult(result, succeeds = true) {
  return succeeds ? Promise.resolve('Done') : Promise.reject('Processing error');
}

function demo({ loginSucceeds = true, fetchSucceeds = true, processResultSucceeds = true } = {}) {
  login(loginSucceeds)
    .catch(e => {
      return Promise.reject(e);
    })
    .then(() => fetchData(fetchSucceeds))
    .then(result => processResult(result, processResultSucceeds))
    .then(finalResult => console.log(finalResult))
    .catch(e => {
      console.log(`An error occurred : ${e}`);
    });
}

module.exports = {
  demo,
  fetchData,
  login,
  processResult
};

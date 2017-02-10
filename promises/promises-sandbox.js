// Outputs it is currently within a then, and allows to throw
// a new error easily right after
function handleThen(id) {
  console.log(`then ${id}`);

  // Returns an object with throwError function
  // to be able to throw a new error in a then
  return {
    throwError: () => {
      throw new Error(`error ${id}`);
    },
    reject: () => Promise.reject(new Error(`error ${id}`))
  };
}

// Outputs it is currently within a catch, and allows to throw
// a new error easily right after
function handleCatch(id, error) {
  console.log(`catch ${id} : ${error}`);

  // Returns an object with rethrow function
  // to be able to rethrow the received error
  // in a catch
  return {
    rethrow: () => {
      throw error;
    },
    reject: () => Promise.reject(error)
  };
}

Promise.resolve()
  .then(() => handleThen(1))
  .catch(e => handleCatch(1, e))
  .then(() => handleThen(2))
  .catch(e => handleCatch(2, e))
  .then(() => handleThen(3))
  .catch(e => handleCatch(3, e))
  .catch(e => console.log(`something went wrong : ${e}`))
  .then(() => console.log('Done'));
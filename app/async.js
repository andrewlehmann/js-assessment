asyncAnswers = {
  /**
     * Asynchronously returns a value via a promise. Example:
     * async('anyValue').then((result) => { return result === 'anyValue';});
     * 
     * @param value - Any value
     * @returns {then: function} A promise like object containing a then property.
     */
  async: function async(value) {
    const promise = new Promise((resolve, reject) => {
      if (value) {
        resolve(value);
      }
    });
    promise.then((passedValue) => {
      console.log(`${passedValue} is the value`);

      return passedValue;
    });

    return promise;
  },

  /**
     * Creates a promise that resolves with the data returned from an ajax call to the url url.
     * You may use jquery, XMLHttpRequest, or fetch.
     * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
     * https://api.jquery.com/jQuery.ajax/
     * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API   * 
     * 
     * @param {String} url - a valid url
     * @returns {then: function} A promise like object containing a then property.
     */
  manipulateRemoteData: function manipulateRemoteData(url) {
    const request = $.get(url);

    return request.then((data) => {
      const names = [];

      data.people.forEach((person) => {
        names.push(person.name);
      });

      return names.sort();
    });
  },
};

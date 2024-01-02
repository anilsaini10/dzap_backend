const axios = require('axios');


const getAllList = async (req, res) => {

    let response = null;

    const params = {
        start: 1,
        limit: 100,  // Adjust the limit based on your needs
        convert: 'USD',
      };
      
      const headers = {
        'Accepts': 'application/json',
        'X-CMC_PRO_API_KEY': 'b5a7127c-5c03-4f89-9cbe-bba45c92391d',
        // 'Accept-Encoding': 'deflate,gzip',
      };
    // new Promise(async (resolve, reject) => {
        try {
            response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
            params,
            headers
            });
            // console.log("RESPONSE -> ", typeof(response))
        } catch (ex) {
            response = null;
            // error
            console.log(ex);
            // reject(ex);
        }
        if (response) {
            // success
            const json = response.data?.data;
            console.log(json[0]);
            return res.send({ "data": json });
        }
    // });

    return res.send({ "ERROR": "ERROR" });
};

module.exports = {

    allList: getAllList,

};
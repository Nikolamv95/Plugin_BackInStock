/* eslint-disable linebreak-style */
/* eslint-disable keyword-spacing */
/* eslint-disable no-empty */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */

var CustomObjectMgr = require('dw/object/CustomObjectMgr');
var ProductMgr = require('dw/catalog/ProductMgr');
var twillioService = require('../twillioService');
var Transaction = require('dw/system/Transaction');
var Logger = require('dw/system/Logger');

/**
* Custom Job which has to get all custom objects from type NotifyMeBackInStock, and to check 
* which products are available and send sms to the subscribed phone numbers.
*/
module.exports.execute = function () {
    let productIterator = CustomObjectMgr.getAllCustomObjects('NotifyMeBackInStock');
    let errorMsgsArr;
    let errorTwillio = false;
    var logger = Logger.getLogger('BackInStockJob','BackInStockJob');

    try {
        if (productIterator.count !== 0) {
            logger.info('No BackInStockJob objects available.')
        }

        while (productIterator.hasNext()) {
            const fromNumber = '+12677133676';
            const textMsg = 'Hi, the product is in stock';
            
            let currentProductObj = productIterator.next();
            
            let productId = currentProductObj.custom.productId;
            let phoneNumbers = currentProductObj.custom.phoneNumbers;
            let product = ProductMgr.getProduct(productId);

            if (product.availabilityModel.inStock) {
                let phoneNumbersArr = phoneNumbers.split(',');
                for (let i = 0; i < phoneNumbersArr.length; i++) {
                    let toNumber = phoneNumbersArr[i];
                    // Change toNumber with '+359878309723' to test the jobs 
                    let response = twillioService.sendSMS(fromNumber, textMsg, toNumber);

                    if(response === null){
                        errorTwillio = true;
                    }
                }
                // Don't remove the custom object if the sms was not send.
                if(!errorTwillio){
                    Transaction.wrap(function () {
                        CustomObjectMgr.remove(currentProductObj);
                    });
                    errorTwillio = false;
                }
            }
        }
    } catch (error) {
        logger.error('Check errorMsgsArr for possible mistakes and error. => {0} ', error.message)
        throw Error(error);
    } finally {
        if (productIterator) {
            productIterator.close();
        }
    }
};
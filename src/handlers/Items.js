const { getItems, getItemById, addItem } = require('../helpers/ItemsDB');

/**
 * A simple example includes a HTTP get method to get all items.
 * @param {Object} event
 * @returns {Object} response
 */
exports.getAllItemsHandler = async (event) => {
    const items = getItems();
    const response = {
        statusCode: 200,
        body: JSON.stringify(items)
    };

    return response;
};

/**
 * A simple example includes a HTTP get method to get one item by id.
 *
 * @param {Object} event
 * @return {Object} response
 */
exports.getByIdHandler = async (event) => {
    // Get id from pathParameters from APIGateway because of `/{id}` at template.yml
    const id = event.pathParameters.id;
    const item = getItemById(id);
    const response = {
        statusCode: 200,
        body: JSON.stringify(item)
    };

    return response;
};

/**
 * A simple example includes a HTTP post method to add an item.
 *
 * @param {Object} event
 * @return {Object} response
 */
exports.postItemHandler = async (event) => {
    // Get id and title from the body of the request
    const body = JSON.parse(event.body);
    const item = {
        id: body.id,
        title: body.title
    };

    addItem(item);

    const response = {
        statusCode: 200,
        body: JSON.stringify(body)
    };

    return response;
};

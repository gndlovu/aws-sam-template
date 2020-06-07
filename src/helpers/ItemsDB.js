const DB = [
    {
        id: 1,
        title: 'Some title 1',
        blah: 'Blah'
    },
    {
        id: 2,
        title: 'Some title 2',
        blah: 'Blah'
    }
];

/**
 * Gets a list of items.
 *
 * @return {Array<Object>} DB
 */
function getItems() {
    return DB;
}

/**
 * Gets an item
 *
 * @param {int} id
 * @return {Object|Error}
 */
function getItemById(id) {
    const item = DB.find(x => x.id === id);
    if (!item) {
        const err = `ItemsDB: Item with id ${id} does not exist.`;

        // All log statements are written to CloudWatch
        console.log(err);

        throw new Error(err);
    }

    return item;
}

function addItem(item) {
    DB.push(item);
}

function updateItem(item) {
    const itemIndex = DB.findIndex((x) => x.id === item.id);
    if (itemIndex === -1) {
        const err = `ItemsDB: Item with id ${item.id} does not exist.`;

        // All log statements are written to CloudWatch
        console.log(err);

        throw new Error(err);
    }

    DB[itemIndex] = item;
}

module.exports = {
    getItemById,
    getItems,
    addItem,
    updateItem
};

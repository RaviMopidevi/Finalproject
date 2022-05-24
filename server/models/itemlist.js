const con = require("./db_connect");


async function createTable() {
    let sql = `CREATE TABLE IF NOT EXISTS items (
    itemid INT NOT NULL AUTO_INCREMENT,
    itemname VARCHAR(255) NOT NULL UNIQUE,
    itemcost NUMERIC,
    addtocart NUMERIC,
    CONSTRAINT item_pk PRIMARY KEY(itemid)
  )`;
    await con.query(sql);
}
console.log("auth"+con.authorized);
createTable();

let getItems = async () => {
    const sql = `SELECT * FROM items`;
    return await con.query(sql);
};

async function getItem(item) {
    let sql;
    if(item.itemid) {
        sql = `SELECT * FROM items
      WHERE user_id = ${item.itemid}
    `;
    } else {
        sql = `SELECT * FROM items
      WHERE username = "${item.itemname}"
    `;
    }

    return await con.query(sql);
}



async function addToCart(item) { ;

    const sql = `INSERT INTO items (itemname, itemcost)
    VALUES ("${item.itemname}", "${item.itemcost}")
  `;

    const insert = await con.query(sql);
    const newItem = await getUser(item);
    return newItem[0];
}

async function deleteItem(itemid) {
    const sql = `DELETE FROM items 
    WHERE itemid = ${itemid}
  `;
    await con.query(sql);

}

/*async function userExists(username) {
    const sql = `SELECT * FROM users
    WHERE username = "${username}"
  `;
    return await con.query(sql);
}*/

/*async function editUser(user) {
    const sql = `UPDATE users SET
    username = "${user.userName}"
    WHERE user_id = ${user.userId}
  `;
    const update = await con.query(sql);
    const newUser = await getUser(user);
    return newUser[0];
}*/


module.exports = { getItem, addToCart, register, deleteItem, getItems, createTable };

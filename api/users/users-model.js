const db = require("../../data/db-config");

function find() {
 return db("users").select("id","username").orderBy("id");
}


function findBy(filter) {
 return db("users").where(filter).orderBy("id");
}


function findById(user_id) {
 return db("users").where({ user_id }).first()
}


function add(user) {
 cont [id] = await db("users").insert(user, "id");
 return findById(id);
}

module.exports = {
  find,
  findBy,
  add,
  findById
}
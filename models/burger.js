var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.allOrder("burgers", "date, id", function(res) {
            cb(res);
        });
    },
    create: function(vals, cb) {
        orm.create("burgers", ['burger_name'], vals, function(res) {
            cb(res);
        });
    },
    update: function(ColVal, condition, cb) {
        ColVal.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
        orm.update("burgers", ColVal, condition, function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete("burgers", condition, function(res) {
            cb(res);
        });
    }
};
module.exports = burger;
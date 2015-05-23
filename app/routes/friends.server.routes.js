'use strict';

module.exports = function(app) {
    // Routing logic   
    var users = require('../../app/controllers/users.server.controller');
    var friends = require('../../app/controllers/friends.server.controller');

    // fruends stuff
    app.route('/friends/:user1_id([0-9]+)/:user2_id([0-9]+)')
        .post(friends.create);

    app.route('/friends/:user1_id([0-9]+)/:user2_id([0-9]+)')
        .delete(friends.delete);

    app.route('/friends/:user_id([0-9]+)')
        .get(friends.list);

    app.param('user1_id', users.userByID);
    app.param('user2_id', users.userByID);
    app.param('user_id', users.userByID);



};
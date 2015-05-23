define({ "api": [
  {
    "type": "post",
    "url": "app.route('/friends/:user1_id/:user2_id",
    "title": "Create",
    "name": "CreateFriendship",
    "group": "Friends",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "user1_id",
            "description": "<p>Users unique ID.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "user2_id",
            "description": "<p>New friend id -&gt; users unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "-",
            "description": "<p>with user's id's</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/friends.server.routes.js",
    "groupTitle": "Friends"
  },
  {
    "type": "delete",
    "url": "app.route('/friends/:user1_id/:user2_id",
    "title": "Delete",
    "name": "Deleteriendship",
    "group": "Friends",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "user1_id",
            "description": "<p>Users unique ID.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "user2_id",
            "description": "<p>Friend to delete -&gt; users unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "-",
            "description": "<p>with user's id's</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/friends.server.routes.js",
    "groupTitle": "Friends"
  },
  {
    "type": "get",
    "url": "app.route('/friends/:user1_id/:user2_id",
    "title": "List",
    "name": "ListOfUSerFriends",
    "group": "Friends",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "user_id",
            "description": "<p>Users unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "-",
            "description": "<p>with  user's friends data</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/friends.server.routes.js",
    "groupTitle": "Friends"
  }
] });
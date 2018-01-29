var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');


MongoClient.connect('mongodb://localhost:27017/crunchbase', function(err, client) {

    assert.equal(err, null);
    console.log("Successfully connected to MongoDB.");

    var db = client.db('crunchbase');

    var query = {"category_code": "biotech"};

    var cursor = db.collection('companies').find(query);

    cursor.forEach(
        function(doc) {
            console.log( doc.name + " is a " + doc.category_code + " company." );
        },
        function(err) {
            assert.equal(err, null);
            return client.close();
        }
    );

});

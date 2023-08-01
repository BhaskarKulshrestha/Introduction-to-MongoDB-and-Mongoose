- [To check the version of mongoDB](#to-check-the-version-of-mongodb)
- [Establish a connection (First step only required once)](#establish-a-connection-first-step-only-required-once)
- [To go into the mongoDB shell](#to-go-into-the-mongodb-shell)
- [--------------  CREATE OPERATION--------------](#----------------create-operation--------------)
- [show dbs](#show-dbs)
- [use DATABASE\_NAME](#use-database_name)
- [db](#db)
- [db.dropDatabase()](#dbdropdatabase)
- [what is a collection in mongodb ?](#what-is-a-collection-in-mongodb-)
- [Collection Commands](#collection-commands)
- [------------READING OPERATION -------------](#------------reading-operation--------------)
- [Read operation](#read-operation)
- [db.collection.find(query, projection, options)](#dbcollectionfindquery-projection-options)
- [Returns:](#returns)
- [--------------UPDATE OPERATION -----------------](#--------------update-operation------------------)
- [------------- DELETE OPERATION ----------------](#--------------delete-operation-----------------)
- [\*\* To show the collection in a well format use pretty()\*\*](#-to-show-the-collection-in-a-well-format-use-pretty)
- [How to connect MongoDB application to the Node.js application:](#how-to-connect-mongodb-application-to-the-nodejs-application)
- [--------using MongoDB native driver-----------](#--------using-mongodb-native-driver-----------)
- [-------- using ODM =\> MONGOOSE ---------](#---------using-odm--mongoose----------)
- [Making a document](#making-a-document)
- [Inserting a data:](#inserting-a-data)
- [Mongoose save function : DOCUMENT\_NAME.save()](#mongoose-save-function--document_namesave)
- [Reading the Data:](#reading-the-data)
    - [if we want to find all the names of the fruits in the collection named as fruits then:-](#if-we-want-to-find-all-the-names-of-the-fruits-in-the-collection-named-as-fruits-then-)
- [Validation in mongoose:](#validation-in-mongoose)
- [update operation](#update-operation)



<h1>Getting started with mongoDB</h1>


Following Documents for help:
[MongoDB CRUD document](https://www.mongodb.com/docs/manual/crud/)
[CodeWithHarry](https://www.codewithharry.com/blogpost/mongodb-cheatsheet/)


## To check the version of mongoDB
    mongo --version

## Establish a connection (First step only required once)
    mongod
mongod stands for “Mongo Daemon”. mongod is a background process used by MongoDB. The main purpose of mongod is to manage all the MongoDB server tasks. For instance, accepting requests, responding to client, and memory management

## To go into the mongoDB shell
    mongo

***some common commands :***

    db.help()                    help on db methods
    db.mycoll.help()             help on collection methods
    sh.help()                    sharding helpers
    rs.help()                    replica set helpers
    help admin                   administrative help
    help connect                 connecting to a db help
    help keys                    key shortcuts
    help misc                    misc things to know
    help mr                      mapreduce

    show dbs                     show database names
    show collections             show collections in current database
    show users                   show users in current database
    show profile                 show most recent system.profile entries with time >= 1ms
    show logs                    show the accessible logger names
    show log [name]              prints out the last segment of log in memory, 'global' is default
    use <db_name>                set current database
    db.mycoll.find()             list objects in collection mycoll
    db.mycoll.find( { a : 1 } )  list objects in mycoll where a == 1
    it                           result of the last line evaluated; use to further iterate
    DBQuery.shellBatchSize = x   set default number of items to display on shell
    exit                         quit the mongo shell

----------------------------------------------------------


## --------------  CREATE OPERATION--------------


## show dbs
show all the avalilable databases

## use DATABASE_NAME
creates a new database or move to existing database .

## db
shows the current database

## db.dropDatabase()
it is used to delete the database

## what is a collection in mongodb ?
A collection is a grouping of MongoDB documents. Documents within a collection can have different fields. A collection is the equivalent of a table in a relational database system. A collection exists within a single database.
![](https://media.geeksforgeeks.org/wp-content/uploads/20200219180521/MongoDB-database-colection.png)

MongoDB provides the following methods to insert documents into a collection:

1. db.collection.insertOne()
2. db.collection.insertMany()

![](https://www.mongodb.com/docs/manual/images/crud-annotated-mongodb-insertOne.bakedsvg.svg)

## Collection Commands
    show collections
Show Collections

    db.createCollection('comments')
Create a collection named 'comments'

    db.comments.drop()
Drop a collection named 'comments'

## ------------READING OPERATION -------------

## Read operation
Read operations retrieve documents from a collection; i.e. query a collection for documents. MongoDB provides the following methods to read documents from a collection:

    db.collection.find()

You can specify query filters or criteria that identify the documents to return.

![](https://www.mongodb.com/docs/manual/images/crud-annotated-mongodb-find.bakedsvg.svg)

## db.collection.find(query, projection, options)

query-Optional. Specifies selection filter using [QUERY OPERATOR](https://www.mongodb.com/docs/manual/reference/operator/). To return all documents in a collection, omit this parameter or pass an empty document ({}).

projection-Optional. Specifies the fields to return in the documents that match the query filter. To return all fields in the matching documents, omit this parameter.

options-Optional. Specifies additional options for the query. These options modify query behavior and how results are returned.

## Returns:	
A cursor to the documents that match the query criteria. When the 
find()
 method "returns documents," the method is actually returning a cursor to the documents.

**example:**

    db.products.find({price:{$gt:1}})

shows the collection which has price greater than 1

## --------------UPDATE OPERATION -----------------

    db.products.updateOne({_id:1},{$set:{stock:32}})

Update operations modify existing documents in a collection. MongoDB provides the following methods to update documents of a collection:

1. db.collection.updateOne() New in version 3.2
2. db.collection.updateMany() New in version 3.2
3. db.collection.replaceOne() New in version 3.2

In MongoDB, update operations target a single collection. All write operations in MongoDB are atomic on the level of a single document.

You can specify criteria, or filters, that identify the documents to update. These filters use the same syntax as read operations

    db.products.updateOne({_id:1},{$set:{price:1.20}})

it updates the value of the feild price if is present , and if the given feild is not present then it will create a new feild;

![](https://www.mongodb.com/docs/manual/images/crud-annotated-mongodb-updateMany.bakedsvg.svg)


## ------------- DELETE OPERATION ----------------

Delete operations remove documents from a collection. MongoDB provides the following methods to delete documents of a collection:

1. db.collection.deleteOne() New in version 3.2
2. db.collection.deleteMany() New in version 3.2

In MongoDB, delete operations target a single collection. All write operations in MongoDB are atomic on the level of a single document.

You can specify criteria, or filters, that identify the documents to remove. These filters use the same syntax as read operations.

![](https://www.mongodb.com/docs/manual/images/crud-annotated-mongodb-deleteMany.bakedsvg.svg)


    db.products.deleteOne({_id:2})

It will delete the collection with the given paramater or constraints

*If you want to delete the database of a given name hen use:-*
```
db.COLLECTION_NAME.drop()
```

## ** To show the collection in a well format use pretty()**

## How to connect MongoDB application to the Node.js application:
1. With Native Driver
2. using ODM(object-document-mapper) => MONGOOSE (Popular)


## --------using MongoDB native driver-----------
The language drivers allow you to interact with your MongoDB database using the methods you've learned so far,In terms of Node. js, mongodb is the native driver for interacting with a mongodb instance and mongoose is an Object modeling tool for MongoDB. mongoose is built on top of the mongodb driver to provide programmers with a way to model their data.

[Driver documentation for Node.js](https://www.mongodb.com/docs/drivers/node/current/quick-start/download-and-install/)

basic Template
```
const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

async function run() {
    try {
        const database = client.db("foodscollection");
        const foods = database.collection("foods");

        // create an array of documents to insert
        const docs = [
            { name: "cake", healthy: false },
            { name: "lettuce", healthy: true },
            { name: "Paav Bhaji", healthy: false },
            { name: "cholle", healthy: false }
        ];

        // this option prevents additional documents from being inserted if one fails
        const options = { ordered: true };

        const result = await foods.insertMany(docs, options);
        console.log(`${result.insertedCount} documents were inserted by Bhaskar Kulshrestha`);
    } finally {
        await client.close();
    }
}
run().catch(console.dir);

```

## -------- using ODM => MONGOOSE ---------

1. Mongoose is a Object Data Modeling (ODM) library for MongoDB distributed as an npm package.
2.  It is akin to an Object Relational Mapper (ORM) such as SQLAlchemy for traditional SQL databases. The problem that Mongoose aims to solve is allowing developers to enforce a specific schema at the application layer. In addition to enforcing a schema, Mongoose also offers a variety of hooks, model validation, and other features aimed at making it easier to work with MongoDB.

    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/test');

    const Cat = mongoose.model('Cat', { name: String });

    const kitty = new Cat({ name: 'Zildjian' });
    kitty.save().then(() => console.log('meow'));

To use the mongoose in npm first download it.
    npm i mongoose


*Note:
mongoose.connect('mongodb://localhost:27017/test');

here : mongodb://localhost:27017 =>reffering the localhost address
and 
test : It defines the database if ot presents if the database is not present then it will make a new one .

*

1. **Before inserting the data we first define th schema of the database**
A Mongoose Schema defines the structure and property of the document in the MongoDB collection. This Schema is a way to define expected properties and values along with the constraints and indexes.
```
const fruitschema =new mongoose.Schema({
    name:string,
    rating:number,
    review:string
});
```
2. **Now we create a mongoose model**
A Mongoose model is a wrapper of the Mongoose schema. A Mongoose schema defines the document's properties, default values, types of data, validators, etc. In contrast, a Mongoose model provides an interface for the database to create, query, update, delete records, and so on

GENRAL SYNTAX :

    model(name: string, schema?: any, collection?: string | undefined, options?: mongoose.CompileModelOptions | undefined): mongoose.Model<any, unknown, unknown, unknown, any, any>

*Example:*
```
const Fruit=mongoose.model("Fruit",fruitschema);
```

## Making a document

const DOCUMENT_NAME = new COLLECTION NAME({
    // PARAMETERS
});

*Example:*
```
const fruit=new Fruit({
    name:"Apple",
    rating:7,
    review:"Pretty solid as fruit."
});
```

## Inserting a data:
```
const fruitschema = new mongoose.Schema({
    name:String,
    rating:Number,
    review:String
});

const Fruit=mongoose.model("Fruit",fruitschema);

const fruit=new Fruit({
    name:"Apple",
    rating:7,
    review:"Pretty solid as fruit."
});

case 2: when inserting many data
--------------
const kiwi=new Fruit({
    name:"kiwi",
    rating:10,
    review:"The given fruit is Kiwi."
});
const orange=new Fruit({
    name:"Orange",
    rating:5,
    review:"Oranges are Sour in nature!!"
});
const banana=new Fruit({
    name:"Banana",
    rating:3,
    review:"The given fruit is a Banana!!"
});

Fruit.insertMany([kiwi,orange,banana]).then(function(){
    console.log("Success saved in FruitsDB.");
}).catch(function (err){
    console.log(err);
});

// Mongoose save function.
fruit.save();
```

*output for case 1:when inserting nly single data*
```
{
        "_id" : ObjectId("64c8002e032082f4955e6d85"),
        "name" : "Apple",
        "rating" : 7,
        "review" : "Pretty solid as fruit.",
        "__v" : 0
}
```

## Mongoose save function : DOCUMENT_NAME.save()

Mongoose's save() function is one way to save the changes you made to a document to the database. There are several ways to update a document in Mongoose, but save() is the most fully featured

## Reading the Data:

for finding the data,use the follwing syntax:
```
async function findFruits() {
    const fruits = await Fruit.find({});
    fruits.forEach(fruit => console.log(fruit));
  }
  
  findFruits();
```
*If we want to access only the specific feild then use :- .feildname method to access only the specific feild.*

#### if we want to find all the names of the fruits in the collection named as fruits then:-
```
async function findFruits() {
    const fruits = await Fruit.find({});
    fruits.forEach(fruit => console.log(fruit));
  }
  
  findFruits();
```

## Validation in mongoose:

lets's suppose we have an example:
```
const fruitschema =new mongoose.Schema({
    name:String,
    rating:{
        type:Number,
        min:1,
        max:10
    },
    review:String
});
```
*then in this case the validation is:*
```
rating:{
        type:Number,
        min:1,
        max:10
    }
```
then in this case the rating cannot be more than 10 and less than 1 , if we try to do so then it will give *Validation error.*
```
his.$__.validationError = new ValidationError(this);
```

## update operation

- git remote add origin https://github.com/BhaskarKulshrestha/Introduction-to-MongoDB-and-Mongoose.git
- git branch -M main
- git push -u origin main

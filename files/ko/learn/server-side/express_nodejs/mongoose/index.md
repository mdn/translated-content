---
title: 'Express Tutorial Part 3: Using a Database (with Mongoose)'
slug: Learn/Server-side/Express_Nodejs/mongoose
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/skeleton_website", "Learn/Server-side/Express_Nodejs/routes", "Learn/Server-side/Express_Nodejs")}}

이번에는 데이터베이스를 간단히 소개하고, Node/Express 어플리케이션으로 데이터베이스를 어떻게 다루는 지 알아보겠습니다. 그리고 [LocalLibrary](/ko/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website) 웹사이트를 위한 데이터베이스 접근을 제공하는 [Mongoose](http://mongoosejs.com/)를 어떻게 사용할 수 있는지 보여줄 것입니다. 오브젝트 스키마와 모델을 선언하는 방법, 주요 필드 타입, 기본 유효성 검사를 설명합니다. 또한 당신이 모델 데이터에 접근할 수 있는 주요한 몇가지 방법들을 소개할 것입니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        <a href="/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website"
          >Express Tutorial Part 2: Creating a skeleton website</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>To be able to design and create your own models using Mongoose.</td>
    </tr>
  </tbody>
</table>

## 개요

도서관 직원들은 책과 대여자의 정보를 저장하기 위해 Local Library 웹사이트를 사용할 것입니다. 그리고 도서관 회원들은 책을 빌리고, 검색하며, 어떤 책이 이용한지 알아내고, 책 대여를 예약하거나 책을 빌릴 것입니다. 정보를 효과적으로 저장하고 가져오기 위해서, 우리는 그 정보를 데이터베이스에 저장할 것입니다.

Express 앱은 다양한 데이터베이스를 사용할 수 있고, 당신에게 CRUD(**C**reate, **R**ead, **U**pdate and **D**elete)를 수행할 수 있는 여러 방법을 제공합니다. 이번 튜토리얼은 이용가능한 몇가지 선택지에 대한 간략한 개요를 제공하며, 더 나아가 우리가 선택한 몇가지 메커니즘에 대해선 자세히 알아볼 것입니다.

### 사용할 수 있는 데이터베이스는 무엇이 있나요?

Express 앱은 노드에서 지원하는 어떤 데이터베이스라도 사용가능합니다. (Express 자체는 데이터베이스 관리에 대한 특정한 추가 동작/요구사항을 정의하지 않습니다.) PostgreSQL, MySQL, Redis, SQLite, and MongoDB를 포함한 많은 [인기있는 데이터베이스 옵션](https://expressjs.com/en/guide/database-integration.html)을 선택가능합니다.

데이터베이스를 고를때, 당신은 생산성/러닝커브, 성능, 쉬운 리플리케이션/백업, 비용, 커뮤니티 지원 등을 고려해야 합니다. 하나의 "최고" 데이터베이스를 정하지 못하는 동안, 우리의 Local Library 같이 작은 규모에서 중간규모의 사이트에 적합한 거의 모든 어떤 솔루션이라도 사용 가능해야 합니다.

옵션에 대한 더 많은 정보는 여기를 보십시오: [데이터베이스 인테그레이션](https://expressjs.com/en/guide/database-integration.html) (Express 문서)

### 데이터베이스와 상호작용하는 최소의 방법은 무엇인가요?

데이터베이스와 상호작용하는 두가지 접근법이 있습니다:

- 데이터베이스의 네이티브 쿼리 언어를 사용 (예를 들어 SQL)
- 오브젝트 데이터 모델 ("ODM") / 오브젝트 관계형 모델 ("ORM")을 사용. ODM/ORM은 웹사이트의 데이터를 Javascript 오브젝트로 나타내며, 그다음 기본 데이터베이스에 매핑됩니다. 어떤 ORM은 특정 데이터베이스에 연결된 반면, 또다른 ORM은 데이터베이스와 무관한 백엔드를 제공합니다.

최상의 퍼포먼스는 SQL이나 데이터베이스에서 지원하는 쿼리 언어를 사용할때 얻을 수 있습니다. ODM은 오브젝트와 데이터베이스 포맷을 매핑하는 변환코드를 사용하기 때문에 종종 느리며, 가장 효율적인 데이터베이스 쿼리를 사용하지 않을 수 있습니다.

ORM을 사용하는 이점은 프로그래머가 데이터베이스의 의미보다 JavaScript 객체로 계속해서 생각할 수 있다는 것입니다. - 이는 다른 데이터베이스(같거나 다른 웹사이트 어느 쪽에서든)들에서 작업해야 하는 경우 특히 그렇습니다. 또한 데이터의 유효성 및 확인을 확실히 할 수 있습니다.

> **참고:** **팁:** ODM/ORM을 사용하면 개발 및 유지 보수 비용이 절감됩니다. 네이티브 쿼리 언어에 친숙하거나 퍼포먼스가 중요한 것이 아니라면, ODM 사용을 적극 고려해야 합니다.

NPM 패키지 매니저 사이트에는 사용가능한 많은 ODM/ORM 솔루션이 있습니다.([odm](https://www.npmjs.com/browse/keyword/odm) 과 [orm](https://www.npmjs.com/browse/keyword/orm) 태그 집합을 확인하십시오.)

이 글 작성 시점에 인기있었던 솔루션은 다음과 같습니다:

- [Mongoose](https://www.npmjs.com/package/mongoose): Mongoose는 비동기적인 환경에서 작업할 수 있도록 디자인된 [MongoDB](https://www.mongodb.org/) 객체 모델링 툴입니다.
- [Waterline](https://www.npmjs.com/package/waterline): An ORM extracted from the Express-based [Sails](http://sailsjs.com/) web framework. It provides a uniform API for accessing numerous different databases, including Redis, mySQL, LDAP, MongoDB, and Postgres.
- [Bookshelf](https://www.npmjs.com/package/bookshelf): Features both promise-based and traditional callback interfaces, providing transaction support, eager/nested-eager relation loading, polymorphic associations, and support for one-to-one, one-to-many, and many-to-many relations. Works with PostgreSQL, MySQL, and SQLite3.
- [Objection](https://www.npmjs.com/package/objection): Makes it as easy as possible to use the full power of SQL and the underlying database engine (supports SQLite3, Postgres, and MySQL).
- [Sequelize](https://www.npmjs.com/package/sequelize) is a promise-based ORM for Node.js and io.js. It supports the dialects PostgreSQL, MySQL, MariaDB, SQLite and MSSQL and features solid transaction support, relations, read replication and more.

일반적으로 솔루션을 선택할 때, 당신은 제공되는 기능과 "커뮤니티 활동" (다운로드, 공헌도, 버그 리포트, 문서 퀄리티 등) 모두를 고려해야 합니다. 이에 대한 글을 작성하고 있는 시점에, 몽구스는 가장 유명한 ORM이며, 당신이 MongoDB를 사용한다면 몽구스는 합리적인 선택입니다.

### Using Mongoose and MongoDb for the LocalLibrary

For the _Local Library_ example (and the rest of this topic) we're going to use the [Mongoose ODM](https://www.npmjs.com/package/mongoose) to access our library data. Mongoose acts as a front end to [MongoDB](https://www.mongodb.com/what-is-mongodb), an open source [NoSQL](https://en.wikipedia.org/wiki/NoSQL) database that uses a document-oriented data model. A “collection” of “documents”, in a MongoDB database, [is analogous to](https://docs.mongodb.com/manual/core/databases-and-collections/#collections) a “table” of “rows” in a relational database.

This ODM and database combination is extremely popular in the Node community, partially because the document storage and query system looks very much like JSON, and is hence familiar to JavaScript developers.

> **참고:** **Tip:** You don't need to know MongoDB in order to use Mongoose, although parts of the [Mongoose documentation](http://mongoosejs.com/docs/guide.html) _are_ easier to use and understand if you are already familiar with MongoDB.

The rest of this tutorial shows how to define and access the Mongoose schema and models for the [LocalLibrary website](/ko/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website) example.

## Designing the LocalLibrary models

Before you jump in and start coding the models, it's worth taking a few minutes to think about what data we need to store and the relationships between the different objects.

We know that we need to store information about books (title, summary, author, genre, ISBN) and that we might have multiple copies available (with globally unique ids, availability statuses, etc.). We might need to store more information about the author than just their name, and there might be multiple authors with the same or similar names. We want to be able to sort information based on book title, author, genre, and category.

When designing your models it makes sense to have separate models for every "object" (group of related information). In this case the obvious objects are books, book instances, and authors.

You might also want to use models to represent selection-list options (e.g. like a drop down list of choices), rather than hard coding the choices into the website itself — this is recommended when all the options aren't known up front or may change. The obvious candidate for a model of this type is the book genre (e.g. Science Fiction, French Poetry, etc.)

Once we've decided on our models and fields, we need to think about the relationships between them.

With that in mind, the UML association diagram below shows the models we'll define in this case (as boxes). As discussed above, we've created models for book (the generic details of the book), book instance (status of specific physical copies of the book available in the system), and author. We have also decided to have a model for genre, so that values can be created dynamically. We've decided not to have a model for the `BookInstance:status` — we will hard code the acceptable values because we don't expect these to change. Within each of the boxes you can see the model name, the field names and types, and also the methods and their return types.

The diagram also shows the relationships between the models, including their _multiplicities_. The multiplicities are the numbers on the diagram showing the numbers (maximum and minimum) of each model that may be present in the relationship. For example, the connecting line between the boxes shows that `Book` and a `Genre` are related. The numbers close to the `Book` model show that a book must have zero or more `Genre` (as many as you like), while the numbers on the other end of the line next to the `Genre` show that it can have zero or more associated books.

> **참고:** As discussed in our [Mongoose primer](#related_documents) below it is often better to have the field that defines the relationship between the documents/models in just _one_ model (you can still find the reverse relationship by searching for the associated `_id` in the other model). Below we have chosen to define the relationship between Book/Genre and Book/Author in the Book schema, and the relationship between the Book/BookInstance in the BookInstance Schema. This choice was somewhat arbitrary — we could equally well have had the field in the other schema.

![Mongoose Library Model with correct cardinality](library_website_-_mongoose_express.png)

> **참고:** The next section provides a basic primer explaining how models are defined and used. As you read it, consider how we will construct each of the models in the diagram above.

## Mongoose primer

This section provides an overview of how to connect Mongoose to a MongoDB database, how to define a schema and a model, and how to make basic queries.

> **참고:** This primer is "heavily influenced" by the [Mongoose quick start](https://www.npmjs.com/package/mongoose) on _npm_ and the [official documentation](http://mongoosejs.com/docs/guide.html).

### Installing Mongoose and MongoDB

Mongoose is installed in your project (**package.json**) like any other dependency — using NPM. To install it, use the following command inside your project folder:

```bash
npm install mongoose
```

Installing _Mongoose_ adds all its dependencies, including the MongoDB database driver, but it does not install MongoDB itself. If you want to install a MongoDB server then you can [download installers from here](https://www.mongodb.com/download-center) for various operating systems and install it locally. You can also use cloud-based MongoDB instances.

> **참고:** For this tutorial we'll be using the mLab cloud-based _database as a service_ [sandbox tier](https://mlab.com/plans/pricing/) to provide the database. This is suitable for development, and makes sense for the tutorial because it makes "installation" operating system independent (database-as-a-service is also one approach you might well use for your production database).

### Connecting to MongoDB

_Mongoose_ requires a connection to a MongoDB database. You can `require()` and connect to a locally hosted database with `mongoose.connect()`, as shown below.

```js
//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
```

You can get the default `Connection` object with `mongoose.connection`. Once connected, the open event is fired on the `Connection` instance.

> **참고:** **Tip:** If you need to create additional connections you can use `mongoose.createConnection()`. This takes the same form of database URI (with host, database, port, options etc.) as `connect()` and returns a `Connection` object).

### Defining and creating models

Models are _defined_ using the `Schema` interface. The Schema allows you to define the fields stored in each document along with their validation requirements and default values. In addition, you can define static and instance helper methods to make it easier to work with your data types, and also virtual properties that you can use like any other field, but which aren't actually stored in the database (we'll discuss a bit further below).

Schemas are then "compiled" into models using the `mongoose.model()` method. Once you have a model you can use it to find, create, update, and delete objects of the given type.

> **참고:** Each model maps to a _collection_ of _documents_ in the MongoDB database. The documents will contain the fields/schema types defined in the model `Schema`.

#### Defining schemas

The code fragment below shows how you might define a simple schema. First you `require()` mongoose, then use the Schema constructor to create a new schema instance, defining the various fields inside it in the constructor's object parameter.

```js
//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
    a_string: String,
    a_date: Date
});
```

In the case above we just have two fields, a string and a date. In the next sections we will show some of the other field types, validation, and other methods.

#### Creating a model

Models are created from schemas using the `mongoose.model()` method:

```js
// Define schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
    a_string: String,
    a_date: Date
});

// Compile model from schema
var SomeModel = mongoose.model('SomeModel', SomeModelSchema );
```

The first argument is the singular name of the collection that will be created for your model (Mongoose will create the database collection for the above model _SomeModel_ above), and the second argument is the schema you want to use in creating the model.

> **참고:** Once you've defined your model classes you can use them to create, update, or delete records, and to run queries to get all records or particular subsets of records. We'll show you how to do this in the [Using models](#Using_models) section, and when we create our views.

#### 스키마 타입 (필드)

한 스키마는 임의의 숫자의 필드들을 가질 수 있습니다.(각각의 필드는 MongoDB에 저장된 문서의 필드를 대표합니다.) 아래의 예제 스키마는 일반적인 필드 타입들을 보여주고 있으며 그들이 어떻게 선언되는지 나타냅니다.

```js
var schema = new Schema(
{
  name: String,
  binary: Buffer,
  living: Boolean,
  updated: { type: Date, default: Date.now },
  age: { type: Number, min: 18, max: 65, required: true },
  mixed: Schema.Types.Mixed,
  _someId: Schema.Types.ObjectId,
  array: [],
  ofString: [String], // You can also have an array of each of the other types too.
  nested: { stuff: { type: String, lowercase: true, trim: true } }
})
```

Most of the [SchemaTypes](http://mongoosejs.com/docs/schematypes.html) (the descriptors after “type:” or after field names) are self explanatory. The exceptions are:

- `ObjectId`: Represents specific instances of a model in the database. For example, a book might use this to represent its author object. This will actually contain the unique ID (`_id`) for the specified object. We can use the `populate()` method to pull in the associated information when needed.
- [Mixed](http://mongoosejs.com/docs/schematypes.html#mixed): 임의의 스키마 타입입니다.(어떤 타입도 될 수 있음)
- \[]: An array of items. You can perform JavaScript array operations on these models (push, pop, unshift, etc.). The examples above show an array of objects without a specified type and an array of `String` objects, but you can have an array of any type of object.

The code also shows both ways of declaring a field:

- Field _name_ and _type_ as a key-value pair (i.e. as done with fields `name`, `binary` and `living`).
- Field _name_ followed by an object defining the `type`, and any other _options_ for the field. Options include things like:

  - default values.
  - built-in validators (e.g. max/min values) and custom validation functions.
  - Whether the field is required
  - Whether `String` fields should automatically be set to lowercase, uppercase, or trimmed (e.g. `{ type: String, lowercase: true, trim: true }`)

For more information about options see [SchemaTypes](http://mongoosejs.com/docs/schematypes.html) (Mongoose docs).

#### Validation

Mongoose provides built-in and custom validators, and synchronous and asynchronous validators. It allows you to specify both the acceptable range or values and the error message for validation failure in all cases.

The built-in validators include:

- All [SchemaTypes](http://mongoosejs.com/docs/schematypes.html) have the built-in [required](http://mongoosejs.com/docs/api.html#schematype_SchemaType-required) validator. This is used to specify whether the field must be supplied in order to save a document.
- [Numbers](http://mongoosejs.com/docs/api.html#schema-number-js) have [min](http://mongoosejs.com/docs/api.html#schema_number_SchemaNumber-min) and [max](http://mongoosejs.com/docs/api.html#schema_number_SchemaNumber-max) validators.
- [Strings](http://mongoosejs.com/docs/api.html#schema-string-js) have:

  - [enum](http://mongoosejs.com/docs/api.html#schema_string_SchemaString-enum): specifies the set of allowed values for the field.
  - [match](http://mongoosejs.com/docs/api.html#schema_string_SchemaString-match): specifies a regular expression that the string must match.
  - [maxlength](http://mongoosejs.com/docs/api.html#schema_string_SchemaString-maxlength) and [minlength](http://mongoosejs.com/docs/api.html#schema_string_SchemaString-minlength) for the string.

The example below (slightly modified from the Mongoose documents) shows how you can specify some of the validator types and error messages:

```js

    var breakfastSchema = new Schema({
      eggs: {
        type: Number,
        min: [6, 'Too few eggs'],
        max: 12
        required: [true, 'Why no eggs?']
      },
      drink: {
        type: String,
        enum: ['Coffee', 'Tea', 'Water',]
      }
    });
```

For complete information on field validation see [Validation](http://mongoosejs.com/docs/validation.html) (Mongoose docs).

#### Virtual properties

Virtual properties are document properties that you can get and set but that do not get persisted to MongoDB. The getters are useful for formatting or combining fields, while setters are useful for de-composing a single value into multiple values for storage. The example in the documentation constructs (and deconstructs) a full name virtual property from a first and last name field, which is easier and cleaner than constructing a full name every time one is used in a template.

> **참고:** We will use a virtual property in the library to define a unique URL for each model record using a path and the record's `_id` value.

For more information see [Virtuals](http://mongoosejs.com/docs/guide.html#virtuals) (Mongoose documentation).

#### Methods and query helpers

A schema can also have [instance methods](http://mongoosejs.com/docs/guide.html#methods), [static methods](http://mongoosejs.com/docs/guide.html#statics), and [query helpers](http://mongoosejs.com/docs/guide.html#query-helpers). The instance and static methods are similar, but with the obvious difference that an instance method is associated with a particular record and has access to the current object. Query helpers allow you to extend mongoose's [chainable query builder API](http://mongoosejs.com/docs/queries.html) (for example, allowing you to add a query "byName" in addition to the `find()`, `findOne()` and `findById()` methods).

### Using models

Once you've created a schema you can use it to create models. The model represents a collection of documents in the database that you can search, while the model's instances represent individual documents that you can save and retrieve.

We provide a brief overview below. For more information see: [Models](http://mongoosejs.com/docs/models.html) (Mongoose docs).

#### Creating and modifying documents

To create a record you can define an instance of the model and then call `save()`. The examples below assume SomeModel is a model (with a single field "name") that we have created from our schema.

```js
// Create an instance of model SomeModel
var awesome_instance = new SomeModel({ name: 'awesome' });

// Save the new model instance, passing a callback
awesome_instance.save(function (err) {
  if (err) return handleError(err);
  // saved!
});
```

Creation of records (along with updates, deletes, and queries) are asynchronous operations — you supply a callback that is called when the operation completes. The API uses the error-first argument convention, so the first argument for the callback will always be an error value (or null). If the API returns some result, this will be provided as the second argument.

You can also use `create()` to define the model instance at the same time as you save it. The callback will return an error for the first argument and the newly-created model instance for the second argument.

```js
SomeModel.create({ name: 'also_awesome' }, function (err, awesome_instance) {
  if (err) return handleError(err);
  // saved!
});
```

Every model has an associated connection (this will be the default connection when you use `mongoose.model()`). You create a new connection and call `.model()` on it to create the documents on a different database.

You can access the fields in this new record using the dot syntax, and change the values. You have to call `save()` or `update()` to store modified values back to the database.

```js
// Access model field values using dot notation
console.log(awesome_instance.name); //should log 'also_awesome'

// Change record by modifying the fields, then calling save().
awesome_instance.name="New cool name";
awesome_instance.save(function (err) {
   if (err) return handleError(err); // saved!
   });
```

#### Searching for records

You can search for records using query methods, specifying the query conditions as a JSON document. The code fragment below shows how you might find all athletes in a database that play tennis, returning just the fields for athlete _name_ and _age_. Here we just specify one matching field (sport) but you can add more criteria, specify regular expression criteria, or remove the conditions altogether to return all athletes.

```js
var Athlete = mongoose.model('Athlete', yourSchema);

// find all athletes who play tennis, selecting the 'name' and 'age' fields
Athlete.find({ 'sport': 'Tennis' }, 'name age', function (err, athletes) {
  if (err) return handleError(err);
  // 'athletes' contains the list of athletes that match the criteria.
})
```

If you specify a callback, as shown above, the query will execute immediately. The callback will be invoked when the search completes.

> **참고:** All callbacks in Mongoose use the pattern `callback(error, result)`. If an error occurs executing the query, the `error` parameter will contain an error document, and `result` will be null. If the query is successful, the `error` parameter will be null, and the `result` will be populated with the results of the query.

If you don't specify a callback then the API will return a variable of type [Query](http://mongoosejs.com/docs/api.html#query-js). You can use this query object to build up your query and then execute it (with a callback) later using the `exec()` method.

```js
// find all athletes that play tennis
var query = Athlete.find({ 'sport': 'Tennis' });

// selecting the 'name' and 'age' fields
query.select('name age');

// limit our results to 5 items
query.limit(5);

// sort by age
query.sort({ age: -1 });

// execute the query at a later time
query.exec(function (err, athletes) {
  if (err) return handleError(err);
  // athletes contains an ordered list of 5 athletes who play Tennis
})
```

Above we've defined the query conditions in the `find()` method. We can also do this using a `where()` function, and we can chain all the parts of our query together using the dot operator (.) rather than adding them separately. The code fragment below is the same as our query above, with an additional condition for the age.

```
Athlete.
  find().
  where('sport').equals('Tennis').
  where('age').gt(17).lt(50).  //Additional where query
  limit(5).
  sort({ age: -1 }).
  select('name age').
  exec(callback); // where callback is the name of our callback function.
```

The [find()](http://mongoosejs.com/docs/api.html#query_Query-find) method gets all matching records, but often you just want to get one match. The following methods query for a single record:

- [`findById()`](http://mongoosejs.com/docs/api.html#model_Model.findById): Finds the document with the specified `id` (every document has a unique `id`).
- [`findOne()`](http://mongoosejs.com/docs/api.html#query_Query-findOne): Finds a single document that matches the specified criteria.
- [`findByIdAndRemove()`](http://mongoosejs.com/docs/api.html#model_Model.findByIdAndRemove), [`findByIdAndUpdate()`](http://mongoosejs.com/docs/api.html#model_Model.findByIdAndUpdate), [`findOneAndRemove()`](http://mongoosejs.com/docs/api.html#query_Query-findOneAndRemove), [`findOneAndUpdate()`](http://mongoosejs.com/docs/api.html#query_Query-findOneAndUpdate): Finds a single document by `id` or criteria and either update or remove it. These are useful convenience functions for updating and removing records.

> **참고:** There is also a [`count()`](http://mongoosejs.com/docs/api.html#model_Model.count) method that you can use to get the number of items that match conditions. This is useful if you want to perform a count without actually fetching the records.

There is a lot more you can do with queries. For more information see: [Queries](http://mongoosejs.com/docs/queries.html) (Mongoose docs).

#### Working with related documents — population

You can create references from one document/model instance to another using the `ObjectId` schema field, or from one document to many using an array of `ObjectIds`. The field stores the id of the related model. If you need the actual content of the associated document, you can use the [`populate()`](http://mongoosejs.com/docs/api.html#query_Query-populate) method in a query to replace the id with the actual data.

For example, the following schema defines authors and stories. Each author can have multiple stories, which we represent as an array of `ObjectId`. Each story can have a single author. The "ref" (highlighted in bold below) tells the schema which model can be assigned to this field.

```js
var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var authorSchema = Schema({
  name    : String,
  stories : [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

var storySchema = Schema({
  author : { type: Schema.Types.ObjectId, ref: 'Author' },
  title    : String
});

var Story  = mongoose.model('Story', storySchema);
var Author = mongoose.model('Author', authorSchema);
```

We can save our references to the related document by assigning the `_id` value. Below we create an author, then a book, and assign the author id to our stories author field.

```js
var bob = new Author({ name: 'Bob Smith' });

bob.save(function (err) {
  if (err) return handleError(err);

  //Bob now exists, so lets create a story
  var story = new Story({
    title: "Bob goes sledding",
    author: bob._id    // assign the _id from the our author Bob. This ID is created by default!
  });

  story.save(function (err) {
    if (err) return handleError(err);
    // Bob now has his story
  });
});
```

Our story document now has an author referenced by the author document's ID. In order to get the author information in our story results we use `populate()`, as shown below.

```js
Story
.findOne({ title: 'Bob goes sledding' })
.populate('author') //This populates the author id with actual author information!
.exec(function (err, story) {
  if (err) return handleError(err);
  console.log('The author is %s', story.author.name);
  // prints "The author is Bob Smith"
});
```

> **참고:** Astute readers will have noted that we added an author to our story, but we didn't do anything to add our story to our author's `stories` array. How then can we get all stories by a particular author? One way would be to add our author to the stories array, but this would result in us having two places where the information relating authors and stories needs to be maintained.
>
> A better way is to get the `_id` of our _author_, then use `find()` to search for this in the author field across all stories.
>
> ```js
> Story
> .find({ author : bob._id })
> .exec(function (err, stories) {
>   if (err) return handleError(err);
>   // returns all stories that have Bob's id as their author.
> });
> ```

This is almost everything you need to know about working with related items _for this tutorial_. For more detailed information see [Population](http://mongoosejs.com/docs/populate.html) (Mongoose docs).

### One schema/model per file

While you can create schemas and models using any file structure you like, we highly recommend defining each model schema in its own module (file), exporting the method to create the model. This is shown below:

```js
// File: ./models/somemodel.js

//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
    a_string          : String,
    a_date            : Date,
});

//Export function to create "SomeModel" model class
module.exports = mongoose.model('SomeModel', SomeModelSchema );
```

You can then require and use the model immediately in other files. Below we show how you might use it to get all instances of the model.

```js
//Create a SomeModel model just by requiring the module
var SomeModel = require('../models/somemodel')

// Use the SomeModel object (model) to find all SomeModel records
SomeModel.find(callback_function);
```

## Setting up the MongoDB database

Now that we understand something of what Mongoose can do and how we want to design our models, it's time to start work on the _LocalLibrary_ website. The very first thing we want to do is set up a MongoDb database that we can use to store our library data.

For this tutorial we're going to use [mLab](https://mlab.com/welcome/)'s free cloud-hosted "[sandbox](https://mlab.com/plans/pricing/)" database. This database tier is not considered suitable for production websites because it has no redundancy, but it is great for development and prototyping. We're using it here because it is free and easy to set up, and because mLab is a popular _database as a service_ vendor that you might reasonably choose for your production database (other popular choices at the time of writing include [Compose](https://www.compose.com/), [ScaleGrid](https://scalegrid.io/pricing.html) and [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)).

> **참고:** If you prefer you can set up a MongoDb database locally by downloading and installing the [appropriate binaries for your system](https://www.mongodb.com/download-center). The rest of the instructions in this article would be similar, except for the database URL you would specify when connecting.

You will first need to [create an account](https://mlab.com/signup/) with mLab (this is free, and just requires that you enter basic contact details and acknowledge their terms of service).

After logging in, you'll be taken to the [home](https://mlab.com/home) screen:

1. Click **Create New** in the _MongoDB Deployments_ section.![](mlabcreatenewdeployment.png)
2. This will open the _Cloud Provider Selection_ screen.
    ![MLab - screen for new deployment](mlab_new_deployment_form_v2.png)

    - Select the SANDBOX (Free) plan from the Plan Type section.
    - Select any provider from the _Cloud Provider_ section. Different providers offer different regions (displayed below the selected plan type).
    - Click the **Continue** button.

3. This will open the _Select Region_ screen.

    ![Select new region screen](mlab_new_deployment_select_region_v2.png)

    - Select the region closest to you and then **Continue**.

4. This will open the _Final Details_ screen.
    ![New deployment database name](mlab_new_deployment_final_details.png)

    - Enter the name for the new database as `local_library` and then select **Continue**.

5. This will open the _Order Confirmation_ screen.
    ![Order confirmation screen](mlab_new_deployment_order_confirmation.png)

    - Click **Submit Order** to create the database.

6. You will be returned to the home screen. Click on the new database you just created to open its details screen. As you can see the database has no collections (data).
    ![mLab - Database details screen](mlab_new_deployment_database_details.png)

    The URL that you need to use to access your database is displayed on the form above (shown for this database circled above). In order to use this you need to create a database user that you can specify in the URL.

7. Click the **Users** tab and select the **Add database user** button.
8. Enter a username and password (twice), and then press **Create**. Do not select _Make read only_.
    ![](mlab_database_users.png)

You now have now created the database, and have an URL (with username and password) that can be used to access it. This will look something like: `mongodb://your_user_namer:your_password@ds119748.mlab.com:19748/local_library`.

## Install Mongoose

Open a command prompt and navigate to the directory where you created your [skeleton Local Library website](/ko/docs/Learn/Server-side/Express_Nodejs/skeleton_website). Enter the following command to install Mongoose (and its dependencies) and add it to your **package.json** file, unless you have already done so when reading the [Mongoose Primer](#Installing_Mongoose_and_MongoDB) above.

```bash
npm install mongoose --save
```

## Connect to MongoDB

Open **/app.js** (in the root of your project) and copy the following text below where you declare the _Express application object_ (after the line `var app = express();`). Replace the database url string ('_insert_your_database_url_here_') with the location URL representing your own database (i.e. using the information from [from mLab](#Setting_up_the_MongoDB_database)).

```js
//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'insert_your_database_url_here';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
```

As discussed [in the Mongoose primer above](#Connecting_to_MongoDB), this code creates the default connection to the database and binds to the error event (so that errors will be printed to the console).

## Defining the LocalLibrary Schema

We will define a separate module for each model, as [discussed above](#One_schemamodel_per_file). Start by creating a folder for our models in the project root (**/models**) and then create separate files for each of the models:

```
/express-locallibrary-tutorial  //the project root
  /models
    author.js
    book.js
    bookinstance.js
    genre.js
```

### Author model

Copy the `Author` schema code shown below and paste it into your **./models/author.js** file. The scheme defines an author has having `String` SchemaTypes for the first and family names, that are required and have a maximum of 100 characters, and `Date` fields for the date of birth and death.

```js
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AuthorSchema = new Schema(
  {
    first_name: {type: String, required: true, max: 100},
    family_name: {type: String, required: true, max: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date},
  }
);

// Virtual for author's full name
AuthorSchema
.virtual('name')
.get(function () {
  return this.family_name + ', ' + this.first_name;
});

// Virtual for author's URL
AuthorSchema
.virtual('url')
.get(function () {
  return '/catalog/author/' + this._id;
});

//Export model
module.exports = mongoose.model('Author', AuthorSchema);
```

We've also declared a [virtual](#Virtual_properties) for the AuthorSchema named "url" that returns the absolute URL required to get a particular instance of the model — we'll use the property in our templates whenever we need to get a link to a particular author.

> **참고:** Declaring our URLs as a virtual in the schema is a good idea because then the URL for an item only ever needs to be changed in one place.
> At this point a link using this URL wouldn't work, because we haven't got any routes handling code for individual model instances. We'll set those up in a later article!

At the end of the module we export the model.

### Book model

Copy the `Book` schema code shown below and paste it into your **./models/book.js** file. Most of this is similar to the author model — we've declared a schema with a number of string fields and a virtual for getting the URL of specific book records, and we've exported the model.

```js
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookSchema = new Schema(
  {
    title: {type: String, required: true},
    author: {type: Schema.ObjectId, ref: 'Author', required: true},
    summary: {type: String, required: true},
    isbn: {type: String, required: true},
    genre: [{type: Schema.ObjectId, ref: 'Genre'}]
  }
);

// Virtual for book's URL
BookSchema
.virtual('url')
.get(function () {
  return '/catalog/book/' + this._id;
});

//Export model
module.exports = mongoose.model('Book', BookSchema);
```

The main difference here is that we've created two references to other models:

- author is a reference to a single `Author` model object, and is required.
- genre is a reference to an array of `Genre` model objects. We haven't declared this object yet!

### BookInstance model

Finally, copy the `BookInstance` schema code shown below and paste it into your **./models/bookinstance.js** file. The `BookInstance` represents a specific copy of a book that someone might borrow, and includes information about whether the copy is available or on what date it is expected back, "imprint" or version details.

```js
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookInstanceSchema = new Schema(
  {
    book: { type: Schema.ObjectId, ref: 'Book', required: true }, //reference to the associated book
    imprint: {type: String, required: true},
    status: {type: String, required: true, enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], default: 'Maintenance'},
    due_back: {type: Date, default: Date.now}
  }
);

// Virtual for bookinstance's URL
BookInstanceSchema
.virtual('url')
.get(function () {
  return '/catalog/bookinstance/' + this._id;
});

//Export model
module.exports = mongoose.model('BookInstance', BookInstanceSchema);
```

The new things we show here are the field options:

- `enum`: This allows us to set the allowed values of a string. In this case we use it to specify the availability status of our books (using an enum means that we can prevent mis-spellings and arbitrary values for our status)
- `default`: We use default to set the default status for newly created bookinstances to maintenance and the default `due_back` date to `now` (note how you can call the Date function when setting the date!)

Everything else should be familiar from our previous schema.

### Genre model - challenge!

Open your **./models/genre.js** file and create a schema for storing genres (the category of book, e.g. whether it is fiction or non-fiction, romance or military history, etc).

The definition will be very similar to the other models:

- The model should have a `String` SchemaType called `name` to describe the genre.
- This name should be required and have between 3 and 100 characters.
- Declare a [virtual](#Virtual_properties) for the genre's URL, named `url`.
- Export the model.

## Testing — create some items

That's it. We now have all models for the site set up!

In order to test the models (and to create some example books and other items that we can use in our next articles) we'll now run an _independent_ script to create items of each type:

1. Download (or otherwise create) the file [populatedb.js](https://raw.githubusercontent.com/hamishwillee/express-locallibrary-tutorial/master/populatedb.js) inside your _express-locallibrary-tutorial_ directory (in the same level as `package.json`).

    > **참고:** You don't need to know how [populatedb.js](https://raw.githubusercontent.com/hamishwillee/express-locallibrary-tutorial/master/populatedb.js) works; it just adds sample data into the database.

2. Enter the following commands in the project root to install the _async_ module that is required by the script (we'll discuss this in later tutorials, )

    ```bash
    npm install async --save
    ```

3. Run the script using node in your command prompt, passing in the URL of your _MongoDB_ database (the same one you replaced the _insert_your_database_url_here_ placeholder with, inside `app.js` earlier):

    ```bash
    node populatedb <your mongodb url>
    ```

4. The script should run through to completion, displaying items as it creates them in the terminal.

> **참고:** **Tip:** Go to your database on [mLab](https://mlab.com/home). You should now be able to drill down into individual collections of Books, Authors, Genres and BookInstances, and check out individual documents.

## Summary

In this article we've learned a bit about databases and ORMs on Node/Express, and a lot about how Mongoose schema and models are defined. We then used this information to design and implement `Book`, `BookInstance`, `Author` and `Genre` models for the _LocalLibrary_ website.

Last of all we tested our models by creating a number of instances (using a standalone script). In the next article we'll look at creating some pages to display these objects.

## See also

- [Database integration](https://expressjs.com/en/guide/database-integration.html) (Express docs)
- [Mongoose website](http://mongoosejs.com/) (Mongoose docs)
- [Mongoose Guide](http://mongoosejs.com/docs/guide.html) (Mongoose docs)
- [Validation](http://mongoosejs.com/docs/validation.html) (Mongoose docs)
- [Schema Types](http://mongoosejs.com/docs/schematypes.html) (Mongoose docs)
- [Models](http://mongoosejs.com/docs/models.html) (Mongoose docs)
- [Queries](http://mongoosejs.com/docs/queries.html) (Mongoose docs)
- [Population](http://mongoosejs.com/docs/populate.html) (Mongoose docs)

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/skeleton_website", "Learn/Server-side/Express_Nodejs/routes", "Learn/Server-side/Express_Nodejs")}}

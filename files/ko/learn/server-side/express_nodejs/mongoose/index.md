---
title: 'Express Tutorial Part 3: Using a Database (with Mongoose)'
slug: Learn/Server-side/Express_Nodejs/mongoose
translation_of: Learn/Server-side/Express_Nodejs/mongoose
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/skeleton_website", "Learn/Server-side/Express_Nodejs/routes", "Learn/Server-side/Express_Nodejs")}}</div>

<p class="summary">이번에는 데이터베이스를 간단히 소개하고, Node/Express 어플리케이션으로 데이터베이스를 어떻게 다루는 지 알아보겠습니다. 그리고 <a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website">LocalLibrary</a> 웹사이트를 위한 데이터베이스 접근을 제공하는 <a href="http://mongoosejs.com/">Mongoose</a>를 어떻게 사용할 수 있는지 보여줄 것입니다. 오브젝트 스키마와 모델을 선언하는 방법, 주요 필드 타입, 기본 유효성 검사를 설명합니다. 또한 당신이 모델 데이터에 접근할 수 있는 주요한 몇가지 방법들을 소개할 것입니다.</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">Prerequisites:</th>
   <td><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website">Express Tutorial Part 2: Creating a skeleton website</a></td>
  </tr>
  <tr>
   <th scope="row">Objective:</th>
   <td>To be able to design and create your own models using Mongoose.</td>
  </tr>
 </tbody>
</table>

<h2 id="개요">개요</h2>

<p>도서관 직원들은 책과 대여자의 정보를 저장하기 위해 Local Library 웹사이트를 사용할 것입니다. 그리고 도서관 회원들은 책을 빌리고, 검색하며, 어떤 책이 이용한지 알아내고, 책 대여를 예약하거나 책을 빌릴 것입니다. 정보를 효과적으로 저장하고 가져오기 위해서, 우리는 그 정보를 데이터베이스에 저장할 것입니다.</p>

<p>Express 앱은 다양한 데이터베이스를 사용할 수 있고, 당신에게 CRUD(<strong>C</strong>reate, <strong>R</strong>ead, <strong>U</strong>pdate and <strong>D</strong>elete)를 수행할 수 있는 여러 방법을 제공합니다. 이번 튜토리얼은 이용가능한 몇가지 선택지에 대한 간략한 개요를 제공하며, 더 나아가 우리가 선택한 몇가지 메커니즘에 대해선 자세히 알아볼 것입니다.</p>

<h3 id="사용할_수_있는_데이터베이스는_무엇이_있나요">사용할 수 있는 데이터베이스는 무엇이 있나요?</h3>

<p>Express 앱은 노드에서 지원하는 어떤 데이터베이스라도 사용가능합니다. (Express 자체는 데이터베이스 관리에 대한 특정한 추가 동작/요구사항을 정의하지 않습니다.) PostgreSQL, MySQL, Redis, SQLite, and MongoDB를 포함한 많은 <a href="https://expressjs.com/en/guide/database-integration.html">인기있는 데이터베이스 옵션</a>을 선택가능합니다.</p>

<p>데이터베이스를 고를때, 당신은 생산성/러닝커브, 성능, 쉬운 리플리케이션/백업, 비용, 커뮤니티 지원 등을 고려해야 합니다. 하나의 "최고"  데이터베이스를 정하지 못하는 동안, 우리의 Local Library 같이 작은 규모에서 중간규모의 사이트에 적합한 거의 모든 어떤 솔루션이라도 사용 가능해야 합니다.</p>

<p>옵션에 대한 더 많은 정보는 여기를 보십시오: <a href="https://expressjs.com/en/guide/database-integration.html">데이터베이스 인테그레이션</a> (Express 문서)</p>

<h3 id="데이터베이스와_상호작용하는_최소의_방법은_무엇인가요">데이터베이스와 상호작용하는 최소의 방법은 무엇인가요?</h3>

<p>데이터베이스와 상호작용하는 두가지 접근법이 있습니다: </p>

<ul>
 <li>데이터베이스의 네이티브 쿼리 언어를 사용 (예를 들어 SQL)</li>
 <li>오브젝트 데이터 모델 ("ODM") / 오브젝트 관계형 모델 ("ORM")을 사용. ODM/ORM은 웹사이트의 데이터를 Javascript 오브젝트로 나타내며, 그다음 기본 데이터베이스에 매핑됩니다. 어떤 ORM은 특정 데이터베이스에 연결된 반면, 또다른 ORM은 데이터베이스와 무관한 백엔드를 제공합니다.</li>
</ul>

<p>최상의 퍼포먼스는 SQL이나 데이터베이스에서 지원하는 쿼리 언어를 사용할때 얻을 수 있습니다. ODM은 오브젝트와 데이터베이스 포맷을 매핑하는 변환코드를 사용하기 때문에 종종 느리며, 가장 효율적인 데이터베이스 쿼리를 사용하지 않을 수 있습니다.</p>

<p>ORM을 사용하는 이점은 프로그래머가 데이터베이스의 의미보다 JavaScript 객체로 계속해서 생각할 수 있다는 것입니다.  - 이는 다른 데이터베이스(같거나 다른 웹사이트 어느 쪽에서든)들에서 작업해야 하는 경우 특히 그렇습니다. 또한 데이터의 유효성 및 확인을 확실히 할 수 있습니다.</p>

<div class="note">
<p><strong>팁:</strong>  ODM/ORM을 사용하면 개발 및 유지 보수 비용이 절감됩니다. 네이티브 쿼리 언어에 친숙하거나 퍼포먼스가 중요한 것이 아니라면, ODM 사용을 적극 고려해야 합니다.</p>
</div>

<p>NPM 패키지 매니저 사이트에는 사용가능한 많은 ODM/ORM 솔루션이 있습니다.(<a href="https://www.npmjs.com/browse/keyword/odm">odm</a> 과 <a href="https://www.npmjs.com/browse/keyword/orm">orm</a> 태그 집합을 확인하십시오.)</p>

<p>이 글 작성 시점에 인기있었던 솔루션은 다음과 같습니다:</p>

<ul>
 <li><a href="https://www.npmjs.com/package/mongoose">Mongoose</a>: Mongoose는 비동기적인 환경에서 작업할 수 있도록 디자인된 <a href="https://www.mongodb.org/">MongoDB</a> 객체 모델링 툴입니다.</li>
 <li><a href="https://www.npmjs.com/package/waterline">Waterline</a>: An ORM extracted from the Express-based <a href="http://sailsjs.com/">Sails</a> web framework. It provides a uniform API for accessing numerous different databases, including Redis, mySQL, LDAP, MongoDB, and Postgres.</li>
 <li><a href="https://www.npmjs.com/package/bookshelf">Bookshelf</a>: Features both promise-based and traditional callback interfaces, providing transaction support, eager/nested-eager relation loading, polymorphic associations, and support for one-to-one, one-to-many, and many-to-many relations. Works with PostgreSQL, MySQL, and SQLite3.</li>
 <li><a href="https://www.npmjs.com/package/objection">Objection</a>: Makes it as easy as possible to use the full power of SQL and the underlying database engine (supports SQLite3, Postgres, and MySQL).</li>
 <li>
  <p><a href="https://www.npmjs.com/package/sequelize">Sequelize</a> is a promise-based ORM for Node.js and io.js. It supports the dialects PostgreSQL, MySQL, MariaDB, SQLite and MSSQL and features solid transaction support, relations, read replication and more.</p>
 </li>
</ul>

<p>일반적으로 솔루션을 선택할 때, 당신은 제공되는 기능과 "커뮤니티 활동" (다운로드, 공헌도, 버그 리포트, 문서 퀄리티 등) 모두를 고려해야 합니다. 이에 대한 글을 작성하고 있는 시점에, 몽구스는 가장 유명한 ORM이며, 당신이 MongoDB를 사용한다면 몽구스는 합리적인 선택입니다.</p>

<h3 id="Using_Mongoose_and_MongoDb_for_the_LocalLibrary">Using Mongoose and MongoDb for the LocalLibrary</h3>

<p>For the <em>Local Library</em> example (and the rest of this topic) we're going to use the <a href="https://www.npmjs.com/package/mongoose">Mongoose ODM</a> to access our library data. Mongoose acts as a front end to <a href="https://www.mongodb.com/what-is-mongodb">MongoDB</a>, an open source <a href="https://en.wikipedia.org/wiki/NoSQL">NoSQL</a> database that uses a document-oriented data model. A “collection” of “documents”, in a MongoDB database, <a href="https://docs.mongodb.com/manual/core/databases-and-collections/#collections">is analogous to</a> a “table” of “rows” in a relational database.</p>

<p>This ODM and database combination is extremely popular in the Node community, partially because the document storage and query system looks very much like JSON, and is hence familiar to JavaScript developers.</p>

<div class="note">
<p><strong>Tip:</strong> You don't need to know MongoDB in order to use Mongoose, although parts of the <a href="http://mongoosejs.com/docs/guide.html">Mongoose documentation</a> <em>are</em> easier to use and understand if you are already familiar with MongoDB.</p>
</div>

<p>The rest of this tutorial shows how to define and access the Mongoose schema and models for the <a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website">LocalLibrary website</a> example.</p>

<h2 id="Designing_the_LocalLibrary_models">Designing the LocalLibrary models</h2>

<p>Before you jump in and start coding the models, it's worth taking a few minutes to think about what data we need to store and the relationships between the different objects.</p>

<p>We know that we need to store information about books (title, summary, author, genre, ISBN) and that we might have multiple copies available (with globally unique ids, availability statuses, etc.). We might need to store more information about the author than just their name, and there might be multiple authors with the same or similar names. We want to be able to sort information based on book title, author, genre, and category.</p>

<p>When designing your models it makes sense to have separate models for every "object" (group of related information). In this case the obvious objects are books, book instances, and authors.</p>

<p>You might also want to use models to represent selection-list options (e.g. like a drop down list of choices), rather than hard coding the choices into the website itself — this is recommended when all the options aren't known up front or may change. The obvious candidate for a model of this type is the book genre (e.g. Science Fiction, French Poetry, etc.)</p>

<p>Once we've decided on our models and fields, we need to think about the relationships between them.</p>

<p>With that in mind, the UML association diagram below shows the models we'll define in this case (as boxes). As discussed above, we've created models for book (the generic details of the book), book instance (status of specific physical copies of the book available in the system), and author. We have also decided to have a model for genre, so that values can be created dynamically. We've decided not to have a model for the <code>BookInstance:status</code> — we will hard code the acceptable values because we don't expect these to change. Within each of the boxes you can see the model name, the field names and types, and also the methods and their return types.</p>

<p>The diagram also shows the relationships between the models, including their <em>multiplicities</em>. The multiplicities are the numbers on the diagram showing the numbers (maximum and minimum) of each model that may be present in the relationship. For example, the connecting line between the boxes shows that <code>Book</code> and a <code>Genre</code> are related. The numbers close to the <code>Book</code> model show that a book must have zero or more <code>Genre</code> (as many as you like), while the numbers on the other end of the line next to the <code>Genre</code> show that it can have zero or more associated books.</p>

<div class="note">
<p><strong>Note</strong>: As discussed in our <a href="#related_documents">Mongoose primer</a> below it is often better to have the field that defines the relationship between the documents/models in just <em>one</em> model (you can still find the reverse relationship by searching for the associated <code>_id</code> in the other model). Below we have chosen to define the relationship between Book/Genre and Book/Author in the Book schema, and the relationship between the Book/BookInstance in the BookInstance Schema. This choice was somewhat arbitrary — we could equally well have had the field in the other schema.</p>
</div>

<p><img alt="Mongoose Library Model  with correct cardinality" src="https://mdn.mozillademos.org/files/15645/Library%20Website%20-%20Mongoose_Express.png" style="height: 620px; width: 737px;"></p>

<div class="note">
<p><strong>Note</strong>: The next section provides a basic primer explaining how models are defined and used. As you read it, consider how we will construct each of the models in the diagram above.</p>
</div>

<h2 id="Mongoose_primer">Mongoose primer</h2>

<p>This section provides an overview of how to connect Mongoose to a MongoDB database, how to define a schema and a model, and how to make basic queries. </p>

<div class="note">
<p><strong>Note:</strong> This primer is "heavily influenced" by the <a href="https://www.npmjs.com/package/mongoose">Mongoose quick start</a> on <em>npm</em> and the <a href="http://mongoosejs.com/docs/guide.html">official documentation</a>.</p>
</div>

<h3 id="Installing_Mongoose_and_MongoDB">Installing Mongoose and MongoDB</h3>

<p>Mongoose is installed in your project (<strong>package.json</strong>) like any other dependency — using NPM. To install it, use the following command inside your project folder:</p>

<pre class="brush: bash"><code>npm install mongoose</code>
</pre>

<p>Installing <em>Mongoose</em> adds all its dependencies, including the MongoDB database driver, but it does not install MongoDB itself. If you want to install a MongoDB server then you can <a href="https://www.mongodb.com/download-center">download installers from here</a> for various operating systems and install it locally. You can also use cloud-based MongoDB instances.</p>

<div class="note">
<p><strong>Note:</strong> For this tutorial we'll be using the mLab cloud-based <em>database as a service</em> <a href="https://mlab.com/plans/pricing/">sandbox tier</a> to provide the database. This is suitable for development, and makes sense for the tutorial because it makes "installation" operating system independent (database-as-a-service is also one approach you might well use for your production database).</p>
</div>

<h3 id="Connecting_to_MongoDB">Connecting to MongoDB</h3>

<p><em>Mongoose</em> requires a connection to a MongoDB database. You can <code>require()</code> and connect to a locally hosted database with <code>mongoose.connect()</code>, as shown below.</p>

<pre class="brush: js">//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));</pre>

<p>You can get the default <code>Connection</code> object with <code>mongoose.connection</code>. Once connected, the open event is fired on the <code>Connection</code> instance.</p>

<div class="note">
<p><strong>Tip:</strong> If you need to create additional connections you can use <code>mongoose.createConnection()</code>. This takes the same form of database URI (with host, database, port, options etc.) as <code>connect()</code> and returns a <code>Connection</code> object).</p>
</div>

<h3 id="Defining_and_creating_models">Defining and creating models</h3>

<p>Models are <em>defined </em>using the <code>Schema</code> interface. The Schema allows you to define the fields stored in each document along with their validation requirements and default values. In addition, you can define static and instance helper methods to make it easier to work with your data types, and also virtual properties that you can use like any other field, but which aren't actually stored in the database (we'll discuss a bit further below).</p>

<p>Schemas are then "compiled" into models using the <code>mongoose.model()</code> method. Once you have a model you can use it to find, create, update, and delete objects of the given type.</p>

<div class="note">
<p><strong>Note:</strong> Each model maps to a <em>collection</em> of <em>documents</em> in the MongoDB database. The documents will contain the fields/schema types defined in the model <code>Schema</code>.</p>
</div>

<h4 id="Defining_schemas">Defining schemas</h4>

<p>The code fragment below shows how you might define a simple schema. First you <code>require()</code> mongoose, then use the Schema constructor to create a new schema instance, defining the various fields inside it in the constructor's object parameter.</p>

<pre class="brush: js">//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
    a_string: String,
    a_date: Date
});
</pre>

<p>In the case above we just have two fields, a string and a date. In the next sections we will show some of the other field types, validation, and other methods.</p>

<h4 id="Creating_a_model">Creating a model</h4>

<p>Models are created from schemas using the <code>mongoose.model()</code> method:</p>

<pre class="brush: js">// Define schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
    a_string: String,
    a_date: Date
});

<strong>// Compile model from schema
var SomeModel = mongoose.model('SomeModel', SomeModelSchema );</strong></pre>

<p>The first argument is the singular name of the collection that will be created for your model (Mongoose will create the database collection for the above model <em>SomeModel</em> above), and the second argument is the schema you want to use in creating the model.</p>

<div class="note">
<p><strong>Note:</strong> Once you've defined your model classes you can use them to create, update, or delete records, and to run queries to get all records or particular subsets of records. We'll show you how to do this in the <a href="#Using_models">Using models</a> section, and when we create our views.</p>
</div>

<h4 id="스키마_타입_(필드)">스키마 타입 (필드)</h4>

<p>한 스키마는 임의의 숫자의 필드들을 가질 수 있습니다.(각각의 필드는 MongoDB에 저장된 문서의 필드를 대표합니다.) 아래의 예제 스키마는 일반적인 필드 타입들을 보여주고 있으며 그들이 어떻게 선언되는지 나타냅니다.</p>

<pre class="brush: js">var schema = new Schema(
{
  name: <strong>String</strong>,
  binary: <strong>Buffer</strong>,
  living: <strong>Boolean</strong>,
  updated: { type: <strong>Date</strong>, default: Date.now },
  age: { type: <strong>Number</strong>, min: 18, max: 65, required: true },
  mixed: <strong>Schema.Types.Mixed</strong>,
  _someId: <strong>Schema.Types.ObjectId</strong>,
  array: <strong>[]</strong>,
  ofString: [<strong>String</strong>], // You can also have an array of each of the other types too.
  nested: { stuff: { type: <strong>String</strong>, lowercase: true, trim: true } }
})</pre>

<p>Most of the <a href="http://mongoosejs.com/docs/schematypes.html">SchemaTypes</a> (the descriptors after “type:” or after field names) are self explanatory. The exceptions are:</p>

<ul>
 <li><code>ObjectId</code>: Represents specific instances of a model in the database. For example, a book might use this to represent its author object. This will actually contain the unique ID (<code>_id</code>) for the specified object. We can use the <code>populate()</code> method to pull in the associated information when needed.</li>
 <li><a href="http://mongoosejs.com/docs/schematypes.html#mixed">Mixed</a>: 임의의 스키마 타입입니다.(어떤 타입도 될 수 있음)</li>
 <li><font face="Consolas, Liberation Mono, Courier, monospace">[]</font>: An array of items. You can perform JavaScript array operations on these models (push, pop, unshift, etc.). The examples above show an array of objects without a specified type and an array of <code>String</code> objects, but you can have an array of any type of object.</li>
</ul>

<p>The code also shows both ways of declaring a field:</p>

<ul>
 <li>Field <em>name</em> and <em>type</em> as a key-value pair (i.e. as done with fields <code>name</code>, <code>binary </code>and <code>living</code>).</li>
 <li>Field <em>name</em> followed by an object defining the <code>type</code>, and any other <em>options</em> for the field. Options include things like:
  <ul>
   <li>default values.</li>
   <li>built-in validators (e.g. max/min values) and custom validation functions.</li>
   <li>Whether the field is required</li>
   <li>Whether <code>String</code> fields should automatically be set to lowercase, uppercase, or trimmed (e.g. <code>{ type: <strong>String</strong>, lowercase: true, trim: true }</code>)</li>
  </ul>
 </li>
</ul>

<p>For more information about options see <a href="http://mongoosejs.com/docs/schematypes.html">SchemaTypes</a> (Mongoose docs).</p>

<h4 id="Validation">Validation</h4>

<p>Mongoose provides built-in and custom validators, and synchronous and asynchronous validators. It allows you to specify both the acceptable range or values and the error message for validation failure in all cases.</p>

<p>The built-in validators include:</p>

<ul>
 <li>All <a href="http://mongoosejs.com/docs/schematypes.html">SchemaTypes</a> have the built-in <a href="http://mongoosejs.com/docs/api.html#schematype_SchemaType-required">required</a> validator. This is used to specify whether the field must be supplied in order to save a document.</li>
 <li><a href="http://mongoosejs.com/docs/api.html#schema-number-js">Numbers</a> have <a href="http://mongoosejs.com/docs/api.html#schema_number_SchemaNumber-min">min</a> and <a href="http://mongoosejs.com/docs/api.html#schema_number_SchemaNumber-max">max</a> validators.</li>
 <li><a href="http://mongoosejs.com/docs/api.html#schema-string-js">Strings</a> have:
  <ul>
   <li><a href="http://mongoosejs.com/docs/api.html#schema_string_SchemaString-enum">enum</a>: specifies the set of allowed values for the field.</li>
   <li><a href="http://mongoosejs.com/docs/api.html#schema_string_SchemaString-match">match</a>: specifies a regular expression that the string must match.</li>
   <li><a href="http://mongoosejs.com/docs/api.html#schema_string_SchemaString-maxlength">maxlength</a> and <a href="http://mongoosejs.com/docs/api.html#schema_string_SchemaString-minlength">minlength</a> for the string.</li>
  </ul>
 </li>
</ul>

<p>The example below (slightly modified from the Mongoose documents) shows how you can specify some of the validator types and error messages:</p>

<pre class="brush: js"><code>
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
</code></pre>

<p>For complete information on field validation see <a href="http://mongoosejs.com/docs/validation.html">Validation</a> (Mongoose docs).</p>

<h4 id="Virtual_properties">Virtual properties</h4>

<p>Virtual properties are document properties that you can get and set but that do not get persisted to MongoDB. The getters are useful for formatting or combining fields, while setters are useful for de-composing a single value into multiple values for storage. The example in the documentation constructs (and deconstructs) a full name virtual property from a first and last name field, which is easier and cleaner than constructing a full name every time one is used in a template.</p>

<div class="note">
<p><strong>Note:</strong> We will use a virtual property in the library to define a unique URL for each model record using a path and the record's <code>_id</code> value.</p>
</div>

<p>For more information see <a href="http://mongoosejs.com/docs/guide.html#virtuals">Virtuals</a> (Mongoose documentation).</p>

<h4 id="Methods_and_query_helpers">Methods and query helpers</h4>

<p>A schema can also have <a href="http://mongoosejs.com/docs/guide.html#methods">instance methods</a>, <a href="http://mongoosejs.com/docs/guide.html#statics">static methods</a>, and <a href="http://mongoosejs.com/docs/guide.html#query-helpers">query helpers</a>. The instance and static methods are similar, but with the obvious difference that an instance method is associated with a particular record and has access to the current object. Query helpers allow you to extend mongoose's <a href="http://mongoosejs.com/docs/queries.html">chainable query builder API</a> (for example, allowing you to add a query "byName" in addition to the <code>find()</code>, <code>findOne()</code> and <code>findById()</code> methods).</p>

<h3 id="Using_models">Using models</h3>

<p>Once you've created a schema you can use it to create models. The model represents a collection of documents in the database that you can search, while the model's instances represent individual documents that you can save and retrieve.</p>

<p>We provide a brief overview below. For more information see: <a href="http://mongoosejs.com/docs/models.html">Models</a> (Mongoose docs).</p>

<h4 id="Creating_and_modifying_documents">Creating and modifying documents</h4>

<p>To create a record you can define an instance of the model and then call <code>save()</code>. The examples below assume SomeModel is a model (with a single field "name") that we have created from our schema.</p>

<pre class="brush: js"><code>// Create an instance of model SomeModel
var awesome_instance = new </code>SomeModel<code>({ name: 'awesome' });

// Save the new model instance, passing a callback
awesome_instance.save(function (err) {
  if (err) return handleError(err);
  // saved!
});
</code></pre>

<p>Creation of records (along with updates, deletes, and queries) are asynchronous operations — you supply a callback that is called when the operation completes. The API uses the error-first argument convention, so the first argument for the callback will always be an error value (or null). If the API returns some result, this will be provided as the second argument.</p>

<p>You can also use <code>create()</code> to define the model instance at the same time as you save it. The callback will return an error for the first argument and the newly-created model instance for the second argument.</p>

<pre class="brush: js">SomeModel<code>.create({ name: 'also_awesome' }, function (err, awesome_instance) {
  if (err) return handleError(err);
  // saved!
});</code></pre>

<p>Every model has an associated connection (this will be the default connection when you use <code>mongoose.model()</code>). You create a new connection and call <code>.model()</code> on it to create the documents on a different database.</p>

<p>You can access the fields in this new record using the dot syntax, and change the values. You have to call <code>save()</code> or <code>update()</code> to store modified values back to the database.</p>

<pre class="brush: js">// Access model field values using dot notation
console.log(<code>awesome_instance.name</code>); //should log '<code>also_awesome</code>'

// Change record by modifying the fields, then calling save().
<code>awesome_instance</code>.name="New cool name";
<code>awesome_instance.save(function (err) {
   if (err) return handleError(err); // saved!
   });</code>
</pre>

<h4 id="Searching_for_records">Searching for records</h4>

<p>You can search for records using query methods, specifying the query conditions as a JSON document. The code fragment below shows how you might find all athletes in a database that play tennis, returning just the fields for athlete <em>name</em> and <em>age</em>. Here we just specify one matching field (sport) but you can add more criteria, specify regular expression criteria, or remove the conditions altogether to return all athletes.</p>

<pre class="brush: js"><code>var Athlete = mongoose.model('Athlete', yourSchema);

// find all athletes who play tennis, selecting the 'name' and 'age' fields
Athlete.find({ 'sport': 'Tennis' }, 'name age', function (err, athletes) {
  if (err) return handleError(err);
  // 'athletes' contains the list of athletes that match the criteria.
})</code></pre>

<p>If you specify a callback, as shown above, the query will execute immediately. The callback will be invoked when the search completes.</p>

<div class="note">
<p><strong>Note:</strong> All callbacks in Mongoose use the pattern <code>callback(error, result)</code>. If an error occurs executing the query, the <code>error</code> parameter will contain an error document, and <code>result</code> will be null. If the query is successful, the <code>error</code> parameter will be null, and the <code>result</code> will be populated with the results of the query.</p>
</div>

<p>If you don't specify a callback then the API will return a variable of type <a href="http://mongoosejs.com/docs/api.html#query-js">Query</a>. You can use this query object to build up your query and then execute it (with a callback) later using the <code>exec()</code> method.</p>

<pre class="brush: js"><code>// find all athletes that play tennis
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
})</code></pre>

<p>Above we've defined the query conditions in the <code>find()</code> method. We can also do this using a <code>where()</code> function, and we can chain all the parts of our query together using the dot operator (.) rather than adding them separately. The code fragment below is the same as our query above, with an additional condition for the age.</p>

<pre><code>Athlete.
  find().
  where('sport').equals('Tennis').
  where('age').gt(17).lt(50).  //Additional where query
  limit(5).
  sort({ age: -1 }).
  select('name age').
  exec(callback); // where callback is the name of our callback function.</code></pre>

<p>The <a href="http://mongoosejs.com/docs/api.html#query_Query-find">find()</a> method gets all matching records, but often you just want to get one match. The following methods query for a single record:</p>

<ul>
 <li><code><a href="http://mongoosejs.com/docs/api.html#model_Model.findById">findById()</a></code>: Finds the document with the specified <code>id</code> (every document has a unique <code>id</code>).</li>
 <li><code><a href="http://mongoosejs.com/docs/api.html#query_Query-findOne">findOne()</a></code>: Finds a single document that matches the specified criteria.</li>
 <li><code><a href="http://mongoosejs.com/docs/api.html#model_Model.findByIdAndRemove">findByIdAndRemove()</a></code>, <code><a href="http://mongoosejs.com/docs/api.html#model_Model.findByIdAndUpdate">findByIdAndUpdate()</a></code>, <code><a href="http://mongoosejs.com/docs/api.html#query_Query-findOneAndRemove">findOneAndRemove()</a></code>, <code><a href="http://mongoosejs.com/docs/api.html#query_Query-findOneAndUpdate">findOneAndUpdate()</a></code>: Finds a single document by <code>id</code> or criteria and either update or remove it. These are useful convenience functions for updating and removing records.</li>
</ul>

<div class="note">
<p><strong>Note:</strong> There is also a <code><a href="http://mongoosejs.com/docs/api.html#model_Model.count">count()</a></code> method that you can use to get the number of items that match conditions. This is useful if you want to perform a count without actually fetching the records.</p>
</div>

<p>There is a lot more you can do with queries. For more information see: <a href="http://mongoosejs.com/docs/queries.html">Queries</a> (Mongoose docs).</p>

<h4 id="Working_with_related_documents_—_population">Working with related documents — population</h4>

<p>You can create references from one document/model instance to another using the <code>ObjectId</code> schema field, or from one document to many using an array of <code>ObjectIds</code>. The field stores the id of the related model. If you need the actual content of the associated document, you can use the <code><a href="http://mongoosejs.com/docs/api.html#query_Query-populate">populate()</a></code> method in a query to replace the id with the actual data.</p>

<p>For example, the following schema defines authors and stories. Each author can have multiple stories, which we represent as an array of <code>ObjectId</code>. Each story can have a single author. The "ref" (highlighted in bold below) tells the schema which model can be assigned to this field.</p>

<pre class="brush: js"><code>var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var authorSchema = Schema({
  name    : String,
  stories : [{ type: Schema.Types.ObjectId, <strong>ref</strong>: 'Story' }]
});

var storySchema = Schema({
  author : { type: Schema.Types.ObjectId, <strong>ref</strong>: 'Author' },
  title    : String
});

var Story  = mongoose.model('Story', storySchema);
var Author = mongoose.model('Author', authorSchema);</code></pre>

<p>We can save our references to the related document by assigning the <code>_id</code> value. Below we create an author, then a book, and assign the author id to our stories author field.</p>

<pre class="brush: js"><code>var bob = new Author({ name: 'Bob Smith' });

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
});</code></pre>

<p>Our story document now has an author referenced by the author document's ID. In order to get the author information in our story results we use <code>populate()</code>, as shown below.</p>

<pre class="brush: js"><code>Story
.findOne({ title: 'Bob goes sledding' })
.populate('author') //This populates the author id with actual author information!
.exec(function (err, story) {
  if (err) return handleError(err);
  console.log('The author is %s', story.author.name);
  // prints "The author is Bob Smith"
});</code></pre>

<div class="note">
<p><strong>Note:</strong> Astute readers will have noted that we added an author to our story, but we didn't do anything to add our story to our author's <code>stories</code> array. How then can we get all stories by a particular author? One way would be to add our author to the stories array, but this would result in us having two places where the information relating authors and stories needs to be maintained.</p>

<p>A better way is to get the <code>_id</code> of our <em>author</em>, then use <code>find()</code> to search for this in the author field across all stories.</p>

<pre class="brush: js"><code>Story
.find({ author : bob._id })
.exec(function (err, stories) {
  if (err) return handleError(err);
  // returns all stories that have Bob's id as their author.
});</code>
</pre>
</div>

<p>This is almost everything you need to know about working with related items<em> for this tutorial</em>. For more detailed information see <a href="http://mongoosejs.com/docs/populate.html">Population</a> (Mongoose docs).</p>

<h3 id="One_schemamodel_per_file">One schema/model per file</h3>

<p>While you can create schemas and models using any file structure you like, we highly recommend defining each model schema in its own module (file), exporting the method to create the model. This is shown below:</p>

<pre class="brush: js"><code>// File: ./models/somemodel.js

//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
    a_string          : String,
    a_date            : Date,
});

<strong>//Export function to create "SomeModel" model class
module.exports = mongoose.model('SomeModel', SomeModelSchema );</strong></code></pre>

<p>You can then require and use the model immediately in other files. Below we show how you might use it to get all instances of the model.</p>

<pre class="brush: js"><code>//Create a SomeModel model just by requiring the module
var SomeModel = require('../models/somemodel')

// Use the SomeModel object (model) to find all SomeModel records
SomeModel.find(callback_function);</code></pre>

<h2 id="Setting_up_the_MongoDB_database">Setting up the MongoDB database</h2>

<p>Now that we understand something of what Mongoose can do and how we want to design our models, it's time to start work on the <em>LocalLibrary</em> website. The very first thing we want to do is set up a MongoDb database that we can use to store our library data.</p>

<p>For this tutorial we're going to use <a href="https://mlab.com/welcome/">mLab</a>'s free cloud-hosted "<a href="https://mlab.com/plans/pricing/">sandbox</a>" database. This database tier is not considered suitable for production websites because it has no redundancy, but it is great for development and prototyping. We're using it here because it is free and easy to set up, and because mLab is a popular <em>database as a service</em> vendor that you might reasonably choose for your production database (other popular choices at the time of writing include <a href="https://www.compose.com/">Compose</a>, <a href="https://scalegrid.io/pricing.html">ScaleGrid</a> and <a href="https://www.mongodb.com/cloud/atlas">MongoDB Atlas</a>).</p>

<div class="note">
<p><strong>Note:</strong> If you prefer you can set up a MongoDb database locally by downloading and installing the <a href="https://www.mongodb.com/download-center">appropriate binaries for your system</a>. The rest of the instructions in this article would be similar, except for the database URL you would specify when connecting.</p>
</div>

<p>You will first need to <a href="https://mlab.com/signup/">create an account</a> with mLab (this is free, and just requires that you enter basic contact details and acknowledge their terms of service). </p>

<p>After logging in, you'll be taken to the <a href="https://mlab.com/home">home</a> screen:</p>

<ol>
 <li>Click <strong>Create New</strong> in the <em>MongoDB Deployments</em> section.<img alt="" src="https://mdn.mozillademos.org/files/14446/mLabCreateNewDeployment.png" style="height: 415px; width: 1000px;"></li>
 <li>This will open the <em>Cloud Provider Selection </em>screen.<br>
  <img alt="MLab - screen for new deployment" src="https://mdn.mozillademos.org/files/15661/mLab_new_deployment_form_v2.png" style="height: 931px; width: 1297px;"><br>

  <ul>
   <li>Select the SANDBOX (Free) plan from the Plan Type section. </li>
   <li>Select any provider from the <em>Cloud Provider </em>section. Different providers offer different regions (displayed below the selected plan type).</li>
   <li>Click the <strong>Continue</strong> button.</li>
  </ul>
 </li>
 <li>This will open the <em>Select Region</em> screen.
  <p><img alt="Select new region screen" src="https://mdn.mozillademos.org/files/15662/mLab_new_deployment_select_region_v2.png" style="height: 570px; width: 1293px;"></p>

  <ul>
   <li>
    <p>Select the region closest to you and then <strong>Continue</strong>.</p>
   </li>
  </ul>
 </li>
 <li>
  <p>This will open the <em>Final Details</em> screen.<br>
   <img alt="New deployment database name" src="https://mdn.mozillademos.org/files/15663/mLab_new_deployment_final_details.png" style="height: 569px; width: 1293px;"></p>

  <ul>
   <li>
    <p>Enter the name for the new database as <code>local_library</code> and then select <strong>Continue</strong>.</p>
   </li>
  </ul>
 </li>
 <li>
  <p>This will open the <em>Order Confirmation</em> screen.<br>
   <img alt="Order confirmation screen" src="https://mdn.mozillademos.org/files/15664/mLab_new_deployment_order_confirmation.png" style="height: 687px; width: 1290px;"></p>

  <ul>
   <li>
    <p>Click <strong>Submit Order</strong> to create the database.</p>
   </li>
  </ul>
 </li>
 <li>
  <p>You will be returned to the home screen. Click on the new database you just created to open its details screen. As you can see the database has no collections (data).<br>
   <img alt="mLab - Database details screen" src="https://mdn.mozillademos.org/files/15665/mLab_new_deployment_database_details.png" style="height: 700px; width: 1398px;"><br>
    <br>
   The URL that you need to use to access your database is displayed on the form above (shown for this database circled above). In order to use this you need to create a database user that you can specify in the URL.</p>
 </li>
 <li>Click the <strong>Users</strong> tab and select the <strong>Add database user</strong> button.</li>
 <li>Enter a username and password (twice), and then press <strong>Create</strong>. Do not select <em>Make read only</em>.<br>
  <img alt="" src="https://mdn.mozillademos.org/files/14454/mLab_database_users.png" style="height: 204px; width: 600px;"></li>
</ol>

<p>You now have now created the database, and have an URL (with username and password) that can be used to access it. This will look something like: <code>mongodb://your_user_namer:your_password@ds119748.mlab.com:19748/local_library</code>.</p>

<h2 id="Install_Mongoose">Install Mongoose</h2>

<p>Open a command prompt and navigate to the directory where you created your <a href="/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website">skeleton Local Library website</a>. Enter the following command to install Mongoose (and its dependencies) and add it to your <strong>package.json</strong> file, unless you have already done so when reading the <a href="#Installing_Mongoose_and_MongoDB">Mongoose Primer</a> above.</p>

<pre class="brush: bash">npm install mongoose --save
</pre>

<h2 id="Connect_to_MongoDB">Connect to MongoDB</h2>

<p>Open <strong>/app.js</strong> (in the root of your project) and copy the following text below where you declare the <em>Express application object</em> (after the line <code>var app = express();</code>). Replace the database url string ('<em>insert_your_database_url_here</em>') with the location URL representing your own database (i.e. using the information from <a href="#Setting_up_the_MongoDB_database">from mLab</a>).</p>

<pre class="brush: js">//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = '<em>insert_your_database_url_here</em>';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));</pre>

<p>As discussed <a href="#Connecting_to_MongoDB">in the Mongoose primer above</a>, this code creates the default connection to the database and binds to the error event (so that errors will be printed to the console). </p>

<h2 id="Defining_the_LocalLibrary_Schema">Defining the LocalLibrary Schema</h2>

<p>We will define a separate module for each model, as <a href="#One_schemamodel_per_file">discussed above</a>. Start by creating a folder for our models in the project root (<strong>/models</strong>) and then create separate files for each of the models:</p>

<pre>/express-locallibrary-tutorial  //the project root
  <strong>/models</strong>
    <strong>author.js</strong>
    <strong>book.js</strong>
    <strong>bookinstance.js</strong>
    <strong>genre.js</strong>
</pre>

<h3 id="Author_model">Author model</h3>

<p>Copy the <code>Author</code> schema code shown below and paste it into your <strong>./models/author.js</strong> file. The scheme defines an author has having <code>String</code> SchemaTypes for the first and family names, that are required and have a maximum of 100 characters, and <code>Date</code> fields for the date of birth and death.</p>

<pre class="brush: js">var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AuthorSchema = new Schema(
  {
    first_name: {type: String, required: true, max: 100},
    family_name: {type: String, required: true, max: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date},
  }
);

<strong>// Virtual for author's full name
AuthorSchema
.virtual('name')
.get(function () {
  return this.family_name + ', ' + this.first_name;
});</strong>

// Virtual for author's URL
AuthorSchema
.virtual('url')
.get(function () {
  return '/catalog/author/' + this._id;
});

//Export model
module.exports = mongoose.model('Author', AuthorSchema);

</pre>

<p>We've also declared a <a href="#Virtual_properties">virtual</a> for the AuthorSchema named "url" that returns the absolute URL required to get a particular instance of the model — we'll use the property in our templates whenever we need to get a link to a particular author.</p>

<div class="note">
<p><strong>Note:</strong> Declaring our URLs as a virtual in the schema is a good idea because then the URL for an item only ever needs to be changed in one place.<br>
 At this point a link using this URL wouldn't work, because we haven't got any routes handling code for individual model instances. We'll set those up in a later article!</p>
</div>

<p>At the end of the module we export the model.</p>

<h3 id="Book_model">Book model</h3>

<p>Copy the <code>Book</code> schema code shown below and paste it into your <strong>./models/book.js</strong> file. Most of this is similar to the author model — we've declared a schema with a number of string fields and a virtual for getting the URL of specific book records, and we've exported the model.</p>

<pre class="brush: js">var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookSchema = new Schema(
  {
    title: {type: String, required: true},
  <strong>  author: {type: Schema.ObjectId, ref: 'Author', required: true},</strong>
    summary: {type: String, required: true},
    isbn: {type: String, required: true},
  <strong>  genre: [{type: Schema.ObjectId, ref: 'Genre'}]</strong>
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
</pre>

<p>The main difference here is that we've created two references to other models:</p>

<ul>
 <li>author is a reference to a single <code>Author</code> model object, and is required.</li>
 <li>genre is a reference to an array of <code>Genre</code> model objects. We haven't declared this object yet!</li>
</ul>

<h3 id="BookInstance_model">BookInstance model</h3>

<p>Finally, copy the <code>BookInstance</code> schema code shown below and paste it into your <strong>./models/bookinstance.js</strong> file. The <code>BookInstance</code> represents a specific copy of a book that someone might borrow, and includes information about whether the copy is available or on what date it is expected back, "imprint" or version details.</p>

<pre class="brush: js">var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookInstanceSchema = new Schema(
  {
    book: { type: Schema.ObjectId, ref: 'Book', required: true }, //reference to the associated book
    imprint: {type: String, required: true},
    status: {type: String, required: true, <strong>enum: ['Available', 'Maintenance', 'Loaned', 'Reserved']</strong>, <strong>default: 'Maintenance'</strong>},
    due_back: {type: Date, <strong>default: Date.now</strong>}
  }
);

// Virtual for bookinstance's URL
BookInstanceSchema
.virtual('url')
.get(function () {
  return '/catalog/bookinstance/' + this._id;
});

//Export model
module.exports = mongoose.model('BookInstance', BookInstanceSchema);</pre>

<p>The new things we show here are the field options:</p>

<ul>
 <li><code>enum</code>: This allows us to set the allowed values of a string. In this case we use it to specify the availability status of our books (using an enum means that we can prevent mis-spellings and arbitrary values for our status)</li>
 <li><code>default</code>: We use default to set the default status for newly created bookinstances to maintenance and the default <code>due_back</code> date to <code>now</code> (note how you can call the Date function when setting the date!)</li>
</ul>

<p>Everything else should be familiar from our previous schema.</p>

<h3 id="Genre_model_-_challenge!">Genre model - challenge!</h3>

<p>Open your <strong>./models/genre.js</strong> file and create a schema for storing genres (the category of book, e.g. whether it is fiction or non-fiction, romance or military history, etc).</p>

<p>The definition will be very similar to the other models:</p>

<ul>
 <li>The model should have a <code>String</code> SchemaType called <code>name</code> to describe the genre.</li>
 <li>This name should be required and have between 3 and 100 characters.</li>
 <li>Declare a <a href="#Virtual_properties">virtual</a> for the genre's URL, named <code>url</code>.</li>
 <li>Export the model.</li>
</ul>

<h2 id="Testing_—_create_some_items">Testing — create some items</h2>

<p>That's it. We now have all models for the site set up!</p>

<p>In order to test the models (and to create some example books and other items that we can use in our next articles) we'll now run an <em>independent</em> script to create items of each type:</p>

<ol>
 <li>Download (or otherwise create) the file <a href="https://raw.githubusercontent.com/hamishwillee/express-locallibrary-tutorial/master/populatedb.js">populatedb.js</a> inside your <em>express-locallibrary-tutorial</em> directory (in the same level as <code>package.json</code>).

  <div class="note">
  <p><strong>Note:</strong> You don't need to know how <a href="https://raw.githubusercontent.com/hamishwillee/express-locallibrary-tutorial/master/populatedb.js">populatedb.js</a> works; it just adds sample data into the database.</p>
  </div>
 </li>
 <li>Enter the following commands in the project root to install the <em>async</em> module that is required by the script (we'll discuss this in later tutorials, )
  <pre class="brush: bash">npm install async --save</pre>
 </li>
 <li>Run the script using node in your command prompt, passing in the URL of your <em>MongoDB</em> database (the same one you replaced the <em>insert_your_database_url_here </em>placeholder with, inside <code>app.js</code> earlier):
  <pre class="brush: bash">node populatedb &lt;your mongodb url&gt;​​​​</pre>
 </li>
 <li>The script should run through to completion, displaying items as it creates them in the terminal.</li>
</ol>

<div class="note">
<p><strong>Tip:</strong> Go to your database on <a href="https://mlab.com/home">mLab</a>. You should now be able to drill down into individual collections of Books, Authors, Genres and BookInstances, and check out individual documents.</p>
</div>

<h2 id="Summary">Summary</h2>

<p>In this article we've learned a bit about databases and ORMs on Node/Express, and a lot about how Mongoose schema and models are defined. We then used this information to design and implement <code>Book</code>, <code>BookInstance</code>, <code>Author</code> and <code>Genre</code> models for the <em>LocalLibrary</em> website.</p>

<p>Last of all we tested our models by creating a number of instances (using a standalone script). In the next article we'll look at creating some pages to display these objects.</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="https://expressjs.com/en/guide/database-integration.html">Database integration</a> (Express docs)</li>
 <li><a href="http://mongoosejs.com/">Mongoose website</a> (Mongoose docs)</li>
 <li><a href="http://mongoosejs.com/docs/guide.html">Mongoose Guide</a> (Mongoose docs)</li>
 <li><a href="http://mongoosejs.com/docs/validation.html">Validation</a> (Mongoose docs)</li>
 <li><a href="http://mongoosejs.com/docs/schematypes.html">Schema Types</a> (Mongoose docs)</li>
 <li><a href="http://mongoosejs.com/docs/models.html">Models</a> (Mongoose docs)</li>
 <li><a href="http://mongoosejs.com/docs/queries.html">Queries</a> (Mongoose docs)</li>
 <li><a href="http://mongoosejs.com/docs/populate.html">Population</a> (Mongoose docs)</li>
</ul>

<p>{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/skeleton_website", "Learn/Server-side/Express_Nodejs/routes", "Learn/Server-side/Express_Nodejs")}}</p>

<p> </p>

<h2 id="In_this_module">In this module</h2>

<ul>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction">Express/Node introduction</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment">Setting up a Node (Express) development environment</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website">Express Tutorial: The Local Library website</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website">Express Tutorial Part 2: Creating a skeleton website</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose">Express Tutorial Part 3: Using a Database (with Mongoose)</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/routes">Express Tutorial Part 4: Routes and controllers</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data">Express Tutorial Part 5: Displaying library data</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/forms">Express Tutorial Part 6: Working with forms</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/deployment">Express Tutorial Part 7: Deploying to production</a></li>
</ul>

<p> </p>

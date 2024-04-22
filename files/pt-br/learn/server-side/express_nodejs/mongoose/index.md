---
title: "Tutorial Express Parte 3: Usando um banco de dados (com Mongoose)"
slug: Learn/Server-side/Express_Nodejs/mongoose
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/skeleton_website", "Learn/Server-side/Express_Nodejs/routes", "Learn/Server-side/Express_Nodejs")}}

Este artigo introduz brevemente bancos de dados e como usá-los com aplicativos Node/Express. Depois demonstra como podemos usar o [Mongoose](http://mongoosejs.com/) para prover acesso ao banco de dados para o website [LocalLibrary](/pt-BR/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website). Explica como object schema e modelos são declarados, os principais tipos de campos e validações básicas. Também demonstra brevemente algumas das muitas maneiras em que se pode acessar os dados do modelo.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        <a href="/pt-BR/docs/Learn/Server-side/Express_Nodejs/skeleton_website"
          >Tutorial Express Parte 2: Criando o esqueleto de um website</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Ser capaz de projetar e criar seus próprios modelos usando Mongoose.
      </td>
    </tr>
  </tbody>
</table>

## Visão geral

A equipe da biblioteca usará o site da Biblioteca Local para gardar informações sobre livros e empréstimos, enquanto os membros da biblioteca irão utilizá-lo para navegar e pesquisar por livros, descobrir se há alguma cópia disponível, e então reservar ou emprestar eles. Para armazenar e obter informações eficientemente, nós guardaremos elas em um _banco de dados_.

Aplicativos _Express_ podem usar muitos bancos de dados diferentes, e existem várias abordagens que você pode usar para fazer operações de Criar, Ler, Atualizar e Apagar (CRUD, na sigla em inglês). Esse tutorial provê uma curta visão geral de algumas das opções disponíveis e então irá mostrar em detalhes os mecanismos particulares selecionados.

### Quais bancos de dados eu posso usar?

Aplicativos _Express_ podem usar qualquer banco de dados suportado pelo _Node_ (O _Express_ por si só não define nenhum requerimento ou comportamento adicional específico para gerenciamento de bancos de dados). Há [muitas opções populares](https://expressjs.com/en/guide/database-integration.html), incluindo PostgreSQL, MySQL, Redis, SQLite, and MongoDB.

Quando escolher um banco de dados, você deveria considerar coisas como o tempo-para-produtividade/curva de aprendizado, performance, facilidade de replicação/backup, custo, suporte da comunidade, etc. Enquanto não existe o "melhor" banco de dados, praticamente qualquer uma das soluções populares devem ser mais do que aceitáveis para um site de tamanho pequeno a médio como o da nossa Biblioteca Local.

Para mais informações sobre as opções veja [Integração com o Banco de dados](https://expressjs.com/en/guide/database-integration.html) (documentação do Express).

### Qual o melhor jeito de interagir com um banco de dados?

There are two approaches for interacting with a database:

- Using the databases' native query language (e.g. SQL)
- Using an Object Data Model ("ODM") / Object Relational Model ("ORM"). An ODM/ORM represents the website's data as JavaScript objects, which are then mapped to the underlying database. Some ORMs are tied to a specific database, while others provide a database-agnostic backend.

The very best _performance_ can be gained by using SQL, or whatever query language is supported by the database. ODM's are often slower because they use translation code to map between objects and the database format, which may not use the most efficient database queries (this is particularly true if the ODM supports different database backends, and must make greater compromises in terms of what database features are supported).

The benefit of using an ORM is that programmers can continue to think in terms of JavaScript objects rather than database semantics — this is particularly true if you need to work with different databases (on either the same or different websites). They also provide an obvious place to perform validation and checking of data.

> **Nota:** **Tip:** Using ODM/ORMs often results in lower costs for development and maintenance! Unless you're very familiar with the native query language or performance is paramount, you should strongly consider using an ODM.

### Qual ORM/ODM eu devo usar?

There are many ODM/ORM solutions available on the NPM package manager site (check out the [odm](https://www.npmjs.com/browse/keyword/odm) and [orm](https://www.npmjs.com/browse/keyword/orm) tags for a subset!).

A few solutions that were popular at the time of writing are:

- [Mongoose](https://www.npmjs.com/package/mongoose): Mongoose is a [MongoDB](https://www.mongodb.org/) object modeling tool designed to work in an asynchronous environment.
- [Waterline](https://www.npmjs.com/package/waterline): An ORM extracted from the Express-based [Sails](http://sailsjs.com/) web framework. It provides a uniform API for accessing numerous different databases, including Redis, MySQL, LDAP, MongoDB, and Postgres.
- [Bookshelf](https://www.npmjs.com/package/bookshelf): Features both promise-based and traditional callback interfaces, providing transaction support, eager/nested-eager relation loading, polymorphic associations, and support for one-to-one, one-to-many, and many-to-many relations. Works with PostgreSQL, MySQL, and SQLite3.
- [Objection](https://www.npmjs.com/package/objection): Makes it as easy as possible to use the full power of SQL and the underlying database engine (supports SQLite3, Postgres, and MySQL).
- [Sequelize](https://www.npmjs.com/package/sequelize) is a promise-based ORM for Node.js and io.js. It supports the dialects PostgreSQL, MySQL, MariaDB, SQLite, and MSSQL and features solid transaction support, relations, read replication and more.
- [Node ORM2](https://node-orm.readthedocs.io/en/latest/) is an Object Relationship Manager for NodeJS. It supports MySQL, SQLite, and Progress, helping to work with the database using an object-oriented approach.
- [JugglingDB](http://1602.github.io/jugglingdb/) is cross-DB ORM for NodeJS, providing a common interface to access most popular database formats. Currently supporting MySQL, SQLite3, Postgres, MongoDB, Redis and js-memory-storage (self-written engine for test-usage only).

As a general rule, you should consider both the features provided and the "community activity" (downloads, contributions, bug reports, quality of documentation, etc.) when selecting a solution. At the time of writing Mongoose is by far the most popular ODM, and is a reasonable choice if you're using MongoDB for your database.

### Usando Mongoose e MongoDb para a LocalLibrary

Para o exemplo da _Local Library_ (e para o resto do tópico) nós iremos usar o [Mongoose ODM](https://www.npmjs.com/package/mongoose) para acessar os dados da nossa aplicação. Mongoose funciona como uma interface para o [MongoDB](https://www.mongodb.com/what-is-mongodb), um banco de dados de código aberto e [NoSQL](https://en.wikipedia.org/wiki/NoSQL) que usa um modelo de dados orientado a documentos. Uma "coleção" de "documentos", em uma base de dados do MongoDB, [é semelhante](https://docs.mongodb.com/manual/core/databases-and-collections/#collections) a uma "tabela" com "linhas" em uma base dados relacional.

Esse ODM (Object Data Model) e banco de dados combinados são extremamente populares na comunidade do Node, particularmente porque os documentos armazenados e os métodos de consultas se parecem muito com JSON, que consequentemente são muito familiares aos desenvolvedores JavaScript.

> **Nota:** **Dica:** Você não precisa conhecer o MongoDB antes de usar o Mongoose, apesar de que partes da [documentação do Mongoose](http://mongoosejs.com/docs/guide.html) _são mais fáceis_ de entender se você já está familiarizado com o MongoDB.

O resto desse tutorial mostra como definir e acessar os modelos e schemas no Mongoose para o nosso website da [LocalLibrary](/pt-BR/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website).

## Projetando os modelos da aplicação LocalLibrary

Antes de pularmos de cabeça na codificação dos modelos, vale a pena pensar uns minutinhos sobre quais dados precisamos armazenar e o relacionamento entre diferentes objetos.

Nós sabemos que precisamos armazenar informações sobre livros(título, resumo, autor, gênero, ISBN) e que nós podemos ter múltiplas cópias disponíveis (com ids globlamente únicos, status de disponibilidade, etc.). Nós também podemos armazenar mais informações sobre o autor do que apenas seu nome, e podem haver múltiplos autores com o mesmo nome ou um bem parecido. Nós queremos também ser capazes de ordernar informações baseadas no título do livro, autor, gênero e categoria.

Ao estruturar seus modelos é sempre bom separar modelos para cada "objeto"(um grupo de informações relacionadas). Neste caso, os nossos objetos mais evidentes são os de livros (books), pedidos de livros (book instances), e autores (authors).

Você pode usar também modelos para representar opções de listagens(por exemplo um menu drop-down com escolhas para o usuário), ao invés de implementar as escolhas diretamente em linhas de códigos dentro do seu website — isso é recomendado quando as escolhas não são conhecidas durante o desenvolvimento ou quando elas podem mudar. O candidato mais evidente para um modelo desse tipo é o de gênero (genre) de livros (por exemplo Ficção Ciêntífica, Poesia Clássica, etc.).

Uma vez que nós decidimos nossos modelos e os seus atributos, nós precisamos pensar sobre o relacionamento entre eles.

Com isso em mente, o diagrama UML a seguir mostra os modelos (as caixas) que iremos definir na nossa aplicação. Como discutido acima, criamos modelos para os livros ( com informações genéricas sobre o livro), pedidos de livros(status de cópias físicas de um livro específico disponíveis no sistema), e autor. E também decidimos ter um modelo para o gênero então esses valores poderão ser criados dinamicamente na aplicação. Outra decisão foi de não criarmos um modelo para `BookInstance:status` — nós deixaremos diretamente no código os valores aceitáveis para o status de pedidos porque nós não esperamos que eles mudem. Dentro de cada caixa, você pode ver o nome do modelo, o nome dos atributos e seus tipos, e também os métodos e seu tipo de retorno.

O diagrama também mostra o relacionamento entre modelos, incluindo sua cardinalidade. A cardinalidade são os números no diagrama próximos das linhas que conectam as caixas mostrando os números (máximo e mínimo) de cada modelo que pode estar presente no relacionamento. Por exemplo, as linhas que conectam as caixas `Book`e `Genre` mostram que as duas coleções têm uma relação. Os números próximos ao modelo `Book` mostra que Genre pode ter zero ou mais Book (quantos você quiser), enquanto no outro fim da linha de conexão próximo a `Genre` mostra que ele pode ter zero ou mais livros associados.

> **Nota:** Assim como discutido abaixo em [Iniciando com Mongoose](#related_documents) muitas vezes é melhor ter o atributo que define a relação entre os documentos/modelos em apenas um dos modelos( você ainda pode encontrar o relacionamento reverso pesquisando o `_id` associado no outro modelo). Abaixo nós escolhemos definir o modelo Book Schema para armazenar o relacionamento entre Book/Genre e Book/Author, e definimos BookInstance Schema para armazenar o relacionamento entre Book/BookInstance. Esta escolha foi um tanto arbitrária — nós poderíamos igualmente ter declarado esses atributos em outro schema.

![Mongoose Library Model with correct cardinality](library_website_-_mongoose_express.png)

> **Nota:** A próxima seção fornece um guia explicando como os modelos são definidos e usados. Ao ler, considere como iremos construir cada um dos modelos no diagrama acima.

## Iniciando com Mongoose

Esta seção fornece uma visão geral de como conectar o Mongoose a um banco de dados do MongoDB, como definir um schema e um modelo, e como fazer consultas básicas.

> **Nota:** Esse guia é "bastante influenciado" pelo conteúdo encontrado no [Mongoose quick start](https://www.npmjs.com/package/mongoose) do _npm_ e pela [documentação oficial](http://mongoosejs.com/docs/guide.html).

### Instalando Mongoose e MongoDB

O Mongoose é instalado no seu projeto (**package.json**) assim como outra dependência qualquer — usando NPM. Para instalá-lo, use a seguinte linha de comando dentro da pasta do seu projeto:

```bash
npm install mongoose
```

Installing _Mongoose_ adds all its dependencies, including the MongoDB database driver, but it does not install MongoDB itself. If you want to install a MongoDB server then you can [download installers from here](https://www.mongodb.com/download-center) for various operating systems and install it locally. You can also use cloud-based MongoDB instances.

> **Nota:** For this tutorial, we'll be using the MongoDB Atlas cloud-based _database as a service_ [free tier](https://www.mongodb.com/cloud/atlas/pricing) to provide the database. This is suitable for development and makes sense for the tutorial because it makes "installation" operating system independent (database-as-a-service is also one approach you might well use for your production database).

### Conectando ao MongoDB

_Mongoose_ requires a connection to a MongoDB database. You can `require()` and connect to a locally hosted database with `mongoose.connect()`, as shown below.

```js
//Import the mongoose module
var mongoose = require("mongoose");

//Set up default mongoose connection
var mongoDB = "mongodb://127.0.0.1/my_database";
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
```

You can get the default `Connection` object with `mongoose.connection`. Once connected, the open event is fired on the `Connection` instance.

> **Nota:** **Tip:** If you need to create additional connections you can use `mongoose.createConnection()`. This takes the same form of database URI (with host, database, port, options etc.) as `connect()` and returns a `Connection` object).

### Definindo e criando modelos

Models are _defined_ using the `Schema` interface. The Schema allows you to define the fields stored in each document along with their validation requirements and default values. In addition, you can define static and instance helper methods to make it easier to work with your data types, and also virtual properties that you can use like any other field, but which aren't actually stored in the database (we'll discuss a bit further below).

Schemas are then "compiled" into models using the `mongoose.model()` method. Once you have a model you can use it to find, create, update, and delete objects of the given type.

> **Nota:** Each model maps to a _collection_ of _documents_ in the MongoDB database. The documents will contain the fields/schema types defined in the model `Schema`.

#### Defining schemas

The code fragment below shows how you might define a simple schema. First you `require()` mongoose, then use the Schema constructor to create a new schema instance, defining the various fields inside it in the constructor's object parameter.

```js
//Require Mongoose
var mongoose = require("mongoose");

//Define a schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
  a_string: String,
  a_date: Date,
});
```

In the case above we just have two fields, a string and a date. In the next sections, we will show some of the other field types, validation, and other methods.

#### Criando um modelo

Models are created from schemas using the `mongoose.model()` method:

```js
// Define schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
  a_string: String,
  a_date: Date,
});

// Compile model from schema
var SomeModel = mongoose.model("SomeModel", SomeModelSchema);
```

The first argument is the singular name of the collection that will be created for your model (Mongoose will create the database collection for the above model _SomeModel_ above), and the second argument is the schema you want to use in creating the model.

> **Nota:** Once you've defined your model classes you can use them to create, update, or delete records, and run queries to get all records or particular subsets of records. We'll show you how to do this in the [Using models](#Using_models) section, and when we create our views.

#### Schema types (fields)

A schema can have an arbitrary number of fields — each one represents a field in the documents stored in _MongoDB_. An example schema showing many of the common field types and how they are declared is shown below.

```js
var schema = new Schema({
  name: String,
  binary: Buffer,
  living: Boolean,
  updated: { type: Date, default: Date.now() },
  age: { type: Number, min: 18, max: 65, required: true },
  mixed: Schema.Types.Mixed,
  _someId: Schema.Types.ObjectId,
  array: [],
  ofString: [String], // You can also have an array of each of the other types too.
  nested: { stuff: { type: String, lowercase: true, trim: true } },
});
```

Most of the [SchemaTypes](http://mongoosejs.com/docs/schematypes.html) (the descriptors after "type:" or after field names) are self-explanatory. The exceptions are:

- `ObjectId`: Represents specific instances of a model in the database. For example, a book might use this to represent its author object. This will actually contain the unique ID (`_id`) for the specified object. We can use the `populate()` method to pull in the associated information when needed.
- [Mixed](http://mongoosejs.com/docs/schematypes.html#mixed): An arbitrary schema type.
- \[]: An array of items. You can perform JavaScript array operations on these models (push, pop, unshift, etc.). The examples above show an array of objects without a specified type and an array of `String` objects, but you can have an array of any type of object.

The code also shows both ways of declaring a field:

- Field _name_ and _type_ as a key-value pair (i.e. as done with fields `name`, `binary` and `living`).
- Field _name_ followed by an object defining the `type`, and any other _options_ for the field. Options include things like:

  - default values.
  - built-in validators (e.g. max/min values) and custom validation functions.
  - Whether the field is required
  - Whether `String` fields should automatically be set to lowercase, uppercase, or trimmed (e.g. `{ type: String, lowercase: true, trim: true }`)

For more information about options see [SchemaTypes](http://mongoosejs.com/docs/schematypes.html) (Mongoose docs).

#### Validação

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
    min: [6, "Too few eggs"],
    max: 12,
    required: [true, "Why no eggs?"],
  },
  drink: {
    type: String,
    enum: ["Coffee", "Tea", "Water"],
  },
});
```

For complete information on field validation see [Validation](http://mongoosejs.com/docs/validation.html) (Mongoose docs).

#### Propriedades virtuais

Virtual properties are document properties that you can get and set but that do not get persisted to MongoDB. The getters are useful for formatting or combining fields, while setters are useful for de-composing a single value into multiple values for storage. The example in the documentation constructs (and deconstructs) a full name virtual property from a first and last name field, which is easier and cleaner than constructing a full name every time one is used in a template.

> **Nota:** We will use a virtual property in the library to define a unique URL for each model record using a path and the record's `_id` value.

For more information see [Virtuals](http://mongoosejs.com/docs/guide.html#virtuals) (Mongoose documentation).

#### Methods and query helpers

A schema can also have [instance methods](http://mongoosejs.com/docs/guide.html#methods), [static methods](http://mongoosejs.com/docs/guide.html#statics), and [query helpers](http://mongoosejs.com/docs/guide.html#query-helpers). The instance and static methods are similar, but with the obvious difference that an instance method is associated with a particular record and has access to the current object. Query helpers allow you to extend mongoose's [chainable query builder API](http://mongoosejs.com/docs/queries.html) (for example, allowing you to add a query "byName" in addition to the `find()`, `findOne()` and `findById()` methods).

### Usando modelos

Once you've created a schema you can use it to create models. The model represents a collection of documents in the database that you can search, while the model's instances represent individual documents that you can save and retrieve.

We provide a brief overview below. For more information see: [Models](http://mongoosejs.com/docs/models.html) (Mongoose docs).

#### Criando e modificando documentos

To create a record you can define an instance of the model and then call `save()`. The examples below assume SomeModel is a model (with a single field "name") that we have created from our schema.

```js
// Create an instance of model SomeModel
var awesome_instance = new SomeModel({ name: "awesome" });

// Save the new model instance, passing a callback
awesome_instance.save(function (err) {
  if (err) return handleError(err);
  // saved!
});
```

Creation of records (along with updates, deletes, and queries) are asynchronous operations — you supply a callback that is called when the operation completes. The API uses the error-first argument convention, so the first argument for the callback will always be an error value (or null). If the API returns some result, this will be provided as the second argument.

You can also use `create()` to define the model instance at the same time as you save it. The callback will return an error for the first argument and the newly-created model instance for the second argument.

```js
SomeModel.create({ name: "also_awesome" }, function (err, awesome_instance) {
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
awesome_instance.name = "New cool name";
awesome_instance.save(function (err) {
  if (err) return handleError(err); // saved!
});
```

#### Pesquisando por registros

You can search for records using query methods, specifying the query conditions as a JSON document. The code fragment below shows how you might find all athletes in a database that play tennis, returning just the fields for athlete _name_ and _age_. Here we just specify one matching field (sport) but you can add more criteria, specify regular expression criteria, or remove the conditions altogether to return all athletes.

```js
var Athlete = mongoose.model("Athlete", yourSchema);

// find all athletes who play tennis, selecting the 'name' and 'age' fields
Athlete.find({ sport: "Tennis" }, "name age", function (err, athletes) {
  if (err) return handleError(err);
  // 'athletes' contains the list of athletes that match the criteria.
});
```

If you specify a callback, as shown above, the query will execute immediately. The callback will be invoked when the search completes.

> **Nota:** All callbacks in Mongoose use the pattern `callback(error, result)`. If an error occurs executing the query, the `error` parameter will contain an error document and `result` will be null. If the query is successful, the `error` parameter will be null, and the `result` will be populated with the results of the query.

> **Nota:** It is important to remember that not finding any results is **not an error** for a search —but it may be a fail-case in the context of your application. If your application expects a search to find a value you can either check the result in the callback (`results==null`) or daisy chain the method [orFail()](https://mongoosejs.com/docs/api.html#query_Query-orFail) on the query.

If you don't specify a callback then the API will return a variable of type [Query](http://mongoosejs.com/docs/api.html#query-js). You can use this query object to build up your query and then execute it (with a callback) later using the `exec()` method.

```js
// find all athletes that play tennis
var query = Athlete.find({ sport: "Tennis" });

// selecting the 'name' and 'age' fields
query.select("name age");

// limit our results to 5 items
query.limit(5);

// sort by age
query.sort({ age: -1 });

// execute the query at a later time
query.exec(function (err, athletes) {
  if (err) return handleError(err);
  // athletes contains an ordered list of 5 athletes who play Tennis
});
```

Above we've defined the query conditions in the `find()` method. We can also do this using a `where()` function, and we can chain all the parts of our query together using the dot operator (.) rather than adding them separately. The code fragment below is the same as our query above, with an additional condition for the age.

```js
Athlete.find()
  .where("sport")
  .equals("Tennis")
  .where("age")
  .gt(17)
  .lt(50) //Additional where query
  .limit(5)
  .sort({ age: -1 })
  .select("name age")
  .exec(callback); // where callback is the name of our callback function.
```

The [find()](http://mongoosejs.com/docs/api.html#query_Query-find) method gets all matching records, but often you just want to get one match. The following methods query for a single record:

- [`findById()`](http://mongoosejs.com/docs/api.html#model_Model.findById): Finds the document with the specified `id` (every document has a unique `id`).
- [`findOne()`](http://mongoosejs.com/docs/api.html#query_Query-findOne): Finds a single document that matches the specified criteria.
- [`findByIdAndRemove()`](http://mongoosejs.com/docs/api.html#model_Model.findByIdAndRemove), [`findByIdAndUpdate()`](http://mongoosejs.com/docs/api.html#model_Model.findByIdAndUpdate), [`findOneAndRemove()`](http://mongoosejs.com/docs/api.html#query_Query-findOneAndRemove), [`findOneAndUpdate()`](http://mongoosejs.com/docs/api.html#query_Query-findOneAndUpdate): Finds a single document by `id` or criteria and either update or remove it. These are useful convenience functions for updating and removing records.

> **Nota:** There is also a [`count()`](http://mongoosejs.com/docs/api.html#model_Model.count) method that you can use to get the number of items that match conditions. This is useful if you want to perform a count without actually fetching the records.

There is a lot more you can do with queries. For more information see: [Queries](http://mongoosejs.com/docs/queries.html) (Mongoose docs).

#### Working with related documents — population

You can create references from one document/model instance to another using the `ObjectId` schema field, or from one document to many using an array of `ObjectIds`. The field stores the id of the related model. If you need the actual content of the associated document, you can use the [`populate()`](http://mongoosejs.com/docs/api.html#query_Query-populate) method in a query to replace the id with the actual data.

For example, the following schema defines authors and stories. Each author can have multiple stories, which we represent as an array of `ObjectId`. Each story can have a single author. The "ref" (highlighted in bold below) tells the schema which model can be assigned to this field.

```js
var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var authorSchema = Schema({
  name: String,
  stories: [{ type: Schema.Types.ObjectId, ref: "Story" }],
});

var storySchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: "Author" },
  title: String,
});

var Story = mongoose.model("Story", storySchema);
var Author = mongoose.model("Author", authorSchema);
```

We can save our references to the related document by assigning the `_id` value. Below we create an author, then a story, and assign the author id to our stories author field.

```js
var bob = new Author({ name: "Bob Smith" });

bob.save(function (err) {
  if (err) return handleError(err);

  //Bob now exists, so lets create a story
  var story = new Story({
    title: "Bob goes sledding",
    author: bob._id, // assign the _id from the our author Bob. This ID is created by default!
  });

  story.save(function (err) {
    if (err) return handleError(err);
    // Bob now has his story
  });
});
```

Our story document now has an author referenced by the author document's ID. In order to get the author information in the story results we use `populate()`, as shown below.

```js
Story.findOne({ title: "Bob goes sledding" })
  .populate("author") //This populates the author id with actual author information!
  .exec(function (err, story) {
    if (err) return handleError(err);
    console.log("The author is %s", story.author.name);
    // prints "The author is Bob Smith"
  });
```

> **Nota:** Astute readers will have noted that we added an author to our story, but we didn't do anything to add our story to our author's `stories` array. How then can we get all stories by a particular author? One way would be to add our author to the stories array, but this would result in us having two places where the information relating authors and stories needs to be maintained.
>
> A better way is to get the `_id` of our _author_, then use `find()` to search for this in the author field across all stories.
>
> ```js
> Story.find({ author: bob._id }).exec(function (err, stories) {
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
var mongoose = require("mongoose");

//Define a schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
  a_string: String,
  a_date: Date,
});

//Export function to create "SomeModel" model class
module.exports = mongoose.model("SomeModel", SomeModelSchema);
```

You can then require and use the model immediately in other files. Below we show how you might use it to get all instances of the model.

```js
//Create a SomeModel model just by requiring the module
var SomeModel = require("../models/somemodel");

// Use the SomeModel object (model) to find all SomeModel records
SomeModel.find(callback_function);
```

## Configurando o banco de dados MongoDB

Now that we understand something of what Mongoose can do and how we want to design our models, it's time to start work on the _LocalLibrary_ website. The very first thing we want to do is set up a MongoDb database that we can use to store our library data.

For this tutorial, we're going to use the [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) free cloud-hosted [sandbox](https://www.mongodb.com/cloud/atlas/pricing) database. This database tier is not considered suitable for production websites because it has no redundancy, but it is great for development and prototyping. We're using it here because it is free and easy to set up, and because MongoDB Atlas is a popular _database as a service_ vendor that you might reasonably choose for your production database (other popular choices at the time of writing include [Compose](https://www.compose.com/), [ScaleGrid](https://scalegrid.io/pricing.html) and [ObjectRocket](https://www.mongodb.com/cloud/atlas)).

> **Nota:** If you prefer you can set up a MongoDb database locally by downloading and installing the [appropriate binaries for your system](https://www.mongodb.com/download-center/community). The rest of the instructions in this article would be similar, except for the database URL you would specify when connecting.

You will first need to [create an account](https://www.mongodb.com/cloud/atlas/register) with MongoDB Atlas (this is free, and just requires that you enter basic contact details and acknowledge their terms of service).

After logging in, you'll be taken to the [home](https://cloud.mongodb.com/v2) screen:

1. Click **Buid a Cluster** button in the Clusters Overview section.
   ![Create a cluster on MongoDB Atlas.](mongodb_atlas_-_createcluster.jpg)
2. This will open the _Create New Cluster_ screen.
   ![Choose a cloud provider when using MongoDB Atlas.](mongodb_atlas_-_chooseproviderregion.jpg)

   - Select any provider from the _Cloud Provider & Region_ section. Different providers offer different regions.
   - Select any region marked "FREE TIER AVAILABLE".
   - Click the **Create Cluster** button (creation of the cluster will take some minutes).

3. You will return to the _Cluster Overview_ screen.
   ![Setup a collection on MongoDB Atlas.](mongodb_atlas_-_createcollection.jpg)

   - Click the **Collections** button.

4. This will open the _Collections_ section.
   ![Create a database on MongoDB Atlas.](mongodb_atlas_-_createdatabase.jpg)

   - Click the **Create Database** button.

5. This will open the _Create Database_ screen.
   ![Details during database creation on MongoDB Atlas.](mongodb_atlas_-_databasedetails.jpg)

   - Enter the name for the new database as `local_library`.
   - Enter the name of the collection as Collection0.
   - Click the **Create** button to create the database.

6. You will return to the Collection screen with your database created.
   ![Database creation confirmation on MongoDB Atlas.](mongodb_atlas_-_databasecreated.jpg)

   - Click the _Overview_ tab to return the cluster overview.

7. From the Cluster0 Overview screen click the **Connect** button.
   ![Configure a connection when after setting up a cluster in MongoDB Atlas.](mongodb_atlas_-_connectbutton.jpg)
8. This will open the Connect to Cluster screen.
   ![Setup a connection when using MongoDB Atlas.](mongodb_atlas_-_connectcluster.jpg)

   - Click the **Add a Different IP Address** button, enter `0.0.0.0/0` for the IP Address and click **Add IP Address** button.

     > **Nota:** It is a best practice to limit the IP addresses that can connect to your database and other resources. Here we allow a connection from anywhere because we don't know where the request will come from after deployment.

   - Enter a username and password and click **Create MongoDB User** button.

     > **Nota:** Avoid using special characters in your MongoDB user password as mongoose may not parse the connection string properly.

   - If you have completed the 2 previous steps, the button **Choose a connection method** will turn green.
   - Click the **Choose a connection method** button.

9. This will access the _Choose a connection_ method tab.
   ![Choose a connection type when connecting with MongoDB Atlas.](mongodb_atlas_-_chooseaconnectionmethod.jpg)

   - Click the **Connect Your Application** option.

10. This will open the _Connect_ screen.
    ![Choose the Short SRV connection when settinup a connection on MongoDB Atalas.](mongodb_atlas_-_connectforshortsrv.jpg)

    - Click the **Short SRV connection string** option to copy the connection string.

11. This will open the connection string URL.
    ![Copy the Short SRV connection string when setting up a connection on MongoDB Atlas](mongodb_atlas_-_copyshortsrv.jpg)

    - Choose **Copy** button to copy the string.
    - Save this string somewhere safe.
    - Update the password with your users password.
    - Replace test with `local_library`.

You have now created the database, and have an URL (with username and password) that can be used to access it. This will look something like: `mongodb+srv://your_user_name:your_password@cluster0-mbdj7.mongodb.net/local_library?retryWrites=true`

## Instalando Mongoose

Open a command prompt and navigate to the directory where you created your [skeleton Local Library website](/pt-BR/docs/Learn/Server-side/Express_Nodejs/skeleton_website). Enter the following command to install Mongoose (and its dependencies) and add it to your **package.json** file, unless you have already done so when reading the [Mongoose Primer](#Installing_Mongoose_and_MongoDB) above.

```bash
npm install mongoose
```

## Conectando ao MongoDB

Open **/app.js** (in the root of your project) and copy the following text below where you declare the _Express application object_ (after the line `var app = express();`). Replace the database url string ('_insert_your_database_url_here_') with the location URL representing your own database (i.e. using the information from _mongoDB Atlas_).

```js
//Set up mongoose connection
var mongoose = require("mongoose");
var mongoDB = "insert_your_database_url_here";
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
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
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var AuthorSchema = new Schema({
  first_name: { type: String, required: true, max: 100 },
  family_name: { type: String, required: true, max: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});

// Virtual for author's full name
AuthorSchema.virtual("name").get(function () {
  return this.family_name + ", " + this.first_name;
});

// Virtual for author's lifespan
AuthorSchema.virtual("lifespan").get(function () {
  return (
    this.date_of_death.getYear() - this.date_of_birth.getYear()
  ).toString();
});

// Virtual for author's URL
AuthorSchema.virtual("url").get(function () {
  return "/catalog/author/" + this._id;
});

//Export model
module.exports = mongoose.model("Author", AuthorSchema);
```

We've also declared a [virtual](#Virtual_properties) for the AuthorSchema named "url" that returns the absolute URL required to get a particular instance of the model — we'll use the property in our templates whenever we need to get a link to a particular author.

> **Nota:** Declaring our URLs as a virtual in the schema is a good idea because then the URL for an item only ever needs to be changed in one place.
> At this point, a link using this URL wouldn't work, because we haven't got any routes handling code for individual model instances. We'll set those up in a later article!

At the end of the module, we export the model.

### Book model

Copy the `Book` schema code shown below and paste it into your **./models/book.js** file. Most of this is similar to the author model — we've declared a schema with a number of string fields and a virtual for getting the URL of specific book records, and we've exported the model.

```js
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var BookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
  summary: { type: String, required: true },
  isbn: { type: String, required: true },
  genre: [{ type: Schema.Types.ObjectId, ref: "Genre" }],
});

// Virtual for book's URL
BookSchema.virtual("url").get(function () {
  return "/catalog/book/" + this._id;
});

//Export model
module.exports = mongoose.model("Book", BookSchema);
```

The main difference here is that we've created two references to other models:

- author is a reference to a single `Author` model object, and is required.
- genre is a reference to an array of `Genre` model objects. We haven't declared this object yet!

### BookInstance model

Finally, copy the `BookInstance` schema code shown below and paste it into your **./models/bookinstance.js** file. The `BookInstance` represents a specific copy of a book that someone might borrow and includes information about whether the copy is available or on what date it is expected back, "imprint" or version details.

```js
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var BookInstanceSchema = new Schema({
  book: { type: Schema.Types.ObjectId, ref: "Book", required: true }, //reference to the associated book
  imprint: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ["Available", "Maintenance", "Loaned", "Reserved"],
    default: "Maintenance",
  },
  due_back: { type: Date, default: Date.now },
});

// Virtual for bookinstance's URL
BookInstanceSchema.virtual("url").get(function () {
  return "/catalog/bookinstance/" + this._id;
});

//Export model
module.exports = mongoose.model("BookInstance", BookInstanceSchema);
```

The new things we show here are the field options:

- `enum`: This allows us to set the allowed values of a string. In this case, we use it to specify the availability status of our books (using an enum means that we can prevent mis-spellings and arbitrary values for our status)
- `default`: We use default to set the default status for newly created bookinstances to maintenance and the default `due_back` date to `now` (note how you can call the Date function when setting the date!)

Everything else should be familiar from our previous schema.

### Genre model - challenge!

Open your **./models/genre.js** file and create a schema for storing genres (the category of book, e.g. whether it is fiction or non-fiction, romance or military history, etc).

The definition will be very similar to the other models:

- The model should have a `String` SchemaType called `name` to describe the genre.
- This name should be required and have between 3 and 100 characters.
- Declare a [virtual](#Virtual_properties) for the genre's URL, named `url`.
- Export the model.

## Testando — criando alguns itens

That's it. We now have all models for the site set up!

In order to test the models (and to create some example books and other items that we can use in our next articles) we'll now run an _independent_ script to create items of each type:

1. Download (or otherwise create) the file [populatedb.js](https://raw.githubusercontent.com/hamishwillee/express-locallibrary-tutorial/master/populatedb.js) inside your _express-locallibrary-tutorial_ directory (in the same level as `package.json`).

   > **Nota:** You don't need to know how [populatedb.js](https://raw.githubusercontent.com/hamishwillee/express-locallibrary-tutorial/master/populatedb.js) works; it just adds sample data into the database.

2. Enter the following commands in the project root to install the _async_ module that is required by the script (we'll discuss this in later tutorials, )

   ```bash
   npm install async
   ```

3. Run the script using node in your command prompt, passing in the URL of your _MongoDB_ database (the same one you replaced the _insert_your_database_url_here_ placeholder with, inside `app.js` earlier):

   ```bash
   node populatedb <your mongodb url>
   ```

   > **Nota:** **Note for Windows operating system users**: If the above command results in the error `DeprecationWarning: current URL string parser is deprecated`, change the `mongoose.connect(mongoDB);` line in `populatedb.js` file with `mongoose.connect(mongoDB, { useNewUrlParser:true });`

4. The script should run through to completion, displaying items as it creates them in the terminal.

> **Nota:** **Tip:** Go to your database on mongoDB Atlas (in the _Collections_ tab). You should now be able to drill down into individual collections of Books, Authors, Genres and BookInstances, and check out individual documents.

## Resumo

In this article, we've learned a bit about databases and ORMs on Node/Express, and a lot about how Mongoose schema and models are defined. We then used this information to design and implement `Book`, `BookInstance`, `Author` and `Genre` models for the _LocalLibrary_ website.

Last of all we tested our models by creating a number of instances (using a standalone script). In the next article we'll look at creating some pages to display these objects.

## Veja também

- [Database integration](https://expressjs.com/en/guide/database-integration.html) (Express docs)
- [Mongoose website](http://mongoosejs.com/) (Mongoose docs)
- [Mongoose Guide](http://mongoosejs.com/docs/guide.html) (Mongoose docs)
- [Validation](http://mongoosejs.com/docs/validation.html) (Mongoose docs)
- [Schema Types](http://mongoosejs.com/docs/schematypes.html) (Mongoose docs)
- [Models](http://mongoosejs.com/docs/models.html) (Mongoose docs)
- [Queries](http://mongoosejs.com/docs/queries.html) (Mongoose docs)
- [Population](http://mongoosejs.com/docs/populate.html) (Mongoose docs)

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/skeleton_website", "Learn/Server-side/Express_Nodejs/routes", "Learn/Server-side/Express_Nodejs")}}

---
title: 'Tutorial Express Parte 3: Usando um banco de dados (com Mongoose)'
slug: Learn/Server-side/Express_Nodejs/mongoose
translation_of: Learn/Server-side/Express_Nodejs/mongoose
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/skeleton_website", "Learn/Server-side/Express_Nodejs/routes", "Learn/Server-side/Express_Nodejs")}}</div>

<p class="summary">Este artigo introduz brevemente bancos de dados e como usá-los com aplicativos Node/Express. Depois demonstra como podemos usar o <a href="http://mongoosejs.com/">Mongoose</a> para prover acesso ao banco de dados para o website <a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website">LocalLibrary</a>. Explica como object schema e modelos são declarados, os principais tipos de campos e validações básicas. Também demonstra brevemente algumas das muitas maneiras em que se pode acessar os dados do modelo.</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">Pré-requisitos:</th>
   <td><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website">Tutorial Express Parte 2: Criando o esqueleto de um website</a></td>
  </tr>
  <tr>
   <th scope="row">Objetivo:</th>
   <td>Ser capaz de projetar e criar seus próprios modelos usando Mongoose.</td>
  </tr>
 </tbody>
</table>

<h2 id="Visão_geral">Visão geral</h2>

<p>A equipe da biblioteca usará o site da Biblioteca Local para gardar informações sobre livros e empréstimos, enquanto os membros da biblioteca irão utilizá-lo para navegar e pesquisar por livros, descobrir se há alguma cópia disponível, e então reservar ou emprestar eles. Para armazenar e obter informações eficientemente, nós guardaremos elas em um <em>banco de dados</em>.</p>

<p>Aplicativos <em>Express</em> podem usar muitos bancos de dados diferentes, e existem várias abordagens que você pode usar para fazer operações de Criar, Ler, Atualizar e Apagar (CRUD, na sigla em inglês). Esse tutorial provê uma curta visão geral de algumas das opções disponíveis e então irá mostrar em detalhes os mecanismos particulares selecionados.</p>

<h3 id="Quais_bancos_de_dados_eu_posso_usar">Quais bancos de dados eu posso usar?</h3>

<p>Aplicativos <em>Express</em> podem usar qualquer banco de dados suportado pelo <em>Node </em>(O <em>Express</em> por si só não define nenhum requerimento ou comportamento adicional específico para gerenciamento de bancos de dados). Há <a href="https://expressjs.com/en/guide/database-integration.html">muitas<em> </em>opções populares</a>, incluindo PostgreSQL, MySQL, Redis, SQLite, and MongoDB.</p>

<p>Quando escolher um banco de dados, você deveria considerar coisas como o tempo-para-produtividade/curva de aprendizado, performance, facilidade de replicação/backup, custo, suporte da comunidade, etc. Enquanto não existe o "melhor" banco de dados, praticamente qualquer uma das soluções populares devem ser mais do que aceitáveis para um site de tamanho pequeno a médio como o da nossa Biblioteca Local.</p>

<p>Para mais informações sobre as opções veja <a href="https://expressjs.com/en/guide/database-integration.html">Integração com o Banco de dados</a> (documentação do Express).</p>

<h3 id="Qual_o_melhor_jeito_de_interagir_com_um_banco_de_dados">Qual o melhor jeito de interagir com um banco de dados?</h3>

<p>There are two approaches for interacting with a database: </p>

<ul>
 <li>Using the databases' native query language (e.g. SQL)</li>
 <li>Using an Object Data Model ("ODM") / Object Relational Model ("ORM"). An ODM/ORM represents the website's data as JavaScript objects, which are then mapped to the underlying database. Some ORMs are tied to a specific database, while others provide a database-agnostic backend.</li>
</ul>

<p>The very best <em>performance</em> can be gained by using SQL, or whatever query language is supported by the database. ODM's are often slower because they use translation code to map between objects and the database format, which may not use the most efficient database queries (this is particularly true if the ODM supports different database backends, and must make greater compromises in terms of what database features are supported).</p>

<p>The benefit of using an ORM is that programmers can continue to think in terms of JavaScript objects rather than database semantics — this is particularly true if you need to work with different databases (on either the same or different websites). They also provide an obvious place to perform validation and checking of data.</p>

<div class="note">
<p><strong>Tip:</strong>  Using ODM/ORMs often results in lower costs for development and maintenance! Unless you're very familiar with the native query language or performance is paramount, you should strongly consider using an ODM.</p>
</div>

<h3 id="Qual_ORMODM_eu_devo_usar">Qual ORM/ODM eu devo usar?</h3>

<p>There are many ODM/ORM solutions available on the NPM package manager site (check out the <a href="https://www.npmjs.com/browse/keyword/odm">odm</a> and <a href="https://www.npmjs.com/browse/keyword/orm">orm</a> tags for a subset!).</p>

<p>A few solutions that were popular at the time of writing are:</p>

<ul>
 <li><a href="https://www.npmjs.com/package/mongoose">Mongoose</a>: Mongoose is a <a href="https://www.mongodb.org/">MongoDB</a> object modeling tool designed to work in an asynchronous environment.</li>
 <li><a href="https://www.npmjs.com/package/waterline">Waterline</a>: An ORM extracted from the Express-based <a href="http://sailsjs.com/">Sails</a> web framework. It provides a uniform API for accessing numerous different databases, including Redis, MySQL, LDAP, MongoDB, and Postgres.</li>
 <li><a href="https://www.npmjs.com/package/bookshelf">Bookshelf</a>: Features both promise-based and traditional callback interfaces, providing transaction support, eager/nested-eager relation loading, polymorphic associations, and support for one-to-one, one-to-many, and many-to-many relations. Works with PostgreSQL, MySQL, and SQLite3.</li>
 <li><a href="https://www.npmjs.com/package/objection">Objection</a>: Makes it as easy as possible to use the full power of SQL and the underlying database engine (supports SQLite3, Postgres, and MySQL).</li>
 <li><a href="https://www.npmjs.com/package/sequelize">Sequelize</a> is a promise-based ORM for Node.js and io.js. It supports the dialects PostgreSQL, MySQL, MariaDB, SQLite, and MSSQL and features solid transaction support, relations, read replication and more.</li>
 <li><a href="https://node-orm.readthedocs.io/en/latest/">Node ORM2</a> is an Object Relationship Manager for NodeJS. It supports MySQL, SQLite, and Progress, helping to work with the database using an object-oriented approach.</li>
 <li>
  <p><a href="http://1602.github.io/jugglingdb/" rel="nofollow">JugglingDB</a> is cross-DB ORM for NodeJS, providing a common interface to access most popular database formats. Currently supporting MySQL, SQLite3, Postgres, MongoDB, Redis and js-memory-storage (self-written engine for test-usage only).</p>
 </li>
</ul>

<p>As a general rule, you should consider both the features provided and the "community activity" (downloads, contributions, bug reports, quality of documentation, etc.) when selecting a solution. At the time of writing Mongoose is by far the most popular ODM, and is a reasonable choice if you're using MongoDB for your database.</p>

<h3 id="Usando_Mongoose_e_MongoDb_para_a_LocalLibrary">Usando Mongoose e MongoDb para a LocalLibrary</h3>

<p>Para o exemplo da <em>Local Library</em> (e para o resto do tópico) nós iremos usar o  <a href="https://www.npmjs.com/package/mongoose">Mongoose ODM</a> para acessar os dados da nossa aplicação. Mongoose funciona como uma interface para o <a href="https://www.mongodb.com/what-is-mongodb">MongoDB</a>, um banco de dados de código aberto e <a href="https://en.wikipedia.org/wiki/NoSQL">NoSQL</a> que usa um modelo de dados orientado a documentos. Uma “coleção” de “documentos”, em uma base de dados do MongoDB, <a href="https://docs.mongodb.com/manual/core/databases-and-collections/#collections">é semelhante</a> a uma “tabela” com “linhas” em uma base dados relacional.</p>

<p>Esse ODM (Object Data Model) e banco de dados combinados são extremamente populares na comunidade do Node, particularmente porque os documentos armazenados e os métodos de consultas se parecem muito com JSON, que consequentemente são muito familiares aos desenvolvedores JavaScript.</p>

<div class="note">
<p><strong>Dica:</strong> Você não precisa conhecer o MongoDB antes de usar o Mongoose, apesar de que partes da <a href="http://mongoosejs.com/docs/guide.html">documentação do Mongoose</a> <em>são mais fáceis</em> de entender se você já está familiarizado com o MongoDB.</p>
</div>

<p>O resto desse tutorial mostra como definir e acessar os modelos e schemas no Mongoose para o nosso website da <a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website">LocalLibrary</a>.</p>

<h2 id="Projetando_os_modelos_da_aplicação_LocalLibrary">Projetando os modelos da aplicação LocalLibrary</h2>



<p>Antes de pularmos de cabeça na codificação dos modelos, vale a pena pensar uns minutinhos sobre quais dados precisamos armazenar e o relacionamento entre diferentes objetos.</p>

<p>Nós sabemos que precisamos armazenar informações sobre livros(título, resumo, autor, gênero, ISBN) e que nós podemos ter múltiplas cópias disponíveis (com ids globlamente únicos, status de disponibilidade, etc.). Nós também podemos armazenar mais informações sobre o autor do que apenas seu nome, e podem haver múltiplos autores com o mesmo nome ou um bem parecido. Nós queremos também ser capazes de ordernar informações baseadas no título do livro, autor, gênero e categoria.</p>

<p>Ao estruturar seus modelos é sempre bom separar modelos para cada "objeto"(um grupo de informações relacionadas). Neste caso, os nossos objetos mais evidentes são os de livros (books), pedidos de livros (book instances), e autores (authors).</p>

<p>Você pode usar também modelos para representar opções de listagens(por exemplo um menu drop-down com escolhas para o usuário), ao invés de implementar as escolhas diretamente em linhas de códigos dentro do seu website — isso é recomendado quando as escolhas não são conhecidas durante o desenvolvimento ou quando elas podem mudar. O candidato mais evidente para um modelo desse tipo é o de gênero (genre) de livros (por exemplo Ficção Ciêntífica, Poesia Clássica, etc.).</p>

<p>Uma vez que nós decidimos nossos modelos e os seus atributos, nós precisamos pensar sobre o relacionamento entre eles.</p>

<p>Com isso em mente, o diagrama UML a seguir mostra os modelos (as caixas) que iremos definir na nossa aplicação. Como discutido acima, criamos modelos para os livros ( com informações genéricas sobre o livro), pedidos de livros(status de cópias físicas de um livro específico disponíveis no sistema), e autor. E também decidimos ter um modelo para o gênero então esses valores poderão ser criados dinamicamente na aplicação. Outra decisão foi de não criarmos um modelo para  <code>BookInstance:status </code> — nós deixaremos diretamente no código os valores aceitáveis  para o status de pedidos porque nós não esperamos que eles mudem. Dentro de cada caixa, você pode ver o nome do modelo, o nome dos atributos e seus tipos, e também os métodos e seu tipo de retorno.</p>

<p>O diagrama também mostra o relacionamento entre modelos, incluindo sua cardinalidade. A cardinalidade são os números no diagrama próximos das linhas que conectam as caixas mostrando os números (máximo e mínimo) de cada modelo que pode estar presente no relacionamento. Por exemplo, as linhas que conectam as caixas <code>Book</code>e <code>Genre</code> mostram que as duas coleções têm uma relação. Os números próximos ao modelo <code>Book</code> mostra que Genre pode ter zero ou mais Book (quantos você quiser), enquanto no outro fim da linha de conexão próximo a <code>Genre </code> mostra que ele pode ter zero ou mais livros associados.</p>

<div class="note">
<p><strong>Nota</strong>: Assim como discutido abaixo em <a href="#related_documents">Iniciando com Mongoose </a> muitas vezes é melhor ter o atributo que define a relação entre os documentos/modelos em apenas um dos modelos( você ainda pode encontrar o relacionamento reverso pesquisando o <code>_id</code> associado no outro modelo). Abaixo nós escolhemos definir o modelo Book Schema para armazenar o relacionamento entre Book/Genre e Book/Author, e definimos  BookInstance Schema para armazenar o relacionamento entre Book/BookInstance. Esta escolha foi um tanto arbitrária — nós poderíamos igualmente ter declarado esses atributos em outro schema.</p>
</div>

<p><img alt="Mongoose Library Model  with correct cardinality" src="https://mdn.mozillademos.org/files/15645/Library%20Website%20-%20Mongoose_Express.png" style="height: 620px; width: 737px;"></p>

<div class="note">
<p><strong>Nota</strong>: A próxima seção fornece um guia explicando como os modelos são definidos e usados. Ao ler, considere como iremos construir cada um dos modelos no diagrama acima.</p>
</div>

<h2 id="Iniciando_com_Mongoose">Iniciando com Mongoose</h2>

<p>Esta seção fornece uma visão geral de como conectar o Mongoose a um banco de dados do MongoDB, como definir um schema e um modelo, e como fazer consultas básicas.</p>

<div class="note">
<p><strong>Nota:</strong> Esse guia é "bastante influenciado" pelo conteúdo encontrado no <a href="https://www.npmjs.com/package/mongoose">Mongoose quick start</a> do <em>npm</em> e pela <a href="http://mongoosejs.com/docs/guide.html">documentação oficial</a>.</p>
</div>

<h3 id="Instalando_Mongoose_e_MongoDB">Instalando Mongoose e MongoDB</h3>

<p>O Mongoose é instalado no seu projeto (<strong>package.json</strong>) assim como outra dependência qualquer — usando NPM. Para instalá-lo, use a seguinte linha de comando dentro da pasta do seu projeto:</p>

<pre class="brush: bash">npm install mongoose
</pre>

<p>Installing <em>Mongoose</em> adds all its dependencies, including the MongoDB database driver, but it does not install MongoDB itself. If you want to install a MongoDB server then you can <a href="https://www.mongodb.com/download-center">download installers from here</a> for various operating systems and install it locally. You can also use cloud-based MongoDB instances.</p>

<div class="note">
<p><strong>Note:</strong> For this tutorial, we'll be using the MongoDB Atlas cloud-based <em>database as a service</em> <a href="https://www.mongodb.com/cloud/atlas/pricing">free tier</a> to provide the database. This is suitable for development and makes sense for the tutorial because it makes "installation" operating system independent (database-as-a-service is also one approach you might well use for your production database).</p>
</div>

<h3 id="Conectando_ao_MongoDB">Conectando ao MongoDB</h3>

<p><em>Mongoose</em> requires a connection to a MongoDB database. You can <code>require()</code> and connect to a locally hosted database with <code>mongoose.connect()</code>, as shown below.</p>

<pre class="brush: js">//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));</pre>

<p>You can get the default <code>Connection</code> object with <code>mongoose.connection</code>. Once connected, the open event is fired on the <code>Connection</code> instance.</p>

<div class="note">
<p><strong>Tip:</strong> If you need to create additional connections you can use <code>mongoose.createConnection()</code>. This takes the same form of database URI (with host, database, port, options etc.) as <code>connect()</code> and returns a <code>Connection</code> object).</p>
</div>

<h3 id="Definindo_e_criando_modelos">Definindo e criando modelos</h3>

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

<p>In the case above we just have two fields, a string and a date. In the next sections, we will show some of the other field types, validation, and other methods.</p>

<h4 id="Criando_um_modelo">Criando um modelo</h4>

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
<p><strong>Note:</strong> Once you've defined your model classes you can use them to create, update, or delete records, and run queries to get all records or particular subsets of records. We'll show you how to do this in the <a href="#Using_models">Using models</a> section, and when we create our views.</p>
</div>

<h4 id="Schema_types_fields">Schema types (fields)</h4>

<p>A schema can have an arbitrary number of fields — each one represents a field in the documents stored in <em>MongoDB</em>. An example schema showing many of the common field types and how they are declared is shown below.</p>

<pre class="brush: js">var schema = new Schema(
{
  name: <strong>String</strong>,
  binary: <strong>Buffer</strong>,
  living: <strong>Boolean</strong>,
  updated: { type: <strong>Date</strong>, default: Date.now() },
  age: { type: <strong>Number</strong>, min: 18, max: 65, required: true },
  mixed: <strong>Schema.Types.Mixed</strong>,
  _someId: <strong>Schema.Types.ObjectId</strong>,
  array: <strong>[]</strong>,
  ofString: [<strong>String</strong>], // You can also have an array of each of the other types too.
  nested: { stuff: { type: <strong>String</strong>, lowercase: true, trim: true } }
})</pre>

<p>Most of the <a href="http://mongoosejs.com/docs/schematypes.html">SchemaTypes</a> (the descriptors after “type:” or after field names) are self-explanatory. The exceptions are:</p>

<ul>
 <li><code>ObjectId</code>: Represents specific instances of a model in the database. For example, a book might use this to represent its author object. This will actually contain the unique ID (<code>_id</code>) for the specified object. We can use the <code>populate()</code> method to pull in the associated information when needed.</li>
 <li><a href="http://mongoosejs.com/docs/schematypes.html#mixed">Mixed</a>: An arbitrary schema type.</li>
 <li>[]: An array of items. You can perform JavaScript array operations on these models (push, pop, unshift, etc.). The examples above show an array of objects without a specified type and an array of <code>String</code> objects, but you can have an array of any type of object.</li>
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

<h4 id="Validação">Validação</h4>

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

<pre class="brush: js">var breakfastSchema = new Schema({
  eggs: {
    type: Number,
    min: [6, 'Too few eggs'],
    max: 12,
    required: [true, 'Why no eggs?']
  },
  drink: {
    type: String,
    enum: ['Coffee', 'Tea', 'Water',]
  }
});
</pre>

<p>For complete information on field validation see <a href="http://mongoosejs.com/docs/validation.html">Validation</a> (Mongoose docs).</p>

<h4 id="Propriedades_virtuais">Propriedades virtuais</h4>

<p>Virtual properties are document properties that you can get and set but that do not get persisted to MongoDB. The getters are useful for formatting or combining fields, while setters are useful for de-composing a single value into multiple values for storage. The example in the documentation constructs (and deconstructs) a full name virtual property from a first and last name field, which is easier and cleaner than constructing a full name every time one is used in a template.</p>

<div class="note">
<p><strong>Note:</strong> We will use a virtual property in the library to define a unique URL for each model record using a path and the record's <code>_id</code> value.</p>
</div>

<p>For more information see <a href="http://mongoosejs.com/docs/guide.html#virtuals">Virtuals</a> (Mongoose documentation).</p>

<h4 id="Methods_and_query_helpers">Methods and query helpers</h4>

<p>A schema can also have <a href="http://mongoosejs.com/docs/guide.html#methods">instance methods</a>, <a href="http://mongoosejs.com/docs/guide.html#statics">static methods</a>, and <a href="http://mongoosejs.com/docs/guide.html#query-helpers">query helpers</a>. The instance and static methods are similar, but with the obvious difference that an instance method is associated with a particular record and has access to the current object. Query helpers allow you to extend mongoose's <a href="http://mongoosejs.com/docs/queries.html">chainable query builder API</a> (for example, allowing you to add a query "byName" in addition to the <code>find()</code>, <code>findOne()</code> and <code>findById()</code> methods).</p>

<h3 id="Usando_modelos">Usando modelos</h3>

<p>Once you've created a schema you can use it to create models. The model represents a collection of documents in the database that you can search, while the model's instances represent individual documents that you can save and retrieve.</p>

<p>We provide a brief overview below. For more information see: <a href="http://mongoosejs.com/docs/models.html">Models</a> (Mongoose docs).</p>

<h4 id="Criando_e_modificando_documentos">Criando e modificando documentos</h4>

<p>To create a record you can define an instance of the model and then call <code>save()</code>. The examples below assume SomeModel is a model (with a single field "name") that we have created from our schema.</p>

<pre class="brush: js">// Create an instance of model SomeModel
var awesome_instance = new SomeModel({ name: 'awesome' });

// Save the new model instance, passing a callback
awesome_instance.save(function (err) {
  if (err) return handleError(err);
  // saved!
});
</pre>

<p>Creation of records (along with updates, deletes, and queries) are asynchronous operations — you supply a callback that is called when the operation completes. The API uses the error-first argument convention, so the first argument for the callback will always be an error value (or null). If the API returns some result, this will be provided as the second argument.</p>

<p>You can also use <code>create()</code> to define the model instance at the same time as you save it. The callback will return an error for the first argument and the newly-created model instance for the second argument.</p>

<pre class="brush: js">SomeModel.create({ name: 'also_awesome' }, function (err, awesome_instance) {
  if (err) return handleError(err);
  // saved!
});</pre>

<p>Every model has an associated connection (this will be the default connection when you use <code>mongoose.model()</code>). You create a new connection and call <code>.model()</code> on it to create the documents on a different database.</p>

<p>You can access the fields in this new record using the dot syntax, and change the values. You have to call <code>save()</code> or <code>update()</code> to store modified values back to the database.</p>

<pre class="brush: js">// Access model field values using dot notation
console.log(awesome_instance.name); //should log 'also_awesome'

// Change record by modifying the fields, then calling save().
awesome_instance.name="New cool name";
awesome_instance.save(function (err) {
   if (err) return handleError(err); // saved!
});
</pre>

<h4 id="Pesquisando_por_registros">Pesquisando por registros</h4>

<p>You can search for records using query methods, specifying the query conditions as a JSON document. The code fragment below shows how you might find all athletes in a database that play tennis, returning just the fields for athlete <em>name</em> and <em>age</em>. Here we just specify one matching field (sport) but you can add more criteria, specify regular expression criteria, or remove the conditions altogether to return all athletes.</p>

<pre class="brush: js">var Athlete = mongoose.model('Athlete', yourSchema);

// find all athletes who play tennis, selecting the 'name' and 'age' fields
Athlete.find({ 'sport': 'Tennis' }, 'name age', function (err, athletes) {
  if (err) return handleError(err);
  // 'athletes' contains the list of athletes that match the criteria.
})</pre>

<p>If you specify a callback, as shown above, the query will execute immediately. The callback will be invoked when the search completes.</p>

<div class="note">
<p><strong>Note:</strong> All callbacks in Mongoose use the pattern <code>callback(error, result)</code>. If an error occurs executing the query, the <code>error</code> parameter will contain an error document and <code>result</code> will be null. If the query is successful, the <code>error</code> parameter will be null, and the <code>result</code> will be populated with the results of the query.</p>
</div>

<div class="note">
<p><strong>Note:</strong> It is important to remember that not finding any results is <strong>not an error</strong> for a search —but it may be a fail-case in the context of your application. If your application expects a search to find a value you can either check the result in the callback (<code>results==null</code>) or daisy chain the method <a href="https://mongoosejs.com/docs/api.html#query_Query-orFail">orFail()</a> on the query. </p>
</div>

<p>If you don't specify a callback then the API will return a variable of type <a href="http://mongoosejs.com/docs/api.html#query-js">Query</a>. You can use this query object to build up your query and then execute it (with a callback) later using the <code>exec()</code> method.</p>

<pre class="brush: js">// find all athletes that play tennis
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
})</pre>

<p>Above we've defined the query conditions in the <code>find()</code> method. We can also do this using a <code>where()</code> function, and we can chain all the parts of our query together using the dot operator (.) rather than adding them separately. The code fragment below is the same as our query above, with an additional condition for the age.</p>

<pre class="brush: js">Athlete.
  find().
  where('sport').equals('Tennis').
  where('age').gt(17).lt(50).  //Additional where query
  limit(5).
  sort({ age: -1 }).
  select('name age').
  exec(callback); // where callback is the name of our callback function.</pre>

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

<pre class="brush: js">var mongoose = require('mongoose')
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
var Author = mongoose.model('Author', authorSchema);</pre>

<p>We can save our references to the related document by assigning the <code>_id</code> value. Below we create an author, then a story, and assign the author id to our stories author field.</p>

<pre class="brush: js">var bob = new Author({ name: 'Bob Smith' });

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
});</pre>

<p>Our story document now has an author referenced by the author document's ID. In order to get the author information in the story results we use <code>populate()</code>, as shown below.</p>

<pre class="brush: js">Story
.findOne({ title: 'Bob goes sledding' })
.populate('author') //This populates the author id with actual author information!
.exec(function (err, story) {
  if (err) return handleError(err);
  console.log('The author is %s', story.author.name);
  // prints "The author is Bob Smith"
});</pre>

<div class="note">
<p><strong>Note:</strong> Astute readers will have noted that we added an author to our story, but we didn't do anything to add our story to our author's <code>stories</code> array. How then can we get all stories by a particular author? One way would be to add our author to the stories array, but this would result in us having two places where the information relating authors and stories needs to be maintained.</p>

<p>A better way is to get the <code>_id</code> of our <em>author</em>, then use <code>find()</code> to search for this in the author field across all stories.</p>

<pre class="brush: js">Story
.find({ author : bob._id })
.exec(function (err, stories) {
  if (err) return handleError(err);
  // returns all stories that have Bob's id as their author.
});
</pre>
</div>

<p>This is almost everything you need to know about working with related items<em> for this tutorial</em>. For more detailed information see <a href="http://mongoosejs.com/docs/populate.html">Population</a> (Mongoose docs).</p>

<h3 id="One_schemamodel_per_file">One schema/model per file</h3>

<p>While you can create schemas and models using any file structure you like, we highly recommend defining each model schema in its own module (file), exporting the method to create the model. This is shown below:</p>

<pre class="brush: js">// File: ./models/somemodel.js

//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
  a_string          : String,
  a_date            : Date,
});

<strong>//Export function to create "SomeModel" model class
module.exports = mongoose.model('SomeModel', SomeModelSchema );</strong></pre>

<p>You can then require and use the model immediately in other files. Below we show how you might use it to get all instances of the model.</p>

<pre class="brush: js">//Create a SomeModel model just by requiring the module
var SomeModel = require('../models/somemodel')

// Use the SomeModel object (model) to find all SomeModel records
SomeModel.find(callback_function);</pre>

<h2 id="Configurando_o_banco_de_dados_MongoDB">Configurando o banco de dados MongoDB</h2>

<p>Now that we understand something of what Mongoose can do and how we want to design our models, it's time to start work on the <em>LocalLibrary</em> website. The very first thing we want to do is set up a MongoDb database that we can use to store our library data.</p>

<p>For this tutorial, we're going to use the <a href="https://www.mongodb.com/cloud/atlas">MongoDB Atlas</a> free cloud-hosted <a href="https://www.mongodb.com/cloud/atlas/pricing">sandbox</a> database. This database tier is not considered suitable for production websites because it has no redundancy, but it is great for development and prototyping. We're using it here because it is free and easy to set up, and because MongoDB Atlas is a popular <em>database as a service</em> vendor that you might reasonably choose for your production database (other popular choices at the time of writing include <a href="https://www.compose.com/">Compose</a>, <a href="https://scalegrid.io/pricing.html">ScaleGrid</a> and <a href="https://www.mongodb.com/cloud/atlas">ObjectRocket</a>).</p>

<div class="note">
<p><strong>Note:</strong> If you prefer you can set up a MongoDb database locally by downloading and installing the <a href="https://www.mongodb.com/download-center/community">appropriate binaries for your system</a>. The rest of the instructions in this article would be similar, except for the database URL you would specify when connecting.</p>
</div>

<p>You will first need to <a href="https://www.mongodb.com/cloud/atlas/register">create an account</a> with MongoDB Atlas (this is free, and just requires that you enter basic contact details and acknowledge their terms of service). </p>

<p>After logging in, you'll be taken to the <a href="https://cloud.mongodb.com/v2">home</a> screen:</p>

<ol>
 <li>Click <strong>Buid a Cluster</strong> button in the Clusters Overview section.<br>
  <img alt="Create a cluster on MongoDB Atlas." src="https://mdn.mozillademos.org/files/16516/MongoDB_Atlas_-_CreateCluster.jpg" style="border-style: solid; border-width: 1px; height: 549px; width: 742px;"></li>
 <li>This will open the <em>Create New Cluster</em> screen.<br>
  <img alt="Choose a cloud provider when using MongoDB Atlas." src="https://mdn.mozillademos.org/files/16511/MongoDB_Atlas_-_ChooseProviderRegion.jpg" style="border-style: solid; border-width: 1px; height: 656px; width: 742px;">
  <ul>
   <li>Select any provider from the <em>Cloud Provider &amp; Region </em>section. Different providers offer different regions.</li>
   <li>Select any region marked "FREE TIER AVAILABLE".</li>
   <li>Click the <strong>Create Cluster</strong> button (creation of the cluster will take some minutes).</li>
  </ul>
 </li>
 <li>
  <p>You will return to the <em>Cluster Overview</em> screen.<br>
   <img alt="Setup a collection on MongoDB Atlas." src="https://mdn.mozillademos.org/files/16517/MongoDB_Atlas_-_CreateCollection.jpg" style="border-style: solid; border-width: 1px; height: 399px; width: 742px;"></p>

  <ul>
   <li>
    <p>Click the <strong>Collections</strong> button.</p>
   </li>
  </ul>
 </li>
 <li>This will open the <em>Collections</em> section.<br>
  <img alt="Create a database on MongoDB Atlas." src="https://mdn.mozillademos.org/files/16518/MongoDB_Atlas_-_CreateDatabase.jpg" style="border-style: solid; border-width: 1px; height: 412px; width: 742px;">
  <ul>
   <li>Click the <strong>Create Database</strong> button.</li>
  </ul>
 </li>
 <li>This will open the <em>Create Database</em> screen.<br>
  <img alt="Details during database creation on MongoDB Atlas." src="https://mdn.mozillademos.org/files/16520/MongoDB_Atlas_-_DatabaseDetails.jpg" style="border-style: solid; border-width: 1px; height: 441px; width: 416px;">
  <ul>
   <li>Enter the name for the new database as <code>local_library</code>.</li>
   <li>Enter the name of the collection as <font face="consolas, Liberation Mono, courier, monospace"><span style="background-color: rgba(220, 220, 220, 0.5);">Collection0</span></font>.</li>
   <li>Click the <strong>Create</strong> button to create the database.</li>
  </ul>
 </li>
 <li>You will return to the Collection screen with your database created.<br>
  <img alt="Database creation confirmation on MongoDB Atlas." src="https://mdn.mozillademos.org/files/16519/MongoDB_Atlas_-_DatabaseCreated.jpg" style="border-style: solid; border-width: 1px; height: 305px; width: 742px;">
  <ul>
   <li>Click the <em>Overview</em> tab to return the cluster overview.</li>
  </ul>
 </li>
 <li>From the Cluster0 Overview screen click the <strong>Connect</strong> button.<br>
  <img alt="Configure a connection when after setting up a cluster in MongoDB Atlas." src="https://mdn.mozillademos.org/files/16512/MongoDB_Atlas_-_Connectbutton.jpg" style="border-style: solid; border-width: 1px; height: 308px; width: 742px;"></li>
 <li>This will open the Connect to Cluster screen.<br>
  <img alt="Setup a connection when using MongoDB Atlas." src="https://mdn.mozillademos.org/files/16513/MongoDB_Atlas_-_ConnectCluster.jpg" style="border-style: solid; border-width: 1px; height: 771px; width: 690px;">
  <ul>
   <li>Click the <strong>Add a Different IP Address</strong> button, enter <code>0.0.0.0/0</code> for the IP Address and click <strong>Add IP Address</strong> button.
    <div class="blockIndicator note">
    <p><strong>Note:</strong> It is a best practice to limit the IP addresses that can connect to your database and other resources. Here we allow a connection from anywhere because we don't know where the request will come from after deployment.</p>
    </div>
   </li>
   <li>Enter a username and password and click <strong>Create MongoDB User</strong> button.
    <div class="blockIndicator note">
    <p><strong>Note:</strong> Avoid using special characters in your MongoDB user password as mongoose may not parse the connection string properly.</p>
    </div>
   </li>
   <li>If you have completed the 2 previous steps, the button <strong>Choose a connection method </strong>will turn green.</li>
   <li>Click the <strong>Choose a connection method</strong> button.</li>
  </ul>
 </li>
 <li>This will access the <em>Choose a connection</em> method tab.<br>
  <img alt="Choose a connection type when connecting with MongoDB Atlas." src="https://mdn.mozillademos.org/files/16510/MongoDB_Atlas_-_ChooseAConnectionMethod.jpg" style="border-style: solid; border-width: 1px; height: 606px; width: 691px;">
  <ul>
   <li>Click the <strong>Connect Your Application</strong> option.</li>
  </ul>
 </li>
 <li>This will open the <em>Connect</em> screen.<br>
  <img alt="Choose the Short SRV connection when settinup a connection on MongoDB Atalas." src="https://mdn.mozillademos.org/files/16514/MongoDB_Atlas_-_ConnectForShortSRV.jpg" style="border-style: solid; border-width: 1px; height: 604px; width: 693px;">
  <ul>
   <li>Click the <strong>Short SRV connection string</strong> option to copy the connection string.</li>
  </ul>
 </li>
 <li>This will open the connection string URL.<br>
  <img alt="Copy the Short SRV connection string when setting up a connection on MongoDB Atlas" src="https://mdn.mozillademos.org/files/16515/MongoDB_Atlas_-_CopyShortSRV.jpg" style="border-style: solid; border-width: 1px; height: 741px; width: 690px;">
  <ul>
   <li>Choose <strong>Copy</strong> button to copy the string.</li>
   <li>Save this string somewhere safe.</li>
   <li>Update the password with your users password.</li>
   <li>Replace test with <code>local_library</code>.</li>
  </ul>
 </li>
</ol>

<p>You have now created the database, and have an URL (with username and password) that can be used to access it. This will look something like: <code>mongodb+srv://your_user_name:your_password@cluster0-mbdj7.mongodb.net/local_library?retryWrites=true</code></p>

<h2 id="Instalando_Mongoose">Instalando Mongoose</h2>

<p>Open a command prompt and navigate to the directory where you created your <a href="/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website">skeleton Local Library website</a>. Enter the following command to install Mongoose (and its dependencies) and add it to your <strong>package.json</strong> file, unless you have already done so when reading the <a href="#Installing_Mongoose_and_MongoDB">Mongoose Primer</a> above.</p>

<pre class="brush: bash">npm install mongoose
</pre>

<h2 id="Conectando_ao_MongoDB_2">Conectando ao MongoDB</h2>

<p>Open <strong>/app.js</strong> (in the root of your project) and copy the following text below where you declare the <em>Express application object</em> (after the line <code>var app = express();</code>). Replace the database url string ('<em>insert_your_database_url_here</em>') with the location URL representing your own database (i.e. using the information from <em>mongoDB Atlas</em>).</p>

<pre class="brush: js">//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = '<em>insert_your_database_url_here</em>';
mongoose.connect(mongoDB, { useNewUrlParser: true });
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
});

// Virtual for author's lifespan
AuthorSchema
</strong>.virtual('lifespan')
.get(function () {
  return (this.date_of_death.getYear() - this.date_of_birth.getYear()).toString();
});

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
 At this point, a link using this URL wouldn't work, because we haven't got any routes handling code for individual model instances. We'll set those up in a later article!</p>
</div>

<p>At the end of the module, we export the model.</p>

<h3 id="Book_model">Book model</h3>

<p>Copy the <code>Book</code> schema code shown below and paste it into your <strong>./models/book.js</strong> file. Most of this is similar to the author model — we've declared a schema with a number of string fields and a virtual for getting the URL of specific book records, and we've exported the model.</p>

<pre class="brush: js">var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookSchema = new Schema(
  {
    title: {type: String, required: true},
  <strong>  author: {type: Schema.Types.ObjectId, ref: 'Author', required: true},</strong>
    summary: {type: String, required: true},
    isbn: {type: String, required: true},
  <strong>  genre: [{type: Schema.Types.ObjectId, ref: 'Genre'}]</strong>
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

<p>Finally, copy the <code>BookInstance</code> schema code shown below and paste it into your <strong>./models/bookinstance.js</strong> file. The <code>BookInstance</code> represents a specific copy of a book that someone might borrow and includes information about whether the copy is available or on what date it is expected back, "imprint" or version details.</p>

<pre class="brush: js">var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookInstanceSchema = new Schema(
  {
    book: { type: Schema.Types.ObjectId, ref: 'Book', required: true }, //reference to the associated book
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
 <li><code>enum</code>: This allows us to set the allowed values of a string. In this case, we use it to specify the availability status of our books (using an enum means that we can prevent mis-spellings and arbitrary values for our status)</li>
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

<h2 id="Testando_—_criando_alguns_itens">Testando — criando alguns itens</h2>

<p>That's it. We now have all models for the site set up!</p>

<p>In order to test the models (and to create some example books and other items that we can use in our next articles) we'll now run an <em>independent</em> script to create items of each type:</p>

<ol>
 <li>Download (or otherwise create) the file <a href="https://raw.githubusercontent.com/hamishwillee/express-locallibrary-tutorial/master/populatedb.js">populatedb.js</a> inside your <em>express-locallibrary-tutorial</em> directory (in the same level as <code>package.json</code>).

  <div class="note">
  <p><strong>Note:</strong> You don't need to know how <a href="https://raw.githubusercontent.com/hamishwillee/express-locallibrary-tutorial/master/populatedb.js">populatedb.js</a> works; it just adds sample data into the database.</p>
  </div>
 </li>
 <li>Enter the following commands in the project root to install the <em>async</em> module that is required by the script (we'll discuss this in later tutorials, )
  <pre class="brush: bash">npm install async</pre>
 </li>
 <li>Run the script using node in your command prompt, passing in the URL of your <em>MongoDB</em> database (the same one you replaced the <em>insert_your_database_url_here </em>placeholder with, inside <code>app.js</code> earlier):
  <pre class="brush: bash">node populatedb &lt;your mongodb url&gt;​​​​</pre>

  <div class="blockIndicator note">
  <p><strong>Note for Windows operating system users</strong>: If the above command results in the error <code>DeprecationWarning: current URL string parser is deprecated</code>, change the <code>mongoose.connect(mongoDB);</code> line in <code>populatedb.js</code> file with <code>mongoose.connect(mongoDB, { useNewUrlParser:true });</code></p>
  </div>
 </li>
 <li>The script should run through to completion, displaying items as it creates them in the terminal.</li>
</ol>

<div class="note">
<p><strong>Tip:</strong> Go to your database on mongoDB Atlas (in the <em>Collections</em> tab). You should now be able to drill down into individual collections of Books, Authors, Genres and BookInstances, and check out individual documents.</p>
</div>

<h2 id="Resumo">Resumo</h2>

<p>In this article, we've learned a bit about databases and ORMs on Node/Express, and a lot about how Mongoose schema and models are defined. We then used this information to design and implement <code>Book</code>, <code>BookInstance</code>, <code>Author</code> and <code>Genre</code> models for the <em>LocalLibrary</em> website.</p>

<p>Last of all we tested our models by creating a number of instances (using a standalone script). In the next article we'll look at creating some pages to display these objects.</p>

<h2 id="Veja_também">Veja também</h2>

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

<h2 id="Neste_módulo">Neste módulo</h2>

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

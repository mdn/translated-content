---
title: Express 教程 3：使用数据库  (Mongoose)
slug: Learn/Server-side/Express_Nodejs/mongoose
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/skeleton_website", "Learn/Server-side/Express_Nodejs/routes", "Learn/Server-side/Express_Nodejs")}}

本文简要介绍了数据库以及 Node/Express 应用的数据库集成。然后演示了 [Mongoose](http://mongoosejs.com/) 为 [LocalLibrary](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website) 提供数据库访问的方式。还讲解了对象模式（Schema）和模型（Model）的声明方式、主要域的类型、基础验证机制。同时还简短演示了访问模型数据的一些方法。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">预备知识：</th>
      <td>
        <a href="/zh-CN/docs/Learn/Server-side/Express_Nodejs/skeleton_website"
          >Express 教程 2: 创建站点骨架</a
        >，了解数据库基础知识。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>使用 Mongoose 设计建造模型。</td>
    </tr>
  </tbody>
</table>

## 概览

图书馆的员工会使用 LocalLibrary 网站来保存藏书和借阅者的信息。会员会浏览和查找所需藏书，找到后预约或借阅。为了更高效地存取信息，网站将使用数据库。

Express 应用支持多款数据库，执行新建（**C**reate）、读取（**R**ead）、更新（**U**pdate）和删除（**D**elete）操作 (CRUD) 操作也有诸多途径。本教程先做一个不完全简介，然后对教程选用的机制进行详细介绍。

### 我可以使用什么数据库？

Express 应用可以使用 Node 支持的所有数据库（Express 本身不支持数据库管理的任何具体行为/需求）。有许多 [流行的选择](https://expressjs.com/en/guide/database-integration.html)，包括 PostgreSQL、MySQL、Redis、SQLite 和 MongoDB。

选用数据库应考虑以下因素：进入生产状态用时/学习曲线、性能、复制/备份的易用度、成本、社区支持，等等。这些数据库各有千秋，但绝大多数都足以胜任 LocalLibrary 这样中小规模的网站了。

更多信息请参阅：[数据库集成](http://www.expressjs.com.cn/guide/database-integration.html)（Express 文档）。

### 与数据库交互的最佳方式是什么？

与数据库交互有两种方法：

- 使用数据库的原生查询语言（例如 SQL）
- 使用对象数据模型（Object Data Model，简称 ODM）或对象关系模型（Object Relational Model，简称 ORM）。ODM / ORM 能将网站中的数据表示为 JavaScript 对象，然后将它们映射到底层数据库。一些 ORM 只适用某些特定数据库，还有一些是普遍适用的。

使用 SQL 或其他受到支持的查询语言才能达到最佳性能。ODM 通常慢一些，因为在对象和数据库格式之间存在一层用于映射的翻译代码，使它不一定会选用最高性能的数据库查询（尤其是普遍使用级别的 ODM，它必须在各类数据库功能方面做出更大的折衷）。

使用 ORM 的好处是：程序员可以继续用 JavaScript 对象的思维而不用转向数据库语义的思维。在（同一个或不同网站）使用不同数据库时尤为明显。使用 ORM 还可以更方便地对数据进行验证和检查。

> **备注：** 使用 ODM / ORM 通常可以降低开发和维护成本！除非你非常熟悉本地查询语言，或者项目对性能要求很高，否则强烈推荐使用 ODM。

### 我应该使用哪种 ORM/ODM ?

NPM 站点上有许多 ODM / ORM 解决方案（另请参阅 NPM 站点上的 [odm](https://www.npmjs.com/browse/keyword/odm) 和 [orm](https://www.npmjs.com/browse/keyword/orm) 标签列表）。

以下是迄今（2018 年 12 月）几种流行的解决方案：

- [Mongoose](https://www.npmjs.com/package/mongoose)：一款为异步工作环境设计的 [MongoDB](https://www.mongodb.org/) 对象建模工具。
- [Waterline](https://www.npmjs.com/package/waterline)：从基于 Express 的 [Sails](http://sailsjs.com/) 框架中提取的 ORM。它提供了一套统一的 API 来访问众多不同的数据库，其中包括 Redis，mySQL，LDAP，MongoDB 和 Postgres。
- [Bookshelf](https://www.npmjs.com/package/bookshelf)：同时提供基于 promise 和传统回调两套接口，支持事务处理、渴求式/嵌套渴求式关系加载、多态关联，以及对一对一，一对多和多对多关系。支持 PostgreSQL、MySQL 和 SQLite3。
- [Objection](https://www.npmjs.com/package/objection)：以尽可能简单的方式使用 SQL 和底层数据库引擎的全部功能（支持 SQLite3、Postgres 和 MySQL）。
- [Sequelize](https://www.npmjs.com/package/sequelize)：基于 promise 的 Node.js 版 ORM，它支持 PostgreSQL、MySQL、MariaDB、SQLite 和 MSSQL，并提供可靠的事务支持、关系、复本读取等功能。
- [Node ORM2](https://node-orm.readthedocs.io/en/latest/)：一款 Node.js 对象关系管理系统。支持 MySQL、SQLite 以及 Progress，可以帮助你用面向对象的方法操作数据库。
- [JugglingDB](http://1602.github.io/jugglingdb/)：一款 Node.js 版跨数据库的 ORM。它为多数流行数据库提供了统一接口，当前支持 MySQL、SQLite3、Postgres、MongoDB、Redis 和 js-memory-storage（自写引擎，仅供测试用）。

一般来说，选择解决方案应该考虑功能和“社区活跃度”（下载量、贡献数、bug 报告、文档质量，等）。在撰写本文时，Mongoose 是最受欢迎的 ODM，选用 MongoDB 数据库时，它是一个合理的选择。

### 在 LocalLibrary 中使用 Mongoose 和 MongoDb

我们将在本地图书馆示例（以及本主题的其余部分）中使用 [Mongoose ODM](https://www.npmjs.com/package/mongoose) 来访问图书馆数据。Mongoose 作为 [MongoDB](https://www.mongodb.com/what-is-mongodb)（面向文档数据模型的开源 [NoSQL](https://en.wikipedia.org/wiki/NoSQL) 数据库）的前端。MongoDB 数据库里，“集合”中的“文档” [类似于](https://docs.mongodb.com/manual/core/databases-and-collections/#collections) 关系数据库里“表”中的“行”。

这种 ODM 和数据库的结合方式在 Node 社区中非常流行，一定程度上是因为文档存储和查询系统与 JSON 十分相似，因此 JavaScript 开发人员会非常熟悉。

> **备注：** 使用 Mongoose 无需事先了解 MongoDB，但是部分 [Mongoose 文档](http://mongoosejs.com/docs/guide.html) 对于熟悉 MongoDB 的朋友会更易于使用和理解。

下面将介绍如何为 [LocalLibrary 网站](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website) 定义和访问 Mongoose 模式和模型。

## 设计 LocalLibrary 模型

在开始投入模型编写之前，有必要先思考一下：本网站需要存储什么数据？不同对象之间的关系是怎样的？

图书馆需要存储藏书信息（书名、摘要、作者、种类、ISBN），藏书副本信息（全站唯一 ID，借出状态，等）。还可能需要存储作者姓名之外的更多信息，以及多个作者的信息。还希望数据库内容能够根据书名、作者姓名、种类和编目进行排序。

有必要为每个“对象”（一组相关信息）设计独立的模型。本示例的关键对象包括书籍、书籍副本和作者。

也许还希望使用模型而不是站点代码来表示选项表（比如下拉列表），在选项无法预知或可能更改时更推荐模型方式。很明显，藏书类型（比如科幻小说、法语诗歌，等）就是这种情况。

确定模型和字段后还要考虑它们之间的关系，以下 UML 图显示了本示例即将定义的模型（框图）。如上所述，我们为藏书（一般细节）、藏书副本（系统）和作者创建了模型。还有一个可以动态选择的书籍种类模型。对于 `BookInstance:status`，我们不会为它建立模型，而是将可能的值直接编入站点代码中，因为我们不希望这些值发生变化。下图每个框都包括模型名、字段名和类型，还有方法及其返回类型。

下图还展示了模型之间的关系以及重复度（Multiplicity）。重复度就是图中两框间连线两端的数字，表示两个模型之间存在的关系的数量（最大值和最小值）。例如，`Book` 框和 `Genre` 框之间有连线说明二者之间存在关系，`Book` 模型端的数字（0..\*）表示一个种类必包括零种或多种藏书（多少都可以），而 `Genre` 端的数字表示一种藏书可以有零个或多个种类。

> **备注：** 正如下文 [Mongoose 入门](#) 中所讲，通常应该把定义文档/模型关系的字段置于同一模型中（仍可通过在搜索相关 `_id` 来回寻模型间的关系）。以下的 Book 模式中定义了 Book/Genre 和 Book/Author 关系，BookInstance 模式中定义了 Book/BookInstance 关系。这样做是简便起见，但稍存歧义，让这些字段存在于其他模式中也是可以的。

![Mongoose Library Model with correct cardinality](library_website_-_mongoose_express.png)

> **备注：** 下面是一段入门知识，讲解如何定义和使用模型。请在阅读时想想将如何构建上图中的模型。

## Mongoose 入门

这一段将简要介绍如何将 Mongoose 连接到 MongoDB 数据库，如何定义模式和模型，以及如何进行基本查询。

> **备注：** 本入门受到 npm 上的 [Mongoose 快速入门](https://www.npmjs.com/package/mongoose) 和 [Mongoose 官方文档](http://mongoosejs.com/docs/guide.html) 的“深度影响”。

### 安装 Mongoose 和 MongoDB

Mongoose 像任何其他依赖项一样，使用 NPM 将其安装在您的项目（**package.json**）中。请在项目文件夹中运行下面的命令以完成安装：

```bash
npm install mongoose
```

安装 Mongoose 会添加所有依赖项，包括 MongoDB 数据库驱动程序，但不会安装 MongoDB 本身。要安装 MongoDB 服务器，可以 [点击下载](https://www.mongodb.com/download-center) 各操作系统的安装程序在本地安装。也可以使用云端 MongoDB 实例。

> **备注：** 本教程选用 mLab 提供的 [沙箱级](https://mlab.com/plans/pricing/) 云端“数据库即服务”（Database as a Service，DBaaS）。它适用于开发环境，且部署过程与操作系统无关（DBaaS 也适用于生产环境）。

### 连接到 MongoDB

Mongoose 需要连接到 MongoDB 数据库。可以 `require()` 之，并通过 `mongoose.connect()` 连接到本地数据库，如下。

```js
// 导入 mongoose 模块
const mongoose = require("mongoose");

// 设置默认 mongoose 连接
const mongoDB = "mongodb://127.0.0.1/my_database";
mongoose.connect(mongoDB);
// 让 mongoose 使用全局 Promise 库
mongoose.Promise = global.Promise;
// 取得默认连接
const db = mongoose.connection;

// 将连接与错误事件绑定（以获得连接错误的提示）
db.on("error", console.error.bind(console, "MongoDB 连接错误："));
```

可以用 `mongoose.connection` 取得默认的 `Connection` 对象。一旦连接，`Connection` 实例将触发打开事件。

> **备注：** 可以使用 `mongoose.createConnection()` 创建其他连接。该函数与 `connect()` 的参数（数据库 URI，包括主机地址、数据库名、端口、选项等）一致，并返回一个 `Connection` 对象。

### 定义和添加模型

模型使用 `Schema` 接口进行定义。 `Schema` 可以定义每个文档中存储的字段，及字段的验证要求和默认值。还可以通过定义静态和实例辅助方法来更轻松地处理各种类型的数据，还可以像使用普通字段一样使用数据库中并不存在的虚拟属性（稍后讨论）。

`mongoose.model()` 方法将模式“编译”为模型。模型就可以用来查找、创建、更新和删除特定类型的对象。

> **备注：** MongoDB 数据库中，每个模型都映射至一组文档。这些文档包含 `Schema` 模型定义的字段名/模式类型。

#### 定义模式

下面的代码片段中定义了一个简单的模式。首先 `require()` mongoose，然后使用 `Schema` 构造器创建一个新的模式实例，使用构造器的对象参数定义各个字段。

```js
// 获取 Mongoose
const mongoose = require("mongoose");

// 定义一个模式
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
  a_string: String,
  a_date: Date,
});
```

上面示例只有两个字段（一个字符串和一个日期），接下来将展示其他字段类型、验证和其他方法。

#### 创建模型

使用 `mongoose.model()` 方法从模式创建模型：

```js
// 定义模式
const Schema = mongoose.Schema;

const SomeModelSchema = new Schema({
  a_string: String,
  a_date: Date,
});

// 使用模式“编译”模型
const SomeModel = mongoose.model("SomeModel", SomeModelSchema);
```

第一个参数是为模型所创建集合的别名（Mongoose 将为 SomeModel 模型创建数据库集合），第二个参数是创建模型时使用的模式。

> **备注：** 定义模型类后，可以使用它们来创建、更新或删除记录，以及通过查询来获取所有记录或特定子集。我们将在以下“[使用模型](#)”部分展示，包括创建视图的情况。

#### 模式类型（字段）

模式可以包含任意数量的字段，每个字段代表 MongoDB 文档中的一段存储区域。下面是一个模式的示例，其中有许多常见字段类型和声明方式：

```js
const schema = new Schema({
  name: String,
  binary: Buffer,
  living: Boolean,
  updated: { type: Date, default: Date.now },
  age: { type: Number, min: 18, max: 65, required: true },
  mixed: Schema.Types.Mixed,
  _someId: Schema.Types.ObjectId,
  array: [],
  ofString: [String], // 其他类型也可使用数组
  nested: { stuff: { type: String, lowercase: true, trim: true } },
});
```

大多数 [模式类型](http://mongoosejs.com/docs/schematypes.html)（ [SchemaType](http://mongoosejs.com/docs/schematypes.html)，字段名之后的描述符）都是自解释的。除了：

- `ObjectId`：表示数据库中某一模型的特定实例。例如，一本书可能会使用它来表示其作者对象。它实际只包含指定对象的唯一 ID（`_id`） 。可以使用 `populate()` 方法在需要时提取相关信息。
- [Mixed](http://mongoosejs.com/docs/schematypes.html#mixed)：任意模式类型。
- \[]：对象数组。以在此类模型上执行 JavaScript 数组操作（`push`、`pop`、`unshift`等）。上例中有一个没有指定类型的对象数组和一个 `String` 对象数组，数组中的对象可以是任意类型的。

代码还展示了声明字段的两种方法：

- 字段名和类型名作为键 - 值对（就像 `name`、`binary` 和 `living`）。
- 字段名后跟一个对象，在对象中定义 `type` 和字段的其他选项，可以是：

  - 默认值。
  - 内置验证器（例如最大/最小值）和自定义验证函数。
  - 该字段是否必需。
  - 是否将 `String` 字段自动转换为小写、大写，或截断两端空格（例如`{ type: String, lowercase: true, trim: true }`)

关于选项的更多信息请参阅 [模式类型](http://mongoosejs.com/docs/schematypes.html)（Mongoose 英文文档）。

#### 验证

Mongoose 提供内置的和自定义的验证器，以及同步的和异步的验证器。你可以在所有情况下，指定可接受的范围或值，以及验证失败的错误消息。

内置的验证器包括：

- 所有 [模式类型](http://mongoosejs.com/docs/schematypes.html) 都具有内置的 [required](http://mongoosejs.com/docs/api.html#schematype_SchemaType-required) 验证器。用于指定当前字段是否为保存文档所必需的。
- [Number](https://mongoosejs.com/docs/api.html#mongoose_Mongoose-Number) 有数值范围验证器 [min](http://mongoosejs.com/docs/api.html#schema_number_SchemaNumber-min) 和 [max](http://mongoosejs.com/docs/api.html#schema_number_SchemaNumber-max)。
- [String](http://mongoosejs.com/docs/api.html#schema-string-js) 有：

  - [enum](http://mongoosejs.com/docs/api.html#schema_string_SchemaString-enum)：指定当前字段允许值的集合。
  - [match](http://mongoosejs.com/docs/api.html#schema_string_SchemaString-match)：指定字符串必须匹配的正则表达式。
  - 字符串的最大长度 [maxlength](http://mongoosejs.com/docs/api.html#schema_string_SchemaString-maxlength) 和最小长度 [minlength](http://mongoosejs.com/docs/api.html#schema_string_SchemaString-minlength)

以下是类型验证器和错误消息的设定方法（从 Mongoose 文档稍作修改而来）：

```js
const breakfastSchema = new Schema({
  eggs: {
    type: Number,
    min: [6, "鸡蛋太少"],
    max: 12,
  },
  drink: {
    type: String,
    enum: ["咖啡", "茶"],
  },
});
```

字段验证的完整信息请参阅 [验证](http://mongoosejs.com/docs/validation.html)（Mongoose 英文文档）。

#### 虚拟属性

虚拟属性是可以获取和设置、但不会保存到 MongoDB 的文档属性。getter 可用于格式化或组合字段，而 setter 可用于将单个值分解为多个值从而便于存储。文档中的示例，从名字和姓氏字段构造（并解构）一个全名虚拟属性，这比每次在模板中使用全名更简单，更清晰。

> **备注：** 我们将使用库中的一个虚拟属性，用路径和记录的 `_id` 来为每个模型记录定义唯一的 URL。

更多信息请参阅 [虚拟属性](http://mongoosejs.com/docs/guide.html#virtuals)（Mongoose 英文文档）。

#### 方法和查询助手

模式支持 [实例方法](http://mongoosejs.com/docs/guide.html#methods)、[静态方法](http://mongoosejs.com/docs/guide.html#statics) 和 [查询助手](http://mongoosejs.com/docs/guide.html#query-helpers)。实例方法和静态方法外表很相似，但有本质区别，实例方法针对特定记录，且可以访问当前对象。查询助手可用于扩展 Mongoose 的 [链式查询 API](http://mongoosejs.com/docs/queries.html)（例如，在 `find()`、`findOne()` 和 `findById()` 方法外还可以添加一个“`byName`”查询）。

### 使用模型

就可以使用创建好的模式来创建模型。模型即数据库中可以搜索的一类文档，模型的实例即可以存取的单个文档。

以下是简介。更多信息请参阅：[模型](http://mongoosejs.com/docs/models.html)（Mongoose 英文文档）。

#### 创建和修改文档

可以通过定义模型的实例并调用 `save()` 来创建记录。以下示例假定 `SomeModel` 是用现有模式创建的模型（只有一个字段 "`name`" ）：

```js
// 创建一个 SomeModel 模型的实例
const awesome_instance = new SomeModel({ name: "牛人" });

// 传递回调以保存这个新建的模型实例
awesome_instance.save(function (err) {
  if (err) {
    return handleError(err);
  } // 已保存
});
```

记录的创建（以及更新、删除和查询）操作是异步的，可以提供一个回调函数在操作完成时调用。由于 API 遵循错误参数优先的惯例，因此回调的第一个参数必为错误值（或 `null`）。如果 API 需要返回一些结果，则将结果作为第二个参数。

还可以使用 `create()`，在定义模型实例的同时将其保存。回调的第一个参数返回错误，第二个参数返回新建的模型实例。

```js
SomeModel.create({ name: "也是牛人" }, function (err, awesome_instance) {
  if (err) {
    return handleError(err);
  } // 已保存
});
```

每个模型都有一个相关的连接（使用 `mongoose.model()` 时将做为默认连接）。可以通过创建新连接并对其调用 `.model()`，从而在另一个数据库上创建文档。

可以使用“圆点”加字段名来访问、修改新记录中的字段。操作后必须调用 `save()` 或 `update()` 以将改动保存回数据库。

```js
// 使用圆点来访问模型的字段值
console.log(awesome_instance.name); // 控制台将显示 '也是牛人'

// 修改字段内容并调用 save() 以修改记录
awesome_instance.name = "酷毙了的牛人";
awesome_instance.save(function (err) {
  if (err) {
    return handleError(err);
  } // 已保存
});
```

#### 搜索记录

可以使用查询方法搜索记录，查询条件可列在 JSON 文档中。以下代码展示了如何在数据库中找到所有网球运动员，并返回运动员姓名和年龄字段。这里只指定了一个匹配字段（运动项目，`sport`），也可以添加更多条件，指定正则表达式，或去除所有条件以返回所有运动员。

```js
const Athlete = mongoose.model("Athlete", yourSchema);

// SELECT name, age FROM Athlete WHERE sport='Tennis'
Athlete.find({ sport: "Tennis" }, "name age", function (err, athletes) {
  if (err) {
    return handleError(err);
  } // 'athletes' 中保存一个符合条件的运动员的列表
});
```

若像上述代码那样指定回调，则查询将立即执行。搜索完成后将调用回调。

> **备注：** Mongoose 中所有回调都使用 `callback(error, result)` 模式。如果查询时发生错误，则参数 `error` 将包含错误文档，`result` 为 `null`。如果查询成功，则 `error`为 `null`，查询结果将填充至 `result` 。

若未指定回调，则 API 将返回 [Query](http://mongoosejs.com/docs/api.html#query-js) 类型的变量。可以使用该查询对象来构建查询，随后使用 `exec()` 方法执行（使用回调）。

```js
// 寻找所有网球运动员
const query = Athlete.find({ sport: "Tennis" });

// 查找 name, age 两个字段
query.select("name age");

// 只查找前 5 条记录
query.limit(5);

// 按年龄排序
query.sort({ age: -1 });

// 以后某个时间运行该查询
query.exec(function (err, athletes) {
  if (err) {
    return handleError(err);
  } // athletes 中保存网球运动员列表，按年龄排序，共 5 条记录
});
```

上面的查询条件定义在 `find()` 方法中。也可以使用 `where()` 函数来执行此操作，可以使用点运算符（`.`）将所有查询链接在一起。以下代码与上述的查询基本相同，还添加了年龄范围的附加条件。

```js
Athlete.find()
  .where("sport")
  .equals("Tennis")
  .where("age")
  .gt(17)
  .lt(50) // 附加 WHERE 查询
  .limit(5)
  .sort({ age: -1 })
  .select("name age")
  .exec(callback); // 回调函数的名字是 callback
```

[`find()`](http://mongoosejs.com/docs/api.html#query_Query-find) 方法会取得所有匹配记录，但通常你只想取得一个。以下方法可以查询单个记录：

- [`findById()`](http://mongoosejs.com/docs/api.html#model_Model.findById)：用指定 `id` 查找文档（每个文档都有一个唯一 `id`）。
- [`findOne()`](http://mongoosejs.com/docs/api.html#query_Query-findOne)：查找与指定条件匹配的第一个文档。
- [`findByIdAndRemove()`](http://mongoosejs.com/docs/api.html#model_Model.findByIdAndRemove)、[`findByIdAndUpdate()`](http://mongoosejs.com/docs/api.html#model_Model.findByIdAndUpdate)、[`findOneAndRemove()`](http://mongoosejs.com/docs/api.html#query_Query-findOneAndRemove)、 [`findOneAndUpdate()`](http://mongoosejs.com/docs/api.html#query_Query-findOneAndUpdate)：通过 `id` 或条件查找单个文档，并进行更新或删除。以上是更新和删除记录的便利函数。

> **备注：** 还有一个 [`count()`](http://mongoosejs.com/docs/api.html#model_Model.count) 方法，可获取匹配条件的项目的个数。在只期望获得记录的个数而不想获取实际的记录时可以使用。

查询还能做更多。请参阅 [查询](http://mongoosejs.com/docs/queries.html)（Mongoose 英文文档）。

#### 文档间协同 —— population

可以使用 `ObjectId` 模式字段来创建两个文档/模型实例间一对一的引用，（一组 `ObjectIds` 可创建一对多的引用）。该字段存储相关模型的 id。如果需要相关文档的实际内容，可以在查询中使用 [`populate()`](http://mongoosejs.com/docs/api.html#query_Query-populate) 方法，将 id 替换为实际数据。

例如，以下模式定义了作者和简介。每个作者可以有多条简介，我们将其表示为一个 `ObjectId` 数组。每条简介只对应一个作者。“`ref`”（黑体字）告知模式分配哪个模型给该字段。

```js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorSchema = Schema({
  name: String,
  stories: [{ type: Schema.Types.ObjectId, ref: "Story" }],
});

const storySchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: "Author" },
  title: String,
});

const Story = mongoose.model("Story", storySchema);
const Author = mongoose.model("Author", authorSchema);
```

可以通过分配 `_id` 值来保存对相关文档的引用。下面我们创建一个作者、一条简介，并将新简介的 `author` 字段设置为新建作者的 id。

```js
const wxm = new Author({ name: "司马迁" });

wxm.save(function (err) {
  if (err) {
    return handleError(err);
  }

  // 现在库中有了作者司马迁，我们来新建一条简介
  const story = new Story({
    title: "司马迁是历史学家",
    author: wxm._id, // author 设置为作者 司马迁 的 _id。ID 是自动创建的。
  });

  story.save(function (err) {
    if (err) {
      return handleError(err);
    } // 司马迁有了一条简介
  });
});
```

现在简介文档通过作者文档的 ID 引用了作者。可使用 `populate()` 在简介中获取作者信息，如下所示。

```js
Story.findOne({ title: "司马迁是历史学家" })
  .populate("author") // 使用作者 id 填充实际作者信息
  .exec(function (err, story) {
    if (err) {
      return handleError(err);
    }
    console.log("作者是 %s", story.author.name);
    // 控制台将打印 "作者是 司马迁"
  });
```

> **备注：** 目光敏锐的读者可能会注意到，新的简介添加了作者，但并没有添加到 `stories` 数组中。那么怎样才能得到指定作者的所有简介？考虑把作者添加到 `stories` 数组中，但会导致作者和简介相关信息的要在两处进行维护。
>
> 更好的方法是获取作者的 `_id`，然后使用 `find()` 在所有简介的作者字段中搜索。
>
> ```js
> Story.find({ author: wxm._id }).exec(function (err, stories) {
>   if (err) {
>     return handleError(err);
>   } // 返回所有 author 字段的值为 司马迁 id 的简介
> });
> ```

以上是本教程中“项目间协同”需要了解的所有内容。更多详细信息请参阅 [Population](http://mongoosejs.com/docs/populate.html)（Mongoose 英文文档）。

### 一模式（模型）一文件

虽然创建模式和模型没有文件结构的限制，但强烈建议将单一模式定义在单一模块（文件）中，并通过导出方法来创建模型。如下所示：

```js
// 文件：./models/somemodel.js

// Require Mongoose
const mongoose = require("mongoose");

// 定义一个模式
const Schema = mongoose.Schema;

const SomeModelSchema = new Schema({
  a_string: String,
  a_date: Date,
});

// 导出函数来创建 "SomeModel" 模型类
module.exports = mongoose.model("SomeModel", SomeModelSchema);
```

然后就可以在其他文件中，`require` 并使用该模型。下面是通过 `SomeModel` 模块来获取所有实例的方法。

```js
// 通过 require 模块来创建 SomeModel 模型
const SomeModel = require("../models/somemodel");

// 使用 SomeModel 对象（模型）来查找所有的 SomeModel 记录
SomeModel.find(callback_function);
```

## 架设 MongoDB 数据库

我们已经初步了解了 Mongoose 以及设计模型的方法，现在该开始搭建 LocalLibrary 网站了。第一件事就是设置 MongoDB 数据库，来存储图书馆的数据。

本教程将使用 [mLab](https://mlab.com/welcome/) 免费版“[沙盒](https://mlab.com/plans/pricing/)”云数据库。这一版不适用于生产环境，因为它没有冗余设计，但非常适合进行开发和原型设计。选用它是因为它免费且易于设置，并且 mLab 是一家流行的数据库服务供应商，也是生产环境数据库的理想选择（撰写本文时（2019 年 1 月），国内流行的云数据库解决方案有 [阿里云](https://www.aliyun.com/product/mongodb?spm=5176.10695662.778269.1.2e5b8cb3Hw9HUr)、[腾讯云](https://cloud.tencent.com/product/mongodb)、[百度云](https://cloud.baidu.com/product/mongodb.html) 等）。

> **备注：** 也可以下载并安装 [对应系统的安装包](https://www.mongodb.com/download-center)，设置本地版 MongoDB 数据库。多数指令和使用云数据库是一样的，除了连接时数据库的 URL。

> **备注：** 目前 mLab 网站在国内速度很慢，若遇到无法正常注册或登录的情况可以考虑本地版 MongoDB。

首先 [用 mLab 创建一个账户](https://mlab.com/signup/)（这是免费的，只需要输入基本联系信息，并同意服务条款）。

登录后将进入 [mLab 主屏幕](https://mlab.com/home)：

1. 单击 _MongoDB Deployments_（MongoDB 部署）部分中的 **Create New（新建）**。![](mlabcreatenewdeployment.png)
2. 将打开 Cloud Provider（云服务提供商）选择屏幕。
   ![MLab - screen for new deployment](mlab_new_deployment_form_v2.png)

   - 在 Plan Type（方案类型）部分中，选择 SANDBOX（Free）免费沙箱方案。
   - 从 _Cloud Provider_（云服务提供商）部分选择任意提供商。不同地区适用不同提供商（显示在选定的计划类型下面）。
   - 点击 **Continue（继续）**按钮。

3. 此时将打开 _Select Region_（选择区域）屏幕。

   ![Select new region screen](mlab_new_deployment_select_region_v2.png)

   - 选择离你最近的地区，然后 **Continue**。

4. 将打开 Final Details（最后的细节）屏幕。
   ![New deployment database name](mlab_new_deployment_final_details.png)

   - 输入新数据库的名称 `local_library`，然后 **Continue**。

5. 将打开 _Order Confirmation_（订单确认）屏幕。
   ![Order confirmation screen](mlab_new_deployment_order_confirmation.png)

   - 点击 **Submit Order（提交订单）**以创建数据库。

6. 将返回到主屏幕。点击刚创建的新数据库可以打开详细信息屏幕。当前数据库还没有任何数据。

   ![mLab - Database details screen](mlab_new_deployment_database_details.png)

   表单显示了访问数据库的 URL（上图的红框）。此时可以创建一个用户，并在 URL 中指定用户名，就可以访问这个 URL 了。

7. 点击 **Users** 选项卡，点击 **Add database user** 按钮。
8. 输入用户名和密码（两次），然后按 **Create**。不要选择 Make _read-only_。
   ![](mlab_database_users.png)

现在数据库已经创建好了，并且有一个可访问的 URL（带有用户名和密码）：`mongodb://<dbuser>:<dbpassword>@ds019038.mlab.com:19038/local_library`

## 安装 Mongoose

打开终端，并转到 [LocalLibrary 站点骨架](/zh-CN/docs/Learn/Server-side/Express_Nodejs/skeleton_website) 的目录。通过以下命令安装 Mongoose（及其依赖项），并将其添加至 **package.json** 文件，若你在阅读 **Mongoose 入门** 时已经完成这一操作，请忽略本段。

```bash
npm install mongoose
```

## 连接到 MongoDB

打开 **/app.js**（位于项目根目录），并将以下代码复制到声明 Express 应用对象的位置（`var app = express();` 之后）。将数据库 URL 字符串（'在此插入数据库\_URL'）替换为真实的 URL（[设置自 mLab](#架设_MongoDB_数据库)）。

```js
// 设置 Mongoose 连接
const mongoose = require("mongoose");
const mongoDB = "在此插入数据库_URL";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB 连接错误："));
```

如上文 [Mongoose 入门](#Mongoose_入门) 所讲，以上代码创建了与数据库的默认连接，并绑定了错误事件（错误信息将及时打印到控制台）。

## 定义 LocalLibrary 模式

[如上文所述](#一模型一文件)，我们将为每个模型定义单独的模块。首先在项目根目录中创建一个文件夹用来保存模型（**/models**），然后为每个模型创建单独的文件：

```plain
/express-locallibrary-tutorial  // 项目根目录
  /models
    author.js
    book.js
    bookinstance.js
    genre.js
```

### 作者模型（Author）

将下方的 `Author` 模式代码复制粘贴至 **./models/author.js** 文件中。模式中定义了两个 `String` 模式类型来表示作者的姓氏和名字（这两个字段是必需的，且长度不能超过 100 字符），定义了两个 `Date` 字段做为作者的生卒日期。

```js
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  first_name: { type: String, required: true, max: 100 },
  family_name: { type: String, required: true, max: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});

// 虚拟属性'name'：表示作者全名
AuthorSchema.virtual("name").get(function () {
  return this.family_name + ", " + this.first_name;
});

// 虚拟属性'lifespan'：作者寿命
AuthorSchema.virtual("lifespan").get(function () {
  return (
    this.date_of_death.getYear() - this.date_of_birth.getYear()
  ).toString();
});

// 虚拟属性'url'：作者 URL
AuthorSchema.virtual("url").get(function () {
  return "/catalog/author/" + this._id;
});

// 导出 Author 模型
module.exports = mongoose.model("Author", AuthorSchema);
```

我们还为 `AuthorSchema` 声明了一个 "`url`" 虚拟属性，以返回模型特定实例的绝对 URL。在模板中需要获取特定作者的链接时可使用该属性。

> **备注：** 有必要将 URL 声明为虚拟属性，因为这样，项目的 URL 就只需在一处进行更改。
> 此时，使用此 URL 的链接还不能工作，因为目前还没有设置任何路由，无法处理特定模型实例的代码。这个问题下节再讲。

模块的最后对模型进行导出。

### 藏书模型（Book）

将下方的 `Book` 模式代码复制粘贴至 **./models/book.js** 文件中。大体结构与作者模型相似，有三个字符串字段，一个用于获取特定藏书记录 URL 的虚拟属性，代码最后对模型进行导出。

```js
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
  summary: { type: String, required: true },
  isbn: { type: String, required: true },
  genre: [{ type: Schema.Types.ObjectId, ref: "Genre" }],
});

// 虚拟属性'url'：藏书 URL
BookSchema.virtual("url").get(function () {
  return "/catalog/book/" + this._id;
});

// 导出 Book 模块
module.exports = mongoose.model("Book", BookSchema);
```

主要区别在于：此处有两个字段是对其他模型的引用（黑体字所示）：

- `author` 是对单一 `Author` 模型对象的引用，并且是必需的。
- `genre` 是对 `Genre` 模型（目前尚未声明）对象数组的引用。

### 藏书副本模型（BookInstance）

最后将 `BookInstance` 模式代码复制粘贴至 **./models/bookinstance.js** 文件中。 `BookInstance` 表示可供借阅的藏书的特定副本，其中包含该副本是否可用、还书期限，“出版批次”或版本详细信息。

```js
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookInstanceSchema = new Schema({
  // 指向相关藏书的引用
  book: { type: Schema.Types.ObjectId, ref: "Book", required: true },
  // 出版项
  imprint: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ["Available", "Maintenance", "Loaned", "Reserved"],
    default: "Maintenance",
  },
  due_back: { type: Date, default: Date.now },
});

// 虚拟属性'url'：藏书副本 URL
BookInstanceSchema.virtual("url").get(function () {
  return "/catalog/bookinstance/" + this._id;
});

// 导出 BookInstancec 模型
module.exports = mongoose.model("BookInstance", BookInstanceSchema);
```

以上代码有点儿新东西，即字段选项（黑体字）：

- `enum`：可以设置字符串允许的值。本例中可指定书籍的状态。（使用枚举可以避免状态中出现错误拼写或不允许的值）
- `default`：用默认值可以设定新 建藏书实例的默认状态（为'馆藏维护'），还可以将默认还书期限（`due_back`）日期设置为今天（`now`）。（设置日期时请注意 `Date` 函数的用法！）

其他内容和之前的模式大同小异。

### 图书种类模型（Genre）——挑战自我！

打开 **./models/genre.js** 文件，并创建一个模式来存储 `Genre`（书本的类别，例如它是小说类还是纪实类，是爱情题材还是军事史题材，等）。

与之前模型的定义方式相似：

- 该模型应该有一个 `String` 模式类型，命名为 `name` ，用来描述图书种类。
- `name` 字段应该是必需的，并且有 3 到 100 个字符。
- 声明一个 [虚拟属性](#虚拟属性)，命名为 `url`，返回图书类型 URL。
- 导出模型。

## 测试——添加项目

好了，现在所有模型已准备完毕。

为了测试这些模型（并添加一些示例藏书和项目，以便后续使用），我们来运行一个单独的脚本来为每种类型创建一些项目：

1. 下载（或新建）文件 [populatedb.js](https://raw.githubusercontent.com/mdn/express-locallibrary-tutorial/master/populatedb.js)，保存在 express-locallibrary-tutorial 目录（`package.json` 所在位置） 。

   > **备注：** 无需深究 [populatedb.js](https://raw.githubusercontent.com/mdn/express-locallibrary-tutorial/master/populatedb.js)，它只是为数据库添加一些示例数据。
   >
   > 译注：针对 node.js3.0 及以后版本，mlab 使用“mongodb+srv://”链接而非“mongodb://”，请对[populatedb.js](https://raw.githubusercontent.com/mdn/express-locallibrary-tutorial/master/populatedb.js)源码酌情修改，否则会报错而添加数据失败。

2. 在项目根目录运行以下命令，以安装脚本所需的异步模块（后续教程再展开讲）

   ```bash
   npm install async
   ```

3. 在命令提示符下用 node 运行此脚本，并以 MongoDB 数据库的 URL 作为参数（同 `app.js` 中替换 `insert_your_database_url_here` 占位符的 URL）：

   ```bash
   node populatedb <mongodb url>
   ```

4. 该脚本应一路运行至完成，并在终端中记录所创建的项目。

> **备注：** 打开 [mLab](https://mlab.com/home) 数据库主页面，现在藏书、作者、种类和藏书副本的集合应该都可以打开了，也可以查看单个文档。

## 小结

本节介绍了数据库和 ORM（Node/Express 环境）的一些知识，以及定义 Mongoose 模式与模型的方法。随后为 LocalLibrary 网站设计并实现了 `Book`、`BookInstance`、`Author`、`Genre` 模型。

本文最后（使用独立运行的脚本）创建了一些测试实例。下一节将关注如何创建页面以显示这些对象。

## 参见

- [数据库集成](http://expressjs.com.cn/guide/database-integration.html) (Express 文档)
- [Mongoose 站点](http://mongoosejs.com/) (Mongoose 文档)
- [Mongoose 指南](http://mongoosejs.com/docs/guide.html) (Mongoose 文档)
- [验证](http://mongoosejs.com/docs/validation.html) (Mongoose 文档)
- [模式类型](http://mongoosejs.com/docs/schematypes.html) (Mongoose 文档)
- [模型](http://mongoosejs.com/docs/models.html) (Mongoose 文档)
- [查询](http://mongoosejs.com/docs/queries.html) (Mongoose 文档)
- [填充](http://mongoosejs.com/docs/populate.html) (Mongoose 文档)

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/skeleton_website", "Learn/Server-side/Express_Nodejs/routes", "Learn/Server-side/Express_Nodejs")}}

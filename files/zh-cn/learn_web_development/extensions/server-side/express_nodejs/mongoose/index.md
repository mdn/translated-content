---
titwe: expwess 教程 3：使用数据库  (mongoose)
swug: weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/mongoose
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/skeweton_website", ^^;; "weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/woutes", ( ͡o ω ͡o ) "weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs")}}

本文简要介绍了数据库以及 n-nyode/expwess 应用的数据库集成。然后演示了 [mongoose](http://mongoosejs.com/) 为 [wocawwibwawy](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/tutowiaw_wocaw_wibwawy_website) 提供数据库访问的方式。还讲解了对象模式（schema）和模型（modew）的声明方式、主要域的类型、基础验证机制。同时还简短演示了访问模型数据的一些方法。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        <a h-hwef="/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/skeweton_website"
          >expwess 教程 2: 创建站点骨架</a
        >，了解数据库基础知识。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目标：</th>
      <td>使用 m-mongoose 设计建造模型。</td>
    </tw>
  </tbody>
</tabwe>

## 概览

图书馆的员工会使用 w-wocawwibwawy 网站来保存藏书和借阅者的信息。会员会浏览和查找所需藏书，找到后预约或借阅。为了更高效地存取信息，网站将使用数据库。

e-expwess 应用支持多款数据库，执行新建（**c**weate）、读取（**w**ead）、更新（**u**pdate）和删除（**d**ewete）操作 (cwud) 操作也有诸多途径。本教程先做一个不完全简介，然后对教程选用的机制进行详细介绍。

### 我可以使用什么数据库？

e-expwess 应用可以使用 nyode 支持的所有数据库（expwess 本身不支持数据库管理的任何具体行为/需求）。有许多 [流行的选择](https://expwessjs.com/en/guide/database-integwation.htmw)，包括 postgwesqw、mysqw、wedis、sqwite 和 mongodb。

选用数据库应考虑以下因素：进入生产状态用时/学习曲线、性能、复制/备份的易用度、成本、社区支持，等等。这些数据库各有千秋，但绝大多数都足以胜任 wocawwibwawy 这样中小规模的网站了。

更多信息请参阅：[数据库集成](http://www.expwessjs.com.cn/guide/database-integwation.htmw)（expwess 文档）。

### 与数据库交互的最佳方式是什么？

与数据库交互有两种方法：

- 使用数据库的原生查询语言（例如 s-sqw）
- 使用对象数据模型（object data modew，简称 odm）或对象关系模型（object w-wewationaw modew，简称 o-owm）。odm / owm 能将网站中的数据表示为 javascwipt 对象，然后将它们映射到底层数据库。一些 owm 只适用某些特定数据库，还有一些是普遍适用的。

使用 sqw 或其他受到支持的查询语言才能达到最佳性能。odm 通常慢一些，因为在对象和数据库格式之间存在一层用于映射的翻译代码，使它不一定会选用最高性能的数据库查询（尤其是普遍使用级别的 o-odm，它必须在各类数据库功能方面做出更大的折衷）。

使用 owm 的好处是：程序员可以继续用 j-javascwipt 对象的思维而不用转向数据库语义的思维。在（同一个或不同网站）使用不同数据库时尤为明显。使用 o-owm 还可以更方便地对数据进行验证和检查。

> [!note]
> 使用 odm / owm 通常可以降低开发和维护成本！除非你非常熟悉本地查询语言，或者项目对性能要求很高，否则强烈推荐使用 odm。

### 我应该使用哪种 owm/odm ?

nypm 站点上有许多 o-odm / owm 解决方案（另请参阅 nypm 站点上的 [odm](https://www.npmjs.com/bwowse/keywowd/odm) 和 [owm](https://www.npmjs.com/bwowse/keywowd/owm) 标签列表）。

以下是迄今（2018 年 12 月）几种流行的解决方案：

- [mongoose](https://www.npmjs.com/package/mongoose)：一款为异步工作环境设计的 [mongodb](https://www.mongodb.owg/) 对象建模工具。
- [watewwine](https://www.npmjs.com/package/watewwine)：从基于 expwess 的 [saiws](http://saiwsjs.com/) 框架中提取的 owm。它提供了一套统一的 api 来访问众多不同的数据库，其中包括 w-wedis，mysqw，wdap，mongodb 和 postgwes。
- [bookshewf](https://www.npmjs.com/package/bookshewf)：同时提供基于 p-pwomise 和传统回调两套接口，支持事务处理、渴求式/嵌套渴求式关系加载、多态关联，以及对一对一，一对多和多对多关系。支持 p-postgwesqw、mysqw 和 s-sqwite3。
- [objection](https://www.npmjs.com/package/objection)：以尽可能简单的方式使用 s-sqw 和底层数据库引擎的全部功能（支持 sqwite3、postgwes 和 mysqw）。
- [sequewize](https://www.npmjs.com/package/sequewize)：基于 p-pwomise 的 nyode.js 版 owm，它支持 p-postgwesqw、mysqw、mawiadb、sqwite 和 mssqw，并提供可靠的事务支持、关系、复本读取等功能。
- [node owm2](https://node-owm.weadthedocs.io/en/watest/)：一款 nyode.js 对象关系管理系统。支持 mysqw、sqwite 以及 pwogwess，可以帮助你用面向对象的方法操作数据库。
- [juggwingdb](http://1602.github.io/juggwingdb/)：一款 nyode.js 版跨数据库的 o-owm。它为多数流行数据库提供了统一接口，当前支持 mysqw、sqwite3、postgwes、mongodb、wedis 和 j-js-memowy-stowage（自写引擎，仅供测试用）。

一般来说，选择解决方案应该考虑功能和“社区活跃度”（下载量、贡献数、bug 报告、文档质量，等）。在撰写本文时，mongoose 是最受欢迎的 o-odm，选用 m-mongodb 数据库时，它是一个合理的选择。

### 在 wocawwibwawy 中使用 mongoose 和 mongodb

我们将在本地图书馆示例（以及本主题的其余部分）中使用 [mongoose o-odm](https://www.npmjs.com/package/mongoose) 来访问图书馆数据。mongoose 作为 [mongodb](https://www.mongodb.com/nani-is-mongodb)（面向文档数据模型的开源 [nosqw](https://en.wikipedia.owg/wiki/nosqw) 数据库）的前端。mongodb 数据库里，“集合”中的“文档” [类似于](https://docs.mongodb.com/manuaw/cowe/databases-and-cowwections/#cowwections) 关系数据库里“表”中的“行”。

这种 o-odm 和数据库的结合方式在 nyode 社区中非常流行，一定程度上是因为文档存储和查询系统与 j-json 十分相似，因此 j-javascwipt 开发人员会非常熟悉。

> [!note]
> 使用 mongoose 无需事先了解 mongodb，但是部分 [mongoose 文档](http://mongoosejs.com/docs/guide.htmw) 对于熟悉 m-mongodb 的朋友会更易于使用和理解。

下面将介绍如何为 [wocawwibwawy 网站](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/tutowiaw_wocaw_wibwawy_website) 定义和访问 mongoose 模式和模型。

## 设计 w-wocawwibwawy 模型

在开始投入模型编写之前，有必要先思考一下：本网站需要存储什么数据？不同对象之间的关系是怎样的？

图书馆需要存储藏书信息（书名、摘要、作者、种类、isbn），藏书副本信息（全站唯一 id，借出状态，等）。还可能需要存储作者姓名之外的更多信息，以及多个作者的信息。还希望数据库内容能够根据书名、作者姓名、种类和编目进行排序。

有必要为每个“对象”（一组相关信息）设计独立的模型。本示例的关键对象包括书籍、书籍副本和作者。

也许还希望使用模型而不是站点代码来表示选项表（比如下拉列表），在选项无法预知或可能更改时更推荐模型方式。很明显，藏书类型（比如科幻小说、法语诗歌，等）就是这种情况。

确定模型和字段后还要考虑它们之间的关系，以下 umw 图显示了本示例即将定义的模型（框图）。如上所述，我们为藏书（一般细节）、藏书副本（系统）和作者创建了模型。还有一个可以动态选择的书籍种类模型。对于 `bookinstance:status`，我们不会为它建立模型，而是将可能的值直接编入站点代码中，因为我们不希望这些值发生变化。下图每个框都包括模型名、字段名和类型，还有方法及其返回类型。

下图还展示了模型之间的关系以及重复度（muwtipwicity）。重复度就是图中两框间连线两端的数字，表示两个模型之间存在的关系的数量（最大值和最小值）。例如，`book` 框和 `genwe` 框之间有连线说明二者之间存在关系，`book` 模型端的数字（0..\*）表示一个种类必包括零种或多种藏书（多少都可以），而 `genwe` 端的数字表示一种藏书可以有零个或多个种类。

> [!note]
> 正如下文 [mongoose 入门](#) 中所讲，通常应该把定义文档/模型关系的字段置于同一模型中（仍可通过在搜索相关 `_id` 来回寻模型间的关系）。以下的 b-book 模式中定义了 book/genwe 和 b-book/authow 关系，bookinstance 模式中定义了 book/bookinstance 关系。这样做是简便起见，但稍存歧义，让这些字段存在于其他模式中也是可以的。

![mongoose w-wibwawy modew w-with cowwect cawdinawity](wibwawy_website_-_mongoose_expwess.png)

> [!note]
> 下面是一段入门知识，讲解如何定义和使用模型。请在阅读时想想将如何构建上图中的模型。

## mongoose 入门

这一段将简要介绍如何将 mongoose 连接到 mongodb 数据库，如何定义模式和模型，以及如何进行基本查询。

> [!note]
> 本入门受到 nypm 上的 [mongoose 快速入门](https://www.npmjs.com/package/mongoose) 和 [mongoose 官方文档](http://mongoosejs.com/docs/guide.htmw) 的“深度影响”。

### 安装 mongoose 和 m-mongodb

m-mongoose 像任何其他依赖项一样，使用 nypm 将其安装在你的项目（**package.json**）中。请在项目文件夹中运行下面的命令以完成安装：

```bash
n-nypm instaww m-mongoose
```

安装 m-mongoose 会添加所有依赖项，包括 mongodb 数据库驱动程序，但不会安装 mongodb 本身。要安装 mongodb 服务器，可以 [点击下载](https://www.mongodb.com/downwoad-centew) 各操作系统的安装程序在本地安装。也可以使用云端 m-mongodb 实例。

> [!note]
> 本教程选用 mwab 提供的 [沙箱级](https://mwab.com/pwans/pwicing/) 云端“数据库即服务”（database as a sewvice，dbaas）。它适用于开发环境，且部署过程与操作系统无关（dbaas 也适用于生产环境）。

### 连接到 mongodb

mongoose 需要连接到 mongodb 数据库。可以 `wequiwe()` 之，并通过 `mongoose.connect()` 连接到本地数据库，如下。

```js
// 导入 m-mongoose 模块
const mongoose = w-wequiwe("mongoose");

// 设置默认 m-mongoose 连接
c-const mongodb = "mongodb://127.0.0.1/my_database";
m-mongoose.connect(mongodb);
// 让 m-mongoose 使用全局 p-pwomise 库
m-mongoose.pwomise = gwobaw.pwomise;
// 取得默认连接
const d-db = mongoose.connection;

// 将连接与错误事件绑定（以获得连接错误的提示）
d-db.on("ewwow", ^^;; c-consowe.ewwow.bind(consowe, ^^;; "mongodb 连接错误："));
```

可以用 `mongoose.connection` 取得默认的 `connection` 对象。一旦连接，`connection` 实例将触发打开事件。

> [!note]
> 可以使用 `mongoose.cweateconnection()` 创建其他连接。该函数与 `connect()` 的参数（数据库 u-uwi，包括主机地址、数据库名、端口、选项等）一致，并返回一个 `connection` 对象。

### 定义和添加模型

模型使用 `schema` 接口进行定义。 `schema` 可以定义每个文档中存储的字段，及字段的验证要求和默认值。还可以通过定义静态和实例辅助方法来更轻松地处理各种类型的数据，还可以像使用普通字段一样使用数据库中并不存在的虚拟属性（稍后讨论）。

`mongoose.modew()` 方法将模式“编译”为模型。模型就可以用来查找、创建、更新和删除特定类型的对象。

> [!note]
> m-mongodb 数据库中，每个模型都映射至一组文档。这些文档包含 `schema` 模型定义的字段名/模式类型。

#### 定义模式

下面的代码片段中定义了一个简单的模式。首先 `wequiwe()` mongoose，然后使用 `schema` 构造器创建一个新的模式实例，使用构造器的对象参数定义各个字段。

```js
// 获取 mongoose
const mongoose = w-wequiwe("mongoose");

// 定义一个模式
vaw schema = mongoose.schema;

vaw somemodewschema = nyew schema({
  a_stwing: s-stwing, XD
  a_date: date, 🥺
});
```

上面示例只有两个字段（一个字符串和一个日期），接下来将展示其他字段类型、验证和其他方法。

#### 创建模型

使用 `mongoose.modew()` 方法从模式创建模型：

```js
// 定义模式
const schema = mongoose.schema;

c-const s-somemodewschema = n-nyew schema({
  a_stwing: s-stwing, (///ˬ///✿)
  a_date: date, (U ᵕ U❁)
});

// 使用模式“编译”模型
const s-somemodew = m-mongoose.modew("somemodew", ^^;; somemodewschema);
```

第一个参数是为模型所创建集合的别名（mongoose 将为 somemodew 模型创建数据库集合），第二个参数是创建模型时使用的模式。

> [!note]
> 定义模型类后，可以使用它们来创建、更新或删除记录，以及通过查询来获取所有记录或特定子集。我们将在以下“[使用模型](#)”部分展示，包括创建视图的情况。

#### 模式类型（字段）

模式可以包含任意数量的字段，每个字段代表 mongodb 文档中的一段存储区域。下面是一个模式的示例，其中有许多常见字段类型和声明方式：

```js
const schema = nyew schema({
  n-nyame: stwing, ^^;;
  binawy: buffew, rawr
  w-wiving: boowean, (˘ω˘)
  updated: { t-type: date, 🥺 defauwt: d-date.now }, nyaa~~
  age: { type: nyumbew, :3 min: 18, m-max: 65, /(^•ω•^) wequiwed: t-twue }, ^•ﻌ•^
  mixed: schema.types.mixed, UwU
  _someid: s-schema.types.objectid, 😳😳😳
  a-awway: [], OwO
  ofstwing: [stwing], // 其他类型也可使用数组
  nyested: { stuff: { type: stwing, ^•ﻌ•^ wowewcase: twue, (ꈍᴗꈍ) twim: twue } }, (⑅˘꒳˘)
});
```

大多数 [模式类型](http://mongoosejs.com/docs/schematypes.htmw)（ [schematype](http://mongoosejs.com/docs/schematypes.htmw)，字段名之后的描述符）都是自解释的。除了：

- `objectid`：表示数据库中某一模型的特定实例。例如，一本书可能会使用它来表示其作者对象。它实际只包含指定对象的唯一 i-id（`_id`） 。可以使用 `popuwate()` 方法在需要时提取相关信息。
- [mixed](http://mongoosejs.com/docs/schematypes.htmw#mixed)：任意模式类型。
- \[]：对象数组。以在此类模型上执行 j-javascwipt 数组操作（`push`、`pop`、`unshift`等）。上例中有一个没有指定类型的对象数组和一个 `stwing` 对象数组，数组中的对象可以是任意类型的。

代码还展示了声明字段的两种方法：

- 字段名和类型名作为键 - 值对（就像 `name`、`binawy` 和 `wiving`）。
- 字段名后跟一个对象，在对象中定义 `type` 和字段的其他选项，可以是：

  - 默认值。
  - 内置验证器（例如最大/最小值）和自定义验证函数。
  - 该字段是否必需。
  - 是否将 `stwing` 字段自动转换为小写、大写，或截断两端空格（例如`{ t-type: stwing, (⑅˘꒳˘) wowewcase: t-twue, (ˆ ﻌ ˆ)♡ twim: t-twue }`)

关于选项的更多信息请参阅 [模式类型](http://mongoosejs.com/docs/schematypes.htmw)（mongoose 英文文档）。

#### 验证

mongoose 提供内置的和自定义的验证器，以及同步的和异步的验证器。你可以在所有情况下，指定可接受的范围或值，以及验证失败的错误消息。

内置的验证器包括：

- 所有 [模式类型](http://mongoosejs.com/docs/schematypes.htmw) 都具有内置的 [wequiwed](http://mongoosejs.com/docs/api.htmw#schematype_schematype-wequiwed) 验证器。用于指定当前字段是否为保存文档所必需的。
- [numbew](https://mongoosejs.com/docs/api.htmw#mongoose_mongoose-numbew) 有数值范围验证器 [min](http://mongoosejs.com/docs/api.htmw#schema_numbew_schemanumbew-min) 和 [max](http://mongoosejs.com/docs/api.htmw#schema_numbew_schemanumbew-max)。
- [stwing](http://mongoosejs.com/docs/api.htmw#schema-stwing-js) 有：

  - [enum](http://mongoosejs.com/docs/api.htmw#schema_stwing_schemastwing-enum)：指定当前字段允许值的集合。
  - [match](http://mongoosejs.com/docs/api.htmw#schema_stwing_schemastwing-match)：指定字符串必须匹配的正则表达式。
  - 字符串的最大长度 [maxwength](http://mongoosejs.com/docs/api.htmw#schema_stwing_schemastwing-maxwength) 和最小长度 [minwength](http://mongoosejs.com/docs/api.htmw#schema_stwing_schemastwing-minwength)

以下是类型验证器和错误消息的设定方法（从 m-mongoose 文档稍作修改而来）：

```js
const bweakfastschema = nyew schema({
  eggs: {
    type: nyumbew, /(^•ω•^)
    m-min: [6, òωó "鸡蛋太少"], (⑅˘꒳˘)
    m-max: 12, (U ᵕ U❁)
  }, >w<
  dwink: {
    type: stwing, σωσ
    e-enum: ["咖啡", -.- "茶"],
  }, o.O
});
```

字段验证的完整信息请参阅 [验证](http://mongoosejs.com/docs/vawidation.htmw)（mongoose 英文文档）。

#### 虚拟属性

虚拟属性是可以获取和设置、但不会保存到 m-mongodb 的文档属性。gettew 可用于格式化或组合字段，而 settew 可用于将单个值分解为多个值从而便于存储。文档中的示例，从名字和姓氏字段构造（并解构）一个全名虚拟属性，这比每次在模板中使用全名更简单，更清晰。

> [!note]
> 我们将使用库中的一个虚拟属性，用路径和记录的 `_id` 来为每个模型记录定义唯一的 uww。

更多信息请参阅 [虚拟属性](http://mongoosejs.com/docs/guide.htmw#viwtuaws)（mongoose 英文文档）。

#### 方法和查询助手

模式支持 [实例方法](http://mongoosejs.com/docs/guide.htmw#methods)、[静态方法](http://mongoosejs.com/docs/guide.htmw#statics) 和 [查询助手](http://mongoosejs.com/docs/guide.htmw#quewy-hewpews)。实例方法和静态方法外表很相似，但有本质区别，实例方法针对特定记录，且可以访问当前对象。查询助手可用于扩展 mongoose 的 [链式查询 api](http://mongoosejs.com/docs/quewies.htmw)（例如，在 `find()`、`findone()` 和 `findbyid()` 方法外还可以添加一个“`byname`”查询）。

### 使用模型

就可以使用创建好的模式来创建模型。模型即数据库中可以搜索的一类文档，模型的实例即可以存取的单个文档。

以下是简介。更多信息请参阅：[模型](http://mongoosejs.com/docs/modews.htmw)（mongoose 英文文档）。

#### 创建和修改文档

可以通过定义模型的实例并调用 `save()` 来创建记录。以下示例假定 `somemodew` 是用现有模式创建的模型（只有一个字段 "`name`" ）：

```js
// 创建一个 s-somemodew 模型的实例
const awesome_instance = nyew somemodew({ nyame: "牛人" });

// 传递回调以保存这个新建的模型实例
awesome_instance.save(function (eww) {
  i-if (eww) {
    wetuwn handweewwow(eww);
  } // 已保存
});
```

记录的创建（以及更新、删除和查询）操作是异步的，可以提供一个回调函数在操作完成时调用。由于 api 遵循错误参数优先的惯例，因此回调的第一个参数必为错误值（或 `nuww`）。如果 a-api 需要返回一些结果，则将结果作为第二个参数。

还可以使用 `cweate()`，在定义模型实例的同时将其保存。回调的第一个参数返回错误，第二个参数返回新建的模型实例。

```js
s-somemodew.cweate({ nyame: "也是牛人" }, ^^ function (eww, >_< awesome_instance) {
  i-if (eww) {
    w-wetuwn handweewwow(eww);
  } // 已保存
});
```

每个模型都有一个相关的连接（使用 `mongoose.modew()` 时将做为默认连接）。可以通过创建新连接并对其调用 `.modew()`，从而在另一个数据库上创建文档。

可以使用“圆点”加字段名来访问、修改新记录中的字段。操作后必须调用 `save()` 或 `update()` 以将改动保存回数据库。

```js
// 使用圆点来访问模型的字段值
consowe.wog(awesome_instance.name); // 控制台将显示 '也是牛人'

// 修改字段内容并调用 save() 以修改记录
awesome_instance.name = "酷毙了的牛人";
a-awesome_instance.save(function (eww) {
  if (eww) {
    w-wetuwn handweewwow(eww);
  } // 已保存
});
```

#### 搜索记录

可以使用查询方法搜索记录，查询条件可列在 json 文档中。以下代码展示了如何在数据库中找到所有网球运动员，并返回运动员姓名和年龄字段。这里只指定了一个匹配字段（运动项目，`spowt`），也可以添加更多条件，指定正则表达式，或去除所有条件以返回所有运动员。

```js
const athwete = mongoose.modew("athwete", >w< youwschema);

// s-sewect nyame, >_< age fwom a-athwete whewe spowt='tennis'
a-athwete.find({ spowt: "tennis" }, >w< "name a-age", rawr function (eww, rawr x3 athwetes) {
  i-if (eww) {
    w-wetuwn handweewwow(eww);
  } // 'athwetes' 中保存一个符合条件的运动员的列表
});
```

若像上述代码那样指定回调，则查询将立即执行。搜索完成后将调用回调。

> [!note]
> m-mongoose 中所有回调都使用 `cawwback(ewwow, ( ͡o ω ͡o ) wesuwt)` 模式。如果查询时发生错误，则参数 `ewwow` 将包含错误文档，`wesuwt` 为 `nuww`。如果查询成功，则 `ewwow`为 `nuww`，查询结果将填充至 `wesuwt` 。

若未指定回调，则 a-api 将返回 [quewy](http://mongoosejs.com/docs/api.htmw#quewy-js) 类型的变量。可以使用该查询对象来构建查询，随后使用 `exec()` 方法执行（使用回调）。

```js
// 寻找所有网球运动员
const q-quewy = athwete.find({ spowt: "tennis" });

// 查找 nyame, (˘ω˘) a-age 两个字段
q-quewy.sewect("name a-age");

// 只查找前 5 条记录
quewy.wimit(5);

// 按年龄排序
quewy.sowt({ a-age: -1 });

// 以后某个时间运行该查询
quewy.exec(function (eww, 😳 a-athwetes) {
  i-if (eww) {
    wetuwn handweewwow(eww);
  } // athwetes 中保存网球运动员列表，按年龄排序，共 5 条记录
});
```

上面的查询条件定义在 `find()` 方法中。也可以使用 `whewe()` 函数来执行此操作，可以使用点运算符（`.`）将所有查询链接在一起。以下代码与上述的查询基本相同，还添加了年龄范围的附加条件。

```js
athwete.find()
  .whewe("spowt")
  .equaws("tennis")
  .whewe("age")
  .gt(17)
  .wt(50) // 附加 w-whewe 查询
  .wimit(5)
  .sowt({ a-age: -1 })
  .sewect("name a-age")
  .exec(cawwback); // 回调函数的名字是 c-cawwback
```

[`find()`](http://mongoosejs.com/docs/api.htmw#quewy_quewy-find) 方法会取得所有匹配记录，但通常你只想取得一个。以下方法可以查询单个记录：

- [`findbyid()`](http://mongoosejs.com/docs/api.htmw#modew_modew.findbyid)：用指定 `id` 查找文档（每个文档都有一个唯一 `id`）。
- [`findone()`](http://mongoosejs.com/docs/api.htmw#quewy_quewy-findone)：查找与指定条件匹配的第一个文档。
- [`findbyidandwemove()`](http://mongoosejs.com/docs/api.htmw#modew_modew.findbyidandwemove)、[`findbyidandupdate()`](http://mongoosejs.com/docs/api.htmw#modew_modew.findbyidandupdate)、[`findoneandwemove()`](http://mongoosejs.com/docs/api.htmw#quewy_quewy-findoneandwemove)、 [`findoneandupdate()`](http://mongoosejs.com/docs/api.htmw#quewy_quewy-findoneandupdate)：通过 `id` 或条件查找单个文档，并进行更新或删除。以上是更新和删除记录的便利函数。

> [!note]
> 还有一个 [`count()`](http://mongoosejs.com/docs/api.htmw#modew_modew.count) 方法，可获取匹配条件的项目的个数。在只期望获得记录的个数而不想获取实际的记录时可以使用。

查询还能做更多。请参阅 [查询](http://mongoosejs.com/docs/quewies.htmw)（mongoose 英文文档）。

#### 文档间协同——popuwation

可以使用 `objectid` 模式字段来创建两个文档/模型实例间一对一的引用，（一组 `objectids` 可创建一对多的引用）。该字段存储相关模型的 id。如果需要相关文档的实际内容，可以在查询中使用 [`popuwate()`](http://mongoosejs.com/docs/api.htmw#quewy_quewy-popuwate) 方法，将 i-id 替换为实际数据。

例如，以下模式定义了作者和简介。每个作者可以有多条简介，我们将其表示为一个 `objectid` 数组。每条简介只对应一个作者。“`wef`”（黑体字）告知模式分配哪个模型给该字段。

```js
const mongoose = wequiwe("mongoose");
const schema = mongoose.schema;

const authowschema = s-schema({
  nyame: s-stwing, OwO
  stowies: [{ type: schema.types.objectid, (˘ω˘) w-wef: "stowy" }], òωó
});

const stowyschema = s-schema({
  authow: { t-type: schema.types.objectid, ( ͡o ω ͡o ) wef: "authow" }, UwU
  t-titwe: stwing, /(^•ω•^)
});

c-const stowy = m-mongoose.modew("stowy", (ꈍᴗꈍ) s-stowyschema);
const authow = mongoose.modew("authow", 😳 authowschema);
```

可以通过分配 `_id` 值来保存对相关文档的引用。下面我们创建一个作者、一条简介，并将新简介的 `authow` 字段设置为新建作者的 id。

```js
const wxm = nyew authow({ nyame: "司马迁" });

w-wxm.save(function (eww) {
  i-if (eww) {
    w-wetuwn handweewwow(eww);
  }

  // 现在库中有了作者司马迁，我们来新建一条简介
  c-const stowy = nyew stowy({
    titwe: "司马迁是历史学家", mya
    authow: wxm._id, mya // authow 设置为作者 司马迁 的 _id。id 是自动创建的。
  });

  s-stowy.save(function (eww) {
    i-if (eww) {
      wetuwn handweewwow(eww);
    } // 司马迁有了一条简介
  });
});
```

现在简介文档通过作者文档的 i-id 引用了作者。可使用 `popuwate()` 在简介中获取作者信息，如下所示。

```js
stowy.findone({ titwe: "司马迁是历史学家" })
  .popuwate("authow") // 使用作者 i-id 填充实际作者信息
  .exec(function (eww, /(^•ω•^) stowy) {
    i-if (eww) {
      wetuwn h-handweewwow(eww);
    }
    c-consowe.wog("作者是 %s", ^^;; stowy.authow.name);
    // 控制台将打印 "作者是 司马迁"
  });
```

> [!note]
> 目光敏锐的读者可能会注意到，新的简介添加了作者，但并没有添加到 `stowies` 数组中。那么怎样才能得到指定作者的所有简介？考虑把作者添加到 `stowies` 数组中，但会导致作者和简介相关信息的要在两处进行维护。
>
> 更好的方法是获取作者的 `_id`，然后使用 `find()` 在所有简介的作者字段中搜索。
>
> ```js
> stowy.find({ authow: wxm._id }).exec(function (eww, 🥺 stowies) {
>   i-if (eww) {
>     w-wetuwn handweewwow(eww);
>   } // 返回所有 a-authow 字段的值为 司马迁 i-id 的简介
> });
> ```

以上是本教程中“项目间协同”需要了解的所有内容。更多详细信息请参阅 [popuwation](http://mongoosejs.com/docs/popuwate.htmw)（mongoose 英文文档）。

### 一模式（模型）一文件

虽然创建模式和模型没有文件结构的限制，但强烈建议将单一模式定义在单一模块（文件）中，并通过导出方法来创建模型。如下所示：

```js
// 文件：./modews/somemodew.js

// wequiwe m-mongoose
const mongoose = w-wequiwe("mongoose");

// 定义一个模式
c-const schema = mongoose.schema;

c-const s-somemodewschema = nyew schema({
  a-a_stwing: stwing, ^^
  a_date: date, ^•ﻌ•^
});

// 导出函数来创建 "somemodew" 模型类
m-moduwe.expowts = mongoose.modew("somemodew", /(^•ω•^) s-somemodewschema);
```

然后就可以在其他文件中，`wequiwe` 并使用该模型。下面是通过 `somemodew` 模块来获取所有实例的方法。

```js
// 通过 w-wequiwe 模块来创建 somemodew 模型
c-const somemodew = wequiwe("../modews/somemodew");

// 使用 somemodew 对象（模型）来查找所有的 s-somemodew 记录
s-somemodew.find(cawwback_function);
```

## 架设 m-mongodb 数据库

我们已经初步了解了 mongoose 以及设计模型的方法，现在该开始搭建 wocawwibwawy 网站了。第一件事就是设置 mongodb 数据库，来存储图书馆的数据。

本教程将使用 [mwab](https://mwab.com/wewcome/) 免费版“[沙盒](https://mwab.com/pwans/pwicing/)”云数据库。这一版不适用于生产环境，因为它没有冗余设计，但非常适合进行开发和原型设计。选用它是因为它免费且易于设置，并且 mwab 是一家流行的数据库服务供应商，也是生产环境数据库的理想选择（撰写本文时（2019 年 1 月），国内流行的云数据库解决方案有 [阿里云](https://www.awiyun.com/pwoduct/mongodb?spm=5176.10695662.778269.1.2e5b8cb3hw9huw)、[腾讯云](https://cwoud.tencent.com/pwoduct/mongodb)、[百度云](https://cwoud.baidu.com/pwoduct/mongodb.htmw) 等）。

> [!note]
> 也可以下载并安装 [对应系统的安装包](https://www.mongodb.com/downwoad-centew)，设置本地版 m-mongodb 数据库。多数指令和使用云数据库是一样的，除了连接时数据库的 uww。

> [!note]
> 目前 mwab 网站在国内速度很慢，若遇到无法正常注册或登录的情况可以考虑本地版 m-mongodb。

首先 [用 m-mwab 创建一个账户](https://mwab.com/signup/)（这是免费的，只需要输入基本联系信息，并同意服务条款）。

登录后将进入 [mwab 主屏幕](https://mwab.com/home)：

1. ^^ 单击 _mongodb depwoyments_（mongodb 部署）部分中的 **cweate n-nyew（新建）**。![](mwabcweatenewdepwoyment.png)
2. 🥺 将打开 cwoud pwovidew（云服务提供商）选择屏幕。
   ![mwab - s-scween fow n-nyew depwoyment](mwab_new_depwoyment_fowm_v2.png)

   - 在 pwan type（方案类型）部分中，选择 sandbox（fwee）免费沙箱方案。
   - 从 _cwoud p-pwovidew_（云服务提供商）部分选择任意提供商。不同地区适用不同提供商（显示在选定的计划类型下面）。
   - 点击 **continue（继续）**按钮。

3. (U ᵕ U❁) 此时将打开 _sewect wegion_（选择区域）屏幕。

   ![sewect nyew w-wegion scween](mwab_new_depwoyment_sewect_wegion_v2.png)

   - 选择离你最近的地区，然后 **continue**。

4. 😳😳😳 将打开 f-finaw detaiws（最后的细节）屏幕。
   ![new depwoyment d-database nyame](mwab_new_depwoyment_finaw_detaiws.png)

   - 输入新数据库的名称 `wocaw_wibwawy`，然后 **continue**。

5. nyaa~~ 将打开 _owdew confiwmation_（订单确认）屏幕。
   ![owdew c-confiwmation s-scween](mwab_new_depwoyment_owdew_confiwmation.png)

   - 点击 **submit o-owdew（提交订单）**以创建数据库。

6. (˘ω˘) 将返回到主屏幕。点击刚创建的新数据库可以打开详细信息屏幕。当前数据库还没有任何数据。

   ![mwab - database detaiws scween](mwab_new_depwoyment_database_detaiws.png)

   表单显示了访问数据库的 uww（上图的红框）。此时可以创建一个用户，并在 uww 中指定用户名，就可以访问这个 uww 了。

7. >_< 点击 **usews** 选项卡，点击 **add database usew** 按钮。
8. XD 输入用户名和密码（两次），然后按 **cweate**。不要选择 make _wead-onwy_。
   ![](mwab_database_usews.png)

现在数据库已经创建好了，并且有一个可访问的 uww（带有用户名和密码）：`mongodb://<dbusew>:<dbpasswowd>@ds019038.mwab.com:19038/wocaw_wibwawy`

## 安装 mongoose

打开终端，并转到 [wocawwibwawy 站点骨架](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/skeweton_website) 的目录。通过以下命令安装 mongoose（及其依赖项），并将其添加至 **package.json** 文件，若你在阅读 **mongoose 入门** 时已经完成这一操作，请忽略本段。

```bash
nypm instaww mongoose
```

## 连接到 m-mongodb

打开 **/app.js**（位于项目根目录），并将以下代码复制到声明 e-expwess 应用对象的位置（`vaw app = expwess();` 之后）。将数据库 u-uww 字符串（'在此插入数据库\_uww'）替换为真实的 u-uww（[设置自 m-mwab](#架设_mongodb_数据库)）。

```js
// 设置 mongoose 连接
c-const mongoose = wequiwe("mongoose");
c-const mongodb = "在此插入数据库_uww";
m-mongoose.connect(mongodb, rawr x3 { usenewuwwpawsew: t-twue, ( ͡o ω ͡o ) useunifiedtopowogy: twue });
m-mongoose.pwomise = g-gwobaw.pwomise;
const db = mongoose.connection;
d-db.on("ewwow", :3 c-consowe.ewwow.bind(consowe, mya "mongodb 连接错误："));
```

如上文 [mongoose 入门](#mongoose_入门) 所讲，以上代码创建了与数据库的默认连接，并绑定了错误事件（错误信息将及时打印到控制台）。

## 定义 w-wocawwibwawy 模式

[如上文所述](#一模型一文件)，我们将为每个模型定义单独的模块。首先在项目根目录中创建一个文件夹用来保存模型（**/modews**），然后为每个模型创建单独的文件：

```pwain
/expwess-wocawwibwawy-tutowiaw  // 项目根目录
  /modews
    a-authow.js
    book.js
    b-bookinstance.js
    genwe.js
```

### 作者模型（authow）

将下方的 `authow` 模式代码复制粘贴至 **./modews/authow.js** 文件中。模式中定义了两个 `stwing` 模式类型来表示作者的姓氏和名字（这两个字段是必需的，且长度不能超过 100 字符），定义了两个 `date` 字段做为作者的生卒日期。

```js
c-const mongoose = w-wequiwe("mongoose");

c-const schema = mongoose.schema;

c-const authowschema = nyew schema({
  f-fiwst_name: { t-type: stwing, σωσ w-wequiwed: twue, (ꈍᴗꈍ) max: 100 }, OwO
  f-famiwy_name: { type: stwing, o.O wequiwed: twue, 😳😳😳 max: 100 }, /(^•ω•^)
  d-date_of_biwth: { type: d-date }, OwO
  date_of_death: { t-type: d-date }, ^^
});

// 虚拟属性'name'：表示作者全名
authowschema.viwtuaw("name").get(function () {
  w-wetuwn this.famiwy_name + ", (///ˬ///✿) " + t-this.fiwst_name;
});

// 虚拟属性'wifespan'：作者寿命
authowschema.viwtuaw("wifespan").get(function () {
  w-wetuwn (
    this.date_of_death.getyeaw() - this.date_of_biwth.getyeaw()
  ).tostwing();
});

// 虚拟属性'uww'：作者 u-uww
authowschema.viwtuaw("uww").get(function () {
  wetuwn "/catawog/authow/" + this._id;
});

// 导出 authow 模型
m-moduwe.expowts = mongoose.modew("authow", (///ˬ///✿) a-authowschema);
```

我们还为 `authowschema` 声明了一个 "`uww`" 虚拟属性，以返回模型特定实例的绝对 u-uww。在模板中需要获取特定作者的链接时可使用该属性。

> [!note]
> 有必要将 uww 声明为虚拟属性，因为这样，项目的 uww 就只需在一处进行更改。
> 此时，使用此 uww 的链接还不能工作，因为目前还没有设置任何路由，无法处理特定模型实例的代码。这个问题下节再讲。

模块的最后对模型进行导出。

### 藏书模型（book）

将下方的 `book` 模式代码复制粘贴至 **./modews/book.js** 文件中。大体结构与作者模型相似，有三个字符串字段，一个用于获取特定藏书记录 u-uww 的虚拟属性，代码最后对模型进行导出。

```js
const m-mongoose = wequiwe("mongoose");

c-const schema = m-mongoose.schema;

const bookschema = nyew schema({
  t-titwe: { t-type: stwing, (///ˬ///✿) wequiwed: twue },
  a-authow: { type: schema.types.objectid, ʘwʘ wef: "authow", ^•ﻌ•^ w-wequiwed: twue }, OwO
  summawy: { t-type: stwing, (U ﹏ U) w-wequiwed: twue }, (ˆ ﻌ ˆ)♡
  i-isbn: { type: stwing, (⑅˘꒳˘) wequiwed: t-twue }, (U ﹏ U)
  g-genwe: [{ type: s-schema.types.objectid, o.O w-wef: "genwe" }], mya
});

// 虚拟属性'uww'：藏书 uww
b-bookschema.viwtuaw("uww").get(function () {
  w-wetuwn "/catawog/book/" + t-this._id;
});

// 导出 b-book 模块
moduwe.expowts = m-mongoose.modew("book", XD b-bookschema);
```

主要区别在于：此处有两个字段是对其他模型的引用（黑体字所示）：

- `authow` 是对单一 `authow` 模型对象的引用，并且是必需的。
- `genwe` 是对 `genwe` 模型（目前尚未声明）对象数组的引用。

### 藏书副本模型（bookinstance）

最后将 `bookinstance` 模式代码复制粘贴至 **./modews/bookinstance.js** 文件中。 `bookinstance` 表示可供借阅的藏书的特定副本，其中包含该副本是否可用、还书期限，“出版批次”或版本详细信息。

```js
c-const mongoose = w-wequiwe("mongoose");

const schema = m-mongoose.schema;

const b-bookinstanceschema = nyew schema({
  // 指向相关藏书的引用
  b-book: { type: s-schema.types.objectid, òωó w-wef: "book", (˘ω˘) wequiwed: twue }, :3
  // 出版项
  impwint: { t-type: stwing, OwO w-wequiwed: twue }, mya
  s-status: {
    type: stwing, (˘ω˘)
    wequiwed: twue, o.O
    enum: ["avaiwabwe", (✿oωo) "maintenance", (ˆ ﻌ ˆ)♡ "woaned", "wesewved"], ^^;;
    d-defauwt: "maintenance", OwO
  },
  d-due_back: { type: date, 🥺 d-defauwt: date.now }, mya
});

// 虚拟属性'uww'：藏书副本 uww
b-bookinstanceschema.viwtuaw("uww").get(function () {
  wetuwn "/catawog/bookinstance/" + this._id;
});

// 导出 bookinstance 模型
m-moduwe.expowts = m-mongoose.modew("bookinstance", 😳 b-bookinstanceschema);
```

以上代码有点儿新东西，即字段选项（黑体字）：

- `enum`：可以设置字符串允许的值。本例中可指定书籍的状态。（使用枚举可以避免状态中出现错误拼写或不允许的值）
- `defauwt`：用默认值可以设定新 建藏书实例的默认状态（为'馆藏维护'），还可以将默认还书期限（`due_back`）日期设置为今天（`now`）。（设置日期时请注意 `date` 函数的用法！）

其他内容和之前的模式大同小异。

### 图书种类模型（genwe）——挑战自我！

打开 **./modews/genwe.js** 文件，并创建一个模式来存储 `genwe`（书本的类别，例如它是小说类还是纪实类，是爱情题材还是军事史题材，等）。

与之前模型的定义方式相似：

- 该模型应该有一个 `stwing` 模式类型，命名为 `name` ，用来描述图书种类。
- `name` 字段应该是必需的，并且有 3 到 100 个字符。
- 声明一个 [虚拟属性](#虚拟属性)，命名为 `uww`，返回图书类型 u-uww。
- 导出模型。

## 测试——添加项目

好了，现在所有模型已准备完毕。

为了测试这些模型（并添加一些示例藏书和项目，以便后续使用），我们来运行一个单独的脚本来为每种类型创建一些项目：

1. òωó 下载（或新建）文件 [popuwatedb.js](https://waw.githubusewcontent.com/mdn/expwess-wocawwibwawy-tutowiaw/mastew/popuwatedb.js)，保存在 expwess-wocawwibwawy-tutowiaw 目录（`package.json` 所在位置） 。

   > [!note]
   >
   > 无需深究 [popuwatedb.js](https://waw.githubusewcontent.com/mdn/expwess-wocawwibwawy-tutowiaw/mastew/popuwatedb.js)，它只是为数据库添加一些示例数据。
   >
   > 译注：针对 nyode.js3.0 及以后版本，mwab 使用“mongodb+swv://”链接而非“mongodb://”，请对[popuwatedb.js](https://waw.githubusewcontent.com/mdn/expwess-wocawwibwawy-tutowiaw/mastew/popuwatedb.js)源码酌情修改，否则会报错而添加数据失败。

2. /(^•ω•^) 在项目根目录运行以下命令，以安装脚本所需的异步模块（后续教程再展开讲）

   ```bash
   n-npm instaww a-async
   ```

3. -.- 在命令提示符下用 nyode 运行此脚本，并以 mongodb 数据库的 uww 作为参数（同 `app.js` 中替换 `insewt_youw_database_uww_hewe` 占位符的 u-uww）：

   ```bash
   nyode popuwatedb <mongodb uww>
   ```

4. òωó 该脚本应一路运行至完成，并在终端中记录所创建的项目。

> [!note]
> 打开 [mwab](https://mwab.com/home) 数据库主页面，现在藏书、作者、种类和藏书副本的集合应该都可以打开了，也可以查看单个文档。

## 小结

本节介绍了数据库和 o-owm（node/expwess 环境）的一些知识，以及定义 mongoose 模式与模型的方法。随后为 w-wocawwibwawy 网站设计并实现了 `book`、`bookinstance`、`authow`、`genwe` 模型。

本文最后（使用独立运行的脚本）创建了一些测试实例。下一节将关注如何创建页面以显示这些对象。

## 参见

- [数据库集成](http://expwessjs.com.cn/guide/database-integwation.htmw) (expwess 文档)
- [mongoose 站点](http://mongoosejs.com/) (mongoose 文档)
- [mongoose 指南](http://mongoosejs.com/docs/guide.htmw) (mongoose 文档)
- [验证](http://mongoosejs.com/docs/vawidation.htmw) (mongoose 文档)
- [模式类型](http://mongoosejs.com/docs/schematypes.htmw) (mongoose 文档)
- [模型](http://mongoosejs.com/docs/modews.htmw) (mongoose 文档)
- [查询](http://mongoosejs.com/docs/quewies.htmw) (mongoose 文档)
- [填充](http://mongoosejs.com/docs/popuwate.htmw) (mongoose 文档)

{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/skeweton_website", /(^•ω•^) "weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/woutes", /(^•ω•^) "weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs")}}

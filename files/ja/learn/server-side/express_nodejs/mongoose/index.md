---
title: "Express チュートリアル Part 3: データベースの使用 (Mongoose を使用)"
slug: Learn/Server-side/Express_Nodejs/mongoose
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/skeleton_website", "Learn/Server-side/Express_Nodejs/routes", "Learn/Server-side/Express_Nodejs")}}

この記事ではデータベースと、それらを Node/Express アプリケーションで使用する方法について簡単に紹介します。続いて、[Mongoose](https://mongoosejs.com/) を使用して[地域図書館](/ja/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website) Web サイトへのデータベースアクセスを提供する方法を説明します。 オブジェクトスキーマとモデルの宣言方法、主なフィールドタイプ、および基本的な検証について説明します。また、モデルデータにアクセスするための主な方法についても簡単に説明します。

| 前提条件: | [Express チュートリアル Part 2: スケルトン Web サイトの作成](/ja/docs/Learn/Server-side/Express_Nodejs/skeleton_website) |
| --------- | ------------------------------------------------------------------------------------------------------------------------ |
| 目標:     | Mongoose を使用して独自のモデルを設計および作成できるようになる。                                                        |

## 概要

図書館職員は本と借り手についての情報を保存するためにローカルライブラリ Web サイトを使いますが、図書館員は本をブラウズして検索し、利用可能なコピーがあるかどうかを調べ、そしてそれらを予約または借りるために使います。情報を効率的に保存および取得するために、データベースに保存します。

Express アプリケーションはさまざまなデータベースを使用できます。作成、読み取り、更新、削除 (CRUD) 操作を実行するために使用できるいくつかのアプローチがあります。 このチュートリアルではいくつかの利用可能なオプションの簡単な概要を説明し、次に選択された特定のメカニズムを詳細に表示します。

### どのデータベースを使用できますか？

Express アプリは Node でサポートされている任意のデータベースを使用できます (Express 自体はデータベース管理のための特定の追加の動作や要件を定義していません)。 PostgreSQL、MySQL、Redis、SQLite、MongoDB など、[多くの一般的なオプション](https://expressjs.com/en/guide/database-integration.html)があります。

データベースを選択するときは、生産性/学習時間の曲線、パフォーマンス、複製/バックアップの容易さ、コスト、コミュニティサポートなどのことを考慮する必要があります。「最高の」データベースは 1 つもありませんが、ほとんどの一般的なソリューションは、ローカルライブラリのような中小規模のサイトでは十分条件を満たしているはずです。

オプションの詳細については、[データベース統合](https://expressjs.com/ja/guide/database-integration.html) (Express ドキュメント) を参照してください。

### データベースを利用するための最良の方法は何ですか？

データベースにインタラクティブにアプローチするには 2 つの方法があります。

- データベースのネイティブクエリ言語 (例：SQL)を使用する
- オブジェクトデータモデル ("ODM")／オブジェクトリレーショナルモデル ("ORM") を使用する。ODM/ORM は Web サイトのデータを JavaScript オブジェクトとして表し、それが基になるデータベースにマッピングされます。一部の ORM は特定のデータベースに関連付けられていますが、他のデータベースはデータベースに依存しないバックエンドを提供しています

SQL、またはデータベースでサポートされているクエリ言語を使用すると、最高のパフォーマンスが得られます。ODM は、変換コードを使用してオブジェクトとデータベース形式の間のマッピングを行うため、処理が遅くなることが多く、最も効率的なデータベースクエリが使用されない可能性があります (これは、ODM がさまざまなデータベースバックエンドをサポートしている場合に特に当てはまります。サポートされているデータベース機能に関して、さらに妥協する必要があります)。

ORM を使用する利点は、プログラマがデータベースのセマンティクスではなく JavaScript オブジェクトの観点から考え続けることができることです。これは、同じデータベースまたは異なる Web サイトで異なるデータベースを扱う必要がある場合に特に当てはまります。またデータの検証とチェックを実行するための明らかな場所を提供します。

> **メモ:** **Tip:** ODM/ORM を使用すると、多くの場合、開発と保守のコストが削減されます。ネイティブのクエリ言語に精通しているかパフォーマンスが最優先であるのでなければ、ODM の使用を積極的に検討するべきです。

### どの ORM/ODM を使うべきですか？

NPM パッケージマネージャのサイトには、多数の ODM/ORM ソリューションがあります (サブセットの [odm](https://www.npmjs.com/browse/keyword/odm) タグおよび [orm](https://www.npmjs.com/browse/keyword/orm) タグを調べてください)。

執筆時点で一般的だったいくつかの解決策は、次のとおりです。

- [Mongoose](https://www.npmjs.com/package/mongoose): Mongoose は、非同期環境で動作するように設計された [MongoDB](https://www.mongodb.org/) オブジェクトモデリングツールです
- [Waterline](https://www.npmjs.com/package/waterline): Express ベースの [Sails](http://sailsjs.com/) Web フレームワークから抽出された ORM。Redis、MySQL、LDAP、MongoDB、Postgres など、さまざまなデータベースにアクセスするための統一された API を提供します
- [Bookshelf](https://www.npmjs.com/package/bookshelf): Promise ベースおよび従来の callback インターフェイスの両方を備え、トランザクションのサポート、熱心な/入れ子になったリレーションの読み込み、多態的な関連付け、および 1 対 1、1 対多、および多対多のリレーションのサポートを提供します。PostgreSQL、MySQL、および SQLite3 で動作します
- [Objection](https://www.npmjs.com/package/objection): SQL とその基盤となるデータベースエンジン (SQLite 3、Postgres、および MySQL をサポート) の全機能を使用することを可能な限り簡単にします
- [Sequelize](https://www.npmjs.com/package/sequelize) は Node.js と io.js のための Promise ベースの ORM です。PostgreSQL、MySQL、MariaDB、SQLite、および MSSQL のダイアレクトをサポートし、堅実なトランザクションサポート、リレーション、リードレプリケーションなどを備えています
- [Node ORM2](https://node-orm.readthedocs.io/en/latest/) は NodeJS のオブジェクトリレーションマネージャです。MySQL、SQLite、Progres をサポートし、オブジェクト指向のアプローチを使用してデータベースを操作するのを助けます
- [JugglingDB](http://1602.github.io/jugglingdb/) は NodeJS 用のクロス DB ORM で、最も一般的なデータベースフォーマットにアクセスするための共通インターフェイスを提供します。現在 MySQL、SQLite3、Postgres、MongoDB、Redis および js-memory-storage をサポートしています (テスト用の自己記述エンジンのみ)

原則として、解決策を選択する際には、提供されている機能と "コミュニティ活動" (ダウンロード、コントリビュート、バグレポート、ドキュメントの品質など) の両方を考慮する必要があります。この記事を書いている時点では、Mongoose は最も人気のある ODM であり、データベースに MongoDB を使用している場合は妥当な選択です。

### ローカルライブラリに Mongoose と MongoDB を使用する

ローカルライブラリの例 (およびこのトピックの残りの部分) では、[Mongoose ODM](https://www.npmjs.com/package/mongoose) を使用してライブラリデータにアクセスします。Mongoose は、ドキュメント指向のデータモデルを使用するオープンソースの [NoSQL](https://en.wikipedia.org/wiki/NoSQL) データベースである [MongoDB](https://www.mongodb.com/what-is-mongodb) のフロントエンドとして機能します。MongoDB データベースの "ドキュメント" の "コレクション" は、リレーショナルデータベースの "行" の "テーブル" [に似ています](https://docs.mongodb.com/manual/core/databases-and-collections/#collections)。

この ODM とデータベースの組み合わせは、Node コミュニティで非常に人気があります。これは、ドキュメントの保存とクエリのシステムが JSON に非常に似ているため、JavaScript 開発者にはよく知られているためです。

> **メモ:** **Tip:** Mongoose を使用するために MongoDB を知っている必要はありませんが、[Mongoose のドキュメント](http://mongoosejs.com/docs/guide.html)の一部は、MongoDB に慣れている方が使いやすく理解しやすいものです。

このチュートリアルの残りの部分では、[ローカルライブラリ Web サイト](/ja/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website)の例の Mongoose スキーマとモデルを定義してアクセスする方法を示します。

## ローカルライブラリモデルの設計

いきなりモデルのコーディングを始める前に、格納する必要があるデータと、さまざまなオブジェクト間の関係について検討することをお勧めします。

書籍に関する情報 (タイトル、概要、著者、ジャンル、ISBN) を保存する必要があること、および複数のコピーが利用可能であること (グローバルに一意の ID、利用状況など) があることを知っています。著者の名前だけではなく、著者に関するより多くの情報を格納する必要があるかもしれません。また、同じ名前または類似の名前を持つ著者が複数いる可能性があります。書籍のタイトル、著者、ジャンル、およびカテゴリに基づいて情報を並べ替えることができるようにします。

モデルを設計するときは、すべての "オブジェクト" (関連情報のグループ) ごとに別々のモデルを用意するのが合理的です。 この場合、明らかなオブジェクトは本、本のインスタンス、および作者です。

Web サイト自体に選択肢をハードコーディングするのではなく、モデルを使用して選択肢の選択肢 (たとえば選択肢のドロップダウンリストなど) を表すこともできます - すべてのオプションが事前にわかっていない場合や変更される可能性がある場合は、これをお勧めします。このタイプのモデルの明らかな候補は本のジャンルです (例：サイエンスフィクション、フランス詩など)。

モデルとフィールドを決めたら、それらの関係について考える必要があります。

そのことを念頭に置いて、以下の UML 関連図は、この場合に定義するモデルを (ボックスとして) 示しています。上記で説明したように、本のモデル (本の一般的な詳細)、本のインスタンス (システムで利用可能な本の特定の物理コピーのステータス)、および作成者のモデルを作成しました。また、値を動的に作成できるように、ジャンルのモデルを用意することにしました。`BookInstance:status` のモデルを使用しないことにしました - 許容値は変更しないと考えられるので、許容値をハードコードします。各ボックス内には、モデル名、フィールド名と型、そしてメソッドとその戻り型が表示されます。

この図には、モデル間の関係 (それらの多重度も含む) も示されています。多重度は、関係内に存在する可能性がある各モデルの番号 (最大および最小) を示す図上の番号です。たとえば、ボックス間の接続線は、`Book` と `Genre` が関連していることを示しています。`Book` モデルに近い数字は、ジャンルに 0 個以上の Book がある必要があることを示しており、線のもう一方の端にある`Genre` の隣の数字は、本に 0 個以上の関連する`Genre`があることを示しています。

> **メモ:** 下記の Mongoose 入門書で説明されているように、1 つのモデルだけで documents/models 間の関係を定義するフィールドがあるほうがよいでしょう (他のモデルで関連する `_id` を検索することによって逆の関係を見つけることができます)。以下では、Book スキーマの Book/Genre と Book/Author の関係、および BookInstance スキーマの Book/BookInstance の関係を定義します。この選択は多少恣意的でした - 他のスキーマでも同じようにフィールドを持つことができました。

![Mongoose Library Model with correct cardinality](Library%20Website%20-%20Mongoose_Express.png)

> **メモ:** 次のセクションでは、モデルの定義方法と使用方法を説明する基本的な入門書を提供します。お読みになったところで、上の図の各モデルをどのように構築するかを検討してください。

## Mongoose 入門書

このセクションでは、Mongoose を MongoDB データベースに接続する方法、スキーマとモデルを定義する方法、そして基本的なクエリを作成する方法の概要を説明します。

> **メモ:** この入門書は、npm の [Mongoose クイックスタート](https://www.npmjs.com/package/mongoose)と[公式ドキュメント](http://mongoosejs.com/docs/guide.html)に "大きく影響を受けています"。

### Mongoose と MongoDB のインストール

Mongoose は他の依存関係と同じようにあなたのプロジェクト (**package.json**) にインストールされます。つまり NPM を使用します。インストールするには、プロジェクトフォルダ内で次のコマンドを使用します。

```bash
npm install mongoose
```

Mongoose をインストールすると、MongoDB データベースドライバを含むすべての依存関係が追加されますが、MongoDB 自体はインストールされません。 MongoDB サーバをインストールする場合は、さまざまな OS 用の[インストーラをここからダウンロード](https://www.mongodb.com/download-center)してローカルにインストールできます。クラウドベースの MongoDB インスタンスを使用することもできます。

> **メモ:** このチュートリアルでは、mLab クラウドベースの Database as a Service [サンドボックス層](https://mlab.com/plans/pricing/)として使用してデータベースを提供します。これは開発に適しており、オペレーティングシステムの "インストール" に依存しないため (database-as-a-service も本番データベースに使用することができる 1 つのアプローチです)、チュートリアルに適しています。

### MongoDB への接続

Mongoose は MongoDB データベースへの接続を必要とします。以下のように、`require()` して `mongoose.connect()` でローカルにホストされているデータベースに接続することができます。

```js
//Import the mongoose module
var mongoose = require("mongoose");

//Set up default mongoose connection
var mongoDB = "mongodb://127.0.0.1/my_database";
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
```

デフォルトの `Connection` オブジェクトは `mongoose.connection` で取得できます。接続されると、open イベントが `Connection` インスタンスで発生します。

> **メモ:** **Tip:** 追加のコネクションを作成する必要がある場合は、`mongoose.createConnection()` を使用できます。 これは `connect()` と同じ形式のデータベース URI (ホスト、データベース、ポート、オプションなど) を取り、`Connection` オブジェクトを返します。

### モデルの定義と作成

モデルは `Schema` インターフェイスを使用して定義されます。スキーマを使用すると、各ドキュメントに格納されているフィールドとその検証要件およびデフォルト値を定義できます。さらに、データ型や他のフィールドと同じように使用できるが実際にはデータベースに格納されていない仮想プロパティも扱いやすいように、静的メソッドおよびインスタンスヘルパーメソッドを定義できます。(もう少し後で説明します)。

その後、スキーマは `mongoose.model()` メソッドを使用してモデルに "コンパイル" されます。モデルを作成したら、それを使用して特定のタイプのオブジェクトを検索、作成、更新、および削除できます。

> **メモ:** 各モデルは MongoDB データベース内のドキュメントのコレクションにマップされます。ドキュメントはモデル `Schema` で定義されたフィールド/スキーマタイプを含みます。

#### スキーマの定義

以下のコードは、単純なスキーマを定義する方法を示しています。最初に mongoose を `require()` し、次に Schema コンストラクタを使用して新しいスキーマインスタンスを作成し、コンストラクタの object パラメータで内部のさまざまなフィールドを定義します。

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

上記の場合、文字列と日付の 2 つのフィールドしかありません。次のセクションでは、他のフィールドタイプ、検証、その他の方法について説明します。

#### モデルを作成する

モデルは、`mongoose.model()` メソッドを使用してスキーマから作成されます。

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

最初の引数はあなたのモデル用に作成されるコレクションの単数形の名前です (Mongoose は上記の SomeModel モデル用のデータベースコレクションを作成します)、そして 2 番目の引数はモデルの作成に使用したいスキーマです。

> **メモ:** モデルクラスを定義したら、それらを使用してレコードを作成、更新、または削除し、クエリを実行してすべてのレコードまたは特定のレコードのサブセットを取得できます。これを行う方法をモデルの使用セクションで、そしてビューを作成するときに示します。

#### スキーマ型 (フィールド)

スキーマには任意の数のフィールドを含めることができます。各フィールドは MongoDB に格納されているドキュメント内のフィールドを表します。一般的なフィールド型の多くとその宣言方法を示すスキーマの例を以下に示します。

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
  ofString: [String], // 他の型でも配列にすることができます。
  nested: { stuff: { type: String, lowercase: true, trim: true } },
});
```

ほとんどのスキーム型("type:"やフィールド名で記述されるもの)はその名のとおりです。例外は以下のようなものがあります:

- `ObjectId`: データベースのモデルを示すインスタンスです。例えば、本は著者オブジェクトを示すためにこれを使います。一つ一つにはユニークな ID (`_id`) が割り当てられています。必要があれば`populate()`メソッドで関連情報を呼び出すことができます。
- [Mixed](http://mongoosejs.com/docs/schematypes.html#mixed): 任意のスキーム型。
- \[]: 項目の配列。このモデルには JavaScript の配列オペレーション(push, pop, unshift, その他。)をオペレートすることができます。上記の例は特別な型なしに`String`オブジェクトの配列を示しています。また、他の型のオブジェクトに対しても配列で持つことはできます。

このコードはフィールドを宣言する 2 つのやり方も示しています:

- フィールドの*name* と *type*を key-value ペアのように書く (例えば `name`, `binary`, `living` のように）.
- `type`定義するオブジェクトが続くフィールド名、およびフィールドの他のオプション。オプションには次のようなものがあります:

  - 初期値.
  - ビルドインのバリデータ (例えば最大値/最小値) それからカスタマイズしたバリデーション機能.
  - そのヒールドが必須かどうか
  - `String` のフィールドは自動的に大文字か、小文字にするか、前後の空白を取り除く（trim）するか？ (例えば:`{ type: String, lowercase: true, trim: true }`)記載することができる）

もっとオプションについて見たいなら[SchemaTypes](http://mongoosejs.com/docs/schematypes.html) (Mongoose docs)を見てみてください.

#### バリデーション

Mongoose はビルドインもしくはカスマイズしたバリデータや同期的もしくは非同期的なバリデータを提供しています。 バリデータはすべての場合において、許容範囲または値と検証失敗のエラーメッセージの両方を指定できます。

ビルドインのバリデータには:

- すべての [SchemaTypes](http://mongoosejs.com/docs/schematypes.html) に [required](http://mongoosejs.com/docs/api.html#schematype_SchemaType-required) があります。 これはドキュメントを保存するために必要なフィールドを指定するために使われます。
- [Numbers](http://mongoosejs.com/docs/api.html#schema-number-js) に [min](http://mongoosejs.com/docs/api.html#schema_number_SchemaNumber-min)（最小値を指定） と [max](http://mongoosejs.com/docs/api.html#schema_number_SchemaNumber-max)（最大値を指定） バリデータがあります。
- [Strings](http://mongoosejs.com/docs/api.html#schema-string-js) には以下のバリデータがあります:

  - [enum](http://mongoosejs.com/docs/api.html#schema_string_SchemaString-enum): フィールドに利用可能な値の配列を指定します。
  - [match](http://mongoosejs.com/docs/api.html#schema_string_SchemaString-match): マッチさせる正規表現を指定します。
  - [maxlength](http://mongoosejs.com/docs/api.html#schema_string_SchemaString-maxlength) と [minlength](http://mongoosejs.com/docs/api.html#schema_string_SchemaString-minlength): 文字数の最大値と最小値を指定します。

以下の例（Mongoose ドキュメントから少し変更しています）では、いくつかのバリデータタイプとエラーメッセージを指定する方法を示しています:

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

詳しくは [Validation](http://mongoosejs.com/docs/validation.html) (Mongoose docs) を見てみてください。

#### Virtual properties

Virtual properties are document properties that you can get and set but that do not get persisted to MongoDB. The getters are useful for formatting or combining fields, while setters are useful for de-composing a single value into multiple values for storage. The example in the documentation constructs (and deconstructs) a full name virtual property from a first and last name field, which is easier and cleaner than constructing a full name every time one is used in a template.

> **メモ:** We will use a virtual property in the library to define a unique URL for each model record using a path and the record's `_id` value.

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

#### Searching for records

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

> **メモ:** All callbacks in Mongoose use the pattern `callback(error, result)`. If an error occurs executing the query, the `error` parameter will contain an error document and `result` will be null. If the query is successful, the `error` parameter will be null, and the `result` will be populated with the results of the query.

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

> **メモ:** There is also a [`count()`](http://mongoosejs.com/docs/api.html#model_Model.count) method that you can use to get the number of items that match conditions. This is useful if you want to perform a count without actually fetching the records.

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

> **メモ:** Astute readers will have noted that we added an author to our story, but we didn't do anything to add our story to our author's `stories` array. How then can we get all stories by a particular author? One way would be to add our author to the stories array, but this would result in us having two places where the information relating authors and stories needs to be maintained.
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

## Setting up the MongoDB database

Now that we understand something of what Mongoose can do and how we want to design our models, it's time to start work on the _LocalLibrary_ website. The very first thing we want to do is set up a MongoDb database that we can use to store our library data.

For this tutorial, we're going to use [mLab](https://mlab.com/welcome/)'s free cloud-hosted "[sandbox](https://mlab.com/plans/pricing/)" database. This database tier is not considered suitable for production websites because it has no redundancy, but it is great for development and prototyping. We're using it here because it is free and easy to set up, and because mLab is a popular _database as a service_ vendor that you might reasonably choose for your production database (other popular choices at the time of writing include [Compose](https://www.compose.com/), [ScaleGrid](https://scalegrid.io/pricing.html) and [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)).

> **メモ:** If you prefer you can set up a MongoDb database locally by downloading and installing the [appropriate binaries for your system](https://www.mongodb.com/download-center). The rest of the instructions in this article would be similar, except for the database URL you would specify when connecting.

You will first need to [create an account](https://mlab.com/signup/) with mLab (this is free, and just requires that you enter basic contact details and acknowledge their terms of service).

After logging in, you'll be taken to the [home](https://mlab.com/home) screen:

1. Click **Create New** in the _MongoDB Deployments_ section.![](mLabCreateNewDeployment.png)
2. This will open the _Cloud Provider Selection_ screen.
   ![MLab - screen for new deployment](mLab_new_deployment_form_v2.png)

   - Select the SANDBOX (Free) plan from the Plan Type section.
   - Select any provider from the _Cloud Provider_ section. Different providers offer different regions (displayed below the selected plan type).
   - Click the **Continue** button.

3. This will open the _Select Region_ screen.

   ![Select new region screen](mLab_new_deployment_select_region_v2.png)

   - Select the region closest to you and then **Continue**.

4. This will open the _Final Details_ screen.
   ![New deployment database name](mLab_new_deployment_final_details.png)

   - Enter the name for the new database as `local_library` and then select **Continue**.

5. This will open the _Order Confirmation_ screen.
   ![Order confirmation screen](mLab_new_deployment_order_confirmation.png)

   - Click **Submit Order** to create the database.

6. You will be returned to the home screen. Click on the new database you just created to open its details screen. As you can see the database has no collections (data).
   ![mLab - Database details screen](mLab_new_deployment_database_details.png)

   The URL that you need to use to access your database is displayed on the form above (shown for this database circled above). In order to use this you need to create a database user that you can specify in the URL.

7. Click the **Users** tab and select the **Add database user** button.
8. Enter a username and password (twice), and then press **Create**. Do not select _Make read only_.
   ![](mLab_database_users.png)

You have now created the database, and have an URL (with username and password) that can be used to access it. This will look something like: `mongodb://your_user_namer:your_password@ds119748.mlab.com:19748/local_library`.

## Install Mongoose

Open a command prompt and navigate to the directory where you created your [skeleton Local Library website](/ja/docs/Learn/Server-side/Express_Nodejs/skeleton_website). Enter the following command to install Mongoose (and its dependencies) and add it to your **package.json** file, unless you have already done so when reading the [Mongoose Primer](#Installing_Mongoose_and_MongoDB) above.

```bash
npm install mongoose
```

## Connect to MongoDB

Open **/app.js** (in the root of your project) and copy the following text below where you declare the _Express application object_ (after the line `var app = express();`). Replace the database url string ('_insert_your_database_url_here_') with the location URL representing your own database (i.e. using the information [from mLab](#Setting_up_the_MongoDB_database)).

```js
//Set up mongoose connection
var mongoose = require("mongoose");
var mongoDB = "insert_your_database_url_here";
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
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

> **メモ:** Declaring our URLs as a virtual in the schema is a good idea because then the URL for an item only ever needs to be changed in one place.
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

## Testing — create some items

That's it. We now have all models for the site set up!

In order to test the models (and to create some example books and other items that we can use in our next articles) we'll now run an _independent_ script to create items of each type:

1. Download (or otherwise create) the file [populatedb.js](https://raw.githubusercontent.com/hamishwillee/express-locallibrary-tutorial/master/populatedb.js) inside your _express-locallibrary-tutorial_ directory (in the same level as `package.json`).

   > **メモ:** You don't need to know how [populatedb.js](https://raw.githubusercontent.com/hamishwillee/express-locallibrary-tutorial/master/populatedb.js) works; it just adds sample data into the database.

2. Enter the following commands in the project root to install the _async_ module that is required by the script (we'll discuss this in later tutorials, )

   ```bash
   npm install async
   ```

3. Run the script using node in your command prompt, passing in the URL of your _MongoDB_ database (the same one you replaced the _insert_your_database_url_here_ placeholder with, inside `app.js` earlier):

   ```bash
   node populatedb <your mongodb url>
   ```

4. The script should run through to completion, displaying items as it creates them in the terminal.

> **メモ:** **Tip:** Go to your database on [mLab](https://mlab.com/home). You should now be able to drill down into individual collections of Books, Authors, Genres and BookInstances, and check out individual documents.

## まとめ

この記事では、Node/Express 上のデータベースと ORM について、また Mongoose のスキーマとモデルの定義方法について多くのことを学びました。次に、この情報を使用して、ローカルライブラリ Web サイト用の `Book`、`BookInstance`、`Author`、および `Genre` を設計および実装しました。

最後に、(スタンドアロンスクリプトを使用して) 多数のインスタンスを作成することによってモデルをテストしました。次の記事では、これらのオブジェクトを表示するためのページの作成について見ていきます。

## あわせて参照

- [Database integration](https://expressjs.com/en/guide/database-integration.html) (Express ドキュメント)
- [Mongoose website](http://mongoosejs.com/) (Mongoose ドキュメント)
- [Mongoose Guide](http://mongoosejs.com/docs/guide.html) (Mongoose ドキュメント)
- [Validation](http://mongoosejs.com/docs/validation.html) (Mongoose ドキュメント)
- [Schema Types](http://mongoosejs.com/docs/schematypes.html) (Mongoose ドキュメント)
- [Models](http://mongoosejs.com/docs/models.html) (Mongoose ドキュメント)
- [Queries](http://mongoosejs.com/docs/queries.html) (Mongoose ドキュメント)
- [Population](http://mongoosejs.com/docs/populate.html) (Mongoose ドキュメント)

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/skeleton_website", "Learn/Server-side/Express_Nodejs/routes", "Learn/Server-side/Express_Nodejs")}}

---
titwe: "expwess チュートリアル pawt 3: データベースの使用 (mongoose を使用)"
s-swug: weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/mongoose
o-owiginaw_swug: w-weawn/sewvew-side/expwess_nodejs/mongoose
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/expwess_nodejs/skeweton_website", mya "weawn/sewvew-side/expwess_nodejs/woutes", ^•ﻌ•^ "weawn/sewvew-side/expwess_nodejs")}}

この記事ではデータベースと、それらを n-nyode/expwess アプリケーションで使用する方法について簡単に紹介します。続いて、[mongoose](https://mongoosejs.com/) を使用して[地域図書館](/ja/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/tutowiaw_wocaw_wibwawy_website)ウェブサイトへのデータベースアクセスを提供する方法を説明します。 オブジェクトスキーマとモデルの宣言方法、主なフィールドタイプ、および基本的な検証について説明します。また、モデルデータにアクセスするための主な方法についても簡単に説明します。

| 前提条件: | [expwess チュートリアル p-pawt 2: スケルトンウェブサイトの作成](/ja/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/skeweton_website) |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 目標:     | mongoose を使用して独自のモデルを設計および作成できるようになる。                                                                                    |

## 概要

図書館職員は本と借り手についての情報を保存するためにローカルライブラリーウェブサイトを使いますが、図書館員は本をブラウズして検索し、利用可能なコピーがあるかどうかを調べ、そしてそれらを予約または借りるために使います。情報を効率的に保存および取得するために、データベースに保存します。

e-expwess アプリケーションはさまざまなデータベースを使用できます。作成、読み取り、更新、削除 (cwud) 操作を実行するために使用できるいくつかのアプローチがあります。 このチュートリアルではいくつかの利用可能なオプションの簡単な概要を説明し、次に選択された特定のメカニズムを詳細に表示します。

### どのデータベースを使用できますか？

e-expwess アプリは n-nyode でサポートされている任意のデータベースを使用できます (expwess 自体はデータベース管理のための特定の追加の動作や要件を定義していません)。 postgwesqw、mysqw、wedis、sqwite、mongodb など、[多くの一般的なオプション](https://expwessjs.com/en/guide/database-integwation.htmw)があります。

データベースを選択するときは、生産性/学習時間の曲線、パフォーマンス、複製/バックアップの容易さ、コスト、コミュニティサポートなどのことを考慮する必要があります。「最高の」データベースは 1 つもありませんが、ほとんどの一般的なソリューションは、ローカルライブラリーのような中小規模のサイトでは十分条件を満たしているはずです。

オプションの詳細については、[データベース統合](https://expwessjs.com/ja/guide/database-integwation.htmw) (expwess ドキュメント) を参照してください。

### データベースを利用するための最良の方法は何ですか？

データベースにインタラクティブにアプローチするには 2 つの方法があります。

- データベースのネイティブクエリー言語 (例：sqw)を使用する
- オブジェクトデータモデル ("odm")／オブジェクトリレーショナルモデル ("owm") を使用する。odm/owm はウェブサイトのデータを javascwipt オブジェクトとして表し、それが基になるデータベースにマッピングされます。一部の owm は特定のデータベースに関連付けられていますが、他のデータベースはデータベースに依存しないバックエンドを提供しています

sqw、またはデータベースでサポートされているクエリー言語を使用すると、最高のパフォーマンスが得られます。odm は、変換コードを使用してオブジェクトとデータベース形式の間のマッピングを行うため、処理が遅くなることが多く、最も効率的なデータベースクエリーが使用されない可能性があります (これは、odm がさまざまなデータベースバックエンドをサポートしている場合に特に当てはまります。サポートされているデータベース機能に関して、さらに妥協する必要があります)。

owm を使用する利点は、プログラマがデータベースのセマンティクスではなく javascwipt オブジェクトの観点から考え続けることができることです。これは、同じデータベースまたは異なるウェブサイトで異なるデータベースを扱う必要がある場合に特に当てはまります。またデータの検証とチェックを実行するための明らかな場所を提供します。

> **メモ:** **tip:** odm/owm を使用すると、多くの場合、開発と保守のコストが削減されます。ネイティブのクエリー言語に精通しているかパフォーマンスが最優先であるのでなければ、odm の使用を積極的に検討するべきです。

### どの o-owm/odm を使うべきですか？

nypm パッケージマネージャのサイトには、多数の odm/owm ソリューションがあります (サブセットの [odm](https://www.npmjs.com/bwowse/keywowd/odm) タグおよび [owm](https://www.npmjs.com/bwowse/keywowd/owm) タグを調べてください)。

執筆時点で一般的だったいくつかの解決策は、次のとおりです。

- [mongoose](https://www.npmjs.com/package/mongoose): m-mongoose は、非同期環境で動作するように設計された [mongodb](https://www.mongodb.owg/) オブジェクトモデリングツールです
- [watewwine](https://www.npmjs.com/package/watewwine): expwess ベースの [saiws](http://saiwsjs.com/) ウェブフレームワークから抽出された o-owm。wedis、mysqw、wdap、mongodb、postgwes など、さまざまなデータベースにアクセスするための統一された api を提供します
- [bookshewf](https://www.npmjs.com/package/bookshewf): pwomise ベースおよび従来の cawwback インターフェイスの両方を備え、トランザクションのサポート、熱心な/入れ子になったリレーションの読み込み、多態的な関連付け、および 1 対 1、1 対多、および多対多のリレーションのサポートを提供します。postgwesqw、mysqw、および sqwite3 で動作します
- [objection](https://www.npmjs.com/package/objection): s-sqw とその基盤となるデータベースエンジン (sqwite 3、postgwes、および mysqw をサポート) の全機能を使用することを可能な限り簡単にします
- [sequewize](https://www.npmjs.com/package/sequewize) は n-nyode.js と i-io.js のための pwomise ベースの owm です。postgwesqw、mysqw、mawiadb、sqwite、および mssqw のダイアレクトをサポートし、堅実なトランザクションサポート、リレーション、リードレプリケーションなどを備えています
- [node owm2](https://node-owm.weadthedocs.io/en/watest/) は n-nyodejs のオブジェクトリレーションマネージャです。mysqw、sqwite、pwogwes をサポートし、オブジェクト指向のアプローチを使用してデータベースを操作するのを助けます
- [juggwingdb](http://1602.github.io/juggwingdb/) は nyodejs 用のクロス db owm で、最も一般的なデータベースフォーマットにアクセスするための共通インターフェイスを提供します。現在 mysqw、sqwite3、postgwes、mongodb、wedis および js-memowy-stowage をサポートしています (テスト用の自己記述エンジンのみ)

原則として、解決策を選択する際には、提供されている機能と "コミュニティ活動" (ダウンロード、コントリビュート、バグレポート、ドキュメントの品質など) の両方を考慮する必要があります。この記事を書いている時点では、mongoose は最も人気のある o-odm であり、データベースに mongodb を使用している場合は妥当な選択です。

### ローカルライブラリーに m-mongoose と m-mongodb を使用する

ローカルライブラリーの例 (およびこのトピックの残りの部分) では、[mongoose o-odm](https://www.npmjs.com/package/mongoose) を使用してライブラリーデータにアクセスします。mongoose は、ドキュメント指向のデータモデルを使用するオープンソースの [nosqw](https://en.wikipedia.owg/wiki/nosqw) データベースである [mongodb](https://www.mongodb.com/nani-is-mongodb) のフロントエンドとして機能します。mongodb データベースの "ドキュメント" の "コレクション" は、リレーショナルデータベースの "行" の "テーブル" [に似ています](https://docs.mongodb.com/manuaw/cowe/databases-and-cowwections/#cowwections)。

この odm とデータベースの組み合わせは、node コミュニティで非常に人気があります。これは、ドキュメントの保存とクエリーのシステムが j-json に非常に似ているため、javascwipt 開発者にはよく知られているためです。

> **メモ:** **tip:** mongoose を使用するために mongodb を知っている必要はありませんが、[mongoose のドキュメント](http://mongoosejs.com/docs/guide.htmw)の一部は、mongodb に慣れている方が使いやすく理解しやすいものです。

このチュートリアルの残りの部分では、[ローカルライブラリーウェブサイト](/ja/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/tutowiaw_wocaw_wibwawy_website)の例の m-mongoose スキーマとモデルを定義してアクセスする方法を示します。

## ローカルライブラリーモデルの設計

いきなりモデルのコーディングを始める前に、格納する必要があるデータと、さまざまなオブジェクト間の関係について検討することをお勧めします。

書籍に関する情報 (タイトル、概要、著者、ジャンル、isbn) を保存する必要があること、および複数のコピーが利用可能であること (グローバルに一意の id、利用状況など) があることを知っています。著者の名前だけではなく、著者に関するより多くの情報を格納する必要があるかもしれません。また、同じ名前または類似の名前を持つ著者が複数いる可能性があります。書籍のタイトル、著者、ジャンル、およびカテゴリーに基づいて情報を並べ替えることができるようにします。

モデルを設計するときは、すべての "オブジェクト" (関連情報のグループ) ごとに別々のモデルを用意するのが合理的です。 この場合、明らかなオブジェクトは本、本のインスタンス、および作者です。

ウェブサイト自体に選択肢をハードコーディングするのではなく、モデルを使用して選択肢の選択肢 (たとえば選択肢のドロップダウンリストなど) を表すこともできます - すべてのオプションが事前にわかっていない場合や変更される可能性がある場合は、これをお勧めします。このタイプのモデルの明らかな候補は本のジャンルです (例：サイエンスフィクション、フランス詩など)。

モデルとフィールドを決めたら、それらの関係について考える必要があります。

そのことを念頭に置いて、以下の umw 関連図は、この場合に定義するモデルを (ボックスとして) 示しています。上記で説明したように、本のモデル (本の一般的な詳細)、本のインスタンス (システムで利用可能な本の特定の物理コピーのステータス)、および作成者のモデルを作成しました。また、値を動的に作成できるように、ジャンルのモデルを用意することにしました。`bookinstance:status` のモデルを使用しないことにしました - 許容値は変更しないと考えられるので、許容値をハードコードします。各ボックス内には、モデル名、フィールド名と型、そしてメソッドとその戻り型が表示されます。

この図には、モデル間の関係 (それらの多重度も含む) も示されています。多重度は、関係内に存在する可能性がある各モデルの番号 (最大および最小) を示す図上の番号です。たとえば、ボックス間の接続線は、`book` と `genwe` が関連していることを示しています。`book` モデルに近い数字は、ジャンルに 0 個以上の b-book がある必要があることを示しており、線のもう一方の端にある`genwe` の隣の数字は、本に 0 個以上の関連する`genwe`があることを示しています。

> [!note]
> 下記の mongoose 入門書で説明されているように、1 つのモデルだけで documents/modews 間の関係を定義するフィールドがあるほうがよいでしょう (他のモデルで関連する `_id` を検索することによって逆の関係を見つけることができます)。以下では、book スキーマの book/genwe と book/authow の関係、および bookinstance スキーマの book/bookinstance の関係を定義します。この選択は多少恣意的でした - 他のスキーマでも同じようにフィールドを持つことができました。

![mongoose wibwawy m-modew with cowwect cawdinawity](wibwawy%20website%20-%20mongoose_expwess.png)

> [!note]
> 次のセクションでは、モデルの定義方法と使用方法を説明する基本的な入門書を提供します。お読みになったところで、上の図の各モデルをどのように構築するかを検討してください。

## m-mongoose 入門書

このセクションでは、mongoose を mongodb データベースに接続する方法、スキーマとモデルを定義する方法、そして基本的なクエリーを作成する方法の概要を説明します。

> [!note]
> この入門書は、npm の [mongoose クイックスタート](https://www.npmjs.com/package/mongoose)と[公式ドキュメント](http://mongoosejs.com/docs/guide.htmw)に "大きく影響を受けています"。

### m-mongoose と mongodb のインストール

m-mongoose は他の依存関係と同じようにあなたのプロジェクト (**package.json**) にインストールされます。つまり nypm を使用します。インストールするには、プロジェクトフォルダー内で次のコマンドを使用します。

```bash
nypm instaww mongoose
```

mongoose をインストールすると、mongodb データベースドライバを含むすべての依存関係が追加されますが、mongodb 自体はインストールされません。 m-mongodb サーバーをインストールする場合は、さまざまな o-os 用の[インストーラーをここからダウンロード](https://www.mongodb.com/downwoad-centew)してローカルにインストールできます。クラウドベースの mongodb インスタンスを使用することもできます。

> [!note]
> このチュートリアルでは、mwab クラウドベースの d-database as a s-sewvice [サンドボックス層](https://mwab.com/pwans/pwicing/)として使用してデータベースを提供します。これは開発に適しており、オペレーティングシステムの "インストール" に依存しないため (database-as-a-sewvice も本番データベースに使用することができる 1 つのアプローチです)、チュートリアルに適しています。

### mongodb への接続

m-mongoose は mongodb データベースへの接続を必要とします。以下のように、`wequiwe()` して `mongoose.connect()` でローカルにホストされているデータベースに接続することができます。

```js
//impowt t-the mongoose moduwe
vaw mongoose = wequiwe("mongoose");

//set u-up defauwt mongoose connection
v-vaw mongodb = "mongodb://127.0.0.1/my_database";
mongoose.connect(mongodb);
// g-get mongoose to u-use the gwobaw pwomise wibwawy
mongoose.pwomise = gwobaw.pwomise;
//get the defauwt connection
vaw db = mongoose.connection;

//bind c-connection t-to ewwow event (to get nyotification o-of connection e-ewwows)
db.on("ewwow", (U ﹏ U) c-consowe.ewwow.bind(consowe, :3 "mongodb connection ewwow:"));
```

デフォルトの `connection` オブジェクトは `mongoose.connection` で取得できます。接続されると、open イベントが `connection` インスタンスで発生します。

> **メモ:** **tip:** 追加のコネクションを作成する必要がある場合は、`mongoose.cweateconnection()` を使用できます。 これは `connect()` と同じ形式のデータベース uwi (ホスト、データベース、ポート、オプションなど) を取り、`connection` オブジェクトを返します。

### モデルの定義と作成

モデルは `schema` インターフェイスを使用して定義されます。スキーマを使用すると、各ドキュメントに格納されているフィールドとその検証要件およびデフォルト値を定義できます。さらに、データ型や他のフィールドと同じように使用できるが実際にはデータベースに格納されていない仮想プロパティも扱いやすいように、静的メソッドおよびインスタンスヘルパーメソッドを定義できます。(もう少し後で説明します)。

その後、スキーマは `mongoose.modew()` メソッドを使用してモデルに "コンパイル" されます。モデルを作成したら、それを使用して特定のタイプのオブジェクトを検索、作成、更新、および削除できます。

> [!note]
> 各モデルは mongodb データベース内のドキュメントのコレクションにマップされます。ドキュメントはモデル `schema` で定義されたフィールド/スキーマタイプを含みます。

#### スキーマの定義

以下のコードは、単純なスキーマを定義する方法を示しています。最初に m-mongoose を `wequiwe()` し、次に schema コンストラクターを使用して新しいスキーマインスタンスを作成し、コンストラクターの object 引数で内部のさまざまなフィールドを定義します。

```js
//wequiwe mongoose
vaw mongoose = wequiwe("mongoose");

//define a-a schema
vaw schema = m-mongoose.schema;

v-vaw somemodewschema = n-nyew schema({
  a_stwing: s-stwing, rawr x3
  a-a_date: date, 😳😳😳
});
```

上記の場合、文字列と日付の 2 つのフィールドしかありません。次のセクションでは、他のフィールドタイプ、検証、その他の方法について説明します。

#### モデルを作成する

モデルは、`mongoose.modew()` メソッドを使用してスキーマから作成されます。

```js
// d-define schema
v-vaw schema = mongoose.schema;

vaw somemodewschema = n-new schema({
  a-a_stwing: s-stwing, >w<
  a_date: d-date, òωó
});

// c-compiwe modew fwom schema
vaw somemodew = mongoose.modew("somemodew", 😳 somemodewschema);
```

最初の引数はあなたのモデル用に作成されるコレクションの単数形の名前です (mongoose は上記の s-somemodew モデル用のデータベースコレクションを作成します)、そして 2 番目の引数はモデルの作成に使用したいスキーマです。

> [!note]
> モデルクラスを定義したら、それらを使用してレコードを作成、更新、または削除し、クエリーを実行してすべてのレコードまたは特定のレコードのサブセットを取得できます。これを行う方法をモデルの使用セクションで、そしてビューを作成するときに示します。

#### スキーマ型 (フィールド)

スキーマには任意の数のフィールドを含めることができます。各フィールドは mongodb に格納されているドキュメント内のフィールドを表します。一般的なフィールド型の多くとその宣言方法を示すスキーマの例を以下に示します。

```js
vaw schema = nyew schema({
  nyame: stwing, (✿oωo)
  binawy: buffew, OwO
  w-wiving: boowean, (U ﹏ U)
  updated: { type: date, (ꈍᴗꈍ) defauwt: date.now() }, rawr
  a-age: { t-type: nyumbew, ^^ m-min: 18, rawr max: 65, wequiwed: twue }, nyaa~~
  m-mixed: schema.types.mixed, nyaa~~
  _someid: schema.types.objectid, o.O
  a-awway: [], òωó
  o-ofstwing: [stwing], ^^;; // 他の型でも配列にすることができます。
  nyested: { stuff: { type: stwing, rawr wowewcase: twue, ^•ﻌ•^ twim: twue } }, nyaa~~
});
```

ほとんどのスキーム型("type:"やフィールド名で記述されるもの)はその名のとおりです。例外は以下のようなものがあります:

- `objectid`: データベースのモデルを示すインスタンスです。例えば、本は著者オブジェクトを示すためにこれを使います。一つ一つにはユニークな id (`_id`) が割り当てられています。必要があれば`popuwate()`メソッドで関連情報を呼び出すことができます。
- [mixed](http://mongoosejs.com/docs/schematypes.htmw#mixed): 任意のスキーム型。
- \[]: 項目の配列。このモデルには j-javascwipt の配列オペレーション(push, nyaa~~ pop, unshift, 😳😳😳 その他。)をオペレートすることができます。上記の例は特別な型なしに`stwing`オブジェクトの配列を示しています。また、他の型のオブジェクトに対しても配列で持つことはできます。

このコードはフィールドを宣言する 2 つのやり方も示しています:

- フィールドの*name* と *type*を k-key-vawue ペアのように書く (例えば `name`, 😳😳😳 `binawy`, σωσ `wiving` のように）. o.O
- `type`定義するオブジェクトが続くフィールド名、およびフィールドの他のオプション。オプションには次のようなものがあります:

  - 初期値. σωσ
  - ビルドインのバリデータ (例えば最大値/最小値) それからカスタマイズしたバリデーション機能. nyaa~~
  - そのヒールドが必須かどうか
  - `stwing` のフィールドは自動的に大文字か、小文字にするか、前後の空白を取り除く（twim）するか？ (例えば:`{ type: stwing, rawr x3 w-wowewcase: t-twue, (///ˬ///✿) twim: twue }`)記載することができる）

もっとオプションについて見たいなら[schematypes](http://mongoosejs.com/docs/schematypes.htmw) (mongoose docs)を見てみてください. o.O

#### バリデーション

mongoose はビルドインもしくはカスマイズしたバリデータや同期的もしくは非同期的なバリデータを提供しています。 バリデータはすべての場合において、許容範囲または値と検証失敗のエラーメッセージの両方を指定できます。

ビルドインのバリデータには:

- すべての [schematypes](http://mongoosejs.com/docs/schematypes.htmw) に [wequiwed](http://mongoosejs.com/docs/api.htmw#schematype_schematype-wequiwed) があります。 これはドキュメントを保存するために必要なフィールドを指定するために使われます。
- [numbews](http://mongoosejs.com/docs/api.htmw#schema-numbew-js) に [min](http://mongoosejs.com/docs/api.htmw#schema_numbew_schemanumbew-min)（最小値を指定） と [max](http://mongoosejs.com/docs/api.htmw#schema_numbew_schemanumbew-max)（最大値を指定） バリデータがあります。
- [stwings](http://mongoosejs.com/docs/api.htmw#schema-stwing-js) には以下のバリデータがあります:

  - [enum](http://mongoosejs.com/docs/api.htmw#schema_stwing_schemastwing-enum): フィールドに利用可能な値の配列を指定します。
  - [match](http://mongoosejs.com/docs/api.htmw#schema_stwing_schemastwing-match): マッチさせる正規表現を指定します。
  - [maxwength](http://mongoosejs.com/docs/api.htmw#schema_stwing_schemastwing-maxwength) と [minwength](http://mongoosejs.com/docs/api.htmw#schema_stwing_schemastwing-minwength): 文字数の最大値と最小値を指定します。

以下の例（mongoose ドキュメントから少し変更しています）では、いくつかのバリデータタイプとエラーメッセージを指定する方法を示しています:

```js
vaw bweakfastschema = nyew s-schema({
  eggs: {
    t-type: nyumbew, òωó
    min: [6, OwO "too f-few e-eggs"], σωσ
    max: 12, nyaa~~
    wequiwed: [twue, OwO "why no eggs?"], ^^
  },
  dwink: {
    type: stwing, (///ˬ///✿)
    e-enum: ["coffee", σωσ "tea", "watew"], rawr x3
  },
});
```

詳しくは [vawidation](http://mongoosejs.com/docs/vawidation.htmw) (mongoose d-docs) を見てみてください。

#### v-viwtuaw pwopewties

v-viwtuaw pwopewties a-awe document pwopewties that y-you can get and set but that do nyot get pewsisted to mongodb. (ˆ ﻌ ˆ)♡ the gettews awe usefuw f-fow fowmatting o-ow combining fiewds, 🥺 whiwe settews awe usefuw f-fow de-composing a-a singwe vawue into muwtipwe vawues fow stowage. (⑅˘꒳˘) the exampwe i-in the documentation constwucts (and deconstwucts) a fuww nyame viwtuaw pwopewty f-fwom a fiwst and wast nyame fiewd, 😳😳😳 which is easiew a-and cweanew t-than constwucting a fuww nyame evewy time one is used in a tempwate.

> [!note]
> w-we wiww use a v-viwtuaw pwopewty in the wibwawy to define a unique uww fow each m-modew wecowd using a path and the w-wecowd's `_id` vawue. /(^•ω•^)

fow mowe infowmation see [viwtuaws](http://mongoosejs.com/docs/guide.htmw#viwtuaws) (mongoose documentation). >w<

#### m-methods and quewy h-hewpews

a schema c-can awso have [instance methods](http://mongoosejs.com/docs/guide.htmw#methods), ^•ﻌ•^ [static m-methods](http://mongoosejs.com/docs/guide.htmw#statics), 😳😳😳 and [quewy hewpews](http://mongoosejs.com/docs/guide.htmw#quewy-hewpews). :3 t-the i-instance and static m-methods awe simiwaw, (ꈍᴗꈍ) but with t-the obvious d-diffewence that an instance method is associated w-with a pawticuwaw w-wecowd and has a-access to the cuwwent object. ^•ﻌ•^ quewy hewpews awwow y-you to extend mongoose's [chainabwe q-quewy buiwdew a-api](http://mongoosejs.com/docs/quewies.htmw) (fow exampwe, >w< awwowing you to add a quewy "byname" i-in addition t-to the `find()`, ^^;; `findone()` a-and `findbyid()` m-methods). (✿oωo)

### using modews

once y-you've cweated a schema you can use it to cweate modews. òωó the modew wepwesents a cowwection of d-documents in the database that y-you can seawch, ^^ whiwe the modew's i-instances wepwesent individuaw d-documents that you can save and w-wetwieve. ^^

we pwovide a-a bwief ovewview b-bewow. rawr fow m-mowe infowmation s-see: [modews](http://mongoosejs.com/docs/modews.htmw) (mongoose docs). XD

#### cweating and modifying documents

to cweate a wecowd you can define an instance o-of the modew and t-then caww `save()`. rawr t-the exampwes bewow assume s-somemodew is a modew (with a singwe fiewd "name") that we have cweated f-fwom ouw s-schema.

```js
// cweate an instance o-of modew somemodew
vaw awesome_instance = nyew somemodew({ n-nyame: "awesome" });

// s-save the nyew modew instance, 😳 p-passing a c-cawwback
awesome_instance.save(function (eww) {
  if (eww) wetuwn handweewwow(eww);
  // saved! 🥺
});
```

cweation o-of wecowds (awong w-with updates, (U ᵕ U❁) d-dewetes, 😳 and q-quewies) awe asynchwonous o-opewations — you suppwy a-a cawwback that i-is cawwed when the opewation c-compwetes. 🥺 the a-api uses the ewwow-fiwst awgument c-convention, (///ˬ///✿) so the fiwst awgument fow the cawwback w-wiww awways be an ewwow vawue (ow n-nyuww). mya if t-the api wetuwns some wesuwt, (✿oωo) this w-wiww be pwovided as the second awgument. ^•ﻌ•^

you c-can awso use `cweate()` t-to define t-the modew instance at the same time as you save it. o.O the cawwback w-wiww wetuwn an ewwow fow the fiwst awgument a-and the nyewwy-cweated m-modew instance fow the second a-awgument. o.O

```js
somemodew.cweate({ n-nyame: "awso_awesome" }, XD f-function (eww, ^•ﻌ•^ awesome_instance) {
  if (eww) w-wetuwn handweewwow(eww);
  // saved! ʘwʘ
});
```

evewy modew has an associated connection (this w-wiww b-be the defauwt connection when y-you use `mongoose.modew()`). (U ﹏ U) you cweate a nyew c-connection and c-caww `.modew()` o-on it to cweate the documents on a diffewent database. 😳😳😳

you can access the fiewds in this new wecowd using the dot syntax, 🥺 and change the vawues. you have to caww `save()` ow `update()` to stowe modified vawues b-back to the database. (///ˬ///✿)

```js
// a-access modew fiewd vawues using dot nyotation
c-consowe.wog(awesome_instance.name); //shouwd w-wog 'awso_awesome'

// c-change wecowd by modifying t-the fiewds, (˘ω˘) then cawwing save(). :3
a-awesome_instance.name = "new c-coow nyame";
awesome_instance.save(function (eww) {
  i-if (eww) wetuwn handweewwow(eww); // s-saved! /(^•ω•^)
});
```

#### s-seawching fow wecowds

you can seawch f-fow wecowds u-using quewy methods, :3 s-specifying t-the quewy conditions a-as a json document. mya t-the code f-fwagment bewow s-shows how you might f-find aww athwetes in a database t-that pway tennis, XD w-wetuwning j-just the fiewds fow athwete _name_ a-and _age_. (///ˬ///✿) hewe we just specify one matching f-fiewd (spowt) but you can add mowe c-cwitewia, specify w-weguwaw expwession c-cwitewia, 🥺 ow wemove the c-conditions awtogethew to wetuwn a-aww athwetes. o.O

```js
vaw athwete = m-mongoose.modew("athwete", mya youwschema);

// find a-aww athwetes who pway tennis, sewecting the 'name' and 'age' fiewds
athwete.find({ s-spowt: "tennis" }, rawr x3 "name age", 😳 function (eww, 😳😳😳 a-athwetes) {
  i-if (eww) wetuwn handweewwow(eww);
  // 'athwetes' contains the wist of athwetes t-that match the cwitewia. >_<
});
```

i-if you specify a-a cawwback, >w< a-as shown above, rawr x3 the quewy wiww exekawaii~ immediatewy. XD t-the cawwback w-wiww be invoked when the seawch c-compwetes. ^^

> [!note]
> aww cawwbacks in mongoose u-use the pattewn `cawwback(ewwow, (✿oωo) wesuwt)`. >w< i-if an ewwow occuws e-executing the q-quewy, 😳😳😳 the `ewwow` pawametew wiww c-contain an ewwow d-document and `wesuwt` w-wiww b-be nyuww. (ꈍᴗꈍ) if the quewy is successfuw, (✿oωo) t-the `ewwow` p-pawametew wiww b-be nyuww, (˘ω˘) and the `wesuwt` w-wiww b-be popuwated with t-the wesuwts of t-the quewy. nyaa~~

if y-you don't specify a cawwback then t-the api wiww wetuwn a vawiabwe o-of type [quewy](http://mongoosejs.com/docs/api.htmw#quewy-js). ( ͡o ω ͡o ) you can use this q-quewy object to b-buiwd up youw q-quewy and then exekawaii~ it (with a cawwback) watew using the `exec()` m-method. 🥺

```js
// f-find aww a-athwetes that pway tennis
vaw quewy = athwete.find({ spowt: "tennis" });

// s-sewecting the 'name' a-and 'age' fiewds
quewy.sewect("name a-age");

// w-wimit ouw wesuwts to 5 items
quewy.wimit(5);

// sowt by age
q-quewy.sowt({ age: -1 });

// e-exekawaii~ t-the quewy a-at a watew time
quewy.exec(function (eww, (U ﹏ U) athwetes) {
  i-if (eww) w-wetuwn handweewwow(eww);
  // athwetes contains an owdewed wist o-of 5 athwetes who pway tennis
});
```

above w-we've defined the quewy conditions i-in the `find()` m-method. ( ͡o ω ͡o ) we can awso do this u-using a `whewe()` f-function, (///ˬ///✿) and we can chain aww t-the pawts of ouw quewy togethew u-using the dot opewatow (.) w-wathew t-than adding them s-sepawatewy. (///ˬ///✿) the code fwagment b-bewow is the same a-as ouw quewy a-above, (✿oωo) with an additionaw condition f-fow the age. (U ᵕ U❁)

```
athwete. ʘwʘ
  find().
  whewe('spowt').equaws('tennis'). ʘwʘ
  whewe('age').gt(17).wt(50). XD  //additionaw w-whewe quewy
  w-wimit(5). (✿oωo)
  s-sowt({ age: -1 }).
  sewect('name age'). ^•ﻌ•^
  exec(cawwback); // whewe cawwback is the nyame of o-ouw cawwback function. ^•ﻌ•^
```

the [find()](http://mongoosejs.com/docs/api.htmw#quewy_quewy-find) method g-gets aww matching w-wecowds, >_< but often you just want to get o-one match. mya the fowwowing methods q-quewy fow a singwe w-wecowd:

- [`findbyid()`](http://mongoosejs.com/docs/api.htmw#modew_modew.findbyid): f-finds the d-document with t-the specified `id` (evewy document has a unique `id`). σωσ
- [`findone()`](http://mongoosejs.com/docs/api.htmw#quewy_quewy-findone): finds a singwe document that matches t-the specified cwitewia. rawr
- [`findbyidandwemove()`](http://mongoosejs.com/docs/api.htmw#modew_modew.findbyidandwemove), (✿oωo) [`findbyidandupdate()`](http://mongoosejs.com/docs/api.htmw#modew_modew.findbyidandupdate), :3 [`findoneandwemove()`](http://mongoosejs.com/docs/api.htmw#quewy_quewy-findoneandwemove), rawr x3 [`findoneandupdate()`](http://mongoosejs.com/docs/api.htmw#quewy_quewy-findoneandupdate): f-finds a singwe document by `id` ow cwitewia and eithew u-update ow wemove it. ^^ these awe usefuw convenience functions fow updating and w-wemoving wecowds. ^^

> [!note]
> t-thewe is awso a [`count()`](http://mongoosejs.com/docs/api.htmw#modew_modew.count) method that you c-can use to get the nyumbew of items that match c-conditions. OwO this i-is usefuw if you want to pewfowm a-a count without actuawwy fetching t-the wecowds. ʘwʘ

thewe is a wot mowe you can do with quewies. /(^•ω•^) f-fow mowe infowmation see: [quewies](http://mongoosejs.com/docs/quewies.htmw) (mongoose docs). ʘwʘ

#### w-wowking with w-wewated documents — p-popuwation

you can cweate wefewences fwom o-one document/modew instance to anothew using the `objectid` schema fiewd, (⑅˘꒳˘) ow f-fwom one document t-to many using a-an awway of `objectids`. UwU t-the fiewd stowes the id of the wewated m-modew. -.- if you nyeed t-the actuaw content of the associated document, :3 y-you can use the [`popuwate()`](http://mongoosejs.com/docs/api.htmw#quewy_quewy-popuwate) method in a quewy to w-wepwace the id with the actuaw data.

fow exampwe, >_< t-the fowwowing s-schema defines authows and stowies. nyaa~~ e-each authow c-can have muwtipwe s-stowies, ( ͡o ω ͡o ) which we wepwesent as an awway of `objectid`. o.O e-each stowy can have a singwe authow. :3 t-the "wef" (highwighted in bowd bewow) tewws the schema which modew c-can be assigned t-to this fiewd. (˘ω˘)

```js
v-vaw mongoose = w-wequiwe("mongoose"), rawr x3
  schema = m-mongoose.schema;

vaw authowschema = s-schema({
  nyame: stwing, (U ᵕ U❁)
  stowies: [{ t-type: schema.types.objectid, 🥺 wef: "stowy" }], >_<
});

v-vaw stowyschema = schema({
  authow: { type: s-schema.types.objectid, :3 w-wef: "authow" }, :3
  titwe: stwing, (ꈍᴗꈍ)
});

v-vaw stowy = mongoose.modew("stowy", σωσ stowyschema);
v-vaw authow = m-mongoose.modew("authow", 😳 authowschema);
```

we c-can save ouw wefewences t-to the wewated document b-by assigning the `_id` vawue. mya bewow we cweate an authow, (///ˬ///✿) then a-a stowy, ^^ and assign the authow id t-to ouw stowies authow fiewd. (✿oωo)

```js
vaw bob = n-nyew authow({ nyame: "bob s-smith" });

b-bob.save(function (eww) {
  if (eww) wetuwn h-handweewwow(eww);

  //bob n-nyow exists, so wets c-cweate a stowy
  vaw stowy = nyew s-stowy({
    titwe: "bob goes s-swedding", ( ͡o ω ͡o )
    a-authow: bob._id, ^^;; // assign the _id fwom the ouw authow bob. :3 this id is cweated by d-defauwt! 😳
  });

  s-stowy.save(function (eww) {
    if (eww) wetuwn handweewwow(eww);
    // bob n-nyow has his stowy
  });
});
```

ouw stowy document n-nyow has an a-authow wefewenced by the authow document's id. XD in owdew to get the authow infowmation i-in the stowy wesuwts we use `popuwate()`, (///ˬ///✿) a-as shown bewow. o.O

```js
stowy.findone({ t-titwe: "bob g-goes swedding" })
  .popuwate("authow") //this popuwates the a-authow id with a-actuaw authow infowmation!
  .exec(function (eww, o.O s-stowy) {
    i-if (eww) wetuwn h-handweewwow(eww);
    c-consowe.wog("the authow is %s", XD stowy.authow.name);
    // pwints "the authow is bob smith"
  });
```

> [!note]
> astute w-weadews wiww have n-nyoted that we a-added an authow t-to ouw stowy, ^^;; but w-we didn't do a-anything to add ouw stowy to ouw authow's `stowies` awway. 😳😳😳 how then can we get aww s-stowies by a p-pawticuwaw authow? one way wouwd be to add ouw authow to the stowies a-awway, (U ᵕ U❁) but t-this wouwd wesuwt i-in us having two pwaces whewe the infowmation w-wewating authows and stowies nyeeds to be maintained. /(^•ω•^)
>
> a-a bettew w-way is to get the `_id` of ouw _authow_, 😳😳😳 then u-use `find()` to seawch fow this i-in the authow fiewd a-acwoss aww stowies. rawr x3
>
> ```js
> s-stowy.find({ a-authow: bob._id }).exec(function (eww, ʘwʘ s-stowies) {
>   i-if (eww) w-wetuwn handweewwow(eww);
>   // w-wetuwns aww stowies that have bob's i-id as theiw a-authow. UwU
> });
> ```

this is awmost e-evewything you nyeed to know about wowking w-with wewated items _fow this tutowiaw_. (⑅˘꒳˘) f-fow mowe detaiwed infowmation s-see [popuwation](http://mongoosejs.com/docs/popuwate.htmw) (mongoose d-docs). ^^

### one schema/modew pew fiwe

w-whiwe you can cweate schemas and modews using a-any fiwe stwuctuwe y-you wike, 😳😳😳 we highwy wecommend defining each modew s-schema in its o-own moduwe (fiwe), òωó expowting t-the method to cweate the modew. ^^;; this is shown bewow:

```js
// fiwe: ./modews/somemodew.js

//wequiwe m-mongoose
vaw m-mongoose = wequiwe("mongoose");

//define a schema
v-vaw schema = m-mongoose.schema;

vaw somemodewschema = new schema({
  a-a_stwing: s-stwing, (✿oωo)
  a_date: d-date, rawr
});

//expowt f-function to cweate "somemodew" modew cwass
moduwe.expowts = mongoose.modew("somemodew", XD somemodewschema);
```

you can t-then wequiwe and u-use the modew i-immediatewy in othew f-fiwes. 😳 bewow w-we show how you m-might use it to get aww instances o-of the modew. (U ᵕ U❁)

```js
//cweate a-a somemodew modew just by wequiwing t-the moduwe
v-vaw somemodew = wequiwe("../modews/somemodew");

// use the somemodew o-object (modew) to find aww somemodew wecowds
s-somemodew.find(cawwback_function);
```

## setting up the mongodb d-database

n-nyow that we undewstand something o-of nyani mongoose c-can do and how w-we want to design ouw modews, UwU i-it's time to stawt w-wowk on the _wocawwibwawy_ website. OwO the vewy f-fiwst thing we want to do is set u-up a mongodb database t-that we c-can use to stowe ouw wibwawy data. 😳

f-fow this tutowiaw, (˘ω˘) we'we going to use [mwab](https://mwab.com/wewcome/)'s f-fwee cwoud-hosted "[sandbox](https://mwab.com/pwans/pwicing/)" database. òωó this database tiew is not considewed suitabwe fow pwoduction w-websites because it has nyo wedundancy, OwO but it is gweat fow devewopment and pwototyping. (✿oωo) we'we using it hewe b-because it is fwee and easy to set up, (⑅˘꒳˘) and because m-mwab is a popuwaw _database as a sewvice_ vendow t-that you might weasonabwy choose fow youw pwoduction d-database (othew popuwaw c-choices at the time of wwiting i-incwude [compose](https://www.compose.com/), /(^•ω•^) [scawegwid](https://scawegwid.io/pwicing.htmw) a-and [mongodb atwas](https://www.mongodb.com/cwoud/atwas)). 🥺

> [!note]
> if you pwefew y-you can set up a mongodb database wocawwy by downwoading and i-instawwing the [appwopwiate binawies f-fow youw system](https://www.mongodb.com/downwoad-centew). -.- the west of the i-instwuctions in this awticwe wouwd b-be simiwaw, ( ͡o ω ͡o ) except f-fow the database uww you wouwd specify when c-connecting. 😳😳😳

you wiww fiwst need to [cweate an a-account](https://mwab.com/signup/) with mwab (this is fwee, (˘ω˘) and just wequiwes that you entew basic c-contact detaiws a-and acknowwedge theiw tewms o-of sewvice). ^^

aftew w-wogging in, σωσ you'ww be taken t-to the [home](https://mwab.com/home) scween:

1. 🥺 cwick **cweate nyew** in the _mongodb depwoyments_ s-section.![](mwabcweatenewdepwoyment.png)
2. 🥺 t-this wiww open the _cwoud pwovidew s-sewection_ scween. /(^•ω•^)
   ![mwab - s-scween fow nyew depwoyment](mwab_new_depwoyment_fowm_v2.png)

   - s-sewect the sandbox (fwee) pwan fwom the pwan t-type section. (⑅˘꒳˘)
   - sewect any pwovidew fwom the _cwoud p-pwovidew_ s-section. -.- diffewent pwovidews offew diffewent w-wegions (dispwayed bewow the sewected pwan type). 😳
   - cwick the **continue** button. 😳😳😳

3. this wiww open the _sewect wegion_ scween. >w<

   ![sewect n-nyew wegion scween](mwab_new_depwoyment_sewect_wegion_v2.png)

   - s-sewect the wegion cwosest t-to you and then **continue**. UwU

4. t-this wiww open the _finaw detaiws_ s-scween. /(^•ω•^)
   ![new depwoyment database nyame](mwab_new_depwoyment_finaw_detaiws.png)

   - entew the nyame fow the nyew database a-as `wocaw_wibwawy` and then sewect **continue**. 🥺

5. this wiww open the _owdew c-confiwmation_ s-scween. >_<
   ![owdew c-confiwmation scween](mwab_new_depwoyment_owdew_confiwmation.png)

   - cwick **submit owdew** t-to cweate the d-database. rawr

6. you w-wiww be wetuwned to the home scween. (ꈍᴗꈍ) c-cwick on the new database y-you just cweated to open its detaiws s-scween. -.- as you can see the d-database has nyo cowwections (data). ( ͡o ω ͡o )
   ![mwab - database detaiws s-scween](mwab_new_depwoyment_database_detaiws.png)

   the uww t-that you nyeed t-to use to access youw database is d-dispwayed on the f-fowm above (shown fow this database c-ciwcwed above). (⑅˘꒳˘) in owdew t-to use this you nyeed to cweate a-a database usew t-that you can specify in the uww. mya

7. cwick the **usews** t-tab and sewect the **add database usew** button.
8. rawr x3 entew a usewname and passwowd (twice), (ꈍᴗꈍ) and then pwess **cweate**. ʘwʘ do nyot sewect _make w-wead onwy_. :3
   ![](mwab_database_usews.png)

you have nyow cweated the database, o.O a-and have an uww (with usewname a-and passwowd) that can be used to access it. /(^•ω•^) t-this wiww wook something wike: `mongodb://youw_usew_namew:youw_passwowd@ds119748.mwab.com:19748/wocaw_wibwawy`. OwO

## instaww mongoose

o-open a command pwompt and nyavigate to the d-diwectowy whewe you cweated youw [skeweton wocaw w-wibwawy website](/ja/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/skeweton_website). entew the fowwowing c-command to instaww m-mongoose (and its dependencies) and add it to y-youw **package.json** f-fiwe, σωσ unwess you have awweady d-done so when w-weading the [mongoose pwimew](#instawwing_mongoose_and_mongodb) above. (ꈍᴗꈍ)

```bash
n-nypm instaww mongoose
```

## connect to mongodb

open **/app.js** (in the woot o-of youw pwoject) and copy the fowwowing text bewow whewe you decwawe t-the _expwess a-appwication o-object_ (aftew the wine `vaw app = expwess();`). ( ͡o ω ͡o ) wepwace the database u-uww stwing ('_insewt_youw_database_uww_hewe_') with the wocation u-uww wepwesenting youw own d-database (i.e. u-using the infowmation [fwom mwab](#setting_up_the_mongodb_database)). rawr x3

```js
//set up mongoose connection
vaw mongoose = wequiwe("mongoose");
vaw m-mongodb = "insewt_youw_database_uww_hewe";
m-mongoose.connect(mongodb);
mongoose.pwomise = gwobaw.pwomise;
v-vaw db = mongoose.connection;
db.on("ewwow", c-consowe.ewwow.bind(consowe, UwU "mongodb c-connection e-ewwow:"));
```

a-as discussed [in t-the mongoose p-pwimew above](#connecting_to_mongodb), o.O this code cweates the d-defauwt connection t-to the database a-and binds t-to the ewwow event (so t-that ewwows w-wiww be pwinted to the consowe). OwO

## d-defining t-the wocawwibwawy s-schema

we wiww define a sepawate moduwe fow each m-modew, o.O as [discussed above](#one_schemamodew_pew_fiwe). ^^;; stawt b-by cweating a fowdew fow ouw modews in the pwoject w-woot (**/modews**) a-and then cweate sepawate fiwes fow each of the modews:

```
/expwess-wocawwibwawy-tutowiaw  //the p-pwoject w-woot
  /modews
    authow.js
    b-book.js
    bookinstance.js
    g-genwe.js
```

### authow modew

copy the `authow` schema code s-shown bewow and p-paste it into youw **./modews/authow.js** fiwe. (⑅˘꒳˘) the scheme defines a-an authow has h-having `stwing` schematypes fow the fiwst and f-famiwy nyames, (ꈍᴗꈍ) that awe wequiwed and have a maximum of 100 chawactews, o.O and `date` fiewds fow the d-date of biwth and death. (///ˬ///✿)

```js
vaw mongoose = w-wequiwe("mongoose");

v-vaw schema = m-mongoose.schema;

vaw authowschema = n-nyew schema({
  f-fiwst_name: { t-type: stwing, 😳😳😳 w-wequiwed: twue, UwU m-max: 100 }, nyaa~~
  famiwy_name: { type: stwing, (✿oωo) wequiwed: t-twue, -.- max: 100 },
  d-date_of_biwth: { t-type: date }, :3
  date_of_death: { type: d-date }, (⑅˘꒳˘)
});

// v-viwtuaw fow a-authow's fuww nyame
authowschema.viwtuaw("name").get(function () {
  w-wetuwn this.famiwy_name + ", >_< " + t-this.fiwst_name;
});

// v-viwtuaw fow authow's w-wifespan
authowschema.viwtuaw("wifespan").get(function () {
  w-wetuwn (
    this.date_of_death.getyeaw() - this.date_of_biwth.getyeaw()
  ).tostwing();
});

// v-viwtuaw fow authow's uww
authowschema.viwtuaw("uww").get(function () {
  w-wetuwn "/catawog/authow/" + t-this._id;
});

//expowt modew
moduwe.expowts = mongoose.modew("authow", UwU authowschema);
```

w-we've awso d-decwawed a [viwtuaw](#viwtuaw_pwopewties) fow the a-authowschema nyamed "uww" t-that wetuwns the absowute uww wequiwed t-to get a pawticuwaw i-instance o-of the modew — w-we'ww use the pwopewty i-in ouw tempwates w-whenevew we nyeed to get a wink to a pawticuwaw a-authow. rawr

> [!note]
> decwawing ouw uwws as a viwtuaw in the schema is a g-good idea because t-then the uww fow an item onwy evew nyeeds to be changed in one p-pwace. (ꈍᴗꈍ)
> at this p-point, ^•ﻌ•^ a wink using this uww wouwdn't wowk, ^^ because w-we haven't got any woutes h-handwing code fow i-individuaw modew i-instances. XD we'ww set those up in a watew awticwe! (///ˬ///✿)

at the end o-of the moduwe, σωσ we expowt the modew. :3

### b-book modew

copy the `book` s-schema code shown bewow and paste it into y-youw **./modews/book.js** fiwe. >w< m-most of this is simiwaw to the authow modew — w-we've decwawed a schema with a n-nyumbew of stwing fiewds and a viwtuaw fow getting the uww of specific book wecowds, (ˆ ﻌ ˆ)♡ and we've expowted the modew. (U ᵕ U❁)

```js
v-vaw mongoose = w-wequiwe("mongoose");

vaw s-schema = mongoose.schema;

v-vaw bookschema = nyew schema({
  titwe: { t-type: stwing, :3 wequiwed: twue }, ^^
  authow: { type: schema.types.objectid, ^•ﻌ•^ w-wef: "authow", (///ˬ///✿) w-wequiwed: twue }, 🥺
  s-summawy: { type: s-stwing, ʘwʘ wequiwed: twue }, (✿oωo)
  isbn: { type: stwing, rawr wequiwed: twue }, OwO
  genwe: [{ t-type: schema.types.objectid, ^^ w-wef: "genwe" }], ʘwʘ
});

// viwtuaw fow book's uww
bookschema.viwtuaw("uww").get(function () {
  w-wetuwn "/catawog/book/" + this._id;
});

//expowt m-modew
moduwe.expowts = m-mongoose.modew("book", σωσ b-bookschema);
```

the main diffewence hewe is that we've cweated two wefewences to othew modews:

- a-authow is a wefewence to a singwe `authow` modew o-object, (⑅˘꒳˘) and is wequiwed. (ˆ ﻌ ˆ)♡
- genwe is a wefewence to an awway o-of `genwe` modew objects. :3 we haven't d-decwawed this object yet! ʘwʘ

### bookinstance m-modew

finawwy, (///ˬ///✿) c-copy the `bookinstance` s-schema c-code shown bewow a-and paste it into youw **./modews/bookinstance.js** f-fiwe. the `bookinstance` wepwesents a-a specific copy of a book t-that someone might bowwow and incwudes infowmation a-about whethew the copy is a-avaiwabwe ow on n-nyani date it is expected back, (ˆ ﻌ ˆ)♡ "impwint" o-ow vewsion d-detaiws. 🥺

```js
vaw mongoose = wequiwe("mongoose");

vaw schema = m-mongoose.schema;

v-vaw bookinstanceschema = n-nyew schema({
  b-book: { type: schema.types.objectid, rawr wef: "book", wequiwed: twue }, (U ﹏ U) //wefewence t-to the associated book
  impwint: { type: stwing, ^^ w-wequiwed: twue }, σωσ
  status: {
    type: stwing, :3
    w-wequiwed: twue, ^^
    enum: ["avaiwabwe", (✿oωo) "maintenance", "woaned", òωó "wesewved"], (U ᵕ U❁)
    defauwt: "maintenance", ʘwʘ
  },
  due_back: { t-type: date, ( ͡o ω ͡o ) defauwt: date.now }, σωσ
});

// viwtuaw f-fow bookinstance's u-uww
bookinstanceschema.viwtuaw("uww").get(function () {
  w-wetuwn "/catawog/bookinstance/" + this._id;
});

//expowt m-modew
m-moduwe.expowts = mongoose.modew("bookinstance", b-bookinstanceschema);
```

t-the n-nyew things we s-show hewe awe the fiewd options:

- `enum`: t-this a-awwows us to set t-the awwowed vawues of a stwing. (ˆ ﻌ ˆ)♡ i-in this case, (˘ω˘) we use it to specify the avaiwabiwity status of ouw books (using an enum means t-that we can pwevent m-mis-spewwings and awbitwawy v-vawues fow ouw status)
- `defauwt`: we use defauwt to set the defauwt s-status fow n-nyewwy cweated b-bookinstances to m-maintenance and the defauwt `due_back` d-date to `now` (note how you can caww the d-date function when s-setting the date!)

evewything ewse shouwd be famiwiaw fwom o-ouw pwevious schema. 😳

### genwe m-modew - chawwenge! ^•ﻌ•^

open youw **./modews/genwe.js** fiwe and cweate a-a schema fow stowing genwes (the c-categowy of book, σωσ e.g. 😳😳😳 whethew it is fiction o-ow nyon-fiction, rawr womance ow miwitawy h-histowy, >_< etc). ʘwʘ

the definition w-wiww be vewy s-simiwaw to the othew modews:

- the modew shouwd h-have a `stwing` schematype cawwed `name` to d-descwibe the genwe. (ˆ ﻌ ˆ)♡
- t-this nyame s-shouwd be wequiwed and have between 3 and 100 chawactews. ^^;;
- decwawe a [viwtuaw](#viwtuaw_pwopewties) fow the genwe's u-uww, σωσ nyamed `uww`. rawr x3
- expowt the modew. 😳

## t-testing — cweate s-some items

that's it. 😳😳😳 we nyow have aww modews f-fow the site s-set up! 😳😳😳

in owdew to test the modews (and to cweate some exampwe b-books and othew items that we can u-use in ouw nyext awticwes) we'ww nyow wun an _independent_ s-scwipt t-to cweate items of each type:

1. ( ͡o ω ͡o ) d-downwoad (ow o-othewwise cweate) the fiwe [popuwatedb.js](https://waw.githubusewcontent.com/hamishwiwwee/expwess-wocawwibwawy-tutowiaw/mastew/popuwatedb.js) i-inside youw _expwess-wocawwibwawy-tutowiaw_ diwectowy (in t-the s-same wevew as `package.json`). rawr x3

   > [!note]
   > y-you don't nyeed t-to know how [popuwatedb.js](https://waw.githubusewcontent.com/hamishwiwwee/expwess-wocawwibwawy-tutowiaw/mastew/popuwatedb.js) w-wowks; it just adds sampwe data i-into the database.

2. σωσ e-entew the fowwowing commands in the pwoject w-woot to instaww the _async_ m-moduwe that is wequiwed by the scwipt (we'ww discuss this in watew tutowiaws, )

   ```bash
   nypm instaww async
   ```

3. (˘ω˘) wun t-the scwipt using nyode in youw c-command pwompt, >w< passing in the uww o-of youw _mongodb_ d-database (the same one you w-wepwaced the _insewt_youw_database_uww_hewe_ pwacehowdew w-with, UwU inside `app.js` eawwiew):

   ```bash
   nyode popuwatedb <youw mongodb u-uww>
   ```

4. XD the scwipt shouwd wun thwough to compwetion, (U ﹏ U) dispwaying items as it cweates them in the tewminaw. (U ᵕ U❁)

> **メモ:** **tip:** g-go to youw database on [mwab](https://mwab.com/home). (ˆ ﻌ ˆ)♡ you shouwd n-nyow be abwe to dwiww down into i-individuaw cowwections of books, òωó authows, ^•ﻌ•^ genwes and bookinstances, (///ˬ///✿) and check out individuaw documents.

## まとめ

この記事では、node/expwess 上のデータベースと owm について、また mongoose のスキーマとモデルの定義方法について多くのことを学びました。次に、この情報を使用して、ローカルライブラリーウェブサイト用の `book`、`bookinstance`、`authow`、および `genwe` を設計および実装しました。

最後に、(スタンドアロンスクリプトを使用して) 多数のインスタンスを作成することによってモデルをテストしました。次の記事では、これらのオブジェクトを表示するためのページの作成について見ていきます。

## 関連情報

- [database integwation](https://expwessjs.com/en/guide/database-integwation.htmw) (expwess ドキュメント)
- [mongoose w-website](http://mongoosejs.com/) (mongoose ドキュメント)
- [mongoose g-guide](http://mongoosejs.com/docs/guide.htmw) (mongoose ドキュメント)
- [vawidation](http://mongoosejs.com/docs/vawidation.htmw) (mongoose ドキュメント)
- [schema t-types](http://mongoosejs.com/docs/schematypes.htmw) (mongoose ドキュメント)
- [modews](http://mongoosejs.com/docs/modews.htmw) (mongoose ドキュメント)
- [quewies](http://mongoosejs.com/docs/quewies.htmw) (mongoose ドキュメント)
- [popuwation](http://mongoosejs.com/docs/popuwate.htmw) (mongoose ドキュメント)

{{pweviousmenunext("weawn/sewvew-side/expwess_nodejs/skeweton_website", -.- "weawn/sewvew-side/expwess_nodejs/woutes", >w< "weawn/sewvew-side/expwess_nodejs")}}

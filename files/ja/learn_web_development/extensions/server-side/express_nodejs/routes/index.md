---
title: "Express チュートリアル Part 4: ルートとコントローラー"
short-title: "4: ルートとコントローラー"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/routes
l10n:
  sourceCommit: d775e1249487f1a7ab9a8a031c70ca71bc892d63
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

このチュートリアルでは、[地域図書館](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website)ウェブサイトで最終的に必要となるすべてのリソースエンドポイントに対して、「ダミー」のハンドラー関数を持つルート（URL を処理するコード）を設定します。完了すると、ルート処理コードはモジュール化された構造になり、後続の記事で実際のハンドラー関数を追加できるようになります。また、Express を使用してモジュール化されたルートを作成する方法についても、よく理解できるようになります。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <a href="/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction">Express/Node の紹介</a>を読むこと。
        以前のチュートリアル（<a href="/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose">Express チュートリアル Part 3: データベースの使用（Mongoose を使用）</a>を含む）を完了していること。
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>
        単純なルートの作成方法を理解すること。
        すべての URL エンドポイントを設定すること。
      </td>
    </tr>
  </tbody>
</table>

## 概要

[前回のチュートリアル記事](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose)では、データベースとやり取りするための _Mongoose_ モデルを定義し、（スタンドアロンの）スクリプトを使用して図書館の初期レコードをいくつか作成しました。これで、その情報をユーザーに提示するコードを書くことができます。まず、ページにどの情報を表示できるようにするかを決め、それらのリソースを返すための適切な URL を定義する必要があります。次に、それらのページを表示するためのルート（URL ハンドラー）とビュー（テンプレート）を作成します。

下の図は、HTTP リクエストとレスポンスを処理する際の主なデータの流れと、実装が必要なものを再確認するためのものです。図にはビューとルートに加え、「コントローラー」も示されています。これは、リクエストをルーティングするコードと、実際にリクエストを処理するコードを分離する関数です。

モデルはすでに作成したので、主に作成する必要があるものは次のとおりです。

- 対応するリクエスト（およびリクエスト URL にエンコードされた情報）を適切なコントローラー関数に転送する「ルート」。
- モデルからリクエストされたデータを取得し、そのデータを表示する HTML ページを作成して、ユーザーがブラウザーで閲覧できるように返すコントローラー関数。
- コントローラーがデータを描画するために使用するビュー（テンプレート）。

![MVC 形式の Express サーバーの主なデータの流れを示す図。ルートは Express サーバーに送られた HTTP リクエストを受け取り、適切なコントローラー関数に転送します。コントローラーはモデルからデータを読み書きします。モデルはデータベースに接続され、サーバーからデータにアクセスできるようにします。コントローラーはテンプレートとも呼ばれるビューを使用してデータを描画し、HTML を HTTP レスポンスとしてクライアントに返します。](mvc_express.png)

最終的には、書籍、ジャンル、著者、書籍インスタンスの一覧と詳細情報を表示するページに加え、レコードを作成、更新、削除するページが必要になるでしょう。これを 1 つの記事で説明するには量が多すぎます。そのため、この記事の大部分では、「ダミー」のコンテンツを返すルートとコントローラーの設定に焦点を当てます。後続の記事でコントローラーメソッドを拡張し、モデルデータを扱うようにします。

最初の節では、Express の [Router](https://expressjs.com/en/5x/api/router/)<sup>(英語)</sup> ミドルウェアの使い方について簡単に「入門」します。その知識を使って、後の節で地域図書館のルートを設定します。

## ルート入門

ルートは、[HTTP 述語](/ja/docs/Web/HTTP/Reference/Methods)（`GET`、`POST`、`PUT`、`DELETE` など）、URL のパスまたはパターン、およびそのパターンを処理するために呼び出される関数を関連付ける Express コードの一部です。

ルートを作成する方法はいくつかあります。このチュートリアルでは、[`express.Router`](https://expressjs.com/en/guide/routing/#expressrouter)<sup>(英語)</sup> ミドルウェアを使用します。これにより、サイトの特定の部分のルートハンドラーをまとめ、共通のルート接頭辞を使用してアクセスできます。図書館に関連するルートはすべて "catalog" モジュールにまとめ、ユーザーアカウントやその他の機能を扱うルートを追加する場合は、別々にまとめることができます。

> [!NOTE]
> Express アプリケーションのルートについては、[Express の紹介 > ルートハンドラーの作成](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#ルートハンドラーの作成)で簡単に説明しました。_Router_ を使用する方法は、（次の小節で説明するように）モジュール化しやすいことを除けば、_Express アプリケーションオブジェクト_ に直接ルートを定義する方法とよく似ています。

この節の残りでは、`Router` を使用してルートを定義する方法の概要を説明します。

### 個別のルートモジュールの定義と使用

下記のコードは、ルートモジュールを作成し、_Express_ アプリケーションで使用する方法の具体例を示しています。

まず、**wiki.js** という名前のモジュールにウィキ用のルートを作成します。このコードはまず Express から `Router` 関数をインポートし、それを使用してルーターを作成してから、`get()` メソッドを使ってルートを 2 つ追加します。最後に、このモジュールは `Router` オブジェクトをエクスポートします。

```js
// wiki.js - ウィキのルートモジュール

import { Router } from "express";

const router = Router();

// ホームページのルート
router.get("/", (req, res) => {
  res.send("Wiki home page");
});

// 紹介ページのルート
router.get("/about", (req, res) => {
  res.send("About this wiki");
});

export default router;
```

> [!NOTE]
> 上記では、ルートハンドラーのコールバックをルーター関数内で直接定義しています。地域図書館では、これらのコールバックを別のコントローラーモジュールで定義します。

メインのアプリファイルでルーターモジュールを使用するには、まずルートモジュール (**wiki.js**) を `import` します。次に、_Express_ アプリケーションで `use()` を呼び出し、URL パスとして "wiki" を指定して、ミドルウェアの処理経路に Router を追加します。

```js
import wiki from "./wiki.js";

// …
app.use("/wiki", wiki);
```

これで、ウィキのルートモジュールに定義した 2 つのルートに `/wiki/` と `/wiki/about/` からアクセスできるようになります。

### ルート関数

上記のモジュールでは、一般的なルート関数を 2 つ定義しています。（下記に再掲した）"about" ルートは `Router.get()` メソッドを使用して定義しており、HTTP の GET リクエストにのみ応答します。このメソッドの第一引数は URL パス、第二引数はそのパスへの HTTP GET リクエストを受信した場合に呼び出されるコールバック関数です。

```js
router.get("/about", (req, res) => {
  res.send("About this wiki");
});
```

コールバックは 3 つの引数（通常は `req`、`res`、`next` という名前）を取り、それぞれ HTTP リクエストオブジェクト、HTTP レスポンス、ミドルウェアチェーン内の _next_ 関数が入ります。

> [!NOTE]
> ルーター関数は [Express ミドルウェア](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#ミドルウェアの使用)であるため、リクエストを完了（応答）するか、チェーン内の `next` 関数を呼び出す必要があります。上記の場合は `send()` を使用してリクエストを完了するため、`next` 引数は使用されず、指定していません。
>
> 上記のルーター関数はコールバックを 1 つ取りますが、コールバック引数をいくつでも指定することや、コールバック関数の配列を指定することもできます。各関数はミドルウェアチェーンの一部であり、（先行する関数がリクエストを完了しない限り）チェーンに追加された順に呼び出されます。

このコールバック関数は、パス (`/about`) への GET リクエストを受信すると、レスポンスで [`send()`](https://expressjs.com/en/5x/api/response/#ressend)<sup>(英語)</sup> を呼び出し、文字列 "About this wiki" を返します。リクエストとレスポンスのサイクルを終了するための[レスポンスメソッドは他にも多数あります](https://expressjs.com/en/guide/routing/#response-methods)<sup>(英語)</sup>。例えば、[`res.json()`](https://expressjs.com/en/5x/api/response/#resjson)<sup>(英語)</sup> を呼び出して JSON レスポンスを送信したり、[`res.sendFile()`](https://expressjs.com/en/5x/api/response/#ressendfile)<sup>(英語)</sup> を呼び出してファイルを送信したりできます。図書館を構築する際に最も頻繁に使用するレスポンスメソッドは、テンプレートとデータを使用して HTML ファイルを作成して返す [`render()`](https://expressjs.com/en/5x/api/response/#resrender)<sup>(英語)</sup> です。これについては後の記事で詳しく説明します。

### HTTP 述語

上記のルート例では、`Router.get()` メソッドを使用して、特定のパスへの HTTP `GET` リクエストに応答しています。

`Router` は、その他すべての [HTTP 述語](/ja/docs/Web/HTTP/Reference/Methods)に対応するルートメソッドも提供しており、そのほとんどはまったく同じ方法で使用します。`post()`、`put()`、`delete()`、`options()`、`trace()`、`copy()`、`lock()`、`mkcol()`、`move()`、`purge()`、`propfind()`、`proppatch()`、`unlock()`、`report()`、`mkactivity()`、`checkout()`、`merge()`、`m-search()`、`notify()`、`subscribe()`、`unsubscribe()`、`patch()`、`search()`、`connect()` です。

例えば、下記のコードは先ほどの `/about` ルートと同様に動作しますが、HTTP POST リクエストにのみ応答します。

```js
router.post("/about", (req, res) => {
  res.send("About this wiki");
});
```

ウェブサイトでは、実行する操作に最も適したルートメソッド（および HTTP メソッド）を使用することが理想的です。
例えば、クライアント側で描画するアプリケーションでは、データベースの読み取りに `Router.get()`、新しいレコードの作成に `Router.post()`、レコードの更新に `Router.put()` または `Router.patch()`、データの削除に `Router.delete()` を使用するべきです。

ただし、このチュートリアルで示すようなサーバー側で描画するアプリケーションでは、データを変更するすべてのルートに `Router.post()` を使用するのが一般的です。
これは、デフォルトでは HTML の `<form>` 要素が [`GET`](/ja/docs/Web/HTTP/Reference/Methods/GET) と [`POST`](/ja/docs/Web/HTTP/Reference/Methods/POST) のリクエストしか送信できないためです。

この制限にはさまざまな回避策があります。例えば、「目的の」HTTP 述語を `POST` リクエストにエンコードし、Express の [method-override](https://www.npmjs.com/package/method-override)<sup>(英語)</sup> ミドルウェアを使用して、リクエストがルーターに渡される前に適切な HTTP 述語に変更する方法があります。
基本的なアプリケーションでは、正しい HTTP 述語を使用するためだけにコードを書き換えることは、通常は過剰です。
サーバーのログ記録を改善する場合や、サーバーが同じエンドポイントを通じてサーバー側とクライアント側の両方で描画されるコンテンツを扱う必要がある場合には、価値があるかもしれません。

### ルートパス

ルートパスは、リクエストを行うことができるエンドポイントを定義します。これまで見てきた例は単なる文字列であり、書かれたとおりに使用されます。"/"、"/about"、"/book"、"/any-random.path" です。

ルートパスは文字列パターンにすることもできます。文字列パターンでは、正規表現に似た構文を使用して、一致させるエンドポイントの_パターン_を定義します。
地域図書館のルートのほとんどでは、正規表現ではなく文字列を使用します。
また、次の節で説明するルート引数も使用します。

### ルート引数

ルート引数は、URL の特定の位置にある値を取得するために使用する、_名前付きの URL 区間_です。名前付きの区間には、コロンに続けて名前を付けます（例: `/:your_parameter_name/`）。取得した値は、引数名をキーとして `req.params` オブジェクトに格納されます（例: `req.params.your_parameter_name`）。

例えば、ユーザーと書籍の情報を含むようにエンコードされた URL `http://localhost:3000/users/34/books/8989` を考えてみましょう。下記のように、`userId` と `bookId` のパス引数を使用して、この情報を抽出できます。

```js
app.get("/users/:userId/books/:bookId", (req, res) => {
  // userId には req.params.userId でアクセス
  // bookId には req.params.bookId でアクセス
  res.send(req.params);
});
```

> [!NOTE]
> URL _/book/create_ は、`/book/:bookId` のようなルートに一致します（`:bookId` は_任意の_文字列のプレースホルダーなので、`create` も一致します）。受信した URL に一致する最初のルートが使用されるため、`/book/create` URL を特別に処理したい場合は、そのルートハンドラーを `/book/:bookId` ルートより先に定義する必要があります。

ルート引数名（例えば、上記の `bookId`）には、文字、`_`、`$` のいずれかで始まる有効な JavaScript 識別子を使用できます。2 文字目以降には数字を含めることができますが、ハイフンや空白は含められません。
空白、ハイフン、絵文字、その他の任意の文字を含む、有効な JavaScript 識別子ではない名前も使用できますが、引用符で囲んだ文字列で定義し、角括弧記法でアクセスする必要があります。
例えば次のとおりです。

```js
app.get('/users/:"user id"/books/:"book-id"', (req, res) => {
  // 引用符で囲んだ引数に角括弧記法でアクセス
  const user = req.params["user id"];
  const book = req.params["book-id"];
  res.send({ user, book });
});
```

### ワイルドカード

ワイルドカード引数は、複数の区間にまたがる 1 文字以上に一致し、それぞれの区間を配列の値として返します。
通常の引数と同じ方法で定義しますが、先頭にアスタリスクを付けます。

例えば、URL `http://localhost:3000/users/34/books/8989` を考えてみましょう。`example` ワイルドカードを使用すると、`users/` より後のすべての情報を抽出できます。

```js
app.get("/users/*example", (req, res) => {
  // req.params には { "example": ["34", "books", "8989"]} が入る
  res.send(req.params);
});
```

### 省略可能な部分

中括弧を使用すると、パスの省略可能な部分を定義できます。
例えば、下記では任意の拡張子を持つファイル名（または拡張子のないファイル名）に一致させます。

```js
app.get("/file/:filename{.:ext}", (req, res) => {
  // 指定された URL: http://localhost:3000/file/somefile.md`
  // req.params には { "filename": "somefile", "ext": "md"} が入る
  res.send(req.params);
});
```

### 予約文字

次の文字は予約されています: `(()[]?+!)`。
これらを使用する場合は、逆斜線 (`\`) でエスケープする必要があります。

また、正規表現ではパイプ文字 (`|`) を使用できません。

ルートを使い始めるために必要なことは以上です。
必要に応じて、Express ドキュメントの[基本的なルーティング](https://expressjs.com/en/starter/basic-routing/)<sup>(英語)</sup>と[ルーティングガイド](https://expressjs.com/en/guide/routing/)<sup>(英語)</sup>で詳細を確認できます。次の節からは、地域図書館のルートとコントローラーを設定する方法を示します。

### ルート関数内のエラーと例外の処理

先ほど示したルート関数はすべて `req` と `res` の引数を持ち、それぞれリクエストとレスポンスを表します。
ルート関数には第三引数 `next` も渡されます。これには、エラーや例外を Express のミドルウェアチェーンに渡すために呼び出せるコールバック関数が入っており、エラーは最終的にグローバルなエラー処理コードへ伝播します。

Express 5 以降では、ルートハンドラーが返した[プロミス](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise)が後に拒否された場合、拒否値を引数として `next` が自動的に呼び出されます。そのため、プロミスを使用する場合はルート関数内にエラー処理コードを記述する必要はありません。
これにより、プロミスを使用する非同期 API を扱う際、特に [`async` と `await`](/ja/docs/Learn_web_development/Extensions/Async_JS/Promises#async_と_await) を使用する際に、非常に簡潔なコードになります。

例えば、次のコードは `find()` メソッドを使用してデータベースにクエリーを実行し、結果を描画します。

```js
router.get("/about", async (req, res, next) => {
  const successfulResult = await About.find({}).exec();
  res.render("about_view", { title: "About", list: successfulResult });
});
```

下記のコードは、同じ例をプロミスチェーンを使用して示しています。
必要に応じて `catch()` でエラーを捕捉し、独自の処理を実装することもできます。

```js
router.get(
  "/about",
  // 'async' を除去
  (req, res, next) =>
    About.find({})
      .exec()
      .then((successfulResult) => {
        res.render("about_view", { title: "About", list: successfulResult });
      })
      .catch((err) => {
        next(err);
      }),
);
```

> [!NOTE]
> 現代の API のほとんどは非同期でプロミスを使用するため、エラー処理はこのように簡単なことが多いです。
> 少なくとも、このチュートリアルでエラー処理について知っておく_必要がある_ことは、これだけです。

Express 5 は、同期コードで発生した例外を自動的に捕捉して転送します。

```js
app.get("/", (req, res) => {
  // Express がこれを捕捉
  throw new Error("SynchronousException");
});
```

ただし、ルートハンドラーやミドルウェアから呼び出された非同期コードで発生する例外は、[`catch()`](/ja/docs/Web/JavaScript/Reference/Statements/try...catch) で捕捉する必要があります。これらはデフォルトのコードでは捕捉されません。

```js
app.get("/", (req, res, next) => {
  setTimeout(() => {
    try {
      // このエラーは自分で捕捉して伝播させる必要がある
      throw new Error("AsynchronousException");
    } catch (err) {
      next(err);
    }
  }, 100);
});
```

最後に、エラーまたは結果をコールバック関数に渡す旧形式の非同期 API を使用する場合は、自分でエラーを伝播させる必要があります。
次の例では、Node の `readFile()` 関数のコールバック版を使用して、その方法を示します。

```js
import { readFile } from "node:fs";

router.get("/about", (req, res, next) => {
  readFile("about.txt", "utf8", (err, text) => {
    if (err) {
      // エラーを伝播
      return next(err);
    }
    // 成功したのでファイルの内容を送信
    res.send(text);
  });
});
```

詳しくは[エラー処理](https://expressjs.com/en/guide/error-handling/)<sup>(英語)</sup>を参照してください。

## 地域図書館に必要なルート

最終的にページに必要となる URL を下記に示します。_object_ はそれぞれのモデルの名前（book、bookinstance、genre、author）に置き換えます。_objects_ は object の複数形で、_id_ は各 Mongoose モデルインスタンスにデフォルトで与えられる一意のインスタンスフィールド (`_id`) です。

- `catalog/` — ホームページまたはインデックスページ。
- `catalog/<objects>/` — すべての書籍、書籍インスタンス、ジャンル、著者のいずれかの一覧（例: `/catalog/books/`、`/catalog/genres/` など）。
- `catalog/<object>/<id>` — 指定された `_id` フィールドの値を持つ、特定の書籍、書籍インスタンス、ジャンル、著者の詳細ページ（例: `/catalog/book/584493c1f4887f06c0e67d37`）。
- `catalog/<object>/create` — 新しい書籍、書籍インスタンス、ジャンル、著者を作成するためのフォーム（例: `/catalog/book/create`）。
- `catalog/<object>/<id>/update` — 指定された `_id` フィールドの値を持つ、特定の書籍、書籍インスタンス、ジャンル、著者を更新するためのフォーム（例: `/catalog/book/584493c1f4887f06c0e67d37/update`）。
- `catalog/<object>/<id>/delete` — 指定された `_id` フィールドの値を持つ、特定の書籍、書籍インスタンス、ジャンル、著者を削除するためのフォーム（例: `/catalog/book/584493c1f4887f06c0e67d37/delete`）。

最初のホームページと一覧ページには、追加の情報はエンコードされていません。返される結果はモデルの種類とデータベースの内容に依存しますが、情報を取得するために実行されるクエリーは常に同じです（同様に、オブジェクトの作成に実行されるコードも常に似たものになります）。

一方、他の URL は特定の文書またはモデルインスタンスを操作するために使用され、アイテムの識別情報を URL 内にエンコードしています（上記の `<id>`）。パス引数を使用してエンコードされた情報を抽出し、ルートハンドラーに渡します（後の記事では、この情報を使ってデータベースから取得する情報を動的に決定します）。情報を URL にエンコードすることで、特定の種類のリソースごとに 1 つのルートだけが必要になります（例えば、個々の書籍アイテムの表示をすべて処理する 1 つのルート）。

> [!NOTE]
> Express では、URL を好きな方法で構成できます。上記のように URL 本体に情報をエンコードすることも、URL の `GET` 引数（例: `/book/?id=6`）を使用することもできます。どちらの方法でも、URL は簡潔で論理的かつ読みやすく保つべきです（[W3C のアドバイス](https://www.w3.org/Provider/Style/URI)<sup>(英語)</sup>を参照してください）。

次に、上記のすべての URL に対するルートハンドラーのコールバック関数とルートコードを作成します。

## ルートハンドラーのコールバック関数の作成

ルートを定義する前に、ルートが呼び出すすべてのダミーまたはスケルトンのコールバック関数を作成します。コールバックは `Book`、`BookInstance`、`Genre`、`Author` ごとに別々の「コントローラー」モジュールに格納します（ファイルやモジュールは任意の構造にできますが、このプロジェクトにはこれが適切な分割に思えます）。

まず、プロジェクトルートにコントローラー用のフォルダー (**controllers/**) を作成し、各モデルを扱うための個別のコントローラーファイルまたはモジュールを作成します。

```plain
express-locallibrary-tutorial
├── controllers
│   ├── authorController.js
│   ├── bookController.js
│   ├── bookinstanceController.js
│   └── genreController.js
...
```

Bash または同様のシェルを使用している場合は、次のコマンドですべて作成できます。

```bash
mkdir controllers && touch controllers/{authorController,bookController,bookinstanceController,genreController}.js
```

### Author コントローラー

**controllers/authorController.js** ファイルを開き、次のコードを貼り付けてください。

```js
import Author from "../models/author.js";

// すべての著者の一覧を表示
export const authorList = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author list");
};

// 特定の著者の詳細ページを表示
export const authorDetail = async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Author detail: ${req.params.id}`);
};

// GET で著者の作成フォームを表示
export const authorCreateGet = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author create GET");
};

// POST で著者の作成を処理
export const authorCreatePost = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author create POST");
};

// GET で著者の削除フォームを表示
export const authorDeleteGet = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author delete GET");
};

// POST で著者の削除を処理
export const authorDeletePost = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author delete POST");
};

// GET で著者の更新フォームを表示
export const authorUpdateGet = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author update GET");
};

// POST で著者の更新を処理
export const authorUpdatePost = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author update POST");
};
```

このモジュールは、後でデータのアクセスと更新に使用する `Author` モデルをまずインポートします。
次に、処理する各 URL に対応する関数をエクスポートします。
作成、更新、削除の操作にはフォームを使用するため、フォームの POST リクエストを処理するメソッドも追加されています。これらのメソッドについては、後の「フォームの記事」で説明します。

これらの関数は、対応するページがまだ作成されていないことを示す文字列で応答します。
コントローラー関数がパス引数を受け取る場合は、その引数がメッセージ文字列に出力されます（上記の `req.params.id` を参照）。

#### BookInstance コントローラー

**controllers/bookinstanceController.js** ファイルを開き、次のコードを貼り付けてください（`Author` コントローラーモジュールと同じパターンです）。

```js
import BookInstance from "../models/bookinstance.js";

// すべての書籍インスタンスの一覧を表示
export const bookInstanceList = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: BookInstance list");
};

// 特定の書籍インスタンスの詳細ページを表示
export const bookInstanceDetail = async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: BookInstance detail: ${req.params.id}`);
};

// GET で書籍インスタンスの作成フォームを表示
export const bookInstanceCreateGet = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: BookInstance create GET");
};

// POST で書籍インスタンスの作成を処理
export const bookInstanceCreatePost = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: BookInstance create POST");
};

// GET で書籍インスタンスの削除フォームを表示
export const bookInstanceDeleteGet = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: BookInstance delete GET");
};

// POST で書籍インスタンスの削除を処理
export const bookInstanceDeletePost = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: BookInstance delete POST");
};

// GET で書籍インスタンスの更新フォームを表示
export const bookInstanceUpdateGet = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: BookInstance update GET");
};

// POST で書籍インスタンスの更新を処理
export const bookInstanceUpdatePost = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: BookInstance update POST");
};
```

#### Genre コントローラー

**controllers/genreController.js** ファイルを開き、次のテキストを貼り付けてください（`Author` と `BookInstance` のファイルと同じパターンです）。

```js
import Genre from "../models/genre.js";

// すべてのジャンルの一覧を表示
export const genreList = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre list");
};

// 特定のジャンルの詳細ページを表示
export const genreDetail = async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Genre detail: ${req.params.id}`);
};

// GET でジャンルの作成フォームを表示
export const genreCreateGet = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre create GET");
};

// POST でジャンルの作成を処理
export const genreCreatePost = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre create POST");
};

// GET でジャンルの削除フォームを表示
export const genreDeleteGet = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre delete GET");
};

// POST でジャンルの削除を処理
export const genreDeletePost = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre delete POST");
};

// GET でジャンルの更新フォームを表示
export const genreUpdateGet = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre update GET");
};

// POST でジャンルの更新を処理
export const genreUpdatePost = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre update POST");
};
```

#### Book コントローラー

**controllers/bookController.js** ファイルを開き、次のコードを貼り付けてください。
これは他のコントローラーモジュールと同じパターンですが、サイトのウェルカムページを表示する `index()` 関数が追加されています。

```js
import Book from "../models/book.js";

export const index = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Site Home Page");
};

// すべての書籍の一覧を表示
export const bookList = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book list");
};

// 特定の書籍の詳細ページを表示
export const bookDetail = async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Book detail: ${req.params.id}`);
};

// GET で書籍の作成フォームを表示
export const bookCreateGet = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book create GET");
};

// POST で書籍の作成を処理
export const bookCreatePost = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book create POST");
};

// GET で書籍の削除フォームを表示
export const bookDeleteGet = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book delete GET");
};

// POST で書籍の削除を処理
export const bookDeletePost = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book delete POST");
};

// GET で書籍の更新フォームを表示
export const bookUpdateGet = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book update GET");
};

// POST で書籍の更新を処理
export const bookUpdatePost = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book update POST");
};
```

## catalog ルートモジュールの作成

次に、[地域図書館ウェブサイトに必要な](#地域図書館に必要なルート)すべての URL の_ルート_を作成します。これらは、前の節で定義したコントローラー関数を呼び出します。

スケルトンには、_index_ と _users_ のルートを含む **./routes** フォルダーがすでにあります。
図のように、このフォルダー内にもう 1 つのルートファイル **catalog.js** を作成してください。

```plain
express-locallibrary-tutorial
├── routes
│   ├── catalog.js
│   ├── index.js
│   └── users.js
...
```

**routes/catalog.js** を開き、下記のコードを貼り付けてください。

```js
import { Router } from "express";

// コントローラーモジュールをインポート
import * as bookController from "../controllers/bookController.js";
import * as authorController from "../controllers/authorController.js";
import * as genreController from "../controllers/genreController.js";
import * as bookInstanceController from "../controllers/bookinstanceController.js";

const router = Router();

/// 書籍のルート ///

// カタログのホームページへの GET リクエスト
router.get("/", bookController.index);

// 書籍の作成用 GET リクエスト。書籍を表示するルート（id を使用）より前に置く必要がある
router.get("/book/create", bookController.bookCreateGet);

// 書籍の作成用 POST リクエスト
router.post("/book/create", bookController.bookCreatePost);

// 書籍の削除用 GET リクエスト
router.get("/book/:id/delete", bookController.bookDeleteGet);

// 書籍の削除用 POST リクエスト
router.post("/book/:id/delete", bookController.bookDeletePost);

// 書籍の更新用 GET リクエスト
router.get("/book/:id/update", bookController.bookUpdateGet);

// 書籍の更新用 POST リクエスト
router.post("/book/:id/update", bookController.bookUpdatePost);

// 1 冊の書籍を表示する GET リクエスト
router.get("/book/:id", bookController.bookDetail);

// すべての書籍の一覧を表示する GET リクエスト
router.get("/books", bookController.bookList);

/// 著者のルート ///

// 著者の作成用 GET リクエスト。id を使用するルート（著者の表示）より前に置く必要がある
router.get("/author/create", authorController.authorCreateGet);

// 著者の作成用 POST リクエスト
router.post("/author/create", authorController.authorCreatePost);

// 著者の削除用 GET リクエスト
router.get("/author/:id/delete", authorController.authorDeleteGet);

// 著者の削除用 POST リクエスト
router.post("/author/:id/delete", authorController.authorDeletePost);

// 著者の更新用 GET リクエスト
router.get("/author/:id/update", authorController.authorUpdateGet);

// 著者の更新用 POST リクエスト
router.post("/author/:id/update", authorController.authorUpdatePost);

// 1 人の著者を表示する GET リクエスト
router.get("/author/:id", authorController.authorDetail);

// すべての著者の一覧を表示する GET リクエスト
router.get("/authors", authorController.authorList);

/// ジャンルのルート ///

// ジャンルの作成用 GET リクエスト。ジャンルを表示するルート（id を使用）より前に置く必要がある
router.get("/genre/create", genreController.genreCreateGet);

// ジャンルの作成用 POST リクエスト
router.post("/genre/create", genreController.genreCreatePost);

// ジャンルの削除用 GET リクエスト
router.get("/genre/:id/delete", genreController.genreDeleteGet);

// ジャンルの削除用 POST リクエスト
router.post("/genre/:id/delete", genreController.genreDeletePost);

// ジャンルの更新用 GET リクエスト
router.get("/genre/:id/update", genreController.genreUpdateGet);

// ジャンルの更新用 POST リクエスト
router.post("/genre/:id/update", genreController.genreUpdatePost);

// 1 つのジャンルを表示する GET リクエスト
router.get("/genre/:id", genreController.genreDetail);

// すべてのジャンルの一覧を表示する GET リクエスト
router.get("/genres", genreController.genreList);

/// 書籍インスタンスのルート ///

// 書籍インスタンスの作成用 GET リクエスト。表示用ルート（id を使用）より前に置く必要がある
router.get(
  "/bookinstance/create",
  bookInstanceController.bookInstanceCreateGet,
);

// 書籍インスタンスの作成用 POST リクエスト
router.post(
  "/bookinstance/create",
  bookInstanceController.bookInstanceCreatePost,
);

// 書籍インスタンスの削除用 GET リクエスト
router.get(
  "/bookinstance/:id/delete",
  bookInstanceController.bookInstanceDeleteGet,
);

// 書籍インスタンスの削除用 POST リクエスト
router.post(
  "/bookinstance/:id/delete",
  bookInstanceController.bookInstanceDeletePost,
);

// 書籍インスタンスの更新用 GET リクエスト
router.get(
  "/bookinstance/:id/update",
  bookInstanceController.bookInstanceUpdateGet,
);

// 書籍インスタンスの更新用 POST リクエスト
router.post(
  "/bookinstance/:id/update",
  bookInstanceController.bookInstanceUpdatePost,
);

// 1 つの書籍インスタンスを表示する GET リクエスト
router.get("/bookinstance/:id", bookInstanceController.bookInstanceDetail);

// すべての書籍インスタンスの一覧を表示する GET リクエスト
router.get("/bookinstances", bookInstanceController.bookInstanceList);

export default router;
```

このモジュールは Express から `Router` 関数をインポートし、それを使用してルーターを作成します。すべてのルートをルーターに設定し、そのルーターをエクスポートします。

ルートは、ルーターオブジェクトの `.get()` または `.post()` メソッドを使用して定義します。
すべてのパスは文字列で定義します（文字列パターンや正規表現は使用しません）。
特定のリソース（例えば書籍）を操作するルートは、パス引数を使用して URL からオブジェクトの ID を取得します。

ハンドラー関数はすべて、前の節で作成したコントローラーモジュールからインポートしています。

### index ルートモジュールの更新

新しいルートをすべて設定しましたが、元のページへのルートはまだ残っています。代わりに、パス `/catalog` に作成した新しいインデックスページへリダイレクトするようにしましょう。

**routes/index.js** を開き、既存のルートを下記の関数に置き換えてください。

```js
// ホームページへの GET リクエスト
router.get("/", (req, res) => {
  res.redirect("/catalog");
});
```

> [!NOTE]
> ここでは初めて [`redirect()`](https://expressjs.com/en/5x/api/response/#resredirect)<sup>(英語)</sup> レスポンスメソッドを使用しています。これは指定されたページにリダイレクトし、デフォルトで HTTP ステータスコード "302 Found" を送信します。必要に応じて返されるステータスコードを変更でき、絶対パスと相対パスのどちらも指定できます。

### app.js の更新

最後の手順は、ルートをミドルウェアチェーンに追加することです。
これを `app.js` で行います。

**app.js** を開き、他のルートの下に catalog ルートをインポートしてください（すでにファイルに存在するはずの他の 2 行の下に、下記の 3 行目を追加します）。

```js
import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";
import catalogRouter from "./routes/catalog.js"; // サイトの "catalog" 部分のルートをインポート
```

次に、ミドルウェアスタック内の他のルートの下に catalog ルートを追加してください（すでにファイルに存在するはずの他の 2 行の下に、下記の 3 行目を追加します）。

```js
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/catalog", catalogRouter); // catalog のルートをミドルウェアチェーンに追加
```

> [!NOTE]
> catalog モジュールをパス `/catalog` に追加しました。これは、catalog モジュール内で定義したすべてのパスの先頭に追加されます。例えば、書籍の一覧にアクセスする URL は `/catalog/books/` になります。

これで完了です。地域図書館ウェブサイトで最終的に対応するすべての URL に対して、ルートとスケルトン関数が有効になりました。

### ルートのテスト

ルートをテストするには、まず通常の方法でウェブサイトを起動します。

- デフォルトの方法

  ```bash
  # Windows
  SET DEBUG=express-locallibrary-tutorial:* & npm start

  # macOS or Linux
  DEBUG=express-locallibrary-tutorial:* npm start
  ```

- [サーバーの自動再起動](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website#スケルトンウェブサイトの実行)を使用するには、代わりに次のコマンドを使用します。

  ```bash
  npm run devstart
  ```

次に、地域図書館のいくつかの URL に移動し、エラーページ (HTTP 404) が表示されないことを確認します。参考までに、URL をいくつか下記に示します。

- `http://localhost:3000/`
- `http://localhost:3000/catalog`
- `http://localhost:3000/catalog/books`
- `http://localhost:3000/catalog/bookinstances/`
- `http://localhost:3000/catalog/authors/`
- `http://localhost:3000/catalog/genres/`
- `http://localhost:3000/catalog/book/5846437593935e2f8c2aa226`
- `http://localhost:3000/catalog/book/create`

## まとめ

これで、サイトのすべてのルートと、後の記事で完全な実装に置き換えることができるダミーのコントローラー関数を作成しました。その過程で、Express のルート、例外処理、およびルートとコントローラーを構造化する方法について、多くの基本的な情報を学びました。

次の記事では、ビュー（テンプレート）とモデルに格納された情報を使用して、サイトの適切なウェルカムページを作成します。

## 関連情報

- [基本的なルーティング](https://expressjs.com/en/starter/basic-routing/)<sup>(英語)</sup>（Express ドキュメント）
- [ルーティングガイド](https://expressjs.com/en/guide/routing/)<sup>(英語)</sup>（Express ドキュメント）

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

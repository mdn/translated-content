---
title: "Express チュートリアル Part 2: スケルトンウェブサイトの作成"
short-title: "2: スケルトンウェブサイト"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website
l10n:
  sourceCommit: d775e1249487f1a7ab9a8a031c70ca71bc892d63
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

この [Express チュートリアル](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website)の 2回目の記事では、「スケルトン」ウェブサイトプロジェクトを作成し、そこにサイト固有のルート、テンプレート/ビュー、データベース呼び出しを追加する方法を説明します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <a href="/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment">Node 開発環境をセットアップすること</a>。
        Express チュートリアルを確認してください。
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>
        Express プロジェクトにルート、テンプレート、サーバーコードを追加すること。
      </td>
    </tr>
  </tbody>
</table>

## 概要

この記事では、[Node 開発環境の設定](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment)で作成したプロジェクト設定を基にします。サーバー、ルート、テンプレートを追加して、[地域図書館ウェブサイト](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website)の骨組みを作成します。この骨組みに、後でサイトに必要な他のコードをすべて追加します。

次の節では、ビュー/CSS オプションの選択理由を説明し、プロジェクトファイルに貼り付けるコードを示し、ウェブサイトを実行して動作を確認する方法を説明します。

## プロジェクトコンポーネントの選択

このチュートリアルでは、各タスクで使用するライブラリーの選択をすべて決定済みです。自分のプロジェクトでは選択を自分で行う必要があるため、エコシステムの基本的な概要を示します。[パッケージ管理](/ja/docs/Learn_web_development/Extensions/Client-side_tools/Package_management)チュートリアルでは、考慮すべき点をより高いレベルで説明しています。

### 使用するビューエンジン

Express は、[EJS](https://www.npmjs.com/package/ejs)、[Hbs](https://github.com/pillarjs/hbs)、[Pug](https://pugjs.org/api/getting-started.html) など、数多くの人気のあるビュー/テンプレートエンジンに対応しています。テンプレートエンジンの設定については、[Express でテンプレートエンジンを使用する](https://expressjs.com/ja/guide/using-template-engines/)（Express ドキュメント）と対象のビューエンジンのドキュメントを参照してください。

一般的に、必要な機能をすべて提供し、すぐに生産的になれるテンプレートエンジンを選択する必要があります。つまり、他のコンポーネントを選択するのと同じ方法で選べばよいのです。テンプレートエンジンを比較する際に考慮すべき点はいくつかあります。

- 生産性が上がるまでの時間 - チームがすでにテンプレート言語の経験を持っている場合、その言語を使用した方がすぐに生産性を上げられます。経験がない場合は、候補となるテンプレートエンジンの学習曲線を比較してください。
- 人気と活動状況 - エンジンの人気度と、活発なコミュニティがあるかどうかを確認してください。ウェブサイトの運用期間中に問題が発生した場合、サポートを得られることが重要です。
- スタイル - テンプレートエンジンの中には、「通常の」HTML 内に挿入するコンテンツを示すために特定のマークアップを使用するものがあります。一方、別の構文（インデントとブロック名を使用するなど）で HTML を構成するものもあります。
- パフォーマンス/レンダリング時間。
- 機能 - 候補となるエンジンで次の機能を利用できるか検討する必要があります。
  - レイアウト継承: ベーステンプレートを定義し、特定のページで変更する部分だけを「継承」できます。必要なコンポーネントを多数含めたり、テンプレートを毎回ゼロから作成したりするよりも、一般的に優れた方法です。
  - 「Include」対応: 他のテンプレートを含めることでテンプレートを構築できます。
  - 簡潔な変数とループ制御構文。
  - テンプレートレベルで変数の値を絞り込む機能。例えば、変数を大文字にしたり、日付値を書式化したりできます。
  - HTML 以外の出力形式（JSON や XML など）を生成する機能。
  - 非同期操作とストリーミングの対応。
  - クライアント側の機能。テンプレートエンジンをクライアントでも使用できる場合、レンダリングの全部または大部分をクライアント側で行えます。

> [!NOTE]
> インターネット上には、さまざまな選択肢を比較するのに役立つリソースが多数あります。

このプロジェクトでは、開発環境チュートリアルでインストールした [Pug](https://pugjs.org/api/getting-started.html) テンプレートエンジン（旧称は "Jade"）を使用します。

### 使用する CSS スタイルシートエンジン

[LESS](https://lesscss.org/)、[SASS](https://sass-lang.com/)、[Stylus](https://stylus-lang.com/) などの CSS スタイルシートエンジンを使用するように Express プロジェクトを設定できます。

> [!NOTE]
> CSS には、特定の作業を困難にする制約があります。CSS スタイルシートエンジンを使用すると、より強力な構文で CSS を定義し、ブラウザーが使用できる通常の CSS に変換できます。

テンプレートエンジンと同様に、チームの生産性を最も高められるスタイルシートエンジンを使用してください。このプロジェクトでは、CSS の要件は他のエンジンを使用するほど複雑ではないため、通常の CSS を使用します。

### 使用するデータベース

この章で追加するコードはデータベースを使用しません。Express アプリケーションは、Node が対応する任意の[データベースメカニズム](https://expressjs.com/ja/guide/database-integration/)を使用できます（Express 自体はデータベース管理に関する特定の追加動作や要件を定義していません）。

データベースとの統合方法は、後の記事で説明します。

## アプリケーションファイルの追加

[Node 開発環境の設定](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment)で作成した **express-locallibrary-tutorial** ディレクトリーを開きます。そこにはすでに **package.json**、**package-lock.json**、**.gitignore**、**node_modules** にインストールされた依存関係があります。これらのファイルと設定はそのまま使用し、ここからアプリケーションコードをプロジェクトに追加します。

```plain
express-locallibrary-tutorial
├── .gitignore
├── node_modules
│   └── [多数のインストール済み依存ファイル]
├── package-lock.json
└── package.json
```

### ディレクトリー構造

次のファイルを作成します（すべて空のテキストファイルです）。

- **app.js**
- **public/stylesheets/style.css**
- **routes/index.js**
- **routes/users.js**
- **server.js**
- **views/error.pug**
- **views/index.pug**
- **views/layout.pug**

Bash または同様のシェルを使用している場合は、次のコマンドですべて作成できます。

```bash
mkdir -p public/stylesheets routes views && touch app.js public/stylesheets/style.css routes/{index,users}.js server.js views/{error,index,layout}.pug
```

プロジェクトディレクトリーは現在、次のようになっているはずです。

```plain
express-locallibrary-tutorial
├── .gitignore
├── app.js
├── node_modules
│   └── [多数のインストール済み依存ファイル]
├── package-lock.json
├── package.json
├── public
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
├── server.js
└── views
    ├── error.pug
    ├── index.pug
    └── layout.pug
```

アプリケーションルートは **routes/** ディレクトリー内の個別モジュールに格納します。
テンプレートは **views/** ディレクトリーに格納します。

次の節で、各ファイルを設定します。

### server.js

**server.js** ファイルはアプリケーションのエントリーポイントです。次のコードをファイルに貼り付けてください。

```js
import { createServer } from "node:http";
import createDebug from "debug";

import app from "./app.js";

const debug = createDebug("express-locallibrary-tutorial:server");
const port = Number(process.env.PORT ?? 3000);
if (!Number.isInteger(port) || port < 0 || port > 65535)
  throw new RangeError("PORT must be an integer between 0 and 65535");
app.set("port", port);

const server = createServer(app);
server.on("error", (err) => {
  throw new Error("Failed to start server", { cause: err });
});
server.on("listening", () => {
  const address = server.address();
  debug(`Listening on port ${address.port}`);
});
server.listen(port);
```

このファイルは、「実際の」アプリケーションエントリーポイント（プロジェクトルートの **app.js**）をインポートします。**app.js** は [`express()`](https://expressjs.com/ja/api/) アプリケーションオブジェクトを設定してエクスポートします。残りのコードは、指定されたポート（`PORT` 環境変数、未定義の場合は 3000）で `app` の Node HTTP サーバーを作成し、待ち受けを開始し、待ち受け開始時にメッセージを記録し、サーバーの起動に失敗した場合にエラーを発生させます。現時点ではこのコードについて詳しく知る必要はありません（このファイルのコードはすべて定型コードです）。興味があれば確認して構いません。

### app.js

このファイルは `express` アプリケーションオブジェクト（慣例により `app` と呼ぶ）を作成し、さまざまな設定とミドルウェアでアプリケーションをセットアップした後、モジュールから app をエクスポートします。まず、_http-errors_、_express_、_morgan_ を含む便利な Node ライブラリーをファイルにインポートします。`node:path` は、ファイルパスとディレクトリーパスを処理するためのコア Node ライブラリーです。次に、routes ディレクトリーからモジュールをインポートします。これらのモジュール/ファイルには、関連する特定のルート（URL パス）を処理するコードが含まれています。スケルトンアプリケーションを拡張して、たとえば図書館のすべての書籍を一覧表示するときは、書籍関連のルートを処理する新しいファイルを追加します。

```js
import path from "node:path";
import createError from "http-errors";
import express from "express";
import logger from "morgan";

import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";
```

> [!NOTE]
> この時点ではモジュールをインポートしただけで、ルートはまだ実際に使用していません（これはファイルの少し下で行います）。

次に、インポートした express モジュールを使用して `app` オブジェクトを作成し、ビュー（テンプレート）エンジンを設定します。エンジンの設定には 2 つの部分があります。まず `"views"` 値を設定してテンプレートを格納するフォルダー（この場合はサブフォルダー **views/**）を指定します。次に `"view engine"` 値を設定してテンプレートライブラリー（この場合は "pug"）を指定します。

```js
const app = express();

// ビューエンジンの設定
app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "pug");
```

次の一連の関数は `app.use()` を呼び出して、上記でインポートしたミドルウェアライブラリーをリクエスト処理チェーンに追加します。
たとえば、`express.urlencoded()` は送信された HTML フォームのフィールドを [`req.body`](https://expressjs.com/ja/5x/api/request/#reqbody) に設定し、`express.json()` は JSON を送信するリクエストに対して同じ処理を行います。
これらのライブラリーに加えて、プロジェクトルートの **public/** ディレクトリー内にあるすべての静的ファイルを Express が提供できるようにする `express.static` ミドルウェアを使用します。

```js
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(import.meta.dirname, "public")));
```

その他のミドルウェアをすべて設定したら、インポート済みのルート処理コードをリクエスト処理チェーンに追加します。インポートしたコードは、サイトのさまざまな**部分**に固有のルートを定義します。

```js
app.use("/", indexRouter);
app.use("/users", usersRouter);
```

> [!NOTE]
> 上記で指定したパス（`"/"` と `"/users"`）は、インポートしたファイルで定義されたルートの接頭辞として扱われます。
> たとえば、インポートした **users** モジュールが `/profile` のルートを定義している場合、そのルートには `/users/profile` でアクセスします。ルートについては後の記事で詳しく説明します。

ファイルの最後のミドルウェアは、エラーと HTTP 404 レスポンスのハンドラー関数を追加します。

```js
// 404 を捕捉してエラーハンドラーへ転送
app.use((req, res, next) => {
  next(createError(404));
});

// エラーハンドラー
app.use((err, req, res, next) => {
  if (res.headersSent) {
    next(err);
    return;
  }

  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status ?? 500);
  res.render("error");
});
```

Express アプリケーションオブジェクト (app) の設定は完了です。最後のステップは、**server.js** でインポートできるようにエクスポートすることです。

```js
export default app;
```

### ルート

ルートファイル **routes/index.js** は最も基本的なルートモジュール構造です。
まず、express モジュールから `Router` 関数をインポートし、それを呼び出してルーターを作成します。
次に、モジュールからルーターをエクスポートします（これにより、ファイルを **app.js** にインポートできます）。ルートは[ビュー（テンプレート）](#ビューテンプレート)で追加します。

```js
import { Router } from "express";

const router = Router();

export default router;
```

ルートファイル **routes/users.js** は次のとおりです。

```js
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("respond with a resource");
});

export default router;
```

このファイルはルートを 1 つ追加します。
ルートは、正しいパターンを持つ HTTP `GET` リクエストを検出するたびに呼び出されるコールバックを定義します。一致するパターンは、モジュールのインポート時に指定したルート (`"/users"`) と、このファイルで定義したルート (`"/"`) を組み合わせたものです。つまり、このルートは `/users/` の URL を受信したときに使用されます。

> [!NOTE]
> [スケルトンウェブサイトの実行](#スケルトンウェブサイトの実行)したら、ブラウザーで `http://localhost:3000/users/` にアクセスして動作を確認できます。'respond with a resource' というメッセージが表示されるはずです。

### ビュー（テンプレート）

ビュー（テンプレート）は **views/** ディレクトリー（**app.js**で指定）に格納され、ファイル拡張子は **.pug** です。[`Response.render()`](https://expressjs.com/ja/5x/api/response/#resrender) メソッドを使用すると、指定したテンプレートと、オブジェクトで渡された名前付き変数の値をレンダリングし、結果をレスポンスとして送信できます。**routes/index.js** に、`export` 行の前に次のコードを追加します。このコードは "index" テンプレートを使用し、テンプレート変数 "title" を渡します。

```js
router.get("/", (req, res) => {
  res.render("index", { title: "Express" });
});
```

上記のルートに対応するテンプレートは次のとおりです (**index.pug**)。構文については後ほど詳しく説明します。現時点では、テンプレート内で指定した場所に `title` 変数（値は `'Express'`）が挿入されることだけ理解してください。

```pug
extends layout

block content
  h1= title
```

このテンプレートは `extends layout` を使用して **views/layout.pug** ファイルを参照します。このファイルには次の内容が必要です。

```pug
doctype html
html(lang='en')
  head
    title= title
    meta(charset='utf-8')
    meta(name='viewport', content='width=device-width, initial-scale=1')
    link(rel='stylesheet', href='/stylesheets/style.css')
  body
    div(class='container-fluid')
      div(class='row')
        div(class='col-sm-10')
          block content
```

**views/error.pug** ファイルは **app.js** のエラーハンドラーによってレンダリングされます。次の内容を含みます。

```pug
extends layout

block content
  h1= message
  h2= error.status
  pre #{error.stack}
```

## スケルトンウェブサイトの実行

ここまでで、完全なスケルトンプロジェクトを作成しました。ウェブサイトはまだほとんど何も行いませんが、動作することを確認するために実行する価値があります。

1. まず、**package.json** に宣言された依存関係をインストールします。すでにインストール済みのはずですが、念のため再確認します。

   ```bash
   npm install
   ```

2. 次にアプリケーションを実行します。

   - Windows コマンドプロンプトでは、次のコマンドを使用します。

     ```batch
     SET DEBUG=express-locallibrary-tutorial:* & npm start
     ```

   - Windows PowerShell では、次のコマンドを使用します。

     ```powershell
     $env:DEBUG = "express-locallibrary-tutorial:*"; npm start
     ```

     > [!NOTE]
     > このチュートリアルの残りでは PowerShell コマンドは使用しません（一覧の "Windows" コマンドは、Windows コマンドプロンプトを使用するものとします）。

   - macOS または Linux では、次のコマンドを使用します。

     ```bash
     DEBUG=express-locallibrary-tutorial:* npm start
     ```

3. ブラウザーで `http://localhost:3000/` を読み込んでアプリケーションにアクセスします。

タイトル "Express" だけを含むブラウザーページが表示されるはずです。

おめでとうございます。ポート 3000 経由でアクセスできる、動作する Express アプリケーションができました。

> [!NOTE]
> `npm start` コマンドだけでもアプリケーションを起動できます。示すように `DEBUG` 変数を指定すると、**server.js** のデバッグメッセージが有効になります。`morgan` ミドルウェアなど、設定がなくてもログを出力するモジュールもあり、次の出力の `GET` リクエストを記録します。
>
> ```bash
> DEBUG=express-locallibrary-tutorial:* npm start
> ```
>
> ```plain
> > express-locallibrary-tutorial@1.0.0 start
> > node server.js
>
>   express-locallibrary-tutorial:server Listening on port 3000 +0ms
> GET / 200 78.072 ms - 315
> GET /stylesheets/style.css 200 1.647 ms - -
> ```

JavaScript ファイルを編集したときにサーバーを自動的に再起動するには、**Ctrl+C** でサーバーを停止し、開発環境チュートリアルで追加した `devstart` スクリプトを使用します。

```bash
npm run devstart
```

ブラウザーを再読み込みして変更を確認します。開発中、ビューやスタイルシートの変更はサーバーを再起動せずに次のリクエストで提供されます。

## 自分で挑戦してみる

**routes/users.js** に新しいルートを作成し、URL `/users/cool/` に "_You're so cool_" というテキストを表示してください。サーバーを実行してブラウザーで `http://localhost:3000/users/cool/` にアクセスしてテストします。

## まとめ

[地域図書館](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website)のスケルトンウェブサイトプロジェクトを作成し、Node を使用して実行できることを確認しました。最も重要なのは、プロジェクトの構造を理解したことです。地域図書館用のルートとビューを追加する場所を把握できました。

次に、スケルトンを地域図書館ウェブサイトとして動作させるために変更を始めます。

## 関連情報

- [Express でテンプレートエンジンを使用する](https://expressjs.com/ja/guide/using-template-engines/)（Express ドキュメント）

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

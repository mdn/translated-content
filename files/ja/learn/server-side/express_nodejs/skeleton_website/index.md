---
title: "Express チュートリアル Part 2: スケルトン Web サイトの作成"
slug: Learn/Server-side/Express_Nodejs/skeleton_website
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn/Server-side/Express_Nodejs/mongoose", "Learn/Server-side/Express_Nodejs")}}

この [Express チュートリアル](/ja/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website)の 2 回目の記事では、どのようにして "スケルトン" Web サイトプロジェクトを作成し、サイト固有のルート、テンプレート/ビュー、およびデータベース呼び出しを追加するかを説明します。

| 前提条件: | [Node 開発環境を設定します](/ja/docs/Learn/Server-side/Express_Nodejs/development_environment)。Express チュートリアルを確認してください。 |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 目標:     | Express Application Generator を使用して独自の新しい Web サイトプロジェクトを開始できるようにする。                                        |

## 概要

この記事では [Express Application Generator](https://expressjs.com/ja/starter/generator.html) ツールを使用して "スケルトン" Web サイトを作成する方法を説明します。このツールには、サイト固有のルート、ビュー/テンプレート、およびデータベース呼び出しを追加できます。この場合は、このツールを使用して[ローカルライブラリ Web サイト](/ja/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website)用のフレームワークを作成し、後でそのサイトに必要な他のすべてのコードを追加します。プロセスは非常に単純で、必要に応じてサイトのテンプレートエンジンと CSS ジェネレータを指定して、新しいプロジェクト名を指定してコマンドラインでジェネレータを呼び出すだけです。

次のセクションでは、アプリケーションジェネレータを呼び出す方法を示し、さまざまな ビュー/CSS オプションについて簡単に説明します。また、スケルトン Web サイトの構造についても説明します。最後に、Web サイトを実行してそれが機能することを確認する方法を紹介します。

> **メモ:** Express アプリケーションジェネレータは、Express アプリケーション用の唯一のジェネレータというわけではありません。また、生成されたプロジェクトはファイルやディレクトリーを構造化する唯一実行可能な方法というわけではありません。しかしながら、生成されたサイトは、拡張と理解が容易なモジュール構造を持っています。最小限の Express アプリケーションについては、[Hello world の例](https://expressjs.com/ja/starter/hello-world.html) (Express ドキュメント) を参照してください。

## アプリケーションジェネレータを使用する

[Node 開発環境の設定](/ja/docs/Learn/Server-side/Express_Nodejs/development_environment)の一部として、ジェネレータをすでにインストールしているはずです。念のため、NPM パッケージマネージャを使用して、サイト全体にジェネレータツールをインストールします。

```bash
npm install express-generator -g
```

ジェネレータにはいくつかのオプションがあり、それらは `--help` (または `-h`) コマンドを使用してコマンドラインで表示できます。

```bash
> express --help

  Usage: express [options] [dir]

  Options:

    -h, --help           output usage information
        --version        output the version number
    -e, --ejs            add ejs engine support
        --pug            add pug engine support
        --hbs            add handlebars engine support
    -H, --hogan          add hogan.js engine support
    -v, --view <engine>  add view <engine> support (ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)
    -c, --css <engine>   add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
        --git            add .gitignore
    -f, --force          force on non-empty directory
```

Jade ビューエンジンとプレーン CSS を使用して、`express` を指定するだけで現在のディレクトリー内にプロジェクトを作成できます (ディレクトリー名を指定すると、プロジェクトはその名前のサブフォルダに作成されます)。

```bash
express
```

`--view` を使用してビュー (テンプレート) エンジンを選択したり、`--css` を使用して CSS 生成エンジンを選択したりすることもできます。

> **メモ:** テンプレートエンジンを選択するためのその他のオプション (`--hogan`、`--ejs`、`--hbs` など) は推奨されません。`--view` (または `-v`)を使用してください。

### どのビューエンジンを使うべきですか？

Express Application Generator を使用すると、[EJS](https://www.npmjs.com/package/ejs)、[Hbs](http://github.com/donpark/hbs)、[Pug](https://pugjs.org/api/getting-started.html) (Jade)、[Twig](https://www.npmjs.com/package/twig)、[Vash](https://www.npmjs.com/package/vash) など、一般的なビュー/テンプレートエンジンを多数設定できます。ただし、ビューオプションを指定しない場合はデフォルトで Jade が選択されます。 Express 自体は、[一般的な](https://github.com/expressjs/express/wiki#template-engines)他のテンプレート言語の多くをサポートすることができます。

> **メモ:** ジェネレータでサポートされていないテンプレートエンジンを使用したい場合は、[Express でテンプレートエンジンを使用する](https://expressjs.com/ja/guide/using-template-engines.html) (Express ドキュメント) およびターゲットビューエンジンのドキュメントを参照してください。

一般的に、あなたが必要とするすべての機能を提供し、あなたがより早く生産的になることを可能にするテンプレートエンジンを選ぶべきです ー もしくは言い換えれば、同じ方法で、他のコンポーネントを選択するということです。テンプレートエンジンを比較する際に考慮すべき点がいくつかあります。

- 生産的になるための時間 - あなたのチームがすでにテンプレート言語の経験があるのなら l その言語を使うことでより速く生産的になるでしょう。そうでない場合は、候補のテンプレートエンジンの相対的な学習曲線を検討する必要があります
- 人気度とアクティビティ - エンジンの人気度と、活発なコミュニティがあるかどうかを確認します。あなたがウェブサイトの生涯にわたって問題を抱えているときにエンジンのサポートを受けることができることが重要です
- スタイル － テンプレートエンジンの中には、"通常の" HTML 内に挿入されたコンテンツを示すために特定のマークアップを使用するものもあれば、別の構文を使用して HTML を構成するものもあります (たとえば、インデントとブロック名を使用)
- パフォーマンス/レンダリング時間
- 機能 - あなたが見ているエンジンが利用可能な以下の機能を持っているかどうかを考慮する必要があります。

  - レイアウトの継承：ベーステンプレートを定義してから、特定のページに対して異なる部分だけを "継承" することができます。これは通常、必要なコンポーネントを多数含めるか、毎回テンプレートを最初から作成することによってテンプレートを作成するよりも優れた方法です
  - "Include" のサポート：他のテンプレートを含めることでテンプレートを構築することを可能にします
  - 簡潔な変数およびループ制御構文
  - テンプレートレベルで変数値をフィルタリングする機能 (例えば、変数を大文字にする、または日付値をフォーマットする)
  - HTML 以外の出力フォーマット (JSON や XML など) を生成する機能
  - 非同期操作とストリーミングのサポート
  - サーバだけでなくクライアントでも使用できます。テンプレートエンジンをクライアント上で使用できる場合、これによりデータを提供し、レンダリングの全部または大部分をクライアント側で行うことができます

> **メモ:** **Tip:** インターネット上には、さまざまなオプションを比較するのに役立つ多くのリソースがあります。

このプロジェクトでは、[Pug](https://pugjs.org/api/getting-started.html) テンプレートエンジン (これは最近名前が変更された Jade エンジンです) を使用します。これは最も一般的な Express/JavaScript テンプレート言語の 1 つで、ジェネレータによってそのままサポートされているためです。

### どの CSS スタイルシートエンジンを使うべきですか？

Express Application Generator を使用すると、最も一般的な CSS スタイルシートエンジン ([LESS](http://lesscss.org/)、[SASS](http://sass-lang.com/)、[Compass](http://compass-style.org/)、[Stylus](http://stylus-lang.com/)) を使用するように構成されたプロジェクトを作成できます。

> **メモ:** CSS にはいくつかの制限があり、特定のタスクを困難にします。CSS スタイルシートエンジンを使用すると、CSS を定義するためのより強力な構文を使用してから、ブラウザーで使用するためにその定義を通常の CSS にコンパイルできます。

テンプレートエンジンと同様に、チームを最も生産的にすることができるスタイルシートエンジンを使用する必要があります。このプロジェクトでは、CSS 要件が他のものを使用することを正当化するのに十分に複雑ではないため、通常の CSS (デフォルト) を使用します。

### どのデータベースを使うべきですか？

生成されたコードはデータベースを一切使用しません。 Express アプリケーションは、Node によってサポートされている任意の[データベースメカニズム](https://expressjs.com/ja/guide/database-integration.html)を使用できます (Express 自体はデータベース管理のための特定の追加の動作や要件を定義していません)。

データベースと統合する方法については、後の記事で説明します。

## プロジェクトを作成する

これから作成するサンプルのローカルライブラリアプリでは、Pug テンプレートライブラリを使用し、CSS スタイルシートエンジンを使用しないで、express-locallibrary-tutorial という名前のプロジェクトを作成します。

まず、プロジェクトを作成する場所に移動し、次に示すようにコマンドプロンプトで Express Application Generator を実行します。

```bash
express express-locallibrary-tutorial --view=pug
```

ジェネレータはプロジェクトのファイルを作成 (そして一覧表示) します。

```bash
   create : express-locallibrary-tutorial
   create : express-locallibrary-tutorial/package.json
   create : express-locallibrary-tutorial/app.js
   create : express-locallibrary-tutorial/public/images
   create : express-locallibrary-tutorial/public
   create : express-locallibrary-tutorial/public/stylesheets
   create : express-locallibrary-tutorial/public/stylesheets/style.css
   create : express-locallibrary-tutorial/public/javascripts
   create : express-locallibrary-tutorial/routes
   create : express-locallibrary-tutorial/routes/index.js
   create : express-locallibrary-tutorial/routes/users.js
   create : express-locallibrary-tutorial/views
   create : express-locallibrary-tutorial/views/index.pug
   create : express-locallibrary-tutorial/views/layout.pug
   create : express-locallibrary-tutorial/views/error.pug
   create : express-locallibrary-tutorial/bin
   create : express-locallibrary-tutorial/bin/www

   install dependencies:
     > cd express-locallibrary-tutorial && npm install

   run the app:
     > SET DEBUG=express-locallibrary-tutorial:* & npm start
```

出力の最後に、ジェネレータは依存関係をどのようにインストールするか (**package.json** ファイルにリストされているとおり)、次にアプリケーションを実行する方法についての指示を提供します (上記の手順は Windows 用です。Linux/ macOS では若干異なります)。

## スケルトン Web サイトを実行する

これで、完全なスケルトンプロジェクトが完成しました。 ウェブサイトは実際にはそれほど多くは行っていませんが、それがどのように機能するかを示すために実行する価値があります。

1. まず、依存関係をインストールします (`install` コマンドはプロジェクトの **package.json** ファイルにリストされているすべての依存関係パッケージを取得します)

   ```bash
   cd express-locallibrary-tutorial
   npm install
   ```

2. その後、アプリケーションを実行します

   - Windows では、次のコマンドを使用します

     ```bash
     SET DEBUG=express-locallibrary-tutorial:* & npm start
     ```

   - macOS または Linux では、次のコマンドを使用します

     ```bash
     DEBUG=express-locallibrary-tutorial:* npm start
     ```

3. その後、ブラウザーに <http://localhost:3000/> をロードしてアプリにアクセスします

次のようなブラウザーページが表示されるはずです。

![Browser for default Express app generator website](ExpressGeneratorSkeletonWebsite.png)

自分自身で _localhost:3000_ に提供している、動作する Express アプリケーションがあります。

> **メモ:** `npm start` コマンドを使用してアプリを起動することもできます。示されているように DEBUG 変数を指定すると、コンソールロギング/デバッグが有効になります。たとえば、上記のページにアクセスすると、次のようなデバッグ出力が表示されます。
>
> ```bash
> >SET DEBUG=express-locallibrary-tutorial:* & npm start
>
> > express-locallibrary-tutorial@0.0.0 start D:\express-locallibrary-tutorial
> > node ./bin/www
>
>   express-locallibrary-tutorial:server Listening on port 3000 +0ms
> GET / 200 288.474 ms - 170
> GET /stylesheets/style.css 200 5.799 ms - 111
> GET /favicon.ico 404 34.134 ms - 1335
> ```

## ファイルの変更時にサーバの再起動を有効にする

Express Web サイトに加えた変更は、現在のサーバを再起動するまで表示されません。変更を加えるたびにサーバを停止して再起動する必要があることはすぐに非常に苛立たしいものになるため、必要に応じてサーバの再起動を自動化することに時間をかける価値があります。

この目的のための最も簡単なツールの 1 つが [nodemon](https://github.com/remy/nodemon) です。 これは通常 "ツール" としてグローバルにインストールされますが、ここでは開発者の依存関係としてローカルにインストールして使用するので、プロジェクトを操作する開発者はアプリケーションをインストールするときに自動的に取得されます。スケルトンプロジェクトのルートディレクトリーで次のコマンドを使用します。

```bash
npm install --save-dev nodemon
```

プロジェクトの **package.json** ファイルだけでなく、自分のマシンにグローバルに [nodemon](https://github.com/remy/nodemon) をインストールする場合は、次のようにします。

```bash
npm install -g nodemon
```

プロジェクトの **package.json** ファイルを開くと、この依存関係を持つ新しいセクションが表示されます。

```json
  "devDependencies": {
    "nodemon": "^1.14.11"
  }
```

このツールはグローバルにはインストールされていないので (パスに追加しない限り) コマンドラインから起動することはできませんが、NPM はインストールされているパッケージをすべて知っているので、NPM スクリプトから呼び出すことができます。package.json の `scripts` セクションを見つけます。最初は `"start"` で始まる 1 行が含まれています。その行の末尾にカンマを入れて、以下に見られる `"devstart"` 行を追加することによってそれを更新します。

```json
  "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www"
  },
```

`devstart` コマンドを指定して、以前とほぼ同じ方法でサーバーを起動することができます。

- Windows では、次のコマンドを使用してください

  ```bash
  SET DEBUG=express-locallibrary-tutorial:* & npm run devstart
  ```

- macOS または Linux では、次のコマンドを使用してください

  ```bash
  DEBUG=express-locallibrary-tutorial:* npm run devstart
  ```

> **メモ:** プロジェクト内のファイルを編集した場合は、サーバが再起動します (またはコマンドプロンプトで `rs` と入力していつでも再起動できます)。あなたはまだページを更新するためにブラウザーを再読み込みする必要があるでしょう。
>
> "start" は実際には名前付きスクリプトにマップされた NPM コマンドなので、ここでは単に `npm start` ではなく "`npm run <scriptname>`" を呼び出す必要があります。起動スクリプトのコマンドを置き換えることもできますが、開発中は nodemon を使用するだけなので、新しいスクリプトコマンドを作成するのが理にかなっています。

## 生成されたプロジェクト

今作成したプロジェクトを見てみましょう。

### ディレクトリー構造

生成されたプロジェクトは、依存関係をインストールしたので、次のようなファイル構造になります (ファイルは "/" が前に付いて**いない**項目です)。**package.json** ファイルは、アプリケーションの依存関係とその他の情報を定義します。また、アプリケーションのエントリポイントである JavaScript ファイル **/bin/www** を呼び出す起動スクリプトも定義されています。これにより、アプリケーションのエラー処理がいくつか設定され、その後 **app.js** が読み込まれて残りの作業が行われます。 アプリのルートは **routes/** ディレクトリーの下の別々のモジュールに格納されています。 テンプレートは /**views** ディレクトリーの下に格納されています。

```
/express-locallibrary-tutorial
    app.js
    /bin
        www
    package.json
    /node_modules
        [about 4,500 subdirectories and files]
    /public
        /images
        /javascripts
        /stylesheets
            style.css
    /routes
        index.js
        users.js
    /views
        error.pug
        index.pug
        layout.pug
```

次のセクションでは、ファイルについてもう少し詳しく説明します。

### package.json

**package.json** ファイルは、アプリケーションの依存関係とその他の情報を定義します。

```json
{
  "name": "express-locallibrary-tutorial",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www"
  },
  "dependencies": {
    "cookie-parser": "~1.4.3",
    "debug": "~2.6.9",
    "express": "~4.16.2",
    "morgan": "~1.9.0",
    "pug": "~2.0.0-rc.4",
    "serve-favicon": "~2.4.5"
  },
  "devDependencies": {
    "nodemon": "^1.14.11"
  }
}
```

依存関係には、express パッケージと選択したビューエンジン (pug) 用のパッケージが含まれます。さらに、多くの Web アプリケーションで役立つ次のパッケージがあります。

- [cookie-parser](https://www.npmjs.com/package/cookie-parser): Cookie ヘッダーを解析し、`req.cookies` を生成するために使用されます (基本的に Cookie 情報にアクセスするための便利な方法を提供します)
- [debug](https://www.npmjs.com/package/debug): 小さなノードデバッグユーティリティは、Node コアのデバッグ技術をモデルにしています
- [morgan](https://www.npmjs.com/package/morgan): Node 用の HTTP リクエストロガーミドルウェア
- [serve-favicon](https://www.npmjs.com/package/serve-favicon): [ファビコン](https://ja.wikipedia.org/wiki/Favicon)を提供するためのノードミドルウェア (これはブラウザータブ内のサイト、ブックマークなどを表すために使用されるアイコンです)

scripts セクションは "start" スクリプトを定義します。これは、`npm start` を呼び出してサーバを起動するときに呼び出すスクリプトです。スクリプトの定義から、これは実際に JavaScript ファイル **./bin/www** with node を開始することがわかります。また、"devstart" スクリプトも定義しています。これは、代わりに `npm run devstart` を呼び出すときに呼び出されます。これは同じ **./bin/www** ファイルを開始しますが、node ではなく nodemon を使用します。

```json
  "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www"
  },
```

### www ファイル

ファイル **/bin/www** がアプリケーションのエントリポイントです。 これが最初に行うことは、[`express()`](http://expressjs.com/ja/api.html) アプリケーションオブジェクトを設定して返す "本物の" アプリケーションエントリポイント (プロジェクトルート内の **app.js**) である`require()` です。

```js
#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require("../app");
```

> **メモ:** `require()` は、現在のファイルにモジュールをインポートするために使われるグローバル Node 関数です。 ここでは相対パスを使用し、オプションの (.**js**) ファイル拡張子を省略して **app.js** モジュールを指定します。

このファイルのコードの残りの部分では、特定のポート (環境変数で定義されているか、変数が定義されていない場合は 3000 で定義されている) に設定された `app` を使用して Node HTTP サーバをセットアップします。 今のところ、コードについて他に何も知る必要はありません (このファイル内のすべてが "定型句" です) が、興味があればお気軽にレビューしてください。

### app.js

このファイルは、`express` アプリケーションオブジェクト (慣例では `app` という名前) を作成し、さまざまな設定とミドルウェアを使用してアプリケーションを設定してから、モジュールからアプリケーションをエクスポートします。以下のコードは、アプリオブジェクトを作成およびエクスポートするファイルの一部だけを示しています。

```js
var express = require('express');
var app = express();
...
module.exports = app;
```

上記の **www** エントリポイントファイルに戻ると、このファイルがインポートされたときに呼び出し元に渡されるのは、この `module.exports` オブジェクトです。

**app.js** ファイルを詳しく見ていきましょう。まず、NPM を使用してアプリケーション用に以前にダウンロードした express、serve-favicon、morgan、cookie-parser など、`require()` を使用していくつかの便利な Node ライブラリをファイルにインポートします。path は、ファイルとディレクトリーのパスを解析するためのコア Node ライブラリです。

```js
var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
```

それから routes ディレクトリーから `require()` モジュールを呼び出します。これらのモジュール/ファイルには、関連する "ルート" (URL パス) の特定のセットを処理するためのコードが含まれています。たとえばライブラリ内のすべての本をリストするためにスケルトンアプリケーションを拡張するときは、本関連のルートを処理するための新しいファイルを追加します。

```js
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
```

> **メモ:** この時点で、モジュールをインポートしたばかりです。 実際にはまだそのルートを使用していません (これはファイルの少し下まで行われます)。

次に、インポートした Express モジュールを使ってアプリオブジェクトを作成し、それを使ってビュー (テンプレート) エンジンを設定します。エンジンの設定には 2 つの部分があります。まず、 '`views`' の値を設定して、テンプレートが保存されるフォルダを指定します (この場合はサブフォルダの **/views**)。それから '`view engine`' の値を設定してテンプレートライブラリ (この場合は "pug") を指定します。

```js
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
```

次の一連の関数は `app.use()` を呼び出してミドルウェアライブラリをリクエスト処理チェーンに追加します。以前インポートしたサードパーティのライブラリに加えて、Express がプロジェクトルートの **/public** ディレクトリーにあるすべての静的ファイルを処理するようにするために、`express.static` ミドルウェアを使用します。

```js
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
```

他のすべてのミドルウェアがセットアップされたので、(以前にインポートした) ルート処理コードをリクエスト処理チェーンに追加します。 インポートされたコードは、サイトのさまざまな部分に特定のルートを定義します。

```js
app.use("/", indexRouter);
app.use("/users", usersRouter);
```

> **メモ:** 上記で指定されたパス ('/' と '`/users'`) は、インポートされたファイルで定義されているルートの接頭辞として扱われます。たとえば、インポートされたユーザーモジュールが `/profile` のルートを定義している場合は、`/users/profile` でそのルートにアクセスします。 ルートの詳細については後の記事で説明します。

ファイルの最後のミドルウェアは、エラーと HTTP 404 レスポンス用のハンドラメソッドを追加します。

```js
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
```

Express アプリケーションオブジェクト (app) が完全に設定されました。最後のステップはそれをモジュールのエクスポートに追加することです (これは **/bin/www** によってインポートされることを可能にするものです)。

```js
module.exports = app;
```

### ルート

ルートファイル **/routes/users.js** を以下に示します (ルートファイルは同様の構造を共有しているので、**index.js** も表示する必要はありません)。まず、express モジュールをロードし、それを使って `express.Router` オブジェクトを取得します。それからそのオブジェクトのルートを指定し、最後にモジュールからルーターをエクスポートします (これがファイルが **app.js** にインポートされることを可能にするものです)。

```js
var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
```

このルートは、正しいパターンの HTTP `GET` リクエストが検出されたときに必ず呼び出されるコールバックを定義します。一致パターンは、モジュールのインポート時に指定された経路 ('`/users`') と、このファイルで定義されているもの ('`/`') です。 つまり、このルートは `/users/` の URL が受信されたときに使用されます。

> **メモ:** **Tip:** これを試すには、node を使用してサーバを実行し、ブラウザーの URL (<http://localhost:3000/users/>) にアクセスしてください。「リソースで応答してください」というメッセージが表示されます。

上記の関心事の 1 つは、コールバック関数が 3 番目の引数 '`next`' を持ち、したがって単純なルートコールバックではなくミドルウェア関数であることです。このコードでは現在 `next` 引数を使用していませんが、`'/'` ルートパスに複数のルートハンドラを追加したい場合、将来的には役に立つかもしれません。

### ビュー (テンプレート)

ビュー (テンプレート) は **/views** ディレクトリー (**app.js** で指定されている) に保存され、ファイル拡張子 **.pug** が与えられます。[`Response.render()`](http://expressjs.com/ja/4x/api.html#res.render) メソッドは、オブジェクトに渡された名前付き変数の値とともに指定されたテンプレートをレンダリングし、その結果をレスポンスとして送信するために使用されます。以下の **/routes/index.js** のコードでは、テンプレート変数 "title" を渡した "index" テンプレートを使用して、そのルートがどのようにレスポンスをレンダリングするかを確認できます。

```js
/* GET home page. */
router.get("/", function (req, res) {
  res.render("index", { title: "Express" });
});
```

上記のルートに対応するテンプレートを以下に示します(**index.pug**)。構文については後で詳しく説明します。今のところ知る必要があるのは、(変数 `'Express'` を持つ) `title`変数がテンプレートの指定された場所に挿入されることだけです。

```
extends layout

block content
  h1= title
  p Welcome to #{title}
```

## 自分自身で挑戦

**/routes/users.js** に新しいルートを作成し、URL `/users/cool/` に "You're so cool" というテキストを表示します。 サーバーを実行し、ブラウザーで <http://localhost:3000/users/cool/> にアクセスしてテストしてください。

## まとめ

これで、[ローカルライブラリ](/ja/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website)用のスケルトン Web サイトプロジェクトを作成し、それが Node を使用して実行されることを確認しました。最も重要なのは、プロジェクトの構造も理解しているので、ローカルライブラリのルートとビューを追加するために変更を加える必要がある場所をよく理解していることです。

次に、図書館の Web サイトとして機能するようにスケルトンを変更します。

## あわせて参照

- [Express application generator](https://expressjs.com/en/starter/generator.html) (Express ドキュメント)
- [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (Express ドキュメント)

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn/Server-side/Express_Nodejs/mongoose", "Learn/Server-side/Express_Nodejs")}}

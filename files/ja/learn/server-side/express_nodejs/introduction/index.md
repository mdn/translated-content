---
title: Express/Node の紹介
slug: Learn/Server-side/Express_Nodejs/Introduction
l10n:
  sourceCommit: 4def230f85756724b59660e3cd9de363db724ef8
---

{{LearnSidebar}}{{NextMenu("Learn/Server-side/Express_Nodejs/development_environment", "Learn/Server-side/Express_Nodejs")}}

Express の最初の記事では「Node って何だろう？」、「Express って何だろう？」という疑問に答え、なぜ Express ウェブフレームワークが特別なのかについて概要を説明します。主な特徴、Express アプリケーションの主な基本要素を大まかに説明します（テスト開発環境についてはここではまだ触れません）。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        基本的なコンピューターリテラシー。<a href="/ja/docs/Learn/Server-side/First_steps">サーバーサイドのウェブサイトプログラミング</a>の一般的な理解、特に<a href="/ja/docs/Learn/Server-side/First_steps/Client-Server_overview">ウェブサイトにおけるクライアントとサーバーのやりとり</a>の仕組み。
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>
        Express とは何か、Node とどのような関係があるのか、Express が提供する機能は何か、Express アプリケーションの主な構成要素は何か、について慣れること。
      </td>
    </tr>
  </tbody>
</table>

## Node の紹介

[Node](https://nodejs.org/)（正式には _Node.js_）はオープンソースのクロスプラットフォーム、実行環境で、開発者はあらゆるサーバーサイドのツールやアプリケーションを [JavaScript](/ja/docs/Glossary/JavaScript) で作成することができます。この実行環境はブラウザーコンテキスト外での使用 (すなわち、コンピューターまたはサーバー OS 上での直接実行) を目的としています。そのため、クライアントサイドではブラウザー固有の JavaScript API が省略され、HTTP やファイルシステムライブラリーを含む従来の OS API がサポートされます。

ウェブサーバー開発の観点から Node には多くの利点があります。

- 素晴らしいパフォーマンス！ Node はウェブアプリケーションのスループットとスケーラビリティを最適化するように設計されており、多くの一般的なウェブ開発の問題 (リアルタイムウェブアプリケーションなど) に非常に適しています
- コードは "plain old JavaScript" で書かれています。つまり、ブラウザーとウェブサーバーの両方のコードを記述しているときに、言語間の "コンテキストシフト" に費やす時間が短くなります
- JavaScript は比較的新しいプログラミング言語であり、他の従来の ウェブサーバー言語（Python、PHP など）と比較して言語設計の改善のメリットがあります。CoffeeScript、ClojureScript、Scala、LiveScript などを使用できるように、新しく普及している多くの言語が JavaScript にコンパイル/変換されます。
- Node パッケージマネージャー (npm) は、何十万もの再利用可能なパッケージへのアクセスを提供します。クラス最高の依存関係解決機能もあり、ほとんどのビルドツールチェーンの自動化にも使用できます。
- Node.js は移植可能です。Microsoft Windows、macOS、Linux、Solaris、FreeBSD、OpenBSD、WebOS、および NonStop OS で利用できます。さらに、多くの ウェブホスティングプロバイダーが、Node サイトをホスティングするための特定のインフラストラクチャとドキュメントが提供しています。
- 非常に活発な第三者のエコシステムと開発者コミュニティがあり、多くの方々が 快く協力しています。

Node HTTP パッケージを使用することで、Node.js で簡単な ウェブサーバーを作成できます。

### Hello Node.js

次の例では、URL `http://127.0.0.1:8000/` にあるあらゆる種類の HTTP リクエストを待ち受ける ウェブサーバーを作成します。リクエストが受信されると、スクリプトは "Hello World" という文字列でレスポンスします。すでに Node をインストールしている場合は、次の手順に従ってこの例を試すことができます。

1. 端末を開きます (Windows ではコマンドラインユーティリティを開きます)。
2. プログラムを保存するフォルダー (たとえば "test-node") を作成し、端末に次のコマンドを入力して移動します。

   ```bash
   cd test-node
   ```

3. 好きなテキストエディターを使って `hello.js` というファイルを作成し、次のコードを貼り付けます。

   ```js
   // HTTP モジュールの読み込み
   const http = require("http");

   const hostname = "127.0.0.1";
   const port = 8000;

   //  HTTP サーバーを作成
   const server = http.createServer(function (req, res) {
     // HTTP ステータスとコンテンツタイプを持つ HTTP ヘッダーのレスポンスを設定
     res.writeHead(200, { "Content-Type": "text/plain" });

     // レスポンス本体の "Hello World" を送信
     res.end("Hello World\n");
   });

   //  サーバーにアクセスするための URL を出力
   server.listen(port, hostname, function () {
     console.log(`Server running at http://${hostname}:${port}/`);
   });
   ```

4. 上記で作成したフォルダーにファイルを保存します。
5. 端末に戻り、次のコマンドを入力します。

   ```bash
   node hello.js
   ```

最後に、ウェブブラウザーで `http://localhost:8000` に移動します。テキスト以外は空の ウェブページの左上に "**Hello World**" というテキストが表示されます。

## ウェブフレームワーク

その他の一般的なウェブ開発タスクは、Node 自体では直接サポートされていません。様々な HTTP の述語 (`GET`, `POST`, `DELETE` など) に特定の処理を追加したい場合、別々の URL パス ("routes") でリクエストを個別に処理したり、静的ファイルを提供したり、テンプレートを使用してレスポンスを動的に作成したり、自分でコードを書いたりする必要があります。そうしない場合はウェブフレームワークを使用して、車輪の再発明を避けることができます。

## Express の紹介

[Express](https://expressjs.com/ja/) は最も一般的な Node ウェブフレームワークであり、他の多くの一般的な [Node ウェブフレームワーク](https://expressjs.com/en/resources/frameworks.html)の基礎となるライブラリーです。これは以下のメカニズムを提供します。

- 異なる URL のパス (ルート) で異なる HTTP 述語を使用してリクエストのハンドラーを作成します。
- テンプレートにデータを挿入してレスポンスを生成するために、「ビュー」レンダリングエンジンと統合します。
- 接続に使用するポートやレスポンスのレンダリングに使用されるテンプレートの場所などの一般的なウェブアプリケーション設定値を設定します。
- リクエスト処理パイプライン内の任意の時点で、追加のリクエスト処理「ミドルウェア」を追加します。

Express 自体はかなりシンプルですが、開発者はほぼすべてのウェブ開発問題に対応する互換性のあるミドルウェアパッケージを作成しています。Cookie、セッション、ユーザーログイン、URL 引数、POST データ、セキュリティヘッダーなどを扱うライブラリーがあります。Express チームが管理するミドルウェアパッケージのリストは、[Express Middleware](http://expressjs.com/en/resources/middleware.html) (一般的なサードパーティパッケージのリストとともに) にあります。

> **メモ:** この柔軟性は両刃の剣です。ほぼすべての問題や要件に対応するミドルウェアパッケージがありますが、適切なパッケージを使用して作業することは時には挑戦になることがあります。アプリケーションを構造化する「正しい方法」もなく、インターネット上で見つかる多くの例は最適ではないし、ウェブアプリケーションを開発するために必要なことのほんの一部を示しているだけです。

## Node と Express はどこから来たのですか？

Node は 2009 年に Linux 用に最初にリリースされました。npm パッケージマネージャは 2010 年にリリースされ、ネイティブ Windows サポートは 2012 年に追加されました。もっと知りたいのであれば、[Wikipedia](https://en.wikipedia.org/wiki/Node.js#History) を掘り下げてみてください。

Express は 2010 年 11 月に最初にリリースされ、現在 API のメジャーバージョンが 4 になっています。現在のリリースの変更点については[更新履歴](https://expressjs.com/en/changelog/4x.html)を、詳細な履歴リリースノートについては [GitHub](https://github.com/expressjs/express/blob/master/History.md) を参照してください。

## Node と Express はどれくらい普及していますか？

ウェブフレームワークの普及は、それが維持されるかどうかの指標であり、ドキュメンテーション、アドオンライブラリー、テクニカルサポートの面でどのようなリソースが利用される可能性が高いかという点で重要です。

サーバー側のフレームワークの普及率は、すぐに利用可能で決定的なものではありません（ただし、各プラットフォームの GitHub プロジェクトや StackOverflow の質問数をカウントするような仕組みを使って、人気を推定することはできます）。より良い質問は、人気のないプラットフォームの問題を避けるために Node と Express が「人気がある」かどうかです。それらは進化し続けていますか？あなたがそれを必要としたら助けを得ることができますか？あなたが Express を学ぶならば、あなたは職を得る機会がありますか？

Express を使用している[有名企業](https://expressjs.com/en/resources/companies-using-express.html)の数、コードベースに貢献している人の数、および無料と有料の両方でサポートを提供している人の数に基づけば、Express は一般的なフレームワークです。

## Express は指図をしたがりますか？

ウェブフレームワークはしばしば自身を「指図をしたがる」または「指図をしない」ものと称します。

指図をしたがるフレームワークは、特定のタスクを扱うのに「正しい方法」があるという考えを持っています。何であれ正しい方法であれば普通よく理解され細かく文書化されているため、（特定のタイプの問題を解決するような）特定の領域における素早い開発をサポートします。しかしながら、彼らが主眼とする領域の外にある問題を解決するにあたっては柔軟性に劣り、利用できるコンポーネントやアプローチの選択肢が限られたものになりがちです。

一方、指図をしないフレームワークは、目的の達成のためにコンポーネントをつなぎ合わせる最善の方法や、どのコンポーネントを使うかにさえも、あまり制約を設けません。
開発者は、コンポーネントを自分自身で探す必要があるという手間をかければ、特定のタスクを完了させるのに最適なツールの利用をより容易にします。

Express は指図をしません。リクエストを処理するチェインの中で、互換性のある好きなミドルウェアを、好きな順番で挿し込むことができます。1 つのファイルまたは複数のファイル、任意のディレクトリー構造を使ってアプリケーションを構成できます。ときに選択肢が多すぎるようにも感じられるでしょう。

## Express コードはどのように見えますか？

従来のデータ駆動型ウェブサイトでは、ウェブアプリケーションはウェブブラウザー (または他のクライアント) からの HTTP リクエストを待機します。リクエストが受信されると、アプリケーションは URL パターンと、`POST` データまたは `GET` データに含まれる可能性のある関連情報に基づいて、必要なアクションを実行します。必要に応じて、データベースから情報を読み書きしたり、リクエストを満たすために必要な他のタスクを実行することができます。アプリケーションはウェブブラウザーにレスポンスを返し、検索されたデータを HTML テンプレートのプレースホルダに挿入することによってブラウザーが表示する HTML ページを動的に作成することがよくあります。

Express は特定の HTTP 述語 (`GET`, `POST`, `SET` など) と URL パターン ("Route") に対してどの関数が呼び出されるかを指定するメソッドと、どのテンプレート ("view") エンジンが使用されるかを指定するメソッドを提供します。テンプレートエンジンを使用するには、レスポンスをレンダリングするためのテンプレートファイルを配置します。Express ミドルウェアを使用して、Cookie、セッション、およびユーザー、`POST`/`GET` パラメーターなどのサポートを追加することができます。Node がサポートするデータベース・メカニズムを使用できます (Express はデータベース関連の動作を定義しません)。

次のセクションでは、Express およびノード・コードを使用して作業するときに表示される一般的な事項について説明します。

### Helloworld Express

最初に、標準の Express の [Hello World](https://expressjs.com/ja/starter/hello-world.html) の例を考えてみましょう (これについては、以下の各セクションで説明します)。

> **メモ:** **Tip:** Node と Express がすでにインストールされている場合 (または[次の記事](/ja/docs/Learn/Server-side/Express_Nodejs/development_environment)のようにインストールする場合) は、このコードを **app.js** というテキストファイルに保存し、bash コマンドプロンプトで次のように呼び出して実行できます。
>
> **`node ./app.js`**

```js
const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
```

最初の 2 行は `require()` で express モジュールをインポートして [Express アプリケーション](https://expressjs.com/ja/4x/api.html#app)を作成します。このオブジェクトは伝統的に `app` と呼ばれ、HTTP リクエストのルーティング、ミドルウェアの設定、HTML ビューのレンダリング、テンプレートエンジンの登録、アプリケーションの動作を制御する[アプリケーション設定](https://expressjs.com/ja/4x/api.html#app.settings.table)の変更 (環境モード、ルート定義の大文字と小文字の区別など) のためのメソッドがあります。

コードの中央部分 (`app.get` で始まる 3 行) はルート定義を示しています。`app.get()` メソッドは、サイトルートからの相対パス (`'/'`) を持つ HTTP `GET` リクエストがあるたびに呼び出されるコールバック関数を指定します。コールバック関数はリクエストとレスポンスオブジェクトを引数として取り、レスポンスに対して単に [`send()`](https://expressjs.com/ja/4x/api.html#res.send) を呼び出して文字列 "Hello World!" を返します。

最後のブロックは 3000 番ポートでサーバーを起動し、コンソールにログコメントを出力します。 サーバーが稼働している場合は、ブラウザーの `localhost:3000` にアクセスして、レスポンスの例を確認することができます。

### モジュールのインポートと作成

モジュールは Node の `require()` 関数を使って他のコードにインポートできる JavaScript ライブラリー/ファイルです。 Express 自体はモジュールです。Express アプリケーションで使用するミドルウェアおよびデータベースライブラリーも同様です。

以下のコードは、例として Express フレームワークを使用して、モジュールを名前でインポートする方法を示しています。 最初に `require()` 関数を呼び出し、モジュールの名前を文字列 (`'express'`) として指定し、返されたオブジェクトを呼び出して [Express アプリケーション](https://expressjs.com/ja/4x/api.html#app.settings.table)を作成します。その後、アプリケーションオブジェクトのプロパティと機能にアクセスできます。

```js
const express = require("express");
const app = express();
```

独自のモジュールを作成して、同じ方法でインポートすることもできます。

> **メモ:** あなたは自身のモジュールを作成したいと思うでしょう、これはあなたが自身のコードを管理しやすい部品に分けることを可能にします 。ちなみに、モノリシックな単一ファイルのアプリケーションは理解し維持するのが難しいです。モジュールを使用すると、明示的にエクスポートした変数のみがインポートされるため、モジュールを使用すると名前空間を管理するのにも役立ちます。

オブジェクトをモジュールの外部で利用可能にするには、それらを `exports` オブジェクトの追加プロパティとして公開するだけです。たとえば、以下の **square.js** モジュールは `area()` メソッドと `perimeter()` メソッドをエクスポートしたファイルです。

```js
exports.area = function (width) {
  return width * width;
};
exports.perimeter = function (width) {
  return 4 * width;
};
```

`require()` を使ってこのモジュールをインポートし、次に示すようにエクスポートされたメソッドを呼び出すことができます。

```js
const square = require("./square"); //  require() にはファイル拡張子を除いたファイル名を引数に指定します。
console.log(`The area of a square with a width of 4 is ${square.area(4)}`);
```

> **メモ:** モジュールへの絶対パス (または最初に行ったように名前) を指定することもできます。

一度に 1 つのプロパティを構築するのではなく、1 つの割り当てで完全なオブジェクトをエクスポートする場合は、次のように `module.exports` に割り当てます (これを実行して、エクスポートオブジェクトのルートをコンストラクタまたは他の関数にすることもできます)。

```js
module.exports = {
  area(width) {
    return width * width;
  },

  perimeter(width) {
    return 4 * width;
  },
};
```

> **メモ:** `exports` を与えられたモジュール内の `module.exports` への[ショートカット](https://nodejs.org/api/modules.html#modules_exports_shortcut)として考えることができます。実際、`exports` は、モジュールが評価される前に `module.exports` の値に初期化される単なる変数です。 その値はオブジェクト (この場合は空のオブジェクト) への参照です。これは、`exports` が `module.exports` によって参照されるのと同じオブジェクトへの参照を保持することを意味します。また、エクスポートに別の値を代入することで、`module.exports` にバインドされなくなることも意味します。

モジュールの詳細については、[モジュール](https://nodejs.org/api/modules.html#modules_modules) (Node API のドキュメント) を参照してください。

### 非同期 API の使用

JavaScript コードでは、操作に同期 API よりも非同期 API が頻繁に使用されるため、処理に時間がかかることがあります。 同期 API は、各操作を完了してから次の操作を開始できる API です。 たとえば、次のログ関数は同期的で、テキストをコンソールに順番に印刷します(First、Second)。

```js
console.log("First");
console.log("Second");
```

対照的に、非同期 API は、API が操作を開始してすぐに (操作が完了する前に) 戻るものです。操作が終了すると、API は何かのメカニズムを使用して追加の実行を行います。例えば、次のコードでは最初に `setTimeout()` メソッドが呼び出されてすぐに返されても、操作が数秒間完了しないため、 "Second, First" が出力されます。

```js
setTimeout(function () {
  console.log("First");
}, 3000);
console.log("Second");
```

Node はシングルスレッドのイベント駆動型実行環境であるため、ノンブロッキングの非同期 API を使用することは、ブラウザーよりも Node にとってさらに重要です。シングルスレッドとは、サーバーへのすべてのリクエストが (別々のプロセスに分割されるのではなく) 同じスレッドで実行されることを意味します。このモデルは速度とサーバーリソースの点で非常に効率的です。しかし、完了に時間がかかる同期メソッドを呼び出す関数があると、それらは現在のリクエストだけでなく、他のすべてのリクエストがウェブアプリケーションによって処理されることをブロックします。

非同期 API がアプリケーションに完了したことを通知するにはいくつかの方法があります。最も一般的な方法は、非同期 API を呼び出すときにコールバック関数を登録することです。これは、操作が完了したときにコールバックされます。 これが上記で使用されているアプローチです。

> **メモ:** コールバックを使用することは、順番に実行しなければならない一連の従属非同期操作がある場合、かなり「面倒」になる可能性があります。これは、複数レベルのネストされたコールバックをもたらすためです。この問題は一般に「コールバック地獄」として知られています。この問題は、[async](https://www.npmjs.com/package/async) などのモジュールを使用した優れたコーディング方法（<http://callbackhell.com/> を参照）、または[プロミス](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise)または [async/await](/ja/docs/Web/JavaScript/Reference/Statements/async_function) などのネイティブの JavaScript 機能へのリファクタリングによっても軽減できます。Node はコールバック→プロミスの変換を人間工学的に行うために [`utils.promisify`](https://nodejs.org/api/util.html#utilpromisifyoriginal) という関数を提供しています。

> **メモ:** Node と Express の一般的な規約は、エラー優先コールバックを使うことです。この規約では、コールバック関数の最初の値はエラー値ですが、後続の引数には成功データが含まれます。 なぜこのアプローチがこのブログで役に立つのかについての良い説明があります：[Node.js の方法 - エラーファーストコールバックについて](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js) (fredkschott.com)。

### ルートハンドラーの作成

上記の Hello World Express の例では、サイトルート (`'/'`) への HTTP `GET` リクエストに対して(callback)ルートハンドラー関数を定義しました。

```js
app.get("/", function (req, res) {
  res.send("Hello World!");
});
```

コールバック関数はリクエストとレスポンスオブジェクトを引数として取ります。 この場合、メソッドは単にレスポンスに対して [`send()`](https://expressjs.com/en/4x/api.html#res.send) を呼び出して、文字列 "Hello World!" を返します。リクエスト/レスポンスサイクルを終了するための[レスポンスメソッドは他にも多数](https://expressjs.com/ja/guide/routing.html#response-methods)あります。たとえば、JSON レスポンスを送信するために [`res.json()`](https://expressjs.com/en/4x/api.html#res.json) を呼び出し、ファイルを送信するために [`res.sendFile()`](https://expressjs.com/en/4x/api.html#res.sendFile) を呼び出すことができます。

> **メモ:** **JavaScript tip:** コールバック関数で好きな引数名を使うことができます。 コールバックが呼び出されると、最初の引数は常にリクエストになり、2 番目の引数は常にレスポンスになります。 コールバックの本体で作業しているオブジェクトを識別できるようにそれらの名前を付けることは意味があります。

Express アプリケーションオブジェクトには、他のすべての HTTP 述語のルートハンドラーを定義するためのメソッドもあります。これらのメソッドはほとんど同じ方法で使用されます。

`checkout()`, `copy()`, **`delete()`**, **`get()`**, `head()`, `lock()`, `merge()`, `mkactivity()`, `mkcol()`, `move()`, `m-search()`, `notify()`, `options()`, `patch()`, **`post()`**, `purge()`, **`put()`**, `report()`, `search()`, `subscribe()`, `trace()`, `unlock()`, `unsubscribe()`.

`app.all()` という特別なルーティングメソッドがあります。これはあらゆる HTTP メソッドに応答して呼び出されます。これはすべてのリクエストメソッドの特定のパスにミドルウェア機能をロードするために使用されます。次の例（Express の資料から）は、使用される HTTP 述語に関係なく、 `/secret` へのリクエストに対して実行されるハンドラーを示しています（[http モジュール](https://nodejs.org/docs/latest/api/http.html#httpmethods)でサポートされている場合）。

```js
app.all("/secret", function (req, res, next) {
  console.log("Accessing the secret section…");
  next(); // 次のハンドラーに制御を渡します。
});
```

ルートを使用すると、URL 内の特定のパターンの文字を照合し、URL からいくつかの値を抽出し、それらをパラメータとしてルートハンドラーに渡すことができます(パラメータとして渡されるリクエストオブジェクトの属性として)。

多くの場合、サイトの特定の部分のルートハンドラーをまとめて、共通のルートプレフィックスを使用してそれらにアクセスすると便利です (たとえば、Wiki のあるサイトでは、1 つのファイルにすべての Wiki 関連ルートがあり、ルートプレフィックス _/wiki/_ を使用してアクセスすることがあります)。 Express では、これは [`express.Router`](http://expressjs.com/ja/guide/routing.html#express-router) オブジェクトを使用して実現されます。たとえば、**wiki.js** という名前のモジュールで Wiki ルートを作成してから、次に示すように `Router` オブジェクトをエクスポートできます。

```js
// wiki.js - Wiki ルートモジュール

const express = require("express");
const router = express.Router();

// ホームページルート
router.get("/", function (req, res) {
  res.send("Wiki home page");
});

// about ページルート
router.get("/about", function (req, res) {
  res.send("About this wiki");
});

module.exports = router;
```

> **メモ:** `Router` オブジェクトにルートを追加することは、(前述のように) `app` オブジェクトにルートを追加するのと同じです。

メインアプリケーションファイルでルーターを使用するには、ルートモジュール (**wiki.js**) を `require()` してから、Express アプリケーションで `use()` を呼び出してミドルウェア処理パスにルーターを追加します。 2 つの経路は `/wiki/` と `/wiki/about/` からアクセス可能になります。

```js
const wiki = require("./wiki.js");
// …
app.use("/wiki", wiki);
```

ルートを扱うことについて、そして特に `Router` を使うことについてもっとより多くのことがあります。それらについては、リンクされたセクション、[ルートとコントローラ](/ja/docs/Learn/Server-side/Express_Nodejs/routes)で説明します。

### ミドルウェアの使用

ミドルウェアは静的ファイルの提供からエラー処理、HTTP レスポンスの圧縮まで、Express アプリケーションで広く使用されています。ルート関数は HTTP クライアントにレスポンスを返すことで HTTP リクエスト - レスポンスサイクルを終了しますが、ミドルウェア関数は通常、リクエストまたはレスポンスに対して何らかの操作を実行してから、「スタック」内の次の機能を呼び出します。これは、より多くのミドルウェアまたはルートハンドラーの場合があります。ミドルウェアが呼び出される順序はアプリ開発者次第です。

> **メモ:** ミドルウェアは任意の操作を実行し、任意のコードを実行し、リクエストおよびレスポンスオブジェクトに変更を加えることができ、またリクエスト - レスポンスサイクルを終了することもできます。サイクルが終了しない場合は、`next()` を呼び出して次のミドルウェア機能に制御を渡す必要があります (そうでない場合、リクエストは中断されたままになります)。

Cookie の操作、セッション、ユーザー認証、リクエスト `POST` および JSON データへのアクセス、ロギングなどの一般的なウェブ開発タスクを簡素化するために、ほとんどのアプリはサードパーティ製ミドルウェアを使用します。[Express チームが管理するミドルウェアパッケージのリスト](http://expressjs.com/ja/resources/middleware.html)を見つけることができます。(他の人気のあるサードパーティのパッケージも含みます)。他の Express パッケージは npm パッケージマネージャーで入手できます。

サードパーティのミドルウェアを使用するには、まず npm を使用してそれをアプリにインストールする必要があります。たとえば、 [morgan](http://expressjs.com/en/resources/middleware/morgan.html) という HTTP リクエストロガーミドルウェアをインストールするには、次のようにします。

```bash
npm install morgan
```

次に、Express アプリケーションオブジェクトで `use()` を呼び出してミドルウェアをスタックに追加できます。

```js
const express = require("express");
const logger = require("morgan");
const app = express();
app.use(logger("dev"));
// …
```

> **メモ:** ミドルウェアおよびルーティング機能は、宣言されている順序で呼び出されます。ミドルウェアによっては、順序が重要です (たとえば、セッションミドルウェアが cookie ミドルウェアに依存している場合は、最初に cookie ハンドラーを追加する必要があります)。ほとんどの場合、ミドルウェアはルートを設定する前に呼び出されます。そうでないとルートハンドラーがミドルウェアによって追加された機能にアクセスすることはできません。

あなたは自身のミドルウェア機能を書くことができ、そうする必要があるでしょう (エラー処理コードを作成するためだけの場合)。ミドルウェア関数とルートハンドラーコールバックの**唯一の**違いは、ミドルウェア関数が次に `next` 引数を持つことです。ミドルウェア関数はリクエストサイクルを完了させるものではない場合に呼び出されます (ミドルウェア関数が呼び出されるとき、その中には呼び出される _next_ 関数が含まれていなければなりません)。

ミドルウェア関数は、`app.use()` を使用してすべてのレスポンスに対する処理チェーンに追加することもできますし、関連するメソッド、`app.get()`、`app.post()` などを使って特定の HTTP 動詞に対する処理チェーンにも追加することができます。ルートはどちらの用途でも同じように指定しますが、`app.use()` を呼び出す場合はルートがオプションになります。

以下の例は、ルートの有無に関わらず、両方の方法を使用してミドルウェア関数を追加する方法を示しています。

```js
const express = require("express");
const app = express();

// ミドルウェア関数の例
const a_middleware_function = function (req, res, next) {
  // Perform some operations
  next(); // next() を呼ぶことで Express はチェイン中の次のミドルウェア関数を呼びます。

// すべてのルートと述語に対して use() で関数を追加します。
app.use(a_middleware_function);

// 指定ルートに対して use() でミドルウェア関数を追加します。
app.use("/someroute", a_middleware_function);

// 指定の HTTP 述語とルートに対してミドルウェア関数を追加します。
app.get("/", a_middleware_function);

app.listen(3000);
```

> **メモ:** 上記ではミドルウェア関数を別々に宣言してからコールバックとして設定しています。以前のルートハンドラー関数では、使用時にコールバック関数を宣言しました。JavaScript では、どちらの方法も有効です。

Express の資料には、Express ミドルウェアの[使用](https://expressjs.com/ja/guide/using-middleware.html)および[作成](https://expressjs.com/ja/guide/writing-middleware.html)に関するより優れた資料があります。

### 静的ファイルの提供

[express.static](https://expressjs.com/ja/4x/api.html#express.static) ミドルウェアを使用して、画像、CSS、JavaScript などの静的ファイルを提供できます (`static()` は、実際には Express の**一部**である唯一のミドルウェア関数です)。 たとえば、node を呼び出す場所と同じレベルで、'**public**' という名前のディレクトリーから画像、CSS ファイル、および JavaScript ファイルを配信するには、次の行を使用します。

```js
app.use(express.static("public"));
```

public ディレクトリー内のファイルはすべて、ベース URL にそのファイル名 (ベースの "public" ディレクトリーに対する相対パス) を追加することによって提供されます。そのため、例えば：

```plain
http://localhost:3000/images/dog.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/about.html
```

`static()` を複数回呼び出して、複数のディレクトリーを扱うことができます。ファイルが 1 つのミドルウェア関数で見つからない場合は、そのファイルは後続のミドルウェアに単純に渡されます (ミドルウェアが呼び出される順序は宣言の順序に基づいています)。

```js
app.use(express.static("public"));
app.use(express.static("media"));
```

ファイルをベース URL に追加するのではなく、静的 URL の仮想プレフィックスを作成することもできます。たとえば、ここではファイルがプレフィックス "/media" でロードされるように[マウントパスを指定](https://expressjs.com/ja/4x/api.html#app.use)します。

```js
app.use("/media", express.static("public"));
```

これで、`public` ディレクトリーにあるファイルを `/media` パスプレフィックスから読み込むことができます。

```plain
http://localhost:3000/media/images/dog.jpg
http://localhost:3000/media/video/cat.mp4
http://localhost:3000/media/cry.mp3
```

詳しくは、[Express での静的ファイルの提供](https://expressjs.com/en/starter/static-files.html)を参照してください。

### エラーの処理

エラーは、通常の 3 つの引数ではなく、4 つの引数 `(err、req、res、next)` を持つ 1 つ以上の特別なミドルウェア関数によって処理されます。例えば：

```js
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

これらは必要なコンテンツを返すことができますが、他のすべての `app.use()` および呼び出しをルーティングした後に呼び出して、リクエスト処理プロセスの最後のミドルウェアになるようにする必要があります。

Express にはエラーハンドラーが組み込まれています。これは、アプリで発生する可能性がある残りのエラーを処理します。 このデフォルトのエラー処理ミドルウェア関数は、ミドルウェア関数スタックの最後に追加されます。`next()` にエラーを渡し、それをエラーハンドラーで処理しなかった場合、それは組み込みエラーハンドラーによって処理されます。エラーはスタックトレースとともにクライアントに書き込まれます。

> **メモ:** スタックトレースは実稼働環境に含まれていません。プロダクションモードで実行するには、環境変数 `NODE_ENV` を '`production`' に設定する必要があります。

> **メモ:** HTTP 404 およびその他の "エラー" ステータスコードはエラーとして扱われません。これらを処理したい場合は、ミドルウェア関数を追加して処理することができます。詳しくは [FAQ](http://expressjs.com/ja/starter/faq.html#how-do-i-handle-404-responses) を見てください。

詳しくは[エラー処理](http://expressjs.com/ja/guide/error-handling.html)（Express ドキュメント） を参照してください。

### データベースの使用

Express アプリケーションは、Node によってサポートされている任意のデータベースメカニズムを使用できます (Express 自体はデータベース管理のための特定の追加の動作や要件を定義していません)。PostgreSQL、MySQL、Redis、SQLite、MongoDB などを含む多くのオプションがあります。

これらを使用するには、まず npm を使用してデータベースドライバをインストールする必要があります。たとえば、一般的な NoSQL MongoDB 用のドライバをインストールするには、次のコマンドを使用します。

```bash
npm install mongodb
```

データベース自体はローカルにインストールすることも、クラウドサーバーにインストールすることもできます。Express コードではドライバが必要で、データベースへの接続から、作成、参照、更新、削除 (CRUD) 操作を実行します。以下の (Express ドキュメントからの) 例は、MongoDB を使ってどのように「哺乳類の」レコードを見つけることができるかを示しています。

これは mongodb バージョン 2.2.33 までの古いバージョンで動作します。

```js
const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/animals", (err, db) => {
  if (err) throw err;

  db.collection("mammals")
    .find()
    .toArray((err, result) => {
      if (err) throw err;

      console.log(result);
    });
});
```

mongodb バージョン 3.0 以上のためのコードは次の通りです。

```js
const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/animals", (err, client) => {
  if (err) throw err;

  const db = client.db("animals");
  db.collection("mammals")
    .find()
    .toArray((err, result) => {
      if (err) throw err;
      console.log(result);
      client.close();
    });
});
```

もう 1 つの一般的な方法は、Object Relational Mapper ( "ORM") を介して間接的にデータベースにアクセスすることです。このアプローチではデータを「オブジェクト」または「モデル」として定義し、ORM はそれらを基礎となるデータベース形式にマッピングします。このアプローチには、開発者としてデータベースのセマンティクスではなく JavaScript オブジェクトの観点から考え続けることができ、受信データの検証とチェックを実行するための明らかな場所があるという利点があります。データベースについての詳細は、後の記事で説明します。

詳しくは[データベース統合](https://expressjs.com/ja/guide/database-integration.html)（Express ドキュメント） を参照してください。

### データのレンダリング（ビュー）

テンプレートエンジン（Express のドキュメントでは「ビューエンジン」とも呼ばれています）を使用すると、ページの生成時に埋められるデータのプレースホルダを使用して、テンプレート内の出力ドキュメントの構造を指定できます。テンプレートは HTML の作成によく使用されますが、他の種類の文書も作成できます。 Express は[いくつかのテンプレートエンジン](https://github.com/expressjs/express/wiki#template-engines)をサポートしています。ここでは、より人気の高いエンジンの便利な比較ができます。[JavaScript テンプレートエンジンの比較：Jade、Moustache、Dust など](https://strongloop.com/strongblog/compare-javascript-templates-jade-mustache-dust/)

次に示すように、アプリケーション設定コードで、使用するテンプレートエンジンと、Express が 'ビュー' および 'ビューエンジン' 設定を使用してテンプレートを探す場所を設定します（テンプレートライブラリーを含むパッケージもインストールする必要があります！）

```js
const express = require("express");
const path = require("path");
const app = express();

// ('views') テンプレートを含むディレクトリーを設定
app.set("views", path.join(__dirname, "views"));

// 利用するビューエンジン、この場合は 'some_template_engine_name' を設定
app.set("view engine", "some_template_engine_name");
```

テンプレートの外観は使用するエンジンによって異なります。"title" および "message" という名前のデータ変数のプレースホルダを含む "index.\<テンプレート拡張子>" という名前のテンプレートファイルがあると仮定すると、ルートハンドラー関数で [`Response.render()`](http://expressjs.com/ja/4x/api.html#res.render) を呼び出して HTML レスポンスを作成し、送信することになります。

```js
app.get("/", function (req, res) {
  res.render("index", { title: "About dogs", message: "Dogs rock!" });
});
```

詳しくは [Express でのテンプレートエンジンの使用](http://expressjs.com/ja/guide/using-template-engines.html)（Express ドキュメント） を参照してください。

### ファイル構造

Express は、構造や使用するコンポーネントに関しては何も想定していません。ルート、ビュー、静的ファイル、およびその他のアプリケーション固有のロジックは、任意のディレクトリー構造を持つ任意の数のファイルに存在できます。 Express アプリケーション全体を 1 つのファイルにまとめることは完全に可能ですが、通常は機能 (アカウント管理、ブログ、ディスカッション掲示板など) およびアーキテクチャ上の問題のドメイン ([MVC アーキテクチャ](/ja/docs/Glossary/MVC)を使用している場合は、モデル、ビュー、コントローラーなど) に基づいてアプリケーションをファイルに分割します。

後のトピックでは、ウェブアプリケーションを作成するために簡単に拡張できるモジュール式のアプリケーションスケルトンを作成する Express Application Generator を使用します。

## まとめ

おめでとうございます、Express/Node の旅の最初のステップを完了しました。これで Express と Node の主な利点と、Express アプリケーションの主要部分がどのように見えるか (ルート、ミドルウェア、エラー処理、およびテンプレートコード) をおおまかに理解できています。また、Express は指図しないフレームワークであるため、これらの部分をどのようにまとめるかやどのライブラリーを使用するかは、ほとんどあなた次第です。

もちろん、Express は意図的に非常に軽量なウェブアプリケーションフレームワークであるため、その利点と可能性の多くはサードパーティのライブラリーと機能からもたらされています。以下の記事でそれらをより詳しく見ていきます。次回の記事では、Node 開発環境のセットアップについて見ていきます。そうすれば、いくつかの Express コードが実際に動作しているところを見始めることができます。

## 関連情報

- [Venkat.R - Manage Multiple Node versions](https://medium.com/@ramsunvtech/manage-multiple-node-versions-e3245d5ede44)
- [Modules](https://nodejs.org/api/modules.html#modules_modules) (Node API docs)
- [Express](https://expressjs.com/ja)（ホームページ）
- [基本的なルーティング](https://expressjs.com/ja/starter/basic-routing.html)（Express ドキュメント）
- [ルーティング](https://expressjs.com/ja/guide/routing.html)（Express ドキュメント）
- [Express でのテンプレート・エンジンの使用](https://expressjs.com/ja/guide/using-template-engines.html)（Express ドキュメント）
- [ミドルウェアの使用](https://expressjs.com/ja/guide/using-middleware.html)（Express ドキュメント）
- [Express アプリケーションで使用するミドルウェアの作成](https://expressjs.com/ja/guide/writing-middleware.html)（Express ドキュメント）
- [データベースの統合](https://expressjs.com/ja/guide/database-integration.html)（Express ドキュメント）
- [Express での静的ファイルの提供](https://expressjs.com/ja/starter/static-files.html)（Express ドキュメント）
- [エラー処理](https://expressjs.com/ja/guide/error-handling.html)（Express ドキュメント）

{{NextMenu("Learn/Server-side/Express_Nodejs/development_environment", "Learn/Server-side/Express_Nodejs")}}

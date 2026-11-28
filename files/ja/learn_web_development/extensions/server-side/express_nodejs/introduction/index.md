---
title: Express/Node の紹介
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction
l10n:
  sourceCommit: d775e1249487f1a7ab9a8a031c70ca71bc892d63
---

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Express の最初の記事では「Node って何だろう？」、「Express って何だろう？」という疑問に答え、なぜ Express ウェブフレームワークが特別なのかについて概要を説明します。主な特徴、Express アプリケーションの主な基本要素を大まかに説明します（テスト開発環境についてはここではまだ触れません）。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <a href="/ja/docs/Learn_web_development/Extensions/Server-side/First_steps">サーバーサイドのウェブサイトプログラミング</a>の一般的な理解、特に<a href="/ja/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview">ウェブサイトにおけるクライアントとサーバーのやりとり</a>の仕組み。
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

[Node](https://nodejs.org/)（正式には _Node.js_）はオープンソースのクロスプラットフォーム、実行環境で、開発者はあらゆるサーバーサイドのツールやアプリケーションを [JavaScript](/ja/docs/Glossary/JavaScript) で作成することができます。
この実行環境は閲覧コンテキスト外での使用（すなわち、コンピューターまたはサーバー OS 上での直接実行）を目的としています。そのため、クライアントサイドではブラウザー固有の JavaScript API が省略され、HTTP やファイルシステムライブラリーを含む従来の OS API がサポートされます。

ウェブサーバー開発の観点から Node には多くの利点があります。

- 素晴らしいパフォーマンス。 Node はウェブアプリケーションのスループットとスケーラビリティを最適化するように設計されており、多くの一般的なウェブ開発の問題 (リアルタイムウェブアプリケーションなど) に良い解決策となります
- コードは "plain old JavaScript" で書かれています。つまり、ブラウザーとウェブサーバーの両方のコードを記述しているときに、言語間の "コンテキストシフト" に費やす時間が短くなります
- JavaScript は急速に進化するプログラミング言語であり、他の従来のウェブサーバー言語（Java、PHP など）と比較して、最新の言語設計による恩恵を受けています。
- Node パッケージマネージャー (npm) は、何十万もの再利用可能なパッケージへのアクセスを提供します。クラス最高の依存関係解決機能もあり、ほとんどのビルドツールチェーンの自動化にも使用できます。
- Node.js は移植可能です。主要なオペレーティングシステムと多くのウェブホスティングプロバイダーで利用できます。サーバーを作成したら、追加の修正なしでどこでも動作することを確信できます。
- 非常に活発なサードパーティのエコシステムと開発者コミュニティがあり、助けを惜しまない人々が多くいます。

Node HTTP パッケージを使用することで、Node.js で簡単な ウェブサーバーを作成できます。

### Hello Node.js

次の例では、URL `http://127.0.0.1:8000/` にあるあらゆる種類の HTTP リクエストを待ち受ける ウェブサーバーを作成します。リクエストが受信されると、スクリプトは "Hello World" という文字列でレスポンスします。すでに Node をインストールしている場合は、次の手順に従ってこの例を試すことができます。

1. 端末を開きます (Windows ではコマンドラインユーティリティを開きます)。
2. プログラムを保存するフォルダー (たとえば "test-node") を作成し、端末に次のコマンドを入力して移動します。

   ```bash
   cd test-node
   ```

3. 好きなテキストエディターを使って `hello.mjs` というファイルを作成し、次のコードを貼り付けます。

   ```js
   // HTTP モジュールの読み込み
   import http from "node:http";

   const hostname = "127.0.0.1";
   const port = 8000;

   // HTTP サーバーを作成
   const server = http.createServer((req, res) => {
     // HTTP ステータスとコンテンツタイプを持つ HTTP ヘッダーのレスポンスを設定
     res.writeHead(200, { "Content-Type": "text/plain" });

     // レスポンス本体の "Hello World" を送信
     res.end("Hello World\n");
   });

   // サーバーにアクセスするための URL を出力
   server.listen(port, hostname, () => {
     console.log(`Server running at http://${hostname}:${port}/`);
   });
   ```

4. 上記で作成したフォルダーにファイルを保存します。
5. 端末に戻り、次のコマンドを入力します。

   ```bash
   node hello.mjs
   ```

最後に、ウェブブラウザーで `http://localhost:8000` に移動します。テキスト以外は空の ウェブページの左上に "**Hello World**" というテキストが表示されます。

> [!NOTE]
> ローカル環境をセットアップせずに Node.js コードを試したい場合、Scrimba の [Aside: The HTTP module](https://scrimba.com/learn-nodejs-c00ho9qqh6/~07du?via=MDN) <sup>[_MDN 学習パートナー_](/ja/docs/MDN/Writing_guidelines/Learning_content#パートナーリンクと埋め込み)</sup> が提供するインタラクティブな手順を追って説明するチュートリアルで、Node HTTP パッケージを使った基本サーバーの設定を学べます。

## ウェブフレームワーク

Node HTTP ライブラリーは、基本的な機能だけを提供します。様々な HTTP 述語 (`GET`, `POST`, `DELETE` など)、別々の URL パス（ルート）、静的ファイル、レスポンスを動的に作成するテンプレートなど、一般的なウェブの慣用的な機能を実装したい場合、Node だけではあまり役に立ちません。コードを自分で書くか、車輪の再発明を避けるためウェブフレームワークを使用する必要があります。

## Express の紹介

[Express](https://expressjs.com/ja/) は最も有名な Node ウェブフレームワークであり、他の多くの有名な Node.js フレームワークの基礎となるライブラリーです。これは以下のメカニズムを提供します。

- 異なる URL のパス (ルート) で異なる HTTP 述語を使用してリクエストのハンドラーを作成します。
- テンプレートにデータを挿入してレスポンスを生成するために、「ビュー」レンダリングエンジンと統合します。
- 接続に使用するポートやレスポンスのレンダリングに使用されるテンプレートの場所などの一般的なウェブアプリケーション設定値を設定します。
- リクエスト処理パイプライン内の任意の時点で、追加のリクエスト処理「ミドルウェア」を追加します。

Express 自体はかなりシンプルですが、開発者はほぼすべてのウェブ開発問題に対応する互換性のあるミドルウェアパッケージを作成しています。Cookie、セッション、ユーザーログイン、URL 引数、POST データ、セキュリティヘッダーなどを扱うライブラリーがあります。Express チームが管理するミドルウェアパッケージのリストは、[Express Middleware](https://expressjs.com/en/resources/middleware/)（一般的なサードパーティパッケージのリストとともに）にあります。

> [!NOTE]
> この柔軟性は両刃の剣です。ほぼすべての問題や要件に対応するミドルウェアパッケージがありますが、適切なパッケージを使用して作業することは時には挑戦になることがあります。アプリケーションを構造化する「正しい方法」もなく、インターネット上で見つかる多くの例は最適ではないし、ウェブアプリケーションを開発するために必要なことのほんの一部を示しているだけです。

## Node と Express はどこから来たのですか？

Node は 2009 年に Linux 用に最初にリリースされました。npm パッケージマネージャは 2010 年にリリースされ、ネイティブ Windows サポートは 2012 年に追加されました。もっと知りたいのであれば、[Wikipedia](https://en.wikipedia.org/wiki/Node.js#History) を掘り下げてみてください。

Express は 2010 年 11 月に最初にリリースされ、現在 API のメジャーバージョンは 5 です。現在のリリースの変更点については[更新履歴](https://github.com/expressjs/express/releases)を、詳細な履歴リリースノートについては [GitHub](https://github.com/expressjs/express/blob/master/History.md) を参照してください。

## Node と Express はどれくらい普及していますか？

ウェブフレームワークの普及は、それが維持されるかどうかの指標であり、ドキュメンテーション、アドオンライブラリー、テクニカルサポートの面でどのようなリソースが利用される可能性が高いかという点で重要です。

サーバー側のフレームワークの普及率は、すぐに利用可能で決定的なものではありません（ただし、各プラットフォームの GitHub プロジェクトや StackOverflow の質問数をカウントするような仕組みを使って、人気を推定することはできます）。より良い質問は、人気のないプラットフォームの問題を避けるために Node と Express が「人気がある」かどうかです。それらは進化し続けていますか？あなたがそれを必要としたら助けを得ることができますか？あなたが Express を学ぶならば、あなたは職を得る機会がありますか？

Express を使用している有名企業の数、コードベースに貢献している人の数、および無料と有料の両方でサポートを提供している人の数に基づけば、Express は一般的なフレームワークといえます。

> [!NOTE]
> Node エコシステムは、すべてのプログラミング言語の中でも最も急速に進化しているものの 1 つです。Express は競合製品の多くよりも前に登場し、パフォーマンス、操作性、フロントエンドフレームワークとの統合などの点で競争力を失いつつあります。しかし、十分な期間使用されているため、今後もあらゆる場面で見かけるでしょう。また、このチュートリアルで学ぶ概念の多くは、新しいフレームワークにも簡単に応用できます。

## Express は指図をしたがりますか？

ウェブフレームワークはしばしば自身を「指図をしたがる」または「指図をしない」ものと称します。

指図をしたがるフレームワークは、特定のタスクを扱うのに「正しい方法」があるという考えを持っています。何であれ正しい方法であれば普通よく理解され細かく文書化されているため、（特定のタイプの問題を解決するような）特定の領域における素早い開発をサポートします。しかしながら、彼らが主眼とする領域の外にある問題を解決するにあたっては柔軟性に劣り、利用できるコンポーネントやアプローチの選択肢が限られたものになりがちです。

一方、指図をしないフレームワークは、目的の達成のためにコンポーネントをつなぎ合わせる最善の方法や、どのコンポーネントを使うかにさえも、あまり制約を設けません。
開発者は、コンポーネントを自分自身で探す必要があるという手間をかければ、特定のタスクを完了させるのに最適なツールの利用をより容易にします。

Express は指図をしません。リクエストを処理するチェインの中で、互換性のある好きなミドルウェアを、好きな順番で挿し込むことができます。1 つのファイルまたは複数のファイル、任意のディレクトリー構造を使ってアプリケーションを構成できます。ときに選択肢が多すぎるようにも感じられるでしょう。

## Express コードはどのように見えますか？

従来のデータ駆動型ウェブサイトでは、ウェブアプリケーションはウェブブラウザー (または他のクライアント) からの HTTP リクエストを待機します。リクエストが受信されると、アプリケーションは URL パターンと、`POST` データまたは `GET` データに含まれる可能性のある関連情報に基づいて、必要なアクションを実行します。必要に応じて、データベースから情報を読み書きしたり、リクエストを満たすために必要な他のタスクを実行することができます。アプリケーションはウェブブラウザーにレスポンスを返し、検索されたデータを HTML テンプレートのプレースホルダに挿入することによってブラウザーが表示する HTML ページを動的に作成することがよくあります。

Express は特定の HTTP 述語 (`GET`, `POST`, `PUT` など) と URL パターン ("Route") に対してどの関数が呼び出されるかを指定するメソッドと、どのテンプレート ("view") エンジンが使用されるかを指定するメソッドを提供します。テンプレートエンジンを使用するには、レスポンスをレンダリングするためのテンプレートファイルを配置します。Express ミドルウェアを使用して、Cookie、セッション、およびユーザー、`POST`/`GET` 引数などのサポートを追加することができます。Node がサポートするデータベース・メカニズムを使用できます (Express はデータベース関連の動作を定義しません)。

次の節では、Express およびノード・コードを使用して作業するときに表示される一般的な事項について説明します。

### Helloworld Express

最初に、標準の Express の [Hello World](https://expressjs.com/ja/starter/hello-world/) の例を考えてみましょう（これについては、以下の各節で説明します）。

> [!NOTE]
> Node と Express がすでにインストールされている場合（または[次の記事](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment)で示すようにインストールする場合）は、**package.json** に `"type": "module"` を追加し、このコードを **app.js** というテキストファイルに保存し、bash コマンドプロンプトで次のように呼び出して実行してください。
>
> ```bash
> node ./app.js
> ```

```js
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
```

最初の 2 つの文は express モジュールをインポートして [Express アプリケーション](https://expressjs.com/ja/5x/api/application/)を作成します。このオブジェクトは伝統的に `app` と呼ばれ、HTTP リクエストのルーティング、ミドルウェアの設定、HTML ビューのレンダリング、テンプレートエンジンの登録、アプリケーションの動作を制御する[アプリケーション設定](https://expressjs.com/ja/5x/api/application/#application-settings)（環境モード、ルート定義の大文字と小文字の区別など）の変更のためのメソッドがあります。

コードの中央部分（`app.get` で始まる 3 行）はルート定義を示しています。`app.get()` メソッドは、サイトルートからの相対パス (`'/'`) を持つ HTTP `GET` リクエストがあるたびに呼び出されるコールバック関数を指定します。コールバック関数はリクエストとレスポンスオブジェクトを引数として取り、レスポンスに対して [`send()`](https://expressjs.com/ja/5x/api/response/#ressend) を呼び出して文字列 "Hello World!" を返します。

最後のブロックは 3000 番ポートでサーバーを起動し、コンソールにログコメントを出力します。 サーバーが稼働している場合は、ブラウザーの `localhost:3000` にアクセスして、レスポンスの例を確認することができます。

> [!NOTE]
> [Express のドキュメント](https://expressjs.com/ja/starter/hello-world/)では、ECMAScript モジュール (`import`/`export` 宣言を使用) と CommonJS モジュール (`require()` と `module.exports` を使用) の両方の方法が説明されています。ECMAScript モジュールは公式の JavaScript 標準であり、このチュートリアルで使用するものです。公式ドキュメントを参照する場合は、コードブロックの "ESM" タブを選択してください。

### モジュールのインポートと作成

モジュールは、[`import`](/ja/docs/Web/JavaScript/Reference/Statements/import) 宣言を使用して他のコードにインポートできる JavaScript ライブラリー/ファイルです。Express 自体もモジュールであり、Express アプリケーションで使用するミドルウェアやデータベースライブラリーもモジュールです。

このチュートリアルでは [ECMAScript モジュール (ESM)](/ja/docs/Web/JavaScript/Guide/Modules)を使用します。プロジェクトの **package.json** に `"type": "module"` を設定すると、Node は **.js** ファイルを ES モジュールとして扱います。ESM が Node でどのように動作するかについては、[Node ESM](https://nodejs.org/api/esm.html) リファレンスを参照してください。

以下のコードは、Express フレームワークを例として、モジュールを名前でインポートする方法を示しています。モジュールのデフォルトエクスポートを `express` としてインポートし、それを呼び出して[Express アプリケーション](https://expressjs.com/ja/5x/api/application/)を作成します。その後、アプリケーションオブジェクトのプロパティと関数にアクセスできます。

```js
import express from "express";

const app = express();
```

独自のモジュールを作成して、同じ方法でインポートすることもできます。

> [!NOTE]
> あなたは自身のモジュールを作成したいと思うでしょう、これはあなたが自身のコードを管理しやすい部品に分けることを可能にします 。ちなみに、モノリシックな単一ファイルのアプリケーションは理解し維持するのが難しいです。モジュールを使用すると、明示的にエクスポートした変数のみがインポートされるため、モジュールを使用すると名前空間を管理するのにも役立ちます。

モジュール外でオブジェクトを利用可能にするには、[`export`](/ja/docs/Web/JavaScript/Reference/Statements/export) 宣言を使用します。たとえば、以下の **square.js** モジュールは `area()` と `perimeter()` 関数をエクスポートします。

```js
export function area(width) {
  return width * width;
}

export function perimeter(width) {
  return 4 * width;
}
```

これらの名前付きエクスポートをインポートし、次のように呼び出すことができます。

```js
import { area } from "./square.js";

console.log(`The area of a square with a width of 4 is ${area(4)}`);
```

相対インポートにはファイル拡張子を含める必要があります。すべての名前付きエクスポートを 1 つのオブジェクトとして利用するには、名前空間インポートを使用します。

```js
import * as square from "./square.js";

console.log(
  `The perimeter of a square with a width of 4 is ${square.perimeter(4)}`,
);
```

単一の値をモジュールのデフォルトエクスポートとしてエクスポートすることもできます。

```js
export default function area(width) {
  return width * width;
}
```

デフォルトエクスポートを中括弧なしでインポートし、ローカル名を選択します。

```js
import squareArea from "./square.js";

console.log(squareArea(4));
```

詳しくは、[モジュール: ECMAScript モジュール](https://nodejs.org/api/esm.html)（Node API ドキュメント）を参照してください。

### 非同期 API の使用

JavaScript コードでは、完了までに時間がかかる可能性のある操作に、同期 API よりも非同期 API が頻繁に使用されます。同期 API は、各操作を完了してから次の操作を開始できる API です。たとえば、次のログ関数は同期的で、テキストをコンソールに順番に出力します(First、Second)。

```js
console.log("First");
console.log("Second");
```

対照的に、非同期 API は、API が操作を開始してすぐに (操作が完了する前に) 戻るものです。操作が終了すると、API は何かのメカニズムを使用して追加の実行を行います。例えば、次のコードでは最初に `setTimeout()` メソッドが呼び出されてすぐに返されても、操作が数秒間完了しないため、 "Second, First" が出力されます。

```js
setTimeout(() => {
  console.log("First");
}, 3000);
console.log("Second");
```

Node のアプリケーションは、よくシングルスレッドのイベント駆動型実行環境として書かれるため、ノンブロッキングの非同期 API を使用することは、ブラウザーよりも Node にとってさらに重要です。シングルスレッドとは、サーバーへのすべてのリクエストが (別々のプロセスに分割されるのではなく) 同じスレッドで実行されることを意味します。このモデルは速度とサーバーリソースの点で非常に効率的です。しかし、完了に時間がかかる同期メソッドを呼び出す関数があると、それらは現在のリクエストだけでなく、他のすべてのリクエストがウェブアプリケーションによって処理されることをブロックします。

非同期 API が処理完了をアプリケーションに通知する方法はいくつかあります。最も一般的な方法は、非同期 API を呼び出す際にコールバック関数を登録し、操作が完了した際にその関数を呼び出すことです。これが先ほど使用したアプローチです。

> [!NOTE]
> コールバックを使用することは、順番に実行しなければならない一連の従属非同期操作がある場合、かなり「面倒」になる可能性があります。これは、複数レベルのネストされたコールバックをもたらすためです。この問題は一般に「コールバック地獄」と呼ばれています。

> [!NOTE]
> Node と Express の一般的な習慣は、エラー優先コールバックを使うことです。この習慣では、コールバック関数の最初の値はエラー値ですが、後続の引数には成功データが含まれます。 なぜこのアプローチがこのブログで役に立つのかについての良い説明があります：[Node.js の方法 - エラーファーストコールバックについて](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/) (fredkschott.com)。

最近の JavaScript は一般に[プロミス](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise)または [async/await](/ja/docs/Web/JavaScript/Reference/Statements/async_function) を使用して、非同期なプログラムの流れを制御します。
使用可能な場所ではプロミスを使用してください。コールバックを使用しているコードでは、[`utils.promisify`](https://nodejs.org/api/util.html#utilpromisifyoriginal) 関数を使用してコールバック→プロミスの変換を人間工学的に行うことができます。

### ルートハンドラーの作成

上記の Hello World Express の例では、サイトルート (`'/'`) への HTTP の `GET` リクエストに対して(callback)ルートハンドラー関数を定義しました。

```js
app.get("/", (req, res) => {
  res.send("Hello World!");
});
```

コールバック関数はリクエストとレスポンスオブジェクトを引数として取ります。この場合、メソッドはレスポンスに対して [`send()`](https://expressjs.com/ja/5x/api/response/#ressend) を呼び出して、文字列 "Hello World!" を返します。リクエスト/レスポンスサイクルを終了する[レスポンスメソッドは他にも多数](https://expressjs.com/ja/guide/routing/#response-methods)あります。たとえば、[`res.json()`](https://expressjs.com/ja/5x/api/response/#resjson) を呼び出して JSON レスポンスを送信したり、[`res.sendFile()`](https://expressjs.com/ja/5x/api/response/#ressendfile) を呼び出してファイルを送信したりできます。

> [!NOTE]
> コールバック関数で好きな引数名を使うことができます。 コールバックが呼び出されると、最初の引数は常にリクエストになり、2 番目の引数は常にレスポンスになります。 コールバックの本体で作業しているオブジェクトを識別できるようにそれらの名前を付けることは意味があります。

Express アプリケーションオブジェクトには、他のすべての HTTP 述語のルートハンドラーを定義するためのメソッドもあります。これらのメソッドはほとんど同じ方法で使用されます。

`checkout()`, `copy()`, **`delete()`**, **`get()`**, `head()`, `lock()`, `merge()`, `mkactivity()`, `mkcol()`, `move()`, `m-search()`, `notify()`, `options()`, `patch()`, **`post()`**, `purge()`, **`put()`**, `report()`, `search()`, `subscribe()`, `trace()`, `unlock()`, `unsubscribe()`.

`app.all()` という特別なルーティングメソッドがあります。これはあらゆる HTTP メソッドに応答して呼び出されます。これはすべてのリクエストメソッドの特定のパスにミドルウェア機能をロードするために使用されます。次の例（Express の資料から）は、使用される HTTP 述語に関係なく、 `/secret` へのリクエストに対して実行されるハンドラーを示しています（[http モジュール](https://nodejs.org/docs/latest/api/http.html#httpmethods)でサポートされている場合）。

```js
app.all("/secret", (req, res, next) => {
  console.log("Accessing the secret section…");
  next(); // 次のハンドラーに制御を渡します。
});
```

ルートを使用すると、URL 内の特定のパターンの文字を照合し、URL からいくつかの値を抽出し、それらを引数としてルートハンドラーに渡すことができます(引数として渡されるリクエストオブジェクトの属性として)。

多くの場合、サイトの特定の部分のルートハンドラーをまとめて、共通のルート接頭辞を使用してそれらにアクセスすると便利です（たとえば、Wiki のあるサイトでは、1 つのファイルにすべての Wiki 関連ルートがあり、ルート接頭辞 _/wiki/_ を使用してアクセスすることがあります）。Express では、これは [`express.Router`](https://expressjs.com/ja/guide/routing/#expressrouter) オブジェクトを使用して実現されます。たとえば、**wiki.js** という名前のモジュールで Wiki ルートを作成してから、次に示すように `Router` オブジェクトをエクスポートできます。

```js
// wiki.js - Wiki ルートモジュール

import { Router } from "express";

const router = Router();

// ホームページルート
router.get("/", (req, res) => {
  res.send("Wiki home page");
});

// about ページルート
router.get("/about", (req, res) => {
  res.send("About this wiki");
});

export default router;
```

> [!NOTE]
> `Router` オブジェクトにルートを追加することは、(前述のように) `app` オブジェクトにルートを追加するのと同じです。

メインアプリケーションファイルでルーターを使用するには、ルートモジュール (**wiki.js**) をインポートしてから、Express アプリケーションで `use()` を呼び出してミドルウェア処理パスにルーターを追加します。2 つの経路は `/wiki/` と `/wiki/about/` からアクセスできます。

```js
import wiki from "./wiki.js";

// …
app.use("/wiki", wiki);
```

ルートを扱うことについて、そして特に `Router` を使うことについてもっとより多くのことがあります。それらについては、リンクされたセクション、[ルートとコントローラー](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes)で説明します。

### ミドルウェアの使用

ミドルウェアは静的ファイルの提供からエラー処理、HTTP レスポンスの圧縮まで、Express アプリケーションで広く使用されています。ルート関数は HTTP クライアントにレスポンスを返すことで HTTP リクエスト - レスポンスサイクルを終了しますが、ミドルウェア関数は通常、リクエストまたはレスポンスに対して何らかの操作を実行してから、「スタック」内の次の機能を呼び出します。これは、より多くのミドルウェアまたはルートハンドラーの場合があります。ミドルウェアが呼び出される順序はアプリ開発者次第です。

> [!NOTE]
> ミドルウェアは任意の操作を実行し、任意のコードを実行し、リクエストおよびレスポンスオブジェクトに変更を加えることができ、またリクエスト - レスポンスサイクルを終了することもできます。サイクルが終了しない場合は、`next()` を呼び出して次のミドルウェア機能に制御を渡す必要があります (そうでない場合、リクエストは中断されたままになります)。

Cookie の操作、セッション、ユーザー認証、リクエスト `POST` および JSON データへのアクセス、ロギングなどの一般的なウェブ開発タスクを簡素化するために、ほとんどのアプリはサードパーティ製ミドルウェアを使用します。[Express チームが管理するミドルウェアパッケージのリスト](https://expressjs.com/ja/resources/middleware/)（他の人気のあるサードパーティパッケージも含む）があります。他の Express パッケージは npm パッケージマネージャーで入手できます。

サードパーティのミドルウェアを使用するには、まず npm を使用してアプリにインストールする必要があります。たとえば、[morgan](https://expressjs.com/en/resources/middleware/morgan/) という HTTP リクエストロガーミドルウェアをインストールするには、次のようにします。

```bash
npm install morgan
```

次に、Express アプリケーションオブジェクトで `use()` を呼び出してミドルウェアをスタックに追加できます。

```js
import express from "express";
import logger from "morgan";

const app = express();
app.use(logger("dev"));
// …
```

> [!NOTE]
> ミドルウェアおよびルーティング機能は、宣言されている順序で呼び出されます。ミドルウェアによっては、順序が重要です (たとえば、セッションミドルウェアが cookie ミドルウェアに依存している場合は、最初に cookie ハンドラーを追加する必要があります)。ほとんどの場合、ミドルウェアはルートを設定する前に呼び出されます。そうでないとルートハンドラーがミドルウェアによって追加された機能にアクセスすることはできません。

あなたは自身のミドルウェア機能を書くことができ、そうする必要があるでしょう (エラー処理コードを作成するためだけの場合)。ミドルウェア関数とルートハンドラーコールバックの**唯一の**違いは、ミドルウェア関数が次に `next` 引数を持つことです。ミドルウェア関数はリクエストサイクルを完了させるものではない場合に呼び出されます (ミドルウェア関数が呼び出されるとき、その中には呼び出される _next_ 関数が含まれていなければなりません)。

ミドルウェア関数は、`app.use()` を使用してすべてのレスポンスに対する処理チェーンに追加することもできますし、関連するメソッド、`app.get()`、`app.post()` などを使って特定の HTTP 動詞に対する処理チェーンにも追加することができます。ルートはどちらの用途でも同じように指定しますが、`app.use()` を呼び出す場合はルートがオプションになります。

以下の例は、ルートの有無に関わらず、両方の方法を使用してミドルウェア関数を追加する方法を示しています。

```js
import express from "express";

const app = express();

// ミドルウェア関数の例
function middlewareFunction(req, res, next) {
  // Perform some operations
  next(); // next() を呼ぶことで Express はチェイン中の次のミドルウェア関数を呼びます。
}

// すべてのルートと述語に対して use() で関数を追加します。
app.use(middlewareFunction);

// 指定ルートに対して use() でミドルウェア関数を追加します。
app.use("/some-route", middlewareFunction);

// 指定の HTTP 述語とルートに対してミドルウェア関数を追加します。
app.get("/", middlewareFunction);

app.listen(3000);
```

> [!NOTE]
> 上記ではミドルウェア関数を別々に宣言してからコールバックとして設定しています。以前のルートハンドラー関数では、使用時にコールバック関数を宣言しました。JavaScript では、どちらの方法も有効です。

Express の資料には、Express ミドルウェアの[使用](https://expressjs.com/ja/guide/using-middleware/)および[作成](https://expressjs.com/ja/guide/writing-middleware/)に関する優れた資料があります。

### 静的ファイルの提供

[express.static](https://expressjs.com/ja/5x/api/express/#expressstatic) ミドルウェアを使用すると、画像、CSS、JavaScript などの静的ファイルを提供できます (`static()` は、実際には Express の**一部**である唯一のミドルウェア関数です)。たとえば、node を呼び出す場所と同じレベルで、**public** という名前のディレクトリーから画像、CSS ファイル、JavaScript ファイルを配信するには、次の行を使用します。

```js
app.use(express.static("public"));
```

public ディレクトリー内のファイルはすべて、ベース URL にそのファイル名（ベースの "public" ディレクトリーに対する相対パス）を追加することによって提供されます。そのため、例えば次のような場合、

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

ファイルをベース URL に追加するのではなく、静的 URL の仮想接頭辞を作成することもできます。たとえば、ここではファイルが接頭辞 "/media" でロードされるように[マウントパスを指定](https://expressjs.com/ja/5x/api/application/#appuse)します。

```js
app.use("/media", express.static("public"));
```

これで、`public` ディレクトリーにあるファイルを `/media` パス接頭辞から読み込むことができます。

```plain
http://localhost:3000/media/images/dog.jpg
http://localhost:3000/media/video/cat.mp4
http://localhost:3000/media/cry.mp3
```

> [!NOTE]
> 詳しくは、[Express での静的ファイルの提供](https://expressjs.com/ja/starter/static-files/)を参照してください。

### エラーの処理

エラーは、通常の 3 つの引数ではなく、4 つの引数 `(err、req、res、next)` を持つ 1 つ以上の特別なミドルウェア関数によって処理されます。例えば：

```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

これらは必要なコンテンツを返すことができますが、他のすべての `app.use()` および呼び出しをルーティングした後に呼び出して、リクエスト処理プロセスの最後のミドルウェアになるようにする必要があります。

Express にはエラーハンドラーが組み込まれています。これは、アプリで発生する可能性がある残りのエラーを処理します。 このデフォルトのエラー処理ミドルウェア関数は、ミドルウェア関数スタックの最後に追加されます。`next()` にエラーを渡し、それをエラーハンドラーで処理しなかった場合、それは組み込みエラーハンドラーによって処理されます。エラーはスタックトレースとともにクライアントに書き込まれます。

> [!NOTE]
> スタックトレースは実稼働環境に含まれていません。プロダクションモードで実行するには、環境変数 `NODE_ENV` を `"production"` に設定する必要があります。

> [!NOTE]
> HTTP 404 およびその他の「エラー」ステータスコードは、エラーとして扱われません。これらを処理したい場合は、ミドルウェア関数を追加して処理することができます。詳しくは [FAQ](https://expressjs.com/ja/starter/faq/#how-do-i-handle-404-responses) を参照してください。

詳しくは[エラー処理](https://expressjs.com/ja/guide/error-handling/)（Express ドキュメント）を参照してください。

### データベースの使用

Express アプリケーションは、Node によってサポートされている任意のデータベースメカニズムを使用できます (Express 自体はデータベース管理のための特定の追加の動作や要件を定義していません)。PostgreSQL、MySQL、Redis、SQLite、MongoDB などを含む多くのオプションがあります。

これらを使用するには、まず npm を使用してデータベースドライバをインストールする必要があります。たとえば、一般的な NoSQL MongoDB 用のドライバをインストールするには、次のコマンドを使用します。

```bash
npm install mongodb
```

データベース自体はローカルにインストールすることも、クラウドサーバーにインストールすることもできます。Express コードではドライバーをインポートし、データベースへ接続し、作成、参照、更新、削除 (CRUD) 操作を実行します。
以下の例は、MongoDB を使ってどのように「哺乳類の」レコードを見つけることができるかを示しています。

```js
import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("animals");
    const mammals = await db.collection("mammals").find().toArray();
    console.log(mammals);
  } finally {
    await client.close();
  }
}

run().catch(console.error);
```

もう 1 つの一般的な方法は、Object Relational Mapper ("ORM") を介して間接的にデータベースにアクセスすることです。このアプローチではデータを「オブジェクト」または「モデル」として定義し、ORM はそれらを基礎となるデータベース形式にマッピングします。このアプローチには、開発者としてデータベースのセマンティクスではなく JavaScript オブジェクトの観点から考え続けることができ、受信データの検証とチェックを実行するための明らかな場所があるという利点があります。データベースについての詳細は、後の記事で説明します。

詳しくは[データベース統合](https://expressjs.com/ja/guide/database-integration/)（Express ドキュメント）を参照してください。

### データのレンダリング（ビュー）

テンプレートエンジン（Express では「ビューエンジン」とも呼ばれています）を使用すると、ページの生成時に埋められるデータのプレースホルダを使用して、テンプレート内の出力ドキュメントの構造を指定できます。テンプレートは HTML の作成によく使用されますが、他の種類の文書も作成できます。

Express は複数のテンプレートエンジンをサポートしており、特に Pug（旧称 "Jade"）、Mustache、EJS が挙げられます。それぞれが特定の用途に対応する独自の強みを持っています（相対的な比較はインターネット検索で容易に見つかります）。

次に示すように、アプリケーション設定コードで、使用するテンプレートエンジンと、Express が 'ビュー' および 'ビューエンジン' 設定を使用してテンプレートを探す場所を設定します（テンプレートライブラリーを含むパッケージもインストールする必要があります！）

```js
import express from "express";
import path from "node:path";

const app = express();

// ('views') テンプレートを含むディレクトリーを設定
app.set("views", path.join(import.meta.dirname, "views"));

// 利用するビューエンジン、この場合は 'some_template_engine_name' を設定
app.set("view engine", "some_template_engine_name");
```

テンプレートの外観は使用するエンジンによって異なります。"title" および "message" という名前のデータ変数のプレースホルダを含む "index.\<テンプレート拡張子>" という名前のテンプレートファイルがあると仮定すると、ルートハンドラー関数で [`Response.render()`](https://expressjs.com/ja/5x/api/response/#resrender) を呼び出して HTML レスポンスを作成し、送信できます。

```js
app.get("/", (req, res) => {
  res.render("index", { title: "About dogs", message: "Dogs rock!" });
});
```

詳しくは [Express でのテンプレートエンジンの使用](https://expressjs.com/ja/guide/using-template-engines/)（Express ドキュメント）を参照してください。

### ファイル構造

Express は、構造や使用するコンポーネントに関しては何も想定していません。ルート、ビュー、静的ファイル、およびその他のアプリケーション固有のロジックは、任意のディレクトリー構造を持つ任意の数のファイルに存在できます。 Express アプリケーション全体を 1 つのファイルにまとめることは完全に可能ですが、通常は機能 (アカウント管理、ブログ、ディスカッション掲示板など) およびアーキテクチャ上の問題のドメイン ([MVC アーキテクチャ](/ja/docs/Glossary/MVC)を使用している場合は、モデル、ビュー、コントローラーなど) に基づいてアプリケーションをファイルに分割します。

後のトピックでは、ウェブアプリケーションを作成するために拡張できるモジュール式のアプリケーションスケルトンを作成します。

## まとめ

おめでとうございます、Express/Node の旅の最初のステップを完了しました。これで Express と Node の主な利点と、Express アプリケーションの主要部分がどのように見えるか (ルート、ミドルウェア、エラー処理、およびテンプレートコード) をおおまかに理解できています。また、Express は指図しないフレームワークであるため、これらの部分をどのようにまとめるかやどのライブラリーを使用するかは、ほとんどあなた次第です。

もちろん、Express は意図的に非常に軽量なウェブアプリケーションフレームワークであるため、その利点と可能性の多くはサードパーティのライブラリーと機能からもたらされています。以下の記事でそれらをより詳しく見ていきます。次の記事では、Node 開発環境のセットアップについて見ていきます。そうすれば、いくつかの Express コードが実際に動作しているところを見られます。

## 関連情報

- [Learn Node.js](https://scrimba.com/learn-nodejs-c00ho9qqh6?via=mdn) (Scrimba <sup>[_MDN 学習パートナー_](/ja/docs/MDN/Writing_guidelines/Learning_content#パートナーリンクと埋め込み)</sup>) はによる、楽しくインタラクティブな Node.js 入門を提供します。
- [Learn Express.js](https://scrimba.com/learn-expressjs-c062las154?via=mdn) (Scrimba <sup>[_MDN 学習パートナー_](/ja/docs/MDN/Writing_guidelines/Learning_content#パートナーリンクと埋め込み)</sup>) は前のリンクを基に、Express フレームワークを使ってサーバーサイドのウェブサイトを構築する方法を示しています。
- [JavaScript モジュール](/ja/docs/Web/JavaScript/Guide/Modules)
- [プラットフォーム間でのモジュールの使用](/ja/docs/Web/JavaScript/Guide/Modules/Modules_across_platforms)
- [ECMAScript モジュール](https://nodejs.org/api/esm.html)（Node API ドキュメント）
- [Express](https://expressjs.com/ja)（ホームページ）
- [基本的なルーティング](https://expressjs.com/ja/starter/basic-routing/)（Express ドキュメント）
- [ルーティングガイド](https://expressjs.com/ja/guide/routing/)（Express ドキュメント）
- [Express でのテンプレートエンジンの使用](https://expressjs.com/ja/guide/using-template-engines/)（Express ドキュメント）
- [ミドルウェアの使用](https://expressjs.com/ja/guide/using-middleware/)（Express ドキュメント）
- [Express アプリケーションで使用するミドルウェアの作成](https://expressjs.com/ja/guide/writing-middleware/)（Express ドキュメント）
- [データベースの統合](https://expressjs.com/ja/guide/database-integration/)（Express ドキュメント）
- [Express での静的ファイルの提供](https://expressjs.com/ja/starter/static-files/)（Express ドキュメント）
- [エラー処理](https://expressjs.com/ja/guide/error-handling/)（Express ドキュメント）

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

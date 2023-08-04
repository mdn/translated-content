---
title: Node 開発環境の設定
slug: Learn/Server-side/Express_Nodejs/development_environment
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Introduction", "Learn/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn/Server-side/Express_Nodejs")}}

Express の目的が理解できたので、Windows、Linux (Ubuntu)、および macOS 上で Node/Express 開発環境をセットアップしてテストする方法を説明します。どのような一般的な OS を使用していても、この記事では Express アプリケーションの開発を開始するために必要なものを提供します。

| 前提条件: | 端末/コマンドラインを開く方法を知っている。開発用コンピューターの OS にソフトウェアパッケージをインストールする方法を知っている。 |
| --------- | --------------------------------------------------------------------------------------------------------------------------------- |
| 目標:     | コンピューター上に Express 用の開発環境をセットアップします。                                                                     |

## Express 開発環境概要

Node と Express のおかげでウェブアプリケーションの開発を始めるためにコンピューターをセットアップすることが非常に簡単になります。このセクションでは必要なツールの概要、Ubuntu、macOS、および Windows に Node (および Express) をインストールするための最も簡単な方法について説明し、インストールをテストする方法を示します。

### Express 開発環境とは何か?

_Express_ 開発環境には _Nodejs_、_NPM_ パッケージマネージャー、および (オプションで) ローカルコンピューターに _Express Application Generator_ がインストールされています。

_Node_ と _NPM_ パッケージマネージャーは、準備されたバイナリパッケージ、インストーラー、オペレーティングシステムのパッケージマネージャー、またはソースから一緒にインストールされます (次のセクションを参照)。 _Express_ は、_NPM_ によって、個々の _Express_ ウェブアプリケーションの依存関係として (テンプレートエンジン、データベースドライバー、認証ミドルウェア、静的ファイルを提供するためのミドルウェアなどの他のライブラリと共に) インストールされます。

_NPM_ は [MVC パターン](/ja/docs/Glossary/MVC)に従ったスケルトンの _Express_ ウェブアプリケーションを作成するための便利なツールである *Express Application Generator*を (グローバルに) インストールするためにも使用できます。Express を使用するアプリを作成したり、同じアーキテクチャ上のレイアウトや依存関係を持つ Express アプリを構築したりするためにこのツールを使用する必要はないため、アプリケーションジェネレーターはオプションです。ただし、使い始めるのがはるかに簡単になり、モジュール式のアプリケーション構造が促進されるため、これを使用します。

> **メモ:** 他のウェブフレームワークとは異なり、開発環境には独立した開発用の ウェブサーバーは含まれていません。_Node/Express_ では、ウェブアプリケーションが独自のウェブサーバーを作成して実行します。

[テキストエディタ](/ja/docs/Learn/Common_questions/Available_text_editors)やコード編集用の IDE、コードの異なるバージョンを安全に管理するための [Git](https://git-scm.com/) などのソース管理マネジメントツールなど、一般的な開発環境の一部である他の周辺ツールもあります。これらの種類のツール (特にテキストエディタ) が既にインストールされていると仮定しています。

### どのオペレーティングシステムがサポートされていますか？

_Node_ は Windows、macOS、Linux の多くの「フレーバー」、Docker などで実行できます (nodejs の[ダウンロード](https://nodejs.org/ja/download/)ページに完全なリストがあります)。ほとんどのパーソナルコンピューターは開発中に Node を実行するのに必要な性能を持っているはずです。_Express_ は _Node_ 環境で実行されるため、_Node_ を実行する任意のプラットフォームで実行できます。

この記事では Windows、macOS、および Ubuntu Linux のセットアップ手順を説明します。

### どのバージョンの Node/Express を使用すべきですか？

たくさんの [Node のリリース](https://nodejs.org/ja/blog/release/)があります - 新しいリリースにはバグ修正、ECMAScript (JavaScript) 標準のより最新のバージョンのサポート、そして Node API の改良が含まれています。

一般的には最新の _LTS_ (長期サポート) リリースを使用するべきです。比較的最新の機能を持ちながら (そして現在も積極的にメンテナンスされています)、"最新の" リリースより安定しているからです。LTS バージョンに存在しない機能が必要な場合は、*最新版*リリースを使用してください。

_Express_ は常に最新のバージョンを使うべきです。

### データベースやその他の依存関係についてはどうですか？

データベースドライバー、テンプレートエンジン、認証エンジンなどのその他の依存関係はアプリケーションの一部であり、NPM パッケージマネージャーを使用してアプリケーション環境にインポートされます。それらについては、後のアプリ固有の記事で説明します。

## Node のインストール

_Express_ を使用するには、まず _Nodejs_ と [Node Package Manager (NPM)](https://docs.npmjs.com/) をオペレーティングシステムにインストールする必要があります。以下のセクションでは Ubuntu Linux 18.04、macOS、および Windows 10 に Long Term Supported (LTS) バージョンの Nodejs をインストールする最も簡単な方法について説明します。

> **メモ:** **Tip:** 以下のセクションは、ターゲット OS プラットフォームに _Node_ と _NPM_ をインストールする最も簡単な方法を示しています。他の OS を使用している場合、または現在のプラットフォームで他の方法を使用したい場合は、[パッケージマネージャーによる Node.js のインストール](https://nodejs.org/ja/download/package-manager/) (nodejs.org) を参照してください。

### macOS および Windows

Windows と macOS への _Node_ と _NPM_ のインストールは、提供されているインストーラーを使用することができるため、簡単です。

1. 必要なインストーラーをダウンロードします

   1. <https://nodejs.org/ja/> に進みます
   2. "ほとんどのユーザーに推奨" である LTS ビルドをダウンロードするためのボタンを選択してください。

2. ダウンロードしたファイルをダブルクリックし、インストールの指示に従って Node をインストールします。

### Ubuntu 18.04

Node 10.x の最新の LTS バージョンをインストールする最も簡単な方法は、[パッケージマネージャー](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)を使ってそれを Ubuntu *バイナリ配布*リポジトリーから入手することです。これはあなたの端末で以下の 2 つのコマンドを実行することによって非常に簡単に行うことができます。

```bash
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
```

> **警告:** それらは非常に古いバージョンの Node を含んでいるので、通常の Ubuntu リポジトリーから直接インストールしないでください。

### Nodejs および NPM インストールのテスト

Node がインストールされていることをテストする最も簡単な方法は、ターミナル/コマンドプロンプトで "version" コマンドを実行し、バージョン文字列が返されることを確認することです。

```bash
>node -v
v10.16.0
```

_Nodejs_ パッケージマネージャー _NPM_ もインストールされているはずで、同じ方法でテストできます。

```bash
>npm -v
6.9.0
```

もう少し刺激的なテストとして、ブラウザーで正しい URL にアクセスしたときにブラウザーに「Hello World」を単純に出力する、非常に基本的な "純粋な Node" サーバーを作成しましょう。

1. 次のテキストを **hellonode.js** というファイルにコピーします。これは純粋な Node 関数 (Express からは何もしていません) といくつかの ES6 構文を使用します。

   ```js
   //HTTP モジュールを読み込む
   const http = require("http");
   const hostname = "127.0.0.1";
   const port = 3000;

   //HTTP サーバーを作成し、3000 番ポートでリクエストを待機します。
   const server = http.createServer((req, res) => {
     //HTTP ステータスとコンテンツタイプを持つ応答 HTTP ヘッダーを設定します。
     res.statusCode = 200;
     res.setHeader("Content-Type", "text/plain");
     res.end("Hello World\n");
   });

   //3000 番ポートでリクエストを待機し、受信したときにログ出力するコールバック関数
   server.listen(port, hostname, () => {
     console.log(`Server running at http://${hostname}:${port}/`);
   });
   ```

   このコードは "http" モジュールをインポートし、それを使用して 3000 番ポートで HTTP リクエストを待機するサーバーを作成 (`createServer()`) します。次に、スクリプトはサーバーをテストするために使用できるブラウザー URL についてのメッセージをコンソールに出力します。 `createServer()` 関数は、HTTP リクエストを受信したときに呼び出されるコールバック関数を引数として取ります。これは HTTP ステータスコード 200 ("OK") とプレーンテキスト "Hello World" のレスポンスを返します。

   > **メモ:** このコードが何をしているのか正確に理解できなくても心配しないでください。Express を使い始めたら、コードについて詳しく説明します。

2. コマンドプロンプトで `hellonode.js` ファイルと同じディレクトリーに移動し、次のようにスクリプト名とともに `node` を呼び出してサーバーを起動します。

   ```bash
   >node hellonode.js
   Server running at http://127.0.0.1:3000/
   ```

3. `http://127.0.0.1:3000` の URL に移動します。すべてがうまくいったら、ブラウザーは単に文字列 "Hello World" を表示するはずです。

## NPM の使用

Node 自体の次に、[NPM](https://docs.npmjs.com/) は Node アプリケーションを操作するための最も重要なツールです。NPM は、アプリケーションが開発、テスト、および/または運用に必要なパッケージ(JavaScript ライブラリ) を取得するために使用されます。また、開発プロセスで使用されるテストやツールを実行するために使用されることもあります。

> **メモ:** Node の観点からすると、Express は NPM を使用してインストールしてから独自のコードで必要とするもう 1 つのパッケージです。

手動で NPM を使用して、必要な各パッケージを別々に取り出すことができます。通常、代わりに [package.json](https://docs.npmjs.com/files/package.json) というプレーンテキストの定義ファイルを使用して依存関係を管理します。このファイルにはパッケージの名前、バージョン、説明、実行する初期ファイル、プロダクション依存関係、開発依存関係、それが動作可能な _Node_ のバージョンなど、特定の JavaScript "package" に対するすべての依存関係が一覧表示されます。**package.json** ファイルには、NPM がアプリケーションを取得して実行するために必要なものがすべて含まれている必要があります (再利用可能なライブラリを作成している場合は、この定義を使用してパッケージを npm リポジトリーにアップロードし、他のユーザが利用できるようにします)。

### 依存関係の追加

次の手順では NPM を使用してパッケージをダウンロードし、それをプロジェクトの依存関係に保存してから、それを Node アプリケーションで要求する方法を示します。

> **メモ:** ここでは Express パッケージを取得してインストールするための手順を示します。後で、このパッケージなどが Express Application Generator を使用してすでにどのように指定されているかを示します。このセクションは NPM がどのように機能するのか、および Application Generator によって何が作成されているのかを理解するのに役立ちます。

1. まず、新しいアプリケーション用のディレクトリーを作成し、そこに移動します。

   ```bash
   mkdir myapp
   cd myapp
   ```

2. アプリケーション用の **package.json** ファイルを作成するには、npm `init` コマンドを使用します。このコマンドはアプリケーションの名前とバージョン、初期エントリポイントファイルの名前 (デフォルトでは **index.js**) など、さまざまなことを要求します。今のところ、デフォルトをそのまま使用します。

   ```bash
   npm init
   ```

   **package.json** ファイル (`cat package.json`) を表示すると、受け入れたデフォルトが表示され、最後にライセンスが表示されます。

   ```json
   {
     "name": "myapp",
     "version": "1.0.0",
     "description": "",
     "main": "index.js",
     "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1"
     },
     "author": "",
     "license": "ISC"
   }
   ```

3. `myapp` ディレクトリーに Express をインストールし、それをあなたの package.json ファイルの依存関係リストに保存してください。

   ```bash
     npm install express --save
   ```

4. **package.json** の依存関係セクションが **package.json** ファイルの最後に表示され、Express が含まれます。

   ```json
   {
     "name": "myapp",
     "version": "1.0.0",
     "description": "",
     "main": "index.js",
     "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1"
     },
     "author": "",
     "license": "ISC",
     "dependencies": {
       "express": "^4.16.3"
     }
   }
   ```

5. このライブラリを使用するには、index.js ファイルで以下に示すように `require()` 関数を呼び出します。"myapp" アプリケーションディレクトリーのルートにファイルを作り、以下の内容を記述します。

   ```
   const express = require('express')
   const app = express();

   app.get('/', (req, res) => {
     res.send('Hello World!')
   });

   app.listen(8000, () => {
     console.log('Example app listening on port 8000!')
   });
   ```

   このコードは、最小限の「HelloWorld」Express ウェブアプリケーションを示しています。これは「express」モジュールをインポートし、それを使用して 8000 番ポートで HTTP リクエストを待機するサーバ ー(`app`) を作成し、サーバーをテストするために使用できるブラウザー URL を説明するメッセージをコンソールに出力します。 `app.get()` 関数は、指定された URL パス ('/') で HTTP `GET` リクエストにのみ応答します。この場合、関数を呼び出して _Hello World!_ メッセージを送信します。

6. コマンドプロンプトでスクリプトを使用して node を呼び出すことでサーバーを起動できます。

   ```bash
   >node index.js
   Example app listening on port 8000
   ```

7. URL (<http://127.0.0.1:8000/>) に移動します。すべてがうまくいったら、ブラウザーは単に文字列 "Hello World!" を表示するはずです。

### 開発の依存関係

依存関係が開発中にのみ使用される場合は、代わりに "開発依存関係" として保存する必要があります (パッケージユーザーが本番環境にインストールする必要がないようにするため)。たとえば、一般的な JavaScript Linting ツールの [eslint](http://eslint.org/) を使用するには、次のように NPM を呼び出します。

```bash
npm install eslint --save-dev
```

次のエントリがアプリケーションの **package.json** に追加されます。

```js
  "devDependencies": {
    "eslint": "^4.12.1"
  }
```

> **メモ:** "[Lint](<https://en.wikipedia.org/wiki/Lint_(software)>)" は一連のコーディングのベストプラクティスに準拠しているかどうかを認識して報告するために、ソフトウェアで静的分析を実行するツールです。

### タスクの実行

依存関係の定義と取得に加えて、**package.json** ファイルに名前付きスクリプトを定義し、NPM を呼び出してそれらを [run-script](https://docs.npmjs.com/cli/run-script) コマンドで実行することもできます。このアプローチは、実行中のテストや開発の一部を自動化したり、ツールチェーン (たとえば JavaScript の縮小、画像の縮小、コードの LINT/分析などのツールの実行) を構築したりするためによく使用されます。

> **メモ:** [Gulp](http://gulpjs.com/) や [Grunt](http://gruntjs.com/) のようなタスクランナーもテストや他の外部ツールを実行するために使うことができます。

たとえば、前のセクションで指定した eslint 開発依存関係を実行するためのスクリプトを定義するには、次のスクリプトブロックを **package.json** ファイルに追加します (アプリケーションソースが /src/js フォルダにあると仮定します)。

```js
"scripts": {
  ...
  "lint": "eslint src/js"
  ...
}
```

もう少し詳しく説明すると、`eslint src/js` は、app ディレクトリー内の `src/js` ディレクトリーに含まれる JavaScript ファイルに対して `eslint` を実行するために terminal/command 行に入力できるコマンドです。アプリの package.json ファイル内に上記を含めると、このコマンドのショートカット - つまり `lint` が提供されます。

こうすれば、NPM を使って eslint を実行することができます。

```bash
npm run-script lint
# OR (using the alias)
npm run lint
```

この例は元のコマンドより短く見えないかもしれませんが、複数のコマンドのチェーンを含めて、npm スクリプト内にもっと大きなコマンドを含めることができます。一度にすべてのテストを実行する単一の npm スクリプトを指定できます。

## Express Application Generator のインストール

[Express Application Generator](https://expressjs.com/ja/starter/generator.html) ツールは Express アプリケーションの「スケルトン」を生成します。次に示すように、NPM を使用してジェネレーターをインストールします (`-g` フラグを指定すると、ツールをグローバルにインストールして、どこからでも呼び出すことができます)。

```
npm install express-generator -g
```

デフォルト設定で "helloworld" という名前の Express アプリを作成するには、作成する場所に移動して、図のようにアプリを実行します。

```bash
express helloworld
```

> **メモ:** 利用するテンプレートライブラリ等の他の設定を指定することもできます。すべてのオプションを見るには、`help` コマンドを使用してください。
>
> ```bash
> express --help
> ```

NPM は現在の場所のサブフォルダーに新しい Express アプリケーションを作成し、コンソールにビルドの進行状況を表示します。完了すると、Node の依存関係をインストールしてアプリを起動するために入力する必要があるコマンドがツールに表示されます。

> **メモ:** 新しいアプリには、そのルートディレクトリーに **package.json** ファイルがあります。これを開くと、Express やテンプレートライブラリ Jade など、インストールされている依存関係を確認できます。
>
> ```js
> {
>   "name": "helloworld",
>   "version": "0.0.0",
>   "private": true,
>   "scripts": {
>     "start": "node ./bin/www"
>   },
>   "dependencies": {
>     "body-parser": "~1.18.2",
>     "cookie-parser": "~1.4.3",
>     "debug": "~2.6.9",
>     "express": "~4.15.5",
>     "jade": "~1.11.0",
>     "morgan": "~1.9.0",
>     "serve-favicon": "~2.4.5"
>   }
> }
> ```

次に示すように、NPM を使用して helloworld アプリのすべての依存関係をインストールします。

```bash
cd helloworld
npm install
```

次に、以下のようにアプリを実行します (コマンドは Windows と Linux/macOS で若干異なります)。

```bash
#  Windows のコマンドプロンプトで helloworld を実行
SET DEBUG=helloworld:* & npm start

# Windows の PowerShell で helloworld を実行
SET DEBUG=helloworld:* | npm start

# Linux/macOS で helloworld を実行
DEBUG=helloworld:* npm start
```

DEBUG コマンドは有用なロギングを作成し、その結果、以下に示すような出力が得られます。

```bash
>SET DEBUG=helloworld:* & npm start

> helloworld@0.0.0 start D:\Github\expresstests\helloworld
> node ./bin/www

  helloworld:server Listening on port 3000 +0ms
```

ブラウザーを開いて `http://127.0.0.1:3000/` に移動し、デフォルトの Express ウェルカムページを表示します。

![Express - Generated App Default Screen](express_default_screen.png)

スケルトンアプリケーションの生成に関する記事にアクセスしたら、生成されたアプリケーションについて詳しく説明します。

## まとめ

これで、Express ウェブアプリケーションを作成するために使用できる Node 開発環境がコンピューター上で稼働しています。また、NPM を使用して Express をアプリケーションにインポートする方法、および Express Application Generator ツールを使用してアプリケーションを作成して実行する方法についても説明しました。

次の記事では、この環境と関連ツールを使って完全なウェブアプリケーションを構築するためのチュートリアルを始めます。

## あわせて参照

- [ダウンロード](https://nodejs.org/ja/download/) ページ (nodejs.org)
- [パッケージマネージャを利用した Node.js のインストール](https://nodejs.org/ja/download/package-manager/) (nodejs.org)
- [Express のインストール](http://expressjs.com/ja/starter/installing.html) (expressjs.com)
- [Express Application Generator](https://expressjs.com/ja/starter/generator.html) (expressjs.com)

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Introduction", "Learn/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn/Server-side/Express_Nodejs")}}

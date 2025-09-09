---
title: Node 開発環境の設定
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment
original_slug: Learn/Server-side/Express_Nodejs/development_environment
l10n:
  sourceCommit: 96512135176d935cdf209c49bc9eae6025b0a9a5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Introduction", "Learn/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn/Server-side/Express_Nodejs")}}

[Express](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#express_の紹介) の目的が理解できたので、Windows、Linux (Ubuntu)、および macOS 上で Node/Express 開発環境をセットアップしてテストする方法を説明します。どのような一般的な OS を使用していても、この記事では Express アプリケーションの開発を開始するために必要なものを提供します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        端末/コマンドラインを開く方法を知っていること。開発用コンピューターの OS にソフトウェアパッケージをインストールする方法を知っていること。
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>コンピューター上に Express 用の開発環境をセットアップします。</td>
    </tr>
  </tbody>
</table>

## Express 開発環境概要

Node と Express のおかげで、ウェブアプリケーションの開発を始めるためにコンピューターをセットアップすることが非常に簡単になります。この節では必要なツールの概要、Ubuntu、macOS、および Windows に Node (および Express) をインストールするための最も簡単な方法について説明し、インストールをテストする方法を示します。

### Express 開発環境とは何か?

_Express_ 開発環境には _Nodejs_、_npm_ パッケージマネージャー、および (オプションで) ローカルコンピューターに _Express Application Generator_ がインストールされています。

_Node_ と _npm_ パッケージマネージャーは、準備されたバイナリーパッケージ、インストーラー、オペレーティングシステムのパッケージマネージャー、またはソースから一緒にインストールされます (次の節を参照)。 _Express_ は、npm によって、個々の _Express_ ウェブアプリケーションの依存関係として (テンプレートエンジン、データベースドライバー、認証ミドルウェア、静的ファイルを提供するためのミドルウェアなどの他のライブラリーと共に) インストールされます。

_npm_ は [MVC パターン](/ja/docs/Glossary/MVC)に従ったスケルトンの _Express_ ウェブアプリケーションを作成するための便利なツールである _Express Application Generator_ を (グローバルに) インストールするためにも使用できます。Express を使用するアプリを作成したり、同じアーキテクチャ上のレイアウトや依存関係を持つ Express アプリを構築したりするためにこのツールを使用する必要はないため、アプリケーションジェネレーターはオプションです。ただし、使い始めるのがはるかに簡単になり、モジュール式のアプリケーション構造が促進されるため、これを使用します。

> [!NOTE]
> 他のウェブフレームワークとは異なり、開発環境には独立した開発用のウェブサーバーは含まれていません。_Node_/_Express_ では、ウェブアプリケーションが独自のウェブサーバーを作成して実行します。

[テキストエディター](/ja/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors)やコード編集用の IDE、コードの異なるバージョンを安全に管理するための [Git](https://git-scm.com/) などのソース管理マネジメントツールなど、一般的な開発環境の一部である他の周辺ツールもあります。これらの種類のツール (特にテキストエディター) が既にインストールされていると仮定しています。

### どのオペレーティングシステムがサポートされていますか？

_Node_ は Windows、macOS、Linux の多くの「フレーバー」、Docker などで実行できます (nodejs の[ダウンロード](https://nodejs.org/ja/download/)ページに完全なリストがあります)。ほとんどのパーソナルコンピューターは開発中に Node を実行するのに必要な性能を持っているはずです。_Express_ は _Node_ 環境で実行されるため、_Node_ を実行する任意のプラットフォームで実行できます。

この記事では Windows、macOS、および Ubuntu Linux のセットアップ手順を説明します。

### どのバージョンの Node/Express を使用すべきか

たくさんの [Node のリリース](https://nodejs.org/ja/blog/release/)があります - 新しいリリースにはバグ修正、ECMAScript (JavaScript) 標準のより最新のバージョンのサポート、そして Node API の改良が含まれています。

一般的には最新の _LTS_ (長期サポート) リリースを使用するべきです。比較的最新の機能を持ちながら (そして現在も積極的にメンテナンスされています)、"最新の" リリースより安定しているからです。LTS バージョンに存在しない機能が必要な場合は、*最新版*リリースを使用してください。

_Express_ は常に最新のバージョンを使うべきです。

### データベースやその他の依存関係について

データベースドライバー、テンプレートエンジン、認証エンジンなどのその他の依存関係はアプリケーションの一部であり、npm パッケージマネージャーを使用してアプリケーション環境にインポートされます。それらについては、後のアプリ固有の記事で説明します。

## Node のインストール

_Express_ を使用するには、 _Nodejs_ と [Node Package Manager (npm)](https://docs.npmjs.com/) をオペレーティングシステムにインストールする必要があります。
これを簡単にするために、最初に node バージョンマネージャをインストールし、それを使用して最新の LTS(Long Term Supported) バージョンの node と npm をインストールします。

> [!NOTE] > <https://nodejs.org/en/> で提供されているインストーラーを使って nodejs と npm をインストールすることもできます（「ほとんどのユーザーに推奨」されている LTS ビルドをダウンロードするボタンを選択します）。また、[お使いの OS のパッケージマネージャーを使用してインストールする](https://nodejs.org/ja/download/package-manager/) こともできます。
> node バージョンマネージャを使用することを強く推奨します。バージョンマネージャを使用することで、 node と npm の具体的なバージョンのインストール、アップグレード、切り替えが簡単になります。

### Windows

Windows 用の node バージョン管理ツールは数多くあります。
ここでは、node 開発者の間で高く評価されている [nvm-windows](https://github.com/coreybutler/nvm-windows) を使用します。

[nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases) ページから任意のインストーラーを使用して最新バージョンをインストールします。
`nvm-windows` がインストールされたら、コマンドプロンプト（または PowerShell）を開き、以下のコマンドを入力して最新の LTS バージョンの nodejs と npm をダウンロードします。

```bash
nvm install lts
```

執筆時点での nodejs の LTS バージョンは 20.11.0 です。
下記コマンドで使用する現在のバージョンとして設定することができます。

```bash
nvm use 20.11.0
```

> [!NOTE]
> 「アクセス拒否」の警告が表示される場合は、管理者権限でこのコマンドをプロンプトで実行する必要があります。

コマンド `nvm --help` を使用して、利用できるすべてのノードのバージョンやダウンロードした NVM のバージョンの一覧など、他にもコマンドラインオプションを探すことができます。

### Ubuntu および macOS

Ubuntu や macOS 用のノードバージョン管理ツールはいくつもあります。
[nvm](https://github.com/nvm-sh/nvm)はより人気のあるものの 1 つで、 `nvm-windows` の元になったバージョンです。
nvm の最新バージョンをインストールする端末の手順については [nvm > Install & Update Script](https://github.com/nvm-sh/nvm#install--update-script) を参照してください。

`nvm` がインストールされたら、端末を開いて以下のコマンドを入力し、最新の LTS バージョンの nodejs と npm をダウンロードしてください。

```bash
nvm install --lts
```

執筆時点での nodejs の LTS バージョンは 20.11.0 です。
コマンド `nvm list` はダウンロードしたバージョンと現在のバージョンを設定します。
下記コマンドで特定のバージョンを現在のバージョンとして設定することができます（`nvm-windows` の場合と同じです）。

```bash
nvm use 20.11.0
```

他にもコマンドラインオプションを探すには `nvm --help` コマンドを使用します。
これらは `nvm-windows` が提供するものと似ているか、同じであることが多いです。

### Nodejs および npm インストールのテスト

特定のノードバージョンを使用するように `nvm` を設定したら、インストールをテストすることができます。
これを行うための良い方法は、端末やコマンドプロンプトで "version" コマンドを使用し、期待するバージョンの文字列を返すか調べることです。

```bash
> node -v
v20.11.0
```

_Nodejs_ パッケージマネージャー _npm_ もインストールされているはずで、同じ方法でテストできます。

```bash
> npm -v
10.2.4
```

もう少し刺激的なテストとして、ブラウザーで正しい URL にアクセスしたときにブラウザーに単純に "Hello World" を出力する、とても基本的な "純粋な Node" サーバーを作成しましょう。

1. 次のテキストを **hellonode.js** というファイルにコピーします。これは純粋な Node の機能を使用します（Express からは何もしません）。

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

   > [!NOTE]
   > このコードが何をしているのか正確に理解できなくても心配しないでください。Express を使い始めたら、コードについて詳しく説明します。

2. コマンドプロンプトで `hellonode.js` ファイルと同じディレクトリーに移動し、次のようにスクリプト名とともに `node` を呼び出してサーバーを起動します。

   ```bash
   node hellonode.js
   ```

   サーバーが起動すると、サーバーが動作している IP アドレスを示すコンソール出力が表示されます。

   ```plain
   Server running at http://127.0.0.1:3000/
   ```

3. `http://127.0.0.1:3000` の URL に移動します。すべてがうまくいったら、ブラウザーは単に文字列 "Hello World" を表示するはずです。

## npm の使用

Node 自体の次に、[npm](https://docs.npmjs.com/) は Node アプリケーションを操作するための最も重要なツールです。
`npm` は、アプリケーションが開発、テスト、運用に必要なパッケージ（JavaScript ライブラリー）を取得するために使用されます。また、開発プロセスで使用されるテストやツールを実行するために使用されることもあります。

> [!NOTE]
> Node の観点からすると、Express は npm を使用してインストールしてから独自のコードで必要とするもう 1 つのパッケージです。

手動で npm を使用して、必要な各パッケージを別々に取り出すことができます。通常、代わりに [package.json](https://docs.npmjs.com/files/package.json) というプレーンテキストの定義ファイルを使用して依存関係を管理します。このファイルにはパッケージの名前、バージョン、説明、実行する初期ファイル、プロダクション依存関係、開発依存関係、それが動作可能な _Node_ のバージョンなど、特定の JavaScript "package" に対するすべての依存関係が一覧表示されます。**package.json** ファイルには、npm がアプリケーションを取得して実行するために必要なものがすべて含まれている必要があります (再利用可能なライブラリーを作成している場合は、この定義を使用してパッケージを npm リポジトリーにアップロードし、他のユーザーが利用できるようにします)。

### 依存関係の追加

次の手順では npm を使用してパッケージをダウンロードし、それをプロジェクトの依存関係に保存してから、それを Node アプリケーションで要求する方法を示します。

> [!NOTE]
> ここでは Express パッケージを取得してインストールするための手順を示します。後で、このパッケージなどが Express Application Generator を使用してすでにどのように指定されているかを示します。この節は npm がどのように機能するのか、および Application Generator によって何が作成されているのかを理解するのに役立ちます。

1. まず、新しいアプリケーション用のディレクトリーを作成し、そこに移動します。

   ```bash
   mkdir myapp
   cd myapp
   ```

2. アプリケーション用の **package.json** ファイルを作成するには、npm `init` コマンドを使用します。このコマンドはアプリケーションの名前とバージョン、初期エントリーポイントファイルの名前（既定では **index.js**）など、さまざまなことを要求します。今のところ、既定値をそのまま使用します。

   ```bash
   npm init
   ```

   **package.json** ファイル (`cat package.json`) を表示すると、受け入れた既定値が表示され、最後にライセンスが表示されます。

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
    npm install express
   ```

   **package.json** の依存関係節が **package.json** ファイルの最後に表示され、Express が含まれます。

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
       "express": "^4.17.1"
     }
   }
   ```

4. Express ライブラリーを使用するには、 `require()` 関数を **index.js** ファイルで呼び出し、アプリケーションに含めます。
   これで、このファイルを "myapp" アプリケーションディレクトリーのルートに作成し、以下の内容を与えます。

   ```js
   const express = require("express");
   const app = express();
   const port = 3000;

   app.get("/", (req, res) => {
     res.send("Hello World!");
   });

   app.listen(port, () => {
     console.log(`Example app listening on port ${port}!`);
   });
   ```

   このコードは、最小限の "HelloWorld" Express ウェブアプリケーションを示しています。
   これは "express" モジュールをインポートし、それを使用して 3000 番ポートで HTTP リクエストを待機するサーバー (`app`) を作成し、サーバーをテストするために使用できるブラウザー URL を説明するメッセージをコンソールに出力します。
   `app.get()` 関数は、指定された URL パス ('/') で HTTP の `GET` リクエストにのみ応答します。この場合、関数を呼び出して _Hello World!_ メッセージを送信します。

   > [!NOTE]
   > `` `Example app listening on port ${port}!` `` の逆引用符で、`$port` の値を文字列に埋め込みます。

5. コマンドプロンプトでスクリプトを使用して node を呼び出すことでサーバーを起動できます。

   ```bash
   node index.js
   ```

   以下のようなコンソール出力が表示されます。

   ```plain
   Example app listening on port 3000
   ```

6. URL `http://localhost:3000/` に移動します。
   すべてがうまくいったら、ブラウザーは単に文字列 "Hello World!" を表示するはずです。

### 開発の依存関係

依存関係が開発中にのみ使用される場合は、代わりに「開発依存関係」として保存する必要があります（パッケージユーザーが本番環境にインストールする必要がないようにするため）。たとえば、一般的な JavaScript Linting ツールの [ESLint](https://eslint.org/) を使用するには、次のように npm を呼び出します。

```bash
npm install eslint --save-dev
```

次の項目がアプリケーションの **package.json** に追加されます。

```json
  "devDependencies": {
    "eslint": "^7.10.0"
  }
```

> [!NOTE]
> 「[リンター](<https://en.wikipedia.org/wiki/Lint_(software)>)」は一連のコーディングのベストプラクティスに準拠しているかどうかを認識して報告するために、ソフトウェアで静的分析を実行するツールです。

### タスクの実行

依存関係の定義と取得に加えて、**package.json** ファイルに名前付きスクリプトを定義し、npm を呼び出してそれらを [run-script](https://docs.npmjs.com/cli/run-script) コマンドで実行することもできます。このアプローチは、実行中のテストや開発の一部を自動化したり、ツールチェーン (たとえば JavaScript の縮小、画像の縮小、コードの LINT/分析などのツールの実行) を構築したりするためによく使用されます。

> [!NOTE]
> [Gulp](https://gulpjs.com/) や [Grunt](https://gruntjs.com/) のようなタスクランナーもテストや他の外部ツールを実行するために使うことができます。

たとえば、前の節で指定した eslint 開発依存関係を実行するためのスクリプトを定義するには、次のスクリプトブロックを **package.json** ファイルに追加します (アプリケーションソースが /src/js フォルダーにあると仮定します)。

```json
"scripts": {
  // …
  "lint": "eslint src/js"
  // …
}
```

もう少し詳しく説明すると、`eslint src/js` は、app ディレクトリー内の `src/js` ディレクトリーに含まれる JavaScript ファイルに対して `eslint` を実行するために terminal/command 行に入力できるコマンドです。アプリの package.json ファイル内に上記を含めると、このコマンドのショートカット - つまり `lint` が提供されます。

こうすれば、npm を使って eslint を実行することができます。

```bash
npm run-script lint
# OR (using the alias)
npm run lint
```

この例は元のコマンドより短く見えないかもしれませんが、複数のコマンドのチェーンを含めて、npm スクリプト内にもっと大きなコマンドを含めることができます。一度にすべてのテストを実行する単一の npm スクリプトを指定できます。

## Express Application Generator のインストール

[Express Application Generator](https://expressjs.com/ja/starter/generator.html) ツールは Express アプリケーションの「スケルトン」を生成します。次に示すように、npm を使用してジェネレーターをインストールします。

```bash
npm install express-generator -g
```

> [!NOTE]
> Ubuntu や macOS では、この行の接頭辞に `sudo` を付ける必要があるかもしれません。`-g` フラグを指定すると、ツールをグローバルにインストールして、どこからでも呼び出すことができます。

既定の設定で "helloworld" という名前の Express アプリを作成するには、作成する場所に移動して、図のようにアプリを実行します。

```bash
express helloworld
```

> [!NOTE]
> 古いバージョン (< 8.2.0) の nodejs を使用していない限り、インストールをスキップして[npx](https://github.com/npm/npx#readme) で express-generator を実行することもできます。
> これはインストールしてから `express-generator` を実行するのと同じ効果がありますが、パッケージをシステムにインストールするわけではありません。
>
> ```bash
> npx express-generator helloworld
> ```

また、使用するテンプレートライブラリーや他にも多くの設定を指定することができます。
すべてのオプションを見るには `help` コマンドを使用してください。

```bash
express --help
```

ジェネレーターは、コンソールにビルドの進行状況を表示しながら、現在の場所のサブフォルダーに新しい Express アプリを作成します。
完全に完了すると、ツールは Node 依存関係をインストールしてアプリを始めるには入力する必要があるコマンドを表示します。

新しいアプリには、ルートディレクトリーに **package.json** ファイルがあります。
これを開くと、Express やテンプレートライブラリー Jade など、インストールされている依存関係を確認できます。

```json
{
  "name": "helloworld",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  "dependencies": {
    "cookie-parser": "~1.4.4",
    "debug": "~2.6.9",
    "express": "~4.16.1",
    "http-errors": "~1.6.3",
    "jade": "~1.11.0",
    "morgan": "~1.9.1"
  }
}
```

次に示すように、npm を使用して helloworld アプリのすべての依存関係をインストールします。

```bash
cd helloworld
npm install
```

次に、以下のようにアプリを実行します (コマンドは Windows と Linux/macOS で若干異なります)。

```bash
# Windows のコマンドプロンプトで helloworld を実行
SET DEBUG=helloworld:* & npm start

# Windows の PowerShell で helloworld を実行
SET DEBUG=helloworld:* | npm start

# Linux/macOS で helloworld を実行
DEBUG=helloworld:* npm start
```

DEBUG コマンドは有用なロギングを作成し、その結果、以下に示すような出力が得られます。

```bash
>SET DEBUG=helloworld:* & npm start

> helloworld@0.0.0 start D:\GitHub\expresstests\helloworld
> node ./bin/www

  helloworld:server Listening on port 3000 +0ms
```

ブラウザーを開いて `http://localhost:3000/` に移動し、既定の Express ウェルカムページを表示します。

![Express - 生成されたアプリの既定の画面](express_default_screen.png)

スケルトンアプリケーションの生成に関する記事にアクセスしたら、生成されたアプリについて詳しく説明します。

## まとめ

これで、Express ウェブアプリケーションを作成するために使用できる Node 開発環境がコンピューター上で稼働しています。また、npm を使用して Express をアプリケーションにインポートする方法、および Express Application Generator ツールを使用してアプリケーションを作成して実行する方法についても説明しました。

次の記事では、この環境と関連ツールを使って完全なウェブアプリケーションを構築するためのチュートリアルを始めます。

## 関連情報

- [ダウンロード](https://nodejs.org/ja/download/) ページ (nodejs.org)
- [パッケージマネージャを利用した Node.js のインストール](https://nodejs.org/ja/download/package-manager/) (nodejs.org)
- [Express のインストール](http://expressjs.com/ja/starter/installing.html) (expressjs.com)
- [Express Application Generator](https://expressjs.com/ja/starter/generator.html) (expressjs.com)
- [Using Node.js with Windows subsystem for Linux](https://docs.microsoft.com/windows/dev-environment/javascript/) (docs.microsoft.com)

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Introduction", "Learn/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn/Server-side/Express_Nodejs")}}

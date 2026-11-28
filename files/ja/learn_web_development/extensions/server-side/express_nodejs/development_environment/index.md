---
title: Node 開発環境の設定
short-title: 開発環境の設定
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment
l10n:
  sourceCommit: d775e1249487f1a7ab9a8a031c70ca71bc892d63
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

[Express](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#express_の紹介) の目的が理解できたので、Windows、Linux (Ubuntu)、macOS 上で Node/Express 開発環境をセットアップしてテストする方法を説明します。どのオペレーティングシステムでも、この記事で Express アプリケーションの開発を始めるために必要なことを説明します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        端末/コマンドラインを開く方法を知っていること。開発用コンピューターのオペレーティングシステムにソフトウェアパッケージをインストールする方法を知っていること。
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>コンピューター上に Express 用の開発環境をセットアップします。</td>
    </tr>
  </tbody>
</table>

## Express 開発環境の概要

Node と Express を使うと、ウェブアプリケーションの開発を始めるためにコンピューターをセットアップすることが非常に簡単になります。この節では必要なツールの概要、Ubuntu、macOS、Windows に Node と Express をインストールする最も簡単な方法、インストールのテスト方法を説明します。

### Express 開発環境とは何か

Express 開発環境には、ローカルコンピューターに Node.js と npm パッケージマネージャーがインストールされています。

Node と npm パッケージマネージャーは、用意されたバイナリーパッケージ、インストーラー、オペレーティングシステムのパッケージマネージャー、またはソースから一緒にインストールされます（次の節を参照）。その後、npm を使用して、個々の Express ウェブアプリケーションの依存関係として Express をインストールします。テンプレートエンジン、データベースドライバー、認証ミドルウェア、静的ファイルを提供するためのミドルウェアなども、同様に依存関係としてインストールできます。

地域図書館チュートリアルでは、必要に応じて拡張できるモジュール式のアプリケーション構造を使用し、[MVC パターン](/ja/docs/Glossary/MVC)に従ったプロジェクトを作成します。

> [!NOTE]
> 一部のウェブフレームワークとは異なり、開発環境には独立した開発用ウェブサーバーは含まれていません。Node/Express では、ウェブアプリケーション自身がウェブサーバーを作成して実行します。

一般的な開発環境には、他にも周辺ツールがあります。[コードエディター](/ja/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors)や、コードの異なるバージョンを安全に管理するための [Git](https://git-scm.com/) のようなソース管理ツールです。これらのツール（特にコードエディター）は既にインストールされているものとします。

### どのオペレーティングシステムが対応していますか

Node は Windows、macOS、多くの Linux ディストリビューション、Docker などで実行できます。完全なリストは Node.js の[ダウンロード](https://nodejs.org/ja/download)ページにあります。ほとんどのパーソナルコンピューターには、開発中に Node を実行するために必要な性能があります。Express は Node 環境で実行されるため、Node を実行できる任意のプラットフォームで実行できます。

この記事では、Windows、macOS、Ubuntu Linux のセットアップ手順を説明します。

### どのバージョンの Node/Express を使用すべきですか

[Node のリリース](https://nodejs.org/ja/blog/release/)は多数あります。新しいリリースにはバグ修正、より新しい ECMAScript (JavaScript) 標準の対応、Node API の改良が含まれています。

一般的には、最新の _LTS (長期サポート)_ リリースを使用してください。LTS リリースは「最新」リリースより安定しており、比較的新しい機能もあり、積極的に保守されています。LTS バージョンにない機能が必要な場合は、**最新**リリースを使用してください。

Express では、最新の Node LTS リリースを使用してください。

### データベースやその他の依存関係について

データベースドライバー、テンプレートエンジン、認証エンジンなどのその他の依存関係はアプリケーションの一部であり、npm パッケージマネージャーを使用してアプリケーション環境にインポートします。これらについては、後のアプリケーション固有の記事で説明します。

## Node のインストール

Express を使用するには、オペレーティングシステムに Node.js と [Node Package Manager (npm)](https://docs.npmjs.com/) をインストールする必要があります。

インストールを簡単にするため、まず Node バージョンマネージャーをインストールし、それを使用して Node と npm の最新の LTS (長期サポート) バージョンをインストールします。

> [!NOTE]
> <https://nodejs.org/ja/> にあるインストーラーを使用して Node.js と npm をインストールすることもできます（「ほとんどのユーザーに推奨」される LTS ビルドのダウンロードボタンを選択してください）。また、[オペレーティングシステムのパッケージマネージャーを使用してインストール](https://nodejs.org/ja/download)することもできます。
> バージョンマネージャーを使用することを強く推奨します。特定のバージョンの Node と npm を簡単にインストール、アップグレード、切り替えできるためです。

### Windows

Windows 用の Node バージョンマネージャーはいくつかあります。
ここでは、Node 開発者の間で高く評価されている [nvm-windows](https://github.com/nvm-windows/nvm) を使用します。

[nvm-windows/releases](https://github.com/nvm-windows/nvm/releases) ページから、任意のインストーラーを使用して最新バージョンをインストールします。
`nvm-windows` をインストールしたら、コマンドプロンプト（または PowerShell）を開き、次のコマンドを入力して最近の Node.js LTS バージョンと npm をダウンロードします。

```bash
nvm install lts
```

`nvm list` を実行して、インストール済みのバージョンを確認します。このチュートリアルでは、Node.js 24以降を選択してください。次のコマンドで、インストールしたバージョンを現在のバージョンとして設定します。`<version>` は実際にインストールしたバージョンに置き換えてください。

```bash
nvm use <version>
```

> [!NOTE]
> 「アクセス拒否」の警告が表示された場合は、管理者権限を持つプロンプトでこのコマンドを実行する必要があります。

`nvm --help` コマンドを使用すると、利用可能な Node バージョンの一覧や、ダウンロード済みの NVM バージョンの一覧など、他のコマンドラインオプションを確認できます。

### Ubuntu および macOS

Ubuntu および macOS 用の Node バージョンマネージャーはいくつかあります。
[nvm](https://github.com/nvm-sh/nvm) は人気のあるものの 1つで、`nvm-windows` の元になったバージョンです。
nvm の最新バージョンをインストールするための端末での手順は、[nvm > Install & Update Script](https://github.com/nvm-sh/nvm#install--update-script) を参照してください。

nvm をインストールしたら、端末を開いて次のコマンドを入力し、最新の LTS バージョンの Node.js と npm をダウンロードします。

```bash
nvm install --lts
```

`nvm list` コマンドは、インストール済みのバージョンと現在のバージョンを表示します。このチュートリアルでは、Node.js 24 以降を選択してください。次のコマンドで、インストールしたバージョンを現在のバージョンとして設定します。`<version>` は実際にインストールしたバージョンに置き換えてください。

```bash
nvm use <version>
```

`nvm --help` コマンドを使用すると、他のコマンドラインオプションを確認できます。
これらは `nvm-windows` が提供するオプションと似ているか、同じです。

### Node.js と npm のインストールのテスト

nvm を特定の Node バージョンを使用するように設定したら、インストールをテストできます。
端末またはコマンドプロンプトで「バージョン」コマンドを使用し、期待するバージョン文字列が返されるか確認する方法が簡単です。

```bash
> node -v
v24.0.0
```

Node.js パッケージマネージャー npm もインストールされているはずで、同じ方法でテストできます。

```bash
> npm -v
11.3.0
```

バージョン番号は上記と異なる場合があります。両方のコマンドが動作することを確認できれば、地域図書館プロジェクトを設定できます。

## npm の使用

Node 自体に加えて、[npm](https://docs.npmjs.com/) は Node アプリケーションを操作するための最も重要なツールです。
npm は、アプリケーションに必要なパッケージ（JavaScript ライブラリー）を開発、テスト、本番環境で使用するために取得します。また、開発プロセスで使用するテストやツールを実行するためにも使用できます。

> [!NOTE]
> Node の観点では、Express は npm を使用してインストールし、自分のコードでインポートする必要があるパッケージにすぎません。

npm を手動で使用して、必要な各パッケージを個別に取得できます。一般的には、[package.json](https://docs.npmjs.com/files/package.json/) というプレーンテキストの定義ファイルを使用して依存関係を管理します。このファイルには、パッケージ名、バージョン、説明、実行する初期ファイル、本番環境での依存関係、開発時の依存関係、動作可能な Node のバージョンなど、特定の JavaScript「パッケージ」の依存関係がすべて記載されています。再利用可能なライブラリーを作成する場合は、この定義を使用してパッケージを npm リポジトリーにアップロードし、他のユーザーが利用できるようにできます。

### プロジェクトの作成

この節では、地域図書館プロジェクトを作成します。この記事の終わりまでに、パッケージ設定と依存関係が準備できます。アプリケーションコードは、[スケルトンウェブサイトの作成](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website)で追加します。

1. アプリケーション用のディレクトリーを作成し、移動します。

   ```bash
   mkdir express-locallibrary-tutorial
   cd express-locallibrary-tutorial
   ```

2. npm `init` コマンドを使用して、ES モジュールを使用するように設定された **package.json** ファイルを作成します。

   ```bash
   npm init --yes --init-type=module
   ```

   [`--init-type=module`](https://docs.npmjs.com/cli/commands/npm-init/#init-type) オプションは、既定の `"type": "commonjs"` ではなく `"type": "module"` を設定します。

3. テキストエディターで **package.json** を開きます。npm はディレクトリー名をパッケージ名として、次のようなファイルを作成します。

   ```json
   {
     "name": "express-locallibrary-tutorial",
     "version": "1.0.0",
     "description": "",
     "main": "index.js",
     "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1"
     },
     "keywords": [],
     "author": "",
     "license": "ISC",
     "type": "module"
   }
   ```

4. **package.json** の最上位に、`name` と `version` と並んで `"private": true` と `engines` フィールドを追加します。

   ```json
   {
     "private": true,
     "engines": {
       "node": ">=24.0.0"
     }
   }
   ```

   `private` を `true` に設定すると、誤って npm レジストリーに公開されるのを防げます。`engines` フィールドは、サポートする最小 Node.js バージョンを宣言します。生成されたフィールドは今のところ残し、後で `scripts` を置き換えます。

5. npm レジストリーに公開する場合だけ必要になる `description`、`main`、`keywords`、`author`、`license` の各フィールドを削除します。

### 依存関係の追加

**express-locallibrary-tutorial** ディレクトリー内から、プロジェクトに必要なパッケージをインストールします。

```bash
npm install debug express http-errors morgan pug
```

これらのパッケージには、アプリケーション内で次の役割があります。

- `debug`: `DEBUG` 環境変数を有効にしたときに診断メッセージを表示します。
- `express`: ウェブフレームワークを提供します。
- `http-errors`: 未知のルートに対する 404 のような HTTP エラーを作成します。
- `morgan`: HTTP リクエストを記録します。
- `pug`: テンプレートから HTML をレンダリングします。

[`npm install`](https://docs.npmjs.com/cli/commands/npm-install/) コマンドは、これらのパッケージと依存関係を **node_modules** にダウンロードし、**package.json** の `dependencies` に追加し、解決されたバージョンを記録する **package-lock.json** を作成します。他の開発者がプロジェクトの依存関係をインストールできるよう、両方のパッケージファイルをバージョン管理してください。ロックファイルが既にある場合、`npm ci` は記録されたバージョンをインストールします。

> [!NOTE]
> 依存ライブラリーは、互換性のある最新バージョンに定期的に更新することをお勧めします。この更新は、{{glossary("continuous integration")}} セットアップの一部として自動または半自動で行われる場合があります。
>
> 通常、マイナーおよびパッチバージョンのライブラリー更新には互換性があります。
> パッケージをインストールすると、npm はバージョンを `^` 接頭辞付きで **package.json** に記録します（例: `"express": "^5.2.1"`）。
> これにより、次のコマンドを実行して、互換性のある最新の `minor.patch` バージョンに更新できます。
>
> ```bash
> npm update --save
> ```
>
> メジャーバージョンでは互換性が変わります。
> メジャーバージョンの更新では、`package.json` とライブラリーを使用するコードを手動で更新し、プロジェクトを広範囲に再テストする必要があります。

チュートリアルの後半で必要になったときに、データベースドライバーなどの追加パッケージをインストールします。開発ツールと設定の概要については、[完全なツールチェーンの紹介](/ja/docs/Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain)を参照してください。

### タスクの実行

依存関係を定義するだけでなく、**package.json** に名前付きスクリプトを定義し、npm を使用して実行できます。生成された `scripts` オブジェクトを、プレースホルダーの `test` コマンドを含めて次のコマンドに置き換えます。

```json
{
  "scripts": {
    "start": "node server.js",
    "devstart": "node --watch server.js"
  }
}
```

`start` スクリプトはアプリケーションのエントリーポイント **server.js** を実行します。`devstart` スクリプトは Node のウォッチモードを使用し、インポートされた JavaScript ファイルが変更されたときにサーバーを再起動します。以下の最小サーバーで両方のコマンドを試します。

**package.json** は現在、次のようになっているはずです。依存関係のバージョン番号は、パッケージをインストールした時期によって新しくなる場合があります。

```json
{
  "name": "express-locallibrary-tutorial",
  "version": "1.0.0",
  "scripts": {
    "start": "node server.js",
    "devstart": "node --watch server.js"
  },
  "type": "module",
  "private": true,
  "engines": {
    "node": ">=24.0.0"
  },
  "dependencies": {
    "debug": "^4.4.3",
    "express": "^5.2.1",
    "http-errors": "^2.0.1",
    "morgan": "^1.12.0",
    "pug": "^3.0.4"
  }
}
```

### 最小サーバーのテスト

環境と npm スクリプトが動作することを確認するため、**package.json** と同じ場所に、次の内容の **server.js** ファイルを作成します。

```js
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
```

このコードは Express をインポートしてアプリケーションを作成します。`app.get()` メソッドは `/` へのリクエストに "Hello World!" というテキストで応答し、`app.listen()` はポート 3000 でサーバーを起動します。**package.json** に `"type": "module"` を設定したため、Node は **server.js** を ES モジュールとして扱います。

1. プロジェクトディレクトリーで npm スクリプトを使用してサーバーを起動します。

   ```bash
   npm start
   ```

   端末に次のメッセージが表示されるはずです。

   ```plain
   Server running at http://localhost:3000/
   ```

2. ブラウザーで `http://localhost:3000/` を開きます。"Hello World!" と表示されるはずです。
3. **Ctrl+C** を押してサーバーを停止し、ウォッチモードで起動します。

   ```bash
   npm run devstart
   ```

4. `res.send()` のメッセージを "Hello again!" に変更して **server.js** を保存します。Node はサーバーを自動的に再起動します。ページを再読み込みして、更新されたメッセージを確認してください。
5. **Ctrl+C** を押してサーバーを停止し、この一時的な **server.js** ファイルを削除します。スケルトンウェブサイトの章で、プロジェクトのサーバーファイルとアプリケーションファイルを追加します。npm スクリプトはそのまま残しておきます。このスクリプトはそのサーバーでも実行できます。

### 生成ファイルとローカルファイルの無視

**package.json** と同じ場所に、次の内容の **.gitignore** ファイルを作成します。

```plain
node_modules/
*.log
.env
```

これにより、インストール済みの依存関係、ログファイル、ローカル環境設定がバージョン管理されるのを防げます。依存関係はパッケージファイルから再インストールできます。

プロジェクトディレクトリーは現在、次のようになっているはずです。

```plain
express-locallibrary-tutorial
├── .gitignore
├── node_modules
│   └── [多数のインストール済み依存ファイル]
├── package-lock.json
└── package.json
```

これでチュートリアルの良い出発点ができました。[スケルトンウェブサイト](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website)の章で、JavaScript ファイル、テンプレート、スタイルシートなどの実際のアプリケーションファイルを追加します。

## まとめ

Node 開発環境と地域図書館プロジェクトのパッケージ設定、依存関係、npm スクリプトを準備しました。最小の Express サーバーでセットアップを確認し、このチュートリアルで追加するアプリケーションファイルを準備できました。

次の記事では、この環境と関連ツールを使用して、完全なウェブアプリケーションを構築するチュートリアルに取り組みます。

## 関連情報

- [ダウンロード](https://nodejs.org/ja/download)ページ (nodejs.org)
- [Express のインストール](https://expressjs.com/ja/starter/installing/) (expressjs.com)
- [Linux 用 Windows サブシステムでの Node.js の使用](https://learn.microsoft.com/ja-jp/windows/dev-environment/javascript/) (docs.microsoft.com)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

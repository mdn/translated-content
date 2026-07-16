---
title: "Express チュートリアル Part 2: スケルトンウェブサイトの作成"
short-title: "2: スケルトンウェブサイト"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website
l10n:
  sourceCommit: 79f65d8322a4e55e9f3f4c91441c9188dbe670e0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

この [Express チュートリアル](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website)の 2 回目の記事では、「スケルトン」ウェブサイトプロジェクトを作成し、サイト固有のルート、テンプレート/ビュー、データベース呼び出しを追加する方法を説明します。

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
        <em>Express Application Generator</em> を使用して、独自の新しいウェブサイトプロジェクトを開始できるようにすること。
      </td>
    </tr>
  </tbody>
</table>

## 概要

この記事では [Express Application Generator](https://expressjs.com/ja/starter/generator.html) ツールを使用して「スケルトン」ウェブサイトを作成する方法を説明します。このツールには、サイト固有のルート、ビュー/テンプレート、およびデータベース呼び出しを追加できます。この場合は、このツールを使用して[地域図書館ウェブサイト](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website)用のフレームワークを作成し、後でそのサイトに必要な他のすべてのコードを追加します。プロセスは非常に単純で、必要に応じてサイトのテンプレートエンジンと CSS ジェネレーターを指定して、新しいプロジェクト名を指定してコマンドラインでジェネレーターを呼び出すだけです。

次の節では、アプリケーションジェネレーターを呼び出す方法を示し、さまざまな ビュー/CSS オプションについて簡単に説明します。また、スケルトンウェブサイトの構造についても説明します。最後に、ウェブサイトを実行してそれが機能することを確認する方法を紹介します。

> [!NOTE]
>
> - _Express Application Generator_ は、Express アプリケーション用の唯一のジェネレーターというわけではありません。また、生成されたプロジェクトはファイルやディレクトリーを構造化する唯一実行可能な方法というわけではありません。しかしながら、生成されたサイトは、拡張と理解が容易なモジュール構造を持っています。最小限の Express アプリケーションについては、[Hello world の例](https://expressjs.com/ja/starter/hello-world.html) (Express ドキュメント) を参照してください。
> - _Express Application Generator_ は、ほとんどの変数を `var` で宣言しています。
>   このチュートリアルではこれらの多くを [`const`](/ja/docs/Web/JavaScript/Reference/Statements/const) （および一部は [`let`](/ja/docs/Web/JavaScript/Reference/Statements/let)）に変更してあります。新しい JavaScript の習慣を示したいからです。
> - このチュートリアルでは、_Express_ およびその他の依存関係のあるモジュールを、_Express Application Generator_ で作成された **package.json** のバージョンで使用しています。
>   これらは（必ずしも）最新バージョンではありませんので、本番環境に実際のアプリケーションを展開する際には、更新してください。

## アプリケーションジェネレーターを使用する

[Node 開発環境の設定](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment)の一部として、ジェネレーターをすでにインストールしているはずです。念のため、NPM パッケージマネージャを使用して、サイト全体にジェネレーターツールをインストールします。

```bash
npm install express-generator -g
```

ジェネレーターにはいくつかのオプションがあり、それらは `--help` (または `-h`) コマンドを使用してコマンドラインで表示できます。

```bash
> express --help

    Usage: express [options] [dir]

  Options:

        --version        output the version number
    -e, --ejs            add ejs engine support
        --pug            add pug engine support
        --hbs            add handlebars engine support
    -H, --hogan          add hogan.js engine support
    -v, --view <engine>  add view <engine> support (dust|ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)
        --no-view        use static html instead of view engine
    -c, --css <engine>   add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain CSS)
        --git            add .gitignore
    -f, --force          force on non-empty directory
    -h, --help           output usage information
```

Express を使用して、_current_ ディレクトリー内に、_Jade_ ビューエンジンとプレーン CSS を使用したプロジェクトを作成するように指定できます（ディレクトリー名を指定した場合、その名前のサブフォルダー内にプロジェクトが作成されます）。

```bash
express
```

同時に、`--view` オプションを使用してビュー（テンプレート）エンジンを選択したり、`--css` オプションを使用して CSS 生成エンジンを選択したりすることもできます。

> [!NOTE]
> テンプレートエンジンを選択するためのその他のオプション（`--hogan`、`--ejs`、`--hbs` など）は推奨されません。`--view` （または `-v`）を使用してください。

### どのビューエンジンを使うべきか

Express Application Generator を使用すると、[EJS](https://www.npmjs.com/package/ejs)、[Hbs](https://github.com/pillarjs/hbs)、[Pug](https://pugjs.org/api/getting-started.html) (Jade)、[Twig](https://www.npmjs.com/package/twig)、[Vash](https://www.npmjs.com/package/vash) など、一般的なビュー/テンプレートエンジンを多数設定できます。ただし、ビューオプションを指定しない場合はデフォルトで Jade が選択されます。 Express 自体は、[一般的な](https://github.com/expressjs/express/wiki#template-engines)他のテンプレート言語の多くに対応することができます。

> [!NOTE]
> ジェネレーターで対応していないテンプレートエンジンを使用したい場合は、[Express でテンプレートエンジンを使用する](https://expressjs.com/ja/guide/using-template-engines.html) (Express ドキュメント) およびターゲットビューエンジンのドキュメントを参照してください。

一般的に、必要とするすべての機能を提供し、より早く生産的になることを可能にするテンプレートエンジンを選ぶべきです ー もしくは言い換えれば、同じ方法で、他のコンポーネントを選択するということです。テンプレートエンジンを比較する際に考慮すべき点がいくつかあります。

- 生産的になるための時間 - チームにすでにテンプレート言語の使用経験があるのであれば、その言語を使用することで、より早く成果を上げられるでしょう。そうでない場合は、候補となるテンプレートエンジンの学ぶ難易度を相対的に考えてみるべきです。
- 人気と活発さ — そのエンジンの人気度や、活発なコミュニティが存在するかどうかを確認してください。ウェブサイトの運用期間中に問題が発生した際、対応状況を取得できることが重要です。
- スタイル － テンプレートエンジンの中には、「通常の」 HTML 内に挿入されたコンテンツを示すために特定のマークアップを使用するものもあれば、別の構文を使用して HTML を構成するものもあります（たとえば、インデントとブロック名を使用するなど）。
- パフォーマンス/レンダリング時間。
- 機能 - あなたが見ているエンジンが利用可能な以下の機能を持っているかどうかを考慮する必要があります。
  - レイアウトの継承：ベーステンプレートを定義してから、特定のページに対して異なる部分だけを "継承" することができます。これは通常、必要なコンポーネントを多数含めるか、毎回テンプレートを最初から作成することによってテンプレートを作成するよりも優れた方法です。
  - "Include" の対応：他のテンプレートを含めることでテンプレートを構築することができます。
  - 変数およびループ制御構文が簡潔であること。
  - テンプレートレベルで変数の値を絞り込む機能。例えば、変数の値を大文字にしたり、日付値を書式化を行ったりすることが可能です。
  - HTML 以外の出力フォーマット (JSON や XML など) を生成する機能。
  - 非同期操作とストリーミングのサポート。
  - サーバーだけでなくクライアントでも使用できます。テンプレートエンジンをクライアント上で使用できる場合、これによりデータを提供し、レンダリングの全部または大部分をクライアント側で行うことができます。

> [!NOTE]
> インターネット上には、さまざまなオプションを比較するのに役立つ多くのリソースがあります。

このプロジェクトでは、[Pug](https://pugjs.org/api/getting-started.html) テンプレートエンジン (これは最近名前が変更された Jade エンジンです) を使用します。これは最も一般的な Express/JavaScript テンプレート言語の 1 つで、ジェネレーターがそのままサポートしているためです。

### どの CSS スタイルシートエンジンを使うべきか

_Express Application Generator_ を使用すると、最も一般的な CSS スタイルシートエンジン ([LESS](https://lesscss.org/)、[SASS](https://sass-lang.com/)、[Stylus](http://stylus-lang.com/)) を使用するように構成されたプロジェクトを作成できます。

> [!NOTE]
> CSS には、特定の作業が困難になるような制限がいくつかあります。CSS スタイルシートエンジンを使えば、CSS を定義する際により強力な構文を使用でき、その定義をブラウザーが利用できるように通常の CSS に変換することができます。

テンプレートエンジンと同様に、チームを最も生産的にすることができるスタイルシートエンジンを使用する必要があります。このプロジェクトでは、CSS 要件が他のものを使用することを正当化するのに十分に複雑ではないため、通常の CSS (デフォルト) を使用します。

### どのデータベースを使うべきか

生成されたコードはデータベースを一切使用しません。 Express アプリケーションは、Node によってサポートされている任意の[データベースメカニズム](https://expressjs.com/ja/guide/database-integration.html)を使用できます (Express 自体はデータベース管理のための特定の追加の動作や要件を定義していません)。

データベースと統合する方法については、後の記事で説明します。

## プロジェクトを作成する

これから作成するサンプルのローカルライブラリーアプリでは、Pug テンプレートライブラリーを使用し、CSS スタイルシートエンジンを使用しないで、_express-locallibrary-tutorial_ という名前のプロジェクトを作成します。

まず、プロジェクトを作成する場所に移動し、次に示すようにコマンドプロンプトで _Express Application Generator_ を実行します。

```bash
express express-locallibrary-tutorial --view=pug
```

ジェネレーターはプロジェクトのファイルを作成 (そして一覧表示) します。

```plain
   create : express-locallibrary-tutorial\
   create : express-locallibrary-tutorial\public\
   create : express-locallibrary-tutorial\public\javascripts\
   create : express-locallibrary-tutorial\public\images\
   create : express-locallibrary-tutorial\public\stylesheets\
   create : express-locallibrary-tutorial\public\stylesheets\style.css
   create : express-locallibrary-tutorial\routes\
   create : express-locallibrary-tutorial\routes\index.js
   create : express-locallibrary-tutorial\routes\users.js
   create : express-locallibrary-tutorial\views\
   create : express-locallibrary-tutorial\views\error.pug
   create : express-locallibrary-tutorial\views\index.pug
   create : express-locallibrary-tutorial\views\layout.pug
   create : express-locallibrary-tutorial\app.js
   create : express-locallibrary-tutorial\package.json
   create : express-locallibrary-tutorial\bin\
   create : express-locallibrary-tutorial\bin\www

   change directory:
     > cd express-locallibrary-tutorial

   install dependencies:
     > npm install

   run the app (Bash (Linux or macOS))
     > DEBUG=express-locallibrary-tutorial:* npm start

   run the app (PowerShell (Windows))
     > $env:DEBUG = "express-locallibrary-tutorial:*"; npm start

   run the app (Command Prompt (Windows)):
     > SET DEBUG=express-locallibrary-tutorial:* & npm start
```

出力の最後には、依存関係（**package.json** ファイルに掲載されているもの）のインストール方法や、さまざまなオペレーティングシステム上でアプリケーションを実行する方法についての説明が提供されています。

> [!NOTE]
> ジェネレーターによって作成されたファイルでは、すべての変数が `var` として定義されています。
> 作業を続ける前に、生成されたすべてのファイルを開き、`var` の宣言を `const` に変更してください（このチュートリアルの残りの部分では、その変更が完了していることを仮定しています）。

## スケルトンウェブサイトを実行する

これで、完全なスケルトンプロジェクトが完成しました。 ウェブサイトは実際にはそれほど多くは行っていませんが、それがどのように機能するかを示すために実行する価値があります。

1. まず、依存関係をインストールします (`install` コマンドはプロジェクトの **package.json** ファイルにリストされているすべての依存関係パッケージを取得します)

   ```bash
   cd express-locallibrary-tutorial
   npm install
   ```

2. その後、アプリケーションを実行します。
   - Windows では、次のコマンドを使用します。

     ```batch
     SET DEBUG=express-locallibrary-tutorial:* & npm start
     ```

   - Windows PowerShell では、次のコマンドを使用します。

     ```powershell
     $env:DEBUG = "express-locallibrary-tutorial:*"; npm start
     ```

     > [!NOTE]
     > このチュートリアルでは、PowerShell コマンドについては扱いません（"Windows" のコマンドを紹介する場合、Windows のコマンドプロンプトを使用していることを想定しています。）

   - macOS または Linux では、次のコマンドを使用します。

     ```bash
     DEBUG=express-locallibrary-tutorial:* npm start
     ```

3. その後、ブラウザーに `http://localhost:3000/` を読み込んでアプリにアクセスします。

次のようなブラウザーページが表示されるはずです。

![デフォルトの Express ジェネレーターのウェブサイトを表示しているブラウザー](expressgeneratorskeletonwebsite.png)

おめでとうございます！これで、ポート番号 3000 経由でアクセス可能で正常に動作する Express アプリケーションが完成しました。

> [!NOTE]
> `npm start` コマンドを使用してアプリを起動することもできます。示されているように DEBUG 変数を指定すると、コンソールログ出力/デバッグが有効になります。たとえば、上記のページにアクセスすると、次のようなデバッグ出力が表示されます。
>
> ```bash
> SET DEBUG=express-locallibrary-tutorial:* & npm start
> ```
>
> ```plain
> > express-locallibrary-tutorial@0.0.0 start D:\github\mdn\test\exprgen\express-locallibrary-tutorial
> > node ./bin/www
>
>   express-locallibrary-tutorial:server Listening on port 3000 +0ms
> GET / 304 490.296 ms - -
> GET /stylesheets/style.css 200 4.886 ms - 111
> ```

## ファイルの変更時にサーバーを再起動できるようにする

Express ウェブサイトに加えた変更は、現在のサーバーを再起動するまで表示されません。変更を加えるたびにサーバーを停止して再起動する必要があることはすぐに非常に苛立たしいものになるため、必要に応じてサーバーの再起動を自動化することに時間をかける価値があります。

この目的のための最も簡単なツールの 1 つが [nodemon](https://github.com/remy/nodemon) です。 これは通常「ツール」としてグローバルにインストールされますが、ここでは開発者の依存関係としてローカルにインストールして使用するので、プロジェクトを操作する開発者はアプリケーションをインストールするときに自動的に取得されます。スケルトンプロジェクトのルートディレクトリーで次のコマンドを使用します。

```bash
npm install --save-dev nodemon
```

プロジェクトの **package.json** ファイルだけでなく、自分のマシンにグローバルに [nodemon](https://github.com/remy/nodemon) をインストールする場合は、次のようにします。

```bash
npm install -g nodemon
```

プロジェクトの **package.json** ファイルを開くと、この依存関係を持つ新しいセクションが表示されます。

```json
{
  "devDependencies": {
    "nodemon": "^3.1.10"
  }
}
```

このツールはグローバルにはインストールされていないので (パスに追加しない限り) コマンドラインから起動することはできませんが、NPM はインストールされているパッケージをすべて知っているので、NPM スクリプトから呼び出すことができます。**package.json** の `scripts` セクションを探してください。最初は、`"start"`で始まる1行のみが含まれています。その行の末尾にカンマを追加し、`"devstart"`と`"serverstart"`の行を追加して更新してください：

- Linux や macOS では、このスクリプトのセクションは次のようになります。

  ```json
  {
    "scripts": {
      "start": "node ./bin/www",
      "devstart": "nodemon ./bin/www",
      "serverstart": "DEBUG=express-locallibrary-tutorial:* npm run devstart"
    }
  }
  ```

- - Windows では、"serverstart" の値は（コマンドプロンプトを使用する場合）、同様に次のような形になります。

  ```bash
  "serverstart": "SET DEBUG=express-locallibrary-tutorial:* & npm run devstart"
  ```

これで、前回とほぼ同じ方法でサーバーを起動できるようになりましたが、`devstart` コマンドを使用します。

> [!NOTE]
> プロジェクト内のファイルを編集した場合は、サーバーが再起動します (またはコマンドプロンプトで `rs` と入力していつでも再起動できます)。あなたはまだページを更新するためにブラウザーを再読み込みする必要があるでしょう。
>
> "start" は実際には、名前付きスクリプトに割り当てられた npm コマンドであるため、これで単に `npm start` と実行するのではなく、`npm run <スクリプト名>` と実行する必要があります。_start_ スクリプト内のコマンドを置き換えることも可能でしたが、開発中は _nodemon_ のみを使用したいと考えているため、新しいスクリプトコマンドを生成するのが理にかなっています。
>
> 上記の **package.json** 内のスクリプトに追加された `serverstart` コマンドは、その良い例です。この手法を使えば、サーバーを起動するために長いコマンドを入力する必要がなくなりました。なお、スクリプトに追加された具体的なコマンドは、macOS または Linux でのみ動作することにご注意ください。

## 生成されたプロジェクト

これで、先ほど作成したプロジェクトを見ていきましょう。
作業を進めていく中で、このプロジェクトに少し手を加えていきます。

### ディレクトリー構造

生成されたプロジェクトは、依存関係をインストールしたので、次のようなファイル構造になります (ファイルは "/" が前に付いて**いない**項目です)。
**package.json** ファイルは、アプリケーションの依存関係とその他の情報を定義します。
また、アプリケーションのエントリーポイントである JavaScript ファイル **/bin/www** を呼び出す起動スクリプトも定義されています。
これにより、アプリケーションのエラー処理がいくつか設定され、その後 **app.js** が読み込まれて残りの作業が行われます。
アプリのルートは **routes/** ディレクトリーの下の別々のモジュールに格納されています。 テンプレートは /**views** ディレクトリーの下に格納されています。

```plain
express-locallibrary-tutorial
    app.js
    /bin
        www
    package.json
    package-lock.json
    /node_modules
        [about 6700 subdirectories and files]
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
    "start": "node ./bin/www"
  },
  "dependencies": {
    "cookie-parser": "~1.4.4",
    "debug": "~2.6.9",
    "express": "~4.16.1",
    "http-errors": "~1.6.3",
    "morgan": "~1.9.1",
    "pug": "2.0.0-beta11"
  },
  "devDependencies": {
    "nodemon": "^3.1.10"
  }
}
```

scripts セクションは "start" スクリプトを定義します。これは、`npm start` を呼び出してサーバーを起動するときに呼び出すスクリプトです（このスクリプトは _Express Application Generator_ で追加されいます）。スクリプトの定義から、これは実際に JavaScript ファイル **./bin/www** を _node_ で開始することがわかります。

このセクションは、すでに[ファイルの変更時にサーバーを再起動できるようにする](#ファイルの変更時にサーバーを再起動できるようにする)で、_devstart_ および _serverstart_ スクリプトを追加して変更済みです。
これらを使用することができます（前述の通り、このバージョンのスクリプトは Linux および macOS 用です）。

```json
{
  "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www",
    "serverstart": "DEBUG=express-locallibrary-tutorial:* npm run devstart"
  }
}
```

依存関係には、express パッケージと選択したビューエンジン (pug) 用のパッケージが含まれます。
さらに、多くのウェブアプリケーションで役立つ次のパッケージがあります。

- [cookie-parser](https://www.npmjs.com/package/cookie-parser): Cookie ヘッダーを解析し、`req.cookies` を生成するために使用されます (基本的に Cookie 情報にアクセスするための便利な方法を提供します)
- [debug](https://www.npmjs.com/package/debug): 小さなノードデバッグユーティリティは、Node コアのデバッグ技術をモデルにしています
- [morgan](https://www.npmjs.com/package/morgan): Node 用の HTTP リクエストロガーミドルウェア
- [serve-favicon](https://www.npmjs.com/package/serve-favicon): [ファビコン](https://ja.wikipedia.org/wiki/Favicon)を提供するためのノードミドルウェア (これはブラウザータブ内のサイト、ブックマークなどを表すために使用されるアイコンです)

生成されたプロジェクトに含まれるデフォルトのバージョンは、少し古くなっています。
`package.json` ファイルの dependencies セクションを、以下のテキストに置き換えてください。これは、この記事の執筆時点でこれらのライブラリーの最新バージョンを指定したものです。

```json
{
  "dependencies": {
    "cookie-parser": "^1.4.7",
    "debug": "^4.4.1",
    "express": "^5.1.0",
    "http-errors": "~2.0.0",
    "morgan": "^1.10.0",
    "pug": "3.0.3"
  }
}
```

次に、以下のコマンドを使用して、インストール済みの依存関係を更新してください。

```bash
npm install
```

> [!NOTE]
> 依存ライブラリーは、互換性のある最新バージョンに定期的に更新するのがよい考えです。これは、{{glossary("continuous integration", "継続的インテグレーション")}}の設定の一環として、自動または半自動で行われることがあります。
>
> 通常、ライブラリーのマイナーバージョンやパッチバージョンの更新は、互換性が保たれています。
> 以上では、それぞれのバージョンの接頭辞に `^` を付けています。これにより、以下のコマンドを実行するだけで、最新の `minor.patch` バージョンに自動的に更新可能になります。
>
> ```bash
> npm update --save
> ```
>
> メジャーバージョンアップでは互換性が変わります。
> これらの更新を行うには、`package.json` とライブラリーを使用しているコードを手動で更新し、プロジェクトを徹底的に再検査する必要があります。

### www ファイル

ファイル **/bin/www** がアプリケーションのエントリーポイントです。 これが最初に行うことは、[`express()`](https://expressjs.com/ja/api.html) アプリケーションオブジェクトを設定して返す「本物の」アプリケーションエントリーポイント (プロジェクトルート内の **app.js**) である`require()` です。
`require()` は、JavaScript コードや JSON、その他のファイルを現在のファイルにインポートするための [CommonJS ウェイ](https://nodejs.org/api/modules.html) です。
ここでは、**app.js** モジュールを相対パスで指定し、オプションのファイル拡張子 (.**js**) を除外しています。

```js
#!/usr/bin/env node

/**
 * Module dependencies.
 */

const app = require("../app");
```

> [!NOTE]
> Node.js 14以降では、JavaScript (ECMAScript) モジュールをインポートするための ES6 の `import` 文に対応しています。
> この機能を使用するには、`"type": "module"` を Express の **package.json** ファイルに追加する必要があります。また、アプリケーション内のすべてのモジュールでは `require()` ではなく `import` を使用する必要があります。さらに、相対インポートを行う場合は、ファイル拡張子を記載する必要があります（詳細については、[Node のドキュメント](https://nodejs.org/api/esm.html#introduction)を参照してください）。
> `import` を使用することには好ましいことがありますが、このチュートリアルでは [Express のドキュメント](https://expressjs.com/en/starter/hello-world.html)に一致するため、`require()` を使用しています。

このファイルのコードの残りの部分では、特定のポート (環境変数で定義されているか、変数が定義されていない場合は 3000 で定義されている) に設定された `app` を使用して Node HTTP サーバーをセットアップします。 今のところ、コードについて他に何も知る必要はありません (このファイル内のすべてが「定型句」です) が、興味があればお気軽にレビューしてください。

### app.js

このファイルは、`express` アプリケーションオブジェクト (慣例では `app` という名前) を作成し、さまざまな設定とミドルウェアを使用してアプリケーションを設定してから、モジュールからアプリケーションをエクスポートします。以下のコードは、アプリオブジェクトを作成およびエクスポートするファイルの一部だけを示しています。

```js
const express = require("express");

const app = express();
// …
module.exports = app;
```

上記の **www** エントリーポイントファイルに戻ると、このファイルがインポートされたときに呼び出し元に渡されるのは、この `module.exports` オブジェクトです。

**app.js** ファイルを詳しく見ていきましょう。まず、NPM を使用してアプリケーション用に以前にダウンロードした _http-errors_、_express_、_morgan_、_cookie-parser_ など、`require()` を使用していくつかの便利な Node ライブラリーをファイルにインポートします。path は、ファイルとディレクトリーのパスを解析するためのコア Node ライブラリーです。

```js
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
```

それから routes ディレクトリーから `require()` モジュールを呼び出します。これらのモジュール/ファイルには、関連する「ルート」 (URL パス) の特定のセットを処理するためのコードが含まれています。たとえばライブラリー内のすべての本をリストするためにスケルトンアプリケーションを拡張するときは、本関連のルートを処理するための新しいファイルを追加します。

```js
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
```

> [!NOTE]
> この時点で、モジュールをインポートしたばかりです。 実際にはまだそのルートを使用していません (これはファイルの少し下まで行われます)。

次に、インポートした Express モジュールを使ってアプリオブジェクトを作成し、それを使ってビュー (テンプレート) エンジンを設定します。エンジンの設定には 2 つの部分があります。まず、 `"views"` の値を設定して、テンプレートが保存されるフォルダーを指定します (この場合はサブフォルダーの **/views**)。それから `"view engine"` の値を設定してテンプレートライブラリー (この場合は "pug") を指定します。

```js
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
```

次の一連の関数は `app.use()` を呼び出してミドルウェアライブラリーをリクエスト処理チェーンに追加します。
例えば、`express.json()` と `express.urlencoded()` はフォームのフィールドを [`req.body`](https://expressjs.com/en/api.html#req.body) に設定するのに必要です。
これらのライブラリーに加え、`express.static` ミドルウェアも使用します。これにより、_Express_ はプロジェクトのルートディレクトリーにある **/public** ディレクトリー内のすべての静的ファイルを配信できるようになります。

```js
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

> [!NOTE]
> 上記で指定されたパス (`"/"` と `"/users"`) は、インポートされたファイルで定義されているルートの接頭辞として扱われます。
> たとえば、インポートされた**ユーザー**モジュールが `/profile` のルートを定義している場合は、`/users/profile` でそのルートにアクセスします。 ルートの詳細については後の記事で説明します。

ファイルの最後のミドルウェアは、エラーと HTTP 404 レスポンス用のハンドラーメソッドを追加します。

```js
// 404 を捕捉して、エラーハンドラーへ転送
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
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
const express = require("express");

const router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.send("respond with a resource");
});

module.exports = router;
```

このルートは、正しいパターンの HTTP `GET` リクエストが検出されたときに必ず呼び出されるコールバックを定義します。一致パターンは、モジュールのインポート時に指定された経路 ('`/users`') と、このファイルで定義されているもの ('`/`') です。 つまり、このルートは `/users/` の URL が受信されたときに使用されます。

> [!NOTE]
> これを試すには、node を使用してサーバーを実行し、ブラウザーの URL (`http://localhost:3000/users/`) にアクセスしてください。「リソースで応答してください」というメッセージが表示されます。

上記の関心事の 1 つは、コールバック関数が 3 番目の引数 '`next`' を持ち、したがって単純なルートコールバックではなくミドルウェア関数であることです。このコードでは現在 `next` 引数を使用していませんが、`'/'` ルートパスに複数のルートハンドラーを追加したい場合、将来的には役に立つかもしれません。

### ビュー (テンプレート)

ビュー (テンプレート) は **/views** ディレクトリー (**app.js** で指定されている) に保存され、ファイル拡張子 **.pug** が与えられます。[`Response.render()`](https://expressjs.com/ja/5x/api.html#res.render) メソッドは、オブジェクトに渡された名前付き変数の値とともに指定されたテンプレートをレンダリングし、その結果をレスポンスとして送信するために使用されます。以下の **/routes/index.js** のコードでは、テンプレート変数 "title" を渡した "index" テンプレートを使用して、そのルートがどのようにレスポンスをレンダリングするかを確認できます。

```js
/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});
```

上記のルートに対応するテンプレートを以下に示します(**index.pug**)。構文については後で詳しく説明します。今のところ知る必要があるのは、(変数 `'Express'` を持つ) `title`変数がテンプレートの指定された場所に挿入されることだけです。

```pug
extends layout

block content
  h1= title
  p Welcome to #{title}
```

## 自分自身で挑戦

**/routes/users.js** に新しいルートを作成し、URL `/users/cool/` に "You're so cool" というテキストを表示します。 サーバーを実行し、ブラウザーで <http://localhost:3000/users/cool/> にアクセスしてテストしてください。

## まとめ

これで、[ローカルライブラリー](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website)用のスケルトンウェブサイトプロジェクトを作成し、それが Node を使用して実行されることを確認しました。最も重要なのは、プロジェクトの構造も理解しているので、ローカルライブラリーのルートとビューを追加するために変更を加える必要がある場所をよく理解していることです。

次に、図書館のウェブサイトとして機能するようにスケルトンを変更します。

## 関連情報

- [Express application generator](https://expressjs.com/en/starter/generator.html) (Express ドキュメント)
- [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (Express ドキュメント)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

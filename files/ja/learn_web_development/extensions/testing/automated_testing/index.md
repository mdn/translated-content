---
title: 自動化テストの紹介
slug: Learn_web_development/Extensions/Testing/Automated_testing
original_slug: Learn/Tools_and_testing/Cross_browser_testing/Automated_testing
l10n:
  sourceCommit: 8ac5062e5ea3d3de01558977fcfa2ed5a8b152be
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Feature_detection", "Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment", "Learn/Tools_and_testing/Cross_browser_testing")}}

複数のブラウザーや端末で、 1 日に何度もテストを手動で実行するのは、面倒で時間のかかる作業です。これを効率的に処理するためには、自動化ツールに慣れることです。この記事では、利用できるもの、タスクランナーの使用方法、 LambdaTest、Sauce Labs、BrowserStack、TestingBot などの商用ブラウザーテスト自動化アプリの基本的な使用方法を見ていきます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <a href="/ja/docs/Learn/HTML">HTML</a>、<a href="/ja/docs/Learn/CSS">CSS</a>、<a href="/ja/docs/Learn/JavaScript">JavaScript</a> 言語の主要部に通じていること。
        <a
          href="/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction"
          >ブラウザー横断テストの基本</a
        >について高水準の考えを持っていること。
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>
        自動テストがどのようなものか、自動テストによってどのようにライフが楽になるか、また、自動テストを楽にする商用製品をどのように使用することができるか、理解できるようにすること。
      </td>
    </tr>
  </tbody>
</table>

## 自動化で簡単になる

このモジュールを通して、ウェブサイトやアプリをテストするさまざまな方法を読み込んだり、テストするブラウザーやアクセシビリティの考慮など、ブラウザー横断テストにどのような範囲を保有すべきかを説明しました。作業するのが大変そうでしょう？

前回記事で見てきたことをすべて手作業でテストするのは本当に大変なことです。幸いなことに、この苦痛の一部を自動化するのに役立つツールがあります。このモジュールで説明したテストを自動化する方法は、主に 2 つあります。

1. [Grunt](https://gruntjs.com/)、[Gulp](https://gulpjs.com/)、[npm scripts](https://docs.npmjs.com/misc/scripts/) のようなタスクランナーを使用して、ビルドプロセス中にテストを実行し、コードをクリーンアップします。これは、コードのリンティングや最小化、 CSS 接頭辞を追加したり、ブラウザー間で最大限の機能を展開をするために JavaScript の新機能をトランスパイルするなどのタスクを実行するのに最適な方法です。
2. [Selenium](https://www.selenium.dev/) のようなブラウザー自動化システムを使用して、インストールされたブラウザーにおいて固有のテストを実行し、結果を返すことで、ブラウザーで失敗が発生した場合に警告を発します。 [Sauce Labs](https://saucelabs.com/) や [BrowserStack](https://www.browserstack.com/) のような市販のブラウザー横断テストアプリは Selenium をベースにしていますが、単純なインターフェイスを使用してリモートで設定にアクセスすることができるので、自分自身でテストシステムを設定する手間を省くことができます。

次の記事では、自分自身で Selenium ベースのテストシステムを設定する方法を見ていきます。この記事では、タスクランナーを設定し、上記のような商用システムの基本的な機能を使用する方法を見ていきます。

> [!NOTE]
> 上記の 2 つのカテゴリーは相互に排他的ではありません。 Sauce Labs や LambdaTest のようなサービスに API 経由でアクセスし、ブラウザー横断テストを実行し、結果を返すタスクランナーを設定することは可能です。下記でも見ていきます。

## タスクランナーを使用してテストツールを自動化

このように、タスクランナーを使用して、構築プロセスの特定の時点で自動的に実行する必要があるすべてのタスクを実行することで、コードのリンティングや最小化などの一般的なタスクを大幅にスピードアップできます。例えば、ファイルを保存する時点や 他の時点などです。この節では、 Node と初心者向けのオプションである Gulp を使って課題実行を自動化する方法を見ていきます。

### Node と npm の設定

最近のほとんどのツールは {{Glossary("Node.js")}} をベースにしているので、 [nodejs.org](https://nodejs.org/) からインストールする必要があります：

1. 上記のサイトから、あなたのシステムに合ったインストーラーをダウンロードしてください。（すでに Node と npm がある場合は、4 へ移動してください。）
2. 他のプログラムと同じようにインストールします。 Node には [Node Package Manager](https://www.npmjs.com/) (npm) が付属しており、パッケージを簡単にインストールしたり、自分自身で作成したパッケージを他の人と共有したり、自分のプロジェクトで有益なスクリプトを実行したりすることができます。
3. インストールが完全に完了したら、端末に次のように入力してノードがインストールされていることを確認します。 Node と npm インストールされているバージョンが返されます。

   ```bash
   node -v
   npm -v
   ```

4. すでに Node/npm を取得している場合は、最新版にアップデートしてください。 Node をアップデートするには、ウェブサイトからアップデートされたインストーラーパッケージをダウンロードしてインストールするのが最も確実な方法です（上記のリンクを参照）。 npm をアップデートするには、ターミナルで以下のコマンドを使用します。

   ```bash
   npm install npm@latest -g
   ```

> [!NOTE]
> 上記のコマンドが権限エラーで失敗する場合は、 [npm のパーミッションを修正](https://docs.npmjs.com/getting-started/fixing-npm-permissions/)することで解決します。

自分のプロジェクトで Node/npm ベースのパッケージを使用し始めるには、プロジェクトディレクトリーを npm プロジェクトとして設定する必要があります。これは簡単にできます。

例えば、何かを壊さないように、最初に test ディレクトリーを作成しましょう。

1. ファイルマネージャーの UI を使用して、またはコマンドラインで、必要な場所に移動して以下のコマンドを実行して、どこか適切な場所に新しいディレクトリーを作成します。

   ```bash
   mkdir node-test
   ```

2. このディレクトリーを npm プロジェクトにするには、 test ディレクトリーの中に入って、以下を使って初期化するだけです。

   ```bash
   cd node-test
   npm init
   ```

3. この 2 つ目のコマンドは、自分のプロジェクトを設定するのに必要な情報を探すために多くの質問を要求されます。これで、既定値を選択するだけです。
4. すべての質問が終わると、入力した情報が問題がないかを尋ねてきます。 `yes` と入力して Enter/Return を押すと、 npm がディレクトリーに `package.json` ファイルを生成します。

このファイルは基本的に自分のプロジェクトの設定ファイルです。後でカスタマイズすることもできますが、とりあえずはこんな感じです。

```json
{
  "name": "node-test",
  "version": "1.0.0",
  "description": "Test for npm projects",
  "main": "index.js",
  "scripts": {
    "test": "test"
  },
  "author": "Chris Mills",
  "license": "MIT"
}
```

これで移動する準備は整いました。

### Gulp 自動化のセットアップ

Gulp を設定して、いくつかのテストツールを自動化するために使用してみましょう。

1. まず始めに、前回で説明した手順でテスト用の npm プロジェクトを作成します。
   また、 `package.json` ファイルに `"type": "module"` という行を追加して、以下のようなファイルにしてください。

   ```json
   {
     "name": "node-test",
     "version": "1.0.0",
     "description": "Test for npm projects",
     "main": "index.js",
     "scripts": {
       "test": "test"
     },
     "author": "Chris Mills",
     "license": "MIT",
     "type": "module"
   }
   ```

2. 次に、システムをテストするためのサンプル HTML、CSS と JavaScript コンテンツが必要です。サンプル [index.html](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/index.html)、[main.js](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/main.js)、[style.css](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/style.css) ファイルをプロジェクトフォルダー内の `src` という名前のサブフォルダーにコピーしてください。
   お望みであれば、自分自身でテストコンテンツを試すこともできますが、このようなツールは内部 JS/CSS では動作しないことを覚えておいてください。外部ファイルにする必要があります。
3. まず、以下のコマンドを使用して、 gulp をグローバルにインストールします（つまり、すべてのプロジェクトで利用できるようになります）。

   ```bash
   npm install --global gulp-cli
   ```

4. 次に、以下のコマンドを npm プロジェクトのルートディレクトリー内で実行し、 gulp を自分のプロジェクトの依存関係として設定します。

   ```bash
   npm install --save-dev gulp
   ```

5. これで自分のプロジェクトディレクトリーに `gulpfile.mjs` と呼ばれる新しいファイルを作成します。これはすべての課題を実行するファイルです。このファイルの中に、次のように記述します。

   ```js
   import gulp from "gulp";

   export default function (cb) {
     console.log("Gulp running");
     cb();
   }
   ```

   これは先ほどインストールした `gulp` モジュールを要求され、端末にメッセージを出力する以外は何もしない既定タスクをエクスポートします - これは Gulp が動作していることを知らせるのに有益です。各 gulp タスクは同じ基本書式、 `exports.taskName = taskFunction` でエクスポートされます。各関数は 1 つの引数、課題が完全に完了したときに実行するコールバックを取ります。

6. 以下のコマンドで gulp の既定タスクを実行することができます。これで試してみてください。

   ```bash
   gulp
   ```

### Gulp に実際のタスクを追加

Gulp に実際のタスクを追加するには、何をしたいかを考える必要があります。自分のプロジェクトで実行する合理的な基本機能セットは以下です。

- html-tidy、css-lint、js-hint は、一般的な HTML/CSS/JS のエラーを検査し、報告/修正します（[gulp-htmltidy](https://www.npmjs.com/package/gulp-htmltidy)、[gulp-csslint](https://www.npmjs.com/package/gulp-csslint)、[gulp-jshint](https://www.npmjs.com/package/gulp-jshint) を参照）。
- Autoprefixer は CSS をスキャンし、必要なところにだけ接頭辞を追加します（[gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) を参照）。
- babel は新しい JavaScript 構文機能を、古いブラウザーで動作する伝統的な構文にトランスパイルします（[gulp-babel](https://www.npmjs.com/package/gulp-babel) を参照）。

私たちが使用しているさまざまな gulp パッケージの完全な説明については、上記のリンクを参照してください。

各プラグインを使用するには、まず npm 経由でプラグインをインストールし、次に `gulpfile.js` ファイルの先頭に依存関係を要求され、その下にテストを追加し、最後に gulp のコマンドから使用できるように課題の名前をエクスポートする必要があります。

#### html-tidy

1. 以下の行を使用してインストールします。

   ```bash
   npm install --save-dev gulp-htmltidy
   ```

   > **メモ:** `--save-dev` は、パッケージを自分のプロジェクトに依存関係として追加します。自分のプロジェクトの `package.json` ファイルを見ていくと、`devDependencies` プロパティにその項目があります。

2. 以下の依存関係を `gulpfile.js` に追加します。

   ```js
   import htmltidy from "gulp-htmltidy";
   ```

3. 以下のテストを `gulpfile.js` の一番下に追加します。

   ```js
   export function html() {
     return gulp
       .src("src/index.html")
       .pipe(htmltidy())
       .pipe(gulp.dest("build"));
   }
   ```

4. 既定のエクスポートを変更します。

   ```js
   export default html;
   ```

ここでは、開発した `index.html` ファイルを `gulp.src()` で取得しています。これは何かをするためにソースファイルを取得することができます。

次に `pipe()` 関数を使用して、そのソースを別のコマンドに渡して別の処理を行います。この関数はいくつでもつなげることができます。最初に `htmltidy()` をソースに対して動作させます。 2 つ目の `pipe()` 関数は、出力された HTML ファイルを `build` ディレクトリーに書きます。

入力バージョンのファイルでは、空の {{htmlelement("p")}} 要素を置いたことに気が付いたかもしれません。 htmltidy は出力ファイルが作成される時点までにこれを除去します。

#### Autoprefixer と css-lint

1. 以下の行を使用してインストールします。

   ```bash
   npm install --save-dev gulp-autoprefixer
   npm install --save-dev gulp-csslint
   ```

2. 以下の依存関係を `gulpfile.js` に追加します。

   ```js
   import autoprefixer from "gulp-autoprefixer";
   import csslint from "gulp-csslint";
   ```

3. 以下のテストを `gulpfile.js` の一番下に追加します。

   ```js
   export function css() {
     return gulp
       .src("src/style.css")
       .pipe(csslint())
       .pipe(csslint.formatter("compact"))
       .pipe(
         autoprefixer({
           cascade: false,
         }),
       )
       .pipe(gulp.dest("build"));
   }
   ```

4. 以下のプロパティを `package.json` に追加します。

   ```json
   "browserslist": [
     "last 5 versions"
   ]
   ```

5. 既定でタスクを変更します。

   ```js
   export default gulp.series(html, css);
   ```

ここでは、 `style.css` ファイルを取得し、 csslint を実行し（CSS のエラーのリストを端末に出力します）、古いブラウザーで新しい CSS 機能を動作させるために必要な接頭辞を追加するために autoprefixer を実行します。パイプチェーンの終わりで、変更した接頭辞付きの CSS を `build` ディレクトリーへ出力します。これは csslint がエラーを見つけなかった場合にのみ動作することに注意してください。 CSS ファイルから中括弧を除去して gulp を再実行し、どのような出力が得られるか試してみてください。

#### js-hint と babel

1. 以下の行を使用してインストールします。

   ```bash
   npm install --save-dev gulp-babel @babel/preset-env
   npm install --save-dev @babel/core
   npm install jshint gulp-jshint --save-dev
   ```

2. 以下の依存関係を `gulpfile.js` に追加します。

   ```js
   import babel from "gulp-babel";
   import jshint from "gulp-jshint";
   ```

3. 以下のテストを `gulpfile.js` の一番下に追加します。

   ```js
   export function js() {
     return gulp
       .src("src/main.js")
       .pipe(jshint())
       .pipe(jshint.reporter("default"))
       .pipe(
         babel({
           presets: ["@babel/env"],
         }),
       )
       .pipe(gulp.dest("build"));
   }
   ```

4. 既定でタスクを変更します。

   ```js
   export default gulp.series(html, css, js);
   ```

ここでは、 `main.js` ファイルを取得し、`jshint` を動作させ、 `jshint.reporter` を使用して結果を端末に出力します。次に babel にファイルを渡すと、 babel はそれを古い構文に変換し、結果を `build` ディレクトリーに出力します。元コードには [fat アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)がありましたが、 babel はこれを古いスタイルの関数に変更しました。

#### さらなるアイディア

これがすべて設定されたら、自分のプロジェクトディレクトリー内で `gulp` コマンドを実行すると、次のような出力が得られるはずです。

![コードエディターで、タスクが開始または終了する時刻、タスク名、「完了」タスクの再生時間を示す行を出力します。](gulp-output.png)

自動化タスクが出力したファイルを `build` ディレクトリーの中で見たり、 `build/index.html` をウェブブラウザーで読み込んだりして試すことができます。

エラーが発生した場合は、上記のように依存関係とテストがすべて追加されているか調べてください。また、 HTML/CSS/JavaScript コードをコメントアウトしてから gulp を再実行してみて、問題が何であるかを切り分けられるかどうか確認してください。

Gulp には `watch()` 関数が用意されており、ファイルを保存するたびにファイルを監視してテストを実行するために使用することができます。例えば、次の例を `gulpfile.js` の一番下に追加してみてください：

```js
export function watch() {
  gulp.watch("src/*.html", html);
  gulp.watch("src/*.css", css);
  gulp.watch("src/*.js", js);
}
```

これで `gulp watch` コマンドを端末に入力してみてください。これで Gulp はあなたのディレクトリーを監視し、HTML、CSS、JavaScript ファイルに変更を保存するたびに適切な課題を実行します。

> **メモ:** `*` 記号はワイルドカードで、「これらの型のファイルが保存されたら、これらのタスクを実行する」と言います。メインタスクでワイルドカードを使用することもできます。例えば `gulp.src('src/*.css')` はすべての CSS ファイルを取得し、それに対してパイプタスクを実行します。

Gulp でできることはまだあります。 [Gulp プラグインディレクトリー](https://gulpjs.com/plugins/)には、文字通り何千ものプラグインが検索できるようになっています。

### 他のタスクランナー

他にも利用できるタスクランナーはたくさんあります。 Gulp が最高のソリューションであると言いたいわけではありませんが、これは私たちにとってうまくいきますし、初心者にとってもかなりアクセスしやすいものです。他にも使用することができます。

- Grunt は Gulp ととてもよく似た方法で動作しますが、 JavaScript で記述するのではなく、設定ファイルで指定した課題に頼っている点が異なります。詳しくは [Grunt を始めるには](https://gruntjs.com/getting-started)を参照してください。
- `package.json` ファイルの中にある npm スクリプトを使って直接タスクを実行することもできます。これは Gulp プラグインのようなものが基本的にコマンドラインツールのラッパーであるという前提で動作します。つまり、コマンドラインを使用してツールを実行する方法を行うことができれば、 npm スクリプトを使用してツールを実行することができます。作業するのは少しトリッキーですが、コマンドラインに強いあなたにとってやりがいのある作業です。 [Why npm scripts?](https://css-tricks.com/why-npm-scripts/) は、さらに多くの情報を含む良い入門書を提供しています。

## ブラウザーテストのスピードアップのために商用テストサービスの使用

これで、商業的なサードパーティーのブラウザーテストサービスと、それらが私たちのために何ができるかを見ていきましょう。

このようなアプリケーションの基本的な前提は、それぞれを実行する会社が、多くの異なるテストを実行できる巨大なサーバーファームを持っているということです。サービスワーカースクリプトを使用する場合、テストしたいページの URL と、テストしたいブラウザーなどの情報を提供します。アプリは、指定したOSとブラウザーに新しいVMを設定し、テスト結果をスクリーンショット、動画、ログファイル、テキストなどの形で返します。

その後、段階的に API を使用してプログラム的に機能にアクセスすることができます。このようなアプリは、自動テストを作成するために、自分自身でローカルの Selenium 環境などのタスクランナーと組み合わせることができることを意味しています。

> [!NOTE]
> 他にも利用できる商用ブラウザーテストシステムはありますが、この記事では LambdaTest、Sauce Labs、BrowserStack に焦点を当てます。これらが必ずしも利用できる最高のツールだとは言いませんが、初心者でも単純に取得し実行することができる良いツールです。

### LambdaTest

#### LambdaTest を始める

1. 始めるには [LambdaTest](https://accounts.lambdatest.com/register) に無料登録しましょう。
2. ログインしてください。メールアドレスを確認した後、自動的にログインされます。

> [!NOTE]
> 他のクラウドベースのブラウザー横断テストサービスプロバイダーとは異なり、LambdaTestは、あなたが彼らのプラットフォームに生涯アクセスするフリーミアムアカウントを提供しています。プレミアムプランとフリーミアムプランの唯一の違いは、使用量にあります。 Selenium Grid を利用した自動化テストの場合、 LambdaTest は月 60 分の無料テストを提供しています。

#### 基本的な機能: 手動テスト

LambdaTest にサインインすると、 LambdaTest ダッシュボードに移動します。ダッシュボードでは、何分の値を保有したか、同時実行セッション数、これまでの総テスト数など、関連の詳細が提供されます。

1. 手動テストを始めるには、左のナビゲーションメニューから **"Real Time Testing"** タブを選択する必要があります。
   ![LambdaTest ダッシュボード](lambdatest-dashboard.png)
2. **Real Time Testing** をクリックすると、ブラウザー設定、ブラウザーバージョン、OS、ウェブサイトをテストする画面解像度を選ぶ画面になります。
   ![Real Time Testing](mark-as-bug-1.png)
3. Start ボタンをクリックすると、読み込む画面が現れ、設定に基づいた VM （仮想マシン）が提供されます。読み込むと、ウェブサイトを使ってライブでインタラクティブなブラウザー横断テストを行うことができます。
   [![バグとしてマーク](mark-as-bug-2.png)](https://web.archive.org/web/20210608014707if_/https://www.lambdatest.com/support/docs/wp-content/uploads/2019/03/mark-as-bug-2.png)
   UI の課題に気づいたら、スクリーンショットボタンで VM のスクリーンショットをキャプチャすることで、同僚と共有することができます。また、テストセッションのレコーダーボタンを押すことで、テストセッションの動画を録画することもできます。
4. 内蔵の画像エディターで、同僚にプッシュする前にスクリーンショットにハイライトをつけましょう。![バグをハイライト](mark-as-bug-3.png)
5. バグとしてマークボタンを使用することで、 Jira、Asana、Trello などの多くのサードパーティツールにバグをプッシュすることができます。これにより、 LambdaTest のテストセッションから自分のプロジェクト管理インスタンスに直接バグをログ出力することができます。 [LambdaTest のサードパーティー統合](https://www.lambdatest.com/integrations)をすべて調べてください。

> [!NOTE]
> テストセッションで撮影された動画や画像は、すべて LambdaTest のギャラリー、テストログ、課題トラッカーに記録されます。

### Sauce Labs

#### Sauce Labs を始める

Sauce Labs トライアルを始めましょう。

1. Sauce Labs のトライアルアカウントを作成します。
2. ログインしてください。メールアドレスを確認した後、自動的にログインされます。

#### 基本的な機能: 手動テスト

[Sauce Labs dashboard](https://app.saucelabs.com/dashboard/manual) には、利用できるオプションがたくさんあります。これで、 _Manual Tests_ タブにいることを確認してください。

1. _Start a new manual session_ をクリックします。
2. 2.次の画面で、テストしたいページのURLを入力し（例えば<https://mdn.github.io/learning-area/javascript/building-blocks/events/show-video-box-fixed.html>を使います）、さまざまなボタンやリストを使ってテストしたいブラウザーとOSの組み合わせを選びます。ご覧のように、選択肢はたくさんあります。 !![sauce manual session](sauce-manual-session.png)
3. Start session をクリックすると、ローディング画面が現れ、選んだ組み合わせを実行する仮想マシンが起動します。
4. 読み込みが完了したら、選んだブラウザーで実行するウェブサイトのリモートテストを始めることができます。
5. ここから、テストしているブラウザーで見ていくレイアウトを見たり、マウスを動かしてボタンをクリックしてみたりすることができます。トップメニューでは次のことができます。

   - セッションの停止
   - 他の人に URL を教えて、リモートでテストを監視できるようにする。
   - テキスト/メモをリモートのクリップボードにコピーする。
   - スクリーンショットを撮る。
   - 全画面モードでテストする。

セッションを停止すると、 Manual Tests タブを返し、始めるには前回のマニュアルセッションの各項目が表示されます。これらの項目をクリックすると、そのセッションの詳細なデータが表示されます。ここでは、スクリーンショットをダウンロードしたり、セッションの動画を見たり、データログを出力したりすることができます。

> [!NOTE]
> これはすでにとても有益なことで、これらのエミュレーターや仮想マシンをすべて自分で設定するよりもはるかに便利です。

#### 高度な方法: Sauce Labs API

Sauce Labs には [restful API](https://docs.saucelabs.com/dev/api/) があり、アカウントや既存のテストの詳細をプログラムで取得したり、手動テストだけでは記録できない合格/不合格状態などの詳細情報をテストに付与したりすることができます。例えば、あるブラウザーと OS の組み合わせをテストするために、 Sauce Labs を使用して自分自身で Selenium テストの 1 つをリモートで実行し、テスト結果を Sauce Labs に渡すとします。

PHP、Java、Node.js など、お好みの環境を使用して API が利用可能なクライアントがいくつかあります。

Node.js と [node-saucelabs](https://github.com/saucelabs/node-saucelabs) を使用して API にアクセスする方法を簡単に見ていきましょう。

1. まず、[Node と npm の設定](#node_と_npm_の設定)で詳しく説明しているように、これをテストするために新しい npm プロジェクトを設定します。例えば `sauce-test` のように、以前とは異なるディレクトリー名を使用します。
2. 以下のコマンドを使用して、 Node Sauce Labs ラッパーをインストールします。

   ```bash
   npm install saucelabs
   ```

3. 自分のプロジェクトルートに新しいファイル `call_sauce.js` を作成し、以下のコンテンツを追加します。

   ```js
   const SauceLabs = require("saucelabs").default;

   (async () => {
     const myAccount = new SauceLabs({
       username: "your-sauce-username",
       password: "your-sauce-api-key",
     });

     // Get full WebDriver URL from the client depending on region:
     console.log(myAccount.webdriverEndpoint);

     // Get job details of last run job
     const jobs = await myAccount.listJobs("your-sauce-username", {
       limit: 1,
       full: true,
     });

     console.log(jobs);
   })();
   ```

4. Sauce Labs のユーザー名と API キーを示す配置に記入してください。これらは[ユーザー設定](https://app.saucelabs.com/user-settings)ページから取得できます。これらを入れてください。
5. すべてが保存されていることを確認し、次のようにファイルを実行します。

   ```bash
   node call_sauce
   ```

#### 高度な方法: テストの自動化

実際に Sauce Lab の自動テストを実行する方法については、次の記事で述べます。

### BrowserStack

#### BrowserStack を始める

BrowserStack Trial を始めましょう。

1. [BrowserStack トライアルアカウント](https://www.browserstack.com/users/sign_up)を作成します。
2. ログインしてください。メールアドレスの確認後、自動的にログインされるはずです。
3. そうでない場合は、トップナビゲーションメニューの _Live_ リンクをクリックしてください。
4. Firefox または Chrome の場合、「Enable Local Testing」というタイトルのダイアログでブラウザー拡張機能のインストールを促されます。他のブラウザーでも一部の機能を使用することはできますが（一般的には Flash を使用します）、完全な体験は得られないかもしれません。

#### 基本的な機能: 手動テスト

BrowserStack Live ダッシュボードでは、テストしたい端末とブラウザーを選べます。左列にプラットフォーム、右列に端末が表示されます。各端末をマウスオーバーまたはクリックすると、その端末で利用できるブラウザーが取得されます。

![テストの選択](browserstack-test-choices-sized.png)

ブラウザーのアイコンをクリックすると、お好みのプラットフォーム/端末/ブラウザーが読み込まれます。これで選んで、試してみてください。

![テスト端末](browserstack-test-device-sized.png)

> [!NOTE]
> モバイル端末の選択肢の横にある青い端末アイコンは、実際の端末でテストすることを指示するもので、このアイコンのない選択肢はエミュレーターで実行します。

アドレスバーに URL を入力したり、他のコントロールを実際の端末と同じように使用することができます。対応している端末（MacBook など）のタッチパッドで、端末からクリップボードへのコピー＆ペースト、マウスドラッグによる上下のスクロール、適切なジェスチャー（ピンチ／ズーム、 2 本指でのスクロールなど）を使用することもできます。すべての機能がすべての端末で利用できるわけではないことに注意してください。

セッションを制御するメニューも表示されます。

![テストメニュー](browserstack-test-menu-sized.png)

ここでの機能は以下の通りです。

- _Switch_ - 別のプラットフォーム/端末/ブラウザーに変更します。
- 方向（再読み込みアイコンのような外見） - 縦向きと横向きを切り替えます。
- Fit to screen （全画面アイコンのような外見） - テストエリアを端末で可能な限り埋めます。
- バグをキャプチャ（カメラのような外見） - スクリーンショットを導き、注釈を付けて保存できます。
- 課題トラッカー（トランプのような外見） - 前回キャプチャしたバグやスクリーンショットを見ることができます。
- 設定（歯車のアイコン） - セッションの一般的な設定を変更することができます。
- ヘルプ（クエスチョンマーク） - ヘルプ/サポート機能にアクセスします。
- _Devtools_ - ブラウザーの開発ツールを使用して、テストブラウザーに表示させるページを直接デバッグしたり操作したりすることができます。これは現在、 iOS 端末の Safari ブラウザーをテストする場合にのみ動作します。
- _Device info_ - テスト端末の情報を表示します。
- _Features_ - 現在の設定が対応している機能（クリップボードへのコピー、ジェスチャー対応など）を表示させます。
- _Stop_ - セッションを終了します。

> [!NOTE]
> これはすでにとても有益なことで、これらのエミュレータや仮想マシンをすべて自分で設定するよりもはるかに便利です。

#### その他の基本機能

BrowserStack のメインページに戻ると、 _More_ メニューオプションの下に、他にも有益な基本機能がいくつかあります：

- _Responsive_: URLを入力して _Generate_ を押すと、 BrowserStack はビューポートサイズの異なる複数の端末でその URL を読み込んでくれます。各端末で、さらにモニターサイズなどの設定を調整し、異なる形成要素でサイトのレイアウトがどのように動作するのか、よいアイディアを得ることができます。
- スクリーンショット URLを入力し、間委sンのあるブラウザー/端末/プラットフォームを選択し、 _Generate screenshots_ を押してください。 BrowserStack は、さまざまなブラウザーでのサイトのスクリーンショットを導き、それらを表示およびダウンロードできるようにします。

#### 高度な機能: BrowserStack API

BrowserStack も [restful API](https://www.browserstack.com/docs/automate/api-reference/selenium/introduction) を保有しており、アカウントプラン、セッション、ビルドなどの詳細をプログラムで参照することができます。

PHP、Java、Node.js など、お好きな環境を使用して API が利用可能なクライアントがいくつかあります。

Node.js を使用して API にアクセスする方法を簡単に見ていきましょう。

1. まず、[Node と npm の設定](#node_と_npm_の設定)で詳しく説明しているように、これをテストするために新しい npm プロジェクトを設定します。例えば `bstack-test` のように、以前とは異なるディレクトリー名を使用してください。
2. 自分のプロジェクトのルート内に、 `call_bstack.js` という新しいファイルを作成し、以下のコンテンツを与えます。

   ```js
   const request = require("request");

   const bsUser = "BROWSERSTACK_USERNAME";
   const bsKey = "BROWSERSTACK_ACCESS_KEY";
   const baseUrl = `https://${bsUser}:${bsKey}@www.browserstack.com/automate/`;

   function getPlanDetails() {
     request({ uri: `${baseUrl}plan.json` }, (err, res, body) => {
       console.log(JSON.parse(body));
     });
     /* Response:
       {
         automate_plan: <string>,
         parallel_sessions_running: <int>,
         team_parallel_sessions_max_allowed: <int>,
         parallel_sessions_max_allowed: <int>,
         queued_sessions: <int>,
         queued_sessions_max_allowed: <int>
       }
     */
   }

   getPlanDetails();
   ```

3. BrowserStack のユーザー名と API キーを、所有する配置する必要があります。このキーは、 [BrowserStack Account & Profile Details](https://www.browserstack.com/accounts/profile/details) の Authentication & Security 節から取得できます。これを入力してください。
4. すべてが保存されていることを確認し、次のようにファイルを実行してください。

   ```bash
   node call_bstack
   ```

下記では、 BrowserStack restful API で作業する際に有益と思われる、他にもいくつかの既製の関数を提供しています。

```js
function getBuilds() {
  request({ uri: `${baseUrl}builds.json` }, (err, res, body) => {
    console.log(JSON.parse(body));
  });
  /* Response:
  [
    {
      automation_build: {
        name: <string>,
        duration: <int>,
        status: <string>,
        hashed_id: <string>
      }
    },
    {
      automation_build: {
        name: <string>,
        duration: <int>,
        status: <string>,
        hashed_id: <string>
      }
    },
    // …
  ]
  */
}

function getSessionsInBuild(build) {
  const buildId = build.automation_build.hashed_id;
  request(
    { uri: `${baseUrl}builds/${buildId}/sessions.json` },
    (err, res, body) => {
      console.log(JSON.parse(body));
    },
  );
  /* Response:
  [
    {
      automation_session: {
        name: <string>,
        duration: <int>,
        os: <string>,
        os_version: <string>,
        browser_version: <string>,
        browser: <string>,
        device: <string>,
        status: <string>,
        hashed_id: <string>,
        reason: <string>,
        build_name: <string>,
        project_name: <string>,
        logs: <string>,
        browser_url: <string>,
        public_url: <string>,
        video_url: <string>,
        browser_console_logs_url: <string>,
        har_logs_url: <string>
      }
    },
    {
      automation_session: {
        name: <string>,
        duration: <int>,
        os: <string>,
        os_version: <string>,
        browser_version: <string>,
        browser: <string>,
        device: <string>,
        status: <string>,
        hashed_id: <string>,
        reason: <string>,
        build_name: <string>,
        project_name: <string>,
        logs: <string>,
        browser_url: <string>,
        public_url: <string>,
        video_url: <string>,
        browser_console_logs_url: <string>,
        har_logs_url: <string>
      }
    },
    // …
  ]
  */
}

function getSessionDetails(session) {
  const sessionId = session.automation_session.hashed_id;
  request({ uri: `${baseUrl}sessions/${sessionId}.json` }, (err, res, body) => {
    console.log(JSON.parse(body));
  });
  /* Response:
  {
    automation_session: {
      name: <string>,
      duration: <int>,
      os: <string>,
      os_version: <string>,
      browser_version: <string>,
      browser: <string>,
      device: <string>,
      status: <string>,
      hashed_id: <string>,
      reason: <string>,
      build_name: <string>,
      project_name: <string>,
      logs: <string>,
      browser_url: <string>,
      public_url: <string>,
      video_url: <string>,
      browser_console_logs_url: <string>,
      har_logs_url: <string>
    }
  }
  */
}
```

#### 高度な機能: 自動化テスト

実際に BrowserStack の自動テストを実行する方法については、次の記事で述べます。

### TestingBot

#### TestingBot を始める

さっそく TestingBot のトライアルを始めてみましょう。

1. [TestingBot トライアルアカウント](https://testingbot.com/users/sign_up)を作成します。
2. ログインしてください。メールアドレスを確認した後、自動的にログインします。

#### 基本的な機能: 手動テスト

[TestingBot ダッシュボード](https://testingbot.com/members)には、選べる様々なオプションが掲載されています。これで、 _Live Web Testing_ タブにいることを確認してください。

1. テストしたいページの URL を入力します。
2. テストしたいブラウザーとOSの組み合わせをグリッドで選択します。
   ![テストの選択](screen_shot_2019-04-19_at_14.55.33.png)
3. _Start Browser_ をクリックすると、ローディング画面が現れ、選んだ組み合わせを実行する仮想マシンが起動します。
4. 読み込みが完了したら、選んだブラウザーで実行するウェブサイトのリモートテストを始めることができます。
5. ここから、テストしているブラウザーで見ているレイアウトを見たり、マウスを動かしてボタンをクリックしてみたりすることができます。サイドメニューでは、以下のことができます。

   - セッションの停止
   - 画面の内側へ解像度変更
   - テキスト/メモをリモートクリップボードへコピー
   - スクリーンショットの撮影、編集、ダウンロード
   - 全画面モードでのテスト

セッションを停止すると、 _Live Web Testing_ ページに戻り、前回始めた手動セッションの各項目が表示されます。これらの項目の一つをクリックすると、そのセッションの詳細なデータが表示されます。ここでは、導いたスクリーンショットをダウンロードしたり、テストの動画を見たり、セッションのログを出力したりすることができます。

#### 高度な機能: TestingBot API

TestingBot には [restful API](https://testingbot.com/support/api) があり、アカウントや既存のテストの詳細をプログラムで取得したり、手動テストだけでは記録できない合格/不合格状態などの詳細情報をテストに注釈を付けたりすることができます。

TestingBot には、NodeJS、Python、Ruby、Java、PHP などの API クライアントを使用することができます。

下記は、 NodeJS クライアント [testingbot-api](https://www.npmjs.com/package/testingbot-api) を使用して TestingBot API と対話する方法の例です。

1. まず、[Node と npm の設定](#node_と_npm_の設定)で詳しく説明しているように、これをテストするために新しい npm プロジェクトを設定します。例えば`tb-test`のように、以前とは異なるディレクトリー名を使用してください。
2. 以下のコマンドを使用して Node TestingBot ラッパーをインストールします。

   ```bash
   npm install testingbot-api
   ```

3. 自分のプロジェクトルートに`tb.js`と呼ばれる新しいファイルを作成し、中身を以下のようにします。

   ```js
   const TestingBot = require("testingbot-api");

   let tb = new TestingBot({
     api_key: "your-tb-key",
     api_secret: "your-tb-secret",
   });

   tb.getTests(function (err, tests) {
     console.log(tests);
   });
   ```

4. TestingBot Key と Secret を示されている場所に記入する必要があります。これらは[TestingBot dashboard](https://testingbot.com/members/user/edit)で探すことができます。
5. すべてが保存されていることを確認し、ファイルを実行してください。

   ```bash
   node tb.js
   ```

#### 高度な機能: 自動かテスト

実際に TestingBot の自動テストを実行する方法については、次の記事で述べます。

## まとめ

今回はかなり盛りだくさんの内容でしたが、自動化ツールを使用してテストに関する力仕事を行うことの利点が分かり始めたのではないでしょうか。

次の記事では、 Selenium を使用して自分自身でローカルの自動化システムを設定し、 Sauce Labs、BrowserStack、TestingBot などのサービスと組み合わせる方法を見ていきます。

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Feature_detection", "Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment", "Learn/Tools_and_testing/Cross_browser_testing")}}

---
title: Svelte をはじめる
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started
l10n:
  sourceCommit: 904cdf09c7e328b7a15a6a4db6bc6bd31f969cce
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

この記事では [Svelte](https://svelte.jp/) というフレームワークの簡単な紹介を行います。Svelte の仕組みと、今までのフレームワークやツールとの違いを見ていきましょう。その後は開発環境の構築、サンプルアプリの作成、プロジェクトの構造、ローカル環境での実行方法と本番環境でのビルド方法を学びます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <p>
          最低限、主要な
          <a href="/ja/docs/Learn/HTML">HTML</a> と
          <a href="/ja/docs/Learn/CSS">CSS</a>、
          <a href="/ja/docs/Learn/JavaScript">JavaScript</a>
          に精通していて、
          <a href="/ja/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line">
            ターミナル / コマンドライン
          </a>
          に関する知識があることが推奨されます。
        </p>
        <p>
          Svelte はソースコードから最小かつ高度に最適化された JavaScript を生成するコンパイラーです。
          アプリのコンパイルとビルドには、node と npm がインストールされたターミナルが必要です。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>
        Svelte のローカル開発環境を構築して、スターターアプリの作成とビルド、
        そして仕組みの基本を理解する。
      </td>
    </tr>
  </tbody>
</table>

## Svelte: 優れたユーザーインターフェイスを構築する新しいアプローチ

Svelte はこのモジュールで扱われている他のフレームワークとは異なるアプローチでウェブアプリケーションを構築します。React や Vue などのフレームワークはアプリケーションの実行中にユーザーのブラウザーで作業の大半を行いますが、Svelte はその作業をアプリケーションのビルド時にのみ発生するコンパイルの段階で行うことにより、高度に最適化されたバニラ JavaScript を生成します。

このアプローチによってアプリケーションバンドルが小さくなり、パフォーマンスが向上するほか、モダンなツールのエコシステムをあまり経験していない人にとってもより親しみやすい開発体験が得られるようになりました。

Svelte は HTML と CSS、そして JavaScript という昔ながらのウェブ開発モデルに忠実であり、HTML と JavaScript にいくつかの拡張機能を加えただけです。これにより間違いなく他のフレームワークと比べて学ぶべき概念やツールは少ないと言えるでしょう。

現時点での主な欠点はまだ若いフレームワークであるということです。若いということは、そのエコシステムは成熟したフレームワークよりもツール、サポート、プラグイン、明確な使用パターンなどが限られており、求人も少ないです。しかし、今まで紹介した利点は、あなたが Svelte を探究することへの関心を持ってもらうのに十分なはずです。

> **メモ:** 2020 年より、Svelteは最も要望の多かった機能の 1 つである [TypeScript を公式にサポート](https://svelte.jp/blog/svelte-and-typescript)するようになりました。このチュートリアルシリーズの後半で確認していきます。

このチュートリアルシリーズに戻って、より詳細な作成方法について学ぶ前に [Svelte チュートリアル](https://svelte.jp/tutorial/basics)で基本的なコンセプトを簡単に確認することを推奨します。完了までの所要時間は約 30 分です。

## ユースケース

Svelte はインターフェイスの一部またはアプリケーション全体の開発に使用できます。Svelte を用いてゼロから UI を開発することも、既存のアプリケーションへ段階的に組み込むことも可能です。

しかしながら、Svelte は特に以下のような状況で用いるのに適しています。

- 低消費電力デバイス向けのウェブアプリケーション: Svelte で構築されたアプリケーションはバンドルサイズが小さいため、ネットワーク接続が遅く、処理能力に制限のあるデバイスに最適です。コードが少ないということはダウンロード、解析、実行、そしてメモリー内で保持し続ける KB が少ないことを意味します。
- 高度にインタラクティブなページや複雑な視覚化: 多くの DOM 要素を表示する必要があるデータ視覚化を構築する場合、ランタイムオーバーヘッドのないフレームワークから得られるパフォーマンスの向上により、ユーザーとのインタラクションが迅速かつ応答性が高くなることを保証します。
- ウェブ開発の基礎知識がある人のオンボーディング: Svelte は学習曲線が浅いのが特徴です。HTML、CSS、JavaScript の基礎知識を持つウェブ開発者であれば、短期間で簡単に Svelte の仕様を理解してウェブアプリケーションの構築を開始することができます。

さらに Svelte をベースにしたフレームワークである [Sapper (en-US)](https://sapper.svelte.dev/) を利用すればサーバーサイドレンダリング、コード分割、ファイルベースのルーティング、オフラインサポートなどの高度な機能を備えたアプリケーションを開発することも可能です。またネイティブなモバイルアプリケーションを構築できる [Svelte Native (en-US)](https://svelte-native.technology/) もあります。

## Svelte の仕組みについて

コンパイラーである Svelte は HTML、CSS、JavaScript を拡張して、ランタイムオーバーヘッドなしに最適な JavaScript コードを生成できます。これを実現するために Svelte は以下のような方法でバニラウェブの技術を拡張しています。

- HTML を拡張してマークアップに JavaScript の表現を与えることで、handlebars と同様の方法で条件やループを使用するディレクティブを提供しています。
- CSS を拡張してスコープの仕組みを追加することで、各コンポーネントが他のコンポーネントのスタイルと衝突するリスクなしに独自のスタイルを定義できるようにしています。
- JavaScript を拡張して言語の特定のディレクティブを再解釈することで、真のリアクティビティを実現してコンポーネントの状態管理を容易にしています。

コンパイラーは非常に特殊な状況でのみ、Svelte コンポーネントのコンテキストにだけ介入します。JavaScript 自体の拡張は最小限であり、JavaScript の構文を壊さないように、また開発者を遠ざけることのないように、慎重に選択されています。実際にほとんどの場合はバニラ JavaScript で作業することになるでしょう。

## Svelte との第一歩

Svelte はコンパイラーであるため、`<script src="svelte.js">` タグをページに追加してアプリにインポートすることはできません。コンパイラーを動かすためには開発環境をセットアップする必要があります。

### 必要条件

Svelte を動作させるためには [Node.js](https://nodejs.org/ja/) がインストールされている必要があります。ここでは長期サポート (LTS) バージョンを使用することを推奨します。Node には npm (node パッケージマネージャー) と npx (node パッケージランナー) が含まれます。npm の代わりに Yarn パッケージマネージャーを使用することもできますが、このチュートリアルでは npm を使用していることを前提としています。npm と Yarn の詳細については、[パッケージ管理の基礎](/ja/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management)を参照してください。

Windows を使用している場合、このチュートリアルで説明されているターミナルコマンドを使うためには Unix/macOS のターミナルと同等になるように何らかのソフトウェアをインストールする必要があります。Gitbash ([git for Windows ツールセット (en-US)](https://gitforwindows.org/) の一部として提供されています) と [Windows Subsystem for Linux (WSL)](https://docs.microsoft.com/windows/wsl/about) はどちらとも適した選択肢です。これらの一般的なターミナルコマンドについての詳細は [コマンドライン短期集中講座](/ja/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line) を参照してください。

詳細については以下もご覧ください。

- ["What is npm" (en-US)](https://nodejs.org/ja/knowledge/getting-started/npm/what-is-npm/) - nodejs.org
- ["Introducing npx" (en-US)](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner) - npm Blog
- ["Svelte の一番簡単な始め方"](https://svelte.jp/blog/the-easiest-way-to-get-started) - Svelte Blog

### 最初の Svelte アプリを作成する

スターターアプリのテンプレートを作成する最も簡単な方法は、スターターテンプレートのアプリケーションをダウンロードすることです。GitHub の [sveltejs/template](https://github.com/sveltejs/template) にアクセスすればダウンロードが可能ですが、[degit](https://github.com/Rich-Harris/degit) を使用すればダウンロードや解凍の手間を省くことができます。

スターターアプリのテンプレートを作成するためには、以下のターミナルコマンドを実行します。

```bash
npx degit sveltejs/template moz-todo-svelte
cd moz-todo-svelte
npm install
npm run dev
```

> **メモ:** degit は魔法のようなものではありません。ただ最新バージョンにあたる git リポジトリーの内容をダウンロードして解凍しているだけです。これは `git clone` を使うよりもはるかに高速です。なぜならリポジトリーの履歴全てをダウンロードしたり、完全なローカルクローンを作ったりしないためです。

`npm run dev` を実行すると Svelte がアプリケーションのコンパイルとビルドを行います。するとローカルサーバーとして `localhost:8080` が起動します。Svelte はファイルの更新を監視して、ソースファイルに変更があった場合、アプリを自動的に再コンパイルして更新を行います。なおブラウザーには次のように表示されます。

![hello world と書かれたシンプルなスタートページ、下部には公式の svelte チュートリアルへのリンクがある](01-svelte-starter-app.png)

### アプリケーションの構造

スターターテンプレートは以下のような構造で提供されています。

```
moz-todo-svelte
├── README.md
├── package.json
├── package-lock.json
├── rollup.config.js
├── .gitignore
├── node_modules
├── public
│   ├── favicon.png
│   ├── index.html
│   ├── global.css
│   └── build
│       ├── bundle.css
│       ├── bundle.js
│       └── bundle.js.map
├── scripts
│   └── setupTypeScript.js
└── src
    ├── App.svelte
    └── main.js
```

内容は以下のとおりです。

- `package.json` と `package-lock.json`: Node.js/npm プロジェクトを整理するために使用する情報が含まれています。このチュートリアルを完了するためにこれらのファイルを理解する必要は全くありませんが、詳細を学びたい場合は NodeJS.org の [`package.json` とはどのようなファイルか？ (en-US)](https://nodejs.org/ja/knowledge/getting-started/npm/what-is-the-file-package-json/)、もしくは [パッケージ管理の基礎](/ja/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management) でも説明しています。
- `node_modules`: これは node がプロジェクトの依存関係を保存しておく場所です。これらの依存関係は本番環境に送られることはなく、開発目的にのみ使用されます。
- `.gitignore`: プロジェクトから無視するファイルもしくはフォルダーを git に指示します。アプリを git リポジトリーに含める場合に便利です。
- `rollup.config.js`: Svelte ではモジュールバンドラーとして [rollup.js (en-US)](https://rollupjs.org/) を使用しています。この設定ファイルはアプリのコンパイルとビルドの方法を rollup に指示します。 [webpack (en-US)](https://webpack.js.org/) が好きな方は `npx degit sveltejs/template-webpack svelte-app` でスタータープロジェクトを作成することもできます。
- `scripts`: 必要に応じてセットアップスクリプトが含まれます。現在は `setupTypeScript.js` のみを含める必要があります。

  - `setupTypeScript.js`: このスクリプトは Svelte の TypeScript サポートを設定するものです。最後の記事で詳しく説明します。

- `src`: このディレクトリーにはアプリケーションのソースコードが入れられます。つまりアプリのコードを作成する場所です。

  - `App.svelte`: アプリの最上位コンポーネントです。今のところは 'Hello World!' をレンダリングするだけです。
  - `main.js`: アプリケーションのエントリーポイントです。これは `App` コンポーネントをインスタンス化して、HTML ページの body にバインドするだけです。

- `public`: このディレクトリーには、本番環境で公開される全てのファイルが含まれています。

  - `favicon.png`: アプリのファビコンです。現在は Svelte のロゴになっています。
  - `index.html`: これがアプリのメインページです。最初は空の HTML ページで、その後 Svelte によって生成された CSS ファイルと js バンドルが読み込まれます。
  - `global.css`: このファイルにはスコープされていないスタイルが書かれています。これはアプリケーション全体に適用される通常の CSS ファイルです。
  - `build`: このフォルダーには、生成された CSS と JavaScript のソースコードが入っています。

    - `bundle.css`: 各コンポーネントに定義されたスタイルから Svelte が生成した CSS ファイル。
    - `bundle.js`: 全ての JavaScript のソースコードからコンパイルされた JavaScript ファイル。

## 最初の Svelte コンポーネントを見る

コンポーネントは Svelte アプリケーションの構成要素です。これらは HTML のスーパーセットを使用して、`.svelte` ファイルに記述されます。

`<script>`、`<style>`、マークアップの 3 つのセクションは全て任意であり、好きな順序で並べることができます。

```html
<script>
  // ここにロジックを記述
</script>

<style>
  /* ここにスタイルを記述 */
</style>

<!-- ここにマークアップ (0 個以上の HTML 要素) を記述 -->
```

> **メモ:** コンポーネントの形式についての詳細は、[Svelte のドキュメント](https://svelte.jp/docs#component-format) を参照してください。

以上を踏まえてスターターテンプレートに付属の `src/App.svelte` ファイルを見てみましょう。以下のようになっているはずです。

```html
<script>
  export let name;
</script>

<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
```

### `<script>` セクション

`<script>` ブロックには、コンポーネントのインスタンスが作成されたときに実行される JavaScript が含まれています。トップレベルで宣言された (またはインポートされた) 変数は、コンポーネントのマークアップから「表示」できるようになっています。トップレベルの変数は Svelte がコンポーネントの状態を処理する方法であり、デフォルトでリアクティブです。これが何を意味するかは、後ほど詳しく解説します。

```html
<script>
  export let name;
</script>
```

Svelte では変数の宣言をプロパティ (または prop) としてマークするために [`export`](/ja/docs/Web/JavaScript/Reference/Statements/export) キーワードを使って、コンポーネントのコンシューマー (他のコンポーネントなど) からアクセスができるようにします。これは Svelte が JavaScript の構文を拡張して、使い慣れた形式を維持しながら、より便利なものにした一例です。

### マークアップセクション

マークアップセクションでは任意の HTML を挿入することができ、さらに 1 つの中括弧 (`{}`) の中に有効な JavaScript を挿入することもできます。例の場合では、`name` prop の値を `Hello` の直後に埋め込んでいます。

```html
<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
</main>
```

Svelte は `{#if}`、`{#each}`、`{#await}` などのタグもサポートしています。これらはそれぞれ、マークアップの一部を条件付きでレンダリングしたり、要素のリストを反復処理したり、非同期的な値を扱う処理ができます。

### `<style>` セクション

CSS を扱ったことがある場合、次のスニペットは理解できるかと思います。

```html
<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
```

上記では [`<h1>`](/ja/docs/Web/HTML/Element/Heading_Elements) 要素にスタイルを適用しています。それでは `<h1>` 要素をを含む他のコンポーネントはどうなるでしょうか？

Svelte ではコンポーネントの `<style>` ブロック内の CSS は、そのコンポーネントにのみスコープされます。これはコンポーネントのスタイルに基づいたハッシュ値を、選択された要素にクラスとして追加することで機能しています。

新しいブラウザのタブで `localhost:8080` を開き、_HELLO WORLD!_ ラベルを右クリック、または <kbd>Ctrl</kbd> キーを押しながらクリックして _検証_ を選ぶことで下の画像と同様の画面を確認することができます。

![Svelte のスターターアプリを devtools で開くとスコープされたスタイルのクラスが表示される](02-svelte-component-scoped-styles.png)

アプリをコンパイルする際、Svelte は `h1` のスタイル定義を `h1.svelte-1tky8bj` に変更します。そしてコンポーネント内全ての `<h1>` 要素を `<h1 class="svelte-1tky8bj">` に置き換え、そのコンポーネントが必要とするスタイルを取得できるようにします。

> **メモ:** `:global()` 修飾子を使用することでこの動作をオーバーライドし、スタイルをグローバルなセレクターに適用できます (詳細については [Svelte `<style>` ドキュメント](https://svelte.jp/docs#component-format-style) を参照してください)。

## 少しだけ変更を加える

どのようにアプリが構成されているのかが大体分かったので、少しだけ変更を加えてみましょう。
この時点で `App.svelte` コンポーネントの更新を試すことができます。例えば `App.svelte` の 6 行目にある `<h1>` 要素を以下のように変更してください。

```html
<h1>Hello {name} from MDN!</h1>
```

変更を保存するだけで `localhost:8080` で実行されているアプリが自動的に更新されます。

### Svelte のリアクティビティを確認

UI フレームワークの文脈では、リアクティビティとはコンポーネントの状態が変更されたときにフレームワークが自動的に DOM を更新できることを意味します。

Svelte では、コンポーネント内の任意のトップレベル変数に新しい値を代入することでリアクティビティが発生します。例として `App` コンポーネントに `toggleName()` 関数と、それを実行するためのボタンを組み込むことで確認ができます。

`<script>` とマークアップセクションを以下のように更新してみてください。

```html
<script>
  export let name;

  function toggleName() {
    if (name === "world") {
      name = "Svelte";
    } else {
      name = "world";
    }
  }
</script>

<main>
  <h1>Hello {name}!</h1>
  <button on:click="{toggleName}">Toggle name</button>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
</main>
```

ボタンがクリックされるたびに、Svelte は `toggleName()` 関数を実行して、`name` 変数の値を更新します。

お分かりのように `<h1>` ラベルは自動的に更新されます。その裏側では、Svelte は仮想 DOM やその他の複雑な調整メカニズムを使うことなく、name 変数の値が変更されるたびに DOM を更新する JavaScript コードを作り出しました。

なお `on:click` で `:` を使っていることに注意してください。これは Svelte が DOM イベントをリスニングするための構文です。

## main.js を見る: アプリのエントリーポイント

`src/main.js` を開いてみましょう。このファイルは `App` コンポーネントがインポートされて使用される場所です。またアプリのエントリーポイントでもあり、最初は以下のようになっています。

```js
import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "world",
  },
});

export default app;
```

始めに `main.js` は使用する Svelte コンポーネントをインポートします。そして 3 行目でインスタンス化を行い、次のプロパティを持つオプションオブジェクトを渡しています。

- `target`: コンポーネントをレンダリングする DOM 要素、上記の場合は `<body>` 要素。
- `props`: `App` コンポーネントの各 prop に割り当てる値を指定する。

## 細かく見てみる

Svelte はどのようにして、これら全てのファイルを上手く連携させているのでしょうか？

Svelte コンパイラーは各コンポーネントの `<style>` セクションを処理して `public/build/bundle.css` ファイルにコンパイルします。

次に各コンポーネントのマークアップと `<script>` セクションをコンパイルして、その結果を `public/build/bundle.js` に保存します。くわえて `src/main.js` に各コンポーネントの機能を参照するためのコードを追加します。

そして最後に `public/index.html` ファイルには生成された `bundle.css` と `bundle.js` ファイルが組み込まれます。

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />

    <title>Svelte app</title>

    <link rel="icon" type="image/png" href="/favicon.png" />
    <link rel="stylesheet" href="/global.css" />
    <link rel="stylesheet" href="/build/bundle.css" />

    <script defer src="/build/bundle.js"></script>
  </head>

  <body></body>
</html>
```

縮小版の `bundle.js` のサイズは 3KB 程度で、これには「Svelte ランタイム」(わずか 300 行の JavaScript コード) と `App.svelte` のコンパイル済みコンポーネントが含まれています。お分かりのように `bundle.js` は `index.html` から参照される唯一の JavaScript ファイルです。ウェブページに読み込まれる他のライブラリーはありません。

これは他のフレームワークからコンパイルされたバンドルよりも、はるかに小さなフットプリントです。コードバンドルの場合、ダウンロードしなければならないファイルのサイズだけが重要ではないことを考慮してください。`bundle.js` は解析され、実行され、メモリー内に保持される必要がある実行可能なコードです。したがって特に低消費電力の機器や CPU に負荷のかかるアプリケーションではこれが大きな違いを生みます。

## このチュートリアルを行う

このチュートリアルシリーズでは完全なウェブアプリケーションを構築していきます。Svelte についての全ての基本を学び、さらに高度なトピックスもいくつか学習します。

内容をしっかりと読むだけでも Svelte の機能を十分に理解することができますが、一緒にアプリをコーディングしながら進めていくと、このチュートリアルを最大限に活用することができます。記事を読み進めやすいように、各チュートリアルの冒頭にはアプリのソースコードを含むフォルダーを GitHub リポジトリーとして提供しています。

また Svelte はオンライン REPL を提供しており、これはマシンに何もインストールせずにウェブ上で Svelte アプリをライブコーディングするためのプレイグラウンドです。各記事には REPL が用意されているので、すぐにコーディングに取り掛かることができます。これらツールの使い方をもう少し詳しく説明しましょう。

### Git の活用

最も一般的なバージョン管理システムは Git であり、 GitHub はリポジトリーのホスティングとそれらを操作するためのいくつかのツールを提供するサイトです。

各記事のソースコードを簡単にダウンロードできるよう、GitHub を活用します。行き詰まった場合に備えて、記事を読み終えると完成するコードを取得できるようになっています。

[Git をインストール](https://git-scm.com/downloads)した後、リポジトリーのクローンを作成するために以下を実行します。

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

そして各記事の冒頭で、以下のように対応するフォルダーに `cd` してからアプリを開発モードで起動すると現在の状態がどのようになっているのかが確認できます。

```bash
cd 02-starting-our-todo-app
npm install
npm run dev
```

Git と GitHub について詳しく知りたい場合は、有益なガイドへのリンクがまとめられている [Git と GitHub](/ja/docs/Learn/Tools_and_testing/GitHub) を参照してください。

> **メモ:** Git リポジトリーをクローンせずにファイルだけをダウンロードしたい場合は、`npx degit opensas/mdn-svelte-tutorial` のように degit ツールを使うことができます。`npx degit opensas/mdn-svelte-tutorial/01-getting-started` で特定のフォルダーをダウンロードすることもできます。degit はローカルの git リポジトリーを作成せずに指定したフォルダーのファイルだけをダウンロードします。

### Svelte REPL の活用

REPL ([Read-Eval-Print Loop](https://ja.wikipedia.org/wiki/REPL)) とはコマンドを入力してすぐに結果を確認できるインタラクティブな環境のことで、多くのプログラミング言語が REPL を提供しています。

ただ Svelte の REPL はそれ以上のものです。完全なアプリの作成、オンラインでの保存、他の人々との共有ができるオンラインツールです。

何もインストールする必要はなく、どのマシンからでも Svelte を試すことができる最も簡単な方法です。また、Svelte のコミュニティでも広く利用されています。アイデアを共有したり、助けを求めたり、問題を報告したりする場合、それらの事柄を実演する REPL インスタンスを作成することはどのような時でも非常に役立ちます。

それでは Svelte REPL とその使い方を簡単に見てみましょう。以下のようになります。

![動作中の Svelte REPL、それぞれ左側に表示されるのがコンポーネントコード、右側が出力結果](03-svelte-repl-in-action.png)

REPL を使い始めるには、ブラウザーを開いて <https://svelte.dev/repl> に移動します。

- 画面の左側にはコンポーネントのコードが表示され、右側にはアプリの実行中の出力が表示されます。
- コードの上にあるバーで `.svelte` と `.js` のファイルの作成や並べ替えができます。フォルダー内にファイルを作成する場合は、`components/MyComponent.svelte` のように完全なパス名を指定してください。そうすることで自動的にフォルダーが作成されます。
- そのバーの上には REPL のタイトルがあります。これはクリックすることで編集が可能です。
- 右側には下記 3 つのタブがあります。

  - _Result_ タブにはアプリの出力が表示され、下部にはコンソールが用意されています。
  - _JS output_ タブでは Svelte が生成した JavaScript コードの検査とコンパイラーオプションの設定ができます。
  - _CSS output_ タブには Svelte によって生成された CSS が表示されます。

- タブの上には、フルスクリーンモードにしたり、アプリをダウンロードしたりするためのツールバーがあります。GitHub のアカウントでログインすると、アプリをフォークして保存することもできるようになります。また GitHub のユーザープロフィールをクリックして _Your saved apps_ を選択すると、保存した全ての REPL を確認することができます。

REPL 上のファイルを変更するたびに Svelte はアプリを再コンパイルして Result タブを更新します。アプリを共有したい時は URL を共有してください。例えば、このチュートリアルシリーズの完成版アプリを実行している REPL へのリンクは <https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2> です。

> **メモ:** URL で Svelte のバージョンを指定できることに注目してください。これは Svelte の特定のバージョンに関連する問題を報告する際に役立ちます。

各記事の最初と最後に REPL を提供しているため、すぐにでもコーディングを開始することができます。

> **メモ:** 現在のところ、REPL はフォルダー名を正しく扱えません。もし REPL 上でチュートリアルを行っている場合は、ルートフォルダー内に全てのコンポーネントを作成してください。例えばコード中に `import Todos from './components/Todos.svelte'` などのパスを見つけたら、 `import Todos from './Todos.svelte'` などのフラットな URL に置き換えるだけです。

## これまでのコード

### Git

まだ行っていない場合は、GitHub リポジトリーをクローンします。

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

次に、現段階のアプリを取得するためには以下を実行します。

```bash
cd mdn-svelte-tutorial/01-getting-started
```

もしくはフォルダーのコンテンツを直接ダウンロードします。

```bash
npx degit opensas/mdn-svelte-tutorial/01-getting-started
```

`npm install && npm run dev` を実行して、アプリを開発モードで起動することを忘れないでください。

### REPL

チュートリアルを読みながら REPL でコードを書くには、下記のリンクを使ってください。

<https://svelte.dev/repl/fc68b4f059d34b9c84fa042d1cce586c?version=3.23.2>

## まとめ

ローカルにインストールする方法、スターターアプリを作成する方法、基本的な動作など、Svelte について最初の紹介はこれで終わりです。次の記事では初めてのアプリケーションとなる todo リストの作成を開始します。ですが、その前にこれまでに学んだことをいくつか復習しておきましょう。

Svelte の基礎知識:

- 各コンポーネントのスクリプト、スタイル、およびマークアップを 1 つの `.svelte` ファイルで定義します。
- コンポーネントの props は `export` キーワードで宣言されます。
- Svelte コンポーネントは対応する `.svelte` ファイルをインポートするだけで使用することができます。
- コンポーネントのスタイルはスコープが設定されており、お互いに衝突することがないようになっています。
- マークアップセクションでは中括弧で囲むことにより、任意の JavaScript を含めることができます。
- コンポーネントのトップレベルで宣言された変数が、状態の構成要素となります。
- トップレベルの変数に新しい値を代入するだけでリアクティビティが発動します。

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

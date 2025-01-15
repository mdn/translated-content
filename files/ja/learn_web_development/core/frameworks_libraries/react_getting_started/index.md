---
title: React を始める
slug: Learn_web_development/Core/Frameworks_libraries/React_getting_started
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Main_features","Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}

この記事では React のはじめかたを説明します。 React の背景と使い方について説明し、ローカル環境で基本的な React ツールチェーンを設定します。また、シンプルな基本アプリを作成して、React がどのようなプロセスで機能するのかを学んでいきます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        コアの <a href="/ja/docs/Learn_web_development/Core/Structuring_content">HTML</a>、
        <a href="/ja/docs/Learn_web_development/Core/Styling_basics">CSS</a>、
        <a href="/ja/docs/Learn_web_development/Core/Scripting">JavaScript</a> 言語、<a href="/ja/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">端末/コマンドライン</a>が分かっていること。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
          React の開発環境をローカルに設定し、アプリを作成して、これがどのように動作するのかの基本を理解すること。
      </td>
    </tr>
  </tbody>
</table>

## React の基礎

公式のキャッチフレーズにあるように、 [React](https://ja.react.dev/) はユーザーインターフェイスを構築するためのライブラリーです。 React はフレームワークではなく、ウェブに限定されるものでもありません。他のライブラリーと共に使用して、特定の環境にレンダリングします。たとえば、 [React Native](https://reactnative.dev/) はモバイルアプリケーションの構築に使用できます。

ウェブ向けに構築するには、開発者は [ReactDOM](https://ja.react.dev/reference/react-dom) と連携して React を使用します。React と ReactDOM は、他の本当のウェブ開発フレームワークと同じ土台で頻繫に議論され、同じような問題を解決するために用いられます。React を「フレームワーク」と呼ぶとき、それは口語的な理解として扱います。

React が目指すところは、開発者が UI を構築しているときに発生するバグを最小限に抑えることです。これは、コンポーネント（ユーザーインターフェイスの一部を記述する自己完結型の論理的なコード）を使用して行われます。これらのコンポーネントを組み合わせて完全な UI を作成でき、 React はレンダリング作業の大部分を抽象化して、UI デザインに集中できるようにします。

## 用途

このモジュールで取り上げられている他のフレームワークとは異なり、 React はコード規則やファイル編成に関する厳密なルールを適用しません。これにより、チームは自分に最適な規則を設定し、 React を好きなように採用することができます。 React は、単一のボタン、一部のインターフェイス、またはアプリのユーザーインターフェイス全体を処理できます。

React は[インターフェイスの一部](https://ja.react.dev/learn/add-react-to-an-existing-project)に適用することが _できます_ が、jQuery のようなライブラリーや Vue のようなフレームワークほどアプリケーションに「ドロップ」するのは簡単ではありません。React でアプリ全体を構築するのに適しています。

さらに、JSX のインターフェイスの作成など、React アプリの開発者体験にはコンパイルプロセスが必要とします。Babel のようなコンパイラーをウェブサイトに追加すると、コードの実行が遅くなるため、開発者はビルドステップでそのようなツールをセットアップすることがよくあります。間違いなく React には厳しいツール要件がありますが、学習することはできます。

この記事では、現行のフロントエンドビルドツールである [Vite](https://vite.dev/) に対応し、アプリケーションのユーザーインターフェイス全体をレンダリングするために React を使用する用途に焦点を当てます。

## React における JavaScript の書き方

React は、そのパターンの多くに最新の JavaScript の機能を利用しています。 JavaScript からの最大の違いは、 [JSX](https://ja.react.dev/learn/writing-markup-with-jsx) 構文を使うことです。 JSX は JavaScript の構文を拡張して、HTML のようにコードを書くことができます。例えば次のようになります。

```jsx
const heading = <h1>Mozilla Developer Network</h1>;
```

この定数 heading は、 **JSX 式**と呼ばれます。 React はこのように [`<h1>`](/ja/docs/Web/HTML/Element/Heading_Elements) タグをレンダリングすることができます。

意味論の観点から、 [`<header>`](/ja/docs/Web/HTML/Element/header) タグで見出しを囲みたいとします。JSX では、 HTML のように、要素を相互にネストすることができます。

```jsx
const header = (
  <header>
    <h1>Mozilla Developer Network</h1>
  </header>
);
```

> [!NOTE]
> このスニペットの括弧は JSX に固有のものではなく、あなたのアプリケーションに影響を与えません。それらは、あなた（またあなたのコンピューター）にとって、内部の複数行のコードが同じ式の一部であるという意味です。次のように header を定義することもできます。
>
> ```jsx-nolint
> const header = <header>
>   <h1>Mozilla Developer Network</h1>
> </header>;
> ```
>
> ただし、[`<header>`](/ja/docs/Web/HTML/Element/header) 式を開始するタグが、対応する終了タグと同じ位置にインデントされていないため、これは少し読みにくいかもしれません。

もちろん、ブラウザーはそのままでは JSX を読むことができません。（[Babel](https://babeljs.io/) や [Parcel](https://parceljs.org/) などのツールを使用して）コンパイルすると、ヘッダー式は次のようになります。

```jsx
const header = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Mozilla Developer Network"),
);
```

コンパイルステップとコンパイル自体をスキップし、 [`React.createElement()`](https://ja.react.dev/reference/react/createElement) を使って、独自の UI を自分で書くことができます。ただし、こうすると JSX の宣言的なメリットが失われ、コードが読みにくくなってしまいます。コンパイルは開発プロセスとは別のステップですが、 React コミュニティの多くの開発者は、JSX の読みやすさに価値があると考えています。さらに、現代のフロントエンド開発は常にビルドプロセスを伴います。古いブラウザーとの互換性を保つために現代の構文をダウンレベルしなければなりませんし、読み込みパフォーマンスを最適化するためにコードを[ミニファイ](/ja/docs/Glossary/Minification)したくなることがあります。 Babel のような人気のあるツールはすでに JSX 対応をしているので、コンパイラーを自分で設定する必要はありません。

JSX は HTML と JavaScript の混合であるため、直感的に使えると考える開発者もいます。一方で、その混合性により混乱を招くという意見もあります。しかし、慣れてしまえば、ユーザーインターフェイスをより直感的にすばやく構築でき、他の人にもコードベースを一目で理解してもらえるようになります。

JSX の詳細については、React チームの [JSX でマークアップを記述する](https://ja.react.dev/learn/writing-markup-with-jsx)の記事をご覧ください。

## 最初の React アプリをセットアップする

新しい React アプリケーションを作成する方法はたくさんあります。今回は Vite を使用してコマンドラインから新しいアプリケーションを作成します。

[既存のプロジェクトに React を追加する](https://ja.react.dev/learn/add-react-to-an-existing-project)には、いくつかの [`<script>`](/ja/docs/Web/HTML/Element/script) を HTML ファイルにコピーすることで可能ですが、 Vite を使用することで、より多くの時間をアプリの構築に費やすことができ、セットアップに費やす時間を減らすことができます。

### 必要条件

Vite を使用するには、[Node.js](https://nodejs.org/en/) がインストールされている必要があります。Vite 5.0 の時点では、少なくとも Node のバージョン18以降が要求されており、できる限り最新の長期サポート (LTS) バージョンを実行するのがよい考えです。2023 年 10 月 24 日現在、ノード 20 が最新の LTS バージョンです。Node には npm（Node パッケージマネージャ）が含まれています。

Node のバージョンを調べるには、端末で以下を実行してください。

```bash
node -v
```

ノードがインストールされていれば、バージョン番号が表示されます。インストールされていない場合は、エラーメッセージが表示されます。Node をインストールするには、 [Node.js のウェブサイト](https://nodejs.org/en/)の指示に従ってください。

npm の代替として Yarn パッケージマネージャを使用することもできますが、この一連のチュートリアルでは npm を使用していることを想定します。npm と yarn の詳細情報は[パッケージ管理の基本](/ja/docs/Learn_web_development/Extensions/Client-side_tools/Package_management)を参照してください。

Windows を使用している場合、このチュートリアルで言及されている端末コマンドを使用するには、Unix / macOS 端末と同等のソフトウェアをインストールする必要があります。 **Gitbash** （[git for Windows のツールセット](https://gitforwindows.org/)の一部として提供）または **[Linux 用の Windows サブシステム](https://learn.microsoft.com/windows/wsl/about)** (**WSL**) の両方が適しています。これら、および一般的な端末コマンドの詳細については、[コマンドライン短期集中講座](/ja/docs/Learn_web_development/Getting_started/Environment_setup/Command_line)を参照してください。

また、このチュートリアルを読み終えて作業する際には、React と ReactDOM は Firefox、Microsoft Edge、Safari、Chrome のようなかなり新しいブラウザーでなければ動作しないアプリを作成することも念頭に置いてください。

詳細については、以下も参照してください。

- ["About npm" on the npm blog](https://docs.npmjs.com/about-npm/)
- ["Introducing npx" on the npm blog](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner)
- [Vite's documentation](https://vite.dev/guide/)

### アプリの初期化

npm パッケージマネージャには、テンプレートから新しい自分のプロジェクトを作成するための `create` コマンドあります。Vite の標準 React テンプレートから新しいアプリを作成するために使用することができます。アプリを所有する場所に `cd` してから、端末で以下を実行してください。

```bash
npm create vite@latest moz-todo-react -- --template react
```

これは `moz-todo-react` ディレクトリーを作成し、 Vite の `react` テンプレートを使用します。

> [!NOTE]
> npm コマンドに `create` などの引数を渡すには `--` が必要で、 `--template react` 引数は Vite に React テンプレートを使用するように指示します。

このコマンドが成功すると、端末にいくつかのメッセージが表示されます。新しいディレクトリーに `cd` し、アプリの依存関係をインストールし、アプリを実行するように促すテキストが表示されているはずです。2 つのコマンドから始めましょう。端末で以下を実行してください。

```bash
cd moz-todo-react && npm install
```

プロセスが完全に完了したら、アプリを実行するためにローカル開発サーバーを起動する必要があります。ここでは、サーバーが起動したらすぐにブラウザーでアプリを開き、Vite の既定の提案としてポート 3000 を使用するためのコマンドラインフラグを追加します。

端末で次のように実行します。

```bash
npm run dev -- --open --port 3000
```

サーバーが起動したら、 React アプリを格納した新しいブラウザータブが表示されるはずです。

![MacOS 版 Firefox で localhost:3000 を開いたスクリーンショット。Vite の React テンプレートから作成したアプリケーションを表示させています。](default-vite.png)

### アプリケーションの構造

Vite は React アプリケーションを開発するのに必要なものをすべて提供してくれます。初期のファイル構造はこのようになっています。

```plain
moz-todo-react
├── README.md
├── index.html
├── node_modules
├── package-lock.json
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   │   └── react.svg
│   ├── index.css
│   └── main.jsx
└── vite.config.js
```

**`index.html`** は最も重要な最上位のファイルです。 Vite はコードをこのファイルに注入し、ブラウザーが実行できるようにします。チュートリアル中にこのファイルを編集する必要はありませんが、このファイルの [`<title>`](/ja/docs/Web/HTML/Element/title) 要素内のテキストをアプリケーションのタイトルを反映するように変更してください。正確なページタイトルはアクセシビリティにとって重要です。

**`public`** ディレクトリーには、 Vite のビルドツールによって処理されることなく、ブラウザーに直接提供される静的ファイルが格納されます。これで、 Vite のロゴだけが格納されます。

**`src`** ディレクトリーにはアプリケーションのソースコードが格納されています。このディレクトリーにあるいくつかの JavaScript ファイルが `.jsx` という拡張子で終わっていることにお気づきでしょう。この拡張子は JSX を格納するファイルに必要で、JSX 構文をブラウザーが理解できる JavaScript に変換するように Vite に指示します。`src/assets` ディレクトリーには、ブラウザーで見た React のロゴが格納されています。

`package.json` ファイルと `package-lock.json` ファイルには、自分のプロジェクトに関するメタデータが格納されています。これらのファイルは React アプリケーション固有のものではありません。 Vite は `package.json` を作成し、npm はアプリの依存関係をインストールするときのために `package-lock.json` を作成しました。このチュートリアルを完了するために、これらのファイルを理解する必要はまったくありません。しかし、これらのファイルについて詳しく知りたい場合は、npm のドキュメントで [`package.json`](https://docs.npmjs.com/cli/v9/configuring-npm/package-json/) と [`package-lock.json`](https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json) について読むことができます。[パッケージ管理の基本](/ja/docs/Learn_web_development/Extensions/Client-side_tools/Package_management)チュートリアルでも `package.json` について説明しています。

### dev スクリプトのカスタマイズ

次に進む前に、`npm run dev` を実行するたびに `--open` と `--port` フラグを渡す必要がないようにしたいと思うかもしれません。エディターで `package.json` を開き、`scripts` オブジェクトを探します。`"dev"` キーを次のように変更してください：

```diff
- "dev": "vite",
+ "dev": "vite --open --port 3000",
```

この場所を所有することで、`npm run dev` を実行するたびにブラウザーに `http://localhost:3000` でアプリが開くようになります。

> [!NOTE]
> ここでは、定義済みの npm スクリプトではなく、直接 `vite` に引数を渡しているので、余分な `--` は必要ありません。

## 最初の React コンポーネント — `<App />` の探検

React では、**コンポーネント**はアプリケーション全体の一部をレンダリングする再利用可能なモジュールです。コンポーネントは大きくても小さくても構いませんが、通常は明確に定義されています。

ブラウザーが編集を促しているので、 `src/App.jsx` を開いてみましょう。このファイルには最初のコンポーネント `<App />` が格納されています。

```jsx
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://ja.react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
```

この `App.js` ファイルは 3 つの主要な部分で構成されています。上部にいくつかの宣言されている [`import`](/ja/docs/Web/JavaScript/Reference/Statements/import)、中央にある `App()` 関数、最下部にある [`export`](/ja/docs/Web/JavaScript/Reference/Statements/export) です。ほとんどの React コンポーネントはこのように書かれます。

### import 文

`import` はファイルの先頭に宣言され、`App.jsx` が他の場所で定義されているコードを使用するのを許可します。これらをさらに詳しく見てみましょう。

```jsx
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
```

最初の文は `react` ライブラリーから `useState` フックをインポートしています。フックは React の機能を部品内で使用する方法です。フックについてはこのチュートリアルの後半で詳しく説明します。

その後、 `reactLogo` と `viteLogo` をインポートします。インポートパスはそれぞれ `./` と `/` で始まり、最後に `.svg` という拡張子があることに注意してください。これは、これらのインポートがローカルであり、npm パッケージではなく自分自身でファイルを参照していることを指示しています。

最後の文は、`<App />` コンポーネント関連の CSS をインポートしています。変数名と `from` ディレクティブがないことに注意してください。これは[副作用インポート](/ja/docs/Web/JavaScript/Reference/Statements/import#副作用のためだけにモジュールをインポートする)と呼ばれ、JavaScript ファイルに値をインポートしませんが、参照する CSS ファイルを最終的なコード出力に追加し、ブラウザーで使用することができるように Vite に指示します。

### `App()` 関数

インポートの後、`App()` という名前付き関数があり、`App` コンポーネントの構造を定義しています。ほとんどの JavaScript コミュニティが{{Glossary("camel_case", "小文字のキャメルケース")}}（`helloWorld` など）の名前を推奨するのに対し、React コンポーネントは、指定された JSX 要素が React コンポーネントであり、通常の HTML タグではないことを明確にするために、`HelloWorld` のようなパスカルケース（または大文字キャメルケース）の変数名を使用します。もし `App()` 関数の名前を `app()` に変更すると、ブラウザーはエラーを発生するでしょう。

`App()` をもう少し詳しく見ていきましょう。

```jsx
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://ja.react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
```

この `App()` 関数は JSX 式を返します。この式には、ブラウザーが最終的に DOM にレンダリングするものを定義します。

`return` キーワードのすぐ下に、特別な構文 `<>` があります。これは[フラグメント](https://ja.react.dev/reference/react/Fragment)です。React コンポーネントは単一の JSX 要素を返す必要がありますが、フラグメントを使用することで、ブラウザーに任意の `<div>` をレンダリングせずにそれを行うことができます。多くの React アプリケーションでフラグメントを見かけるでしょう。

### `export` 文

`App()` 関数の後にもう少しコードがあります。

```jsx
export default App;
```

この export 文は `App()` 関数を他からも利用できるようにします。これについては後で詳しく説明します。

## `main` へ移動

`src/main.jsx` を開きましょう。`<App />` コンポーネントを使用しているのがわかります。このファイルはアプリのエントリーポイントであり、最初は次のようになっています。

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

`App.jsx` と同様に、ファイルは、実行する必要のあるすべての JS モジュールとその他の資産をインポートすることから始まります。

最初の 2 つの文は `React` および `ReactDOM` ライブラリーをインポートしています。これらのライブラリーはローカルファイルではないので、インポートする際にパスや拡張子は書きません。実際、これらのライブラリーは `package.json` ファイルに依存ファイルとして掲載されています。この区別に注意して、このレッスンを読み終えてください。

次に `App()` 関数と、アプリ全体に適用されるグローバルスタイル設定を保持する `index.css` をインポートします。

次に、アプリケーションのルートノードを定義する関数 `ReactDOM.createRoot()` を呼び出します。この関数は、React アプリをレンダリングする DOM 要素を引数として取ります。この場合、ID が `root` の DOM 要素です。最後に、`createRoot()` の呼び出しに `render()` メソッドを連結して、ルートの中にレンダリングしたい JSX 式を渡します。この JSX 式に `<App />` と書くことで、ルートノード内に `App` コンポーネントをレンダリングする `App()` 関数を呼び出すように React に指示しています。

> **メモ:** `<App />` は特別な `<React.StrictMode>` コンポーネント内でレンダリングされます。この部品は、開発者がコードの潜在的な問題を発見するのに役立ちます。

よろしければ、React API について以下の記事を読んでみてください。

- [`ReactDOM.createRoot()`](https://ja.react.dev/reference/react-dom/client/createRoot)
- [`React.StrictMode`](https://ja.react.dev/reference/react/StrictMode)

## 新しく始める

アプリを作り始めるには、Vite が指定された定型コードを削除する必要があります。

まず最初の練習として、 `App.jsx` の [`<h1>`](/ja/docs/Web/HTML/Element/Heading_Elements) 要素を "Hello, World!" となるように変更し、ファイルを保存しましょう。この変更は、ブラウザーで `http://localhost:3000` で実行している開発サーバーですぐにレンダリングされることがわかるでしょう。このことを念頭に置いてアプリを動作させてください。

残りのコードは使用しません。`App.jsx` の内容を以下のもので置き換えます。

```jsx
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>Hello, World!</h1>
      </header>
    </>
  );
}

export default App;
```

## JSX の練習

次に、JavaScript のスキルを使用して、React で JSX を書いたりデータを作業したりすることに少し慣れていきましょう。JSX 要素に属性を追加する方法、コメントの書き方、変数や他の要素からコンテンツをレンダリングする方法、props を使ってコンポーネントにデータを渡す方法について説明します。

### JSX 要素への属性の追加

JSX 要素には HTML 要素と同じように属性を設定することができます。以下のように、`App.jsx` ファイルの `<h1>` 要素の下記に `<button>` を追加してみてください。

```jsx
<button type="button">Click me!</button>
```

ファイルを保存すると、`Click me!` このボタンはまだ何らかの動作をするわけではありませんが、アプリに対話する機能を追加する方法についてはすぐに学びます。

いくつかの属性は HTML とは異なります。例えば、HTML では `class` 属性は JSX では `className` に対応させます。これは `class` が JavaScript で予約語であり、JSX が JavaScript の拡張機能であるためです。もしボタンに `primary` クラスを追加したい場合、次のように書けばいいでしょう。

```jsx
<button type="button" className="primary">
  Click me!
</button>
```

### コンテンツとしての JavaScript 式

HTML とは異なり、JSX では変数や JavaScript の式を他のコンテンツと横に並べて書くことができます。`App()` 関数のすぐ上に `subject` と呼ばれる変数を宣言してみましょう。

```jsx
const subject = "React";
function App() {
  // 簡略化のためコード省略
}
```

次に、`<h1>` 要素内の "World" を `{subject}` に置き換えます。

```jsx
<h1>Hello, {subject}!</h1>
```

ファイルを保存して、ブラウザーでチェックしてください。"Hello, React!" とレンダリングされているはずです。

`subject` を囲む中括弧は、JSX の構文のもう一つの機能です。中括弧は、文字列 `"subject"` をレンダリングするのではなく、変数 `subject` の値を読み込みたいことを React に指示します。JSX で中括弧の中に何か有効な JavaScript の式を書くことができます。 React はそれを評価し、最終的なコンテンツとして式の結果をレンダリングします。以下は次の例で、それぞれの式が何をレンダリングするかをコメントで説明しています。

```jsx-nolint
{/* Hello, React :)! */}
<h1>Hello, {subject + ' :)'}!</h1>
{/* Hello, REACT */}
<h1>Hello, {subject.toUpperCase()}</h1>
{/* Hello, 4! */}
<h1>Hello, {2 + 2}!</h1>
```

JSX のコメントも中括弧の中に書きます。コメントも技術的には JavaScript の式だからです。 `/* ブロックコメント構文 */` は、プログラムがコメントの始まりと終わりを知るために必要です。

### コンポーネントの props

**props** とは、React コンポーネントに渡されるデータのことです。 React の props は HTML の属性に相当します。 HTML 要素が属性を持つのに対し、 React コンポーネントは props を持ちます。 props はコンポーネント呼び出しの中に記述され、 HTML の属性と同じ構文 `prop="value"` を使用します。

React では、データフローは一方向です。 props は親コンポーネントから子コンポーネントにのみ渡すことができます。また props は読み取り専用です。

`main.jsx`を開き、`<App />` に最初の props を渡しましょう。

`<App/>` コンポーネントに `subject` という props を追加して、値は `Clarice` とします。完了すると、コードは次のようになります。

```jsx
<App subject="Clarice" />
```

`App.jsx` に戻って、`App()` 関数をもう一度見てみましょう。`App()` のシグネチャを変更して `props` を引数として受け入れられるようにし、`props` をコンソールにログ出力して検査できるようにします。また、`subject` 定数も削除してください。あなたの `App.jsx` ファイルはこのようになっているはずです。

```jsx
function App(props) {
  console.log(props);
  return (
  // 簡略化のためコード省略
  );
}
```

ファイルを保存し、ブラウザーで調べてください。何もコンテンツがない空白の背景が見えるでしょう。これは、もう定義されていない `subject` 変数を読み込もうとしているためです。`<h1>Hello {subject}!</h1>` の行をコメントアウトすることで修正されます。

> [!NOTE]
> コードエディターが JSX の構文解析方法を理解している場合（最近のエディターはほとんどが理解しています）、内蔵のコメントショートカット `Ctrl + /`（Windows の場合）または `Cmd + /`（macOS の場合）を使用して、すばやくコメントを作成することができます。

その行をコメントアウトしてファイルを保存してください。
今度は、"Click me!" ボタンが表示されるはずです。ブラウザーの開発者コンソールを開くための、次のようなメッセージが表示されます。

```plain
Object { subject: "Clarice" }
```

オブジェクトプロパティ `subject` は、`<App />` コンポーネント呼び出しに追加した `subject` プロパティに対応し、文字列 `Clarice` はその値に対応します。 React のコンポーネントの props は、常にこのようにオブジェクトに集約されます。

この `subject` prop を使用して、アプリのエラーを修正してみましょう。 `<h1>Hello,{subject}!</h1>` の行のコメントを解除して、 `<h1>Hello,{props.subject}!</h1>` に変更し、 `console.log()` 文を削除します。コードはこのようになっているはずです。

```jsx
function App(props) {
  return (
    <>
      <header>
        <h1>Hello, {props.subject}!</h1>
        <button type="button" className="primary">
          Click me!
        </button>
      </header>
    </>
  );
}
```

保存すると、アプリは "Hello, Clarice!" と挨拶するはずです。 `main.jsx` に戻り、`subject` の値を編集して保存すると、テキストが変更されます。

追加の練習として、 `greeting` prop を `main.jsx` 内の `<App />` コンポーネントの呼び出しに、追加し、それを `App.jsx` 内の `subject` プロパティの横に並んだ状態で使用してみることもできます。

## まとめ

これで、 React をローカルでインストールする方法、スターターアプリを作成する方法、基本的にどのように機能するかなど、 React の入門が終わりました。次の記事では、最初に適したアプリケーションである todo リストの作成を開始します。ただし、その前に、私たちが学んだことのいくつかをおさらいしましょう。

React では:

- コンポーネントは必要なモジュールをインポートでき、ファイルの下部でエクスポートする必要があります。
- コンポーネント関数は `PascalCase` で名前が付けられます。
- JSX 内では、JavaScript 式を `{so}` のように中括弧で囲むことで出力することができます。
- 一部の JSX 属性は HTML 属性とは異なるため、JavaScript の予約語と競合しません。例えば `class`、HTML では `className` JSX に変換されます。
- props は、コンポーネント呼び出し内の属性と同じように記述され、コンポーネントに渡されます。

## 関連情報

- [Learn React](https://v2.scrimba.com/learn-react-c0e?via=mdn) <sup>_MDN カリキュラムパートナー_</sup>
  - : [Scrimba's](https://scrimba.com?via=mdn) _Learn React_ コースは、 React の初心者にとって完璧な出発点ととなる究極の React 101 です。 140 以上の対話式のコード課題を解き、 8 つの楽しいプロジェクトを構築することで、現行の React の基本を学ぶことができます。

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Main_features","Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}

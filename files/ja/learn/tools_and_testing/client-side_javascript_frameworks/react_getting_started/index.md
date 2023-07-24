---
title: Reactをはじめる
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

この記事では React のはじめかたを説明します。React の背景と使い方について説明し、ローカル環境で基本的な React ツールチェーンを設定します。また、シンプルな基本アプリを作成して、React がどのようなプロセスで機能するのかを学んでいきます。

| 前提条件: | [HTML](/ja/docs/Learn/HTML)、[CSS](/ja/docs/Learn/CSS)、[JavaScript](/ja/docs/Learn/JavaScript) に精通していること、[ターミナル/コマンドライン](/ja/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line)に関する知識があること。React は JSX (JavaScript と XML) と呼ばれる HTML-in-JavaScript を使用します。HTML と JavaScript の両方に精通していると、JSX の学習に役立ち、アプリケーションのバグが JavaScript に関連しているか、React のより具体的なドメインに関連しているかを特定するのに役立つます。 |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 目的:     | ローカルの React 開発環境をセットアップし、開始アプリを作成して、それがどのように機能するかの基本を理解する                                                                                                                                                                                                                                                                                                                                                                                                                    |

## React の基礎

公式のキャッチフレーズにあるように、[React](https://reactjs.org/) はユーザーインターフェイスを構築するためのライブラリーです。React はフレームワークではなく、ウェブに限定されるものでもありません。他のライブラリーと共に使用して、特定の環境にレンダリングしますます。たとえば、[React Native](https://reactnative.dev/) はモバイルアプリケーションの構築に使用できます。[React 360](https://facebook.github.io/react-360/) を使用して、仮想現実アプリケーションを構築できます。他にも可能性があります。

ウェブ向けに構築するには、開発者は [ReactDOM](https://reactjs.org/docs/react-dom.html) と連携して React を使用します。React と ReactDOM は、他の本当のウェブ開発フレームワークと同じ土台で頻繫に議論され、同じような問題を解決するために用いられます。しかし React を「フレームワーク」と呼ぶとき、私たちはその口語的な理解に別途でいます。

React が目指すところは、開発者が UI を構築しているときに発生するバグを最小限に抑えることです。これは、コンポーネント (ユーザーインターフェイスの一部を記述する自己完結型の論理的なコード) を使用して行われます。これらのコンポーネントを組み合わせて完全な UI を作成でき、React はレンダリング作業の大部分を抽象化して、UI デザインに集中できるようにします。

## ユースケース

このモジュールで取り上げられている他のフレームワークとは異なり、React はコード規則やファイル編成に関する厳密なルールを適用しません。これにより、チームは自分に最適な規則を設定し、React を好きなように採用することができます。React は、単一のボタン、一部のインターフェース、またはアプリのユーザーインターフェース全体を処理できます。

React は[インターフェイスの一部](https://reactjs.org/docs/add-react-to-a-website.html)に適用することが _できます_ が、jQuery のようなライブラリーや Vue のようなフレームワークほどアプリケーションに「ドロップ」するのは簡単ではありません。React でアプリ全体を構築するのに適しています。

さらに、JSX のインターフェースの作成など、React アプリの開発者体験にはコンパイルプロセスが必要とします。Babel のようなコンパイラーをウェブサイトに追加すると、コードの実行が遅くなるため、開発者はビルドステップでそのようなツールをセットアップすることがよくあります。間違いなく React には厳しいツール要件がありますが、学習することはできます。

この記事では、Facebook 独自の [create-react-app](https://create-react-app.dev/) を使って、アプリケーションのインターフェイスを構築していきます。

## React における JavaScript の書き方

React は、そのパターンの多くに最新の JavaScript の機能を利用しています。JavaScript からの最大の違いは、[JSX](https://reactjs.org/docs/introducing-jsx.html) 構文を使うことです。JSX は JavaScript の構文を拡張して、HTML のようにコードを書くことができます。例えば:

```js
const heading = <h1>Mozilla Developer Network </h1>;
```

この定数 heading は、**JSX 式**と呼ばれます。React はこのように [`<h1>`](/ja/docs/Web/HTML/Element/Heading_Elements) タグをレンダリングすることができます。

セマンティックの観点で、 [`<header>`](/ja/docs/Web/HTML/Element/header) タグで、見出しを囲みたいとします。JSX では、HTML のように、要素を相互にネストできます。

```
const header = (
  <header>
    <h1>Mozilla Developer Network</h1>
  </header>
);
```

> **メモ:** このスニペットの括弧は JSX に固有のものではなく、あなたのアプリケーションに影響を与えません。それらは、あなた (またあなたのコンピューター) にとって、内部の複数行のコードが同じ式の一部であるという意味です。次のように header を定義することもできます。
>
> ```
> const header = <header>
>     <h1>Mozilla Developer Network</h1>
> </header>
> ```
>
> ただし、[`<header>`](/ja/docs/Web/HTML/Element/header) 式を開始するタグが、対応する終了タグと同じ位置にインデントされていないため、これは少し読みにくいかもしれません。

もちろん、あなたのブラウザーはそのままでは JSX を読むことができません。([Babel](https://babeljs.io/) や [Parcel](https://parceljs.org/) などのツールを使用して) コンパイルすると、ヘッダー式は次のようになります。

```js
const header = React.createElement("header"、null、
  React.createElement("h1"、null、 "Mozilla Developer Network")
);
```

コンパイルステップとコンパイル自体をスキップし、[`React.createElement()`](https://reactjs.org/docs/react-api.html#createelement) を使って、独自の UI を自分で書くこと。ただし、こうすると JSX の宣言的なメリットが失われ、コードが読みにくくなってしまいます。コンパイルは開発プロセスとは別のステップですが、React コミュニティの多くの開発者は、JSX の読みやすさに価値があると考えています。さらに、外部ツールにより、JSX から JavaScript へのコンパイルがセットアッププロセスの一部になります。特段の必要がない限り、コンパイルを自分の手で行う必要はありません。

JSX は HTML と JavaScript がミックスされたものなので、一部の開発者にとっては直感的に使うことができます。しかしそうでない人にとってはは、そのミックスされていることで混乱させられると言います。ただし、慣れれば、ユーザーインターフェースをより迅速かつ直感的に構築できるようになり、他の人がコードを一目で理解しやすくなります。

JSX の詳細については、React チームの [JSX In Depth](https://reactjs.org/docs/jsx-in-depth.html) の記事をご覧ください。

## 最初の React アプリをセットアップする

React を使用する方法はたくさんありますが、前述のように、コマンドラインインターフェイス (CLI) ツールの create-react-app を使用します。これにより、いくつかのパッケージをインストールしていくつかを作成することにより、React アプリケーションの開発プロセスをスムーズにします。

[`<script>`](/ja/docs/Web/HTML/Element/script) を HTML ファイルにコピーすることで [create-react-app なしでウェブサイトに　 React を追加する](https://reactjs.org/docs/add-react-to-a-website.html)ことは可能ですが、create-react-app CLI 　は、React 　アプリケーションの一般的な始め方です。これを使うことで、アプリの作成に集中でき、セットアップに煩わされなくなります。

### 必要条件

create-react-app を使用するには、[Node.js](https://nodejs.org/en/) をインストールする必要があります。長期サポート (LTS) バージョンを使用することをお勧めします。ノードには、npm (ノードパッケージマネージャー) および npx (ノードパッケージランナー) が含まれます。

代わりに Yarn パッケージマネージャーを使用することもできますが、この一連のチュートリアルでは npm を使用するものとします。npm と yarn の詳細については、[パッケージ管理の基本](/ja/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management)を参照してください。

Windows を使用している場合、このチュートリアルで言及されている端末コマンドを使用するには、Unix / macOS 端末と同等のソフトウェアをインストールする必要があります。**Gitbash** ([Windows 用](https://gitforwindows.org/)の [git ツールセットの](https://gitforwindows.org/)一部として提供) または **[Linux 用の Windows サブシステム](https://docs.microsoft.com/en-us/windows/wsl/about)** (**WSL**) の両方が適しています。これら、および一般的な端末コマンドの詳細については、[コマンドラインクラッシュコース](/ja/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line)を参照してください。

また、React と ReactDOM は、かなり近代的な一連のブラウザー (IE9 以降) でのみ機能するアプリを生成することにも注意してください。これらのチュートリアルを実行するときは、Firefox、Safari、Chrome などの最新のブラウザーを使用することをお勧めします。

詳細については、以下も参照してください。

- [nodejs.org の「npm とは」](https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/)
- [npm ブログの「npx の紹介」](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner)
- [create-react-app のドキュメント](https://create-react-app.dev/)

### アプリの初期化

create-react-app は引数を 1 つ取ります。アプリに付ける名前です。create-react-app はこの名前を使用して新しいディレクトリーを作成し、その中に必要なファイルを作成します。`cd` でアプリのハードドライブ上の場所に移動したことを確認してから、ターミナルで次のコマンドを実行します。

```bash
npx create-react-app moz-todo-react
```

これは `moz-todo-react` ディレクトリーを作成し、その中でいくつかのことを行います:

- アプリの機能に不可欠な npm パッケージをインストールします。
- アプリケーションを起動および提供するためのスクリプトを記述します。
- 基本的なアプリアーキテクチャを定義するファイルとディレクトリーの構造を作成します。
- コンピュータに git がインストールされている場合、ディレクトリーを git リポジトリーとして初期化します。

> **メモ:** Yarn パッケージマネージャーがインストールされている場合、create-react-app はデフォルトで npm の代わりにそれを使用します。両方のパッケージマネージャーがインストールされていて、明示的に NPM を使用したい場合、create-react-app を実行するときに `--use-npm` フラグを追加できます。
>
> ```bash
> npx create-react-app moz-todo-react --use-npm
> ```

create-react-app が機能している間、端末にいくつかのメッセージが表示されますが、正常な動作です！これには数分かかる場合がありますので、お茶でも作って待ってみましょう。

プロセスが完了したら、`moz-todo-react`ディレクトリーへ `cd` して、コマンド `npm start` を実行します。create-react-app によってインストールされたスクリプトは、localhost:3000 のローカルサーバーで提供され始め、新しいブラウザータブでアプリを開きます。ブラウザーには次のように表示されます。

![デフォルトのcreate-react-app アプリケーションを示す、Firefox MacOS のスクリーンショット、localhost:3000を開く](default-create-react-app.png)

### アプリケーションの構造

create-react-app は、React アプリケーションの開発に必要なすべてのものを提供します。初期のファイル構造は次のようになります。

```
moz-todo-react
├──README.md
├──node_modules
├──package.json
├──package-lock.json
├──.gitignore
├──public
│├──favicon.ico
│├──index.html
│└──manifest.json
└──src
    ├──App.css
    ├──App.js
    ├──App.test.js
    ├──index.css
    ├──index.js
    ├──logo.svg
    └──serviceWorker.js
```

**`src`** ディレクトリーはアプリケーションの実態ともいえるソースことがある場所で、私たちが触るのは主にこの部分です。

**`public`** ディレクトリーには、アプリを開発している間、ブラウザーによって読み込まれるファイルが含まれています。これらの中で最も重要なのは `index.html` です。React はこのファイルにコードを挿入して、ブラウザーで実行できるようにします。create-react-app 関数に役立つマークアップが他にもいくつかあるので、何をしているのかを理解していなければ、自分で編集しないように注意してください。このファイルの要素内の [`<title>`](/ja/docs/Web/HTML/Element/title) を変更して、アプリケーション自体のタイトルを反映させる必要があります。アクセシビリティ向上のためには正しいページタイトルが重要です。

`public` ディレクトリーは、アプリをビルドしてデプロイするときにも公開されます。このチュートリアルではデプロイ自体については説明しませんが、[アプリのデプロイ](/ja/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Deployment)チュートリアルで説明されているものと同様のソリューションを使用できるはずです。

この`package.json` ファイルには、Node.js / npm がプロジェクトを整理するために使用するプロジェクトに関する情報が含まれています。このファイルは React アプリケーションに固有のものではありません。create-react-app は単にそれを生成します。このチュートリアルを完了するためにこのファイルを理解する必要はまったくありませんが、詳しく知りたい場合は[「package.json ファイルとは」](https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/)を参照してください。

## 最初の React コンポーネント— `<App/>`

React における、**コンポーネント**とはアプリの一部をレンダリングする再利用可能なモジュールを指します。これらのパーツは大きくても小さくてもかまいませんが、通常は明確に定義され、単一責務のもとに作られます。

ブラウザーに表示されているように、`src/App.js` を開いて編集しましょう。このファイルには、最初のコンポーネント、`App`、その他の数行のコードが含まれています。

```
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;
```

この `App.js` ファイルは 3 つの主要な部分で構成されています。上部にいくつかの宣言されている [`import`](/ja/docs/Web/JavaScript/Reference/Statements/import)、中央にある `App`、最下部にある [`export`](/ja/docs/Web/JavaScript/Reference/Statements/export)。ほとんどの React コンポーネントはこのように書かれます。

### ステートメントをインポートする

`import` はファイルの先頭に宣言され、`App.js` が他の場所で定義されているコードを使用するのを許可します。これらをさらに詳しく見てみましょう。

```
import React from 'react';
import logo from './logo.svg';
import './App.css';
```

最初のステートメントは、React ライブラリー自体をインポートします。React は、作成する JSX を `React.createElement()` に変換するため、すべての React コンポーネントが `React` モジュールをインポートする必要があります。この手順をスキップすると、アプリケーションでエラーが発生します。

2 番目のステートメントは、`'./logo.svg'` をインポートします。最初の `./` パスのと最後の拡張子 `.svg` に注意してください。これらはファイルがローカルであり、JavaScript ファイルではないことを示しています。実際、`logo.svg` ファイルは `src/` ディレクトリーにあります。

`React` モジュールのインポート時にパスや拡張子は記述しません—これはローカルファイルではないからです。代わりに、`package.json` ファイルに依存関係としてリストされます。このレッスンでは、この違いに注意してください。

3 番目のステートメントは、App コンポーネントに関連する CSS をインポートします。変数名も `from` ディレクティブもないことに注意してください。この特定のインポート構文は、JavaScript モジュール構文に特有のものではありません。Webpack から提供されるものです。create-react-app ツールは、すべての JavaScript ファイルをバンドルしてブラウザーに提供するために使用します。

### `App` コンポーネント

`import` の次に、`App` という名前の関数があります。ほとんどの JavaScript コミュニティは`helloWorld` のようなキャメルケース名を好みますが、React コンポーネントは `HelloWorld` のようなパスカルケース変数名を使用して、特定の JSX 要素が React コンポーネントであり、通常の HTML タグではないことを明確にしています。`App` 関数の名前を `app` に変更すると、ブラウザーにエラーが表示されます。

アプリをもっと詳しく見てみましょう。

```
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
```

この `App` 関数は JSX 式を返します。この式には、ブラウザーが最終的に DOM にレンダリングするものを定義します。

HTML と同じように、`attribute="value"` のように属性をもつ要素があります。3 行目では、[`<div>`](/ja/docs/Web/HTML/Element/div) 開始タグに `className` 属性があります。これは HTML の[`class`](/ja/docs/Web/HTML/Global_attributes/class) 属性と同じですが、JSX は JavaScript であるため使用できません。`class` が予約されているためです。つまり、JavaScript ではすでにそれを使用しており、もし同様に使うと問題が発生するということです。同じような理由で、他のいくつかの HTML 属性は、HTML とは異なる方法で JSX で記述されています。

6 行目の [`<p>`](/ja/docs/Web/HTML/Element/p) タグを「Hello, world！」に変更して、ファイルを保存します。この変更はブラウザー `http://localhost:3000` で実行されている開発サーバーですぐにレンダリングされます。次に、[`<a>`](/ja/docs/Web/HTML/Element/a) タグを削除して保存します。すると、「Learn React」リンクはなくなります。

あなたの `App` コンポーネントは次のようになります。

```
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, World!
        </p>
      </header>
    </div>
  );
}
```

### ステートメントのエクスポート

`App.js` ファイルの一番下にある `export default App` は、`App` コンポーネントを他のモジュールで使用できるようにしています。

## index を詳しくみる

`src/index.js` を開きましょう。`App` コンポーネントを使用しているのがわかります。このファイルはアプリのエントリーポイントであり、最初は次のようになっています。

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```

`App.js` と同様に、ファイルは、実行する必要のあるすべての JS モジュールとその他のアセットをインポートすることから始まります。`src/index.css` ではアプリ全体に適用されるグローバルスタイルを保持します。ここに、インポートされた`App`コンポーネントも確認できます。下部の `export` により、`App.js` がインポートできるようになりました。

7 行目 `ReactDOM.render()` は 2 つの引数で React の関数を呼び出します：

- `<App />`: この場合、レンダリングしたいコンポーネント。
- 内部にコンポーネントをレンダリングする DOM 要素: この場合、`root` 要素。`public/index.html` の内側を見ると、これがの `<div>` であり、`<body>` すぐ内側の要素であることがわかります。

これらはすべて、`App` コンポーネントを最初のコンポーネントとして React アプリケーションをレンダリングすることを React に伝えます。

> **メモ:** JSX では、React コンポーネントと HTML 要素には閉じスラッシュが必要です。そのまま `<App>` または `<img>` と書くとエラーが発生します。

[Service Worker](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers) は、アプリケーションのパフォーマンスを向上させ、ウェブアプリケーションの機能をオフラインで動作させることができる興味深いコードですが、この記事の対象ではありません。5 行目と 9 〜 12 行目を削除します。

最終的な`index.js`ファイルは次のようになります。

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

## 変数と props

次に、JavaScript スキルのいくつかを使用して、コンポーネントの編集と React でのデータの操作をもう少し快適にします。JSX 内での変数の使用方法について説明し、データをコンポーネントに渡す方法である props を紹介します (その後、変数を使用してアクセスできます)。

### JSX の変数

`App.js` に戻り、9 行目に注目しましょう。

```jsx
<img src={logo} className="App-logo" alt="logo" />
```

ここでは、`<img />` タグの `src` 属性値は中括弧で囲まれています。これは、JSX が変数を認識する方法です。React が `{logo}` を表示し、アプリの 2 行目のインポートを参照していることを確認してから、logo ファイルを取得してレンダリングします。

独自の変数を作ってみましょう。`App` の return ステートメントの前に `const subject = 'React';` を追加します。すると、`App` コンポーネントは次のようになります。

```
function App() {
  const subject = "React";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, World!
        </p>
      </header>
    </div>
  );
}
```

次のように、8 行目を変更して「world」という単語の代わりに `subject` 変数を使用します。

```
function App() {
  const subject = "React";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, {subject}!
        </p>
      </header>
    </div>
  );
}
```

保存すると、「Hello、world！」の代わりにブラウザーに「Hello、React！」と表示されます。

変数は便利ですが、設定したばかりの変数は React の機能をあまり活用していません。そこで、props の登場です。

### コンポーネントの props

**props** はコンポーネントに渡される任意のデータです。prop はコンポーネント内に記述され、HTML 属性と同じ構文を使用します — `prop="value"`。`index.js`を開き、`<App/>` に最初の `prop` を渡しましょう。

`<App/>` コンポーネントに `subject` という prop を追加して、値は `Clarice` とします。完了すると、コードは次のようになります。

```
ReactDOM.render(<App subject="Clarice" />, document.getElementById('root'));
```

`App.js` に戻り、App 関数自体をもう一度見てみましょう。この関数は次のようになっています (簡潔にするために `return` で短くしています)。

```
function App() {
  const subject = "React";
  return (
    // return statement
  );
}
```

`App` 関数の引数を変更して、`props` をパラメーターとして受け入れられるようにします。他のパラメーターと同様 `props` に、`console.log()` を入力して、ブラウザーのコンソールにそれを表示させます。すると、次のようになります。

```
function App(props) {
  const subject = "React";
  console.log(props);
  return (
    // return statement
  );
}
```

ファイルを保存し、ブラウザーの JavaScript コンソールを確認します。次のようなログが表示されるはずです。

```
Object { subject: "Clarice" }
```

オブジェクトプロパティ `subject` は、`<App />` コンポーネント呼び出しに追加した `subject` プロパティに対応し、文字列 `Clarice` はその値に対応します。React のコンポーネントプロップは、常にこのようにオブジェクトに集約されます。

`subject` は props の一部です。App.js でこれを使ってみましょう。`subject` 定数を変更して、`React` という文字列として定義する代わりに `props.subject` の値を読み取るようにします。`console.log()` は必要に応じて削除することもできます。

```
function App(props) {
  const subject = props.subject;
  return (
    // return statement
  );
}
```

保存すると、アプリは「Hello、Clarice！」と挨拶するはずです。`index.js` に戻り、`subject` の値を編集して保存すると、テキストが変更されます。

## まとめ

これで、React をローカルでインストールする方法、スターターアプリを作成する方法、基本的にどのように機能するかなど、React の入門が終わりました。次の記事では、最初に適したアプリケーションである todo リストの作成を開始します。ただし、その前に、私たちが学んだことのいくつかをおさらいしましょう。

React では:

- コンポーネントは必要なモジュールをインポートでき、ファイルの下部でエクスポートする必要があります。
- コンポーネント関数は `PascalCase` で名前が付けられます。
- JSX 変数は、`{so}` のように中括弧で囲むことで読み取ることができます。
- 一部の JSX 属性は HTML 属性とは異なるため、JavaScript の予約語と競合しません。例えば `class`、HTML では `className` JSX に変換されます。複数単語の属性はキャメルケースであることに注意してください。
- props は、コンポーネント呼び出し内の属性と同じように記述され、コンポーネントに渡されます。

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

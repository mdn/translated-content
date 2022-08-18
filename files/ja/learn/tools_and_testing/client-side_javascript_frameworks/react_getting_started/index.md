---
title: Reactをはじめる
slug: >-
  Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started
tags:
  - Beginner
  - Frameworks
  - JavaScript
  - Learn
  - React
  - client-side
translation_of: >-
  Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}</div>

<p class="summary">この記事では React のはじめかたを説明します。Reactの背景と使い方について説明し、ローカル環境で基本的な React ツールチェーンを設定します。また、シンプルな基本アプリを作成して、React がどのようなプロセスで機能するのかを学んでいきます。</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">前提条件:</th>
   <td>
    <p><a href="/ja/docs/Learn/HTML">HTML</a>、<a href="/ja/docs/Learn/CSS">CSS</a>、<a href="/ja/docs/Learn/JavaScript">JavaScript</a> に精通していること、<a href="/ja/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line">ターミナル/コマンドライン</a>に関する知識があること。</p>

    <p>React は JSX (JavaScript と XML) と呼ばれる HTML-in-JavaScript を使用します。HTML と JavaScript の両方に精通していると、JSX の学習に役立ち、アプリケーションのバグが JavaScript に関連しているか、React のより具体的なドメインに関連しているかを特定するのに役立つます。</p>
   </td>
  </tr>
  <tr>
   <th scope="row">目的:</th>
   <td>ローカルの React 開発環境をセットアップし、開始アプリを作成して、それがどのように機能するかの基本を理解する</td>
  </tr>
 </tbody>
</table>

<h2 id="Hello_React" name="Hello_React">React の基礎</h2>

<p>公式のキャッチフレーズにあるように、<a href="https://reactjs.org/">React</a> はユーザーインターフェイスを構築するためのライブラリーです。React はフレームワークではなく、ウェブに限定されるものでもありません。他のライブラリーと共に使用して、特定の環境にレンダリングしますます。たとえば、<a href="https://reactnative.dev/">React Native</a> はモバイルアプリケーションの構築に使用できます。<a href="https://facebook.github.io/react-360/">React 360</a> を使用して、仮想現実アプリケーションを構築できます。他にも可能性があります。</p>

<p>ウェブ向けに構築するには、開発者は <a href="https://reactjs.org/docs/react-dom.html">ReactDOM</a> と連携して React を使用します。React と ReactDOM は、他の本当のウェブ開発フレームワークと同じ土台で頻繫に議論され、同じような問題を解決するために用いられます。しかし React を「フレームワーク」と呼ぶとき、私たちはその口語的な理解に別途でいます。</p>

<p>React が目指すところは、開発者がUIを構築しているときに発生するバグを最小限に抑えることです。これは、コンポーネント (ユーザーインターフェイスの一部を記述する自己完結型の論理的なコード) を使用して行われます。これらのコンポーネントを組み合わせて完全なUIを作成でき、React はレンダリング作業の大部分を抽象化して、UI デザインに集中できるようにします。</p>

<h2 id="Use_cases" name="Use_cases">ユースケース</h2>

<p>このモジュールで取り上げられている他のフレームワークとは異なり、React はコード規則やファイル編成に関する厳密なルールを適用しません。これにより、チームは自分に最適な規則を設定し、Reactを好きなように採用することができます。React は、単一のボタン、一部のインターフェース、またはアプリのユーザーインターフェース全体を処理できます。</p>

<p>React は<a href="https://reactjs.org/docs/add-react-to-a-website.html">インターフェイスの一部</a>に適用することが <em>できます</em> が、jQuery のようなライブラリーや Vue のようなフレームワークほどアプリケーションに「ドロップ」するのは簡単ではありません。React でアプリ全体を構築するのに適しています。</p>

<p>さらに、JSX のインターフェースの作成など、React アプリの開発者体験にはコンパイルプロセスが必要とします。Babel のようなコンパイラーをウェブサイトに追加すると、コードの実行が遅くなるため、開発者はビルドステップでそのようなツールをセットアップすることがよくあります。間違いなく React には厳しいツール要件がありますが、学習することはできます。</p>

<p>この記事では、Facebook 独自の<a href="https://create-react-app.dev/"> create-react-app</a> を使って、アプリケーションのインターフェイスを構築していきます。</p>

<h2 id="How_does_React_use_JavaScript" name="How_does_React_use_JavaScript">ReactにおけるJavaScriptの書き方</h2>

<p>Reactは、そのパターンの多くに最新の JavaScript の機能を利用しています。JavaScript からの最大の違いは、<a href="https://reactjs.org/docs/introducing-jsx.html">JSX</a> 構文を使うことです。JSX は JavaScript の構文を拡張して、HTML のようにコードを書くことができます。例えば:</p>

<pre class="brush: js notranslate">const heading = &lt;h1&gt;Mozilla Developer Network &lt;/h1&gt;;</pre>

<p>この定数 heading は、<strong>JSX 式</strong>と呼ばれます。React はこのように <code><a href="/ja/docs/Web/HTML/Element/Heading_Elements">&lt;h1&gt;</a></code> タグをレンダリングすることができます。</p>

<p>セマンティックの観点で、 <code><a href="/ja/docs/Web/HTML/Element/header">&lt;header&gt;</a></code> タグで、見出しを囲みたいとします。JSX では、HTML のように、要素を相互にネストできます。</p>

<pre class="notranslate">const header = (
  &lt;header&gt;
    &lt;h1&gt;Mozilla Developer Network&lt;/h1&gt;
  &lt;/header&gt;
);</pre>

<div class="blockIndicator note">
<p><strong>注</strong>: このスニペットの括弧は JSX に固有のものではなく、あなたのアプリケーションに影響を与えません。それらは、あなた (またあなたのコンピューター) にとって、内部の複数行のコードが同じ式の一部であるという意味です。次のように header を定義することもできます。</p>

<pre class="notranslate">const header = &lt;header&gt;
    &lt;h1&gt;Mozilla Developer Network&lt;/h1&gt;
&lt;/header&gt;</pre>

<p>ただし、<code><a href="/ja/docs/Web/HTML/Element/header">&lt;header&gt;</a></code> 式を開始するタグが、対応する終了タグと同じ位置にインデントされていないため、これは少し読みにくいかもしれません。</p>
</div>

<p>もちろん、あなたのブラウザーはそのままでは JSX を読むことができません。(<a href="https://babeljs.io/">Babel</a> や <a href="https://parceljs.org/">Parcel</a> などのツールを使用して) コンパイルすると、ヘッダー式は次のようになります。</p>

<pre class="brush: js notranslate">const header = React.createElement("header"、null、
  React.createElement("h1"、null、 "Mozilla Developer Network")
);</pre>

<p>コンパイルステップとコンパイル自体をスキップし、<code><a href="https://reactjs.org/docs/react-api.html#createelement">React.createElement()</a></code> を使って、独自のUIを自分で書くこと。ただし、こうするとJSXの宣言的なメリットが失われ、コードが読みにくくなってしまいます。コンパイルは開発プロセスとは別のステップですが、Reactコミュニティの多くの開発者は、JSXの読みやすさに価値があると考えています。さらに、外部ツールにより、JSX から JavaScript へのコンパイルがセットアッププロセスの一部になります。特段の必要がない限り、コンパイルを自分の手で行う必要はありません。</p>

<p>JSX は HTML と JavaScript がミックスされたものなので、一部の開発者にとっては直感的に使うことができます。しかしそうでない人にとってはは、そのミックスされていることで混乱させられると言います。ただし、慣れれば、ユーザーインターフェースをより迅速かつ直感的に構築できるようになり、他の人がコードを一目で理解しやすくなります。</p>

<p>JSX の詳細については、React チームの <a href="https://reactjs.org/docs/jsx-in-depth.html">JSX In Depth</a> の記事をご覧ください。</p>

<h2 id="Setting_up_your_first_React_app" name="Setting_up_your_first_React_app">最初の React アプリをセットアップする</h2>

<p>React を使用する方法はたくさんありますが、前述のように、コマンドラインインターフェイス (CLI) ツールの create-react-app を使用します。これにより、いくつかのパッケージをインストールしていくつかを作成することにより、React アプリケーションの開発プロセスをスムーズにします。</p>

<p><code><a href="/ja/docs/Web/HTML/Element/script">&lt;script&gt;</a></code> を HTML ファイルにコピーすることで <a href="https://reactjs.org/docs/add-react-to-a-website.html">create-react-app なしでウェブサイトに　React を追加する</a>ことは可能ですが、create-react-app CLI　は、React　アプリケーションの一般的な始め方です。これを使うことで、アプリの作成に集中でき、セットアップに煩わされなくなります。</p>

<h3 id="Requirements" name="Requirements">必要条件</h3>

<p>create-react-app を使用するには、<a href="https://nodejs.org/en/">Node.js</a> をインストールする必要があります。長期サポート (LTS) バージョンを使用することをお勧めします。ノードには、npm (ノードパッケージマネージャー) および npx (ノードパッケージランナー) が含まれます。</p>

<p>代わりに Yarn パッケージマネージャーを使用することもできますが、この一連のチュートリアルでは npm を使用するものとします。npm と yarn の詳細については、<a href="/ja/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management">パッケージ管理の基本</a>を参照してください。</p>

<p>Windows を使用している場合、このチュートリアルで言及されている端末コマンドを使用するには、Unix / macOS 端末と同等のソフトウェアをインストールする必要があります。<strong>Gitbash</strong> (<a href="https://gitforwindows.org/">Windows 用</a>の <a href="https://gitforwindows.org/">git ツールセットの</a>一部として提供) または <strong><a href="https://docs.microsoft.com/en-us/windows/wsl/about">Linux 用の Windows サブシステム</a></strong> (<strong>WSL</strong>) の両方が適しています。これら、および一般的な端末コマンドの詳細については、<a href="/ja/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line">コマンドラインクラッシュコース</a>を参照してください。</p>

<p>また、React と ReactDOM は、かなり近代的な一連のブラウザー (IE9 以降) でのみ機能するアプリを生成することにも注意してください。これらのチュートリアルを実行するときは、Firefox、Safari、Chrome などの最新のブラウザーを使用することをお勧めします。</p>

<p>詳細については、以下も参照してください。</p>

<ul>
 <li><a href="https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/">nodejs.org の「npm とは」</a></li>
 <li><a href="https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner">npm ブログの「npxの紹介」</a></li>
 <li><a href="https://create-react-app.dev/">create-react-app のドキュメント</a></li>
</ul>

<h3 id="Initializing_your_app" name="Initializing_your_app">アプリの初期化</h3>

<p>create-react-app は引数を 1 つ取ります。アプリに付ける名前です。create-react-app はこの名前を使用して新しいディレクトリーを作成し、その中に必要なファイルを作成します。<code>cd</code> でアプリのハードドライブ上の場所に移動したことを確認してから、ターミナルで次のコマンドを実行します。</p>

<pre class="brush: bash notranslate">npx create-react-app moz-todo-react</pre>

<p>これは <code>moz-todo-react</code> ディレクトリーを作成し、その中でいくつかのことを行います:</p>

<ul>
 <li>アプリの機能に不可欠な npm パッケージをインストールします。</li>
 <li>アプリケーションを起動および提供するためのスクリプトを記述します。</li>
 <li>基本的なアプリアーキテクチャを定義するファイルとディレクトリーの構造を作成します。</li>
 <li>コンピュータに git がインストールされている場合、ディレクトリーを git リポジトリーとして初期化します。</li>
</ul>

<div class="blockIndicator note">
<p><strong>注</strong>: Yarn パッケージマネージャーがインストールされている場合、create-react-app はデフォルトで npm の代わりにそれを使用します。両方のパッケージマネージャーがインストールされていて、明示的に NPM を使用したい場合、create-react-app を実行するときに <code>--use-npm</code> フラグを追加できます。</p>

<pre class="brush: bash notranslate">npx create-react-app moz-todo-react --use-npm</pre>
</div>

<p>create-react-app が機能している間、端末にいくつかのメッセージが表示されますが、正常な動作です！これには数分かかる場合がありますので、お茶でも作って待ってみましょう。</p>

<p>プロセスが完了したら、<code>moz-todo-react</code>ディレクトリーへ <code>cd</code> して、コマンド <code>npm start</code> を実行します。create-react-app によってインストールされたスクリプトは、localhost:3000 のローカルサーバーで提供され始め、新しいブラウザータブでアプリを開きます。ブラウザーには次のように表示されます。</p>

<p><img alt="デフォルトのcreate-react-app アプリケーションを示す、Firefox MacOS のスクリーンショット、localhost:3000を開く" src="https://mdn.mozillademos.org/files/17203/default-create-react-app.png" style="border-style: solid; border-width: 1px; height: 980px; width: 1600px;"></p>

<h3 id="Application_structure" name="Application_structure">アプリケーションの構造</h3>

<p>create-react-app は、React アプリケーションの開発に必要なすべてのものを提供します。初期のファイル構造は次のようになります。</p>

<pre class="notranslate">moz-todo-react
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
    └──serviceWorker.js</pre>

<p><strong><code>src</code></strong> ディレクトリーはアプリケーションの実態ともいえるソースことがある場所で、私たちが触るのは主にこの部分です。</p>

<p><strong><code>public</code></strong> ディレクトリーには、アプリを開発している間、ブラウザーによって読み込まれるファイルが含まれています。これらの中で最も重要なのは <code>index.html</code> です。React はこのファイルにコードを挿入して、ブラウザーで実行できるようにします。create-react-app 関数に役立つマークアップが他にもいくつかあるので、何をしているのかを理解していなければ、自分で編集しないように注意してください。このファイルの要素内の <code><a href="/ja/docs/Web/HTML/Element/title">&lt;title&gt;</a></code> を変更して、アプリケーション自体のタイトルを反映させる必要があります。アクセシビリティ向上のためには正しいページタイトルが重要です。</p>

<p><code>public</code> ディレクトリーは、アプリをビルドしてデプロイするときにも公開されます。このチュートリアルではデプロイ自体については説明しませんが、<a href="/ja/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Deployment">アプリのデプロイ</a>チュートリアルで説明されているものと同様のソリューションを使用できるはずです。</p>

<p>この<code>package.json</code> ファイルには、Node.js / npm がプロジェクトを整理するために使用するプロジェクトに関する情報が含まれています。このファイルは React アプリケーションに固有のものではありません。create-react-app は単にそれを生成します。このチュートリアルを完了するためにこのファイルを理解する必要はまったくありませんが、詳しく知りたい場合は<a href="https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/">「package.json ファイルとは」</a>を参照してください。</p>

<h2 id="Exploring_our_first_React_component_—_&lt;App>" name="Exploring_our_first_React_component_—_&lt;App>">最初の React コンポーネント— <code>&lt;App/&gt;</code></h2>

<p>React における、<strong>コンポーネント</strong>とはアプリの一部をレンダリングする再利用可能なモジュールを指します。これらのパーツは大きくても小さくてもかまいませんが、通常は明確に定義され、単一責務のもとに作られます。</p>

<p>ブラウザーに表示されているように、<code>src/App.js</code> を開いて編集しましょう。このファイルには、最初のコンポーネント、<code>App</code>、その他の数行のコードが含まれています。</p>

<pre class="notranslate">import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    &lt;div className="App"&gt;
      &lt;header className="App-header"&gt;
        &lt;img src={logo} className="App-logo" alt="logo" /&gt;
        &lt;p&gt;
          Edit &lt;code&gt;src/App.js&lt;/code&gt; and save to reload.
        &lt;/p&gt;
        &lt;a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        &gt;
          Learn React
        &lt;/a&gt;
      &lt;/header&gt;
    &lt;/div&gt;
  );
}
export default App;</pre>

<p>この <code>App.js</code> ファイルは 3 つの主要な部分で構成されています。上部にいくつかの宣言されている <code><a href="/ja/docs/Web/JavaScript/Reference/Statements/import">import</a></code>、中央にある <code>App</code>、最下部にある <code><a href="/ja/docs/Web/JavaScript/Reference/Statements/export">export</a></code>。ほとんどの React コンポーネントはこのように書かれます。</p>

<h3 id="Import_statements" name="Import_statements">ステートメントをインポートする</h3>

<p><code>import</code> はファイルの先頭に宣言され、<code>App.js</code> が他の場所で定義されているコードを使用するのを許可します。これらをさらに詳しく見てみましょう。</p>

<pre class="notranslate">import React from 'react';
import logo from './logo.svg';
import './App.css';</pre>

<p>最初のステートメントは、React ライブラリー自体をインポートします。React は、作成する JSX を <code>React.createElement()</code> に変換するため、すべての React コンポーネントが <code>React</code> モジュールをインポートする必要があります。この手順をスキップすると、アプリケーションでエラーが発生します。</p>

<p>2 番目のステートメントは、<code>'./logo.svg'</code> をインポートします。最初の <code>./</code> パスのと最後の拡張子 <code>.svg</code> に注意してください。これらはファイルがローカルであり、JavaScript ファイルではないことを示しています。実際、<code>logo.svg</code> ファイルは <code>src/</code> ディレクトリーにあります。</p>

<p><code>React</code> モジュールのインポート時にパスや拡張子は記述しません—これはローカルファイルではないからです。代わりに、<code>package.json</code> ファイルに依存関係としてリストされます。このレッスンでは、この違いに注意してください。</p>

<p>3番目のステートメントは、App コンポーネントに関連する CSS をインポートします。変数名も <code>from</code> ディレクティブもないことに注意してください。この特定のインポート構文は、JavaScript モジュール構文に特有のものではありません。Webpack から提供されるものです。create-react-app ツールは、すべての JavaScript ファイルをバンドルしてブラウザーに提供するために使用します。</p>

<h3 id="The_App_component" name="The_App_component"><code>App</code> コンポーネント</h3>

<p><code>import</code> の次に、<code>App</code> という名前の関数があります。ほとんどの JavaScript コミュニティは<code>helloWorld</code> のようなキャメルケース名を好みますが、React コンポーネントは <code>HelloWorld</code> のようなパスカルケース変数名を使用して、特定のJSX 要素が React コンポーネントであり、通常の HTML タグではないことを明確にしています。<code>App</code> 関数の名前を <code>app</code> に変更すると、ブラウザーにエラーが表示されます。</p>

<p>アプリをもっと詳しく見てみましょう。</p>

<pre class="notranslate">function App() {
  return (
    &lt;div className="App"&gt;
      &lt;header className="App-header"&gt;
        &lt;img src={logo} className="App-logo" alt="logo" /&gt;
        &lt;p&gt;
          Edit &lt;code&gt;src/App.js&lt;/code&gt; and save to reload.
        &lt;/p&gt;
        &lt;a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        &gt;
          Learn React
        &lt;/a&gt;
      &lt;/header&gt;
    &lt;/div&gt;
  );
}</pre>

<p>この <code>App</code> 関数は JSX 式を返します。この式には、ブラウザーが最終的に DOM にレンダリングするものを定義します。</p>

<p>HTML と同じように、<code>attribute="value"</code> のように属性をもつ要素があります。3 行目では、<code><a href="/ja/docs/Web/HTML/Element/div">&lt;div&gt;</a></code> 開始タグに <code>className</code> 属性があります。これは HTML の<code><a href="/ja/docs/Web/HTML/Global_attributes/class">class</a></code> 属性と同じですが、JSX は JavaScript であるため使用できません。<code>class</code> が予約されているためです。つまり、JavaScript ではすでにそれを使用しており、もし同様に使うと問題が発生するということです。同じような理由で、他のいくつかの HTML 属性は、HTML とは異なる方法で JSX で記述されています。</p>

<p>6 行目の <code><a href="/ja/docs/Web/HTML/Element/p">&lt;p&gt;</a></code> タグを「Hello, world！」に変更して、ファイルを保存します。この変更はブラウザー <code>http://localhost:3000</code> で実行されている開発サーバーですぐにレンダリングされます。次に、<code><a href="/ja/docs/Web/HTML/Element/a">&lt;a&gt;</a></code> タグを削除して保存します。すると、「Learn React」リンクはなくなります。</p>

<p>あなたの <code>App</code> コンポーネントは次のようになります。</p>

<pre class="notranslate">function App() {
  return (
    &lt;div className="App"&gt;
      &lt;header className="App-header"&gt;
        &lt;img src={logo} className="App-logo" alt="logo" /&gt;
        &lt;p&gt;
          Hello, World!
        &lt;/p&gt;
      &lt;/header&gt;
    &lt;/div&gt;
  );
}</pre>

<h3 id="Export_statements" name="Export_statements">ステートメントのエクスポート</h3>

<p><code>App.js</code> ファイルの一番下にある <code>export default App</code> は、<code>App</code> コンポーネントを他のモジュールで使用できるようにしています。</p>

<h2 id="Interrogating_the_index" name="Interrogating_the_index">index を詳しくみる</h2>

<p><code>src/index.js</code> を開きましょう。<code>App</code> コンポーネントを使用しているのがわかります。このファイルはアプリのエントリーポイントであり、最初は次のようになっています。</p>

<pre class="notranslate">import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(&lt;App /&gt;, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();</pre>

<p><code>App.js</code> と同様に、ファイルは、実行する必要のあるすべての JS モジュールとその他のアセットをインポートすることから始まります。<code>src/index.css</code> ではアプリ全体に適用されるグローバルスタイルを保持します。ここに、インポートされた<code>App</code>コンポーネントも確認できます。下部の <code>export</code> により、<code>App.js</code> がインポートできるようになりました。</p>

<p>7 行目 <code>ReactDOM.render()</code> は 2 つの引数で React の関数を呼び出します：</p>

<ul>
 <li><code>&lt;App /&gt;</code>: この場合、レンダリングしたいコンポーネント。</li>
 <li>内部にコンポーネントをレンダリングする DOM 要素: この場合、<code>root</code> 要素。<code>public/index.html</code> の内側を見ると、これがの <code>&lt;div&gt;</code> であり、<code>&lt;body&gt;</code> すぐ内側の要素であることがわかります。</li>
</ul>

<p>これらはすべて、<code>App</code> コンポーネントを最初のコンポーネントとして React アプリケーションをレンダリングすることを React に伝えます。</p>

<div class="blockIndicator note">
<p><strong>注</strong>: JSX では、React コンポーネントと HTML 要素には閉じスラッシュが必要です。そのまま <code>&lt;App&gt;</code> または <code>&lt;img&gt;</code> と書くとエラーが発生します。</p>
</div>

<p><a href="/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers">Service Worker</a> は、アプリケーションのパフォーマンスを向上させ、ウェブアプリケーションの機能をオフラインで動作させることができる興味深いコードですが、この記事の対象ではありません。5 行目と 9 〜 12 行目を削除します。</p>

<p>最終的な<code>index.js</code>ファイルは次のようになります。</p>

<pre class="notranslate">import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(&lt;App /&gt;, document.getElementById('root'));</pre>

<h2 id="Variables_and_props" name="Variables_and_props">変数と props</h2>

<p>次に、JavaScript スキルのいくつかを使用して、コンポーネントの編集と React でのデータの操作をもう少し快適にします。JSX内での変数の使用方法について説明し、データをコンポーネントに渡す方法である props を紹介します (その後、変数を使用してアクセスできます)。</p>

<h3 id="JSXの変数">JSXの変数</h3>

<p><code>App.js</code> に戻り、9 行目に注目しましょう。</p>

<pre class="brush: js notranslate">&lt;img src = {logo} className = "App-logo" alt = "logo" /&gt;</pre>

<p>ここでは、<code>&lt;img /&gt;</code> タグの <code>src</code> 属性値は中括弧で囲まれています。これは、JSX が変数を認識する方法です。React が <code>{logo}</code> を表示し、アプリの2行目のインポートを参照していることを確認してから、logo ファイルを取得してレンダリングします。</p>

<p>独自の変数を作ってみましょう。<code>App</code> の return ステートメントの前に <code>const subject = 'React';</code> を追加します。すると、<code>App</code> コンポーネントは次のようになります。</p>

<pre class="notranslate">function App() {
  const subject = "React";
  return (
    &lt;div className="App"&gt;
      &lt;header className="App-header"&gt;
        &lt;img src={logo} className="App-logo" alt="logo" /&gt;
        &lt;p&gt;
          Hello, World!
        &lt;/p&gt;
      &lt;/header&gt;
    &lt;/div&gt;
  );
}</pre>

<p>次のように、8 行目を変更して「world」という単語の代わりに <code>subject</code> 変数を使用します。</p>

<pre class="notranslate">function App() {
  const subject = "React";
  return (
    &lt;div className="App"&gt;
      &lt;header className="App-header"&gt;
        &lt;img src={logo} className="App-logo" alt="logo" /&gt;
        &lt;p&gt;
          Hello, {subject}!
        &lt;/p&gt;
      &lt;/header&gt;
    &lt;/div&gt;
  );
}</pre>

<p>保存すると、「Hello、world！」の代わりにブラウザーに「Hello、React！」と表示されます。</p>

<p>変数は便利ですが、設定したばかりの変数はReactの機能をあまり活用していません。そこで、propsの登場です。</p>

<h3 id="Component_props" name="Component_props">コンポーネントのprops</h3>

<p><strong>props</strong> はコンポーネントに渡される任意のデータです。prop はコンポーネント内に記述され、HTML属性と同じ構文を使用します — <code>prop="value"</code>。<code>index.js</code>を開き、<code>&lt;App/&gt;</code> に最初の <code>prop</code> を渡しましょう。</p>

<p><code>&lt;App/&gt;</code> コンポーネントに <code>subject</code> という prop を追加して、値は <code>Clarice</code> とします。完了すると、コードは次のようになります。</p>

<pre class="notranslate">ReactDOM.render(&lt;App subject="Clarice" /&gt;, document.getElementById('root'));</pre>

<p><code>App.js</code> に戻り、App 関数自体をもう一度見てみましょう。この関数は次のようになっています (簡潔にするために <code>return</code> で短くしています)。</p>

<pre class="notranslate">function App() {
  const subject = "React";
  return (
    // return statement
  );
}</pre>

<p><code>App</code> 関数の引数を変更して、<code>props</code> をパラメーターとして受け入れられるようにします。他のパラメーターと同様 <code>props</code> に、<code>console.log()</code> を入力して、ブラウザーのコンソールにそれを表示させます。すると、次のようになります。</p>

<pre class="notranslate">function App(props) {
  const subject = "React";
  console.log(props);
  return (
    // return statement
  );
}</pre>

<p>ファイルを保存し、ブラウザーの JavaScript コンソールを確認します。次のようなログが表示されるはずです。</p>

<pre class="notranslate">Object { subject: "Clarice" }</pre>

<p>オブジェクトプロパティ <code>subject</code> は、<code>&lt;App /&gt;</code> コンポーネント呼び出しに追加した <code>subject</code> プロパティに対応し、文字列 <code>Clarice</code> はその値に対応します。React のコンポーネントプロップは、常にこのようにオブジェクトに集約されます。</p>

<p><code>subject</code> は props の一部です。App.js でこれを使ってみましょう。<code>subject</code> 定数を変更して、<code>React</code> という文字列として定義する代わりに <code>props.subject</code> の値を読み取るようにします。<code>console.log()</code> は必要に応じて削除することもできます。</p>

<pre class="notranslate">function App(props) {
  const subject = props.subject;
  return (
    // return statement
  );
}</pre>

<p>保存すると、アプリは「Hello、Clarice！」と挨拶するはずです。<code>index.js</code> に戻り、<code>subject</code> の値を編集して保存すると、テキストが変更されます。</p>

<h2 id="Summary" name="Summary">まとめ</h2>

<p>これで、React をローカルでインストールする方法、スターターアプリを作成する方法、基本的にどのように機能するかなど、React の入門が終わりました。次の記事では、最初に適したアプリケーションである todo リストの作成を開始します。ただし、その前に、私たちが学んだことのいくつかをおさらいしましょう。</p>

<p>React では:</p>

<ul>
 <li>コンポーネントは必要なモジュールをインポートでき、ファイルの下部でエクスポートする必要があります。</li>
 <li>コンポーネント関数は <code>PascalCase</code> で名前が付けられます。</li>
 <li>JSX 変数は、<code>{so}</code> のように中括弧で囲むことで読み取ることができます。</li>
 <li>一部の JSX 属性は HTML 属性とは異なるため、JavaScript の予約語と競合しません。例えば <code>class</code>、HTML では <code>className</code> JSX に変換されます。複数単語の属性はキャメルケースであることに注意してください。</li>
 <li>props は、コンポーネント呼び出し内の属性と同じように記述され、コンポーネントに渡されます。</li>
</ul>

<p>{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}</p>

<h2 id="In_this_module" name="In_this_module">このモジュール内</h2>

<ul>
 <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction">Introduction to client-side frameworks</a></li>
 <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features">Framework main features</a></li>
 <li>React
  <ul>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started">Getting started with React</a></li>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning">Beginning our React todo list</a></li>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components">Componentizing our React app</a></li>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state">React interactivity: Events and state</a></li>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering">React interactivity: Editing, filtering, conditional rendering</a></li>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility">Accessibility in React</a></li>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources">React resources</a></li>
  </ul>
 </li>
 <li>Ember
  <ul>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started">Getting started with Ember</a></li>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization">Ember app structure and componentization</a></li>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state">Ember interactivity: Events, classes and state</a></li>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer">Ember Interactivity: Footer functionality, conditional rendering</a></li>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing">Routing in Ember</a></li>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources">Ember resources and troubleshooting</a></li>
  </ul>
 </li>
 <li>Vue
  <ul>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started">Getting started with Vue</a></li>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component">Creating our first Vue component</a></li>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists">Rendering a list of Vue components</a></li>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models">Adding a new todo form: Vue events, methods, and models</a></li>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling">Styling Vue components with CSS</a></li>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties">Using Vue computed properties</a></li>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering">Vue conditional rendering: editing existing todos</a></li>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management">Focus management with Vue refs</a></li>
   <li><a href="/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources">Vue resources</a></li>
  </ul>
 </li>
</ul>

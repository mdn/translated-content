---
title: Rust から WebAssembly にコンパイルする
slug: WebAssembly/Rust_to_wasm
tags:
  - WebAssembly
  - rust
  - wasm
  - コンパイル
translation_of: WebAssembly/Rust_to_wasm
---
<div>{{WebAssemblySidebar}}</div>

<p class="summary">Rust のコードがあれば、それを <a href="/ja/docs/WebAssembly">WebAssembly</a> (wasm) にコンパイルすることができます。このチュートリアルでは Rust プロジェクトをコンパイルして既存のウェブアプリケーションで使用するために必要なことについて説明します。</p>

<h2 id="Rust_and_WebAssembly_use_cases" name="Rust_and_WebAssembly_use_cases">Rust と WebAssembly のユースケース</h2>

<p>Rust と WebAssembly には、主に 2 つのユースケースがあります。</p>

<ul>
 <li>アプリケーション全体を構築する — ウェブアプリ全体を Rust ベースで構築します。</li>
 <li>アプリケーションの一部を構築する — 既存の JavaScript フロントエンドの内部で Rust を使用します。</li>
</ul>

<p>今のところ、Rust チームは後者のケースに焦点を当てているので、ここではこれについて説明します。前者の場合、<a href="https://github.com/DenisKolodin/yew"><code>yew</code></a> のようなプロジェクトをチェックアウトしてください。</p>

<p>このチュートリアルでは、Rust で npm パッケージを構築するためのツールである <code>wasm-pack</code> を使用して npm パッケージを構築します。このパッケージには WebAssembly と JavaScript のコードしか含まれていないため、パッケージのユーザーは Rust をインストールする必要がありません。WebAssembly で書かれていることにすら気づかないかもしれません。</p>

<h2 id="Rust_Environment_Setup" name="Rust_Environment_Setup">Rust 開発環境のセットアップ</h2>

<p>環境を整えるために必要なすべてのステップを踏んでみましょう。</p>

<h3 id="Install_Rust" name="Install_Rust">Rust のインストール</h3>

<p><a href="https://www.rust-lang.org/install.html">Install Rust</a> ページに行って指示に従い、Rust をインストールしてください。これによって "rustup" と呼ばれる複数のバージョンの Rust を管理できるようにするツールがインストールされます。既定の設定では、通常の Rust 開発で使いたいであろう最新の安定版 Rust リリースをインストールします。rustup は Rust コンパイラの <code>rustc</code> や Rust のパッケージマネージャーの <code>cargo</code> や Rust の標準ライブラリの <code>rust-std</code> やいくつかの助けになるドキュメント — <code>rust-docs</code> をインストールします。</p>

<div class="blockIndicator note">
<p><strong>メモ</strong>: インストール後のメモで、cargo の <code>bin</code> ディレクトリーをシステムの <code>PATH</code> に追加する必要があるという点に注意してください。これは自動的に追加されるはずですが、有効にするためにターミナルを再起動する必要があります。</p>
</div>

<h3 id="wasm-pack" name="wasm-pack">wasm-pack</h3>

<p>パッケージをビルドするには、<code>wasm-pack</code> という追加のツールが必要です。これは <code>npm</code> 向けに正しくパッケージングをすることだけでなく、WebAssembly にコードをコンパイルするのにも役立ちます。ダウンロードしてインストールするには、ターミナルに次のコマンドを入力します。</p>

<pre class="brush: bash; no-line-numbers">$ cargo install wasm-pack</pre>

<h3 id="Install_Node.js_and_get_an_npm_account" name="Install_Node.js_and_get_an_npm_account">Node.js のインストールと npm アカウントの取得</h3>

<p>このチュートリアルでは npm パッケージをビルドするので、Node.js と npm のインストールが必要になります。さらに、パッケージを npm にパブリッシュするので、npm アカウントも必要になります。それらは無料です。<em>技術的には</em>パッケージをパブリッシュする必要はありませんが、そのほうが簡単に使用できるので、このチュートリアルではそうすると仮定します。</p>

<p>Node.js と npm を取得するために、<a href="https://www.npmjs.com/get-npm">Get npm!</a> ページに行き、手順に従ってください。バージョンの選択に関しては、好きなバージョンを選択してください。このチュートリアルはバージョンに特有ではありません。</p>

<p>npm アカウントを取得するために、<a href="https://www.npmjs.com/signup">npm signup page</a> に行き、フォームに記入してください。</p>

<p>次に、コマンドラインで <code>npm adduser</code> を実行してください。</p>

<pre class="brush: bash; no-line-numbers">$ npm adduser
Username: yournpmusername
Password:
Email: (this IS public) you@example.com</pre>

<p>ユーザー名とパスワードとメールアドレスを記入してください。うまくいけば、以下の表示が見られます。</p>

<pre class="brush: bash; no-line-numbers">Logged in as yournpmusername on https://registry.npmjs.org/.</pre>

<p>もし何かうまくいかなければ、トラブルシューティングのヘルプを得るために npm に連絡してください。</p>

<h2 id="Building_our_WebAssembly_npm_package" name="Building_our_WebAssembly_npm_package">WebAssembly の npm パッケージのビルド</h2>

<p>セットアップは以上です。Rust で新しいパッケージを作りましょう。個人的なプロジェクトを置いておく場所へ移動して以下を実行してください。</p>

<pre class="brush: bash; no-line-numbers">$ cargo new --lib hello-wasm
     Created library `hello-wasm` project</pre>

<p>これにより新たなライブラリが出発に必要なものすべてと一緒に <code>hello-wasm</code> という名前のサブディレクトリーに作成されます。</p>

<pre class="brush: none no-line-numbers">+-- Cargo.toml
+-- src
    +-- lib.rs</pre>

<p>まず <code>Cargo.toml</code> があります。これはビルドを設定するためのファイルです。もし <code>Gemfile</code> を Bundler から使ったり、<code>package.json</code> を npm から使ったりしたことがあるなら、なじみがあるでしょう。cargo は両者と似たような動作をします。</p>

<p>次に、cargo はいくつかの Rust コードを <code>src/lib.rs</code> に生成してくれています。</p>

<pre class="brush: rust;">#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}</pre>

<p>このチュートリアルでは、このテストコードはまったく使わないので、消してください。</p>

<h3 id="Let's_write_some_Rust" name="Let's_write_some_Rust">Rust を書いてみよう</h3>

<p>代わりに以下のコードを <code>src/lib.rs</code> に書き込みましょう。</p>

<pre class="brush: rust">extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
    pub fn alert(s: &amp;str);
}

#[wasm_bindgen]
pub fn greet(name: &amp;str) {
    alert(&amp;format!("Hello, {}!", name));
}</pre>

<p>これが Rust プロジェクトの中身です。三つの主要な部分があります。順番に説明しましょう。ここでは高水準な説明を行い、細部は省略します。Rust についてもっと学びたいのであれば、無料のオンラインブック <a href="https://doc.rust-lang.org/book/">The Rust Programming Language</a> (訳注: <a href="https://doc.rust-jp.rs/book/second-edition/">和訳</a>もあります) を確認してください。</p>

<h4 id="Using_wasm-bindgen_to_communicate_between_Rust_and_JavaScript" name="Using_wasm-bindgen_to_communicate_between_Rust_and_JavaScript"><code>wasm-bindgen</code> を使用して Rust と JavaScript を協調させる</h4>

<p>最初の部分は以下のようになっています。</p>

<pre class="brush: rust">extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;</pre>

<p>1行目は「やあ Rust、<code>wasm_bindgen</code> というライブラリを使ってるよ」ということです。ライブラリは Rust では「クレート」と呼ばれ、外部 (external) のクレートを使っているので <code>extern</code> キーワードを使用しています。</p>

<p>理解できましたか？ <em>Cargo</em> が<em>クレート</em>を取り入れるのです。</p>

<p>3行目にはコードをライブラリから自分のコードにインポートする <code>use</code> コマンドがあります。この場合、<code>wasm_bindgen::prelude</code> モジュールにあるものすべてをインポートしています。これらの機能は次の節で使用します。</p>

<p>次の節に移動する前に、もう少し <code>wasm-bindgen</code> について話しておいたほうがいいでしょう。</p>

<p><code>wasm-pack</code> は 別のツールの <code>wasm-bindgen</code> を利用して、JavaScript と Rust の型を繋いでいます。<code>wasm-bindgen</code> によって JavaScript が文字列に関する Rust API を呼び出すことや Rust の関数が JavaScript の例外をキャッチすることができるようになります。</p>

<p>パッケージ内で <code>wasm-bindgen</code> の機能を使うことになるでしょう。実際、次の節で利用します。</p>

<h4 id="Calling_external_functions_in_JavaScript_from_Rust" name="Calling_external_functions_in_JavaScript_from_Rust">JavaScript 内の外部関数を Rust から呼び出す。</h4>

<p>次の部分は以下のようになっています。</p>

<pre class="brush: rust;">#[wasm_bindgen]
extern {
    pub fn alert(s: &amp;str);
}</pre>

<p><code>#[ ]</code> の内側は「アトリビュート」と呼ばれ、次に来る文を何らかの形で修飾します。この場合、その文は外部で定義された関数を呼び出したいことを Rust に伝える <code>extern</code> です。アトリビュートは「wasm-bindgen はこれらの関数を見つける方法を知っている」ということを意味しています。</p>

<p>3行目は関数の Rust で書かれたシグニチャです。「<code>alert</code> 関数は <code>s</code> という名前の引数を一つ取る」ということを意味しています。</p>

<p>お察しの通り、これは <a href="/ja/docs/Web/API/Window/alert">JavaScript によって提供される <code>alert</code> 関数</a>です。次の節でこの関数を呼び出します。</p>

<p>JavaScript 関数を呼び出したい時はいつでも、このファイルに追加すれば、<code>wasm-bindgen</code> があらゆるセットアップの世話をしてくれます。まだすべてに対応している訳ではありませんが、作業をしています。何か見つからないものがあれば<a href="https://github.com/rustwasm/wasm-bindgen/issues/new">バグを報告</a>してください。</p>

<h4 id="Producing_Rust_functions_that_JavaScript_can_call" name="Producing_Rust_functions_that_JavaScript_can_call">JavaScript が呼び出せる Rust 関数の作成</h4>

<p>最後の部分は以下のコードです。</p>

<pre class="brush: rust">#[wasm_bindgen]
pub fn greet(name: &amp;str) {
    alert(&amp;format!("Hello, {}!", name));
}</pre>

<p>再び <code>#[wasm_bindgen]</code> アトリビュートが目に入ります。この場合、<code>extern</code> ブロックではなく <code>fn</code> を改変しています。これは JavaScript がこの Rust 関数を呼び出せるようにしてほしいということを意味します。これは <code>extern</code> とは逆です。自分が必要とする関数ではなく、外の世界に渡す関数なのです。</p>

<p>この関数は <code>greet</code> という名前で、引数に (<code>&amp;str</code> と書かれる) 文字列 <code>name</code> を一つ取ります。そしてそれは上の <code>extern</code> ブロックで要求した alert 関数を呼び出します。文字列を結合する <code>format!</code> マクロに呼び出しを渡します。</p>

<p><code>format!</code> マクロはこの場合フォーマット文字列とそこに挿入する変数の二つの引数を取ります。フォーマット文字列は <code>"Hello, {}!"</code> の部分です。それは変数が補完される <code>{}</code> を含みます。渡している変数は関数の引数 <code>name</code> なので、<code>greet("Steve")</code> と呼び出すと <code>"Hello, Steve!"</code> が見られるはずです。</p>

<p>これは alert() に渡されるので、この関数を呼び出すと "Hello, Steve!" と書かれたアラートボックスが現れるでしょう。</p>

<p>ライブラリを書いたので、それをビルドしましょう。</p>

<h3 id="Compiling_our_code_to_WebAssembly" name="Compiling_our_code_to_WebAssembly">コードを WebAssembly にコンパイルする</h3>

<p>コードを正しくコンパイルするには、はじめに <code>Cargo.toml</code> で設定する必要があります。<code>Cargo.toml</code> を開き、以下のように中身を変更してください。</p>

<pre class="brush: toml">[package]
name = "hello-wasm"
version = "0.1.0"
authors = ["Your Name &lt;you@example.com&gt;"]
description = "A sample project with wasm-pack"
license = "MIT/Apache-2.0"
repository = "https://github.com/yourgithubusername/hello-wasm"

[lib]
crate-type = ["cdylib"]

[dependencies]
wasm-bindgen = "0.2"</pre>

<p>自分自身のリポジトリを記入し、<code>git</code> が <code>authors</code> フィールドに使用するものと同じ情報を使用してください。</p>

<p>追加する大部分は下にあるものです。最初の部分 — <code>[lib]</code> — は Rust にパッケージの cdylib バージョンをビルドするよう伝えます。何を意味するかはこのチュートリアルでは掘り下げません。もっと知るには、<a href="https://doc.rust-lang.org/cargo/guide/">Cargo</a> と <a href="https://doc.rust-lang.org/reference/linkage.html">Rust Linkage</a> のドキュメンテーションを調べてください。</p>

<p>第二の項は <code>[dependencies]</code> の項です。ここで Cargo にどのバージョンの <code>wasm-bindgen</code> に依存させるかを知らせます。今回の場合、バージョン <code>0.2.z</code> のいずれかのものです (<code>0.3.0</code> やそれ以上ではありません)。</p>

<h3 id="Building_the_package" name="Building_the_package">パッケージのビルド</h3>

<p>すべてのセットアップが完了したので、ビルドしましょう。ターミナルに以下のものを入力してください。</p>

<pre class="brush: bash no-line-numbers">$ wasm-pack build --scope mynpmusername</pre>

<p>このコマンドは多くのことをします (そして時間がかかます。特に初めて <code>wasm-pack</code> を実行したときはそうです)。それらについて詳しく学ぶには、<a href="https://hacks.mozilla.org/2018/04/hello-wasm-pack/">Mozilla Hacks のこのブログ投稿</a>を確認してください。手短に説明すると、<code>wasm-pack build</code> は次のことをします。</p>

<ol>
 <li>Rust コードを WebAssembly にコンパイルする。</li>
 <li><code>wasm-bindgen</code> をその WebAssembly に対して実行し、WebAssembly ファイルを npm が理解できるモジュールにラップする JavaScript ファイルを生成する。</li>
 <li><code>pkg</code> ディレクトリーを作成し、その JavaScript ファイルと WebAssembly コードをそこに移動する。</li>
 <li><code>Cargo.toml</code> を読み、等価な <code>package.json</code> を生成する。</li>
 <li>(もし存在するなら) <code>README.md</code> をパッケージにコピーする。</li>
</ol>

<p>最終的な結果は？ npm パッケージが <code>pkg</code> ディレクトリーに生成されます。</p>

<h4 id="A_digression_about_code_size" name="A_digression_about_code_size">コードサイズについての余談</h4>

<p>生成された WebAssembly のコードサイズについて確認すると、それはおそらく数百キロバイトでしょう。Rust にはサイズの最適化をまったく指示しておらず、最適化すればサイズを大幅に削減できます。これはこのチュートリアルの脱線ですが、もしもっと学習したいなら、Rust WebAssembly Working Group の<a href="https://rustwasm.github.io/book/game-of-life/code-size.html#shrinking-wasm-size">.wasm のサイズの縮小</a>を確認してください。</p>

<h3 id="Publishing_our_package_to_npm" name="Publishing_our_package_to_npm">パッケージの npm への発行</h3>

<p>この新たなパッケージを npm レジストリに発行しましょう。</p>

<pre class="brush: bash no-line-numbers">$ cd pkg
$ npm publish --access=public</pre>

<p>Rust で書かれ、WebAssembly にコンパイルされた npm パッケージができました。JavaScript から利用する準備ができており、ユーザーが Rust をインストールすることを必要としません。コードに含まれているのは WebAssembly コードであり、Rust のソースではないのです。</p>

<h2 id="Using_the_package_on_the_web" name="Using_the_package_on_the_web">パッケージのウェブでの利用</h2>

<p>この新たなパッケージを利用するウェブサイトを構築しましょう。多くの人が様々なバンドラーツールで npm のパッケージを利用していますが、このチュートリアルではそのうちの一つである <code>webpack</code> を使用します。これは若干複雑ですが、現実的なユースケースを示します。</p>

<p><code>pkg</code> ディレクトリーの外に戻り、新たなディレクトリー <code>site</code> を作成し、そこでこれを試してみましょう。</p>

<pre class="brush: bash no-line-numbers">$ cd ../..
$ mkdir site
$ cd site</pre>

<p>新しいファイル <code>package.json</code> を作成し、次のコードをそこに書き込んでください。</p>

<pre class="brush: json">{
  "scripts": {
    "serve": "webpack-dev-server"
  },
  "dependencies": {
    "@mynpmusername/hello-wasm": "^0.1.0"
  },
  "devDependencies": {
    "webpack": "^4.25.1",
    "webpack-cli": "^3.1.2",
    "webpack-dev-server": "^3.1.10"
  }
}</pre>

<p>dependencies の項の <code>@</code> の後に自分自身のユーザー名を記入する必要があることに注意してください。</p>

<p>次に、Webpack を設定する必要があります。<code>webpack.config.js</code> を作成し、そこに次のことを記入してください。</p>

<pre class="brush: js">const path = require('path');
module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  mode: "development"
};</pre>

<p>さて HTML ファイルが必要です。<code>index.html</code> を作成し、次の内容を追加してください。</p>

<pre class="brush: html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;title&gt;hello-wasm example&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;script src="./index.js"&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>

<p>最後に、HTML ファイルで参照される <code>index.js</code> を作成し、以下の内容を追加してください。</p>

<pre class="brush: js">const js = import("./node_modules/@yournpmusername/hello-wasm/hello_wasm.js");
js.then(js =&gt; {
  js.greet("WebAssembly");
});</pre>

<p>また npm のユーザー名を記入する必要があることに注意してください。</p>

<p>これは新しいモジュールを <code>node_modules</code> フォルダーからインポートします。これは最善の方法ではないと思いますが、デモなので、これでいいでしょう。一度そのモジュールが読み込まれると、そこから <code>greet</code> 関数を呼び出し、<code>"WebAssembly"</code> を文字列として渡します。ここに特別なことはなにもありませんが、Rust コードを呼び出していることに注意してください。JavaScript コードから観察する限り、これはただの普通のモジュールです。</p>

<p>ファイルを作りました。これを試してみましょう。</p>

<pre class="brush: bash no-line-numbers">$ npm install
$ npm run serve</pre>

<p>これでウェブサーバーが起動します。http://localhost:8080 を読み込んでください。<code>Hello, WebAssembly!</code> と書かれたアラートボックスが画面に出てくるはずです。JavaScript からの Rust の呼び出しと Rust からの JavaScript の呼び出しに成功しました。</p>

<h2 id="Conclusion" name="Conclusion">結び</h2>

<p>ここでチュートリアルは終わりです。あなたの役に立ったと思われることを望みます。</p>

<p>この領域にはたくさんの進行中の刺激的な仕事があります。もしそれをもっとよくするのを手伝いたいなら、<a href="http://fitzgeraldnick.com/2018/02/27/wasm-domain-working-group.html">Rust Webassembly Working Group</a> を確認してください。</p>

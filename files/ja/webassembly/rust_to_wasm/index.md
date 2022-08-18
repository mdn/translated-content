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
{{WebAssemblySidebar}}

Rust のコードがあれば、それを [WebAssembly](/ja/docs/WebAssembly) (wasm) にコンパイルすることができます。このチュートリアルでは Rust プロジェクトをコンパイルして既存のウェブアプリケーションで使用するために必要なことについて説明します。

## Rust と WebAssembly のユースケース

Rust と WebAssembly には、主に 2 つのユースケースがあります。

- アプリケーション全体を構築する — ウェブアプリ全体を Rust ベースで構築します。
- アプリケーションの一部を構築する — 既存の JavaScript フロントエンドの内部で Rust を使用します。

今のところ、Rust チームは後者のケースに焦点を当てているので、ここではこれについて説明します。前者の場合、[`yew`](https://github.com/DenisKolodin/yew) のようなプロジェクトをチェックアウトしてください。

このチュートリアルでは、Rust で npm パッケージを構築するためのツールである `wasm-pack` を使用して npm パッケージを構築します。このパッケージには WebAssembly と JavaScript のコードしか含まれていないため、パッケージのユーザーは Rust をインストールする必要がありません。WebAssembly で書かれていることにすら気づかないかもしれません。

## Rust 開発環境のセットアップ

環境を整えるために必要なすべてのステップを踏んでみましょう。

### Rust のインストール

[Install Rust](https://www.rust-lang.org/install.html) ページに行って指示に従い、Rust をインストールしてください。これによって "rustup" と呼ばれる複数のバージョンの Rust を管理できるようにするツールがインストールされます。既定の設定では、通常の Rust 開発で使いたいであろう最新の安定版 Rust リリースをインストールします。rustup は Rust コンパイラの `rustc` や Rust のパッケージマネージャーの `cargo` や Rust の標準ライブラリの `rust-std` やいくつかの助けになるドキュメント — `rust-docs` をインストールします。

> **Note:** **メモ**: インストール後のメモで、cargo の `bin` ディレクトリーをシステムの `PATH` に追加する必要があるという点に注意してください。これは自動的に追加されるはずですが、有効にするためにターミナルを再起動する必要があります。

### wasm-pack

パッケージをビルドするには、`wasm-pack` という追加のツールが必要です。これは `npm` 向けに正しくパッケージングをすることだけでなく、WebAssembly にコードをコンパイルするのにも役立ちます。ダウンロードしてインストールするには、ターミナルに次のコマンドを入力します。

```bash
$ cargo install wasm-pack
```

### Node.js のインストールと npm アカウントの取得

このチュートリアルでは npm パッケージをビルドするので、Node.js と npm のインストールが必要になります。さらに、パッケージを npm にパブリッシュするので、npm アカウントも必要になります。それらは無料です。*技術的には*パッケージをパブリッシュする必要はありませんが、そのほうが簡単に使用できるので、このチュートリアルではそうすると仮定します。

Node.js と npm を取得するために、[Get npm!](https://www.npmjs.com/get-npm) ページに行き、手順に従ってください。バージョンの選択に関しては、好きなバージョンを選択してください。このチュートリアルはバージョンに特有ではありません。

npm アカウントを取得するために、[npm signup page](https://www.npmjs.com/signup) に行き、フォームに記入してください。

次に、コマンドラインで `npm adduser` を実行してください。

```bash
$ npm adduser
Username: yournpmusername
Password:
Email: (this IS public) you@example.com
```

ユーザー名とパスワードとメールアドレスを記入してください。うまくいけば、以下の表示が見られます。

```bash
Logged in as yournpmusername on https://registry.npmjs.org/.
```

もし何かうまくいかなければ、トラブルシューティングのヘルプを得るために npm に連絡してください。

## WebAssembly の npm パッケージのビルド

セットアップは以上です。Rust で新しいパッケージを作りましょう。個人的なプロジェクトを置いておく場所へ移動して以下を実行してください。

```bash
$ cargo new --lib hello-wasm
     Created library `hello-wasm` project
```

これにより新たなライブラリが出発に必要なものすべてと一緒に `hello-wasm` という名前のサブディレクトリーに作成されます。

<pre class="brush: none no-line-numbers">+-- Cargo.toml
+-- src
    +-- lib.rs</pre>

まず `Cargo.toml` があります。これはビルドを設定するためのファイルです。もし `Gemfile` を Bundler から使ったり、`package.json` を npm から使ったりしたことがあるなら、なじみがあるでしょう。cargo は両者と似たような動作をします。

次に、cargo はいくつかの Rust コードを `src/lib.rs` に生成してくれています。

<pre class="brush: rust;">#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}</pre>

このチュートリアルでは、このテストコードはまったく使わないので、消してください。

### Rust を書いてみよう

代わりに以下のコードを `src/lib.rs` に書き込みましょう。

<pre class="brush: rust">extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
    pub fn alert(s: &#x26;str);
}

#[wasm_bindgen]
pub fn greet(name: &#x26;str) {
    alert(&#x26;format!("Hello, {}!", name));
}</pre>

これが Rust プロジェクトの中身です。三つの主要な部分があります。順番に説明しましょう。ここでは高水準な説明を行い、細部は省略します。Rust についてもっと学びたいのであれば、無料のオンラインブック [The Rust Programming Language](https://doc.rust-lang.org/book/) (訳注: [和訳](https://doc.rust-jp.rs/book/second-edition/)もあります) を確認してください。

#### `wasm-bindgen` を使用して Rust と JavaScript を協調させる

最初の部分は以下のようになっています。

<pre class="brush: rust">extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;</pre>

1 行目は「やあ Rust、`wasm_bindgen` というライブラリを使ってるよ」ということです。ライブラリは Rust では「クレート」と呼ばれ、外部 (external) のクレートを使っているので `extern` キーワードを使用しています。

理解できましたか？ _Cargo_ が*クレート*を取り入れるのです。

3 行目にはコードをライブラリから自分のコードにインポートする `use` コマンドがあります。この場合、`wasm_bindgen::prelude` モジュールにあるものすべてをインポートしています。これらの機能は次の節で使用します。

次の節に移動する前に、もう少し `wasm-bindgen` について話しておいたほうがいいでしょう。

`wasm-pack` は 別のツールの `wasm-bindgen` を利用して、JavaScript と Rust の型を繋いでいます。`wasm-bindgen` によって JavaScript が文字列に関する Rust API を呼び出すことや Rust の関数が JavaScript の例外をキャッチすることができるようになります。

パッケージ内で `wasm-bindgen` の機能を使うことになるでしょう。実際、次の節で利用します。

#### JavaScript 内の外部関数を Rust から呼び出す。

次の部分は以下のようになっています。

<pre class="brush: rust;">#[wasm_bindgen]
extern {
    pub fn alert(s: &#x26;str);
}</pre>

`#[ ]` の内側は「アトリビュート」と呼ばれ、次に来る文を何らかの形で修飾します。この場合、その文は外部で定義された関数を呼び出したいことを Rust に伝える `extern` です。アトリビュートは「wasm-bindgen はこれらの関数を見つける方法を知っている」ということを意味しています。

3 行目は関数の Rust で書かれたシグニチャです。「`alert` 関数は `s` という名前の引数を一つ取る」ということを意味しています。

お察しの通り、これは [JavaScript によって提供される `alert` 関数](/ja/docs/Web/API/Window/alert)です。次の節でこの関数を呼び出します。

JavaScript 関数を呼び出したい時はいつでも、このファイルに追加すれば、`wasm-bindgen` があらゆるセットアップの世話をしてくれます。まだすべてに対応している訳ではありませんが、作業をしています。何か見つからないものがあれば[バグを報告](https://github.com/rustwasm/wasm-bindgen/issues/new)してください。

#### JavaScript が呼び出せる Rust 関数の作成

最後の部分は以下のコードです。

<pre class="brush: rust">#[wasm_bindgen]
pub fn greet(name: &#x26;str) {
    alert(&#x26;format!("Hello, {}!", name));
}</pre>

再び `#[wasm_bindgen]` アトリビュートが目に入ります。この場合、`extern` ブロックではなく `fn` を改変しています。これは JavaScript がこの Rust 関数を呼び出せるようにしてほしいということを意味します。これは `extern` とは逆です。自分が必要とする関数ではなく、外の世界に渡す関数なのです。

この関数は `greet` という名前で、引数に (`&str` と書かれる) 文字列 `name` を一つ取ります。そしてそれは上の `extern` ブロックで要求した alert 関数を呼び出します。文字列を結合する `format!` マクロに呼び出しを渡します。

`format!` マクロはこの場合フォーマット文字列とそこに挿入する変数の二つの引数を取ります。フォーマット文字列は `"Hello, {}!"` の部分です。それは変数が補完される `{}` を含みます。渡している変数は関数の引数 `name` なので、`greet("Steve")` と呼び出すと `"Hello, Steve!"` が見られるはずです。

これは alert() に渡されるので、この関数を呼び出すと "Hello, Steve!" と書かれたアラートボックスが現れるでしょう。

ライブラリを書いたので、それをビルドしましょう。

### コードを WebAssembly にコンパイルする

コードを正しくコンパイルするには、はじめに `Cargo.toml` で設定する必要があります。`Cargo.toml` を開き、以下のように中身を変更してください。

<pre class="brush: toml">[package]
name = "hello-wasm"
version = "0.1.0"
authors = ["Your Name &#x3C;you@example.com>"]
description = "A sample project with wasm-pack"
license = "MIT/Apache-2.0"
repository = "https://github.com/yourgithubusername/hello-wasm"

[lib]
crate-type = ["cdylib"]

[dependencies]
wasm-bindgen = "0.2"</pre>

自分自身のリポジトリを記入し、`git` が `authors` フィールドに使用するものと同じ情報を使用してください。

追加する大部分は下にあるものです。最初の部分 — `[lib]` — は Rust にパッケージの cdylib バージョンをビルドするよう伝えます。何を意味するかはこのチュートリアルでは掘り下げません。もっと知るには、[Cargo](https://doc.rust-lang.org/cargo/guide/) と [Rust Linkage](https://doc.rust-lang.org/reference/linkage.html) のドキュメンテーションを調べてください。

第二の項は `[dependencies]` の項です。ここで Cargo にどのバージョンの `wasm-bindgen` に依存させるかを知らせます。今回の場合、バージョン `0.2.z` のいずれかのものです (`0.3.0` やそれ以上ではありません)。

### パッケージのビルド

すべてのセットアップが完了したので、ビルドしましょう。ターミナルに以下のものを入力してください。

```bash
$ wasm-pack build --scope mynpmusername
```

このコマンドは多くのことをします (そして時間がかかます。特に初めて `wasm-pack` を実行したときはそうです)。それらについて詳しく学ぶには、[Mozilla Hacks のこのブログ投稿](https://hacks.mozilla.org/2018/04/hello-wasm-pack/)を確認してください。手短に説明すると、`wasm-pack build` は次のことをします。

1.  Rust コードを WebAssembly にコンパイルする。
2.  `wasm-bindgen` をその WebAssembly に対して実行し、WebAssembly ファイルを npm が理解できるモジュールにラップする JavaScript ファイルを生成する。
3.  `pkg` ディレクトリーを作成し、その JavaScript ファイルと WebAssembly コードをそこに移動する。
4.  `Cargo.toml` を読み、等価な `package.json` を生成する。
5.  (もし存在するなら) `README.md` をパッケージにコピーする。

最終的な結果は？ npm パッケージが `pkg` ディレクトリーに生成されます。

#### コードサイズについての余談

生成された WebAssembly のコードサイズについて確認すると、それはおそらく数百キロバイトでしょう。Rust にはサイズの最適化をまったく指示しておらず、最適化すればサイズを大幅に削減できます。これはこのチュートリアルの脱線ですが、もしもっと学習したいなら、Rust WebAssembly Working Group の[.wasm のサイズの縮小](https://rustwasm.github.io/book/game-of-life/code-size.html#shrinking-wasm-size)を確認してください。

### パッケージの npm への発行

この新たなパッケージを npm レジストリに発行しましょう。

```bash
$ cd pkg
$ npm publish --access=public
```

Rust で書かれ、WebAssembly にコンパイルされた npm パッケージができました。JavaScript から利用する準備ができており、ユーザーが Rust をインストールすることを必要としません。コードに含まれているのは WebAssembly コードであり、Rust のソースではないのです。

## パッケージのウェブでの利用

この新たなパッケージを利用するウェブサイトを構築しましょう。多くの人が様々なバンドラーツールで npm のパッケージを利用していますが、このチュートリアルではそのうちの一つである `webpack` を使用します。これは若干複雑ですが、現実的なユースケースを示します。

`pkg` ディレクトリーの外に戻り、新たなディレクトリー `site` を作成し、そこでこれを試してみましょう。

```bash
$ cd ../..
$ mkdir site
$ cd site
```

新しいファイル `package.json` を作成し、次のコードをそこに書き込んでください。

```json
{
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
}
```

dependencies の項の `@` の後に自分自身のユーザー名を記入する必要があることに注意してください。

次に、Webpack を設定する必要があります。`webpack.config.js` を作成し、そこに次のことを記入してください。

```js
const path = require('path');
module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  mode: "development"
};
```

さて HTML ファイルが必要です。`index.html` を作成し、次の内容を追加してください。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>hello-wasm example</title>
  </head>
  <body>
    <script src="./index.js"></script>
  </body>
</html>
```

最後に、HTML ファイルで参照される `index.js` を作成し、以下の内容を追加してください。

```js
const js = import("./node_modules/@yournpmusername/hello-wasm/hello_wasm.js");
js.then(js => {
  js.greet("WebAssembly");
});
```

また npm のユーザー名を記入する必要があることに注意してください。

これは新しいモジュールを `node_modules` フォルダーからインポートします。これは最善の方法ではないと思いますが、デモなので、これでいいでしょう。一度そのモジュールが読み込まれると、そこから `greet` 関数を呼び出し、`"WebAssembly"` を文字列として渡します。ここに特別なことはなにもありませんが、Rust コードを呼び出していることに注意してください。JavaScript コードから観察する限り、これはただの普通のモジュールです。

ファイルを作りました。これを試してみましょう。

```bash
$ npm install
$ npm run serve
```

これでウェブサーバーが起動します。http\://localhost:8080 を読み込んでください。`Hello, WebAssembly!` と書かれたアラートボックスが画面に出てくるはずです。JavaScript からの Rust の呼び出しと Rust からの JavaScript の呼び出しに成功しました。

## 結び

ここでチュートリアルは終わりです。あなたの役に立ったと思われることを望みます。

この領域にはたくさんの進行中の刺激的な仕事があります。もしそれをもっとよくするのを手伝いたいなら、[Rust Webassembly Working Group](http://fitzgeraldnick.com/2018/02/27/wasm-domain-working-group.html) を確認してください。

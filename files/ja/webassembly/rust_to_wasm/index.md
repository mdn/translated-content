---
title: Rust から WebAssembly にコンパイル
slug: WebAssembly/Rust_to_Wasm
l10n:
  sourceCommit: 4a6dacf8c68925a8538585be3b2728bcb271241e
---

{{WebAssemblySidebar}}

Rust のコードがあれば、それを [WebAssembly](/ja/docs/WebAssembly) (Wasm) にコンパイルすることができます。このチュートリアルでは、Rust プロジェクトを WebAssembly にコンパイルし、既存のウェブアプリケーションで使用する方法を示します。

## Rust と WebAssembly の用途

Rust と WebAssembly には、主に 2 つの用途があります。

- アプリケーション全体を構築する — ウェブアプリ全体を Rust ベースで構築します。
- アプリケーションの一部を構築する — 既存の JavaScript フロントエンドの内部で Rust を使用します。

今のところ、Rust チームは後者のケースに焦点を当てているので、ここではこれについて説明します。前者の場合、[`yew`](https://github.com/DenisKolodin/yew) のようなプロジェクトをチェックアウトしてください。

このチュートリアルでは、Rust で npm パッケージを構築するためのツールである `wasm-pack` を使用して npm パッケージを構築します。このパッケージには WebAssembly と JavaScript のコードしか含まれていないため、パッケージのユーザーは Rust をインストールする必要がありません。WebAssembly で書かれていることにすら気づかないかもしれません。

## Rust 開発環境のセットアップ

環境を整えるために必要なすべてのステップを踏んでみましょう。

### Rust のインストール

[Install Rust](https://www.rust-lang.org/install.html) ページに行って指示に従い、Rust をインストールしてください。これによって "rustup" と呼ばれる複数のバージョンの Rust を管理できるようにするツールがインストールされます。既定の設定では、通常の Rust 開発で使いたいであろう最新の安定版 Rust リリースをインストールします。rustup は Rust コンパイラーの `rustc` や Rust のパッケージマネージャーの `cargo` や Rust の標準ライブラリーの `rust-std` やいくつかの助けになるドキュメント — `rust-docs` をインストールします。

> **メモ:** インストール後のメモで、cargo の `bin` ディレクトリーをシステムの `PATH` に追加する必要があるという点に注意してください。これは自動的に追加されるはずですが、有効にするためにターミナルを再起動する必要があります。

### wasm-pack

パッケージをビルドするには、`wasm-pack` という追加のツールが必要です。これは `npm` 向けに正しくパッケージングをすることだけでなく、WebAssembly にコードをコンパイルするのにも役立ちます。ダウンロードしてインストールするには、ターミナルに次のコマンドを入力します。

```bash
cargo install wasm-pack
```

## WebAssembly パッケージのビルド

セットアップは以上です。 Rust で新しいパッケージを作りましょう。個人的なプロジェクトを置いておく場所へ移動して以下を実行してください。

```bash
$ cargo new --lib hello-wasm
     Created library `hello-wasm` project
```

これにより新たなライブラリーが出発に必要なものすべてと一緒に `hello-wasm` という名前のサブディレクトリーに作成されます。

```plain
├── Cargo.toml
└── src
    └── lib.rs
```

まず `Cargo.toml` があります。これはビルドを設定するためのファイルです。もし `Gemfile` を Bundler から使ったり、`package.json` を npm から使ったりしたことがあるなら、なじみがあるでしょう。cargo は両者と似たような動作をします。

次に、 Cargo はいくつかの Rust コードを `src/lib.rs` に生成してくれています。

```rust
#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}
```

このチュートリアルでは、このテストコードはまったく使わないので、消してください。

### Rust を書いてみよう

代わりに以下のコードを `src/lib.rs` に書き込みましょう。

```rust
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}
```

これが Rust プロジェクトの中身です。三つの主要な部分があります。順番に説明しましょう。ここでは高水準な説明を行い、細部は省略します。Rust についてもっと学びたいのであれば、無料のオンラインブック [The Rust Programming Language](https://doc.rust-lang.org/book/) (訳注: [和訳](https://doc.rust-jp.rs/book/second-edition/)もあります) を確認してください。

#### `wasm-bindgen` を使用して Rust と JavaScript を協調させる

最初の部分は以下のようになっています。

```rust
use wasm_bindgen::prelude::*;
```

ライブラリーは Rust では「クレート」と呼ばれます。

理解できましたか？ _Cargo_ が*クレート*を取り入れるのです。

3 行目にはコードをライブラリーから自分のコードにインポートする `use` コマンドがあります。この場合、`wasm_bindgen::prelude` モジュールにあるものすべてをインポートしています。これらの機能は次の節で使用します。

次の節に移動する前に、もう少し `wasm-bindgen` について話しておいたほうがいいでしょう。

`wasm-pack` は 別のツールの `wasm-bindgen` を利用して、JavaScript と Rust の型を繋いでいます。`wasm-bindgen` によって JavaScript が文字列に関する Rust API を呼び出すことや Rust の関数が JavaScript の例外をキャッチすることができるようになります。

パッケージ内で `wasm-bindgen` の機能を使うことになるでしょう。実際、次の節で利用します。

#### JavaScript 内の外部関数を Rust から呼び出す。

次の部分は以下のようになっています。

```rust
#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}
```

`#[ ]` の内側は「属性」と呼ばれ、次に来る文を何らかの形で修飾します。この場合、その文は外部で定義された関数を呼び出したいことを Rust に伝える `extern` です。属性は「wasm-bindgen はこれらの関数を見つける方法を知っている」ということを意味しています。

3 行目は関数の Rust で書かれたシグニチャです。「`alert` 関数は `s` という名前の引数を一つ取る」ということを意味しています。

お察しの通り、これは [JavaScript によって提供される `alert` 関数](/ja/docs/Web/API/Window/alert)です。次の節でこの関数を呼び出します。

JavaScript 関数を呼び出したい時はいつでも、このファイルに追加すれば、`wasm-bindgen` があらゆるセットアップの世話をしてくれます。まだすべてに対応している訳ではありませんが、作業をしています。何か見つからないものがあれば[バグを報告](https://github.com/rustwasm/wasm-bindgen/issues/new)してください。

#### JavaScript が呼び出せる Rust 関数の作成

最後の部分は以下のコードです。

```rust
#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}
```

再び `#[wasm_bindgen]` 属性が目に入ります。この場合、`extern` ブロックではなく `fn` を改変しています。これは JavaScript がこの Rust 関数を呼び出せるようにしてほしいということを意味します。これは `extern` とは逆です。自分が必要とする関数ではなく、外の世界に渡す関数なのです。

この関数は `greet` という名前で、引数に (`&str` と書かれる) 文字列 `name` を一つ取ります。そしてそれは上の `extern` ブロックで要求した alert 関数を呼び出します。文字列を結合する `format!` マクロに呼び出しを渡します。

`format!` マクロはこの場合フォーマット文字列とそこに挿入する変数の二つの引数を取ります。フォーマット文字列は `"Hello, {}!"` の部分です。それは変数が補完される `{}` を含みます。渡している変数は関数の引数 `name` なので、`greet("Steve")` と呼び出すと `"Hello, Steve!"` が見られるはずです。

これは alert() に渡されるので、この関数を呼び出すと "Hello, Steve!" と書かれたアラートボックスが現れるでしょう。

ライブラリーを書いたので、それをビルドしましょう。

### コードを WebAssembly にコンパイルする

コードを正しくコンパイルするには、はじめに `Cargo.toml` で設定する必要があります。`Cargo.toml` を開き、以下のように中身を変更してください。

```toml
[package]
name = "hello-wasm"
version = "0.1.0"
authors = ["Your Name <you@example.com>"]
description = "A sample project with wasm-pack"
license = "MIT/Apache-2.0"
repository = "https://github.com/yourgithubusername/hello-wasm"
edition = "2018"

[lib]
crate-type = ["cdylib"]

[dependencies]
wasm-bindgen = "0.2"
```

自分自身のリポジトリを記入し、`git` が `authors` フィールドに使用するものと同じ情報を使用してください。

追加する大部分は下にあるものです。最初の部分 — `[lib]` — は Rust にパッケージの cdylib バージョンをビルドするよう伝えます。何を意味するかはこのチュートリアルでは掘り下げません。もっと知るには、[Cargo](https://doc.rust-lang.org/cargo/guide/) と [Rust Linkage](https://doc.rust-lang.org/reference/linkage.html) のドキュメンテーションを調べてください。

第二の項は `[dependencies]` の項です。ここで Cargo にどのバージョンの `wasm-bindgen` に依存させるかを知らせます。今回の場合、バージョン `0.2.z` のいずれかのものです (`0.3.0` やそれ以上ではありません)。

### パッケージのビルド

すべてのセットアップが完了したので、ビルドしましょう。ターミナルに以下のものを入力してください。

```bash
wasm-pack build --target web
```

このコマンドは多くのことをします (そして時間がかかます。特に初めて `wasm-pack` を実行したときはそうです)。それらについて詳しく学ぶには、[Mozilla Hacks のこのブログ投稿](https://hacks.mozilla.org/2018/04/hello-wasm-pack/)を確認してください。手短に説明すると、`wasm-pack build` は次のことをします。

1. Rust コードを WebAssembly にコンパイルする。
2. `wasm-bindgen` をその WebAssembly に対して実行し、WebAssembly ファイルを npm が理解できるモジュールにラップする JavaScript ファイルを生成する。
3. `pkg` ディレクトリーを作成し、その JavaScript ファイルと WebAssembly コードをそこに移動する。
4. `Cargo.toml` を読み、等価な `package.json` を生成する。
5. (もし存在するなら) `README.md` をパッケージにコピーする。

最終的な結果は？ npm パッケージが `pkg` ディレクトリーに生成されます。

#### コードサイズについての余談

生成された WebAssembly のコードサイズについて確認すると、それはおそらく数百キロバイトでしょう。Rust にはサイズの最適化をまったく指示しておらず、最適化すればサイズを大幅に削減できます。これはこのチュートリアルの脱線ですが、もしもっと学習したいなら、Rust WebAssembly Working Group の[.wasm のサイズの縮小](https://rustwasm.github.io/book/game-of-life/code-size.html#shrinking-wasm-size)を確認してください。

## パッケージのウェブでの利用

さて、コンパイルされた Wasm モジュールが入手できたので、ブラウザーで動かしてみましょう。
まず `index.html` というファイルをプロジェクトのルートに作成するところから始めましょう。最終的には以下のようなプロジェクト構造になります。

```plain
├── Cargo.lock
├── Cargo.toml
├── index.html
├── pkg
│   ├── hello_wasm.d.ts
│   ├── hello_wasm.js
│   ├── hello_wasm_bg.wasm
│   ├── hello_wasm_bg.wasm.d.ts
│   └── package.json
├── src
│   └── lib.rs
└── target
    ├── CACHEDIR.TAG
    ├── release
    └── wasm32-unknown-unknown
```

`index.html` ファイルの内容は以下のようなものです。

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>hello-wasm example</title>
  </head>
  <body>
    <script type="module">
      import init, { greet } from "./pkg/hello_wasm.js";
      init().then(() => {
        greet("WebAssembly");
      });
    </script>
  </body>
</html>
```

このファイルのスクリプトは、js グルーコードをインポートし、Wasm モジュールを初期化し、rust で書いた `greet` 関数を呼び出します。

プロジェクトのルートディレクトリーに、ローカルのウェブサーバーを用意します（例: `python3 -m http.server`）。やり方がよくわからない場合は、[シンプルなローカル HTTP サーバーの実行](/ja/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server#シンプルなローカル_http_サーバーの実行)を参考にしてください。

> **メモ:** 必ず `application/wasm` という MIME 型に対応している最新のウェブサーバーを使用してください。古いウェブサーバーでは、まだ対応していないかもしれません。

ウェブサーバーから `index.html` を読み込む （Python3 の例を使用する場合: `http://localhost:8000`）。 画面上にアラートボックスが現れ、 `Hello, WebAssembly!` と表示されます。 JavaScript から Rust へ、そして Rust から JavaScript への呼び出しに成功しました。

## npm でパッケージが利用できるようにする

WebAssembly モジュールを npm で使用する場合、いくつかの変更が必要です。

まず、Rust を target bundler オプションで再コンパイルすることから始めましょう。

```bash
wasm-pack build --target bundler
```

### Node.js と npm のインストール

npmパッケージを構築しているので、Node.jsと npm をインストールしておく必要があります。

Node.js と npm を入手するには、 [Get npm!](https://docs.npmjs.com/getting-started/) ページへ移動して指示に従ってください。
このチュートリアルでは node 16 をターゲットとしていますので、node のバージョンを切り替えたい場合は、[nvm](https://github.com/nvm-sh/nvm) を使用してください。

次に、インストールした他の JavaScript パッケージがこのパッケージを利用できるようにするために、`npm link` を使用しましょう。

```bash
cd pkg
npm link
```

Rust で書かれ、 WebAssembly にコンパイルされた npm パッケージができました。JavaScript から利用する準備ができており、ユーザーが Rust をインストールすることを必要としません。コードに含まれているのは WebAssembly コードであり、Rust のソースではないのです。

## パッケージのウェブでの利用

この新たなパッケージを利用するウェブサイトを構築しましょう。多くの人が様々なバンドラーツールで npm のパッケージを利用していますが、このチュートリアルではそのうちの一つである `webpack` を使用します。これは若干複雑ですが、現実的なユースケースを示します。

`pkg` ディレクトリーの外に戻り、新たなディレクトリー `site` を作成し、そこでこれを試してみましょう。

```bash
cd ..
mkdir site
cd site
npm link hello-wasm
```

新しいファイル `package.json` を作成し、次のコードをそこに書き込んでください。

```json
{
  "scripts": {
    "serve": "webpack-dev-server"
  },
  "dependencies": {
    "hello-wasm": "^0.1.0"
  },
  "devDependencies": {
    "webpack": "^4.25.1",
    "webpack-cli": "^3.1.2",
    "webpack-dev-server": "^3.1.10"
  }
}
```

次に、Webpack を設定する必要があります。`webpack.config.js` を作成し、そこに次のことを記入してください。

```js
const path = require("path");
module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  mode: "development",
};
```

次に、HTML ファイルで参照される `index.js` を作成し、以下の内容を追加してください。

```js
import("./node_modules/hello-wasm/hello_wasm.js").then((js) => {
  js.greet("WebAssembly with npm");
});
```

これは新しいモジュールを `node_modules` フォルダーからインポートします。これは最善の方法ではないと思いますが、デモなので、これでいいでしょう。一度そのモジュールが読み込まれると、そこから `greet` 関数を呼び出し、`"WebAssembly"` を文字列として渡します。ここに特別なことはなにもありませんが、Rust コードを呼び出していることに注意してください。JavaScript コードから観察する限り、これはただの普通のモジュールです。

最後に、JavaScript を読み込むための HTML ファイルを追加します。`index.html` ファイルを作成し、以下の内容を追加してください。

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>hello-wasm example</title>
  </head>
  <body>
    <script src="./index.js"></script>
  </body>
</html>
```

`hello-wasm/site` ディレクトリーは次のようになります。

```plain
├── index.html
├── index.js
├── node_modules
│   └── hello-wasm -> ../../pkg
├── package.json
└── webpack.config.js
```

ファイルを作りました。これを試してみましょう。

```bash
npm install
npm run serve
```

これでウェブサーバーが起動します。 `http://localhost:8080` を読み込んでください。 `Hello, WebAssembly!` と書かれたアラートボックスが画面に出てくるはずです。JavaScript からの Rust の呼び出しと Rust からの JavaScript の呼び出しに成功しました。

## おわりに

ここでチュートリアルは終わりです。あなたの役に立ったと思われることを望みます。

この領域にはたくさんの進行中の刺激的な仕事があります。もしそれをもっとよくするのを手伝いたいなら、 [the Rust WebAssembly Working Group](https://fitzgeraldnick.com/2018/02/27/wasm-domain-working-group.html) を確認してください。

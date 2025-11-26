---
title: Rust から WebAssembly にコンパイル
slug: WebAssembly/Guides/Rust_to_Wasm
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

Rust のコードがあれば、それを [WebAssembly](/ja/docs/WebAssembly) (Wasm) にコンパイルすることができます。このチュートリアルでは、Rust プロジェクトを WebAssembly にコンパイルし、既存のウェブアプリケーションで使用する方法を示します。

## Rust と WebAssembly の用途

Rust と WebAssembly には、主に 2 つの用途があります。

- アプリケーション全体を構築する — ウェブアプリ全体を Rust ベースで構築します。
- アプリケーションの一部を構築する — 既存の JavaScript フロントエンドの内部で Rust を使用します。

今のところ、Rust チームは後者のケースに焦点を当てているので、ここではこれについて説明します。前者の場合、[`yew`](https://github.com/yewstack/yew) や [leptos](https://github.com/leptos-rs/leptos) のようなプロジェクトをチェックアウトしてください。

このチュートリアルでは、Rust で JavaScript パッケージを構築するためのツールである `wasm-pack` を使用してパッケージを構築します。このパッケージには WebAssembly と JavaScript コードのみが含まれているため、ユーザーは Rust をインストールする必要はありません。Rust で記述されていることにも気付かないかもしれません。

## Rust 開発環境のセットアップ

環境を整えるために必要なすべてのステップを踏んでみましょう。

### Rust のインストール

[Install Rust](https://www.rust-lang.org/tools/install) ページに行って指示に従い、Rust をインストールしてください。これによって "rustup" と呼ばれる複数のバージョンの Rust を管理できるようにするツールがインストールされます。既定の設定では、通常の Rust 開発で使いたいであろう最新の安定版 Rust リリースをインストールします。rustup は Rust コンパイラーの `rustc` や Rust のパッケージマネージャーの `cargo` や Rust の標準ライブラリーの `rust-std` やいくつかの助けになるドキュメント — `rust-docs` をインストールします。

> [!NOTE]
> インストール後のメモで、cargo の `bin` ディレクトリーをシステムの `PATH` に追加する必要があるという点に注意してください。これは自動的に追加されるはずですが、有効にするためにターミナルを再起動する必要があります。

### wasm-pack

パッケージをビルドするには、`wasm-pack` という追加のツールが必要です。これは `npm` 向けに正しくパッケージングをすることだけでなく、WebAssembly にコードをコンパイルするのにも役立ちます。ダウンロードしてインストールするには、ターミナルに次のコマンドを入力します。

```bash
cargo install wasm-pack
```

## WebAssembly パッケージのビルド

セットアップは以上です。 Rust で新しいパッケージを作りましょう。個人的なプロジェクトを置いておく場所へ移動して以下を実行してください。

```bash
cargo new --lib hello-wasm
```

これにより新たなライブラリーが出発に必要なものすべてと一緒に `hello-wasm` という名前のサブディレクトリーに作成されます。

```plain
├── Cargo.toml
└── src
    └── lib.rs
```

まず `Cargo.toml` があります。これはビルドを設定するためのファイルです。これは、Bundler の `Gemfile` や npm の `package.json` とよく似た動作をします。

Cargo はいくつかの Rust コードを `src/lib.rs` に生成してくれています。

```rust
pub fn add(left: u64, right: u64) -> u64 {
    left + right
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let result = add(2, 2);
        assert_eq!(result, 4);
    }
}
```

### Rust を書いてみよう

上記で生成された `src/lib.rs` コードは使用しません。次のコードに置き換えてください。

```rust
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
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

理解できましたか？ _Cargo_ がクレートを取り入れるのです。

1 行目にはコードをライブラリーから自分のコードにインポートする `use` コマンドがあります。この場合、`wasm_bindgen::prelude` モジュールにあるものすべてをインポートしています。これらの機能は次の節で使用します。

次の節に移動する前に、もう少し `wasm-bindgen` について話しておいたほうがいいでしょう。

`wasm-pack` は 別のツールの `wasm-bindgen` を利用して、JavaScript と Rust の型を繋いでいます。`wasm-bindgen` によって JavaScript が文字列に関する Rust API を呼び出すことや Rust の関数が JavaScript の例外をキャッチすることができるようになります。

パッケージ内で `wasm-bindgen` の機能を使うことになるでしょう。実際、次の節で利用します。

#### JavaScript 内の外部関数を Rust から呼び出す

次の部分は以下のようになっています。

```rust
#[wasm_bindgen]
extern "C" {
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
edition = "2021"

[lib]
crate-type = ["cdylib"]

[dependencies]
wasm-bindgen = "0.2"
```

自分自身のリポジトリーを記入し、`git` が `authors` フィールドに使用するものと同じ情報を使用してください。

追加する大部分は下にあるものです。最初の部分 — `[lib]` — は Rust にパッケージの cdylib バージョンをビルドするよう伝えます。何を意味するかはこのチュートリアルでは掘り下げません。もっと知るには、[Cargo](https://doc.rust-lang.org/cargo/guide/) と [Rust Linkage](https://doc.rust-lang.org/reference/linkage.html) のドキュメントを調べてください。

第二の項は `[dependencies]` の項です。ここで Cargo にどのバージョンの `wasm-bindgen` に依存させるかを知らせます。今回の場合、バージョン `0.2.z` のいずれかのものです (`0.3.0` やそれ以上ではありません)。

### パッケージのビルド

設定が完了しましたので、パッケージを構築しましょう。生成されたコードは、ネイティブ ES モジュールと Node.js で使用します。そのため、`wasm-pack build` の [`--target` 引数](https://rustwasm.github.io/docs/wasm-pack/commands/build.html#target)を使用して、生成する WebAssembly と JavaScript の種類を指定します。

まず、 `hello-wasm` ディレクトリー内で次のコマンドを実行します。

```bash
wasm-pack build --target web
```

このコマンドは多くのことをします。これらについて詳しく学ぶには、[Mozilla Hacks のこのブログ投稿](https://hacks.mozilla.org/2018/04/hello-wasm-pack/)を確認してください。手短に説明すると、`wasm-pack build` は次のことをします。

1. Rust コードを WebAssembly にコンパイルする。
2. `wasm-bindgen` をその WebAssembly に対して実行し、WebAssembly ファイルを npm が理解できるモジュールにラップする JavaScript ファイルを生成する。
3. `pkg` ディレクトリーを作成し、その JavaScript ファイルと WebAssembly コードをそこに移動する。
4. `Cargo.toml` を読み、等価な `package.json` を生成する。
5. (もし存在するなら) `README.md` をパッケージにコピーする。

最終的な結果は？ npm パッケージが `pkg` ディレクトリーに生成されます。

## パッケージのウェブでの利用

さて、コンパイルされた Wasm モジュールが入手できたので、ブラウザーで動かしてみましょう。
まず `index.html` というファイルをプロジェクトのルートに作成するところから始めましょう。最終的には以下のようなプロジェクト構造になります。

```plain
├── Cargo.lock
├── Cargo.toml
├── index.html  <-- 新しい index.html ファイル
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

プロジェクトのルートディレクトリーに、ローカルのウェブサーバーを用意します（例: `python3 -m http.server`）。やり方がよくわからない場合は、[シンプルなローカル HTTP サーバーの実行](/ja/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#シンプルなローカル_http_サーバーの実行)を参考にしてください。

> [!NOTE]
> 必ず `application/wasm` という MIME 型に対応している最新のウェブサーバーを使用してください。古いウェブサーバーでは、まだ対応していないかもしれません。

ウェブサーバーから `index.html` を読み込む （Python3 の例を使用する場合: `http://localhost:8000`）。 画面上にアラートボックスが現れ、 `Hello, WebAssembly!` と表示されます。 JavaScript から Rust へ、そして Rust から JavaScript への呼び出しに成功しました。

## npm でパッケージが利用できるようにする

npm パッケージを構築しているため、 Node.js および npm をインストールしておく必要があります。

Node.js および npm を取得するには、[Get npm!](https://docs.npmjs.com/getting-started/) ページに移動し、指示に従ってください。このチュートリアルは、node 20 を対象としています。
Node のバージョンを切り替えるには、[nvm](https://github.com/nvm-sh/nvm) を使用することができます。

npm で WebAssembly モジュールを使用するには、いくつかの変更を行う必要があります。まず、ターゲットとして bundler オプションを指定して Rust を再コンパイルすることから始めましょう。

```bash
wasm-pack build --target bundler
```

これで、Rust で記述され、WebAssembly にコンパイルされた npm パッケージができました。これは JavaScript から使用でき、ユーザーが Rust をインストールしている必要はありません。含まれているコードは、Rust ソースではなく WebAssembly コードです。

### パッケージのウェブでの利用

新しい npm パッケージを使用するウェブサイトを構築しましょう。多くの人々は、さまざまなバンドラツールを通じて npm パッケージを使用しています。このチュートリアルでは、そのうちの 1 つである `webpack` を使用します。これは少し複雑ですが、現実的な用途を示しています。

試してみるために、`hello-wasm` ディレクトリー内に `site` という新しいディレクトリーを作成しましょう。
まだ npm レジストリーにパッケージを公開していないので、`npm i /path/to/package` を使用してローカルバージョンからインストールすることができます。
[`npm link`](https://docs.npmjs.com/cli/v10/commands/npm-link/) を使用することもできますが、このデモではローカルパスからインストールする方が便利です。

```bash
mkdir site && cd site
npm i ../pkg
```

`webpack` の開発依存関係をインストールします。

```bash
npm i -D webpack@5 webpack-cli@5 webpack-dev-server@5 copy-webpack-plugin@12
```

次に、Webpack を設定する必要があります。`webpack.config.js` を作成し、そこに次のことを記入してください。

```js
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  mode: "development",
  experiments: {
    asyncWebAssembly: true,
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "index.html" }],
    }),
  ],
};
```

package.json に、先ほど作成した設定ファイルを使用して webpack を実行する build および serve スクリプトを追加します。

```json
{
  "scripts": {
    "build": "webpack --config webpack.config.js",
    "serve": "webpack serve --config webpack.config.js --open"
  },
  "dependencies": {
    "hello-wasm": "file:../pkg"
  },
  "devDependencies": {
    "copy-webpack-plugin": "^12.0.2",
    "webpack": "^5.97.1",
    "webpack-cli": "^5.1.4",
    "webpack-dev-server": "^5.1.0"
  }
}
```

次に、`index.js` という名前付きファイルを作成し、以下のコンテンツを記述してください。

```js
import * as wasm from "hello-wasm";

wasm.greet("WebAssembly with npm");
```

これにより、`node_modules` フォルダーからモジュールがインポートされ、`greet` 関数が呼び出され、`"WebAssembly with npm"` が文字列として渡されます。ここでは特別なことは何も行われていないにもかかわらず、Rust コードが呼び出されていることにご注目ください。JavaScript コードからは、これは通常のモジュールにすぎません。

最後に、JavaScript を読み込むための HTML ファイルを追加する必要があります。`index.html` ファイルを作成し、次の内容を追加してください。

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
├── node_modules
├── index.html
├── index.js
├── package-lock.json
├── package.json
└── webpack.config.js
```

ファイルを作りました。これを試してみましょう。

```bash
npm run serve
```

これにより、ウェブサーバーが起動し、 `http://localhost:8080` が開きます。画面に `Hello, WebAssembly with npm!` というテキストを含むアラートボックスが表示されます。これで、 npm で Rust モジュールを正常に使用できるようになりました。

ローカル開発以外で WebAssembly を使用したい場合は、hello-wasm ディレクトリー内で `pack` コマンドと `publish` コマンドを使用してパッケージを公開することができます。

```bash
wasm-pack pack
npm notice
npm notice 📦  hello-wasm@0.1.0
npm notice Tarball Contents
npm notice 2.9kB hello_wasm_bg.js
npm notice 16.7kB hello_wasm_bg.wasm
npm notice 85B hello_wasm.d.ts
npm notice 182B hello_wasm.js
npm notice 549B package.json
...
hello-wasm-0.1.0.tgz
[INFO]: 🎒  packed up your package!
```

npm に公開するには、[npm アカウント](https://www.npmjs.com/)が必要であり、 [`npm adduser`](https://docs.npmjs.com/cli/v10/commands/npm-adduser/) を使用してマシンを認証する必要があります。準備ができたら、内部で `npm publish` を呼び出す `wasm-pack` を使用して公開することができます。

```bash
wasm-pack publish
```

## おわりに

ここでチュートリアルは終わりです。あなたの役に立ったと思われることを望みます。

この世界では、エキサイティングな作業がたくさん行われています。さらに改善にご協力いただける方は、[Rust および WebAssembly ワーキンググループ](https://github.com/rustwasm/team/blob/master/README.md#get-involved)（英語）をご覧ください。

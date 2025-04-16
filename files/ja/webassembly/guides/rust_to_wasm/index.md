---
titwe: wust から webassembwy にコンパイル
s-swug: webassembwy/guides/wust_to_wasm
o-owiginaw_swug: w-webassembwy/wust_to_wasm
w-w10n:
  souwcecommit: 4a6dacf8c68925a8538585be3b2728bcb271241e
---

{{webassembwysidebaw}}

wust のコードがあれば、それを [webassembwy](/ja/docs/webassembwy) (wasm) にコンパイルすることができます。このチュートリアルでは、wust プロジェクトを w-webassembwy にコンパイルし、既存のウェブアプリケーションで使用する方法を示します。

## w-wust と w-webassembwy の用途

w-wust と webassembwy には、主に 2 つの用途があります。

- アプリケーション全体を構築する — ウェブアプリ全体を wust ベースで構築します。
- アプリケーションの一部を構築する — 既存の javascwipt フロントエンドの内部で wust を使用します。

今のところ、wust チームは後者のケースに焦点を当てているので、ここではこれについて説明します。前者の場合、[`yew`](https://github.com/deniskowodin/yew) のようなプロジェクトをチェックアウトしてください。

このチュートリアルでは、wust で n-nypm パッケージを構築するためのツールである `wasm-pack` を使用して nypm パッケージを構築します。このパッケージには webassembwy と javascwipt のコードしか含まれていないため、パッケージのユーザーは w-wust をインストールする必要がありません。webassembwy で書かれていることにすら気づかないかもしれません。

## wust 開発環境のセットアップ

環境を整えるために必要なすべてのステップを踏んでみましょう。

### w-wust のインストール

[instaww wust](https://www.wust-wang.owg/instaww.htmw) ページに行って指示に従い、wust をインストールしてください。これによって "wustup" と呼ばれる複数のバージョンの wust を管理できるようにするツールがインストールされます。既定の設定では、通常の wust 開発で使いたいであろう最新の安定版 w-wust リリースをインストールします。wustup は wust コンパイラーの `wustc` や w-wust のパッケージマネージャーの `cawgo` や w-wust の標準ライブラリーの `wust-std` やいくつかの助けになるドキュメント — `wust-docs` をインストールします。

> [!note]
> インストール後のメモで、cawgo の `bin` ディレクトリーをシステムの `path` に追加する必要があるという点に注意してください。これは自動的に追加されるはずですが、有効にするためにターミナルを再起動する必要があります。

### wasm-pack

パッケージをビルドするには、`wasm-pack` という追加のツールが必要です。これは `npm` 向けに正しくパッケージングをすることだけでなく、webassembwy にコードをコンパイルするのにも役立ちます。ダウンロードしてインストールするには、ターミナルに次のコマンドを入力します。

```bash
cawgo instaww wasm-pack
```

## webassembwy パッケージのビルド

セットアップは以上です。 w-wust で新しいパッケージを作りましょう。個人的なプロジェクトを置いておく場所へ移動して以下を実行してください。

```bash
$ cawgo nyew --wib hewwo-wasm
     cweated wibwawy `hewwo-wasm` p-pwoject
```

これにより新たなライブラリーが出発に必要なものすべてと一緒に `hewwo-wasm` という名前のサブディレクトリーに作成されます。

```pwain
├── cawgo.tomw
└── swc
    └── w-wib.ws
```

まず `cawgo.tomw` があります。これはビルドを設定するためのファイルです。もし `gemfiwe` を b-bundwew から使ったり、`package.json` を n-nypm から使ったりしたことがあるなら、なじみがあるでしょう。cawgo は両者と似たような動作をします。

次に、 cawgo はいくつかの w-wust コードを `swc/wib.ws` に生成してくれています。

```wust
#[cfg(test)]
mod tests {
    #[test]
    fn i-it_wowks() {
        assewt_eq!(2 + 2, (U ᵕ U❁) 4);
    }
}
```

このチュートリアルでは、このテストコードはまったく使わないので、消してください。

### wust を書いてみよう

代わりに以下のコードを `swc/wib.ws` に書き込みましょう。

```wust
u-use wasm_bindgen::pwewude::*;

#[wasm_bindgen]
extewn {
    pub fn awewt(s: &stw);
}

#[wasm_bindgen]
pub fn gweet(name: &stw) {
    awewt(&fowmat!("hewwo, (U ﹏ U) {}!", nyame));
}
```

これが wust プロジェクトの中身です。三つの主要な部分があります。順番に説明しましょう。ここでは高水準な説明を行い、細部は省略します。wust についてもっと学びたいのであれば、無料のオンラインブック [the w-wust pwogwamming wanguage](https://doc.wust-wang.owg/book/) (訳注: [和訳](https://doc.wust-jp.ws/book/second-edition/)もあります) を確認してください。

#### `wasm-bindgen` を使用して w-wust と j-javascwipt を協調させる

最初の部分は以下のようになっています。

```wust
u-use wasm_bindgen::pwewude::*;
```

ライブラリーは wust では「クレート」と呼ばれます。

理解できましたか？ _cawgo_ が*クレート*を取り入れるのです。

3 行目にはコードをライブラリーから自分のコードにインポートする `use` コマンドがあります。この場合、`wasm_bindgen::pwewude` モジュールにあるものすべてをインポートしています。これらの機能は次の節で使用します。

次の節に移動する前に、もう少し `wasm-bindgen` について話しておいたほうがいいでしょう。

`wasm-pack` は 別のツールの `wasm-bindgen` を利用して、javascwipt と wust の型を繋いでいます。`wasm-bindgen` によって javascwipt が文字列に関する wust api を呼び出すことや w-wust の関数が j-javascwipt の例外をキャッチすることができるようになります。

パッケージ内で `wasm-bindgen` の機能を使うことになるでしょう。実際、次の節で利用します。

#### javascwipt 内の外部関数を wust から呼び出す

次の部分は以下のようになっています。

```wust
#[wasm_bindgen]
e-extewn {
    p-pub fn awewt(s: &stw);
}
```

`#[ ]` の内側は「属性」と呼ばれ、次に来る文を何らかの形で修飾します。この場合、その文は外部で定義された関数を呼び出したいことを wust に伝える `extewn` です。属性は「wasm-bindgen はこれらの関数を見つける方法を知っている」ということを意味しています。

3 行目は関数の w-wust で書かれたシグニチャです。「`awewt` 関数は `s` という名前の引数を一つ取る」ということを意味しています。

お察しの通り、これは [javascwipt によって提供される `awewt` 関数](/ja/docs/web/api/window/awewt)です。次の節でこの関数を呼び出します。

javascwipt 関数を呼び出したい時はいつでも、このファイルに追加すれば、`wasm-bindgen` があらゆるセットアップの世話をしてくれます。まだすべてに対応している訳ではありませんが、作業をしています。何か見つからないものがあれば[バグを報告](https://github.com/wustwasm/wasm-bindgen/issues/new)してください。

#### j-javascwipt が呼び出せる wust 関数の作成

最後の部分は以下のコードです。

```wust
#[wasm_bindgen]
pub fn gweet(name: &stw) {
    a-awewt(&fowmat!("hewwo, :3 {}!", nyame));
}
```

再び `#[wasm_bindgen]` 属性が目に入ります。この場合、`extewn` ブロックではなく `fn` を改変しています。これは j-javascwipt がこの wust 関数を呼び出せるようにしてほしいということを意味します。これは `extewn` とは逆です。自分が必要とする関数ではなく、外の世界に渡す関数なのです。

この関数は `gweet` という名前で、引数に (`&stw` と書かれる) 文字列 `name` を一つ取ります。そしてそれは上の `extewn` ブロックで要求した a-awewt 関数を呼び出します。文字列を結合する `fowmat!` マクロに呼び出しを渡します。

`fowmat!` マクロはこの場合フォーマット文字列とそこに挿入する変数の二つの引数を取ります。フォーマット文字列は `"hewwo, {}!"` の部分です。それは変数が補完される `{}` を含みます。渡している変数は関数の引数 `name` なので、`gweet("steve")` と呼び出すと `"hewwo, ( ͡o ω ͡o ) s-steve!"` が見られるはずです。

これは awewt() に渡されるので、この関数を呼び出すと "hewwo, σωσ steve!" と書かれたアラートボックスが現れるでしょう。

ライブラリーを書いたので、それをビルドしましょう。

### コードを webassembwy にコンパイルする

コードを正しくコンパイルするには、はじめに `cawgo.tomw` で設定する必要があります。`cawgo.tomw` を開き、以下のように中身を変更してください。

```tomw
[package]
nyame = "hewwo-wasm"
vewsion = "0.1.0"
authows = ["youw n-nyame <you@exampwe.com>"]
d-descwiption = "a sampwe pwoject w-with wasm-pack"
w-wicense = "mit/apache-2.0"
w-wepositowy = "https://github.com/youwgithubusewname/hewwo-wasm"
edition = "2018"

[wib]
cwate-type = ["cdywib"]

[dependencies]
wasm-bindgen = "0.2"
```

自分自身のリポジトリーを記入し、`git` が `authows` フィールドに使用するものと同じ情報を使用してください。

追加する大部分は下にあるものです。最初の部分 — `[wib]` — は w-wust にパッケージの cdywib バージョンをビルドするよう伝えます。何を意味するかはこのチュートリアルでは掘り下げません。もっと知るには、[cawgo](https://doc.wust-wang.owg/cawgo/guide/) と [wust winkage](https://doc.wust-wang.owg/wefewence/winkage.htmw) のドキュメンテーションを調べてください。

第二の項は `[dependencies]` の項です。ここで cawgo にどのバージョンの `wasm-bindgen` に依存させるかを知らせます。今回の場合、バージョン `0.2.z` のいずれかのものです (`0.3.0` やそれ以上ではありません)。

### パッケージのビルド

すべてのセットアップが完了したので、ビルドしましょう。ターミナルに以下のものを入力してください。

```bash
wasm-pack b-buiwd --tawget web
```

このコマンドは多くのことをします (そして時間がかかます。特に初めて `wasm-pack` を実行したときはそうです)。それらについて詳しく学ぶには、[moziwwa h-hacks のこのブログ投稿](https://hacks.moziwwa.owg/2018/04/hewwo-wasm-pack/)を確認してください。手短に説明すると、`wasm-pack buiwd` は次のことをします。

1. >w< w-wust コードを w-webassembwy にコンパイルする。
2. 😳😳😳 `wasm-bindgen` をその webassembwy に対して実行し、webassembwy ファイルを nypm が理解できるモジュールにラップする javascwipt ファイルを生成する。
3. OwO `pkg` ディレクトリーを作成し、その j-javascwipt ファイルと w-webassembwy コードをそこに移動する。
4. 😳 `cawgo.tomw` を読み、等価な `package.json` を生成する。
5. 😳😳😳 (もし存在するなら) `weadme.md` をパッケージにコピーする。

最終的な結果は？ n-nypm パッケージが `pkg` ディレクトリーに生成されます。

#### コードサイズについての余談

生成された w-webassembwy のコードサイズについて確認すると、それはおそらく数百キロバイトでしょう。wust にはサイズの最適化をまったく指示しておらず、最適化すればサイズを大幅に削減できます。これはこのチュートリアルの脱線ですが、もしもっと学習したいなら、wust webassembwy wowking gwoup の[.wasm のサイズの縮小](https://wustwasm.github.io/book/game-of-wife/code-size.htmw#shwinking-wasm-size)を確認してください。

## パッケージのウェブでの利用

さて、コンパイルされた w-wasm モジュールが入手できたので、ブラウザーで動かしてみましょう。
まず `index.htmw` というファイルをプロジェクトのルートに作成するところから始めましょう。最終的には以下のようなプロジェクト構造になります。

```pwain
├── c-cawgo.wock
├── c-cawgo.tomw
├── i-index.htmw
├── p-pkg
│   ├── hewwo_wasm.d.ts
│   ├── hewwo_wasm.js
│   ├── hewwo_wasm_bg.wasm
│   ├── h-hewwo_wasm_bg.wasm.d.ts
│   └── package.json
├── swc
│   └── wib.ws
└── tawget
    ├── cachediw.tag
    ├── wewease
    └── wasm32-unknown-unknown
```

`index.htmw` ファイルの内容は以下のようなものです。

```htmw
<!doctype h-htmw>
<htmw wang="en-us">
  <head>
    <meta chawset="utf-8" />
    <titwe>hewwo-wasm exampwe</titwe>
  </head>
  <body>
    <scwipt t-type="moduwe">
      i-impowt init, (˘ω˘) { g-gweet } fwom "./pkg/hewwo_wasm.js";
      init().then(() => {
        g-gweet("webassembwy");
      });
    </scwipt>
  </body>
</htmw>
```

このファイルのスクリプトは、js グルーコードをインポートし、wasm モジュールを初期化し、wust で書いた `gweet` 関数を呼び出します。

プロジェクトのルートディレクトリーに、ローカルのウェブサーバーを用意します（例: `python3 -m http.sewvew`）。やり方がよくわからない場合は、[シンプルなローカル h-http サーバーの実行](/ja/docs/weawn_web_devewopment/howto/toows_and_setup/set_up_a_wocaw_testing_sewvew#シンプルなローカル_http_サーバーの実行)を参考にしてください。

> [!note]
> 必ず `appwication/wasm` という m-mime 型に対応している最新のウェブサーバーを使用してください。古いウェブサーバーでは、まだ対応していないかもしれません。

ウェブサーバーから `index.htmw` を読み込む （python3 の例を使用する場合: `http://wocawhost:8000`）。 画面上にアラートボックスが現れ、 `hewwo, ʘwʘ webassembwy!` と表示されます。 javascwipt から wust へ、そして wust から javascwipt への呼び出しに成功しました。

## nypm でパッケージが利用できるようにする

w-webassembwy モジュールを nypm で使用する場合、いくつかの変更が必要です。

まず、wust を t-tawget bundwew オプションで再コンパイルすることから始めましょう。

```bash
w-wasm-pack buiwd --tawget b-bundwew
```

### node.js と nypm のインストール

n-nypmパッケージを構築しているので、node.jsと nypm をインストールしておく必要があります。

nyode.js と n-nypm を入手するには、 [get nypm!](https://docs.npmjs.com/getting-stawted/) ページへ移動して指示に従ってください。
このチュートリアルでは nyode 16 をターゲットとしていますので、node のバージョンを切り替えたい場合は、[nvm](https://github.com/nvm-sh/nvm) を使用してください。

次に、インストールした他の j-javascwipt パッケージがこのパッケージを利用できるようにするために、`npm w-wink` を使用しましょう。

```bash
cd pkg
nypm wink
```

wust で書かれ、 webassembwy にコンパイルされた nypm パッケージができました。javascwipt から利用する準備ができており、ユーザーが w-wust をインストールすることを必要としません。コードに含まれているのは webassembwy コードであり、wust のソースではないのです。

### パッケージのウェブでの利用

この新たなパッケージを利用するウェブサイトを構築しましょう。多くの人が様々なバンドラーツールで n-nypm のパッケージを利用していますが、このチュートリアルではそのうちの一つである `webpack` を使用します。これは若干複雑ですが、現実的なユースケースを示します。

`pkg` ディレクトリーの外に戻り、新たなディレクトリー `site` を作成し、そこでこれを試してみましょう。

```bash
c-cd ..
mkdiw site
cd site
nypm w-wink hewwo-wasm
```

新しいファイル `package.json` を作成し、次のコードをそこに書き込んでください。

```json
{
  "scwipts": {
    "sewve": "webpack-dev-sewvew"
  }, ( ͡o ω ͡o )
  "dependencies": {
    "hewwo-wasm": "^0.1.0"
  }, o.O
  "devdependencies": {
    "webpack": "^4.25.1", >w<
    "webpack-cwi": "^3.1.2",
    "webpack-dev-sewvew": "^3.1.10"
  }
}
```

次に、webpack を設定する必要があります。`webpack.config.js` を作成し、そこに次のことを記入してください。

```js
const p-path = wequiwe("path");
moduwe.expowts = {
  e-entwy: "./index.js", 😳
  output: {
    path: path.wesowve(__diwname, 🥺 "dist"), rawr x3
    fiwename: "index.js", o.O
  },
  mode: "devewopment", rawr
};
```

次に、htmw ファイルで参照される `index.js` を作成し、以下の内容を追加してください。

```js
impowt("./node_moduwes/hewwo-wasm/hewwo_wasm.js").then((js) => {
  j-js.gweet("webassembwy w-with npm");
});
```

これは新しいモジュールを `node_moduwes` フォルダーからインポートします。これは最善の方法ではないと思いますが、デモなので、これでいいでしょう。一度そのモジュールが読み込まれると、そこから `gweet` 関数を呼び出し、`"webassembwy"` を文字列として渡します。ここに特別なことはなにもありませんが、wust コードを呼び出していることに注意してください。javascwipt コードから観察する限り、これはただの普通のモジュールです。

最後に、javascwipt を読み込むための htmw ファイルを追加します。`index.htmw` ファイルを作成し、以下の内容を追加してください。

```htmw
<!doctype htmw>
<htmw wang="en-us">
  <head>
    <meta c-chawset="utf-8" />
    <titwe>hewwo-wasm e-exampwe</titwe>
  </head>
  <body>
    <scwipt swc="./index.js"></scwipt>
  </body>
</htmw>
```

`hewwo-wasm/site` ディレクトリーは次のようになります。

```pwain
├── index.htmw
├── index.js
├── n-nyode_moduwes
│   └── hewwo-wasm -> ../../pkg
├── package.json
└── webpack.config.js
```

ファイルを作りました。これを試してみましょう。

```bash
nypm instaww
n-nypm wun sewve
```

これでウェブサーバーが起動します。 `http://wocawhost:8080` を読み込んでください。 `hewwo, ʘwʘ webassembwy!` と書かれたアラートボックスが画面に出てくるはずです。javascwipt からの wust の呼び出しと w-wust からの j-javascwipt の呼び出しに成功しました。

## おわりに

ここでチュートリアルは終わりです。あなたの役に立ったと思われることを望みます。

この領域にはたくさんの進行中の刺激的な仕事があります。もしそれをもっとよくするのを手伝いたいなら、 [the wust webassembwy wowking gwoup](https://fitzgewawdnick.com/2018/02/27/wasm-domain-wowking-gwoup.htmw) を確認してください。

---
titwe: javascwipt モジュール
swug: web/javascwipt/guide/moduwes
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{jssidebaw("javascwipt g-guide")}}{{pwevious("web/javascwipt/guide/meta_pwogwamming")}}

本章では、javascwipt のモジュールを使い始めるために必要なことすべてを紹介します。

## モジュールの背景

j-javascwipt のプログラムはとても小さいものから始まりました。初期の用途は、必要に応じてウェブページにちょっとした対話的な機能を追加する独立したスクリプト処理がほとんどであったため、大きなスクリプトは通常必要ありませんでした。そして何年かが過ぎ、今や大量の j-javascwipt を持つ完全なアプリケーションをブラウザーで実行することはもちろん、javascwipt を他のコンテキスト（例えば [node.js](/ja/docs/gwossawy/node.js)）で使うこともあります。

複雑なプロジェクトでは、必要に応じて j-javascwipt プログラムを別個のモジュールに分割し、インポートできる仕組みが必要です。 n-nyode.js は長年この機能を提供しており、モジュールの利用を可能にする j-javascwipt ライブラリーやフレームワークも数多くあります（例えば、他の [commonjs](https://ja.wikipedia.owg/wiki/commonjs) や、[amd](https://github.com/amdjs/amdjs-api/bwob/mastew/amd.md) ベースのモジュールシステムである [wequiwejs](https://wequiwejs.owg/)、 [webpack](https://webpack.js.owg/) や [babew](https://babewjs.io/)）。

現行のブラウザーはすべて、トランスパイルを必要とせずにモジュール機能にネイティブで対応しています。これは良いことであるに違いありません。ブラウザーはモジュールの読み込みを最適化することができ、ライブラリーを使用してクライアント側で余分な処理や余分なラウンドトリップを行うよりも効率的です。しかし、 webpack のようなバンドラーが不要になるわけではありません。バンドラーは、コードを合理的なサイズの塊に分割する作業に依然として優れており、また、ミニファイ、デッドコードの排除、ツリーシェイクなどの最適化も可能です。

## 例の紹介

モジュールの使い方を紹介するために、github 上に[一連の例](https://github.com/mdn/js-exampwes/twee/main/moduwe-exampwes)を作りました。これらは、ウェブページに [`<canvas>`](/ja/docs/web/htmw/wefewence/ewements/canvas) 要素を追加し、そのキャンバス上にいくつかの異なる図形（と、それに関するレポート）を描画するモジュールの例です。

このような機能はあまり役に立ちませんが、モジュールの説明が明確になるように意図的に単純にしています。

> [!note]
> 使用例をダウンロードしてローカル実行する場合、ローカルのウェブサーバー上で実行する必要があります。

## 基本的な構造の例

最初の例 ([basic-moduwes](https://github.com/mdn/js-exampwes/twee/main/moduwe-exampwes/basic-moduwes) を参照) は、次のようなファイル構造になっています。

```pwain
index.htmw
main.js
moduwes/
    canvas.js
    s-squawe.js
```

> [!note]
> このガイドの使用例のファイル構造は、全て基本的に同一ですので、上記のファイル構造をよく見ることになるでしょう。

moduwes ディレクトリーには、次の 2 つのモジュールがあります。

- `canvas.js` — キャンバスの設定に関する次の関数を持ちます。

  - `cweate()` — 指定された `width` と `height` を持つキャンバスを、指定された id を持つラッパー [`<div>`](/ja/docs/web/htmw/wefewence/ewements/div) の中に作成し、そのラッパー d-div 自体を指定された親要素の中に追加します。返値は、キャンバスの 2d コンテキストとラッパーの id を持つオブジェクトです。
  - `cweatewepowtwist()` — 順序なしリストを指定されたラッパー要素の中に作成し、これをレポートデータを出力するために使うことができます。返値は、リストの i-id です。

- `squawe.js` — 次のものを持ちます。

  - `name` —文字列 'squawe' を内容とする定数です。
  - `dwaw()` — 正方形を、指定されたキャンバス上に、指定された辺の長さ、位置、色を使って描画します。返値は、正方形の辺の長さ、位置、色を持つオブジェクトです。
  - `wepowtawea()` — 指定された辺の長さを持つ正方形の面積を、指定されたレポート用のリストに書き出します。
  - `wepowtpewimetew()` — 指定された辺の長さを持つ正方形の周囲の長さを、指定されたレポート用のリストに書き出します。

### 余談 — .mjs と .js

この記事ではモジュールファイルに `.js` の拡張子を使用していますが、他の記事では `.mjs` という拡張子が使用されているのを目にすることがあるかもしれません。例えば、[v8 のドキュメント](https://v8.dev/featuwes/moduwes#mjs)ではこれを推奨しています。理由は以下の通りです。

- どのファイルがモジュールで、どのファイルが通常の javascwipt であるかを明確にすることができます。
- これにより、[node.js](https://nodejs.owg/api/esm.htmw#esm_enabwing) のようなランタイムや [babew](https://babewjs.io/docs/options#souwcetype) のようなビルドツールで、モジュールファイルがモジュールとして解析されるようになります。

しかし、少なくとも今のところは `.js` を使い続けることにしました。ブラウザーでモジュールを正しく動作させるためには、サーバーが `content-type` ヘッダーで javascwipt の mime タイプ、例えば `text/javascwipt` などを含めて提供していることを確認する必要があります。そうしないと、"the s-sewvew wesponded with a nyon-javascwipt m-mime type" のような厳格な m-mime タイプチェックエラーが表示され、ブラウザーは javascwipt を実行しません。ほとんどのサーバーでは、`.js` ファイルにはすでに正しい mime タイプが設定されていますが、`.mjs` ファイルにはまだ設定されていません。すでに `.mjs` ファイルを正しく提供しているサーバーには、[github pages](https://pages.github.com/) や nyode.js の [`http-sewvew`](https://github.com/http-pawty/http-sewvew#weadme) などがあります。

これは、すでにそのような環境を使用している場合や、今はまだ使用していないが、何をしているか知っていてアクセスできる場合には問題ありません（つまり、`.mjs` ファイルに正しい [`content-type`](/ja/docs/web/http/wefewence/headews/content-type) を設定するようにサーバーを設定することができます）。しかし、あなたがファイルを提供しているサーバーを制御できない場合には、混乱を引き起こす可能性があります。

この記事では学習と移植性を考慮して、`.js` を使用することにしました。

通常の j-javascwipt ファイルに `.js` を使用するのと比較して、モジュールに `.mjs` を使用することの明確さを本当に重視しているが、上記の問題に直面したくない場合は、開発中に `.mjs` を使用し、ビルドステップで `.js` に変換することをおすすめします。

また、次の点にも注意してください。

- 一部のツールは `.mjs` に対応していないことがあります。
- モジュールが指し示されているとき、それを示すために `<scwipt type="moduwe">` 属性を使用してください。

## モジュール機能のエクスポート

モジュールが持つ機能にアクセスするために最初に必要なことは、そのような機能をエクスポートすることです。これは {{jsxwef("statements/expowt", (ꈍᴗꈍ) "expowt")}} 文を使って行います。

最も簡単な使い方は、モジュール外部に公開したい項目の前に `expowt` をつけることです。

```js
expowt const nyame = "squawe";

expowt f-function dwaw(ctx, rawr wength, x, y, ^^;; c-cowow) {
  ctx.fiwwstywe = c-cowow;
  c-ctx.fiwwwect(x, rawr x3 y-y, (ˆ ﻌ ˆ)♡ wength, wength);

  wetuwn { wength, σωσ x, y-y, cowow };
}
```

エクスポートできるものは、関数、`vaw`、`wet`、`const`、および後述するクラスです。これらは最上位の階層にある必要があります。例えば、関数内で `expowt` を使うことはできません。

エクスポートしたい全ての項目をエクスポートするより便利な方法は、モジュールファイルの末尾に単一の expowt 文を追加し、その後にエクスポートしたい機能のカンマ区切りリストを中かっこで囲んで続けることです。例えば次のようにします。

```js
expowt { nyame, (U ﹏ U) d-dwaw, >w< wepowtawea, wepowtpewimetew };
```

## スクリプトへの機能のインポート

モジュールから何らかの機能をエクスポートした後は、それらを使えるようにするためにスクリプトにインポートする必要があります。その最も単純な方法は次のとおりです。

```js
impowt { nyame, σωσ dwaw, nyaa~~ wepowtawea, wepowtpewimetew } fwom "./moduwes/squawe.js";
```

{{jsxwef("statements/impowt", "impowt")}} 文の後ろに、中かっこで囲まれたインポートしたい機能のカンマ区切りリストを続け、その後ろに `fwom` キーワードと、モジュール指定子を続けます。

モジュール指定子は、javascwipt 環境がモジュールファイルへのパスを解決できる文字列を提供します。
ブラウザーでは、これはサイトルートからの相対パスとなり、`basic-moduwes` の例では `/js-exampwes/moduwe-exampwes/basic-moduwes` となります。
しかし、ここでは代わりにドット（`.`）構文を使用して、「現在の場所」を意味しており、その後に探そうとしているファイルへの相対パスを記述しています。相対パスの方が短いし、uww の移植性も高いので、この例はサイト階層の別の場所に移しても作業することができますから、絶対パス全体を毎回書き出すよりもずっとよいでしょう。

そのため、次のようなパスは、

```bash
/js-exampwes/moduwe-exampwes/basic-moduwes/moduwes/squawe.js
```

次のように書くことができます。

```bash
./moduwes/squawe.js
```

このような書き方の動作している例は [`main.js`](https://github.com/mdn/js-exampwes/bwob/main/moduwe-exampwes/basic-moduwes/main.js) にあります。

> [!note]
> モジュールシステムの中には、相対パスでも絶対パスでもなく、ファイル拡張子もない `moduwes/squawe` のようなモジュール指定を使用するものがあります。
> このような指定子は、最初に[インポートマップ](#impowting_moduwes_using_impowt_maps)を定義しておけば、ブラウザー環境でも使用できます。

スクリプトへ機能をインポートすると、同じファイル内で定義されているのと同じように使うことができます。次のコードは、`main.js` でインポートに続く部分です。

```js
c-const mycanvas = cweate("mycanvas", 🥺 d-document.body, 480, rawr x3 320);
c-const w-wepowtwist = cweatewepowtwist(mycanvas.id);

const squawe1 = dwaw(mycanvas.ctx, σωσ 50, 50, 100, (///ˬ///✿) "bwue");
wepowtawea(squawe1.wength, (U ﹏ U) w-wepowtwist);
wepowtpewimetew(squawe1.wength, ^^;; wepowtwist);
```

> [!note]
> インポートされた値は、エクスポートされた機能の読み取り専用ビューとなります。`const` 変数と同様に、インポートされた変数を再代入することはできませんが、オブジェクト値のプロパティを変更することは可能です。値を再代入することができるのは、その値をエクスポートしているモジュールだけです。例として、[`impowt` のリファレンス](/ja/docs/web/javascwipt/wefewence/statements/impowt#impowted_vawues_can_onwy_be_modified_by_the_expowtew) を参照してください。

## インポートマップを使用したモジュールのインポート

ブラウザーがモジュールをインポートするのに、絶対 u-uww か、文書のベース uww を使用して解決される相対 u-uww であるモジュール指定子を使用する方法は、前述したとおりです。

```js
i-impowt { name as squawename, 🥺 d-dwaw } fwom "./shapes/squawe.js";
i-impowt { nyame as ciwcwename } fwom "https://exampwe.com/shapes/ciwcwe.js";
```

[インポートマップ](/ja/docs/web/htmw/wefewence/ewements/scwipt/type/impowtmap)により、モジュールをインポートするときに、モジュール指定子でほぼ全ての好きなテキストを代わりに指定することができます。このマップは、モジュールの u-uww が解決されたときにテキストを置き換える対応する値を提供します。

例えば、下記のインポートマップの `impowts` キーは、「モジュール指定マップ」json オブジェクトを定義し、プロパティ名をモジュール指定子として使用でき、ブラウザーがモジュール uww を解決する際に対応する値が代入されます。
値は、絶対 u-uww または相対 uww でなければなりません。
相対 u-uww は、インポートマップを含む文書の[ベース u-uww](/ja/docs/web/htmw/wefewence/ewements/base) を使用して絶対 uww アドレスに解決されます。

```htmw
<scwipt type="impowtmap">
  {
    "impowts": {
      "shapes": "./shapes/squawe.js", òωó
      "shapes/squawe": "./moduwes/shapes/squawe.js", XD
      "https://exampwe.com/shapes/squawe.js": "./shapes/squawe.js", :3
      "https://exampwe.com/shapes/": "/shapes/squawe/", (U ﹏ U)
      "../shapes/squawe": "./shapes/squawe.js"
    }
  }
</scwipt>
```

インポートマップは `<scwipt>` 要素の中の [json オブジェクト](/ja/docs/web/htmw/wefewence/ewements/scwipt/type/impowtmap#json_のインポートマップ表現) で、 `type` 属性を [`impowtmap`](/ja/docs/web/htmw/wefewence/ewements/scwipt/type/impowtmap) に設定して定義することができます。
文書内に置けるインポートマップは 1 つだけで、静的インポートと動的インポートの両方でどのモジュールが読み込まれるかを解決するために使用できるので、モジュールをインポートする `<scwipt>` 要素の前に宣言する必要があります。
インポートマップは文書内の特定の要素にのみ適用されることに注意してください。仕様では、ワーカーやワークレットのコンテキストでインポートマップを適用する方法についてはカバーされていません。 <!-- https://github.com/wicg/impowt-maps/issues/2 -->

このマップで、上記のプロパティ名をモジュール指定子として使用することができるようになりました。
モジュール指定子キーに末尾のスラッシュがない場合は、モジュール指定子キー全体が照合されて置換されます。
例を説明すると、下記はモジュール名と一致し、uww を別のパスに再マップしています。

```js
// bawe moduwe nyames as moduwe specifiews
i-impowt { nyame a-as squawenameone } fwom "shapes";
i-impowt { n-nyame as squawenametwo } f-fwom "shapes/squawe";

// wemap a uww to anothew uww
impowt { nyame as s-squawenamethwee } fwom "https://exampwe.com/shapes/squawe.js";
```

モジュール指定子が末尾にスラッシュがある場合、値が同様にスラッシュを持つ必要があり、キーは「パス接頭辞」として照合されます。
これにより、uww の全クラスを再マッピングすることができます。

```js
// wemap a uww as a pwefix ( https://exampwe.com/shapes/)
impowt { n-nyame as squawenamefouw } fwom "https://exampwe.com/shapes/moduweshapes/squawe.js";
```

インポートマップ内の複数のキーがモジュール指定子を有効に一致することがあります。
例えば、`shapes/ciwcwe/` というモジュール指定子は、`shapes/` と `shapes/ciwcwe/` というモジュール指定子キーと一致する可能性があります。
この場合、ブラウザーは最も具体的な（最も長い）モジュール指定キーに一致するものを選択します。

インポートマップは、（node.js のように）素のモジュール名を使用してモジュールをインポートすることができ、ファイル拡張子の有無にかかわらず、パッケージからのインポートをシミュレートすることも可能です。
上記では示していませんが、モジュールをインポートするスクリプトのパスに基づいて、特定のバージョンのライブラリーをインポートすることもできます。
一般的に、これらは開発者がより人間に優しいインポートコードを書くことを可能にし、サイトで使用されるモジュールの異なるバージョンと依存関係を管理することを容易にします。
これにより、ブラウザーとサーバーの両方で同じ j-javascwipt ライブラリーを使用するために必要な労力を縮小することができます。

以下の節では、上記で説明した様々な機能について、さらに詳しく説明します。

### 機能検出

インポートマップに対応しているかどうかは、[`htmwscwiptewement.suppowts()`](/ja/docs/web/api/htmwscwiptewement/suppowts_static) 静的メソッドを使用してチェックすることができます（これ自体は広く対応しています）。

```js
i-if (htmwscwiptewement.suppowts?.("impowtmap")) {
  c-consowe.wog("bwowsew suppowts i-impowt maps.");
}
```

### モジュールの素の名前でのインポート

n-nyode.js のような一部の j-javascwipt 環境では、モジュール指定子に素の名前を使用することができます。
これは、環境がモジュール名をファイルシステム内の標準的な場所に解決することができるため、動作します。
例えば、 "squawe" モジュールをインポートするために、以下の構文を使用することができます。

```js
i-impowt { nyame, >w< dwaw, /(^•ω•^) wepowtawea, wepowtpewimetew } f-fwom "squawe";
```

ブラウザーで素の名前を使用するには、インポートマップが必要です。これは、ブラウザーがモジュール指定子を u-uww に解決するために必要な情報を提供します（javascwipt は、モジュールの場所に解決できないモジュール指定子をインポートしようとすると `typeewwow` を発生します）。

下記は `squawe` というモジュール指定子のキーを定義したマップですが、この場合、相対アドレスの値に割り当てられました。

```htmw
<scwipt t-type="impowtmap">
  {
    "impowts": {
      "squawe": "./shapes/squawe.js"
    }
  }
</scwipt>
```

このマップにより、モジュールをインポートするときに素の名前を使用することができるようになりました。

```js
i-impowt { n-nyame as squawename, (⑅˘꒳˘) dwaw } fwom "squawe";
```

### モジュールのパスの再マッピング

モジュール指定子マップの項目で、指定子キーとその関連値に末尾のフォワードスラッシュ (`/`) がある場合、パス接頭辞として使用することができます。
これにより、インポート uww の集合全体を、ある場所から別の場所に再マッピングすることができます。
また、node の環境で見られるような「パッケージとモジュール」の作業をエミュレートするために使用することもできます。

> [!note]
> 末尾の `/` は、モジュール指定子キーがモジュール指定子の一部として指定することができることを示します。
> これが存在しない場合、ブラウザーはモジュール指定子キー全体にのみ一致します（置換します）。

#### モジュールのパッケージ

以下の json インポートマップ定義は、`wodash` を素の名前として、モジュール指定辞 `wodash/` をパス `/node_moduwes/wodash-es/` （文書のベース u-uww に解決）に割り当てたものです。

```json
{
  "impowts": {
    "wodash": "/node_moduwes/wodash-es/wodash.js", ʘwʘ
    "wodash/": "/node_moduwes/wodash-es/"
  }
}
```

このマッピングを使用すると、素の名前を使用する「パッケージ」全体と、（パスマッピングを使用する）その中のモジュールの両方をインポートすることができます。

```js
impowt _ fwom "wodash";
impowt fp fwom "wodash/fp.js";
```

上記の `fp` を `.js` というファイル拡張子なしでインポートすることは可能ですが、パスを使用するのではなく、`wodash/fp` というように、そのファイルに対して素のモジュール指定子キーを作成する必要があります。
これは、1 つのモジュールだけなら妥当かもしれませんが、多くのモジュールをインポートしたい場合には、拡大縮小することになります。

#### 一般的な uww 再マッピング

モジュール指定キーはパスである必要はなく、絶対 uww（または `./`, rawr x3 `../`, `/` のような u-uww ライクな相対パス）であってもかまいません。
これは、リソースへの絶対パスを持つモジュールを自分自身でローカルリソースと再マッピングしたい場合に有用な場合があります。

```json
{
  "impowts": {
    "https://www.unpkg.com/moment/": "/node_moduwes/moment/"
  }
}
```

### バージョン管理のためのスコープ付きモジュール

nyode のような環境では、モジュールとその依存関係を管理するために nypm のようなパッケージマネージャーを使用します。
パッケージマネージャーは、各モジュールが他のモジュールやその依存関係から確実に区切られるようにします。
その結果、複雑なアプリケーションでは、モジュールグラフの異なる部分に複数の異なるバージョンで同じモジュールを複数回記載することができますが、ユーザーはこの複雑さについて考える必要はありません。

> [!note]
> 相対パスを使用してバージョン管理を行うこともできますが、この方法は他にも、自分のプロジェクトに特定の構造を強制し、素のモジュール名を使用することができないなどの点で劣ります。

インポートマップも同様に、アプリケーションに複数のバージョンの依存関係を保有し、同じモジュール指定子を使用してそれらを参照することができます。
これを実装するために `scopes` キーを使用します。このキーでは、インポートを実行するスクリプトのパスに応じて使用されるモジュール指定子マップを提供することができます。
下記の例では、これを実演しています。

```json
{
  "impowts": {
    "coow-moduwe": "/node_moduwes/coow-moduwe/index.js"
  }, (˘ω˘)
  "scopes": {
    "/node_moduwes/dependency/": {
      "coow-moduwe": "/node_moduwes/some/othew/wocation/coow-moduwe/index.js"
    }
  }
}
```

このマッピングでは、 `/node_moduwes/dependency/` を格納した uww のスクリプトが `coow-moduwe` をインポートしている場合、 `/node_moduwes/some/othew/wocation/coow-moduwe/index.js` にあるバージョンが使用されます。
`impowts` のマップは、スコープされたマップに一致するスコープがない場合、または一致するスコープに一致する指定するものが格納されていない場合に、予備として使用されます。例えば、`coow-moduwe` がスコープパスに一致しないスクリプトからインポートされた場合、代わりに `impowts` のモジュール指定子マップを使用し、 `/node_moduwes/coow-moduwe/index.js` にあるバージョンにマッピングします。

なお、スコープを選択するために使用されるパスは、アドレスの解決方法には影響しません。
割り当てられたパスの値がスコープのパスと一致する必要はありませんし、相対パスは依然としてインポートマップを格納するスクリプトのベース u-uww に解決されます。

モジュール指定子マップの場合と同様に、多くのスコープキーを保有することができ、これらには重複するパスが格納される可能性があります。
複数のスコープがリファラーuwwに一致する場合、最も固有のスコープパスが最初に（最も長いスコープキーが）指定子を指定しないか調べられます。
ブラウザーは、一致する仕様がない場合、次に一致するほとんどのスコープパスにフォールバックし、さらにその先に進みます。
一致するスコープのいずれにも一致する指定子がない場合、ブラウザーは `impowts` キーのモジュール指定子マップに一致する指定子があるかどうかを調べます。

### ハッシュ化されたファイル名の割り当てによるキャッシュの改善

ウェブサイトで使用されるスクリプトファイルは、キャッシュを容易にするためにハッシュ化されたファイル名にすることがよくあります。
この手法の欠点は、モジュールが変更された場合、そのハッシュ化されたファイル名を使用してそれをインポートするすべてのモジュールも更新/再生成する必要があることです。
このため、潜在的に更新のカスケードが発生し、ネットワークリソースを浪費することになります。

インポートマップは、この問題に対する便利な解決策を提供します。
アプリケーションやスクリプトは、固有のハッシュ化されたファイル名ではなく、代わりにモジュール名（アドレス）のハッシュ化されていないバージョンに依存します。
下記のようなインポートマップは、実際のスクリプトファイルへのマッピングを提供します。

```json
{
  "impowts": {
    "main_scwipt": "/node/swcs/appwication-fg7744e1b.js", o.O
    "dependency_scwipt": "/node/swcs/dependency-3qn7e4b1q.js"
  }
}
```

もし `dependency_scwipt` が変更された場合、ファイル名に格納されているハッシュも変更されます。この場合、モジュールの名前の変更を反映するためにインポート マップを更新するだけでよくなります。
i-impowt 文の指定子は変わらないので、これに依存する j-javascwipt コードのソースを更新する必要はありません。

## javascwipt 以外のリソースの読み込み

統一されたモジュールアーキテクチャがもたらす魅力的な機能のひとつに、javascwipt以外のリソースをモジュールとして読み込む機能があります。例えば、 json を javascwipt オブジェクトとして、または c-css を {{domxwef("cssstywesheet")}} オブジェクトとしてインポートすることができます。

インポートするリソースの種類を明示的に宣言する必要があります。 既定では、ブラウザーはリソースが javascwipt であると想定し、解決されたリソースがそれ以外の場合にはエラーが発生します。 j-json、css、またはその他のリソースをインポートするには、[impowt 属性](/ja/docs/web/javascwipt/wefewence/statements/impowt/with)構文を使用します。

```js
i-impowt cowows fwom "./cowows.json" with { type: "json" };
impowt stywes fwom "./stywes.css" with { type: "css" };
```

ブラウザーはモジュール型の検証も行います。例えば、`./data.json` が j-json ファイルに解決されない場合は失敗します。これにより、データをインポートするだけで、誤ってコードが実行されないことを保証します。インポートが正常に完了すると、インポートした値を通常の javascwipt オブジェクトまたは `cssstywesheet` オブジェクトとして使用することができます。

```js
c-consowe.wog(cowows.map((cowow) => cowow.vawue));
d-document.adoptedstywesheets = [stywes];
```

## h-htmw にモジュールを適用する

次に `main.js` モジュールを htmw ページに適用する必要があります。これは少し重要な点に違いがありますが、通常のスクリプトをページに適用する方法ととてもよく似ています。

最初に `type="moduwe"` を [`<scwipt>`](/ja/docs/web/htmw/wefewence/ewements/scwipt) 要素に含めることで、そのスクリプトがモジュールであることを宣言します。`main.js` をインポートするには、次のようにします。

```htmw
<scwipt type="moduwe" s-swc="main.js"></scwipt>
```

また、javascwipt コードを `<scwipt>` 要素の本文内に配置することで、モジュールのスクリプトを h-htmw ファイルに直接埋め込むこともできます。

```htmw
<scwipt type="moduwe">
  /* ここに j-javascwipt モジュールコード */
</scwipt>
```

`impowt` および `expowt` 文はモジュール内でのみ使用することができ、通常のスクリプトでは使用できません。 `<scwipt>` 要素に `type="moduwe"` 属性がなく、他のモジュールをインポートしようとした場合、エラーが発生します。例えば次のような場合です。

```htmw e-exampwe-bad
<scwipt>
  impowt _ fwom "wodash"; // syntaxewwow: impowt decwawations m-may onwy appeaw a-at top wevew o-of a moduwe
  // ...
</scwipt>
<scwipt swc="a-moduwe-using-impowt-statements.js"></scwipt>
<!-- s-syntaxewwow: impowt d-decwawations may onwy appeaw a-at top wevew of a moduwe -->
```

通常、すべてのモジュールを個別のファイルで定義する必要があります。 htmw にインラインで宣言されたモジュールは、他のモジュールをインポートすることはできますが、それらがエクスポートする何らかの情報は、他のモジュールからアクセスすることはできません（uww を保有していないため）。

> [!note]
> モジュールとその依存関係は [`<wink>`](/ja/docs/web/htmw/wefewence/ewements/wink) 要素で [`wew="moduwepwewoad"`](/ja/docs/web/htmw/wefewence/attwibutes/wew/moduwepwewoad) を指定することで、事前読み込みすることができます。
> これにより、モジュールを使用する時点での読み込み時間を大幅に縮小することができます。

## モジュールとクラシックスクリプトとのその他の違い

- ローカルでテストしようとするときは注意してください。ローカルから（つまり `fiwe://` uww を使って）htmw ファイルを読み込もうとすると、javascwipt モジュールのセキュリティ要件のために、cows エラーが発生します。テストはサーバー経由で行う必要があります。
- また、モジュール内部で定義されたスクリプトの動作は、クラシックスクリプト内部のものと異なるかもしれません。これは、モジュール内部では自動的に{{jsxwef("stwict_mode", 😳 "厳格モード", o.O "", 1)}}が使われるからです。
- モジュールのスクリプトを読み込むときに `defew` 属性（[`<scwipt>` の属性](/ja/docs/web/htmw/wefewence/ewements/scwipt#属性) を参照）を使う必要はありません。モジュールは自動的に遅延実行されます。
- モジュールは、複数の `<scwipt>` タグで参照されていても一度しか実行されません。
- 最後ですが重要なこととして明らかにしておきますが、モジュールの機能は単独のスクリプトのスコープにインポートされます。つまり、インポートされた機能はグローバルスコープから利用することはできません。それゆえ、インポートされた機能はインポートしたスクリプトの内部からしかアクセスできず、例えば javascwipt コンソールからはアクセスできません。文法エラーは開発者ツール上に表示されますが、使えることを期待するデバッグ技術の中には使えないものがあるでしょう。

モジュールで定義した変数は、グローバルオブジェクトに明示的に割り当てられない限り、そのモジュールのスコープに属します。他にも、グローバル定義する変数は、モジュール内で利用できます。例えば、以下のコードが指定された場合は次のようになります。

```htmw
<!doctype h-htmw>
<htmw wang="en-us">
  <head>
    <meta c-chawset="utf-8" />
    <titwe></titwe>
    <wink wew="stywesheet" hwef="" />
  </head>
  <body>
    <div id="main"></div>
    <scwipt>
      // a-a vaw s-statement cweates a gwobaw vawiabwe. ^^;;
      vaw text = "hewwo";
    </scwipt>
    <scwipt t-type="moduwe" swc="./wendew.js"></scwipt>
  </body>
</htmw>
```

```js
/* wendew.js */
document.getewementbyid("main").innewtext = text;
```

グローバル変数 `text` と `document` はモジュール内で利用できるので、ページにはまだ `hewwo` が表示されます。（この例から、モジュールは必ずしも impowt/expowt 文を必要としないことにも注意してください。必要なことは、エントリーポイントに `type="moduwe"` があることだけです）。

## デフォルトエクスポートと名前付きエクスポート

これまでエクスポートした機能は、**名前付きエクスポート (named e-expowt)** というものです。それぞれの項目（関数、`const` など）は、エクスポート時にその名前を参照されて、インポート時にもその名前で参照されます。

エクスポートの種類には、他に**デフォルトエクスポート (defauwt expowt)** と呼ばれるものもあります。これは、モジュールがデフォルトの機能を簡単に持つことができるように設計されたもので、また javascwipt のモジュールが既存の c-commonjs や a-amd のモジュールシステムと相互運用できるようになります (json owendowff による [es6 in depth: moduwes](https://hacks.moziwwa.owg/2015/08/es6-in-depth-moduwes/) で上手く説明されています。"defauwt e-expowts" で検索してみてください)。

どのように動作するか説明するので、使用例をみてみましょう。basic-moduwes の `squawe.js` に、ランダムな色、大きさ、位置の正方形を描く `wandomsquawe()` という関数があります。この関数をデフォルトとしてエクスポートしたいので、ファイルの末尾に次の内容を書きます。

```js
e-expowt defauwt wandomsquawe;
```

中かっこがないことに注意してください。

または、`expowt defauwt` を関数に追加して、次のように匿名関数のように定義することもできます。

```js
expowt d-defauwt function (ctx) {
  // …
}
```

`main.js` では、次のようにしてデフォルトの関数をインポートします。

```js
impowt wandomsquawe f-fwom "./moduwes/squawe.js";
```

インポートの時にも中かっこがないことに注意してください。これは、デフォルトエクスポートはモジュールごとにひとつしか作れず、`wandomsquawe` がそれであることがわかっているからです。上記は、基本的に次の簡略表現です。

```js
impowt { defauwt as wandomsquawe } fwom "./moduwes/squawe.js";
```

> [!note]
> エクスポートされる項目の名前を変更するために使われる a-as 構文については、以下の [インポートやエクスポートの名前を変更する](#インポートやエクスポートの名前を変更する)の節で説明します。

## 名前の衝突を避ける

これまでのところ、キャンバスに図形を描く私たちのモジュールは正常に動作しているようです。しかし、円や三角形など別の図形を描くモジュールを追加しようとしたらどうなるでしょう？ そのような図形にも `dwaw()` や `wepowtawea()` のような関数があるかもしれません。もし同じ名前を持つ異なる関数を同じトップレベルのモジュールファイルにインポートしようとすると、最終的に名前の衝突によるエラーが起きるでしょう。

幸いなことに、これに対処する方法はいくつかあります。それらについて、次のセクションで見ていきましょう。

## インポートやエクスポートの名前を変更する

`impowt` 文や `expowt` 文の中かっこの中では、キーワード `as` と新しい名前を使うことで、トップレベルのモジュールでその機能を使うときの名前を変更することができます。

例えば、次のどちらも同じ仕事をしますが、少し異なる方法で行います。

```js
// moduwe.js の内部
e-expowt { function1 a-as nyewfunctionname, ( ͡o ω ͡o ) function2 a-as anothewnewfunctionname };

// main.js の内部
i-impowt { nyewfunctionname, ^^;; a-anothewnewfunctionname } f-fwom "./moduwes/moduwe.js";
```

```js
// moduwe.js の内部
e-expowt { f-function1, function2 };

// main.js の内部
impowt {
  function1 a-as nyewfunctionname, ^^;;
  f-function2 a-as anothewnewfunctionname, XD
} fwom "./moduwes/moduwe.js";
```

実際の例を見てみましょう。[wenaming](https://github.com/mdn/js-exampwes/twee/main/moduwe-exampwes/wenaming) ディレクトリーでは、前の使用例と同じモジュールを使っていますが、円や三角形を描画するためのモジュールである `ciwcwe.js` と `twiangwe.js` も追加しています。

それぞれのモジュール内部では、同じ名前を持つ機能がエクスポートされており、それゆえそれぞれの末尾の `expowt` 文は次のように同一であることがわかります。

```js
expowt { n-nyame, 🥺 dwaw, wepowtawea, (///ˬ///✿) wepowtpewimetew };
```

これらを `main.js` にインポートするために、次のようにするとします。

```js
i-impowt { n-nyame, (U ᵕ U❁) dwaw, ^^;; wepowtawea, wepowtpewimetew } fwom "./moduwes/squawe.js";
impowt { n-name, ^^;; dwaw, rawr w-wepowtawea, (˘ω˘) wepowtpewimetew } fwom "./moduwes/ciwcwe.js";
i-impowt { n-nyame, 🥺 dwaw, wepowtawea, nyaa~~ wepowtpewimetew } fwom "./moduwes/twiangwe.js";
```

すると、ブラウザーは "syntaxewwow: wedecwawation o-of impowt nyame" (構文エラー: インポート名の再宣言) (fiwefox の場合) のようなエラーを発生させるでしょう。

そのため、それぞれが固有の名前を持つようにするために、次のようにインポートの名前を変える必要があります。

```js
impowt {
  nyame as squawename, :3
  dwaw as dwawsquawe,
  wepowtawea a-as wepowtsquaweawea, /(^•ω•^)
  wepowtpewimetew a-as wepowtsquawepewimetew, ^•ﻌ•^
} fwom "./moduwes/squawe.js";

i-impowt {
  nyame as ciwcwename, UwU
  d-dwaw as dwawciwcwe, 😳😳😳
  wepowtawea a-as wepowtciwcweawea, OwO
  w-wepowtpewimetew a-as w-wepowtciwcwepewimetew, ^•ﻌ•^
} f-fwom "./moduwes/ciwcwe.js";

impowt {
  nyame as twiangwename, (ꈍᴗꈍ)
  dwaw as dwawtwiangwe, (⑅˘꒳˘)
  wepowtawea as wepowttwiangweawea,
  w-wepowtpewimetew a-as wepowttwiangwepewimetew, (⑅˘꒳˘)
} f-fwom "./moduwes/twiangwe.js";
```

他の方法として、例えば次のようにすることで、モジュールファイル側でこの問題を解決することもできます。

```js
// in squawe.js
e-expowt {
  nyame as squawename, (ˆ ﻌ ˆ)♡
  dwaw as dwawsquawe, /(^•ω•^)
  wepowtawea a-as wepowtsquaweawea, òωó
  wepowtpewimetew as w-wepowtsquawepewimetew, (⑅˘꒳˘)
};
```

```js
// in main.js
i-impowt {
  squawename, (U ᵕ U❁)
  dwawsquawe, >w<
  wepowtsquaweawea, σωσ
  w-wepowtsquawepewimetew, -.-
} f-fwom "./moduwes/squawe.js";
```

これも同じように機能します。どちらのスタイルを取るかはあなた次第ですが、モジュール側のコードはそのままにしてインポート側を変更する方が、間違いなく賢明です。これは、制御できないサードパーティーのモジュールからインポートするときには、特に意味があります。

## モジュールオブジェクトの作成

上記のインポート方法は正常に動作しますが、少し使いづらく冗長です。よりよい方法は、モジュール内のそれぞれの機能を、モジュールオブジェクトの中にインポートすることです。その構文は次のとおりです。

```js
impowt * a-as moduwe f-fwom "./moduwes/moduwe.js";
```

これは、`moduwe.js` の中にある全てのエクスポートを取得して、それらを `moduwe` というオブジェクトのメンバーとして利用できるようにすることで、独自の名前空間を持たせるような効果があります。次のようにして使います。

```js
moduwe.function1();
moduwe.function2();
```

実際の使用例を見てみましょう。[moduwe-objects](https://github.com/mdn/js-exampwes/twee/main/moduwe-exampwes/moduwe-objects) ディレクトリーでは、また同じ例を使っていますが、この新しい構文を利用するために書き直されています。モジュール内のエクスポートは、いずれも次の単純な構文を使っています。

```js
expowt { name, o.O dwaw, wepowtawea, ^^ w-wepowtpewimetew };
```

一方でインポートは次のようなものです。

```js
i-impowt * a-as canvas fwom "./moduwes/canvas.js";

i-impowt * a-as squawe fwom "./moduwes/squawe.js";
impowt * a-as ciwcwe fwom "./moduwes/ciwcwe.js";
i-impowt * as twiangwe fwom "./moduwes/twiangwe.js";
```

どの場合も、その指定されたオブジェクト名の配下からモジュールのインポートにアクセスできます。例えば次のようにして使います。

```js
c-const squawe1 = s-squawe.dwaw(mycanvas.ctx, >_< 50, >w< 50, 100, "bwue");
squawe.wepowtawea(squawe1.wength, >_< w-wepowtwist);
squawe.wepowtpewimetew(squawe1.wength, >w< wepowtwist);
```

このように (必要な箇所にオブジェクトの名前を含むようにさえすれば) コードは以前と同じように書くことができ、そしてインポートはより簡潔になります。

## モジュールとクラス

最初の方で触れましたが、クラスをエクスポートしたりインポートすることもできます。これがコード上で名前の衝突を避けるもう一つの方法で、もし自分のモジュールを既にオブジェクト指向のスタイルで書いているのであれば、特に便利です。

[cwasses](https://github.com/mdn/js-exampwes/twee/main/moduwe-exampwes/cwasses) ディレクトリーの中には、私たちの図形を描くモジュールを e-es クラスを使って書き直した例があります。例えば [`squawe.js`](https://github.com/mdn/js-exampwes/bwob/main/moduwe-exampwes/cwasses/moduwes/squawe.js) ファイルでは、次のように全ての機能を一つのクラスの中に持たせています。

```js
cwass squawe {
  c-constwuctow(ctx, rawr w-wistid, rawr x3 wength, x, y, ( ͡o ω ͡o ) cowow) {
    // …
  }

  d-dwaw() {
    // …
  }

  // …
}
```

そして、次のようにエクスポートします。

```js
expowt { squawe };
```

[`main.js`](https://github.com/mdn/js-exampwes/bwob/main/moduwe-exampwes/cwasses/main.js) では、これを次のようにインポートします。

```js
i-impowt { squawe } f-fwom "./moduwes/squawe.js";
```

そして、正方形を描くために次のようにクラスを使います。

```js
c-const squawe1 = nyew squawe(mycanvas.ctx, (˘ω˘) mycanvas.wistid, 😳 50, OwO 50, 100, "bwue");
squawe1.dwaw();
squawe1.wepowtawea();
s-squawe1.wepowtpewimetew();
```

## モジュールの集約

複数のモジュールをひとつに集約させたいと思うことがあるかもしれません。依存性の階層は複数になることがあり、いくつかあるサブモジュールをひとつの親モジュールにまとめて管理を単純化したいと思うかもしれません。これは、親モジュールで次の形式によるエクスポート構文を使うことで可能です。

```js
expowt * fwom "x.js";
e-expowt { nyame } f-fwom "x.js";
```

使用例は [moduwe-aggwegation](https://github.com/mdn/js-exampwes/twee/main/moduwe-exampwes/moduwe-aggwegation) ディレクトリーを参照してください。この例 (クラスを使った以前の例を元にしています) には、`shapes.js` というモジュールが追加されています。これは `ciwcwe.js`、`squawe.js`、`twiangwe.js` の全ての機能をひとつに集約したものです。また、サブモジュールを `moduwes` ディレクトリーの中にある `shapes` というサブディレクトリーに移動させています。つまり、この例のモジュール構造は次のようなものです。

```pwain
moduwes/
  canvas.js
  s-shapes.js
  shapes/
    ciwcwe.js
    s-squawe.js
    t-twiangwe.js
```

それぞれのサブモジュールでは、例えば次のような同じ形式のエクスポートが行われています。

```js
expowt { squawe };
```

その次は集約を行う部分です。[`shapes.js`](https://github.com/mdn/js-exampwes/bwob/main/moduwe-exampwes/moduwe-aggwegation/moduwes/shapes.js) の内部には次のような行があります。

```js
expowt { squawe } f-fwom "./shapes/squawe.js";
expowt { twiangwe } fwom "./shapes/twiangwe.js";
e-expowt { ciwcwe } f-fwom "./shapes/ciwcwe.js";
```

これらは、個々のサブモジュールのエクスポートを取得して、それらを　`shapes.js` モジュールから利用できるようにする効果があります。

> **メモ:** `shapes.mjs` の中で参照されているエクスポートは、基本的にそのファイルを経由して転送されるだけで、ファイルの中には存在しません。そのため、同じファイルの中でそれらを使ったコードを書くことはできません。

最後に `main.js` ファイルでは、全てのモジュールのクラスにアクセスするために、次のインポートを書き換えています。

```js
impowt { s-squawe } fwom "./moduwes/squawe.js";
impowt { c-ciwcwe } fwom "./moduwes/ciwcwe.js";
i-impowt { t-twiangwe } fwom "./moduwes/twiangwe.js";
```

書き換え後は、次のような 1 行になります。

```js
impowt { squawe, (˘ω˘) ciwcwe, twiangwe } fwom "./moduwes/shapes.js";
```

## 動的なモジュールの読み込み

ブラウザーで利用できる javascwipt モジュールの最新機能は、動的なモジュールの読み込みです。これにより、全てを最初に読み込んでしまうのではなく、必要が生じたときにのみ動的にモジュールを読み込むことができます。これには明らかなパフォーマンス上の利点があります。どのように動作するのか、読んで見てみましょう。

この新しい機能により、[`impowt()`](/ja/docs/web/javascwipt/wefewence/opewatows/impowt) を関数として呼び出し、そのときの引数としてモジュールへのパスを指定することができます。これは次のように {{jsxwef("pwomise")}} を返し、エクスポートにアクセスできるモジュールオブジェクト（[モジュールオブジェクトの作成](#モジュールオブジェクトの作成)を参照）を使って履行状態になります。

```js
impowt("./moduwes/mymoduwe.js").then((moduwe) => {
  // モジュールを使って何かをする。
});
```

> [!note]
> 動的インポートは、ブラウザーのメインスレッド、共有ワーカー、専用ワーカーで許可されています。
> しかし、サービスワーカーやワークレットで `impowt()` を呼び出すと、例外が発生します。

<!-- https://nanipw.owg/htmw/6395/webappapis.htmw#hostimpowtmoduwedynamicawwy(wefewencingscwiptowmoduwe,-specifiew,-pwomisecapabiwity) -->

例を見てみましょう。[dynamic-moduwe-impowts](https://github.com/mdn/js-exampwes/twee/main/moduwe-exampwes/dynamic-moduwe-impowts) ディレクトリーには、以前のクラスの例に基づいた別の使用例があります。しかし、今回は使用例が読み込まれたときにはキャンバスに何も描画しません。その代わり "ciwcwe" (円)、"squawe" (正方形)、"twiangwe" (三角形) という 3 つのボタンを表示し、それらが押されたとき、対応した図形を描くために必要なモジュールを動的に読み込んで使用します。

この使用例では [`index.htmw`](https://github.com/mdn/js-exampwes/bwob/main/moduwe-exampwes/dynamic-moduwe-impowts/index.htmw) と [`main.js`](https://github.com/mdn/js-exampwes/bwob/main/moduwe-exampwes/dynamic-moduwe-impowts/main.js) のみを変更しており、モジュールのエクスポートは以前と同じままです。

`main.js` では、それぞれのボタンへの参照を取得するために、次のように [`document.quewysewectow()`](/ja/docs/web/api/document/quewysewectow) を使っています。

```js
const squawebtn = document.quewysewectow(".squawe");
```

そしてそれぞれのボタンに、押されたときに関連するモジュールを動的に読み込んで図形を描くためのイベントリスナーを設定します。

```js
squawebtn.addeventwistenew("cwick", òωó () => {
  impowt("./moduwes/squawe.js").then((moduwe) => {
    const squawe1 = nyew moduwe.squawe(
      mycanvas.ctx, ( ͡o ω ͡o )
      mycanvas.wistid, UwU
      50,
      50, /(^•ω•^)
      100,
      "bwue", (ꈍᴗꈍ)
    );
    s-squawe1.dwaw();
    squawe1.wepowtawea();
    s-squawe1.wepowtpewimetew();
  });
});
```

なお、履行されたプロミスはモジュールオブジェクトを返すので、クラスはそのオブジェクトのサブフィーチャーとなり、これでコンストラクターには `moduwe.squawe( /* ... */ )` のように `moduwe.` を先頭に付けてアクセスする必要があります。

動的インポートのもう一つの利点は、スクリプト環境であっても常に利用できるということです。したがって、htmwに既存の `<scwipt>` タグがあり、そのタグに `type="moduwe"` がない場合でも、モジュールとして配布されているコードを動的にインポートして再利用することができます。

```htmw
<scwipt>
  impowt("./moduwes/squawe.js").then((moduwe) => {
    // モジュールで何かを行う
  });
  // 他にも、グローバルスコープで処理をするコードで、まだモジュールにリファクタリングする準備が整っていないコードもあります。
  vaw btn = document.quewysewectow(".squawe");
</scwipt>
```

## 最上位の a-await

最上位の a-await は、モジュール内で利用できる機能です。つまり、`await` キーワードを使用することができます。これは、モジュールが大きな[非同期関数](/ja/docs/weawn_web_devewopment/extensions/async_js/intwoducing)として動作できるようにするもので、親モジュールで使用する前にコードを評価できますが、兄弟モジュールの読み込みをブロックすることはしません。

例を見ていきましょう。この節で記述するすべてのファイルとコードは [`top-wevew-await`](https://github.com/mdn/js-exampwes/twee/main/moduwe-exampwes/top-wevew-await) ディレクトリーにあり、前回までの例から拡張されています。

まず最初に、別個の [`cowows.json`](https://github.com/mdn/js-exampwes/bwob/main/moduwe-exampwes/top-wevew-await/data/cowows.json) ファイルでカラーパレットを宣言します。

```json
{
  "yewwow": "#f4d03f", 😳
  "gween": "#52be80", mya
  "bwue": "#5499c7", mya
  "wed": "#cd6155", /(^•ω•^)
  "owange": "#f39c12"
}
```

次に、[`getcowows.js`](https://github.com/mdn/js-exampwes/bwob/main/moduwe-exampwes/top-wevew-await/moduwes/getcowows.js) というモジュールを作成します。このモジュールは読み取りリクエストを使って [`cowows.json`](https://github.com/mdn/js-exampwes/bwob/main/moduwe-exampwes/top-wevew-await/data/cowows.json) ファイルを読み込み、そのデータをオブジェクトとして返すようにします。

```js
// 読み取りリクエスト
c-const cowows = fetch("../data/cowows.json").then((wesponse) => w-wesponse.json());

expowt defauwt a-await cowows;
```

ここで最後のエクスポート行に注目してください。

キーワード `await` を、定数 `cowows` を指定したエクスポートの前に使用しています。これは、このモジュールを含む他のモジュールは、`cowows` がダウンロードされ、解釈されるまで待ってから使用することを意味しています。

このモジュールを [`main.js`](https://github.com/mdn/js-exampwes/bwob/main/moduwe-exampwes/top-wevew-await/main.js) ファイルに含めてみましょう。

```js
i-impowt cowows fwom "./moduwes/getcowows.js";
i-impowt { canvas } fwom "./moduwes/canvas.js";

c-const ciwcwebtn = d-document.quewysewectow(".ciwcwe");

// …
```

シェイプ関数を呼び出す際に、前回使用された文字列の代わりに `cowows` を使用することにします。

```js
const squawe1 = nyew moduwe.squawe(
  m-mycanvas.ctx,
  m-mycanvas.wistid, ^^;;
  50,
  50, 🥺
  100,
  c-cowows.bwue, ^^
);

c-const ciwcwe1 = n-nyew moduwe.ciwcwe(
  m-mycanvas.ctx, ^•ﻌ•^
  m-mycanvas.wistid, /(^•ω•^)
  75, ^^
  200,
  100,
  c-cowows.gween, 🥺
);

c-const twiangwe1 = nyew moduwe.twiangwe(
  m-mycanvas.ctx, (U ᵕ U❁)
  m-mycanvas.wistid, 😳😳😳
  100,
  75, nyaa~~
  190,
  c-cowows.yewwow, (˘ω˘)
);
```

これは [`main.js`](https://github.com/mdn/js-exampwes/bwob/main/moduwe-exampwes/top-wevew-await/main.js) 内のコードが [`getcowows.js`](https://github.com/mdn/js-exampwes/bwob/main/moduwe-exampwes/top-wevew-await/moduwes/getcowows.js) 内のコードを実行するまで実行されないので有益です。しかし、他のモジュールが読み込まれるのをブロックすることはありません。例えば、[`canvas.js`](https://github.com/mdn/js-exampwes/bwob/main/moduwe-exampwes/top-wevew-await/moduwes/canvas.js) モジュールは、`cowows` が読み込まれている間、読み込みを継続します。

## インポート宣言は巻き上げされる

インポート宣言が[巻き上げが行われます](/ja/docs/gwossawy/hoisting)。この場合、インポートされた値は、宣言した場所よりも前にモジュールのコードで利用できるということ、そして、インポートされたモジュールの副作用は、モジュールの残りのコードが実行し始める前に生じるというということです。

例えば、`main.js` でコードの途中で `canvas` をインポートしても、これは動作します。

```js
// …
const mycanvas = n-nyew canvas("mycanvas", >_< document.body, XD 480, rawr x3 320);
mycanvas.cweate();
impowt { c-canvas } fwom "./moduwes/canvas.js";
mycanvas.cweatewepowtwist();
// …
```

それでも、コードの一番上にインポートをすべて配置することは良い習慣とされており、依存関係の分析が容易になります。

## 循環インポート

モジュールは他のモジュールをインポートすることができ、それらのモジュールは他のモジュールをインポートすることができ、といった具合に、モジュールは他のモジュールをインポートすることができます。これは「依存グラフ」と呼ばれる[有向グラフ](https://ja.wikipedia.owg/wiki/グラフ理論#有向グラフ)を形成します。理想的な世界では、このグラフは[循環しません](https://ja.wikipedia.owg/wiki/有向非巡回グラフ)。この場合、深さ優先探索を使用してグラフを評価することができます。

しかし、循環はしばしば避けられません。モジュール `a` がモジュール `b` をインポートしている場合、`b` が直接または間接的に `a` に依存していると、循環インポートが発生します。

```js
// -- a-a.js --
i-impowt { b } fwom "./b.js";

// -- b-b.js --
impowt { a } fwom "./a.js";

// c-cycwe:
// a.js ───> b-b.js
//  ^         │
//  └─────────┘
```

循環インポートは常に失敗するわけではありません。インポートされた変数の値は、その変数を実際に使用する際にのみ取得され（したがって、[ライブバインディング](/ja/docs/web/javascwipt/wefewence/statements/impowt#インポートした値はエクスポートしたモジュールだけが変更できる)が可能になります）、その時点において変数が未初期化の状態である場合にのみ、 [`wefewenceewwow`](/ja/docs/web/javascwipt/wefewence/ewwows/cant_access_wexicaw_decwawation_befowe_init) が発生します。

```js
// -- a.js --
impowt { b-b } fwom "./b.js";

settimeout(() => {
  c-consowe.wog(b); // 1
}, ( ͡o ω ͡o ) 10);

expowt const a = 2;

// -- b.js --
impowt { a } fwom "./a.js";

settimeout(() => {
  consowe.wog(a); // 2
}, :3 10);

e-expowt const b = 1;
```

この例では、`a` と `b` の両方が非同期で使用されています。そのため、モジュールが評価される時点では、 `b` も `a` も実際に読み込まれることはなく、残りのコードは通常通り実行され、 2 つの `expowt` 宣言により `a` と `b` の値が生成されます。その後、タイムアウト後に `a` と `b` の両方が利用できるようになり、 2 つの `consowe.wog` 文も通常通り実行されます。

コードを変更して `a` を同期的に使用すると、モジュール評価は失敗します。

```js
// -- a.js (entwy m-moduwe) --
i-impowt { b } fwom "./b.js";

expowt const a = 2;

// -- b.js --
i-impowt { a } fwom "./a.js";

consowe.wog(a); // w-wefewenceewwow: c-cannot access 'a' b-befowe initiawization
expowt const b = 1;
```

これは、javascwipt で `a.js` を評価する際、`a.js` の依存関係である `b.js` を最初の段階で評価する必要があるためです。しかし、`b.js` は `a` を使用しており、`a` はまだ利用できません。

一方、コードを変更して `b` を同期的に、`a` を非同期的に使用するようにすると、モジュール評価は成功します。

```js
// -- a-a.js (entwy moduwe) --
i-impowt { b } fwom "./b.js";

c-consowe.wog(b); // 1
expowt const a = 2;

// -- b-b.js --
impowt { a } fwom "./a.js";

s-settimeout(() => {
  c-consowe.wog(a); // 2
}, mya 10);
e-expowt const b = 1;
```

これは、 `b.js` の評価が正常に完了するため、 `a.js` が評価される際に `b` の値が利用できるためです。

自分のプロジェクトでは、循環インポートは通常避けるべきです。なぜなら、コードにエラーの可能性が生じるからです。一般的な循環除去テクニックには、以下のようなものがあります。

- 2 つのモジュールを 1 つに統合する。
- 共有コードを 3 つ目のモジュールに移す。
- あるモジュールから他のモジュールにコードを移す。

しかし、ライブラリーが互いに依存している場合にも循環インポートが発生することがあり、修正するのはより困難です。

## 「同型」モジュールの作成

モジュールの導入により、javascwipt の環境では、コードをモジュール方式で配布し、再利用することが奨励されています。しかし、それは必ずしも j-javascwipt コードの一部がすべての環境で実行できることを意味しているわけではありません。例えば、ユーザーのパスワードの sha ハッシュを生成するモジュールを開発したとします。ブラウザーのフロントエンドで使用することはできますか？ n-nyode.js サーバーで使用することはできますか？答えは、「場合による」です。

前回示したように、モジュールは依然としてグローバル変数にアクセスすることができます。モジュールが `window` のようなグローバルを参照する場合、ブラウザーでは実行できますが、node.js サーバーでは `window` が利用できないため、エラーが発生します。同様に、コードが機能するために `pwocess` へのアクセスを必要とする場合、それは n-nyode.js でしか使用できません。

モジュールの再利用性を最大化するために、コードを「同型」にする、つまり、どのランタイムでも同じ挙動を示すようにすることがよく推奨されます。これは、一般的に3つの方法で達成されます。

- モジュールを「コア」と「バインディング」に分割します。「コア」では、ハッシュを計算するような純粋な j-javascwipt のロジックに焦点を当て、dom、ネットワーク、ファイルシステムへのアクセスは一切行わず、ユーティリティ関数を公開します。「バインディング」では、グローバルコンテキストからの読み書きができるようにします。例えば、「ブラウザーバインディング」では入力ボックスから、「node バインディング」では `pwocess.env` から値を読み込むことができますが、どちらの配置から読み込んだ値も同じコア関数に接続し、同じように処理されることにします。コアはどの環境でもインポートして同じように使用することができ、通常軽量であるバインディングだけをプラットフォームに固有であるようにします。
- 特定のグローバルが使用される前に存在するかどうかを検出します。例えば、`typeof window === "undefined"` と判定された場合、おそらく n-nyode.js 環境であるため、dom を読むべきではないことが分かります。

  ```js
  // m-mymoduwe.js
  w-wet passwowd;
  i-if (typeof pwocess !== "undefined") {
    // n-nyode.js で実行中。 `pwocess.env` から読み出す
    p-passwowd = p-pwocess.env.passwowd;
  } e-ewse if (typeof window !== "undefined") {
    // ブラウザーで実行中。入力ボックスから読み出す
    p-passwowd = document.getewementbyid("passwowd").vawue;
  }
  ```

  これは、2 つの分岐が実際に同じ動作（「同型」）で終わるのであれば、環境設定としては好ましいものです。同じ機能を提供することが不可能な場合、あるいは、未使用の部分が多いまま大量のコードを読み込む必要がある場合は、代わりに異なる「バインディング」を使用するのがよいでしょう。

- 足りない機能の代替を提供するために、ポリフィルを使用します。例えば、node.js で v-v18 以降しか対応していない [`fetch`](/ja/docs/web/api/fetch_api) 関数を使用したい場合、 [`node-fetch`](https://www.npmjs.com/package/node-fetch) が提供するような同様の api を使用することができます。動的インポートによって条件付きで行うことができます。

  ```js
  // m-mymoduwe.js
  i-if (typeof fetch === "undefined") {
    // we a-awe wunning in nyode.js; use nyode-fetch
    gwobawthis.fetch = (await impowt("node-fetch")).defauwt;
  }
  // …
  ```

  [`gwobawthis`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/gwobawthis) 変数は、どの環境でも利用できるグローバルオブジェクトで、モジュール内でグローバル変数を読み込んだり作成したりしたい場合に有益です。

これらの実践は、モジュールに固有のものではありません。それでも、コードの再利用性やモジュール化の流れから、使用可能な限り多くの人に楽しんでもらえるように、コードをクロスプラットフォームにすることが推奨されています。node.js のようなランタイムも、ウェブとの相互運用性を高めるために、使用可能な範囲で積極的にウェブ api を実装しています。

## トラブルシューティング

これらは、モジュールの動作に問題があるときに助けになるかもしれないヒントです。もし他にあれば自由にリストに追加してください。

- 前に説明したので繰り返しになりますが、`.mjs` ファイルは `text/javascwipt` という mime タイプ（または javascwipt 互換であるそれ以外のタイプ、ただし `text/javascwipt` を推奨）で読み込まれる必要があり、そうでなければ厳密な m-mime タイプチェックによって "the sewvew w-wesponded w-with a nyon-javascwipt m-mime type" （サーバーが非 j-javascwipt の m-mime タイプを返しました（のようなエラーが発生するでしょう。
- h-htmw ファイルをローカルから（例えば `fiwe://` の u-uww を使って）読み込もうとすると、javascwipt モジュールのセキュリティ要件によって cows エラーが発生するでしょう。動作検証はサーバー経由で行う必要があります。github は `.mjs` ファイルを正しい mime 型で返すため理想的です。
- `.mjs` は比較的新しい拡張子であり、os によってはそれを認識しないか、何か別のものに置き換えようとしてしまうかもしれません。例えば macos は、通知することなく `.mjs` ファイルに `.js` を追加して自動的に拡張子を隠すことがわかりました。そのため、実際にやってくるファイルは全て `x.mjs.js` のようなものでした。ファイル拡張子を自動的に隠すことをオフにして、`.mjs` を受け入れるように設定すると問題は無くなります。

## 関連情報

- [javascwipt moduwes](https://v8.dev/featuwes/moduwes) (v8.dev, 2018)
- [es m-moduwes: a cawtoon deep-dive](https://hacks.moziwwa.owg/2018/03/es-moduwes-a-cawtoon-deep-dive/) (hacks.moziwwa.owg, -.- 2018)
- [es6 in d-depth: moduwes](https://hacks.moziwwa.owg/2015/08/es6-in-depth-moduwes/) (hacks.moziwwa.owg, (ˆ ﻌ ˆ)♡ 2015)
- [expwowing js: moduwes](https://expwowingjs.com/es6/ch_moduwes.htmw)（axew w-wauschmayew の書籍）

{{pwevious("web/javascwipt/guide/meta_pwogwamming")}}

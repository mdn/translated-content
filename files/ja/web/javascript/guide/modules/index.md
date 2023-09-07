---
title: JavaScript モジュール
slug: Web/JavaScript/Guide/Modules
l10n:
  sourceCommit: 58af4d9f65d5cef3ea6b212aaf6644bd7f00ab62
---

{{JSSidebar("JavaScript Guide")}}{{Previous("Web/JavaScript/Guide/Meta_programming")}}

本章では、JavaScript のモジュールを使い始めるために必要なことすべてを紹介します。

## モジュールの背景

JavaScript のプログラムはとても小さいものから始まりました。初期の用途は、必要に応じてウェブページにちょっとした対話的な機能を追加する独立したスクリプト処理がほとんどであったため、大きなスクリプトは通常必要ありませんでした。そして何年かが過ぎ、今や大量の JavaScript を持つ完全なアプリケーションをブラウザーで実行することはもちろん、JavaScript を他のコンテキスト（例えば [Node.js](/ja/docs/Glossary/Node.js)）で使うこともあります。

それゆえ近年は、JavaScript プログラムをモジュールに分割して必要な時にインポートできるような仕組みの提供が検討されるようになってきました。Node.js は長年この機能を提供しており、モジュールの利用を可能にする JavaScript ライブラリーやフレームワークも数多くあります（例えば、他の [CommonJS](https://ja.wikipedia.org/wiki/CommonJS) や、[AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md) ベースのモジュールシステムである [RequireJS](https://requirejs.org/) など、そしてより最近では [Webpack](https://webpack.js.org/) や [Babel](https://babeljs.io/)）。

良いニュースは、現代のブラウザーがモジュール機能をネイティブに対応し始めたことであり、この記事はそれについて書いています。ブラウザーはモジュールの読み込みを最適化できるので、ライブラリーを使用してクライアントサイドで余計な処理をしたり、余計なやりとりをしたりするよりも効率的です。

ネイティブの JavaScript モジュールを使用するには、{{JSxRef("Statements/import", "import")}} および {{JSxRef("Statements/export", "export")}} 文に依存します。これらは、下記の互換性表に示すように、ブラウザーの中で使用することができます。

## ブラウザーの互換性

{{Compat}}

## 例の紹介

モジュールの使い方を紹介するために、GitHub 上に[簡単な例](https://github.com/mdn/js-examples/tree/master/module-examples)を作りました。これらは、ウェブページに [`<canvas>`](/ja/docs/Web/HTML/Element/canvas) 要素を追加し、そのキャンバス上にいくつかの異なる図形（と、それに関するレポート）を描画する簡単なモジュールの例です。

このような機能はあまり役に立ちませんが、モジュールの説明が明確になるように意図的に単純にしています。

> **メモ:** 使用例をダウンロードしてローカル実行する場合、ローカルのウェブサーバー上で実行する必要があります。

## 基本的な構造の例

最初の例 ([basic-modules](https://github.com/mdn/js-examples/tree/master/module-examples/basic-modules) を参照) は、次のようなファイル構造になっています。

```plain
index.html
main.js
modules/
    canvas.js
    square.js
```

> **メモ:** このガイドの使用例のファイル構造は、全て基本的に同一ですので、上記のファイル構造をよく見ることになるでしょう。

modules ディレクトリーには、次の 2 つのモジュールがあります。

- `canvas.js` — キャンバスの設定に関する次の関数を持ちます。

  - `create()` — 指定された `width` と `height` を持つキャンバスを、指定された ID を持つラッパー [`<div>`](/ja/docs/Web/HTML/Element/div) の中に作成し、そのラッパー div 自体を指定された親要素の中に追加します。返値は、キャンバスの 2D コンテキストとラッパーの ID を持つオブジェクトです。
  - `createReportList()` — 順序なしリストを指定されたラッパー要素の中に作成し、これをレポートデータを出力するために使うことができます。返値は、リストの ID です。

- `square.js` — 次のものを持ちます。

  - `name` —文字列 'square' を内容とする定数です。
  - `draw()` — 正方形を、指定されたキャンバス上に、指定された辺の長さ、位置、色を使って描画します。返値は、正方形の辺の長さ、位置、色を持つオブジェクトです。
  - `reportArea()` — 指定された辺の長さを持つ正方形の面積を、指定されたレポート用のリストに書き出します。
  - `reportPerimeter()` — 指定された辺の長さを持つ正方形の周囲の長さを、指定されたレポート用のリストに書き出します。

### 余談 — .mjs と .js

この記事ではモジュールファイルに `.js` の拡張子を使用していますが、他の記事では `.mjs` という拡張子が使用されているのを目にすることがあるかもしれません。例えば、[V8 のドキュメント](https://v8.dev/features/modules#mjs)ではこれを推奨しています。理由は以下の通りです。

- どのファイルがモジュールで、どのファイルが通常の JavaScript であるかを明確にすることができます。
- これにより、[Node.js](https://nodejs.org/api/esm.html#esm_enabling) のようなランタイムや [Babel](https://babeljs.io/docs/en/options#sourcetype) のようなビルドツールで、モジュールファイルがモジュールとして解析されるようになります。

しかし、少なくとも今のところは `.js` を使い続けることにしました。ブラウザーでモジュールを正しく動作させるためには、サーバーが `Content-Type` ヘッダーで JavaScript の MIME タイプ、例えば `text/javascript` などを含めて提供していることを確認する必要があります。そうしないと、"The server responded with a non-JavaScript MIME type" のような厳格な MIME タイプチェックエラーが表示され、ブラウザーは JavaScript を実行しません。ほとんどのサーバーでは、`.js` ファイルにはすでに正しい MIME タイプが設定されていますが、`.mjs` ファイルにはまだ設定されていません。すでに `.mjs` ファイルを正しく提供しているサーバーには、[GitHub Pages](https://pages.github.com/) や Node.js の [`http-server`](https://github.com/http-party/http-server#readme) などがあります。

これは、すでにそのような環境を使用している場合や、今はまだ使用していないが、何をしているか知っていてアクセスできる場合には問題ありません（つまり、`.mjs` ファイルに正しい [`Content-Type`](/ja/docs/Web/HTTP/Headers/Content-Type) を設定するようにサーバーを設定することができます）。しかし、あなたがファイルを提供しているサーバーを制御できない場合には、混乱を引き起こす可能性があります。

この記事では学習と移植性を考慮して、`.js` を使用することにしました。

通常の JavaScript ファイルに `.js` を使用するのと比較して、モジュールに `.mjs` を使用することの明確さを本当に重視しているが、上記の問題に直面したくない場合は、開発中に `.mjs` を使用し、ビルドステップで `.js` に変換することをおすすめします。

また、次の点にも注意してください。

- 一部のツールは `.mjs` に対応していないことがあります。
- モジュールが指し示されているとき、それを示すために `<script type="module">` 属性を使用してください。

## モジュール機能のエクスポート

モジュールが持つ機能にアクセスするために最初に必要なことは、そのような機能をエクスポートすることです。これは {{JSxRef("Statements/export", "export")}} 文を使って行います。

最も簡単な使い方は、モジュール外部に公開したい項目の前に `export` をつけることです。

```js
export const name = "square";

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return { length, x, y, color };
}
```

エクスポートできるものは、関数、`var`、`let`、`const`、および後述するクラスです。これらは最上位の階層にある必要があります。例えば、関数内で `export` を使うことはできません。

エクスポートしたい全ての項目をエクスポートするより便利な方法は、モジュールファイルの末尾に単一の export 文を追加し、その後にエクスポートしたい機能のカンマ区切りリストを中かっこで囲んで続けることです。例えば次のようにします。

```js
export { name, draw, reportArea, reportPerimeter };
```

## スクリプトへの機能のインポート

モジュールから何らかの機能をエクスポートした後は、それらを使えるようにするためにスクリプトにインポートする必要があります。その最も単純な方法は次のとおりです。

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
```

{{JSxRef("Statements/import", "import")}} 文の後ろに、中かっこで囲まれたインポートしたい機能のカンマ区切りリストを続け、その後ろに `from` キーワードと、モジュール指定子を続けます。

モジュール指定子は、JavaScript 環境がモジュールファイルへのパスを解決できる文字列を提供します。
ブラウザーでは、これはサイトルートからの相対パスとなり、`basic-modules` の例では `/js-examples/module-examples/basic-modules` となります。
しかし、ここでは代わりにドット（`.`）構文を使用して、「現在の場所」を意味しており、その後に探そうとしているファイルへの相対パスを記述しています。相対パスの方が短いし、URL の移植性も高いので、この例はサイト階層の別の場所に移しても作業することができますから、絶対パス全体を毎回書き出すよりもずっとよいでしょう。

そのため、次のようなパスは、

```bash
/js-examples/module-examples/basic-modules/modules/square.js
```

次のように書くことができます。

```bash
./modules/square.js
```

このような書き方の動作している例は [`main.js`](https://github.com/mdn/js-examples/blob/master/module-examples/basic-modules/main.js) にあります。

> **メモ:** モジュールシステムの中には、相対パスでも絶対パスでもなく、ファイル拡張子もない `modules/square` のようなモジュール指定を使用するものがあります。
> このような指定子は、最初に[インポートマップ](#importing_modules_using_import_maps)を定義しておけば、ブラウザー環境でも使用できます。

スクリプトへ機能をインポートすると、同じファイル内で定義されているのと同じように使うことができます。次のコードは、`main.js` でインポートに続く部分です。

```js
const myCanvas = create("myCanvas", document.body, 480, 320);
const reportList = createReportList(myCanvas.id);

const square1 = draw(myCanvas.ctx, 50, 50, 100, "blue");
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);
```

> **メモ:** インポートされた値は、エクスポートされた機能の読み取り専用ビューとなります。`const` 変数と同様に、インポートされた変数を再代入することはできませんが、オブジェクト値のプロパティを変更することは可能です。値を再代入することができるのは、その値をエクスポートしているモジュールだけです。例として、[`import` のリファレンス](/ja/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter) を参照してください。

## インポートマップを使用したモジュールのインポート

ブラウザーがモジュールをインポートするのに、絶対 URL か、文書のベース URL を使用して解決される相対 URL であるモジュール指定子を使用する方法は、前述したとおりです。

```js
import { name as squareName, draw } from "./shapes/square.js";
import { name as circleName } from "https://example.com/shapes/circle.js";
```

[インポートマップ](/ja/docs/Web/HTML/Element/script/type/importmap)により、モジュールをインポートするときに、モジュール指定子でほぼ全ての好きなテキストを代わりに指定することができます。このマップは、モジュールの URL が解決されたときにテキストを置き換える対応する値を提供します。

例えば、下記のインポートマップの `imports` キーは、「モジュール指定マップ」JSON オブジェクトを定義し、プロパティ名をモジュール指定子として使用でき、ブラウザーがモジュール URL を解決する際に対応する値が代入されます。
値は、絶対 URL または相対 URL でなければなりません。
相対 URL は、インポートマップを含む文書の[ベース URL](/ja/docs/Web/HTML/Element/base) を使用して絶対 URL アドレスに解決されます。

```html
<script type="importmap">
  {
    "imports": {
      "shapes": "./shapes/square.js",
      "shapes/square": "./modules/shapes/square.js",
      "https://example.com/shapes/": "/shapes/square/",
      "https://example.com/shapes/square.js": "./shapes/square.js",
      "../shapes/square": "./shapes/square.js"
    }
  }
</script>
```

インポートマップは `<script>` 要素の中の [JSON オブジェクト](/ja/docs/Web/HTML/Element/script/type/importmap#json_のインポートマップ表現) で、 `type` 属性を [`importmap`](/ja/docs/Web/HTML/Element/script/type/importmap) に設定して定義することができます。
文書内に置けるインポートマップは 1 つだけで、静的インポートと動的インポートの両方でどのモジュールが読み込まれるかを解決するために使用できるので、モジュールをインポートする `<script>` 要素の前に宣言する必要があります。

このマップで、上記のプロパティ名をモジュール指定子として使用することができるようになりました。
モジュール指定子キーに末尾のスラッシュがない場合は、モジュール指定子キー全体が照合されて置換されます。
例を説明すると、下記はモジュール名と一致し、URL を別のパスに再マップしています。

```js
// Bare module names as module specifiers
import { name as squareNameOne } from "shapes";
import { name as squareNameTwo } from "shapes/square";

// Remap a URL to another URL
import { name as squareNameThree } from "https://example.com/shapes/moduleshapes/square.js";
```

モジュール指定子が末尾にスラッシュがある場合、値が同様にスラッシュを持つ必要があり、キーは「パス接頭辞」として照合されます。
これにより、URL の全クラスを再マッピングすることができます。

```js
// Remap a URL as a prefix ( https://example.com/shapes/)
import { name as squareNameFour } from "https://example.com/shapes/square.js";
```

インポートマップ内の複数のキーがモジュール指定子を有効に一致することがあります。
例えば、`shapes/circle/` というモジュール指定子は、`shapes/` と `shapes/circle/` というモジュール指定子キーと一致する可能性があります。
この場合、ブラウザーは最も具体的な（最も長い）モジュール指定キーに一致するものを選択します。

インポートマップは、（Node.js のように）素のモジュール名を使用してモジュールをインポートすることができ、ファイル拡張子の有無にかかわらず、パッケージからのインポートをシミュレートすることも可能です。
上記では示していませんが、モジュールをインポートするスクリプトのパスに基づいて、特定のバージョンのライブラリーをインポートすることもできます。
一般的に、これらは開発者がより人間に優しいインポートコードを書くことを可能にし、サイトで使用されるモジュールの異なるバージョンと依存関係を管理することを容易にします。
これにより、ブラウザーとサーバーの両方で同じ JavaScript ライブラリーを使用するために必要な労力を縮小することができます。

以下の節では、上記で説明した様々な機能について、さらに詳しく説明します。

### 機能検出

インポートマップに対応しているかどうかは、[`HTMLScriptElement.supports()`](/ja/docs/Web/API/HTMLScriptElement/supports) 静的メソッドを使用してチェックすることができます（これ自体は広く対応しています）。

```js
if (HTMLScriptElement.supports?.("importmap")) {
  console.log("Browser supports import maps.");
}
```

### モジュールの素の名前でのインポート

Node.js のような一部の JavaScript 環境では、モジュール指定子に素の名前を使用することができます。
これは、環境がモジュール名をファイルシステム内の標準的な場所に解決することができるため、動作します。
例えば、 "square" モジュールをインポートするために、以下の構文を使用することができます。

```js
import { name, draw, reportArea, reportPerimeter } from "square";
```

ブラウザーで素の名前を使用するには、インポートマップが必要です。これは、ブラウザーがモジュール指定子を URL に解決するために必要な情報を提供します（JavaScript は、モジュールの場所に解決できないモジュール指定子をインポートしようとすると `TypeError` を発生します）。

下記は `square` というモジュール指定子のキーを定義したマップですが、この場合、相対アドレスの値に割り当てられました。

```html
<script type="importmap">
  {
    "imports": {
      "square": "./shapes/square.js"
    }
  }
</script>
```

このマップにより、モジュールをインポートするときに素の名前を使用することができるようになりました。

```js
import { name as squareName, draw } from "square";
```

### モジュールのパスの再マッピング

モジュール指定子マップの項目で、指定子キーとその関連値に末尾のフォワードスラッシュ (`/`) がある場合、パス接頭辞として使用することができます。
これにより、インポート URL の集合全体を、ある場所から別の場所に再マッピングすることができます。
また、Node の環境で見られるような「パッケージとモジュール」の作業をエミュレートするために使用することもできます。

> **メモ:** 末尾の `/` は、モジュール指定子キーがモジュール指定子の一部として指定することができることを示します。
> これが存在しない場合、ブラウザーはモジュール指定子キー全体にのみ一致します（置換します）。

#### モジュールのパッケージ

以下の JSON インポートマップ定義は、`lodash` を素の名前として、モジュール指定辞 `lodash/` をパス `/node_modules/lodash-es/` （文書のベース URL に解決）に割り当てたものです。

```json
{
  "imports": {
    "lodash": "/node_modules/lodash-es/lodash.js",
    "lodash/": "/node_modules/lodash-es/"
  }
}
```

このマッピングを使用すると、素の名前を使用する「パッケージ」全体と、（パスマッピングを使用する）その中のモジュールの両方をインポートすることができます。

```js
import _ from "lodash";
import fp from "lodash/fp.js";
```

上記の `fp` を `.js` というファイル拡張子なしでインポートすることは可能ですが、パスを使用するのではなく、`lodash/fp` というように、そのファイルに対して素のモジュール指定子キーを作成する必要があります。
これは、1 つのモジュールだけなら妥当かもしれませんが、多くのモジュールをインポートしたい場合には、拡大縮小することになります。

#### 一般的な URL 再マッピング

モジュール指定キーはパスである必要はなく、絶対 URL（または `./`, `../`, `/` のような URL ライクな相対パス）であってもかまいません。
これは、リソースへの絶対パスを持つモジュールを自分自身でローカルリソースと再マッピングしたい場合に有用な場合があります。

```json
{
  "imports": {
    "https://www.unpkg.com/moment/": "/node_modules/moment/"
  }
}
```

### バージョン管理のためのスコープ付きモジュール

Node のような環境では、モジュールとその依存関係を管理するために npm のようなパッケージマネージャーを使用します。
パッケージマネージャーは、各モジュールが他のモジュールやその依存関係から確実に区切られるようにします。
その結果、複雑なアプリケーションでは、モジュールグラフの異なる部分に複数の異なるバージョンで同じモジュールを複数回記載することができますが、ユーザーはこの複雑さについて考える必要はありません。

> **メモ:** 相対パスを使用してバージョン管理を行うこともできますが、この方法は他にも、自分のプロジェクトに特定の構造を強制し、素のモジュール名を使用することができないなどの点で劣ります。

インポートマップも同様に、アプリケーションに複数のバージョンの依存関係を保有し、同じモジュール指定子を使用してそれらを参照することができます。
これを実装するために `scopes` キーを使用します。このキーでは、インポートを実行するスクリプトのパスに応じて使用されるモジュール指定子マップを提供することができます。
下記の例では、これを実演しています。

```json
{
  "imports": {
    "coolmodule": "/node_modules/coolmodule/index.js"
  },
  "scopes": {
    "/node_modules/dependency/": {
      "coolmodule": "/node_modules/some/other/location/coolmodule/index.js"
    }
  }
}
```

このマッピングでは、 `/node_modules/dependency/` を格納した URL のスクリプトが `coolmodule` をインポートしている場合、 `/node_modules/some/other/location/coolmodule/index.js` にあるバージョンが使用されます。
`imports` のマップは、スコープされたマップに一致するスコープがない場合、または一致するスコープに一致する指定するものが格納されていない場合に、予備として使用されます。例えば、`coolmodule` がスコープパスに一致しないスクリプトからインポートされた場合、代わりに `imports` のモジュール指定子マップを使用し、 `/node_modules/coolmodule/index.js` にあるバージョンにマッピングします。

なお、スコープを選択するために使用されるパスは、アドレスの解決方法には影響しません。
割り当てられたパスの値がスコープのパスと一致する必要はありませんし、相対パスは依然としてインポートマップを格納するスクリプトのベース URL に解決されます。

モジュール指定子マップの場合と同様に、多くのスコープキーを保有することができ、これらには重複するパスが格納される可能性があります。
複数のスコープがリファラーURLに一致する場合、最も固有のスコープパスが最初に（最も長いスコープキーが）指定子を指定しないか調べられます。
ブラウザーは、一致する仕様がない場合、次に一致するほとんどのスコープパスにフォールバックし、さらにその先に進みます。
一致するスコープのいずれにも一致する指定子がない場合、ブラウザーは `imports` キーのモジュール指定子マップに一致する指定子があるかどうかを調べます。

### ハッシュ化されたファイル名の割り当てによるキャッシュの改善

ウェブサイトで使用されるスクリプトファイルは、キャッシュを容易にするためにハッシュ化されたファイル名にすることがよくあります。
この手法の欠点は、モジュールが変更された場合、そのハッシュ化されたファイル名を使用してそれをインポートするすべてのモジュールも更新/再生成する必要があることです。
このため、潜在的に更新のカスケードが発生し、ネットワークリソースを浪費することになります。

インポートマップは、この問題に対する便利な解決策を提供します。
アプリケーションやスクリプトは、固有のハッシュ化されたファイル名ではなく、代わりにモジュール名（アドレス）のハッシュ化されていないバージョンに依存します。
下記のようなインポートマップは、実際のスクリプトファイルへのマッピングを提供します。

```json
{
  "imports": {
    "main_script": "/node/srcs/application-fg7744e1b.js",
    "dependency_script": "/node/srcs/dependency-3qn7e4b1q.js"
  }
}
```

もし `dependency_script` が変更された場合、ファイル名に格納されているハッシュも変更されます。この場合、モジュールの名前の変更を反映するためにインポート マップを更新するだけでよくなります。
import 文の指定子は変わらないので、これに依存する JavaScript コードのソースを更新する必要はありません。

## HTML にモジュールを適用する

次に `main.js` モジュールを HTML ページに適用する必要があります。これは少し重要な点に違いがありますが、通常のスクリプトをページに適用する方法ととてもよく似ています。

最初に `type="module"` を [`<script>`](/ja/docs/Web/HTML/Element/script) 要素に含めることで、そのスクリプトがモジュールであることを宣言します。`main.js` をインポートするには、次のようにします。

```html
<script type="module" src="main.js"></script>
```

また、JavaScript コードを `<script>` 要素の本文内に配置することで、モジュールのスクリプトを HTML ファイルに直接埋め込むこともできます。

```html
<script type="module">
  /* ここに JavaScript モジュールコード */
</script>
```

モジュールをインポートする先のスクリプトは、基本的に最上位のモジュールとして動作します。これを無視すると、例えば Firefox の場合は "SyntaxError: import declarations may only appear at top level of a module" (構文エラー: インポート宣言は最上位のモジュールしか使えません) というエラーが発生します。

`import` と `export` 文は、モジュールの中でのみ使うことができます。通常のスクリプトの中では使えません。

## モジュールの通常のスクリプトのその他の違い

- ローカルでテストしようとするときは注意してください。ローカルから（つまり `file://` URL を使って）HTML ファイルを読み込もうとすると、JavaScript モジュールのセキュリティ要件のために、CORS エラーが発生します。テストはサーバー経由で行う必要があります。
- また、モジュール内部で定義されたスクリプトの動作は、通常のスクリプト内部のものと異なるかもしれません。これは、モジュール内部では自動的に{{JSxRef("Strict_mode", "厳格モード", "", 1)}}が使われるからです。
- モジュールのスクリプトを読み込むときに `defer` 属性（[`<script>` の属性](/ja/docs/Web/HTML/Element/script#属性) を参照）を使う必要はありません。モジュールは自動的に遅延実行されます。
- モジュールは、複数の `<script>` タグで参照されていても一度しか実行されません。
- 最後ですが重要なこととして明らかにしておきますが、モジュールの機能は単独のスクリプトのスコープにインポートされます。つまり、インポートされた機能はグローバルスコープから利用することはできません。それゆえ、インポートされた機能はインポートしたスクリプトの内部からしかアクセスできず、例えば JavaScript コンソールからはアクセスできません。文法エラーは開発者ツール上に表示されますが、使えることを期待するデバッグ技術の中には使えないものがあるでしょう。

モジュールで定義した変数は、グローバルオブジェクトに明示的に割り当てられない限り、そのモジュールのスコープに属します。他にも、グローバル定義する変数は、モジュール内で利用できます。例えば、以下のコードが指定された場合は次のようになります。

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title></title>
    <link rel="stylesheet" href="" />
  </head>
  <body>
    <div id="main"></div>
    <script>
      // A var statement creates a global variable.
      var text = "Hello";
    </script>
    <script type="module" src="./render.js"></script>
  </body>
</html>
```

```js
/* render.js */
document.getElementById("main").innerText = text;
```

グローバル変数 `text` と `document` はモジュール内で利用できるので、ページにはまだ `Hello` が表示されます。（この例から、モジュールは必ずしも import/export 文を必要としないことにも注意してください。必要なことは、エントリーポイントに `type="module"` があることだけです）。

## デフォルトエクスポートと名前付きエクスポート

これまでエクスポートした機能は、**名前付きエクスポート (named export)** というものです。それぞれの項目（関数、`const` など）は、エクスポート時にその名前を参照されて、インポート時にもその名前で参照されます。

エクスポートの種類には、他に**デフォルトエクスポート (default export)** と呼ばれるものもあります。これは、モジュールがデフォルトの機能を簡単に持つことができるように設計されたもので、また JavaScript のモジュールが既存の CommonJS や AMD のモジュールシステムと相互運用できるようになります (Json Orendorff による [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) で上手く説明されています。"Default exports" で検索してみてください)。

どのように動作するか説明するので、使用例をみてみましょう。basic-modules の `square.js` に、ランダムな色、大きさ、位置の正方形を描く `randomSquare()` という関数があります。この関数をデフォルトとしてエクスポートしたいので、ファイルの末尾に次の内容を書きます。

```js
export default randomSquare;
```

中かっこがないことに注意してください。

または、`export default` を関数に追加して、次のように匿名関数のように定義することもできます。

```js
export default function (ctx) {
  // …
}
```

`main.js` では、次のようにしてデフォルトの関数をインポートします。

```js
import randomSquare from "./modules/square.js";
```

インポートの時にも中かっこがないことに注意してください。これは、デフォルトエクスポートはモジュールごとにひとつしか作れず、`randomSquare` がそれであることがわかっているからです。上記は、基本的に次の簡略表現です。

```js
import { default as randomSquare } from "./modules/square.js";
```

> **メモ:** エクスポートされる項目の名前を変更するために使われる as の文法については、以下の [Renaming imports and exports](#renaming_imports_and_exports) セクションで説明します。

## 名前の衝突を避ける

これまでのところ、キャンバスに図形を描く私たちのモジュールは正常に動作しているようです。しかし、円や三角形など別の図形を描くモジュールを追加しようとしたらどうなるでしょう？ そのような図形にも `draw()` や `reportArea()` のような関数があるかもしれません。もし同じ名前を持つ異なる関数を同じトップレベルのモジュールファイルにインポートしようとすると、最終的に名前の衝突によるエラーが起きるでしょう。

幸いなことに、これに対処する方法はいくつかあります。それらについて、次のセクションで見ていきましょう。

## インポートやエクスポートの名前を変更する

`import` 文や `export` 文の中かっこの中では、キーワード `as` と新しい名前を使うことで、トップレベルのモジュールでその機能を使うときの名前を変更することができます。

次の二つの例は、異なる方法ですが、同じことをしています。

```js
// module.js の内部
export { function1 as newFunctionName, function2 as anotherNewFunctionName };

// main.js の内部
import { newFunctionName, anotherNewFunctionName } from "./modules/module.js";
```

```js
// module.js の内部
export { function1, function2 };

// main.js の内部
import {
  function1 as newFunctionName,
  function2 as anotherNewFunctionName,
} from "./modules/module.js";
```

実際の例を見てみましょう。[renaming](https://github.com/mdn/js-examples/tree/master/module-examples/renaming) ディレクトリーでは、前の使用例と同じモジュールを使っていますが、円や三角形を描画するためのモジュールである `circle.js` と `triangle.js` も追加しています。

それぞれのモジュール内部では、同じ名前を持つ機能がエクスポートされており、それゆえそれぞれの末尾の `export` 文は次のように同一であることがわかります。

```js
export { name, draw, reportArea, reportPerimeter };
```

これらを `main.js` にインポートするために、次のようにするとします。

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/circle.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/triangle.js";
```

すると、ブラウザーは "SyntaxError: redeclaration of import name" (構文エラー: インポート名の再宣言) (Firefox の場合) のようなエラーを発生させるでしょう。

そのため、それぞれが固有の名前を持つようにするために、次のようにインポートの名前を変える必要があります。

```js
import {
  name as squareName,
  draw as drawSquare,
  reportArea as reportSquareArea,
  reportPerimeter as reportSquarePerimeter,
} from "./modules/square.js";

import {
  name as circleName,
  draw as drawCircle,
  reportArea as reportCircleArea,
  reportPerimeter as reportCirclePerimeter,
} from "./modules/circle.js";

import {
  name as triangleName,
  draw as drawTriangle,
  reportArea as reportTriangleArea,
  reportPerimeter as reportTrianglePerimeter,
} from "./modules/triangle.js";
```

他の方法として、例えば次のようにすることで、モジュールファイル側でこの問題を解決することもできます。

```js
// in square.js
export {
  name as squareName,
  draw as drawSquare,
  reportArea as reportSquareArea,
  reportPerimeter as reportSquarePerimeter,
};
```

```js
// in main.js
import {
  squareName,
  drawSquare,
  reportSquareArea,
  reportSquarePerimeter,
} from "./modules/square.js";
```

これも同じように機能します。どちらのスタイルを取るかはあなた次第ですが、モジュール側のコードはそのままにしてインポート側を変更する方が、間違いなく賢明です。これは、制御できないサードパーティーのモジュールからインポートするときには、特に意味があります。

## モジュールオブジェクトの作成

上記のインポート方法は正常に動作しますが、少し使いづらく冗長です。よりよい方法は、モジュール内のそれぞれの機能を、モジュールオブジェクトの中にインポートすることです。その構文は次のとおりです。

```js
import * as Module from "./modules/module.js";
```

これは、`module.js` の中にある全てのエクスポートを取得して、それらを `Module` というオブジェクトのメンバーとして利用できるようにすることで、独自の名前空間を持たせるような効果があります。次のようにして使います。

```js
Module.function1();
Module.function2();
```

実際の使用例を見てみましょう。[module-objects](https://github.com/mdn/js-examples/tree/master/module-examples/module-objects) ディレクトリーでは、また同じ例を使っていますが、この新しい構文を利用するために書き直されています。モジュール内のエクスポートは、いずれも次の単純な構文を使っています。

```js
export { name, draw, reportArea, reportPerimeter };
```

一方でインポートは次のようなものです。

```js
import * as Canvas from "./modules/canvas.js";

import * as Square from "./modules/square.js";
import * as Circle from "./modules/circle.js";
import * as Triangle from "./modules/triangle.js";
```

どの場合も、その指定されたオブジェクト名の配下からモジュールのインポートにアクセスできます。例えば次のようにして使います。

```js
const square1 = Square.draw(myCanvas.ctx, 50, 50, 100, "blue");
Square.reportArea(square1.length, reportList);
Square.reportPerimeter(square1.length, reportList);
```

このように (必要な箇所にオブジェクトの名前を含むようにさえすれば) コードは以前と同じように書くことができ、そしてインポートはより簡潔になります。

## モジュールとクラス

最初の方で触れましたが、クラスをエクスポートしたりインポートすることもできます。これがコード上で名前の衝突を避けるもう一つの方法で、もし自分のモジュールを既にオブジェクト指向のスタイルで書いているのであれば、特に便利です。

[classes](https://github.com/mdn/js-examples/tree/master/module-examples/classes) ディレクトリーの中には、私たちの図形を描くモジュールを ES クラスを使って書き直した例があります。例えば [`square.js`](https://github.com/mdn/js-examples/blob/master/module-examples/classes/modules/square.js) ファイルでは、次のように全ての機能を一つのクラスの中に持たせています。

```js
class Square {
  constructor(ctx, listId, length, x, y, color) {
    // …
  }

  draw() {
    // …
  }

  // …
}
```

そして、次のようにエクスポートします。

```js
export { Square };
```

[`main.js`](https://github.com/mdn/js-examples/blob/master/module-examples/classes/main.js) では、これを次のようにインポートします。

```js
import { Square } from "./modules/square.js";
```

そして、正方形を描くために次のようにクラスを使います。

```js
const square1 = new Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, "blue");
square1.draw();
square1.reportArea();
square1.reportPerimeter();
```

## モジュールの集約

複数のモジュールをひとつに集約させたいと思うことがあるかもしれません。依存性の階層は複数になることがあり、いくつかあるサブモジュールをひとつの親モジュールにまとめて管理を単純化したいと思うかもしれません。これは、親モジュールで次の形式によるエクスポート構文を使うことで可能です。

```js
export * from "x.js";
export { name } from "x.js";
```

使用例は [module-aggregation](https://github.com/mdn/js-examples/tree/master/module-examples/module-aggregation) ディレクトリーを参照してください。この例 (クラスを使った以前の例を元にしています) には、`shapes.js` というモジュールが追加されています。これは `circle.js`、`square.js`、`triangle.js` の全ての機能をひとつに集約したものです。また、サブモジュールを `modules` ディレクトリーの中にある `shapes` というサブディレクトリーに移動させています。つまり、この例のモジュール構造は次のようなものです。

```plain
modules/
  canvas.js
  shapes.js
  shapes/
    circle.js
    square.js
    triangle.js
```

それぞれのサブモジュールでは、例えば次のような同じ形式のエクスポートが行われています。

```js
export { Square };
```

その次は集約を行う部分です。[`shapes.js`](https://github.com/mdn/js-examples/blob/master/module-examples/module-aggregation/modules/shapes.js) の内部には次のような行があります。

```js
export { Square } from "./shapes/square.js";
export { Triangle } from "./shapes/triangle.js";
export { Circle } from "./shapes/circle.js";
```

これらは、個々のサブモジュールのエクスポートを取得して、それらを　`shapes.js` モジュールから利用できるようにする効果があります。

> **メモ:** `shapes.mjs` の中で参照されているエクスポートは、基本的にそのファイルを経由して転送されるだけで、ファイルの中には存在しません。そのため、同じファイルの中でそれらを使ったコードを書くことはできません。

最後に `main.js` ファイルでは、全てのモジュールのクラスにアクセスするために、次のインポートを書き換えています。

```js
import { Square } from "./modules/square.js";
import { Circle } from "./modules/circle.js";
import { Triangle } from "./modules/triangle.js";
```

書き換え後は、次のような 1 行になります。

```js
import { Square, Circle, Triangle } from "./modules/shapes.js";
```

## 動的なモジュールの読み込み

ブラウザーで利用できる JavaScript モジュールの最新機能は、動的なモジュールの読み込みです。これにより、全てを最初に読み込んでしまうのではなく、必要が生じたときにのみ動的にモジュールを読み込むことができます。これには明らかなパフォーマンス上の利点があります。どのように動作するのか、読んで見てみましょう。

この新しい機能により、[`import()`](/ja/docs/Web/JavaScript/Reference/Operators/import) を関数として呼び出し、そのときの引数としてモジュールへのパスを指定することができます。これは次のように {{JSxRef("Promise")}} を返し、エクスポートにアクセスできるモジュールオブジェクト（[モジュールオブジェクトの作成](#モジュールオブジェクトの作成)を参照）を使って履行状態になります。

```js
import("./modules/myModule.js").then((module) => {
  // モジュールを使って何かをする。
});
```

> **メモ:** 動的インポートは、ブラウザー のメインスレッド、共有ワーカー、専用ワーカーで許可されています。
> しかし、サービスワーカーやワークレットで `import()` を呼び出すと、例外が発生します。

<!-- https://whatpr.org/html/6395/webappapis.html#hostimportmoduledynamically(referencingscriptormodule,-specifier,-promisecapability) -->

例を見てみましょう。[dynamic-module-imports](https://github.com/mdn/js-examples/tree/master/module-examples/dynamic-module-imports) ディレクトリーには、以前のクラスの例に基づいた別の使用例があります。しかし、今回は使用例が読み込まれたときにはキャンバスに何も描画しません。その代わり "Circle" (円)、"Square" (正方形)、"Triangle" (三角形) という 3 つのボタンを表示し、それらが押されたとき、対応した図形を描くために必要なモジュールを動的に読み込んで使用します。

この使用例では [`index.html`](https://github.com/mdn/js-examples/blob/master/module-examples/dynamic-module-imports/index.html) と [`main.js`](https://github.com/mdn/js-examples/blob/master/module-examples/dynamic-module-imports/main.js) のみを変更しており、モジュールのエクスポートは以前と同じままです。

`main.js` では、それぞれのボタンへの参照を取得するために、次のように [`document.querySelector()`](/ja/docs/Web/API/Document/querySelector) を使っています。

```js
const squareBtn = document.querySelector(".square");
```

そしてそれぞれのボタンに、押されたときに関連するモジュールを動的に読み込んで図形を描くためのイベントリスナーを設定します。

```js
squareBtn.addEventListener("click", () => {
  import("./modules/square.js").then((Module) => {
    const square1 = new Module.Square(
      myCanvas.ctx,
      myCanvas.listId,
      50,
      50,
      100,
      "blue",
    );
    square1.draw();
    square1.reportArea();
    square1.reportPerimeter();
  });
});
```

なお、履行されたプロミスはモジュールオブジェクトを返すので、クラスはそのオブジェクトのサブフィーチャーとなり、これでコンストラクターには `Module.Square( /* ... */ )` のように `Module.` を先頭に付けてアクセスする必要があります。

動的インポートのもう一つの利点は、スクリプト環境であっても常に利用できるということです。したがって、HTMLに既存の `<script>` タグがあり、そのタグに `type="module"` がない場合でも、モジュールとして配布されているコードを動的にインポートして再利用することができます。

```html
<script>
  import("./modules/square.js").then((module) => {
    // モジュールで何かを行う
  });
  // 他にも、グローバルスコープで処理をするコードで、まだモジュールにリファクタリングする準備が整っていないコードもあります。
  var btn = document.querySelector(".square");
</script>
```

## 最上位の await

最上位の await は、モジュール内で利用できる機能です。つまり、`await` キーワードを使用することができます。これは、モジュールが大きな[非同期関数](/ja/docs/Learn/JavaScript/Asynchronous/Introducing)として動作できるようにするもので、親モジュールで使用する前にコードを評価できますが、兄弟モジュールの読み込みをブロックすることはしません。

例を見ていきましょう。この節で記述するすべてのファイルとコードは [`top-level-await`](https://github.com/mdn/js-examples/tree/master/module-examples/top-level-await) ディレクトリーにあり、前回までの例から拡張されています。

まず最初に、別個の [`colors.json`](https://github.com/mdn/js-examples/blob/master/module-examples/top-level-await/data/colors.json) ファイルでカラーパレットを宣言します。

```json
{
  "yellow": "#F4D03F",
  "green": "#52BE80",
  "blue": "#5499C7",
  "red": "#CD6155",
  "orange": "#F39C12"
}
```

次に、[`getColors.js`](https://github.com/mdn/js-examples/blob/master/module-examples/top-level-await/modules/getColors.js) というモジュールを作成します。このモジュールは読み取りリクエストを使って [`colors.json`](https://github.com/mdn/js-examples/blob/master/module-examples/top-level-await/data/colors.json) ファイルを読み込み、そのデータをオブジェクトとして返すようにします。

```js
// 読み取りリクエスト
const colors = fetch("../data/colors.json").then((response) => response.json());

export default await colors;
```

ここで最後のエクスポート行に注目してください。

キーワード `await` を、定数 `colors` を指定したエクスポートの前に使用しています。これは、このモジュールを含む他のモジュールは、`colors` がダウンロードされ、解釈されるまで待ってから使用することを意味しています。

このモジュールを [`main.js`](https://github.com/mdn/js-examples/blob/master/module-examples/top-level-await/main.js) ファイルに含めてみましょう。

```js
import colors from "./modules/getColors.js";
import { Canvas } from "./modules/canvas.js";

const circleBtn = document.querySelector(".circle");

// …
```

シェイプ関数を呼び出す際に、前回使用された文字列の代わりに `colors` を使用することにします。

```js
const square1 = new Module.Square(
  myCanvas.ctx,
  myCanvas.listId,
  50,
  50,
  100,
  colors.blue,
);

const circle1 = new Module.Circle(
  myCanvas.ctx,
  myCanvas.listId,
  75,
  200,
  100,
  colors.green,
);

const triangle1 = new Module.Triangle(
  myCanvas.ctx,
  myCanvas.listId,
  100,
  75,
  190,
  colors.yellow,
);
```

これは [`main.js`](https://github.com/mdn/js-examples/blob/master/module-examples/top-level-await/main.js) 内のコードが [`getColors.js`](https://github.com/mdn/js-examples/blob/master/module-examples/top-level-await/modules/getColors.js) 内のコードを実行するまで実行されないので有益です。しかし、他のモジュールが読み込まれるのをブロックすることはありません。例えば、[`canvas.js`](https://github.com/mdn/js-examples/blob/master/module-examples/top-level-await/modules/canvas.js) モジュールは、`colors` が読み込まれている間、読み込みを継続します。

## 「同型」モジュールの作成

モジュールの導入により、JavaScript の環境では、コードをモジュール方式で配布し、再利用することが奨励されています。しかし、それは必ずしも JavaScript コードの一部がすべての環境で実行できることを意味しているわけではありません。例えば、ユーザーのパスワードの SHA ハッシュを生成するモジュールを開発したとします。ブラウザーのフロントエンドで使用することはできますか？ Node.js サーバーで使用することはできますか？答えは、「場合による」です。

前回示したように、モジュールは依然としてグローバル変数にアクセスすることができます。モジュールが `window` のようなグローバルを参照する場合、ブラウザーでは実行できますが、Node.js サーバーでは `window` が利用できないため、エラーが発生します。同様に、コードが機能するために `process` へのアクセスを必要とする場合、それは Node.js でしか使用できません。

モジュールの再利用性を最大化するために、コードを「同型」にする、つまり、どのランタイムでも同じ挙動を示すようにすることがよく推奨されます。これは、一般的に3つの方法で達成されます。

- モジュールを「コア」と「バインディング」に分割します。「コア」では、ハッシュを計算するような純粋な JavaScript のロジックに焦点を当て、DOM、ネットワーク、ファイルシステムへのアクセスは一切行わず、ユーティリティ関数を公開します。「バインディング」では、グローバルコンテキストからの読み書きができるようにします。例えば、「ブラウザーバインディング」では入力ボックスから、「Node バインディング」では `process.env` から値を読み込むことができますが、どちらの配置から読み込んだ値も同じコア関数に接続し、同じように処理されることにします。コアはどの環境でもインポートして同じように使用することができ、通常軽量であるバインディングだけをプラットフォームに固有であるようにします。
- 特定のグローバルが使用される前に存在するかどうかを検出します。例えば、`typeof window === "undefined"` と判定された場合、おそらく Node.js 環境であるため、DOM を読むべきではないことが分かります。

  ```js
  // myModule.js
  let password;
  if (typeof process !== "undefined") {
    // Node.js で実行中。 `process.env` から読み出す
    password = process.env.PASSWORD;
  } else if (typeof window !== "undefined") {
    // ブラウザーで実行中。入力ボックスから読み出す
    password = document.getElementById("password").value;
  }
  ```

  これは、2 つの分岐が実際に同じ動作（「同型」）で終わるのであれば、環境設定としては好ましいものです。同じ機能を提供することが不可能な場合、あるいは、未使用の部分が多いまま大量のコードを読み込む必要がある場合は、代わりに異なる「バインディング」を使用するのがよいでしょう。

- 足りない機能の代替を提供するために、ポリフィルを使用します。例えば、Node.js で v18 以降しか対応していない [`fetch`](/ja/docs/Web/API/Fetch_API) 関数を使用したい場合、 [`node-fetch`](https://www.npmjs.com/package/node-fetch) が提供するような同様の API を使用することができます。動的インポートによって条件付きで行うことができます。

  ```js
  // myModule.js
  if (typeof fetch === "undefined") {
    // We are running in Node.js; use node-fetch
    globalThis.fetch = (await import("node-fetch")).default;
  }
  // …
  ```

  [`globalThis`](/ja/docs/Web/JavaScript/Reference/Global_Objects/globalThis) 変数は、どの環境でも利用できるグローバルオブジェクトで、モジュール内でグローバル変数を読み込んだり作成したりしたい場合に有益です。

これらの実践は、モジュールに固有のものではありません。それでも、コードの再利用性やモジュール化の流れから、使用可能な限り多くの人に楽しんでもらえるように、コードをクロスプラットフォームにすることが推奨されています。Node.js のようなランタイムも、ウェブとの相互運用性を高めるために、使用可能な範囲で積極的にウェブ API を実装しています。

## トラブルシューティング

これらは、モジュールの動作に問題があるときに助けになるかもしれないヒントです。もし他にあれば自由にリストに追加してください。

- 前に説明したので繰り返しになりますが、`.mjs` ファイルは `text/javascript` という MIME タイプ（または JavaScript 互換であるそれ以外のタイプ、ただし `text/javascript` を推奨）で読み込まれる必要があり、そうでなければ厳密な MIME タイプチェックによって "The server responded with a non-JavaScript MIME type" （サーバーが非 JavaScript の MIME タイプを返しました（のようなエラーが発生するでしょう。
- HTML ファイルをローカルから（例えば `file://` の URL を使って）読み込もうとすると、JavaScript モジュールのセキュリティ要件によって CORS エラーが発生するでしょう。動作検証はサーバー経由で行う必要があります。GitHub は `.mjs` ファイルを正しい MIME 型で返すため理想的です。
- `.mjs` は比較的新しい拡張子であり、OS によってはそれを認識しないか、何か別のものに置き換えようとしてしまうかもしれません。例えば macOS は、通知することなく `.mjs` ファイルに `.js` を追加して自動的に拡張子を隠すことがわかりました。そのため、実際にやってくるファイルは全て `x.mjs.js` のようなものでした。ファイル拡張子を自動的に隠すことをオフにして、`.mjs` を受け入れるように設定すると問題は無くなります。

## 関連情報

- [Using JavaScript modules on the web](https://v8.dev/features/modules#mjs), Addy Osmani と Mathias Bynens による
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/), Lin Clark による Hacks ブログの投稿
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/), Jason Orendorff による Hacks ブログの投稿
- [Exploring JS: Modules](https://exploringjs.com/es6/ch_modules.html)（Axel Rauschmayer の書籍）

{{Previous("Web/JavaScript/Guide/Meta_programming")}}

---
title: JavaScript モジュール
slug: Web/JavaScript/Guide/Modules
---

{{jsSidebar("JavaScript Guide")}}{{Previous("Web/JavaScript/Guide/Meta_programming")}}

本章では、JavaScript のモジュールを使い始めるために必要なことすべてを紹介します。

## モジュールの背景

JavaScript のプログラムはとても小さいものから始まりました。初期の用途は、必要に応じてウェブページにちょっとした対話的な機能を追加する独立したスクリプト処理がほとんどであったため、大きなスクリプトは通常必要ありませんでした。そして何年かが過ぎ、今や大量の JavaScript を持つ完全なアプリケーションをブラウザーで実行することはもちろん、JavaScript を他のコンテキスト (例えば [Node.js](/ja/docs/Glossary/Node.js)) で使うこともあります。

それゆえ近年は、JavaScript プログラムをモジュールに分割して必要な時にインポートできるような仕組みの提供が検討されるようになってきました。Node.js は長年この機能を提供しており、モジュールの利用を可能にする JavaScript ライブラリーやフレームワークも数多くあります (例えば、他の [CommonJS](https://ja.wikipedia.org/wiki/CommonJS) や、[AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md) ベースのモジュールシステムである [RequireJS](https://requirejs.org/) など、そしてより最近では [Webpack](https://webpack.github.io/) や [Babel](https://babeljs.io/))。

良い知らせは、モダンブラウザーがモジュール機能のネイティブサポートを開始していることで、この記事がその全てです。これは良いことです。ブラウザーはモジュールの読み込みを最適化できるので、外部ライブラリーを使用してクライアント側の余分な処理やラウンドトリップを行うよりも効率的にすることができます。

## ブラウザーのサポート状況

ネイティブの JavaScript モジュール機能は、[`import`](/ja/docs/Web/JavaScript/Reference/Statements/import) と [`export`](/ja/docs/Web/JavaScript/Reference/Statements/export) 文を利用します。これらに対するブラウザーの互換性は次のとおりです。

### import

{{Compat("javascript.statements.import")}}

### export

{{Compat("javascript.statements.export")}}

## 使用例の紹介

モジュールの使い方を紹介するために、GitHub 上に[簡単な使用例](https://github.com/mdn/js-examples/tree/master/module-examples)を作りました。これらは、ウェブページに {{htmlelement("canvas")}} 要素を追加し、その canvas 上にいくつかの異なる図形 (と、それに関するレポート) を描画する簡単なモジュールの例です。

このような機能はあまり役に立ちませんが、モジュールの説明が明確になるように意図的に単純にしています。

> **メモ:** 使用例をダウンロードしてローカル実行する場合、ローカルのウェブサーバー上で実行する必要があります。

## 構造の基本的な例

最初の使用例 ([basic-modules](https://github.com/mdn/js-examples/tree/master/module-examples/basic-modules) を参照) には、次のようなファイル構造があります。

```
index.html
main.js
modules/
    canvas.js
    square.js
```

> **メモ:** このガイドの使用例のファイル構造は、全て基本的に同一ですので、上記のファイル構造をよく見ることになるでしょう。

ディレクトリー modules には、次の 2 つのモジュールがあります。

- `canvas.js` — canvas の設定に関する次の関数を持ちます。

  - `create()` — 指定された `width` と `height` を持つ canvas を、指定された ID を持つラッパー {{htmlelement("div")}} の中に作成し、そのラッパー div 自体を指定された親要素の中に追加します。戻り値は、canvas の 2D コンテキストとラッパーの ID を持つ、オブジェクトです。
  - `createReportList()` — 順序なしリストを指定されたラッパー要素の中に作成し、これをレポートデータを出力するために使うことができます。戻り値は、リストの ID です。

- `square.js` — 次のものを持ちます。

  - `name` —文字列 'square' を内容とする定数です。
  - `draw()` — 正方形を、指定された canvas 上に、指定された辺の長さ、位置、色を使って描画します。戻り値は、正方形の辺の長さ、位置、色を持つオブジェクトです。
  - `reportArea()` — 指定された辺の長さを持つ正方形の面積を、指定されたレポート用のリストに書き出します。
  - `reportPerimeter()` — 指定された辺の長さを持つ正方形の周囲の長さを、指定されたレポート用のリストに書き出します。

## 余談 — `.mjs` 対 `.js`

この記事ではモジュールファイルに `.js` の拡張子を使用していますが、他の記事では `.mjs` という拡張子が使用されているのを目にすることがあるかもしれません。例えば、[V8 のドキュメント](https://v8.dev/features/modules#mjs)ではこれを推奨しています。理由は以下の通りです。

- どのファイルがモジュールで、どのファイルが通常の JavaScript であるかを明確にすることができます。
- これにより、[Node.js](https://nodejs.org/api/esm.html#esm_enabling) のようなランタイムや [Babel](https://babeljs.io/docs/en/options#sourcetype) のようなビルドツールで、モジュールファイルがモジュールとして解析されるようになります。

しかし、少なくとも今のところは `.js` を使い続けることにしました。ブラウザでモジュールを正しく動作させるためには、サーバーが `text/javascript` などの JavaScript MIME タイプを含む `Content-Type` ヘッダでモジュールを提供していることを確認する必要があります。そうしないと、"The server responded with a non-JavaScript MIME type" のような厳格な MIME タイプチェックエラーが表示され、ブラウザは JavaScript を実行しません。ほとんどのサーバーでは、`.js` ファイルにはすでに正しい MIME タイプが設定されていますが、`.mjs` ファイルにはまだ設定されていません。すでに `.mjs` ファイルを正しく提供しているサーバーには、[GitHub Pages](https://pages.github.com/) や Node.js の [`http-server`](https://github.com/http-party/http-server#readme) などがあります。

これは、すでにそのような環境を使用している場合や、今はまだ使用していないが、何をしているか知っていてアクセスできる場合には問題ありません(つまり、`.mjs` ファイルに正しい [`Content-Type`](/ja/docs/Web/HTTP/Headers/Content-Type) を設定するようにサーバーを設定することができます)。しかし、あなたがファイルを提供しているサーバーを制御できない場合には、混乱を引き起こす可能性があります。

この記事では学習と移植性を考慮して、`.js` を使用することにしました。

通常の JavaScript ファイルに `.js` を使用するのと比較して、モジュールに `.mjs` を使用することの明確さを本当に重視しているが、上記の問題に直面したくない場合は、開発中に `.mjs` を使用し、ビルドステップで `.js` に変換することをおすすめします。

また、次の点にも注意してください。

- [TypeScript](https://www.typescriptlang.org/ja/) のように、ツールによっては `.mjs` をサポートしていないものがあります。
- モジュールが指し示されているとき、それを示すために `<script type="module">` 属性を使用します。

## モジュール機能のエクスポート

モジュールが持つ機能にアクセスするために最初に必要なことは、そのような機能をエクスポートすることです。これは [`export`](/ja/docs/Web/JavaScript/Reference/Statements/export) 文を使って行います。

最も簡単な使い方は、モジュール外部に公開したい項目の前に `export` をつけることです。

```js
export const name = 'square';

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return {
    length: length,
    x: x,
    y: y,
    color: color
  };
}
```

エクスポートできるものは、関数、`var`、`let`、`const`、および後で見ることになりますが、クラスです。これらは最上位の階層にある必要があります。例えば、関数内で `export` を使うことはできません。

エクスポートしたい全ての項目をエクスポートするより便利な方法は、モジュールファイルの末尾に単一の export 文を追加し、その後にエクスポートしたい機能のカンマ区切りリストを中かっこで囲んで続けることです。例えば次のようにします。

```js
export { name, draw, reportArea, reportPerimeter };
```

## スクリプトへの機能のインポート

モジュールから何らかの機能をエクスポートした後は、それらを使えるようにするためにスクリプトにインポートする必要があります。その最も単純な方法は次のとおりです。

```js
import { name, draw, reportArea, reportPerimeter } from './modules/square.js';
```

[`import`](/ja/docs/Web/JavaScript/Reference/Statements/import) 文の後ろに、中かっこで囲まれたインポートしたい機能のカンマ区切りリストを続け、その後ろに from キーワードと、モジュールファイルへのパスを続けます。このパスは、サイトのルートからの相対パスであり、`basic-modules` の場合は `/js-examples/module-examples/basic-modules` です。

しかし、この例ではパスの書き方が少し異なっています。「現在の位置」を意味するドット (`.`) 記法を使っており、その後ろに見つけようとするファイルへのパスを続けています。これは、完全な相対パスを毎回記述するよりも短くてすむためとてもよい方法であり、URL の可搬性もあるため、サイト階層構造の異なる場所に移動させた場合でも動作するでしょう。

そのため、このようなパスは、

```
/js-examples/module-examples/basic-modules/modules/square.js
```

このように書けます。

```
./modules/square.js
```

このような書き方の動作している例は [`main.js`](https://github.com/mdn/js-examples/blob/master/module-examples/basic-modules/main.js) にあります。

> **メモ:** モジュールシステムの中には、ファイルの拡張子やドットを省略できるものがあります (例えば `'/modules/square'`)。このような書き方は、ネイティブの JavaScript モジュールでは動作しません。

スクリプトへ機能をインポートすると、同じファイル内で定義されているのと同じように使うことができます。次のコードは、`main.js` でインポートに続く部分です。

```js
let myCanvas = create('myCanvas', document.body, 480, 320);
let reportList = createReportList(myCanvas.id);

let square1 = draw(myCanvas.ctx, 50, 50, 100, 'blue');
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);
```

> **メモ:** インポートされた機能はファイル内で利用できますが、エクスポートされた機能の読み取り専用ビューです。インポートされた変数を変更することはできませんが、`const` と同様にプロパティを変更することはできます。さらに、これらの機能はライブバインディングとしてインポートされます。つまり、`const` と違ってバインディングを変更できなくても値を変更できるということです。

## HTML にモジュールを適用する

次に `main.js` モジュールを HTML ページに適用する必要があります。これは少し重要な点に違いがありますが、通常のスクリプトをページに適用する方法ととてもよく似ています。

最初に `type="module"` を {{htmlelement("script")}} 要素に含めることで、そのスクリプトがモジュールであることを宣言します。

```js
<script type="module" src="main.js"></script>
```

また、`<script>` 要素の本文内に JavaScript コードを配置することで、モジュールのスクリプトを HTML ファイルに直接埋め込むこともできます。

```js
<script type="module">
  /* ここに JavaScript モジュールコード */
</script>
```

モジュールをインポートする先のスクリプトは、基本的に最上位のモジュールとして動作します。これを無視すると、例えば Firefox の場合は "SyntaxError: import declarations may only appear at top level of a module" (構文エラー: インポート宣言は最上位のモジュールしか使えません) というエラーが発生します。

`import` と `export` 文は、モジュールの中でのみ使うことができます。通常のスクリプトの中では使えません。

## モジュールの通常のスクリプトの間のその他の違い

- ローカルでテストしようとするときは注意してください。ローカルから (つまり `file://` URL を使って) HTML ファイルを読み込もうとすると、JavaScript モジュールのセキュリティ要件のために、CORS エラーが発生します。テストはサーバー経由で行う必要があります。
- また、モジュール内部で定義されたスクリプトの動作は、通常のスクリプト内部のものと異なるかもしれません。これは、モジュール内部では自動的に [Strict モード](/ja/docs/Web/JavaScript/Reference/Strict_mode) が使われるからです。
- モジュールのスクリプトを読み込むときに `defer` 属性 ([`<script>` の属性](/ja/docs/Web/HTML/Element/script#Attributes) を参照) を使う必要はありません。モジュールは自動的に遅延実行されます。
- モジュールは、複数の `<script>` タグで参照されていても一度しか実行されません。
- 最後ですが重要なこととして明らかにしておきますが、モジュールの機能は単独のスクリプトのスコープにインポートされます。つまり、インポートされた機能はグローバルスコープから利用することはできません。それゆえ、インポートされた機能はインポートしたスクリプトの内部からしかアクセスできず、例えば JavaScript コンソールからはアクセスできません。文法エラーは開発ツール上に表示されますが、使えることを期待するデバッグ技術の中には使えないものがあるでしょう。

## デフォルトエクスポートと名前付きエクスポート

これまでエクスポートした機能は、**名前付きエクスポート (named export)** というものです。それぞれの項目 (関数、`const` など) は、エクスポート時にその名前を参照されて、インポート時にもその名前で参照されます。

エクスポートの種類には、他に**デフォルトエクスポート**と呼ばれるものもあります。これは、モジュールがデフォルトの機能を簡単に持つことができるように設計されたもので、また JavaScript のモジュールが既存の CommonJS や AMD のモジュールシステムと相互運用できるようになります (Json Orendorff による [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) で上手く説明されています。"Default exports" で検索してみてください)。

どのように動作するか説明するので、使用例をみてみましょう。basic-modules の `square.js` に、ランダムな色、大きさ、位置の正方形を描く `randomSquare()` という関数があります。この関数をデフォルトとしてエクスポートしたいので、ファイルの末尾に次の内容を書きます。

```js
export default randomSquare;
```

中かっこがないことに注意してください。

または、`export default` を関数に追加して、次のように匿名関数のように定義することもできます。

```js
export default function(ctx) {
  ...
}
```

`main.js` では、次のようにしてデフォルトの関数をインポートします。

```js
import randomSquare from './modules/square.js';
```

インポートの時にも中かっこがないことに注意してください。これは、デフォルトエクスポートはモジュールごとにひとつしか作れず、`randomSquare` がそれであることがわかっているからです。上記は、基本的に次の簡略表現です。

```js
import {default as randomSquare} from './modules/square.js';
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
export {
  function1 as newFunctionName,
  function2 as anotherNewFunctionName
};

// main.js の内部
import { newFunctionName, anotherNewFunctionName } from './modules/module.js';
```

```js
// module.js の内部
export { function1, function2 };

// main.js の内部
import { function1 as newFunctionName,
         function2 as anotherNewFunctionName } from './modules/module.js';
```

実際の例を見てみましょう。[renaming](https://github.com/mdn/js-examples/tree/master/module-examples/renaming) ディレクトリでは、前の使用例と同じモジュールを使っていますが、円や三角形を描画するためのモジュールである `circle.js` と `triangle.js` も追加しています。

それぞれのモジュール内部では、同じ名前を持つ機能がエクスポートされており、それゆえそれぞれの末尾の `export` 文は次のように同一であることがわかります。

```js
export { name, draw, reportArea, reportPerimeter };
```

これらを `main.js` にインポートするために、次のようにするとします。

```js
import { name, draw, reportArea, reportPerimeter } from './modules/square.js';
import { name, draw, reportArea, reportPerimeter } from './modules/circle.js';
import { name, draw, reportArea, reportPerimeter } from './modules/triangle.js';
```

すると、ブラウザーは "SyntaxError: redeclaration of import name" (構文エラー: インポート名の再宣言) (Firefox の場合) のようなエラーを発生させるでしょう。

そのため、それぞれが固有の名前を持つようにするために、次のようにインポートの名前を変える必要があります。

```js
import { name as squareName,
         draw as drawSquare,
         reportArea as reportSquareArea,
         reportPerimeter as reportSquarePerimeter } from './modules/square.js';

import { name as circleName,
         draw as drawCircle,
         reportArea as reportCircleArea,
         reportPerimeter as reportCirclePerimeter } from './modules/circle.js';

import { name as triangleName,
        draw as drawTriangle,
        reportArea as reportTriangleArea,
        reportPerimeter as reportTrianglePerimeter } from './modules/triangle.js';
```

他の方法として、例えば次のようにすることで、モジュールファイル側でこの問題を解決することもできます。

```js
// in square.js
export { name as squareName,
         draw as drawSquare,
         reportArea as reportSquareArea,
         reportPerimeter as reportSquarePerimeter };
```

```js
// in main.js
import { squareName, drawSquare, reportSquareArea, reportSquarePerimeter } from './modules/square.js';
```

これも同じように機能します。どちらのスタイルを取るかはあなた次第ですが、モジュール側のコードはそのままにしてインポート側を変更する方が、間違いなく賢明です。これは、制御できないサードパーティーのモジュールからインポートするときには、特に意味があります。

## モジュールオブジェクトの作成

上記のインポート方法は正常に動作しますが、少し使いづらく冗長です。よりよい方法は、モジュール内のそれぞれの機能を、モジュールオブジェクトの中にインポートすることです。その構文は次のとおりです。

```js
import * as Module from './modules/module.js';
```

これは、`module.js` の中にある全てのエクスポートを取得して、それらを `Module` というオブジェクトのメンバーとして利用できるようにすることで、独自の名前空間を持たせるような効果があります。次のようにして使います。

```js
Module.function1()
Module.function2()
など
```

実際の使用例を見てみましょう。[module-objects](https://github.com/mdn/js-examples/tree/master/module-examples/module-objects) ディレクトリでは、また同じ例を使っていますが、この新しい構文を利用するために書き直されています。モジュール内のエクスポートは、いずれも次の単純な構文を使っています。

```js
export { name, draw, reportArea, reportPerimeter };
```

一方でインポートは次のようなものです。

```js
import * as Canvas from './modules/canvas.js';

import * as Square from './modules/square.js';
import * as Circle from './modules/circle.js';
import * as Triangle from './modules/triangle.js';
```

どの場合も、その指定されたオブジェクト名の配下からモジュールのインポートにアクセスできます。例えば次のようにして使います。

```js
let square1 = Square.draw(myCanvas.ctx, 50, 50, 100, 'blue');
Square.reportArea(square1.length, reportList);
Square.reportPerimeter(square1.length, reportList);
```

このように (必要な箇所にオブジェクトの名前を含むようにさえすれば) コードは以前と同じように書くことができ、そしてインポートはより簡潔になります。

## モジュールとクラス

最初の方で触れましたが、クラスをエクスポートしたりインポートすることもできます。これがコード上で名前の衝突を避けるもう一つの方法で、もし自分のモジュールを既にオブジェクト指向のスタイルで書いているのであれば、特に便利です。

[classes](https://github.com/mdn/js-examples/tree/master/module-examples/classes) ディレクトリの中には、私たちの図形を描くモジュールを ES クラスを使って書き直した例があります。例えば [`square.js`](https://github.com/mdn/js-examples/blob/master/module-examples/classes/modules/square.js) ファイルでは、次のように全ての機能を一つのクラスの中に持たせています。

```js
class Square {
  constructor(ctx, listId, length, x, y, color) {
    ...
  }

  draw() {
    ...
  }

  ...
}
```

そして、次のようにエクスポートします。

```js
export { Square };
```

[`main.js`](https://github.com/mdn/js-examples/blob/master/module-examples/classes/main.js) では、これを次のようにインポートします。

```js
import { Square } from './modules/square.js';
```

そして、正方形を描くために次のようにクラスを使います。

```js
let square1 = new Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, 'blue');
square1.draw();
square1.reportArea();
square1.reportPerimeter();
```

## モジュールの集約

複数のモジュールをひとつに集約させたいと思うことがあるかもしれません。依存性の階層は複数になることがあり、いくつかあるサブモジュールをひとつの親モジュールにまとめて管理を単純化したいと思うかもしれません。これは、親モジュールで次の形式によるエクスポート構文を使うことで可能です。

```js
export * from 'x.js'
export { name } from 'x.js'
```

使用例は [module-aggregation](https://github.com/mdn/js-examples/tree/master/module-examples/module-aggregation) ディレクトリを参照してください。この例 (クラスを使った以前の例を元にしています) には、`shapes.js` というモジュールが追加されています。これは `circle.js`、`square.js`、`triangle.js` の全ての機能をひとつに集約したものです。また、サブモジュールを `modules` ディレクトリの中にある `shapes` というサブディレクトリに移動させています。つまり、この例のモジュール構造は次のようなものです。

```
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
export { Square } from './shapes/square.js';
export { Triangle } from './shapes/triangle.js';
export { Circle } from './shapes/circle.js';
```

これらは、個々のサブモジュールのエクスポートを取得して、それらを　`shapes.js` モジュールから利用できるようにする効果があります。

> **メモ:** `shapes.mjs` の中で参照されているエクスポートは、基本的にそのファイルを経由して転送されるだけで、ファイルの中には存在しません。そのため、同じファイルの中でそれらを使ったコードを書くことはできません。

最後に `main.js` ファイルでは、全てのモジュールのクラスにアクセスするために、次のインポートを書き換えています。

```js
import { Square } from './modules/square.js';
import { Circle } from './modules/circle.js';
import { Triangle } from './modules/triangle.js';
```

書き換え後は、次のような 1 行になります。

```js
import { Square, Circle, Triangle } from './modules/shapes.js';
```

## 動的なモジュールの読み込み

ブラウザーで利用できる JavaScript モジュールの最新機能は、動的なモジュールの読み込みです。これにより、全てを最初に読み込んでしまうのではなく、必要が生じたときにのみ動的にモジュールを読み込むことができます。これには明らかなパフォーマンス上の利点があります。どのように動作するのか、読んで見てましょう。

この新しい機能により、`import()` を関数として実行し、そのときのパラメーターとしてモジュールへのパスを指定することができます。これは次のように [Promise](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) を返し、エクスポートにアクセスできるモジュールオブジェクト ([Creating a module object](#creating_a_module_object) を参照) を使って fulfilled 状態になります。

```js
import('./modules/myModule.js')
  .then((module) => {
    // モジュールを使って何かをする。
  });
```

例を見てみましょう。[dynamic-module-imports](https://github.com/mdn/js-examples/tree/master/module-examples/dynamic-module-imports) ディレクトリには、以前のクラスの例に基づいた別の使用例があります。しかし、今回は使用例が読み込まれたときにはキャンバスに何も描画しません。その代わり "Circle" (円)、"Square" (正方形)、"Triangle" (三角形) という 3 つのボタンを表示し、それらが押されたとき、対応した図形を描くために必要なモジュールを動的に読み込んで使用します。

この使用例では [`index.html`](https://github.com/mdn/js-examples/blob/master/module-examples/dynamic-module-imports/index.html) と [`main.js`](https://github.com/mdn/js-examples/blob/master/module-examples/dynamic-module-imports/main.js) のみを変更しており、モジュールのエクスポートは以前と同じままです。

`main.js` では、それぞれのボタンへの参照を取得するために、次のように [`document.querySelector()`](/ja/docs/Web/API/Document/querySelector) を使っています。

```js
let squareBtn = document.querySelector('.square');
```

そしてそれぞれのボタンに、押されたときに関連するモジュールを動的に読み込んで図形を描くためのイベントリスナーを設定します。

```js
squareBtn.addEventListener('click', () => {
  import('./modules/square.js').then((Module) => {
    let square1 = new Module.Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, 'blue');
    square1.draw();
    square1.reportArea();
    square1.reportPerimeter();
  })
});
```

Promise が fullfilled 状態になったときにモジュールオブジェクトを返し、クラスはそのオブジェクトの部分機能であるため、`Module.Square( ... )` のように `Module.` を追加したコンストラクターにアクセスする必要があります。

## トラブルシューティング

これらは、モジュールの動作に問題があるときに助けになるかもしれないヒントです。もし他にあれば自由にリストに追加してください。

- 前に説明したので繰り返しになりますが、`.mjs` ファイルは `javascript/esm` という MIME タイプ (または JavaScript 互換である `application/javascript` のような MIME タイプ) で読み込まれる必要があり、そうでなければ厳密な MIME タイプチェックによって "The server responded with a non-JavaScript MIME type" (サーバーが非 JavaScript の MIME タイプを返しました) のようなエラーが発生するでしょう。
- HTML ファイルをローカルから (例えば `file://` の URL を使って) 読み込もうとすると、JavaScript モジュールのセキュリティ要件によって CORS エラーが発生するでしょう。動作検証はサーバー経由で行う必要があります。GitHub は `.mjs` ファイルを正しい MIME 型で返すため理想的です。
- `.mjs` は比較的新しい拡張子であり、OS によってはそれを認識しないか、何か別のものに置き換えようとしてしまうかもしれません。例えば macOS は、通知することなく `.mjs` ファイルに `.js` を追加して自動的に拡張子を隠すことがわかりました。そのため、実際にやってくるファイルは全て `x.mjs.js` のようなものでした。ファイル拡張子を自動的に隠すことをオフにして、`.mjs` を受け入れるように設定すると問題は無くなります。

## 関連情報

- [Using JavaScript modules on the web](https://developers.google.com/web/fundamentals/primers/modules#mjs), Addy Osmani と Mathias Bynens による
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/), Lin Clark による Hacks ブログの投稿
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/), Jason Orendorff による Hacks ブログの投稿
- Axel Rauschmayer の書籍 [Exploring JS: Modules](http://exploringjs.com/es6/ch_modules.html)

{{Previous("Web/JavaScript/Guide/Meta_programming")}}

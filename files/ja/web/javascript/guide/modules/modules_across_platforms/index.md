---
title: プラットフォームをまたぐモジュール
slug: Web/JavaScript/Guide/Modules/Modules_across_platforms
l10n:
  sourceCommit: 1dc2c39b38fcfe047ea29d33a3d97c01b2791539
---

MDN ではブラウザー上の JavaScript を中心に扱いますが、ほとんどの開発者は Node.js、Deno、Bun など、ほかのランタイムも使用します。[ウェブ上の規則](/ja/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web)がどこでも適用されると考えがちですが、これらの環境や、バンドラーや型チェッカーなど多くのツールには、それぞれ独自のモジュール解決と解釈の規則があります。ブラウザー以外の環境についてすべてを説明するわけではありませんが、この節では、プラットフォームをまたいだモジュールの考え方と、移植可能なモジュールコードを書くための実践的な指針を紹介します。

## その他のモジュール形式

ECMAScript モジュール (ESM) が標準化、実装されたのは、JavaScript の誕生から約 20 年後でした。その頃には、ほとんどのアプリケーションはすでにモジュールシステムを必要とするほど複雑になっていたため、ランタイムやバンドラーによってさまざまな代替形式が実装されてきました。

基本的に、どのモジュールシステムにも次の 3 つの要素が必要です。

- ラッパー関数など、変数をカプセル化する独自のスコープを持つモジュールコード。
- モジュールがエクスポートを宣言するためのプロトコル。
- 別のモジュールを特定し、そのエクスポートにアクセスするためのインポート機構。

### CommonJS

Node.js によって [CommonJS](https://nodejs.org/api/modules.html)<sup>(英語)</sup> システムが広まりました。Node.js の CommonJS 実装では、各モジュールは暗黙のうちに関数でラップされます。この関数は、`exports`、`module`、`require`、`__dirname`、`__filename` の 5 つをモジュールスコープに渡します。各モジュールのエクスポート値は、`module.exports` に格納される 1 つの JavaScript の値です。モジュール ID を指定して `require()` を呼び出すと、この値を取得できます。

```js
// -- rectangle.cjs --
module.exports = {
  area: (a, b) => a * b,
};
```

```js
// -- square.cjs --
const rectangle = require("./rectangle.cjs");
// `rectangle` には rectangle.cjs の `module.exports` オブジェクトが格納される

module.exports = {
  area: (side) => rectangle.area(side, side),
};
```

ESM は[指定子の解決](/ja/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web#ウェブ上のモジュール指定子)を完全にホスト定義に委ねますが、CommonJS はモジュール ID の[扱いに関する一部の規則](https://wiki.commonjs.org/wiki/Modules/1.1.1#Module_Identifiers)<sup>(英語)</sup>を定義しています。`.` または `..` で始まる相対 ID は現在のモジュールを基準に解決し、どちらでも始まらない最上位 ID は「モジュール名前空間のルート」を基準に解決するよう定めています。Node.js は CommonJS 仕様の続きとなる[正式な解決アルゴリズム](https://nodejs.org/api/modules.html#all-together)<sup>(英語)</sup>を定義しており、バンドラーや TypeScript など、CJS を扱う多くのツールがこれを解決の基礎として使っています。特に Node.js の解決ロジックは、`node_modules` フォルダーと、ディレクトリーを指すパスのインポート方法を定義します（ディレクトリーの `package.json` または `index.js` を使います）。

### AMD

CommonJS は Node.js ではうまく動作しますが、同期的です。依存関係の読み込みにネットワークリクエストが必要になる場合があるため、ブラウザーでは不利です。[Asynchronous Module Definition (AMD)](https://github.com/amdjs/amdjs-api/blob/master/AMD.md)<sup>(英語)</sup> はインポートが非同期なので、ブラウザーでより広く使われています。AMD では各モジュールが、依存 ID の配列とファクトリー関数を指定して `define()` を呼び出します。ローダーはファクトリーを呼び出す前に依存関係を解決し、エクスポートされた値を同じ順序の引数として渡します。ファクトリーは、モジュールからエクスポートする値を返せます。

```js
// -- rectangle.js --
define([], function () {
  return {
    area: (a, b) => a * b,
  };
});
```

```js
// -- square.js --
define(["./rectangle"], function (rectangle) {
  // `rectangle` には rectangle.js のファクトリーが返した値が格納される
  return {
    area: (side) => rectangle.area(side, side),
  };
});
```

`define()` 関数はランタイムではなく、[RequireJS](https://requirejs.org/docs/api.html)<sup>(英語)</sup> などの AMD ローダーが提供します（ブラウザーは AMD をネイティブに理解しません）。AMD は CommonJS と同様に、相対および最上位のモジュール ID に対応します。これらの ID をファイルに対応付ける方法は、ローダーとその設定によって異なります。例えば、RequireJS は通常、設定された `baseUrl` を基準に最上位 ID を解決し、`.js` 拡張子を追加するため、モジュール ID では拡張子を省略することがよくあります。

### UMD

ESM が登場する前から、モジュールをプラットフォーム間で使いたいというニーズはありました。[Universal Module Definition (UMD)](https://github.com/umdjs/umd)<sup>(英語)</sup> は、同じファイルを異なるモジュールシステムで動作させるラッパーのパターン集です。典型的な UMD ラッパーは、まず AMD ローダー、次に CommonJS 環境を確認し、どちらでもなければモジュールをグローバル変数として公開します。各分岐は同じファクトリー関数を使って、モジュールのエクスポート値を作成します。

```js
// -- rectangle.js --
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.rectangle = factory();
  }
})(globalThis, function () {
  return {
    area: (a, b) => a * b,
  };
});
```

```js
// -- square.js --
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./rectangle"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("./rectangle.js"));
  } else {
    root.square = factory(root.rectangle);
  }
})(globalThis, function (rectangle) {
  return {
    area: (side) => rectangle.area(side, side),
  };
});
```

これで、ソースコードを変更せずに、CommonJS を実行する Node.js と AMD を実行するブラウザーの両方で同じファイルをインポートできます。グローバル変数を使う分岐では、昔ながらの[グローバルスクリプト](/ja/docs/Web/JavaScript/Guide/Modules#モジュールとは)と同様に、依存関係を正しい順序で自分で読み込む必要があります。

UMD は独自の依存関係解決規則を定義しません。AMD または CommonJS の分岐で処理されます。UMD を手書きすることはまれで、通常は[バンドラー](#バンドラー)や[トランスパイラー](#トランスパイラー)が生成します。

## Node.js でのモジュールの使用

Node.js は ESM と CommonJS の両方のモジュールに対応しています。ファイルを実行する際、まずそのファイルが CJS と ESM のどちらかを判断する必要があります。後方互換性のため、手がかりがない場合、Node.js はデフォルトで CJS として扱います（`import` や `export` など ESM 固有の構文がファイルに含まれる場合は ESM に切り替わります）。ファイルを明示的に ESM として指定するには、`.mjs` 拡張子を使うか、最も近い親の `package.json` ファイルで `"type": "module"` を指定したうえで `.js` 拡張子を使います。

```json
{
  "type": "module"
}
```

ファイルを明示的に CJS として指定するには、`.cjs` 拡張子を使うか、最も近い親の `package.json` ファイルで `"type": "commonjs"` を指定します。

例えば、`"type": "module"` を含む `package.json` と同じディレクトリーに、次の 2 つのファイルを作成します。

```js
// -- square.js --
export const area = (side) => side ** 2;
```

```js
// -- main.js --
import { area } from "./square.js";

console.log(area(4)); // 16
```

`node main.js` でエントリーモジュールを実行します。Node.js はこれらのファイルをファイルシステムから直接読み込むため、HTML ページや HTTP サーバーは必要ありません。

Node.js の ESM では、CJS のモジュールスコープ変数である `__dirname`、`__filename`、`exports`、`module`、`require` は公開されません。`export` 宣言を使うため、`exports` と `module` は必要ないでしょう。一方、現在のモジュールのパスを取得するには `__dirname` と `__filename` が、最上位以外で依存関係を同期的に読み込むには `require` が役立つ場合があります。[`import.meta`](https://nodejs.org/api/esm.html#importmeta)<sup>(英語)</sup> は `import.meta.dirname` や `import.meta.filename` など Node.js 固有のプロパティを備え、`__dirname` と `__filename` の大部分を置き換えます。依存関係を同期的に読み込みたい場合、Node.js には、このモジュールのコンテキスト内で `require` 関数を復元する [`createRequire`](https://nodejs.org/api/module.html#modulecreaterequirefilename)<sup>(英語)</sup> 関数もあります。

Node.js は ESM と CJS のモジュール指定子で異なる解決ロジックを使います。ESM の実装は[ブラウザーの実装](/ja/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web#ウェブ上のモジュール指定子)により近いため、`"./square"` ではなく `"./square.js"` のようにファイル拡張子を含める必要があります。既存のエコシステムとの互換性のため、Node.js は `node_modules` 内にインストールされたパッケージに素の名前を解決します。組み込みモジュールは `node:` プロトコルで提供します。

```js
import { readFile } from "node:fs/promises"; // 組み込みモジュールからインポート
import _ from "lodash"; // node_modules 内のパッケージからインポート

const text = await readFile(new URL("./data.txt", import.meta.url), "utf8");
const wordCounts = _.countBy(_.words(text));
```

ESM と CJS のどちらの指定子解決規則を使うかは、対象モジュールではなくインポート方法によって決まります。CJS のモジュール指定子は `require` で使い（ES モジュール内で `createRequire` によって作成したものを含む）、ESM の指定子は `import` で使います（CJS モジュール内の動的インポートを含む）。

Node.js の指定子解決には、`package.json` の `"imports"` を使ったインポートエイリアスなど、さらにいくつかの機能があります。読み込み規則と API については、[Node.js の ES モジュールに関するドキュメント](https://nodejs.org/api/esm.html)<sup>(英語)</sup>を参照してください。

### ESM と CJS の相互運用

Node.js では、ES モジュールから CJS モジュールをインポートできます。この場合、`module.exports` の値がデフォルトエクスポートとして読み込まれます。

```js
// -- main.mjs --
import square from "./square.cjs";

console.log(square.area(4)); // 16
```

反対に、CommonJS コードでは非同期の [`import()`](/ja/docs/Web/JavaScript/Reference/Operators/import) を使って ES モジュールを読み込めます。Node.js は、[同期的な ES モジュールグラフの `require()` による読み込み](https://nodejs.org/api/modules.html#loading-ecmascript-modules-using-require)<sup>(英語)</sup>にも対応しています。

```js
const square = require("./square.mjs");
// square.mjs とその依存関係が最上位の await を使わない場合

console.log(square.area(4));

import("./module-with-top-level-await.mjs").then((mod) => {
  mod.foo();
});
```

唯一の制約は、[最上位の `await`](/ja/docs/Web/JavaScript/Guide/Modules#最上位の_await) を使うグラフを `require()` で読み込めないことです。

```js example-bad
const mod = require("./module-with-top-level-await.mjs");
// Error [ERR_REQUIRE_ASYNC_MODULE]: require() cannot be used on an ESM graph with top-level await. Use import() instead.
```

多くの CJS パッケージは、次のように個々の名前をエクスポートすることを想定しています。

```js
const { area } = require("./square.cjs");
```

これは ESM で常に名前付きインポートに変換できるとは限りません。

```js
import { area } from "./square.cjs";
```

これは、[モジュールは評価前にリンクする必要がある](/ja/docs/Web/JavaScript/Guide/Modules/Module_graph#モジュールソースから実行まで)ためです。つまり Node.js は `square.cjs` を実行する前に、`area` というエクスポートが存在するか判断できなければなりません。そのため、`module.exports = { area }` や `module.exports.area = ...` のような特定のコードパターンしか確認できず、常に成功するとは限りません。特に CJS コードが手書きで、複雑な方法で `module.exports` を変更している場合は困難です。コンパイラーが生成する一般的な CJS の慣用パターンの多くは正しく解析できます。

最悪の場合は、`module.exports` オブジェクト全体をインポートしてから、分割代入する必要があります。

```js
import square from "./square.cjs";

const { area } = square;
```

なお、CJS には「デフォルトエクスポート」という概念がありません。CJS モジュールをデフォルトインポートする場合、実際には `module.exports` オブジェクト全体を読み込みます。そのプロパティが、概念上の「名前付きエクスポート」となることがあります。コンパイラーは `export default` 宣言を、基本的に `module.exports.default = ...` のような CJS コードに変換しますが、これを ES モジュールから直接インポートすることはできません（`import { default as area }` は `import area` と同じで、`module.exports` オブジェクト全体を読み込みます）。

```js
// -- square.js --
// このファイルは CJS にコンパイルされる
export default function area(side) {
  return side ** 2;
}
// コンパイル後のコード:
// module.exports.default = function area(side) ...
```

```js
// -- main.mjs --
import square from "./square.js";

// これを避けることはできない
const { default: area } = square;
```

このため、CJS にコンパイルされてからネイティブ ES モジュールによってインポートされる ESM 構文を書く場合は、デフォルトエクスポートを避けるか、名前付きエクスポートの別名を用意してください。

```js
// -- square.js --
// デフォルトエクスポートとまったく同じ値をエクスポート
export { area };
```

### パッケージ

パッケージを公開するとき、その [`"exports"` フィールド](https://nodejs.org/api/packages.html#package-entry-points)<sup>(英語)</sup>で利用者がインポートできるエントリーポイントを定義します。[条件付きエクスポート](https://nodejs.org/api/packages.html#conditional-exports)<sup>(英語)</sup>を使うと、環境やモジュールシステムに応じて異なる実装を選択できます。これらのパッケージ設定は、各モジュールが公開するバインディングを決める JavaScript の `export` 宣言とは別のものです。現在、[`"main"` フィールド](https://nodejs.org/api/packages.html#main)<sup>(英語)</sup>は不要で、`"exports"` に置き換えられます。

長い間、Node.js では非同期の `import()` を使わずに、CJS の利用者が ESM パッケージをインポートすることはできませんでした（`require()` による ESM の読み込みに対応したのはかなり後です）。そのため、ネイティブ ESM で公開するパッケージは、引き続き CJS を使う利用者のために、別個の CJS 版も公開する必要がありました。

```json
{
  "name": "dual-package",
  "type": "module",
  "exports": {
    ".": {
      "import": "./dist/esm/index.js",
      "require": "./dist/cjs/index.cjs",
      "default": "./dist/esm/index.js"
    }
  }
}
```

デュアルパッケージングと呼ばれるこの方法は、パッケージの依存関係グラフが最上位の `await` を使わない限り、現在の Node.js では不要です。アプリケーションの異なる部分が同じパッケージを CJS 形式と ESM 形式で読み込むと、モジュールの状態が共有されず、見つけにくいバグが発生することがあります。

## トランスパイラー

これまでにトランスパイラーについて簡単に触れました。トランスパイラーは、特定の JavaScript 構文を別の JavaScript 構文に変換します。もちろん、モジュール形式の相互変換もその役割の一部です。[Babel](https://babeljs.io/)<sup>(英語)</sup>、[SWC](https://swc.rs/)<sup>(英語)</sup>、[tsc](https://www.typescriptlang.org/)<sup>(英語)</sup> などの一般的なトランスパイラーは、ネイティブ ESM 構文で書かれたモジュールを、[前述のモジュール形式](#その他のモジュール形式)のいずれかに変換できます。

例えば、次のソースコードを考えてみましょう。

```js
// -- src/square.js --
import * as rectangle from "./rectangle";

export function area(side) {
  return rectangle.area(side, side);
}
```

これをトランスパイラーで CJS に変換すると、次のようなコードが出力されることがあります。

```js
// -- dist/square.js --
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true,
});
Object.defineProperty(exports, "area", {
  enumerable: true,
  get: function () {
    return area;
  },
});
const _rectangle = /*#__PURE__*/ _interop_require_wildcard(
  require("./rectangle"),
);
// ... _interop_require_wildcard の定義 ...
function area(side) {
  return _rectangle.area(side, side);
}
```

したがって、`import` 宣言や `export` 宣言を書いているために ESM を記述しているように感じても、ネイティブ ESM を出力するようトランスパイラーを設定していなければ、実際には CJS（または別のモジュール形式）のコードを書いていることがあります。トランスパイラーは通常、単一ファイルだけを処理し、モジュール指定子はそのまま保持します。そのため、拡張子がなくても `import * as rectangle from "./rectangle"` のようなコードが動作する場合があります。最終的に `require("./rectangle")` にコンパイルされ、これは有効な CJS だからです。

トランスパイラーは、対象モジュールとインポート元モジュールの両方を変換する場合、できるだけネイティブ ESM を書いているかのように使えることを目指します。特に、多くのトランスパイラーは `import rectangle from "./rectangle";` を常に `module.exports` オブジェクト全体を読み込む形に変換するわけではありません。上の出力コードにある `__esModule` マーカーに注目してください。このマーカーは、この CJS モジュールが ESM 構文の変換によって生成されたことを示します。多くのトランスパイラーは、このマーカーがある場合、デフォルトインポートを `module.exports.default`（つまり、変換された `export default` 宣言がエクスポートする値）を読み込む形にコンパイルし、ない場合は `module.exports` を読み込みます。

一方だけがトランスパイルされ、もう一方が Node.js のネイティブ ESM で実行される場合、突然問題が表面化することがあります（[ESM と CJS の相互運用](#esm_と_cjs_の相互運用)で説明したとおりです）。例えば、トランスパイルされた `export default` は、ネイティブ ESM のデフォルトインポートでは読み込めなくなる場合があります。

さまざまな `import` 宣言や `export` 宣言がどのようにトランスパイルされるか、その具体的な規則を理解するには、使用するトランスパイラーのドキュメントを読むか、実験して確認する必要があります。

## バンドラー

バンドラーには通常、モジュール形式を変換するトランスパイラーも含まれています。さらに一歩進んで、依存関係グラフを理解し、変換や最適化を行います。

1 つ以上のエントリーモジュールから始めて、バンドラーは依存関係をたどり、コードを出力ファイルにまとめます。最も基本的なバンドラーは単一の JavaScript ファイル（「バンドル」）だけを出力しますが、特に動的な `import()` を使う場合は複数のファイルを出力することもあります。ESM を直接実行する予定でも、重要な変換や最適化を行うため、バンドラーは非常に役立ちます。例えば [Vite](https://vite.dev/guide/)<sup>(英語)</sup> では、ESM で書かれたアプリケーションが[依存関係の事前バンドル](https://vite.dev/guide/dep-pre-bundling.html)<sup>(英語)</sup>を通じて CommonJS や UMD の依存関係を使えます。開発中、Vite はネイティブ ESM を使って変換済みモジュールを提供します。本番用ビルドでは、アプリケーションをデプロイ用にバンドルします。バンドラーはブラウザー以外でも役立ちます。Node.js のライブラリーやアプリケーションを開発している場合でも、コードサイズの最適化や独自構文の使用にバンドラーを使うことがあります。

バンドラーはコードを _実行_ せず、ファイルを静的に解析するだけなので、JavaScript ホストではありません。それでも、ブラウザーや Node.js に匹敵する、モジュールを扱うための独自の規則一式を備えています。

### モジュールの解決

モジュール指定子をそのまま保持するトランスパイラーとは異なり、バンドラーは取り込む依存関係を見つける必要があります。

フロントエンド向けのパッケージの多くも、Node.js のパッケージマネージャーを使って `node_modules` フォルダーで管理されるため、バンドラーはデフォルトで Node.js 形式のパッケージインポートを理解します。また、ESM 形式と CJS 形式の両方の解決方法（つまり、ディレクトリーのインポートや拡張子のないインポート）に同時に対応する傾向があります。ただし、モジュールに `.mjs` / `.cjs` 拡張子が明示されている場合などは、どちらか一方の方式により厳密に従うことがあります。

バンドラーでは、解決規則を設定できることがよくあります。例えば Vite の [`resolve.alias`](https://vite.dev/config/shared-options.html#resolve-alias)<sup>(英語)</sup> オプションでは、エイリアスを設定できます。

```js
// -- vite.config.js --
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@shapes": fileURLToPath(new URL("./src/shapes", import.meta.url)),
    },
  },
});
```

これで、ソースコード内でこのエイリアスを使えます。

```js
import { area } from "@shapes/square";
```

この設定では、Vite はインポートを `src/shapes/square.js` に解決できます。開発中に Vite がインポートを書き換え、バンドル時に解決するため、ブラウザーがこのエイリアスを理解する必要はありません。ただし、同等の対応付けを行うインポートマップがなければ、元のソースをブラウザーで直接実行することはできません。

### モジュールグラフの最適化

バンドラーはモジュールグラフ内のすべてのファイルを連結します。`lodash` をインポートすると、100 を超えるユーティリティ関数を含む [Lodash](https://lodash.com/)<sup>(英語)</sup> のソースコード全体がバンドルにコピーされ、非常にコストがかかります。バンドラーは、アプリケーションで使われていないコードを削除できます。これは一般に {{Glossary("tree shaking")}} と呼ばれます。ESM の静的なインポートとエクスポートは、どのバインディングが使われているかをバンドラーが判断するのに役立ちます。

> [!NOTE]
> バンドラーで使うことを想定し、直接実行する予定のないパッケージを公開する場合、バンドラーがより簡単に理解できるよう ESM 構文で公開すべき大きな理由の 1 つです。

例えば、次のとおりです。

```js
// -- big-library --
export function map() {}

export function filter() {}

export function reduce() {}
```

```js
// -- my-app.js --
import { map } from "big-library";
```

バンドラーは、アプリケーションで `filter` と `reduce` のエクスポートが使われていないことを確認し、最終的なバンドルから削除できます。さらに、`map` をインポートしていても呼び出していない（つまり「デッドコード」である）ことを確認し、`big-library` 全体のバンドルを避けることもできます。

> [!NOTE]
> 使われていないのに、なぜこのインポートを残すのか疑問に思うかもしれません。ビルド時に条件が分かるため、条件付きで使用される可能性があるからです。例えば、次のとおりです。
>
> ```js
> if (import.meta.env.PROD) {
>   map();
> } else {
>   someOtherCode();
> }
> ```
>
> `import.meta.env.PROD` の値はビルド時にバンドラーによって静的に設定されます。その値が `false` の場合、最終的なバンドルには `someOtherCode()` の分岐だけが含まれ、`import` は未使用になります。

ただし、モジュール全体を削除できるとは限りません。イベントリスナーの登録やグローバルオブジェクトの変更など、モジュールの実行に副作用がある場合があります。そのため、デッドコードの削除後も `import "big-library";` のような副作用のためだけのインポートが残り、そのモジュール内の未使用の宣言がすべて削除されることがあります。バンドラーによっては、実行を維持する必要があるファイルを示す `package.json` の `"sideEffects"` フィールドを認識します。パッケージのインポートに副作用がない場合（適用が必要な CSS ファイルも含む）、`"sideEffects": false` を設定できます。これにより、バンドラーはインポート全体を省略できます。

バンドルの出力が必ず 1 つのファイルになるとは限りません。コード分割を使うと、バンドラーは動的にインポートされたコードを _チャンク_ と呼ばれる別ファイルに分け、必要なときに読み込めます。これにより、初期化時に読み込むコードのサイズを最小限に抑え、ユーザーが使わない可能性のあるコードの読み込みを避けられます。コードを自動的に分割するバンドラーもありますが、一般には[動的インポート](https://vite.dev/guide/features.html#dynamic-import)<sup>(英語)</sup>を使って明示的にコード分割を開始する必要があります。

```js
button.addEventListener("click", async () => {
  const { showChart } = await import("./chart.js");
  showChart();
});
```

ビルド設定によっては、`chart.js` とその依存関係がアプリケーションの初期コードとは別に出力されます。バンドラーは生成されたチャンクを読み込むよう、インポートを書き換えます。

```js
button.addEventListener("click", async () => {
  // キャッシュのため一意なハッシュを追加
  const { showChart } = await import("./chart-ABCDEF.js");
  showChart();
});
```

エントリーファイルだけでなく、これらの追加ファイルもデプロイする必要があります。

バンドラーは、ビルド時に取り込むモジュールを検出できなければなりません。ネイティブの `import()` は実行時に任意の文字列を受け取れますが、`import(someVariable)` と記述し、バンドラーが `someVariable` に入りうる値を静的に判断できない場合、必要なファイルをバンドルできないことがあります。[変数を含むモジュール指定子](https://vite.dev/guide/features.html#dynamic-import)<sup>(英語)</sup>への対応はツールによって異なります。モジュールの集合が分かっている場合は、インポートを明示的に列挙すると依存関係が明確になります。

```js example-bad
// バンドラーは shapes/ 以下のすべてをバンドルする必要があるかもしれない
const shape = await import(`./shapes/${shapeName}.js`);
```

```js
// バンドラーはバンドルするファイルを正確に把握できる
const loaders = {
  square: () => import("./shapes/square.js"),
  circle: () => import("./shapes/circle.js"),
};

const shape = await loaders[shapeName]();
```

バンドラーは依存関係を _外部化_ し、コードをバンドルに含めないこともできます。Vite の[ライブラリーモード](https://vite.dev/guide/build.html#library-mode)<sup>(英語)</sup>では、利用者自身が依存関係を提供するライブラリーを公開する場合に、この方法を使えます。出力に依存関係への `import` または `require()` 呼び出しが残る場合、ランタイムがそれらを解決できなければなりません。バンドラーがビルド時にパッケージを見つけられたとしても、ブラウザー向け ESM の出力に素の指定子が残る場合は、インポートマップが必要です。

### JavaScript 以外のリソース

バンドラーは組み込み機能やプラグインを使い、JavaScript 以外のリソースのインポートを解釈できます。例えば Vite は [CSS のインポート](https://vite.dev/guide/features.html#css)<sup>(英語)</sup>と[静的アセットのインポート](https://vite.dev/guide/assets.html#importing-asset-as-url)<sup>(英語)</sup>に対応しています。

```js
import "./styles.css";
import logoURL from "./logo.svg";
```

Vite は開発中に CSS をページに挿入し、本番用ビルドでは通常、別のスタイルシートに抽出します。SVG のインポートはアセット URL を返します。この URL は出力された画像を指す場合も、インラインのデータ URL の場合もあります。これらの意味はビルドツールによって定まり、カスタムローダーを使って独自の `モジュール指定子 → モジュールオブジェクト` 対応付けロジックを作成することもできます。これらは、インポート属性を使い、ランタイムのモジュール種別規則に従うネイティブな[JavaScript 以外のモジュールのインポート](/ja/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web#javascript_以外のリソースの読み込み)とは同じではありません。

バンドラーのモジュール解決やリソース処理に依存する場合は、使用するバンドラーのドキュメントを確認してください。バンドラー経由で動作するインポートでも、ランタイムから直接読み込む場合は別の設定が必要なことがあります。ブラウザーで直接実行するコードについては、[ウェブでのモジュールの使用](/ja/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web)を参照してください。

## TypeScript によるモジュールの理解

[TypeScript](https://www.typescriptlang.org/docs/handbook/modules/theory.html)<sup>(英語)</sup> はモジュールを解析してインポートされた値の型を確認し、コンパイル時にはランタイムやバンドラーに適した JavaScript を生成します。そのためには、TypeScript のソースだけでなく、生成された JavaScript がどのように読み込まれるかも理解する必要があります。`module` と `moduleResolution` のコンパイラーオプションは、その環境のモジュール形式と解決規則を示します。別のツールが JavaScript を生成し、TypeScript は型だけを確認する場合でも、これらの設定は重要です。

TypeScript では、ファイルはスクリプトまたはモジュールのどちらかです（[JavaScript 自体](/ja/docs/Web/JavaScript/Guide/Modules#モジュールとは)と同じですが、ここでの「モジュール」は必ずしも「ES モジュール」ではなく、CJS などの場合もあります）。主な違いは、スクリプト内の変数宣言はプロジェクト全体から自動的に見える一方、モジュールは独自のスコープを作ることです。デフォルトでは、最上位の `import` または `export` があるファイルはモジュールです。そのため、意味のない `export {}` を追加してファイルをモジュールとして扱わせ、変数宣言がグローバルになるのを防ぐことがあります。[`moduleDetection`](https://www.typescriptlang.org/tsconfig/moduleDetection.html)<sup>(英語)</sup> オプションを使うと、宣言ファイル以外をすべてモジュールとして扱うよう強制できます。

### モジュール形式

TypeScript の意味で「モジュール」として扱われるファイルも、依然としてさまざまな[形式](#その他のモジュール形式)、特に ESM や CJS にコンパイルできます。（AMD や UMD は、TypeScript ソースをそのままバンドラーに処理させればよいため、現在の開発者にはあまり関係ありません。また、`tsc` は明確にバンドラーではないため、ウェブへのデプロイ向けにコードを最適化しません。）

`tsc` はトランスパイラーなので、ESM 構文を CJS にコンパイルできます。TypeScript のドキュメントでは、モジュール構文の動作を理解しやすくする [`verbatimModuleSyntax`](https://www.typescriptlang.org/tsconfig/#verbatimModuleSyntax)<sup>(英語)</sup> オプションが推奨されています（例えば、`import x from "mod"` がどのようにコンパイルされるかを気にする必要がありません）。以降の説明では、このオプションが有効になっているものとします。

TypeScript には 2 種類のモジュール構文があります。個々の名前付きエクスポートやデフォルトエクスポートを扱う、よく知られた ES 構文の {{jsxref("Statements/import", "import")}} と {{jsxref("Statements/export", "export")}}、および `module.exports` オブジェクト全体を扱う、特殊な CJS 構文です。

```ts
import x = require("mod");
// コンパイル後: const x = require("mod");

export = x;
// コンパイル後: module.exports = x;
```

`verbatimModuleSyntax` を有効にすると、ES のインポート/エクスポート構文が CJS にコンパイルされる場合、TypeScript はエラーを報告します。Node.js のモジュールオプションでは、`import = require()` 構文は CJS と ESM の両方で動作します（ESM では `createRequire` 呼び出しが生成されます）が、`export =` は CJS でのみ動作します。

モジュールの種類は [`module`](https://www.typescriptlang.org/tsconfig/#module)<sup>(英語)</sup> オプションで宣言します。トランスパイラーと同じように多数の選択肢がありますが、通常は次のいずれかを使います。

- `"nodenext"`。Node.js 互換ランタイムで実行するコードを出力する場合に使います。`.mts`（`.mjs` に対応する `.ts` 拡張子）や `"type": "module"` などを使う[Node.js の判定アルゴリズム](#node.js_でのモジュールの使用)に従い、CJS と ESM を選択します。`"node16"` などのバージョン付きの値もありますが、新しい動作を避けたい場合に限って使ってください。ブラウザーでネイティブに実行するコードの出力にも、このオプションが[推奨されています](https://www.typescriptlang.org/docs/handbook/modules/guides/choosing-compiler-options.html#im-writing-es-modules-for-the-browser-with-no-bundler-or-module-compiler)<sup>(英語)</sup>。`"moduleResolution": "nodenext"` が推奨されており、この設定が必要だからです。
- `"preserve"`。バンドラーや Bun で実行するコードを出力する場合に使います。モジュール形式をそのまま出力し、`import = require()` と `export =` は CJS にコンパイルします。
- `"esnext"`。変換せずに ESM 構文を強制する場合に使います。ESM のみを出力し、`import = require()` と `export =` はエラーになります。`"es2020"` などのバージョン付きの値もありますが、新しい動作を避けたい場合に限って使ってください。

`module` オプションは、`import.meta` にアクセスできるか、最上位の `await` を使えるか、ほかの ES モジュールをインポートできるかなども決定します。このオプションを設定するだけで、一般的な環境ではほかの多くのオプションにも妥当なデフォルトが設定されます。

### 指定子の解決

TypeScript は、生成された JavaScript を実行する環境の指定子解決ロジックを再実装します。そのため、[`moduleResolution`](https://www.typescriptlang.org/tsconfig/#moduleResolution)<sup>(英語)</sup> で使用するリゾルバーを宣言する必要があります。現在推奨されている値は次のとおりです。

- `"nodenext"`。Node.js 互換ランタイムで実行するコードを出力する場合に使います。[Node.js の解決アルゴリズム](#node.js_でのモジュールの使用)に従います。`"node16"` などのバージョン付きの値もありますが、新しい動作を避けたい場合に限って使ってください。
- `"bundler"`。バンドラーや Bun で実行するコードを出力する場合に使います。[ほとんどのバンドラーが合意できる解決アルゴリズム](#モジュールの解決)に従います。これは基本的に、拡張子の明示を要求しない Node.js の解決方法です。

ブラウザーで直接実行するコード向けに、TypeScript には専用のブラウザーリゾルバーがありません。[推奨される近似方法](https://www.typescriptlang.org/docs/handbook/modules/guides/choosing-compiler-options.html#im-writing-es-modules-for-the-browser-with-no-bundler-or-module-compiler)<sup>(英語)</sup>では、`moduleResolution` に `"nodenext"` を使うため、同時に `module: "nodenext"` も必要です。ただし、`"nodenext"` と `"bundler"` はどちらもブラウザーが対応する範囲を超える機能を含むため、パッケージのインポートや CommonJS のインポートなど、ブラウザーがネイティブに理解しない Node.js 固有の機能を使わないよう注意が必要です。

TypeScript は、独自の指定子解決規則を再現するために、バンドラーの設定やインポートマップを読み取ることはありません。[`paths`](https://www.typescriptlang.org/tsconfig/#paths)<sup>(英語)</sup> オプションを使うことはできます。先ほどの Vite エイリアスの場合、TypeScript と Vite の両方が `@shapes/square` を同じモジュールに解決するようにしてください。ほかにも[設定オプション](https://www.typescriptlang.org/tsconfig/#Modules_6244)<sup>(英語)</sup>があり、どれも実行時の指定子解決を TypeScript が再現できるようにするためのものです。

トランスパイラーと同様に、デフォルトでは指定子は書き換えられず、そのまま扱われます。`paths` を使ったパスエイリアスも書き換えられないため、後続の利用側がネイティブに理解できる場合にのみ、このオプションを使ってください。また、実行時に実際にインポートするファイルを指すため、`.ts` ファイルを参照する場合でも `.js` を使います。

```ts
// -- src/main.ts --
import { area } from "./square.js";
// TypeScript はこのインポートを src/square.ts と照合できる
// 出力される JavaScript も引き続き ./square.js をインポートする
```

実際、デフォルトでは `.ts` のインポートはエラーになります。JavaScript にコンパイルしたときに動作しない可能性が高いためです。コンパイルする必要がなく、バンドラーまたは TypeScript に対応したランタイムで TypeScript をネイティブに実行する場合は、[`allowImportingTsExtensions`](https://www.typescriptlang.org/tsconfig/#allowImportingTsExtensions)<sup>(英語)</sup> を有効にすると、これらのエラーを抑制できます。また、`.ts`、`.tsx`、`.mts`、`.cts` で終わる相対インポートを、出力時に JavaScript の拡張子へ書き換える [`rewriteRelativeImportExtensions`](https://www.typescriptlang.org/tsconfig/#rewriteRelativeImportExtensions)<sup>(英語)</sup> オプションもあります。このオプションは一般に、TypeScript をネイティブに実行すると同時に、実行可能な JavaScript も生成する場合にのみ使います。

### 型のインポート/エクスポート

モジュール内では、JavaScript の値だけでなく型もインポートおよびエクスポートできます。[`import type` と `export type`](https://www.typescriptlang.org/docs/handbook/2/modules.html#typescript-specific-es-module-syntax)<sup>(英語)</sup> の形式は、出力される JavaScript から削除されます。型と値を同時にインポートする場合は、個々のバインディングに `type` を指定して、そのバインディングだけを削除することもできます。

```ts
import { area, type Shape } from "./shapes.js"; // "type Shape" だけが削除される
import type { Square } from "./square.js"; // 宣言全体が削除される
```

`import { type Shape }` は `import {} from "./shapes.js"` 宣言を残します。この宣言によって、モジュールは引き続き読み込まれ、評価されます。

### モジュール宣言

ローカルファイルからインポートする場合、TypeScript は型を理解するために対象モジュールの TypeScript ソースを直接読み込みます。これはコストがかかります。公開するライブラリーでは、ソースファイル全体を読み込まずに済むよう、`.d.ts` 拡張子の _宣言ファイル_ を生成することが推奨されています。`.d.ts` ファイルは通常 `tsc` が生成し、実行可能な実装ではなく型宣言を含みます。

```ts
// -- src/square.ts --
export function area(side: number) {
  return side ** 2;
}
```

```ts
// -- dist/square.d.ts --
export function area(side: number): number;
```

プロジェクトが JavaScript で書かれている場合でも、利用者が正しい型定義を得られるよう、手書きの `.d.ts` ファイルを公開することを検討してください。通常、パッケージのソースコードをインポートすると、TypeScript は適切な `.d.ts` ファイルを自動的に見つけられます。詳しくは[TypeScript の宣言ファイル](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)<sup>(英語)</sup>のガイドを参照してください。

## "Isomorphic" モジュール

モジュールの導入によって、JavaScript のエコシステムではコードをモジュール形式で配布し、再利用するようになりました。しかし、JavaScript コードがどの環境でも実行できるとは限りません。例えば、ユーザーのパスワードの SHA ハッシュを生成するモジュールを見つけたとします。ブラウザーのフロントエンドや Node.js サーバーで使えるでしょうか。答えは、場合によります。

モジュールからも、[モジュールとは](/ja/docs/Web/JavaScript/Guide/Modules#モジュールとは)で示したように、グローバル変数にアクセスできます。モジュールが `window` のようなグローバル変数を参照する場合、ブラウザーでは実行できますが、Node.js では `window` を利用できないためエラーが発生します。同様に、コードが動作するために `process` へのアクセスを必要とする場合、Node.js でしか使えません。

モジュールの再利用性を最大限に高めるには、コードを "isomorphic"、つまり、すべてのランタイムで同じように動作するようにすることがよく勧められます。一般的には次の 3 つの方法があります。

- モジュールを「コア」と「バインディング」に分けます。「コア」では、DOM、ネットワーク、ファイルシステムにアクセスせず、ハッシュの計算など純粋な JavaScript ロジックに集中し、ユーティリティ関数を公開します。「バインディング」では、グローバルコンテキストを読み書きできます。例えば、「ブラウザーバインディング」は入力ボックスから値を読み取り、「Node.js バインディング」は `process.env` から値を読み取る場合がありますが、どちらの値も同じコア関数に渡され、同じ方法で処理されます。コアはすべての環境でインポートして同じように使えます。一方、通常は軽量なバインディングだけをプラットフォーム固有にします。
- 使用前に、特定のグローバル変数が存在するか検出します。例えば、次のコードは `process.env`（Node.js などに固有）を読み取る前に `process` が定義されているかを確認し、そうでなければ DOM（ブラウザーなどに固有）を読み取る前に `window` が定義されているかを確認します。

  ```js
  // myModule.js
  let password;
  if (typeof process !== "undefined") {
    // Node.js で実行中なので、`process.env` から読み取る
    password = process.env.PASSWORD;
  } else if (typeof window !== "undefined") {
    // ブラウザーで実行中なので、入力ボックスから読み取る
    password = document.getElementById("password").value;
  }
  ```

  2 つの分岐が最終的に同じ動作（"isomorphic"）になる場合は、この方法が適しています。同じ機能を提供できない場合や、大量のコードを読み込んでもその大部分が使われない場合は、代わりに異なる「バインディング」を使う方が適切です。

- 機能がない環境では、ポリフィルを使って代替実装を提供します。例えば、ブラウザーでは利用できますが Node.js にはネイティブで存在しない [`DOMParser`](/ja/docs/Web/API/DOMParser) API で XML を構文解析したい場合、[`@xmldom/xmldom`](https://github.com/xmldom/xmldom)<sup>(英語)</sup> が提供するような類似の API を使えます。動的インポートを条件付きで使うと、次のように実装できます。

  ```js
  // myModule.js
  if (typeof DOMParser === "undefined") {
    // ネイティブの DOMParser がない場合は @xmldom/xmldom を使用
    globalThis.DOMParser = (await import("@xmldom/xmldom")).DOMParser;
  }
  // …
  ```

  [`globalThis`](/ja/docs/Web/JavaScript/Reference/Global_Objects/globalThis) は、すべての環境で利用できるグローバルオブジェクトです。モジュール内でグローバル変数を読み取ったり作成したりする場合に役立ちます。

これらの方法はモジュールに限ったものではありません。しかし、コードの再利用やモジュール化が進む中、できるだけ多くの人が使えるように、コードをプラットフォーム間で動作するものにすることが推奨されます。Node.js などのランタイムも、ウェブとの相互運用性を高めるため、可能な範囲でウェブ API を積極的に実装しています。

## 関連情報

- [JavaScript モジュール](/ja/docs/Web/JavaScript/Guide/Modules)
- [ウェブでのモジュールの使用](/ja/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web)
- [モジュールグラフの理解](/ja/docs/Web/JavaScript/Guide/Modules/Module_graph)
- [CommonJS モジュール仕様](https://wiki.commonjs.org/wiki/Modules/1.1.1)<sup>(英語)</sup>
- [AMD 仕様](https://github.com/amdjs/amdjs-api/blob/master/AMD.md)<sup>(英語)</sup>
- [UMD パターン](https://github.com/umdjs/umd)<sup>(英語)</sup>
- [RequireJS API](https://requirejs.org/docs/api.html)<sup>(英語)</sup>
- Node.js: [ECMAScript モジュール](https://nodejs.org/api/esm.html)<sup>(英語)</sup>、[CommonJS モジュール](https://nodejs.org/api/modules.html)<sup>(英語)</sup>、[パッケージ](https://nodejs.org/api/packages.html)<sup>(英語)</sup>
- [Deno のモジュール](https://docs.deno.com/runtime/fundamentals/modules/)<sup>(英語)</sup>
- [Bun のモジュール解決](https://bun.sh/docs/runtime/module-resolution)<sup>(英語)</sup>
- [Babel での CommonJS モジュール変換](https://babeljs.io/docs/babel-plugin-transform-modules-commonjs)<sup>(英語)</sup>
- [SWC のモジュール設定](https://swc.rs/docs/configuration/modules)<sup>(英語)</sup>
- TypeScript: [モジュール理論](https://www.typescriptlang.org/docs/handbook/modules/theory.html)<sup>(英語)</sup>、[モジュールリファレンス](https://www.typescriptlang.org/docs/handbook/modules/reference.html)<sup>(英語)</sup>、[コンパイラーオプションの選択](https://www.typescriptlang.org/docs/handbook/modules/guides/choosing-compiler-options.html)<sup>(英語)</sup>
- Vite: [依存関係の事前バンドル](https://vite.dev/guide/dep-pre-bundling.html)<sup>(英語)</sup>、[機能](https://vite.dev/guide/features.html)<sup>(英語)</sup>、[ライブラリーモード](https://vite.dev/guide/build.html#library-mode)<sup>(英語)</sup>

---
title: import
slug: Web/JavaScript/Reference/Statements/import
l10n:
  sourceCommit: 3d3046d13482ca979db8b98b6eb55927b9b3a51f
---

静的な **`import`** 宣言は、他のモジュールによって[エクスポート](/ja/docs/Web/JavaScript/Reference/Statements/export)された読み込み専用の動的{{glossary("binding", "バインド")}}をインポートするために使用します。インポートしたバインドは、バインドをエクスポートしたモジュールによって更新される一方、インポートしているモジュールによって再割り当てすることができないために、「_動的バインド_」と呼ばれています。

ソースファイルの中で `import` 宣言を使用するためには、ランタイムがそのファイルを[モジュール](/ja/docs/Web/JavaScript/Guide/Modules)と見なす必要があります。HTML では、`type="module"` を {{HTMLElement("script")}} タグに加えることがこれに相当します。モジュールは、自動的に[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)として解釈されます。

また、関数風の動的な [`import()`](/ja/docs/Web/JavaScript/Reference/Operators/import) もあり、こちらは `type="module"` のスクリプトを必要としません。

## 構文

```js-nolint
import defaultExport from "module-name";
import * as name from "module-name";
import { export1 } from "module-name";
import { export1 as alias1 } from "module-name";
import { default as alias } from "module-name";
import { export1, export2 } from "module-name";
import { export1, export2 as alias2, /* … */ } from "module-name";
import { "string name" as alias } from "module-name";
import defaultExport, { export1, /* … */ } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";
```

- `defaultExport`
  - : モジュールからのデフォルトエクスポートを参照する名前。JavaScript の識別子として有効な文字列でなければなりません。
- `module-name`
  - : インポート元のモジュール。 単一引用符および二重引用符で囲まれた文字列リテラルのみが許可されます。 指定子の評価はホストによって規定されます。ほとんどのホストはブラウザーに準拠し、指定子を現在のモジュール URL（[`import.meta.url`](/ja/docs/Web/JavaScript/Reference/Operators/import.meta) 参照）に対する相対 URL として解決します。Node、bundlers、その他の非ブラウザー環境では、これに加えて独自の機能を定義していることが多いため、正確なルールを理解するにはそれらのドキュメントを参照する必要があります。[モジュール指定子の解決](#モジュール指定子の解決)の節にも詳細情報が記載されています。
- `name`
  - : インポートを参照するとき名前空間のように用いられるモジュールオブジェクトの名前。JavaScript の識別子として有効な文字列でなければなりません。
- `exportN`
  - : インポートするエクスポートの名前。`module-name` のモジュールがエクスポートしている内容によって、識別子にも文字列リテラルにもどちらにもなりえます。文字列リテラルの場合、有効な識別子を用いて別名を割り当てなければなりません。
- `aliasN`
  - : 指定されたインポートを参照する名前。JavaScript の識別子として有効な文字列でなければなりません。

`"module-name"` には、[インポート属性](/ja/docs/Web/JavaScript/Reference/Statements/import/with)が `with` キーワードの後に続くことがあります。

## 解説

`import` 宣言はモジュールのトップレベル（要するにブロックや関数などの中以外）にのみ書くことができます。パーサーが `import` 宣言をモジュール以外の文脈（例えば `type="module"` のない `<script>` タグ、`eval`、`new Function` など、「スクリプト」や「関数の本体」をパース時の目標として持つもの） で検出すると、`SyntaxError` を発生させます。モジュール以外の文脈でモジュールをロードするには、[ダイナミックインポート](/ja/docs/Web/JavaScript/Reference/Operators/import)という構文を代わりに使用してください。

インポートされたすべてのバインドは、同じスコープに複数存在してはいけません。これは {{jsxref("Statements/let", "let")}} や {{jsxref("Statements/const", "const")}}、 {{jsxref("Statements/class", "class")}}、 {{jsxref("Statements/function", "function")}}、 {{jsxref("Statements/var", "var")}}、それから `import` といった、他のあらゆる宣言と同様です。

`import` 宣言は構文的に硬直したものとなっています。例えば、文字列リテラルしか指定子に使えなかったり、トップレベルでしか使用できなかったり、すべてのバインドが識別子でなければならない、といった制限があります。この制限により、モジュールは評価する前に静的に解析してリンクさせることができます。これはモジュールを非同期にロードする上で鍵となる性質で、[トップレベル await](/ja/docs/Web/JavaScript/Guide/Modules#最上位の_await) といった機能を実現させてくれています。

### import 宣言の形

`import` 宣言には 4 つの形式があります。

- [名前付き import](#名前付き_import): `import { export1, export2 } from "module-name";`
- [デフォルトの import](#デフォルトの_import): `import defaultExport from "module-name";`
- [名前空間の import](#名前空間の_import): `import * as name from "module-name";`
- [副作用の import](#副作用のためだけにモジュールをインポートする): `import "module-name";`

構文の意味を明らかにするため、下記に例を示します。

#### 名前付き import

例えば `my-module` から `myExport` という名前の値が（`export * from "another.js"` などで暗黙的にせよ、 {{jsxref("Statements/export", "export")}} 文で明示的にせよ）エクスポートされている場合、次の例では `myExport` を現在のスコープに追加します。

```js
import { myExport } from "/modules/my-module.js";
```

一つのモジュールから複数の名前をインポートすることもできます。

```js
import { foo, bar } from "/modules/my-module.js";
```

インポートする際、エクスポートされている名前を変更することもできます。例えば次のように書くと、 `shortName` を現在のスコープに追加します。

```js
import { reallyReallyLongModuleExportName as shortName } from "/modules/my-module.js";
```

モジュールからエクスポートされている名前が、識別子としては無効な文字列リテラルになっていることがあります。その場合対象の名前を現在のスコープで使用するには、別名を付けなければなりません。

```js
// /modules/my-module.js
const a = 1;
export { a as "a-b" };
```

```js
import { "a-b" as a } from "/modules/my-module.js";
```

> [!NOTE]
> `import { x, y } from "mod"` は、 `import defaultExport from "mod"` して `defaultExport` から `x` と `y` を構造分解することと等価ではありません。名前付きのインポートとデフォルトのインポートは JavaScript のモジュールにおける別種の構文です。

#### デフォルトの import

デフォルトエクスポートでエクスポートされた値は、対応するデフォルトのインポート構文を用いてインポートする必要があります。このバージョンでは、デフォルトの値を直接インポートします。

```js
import myDefault from "/modules/my-module.js";
```

デフォルトのエクスポートは名前を明示していませんので、好きな名前を与えることができます。

デフォルトのインポートと名前空間のインポート、または名前付きインポートを一緒に使用することもできます。そのような場合、デフォルトのインポートを最初に宣言してください。例えば次のようになります。

```js
import myDefault, * as myModule from "/modules/my-module.js";
// myModule.default と myDefault は同じ値
```

あるいは、

```js
import myDefault, { foo, bar } from "/modules/my-module.js";
```

`default` という名前のインポートとデフォルトのインポートは、同じ結果をもたらします。ただし `default` は予約語なので、別名を付けなければなりません。

```js
import { default as myDefault } from "/modules/my-module.js";
```

#### 名前空間の import

次のコードは、 `/modules/my-module.js` という場所にあるモジュールがエクスポートするすべての値を含んだ `myModule` を現在のスコープに追加します。

```js
import * as myModule from "/modules/my-module.js";
```

この場合、 `myModule` は*名前空間*オブジェクトを表しています。名前空間オブジェクトはエクスポートされているすべての値をプロパティとして保持しています。例えば、上記のコードでインポートされたモジュールが `doAllTheAmazingThings()` をエクスポートしていた場合、次のように呼ぶことができます:

```js
myModule.doAllTheAmazingThings();
```

`myModule` は[封印された](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed) [`null` プロトタイプ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#null_プロトタイプオブジェクト)オブジェクトです。 デフォルトエクスポートは `default` という名前のキーで利用できるようになっています。詳細は[モジュール名前空間オブジェクト](/ja/docs/Web/JavaScript/Reference/Operators/import#モジュール名前空間オブジェクト)をご覧ください。

> [!NOTE]
> JavaScript は `import * from "module-name"` のような、ワイルカードインポートを提供していません。名前の衝突が高確率で発生するためです。

#### 副作用のためだけにモジュールをインポートする

副作用のためだけにモジュール全体をインポートした場合、何もインポートされません。モジュールのグローバルなコードが実行されるだけで、値はインポートされないのです。

```js
import "/modules/my-module.js";
```

この種のインポートはしばしば[ポリフィル](/ja/docs/Glossary/Polyfill)のために用いられます。ポリフィルはグローバル変数を書き換えるからです。

### 巻き上げ

インポート宣言は[巻き上げ](/ja/docs/Glossary/Hoisting)が行われます。この場合、インポートが導入する識別子がモジュール全体で利用できるということ、そしてその副作用がモジュールの残りのコードが実行される前に生じるということを意味しています。

```js
myModule.doAllTheAmazingThings(); // myModule.doAllTheAmazingThings は次の行でインポートされる

import * as myModule from "/modules/my-module.js";
```

### モジュール指定子の解決

ECMAScript 仕様書はモジュール指定子の解決方法を定義しておらず、ホスト環境（ブラウザー、Node.js、Deno など）に委ねています。ブラウザーの動作は [HTML 仕様書](https://html.spec.whatwg.org/multipage/webappapis.html#resolve-a-module-specifier)で規定されており、これがすべての環境における事実上の標準となっています。

HTML 仕様書、Node、その他多くの実装で広く認知されている指定子には、主に以下の 3 種類があります。

- `/`、`./`、`../` で始まる「相対指定子」は、現在のモジュール URL を基準に解決されます。
- 「絶対指定子」は解析可能な URL であり、そのまま解決されます。
- 上記に該当しない「素の指定子」。

相対指定子に関する最も重要な注意点（特に [CommonJS](https://wiki.commonjs.org/wiki/CommonJS) の規約に慣れたユーザーにとって）は、ブラウザーでは 1 つの指定子が暗黙的に複数の候補に解決されることを禁止している点です。CommonJS では、`main.js` と `utils/index.js` が存在する場合、以下のいずれの記述も `utils/index.js` の「デフォルトエクスポート」をインポートします。

```js
// main.js
const utils = require("./utils"); // "index.js" のファイル名を省略
const utils = require("./utils/index"); // ".js" の拡張子のみを省略
const utils = require("./utils/index.js"); // もっとも明示的
```

ウェブ上では、これはコストがかかります。なぜなら、`import x from "./utils"` と記述した場合、ブラウザーはインポート可能なモジュールが見つかるまで、`utils`、`utils/index.js`、`utils.js`、そしておそらく他にも多くの URL に対してリクエストを送信する必要があるからです。したがって、HTML 仕様書では、指定子はデフォルトで現在のモジュール URL を基準に解決される URL のみに制限されています。ファイル拡張子や `index.js` というファイル名を省略することはできません。この動作は Node.js の ESM 実装に継承されていますが、ECMAScript 仕様書には含まれていません。

ただし、これは `import x from "./utils"` がウェブ上で全く機能しないという意味ではありません。 ブラウザーは依然としてその URL にリクエストを送信し、サーバーが正しいコンテンツで応答できればインポートは成功します。 通常、拡張子なしのリクエストは HTML ファイルへのリクエストとして解釈されるため、これを実現するにはサーバー側で独自の解決ロジックを実装する必要があります。

絶対指定子は、インポート可能なソースコードに解決されるあらゆる種類の [URL](/ja/docs/Web/URI) です。特に以下のものが挙げられます。

- [HTTP URL](/ja/docs/Web/HTTP) は、ほとんどのスクリプトが既に HTTP URL を使用しているため、ウェブ上では常に対応しています。Deno ではネイティブに対応してあります（Deno は当初、モジュールシステム全体を HTTP URL に依存させていました）。一方、Node では[カスタム HTTPS ローダー](https://nodejs.org/api/module.html#import-from-https)を介した実験的な対応のみとなっています。
- `file:` URL は、Node などの多くのブラウザー以外のランタイムで利用でき、これらの環境ではスクリプトが既に `file:` URL を使用しています。しかし、セキュリティ上の理由から、ブラウザーでは利用できません。
- [データ URL](/ja/docs/Web/URI/Reference/Schemes/data) は、ブラウザー、Node、Deno など多くのランタイムで使用可能です。小さなモジュールをソースコードに直接埋め込むのに便利です。対応する [MIME タイプ](/ja/docs/Web/HTTP/Guides/MIME_types)は、インポート可能なソースコードを指定するものです。例えば、JavaScript 用の `text/javascript`、JSON モジュール用の `application/json`、WebAssembly モジュール用の `application/wasm` などです。（なお、 [import 属性](/ja/docs/Web/JavaScript/Reference/Statements/import/with)が必要となる場合があります。）

  ```js
  // HTTP URL
  import x from "https://example.com/x.js";
  // データ URL
  import x from "data:text/javascript,export default 42;";
  // JSON モジュールのデータ URL
  import x from 'data:application/json,{"foo":42}' with { type: "json" };
  ```

  `text/javascript` データ URL であってもモジュールとして解釈されますが、相対インポートは使用できません。これは `data:` URL スキームが階層構造を持たないためです。つまり、`import x from "data:text/javascript,import y from './y.js';"` はエラーが発生します。相対指定子 `'./y.js'` を解決できないためです。

- [`node:` URL](https://nodejs.org/api/esm.html#node-imports) は、Node.js の組み込みモジュールに解決されます。これらは Node および Bun など、Node との互換性を主張する他のランタイムで使用できます。

CommonJS によって普及した素の指定子は、`node_modules` ディレクトリー内で解決されます。例えば、`import x from "foo"` がある場合、ランタイムは現在のモジュールの親ディレクトリー内にある任意の `node_modules` ディレクトリー内で `foo` パッケージを探します。この動作は、[import maps](/ja/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) を使用することでブラウザーでも再現可能であり、他の方法で解決をカスタマイズすることもできます。

モジュール解決アルゴリズムは、HTML仕様書で定義されている [`import.meta.resolve`](/ja/docs/Web/JavaScript/Reference/Operators/import.meta/resolve) 関数を使用して、プログラム的に実行することも可能です。

## 例

### 標準的なインポート

こちらの例では、指定した範囲内におけるすべての素数を取得する関数をエクスポートする、再使用可能なモジュールを作ります。

```js
// getPrimes.js
/**
 * `max` より小さな素数のリストを返す。
 */
export function getPrimes(max) {
  const isPrime = Array.from({ length: max }, () => true);
  isPrime[0] = isPrime[1] = false;
  isPrime[2] = true;
  for (let i = 2; i * i < max; i++) {
    if (isPrime[i]) {
      for (let j = i ** 2; j < max; j += i) {
        isPrime[j] = false;
      }
    }
  }
  return [...isPrime.entries()]
    .filter(([, isPrime]) => isPrime)
    .map(([number]) => number);
}
```

```js
import { getPrimes } from "/modules/getPrimes.js";

console.log(getPrimes(10)); // [2, 3, 5, 7]
```

### インポートした値はエクスポートしたモジュールだけが変更できる

インポートした識別子は「動的バインド」と呼ばれます。エクスポートしているモジュールが再代入するとインポートしている値も変わるからです。しかしながら、当の変数をインポートしているモジュールは再代入できません。それでも、エクスポートしたオブジェクトを保持しているモジュールは、インポートしたオブジェクトを書き換えることができますし、変更した値は同じ値をインポートしているすべてのモジュールが観測できるようになっています。

値の変更は [モジュール名前空間オブジェクト](/ja/docs/Web/JavaScript/Reference/Operators/import#モジュール名前空間オブジェクト)を通じて観測することもできます。

```js
// my-module.js
export let myValue = 1;
setTimeout(() => {
  myValue = 2;
}, 500);
```

```js
// main.js
import { myValue } from "/modules/my-module.js";
import * as myModule from "/modules/my-module.js";

console.log(myValue); // 1
console.log(myModule.myValue); // 1
setTimeout(() => {
  console.log(myValue); // 2; my-module has updated its value
  console.log(myModule.myValue); // 2
  myValue = 3; // TypeError: Assignment to constant variable.
  // インポートしているモジュールができるのは値を読むことだけで、再代入はできません。
}, 1000);
```

### JavaScript 以外のモジュールのインポート

JavaScript 以外のモジュールも `import` 文でインポートできますが、その型は [import 属性](/ja/docs/Web/JavaScript/Reference/Statements/import/with)を使用して明示的に宣言する必要があります。例えば、JSON モジュールをインポートするには、`type: "json"` 属性を指定する必要があります。

```js
import data from "./data.json" with { type: "json" };
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Statements/export", "export")}}
- [`import()`](/ja/docs/Web/JavaScript/Reference/Operators/import)
- [`import.meta`](/ja/docs/Web/JavaScript/Reference/Operators/import.meta)
- [Import attributes](/ja/docs/Web/JavaScript/Reference/Statements/import/with)
- [Previewing ES6 Modules and more from ES2015, ES2016 and beyond](https://blogs.windows.com/msedgedev/2016/05/17/es6-modules-and-beyond/) (blogs.windows.com, 2016)
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) (hacks.mozilla.org, 2015)
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) (hacks.mozilla.org, 2018)
- [Exploring JS, Ch.16: Modules](https://exploringjs.com/es6/ch_modules.html) (Dr. Axel Rauschmayer)
- [Export and Import](https://javascript.info/import-export) (javascript.info)

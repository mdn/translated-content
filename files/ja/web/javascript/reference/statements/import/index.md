---
title: import
slug: Web/JavaScript/Reference/Statements/import
l10n:
  sourceCommit: 1c4869cdb1a9a9c3cafba87a2cd9469591f7aa47
---

{{jsSidebar("Statements")}}

静的な **`import`** 宣言は、他のモジュールによって[エクスポート](/ja/docs/Web/JavaScript/Reference/Statements/export)された読み込み専用のライブ{{glossary("binding", "バインディング")}}をインポートするために使用します。インポートしたバインディングは、バインディングをエクスポートしたモジュールによって更新される一方、インポートしているモジュールによって再代入することができないために、「_ライブバインディング_」と呼ばれています。

ソースファイルの中で `import` 宣言を使用するためには、ランタイムがそのファイルを[モジュール](/ja/docs/Web/JavaScript/Guide/Modules)と見なす必要があります。HTML では、{{HTMLElement("script")}} タグに `type="module"` を加えることがこれに相当します。モジュールは、宣言するかどうかにかかわらず、 {{JSxRef("Strict_mode","Strict モード")}}になります。

また、`type="module"` のスクリプトを必要としない動的な [**`import()`**](/ja/docs/Web/JavaScript/Reference/Operators/import) という関数のようなものもあります。

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
  - : モジュールからのデフォルトのエクスポートを参照する名前。JavaScript の識別子として有効な文字列でなければなりません。
- `module-name`
  - : インポートするモジュール。この指定子はホストが示した方法で評価されます。こちらはしばしばモジュールを含む `.js` ファイルへの相対または絶対 URL となっています。Node では、拡張子なしのインポートは `node_modules` におけるパッケージへの参照であることが多いです。バンドラーによっては、拡張子を省略してもよいことにしています。環境を確認してください。シングルクォートやダブルクォートで囲った文字列だけが使えます。
- `name`
  - : インポートを参照するとき名前空間のように用いられるモジュールオブジェクトの名前。JavaScript の識別子として有効な文字列でなければなりません。
- `exportN`
  - : インポートするエクスポートの名前。`module-name` のモジュールがエクスポートしている内容によって、識別子にも文字列リテラルにもどちらにもなりえます。文字列リテラルの場合、有効な識別子を用いて別名を割り当てなければなりません。
- `aliasN`
  - : 指定されたインポートを参照する名前。JavaScript の識別子として有効な文字列でなければなりません。

## 説明

`import` 宣言はモジュールのトップレベル（要するにブロックや関数などの中以外）にのみ書くことができます。パーサーが `import` 宣言をモジュール以外の文脈（例えば `type="module"` のない `<script>` タグ、 `eval`、 `new Function` など、「スクリプト」や「関数の本体」をパース時の目標として持つもの） で検出すると、`SyntaxError` を発生させます。モジュール以外の文脈でモジュールをロードするには、[ダイナミックインポート](/ja/docs/Web/JavaScript/Reference/Operators/import)という構文を代わりに使用してください。

インポートされたすべてのバインディングは、同じスコープに複数存在してはいけません。これは {{jsxref("Statements/let", "let")}} や {{jsxref("Statements/const", "const")}}、 {{jsxref("Statements/class", "class")}}、 {{jsxref("Statements/function", "function")}}、 {{jsxref("Statements/var", "var")}}、それから `import` といった、他のあらゆる宣言と同様です。

`import` 宣言は構文的に硬直したものとなっています。例えば、文字列リテラルしか指定子に使えなかったり、トップレベルでしか使用できなかったり、すべてのバインディングが識別子でなければならない、といった制限があります。この制限により、モジュールは評価する前に静的に解析してリンクさせることができます。これはモジュールを非同期にロードする上で鍵となる性質で、[トップレベル await](/ja/docs/Web/JavaScript/Guide/Modules#最上位の_await) といった機能を実現させてくれています。

`import` 宣言には 4 つの形式があります:

- [名前付き import](#名前付き_import): `import { export1, export2 } from "module-name";`
- [デフォルトの import](#デフォルトの_import): `import defaultExport from "module-name";`
- [名前空間の import](#名前空間の_import): `import * as name from "module-name";`
- [副作用の import](#副作用のためだけにモジュールをインポートする): `import "module-name";`

構文の意味を明らかにするため、下記に例を示します。

### 名前付き import

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

> **メモ:** `import { x, y } from "mod"` は、 `import defaultExport from "mod"` して `defaultExport` から `x` と `y` を分割代入することと等価ではありません。名前付きのインポートとデフォルトのインポートは JavaScript のモジュールにおける別種の構文です。

### デフォルトの import

デフォルトエクスポートでエクスポートされた値は、対応するデフォルトのインポート構文を用いてインポートする必要があります。最も単純なバージョンでは、デフォルトの値を直接インポートします:

```js
import myDefault from "/modules/my-module.js";
```

デフォルトのエクスポートは名前を明示していませんので、好きな名前を与えることができます。

デフォルトのインポートと名前空間のインポート、または名前付きインポートを一緒に使用することもできます。そのような場合、デフォルトのインポートを最初に宣言してください。例えば次のとおり:

```js
import myDefault, * as myModule from "/modules/my-module.js";
// myModule.default と myDefault は同じ値
```

あるいは:

```js
import myDefault, { foo, bar } from "/modules/my-module.js";
```

`default` という名前のインポートとデフォルトのインポートは、同じ結果をもたらします。ただし `default` は予約語なので、別名を付けなければなりません。

```js
import { default as myDefault } from "/modules/my-module.js";
```

### 名前空間の import

次のコードは、 `/modules/my-module.js` という場所にあるモジュールがエクスポートするすべての値を含んだ `myModule` を現在のスコープに追加します。

```js
import * as myModule from "/modules/my-module.js";
```

この場合、 `myModule` は*名前空間*オブジェクトを表しています。名前空間オブジェクトはエクスポートされているすべての値をプロパティとして保持しています。例えば、上記のコードでインポートされたモジュールが `doAllTheAmazingThings()` をエクスポートしていた場合、次のように呼ぶことができます:

```js
myModule.doAllTheAmazingThings();
```

`myModule` は [`null` prototype](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) とする[封印された](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed)オブジェクトです。 デフォルトのエクスポートは `default` という名前のキーで利用できるようになっています。詳細は[モジュール名前空間オブジェクト](/ja/docs/Web/JavaScript/Reference/Operators/import#モジュール名前空間オブジェクト)をご覧ください。

> **メモ**: JavaScript は `import * from "module-name"` のような、ワイルカードインポートを提供していません。名前の衝突が高確率で発生するためです。

### 副作用のためだけにモジュールをインポートする

副作用のためだけにモジュール全体をインポートした場合、何もインポートされません。モジュールのグローバルなコードが実行されるだけで、値はインポートされないのです。

```js
import "/modules/my-module.js";
```

この種のインポートはしばしば[ポリフィル](/ja/docs/Glossary/Polyfill)のために用いられます。ポリフィルはグローバル変数を書き換えるからです。

## 例

### 標準的なインポート

こちらの例では、指定した範囲内におけるすべての素数を取得する関数をエクスポートする、再利用可能なモジュールを作ります。

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

インポートした識別子は「ライブバインディング」と呼ばれます。エクスポートしているモジュールが再代入するとインポートしている値も変わるからです。しかしながら、当の変数をインポートしているモジュールは再代入できません。それでも、エクスポートしたオブジェクトを保持しているモジュールは、インポートしたオブジェクトを書き換えることができますし、変更した値は同じ値をインポートしているすべてのモジュールが観測できるようになっています。

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

## 仕様

{{Specifications}}

## ブラウザー実装状況

{{Compat("javascript.statements.import")}}

## 関連情報

- {{JSxRef("Statements/export", "export")}}
- [`import.meta`](/ja/docs/Web/JavaScript/Reference/Statements/import.meta)
- Limin Zhu, Brian Terlson and Microsoft Edge Team: [Previewing ES6 Modules and more from ES2015, ES2016 and beyond](https://blogs.windows.com/msedgedev/2016/05/17/es6-modules-and-beyond/)
- Hacks blog post by Jason Orendorff: [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/)
- Hacks blog post by Lin Clark: [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)
- Axel Rauschmayer's book: ["Exploring JS: Modules"](https://exploringjs.com/es6/ch_modules.html)
- The Modern JavaScript Tutorial(javascript.info): [Export and Import](https://javascript.info/import-export)

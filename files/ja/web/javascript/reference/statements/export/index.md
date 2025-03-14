---
title: export
slug: Web/JavaScript/Reference/Statements/export
l10n:
  sourceCommit: eb7cf694c19b31ee8826f22eaac6c12e808b1e50
---

{{jsSidebar("Statements")}}

**`export`** 宣言は、JavaScript モジュールから値をエクスポートするために使用されます。エクスポートされた値は {{jsxref("Statements/import", "import")}} 宣言や[ダイナミックインポート](/ja/docs/Web/JavaScript/Reference/Operators/import)によって、他のプログラムにインポートすることができます。インポートされたバインディングの値は、それをエクスポートするモジュールの変更の対象となります。モジュールがエクスポートするバインディングの値を更新すると、その更新はインポートされた値として見えます。

ソースファイルで `export` 宣言を使用するためには、そのファイルはランタイムによって[モジュール](/ja/docs/Web/JavaScript/Guide/Modules)として解釈される必要があります。HTML では、{{HTMLElement("script")}} タグに `type="module"` を追加するか、他のモジュールにインポートされることで実現されます。モジュールは自動的に[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)で解釈されます。

## 構文

```js
// 個々の機能をエクスポート
export let name1, name2/*, … */; // var も
export const name1 = 1, name2 = 2/*, … */; // var, let も
export function functionName() { /* … */ }
export class ClassName { /* … */ }
export function* generatorFunctionName() { /* … */ }
export const { name1, name2: bar } = o;
export const [ name1, name2 ] = array;

// リストをエクスポート
export { name1, /* …, */ nameN };
export { variable1 as name1, variable2 as name2, /* …, */ nameN };
export { variable1 as "string name" };
export { name1 as default /*, … */ };

// デフォルトエクスポート
export default expression;
export default function functionName() { /* … */ }
export default class ClassName { /* … */ }
export default function* generatorFunctionName() { /* … */ }
export default function () { /* … */ }
export default class { /* … */ }
export default function* () { /* … */ }

// モジュールの集約
export * from "module-name";
export * as name1 from "module-name";
export { name1, /* …, */ nameN } from "module-name";
export { import1 as name1, import2 as name2, /* …, */ nameN } from "module-name";
export { default, /* …, */ } from "module-name";
export { default as name1 } from "module-name";
```

- `nameN`
  - : エクスポートする識別子（他のスクリプトで {{jsxref("Statements/import", "import")}} を介してインポートできるようにするため）。`as` でエイリアスを使用する場合、実際にエクスポートされる名前を文字列リテラルで指定することができますが、これは有効な識別子とは限りません。

## 解説

各モジュールでは、2 つの異なる種類のエクスポート、**名前付きエクスポート**と**デフォルトエクスポート**を行うことができます。名前付きエクスポートはモジュールごとに複数持てますが、デフォルトエクスポートは 1 つのみです。それぞれのエクスポート方法は、上記の構文のひとつに対応します。

名前付きエクスポート:

```js
// 事前に宣言された機能のエクスポート
export { myFunction2, myVariable2 };

// 個別の機能のエクスポート
// (var, let, const, function, class がエクスポート可能)
export let myVariable = Math.sqrt(2);
export function myFunction() {
  // …
}
```

`export` キーワードの後には、 `let`, `const`, `var` 宣言や、関数、クラス宣言を使用することができます。また、 `export { name1, name2 }` 構文を使用すると、他の場所で宣言された名前のリストをエクスポートすることができます。`export {}` は空のオブジェクトをエクスポートするわけではないことに注意してください。これは何もエクスポートしない（空の名前のリストをエクスポートする）ノーオペレーション宣言です。

エクスポート宣言は[一時的なデッドゾーン](/ja/docs/Web/JavaScript/Reference/Statements/let#一時的なデッドゾーン_tdz)のルールには従いません。`X` という名前自体が宣言される前に、そのモジュールが `X` をエクスポートすることを宣言することができます。

```js
export { x };
const x = 1;
// これは、`export`が単なる宣言であり、`x`の値を利用しないので、
// 動作します。
```

デフォルトエクスポート:

```js
// デフォルトとして事前に定義された機能のエクスポート
export { myFunction as default };
// これは次のものと同等です
export default myFunction;

// 個別の機能をデフォルトとしてエクスポート
export default function () { /* … */ }
export default class { /* … */ }
```

> [!NOTE]
> エクスポート宣言の名前は、互いに異なるものでなければなりません。重複した名前でエクスポートを実施したり、`default` のエクスポートを複数使用すると {{jsxref("SyntaxError")}} が発生し、モジュールが評価されなくなります。

`export default` 構文ではあらゆる式が許可されます。

```js
export default 1 + 1;
```

特殊なケースとして、関数やクラスは式ではなく _宣言_ としてエクスポートされ、これらの宣言は無名にすることができます。つまり、関数は巻き上げが行われることになります。

```js
// これは `foo` は関数宣言であって、関数式ではないため動作します。
foo();

export default function foo() {
  console.log("Hi");
}

// 厳密には宣言であることに変わりはないが、無名であることが許されます。
export default function () {
  console.log("Hi");
}
```

名前付きエクスポートは、複数の値をエクスポートする必要がある場合に有益です。このモジュールをインポートするときは、名前付きエクスポートでは全く同じ名前で参照しなければなりませんが（任意で `as` で名前を変更できます）、デフォルトエクスポートは何か名前を付けてインポートすることができます。例を示します。

```js
// ファイル test.js
const k = 12;
export default k;
```

```js
// 他のファイル
import m from "./test"; // k がデフォルトエクスポートなので、インポートする k の代わりに m を使用することができる点に注意してください
console.log(m); // 12
```

名前の競合を防ぐために、名前付きエクスポートの名前を変更することもできます。

```js
export { myFunction as function1, myVariable as variable };
```

文字列リテラルを使用すると、名前を有効な識別子以外のものに変更することができます。例えば次のようします。

```js
export { myFunction as "my-function" };
```

### 再エクスポート / 集約

親モジュール内の異なるモジュールから「インポート/エクスポート」して、そのモジュールからインポートできるようにすることも可能です。言い換えれば、様々なモジュールからの様々なエクスポートを集約した 1 つのモジュールを作成することができます。

これは "export from" 構文で実現できます。

```js
export { default as function1, function2 } from "bar.js";
```

これは、 `function1` と `function2` がカレントモジュール内で利用できないことを除けば、import と export の組み合わせと同じです。

```js
import { default as function1, function2 } from "bar.js";
export { function1, function2 };
```

ほとんどの "import from" 構文には対応する "export from" 構文があります。

```js
export { x } from "mod";
export { x as v } from "mod";
export * as ns from "mod";
```

また、`import * from "mod"` はありませんが、`export * from "mod"` はあります。これで `mod` からのすべての **名前付き** エクスポートが現在のモジュールの名前付きエクスポートとして再エクスポートされますが、 `mod` のデフォルトエクスポートは再エクスポートされません。もし、暗黙のうちに同じ名前を再エクスポートする 2 つのワイルドカードの export 文があった場合、どちらも再エクスポートされません。

```js
// -- mod1.js --
export const a = 1;

// -- mod2.js --
export const a = 3;

// -- barrel.js --
export * from "./mod1.js";
export * from "./mod2.js";

// -- main.js --
import * as ns from "./barrel.js";
console.log(ns.a); // undefined
```

重複した名前を直接インポートしようとすると、エラーが発生します。

```js
import { a } from "./barrel.js";
// SyntaxError: The requested module './barrel.js' contains conflicting star exports for name 'a'
```

以下は、import に対応するものですが、構文的には無効です。

```js-nolint example-bad
export DefaultExport from "bar.js"; // Invalid
```

正しい方法は、エクスポートの名前を変更することです。

```js
export { default as DefaultExport } from "bar.js";
```

export from" 構文では、`as` トークンを省略することができます。これにより、デフォルトエクスポートはデフォルトエクスポートとして再エクスポートされたままとなります。

```js
export { default, function2 } from "bar.js";
```

`export from` は `import` が対応しているすべての機能に対応しています。例えば[インポート属性](/ja/docs/Web/JavaScript/Reference/Statements/import/with)などです。

```js
export { default } from "./data.json" with { type: "json" };
```

## 例

### 名前付きエクスポートの使用

`my-module.js` モジュールの中で、以下のコードを含めることができます。

```js
// "my-module.js" モジュール
function cube(x) {
  return x * x * x;
}

const foo = Math.PI + Math.SQRT2;

const graph = {
  options: {
    color: "white",
    thickness: "2px",
  },
  draw() {
    console.log("From graph draw function");
  },
};

export { cube, foo, graph };
```

HTML ページの中に含まれる最上位モジュールの中では、次のようにすることができます。

```js
import { cube, foo, graph } from "./my-module.js";

graph.options = {
  color: "blue",
  thickness: "3px",
};

graph.draw(); // "From graph draw function" と記録
console.log(cube(3)); // 27
console.log(foo); // 4.555806215962888
```

以下の点に注意することが重要です。

- このスクリプトを HTML の {{HTMLElement("script")}} 要素で type="module" を指定したものに入れる必要があり、そうすれば適切にモジュールとして認識され、扱われます。
- `file://` の URL で JavaScript モジュールを実行することはできません。— [CORS](/ja/docs/Web/HTTP/CORS) エラーになります。HTTP サーバーを通して実行する必要があります。

### デフォルトエクスポートの使用

値をひとつエクスポートしたい、あるいはモジュールでフォールバック先の値を持ちたい場合は、デフォルトエクスポートを使用するとよいでしょう。

```js
// module "my-module.js"

export default function cube(x) {
  return x * x * x;
}
```

別のスクリプトからの、デフォルトエクスポートのインポートは直観的です。

```js
import cube from "./my-module.js";
console.log(cube(3)); // 27
```

### export from の使用

以下のような階層がある場合を例に考えてみましょう。

- `childModule1.js`: `myFunction` および `myVariable` をエクスポート
- `childModule2.js`: `myClass` をエクスポート
- `parentModule.js`: 集約元として機能する（他には何もしない）
- 最上位モジュールである `parentModule.js` のエクスポートを利用する

コードスニペットを使うとこのような感じになります。

```js
// childModule1.js 内
function myFunction() {
  console.log("Hello!");
}
const myVariable = 1;
export { myFunction, myVariable };
```

```js
// childModule2.js 内
class MyClass {
  constructor(x) {
    this.x = x;
  }
}

export { MyClass };
```

```js
// parentModule.js
// childModule1 と childModule2 からのエクスポートを
// 集約して再エクスポートする
export { myFunction, myVariable } from "childModule1.js";
export { MyClass } from "childModule2.js";
```

```js
// 最上位モジュール
// parentModule にモジュールが集約しているので、
// 単一のモジュールからエクスポートを利用できます。
import { myFunction, myVariable, MyClass } from "parentModule.js";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Statements/import", "import")}}
- [JavaScript モジュール](/ja/docs/Web/JavaScript/Guide/Modules)ガイド
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) (hacks.mozilla.org, 2015)
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) (hacks.mozilla.org, 2018)
- [Exploring JS, Ch.16: Modules](https://exploringjs.com/es6/ch_modules.html) (Dr. Axel Rauschmayer)

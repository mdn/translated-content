---
title: export
slug: Web/JavaScript/Reference/Statements/export
---

{{jsSidebar("Statements")}}

**`export`** 文は JavaScript モジュールを作成するときに使用され、モジュールから関数、オブジェクト、またはプリミティブ値へのライブバインディングのエクスポートを行い、{{jsxref("Statements/import", "import")}} 文を使用した他のプログラムが使用できるようにします。インポートされたモジュールは読み取り専用で、エクスポートされたモジュールが変更されるたびに値が更新されます。

エクスポートされたモジュールは、宣言のあるなしにかかわらず {{jsxref("Strict_mode","Strict モード", "", 1)}}で動作します。export 文は、埋め込みスクリプトでは使えません。

## 構文

2 種類のエクスポート方法があります。

1. 名前付きエクスポート (モジュールごとに 0 以上のエクスポート)
2. デフォルトエクスポート (モジュールごとに 1 つのエクスポート)

```
// 個々の機能をエクスポート
export let name1, name2, …, nameN; // var, const も
export let name1 = …, name2 = …, …, nameN; // var, const も
export function functionName(){...}
export class ClassName {...}

// リストでエクスポート
export { name1, name2, …, nameN };

// 名前を変更してエクスポート
export { variable1 as name1, variable2 as name2, …, nameN };

// 分割代入してエクスポート
export const { name1, name2: bar } = o;

// デフォルトエクスポート
export default expression;
export default function (…) { … } // class, function* も使用可
export default function name1(…) { … } // class, function* も使用可
export { name1 as default, … };

// モジュールの集約
export * from …; // デフォルトエクスポートを設定しません
export * as name1 from …; // ECMAScript® 2O21 の草案
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;
export { default } from …;
```

- `nameN`
  - : エクスポートする識別子です。(別のスクリプトが {{jsxref("Statements/import", "import")}} を使用してインポート可能になります。)

## 解説

エクスポート方法は、**名前付き**と**デフォルト**の 2 種類あります。名前付きエクスポートはモジュールごとに複数持てますが、デフォルトエクスポートは 1 つに限ります。それぞれのエクスポート方法は、上記の構文のひとつに対応します。

名前付きエクスポート:

```js
// 事前に宣言された機能のエクスポート
export { myFunction, myVariable };

// 個別の機能のエクスポート
// (var, let, const, function, class がエクスポート可能)
export let myVariable = Math.sqrt(2);
export function myFunction() { ... };
```

デフォルトエクスポート:

```js
// デフォルトとして事前に定義された機能のエクスポート
export { myFunction as default };

// 個別の機能をデフォルトとしてエクスポート
export default function () { ... }
export default class { .. }

// 各エクスポートは前のエクスポートを上書きします
```

名前付きエクスポートは、さまざまな値をエクスポートするのに役立ちます。インポートするときは、対応するオブジェクトと同じ名前を使用しなければなりません。

一方、デフォルトエクスポートは以下のように任意の名前を使用できます。

```js
// ファイル test.js
let k; export default k = 12;
```

```js
// 他のファイル
import m from './test'; // k がデフォルトエクスポートなので、インポートする k の代わりに m を使用することができる点に注意してください
console.log(m);        // log 12 になる
```

名前の競合を防ぐために、名前付きエクスポートの名前を変更することもできます。

```js
export { myFunction as function1,
         myVariable as variable };
```

### 再エクスポート / 集約

また、親モジュール内の異なるモジュールから「インポート/エクスポート」して、そのモジュールからインポートできるようにすることも可能です。言い換えれば、様々なモジュールからの様々なエクスポートを集約した 1 つのモジュールを作成することができます。

これは "export from" 構文で実現できます。

```js
export { default as function1,
         function2 } from 'bar.js';
```

これは、インポートとエクスポートの組み合わせに相当します。

```js
import { default as function1,
         function2 } from 'bar.js';
export { function1, function2 };
```

現在のモジュール内で `function1` と `function2` が利用できない場合。

> **メモ:** 以下は、インポートに相当するにもかかわらず、構文的に無効です。

```js
import DefaultExport from 'bar.js'; // 有効
```

```js
export DefaultExport from 'bar.js'; // 無効
```

これを行う正しい方法は、エクスポートの名前を変更することです。

```js
export { default as DefaultExport } from 'bar.js';
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

var graph = {
  options: {
      color:'white',
      thickness:'2px'
  },
  draw: function() {
      console.log('From graph draw function');
  }
}

export { cube, foo, graph };
```

HTML ページの中に含まれる最上位モジュールの中では、次のようにすることができます。

```js
import { cube, foo, graph } from './my-module.js';

graph.options = {
    color:'blue',
    thickness:'3px'
};

graph.draw();
console.log(cube(3)); // 27
console.log(foo);    // 4.555806215962888
```

以下の点に注意することが重要です。

- このスクリプトを HTML の {{htmlelement("script")}} 要素で type="module" を指定したものに入れる必要があり、そうすれば適切にモジュールとして認識され、扱われます。
- `file://` の URL で JavaScript モジュールを実行することはできません。— [CORS](/ja/docs/Web/HTTP/CORS) エラーになります。HTTP サーバーを通して実行する必要があります。

### デフォルトエクスポートの使用

値をひとつエクスポートしたい、あるいはモジュールでフォールバック先の値を持ちたい場合は、デフォルトエクスポートを使用するとよいでしょう。

```js
// module "my-module.js"

export default function cube(x) {
  return x * x * x;
}
```

別のスクリプトからの、デフォルトエクスポートのインポートは簡単です。

```js
import cube from './my-module.js';
console.log(cube(3)); // 27
```

### export from の使用

以下のような階層がある場合を例に考えてみましょう。

- `childModule1.js`: `myFunction` および `myVariable` をエクスポート
- `childModule2.js`: `myClass` をエクスポート
- `parentModule.js`: 集約元として動作する (他には何もしない)
- 最上位モジュール: `parentModule.js` のエクスポートを利用する

コードスニペットを使うとこのような感じになります。

```js
// childModule1.js
let myFunction = ...; // myFunction に役立つものを割り当てる
let myVariable = ...; // myVariablemy に役立つものを割り当てる
export {myFunction, myVariable};
```

```js
// childModule2.js
let myClass = ...; // myClass に役立つものを代入する
export myClass;
```

```js
// parentModule.js
// childModule1 と childModule2 からのエクスポートを
// 集約して再エクスポートする
export { myFunction, myVariable } from 'childModule1.js';
export { myClass } from 'childModule2.js';
```

```js
// 最上位モジュール
// parentModule にモジュールが集約しているので、
// 単一のモジュールからエクスポートを利用できます。
import { myFunction, myVariable, myClass } from 'parentModule.js'
```

## 仕様

| 仕様書                                                               |
| -------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-exports', 'Exports')}} |

## ブラウザーの互換性

{{Compat("javascript.statements.export")}}

## 関連情報

- {{jsxref("Statements/import", "import")}}
- [JavaScript モジュール](/ja/docs/Web/JavaScript/Guide/Modules)
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) Jason Orendorff のブログ記事
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) Lin Clark のブログ記事
- [Axel Rauschmayer's book: "Exploring JS: Modules"](http://exploringjs.com/es6/ch_modules.html)

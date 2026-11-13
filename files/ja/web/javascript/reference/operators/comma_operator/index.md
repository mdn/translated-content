---
title: カンマ演算子 (,)
slug: Web/JavaScript/Reference/Operators/Comma_operator
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**カンマ演算子 (`,`)** は、それぞれの演算対象を（左から右に）評価し、最後のオペランドの値を返します。これは、[`for`](/ja/docs/Web/JavaScript/Reference/Statements/for) ループに複数の引数を提供する場合によく使用されます。

{{InteractiveExample("JavaScript デモ: カンマ演算子 (,)")}}

```js interactive-example
let x = 1;

x = (x++, x);

console.log(x);
// 予想される結果: 2

x = (2, 3);

console.log(x);
// 予想される結果: 3
```

## 構文

```js-nolint
expr1, expr2, expr3/* , … */
```

### 引数

- `expr1`, `expr2`, `expr3`, …
  - : 1 つ以上の式で、複合式の値として最後の値を返します。

## 解説

単一の式を要求される場所に複数の式を記載したい場合、カンマ演算子を使用することができます。この演算子の最も一般的な用途は、 `for` ループ内で複数の更新子を提供することです。単一の式を要求される場所に複数の文を許可する慣用表現としては、 [IIFE](/ja/docs/Glossary/IIFE) を使用することもできます。

最後の式を除くすべての式は評価された後で破棄されるため、これらの式が有用であるためには副次効果が必要です。副次効果を持つ一般的な式には、代入、関数呼び出し、[`++`](/ja/docs/Web/JavaScript/Reference/Operators/Increment) および [`--`](/ja/docs/Web/JavaScript/Reference/Operators/Decrement) 演算子があります。
それ以外にも、[ゲッター](/ja/docs/Web/JavaScript/Reference/Functions/get)を呼び出す場合や、[型変換](/ja/docs/Web/JavaScript/Guide/Data_structures#型変換)を引き起こす場合にも副次効果が発生する場合があります。

カンマ演算子は、すべての演算子の中で[優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence)が最も低いです。カンマで連結された式をより大きな式に組み込みたい場合は、括弧で囲む必要があります。

カンマ演算子は、以下のような他の場所で構文上の区切り文字として使用されるカンマとは、完全に異なります。

- 配列初期化子の要素 (`[1, 2, 3]`)
- [オブジェクト初期化子](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)の中のプロパティ (`{ a: 1, b: 2 }`)
- [関数宣言](/ja/docs/Web/JavaScript/Reference/Statements/function)/式の引数 (`function f(a, b) { … }`)
- 関数呼び出しの引数 (`f(1, 2)`)
- [`let`](/ja/docs/Web/JavaScript/Reference/Statements/let)、[`const`](/ja/docs/Web/JavaScript/Reference/Statements/const)、[`var`](/ja/docs/Web/JavaScript/Reference/Statements/var) 宣言の{{Glossary("Binding", "バインド")}}リスト (`const a = 1, b = 2;`)
- [`import`](/ja/docs/Web/JavaScript/Reference/Statements/import) 宣言内のインポートリスト (`import { a, b } from "c";`)
- [`export`](/ja/docs/Web/JavaScript/Reference/Statements/export) 宣言内のエクスポートリスト (`export { a, b };`)

実際、これらの場所のいくつかはほぼすべての式を受け入れますが、カンマで連結された式は受け入れません。これは構文上のカンマ区切り記号との曖昧さを避けるためです。この場合、カンマで連結された式は括弧で囲む必要があります。例えば、以下の `const` 宣言は 2 つの変数を宣言しており、カンマはカンマ演算子ではありません。

```js-nolint
const a = 1, b = 2;
```

次の例とは異なります。ここでは `b = 2` は宣言ではなく、[代入式](/ja/docs/Web/JavaScript/Reference/Operators/Assignment) です。`a` の値は代入の返値である `2` となり、`1` の値は破棄されます。

```js-nolint
const a = (1, b = 2);
```

カンマ演算子は[末尾のカンマ](/ja/docs/Web/JavaScript/Reference/Trailing_commas)として現れることはできません。

## 例

### for ループでのカンマ演算子の使用

`a` がそれぞれの辺に10個の要素を持つ2次元配列の場合、以下のコードはカンマ演算子を使用して `i` をインクリメントし `j` をデクリメントすることで、配列の対角要素の値を出力します。

```js
const a = Array.from({ length: 10 }, () =>
  Array.from({ length: 10 }, Math.random),
); // 10×10 の乱数値配列

for (let i = 0, j = 9; i <= 9; i++, j--) {
  console.log(`a[${i}][${j}] = ${a[i][j]}`);
}
```

### カンマ演算子を使用して代入を連結

カンマは最も低い[優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence)を持つため（代入演算子よりも低い）、複数の代入式を結合するために使用することができます。次の例では、`a` は `b = 3` の値（つまり 3）に設定します。その後、`c = 4` 式が評価され、その結果がカンマ区切り式全体の返値となります。

```js-nolint
let a, b, c;

a = b = 3, c = 4; // 4 を返す
console.log(a); // 3 （もっとも左）

let x, y, z;

x = (y = 5, z = 6); // 6 を返す
console.log(x); // 6 （もっとも右）
```

### 処理と返値

カンマ演算子が行うことのもうひとつの例が、値を返す前の処理です。前述のとおり最後の要素のみを返しますが、その他すべての要素も評価します。よって、以下のようなことができます。

```js-nolint
function myFunc() {
  let x = 0;

  return (x += 1, x); // return ++x; と同じ
}
```

これは特に、 1 行の[アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)で有益なものです。次の例では、単一の [`map()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map) を使用して配列の合計と要素の 2 乗の両方を取得しています。これには通常、[`reduce()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) と `map()` を用いた 2 回の反復処理が必要でした。

```js
let sum = 0;
const squares = [1, 2, 3, 4, 5].map((x) => ((sum += x), x * x));
console.log(squares); // [1, 4, 9, 16, 25]
console.log(sum); // 15
```

### 参照バインディングの破棄

カンマ演算子は最後の式を、常に参照ではなく値として返します。これにより、 [`this`](/ja/docs/Web/JavaScript/Reference/Operators/this) バインディングなどのコンテキスト情報が失われます。例えば、プロパティアクセスは関数への参照を返します。この関数はアクセス元のオブジェクトも記憶しているため、プロパティ呼び出しが正規に動作します。一方、カンマ式からメソッドが返された場合、関数はあたかも新しい関数値であるかのように呼び出され、 `this` は未定義になります。

```js-nolint
const obj = {
  value: "obj",
  method() {
    console.log(this.value);
  },
};

obj.method(); // "obj"
(obj.method)(); // "obj" （グループ化演算子も参照を返す）
(0, obj.method)(); // undefined （カンマ演算子は新しい値を返す）
```

この手法を利用すれば、[間接評価](/ja/docs/Web/JavaScript/Reference/Global_Objects/eval#直接または間接_eval)することができます。なぜなら、直接評価では、関数呼び出しが `eval()` 関数への参照に対して現れるように要求されるからです。

```js-nolint
globalThis.isDirectEval = false;

{
  const isDirectEval = true;
  console.log(eval("isDirectEval")); // true
  console.log((eval)("isDirectEval")); // true （グループ化演算子も `eval` への参照を返す）
  console.log((0, eval)("isDirectEval")); // false （カンマ演算子は新しい値を返す）
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`for` ループ](/ja/docs/Web/JavaScript/Reference/Statements/for)
- [IIFE](/ja/docs/Glossary/IIFE)

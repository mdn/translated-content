---
title: undefined
slug: Web/JavaScript/Reference/Global_Objects/undefined
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

グローバルの **`undefined`** プロパティはプリミティブ値の [`undefined`](/ja/docs/Web/JavaScript/Guide/Data_structures#undefined_型) を表します。これは JavaScript における{{Glossary("Primitive", "プリミティブ型")}}の一つです。

{{InteractiveExample("JavaScript デモ: undefined")}}

```js interactive-example
function test(t) {
  if (t === undefined) {
    return "Undefined value!";
  }
  return t;
}

let x;

console.log(test(x));
// 予想される結果: "Undefined value!"
```

## 値

プリミティブ値の [`undefined`](/ja/docs/Web/JavaScript/Guide/Data_structures#undefined_型) です。

{{js_property_attributes(0, 0, 0)}}

## 解説

`undefined` は、グローバルオブジェクトのプロパティです。すなわちグローバルスコープ内の変数です。

古いブラウザーを除くすべてのブラウザーでは、 `undefined` は、設定不可、書込不可のプロパティとなります。 (そうでない場合でも、上書きは避けてください。)

まだ値が代入されていない変数は `undefined` 型となります。評価しようとしている変数に値が代入されていない場合、メソッドや文も `undefined` を返します。値を {{jsxref("Statements/return", "return")}} しない関数も `undefined` を返します。

> [!NOTE]
> グローバルスコープ以外のスコープでは `undefined` を{{Glossary("identifier", "識別子")}} (変数名) として使うことができますが (`undefined` は{{jsxref("Lexical_grammar", "予約語", "", 1)}}でないため)、コードの管理やデバッグが困難になるためおすすめできません。
>
> ```js example-bad
> //こんなことはしないこと！
>
> (() => {
>   const undefined = "foo";
>   console.log(undefined, typeof undefined); // foo string
> })();
>
> ((undefined) => {
>   console.log(undefined, typeof undefined); // foo string
> })("foo");
> ```

## 例

### 厳密等価と undefined

`undefined` と厳密等価・非等価演算子を使って、変数に値があるか調べることができます。次のコードでは、変数 `x` が定義されていないため、 `if` 文は true に評価されます。

```js
let x;
if (x === undefined) {
  // ここの文は実行される
} else {
  // ここの文は実行されない
}
```

> [!NOTE]
> ここでは、標準の等価演算子ではなく厳密等価演算子を使わないといけません。厳密等価演算子とは違い、 `x == undefined` は、 `x` が `null` であるかどうかもチェックするからです。 `null` は `undefined` と等しくありません。
>
> 詳しくは、[等価比較と同一性](/ja/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness)を参照してください。

### typeof 演算子と undefined

代わりに、 {{jsxref("Operators/typeof", "typeof")}} を使用することができます。

```js
let x;
if (typeof x === "undefined") {
  // ここの文は実行される
}
```

{{jsxref("Operators/typeof", "typeof")}} を使う理由の一つとして、こちらは変数が宣言されていなくてもエラーにはなりません。

```js
// 直前まで x は宣言されていない
// エラーなしで true と評価される
if (typeof x === "undefined") {
  // ここの文は実行される
}

// ReferenceError が発生
if (x === undefined) {
}
```

しかし、もう一つの選択肢があります。 JavaScript は静的にスコープされた言語なので、変数が宣言されているかどうかを知るには、それが含まれるコンテキストで宣言されているかどうかを見ることで読み取ることができます。

グローバルスコープは{{jsxref("globalThis", "グローバルオブジェクト", "", 1)}}に結びつけられているので、グローバルコンテキストに変数が存在するかどうかのチェックは、<em>グローバルオブジェクト</em>にプロパティが存在することを、 {{jsxref("Operators/in", "in")}} 演算子を使用してチェックすることで行うことができます。

```js
if ("x" in window) {
  // x がグローバルに定義されている場合のみ、ここの文を実行
}
```

### void 演算子と undefined

3 つ目の方法として、{{jsxref("Operators/void", "void")}} 演算子があります。

```js
let x;
if (x === void 0) {
  // ここの文は実行される
}

// 直前まで y は宣言されていない
if (y === void 0) {
  // ReferenceError: y is not defined が発生
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript のデータ型とデータ構造](/ja/docs/Web/JavaScript/Guide/Data_structures)
- [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null)

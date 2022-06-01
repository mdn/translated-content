---
title: undefined
slug: Web/JavaScript/Reference/Global_Objects/undefined
tags:
  - JavaScript
  - 言語機能
  - リファレンス
browser-compat: javascript.builtins.undefined
translation_of: Web/JavaScript/Reference/Global_Objects/undefined
---
{{jsSidebar("Objects")}}

グローバルの **`undefined`** プロパティはプリミティブ値の `{{Glossary("Undefined", "undefined")}}` を表します。これは JavaScript における{{Glossary("Primitive", "プリミティブ型")}}の一つです。

{{js_property_attributes(0,0,0)}}

{{EmbedInteractiveExample("pages/js/globalprops-undefined.html")}}

## 構文

```js
undefined
```

## 解説

`undefined` は、*グローバルオブジェクト*のプロパティです。すなわちグローバルスコープ内の変数です。 `undefined` の初期値はプリミティブ値である `{{Glossary("Undefined", "undefined")}}` です。

最近のブラウザー (JavaScript 1.8.5 / Firefox 4 以降) での `undefined` は、 ECMAScript 5 仕様により、設定不可、書込不可のプロパティとなります。 (そうでない場合でも、上書きは避けてください。)

まだ値が代入されていない変数は `undefined` 型となります。評価しようとしている変数に値が代入されていない場合、メソッドや文も `undefined` を返します。値を {{jsxref("Statements/return", "return")}} しない関数も `undefined` を返します。

> **Note:** グローバルスコープ以外のスコープでは `undefined` を{{Glossary("identifier", "識別子")}} (変数名) として使うことができますが (`undefined` は{{jsxref("Lexical_grammar", "予約語", "", 1)}}でないため)、コードの管理やデバッグが困難になるためおすすめできません。
>
> ```js example-bad
> //こんなことはしないこと！
>
> // "foo string" をログ出力する
> (function() {
>   var undefined = 'foo';
>   console.log(undefined, typeof undefined);
> })();
>
> // "foo string" をログ出力する
> (function(undefined) {
>   console.log(undefined, typeof undefined);
> })('foo');
> ```

## 例

### 厳密等価と undefined

`undefined` と厳密等価・非等価演算子を使って、変数に値があるか調べることができます。次のコードでは、変数 `x` が定義されていないため、 `if` 文は true に評価されます。

```js
var x;
if (x === undefined) {
  // ここの文は実行される
}
else {
  // ここの文は実行されない
}
```

> **Note:** ここでは、標準の等価演算子ではなく厳密等価演算子を使わないといけません。厳密等価演算子とは違い、 `x == undefined` は、 `x` が `null` であるかどうかもチェックするからです。 `null` は `undefined` と等しくありません。
>
> 詳しくは、{{jsxref("Operators", "比較演算子","","true")}}を参照してください。

### typeof 演算子と undefined

代わりに、 {{jsxref("Operators/typeof", "typeof")}} を使用することができます。

```js
var x;
if (typeof x === 'undefined') {
   // ここの文は実行される
}
```

{{jsxref("Operators/typeof", "typeof")}} を使う理由の一つとして、こちらは変数が宣言されていなくてもエラーにはなりません。

```js
// 直前まで x は宣言されていない
if (typeof x === 'undefined') { // エラーなしで true と評価される
   // ここの文は実行される
}

if (x === undefined) { // ReferenceError が発生

}
```

しかし、もう一つの選択肢があります。 JavaScript は静的にスコープされた言語なので、変数が宣言されているかどうかを知るには、それが含まれるコンテキストで宣言されているかどうかを見ることで読み取ることができます。

グローバルスコープは{{jsxref("globalThis", "グローバルオブジェクト", "", 1)}}に結びつけられているので、グローバルコンテキストに変数が存在するかどうかのチェックは、<em>グローバルオブジェクト</em>にプロパティが存在することを、 {{jsxref("Operators/in", "in")}} 演算子を使用してチェックすることで行うことができます。

```js
if ('x' in window) {
  // x がグローバルに定義されている場合のみ、ここの文を実行
}
```

### void 演算子と undefined

3 つ目の方法として、{{jsxref("Operators/void", "void")}} 演算子があります。

```js
var x;
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

- JavaScript の {{Glossary("Primitive", "プリミティブ型")}}
- {{jsxref("null")}}

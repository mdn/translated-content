---
title: Function.arguments
slug: Web/JavaScript/Reference/Global_Objects/Function/arguments
---

{{JSRef}} {{deprecated_header}}

<code><strong><em>function</em>.arguments</strong></code> プロパティは、関数に渡される引数に対応する、配列風のオブジェクトです。より単純な {{jsxref("Functions/arguments", "arguments")}} 変数を使用してください。このプロパティは厳格モードでは使用できません。

## 解説

`function.arguments` の構文は非推奨です。関数内で {{jsxref("Functions/arguments", "arguments")}} オブジェクトにアクセスする方法としては、変数 {{jsxref("Functions/arguments", "arguments")}} が利用できます。

再帰呼び出しの場合、すなわちコールスタックに関数 `f` が複数回現れる場合に、`f.arguments` はもっとも直近に実行された関数に対応する引数を表します。

実行中の関数の未処理の呼び出しがない (つまり、関数が呼び出された状態で返してない) 場合、 arguments プロパティの値は通常 null です。

## 例

### arguments オブジェクトの使用

```js
function f(n) {
  g(n - 1);
}

function g(n) {
  console.log("before: " + g.arguments[0]);
  if (n > 0) {
    f(n);
  }
  console.log("after: " + g.arguments[0]);
}

f(2);

console.log("returned: " + g.arguments);

// Output

// before: 1
// before: 0
// after: 0
// after: 1
// returned: null
```

## 仕様書

何れかの標準で定義されたものではありません。 ECMAScript 3 で {{jsxref("Functions/arguments", "arguments")}} に置き換えられました。

## ブラウザーの互換性

{{Compat("javascript.builtins.Function.arguments")}}

## 関連情報

- {{jsxref("Functions/arguments", "arguments")}} オブジェクト
- {{jsxref("Functions", "関数と関数スコープ", "", 1)}}

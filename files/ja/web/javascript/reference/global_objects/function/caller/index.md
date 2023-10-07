---
title: Function.caller
slug: Web/JavaScript/Reference/Global_Objects/Function/caller
---

{{JSRef}} {{deprecated_header}}

**`function.caller`** プロパティは、指定した関数の呼び出し元の関数を返します。厳格モード、非同期関数、ジェネレーター関数の呼び出し元については `null` を返します。

## 解説

関数 `f` が最上位のコードで呼び出された場合、 `f.caller` の値は {{jsxref("null")}} に、それ以外の場合の値は `f` を呼び出した関数になります。厳格モード、非同期関数、ジェネレーター関数の呼び出し元についても `null` を返します。

このプロパティは、廃止された {{jsxref("Functions/arguments", "arguments")}} オブジェクトの {{jsxref("Functions/arguments/caller", "arguments.caller")}} プロパティを置き換えます。

特殊プロパティである `__caller__` は呼び出し元の activation オブジェクトを返し、スタックの再現に利用できましたが、セキュリティ上の理由により削除されました。

### 注

再帰呼び出しの場合、このプロパティを用いてコールスタックを再現することはできません。以下について考えてみましょう。

```js
function f(n) {
  g(n - 1);
}
function g(n) {
  if (n > 0) {
    f(n);
  } else {
    stop();
  }
}
f(2);
```

`stop()` が呼び出された時点のコールスタックは以下のようになるでしょう。

```js
f(2) -> g(1) -> f(1) -> g(0) -> stop()
```

以下は真になります。

```js
stop.caller === g && f.caller === g && g.caller === f;
```

従って、`stop()` 関数のスタックトレースを以下のようにして取得するとします。

```js
var f = stop;
var stack = "Stack trace:";
while (f) {
  stack += "\n" + f.name;
  f = f.caller;
}
```

これは無限ループになります。

## 例

### 関数の caller プロパティの値を確認する

以下のコードは、関数の `caller` プロパティの値を確認します。

```js
function myFunc() {
  if (myFunc.caller == null) {
    return "The function was called from the top!";
  } else {
    return "This function's caller was " + myFunc.caller;
  }
}
```

## 仕様書

いずれの標準仕様でも定義されていません。

## ブラウザーの互換性

{{Compat("javascript.builtins.Function.caller")}}

## 関連情報

- {{jsxref("Function.name", "Function.name")}}
- {{jsxref("Functions/arguments", "arguments")}}

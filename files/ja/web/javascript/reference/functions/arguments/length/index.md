---
title: arguments.length
short-title: length
slug: Web/JavaScript/Reference/Functions/arguments/length
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**`arguments.length`** データプロパティは、関数に渡された引数の数が入ります。

## 値

非負の整数です。

{{js_property_attributes(1, 0, 1)}}

## 解説

`arguments.length` プロパティは、実際に関数に渡された引数の数を提供します。これは、定義された仮引数の数以上にも以下にもなることがあります（{{jsxref("Function.prototype.length")}} を参照してください）。

```js
function func1(a, b, c) {
  console.log(arguments.length);
}
```

`func1.length` は `3` を返します。これは `func1` が 3 つの形式引数を宣言しているためです。しかし、`func1(1, 2, 3, 4, 5)` は `5` をログ出力します。これは `func1` が5つの引数をつけて呼び出されたためです。同様に、`func1(1)` は `1` をログ出力します。これは `func1` が 1 つの引数をつけて呼び出されたためです。

## 例

### arguments.length の使用

この例では、2 つ以上の数を加算する関数を定義しています。

```js
function adder(base /*, num1, …, numN */) {
  base = Number(base);
  for (let i = 1; i < arguments.length; i++) {
    base += Number(arguments[i]);
  }
  return base;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [関数](/ja/docs/Web/JavaScript/Guide/Functions)ガイド
- [関数](/ja/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Functions/arguments", "arguments")}}
- [`Function`: `length`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/length)

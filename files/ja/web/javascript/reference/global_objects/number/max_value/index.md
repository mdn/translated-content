---
title: Number.MAX_VALUE
short-title: MAX_VALUE
slug: Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Number.MAX_VALUE`** は静的データプロパティで、 JavaScript において表すことが可能な最大の数値を表します。

{{InteractiveExample("JavaScript デモ: Number.MAX_VALUE")}}

```js interactive-example
function multiply(x, y) {
  if (x * y > Number.MAX_VALUE) {
    return "Process as Infinity";
  }
  return x * y;
}

console.log(multiply(1.7976931348623157e308, 1));
// 予想される結果: 1.7976931348623157e+308

console.log(multiply(1.7976931348623157e308, 2));
// 予想される結果: "Process as Infinity"
```

## 値

2<sup>1024</sup> - 2<sup>971</sup>、およそ `1.7976931348623157E+308` です。

{{js_property_attributes(0, 0, 0)}}

## 解説

`MAX_VALUE` よりも大きな数値は {{jsxref("Infinity")}} で表され、正確な値が失われます。

`MAX_VALUE` は {{jsxref("Number")}} の静的プロパティですので、 数値のプロパティとしてではなく、常に `Number.MAX_VALUE` として使用してください。

## 例

### MAX_VALUE の使用

以下のコードは、2 つの数値を掛け算しています。その結果が `MAX_VALUE` より小さいか等しい場合は、`func1` 関数が呼び出されます。それ以外の場合は、`func2` 関数が呼び出されます。

```js
if (num1 * num2 <= Number.MAX_VALUE) {
  func1();
} else {
  func2();
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Number.MIN_VALUE")}}
- {{jsxref("Number")}}

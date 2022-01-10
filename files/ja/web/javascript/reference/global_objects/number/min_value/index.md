---
title: Number.MIN_VALUE
slug: Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE
tags:
  - JavaScript
  - Number
  - プロパティ
browser-compat: javascript.builtins.Number.MIN_VALUE
translation_of: Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE
---
{{JSRef}}

**`Number.MIN_VALUE`** プロパティは、 JavaScript において表すことが可能な最小の正の数値です。

{{EmbedInteractiveExample("pages/js/number-min-value.html")}}{{js_property_attributes(0, 0, 0)}}

## 解説

`Number.MIN_VALUE` プロパティは、浮動小数点の精度で表すことができる最小の正の数です（最も小さな負の数ではありません）。言い換えれば、最も 0 に近い数です。これはおよそ `5E-324`です。 ECMAScript の仕様書では、実装が対応する必要のある精度を定義していません。代わりに仕様書では、「その実装で実際に表すことができる、 0 ではない最も小さな正の数でなければならない」とあります。しかし実際には、ブラウザーと Node.js の精度は `2^-1074` です。

`MIN_VALUE` は {{jsxref("Number")}} オブジェクトの静的なプロパティですので、 生成した {{jsxref("Number")}} オブジェクトのプロパティとしてではなく、常に `Number.MIN_VALUE` として使用してください。

## 例

### MIN_VALUE の使用

以下のコードは、2 つの数値を割り算しています。その結果が `MIN_VALUE` より大きいか等しい場合は、`func1` 関数が呼び出されます。それ以外の場合は、`func2` 関数が呼び出されます。

```js
if (num1 / num2 >= Number.MIN_VALUE) {
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

- {{jsxref("Number.MAX_VALUE")}}

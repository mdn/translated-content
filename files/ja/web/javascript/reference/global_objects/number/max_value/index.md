---
title: Number.MAX_VALUE
slug: Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE
tags:
  - JavaScript
  - Number
  - プロパティ
  - リファレンス
browser-compat: javascript.builtins.Number.MAX_VALUE
translation_of: Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE
---
{{JSRef}}

**`Number.MAX_VALUE`** プロパティは、 JavaScript において表すことが可能な最大の数値です。

{{EmbedInteractiveExample("pages/js/number-maxvalue.html")}}{{js_property_attributes(0, 0, 0)}}

## 解説

`MAX_VALUE` プロパティはおよそ `1.79E+308`、または 2^1024 の値です。`MAX_VALUE` よりも大きな数値は {{jsxref("Infinity")}} で表されます。

`MAX_VALUE` は {{jsxref("Number")}} オブジェクトの静的なプロパティですので、 生成した {{jsxref("Number")}} オブジェクトのプロパティとしてではなく、常に `Number.MAX_VALUE` として使用してください。

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
- 所属先の {{jsxref("Number")}} オブジェクト

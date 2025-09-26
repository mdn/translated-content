---
title: Number.MIN_VALUE
short-title: MIN_VALUE
slug: Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Number.MIN_VALUE`** は静的データプロパティで、 JavaScript において表すことが可能な最小の正の数値を表します。

{{InteractiveExample("JavaScript デモ: Number.MIN_VALUE")}}

```js interactive-example
function divide(x, y) {
  if (x / y < Number.MIN_VALUE) {
    return "Process as 0";
  }
  return x / y;
}

console.log(divide(5e-324, 1));
// 予想される結果: 5e-324

console.log(divide(5e-324, 2));
// 予想される結果: "Process as 0"
```

## 値

2<sup>-1074</sup>、または `5E-324` です。

{{js_property_attributes(0, 0, 0)}}

## 解説

`Number.MIN_VALUE` プロパティは、浮動小数点の精度で表すことができる最小の正の数です（最も小さな負の数ではありません）。言い換えれば、最も 0 に近い数です。ECMAScript の仕様書では、実装が対応する必要のある精度を定義していません。代わりに仕様書では、「その実装で実際に表すことができる、 0 ではない最も小さな正の数でなければならない」とあります。これは、小さな IEEE-754 浮動小数点数では[非正規化される](https://en.wikipedia.org/wiki/Subnormal_number)ためですが、実装するためにこの表現に対応する必要はなく、その場合は `Number.MIN_VALUE` が大きくなる可能性があります。

実際、V8（Chrome、Edge、Node.js で使用）、SpiderMonkey（Firefox で使用）、JavaScriptCore（Safari で使用）などの主なエンジンにおける正確な値は、 2<sup>-1074</sup> または `5E-324` です。

`MIN_VALUE` は {{jsxref("Number")}} の静的プロパティですので、数値のプロパティとしてではなく、常に `Number.MIN_VALUE` として使用してください。

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

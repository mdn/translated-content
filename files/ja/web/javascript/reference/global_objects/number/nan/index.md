---
title: Number.NaN
slug: Web/JavaScript/Reference/Global_Objects/Number/NaN
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

**`Number.NaN`** 静的データプロパティは非数 (Not-A-Number) を表す値であり、{{jsxref("NaN")}} と同じです。`NaN` の動作についての詳しい情報は、[グローバルプロパティの説明](/ja/docs/Web/JavaScript/Reference/Global_Objects/NaN)を参照してください。

{{EmbedInteractiveExample("pages/js/number-nan.html", "taller")}}

## 値

数値 {{jsxref("NaN")}} です。

{{js_property_attributes(0, 0, 0)}}

## 解説

`NaN` は {{jsxref("Number")}} の静的プロパティですので、数値のプロパティとしてではなく、常に `Number.NaN` として使用してください。

## 例

### 値が数値であるかどうかのチェック

```js
function sanitize(x) {
  if (isNaN(x)) {
    return Number.NaN;
  }
  return x;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("NaN")}}
- {{jsxref("Number.isNaN()")}}

---
title: Number.NaN
short-title: NaN
slug: Web/JavaScript/Reference/Global_Objects/Number/NaN
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Number.NaN`** 静的データプロパティは非数 (Not-A-Number) を表す値であり、{{jsxref("NaN")}} と同じです。`NaN` の動作についての詳しい情報は、[グローバルプロパティの説明](/ja/docs/Web/JavaScript/Reference/Global_Objects/NaN)を参照してください。

{{InteractiveExample("JavaScript デモ: Number.NaN", "taller")}}

```js interactive-example
function clean(x) {
  if (x === Number.NaN) {
    // true になることはない
    return null;
  }
  if (isNaN(x)) {
    return 0;
  }
}

console.log(clean(Number.NaN));
// 予想される結果: 0
```

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

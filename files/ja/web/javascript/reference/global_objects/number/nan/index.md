---
title: Number.NaN
slug: Web/JavaScript/Reference/Global_Objects/Number/NaN
tags:
  - JavaScript
  - Number
  - プロパティ
browser-compat: javascript.builtins.Number.NaN
translation_of: Web/JavaScript/Reference/Global_Objects/Number/NaN
---
{{JSRef}}

**`Number.NaN`** は非数 (Not-A-Number) を表す値です。 {{jsxref("NaN")}} と同じです。

{{EmbedInteractiveExample("pages/js/number-nan.html")}}

この静的プロパティにアクセスするために {{jsxref("Number")}} オブジェクトを生成する必要はありません (`Number.NaN` を使用してください)。

{{js_property_attributes(0, 0, 0)}}

## 例

### 値が数値であるかどうかのチェック

```js
function sanitise(x) {
  if (isNaN(x)) {
    return Number.NaN;
  }
  return x;
}
```

### NaN に対するテスト

[NaN に対するテスト](/ja/docs/Web/JavaScript/Reference/Global_Objects/NaN#testing_against_nan)を `NaN` のページで参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- グローバル {{jsxref("NaN")}} オブジェクト
- 所属先の {{jsxref("Number")}} オブジェクト

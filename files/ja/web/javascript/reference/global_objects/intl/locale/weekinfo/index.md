---
title: Intl.Locale.prototype.weekInfo
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/weekInfo
tags:
  - 国際化
  - Intl
  - JavaScript
  - プロパティ
  - Locale
  - ローカライズ
  - プロトタイプ
  - リファレンス
  - weekInfo
browser-compat: javascript.builtins.Intl.Locale.weekInfo
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Locale/weekInfo
---
{{JSRef}}

**`Intl.Locale.prototype.weekInfo`** プロパティはアクセサープロパティで、関連する `Locale` の `firstDay`, `weekend`, `minimalDays` プロパティを持つ `weekInfo` オブジェクトを返します。

## 解説

[UTS 35's Week Elements](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Patterns_Week_Elements) で指定されたロケールデータに関連する `Locale` 情報を返します。

## 例

### 週情報の取得

指定された `Locale` の週情報を返します。

```js
let he = new Intl.Locale("he");
console.log(he.weekInfo); // logs {firstDay: 7, weekend: [5, 6], minimalDays: 1}

let af = new Intl.Locale("af");
console.log(af.weekInfo); // logs {firstDay: 7, weekend: [6, 7], minimalDays: 1}

let enGB = new Intl.Locale("en-GB");
console.log(enGB.weekInfo) // logs {firstDay: 1, weekend: [6, 7], minimalDays: 4}

let msBN = new Intl.Locale("ms-BN");
console.log(msBN.weekInfo) // logs {firstDay: 7, weekend: [5, 7], minimalDays: 1}  // ブルネイでは週末は金曜日と日曜日ですが、土曜日ではありません
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl/Locale", "Intl.Locale")}}

---
title: Intl.Locale.prototype.timeZones
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/timeZones
tags:
  - 国際化
  - Intl
  - JavaScript
  - プロパティ
  - Locale
  - ローカライズ
  - プロトタイプ
  - リファレンス
  - timeZones
  - タイムゾーン
browser-compat: javascript.builtins.Intl.Locale.timeZones
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Locale/timeZones
---
{{JSRef}}

**`Intl.Locale.prototype.timeZones`** プロパティはアクセサープロパティで、選択した `Locale` で対応しているタイムゾーンの配列を返します。

## 解説

関連付けられた `Locale` で対応しているタイムゾーンを配列で返します。返されるタイムゾーンは [IANA タイムゾーン](https://en.wikipedia.org/wiki/Daylight_saving_time#IANA_time_zone_database) を表します。

> **Note:** Unicode 言語識別子が Unicode 地域サブタグシーケンスの `-` を含んでいない場合、返される値は `undefined` です。

## 例

### 対応しているタイムゾーンの取得

指定された `Locale` で対応しているタイムゾーンをリストアップします。

```js
let arEG = new Intl.Locale("ar-EG");
console.log(arEG.timeZones); // logs ["Africa/Cairo"]
```

```js
let jaJP = new Intl.Locale("ja-JP");
console.log(jaJP.timeZones); // logs ["Asia/Tokyo"]
```

```js
let ar = new Intl.Locale("ar");
console.log(ar.timeZones); // logs undefined
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl/Locale", "Intl.Locale")}}
- [IANA タイムゾーンデータベース](https://en.wikipedia.org/wiki/Daylight_saving_time#IANA_time_zone_database)

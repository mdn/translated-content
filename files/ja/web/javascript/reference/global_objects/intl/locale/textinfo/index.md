---
title: Intl.Locale.prototype.textInfo
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/textInfo
tags:
  - 国際化
  - Intl
  - JavaScript
  - プロパティ
  - Locale
  - ローカライズ
  - プロトタイプ
  - リファレンス
  - textInfo
  - 書字方向
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Locale/textInfo
browser-compat: javascript.builtins.Intl.Locale.textInfo
---
{{JSRef}}

**`Intl.Locale.prototype.textInfo`** プロパティは、関連する `Locale` に対して `ltr` （左書き）または `rtl` （右書き）で示される文字の並び順を返すアクセサープロパティです。

## 解説

[UTS 35's Layouts Elements](https://www.unicode.org/reports/tr35/tr35-general.html#Layout_Elements) で定義されているロケールのデータに結び付けた `Locale` 情報を返します。

## 例

### テキスト情報の取得

指定された `Locale` で対応している書字方向を返します。

```js
let ar = new Intl.Locale("ar");
console.log(ar.textInfo); // logs { direction: "rtl" }
console.log(ar.textInfo.direction); // logs "rtl"
```

```js
let es = new Intl.Locale("es");
console.log(es.textInfo); // logs { direction: "ltr" }
console.log(es.textInfo.direction); // logs "ltr"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl/Locale", "Intl.Locale")}}

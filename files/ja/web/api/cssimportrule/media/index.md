---
title: "CSSImportRule: media プロパティ"
short-title: media
slug: Web/API/CSSImportRule/media
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSSOM")}}

**`media`** は {{domxref("CSSImportRule")}} インターフェイスの読み取り専用プロパティで、 {{domxref("MediaList")}} オブジェクトを返します。ここには関連付けられたスタイルシートの `media` 属性の値が入っています。

## 値

{{domxref("MediaList")}} オブジェクトを返します。

`media` の値は、 `media` 属性を格納した文字列（`"print"` など）を渡すことで設定することができます。

## 例

### メディアプロパティの取得

このスタイルシートには単一の {{cssxref("@import")}} ルールが記載されています。したがって、 CSS ルールのリストの最初の項目は `CSSImportRule` になります。 `media` プロパティは {{domxref("MediaList")}} オブジェクトを返します。この中には `mediaText` プロパティの値 `screen` が含まれます。

```css
@import url("style.css") screen;
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].media); // MediaList を返す
```

### メディアプロパティの設定

関連するスタイルシートの `media` 属性を変更するには、 `media` の値に新しい値を格納した文字列を設定します。

```js
let myRules = document.styleSheets[0].cssRules;
myRules[0].media = "print";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

---
title: "CSSImportRule: href プロパティ"
short-title: href
slug: Web/API/CSSImportRule/href
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSSOM")}}

**`href`** は {{domxref("CSSImportRule")}} インターフェイスの読み取り専用プロパティで、 {{cssxref("@import")}} [アットルール](/ja/docs/Web/CSS/At-rule)で指定された URL を返します。

解決された URL は、関連づけられてたスタイルシートの [`href`](/ja/docs/Web/HTML/Element/link#href) 属性となります。

## 値

文字列です。

## 例

このスタイルシートには単一の {{cssxref("@import")}} ルールだけが含まれています。したがって、 CSS ルールのリストの最初の項目は `CSSImportRule` になります。 `href` プロパティはインポートしたスタイルシートの URL を返します。

```css
@import url("style.css") screen;
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].href); // style.css を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

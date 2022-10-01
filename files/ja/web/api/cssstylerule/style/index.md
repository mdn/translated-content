---
title: CSSStyleRule.style
slug: Web/API/CSSStyleRule/style
---

{{ APIRef("CSSOM") }}

## 概要

**`CSSRule.style`** プロパティは、{{DOMXref("CSSRule")}} の [宣言ブロック](http://www.w3.org/TR/1998/REC-CSS2-19980512/syndata.html#block) のための {{domxref("CSSStyleDeclaration")}} インターフェイスです。

## 構文

```
styleObj = cssRule.style
```

## 例

```js
function stilo() {
  alert(document.styleSheets[0].cssRules[0].style.cssText);
}
// displays "background-color: gray;"
```

## 補記

宣言ブロックは、波括弧内に現れるスタイル規則の部分であり、(波括弧の前に書かれるセレクターのための) 実際のスタイル定義を提供します 。

## 仕様書

[DOM Level 2 CSS: styleCSSR](http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleRule-style)

## 関連情報

- [DOM CSS プロパティ](/CSS/CSS_Reference)

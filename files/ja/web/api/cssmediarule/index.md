---
title: CSSMediaRule
slug: Web/API/CSSMediaRule
tags:
  - API
  - CSSOM
  - インターフェイス
  - リファレンス
browser-compat: api.CSSMediaRule
translation_of: Web/API/CSSMediaRule
---
{{ APIRef("CSSOM") }}

**`CSSMediaRule`** は、単一の CSS の {{cssxref("@media")}} ルールを表すインターフェイスです。

{{InheritanceDiagram}}

## プロパティ

_祖先である {{domxref("CSSConditionRule")}}、{{domxref("CSSGroupingRule")}}、{{domxref("CSSRule")}} から継承したプロパティもあります。_

- {{domxref("CSSMediaRule.media")}} {{readonlyinline}}
  - : スタイル情報の出力先メディアを表す {{domxref("MediaList")}} を返します。

## メソッド

_固有のメソッドはありません。祖先である {{domxref("CSSConditionRule")}}、{{domxref("CSSGroupingRule")}}、{{domxref("CSSRule")}} から継承したメソッドがあります。_

## 例

この CSS には、単一のスタイルルールを持つメディアクエリーが含まれています。これは `document.styleSheets[0].cssRules` が返す最初の CSSRule になります。
したがって、 `myRules[0]` は {{domxref("CSSMediaRule")}} オブジェクトを返します。

```css
@media (min-width: 500px) {
  body {
    color: blue;
  }
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0]); // a CSSMediaRule representing the media query.
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

---
title: "CSSRule: cssText プロパティ"
short-title: cssText
slug: Web/API/CSSRule/cssText
l10n:
  sourceCommit: 7972ac25580ffbfb160e6d40013bbab3013d7cbe
---

{{APIRef("CSSOM") }}

**`cssText`** は {{domxref("CSSRule")}} インターフェイスのプロパティで、 {{domxref("CSSStyleSheet")}} スタイルルールの実際のテキストを返します。

> [!NOTE]
> このプロパティを要素のスタイルの {{domxref("CSSStyleDeclaration.cssText")}} と混同しないでください。

このプロパティは、直接設定できなくなったことに注意してください。[仕様化](https://www.w3.org/TR/cssom-1/#changes-from-5-december-2013)されたとおり、*機能的に*変更のみで、かつ、暗黙的に行われます。
言い換えると、設定しようとしても警告もエラーもなく、絶対に何も起こりません。さらに、設定可能なサブプロパティもありません。
従って、これを変更するには、スタイルシートの {{domxref("CSSRuleList", "cssRules[index]")}} プロパティおよび {{domxref("CSSStyleRule.selectorText", ".selectorText")}}、{{domxref("CSSStyleRule.style", ".style")}} （または、そのサブプロパティ）を使用してください。詳細は、[動的なスタイル情報の使用](/ja/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)を参照してください。

## 値

この {{domxref("CSSStyleSheet")}} ルールの実際のテキストを含む文字列です。

## 例

```css
body {
  background-color: darkblue;
}
```

```js
let stylesheet = document.styleSheets[0];
console.log(stylesheet.cssRules[0].cssText); // body { background-color: darkblue; }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

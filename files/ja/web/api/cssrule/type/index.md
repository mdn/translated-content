---
title: "CSSRule: type プロパティ"
short-title: type
slug: Web/API/CSSRule/type
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("CSSOM")}}{{Deprecated_header}}

**`type`** は {{domxref("CSSRule")}} インターフェイスの読み取り専用プロパティで、非推奨です。この {{domxref("CSSRule")}} が表すルールの型を示す整数を返します。

様々な CSS ルールの型を見分ける必要がある場合は、 [`constructor.name`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/name) を使用するのが良い代替手段です。

```js
const sheets = Array.from(document.styleSheets);
const rules = sheets.map((sheet) => Array.from(sheet.cssRules)).flat();

for (const rule of rules) {
  console.log(rule.constructor.name);
}
```

## 値

- `CSSRule.STYLE_RULE` (`1`)
  - : このルールは {{domxref("CSSStyleRule")}} で、 `selector { prop1: val1; prop2: val2; }` のような最も一般的な種類のルールです。
- `CSSRule.IMPORT_RULE` (`3`)
  - : このルールは {{domxref("CSSImportRule")}} で、 {{cssxref("@import")}} ルールを表します。
- `CSSRule.MEDIA_RULE` (`4`)
  - : このルールは {{domxref("CSSMediaRule")}} です。
- `CSSRule.FONT_FACE_RULE` (`5`)
  - : このルールは {{domxref("CSSFontFaceRule")}} です。
- `CSSRule.PAGE_RULE` (`6`)
  - : このルールは {{domxref("CSSPageRule")}} です。
- `CSSRule.KEYFRAMES_RULE` (`7`)
  - : このルールは {{domxref("CSSKeyframesRule")}} です。
- `CSSRule.KEYFRAME_RULE` (`8`)
  - : このルールは {{domxref("CSSKeyframeRule")}} です。
- `CSSRule.NAMESPACE_RULE` (`10`)
  - : このルールは {{domxref("CSSNamespaceRule")}} です。
- `CSSRule.COUNTER_STYLE_RULE` (`11`)
  - : このルールは {{domxref("CSSCounterStyleRule")}} です。
- `CSSRule.SUPPORTS_RULE` (`12`)
  - : このルールは {{domxref("CSSSupportsRule")}} です。
- `CSSRule.DOCUMENT_RULE` (`13`)
  - : このルールは {{domxref("CSSDocumentRule")}} です。
- `CSSRule.FONT_FEATURE_VALUES_RULE` (`14`)
  - : このルールは {{domxref("CSSFontFeatureValuesRule")}} です。
- `CSSRule.VIEWPORT_RULE` (`15`)
  - : このルールは {{domxref("CSSViewportRule")}} です。
- `CSSRule.REGION_STYLE_RULE` (`16`)
  - : このルールは {{domxref("CSSRegionStyleRule")}} です。

`CSSRule.UNKNOWN_RULE` (`0`) と `CSSRule.CHARSET_RULE` (`2`) は非推奨であり、受け取ることはできません。

## 例

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].type);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

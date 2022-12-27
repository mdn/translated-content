---
title: CSSValue.cssText
slug: Web/API/CSSValue/cssText
---

{{APIRef("DOM")}}

{{domxref("CSSValue")}} インターフェイスの **`cssText`** プロパティは、現在計算されている CSS プロパティ値を表します。

## 構文

```
cssText = cssValue.cssText;
```

### 値

現在の CSS プロパティ値を表す {{domxref("DOMString")}} 。

## 例

```js
var styleDeclaration = document.styleSheets[0].cssRules[0].style;
var cssValue = styleDeclaration.getPropertyCSSValue("color");
console.log(cssValue.cssText);
```

## 仕様

| 仕様                                                                                                     | ステータス                       | 備考     |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('DOM2 Style', 'css.html#CSS-CSSValue-cssText', 'CSSValue.cssText')}} | {{Spec2('DOM2 Style')}} | 初回定義 |

## ブラウザー実装状況

{{Compat("api.CSSValue.cssText")}}

## 関連項目

- {{domxref("CSSStyleDeclaration.getPropertyCSSValue()")}}

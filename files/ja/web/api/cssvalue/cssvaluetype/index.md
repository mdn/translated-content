---
title: CSSValue.cssValueType
slug: Web/API/CSSValue/cssValueType
---

{{APIRef("DOM")}}

{{domxref("CSSValue")}} インターフェイスの **`cssValueType`** 読み取り専用プロパティは、現在計算されている CSS プロパティ値の型を表します。

## 構文

```
cssValueType = cssValue.cssValueType;
```

### 値

値の型を定義するコードを表す `unsigned short` 。可能な値は次のとおりです:

| 定数                  | 説明                                                                                                                                                                                                                   |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CSS_CUSTOM`          | 値はカスタム値です。                                                                                                                                                                                                   |
| `CSS_INHERIT`         | 値は継承され、 `cssText` には `"inherit"` が含まれます。                                                                                                                                                               |
| `CSS_PRIMITIVE_VALUE` | 値はプリミティブ値であり、 {{domxref("CSSPrimitiveValue")}} インターフェイスのインスタンスは、 `CSSValue` インターフェイスのこのインスタンスでバインディング固有のキャストメソッドを使用して取得できます。 |
| `CSS_VALUE_LIST`      | 値は `CSSValue` リストであり、 {{domxref("CSSValueList")}} インターフェイスのインスタンスは、 `CSSValue` インターフェイスのこのインスタンスでバインディング固有のキャストメソッドを使用して取得できます。     |

## 例

```js
var styleDeclaration = document.styleSheets[0].cssRules[0].style;
var cssValue = styleDeclaration.getPropertyCSSValue("color");
console.log(cssValue.cssValueType);
```

## 仕様

| 仕様                                                                                                                     | ステータス                       | 備考     |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------- |
| {{SpecName('DOM2 Style', 'css.html#CSS-CSSValue-cssValueType', 'CSSValue.cssValueType')}} | {{Spec2('DOM2 Style')}} | 初回定義 |

## ブラウザー実装状況

{{Compat("api.CSSValue.cssValueType")}}

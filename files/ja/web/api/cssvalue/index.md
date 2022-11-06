---
title: CSSValue
slug: Web/API/CSSValue
---

{{APIRef("CSSOM")}}

**`SSValue`** インターフェイスは、 CSS プロパティの現在の計算値を表します。

## プロパティ

- {{DOMxRef("CSSValue.cssText")}}
  - : 現在の値を表す {{DOMxRef("DOMString")}} 。
- {{DOMxRef("CSSValue.cssValueType")}}{{ReadOnlyInline}}

  - : 値の型を定義するコードを表す `unsigned short` 。可能な値は次のとおりです:

    | 定数                  | 説明                                                                                                                                                                                                                 |
    | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `CSS_CUSTOM`          | The value is a custom value.                                                                                                                                                                                         |
    | `CSS_INHERIT`         | The value is inherited and the `cssText` contains `"inherit"`.                                                                                                                                                       |
    | `CSS_PRIMITIVE_VALUE` | The value is a primitive value and an instance of the {{DOMxRef("CSSPrimitiveValue")}} interface can be obtained by using binding-specific casting methods on this instance of the `CSSValue` interface. |
    | `CSS_VALUE_LIST`      | The value is a `CSSValue` list and an instance of the {{DOMxRef("CSSValueList")}} interface can be obtained by using binding-specific casting methods on this instance of the `CSSValue` interface.         |

## 仕様

| 仕様                                                                                 | ステータス                       | 備考     |
| ------------------------------------------------------------------------------------ | -------------------------------- | -------- |
| {{SpecName('DOM2 Style', 'css.html#CSS-CSSValue', 'CSSValue')}} | {{Spec2('DOM2 Style')}} | 初回定義 |

## ブラウザー実装状況

{{Compat("api.CSSValue")}}

## 関連項目

- {{DOMxRef("CSSPrimitiveValue")}}
- {{DOMxRef("CSSValueList")}}

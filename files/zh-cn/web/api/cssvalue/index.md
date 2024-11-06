---
title: CSSValue
slug: Web/API/CSSValue
---

{{APIRef("CSSOM")}}{{Deprecated_header}}`CSSValue` 接口表示经过计算的当前 CSS 属性值。

## 属性

- {{domxref("CSSValue.cssText")}}
  - : {{domxref("DOMString")}} 代表当前值。
- {{domxref("CSSValue.cssValueType")}} {{readonlyInline}}

  - : 一个 `unsigned short` 类型的数据用来定义了值的类型。可取值为：

    | 值                    | 说明                                                                                                                                       |
    | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
    | `CSS_CUSTOM`          | 该值是一个自定义值。                                                                                                                       |
    | `CSS_INHERIT`         | 该值是继承来的值，并且它的 `cssText` 属性值中包含`"inherit"`。                                                                             |
    | `CSS_PRIMITIVE_VALUE` | 该值是一个原始值，并且是 {{domxref("CSSPrimitiveValue")}} 接口的一个实例，可以通过绑定特殊的构造方法在这个 CSSValue 接口的这个实例来获得。 |
    | `CSS_VALUE_LIST`      | 该值是一个 `CSSValue` 列表，是{{domxref("CSSValueList")}} 接口的一个实例，可以通过绑定特殊的构造方法在这个 CSSValue 接口的这个实例来获得。 |

## 规范

该特性最初在 [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) 中定义，但从那时起已从标准化工作中移除。

它已被现代、不兼容的 [CSS 类型对象模型 API](/zh-CN/docs/Web/API/CSS_Typed_OM_API) 取代，该 API 已被标准化。

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("CSSPrimitiveValue")}}
- {{domxref("CSSValueList")}}

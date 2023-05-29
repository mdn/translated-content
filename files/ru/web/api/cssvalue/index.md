---
title: CSSValue
slug: Web/API/CSSValue
translation_of: Web/API/CSSValue
---

{{APIRef("DOM")}}

Интерфейс **`CSSValue`** возвращает текущее вычисленное значение CSS-свойства.

## Свойства

- {{domxref("CSSValue.cssText")}}
  - : {{domxref("DOMString")}} возвращает текущее значение.
- {{domxref("CSSValue.cssValueType")}} {{readonlyInline}}

  - : An `unsigned short` representing a code defining the type of the value. Возможные значения:

    | Константа             | Описание                                                                                                                                                                                                             |
    | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `CSS_CUSTOM`          | The value is a custom value.                                                                                                                                                                                         |
    | `CSS_INHERIT`         | Значение унаследовано и `cssText` содержит `"inherit"`.                                                                                                                                                              |
    | `CSS_PRIMITIVE_VALUE` | The value is a primitive value and an instance of the {{domxref("CSSPrimitiveValue")}} interface can be obtained by using binding-specific casting methods on this instance of the `CSSValue` interface. |
    | `CSS_VALUE_LIST`      | The value is a `CSSValue` list and an instance of the {{domxref("CSSValueList")}} interface can be obtained by using binding-specific casting methods on this instance of the `CSSValue` interface.         |

## Specifications

| Specification                                                                        | Status                           | Comment            |
| ------------------------------------------------------------------------------------ | -------------------------------- | ------------------ |
| {{SpecName('DOM2 Style', 'css.html#CSS-CSSValue', 'CSSValue')}} | {{Spec2('DOM2 Style')}} | Initial definition |

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSPrimitiveValue")}}
- {{domxref("CSSValueList")}}

---
title: CSSNumericValue.div()
slug: Web/API/CSSNumericValue/div
translation_of: Web/API/CSSNumericValue/div
---
{{APIRef("CSS Typed OM")}}{{SeeCompatTable}}

The **`div()`** method of the {{domxref("CSSNumericValue")}} interface divides the `CSSNumericValue` by the supplied value.

## Syntax

    var cssNumericValue = CSSNumericValue.div(number);

### Parameters

- number
  - : Either a {{jsxref('Number')}} or a {{domxref('CSSNumericValue')}}.

### Return value

A {{domxref('CSSMathProduct')}}.

### Exceptions

- TypeError
  - : Indicates that an invalid type was passed to the method.

## Examples

```js
let mathProduct = CSS.px("24").div(CSS.percent("4"));
// Prints "calc(24px / 4%)"
mathProduct.toString();
```

## Specifications

| Specification                                                                    | Status                           | Comment             |
| -------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName('CSS Typed OM','#dom-cssnumericvalue-div','div')}} | {{Spec2('CSS Typed OM')}} | Initial definition. |

## Browser compatibility

{{Compat("api.CSSNumericValue.div")}}

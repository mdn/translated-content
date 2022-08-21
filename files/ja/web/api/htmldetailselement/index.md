---
title: HTMLDetailsElement
slug: Web/API/HTMLDetailsElement
translation_of: Web/API/HTMLDetailsElement
---
> **Note:** translation in progress

{{APIRef("HTML DOM")}}

The **`HTMLDetailsElement`** interface provides special properties (beyond the regular {{domxref("HTMLElement")}} interface it also has available to it by inheritance) for manipulating {{HTMLElement("details")}} elements.

{{InheritanceDiagram(600, 120)}}

## Properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLDetailsElement.open")}}
  - : Is a {{domxref("boolean")}} reflecting the {{htmlattrxref("open", "details")}} HTML attribute, indicating whether or not the element’s contents (not counting the {{HTMLElement("summary")}}) is to be shown to the user.

## Methods

_No specific method; inherits methods from its parent, {{domxref("HTMLElement")}}._

## Specifications

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/interactive-elements.html#htmldetailselement)
- [HTML 5.2 (W3C Proposed Recommendation)](https://www.w3.org/TR/html52/interactive-elements.html#htmldetailselement)

## Browser compatibility

{{Compat("api.HTMLDetailsElement")}}

## See also

- The HTML element implementing this interface: {{HTMLElement("details")}}

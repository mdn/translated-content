---
title: HTMLDetailsElement
slug: Web/API/HTMLDetailsElement
---

> **メモ:** translation in progress

{{APIRef("HTML DOM")}}

The **`HTMLDetailsElement`** interface provides special properties (beyond the regular {{domxref("HTMLElement")}} interface it also has available to it by inheritance) for manipulating {{HTMLElement("details")}} elements.

{{InheritanceDiagram(600, 120)}}

## Properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLDetailsElement.open")}}
  - : Is a {{domxref("boolean")}} reflecting the {{htmlattrxref("open", "details")}} HTML attribute, indicating whether or not the element’s contents (not counting the {{HTMLElement("summary")}}) is to be shown to the user.

## Methods

_No specific method; inherits methods from its parent, {{domxref("HTMLElement")}}._

## 仕様書

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/interactive-elements.html#htmldetailselement)
- [HTML 5.2 (W3C Proposed Recommendation)](https://www.w3.org/TR/html52/interactive-elements.html#htmldetailselement)

## ブラウザーの互換性

{{Compat("api.HTMLDetailsElement")}}

## 関連情報

- The HTML element implementing this interface: {{HTMLElement("details")}}

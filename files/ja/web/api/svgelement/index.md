---
title: SVGElement
slug: Web/API/SVGElement
---

{{APIRef("SVG")}}

SVG 言語における要素に直接対応する SVG DOM インタフェースのすべては、`SVGElement` インタフェースから派生しています。

{{InheritanceDiagram}}

## 属性

_Also inherits properties from: {{DOMxRef("Element")}}, {{DOMxRef("HTMLOrForeignElement")}}_

- {{domxref("SVGElement.dataset")}}{{ ReadOnlyInline }}
  - : 要素に付与された[カスタム・データ属性](/ja/docs/Web/Guide/HTML/Using_data_attributes)に対応する名前つきデータ属性の、キーと値の対のリストを与える、{{domxref("DOMStringMap")}} オブジェクトです。{{SVGAttr("data-*")}} の形の属性を使って、これらの対を SVG で定義することもでき、ここで `*` は、その対のキーの名前です。これは、HTML の {{domxref("HTMLElement.dataset")}} 属性および HTML の {{htmlattrxref("data-*")}} グローバル属性とちょうど同様に、うまく機能します。
- {{DOMxRef("SVGElement.className")}} {{Deprecated_Inline}}{{ReadOnlyInline}}
  - : An {{DOMxRef("SVGAnimatedString")}} that reflects the value of the {{SVGAttr("class")}} attribute on the given element, or the empty string if `class` is not present. This attribute is deprecated and may be removed in a future version of this specification. Authors are advised to use {{DOMxRef("Element.classList")}} instead.
- {{domxref("SVGElement.ownerSVGElement")}}{{ ReadOnlyInline }}
  - : 直近の先祖の {{SVGElement("svg")}} 要素を参照する {{domxref("SVGSVGElement")}} です。もし、与えられた要素が最も外側の `<svg>` 要素であれば、`null` です。
- {{domxref("SVGElement.viewportElement")}}{{ ReadOnlyInline }}
  - : 現在のビューポートを確立した {{domxref("SVGElement")}} です。多くの場合は、直近の先祖の {{SVGElement("svg")}} 要素です。もし、与えられた要素が最も外側の `<svg>` 要素であれば、`null` です。

## メソッド

_`SVGElement` インタフェースは、追加のメソッドを何も提供しませんが、親から、すなわち {{domxref("Element")}}, {{DOMxRef("HTMLOrForeignElement")}} から、メソッドを継承しています。_

## イベント

## Events

Listen to these events using [`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) or by assigning an event listener to the equivalent `on...` handler property defined on {{DOMxRef("GlobalEventHandlers")}} or {{DOMxRef("WindowEventHandlers")}}.

- [`abort`](/ja/docs/Web/API/SVGElement/abort_event)
  - : Fired when page loading is stopped before an SVG element has been allowed to load completely.
    Also available via the [`onabort`](/ja/docs/Web/API/GlobalEventHandlers/onabort) property.
- [`error`](/ja/docs/Web/API/SVGElement/error_event)
  - : Fired when an SVG element does not load properly or when an error occurs during script execution.
    Also available via the [`onerror`](/ja/docs/Web/API/GlobalEventHandlers/onerror) property.
- [`load`](/ja/docs/Web/API/SVGElement/load_event)
  - : Fires on an `SVGElement` when it is loaded in the browser.
    Also available via the [`onload`](/ja/docs/Web/API/GlobalEventHandlers/onload) property.
- [`resize`](/ja/docs/Web/API/SVGElement/resize_event)
  - : Fired when an SVG document is being resized.
    Also available via the [`onresize`](/ja/docs/Web/API/GlobalEventHandlers/onresize) property.
- [`scroll`](/ja/docs/Web/API/SVGElement/scroll_event)
  - : Fired when an SVG document view is being shifted along the X and/or Y axes.
    Also available via the [`onscroll`](/ja/docs/Web/API/GlobalEventHandlers/onscroll) property.
- [`unload`](/ja/docs/Web/API/SVGElement/unload_event)
  - : Fired when the DOM implementation removes an SVG document from a window or frame.
    Also available via the [`onunload`](/ja/docs/Web/API/WindowEventHandlers/onunload) property.

## 仕様

| Specification                                                                                | Status                   | Comment                                                                         |
| -------------------------------------------------------------------------------------------- | ------------------------ | ------------------------------------------------------------------------------- |
| {{SpecName("SVG2", "types.html#InterfaceSVGElement", "SVGElement")}} | {{Spec2("SVG2")}} | Adds the {{domxref("SVGElement.dataset", "dataset")}} property. |
| {{SpecName("SVG1.1", "types.html#InterfaceSVGElement", "SVGElement")}} | {{Spec2("SVG1.1")}} | Initial definition                                                              |

## ブラウザ互換性

{{Compat("api.SVGElement")}}

## 参照

- HTML {{htmlattrxref("data-*")}} attribute
- SVG {{SVGAttr("data-*")}} attribute
- [Using custom data attributes in HTML](/ja/docs/Web/Guide/HTML/Using_data_attributes)

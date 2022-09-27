---
title: HTMLCanvasElement
slug: Web/API/HTMLCanvasElement
---

{{APIRef("Canvas API")}}

**`HTMLCanvasElement`** インタフェースは canvas 要素のレイアウトや表現の操作のための属性やメソッドを提供します。`HTMLCanvasElement`は{{domxref("HTMLElement")}}インタフェースのプロパティやメソッドも利用可能です。

## 属性

_{{domxref("HTMLElement")}}から継承する属性の他に以下の属性を持ちます。_

- {{domxref("HTMLCanvasElement.height")}}
  - : 正の`integer` で {{htmlattrxref("height", "canvas")}} という HTML の{{HTMLElement("canvas")}}要素の属性で指定された CSS ピクセルの値です。もしこの属性が指定されていないか、無効な値であるならば、デフォルト値として`150`を用います。
- {{domxref("HTMLCanvasElement.mozOpaque")}} {{non-standard_inline}}
  - : {{jsxref("Boolean")}}で{{htmlattrxref("moz-opaque", "canvas")}}という{{HTMLElement("canvas")}}要素で指定されたものを反映したものです。この属性は canvas が半透明であることが重要か否かを指定します。もし半透明がないならば、描画を最適化できます。
- {{domxref("HTMLCanvasElement.width")}}
  - : 正の`integer` で{{htmlattrxref("width", "canvas")}} という HTML の{{HTMLElement("canvas")}}要素の属性で指定された CSS ピクセルの値です。もしこの属性が指定されていないか、無効な値であるならば、デフォルト値として`300`を用います。

## メソッド

_{{domxref("HTMLElement")}}から継承するメソッドの他に以下のメソッドを持ちます。_

- {{domxref("HTMLCanvasElement.captureStream()")}} {{experimental_inline}}
  - : Returns a {{domxref("CanvasCaptureMediaStream")}} that is a real-time video capture of the surface of the canvas.
- {{domxref("HTMLCanvasElement.getContext()")}}
  - : Canvas の描画コンテキストを返すか、サポートされていないコンテキスト ID の場合 null を返します。
    描画コンテキストを用いて Canvas に描画することができます。
    getContext の引数に`"2d"`を渡すと{{domxref("CanvasRenderingContext2D")}} オブジェクトを、`"experimental-webgl"`(または`"webgl"`)を渡すと {{domxref("WebGLRenderingContext")}}オブジェクトを返します。
    `"experimental-webgl"`または`"webgl"`コンテキストは、ブラウザが WebGL に対応している場合に限り使用できます。
- {{domxref("HTMLCanvasElement.toDataURL()")}}
  - : Returns a data-URL containing a representation of the image in the format specified by the `type` parameter (defaults to `png`). The returned image is in a resolution of 96dpi.
- {{domxref("HTMLCanvasElement.toBlob()")}}
  - : Creates a {{domxref("Blob")}} object representing the image contained in the canvas; this file may be cached on the disk or stored in memory at the discretion of the user agent.
- {{domxref("HTMLCanvasElement.transferControlToOffscreen()")}} {{experimental_inline}}
  - : Transfers control to an {{domxref("OffscreenCanvas")}} object, either on the main thread or on a worker.
- {{domxref("HTMLCanvasElement.mozGetAsFile()")}} {{non-standard_inline}} {{deprecated_inline}}
  - : Returns a {{domxref("File")}} object representing the image contained in the canvas; this file is a memory-based file, with the specified `name`. If `type` is not specified, the image type is `image/png`.

## 仕様書

| Specification                                                                                                                                        | Status                                               | Comment                                                                                                                                                                                                                 |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('Media Capture DOM Elements', '#html-media-element-media-capture-extensions', 'HTMLCanvasElement')}} | {{Spec2('Media Capture DOM Elements')}} | Adds the method `captureStream()`.                                                                                                                                                                                      |
| {{SpecName('HTML WHATWG', "#the-canvas-element", "HTMLCanvasElement")}}                                                     | {{Spec2('HTML WHATWG')}}                     | The method `getContext()` now returns a {{domxref("RenderingContext")}} rather than an opaque `object`. The methods `probablySupportsContext()`, `setContext()` and `transferControlToProxy()`have been added. |
| {{SpecName('HTML5.1', "scripting-1.html#the-canvas-element", "HTMLCanvasElement")}}                                     | {{Spec2('HTML5.1')}}                         |                                                                                                                                                                                                                         |
| {{SpecName('HTML5 W3C', "scripting-1.html#the-canvas-element", "HTMLCanvasElement")}}                                     | {{Spec2('HTML5 W3C')}}                         | Initial definition.                                                                                                                                                                                                     |

## ブラウザーの互換性

{{Compat("api.HTMLCanvasElement")}}

## 関連情報

- HTML element implementing this interface: {{HTMLElement("canvas")}}.

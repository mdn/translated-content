---
title: HTMLCanvasElement
slug: Web/API/HTMLCanvasElement
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{APIRef("Canvas API")}}

**`HTMLCanvasElement`** インターフェイスは、{{HtmlElement("canvas")}} 要素のレイアウトや表示を操作するための属性やメソッドを提供します。`HTMLCanvasElement` は {{domxref("HTMLElement")}} インターフェイスのプロパティやメソッドも継承しています。

{{InheritanceDiagram}}

## インスタンスプロパティ

_{{domxref("HTMLElement")}} から継承しているプロパティがあります。_

- {{domxref("HTMLCanvasElement.height")}}
  - : この {{HTMLElement("canvas")}} 要素の [`height`](/ja/docs/Web/HTML/Reference/Elements/canvas#height) 属性で、このキャンバスの 1 列分の論理ピクセル数（または RGBA 値の数）を反映した正の整数です。この属性が指定されていないか、無効な値であった場合は、`150` の既定値が用いられます。もし {{HTMLElement("canvas")}} に CSS の高さが\[独立して]割り当てられていない場合、この値は CSS ピクセル数の単位で高さとしても使用されます。
- {{domxref("HTMLCanvasElement.width")}}
  - : この {{HTMLElement("canvas")}} 要素の [`width`](/ja/docs/Web/HTML/Reference/Elements/canvas#width) 属性で、このキャンバスの 1 行分の論理ピクセル数（または RGBA 値の数）を反映した正の整数です。この属性が指定されていないか、無効な値であった場合は、`300` の既定値が用いられます。もし {{HTMLElement("canvas")}} に CSS の高さが\[独立して]割り当てられていない場合、この値は CSS ピクセル数の単位で幅としても使用されます。
- {{domxref("HTMLCanvasElement.mozOpaque")}} {{non-standard_inline}} {{deprecated_inline}}
  - : この {{HTMLElement("canvas")}} 要素の [`moz-opaque`](/ja/docs/Web/HTML/Reference/Elements/canvas#moz-opaque) 属性を反映した論理値です。半透明の部分の有無をキャンバスに伝えることができます。キャンバスに半透明がないことがわかれば、描画のパフォーマンスを最適化することができます。これは Mozilla ベースのブラウザーでのみ対応しています。代わりに標準化された {{domxref("HTMLCanvasElement.getContext()", "canvas.getContext('2d', { alpha: false })")}} を使用してください。
- {{domxref("HTMLCanvasElement.mozPrintCallback")}} {{non-standard_inline}}
  - : 初期状態では null である関数です。ウェブコンテンツでここに JavaScript 関数を設定すると、ページの印刷中にキャンバスが再描画される際に呼び出されます。呼び出される際、コールバック関数には "printState" オブジェクトが渡されます。これは [MozCanvasPrintState](https://searchfox.org/mozilla-central/search?q=interface%20MozCanvasPrintState&path=HTMLCanvasElement.webidl) インターフェイスです。 コールバックは printState オブジェクトから描画するコンテキストを取得することができ、完了したら done() を呼び出す必要があります。`mozPrintCallback` の目的は、使用するプリンターの解像度でキャンバスの高解像度レンダリングを行うことです。[このブログ記事を参照してください](https://blog.mozilla.org/labs/2012/09/a-new-way-to-control-printing-output/)。

## メソッド

_{{domxref("HTMLElement")}} から継承しているメソッドがあります。_

- {{domxref("HTMLCanvasElement.captureStream()")}}
  - : {{domxref("CanvasCaptureMediaStreamTrack")}} を返します。これはキャンバスの表面に対するリアルタイム動画キャプチャです。
- {{domxref("HTMLCanvasElement.getContext()")}}
  - : このキャンバスのの描画コンテキストを返すか、対応していないコンテキスト ID の場合は null を返します。描画コンテキストを用いてキャンバスに描画することができます。getContext の引数に `"2d"` を渡して呼び出すと {{domxref("CanvasRenderingContext2D")}} オブジェクトを返します。`"webgl"`（または `"experimental-webgl"`）で呼び出すと、 {{domxref("WebGLRenderingContext")}} オブジェクトを返します。このコンテキストは [WebGL](/ja/docs/Web/API/WebGL_API) を実装しているブラウザーでのみ使用できます。
- {{domxref("HTMLCanvasElement.toDataURL()")}}
  - : `type` 引数で指定した形式（既定では `png`）で画像を表現した data-URL を返します。返す画像の解像度は 96dpi です。
- {{domxref("HTMLCanvasElement.toBlob()")}}
  - : キャンパスに格納する画像を表す {{domxref("Blob")}} オブジェクトを作成します。このファイルは、ユーザーエージェントの判断で、ディスクにキャッシュされたり、メモリーに格納されたりすることがあります。
- {{domxref("HTMLCanvasElement.transferControlToOffscreen()")}}
  - : {{domxref("OffscreenCanvas")}} オブジェクトへの制御権を、メインスレッドまたはワーカーへ移譲します。

## イベント

これらのイベントは、[`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) を使用して待ち受けしてください。

- [`contextlost`](/ja/docs/Web/API/HTMLCanvasElement/contextlost_event) {{Experimental_Inline}}
  - : ユーザーエージェントが `CanvasRenderingContext2D` または `OffscreenCanvasRenderingContext2D` コンテキストに関連付けられたバッキングストレージが失われたことを検出した場合に発行されます。
- [`contextrestored`](/ja/docs/Web/API/HTMLCanvasElement/contextrestored_event) {{Experimental_Inline}}
  - : ユーザーエージェントが `CanvasRenderingContext2D` または `OffscreenCanvasRenderingContext2D` コンテキストの復元に成功した場合に発行されます。
- [`webglcontextcreationerror`](/ja/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event)
  - : ユーザーエージェントが `WebGLRenderingContext` または `WebGL2RenderingContext` コンテキストを作成することができない場合に発行されます。
- [`webglcontextlost`](/ja/docs/Web/API/HTMLCanvasElement/webglcontextlost_event)
  - : ユーザーエージェントが `WebGLRenderingContext` または `WebGL2RenderingContext` オブジェクトに関連付けられた描画バッファーが失われたことを検出した場合に発行されます。
- [`webglcontextrestored`](/ja/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event)
  - : ユーザーエージェントが `WebGLRenderingContext` または `WebGL2RenderingContext` オブジェクトの描画バッファーを復元する場合に発行されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{HTMLElement("canvas")}}.

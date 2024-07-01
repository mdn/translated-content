---
title: OffscreenCanvas
slug: Web/API/OffscreenCanvas
l10n:
  sourceCommit: 16ddaba6073a5e4022aecd2aca8893905a9dd5d0
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

{{HtmlElement("canvas")}} 要素、あるいは [Canvas API](/ja/docs/Web/API/Canvas_API) を使用すると、レンダリングとアニメーション、ユーザー操作は通常、ウェブアプリケーションのメインスレッドの実行で発生します。
キャンバスのアニメーションとレンダリングに関連する計算はアプリケーションのパフォーマンスに影響を受ける場合があります。

**OffscreenCanvas** インターフェイスは画面外にレンダリングできるキャンバスを提供し、 DOM と Canvas API を切り離すことで、 {{HtmlElement("canvas")}} 要素が完全に DOM に依存しなくなります。
レンダリングの操作は [ワーカー](/ja/docs/Web/API/Web_Workers_API) コンテキストでも実行することができるので、一部のタスクを別のスレッドで実行させて、メインスレッドに負荷の高い処理を回避させることもできます。

`OffscreenCanvas` は [移譲可能オブジェクト](/ja/docs/Web/API/Web_Workers_API/Transferable_objects) です。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("OffscreenCanvas.OffscreenCanvas", "OffscreenCanvas()")}}
  - : `OffscreenCanvas` のコンストラクターです。新しく `OffscreenCanvas` オブジェクトを生成します。

## インスタンスプロパティ

- {{domxref("OffscreenCanvas.height")}}
  - : オフスクリーンキャンバスの横幅を示します。
- {{domxref("OffscreenCanvas.width")}}
  - : オフスクリーンキャンパスの高さを表します。

## メソッド

- {{domxref("OffscreenCanvas.getContext()")}}
  - : オフスクリーンキャンバスのコンテキストを返します。
- {{domxref("OffscreenCanvas.convertToBlob()")}}
  - : キャンバスに含まれる画像を {{domxref("Blob")}} オブジェクトにして生成します。
- {{domxref("OffscreenCanvas.transferToImageBitmap()")}}
  - : `OffscreenCanvas` で最後にレンダリングされたイメージを {{domxref("ImageBitmap")}} オブジェクトにして生成します。{{domxref("ImageBitmap")}} を管理する上で重要な注意事項については {{domxref("OffscreenCanvas.transferToImageBitmap()", "API 説明")}} からご参照ください。

## イベント

_親インターフェイスである {{domxref("EventTarget")}} からイベントを継承しています。_

これらのイベントを待ち受けするには、 {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}} を使用するか、このインターフェイスの `oneventname` プロパティにイベントリスナーを代入するかしてください。

- [`contextlost`](/ja/docs/Web/API/OffscreenCanvas/contextlost_event)
  - : [`OffscreenCanvasRenderingContext2D`](/ja/docs/Web/API/OffscreenCanvasRenderingContext2D) コンテキストが失われたことがブラウザーに検出された時に発生します。
- [`contextrestored`](/ja/docs/Web/API/OffscreenCanvas/contextrestored_event)
  - : ブラウザーが [`OffscreenCanvasRenderingContext2D`](/ja/docs/Web/API/OffscreenCanvasRenderingContext2D) コンテキストを正常に復元した時に発生します。

## 例

### `OffscreenCanvas` で生成されたフレームを同期的に表示する

`OffscreenCanvas` を使用する1つの方法は、 `OffscreenCanvas` オブジェクトからレンダリングコンテキストを使用してフレームを生成することです。このコンテキストで新しいフレームのレンダリングが完了したら、 {{domxref("OffscreenCanvas.transferToImageBitmap", "transferToImageBitmap()")}} メソッドを呼び出すことで、最後にレンダリングされた画像を保存できます。このメソッドは {{domxref("ImageBitmap")}} オブジェクトを返すので、さまざまな Web API で使用できるほか、転送コピーを作成しないでもう一つのキャンバスとして使用することもできます。

`ImageBitmap` を表示するには {{domxref("ImageBitmapRenderingContext")}} コンテキストを使用します。このコンテキストは `canvas.getContext("bitmaprenderer")` を (表示されている) canvas 要素で呼び出すことで作成されます。キャンバスの内容を指定された `ImageBitmap` に置き換える機能のみを提供します。

`OffscreenCanvas` から以前レンダリングされ保存された `ImageBitmap` を使用して {{domxref("ImageBitmapRenderingContext.transferFromImageBitmap()")}} を呼び出すと、 `ImageBitmap` がキャンバス上に表示されて、その所有権がキャンバスに移ります。単体の `OffscreenCanvas` は任意の数の他の `ImageBitmapRenderingContext` オブジェクトにフレームを転送することができます。

ここで2つの {{HTMLElement("canvas")}} 要素があるとします。

```html
<canvas id="one"></canvas> <canvas id="two"></canvas>
```

次のコードは、上記のように `OffscreenCanvas` を使用してレンダリングを提供します。

```js
const one = document.getElementById("one").getContext("bitmaprenderer");
const two = document.getElementById("two").getContext("bitmaprenderer");

const offscreen = new OffscreenCanvas(256, 256);
const gl = offscreen.getContext("webgl");

// gl コンテキストを使用して最初のキャンバスに描画を行う
const bitmapOne = offscreen.transferToImageBitmap();
one.transferFromImageBitmap(bitmapOne);

// もう一つのキャンバスに対して、さらに描画を行う
const bitmapTwo = offscreen.transferToImageBitmap();
two.transferFromImageBitmap(bitmapTwo);
```

### `OffscreenCanvas` で生成されたフレームを非同期的に表示する

`OffscreenCanvas` API を使用するもう一つの方法は、 [ワーカー](/ja/docs/Web/API/Web_Workers_API) あるいはメインスレッド上の {{HTMLElement("canvas")}} 要素で {{domxref("HTMLCanvasElement.transferControlToOffscreen", "transferControlToOffscreen()")}} を呼び出し、メインスレッドの {{domxref("HTMLCanvasElement")}} から `OffscreenCanvas` オブジェクトを返すことです。{{domxref("OffscreenCanvas.getContext", "getContext()")}} を呼び出すと、 `OffscreenCanvas` からレンダリングコンテキストを取得します。

`main.js` スクリプト (メインスレッド) は次のようになります。

```js
const htmlCanvas = document.getElementById("canvas");
const offscreen = htmlCanvas.transferControlToOffscreen();

const worker = new Worker("offscreencanvas.js");
worker.postMessage({ canvas: offscreen }, [offscreen]);
```

一方で、 `offscreencanvas.js` スクリプト (ワーカースレッド) は次のようになります。

```js
onmessage = (evt) => {
  const canvas = evt.data.canvas;
  const gl = canvas.getContext("webgl");
  // gl コンテキストを使用して描画を行う
};
```

ワーカーで {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}} を使うことも可能です。

```js
onmessage = (evt) => {
  const canvas = evt.data.canvas;
  const gl = canvas.getContext("webgl");

  function render(time) {
    // gl コンテキストを使用して描画を行う
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
};
```

より詳細な例については GitHub にある [OffscreenCanvas example source](https://github.com/mdn/dom-examples/tree/main/web-workers/offscreen-canvas-worker) を参照するか [OffscreenCanvas example live](https://mdn.github.io/dom-examples/web-workers/offscreen-canvas-worker/) を実行してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CanvasRenderingContext2D")}}
- {{domxref("OffscreenCanvasRenderingContext2D")}}
- {{domxref("ImageBitmap")}}
- {{domxref("ImageBitmapRenderingContext")}}
- {{domxref("HTMLCanvasElement.transferControlToOffscreen()")}}
- {{domxref("Window.requestAnimationFrame()", "requestAnimationFrame()")}}
- [WebGL Off the Main Thread – Mozilla Hacks](https://hacks.mozilla.org/2016/01/webgl-off-the-main-thread/) (2016)

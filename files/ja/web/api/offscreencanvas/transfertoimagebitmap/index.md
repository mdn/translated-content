---
title: "OffscreenCanvas: transferToImageBitmap() メソッド"
short-title: transferToImageBitmap()
slug: Web/API/OffscreenCanvas/transferToImageBitmap
l10n:
  sourceCommit: 46dd9c0c1635e8abd73040c1a71cc0ed3c27cd50
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

**`OffscreenCanvas.transferToImageBitmap()`** メソッドは、この `OffscreenCanvas` の最後にレンダリングされた画像から {{domxref("ImageBitmap")}} オブジェクトを作成します。この `OffscreenCanvas` は、その後のレンダリング用に新しい画像を割り当てます。

## 構文

```js-nolint
transferToImageBitmap()
```

### 引数

なし。

### 返値

新しく割り当てられた {{domxref("ImageBitmap")}} です。

この `ImageBitmap` は、潜在的に大きなグラフィックリソースを参照しています。ウェブアプリケーションの堅牢性を確実に保持するためには、どの時点でもこれらのリソースを割り当て過ぎないようにすることが重要です。このため、 `ImageBitmap` を確実に消費するか閉じておくことが重要です。

{{domxref("OffscreenCanvas")}} の例で説明したように、この `ImageBitmap` を {{domxref("ImageBitmapRenderingContext.transferFromImageBitmap()")}} に渡すと `ImageBitmap` オブジェクトが消費されます。これにより、このオブジェクトは、その基礎となるグラフィックリソースを参照できなくなり、他の Web API に渡すことができなくなります。

`ImageBitmap` を、それを消費しない他の Web API （例えば、 {{domxref("CanvasRenderingContext2D.drawImage()")}}）に渡すことが目的の場合は、使い終わったら {{domxref("ImageBitmap.close()")}} を呼んで閉じなければなりません。 `ImageBitmap` への JavaScript 参照を単に削除しないでください。そうすると、次回ガベージコレクターが実行されるまで、そのグラフィックリソースが存続したままになります。

`transferToImageBitmap()` を呼び出して {{domxref("ImageBitmapRenderingContext.transferFromImageBitmap()")}} に渡すつもりがない場合は、 `transferToImageBitmap()` をまったく呼び出す必要があるかどうかを検討してください。 `ImageBitmap` を受け入れる多くの Web API は、引数として `OffscreenCanvas` も受け入れます。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : 次の場合に発生します。
    - このキャンバスが、ワーカーなどの別のコンテキストスコープに移譲済みである場合
    - このキャンバスのコンテキストモードが {{domxref("OffscreenCanvas.getContext()")}} によって設定されていない場合

## 例

```js
const offscreen = new OffscreenCanvas(256, 256);
const gl = offscreen.getContext("webgl");

// gl コンテキストを使用して描画を行う

offscreen.transferToImageBitmap();
// ImageBitmap { width: 256, height: 256 }

// 次のどちらかを行う
// この `ImageBitmap` を `ImageBitmapRenderingContext.transferFromImageBitmap` に渡す
// または
// この `ImageBitmap` を他の Web API で使用し、 `ImageBitmap.close()` を呼び出す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("OffscreenCanvas")}}
- {{domxref("ImageBitmapRenderingContext.transferFromImageBitmap")}}

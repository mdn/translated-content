---
title: "CanvasCaptureMediaStreamTrack: requestFrame() メソッド"
short-title: requestFrame()
slug: Web/API/CanvasCaptureMediaStreamTrack/requestFrame
l10n:
  sourceCommit: 7fb6ccccf88b71712c1b603bed7092dbb622b698
---

{{APIRef("Media Capture and Streams")}}

**`requestFrame()`** は {{domxref("CanvasCaptureMediaStreamTrack")}} インターフェイスのメソッドで、フレームをキャンバスから取り込んでストリームに送信することをリクエストします。

描画やフレームの取り込みのタイミングを慎重に制御する必要のあるアプリケーションは、フレームを取り込む時を直接指定するのに `requestFrame()` を使用することができます。

フレームの自動取り込みを避け、フレームが `requestFrame()` が呼ばれた時だけ取り込まれるようにするには、ストリームを生成する時に {{domxref("HTMLCanvasElement.captureStream", "captureStream()")}} メソッドに 0 の値を指定します。

## 構文

```js-nolint
requestFrame()
```

### 返値

なし ({{jsxref("undefined")}})。

## 使用上の注意

現在のところ、キャンバスのオリジンがクリーンでない場合に、例外が発生しないことを指摘する課題が仕様にあります。これは将来変更される可能性があるため、事前に計画を立てて `SecurityError` などの例外に注意するのが賢明でしょう（発生する可能性のある固有のエラーは仕様に記載されていませんが、これはその可能性があります）。

## 例

```js
// 取り込むキャンバス要素を探す
const canvasElt = document.querySelector("canvas");

// ストリームを取得する
const stream = canvasElt.captureStream(25); // 25 FPS

// キャンバスの現在の状態をフレームとしてストリームに送信する
stream.getVideoTracks()[0].requestFrame();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CanvasCaptureMediaStreamTrack")}}: 所属するインターフェイス
- {{HTMLElement("canvas")}}

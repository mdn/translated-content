---
title: "HTMLCanvasElement: captureStream() メソッド"
slug: Web/API/HTMLCanvasElement/captureStream
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("Media Capture and Streams")}}

{{domxref("HTMLCanvasElement")}} の **`captureStream()`** メソッドは、 {{domxref("MediaStream")}} を返します。これは {{domxref("CanvasCaptureMediaStreamTrack")}} を含んでおり、このキャンバスの内容をリアルタイムに動画キャプチャします。

## 構文

```js-nolint
captureStream(frameRate)
```

### 引数

- `frameRate` {{optional_inline}}
  - : 各フレームのキャプチャレートを示す倍精度浮動小数点値です。設定されていない場合、キャンバスが変化するたびに新しいフレームがキャプチャされます。`0` に設定すると、フレームは自動的にキャプチャされません。代わりに、返されたトラックの {{domxref("CanvasCaptureMediaStreamTrack.requestFrame", "requestFrame()")}} メソッドが呼び出されたときにのみ、キャプチャされます。

### 返値

{{domxref("MediaStream")}} オブジェクトへの参照です。その中に
{{domxref("CanvasCaptureMediaStreamTrack")}} が 1 つあります。

### 例外

- `NotSupportedError` {{domxref("DOMException")}}

  - : `frameRate` が負の値であった場合に発生します。

- `SecurityError` {{domxref("DOMException")}}
  - : ビットマップのオリジンがクリーンではありません。
    そのコンテンツの少なくとも一部が、文書そのものが読み込まれたサイトとは別のサイトから読み込まれたものであるか、その可能性があります。

## 例

```js
// キャプチャしたい canvas 要素を取得
const canvasElt = document.querySelector("canvas");

// ストリームの取得
const stream = canvasElt.captureStream(25); // 25 FPS

// 取得したストリームに対して何らかの処理を行う
// 例：RTCPeerConnection を使って別のコンピュータに送信
// ここで pc は既に生成された RTCPeerConnection オブジェクト
stream.getTracks().forEach((track) => pc.addTrack(track, stream));
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLMediaElement.captureStream()")}} - メディア要素からストリームをキャプチャするメソッド
- {{domxref("MediaStream")}}
- {{domxref("Media Capture and Streams API")}}

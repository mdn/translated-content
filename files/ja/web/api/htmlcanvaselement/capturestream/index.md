---
title: HTMLCanvasElement.captureStream()
slug: Web/API/HTMLCanvasElement/captureStream
---

{{APIRef("Media Capture and Streams")}}{{SeeCompatTable}}

**`HTMLCanvasElement.captureStream()`** メソッドは、canvas の前面をリアルタイムにキャプチャした動画を {{domxref("CanvasCaptureMediaStream")}} として返すメソッドです。

## 構文

```
MediaStream = canvas.captureStream(frameRate);
```

### 引数

- `frameRate` {{optional_inline}}
  - : キャプチャする際のフレームレートを倍精度浮動小数点数で指定します。指定しなかった場合、canvas が変化するたびにフレームが新しくキャプチャされます。0 を指定した場合、フレームが 1 枚だけキャプチャされます。

### 返値

{{domxref("MediaStream")}} オブジェクトへの参照を返します。

## 使用例

```js
// キャプチャしたい canvas 要素を取得
var canvasElt = document.querySelector('canvas');

// ストリームの取得
var stream = canvasElt.captureStream(25); // 25 FPS

// 取得したストリームに対して何らかの処理を行う
// 例：RTCPeerConnection を使って別のコンピュータに送信
// ここで pc は既に生成された RTCPeerConnection オブジェクト
pc.addStream(stream);
```

## 仕様書

| 仕様書                                                                                                                                                                                                                   | 策定状況                                             | 備考     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------- | -------- |
| {{SpecName('Media Capture DOM Elements', '#widl-HTMLCanvasElement-captureStream-CanvasCaptureMediaStream-double-frameRate', 'HTMLCanvasElement.captureStream()')}} | {{Spec2('Media Capture DOM Elements')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.HTMLCanvasElement.captureStream")}}

## 関連情報

- {{domxref("CanvasCaptureMediaStream")}} - 返値のインターフェイス
- {{domxref("HTMLMediaElement.captureStream()")}} - media 要素からストリームをキャプチャするメソッド
- {{domxref("MediaStream")}}
- {{domxref("Media Capture and Streams API")}}

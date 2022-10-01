---
title: CanvasCaptureMediaStreamTrack.requestFrame()
slug: Web/API/CanvasCaptureMediaStreamTrack/requestFrame
---

{{APIRef("Media Capture and Streams")}}

{{domxref("CanvasCaptureMediaStreamTrack")}} のメソッド **`requestFrame()`** はフレームをキャンバスから取り込んでストリームに送信することを依頼します。描画やフレームの取り込みのタイミングを慎重に制御する必要のあるアプリケーションは、フレームを取り込む時を直接指定するのに `requestFrame()` を使用することができます。

フレームの自動取り込みを避け、フレームが `requestFrame()` が呼ばれた時だけ取り込まれるようにするには、ストリームを生成する時に {{domxref("HTMLCanvasElement.captureStream", "captureStream()")}} メソッドに 0 の値を指定します。

## 構文

```
stream.requestFrame();
```

### 戻り値

`undefined`

## 使用上の注意

今のところ、キャンバスのオリジンが明確でなくても例外を投げないことが、仕様でフラグ付けされた問題点です。将来は変わるでしょうが、事前に計画をし `SecurityError` のような例外(投げられる特定のエラーが仕様書では言及されていませんが、これが有力な候補です) を監視することが賢明です。

## 例

```js
// 取り込むキャンバス要素を探す
var canvasElt = document.getElementsByTagName("canvas")[0];

// ストリームを取得する
var stream = canvasElt.captureStream(25); // 25 FPS

// キャンバスの現在の状態をフレームとしてストリームに送信する
stream.getVideoTracks()[0].requestFrame();
```

## 仕様

| 仕様書                                                                                                                                                                               | ステータス                                           | コメント |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------- | -------- |
| {{SpecName('Media Capture DOM Elements', '#dom-canvascapturemediastreamtrack-requestframe', 'CanvasCaptureMediaStream.requestFrame()')}} | {{Spec2('Media Capture DOM Elements')}} | 初期定義 |

## ブラウザー実装状況

{{Compat("api.CanvasCaptureMediaStreamTrack.requestFrame")}}

## 関連情報

- {{domxref("CanvasCaptureMediaStream")}} 、属するインターフェース。
- {{HTMLElement("canvas")}}

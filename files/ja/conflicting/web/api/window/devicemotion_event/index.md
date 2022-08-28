---
title: Window.ondevicemotion
slug: conflicting/Web/API/Window/devicemotion_event
tags:
  - API
  - Device Orientation
  - Event Handler
  - Mobile
  - Motion
  - Orientation
  - Property
  - Reference
  - イベントハンドラー
  - プロパティ
  - モバイル
  - 向き
  - 端末の向き
translation_of: Web/API/Window/ondevicemotion
original_slug: Web/API/Window/ondevicemotion
---
{{APIRef("Device Orientation Events")}}

Windows に対して送信される {{domxref("Window/devicemotion_event", "devicemotion")}} イベントのためのイベントハンドラーです。

## 構文

```
window.ondevicemotion = funcRef;
```

`funcRef` のところは関数への参照です。この関数は発生した動きを説明する {{DOMxRef("DeviceMotionEvent")}} オブジェクトを受け取ります。

## 仕様書

| 仕様書                                       | 状態                                     | 備考                |
| -------------------------------------------- | ---------------------------------------- | ------------------- |
| {{SpecName("Device Orientation")}} | {{Spec2("Device Orientation")}} | Initial definition. |

## ブラウザーの互換性

{{Compat("api.Window.ondevicemotion")}}

## 関連情報

- {{domxref("Window/devicemotion_event", "devicemotion")}}
- {{DOMxRef("DeviceMotionEvent")}}
- [端末の向きの検出](/ja/docs/Web/API/Detecting_device_orientation)

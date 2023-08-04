---
title: "DeviceMotionEvent: DeviceMotionEvent() コンストラクター"
short-title: DeviceMotionEvent()
slug: Web/API/DeviceMotionEvent/DeviceMotionEvent
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("Device Orientation Events")}}

**`DeviceMotionEvent()`** コンストラクターは、新しい {{DOMxRef("DeviceMotionEvent")}} オブジェクトを作成します。

## 構文

```js-nolint
new DeviceMotionEvent(type)
new DeviceMotionEvent(type, options)
```

### 引数

- `type`
  - : 文字列で、このイベントの名前が入ります。
    大文字小文字の区別があり、ブラウザーは常に `devicemotion` に設定します。
- `options` {{Optional_Inline}}
  - : オブジェクトで、_{{domxref("Event/Event", "Event()")}} に定義されているプロパティに加えて_、以下のプロパティを持つことができます。
    - `acceleration`
      - : {{domxref("DeviceMotionEventAcceleration")}} オブジェクトで、端末の加速度を X、Y、Z の 3 軸で表します。
        加速度は [m/s²](https://ja.wikipedia.org/wiki/メートル毎秒毎秒) で表されます。
    - `accelerationIncludingGravity`
      - : {{domxref("DeviceMotionEventAcceleration")}} オブジェクトで、端末の加速度を X、Y、Z の 3 軸と、重力の影響で表します。
        加速度は [m/s²](https://ja.wikipedia.org/wiki/メートル毎秒毎秒) で表されます。
    - `rotationRate`
      - : {{domxref("DeviceMotionEventRotationRate")}} オブジェクトで、端末の向きの変化率をアルファ、ベータ、ガンマの 3 方向の軸で表します。
        回転率は秒あたりの角度で表されます。
    - `interval` {{Optional_Inline}}
      - : 端末からデータを取得する時間間隔をミリ秒単位で表します。既定値では `0` です。

### 返値

新しい {{domxref("DeviceMotionEvent")}} オブジェクトです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

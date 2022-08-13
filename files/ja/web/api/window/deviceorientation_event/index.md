---
title: 'Window: deviceorientation イベント'
slug: Web/API/Window/deviceorientation_event
tags:
  - Device Orientation API
  - Sensors
  - Window Event
  - events
translation_of: Web/API/Window/deviceorientation_event
---
{{APIRef}}

`deviceorientation` イベントは、端末の現在の向きを地球座標フレームと比較した場合に、方角センサーから最新のデータが得られた場合に発生します。このデータは端末内部の磁力計から収集されます。詳細については、[向きと動きのデータの説明](/ja/docs/DOM/Orientation_and_motion_data_explained)を参照してください。

| バブリング                   | いいえ                                                   |
| ---------------------------- | -------------------------------------------------------- |
| キャンセル                   | 不可                                                     |
| インターフェイス             | {{domxref("DeviceOrientationEvent")}}         |
| イベントハンドラープロパティ | {{domxref("window.ondeviceorientation")}} |

## 例

```js
if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function(event) {
        // alpha: rotation around z-axis
        var rotateDegrees = event.alpha;
        // gamma: left to right
        var leftToRight = event.gamma;
        // beta: front back motion
        var frontToBack = event.beta;

        handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
    }, true);
}

var handleOrientationEvent = function(frontToBack, leftToRight, rotateDegrees) {
    // do something amazing
};
```

## 仕様書

| 仕様書                                                                                                           | 状態                                     |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| {{SpecName("Device Orientation", "#deviceorientation", "DeviceOrientation event")}} | {{Spec2("Device Orientation")}} |

## ブラウザーの互換性

{{Compat("api.Window.deviceorientation_event")}}

## 関連情報

- {{domxref("Window/devicemotion_event", "devicemotion")}}
- [端末の向きの検出](/ja/docs/Web/API/Detecting_device_orientation)
- [向きと動きのデータの説明](/ja/docs/Web/Guide/Events/Orientation_and_motion_data_explained)
- デスクトップブラウザーで orientation イベントのシミュレーションを行う [orientation-devtool](http://louisremi.github.com/orientation-devtool/)

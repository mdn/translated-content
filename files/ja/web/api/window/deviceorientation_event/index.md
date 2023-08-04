---
title: "Window: deviceorientation イベント"
slug: Web/API/Window/deviceorientation_event
---

{{APIRef}}

`deviceorientation` イベントは、端末の現在の向きを地球座標フレームと比較した場合に、方角センサーから最新のデータが得られた場合に発生します。このデータは端末内部の磁力計から収集されます。詳細については、[向きと動きのデータの説明](/ja/docs/DOM/Orientation_and_motion_data_explained)を参照してください。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>いいえ</td>
    </tr>
    <tr>
      <th scope="row">キャンセル</th>
      <td>不可</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("DeviceOrientationEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>{{domxref("window.ondeviceorientation")}}</td>
    </tr>
  </tbody>
</table>

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

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.Window.deviceorientation_event")}}

## 関連情報

- {{domxref("Window/devicemotion_event", "devicemotion")}}
- [端末の向きの検出](/ja/docs/Web/API/Detecting_device_orientation)
- [向きと動きのデータの説明](/ja/docs/Web/Guide/Events/Orientation_and_motion_data_explained)
- デスクトップブラウザーで orientation イベントのシミュレーションを行う [orientation-devtool](http://louisremi.github.com/orientation-devtool/)

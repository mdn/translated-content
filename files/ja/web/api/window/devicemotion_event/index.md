---
title: "Window: devicemotion イベント"
slug: Web/API/Window/devicemotion_event
---

{{APIRef}}

`devicemotion` イベントは、一定の間隔で発行され、その時点で端末が受けている加速度の物理的な力の量を示します。また、利用可能であれば、回転率に関する情報も提供します。

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
      <td>{{domxref("DeviceMotionEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>{{domxref("Window.ondevicemotion")}}</td>
    </tr>
  </tbody>
</table>

## 例

```js
function handleMotionEvent(event) {

    var x = event.accelerationIncludingGravity.x;
    var y = event.accelerationIncludingGravity.y;
    var z = event.accelerationIncludingGravity.z;

    // Do something awesome.
}

window.addEventListener("devicemotion", handleMotionEvent, true);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.Window.devicemotion_event")}}

## 関連情報

- {{domxref("Window/deviceorientation_event", "deviceorientation")}}
- [DeviceOrientation Event](http://www.w3.org/TR/orientation-event/#devicemotion)

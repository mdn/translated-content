---
title: "Window: devicemotion イベント"
short-title: devicemotion
slug: Web/API/Window/devicemotion_event
l10n:
  sourceCommit: 6d4f585b94068dc0dfd733047fb2229dca38b1eb
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

**`devicemotion`** イベントは、一定の間隔で発行され、その時点で端末が受けている加速度の物理的な力の量を示します。また、利用可能であれば、回転速度に関する情報も提供します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("devicemotion", (event) => {});

ondevicemotion = (event) => {};
```

## イベント型

{{domxref("DeviceMotionEvent")}} です。 {{domxref("Event")}} から継承しています。

{{InheritanceDiagram("DeviceMotionEvent")}}

## イベントプロパティ

- {{DOMxRef("DeviceMotionEvent.acceleration")}} {{ReadOnlyInline}}
  - : X、Y、Z の 3 軸上の端末の加速度を表すオブジェクトです。加速度は [m/s²](https://ja.wikipedia.org/wiki/メートル毎秒毎秒) で表示されます。
- {{DOMxRef("DeviceMotionEvent.accelerationIncludingGravity")}} {{ReadOnlyInline}}
  - : 重力の影響を受けた X、Y、Z の 3 軸上の端末の加速度を表すオブジェクトです。加速度は [m/s²](https://ja.wikipedia.org/wiki/メートル毎秒毎秒) で表示されます。
- {{DOMxRef("DeviceMotionEvent.rotationRate")}} {{ReadOnlyInline}}
  - : アルファ、ベータ、ガンマの 3 つの方向軸における端末の向きの変化速度を表すオブジェクト。回転率は 1 秒あたりの度数で表現されます。
- {{DOMxRef("DeviceMotionEvent.interval")}} {{ReadOnlyInline}}
  - : 端末からデータを取得する時間間隔をミリ秒で表します。

## 例

```js
function handleMotionEvent(event) {
  const x = event.accelerationIncludingGravity.x;
  const y = event.accelerationIncludingGravity.y;
  const z = event.accelerationIncludingGravity.z;

  // 何か素晴らしいことをする
}

window.addEventListener("devicemotion", handleMotionEvent, true);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Window.deviceorientation_event", "deviceorientation")}}
- [DeviceOrientation Event](https://www.w3.org/TR/orientation-event/#devicemotion)

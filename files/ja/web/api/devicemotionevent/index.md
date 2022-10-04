---
title: DeviceMotionEvent
slug: Web/API/DeviceMotionEvent
---

{{apiref("Device Orientation Events")}}{{SeeCompatTable}}

## サマリー

`DeviceMotionEvent` はウェブ開発者にデバイスの位置と向きの変更スピードの情報を提供します。

> **警告:** 現在、Firefox と Chrome は同じ方法で座標を処理しません。これらを使用する際は、注意してください。

## コンストラクター

- {{domxref("DeviceMotionEvent.DeviceMotionEvent","DeviceMotionEvent.DeviceMotionEvent()")}}
  - : 新しい `DeviceMotionEvent` を生成します。

## プロパティ

- {{domxref("DeviceMotionEvent.acceleration")}} {{readonlyinline}}
  - : 3 つの軸 X、Y、Z 上のデバイスの加速度を与えるオブジェクトです。加速度は [m/s2](https://en.wikipedia.org/wiki/Meter_per_second_squared) で表されます。
- {{domxref("DeviceMotionEvent.accelerationIncludingGravity")}} {{readonlyinline}}
  - : X、Y、Z 上のデバイスの加速度を重力度込みで与えるオブジェクトです。加速度は [m/s2](https://en.wikipedia.org/wiki/Meter_per_second_squared) で表されます。
- {{domxref("DeviceMotionEvent.rotationRate")}} {{readonlyinline}}
  - : 3 つの方向軸アルファ、ベータ、ガンマ上のデバイスの向きの変化率を与えるオブジェクトです。回転速度は 1 秒あたりの度数で表されます。
- {{domxref("DeviceMotionEvent.interval")}} {{readonlyinline}}
  - : デバイスからデータを取得する間隔（ミリ秒）を表す数値です。

## 例

```js
window.addEventListener('devicemotion', function(event) {
  console.log(event.acceleration.x + ' m/s2');
});
```

## 仕様

| 仕様                                         | ステータス                               | コメント   |
| -------------------------------------------- | ---------------------------------------- | ---------- |
| {{SpecName('Device Orientation')}} | {{Spec2('Device Orientation')}} | 初期定義。 |

## ブラウザー実装状況

{{Compat("api.DeviceMotionEvent")}}

## 関連項目

- {{ event("deviceorientation") }}
- {{ domxref("DeviceMotionEvent") }}
- {{ event("devicemotion") }}
- [デバイスの方向検出](/ja/docs/WebAPI/Detecting_device_orientation)
- [向きと動作データの説明](/ja/DOM/Orientation_and_motion_data_explained)

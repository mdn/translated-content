---
title: 端末方向イベント
slug: Web/API/Device_orientation_events
l10n:
  sourceCommit: 6754a50ec57c8c9758a65a42691878e5fd1f910a
---

{{DefaultAPISidebar("Device Orientation Events")}}

端末方向イベントは、[端末の物理的な方向を検出](/ja/docs/Web/API/Device_orientation_events/Detecting_device_orientation#processing_orientation_events)したり、[端末の動きを検出](/ja/docs/Web/API/Device_orientation_events/Detecting_device_orientation#processing_motion_events)したりするイベントです。

## 概念と使用方法

モバイル端末には、一般的にジャイロスコープ、コンパス、加速度などのセンサーがあり、端末上で動作するアプリケーションが端末の方向や動きを検出することができます。

方向イベントによって、ユーザーの端末の向きに応じて動作を変えたり、ユーザーが端末を移されたときに反応したりするウェブアプリケーションを書くことができます。

端末方向イベントを使用する典型的な機能には、以下のようなものがあります。

- ウェブベースのゲームにおいて、ユーザーが端末を傾けたり移動させたりすることによって、ゲーム内のキャラクターやオブジェクトの動きを制御することを可能にすること。

- 地図アプリケーションにおいて、端末の位置に基づいて地図の方向を変えたり、ユーザーの動きに合わせて更新される道順を提供したりするため。

- ジェスチャー認識 — 例えば、「シェイク」ジェスチャーを認識し、ユーザーが機器を振ったときに入力エリアをクリアするなどのアクションを実行するために使用します。

> [!NOTE]
> この API はモバイルブラウザーが広く対応しています。デスクトップ専用のブラウザーでは、ハードウェアの違いによる制約もありますが、センサーを搭載した端末でのこの API の主な用途を考えると、これらの制約が重要な意味を持つことはほとんどありません。

## インターフェイス

- {{domxref("DeviceOrientationEvent")}}
  - : 端末の物理的な方向の変化を表します。
- {{domxref("DeviceMotionEvent")}}
  - : 端末の加速度を、回転数に加えて表します。
- {{domxref("DeviceMotionEventAcceleration")}}
  - : 端末が経験している加速度を、 3 軸すべてで表します。
- {{domxref("DeviceMotionEventRotationRate")}}
  - : 端末が回転する速度を、 3 軸すべてで表します。

## イベント

- {{domxref("Window.deviceorientation_event", "deviceorientation")}}
  - : 地球座標フレームと比較した端末の現在の方向に関する、新しいデータが端末から利用できるときに発行されます。
- {{domxref("Window.devicemotion_event", "devicemotion")}}
  - : 一定間隔で発行され、その時点で端末が受けている加速度の物理的な力の大きさと、端末の回転速度を示します。
- {{domxref("Window.deviceorientationabsolute_event", "deviceorientationabsolute")}}
  - : 端末の絶対的な方向が変化したときに発行されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Device Orientation & Motion](https://web.dev/articles/device-orientation) (web.dev)

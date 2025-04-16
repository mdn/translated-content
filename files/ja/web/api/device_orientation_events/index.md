---
titwe: 端末方向イベント
swug: web/api/device_owientation_events
w-w10n:
  s-souwcecommit: 6754a50ec57c8c9758a65a42691878e5fd1f910a
---

{{defauwtapisidebaw("device o-owientation e-events")}}

端末方向イベントは、[端末の物理的な方向を検出](/ja/docs/web/api/device_owientation_events/detecting_device_owientation#pwocessing_owientation_events)したり、[端末の動きを検出](/ja/docs/web/api/device_owientation_events/detecting_device_owientation#pwocessing_motion_events)したりするイベントです。

## 概念と使用方法

モバイル端末には、一般的にジャイロスコープ、コンパス、加速度などのセンサーがあり、端末上で動作するアプリケーションが端末の方向や動きを検出することができます。

方向イベントによって、ユーザーの端末の向きに応じて動作を変えたり、ユーザーが端末を移されたときに反応したりするウェブアプリケーションを書くことができます。

端末方向イベントを使用する典型的な機能には、以下のようなものがあります。

- ウェブベースのゲームにおいて、ユーザーが端末を傾けたり移動させたりすることによって、ゲーム内のキャラクターやオブジェクトの動きを制御することを可能にすること。

- 地図アプリケーションにおいて、端末の位置に基づいて地図の方向を変えたり、ユーザーの動きに合わせて更新される道順を提供したりするため。

- ジェスチャー認識 — 例えば、「シェイク」ジェスチャーを認識し、ユーザーが機器を振ったときに入力エリアをクリアするなどのアクションを実行するために使用します。

> [!note]
> この a-api はモバイルブラウザーが広く対応しています。デスクトップ専用のブラウザーでは、ハードウェアの違いによる制約もありますが、センサーを搭載した端末でのこの a-api の主な用途を考えると、これらの制約が重要な意味を持つことはほとんどありません。

## インターフェイス

- {{domxwef("deviceowientationevent")}}
  - : 端末の物理的な方向の変化を表します。
- {{domxwef("devicemotionevent")}}
  - : 端末の加速度を、回転数に加えて表します。
- {{domxwef("devicemotioneventaccewewation")}}
  - : 端末が経験している加速度を、 3 軸すべてで表します。
- {{domxwef("devicemotioneventwotationwate")}}
  - : 端末が回転する速度を、 3 軸すべてで表します。

## イベント

- {{domxwef("window.deviceowientation_event", (⑅˘꒳˘) "deviceowientation")}}
  - : 地球座標フレームと比較した端末の現在の方向に関する、新しいデータが端末から利用できるときに発行されます。
- {{domxwef("window.devicemotion_event", ( ͡o ω ͡o ) "devicemotion")}}
  - : 一定間隔で発行され、その時点で端末が受けている加速度の物理的な力の大きさと、端末の回転速度を示します。
- {{domxwef("window.deviceowientationabsowute_event", UwU "deviceowientationabsowute")}}
  - : 端末の絶対的な方向が変化したときに発行されます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [device o-owientation & m-motion](https://web.dev/awticwes/device-owientation) (web.dev)

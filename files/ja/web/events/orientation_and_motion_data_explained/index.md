---
title: 方向および動きとして示されるデータ
slug: Web/Events/Orientation_and_motion_data_explained
tags:
  - 中級者
  - Mobile
  - Motion
  - NeedsContent
  - 向き
  - rotation
translation_of: Web/Events/Orientation_and_motion_data_explained
original_slug: Web/Guide/Events/Orientation_and_motion_data_explained
---
## 概要

方向や動きのイベントを使用するときは、ブラウザーから与えられる値の意味を理解することが重要です。この記事では操作時の座標システムに関する詳細情報と、それらの使い方を説明します。

## 座標フレームについて

**座標フレーム** (coordinate frame) は、オブジェクトに関する 3 軸 (X, Y, Z) の方向が定義されているシステムです。方向や動きのイベントを使用するときに考慮する座標フレームは 2 つあります。

### 地球座標フレーム

地球座標フレーム (Earth coordinate frame) は、地球の中心に固定されている座標フレームです。すなわち、軸は重力によって引かれる力および標準的な磁北方向に基づいて揃えられます。私たちは大文字 ("X"、"Y"、"Z") を、地球座標フレームの軸を示すために使用します。

 - **X** 軸は地面に沿ってたどり、Y 軸と直交します。また、軸の正の方向が東を指します (従って、負の方向は西を指します)。
 - **Y** 軸は地面に沿ってたどり、正の方向が真北 (すなわち北極であり、磁北ではありません) を、負の方向が真南を指します。
 - **Z** 軸は地面に直交します。これは、端末と地球の中心との間に引かれた線と考えてください。Z 座標の値は正の方向が上向き (地球の中心から遠ざかる)、負の方向が下向き (地球の中心に向かう) です。

### 端末座標フレーム

端末座標フレーム (Device coordinate frame) は、端末の中心に固定された座標フレームです。私たちは小文字 ("x"、"y"、"z") を、端末座標フレームの軸を示すために使用します。

![](axes.png)

 - **x** 軸は画面の水平面にあり、正の方向が右を、負の方向が左を指します。
 - **y** 軸は画面の水平面にあり、正の方向が上端側を、負の方向が下端側を指します。
 - **z** 軸は画面やキーボードに直交しており、正の方向が画面から外側へ伸びていきます。

> **Note:** 携帯電話やタブレットでは、端末の方向が常に画面の標準的な方向に対して考慮され、これは、ほとんどの端末では「ポートレート」 (縦) の方向になります。ノートパソコンでは、方向はキーボードに対して考慮されます。補正するために端末の方向の変化を検知したい場合は、`orientationchange` イベントが使用できます。

## 回転について

回転は、端末座標フレームと地球座標フレームとの度合いの違いという点から各軸で表現され、またそれは度単位で測られます。

### Alpha

z 軸を中心にした回転、すなわち端末をひねるようにすると、 **alpha** 回転角が変化します。

![](alpha.png)

alpha 角は端末の上端が地球の北極をまっすぐ向いているときが 0 度であり、端末が左へ回転するのに従って増加します。

### Beta

x 軸を中心にした回転、すなわち端末を向こう側やユーザー側へ向けて傾けると、 **beta** 回転角が変化します。

![Positive beta pitches the device forward toward the user.](beta2.png)

beta 角は端末の上端および下端から地球の表面までの距離がどちらも同じであるときが 0 度であり、端末を前方へ傾けるに従って 180 度まで増加、後方へ傾けるに従って -180 度まで減少します。

### Gamma

y 軸を中心にした回転、すなわち端末を左右に傾けると、 **gamma** 回転角が変化します。

![](gamma.png)

gamma 角は端末の左端および右端から地球の表面までの距離がどちらも同じであるときが 0 度であり、端末を右へ傾けるのに従って 90 度まで増加、左へ傾けるのに従って -90 度まで減少します。

<section id="Quick_links"><ul><li><a href="/ja/docs/Web/Events/Detecting_device_orientation">端末の向きの検出</a></li><li>{{domxref("DeviceOrientationEvent")}}</li><li>{{domxref("DeviceMotionEvent")}}</li><li><a href="/ja/docs/Web/Events/Using_device_orientation_with_3D_transforms">3D 座標変換における deviceorientation の使用</a></li><li><a href="/ja/docs/Learn/JavaScript/Building_blocks/Events">イベント入門</a></li></ul></section>

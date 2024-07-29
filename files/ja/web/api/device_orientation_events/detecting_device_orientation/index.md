---
title: 端末の方向の検出
slug: Web/API/Device_orientation_events/Detecting_device_orientation
l10n:
  sourceCommit: 6754a50ec57c8c9758a65a42691878e5fd1f910a
---

{{DefaultAPISidebar("Device Orientation Events")}}{{securecontext_header}}

次第に、ウェブを利用可能な端末は、自身の**方向**を特定できるようになってきました。つまり端末は、重力との関係による自身の向きの変化を示すデータを報告できます。特に携帯電話のようなハンドヘルド端末は、表示内容が直立し続けるよう自動的に回転させるためにこの情報を使用できます。画面の幅が高さより大きくなるように端末を回転させたときは、ウェブコンテンツをワイドスクリーン表示にします。

方向の情報を制御する JavaScript イベントが 2 つあります。ひとつは {{domxref("DeviceOrientationEvent")}} であり、加速度センサーが端末の方向の変化を検出したときに発生します。 orientation イベントが報告するデータを受け取って処理することで、ユーザーが端末を動かすことによる方向や高さの変化に対してインタラクティブに応答できるようになります。

もうひとつのイベントは {{domxref("DeviceMotionEvent")}} であり、加速度が変化したときに発生します。こちらは方向ではなく加速度の変化を監視することが、{{domxref("DeviceOrientationEvent")}} との違いです。一般的に {{domxref("DeviceMotionEvent")}} を検出できるセンサーには、可動部があるストレージ装置を保護するためノートパソコンに内蔵するものも含みます。{{domxref("DeviceOrientationEvent")}} は、モバイル端末でとても一般的です。

## orientation イベントの処理

方向の変化を受け取り始めるために必要なことは、 {{domxref("Window.deviceorientation_event", "deviceorientation")}} イベントを待ち受けすることだけです。

```js
window.addEventListener("deviceorientation", handleOrientation, true);
```

イベントリスナー（この場合は `handleOrientation()` と呼ばれる JavaScript 関数）を登録すると、リスナー関数は定期的に更新された方向データを取得します。

orientation イベントは 4 つの値を持ちます。

- {{domxref("DeviceOrientationEvent.absolute")}}
- {{domxref("DeviceOrientationEvent.alpha")}}
- {{domxref("DeviceOrientationEvent.beta")}}
- {{domxref("DeviceOrientationEvent.gamma")}}

イベントハンドラー関数は以下のようなものです。

```js
function handleOrientation(event) {
  const absolute = event.absolute;
  const alpha = event.alpha;
  const beta = event.beta;
  const gamma = event.gamma;

  // 新たな方向データに基づいて処理を行う
}
```

> **メモ:** [parallax](https://github.com/wagerfield/parallax) は、モバイル端末の加速度センサーとジャイロスコープのデータを正規化するためのポリフィルです。これは、端末の方向に対する対応の違いを克服するのに有益です。

### 方向として示される値

それぞれの軸で報告される値は、標準座標系の軸を中心にした回転量を表します。これらは[方向および動きとして示されるデータの説明](/ja/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)の記事で詳しく説明しており、ここでは概要を記載します。

- {{domxref("DeviceOrientationEvent.alpha")}} の値は z 軸を中心にした端末の動きを表し、0 以上 360 未満の範囲による度数で表されます。
- {{domxref("DeviceOrientationEvent.beta")}} の値は x 軸を中心にした端末の動きを表し、-180 以上 180 未満の範囲の値による度数で表されます。これは端末の前後の動きです。
- {{domxref("DeviceOrientationEvent.gamma")}} の値は y 軸を中心にした端末の動きを表し、-90 以上 90 未満の範囲の値による度数で表されます。これは端末の左右の動きです。

### 例

このサンプルは方向を検出可能な端末上で、 {{domxref("Window.deviceorientation_event", "deviceorientation")}} イベントに対応するブラウザーで実行する場合に動作します。

庭にボールがあると考えてください。

```html-nolint
<div class="garden">
  <div class="ball"></div>
</div>
端末を地面に並行に置いてください。 X 軸と Y 軸に沿って回転させ、ボールがそれぞれ上下左右に移動するのを確認しましょう。
<pre class="output"></pre>
```

庭の幅は 200 ピクセルであり（小さな庭です）、ボールは中心にあります。

```css
.garden {
  position: relative;
  width: 200px;
  height: 200px;
  border: 5px solid #ccc;
  border-radius: 10px;
}

.ball {
  position: absolute;
  top: 90px;
  left: 90px;
  width: 20px;
  height: 20px;
  background: green;
  border-radius: 100%;
}
```

端末を動かすと、その動きに応じてボールが移動します。

```js
const ball = document.querySelector(".ball");
const garden = document.querySelector(".garden");
const output = document.querySelector(".output");

const maxX = garden.clientWidth - ball.clientWidth;
const maxY = garden.clientHeight - ball.clientHeight;

function handleOrientation(event) {
  let x = event.beta; // [-180,180) の範囲で角度を表す
  let y = event.gamma; // [-90,90) の範囲で角度を表す

  output.textContent = `beta: ${x}\n`;
  output.textContent += `gamma: ${y}\n`;

  // 端末をひっくり返したくはないため、
  // x の値を [-90,90] の範囲に制限する
  if (x > 90) {
    x = 90;
  }
  if (x < -90) {
    x = -90;
  }

  // 計算を容易にするため、x および y の値の範囲を
  // 0 から 180 に変換する
  x += 90;
  y += 90;

  // 10 は、ボールのサイズの半分である。
  // これにより、配置場所をボールの中心に合わせる
  ball.style.left = `${(maxY * y) / 180 - 10}px`; // Y 軸を中心に端末を移動させると、ボールが水平に移動
  ball.style.top = `${(maxX * x) / 180 - 10}px`; // X 軸を中心に端末を移動させると、ボールが垂直に移動
}

window.addEventListener("deviceorientation", handleOrientation);
```

{{LiveSampleLink("Orientation_example", "こちらをクリック")}}すると、新しいウィンドウでこの例を開きます。 {{domxref("Window.deviceorientation_event", "deviceorientation")}} はどのブラウザーでも別オリジンの {{HTMLElement("iframe")}} では動作しないからです。

{{EmbedLiveSample('Orientation_example', '230', '260')}}

## motion イベントの処理

motion イベントは orientation イベントと同じ方法で扱えますが、イベント名は {{domxref("Window/devicemotion_event", "devicemotion")}} になります。

```js
window.addEventListener("devicemotion", handleMotion, true);
```

実際どのように変化したかの情報は、 {{domxref("DeviceMotionEvent")}} オブジェクトが提供します。これはイベントリスナー（この例では `handleMotion()`）の引数として渡されます。

motion イベントは 4 つのプロパティを持ちます。

- {{domxref("DeviceMotionEvent.acceleration")}}
- {{domxref("DeviceMotionEvent.accelerationIncludingGravity")}}
- {{domxref("DeviceMotionEvent.rotationRate")}}
- {{domxref("DeviceMotionEvent.interval")}}

### 動きとして示される値

{{domxref("DeviceMotionEvent")}} オブジェクトはウェブ開発者に、端末の位置や方向が変化した速度の情報を提供します。変化量は 3 つの軸 (詳しくは[方向および動きとして示されるデータの説明](/ja/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)をご覧ください) に沿って表します。

{{domxref("DeviceMotionEvent.acceleration","acceleration")}} および {{domxref("DeviceMotionEvent.accelerationIncludingGravity","accelerationIncludingGravity")}} で対応する軸は以下のとおりです。

- `x`
  - : 西から東へ向かう軸を表します。
- `y`
  - : 南から北へ向かう軸を表します。
- `z`
  - : 地面から直立する軸を表します。

{{domxref("DeviceMotionEvent.rotationRate","rotationRate")}} では状況が若干異なります。こちらの情報はそれぞれ以下のように対応します:

- `alpha`
  - : 画面（デスクトップ環境ではキーボード）から直立する軸を表します。
- `beta`
  - : 画面の表面（デスクトップ環境ではキーボード）の左から右へ向かう軸に沿った回転量を表します。
- `gamma`
  - : 画面の表面（デスクトップ環境ではキーボード）の下から上へ向かう軸に沿った回転量を表します。

最後に {{domxref("DeviceMotionEvent.interval","interval")}} は、端末からデータを取得する間隔をミリ秒単位で表します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DeviceOrientationEvent")}}
- {{domxref("DeviceMotionEvent")}}
- [方向および動きとして示されるデータの説明](/ja/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)
- [3D 座標変換での deviceorientation の使用](/ja/docs/Web/API/Device_orientation_events/Using_device_orientation_with_3D_transforms)
- [Cyber Orb: 端末の向きを使用した 2D 迷路ゲーム](/ja/docs/Games/Tutorials/HTML5_Gamedev_Phaser_Device_Orientation)

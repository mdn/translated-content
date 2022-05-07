---
title: 'MediaDevices: devicechange イベント'
slug: Web/API/MediaDevices/devicechange_event
tags:
  - API
  - Audio
  - Media
  - Media Capture and Streams API
  - Media Streams API
  - MediaDevices
  - Reference
  - Video
  - Event
browser-compat: api.MediaDevices.devicechange_event
translation_of: Web/API/MediaDevices/devicechange_event
original_slug: Web/API/MediaDevices/ondevicechange
---
{{APIRef}}

`devicechange` はイベントで、カメラ、マイク、スピーカーなどのメディア機器がシステムに接続・切断されるたびに {{domxref("MediaDevices")}} へ送られます。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener('devicechange', event => { });

ondevicechange = event => { };
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

この例では、 `updateDeviceList()` という関数を作成します。この関数は {{domxref("MediaDevices.getUserMedia()")}} がストリームの取得に成功したときに一度呼び出され、その後で機器一覧が変更されるたびに呼び出されます。ブラウザーのウィンドウに、オーディオ機器とビデオ機器の 2 つの一覧が表示され、機器のラベル（名前）と入力機器か出力機器かが表示されます。この例では `devicechange` イベントに対するハンドラーを提供しているので、メディア機器がサンプルを実行している機器に接続されたり取り外されたりするたびに、一覧が更新されます。

```html hidden
<p>Click the start button below to begin the demonstration.</p>
<div id="startButton" class="button">
  Start
</div>
<video id="video" width="160" height="120" autoplay></video><br>

<div class="left">
  <h2>Audio devices:</h2>
  <ul class="deviceList" id="audioList"></ul>
</div>
<div class="right">
  <h2>Video devices:</h2>
  <ul class="deviceList" id="videoList"></ul>
</div>

<div id="log"></div>
```

```css hidden
body {
  font: 14px "Open Sans", "Arial", sans-serif;
}

video {
  margin-top: 20px;
  border: 1px solid black;
}

.button {
  cursor: pointer;
  width: 160px;
  border: 1px solid black;
  font-size: 16px;
  text-align: center;
  padding-top: 2px;
  padding-bottom: 4px;
  color: white;
  background-color: darkgreen;
}

h2 {
  margin-bottom: 4px;
}

.left {
  float:left;
  width: 48%;
  margin-right: 2%
}

.right {
  float:right;
  width: 48%;
  margin-left: 2%
}

.deviceList {
  border: 1px solid black;
  list-style-type: none;
  margin-top: 2px;
  padding: 6px;
}
```

```js hidden
let videoElement = document.getElementById("video");
let logElement = document.getElementById("log");

function log(msg) {
  logElement.innerHTML += msg + "<br>";
}

document.getElementById("startButton").addEventListener("click", function() {
  navigator.mediaDevices.getUserMedia({
    video: {
      width: 160,
      height: 120,
      frameRate: 30
    },
    audio: {
      sampleRate: 44100,
      sampleSize: 16,
      volume: 0.25
    }
  }).then(stream => {
      videoElement.srcObject = stream;
      updateDeviceList();
    })
    .catch(err => log(err.name + ": " + err.message));
}, false);
```

オーディオ機器とビデオ機器の一覧に使用される {{HTMLElement("ul")}} 要素への参照を保持するためのグローバル変数を用意します。

```js
let audioList = document.getElementById("audioList");
let videoList = document.getElementById("videoList");
```

#### 機器一覧の取得と描画

`updateDeviceList()` メソッドでは、現在のメディア機器の一覧を取得した後、先ほど用意したグローバル変数を用いて、表示されているオーディオ機器とビデオ機器の一覧を更新します。

```js
function updateDeviceList() {
  navigator.mediaDevices.enumerateDevices()
  .then(function(devices) {
    audioList.innerHTML = "";
    videoList.innerHTML = "";

    devices.forEach(device => {
      let elem = document.createElement("li");
      let [kind, type, direction] = device.kind.match(/(\w+)(input|output)/i);

      elem.innerHTML = "<strong>" + device.label + "</strong> (" + direction + ")";
      if (type === "audio") {
        audioList.appendChild(elem);
      } else if (type === "video") {
        videoList.appendChild(elem);
      }
    });
  });
}
```

`updateDeviceList()` は {{domxref("navigator.MediaDevices")}} プロパティで参照している {{domxref("MediaDevices")}} オブジェクトの {{domxref("MediaDevices.enumerateDevices", "enumerateDevices()")}} の関数呼び出しが全体を占め、 `enumerateDevices()` から返されるプロミス ({{jsxref("promise")}}) が履行されたときに実行されるコードもあります。
履行ハンドラーは、機器一覧の準備ができたときに呼び出されます。
この一覧は履行ハンドラーへ {{domxref("MediaDeviceInfo")}} オブジェクトの配列として渡され、それぞれがメディアの入力機器や出力機器を表しています。

すべての機器の情報を出力するために、 {{jsxref("Array.forEach", "forEach()")}} ループを使用しています。それぞれの機器で、ユーザーへこの機器情報を見せるために新しい {{HTMLElement("li")}} オブジェクトを作成します。

`let [kind, type, direction] = device.kind.match(/(\w+)(input|output)/i);` の行について詳しく説明します。ここでは[分割代入](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)（[ECMAScript 6](/ja/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_6_support_in_Mozilla)の新しい機能）を使用しており、 {{jsxref("String.match()")}} によって返された配列の値を `kind`、`type`、`direction` の変数へ代入しています。なぜこのようなことをするのかというと、 {{domxref("MediaDeviceInfo.kind")}} の文字列は、 "audioinput" や "videooutput" のように、メディア種別とメディアフローの向きの 2 つの情報を含んでいるためです。この行で、タイプ（"audio" または "video"）と方向（"input" と "output"）を取り出すことで、一覧に表示する文字列を作成することができます。

太字のデバイス名と括弧で囲まれた方向を含む文字列が作成されると、デバイスタイプに基づいて`audioList`または`videoList`対応する一覧へ{{domxref("Node.appendChild", "appendChild()")}}の呼び出しによって追加されます。

### 機器一覧の変更の扱い

`updateDeviceList()` は 2 か所呼び出されます。 1 か所目は {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} のプロミスの履行ハンドラーであり、ストリームが開かれた時に最初に一覧を埋めます。 2 か所目は {{domxref("MediaDevices/devicechange_event", "devicechange")}} のイベントハンドラーからです。

```js
navigator.mediaDevices.ondevicechange = event => {
  updateDeviceList();
}
```

このコードでは、ユーザがカメラ、マイク、他のメディア機器を接続したり、電源を入れたり、電源を切ったりする度に、 `updateDeviceList()` を呼び出し接続された機器一覧を再描画します。

### 結果

{{ EmbedLiveSample('Example', 600, 460, "", "", "", "camera;microphone") }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

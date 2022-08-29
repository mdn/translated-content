---
title: BaseAudioContext.createGain()
slug: Web/API/BaseAudioContext/createGain
tags:
  - API
  - Audio
  - AudioContext
  - BaseAudioContext
  - メソッド
  - リファレンス
  - ボリューム制御
  - ウェブ音声 API
  - createGain
  - sound
browser-compat: api.BaseAudioContext.createGain
translation_of: Web/API/BaseAudioContext/createGain
original_slug: Web/API/AudioContext/createGain
---
{{ APIRef("Web Audio API") }}

`createGain()` は {{ domxref("BaseAudioContext") }} インターフェイスのメソッドで、 {{ domxref("GainNode") }} を生成します。これは、音声グラフの全体的なゲイン（音量）を調整するのに使用します。

> **Note:** {{domxref("GainNode.GainNode", "GainNode()")}} コンストラクターは {{domxref("GainNode")}} を作成するための推奨される方法です。 [AudioNode の作成](/ja/docs/Web/API/AudioNode#creating_an_audionode)を参照してください。

## 構文

```js
createGain()
```

### 引数

なし。

### 返値

1 つ以上の音声ソースを入力とし、ノードの {{domxref("GainNode")}} で指定されたレベルにゲイン（音量）が調整された音声を出力する {{domxref("GainNode.gain")}} です。 [a-rate](/ja/docs/Web/API/AudioParam#a-rate) 引数で指定された音量にゲイン調整された音声を出力します。

## 例

次の例は {{domxref("AudioContext")}} を使って `GainNode` を作成し、Mute ボタンをクリックしたときに `gain` プロパティの値を変更して音声をミュートしたりミュート解除したりする基本的な使用方法を示しています。

以下のスニペットはそのままでは動作しません。完全な動作例については、 [Voice-change-O-matic](https://mdn.github.io/voice-change-o-matic/)（[ソースを閲覧](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js)）デモをご覧ください。

```html
<div>
  <button class="mute">Mute button</button>
</div>
```

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var gainNode = audioCtx.createGain();
var mute = document.querySelector('.mute');
var source;

if (navigator.mediaDevices.getUserMedia) {
 navigator.mediaDevices.getUserMedia (
   // constraints - only audio needed for this app
   {
     audio: true
   },

   // Success callback
   function(stream) {
     source = audioCtx.createMediaStreamSource(stream);

   },

   // Error callback
   function(err) {
     console.log('The following gUM error occurred: ' + err);
   }
  );
} else {
   console.log('getUserMedia not supported on your browser!');
}

source.connect(gainNode);
gainNode.connect(audioCtx.destination);

  ...

mute.onclick = voiceMute;

function voiceMute() {
  if(mute.id == "") {
    // 0 means mute. If you still hear something, make sure you haven't
    // connected your source into the output in addition to using the GainNode.
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    mute.id = "activated";
    mute.textContent = "Unmute";
  } else {
    gainNode.gain.setValueAtTime(1, audioCtx.currentTime);
    mute.id = "";
    mute.textContent = "Mute";
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)

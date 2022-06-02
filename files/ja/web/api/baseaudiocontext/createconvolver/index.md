---
title: BaseAudioContext.createConvolver()
slug: Web/API/BaseAudioContext/createConvolver
tags:
  - API
  - AudioContext
  - BaseAudioContext
  - メソッド
  - リファレンス
  - ウェブ音声 API
  - createConvolver
browser-compat: api.BaseAudioContext.createConvolver
translation_of: Web/API/BaseAudioContext/createConvolver
original_slug: Web/API/AudioContext/createConvolver
---
{{ APIRef("Web Audio API") }}

`createConvolver()` は {{ domxref("BaseAudioContext") }} インターフェイスのメソッドで、 {{ domxref("ConvolverNode") }} を生成します。これは一般に音声にリバーブ効果を適用するために使用されます。詳しくは[畳み込み効果の仕様定義](https://webaudio.github.io/web-audio-api/#background-3) を参照してください。

> **Note:** {{domxref("ConvolverNode.ConvolverNode", "ConvolverNode()")}} コンストラクターは {{domxref("ConvolverNode")}} を作成するための推奨される方法です。 [AudioNode の作成](/ja/docs/Web/API/AudioNode#creating_an_audionode)を参照してください。

## 構文

```js
createConvolver()
```

### 引数

なし。

### 返値

{{domxref("ConvolverNode")}} です。

## 例

次の例は、畳み込みノードを作成するための AudioContext の基本的な使用方法を示しています。大前提として、畳み込み効果を形成するアンビエンスとして使用するサウンドサンプル（*インパルスレスポンス*と呼ばれます）を含む AudioBuffer を作成し、それを畳み込みに適用します。下の例では、コンサートホールの観客の短いサンプルを使っているので、適用されるリバーブ効果はとても深く、エコーがかかっているようです。

応用例や情報については、 [Voice-change-O-matic デモ](https://mdn.github.io/voice-change-o-matic/)を参照してください（関連コードは [app.js](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js) を参照してください）。

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var convolver = audioCtx.createConvolver();

  ...

// XHR で畳み込みノードのための音声トラックを得る

var soundSource, concertHallBuffer;

ajaxRequest = new XMLHttpRequest();
ajaxRequest.open('GET', 'concert-crowd.ogg', true);
ajaxRequest.responseType = 'arraybuffer';

ajaxRequest.onload = function() {
  var audioData = ajaxRequest.response;
  audioCtx.decodeAudioData(audioData, function(buffer) {
      concertHallBuffer = buffer;
      soundSource = audioCtx.createBufferSource();
      soundSource.buffer = concertHallBuffer;
    }, function(e){"Error with decoding audio data" + e.err});
}

ajaxRequest.send();

  ...

convolver.buffer = concertHallBuffer;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)

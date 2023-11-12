---
title: "AudioContext: createMediaStreamTrackSource() メソッド"
short-title: createMediaStreamTrackSource()
slug: Web/API/AudioContext/createMediaStreamTrackSource
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}

**`createMediaStreamTrackSource()`** は {{ domxref("AudioContext") }} インターフェイスのメソッドで、指定された {{domxref("MediaStreamTrack")}} からデータを受け取る音源を表す {{domxref("MediaStreamTrackAudioSourceNode")}} を作成して返します。

このメソッドが {{domxref("AudioContext.createMediaStreamSource", "createMediaStreamSource()")}} と異なる点は、指定された {{domxref("MediaStream")}} の中の {{domxref("MediaStreamTrack.id", "id")}} が辞書順（アルファベット順）で最初の音声トラックからデータを受け取る {{domxref("MediaStreamAudioSourceNode")}} を作成する点です。

## 構文

```js-nolint
createMediaStreamTrackSource(track)
```

### 引数

- `track`
  - : 新しいノードのすべての音声データの取得元として使用する {{domxref("MediaStreamTrack")}} です。

### 返値

指定の音声トラックから得られる音声データの取得元として働く {{domxref("MediaStreamTrackAudioSourceNode")}} オブジェクトを返します。

## 例

この例では、ユーザーのマイクへのアクセスを要求するために {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} を使います。アクセスができるようになると、音声コンテキストを作成し、`getUserMedia()` が返したストリームの最初の音声トラックから音声を取得する {{domxref("MediaStreamTrackAudioSourceNode")}} を `createMediaStreamTrackSource()` により作成します。

そして、{{domxref("BaseAudioContext/createBiquadFilter", "createBiquadFilter()")}} により {{domxref("BiquadFilterNode")}} を作成し、音源から流れてくる音声にローシェルフフィルターを適用するように意図通り設定します。すると、マイクからの出力が新しいバイクワッドフィルターに流れ、フィルターの出力が音声コンテキストの出力先 ({{domxref("BaseAudioContext/destination", "destination")}}) に順に流れるようになります。

```js
navigator.mediaDevices
  .getUserMedia({ audio: true, video: false })
  .then((stream) => {
    audio.srcObject = stream;
    audio.onloadedmetadata = (e) => {
      audio.play();
      audio.muted = true;
    };

    const audioCtx = new AudioContext();
    const audioTracks = stream.getAudioTracks();
    const source = audioCtx.createMediaStreamTrackSource(audioTracks[0]);

    const biquadFilter = audioCtx.createBiquadFilter();
    biquadFilter.type = "lowshelf";
    biquadFilter.frequency.value = 3000;
    biquadFilter.gain.value = 20;

    source.connect(biquadFilter);
    biquadFilter.connect(audioCtx.destination);
  })
  .catch((err) => {
    // getUserMedia() のエラーを処理する
  });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- ウェブオーディオ API
- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("MediaStreamTrackAudioSourceNode")}}

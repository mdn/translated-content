---
title: "AudioContext: sinkId プロパティ"
short-title: sinkId
slug: Web/API/AudioContext/sinkId
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}

**`sinkId`** は {{domxref("AudioContext")}} インターフェイスの読み取り専用プロパティで、現在の音声出力機器のシンク ID を返します。

## 値

このプロパティは、どのようにシンク ID が設定されているかにより、以下の値のいずれかを返します。

- 空文字列
  - : シンク ID が明示的に設定されていない場合、デフォルトのシステム音声出力機器が用いられ、`sinkId` は空文字列を返します。
- 文字列
  - : シンク ID が（{{domxref("AudioContext.setSinkId", "setSinkId()")}} を用いるか、{{domxref("AudioContext.AudioContext", "AudioContext()")}} コンストラクターのオプション `sinkId` を用いて）文字列として設定されている場合、`sinkId` は同じ文字列を返します。
- {{domxref("AudioSinkInfo")}} オブジェクト
  - : シンク ID が（{{domxref("AudioContext.setSinkId", "setSinkId()")}} を用いるか、{{domxref("AudioContext.AudioContext", "AudioContext()")}} コンストラクターのオプション `sinkId` を用いて）オプションオブジェクトとして設定されている場合、`sinkId` は最初のオプションオブジェクトで設定された値と同じ値を持つ {{domxref("AudioSinkInfo")}} オブジェクトを返します。

## 例

[SetSinkId test example](https://set-sink-id.glitch.me/) では、{{domxref("AudioBufferSourceNode")}} により 3 秒間のホワイトノイズを生成し、{{domxref("GainNode")}} を通して少し音量を下げる音声グラフを作成します。さらに、ユーザーが音声出力機器を変えることができるドロップダウンメニューを提供します。

Play ボタンがクリックされると、音声グラフを組み立て、再生を開始し、`sinkId` の値に基づいて現在の機器の情報を記録します。これは以下のような動作になります。

- 空文字列は、まだ既定の機器が使われていることを表します。
- 値がオブジェクトである場合は、`type: 'none'` が格納されたオプションオブジェクトを設定しているため、音声はどの機器でも再生されません。
- それ以外の場合は、値はシンク ID の文字列のはずなので、記録します。

```js
playBtn.addEventListener("click", () => {
  const source = audioCtx.createBufferSource();
  source.buffer = myArrayBuffer;
  source.connect(gain);
  gain.connect(audioCtx.destination);
  source.start();

  if (audioCtx.sinkId === "") {
    console.log("音声は既定の機器で再生されています");
  } else if (
    typeof audioCtx.sinkId === "object" &&
    audioCtx.sinkId.type === "none"
  ) {
    console.log("音声はどの機器でも再生されていません");
  } else {
    console.log(`音声は機器 ${audioCtx.sinkId} で再生されています`);
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [SetSinkId test example](https://set-sink-id.glitch.me/)
- [Change the destination output device in Web Audio](https://developer.chrome.com/blog/audiocontext-setsinkid/)
- {{domxref("AudioContext.setSinkId()")}}
- {{domxref("AudioContext/sinkchange_event", "sinkchange")}}

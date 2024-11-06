---
title: "AudioContext: sinkchange イベント"
slug: Web/API/AudioContext/sinkchange_event
l10n:
  sourceCommit: bca8d1ab2bc4f5a1ef6b39c454b0229539178e98
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}

{{domxref("AudioContext")}} インターフェイスの **`sinkchange`** イベントは、出力音声デバイスが変更された (そしてその結果 {{domxref("AudioContext.sinkId")}} が変更された) 時発火します。

## 構文

{{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドでイベント名を用いるか、イベントハンドラープロパティを設定します。

```js
addEventListener("sinkchange", (event) => {});

onsinkchange = (event) => {};
```

## イベント型

{{domxref("Event")}} です。

{{InheritanceDiagram("Event")}}

## 例

`sinkchange` イベントのリスナーは、音声出力デバイスの変更を報告するのに利用できます。{{domxref("AudioContext.sinkId", "sinkId")}} に {{domxref("AudioSinkInfo")}} オブジェクトが入っている場合、音声がどの出力デバイスでも再生されないようになったことを表すことに注意してください。

```js
audioCtx.addEventListener("sinkchange", () => {
  if (typeof audioCtx.sinkId === "object" && audioCtx.sinkId.type === "none") {
    console.log("音声がどのデバイスでも再生されなくなりました");
  } else {
    console.log(`音声出力デバイスが ${audioCtx.sinkId} に変更されました`);
  }
});
```

動くコードは、[SetSinkId test example](https://set-sink-id.glitch.me/) を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [SetSinkId test example](https://set-sink-id.glitch.me/)
- [Change the destination output device in Web Audio](https://developer.chrome.com/blog/audiocontext-setsinkid/)
- {{domxref("AudioContext.setSinkId()")}}
- {{domxref("AudioContext.sinkId")}}

---
title: AudioSinkInfo
slug: Web/API/AudioSinkInfo
l10n:
  sourceCommit: bca8d1ab2bc4f5a1ef6b39c454b0229539178e98
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}

{{domxref("Web Audio API", "Web Audio API", "", "nocode")}} の **`AudioSinkInfo`** インターフェイスは、{{domxref("AudioContext")}} の sink ID ({{domxref("AudioContext.sinkId")}} により取得できる) を表現する情報を表します。

{{InheritanceDiagram}}

## インスタンスプロパティ

- {{domxref("AudioSinkInfo.type", "type")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : この音声出力デバイスの種類を返します。

## 例

`sinkId` の値を `{ type: 'none' }` にして新しい {{domxref("AudioContext")}} を生成し、後に {{domxref("AudioContext.sinkId")}} を参照すると、`type: 'none'` が入った `AudioSinkInfo` オブジェクトが返ります。これは現在利用可能な唯一の値です。

```js
audioCtx = new window.AudioContext({
  sinkId: { type: "none" },
});

// ...

audioCtx.sinkId;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [SetSinkId test example](https://set-sink-id.glitch.me/)
- {{domxref("AudioContext.setSinkId()")}}
- {{domxref("AudioContext.sinkId")}}
- {{domxref("AudioContext/sinkchange_event", "sinkchange")}}

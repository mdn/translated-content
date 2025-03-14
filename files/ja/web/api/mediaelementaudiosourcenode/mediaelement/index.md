---
title: "MediaElementAudioSourceNode: mediaElement プロパティ"
slug: Web/API/MediaElementAudioSourceNode/mediaElement
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Web Audio API")}}

{{domxref("MediaElementAudioSourceNode")}} インターフェイスの読み取り専用プロパティ **`mediaElement`** は、このノードが音声を受け取る元の音声トラックを持つ {{domxref("HTMLMediaElement")}} を示します。

このストリームは、{{domxref("MediaElementAudioSourceNode.MediaElementAudioSourceNode", "MediaElementAudioSourceNode()")}} コンストラクターまたは {{domxref("AudioContext.createMediaElementSource()")}} メソッドのいずれかによりこのノードが最初に生成された時に指定されました。

## 値

このノードの音声の音源を持つ要素を表す {{domxref("HTMLMediaElement")}} です。

## 例

```js
const audioCtx = new window.AudioContext();
const audioElem = document.querySelector("audio");

let options = {
  mediaElement: audioElem,
};

let source = new MediaElementAudioSourceNode(audioCtx, options);
console.log(source.mediaElement);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

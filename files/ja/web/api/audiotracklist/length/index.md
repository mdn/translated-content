---
title: "AudioTrackList: length プロパティ"
short-title: length
slug: Web/API/AudioTrackList/length
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef("HTML DOM")}}

読み取り専用の **{{domxref("AudioTrackList")}}** の **`length`** プロパティは、`AudioTrackList` 内の項目数を返します。 各項目は、メディア要素内の 1 つの音声トラックを表す {{domxref("AudioTrack")}} です。 値 0 は、メディアに音声トラックがないことを示します。

## 値

`AudioTrackList` に含まれる音声トラックの数を示す数値。 `AudioTrackList` を {{domxref("AudioTrack")}} 型のオブジェクトの配列として扱うことで、各トラックにアクセスできます。

## 例

このスニペットは、{{Glossary("DOM")}} 内で見つかった最初の {{HTMLElement("video")}} 要素内の音声トラックの数を {{domxref("Document.querySelector", "querySelector()")}} によって取得します。

```js
const videoElem = document.querySelector("video");
let numAudioTracks = 0;

if (videoElem.audioTracks) {
  numAudioTracks = videoElem.audioTracks.length;
}
```

このサンプルは、{{domxref("AudioTrack")}} に対応していないブラウザーで失敗するのを避けるために、 {{domxref("HTMLMediaElement.audioTracks")}} が定義されていることを確認していることに注意してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

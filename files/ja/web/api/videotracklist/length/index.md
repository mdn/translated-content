---
title: VideoTrackList.length
slug: Web/API/VideoTrackList/length
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{APIRef("HTML DOM")}}

読み取り専用の **{{domxref("VideoTrackList")}}** の **`length`** プロパティは、`VideoTrackList` 内の項目数を返します。 各項目は、メディア要素内の 1 つの映像トラックを表す {{domxref("VideoTrack")}} です。

値 0 は、メディアに映像トラックがないことを示します。

## 値

`VideoTrackList` に含まれる映像トラック数を示す数値。 `VideoTrackList` を {{domxref("VideoTrack")}} 型のオブジェクトの配列として扱うことで、各トラックにアクセスできます。

## 例

このスニペットは、 {{Glossary("DOM")}} 内で見つかった最初の {{HTMLElement("video")}} 要素内の映像トラックの数を {{domxref("Document.querySelector", "querySelector()")}} によって取得します。

```js
const videoElem = document.querySelector("video");
let numVideoTracks = 0;

if (videoElem.videoTracks) {
  numVideoTracks = videoElem.videoTracks.length;
}
```

この例は、{{domxref("VideoTrack")}} に対応していないブラウザーで落ちるのを避けるために、{{domxref("HTMLMediaElement.videoTracks")}} が定義されていることを確認していることに注意してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

---
title: "VideoTrack: id プロパティ"
short-title: id
slug: Web/API/VideoTrack/id
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("HTML DOM")}}

**`id`** プロパティは、**{{domxref("VideoTrack")}}** によって表されるトラックを一意に識別する文字列を保持します。

この ID を {{domxref("VideoTrackList.getTrackById()")}} メソッドと共に使用して、メディア要素に関連付けられたメディア内の特定のトラックを見つけることができます。

トラック ID は、特定のトラックをロードする URL のフラグメントとしても使用できます（メディアがメディアフラグメントに対応している場合）。

## 値

トラックを識別する文字列です。メディア要素の {{domxref("HTMLMediaElement.videoTracks", "videoTracks")}} プロパティで指定されたものなどの {{domxref("VideoTrackList")}} で {{domxref("VideoTrackList.getTrackById", "getTrackById()")}} を呼び出すときに使用するのに適しています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

---
title: AudioTrack.id
slug: Web/API/AudioTrack/id
---

{{APIRef("HTML DOM")}}

**`id`** プロパティには、**{{domxref("AudioTrack")}}** によって表されるトラックを一意に識別する文字列が含まれています。

この ID を {{domxref("AudioTrackList.getTrackById()")}} メソッドと共に使用して、メディア要素に関連付けられているメディア内の特定のトラックを見つけることができます。トラック ID は、特定のトラックを読み込むための URL のフラグメントとしても使用できます（メディアがメディアフラグメントに対応している場合）。

## 値

トラックを識別する文字列です。 メディア要素の {{domxref("HTMLMediaElement.audioTracks", "audioTracks")}} プロパティで指定されたものなどの {{domxref("AudioTrackList")}} で {{domxref("AudioTrackList.getTrackById", "getTrackById()")}} を呼び出すときに使用するのに適しています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

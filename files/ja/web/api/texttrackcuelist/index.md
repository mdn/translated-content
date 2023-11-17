---
title: TextTrackCueList
slug: Web/API/TextTrackCueList
l10n:
  sourceCommit: fe0ae190fa37469b28ebe39cb33013d89c3a69e6
---

{{APIRef("WebVTT")}}

**`TextTrackCueList`** は配列風オブジェクトで、動的に更新される {{domxref("TextTrackCue")}} オブジェクトのリストを表します。

このインターフェイスにはコンストラクターはありません。このオブジェクトのインスタンスを {{domxref('TextTrack.cues')}} で取得し、これが {{domxref("TextTrack")}} オブジェクト内のすべてのキューを返します。

## インスタンスプロパティ

- {{domxref('TextTrackCueList.length')}} {{ReadOnlyInline}}
  - : `unsigned long` で、リスト内のキューの数です。

## インスタンスメソッド

- {{domxref('TextTrackCueList.getCueById()')}}
  - : 渡された識別子を持つ最初の {{domxref('TextTrackCue')}} オブジェクトを返します。

## 例

{{domxref("HTMLMediaElement.textTracks")}} プロパティは、{{domxref("TextTrackList")}} オブジェクトを返します。これは、メディアにリンクされたテキストトラックごとに 1 つずつ、すべての {{domxref("TextTrack")}} オブジェクトを列挙します。次に {{domxref("TextTrack.cues")}} プロパティは、その具体的なトラックのキューを格納した `TextTrackCueList` を返します。

```js
const video = document.getElementById("video");
video.onplay = () => {
  console.log(video.textTracks[0].cues);
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

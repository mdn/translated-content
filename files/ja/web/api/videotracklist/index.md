---
title: VideoTrackList
slug: Web/API/VideoTrackList
l10n:
  sourceCommit: 579788ba8fe61b6c7dddaec09dee7b33d6548a4d
---

{{APIRef("HTML DOM")}}

**`VideoTrackList`** インターフェイスは、{{HTMLElement("video")}} 要素内に含まれる映像トラックのリストを表すために使用します。 各トラックはリスト内の個別の {{domxref("VideoTrack")}} オブジェクトで表します。

{{domxref('HTMLMediaElement.videoTracks')}} を使用してこのオブジェクトのインスタンスを取得します。 個々のトラックは、配列構文または {{jsxref("Array.forEach", "forEach()")}} などの関数を使用してアクセスできます。

{{InheritanceDiagram}}

## インスタンスプロパティ

_このインターフェイスは、その親インターフェイスである {{domxref("EventTarget")}} からプロパティを継承しています。_

- {{domxref("VideoTrackList.length", "length")}} {{ReadOnlyInline}}
  - : リスト内のトラック数。
- {{domxref("VideoTrackList.selectedIndex", "selectedIndex")}} {{ReadOnlyInline}}
  - : 現在選択されているトラックがある場合はそのインデックス、それ以外の場合は `-1`。

## インスタンスメソッド

_このインターフェイスは、その親インターフェイスである {{domxref("EventTarget")}} からメソッドを継承しています。_

- {{domxref("VideoTrackList.getTrackById", "getTrackById()")}}
  - : 指定された文字列と {{domxref("VideoTrack.id", "id")}} が一致する `VideoTrackList` 内で見つかった {{domxref("VideoTrack")}} を返します。 一致が見つからない場合は、`null` を返します。

## イベント

- {{domxref("VideoTrackList/addtrack_event", "addtrack")}}
  - : 新しい映像トラックがメディア要素に追加されたときに発生します。
    `onaddtrack` プロパティからも利用できます。
- {{domxref("VideoTrackList.change_event", "change")}}
  - : 映像トラックがアクティブまたは非アクティブになったときに発生します。
    `onchange` プロパティからも利用できます。
- {{domxref("VideoTrackList/removetrack_event", "removetrack")}}
  - : 映像トラックがメディア要素から取り除かれたときに発生します。
    `onremovetrack` プロパティからも利用できます。

## 使用上の注意

`VideoTrackList` を使用すると、メディア要素にある映像トラックに直接アクセスできるだけでなく、{{domxref("VideoTrackList/addtrack_event", "addtrack")}} および {{domxref("VideoTrackList/removetrack_event", "removetrack")}} イベントにイベントハンドラーを設定することができるため、メディア要素のストリームにトラックが追加されたときまたは取り除かれたときを検出できます。

## 例

### メディア要素の映像トラックリストの取得

メディア要素の {{domxref("VideoTrackList")}} を取得するには、その {{domxref("HTMLMediaElement.videoTracks", "videoTracks")}} プロパティを使用します。

```js
const videoTracks = document.querySelector("video").videoTracks;
```

### トラック数の変化の監視

この例では、利用可能なチャンネル数に関する情報を表示するアプリがあります。 それを最新に保つために、 {{domxref("VideoTrackList/addtrack_event", "addtrack")}} および {{domxref("VideoTrackList/removetrack_event", "removetrack")}} イベントのためのハンドラーが設定されています。

```js
videoTracks.onaddtrack = updateTrackCount;
videoTracks.onremovetrack = updateTrackCount;

function updateTrackCount(event) {
  trackCount = videoTracks.length;
  drawTrackCountIndicator(trackCount);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

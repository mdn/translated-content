---
title: AudioTrackList
slug: Web/API/AudioTrackList
l10n:
  sourceCommit: 6b8b53f565c67eb22fd78f8dec036c4694ad18d4
---

{{APIRef("HTML DOM")}}

**`AudioTrackList`** インターフェイスは、所与の HTML メディア要素内に含まれる音声トラックのリストを表すために使用します。 各トラックはリスト内の別々の {{domxref("AudioTrack")}} オブジェクトで表します。

{{domxref('HTMLMediaElement.audioTracks')}} を使用してこのオブジェクトのインスタンスを取得します。 個々のトラックは、配列構文を使用してアクセスできます。

{{InheritanceDiagram}}

## インスタンスプロパティ

_このインターフェイスは、その親インターフェイスである {{domxref("EventTarget")}} からプロパティを継承しています。_

- {{domxref("AudioTrackList.length", "length")}} {{ReadOnlyInline}}
  - : リスト内のトラック数。

## インスタンスメソッド

_このインターフェイスは、その親インターフェイスである {{domxref("EventTarget")}} からメソッドを継承しています。_

- {{domxref("AudioTrackList.getTrackById", "getTrackById()")}}
  - : 指定された文字列と一致する {{domxref("AudioTrack.id", "id")}} を持つ `AudioTrackList` 内で見つかった {{domxref("AudioTrack")}} を返します。 一致が見つからない場合は、`null` を返します。

## イベント

- [`addtrack`](/ja/docs/Web/API/AudioTrackList/addtrack_event)
  - : 新しい音声トラックがメディア要素に追加されたときに発生します。
- [`change`](/ja/docs/Web/API/AudioTrackList/change_event)
  - : トラックが有効または無効にされたときに発生します。
- [`removetrack`](/ja/docs/Web/API/AudioTrackList/removetrack_event)
  - : 音声トラックがメディア要素から取り除かれたときに発生します。

## 使用上のメモ

`AudioTrackList` を使用すると、メディア要素にある音声トラックに直接アクセスできるだけでなく、{{domxref("AudioTrackList/addtrack_event", "addtrack")}} イベントと {{domxref("AudioTrackList/removetrack_event", "removetrack")}} イベントにイベントハンドラーを設定できるため、メディア要素のストリームにトラックが追加されたときまたは取り除かれたときに検出できます。 詳細と例については、{{domxref("AudioTrackList/addtrack_event", "addtrack")}} と {{domxref("AudioTrackList/removetrack_event", "removetrack")}} を参照してください。

## 例

### メディア要素の音声トラックリストの取得

メディア要素の {{domxref("AudioTrackList")}} を取得するには、その {{domxref("HTMLMediaElement.audioTracks", "audioTracks")}} プロパティを使用します。

```js
const audioTracks = document.querySelector("video").audioTracks;
```

### トラック数の変化の監視

この例では、利用可能なチャンネル数に関する情報を表示するアプリがあります。 それを最新に保つために、 {{domxref("AudioTrackList/addtrack_event", "addtrack")}} イベントと {{domxref("AudioTrackList/removetrack_event", "removetrack")}} イベントのためのハンドラーを設定しています。

```js
audioTracks.onaddtrack = updateTrackCount;
audioTracks.onremovetrack = updateTrackCount;

function updateTrackCount(event) {
  trackCount = audioTracks.length;
  drawTrackCountIndicator(trackCount);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

---
title: VideoTrackList
slug: Web/API/VideoTrackList
---

{{APIRef("HTML DOM")}}

**`VideoTrackList`** インターフェイスは、{{HTMLElement("video")}} 要素内に含まれる動画トラックのリストを表すために使用します。 各トラックはリスト内の個別の {{domxref("VideoTrack")}} オブジェクトで表します。

{{domxref('HTMLMediaElement.videoTracks')}} を使用してこのオブジェクトのインスタンスを取得します。 個々のトラックは、配列構文または {{jsxref("Array.forEach", "forEach()")}} などの関数を使用してアクセスできます。

## プロパティ

_このインターフェイスは、その親インターフェイスである {{domxref("EventTarget")}} からもプロパティを継承します。_

- {{domxref("VideoTrackList.length", "length")}} {{ReadOnlyInline}}
  - : リスト内のトラック数。
- {{domxref("VideoTrackList.selectedIndex", "selectedIndex")}} {{ReadOnlyInline}}
  - : 現在選択されているトラックがある場合はそのインデックス、それ以外の場合は `-1`。

## イベントハンドラー

- {{domxref("VideoTrackList.onaddtrack", "onaddtrack")}}
  - : {{event("addtrack")}} イベントが発生したときに呼び出されるイベントハンドラー。 新しい動画トラックがメディア要素に追加されたことを示します。
- {{domxref("VideoTrackList.onchange", "onchange")}}
  - : {{event("change")}} イベントが発生したときに呼び出されるイベントハンドラー。 つまりトラックの {{domxref("VideoTrack.selected", "selected")}} プロパティの値が変更されて、トラックがアクティブまたは非アクティブになったときです。
- {{domxref("VideoTrackList.onremovetrack", "onremovetrack")}}
  - : {{event("removetrack")}} イベントが発生したときに呼び出されるイベントハンドラー。 動画トラックがメディア要素から取り除かれたことを示します。

## メソッド

_このインターフェイスは、その親インターフェイスである {{domxref("EventTarget")}} からもメソッドを継承しています。_

- {{domxref("VideoTrackList.getTrackById", "getTrackById()")}}
  - : 指定された文字列と {{domxref("VideoTrack.id", "id")}} が一致する `VideoTrackList` 内で見つかった {{domxref("VideoTrack")}} を返します。 一致が見つからない場合は、`null` を返します。

## イベント

- {{domxref("VideoTrackList.addtrack_event", "addtrack")}}
  - : 新しい動画トラックがメディア要素に追加されたときに発生します。
    {{domxref("VideoTrackList.onaddtrack", "onaddtrack")}} プロパティからも利用できます。
- {{domxref("VideoTrackList.change_event", "change")}}
  - : 動画トラックがアクティブまたは非アクティブになったときに発生します。
    {{domxref("VideoTrackList.onchange", "onchange")}} プロパティからも利用できます。
- {{domxref("VideoTrackList.removetrack_event", "removetrack")}}
  - : 動画トラックがメディア要素から取り除かれたときに発生します。
    {{domxref("VideoTrackList.onremovetrack", "onremovetrack")}} プロパティからも利用できます。

## 使用上の注意

`VideoTrackList` を使用すると、メディア要素にある動画トラックに直接アクセスできるだけでなく、{{event("addtrack")}} イベントと {{event("removetrack")}} イベントにイベントハンドラを設定できるため、メディア要素のストリームにトラックが追加されたときまたは取り除かれたときに検出できます。 詳細と例については、{{domxref("VideoTrackList.onaddtrack", "onaddtrack")}} と {{domxref("VideoTrackList.onremovetrack", "onremovetrack")}} を参照してください。

## 例

### メディア要素の動画トラックリストの取得

メディア要素の `VideoTrackList` を取得するには、その {{domxref("HTMLMediaElement.videoTracks", "videoTracks")}} プロパティを使用します。

```js
var videoTracks = document.querySelector("video").videoTracks;
```

### トラック数の変化の監視

この例では、利用可能なチャンネル数に関する情報を表示するアプリがあります。 それを最新に保つために、{{event("addtrack")}} と {{event("removetrack")}} イベントのためのハンドラが設定されています。

```js
videoTracks.onaddtrack = updateTrackCount;
videoTracks.onremovetrack = updateTrackCount;

function updateTrackCount(event) {
  trackCount = videoTracks.length;
  drawTrackCountIndicator(trackCount);
}
```

## 仕様書

| 仕様書                                                                               | 状態                             | 備考 |
| ------------------------------------------------------------------------------------ | -------------------------------- | ---- |
| {{SpecName('HTML WHATWG', '#videotracklist', 'VideoTrackList')}} | {{Spec2('HTML WHATWG')}} |      |

## ブラウザーの互換性

{{Compat("api.VideoTrackList")}}

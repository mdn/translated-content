---
title: TrackEvent
slug: Web/API/TrackEvent
l10n:
  sourceCommit: 579788ba8fe61b6c7dddaec09dee7b33d6548a4d
---

{{APIRef("HTML DOM")}}

**`TrackEvent`** インターフェイスは HTML DOM 仕様の一部であり、 HTML のメディア要素で使用可能なトラックのセットに対する変更を表すイベントに使用されます。 これらのイベントは `addtrack` と `removetrack` です。

`TrackEvent` を {{domxref("RTCTrackEvent")}} インターフェイスと混同しないでください。そちらは {{domxref("RTCPeerConnection")}} の一部であるトラックに使用されます。

`TrackEvent` に基づくイベントは、常に次のメディアトラックリストの種類のいずれかに送信されます。

- 映像トラックに関連するイベントは、常に {{domxref("HTMLMediaElement.videoTracks")}} にある {{domxref("VideoTrackList")}} に送信されます。
- 音声トラックに関連するイベントは、常に {{domxref("HTMLMediaElement.audioTracks")}} で指定された {{domxref("AudioTrackList")}} に送信されます。
- テキストトラックに影響を与えるイベントは、{{domxref("HTMLMediaElement.textTracks")}} によって示される {{domxref("TextTrackList")}} オブジェクトに送信されます。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("TrackEvent.TrackEvent", "TrackEvent()")}}
  - : 指定されたイベント種別とオプションの追加プロパティで、新しい `TrackEvent` オブジェクトを作成して初期化します。

## インスタンスプロパティ

_`TrackEvent` は {{domxref("Event")}} に基づいているため、`Event` のプロパティは `TrackEvent` オブジェクトでも利用できます。_

- {{domxref("TrackEvent.track", "track")}} {{ReadOnlyInline}}
  - : イベントが参照している DOM のトラックオブジェクト。 `null` でない場合、これは常にメディアトラックの種類のうちの 1 つのオブジェクト（{{domxref("AudioTrack")}}、{{domxref("VideoTrack")}}、 {{domxref("TextTrack")}}）です。

## インスタンスメソッド

_`TrackEvent` には独自のメソッドはありません。 しかし、それは {{domxref("Event")}} に基づいているので、`Event` オブジェクトで利用可能なメソッドを提供します。_

## 例

この例では、 `handleTrackEvent()` 関数を設定します。 この関数は、文書内で見つかった最初の {{HTMLElement("video")}} 要素の `addtrack` イベントまたは `removetrack` イベントに対して呼び出されます。

```js
const videoElem = document.querySelector("video");

videoElem.videoTracks.addEventListener("addtrack", handleTrackEvent, false);
videoElem.videoTracks.addEventListener("removetrack", handleTrackEvent, false);
videoElem.audioTracks.addEventListener("addtrack", handleTrackEvent, false);
videoElem.audioTracks.addEventListener("removetrack", handleTrackEvent, false);
videoElem.textTracks.addEventListener("addtrack", handleTrackEvent, false);
videoElem.textTracks.addEventListener("removetrack", handleTrackEvent, false);

function handleTrackEvent(event) {
  let trackKind;

  if (event.target instanceof VideoTrackList) {
    trackKind = "映像";
  } else if (event.target instanceof AudioTrackList) {
    trackKind = "音声";
  } else if (event.target instanceof TextTrackList) {
    trackKind = "テキスト";
  } else {
    trackKind = "不明な";
  }

  switch (event.type) {
    case "addtrack":
      console.log(trackKind + "トラックが追加されました。");
      break;
    case "removetrack":
      console.log(trackKind + "トラックが取り除かれました。");
      break;
  }
}
```

イベントハンドラーは、 JavaScript の [`instanceof`](/ja/docs/Web/JavaScript/Reference/Operators/instanceof) 演算子を使用してイベントが発生したトラックの種類を判断し、それがどの種類のトラックであるか、および要素に追加されているのか、要素から取り除かれているのかを示すメッセージをコンソールに出力します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

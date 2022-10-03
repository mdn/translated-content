---
title: AudioTrackList
slug: Web/API/AudioTrackList
---

{{APIRef("HTML DOM")}}

**`AudioTrackList`** インターフェイスは、所与の HTML メディア要素内に含まれる音声トラックのリストを表すために使用します。 各トラックはリスト内の別々の {{domxref("AudioTrack")}} オブジェクトで表します。

{{domxref('HTMLMediaElement.audioTracks')}} を使用してこのオブジェクトのインスタンスを取得します。 個々のトラックは、配列構文を使用してアクセスできます。

## プロパティ

_このインターフェイスは、その親インターフェイスである {{domxref("EventTarget")}} からもプロパティを継承します。_

- {{domxref("AudioTrackList.length", "length")}} {{ReadOnlyInline}}
  - : リスト内のトラック数

## イベントハンドラー

- {{domxref("AudioTrackList.onaddtrack", "onaddtrack")}}
  - : {{event("addtrack")}} イベントが発生したときに呼び出されるイベントハンドラー。 新しい音声トラックがメディア要素に追加されたことを示します。
- {{domxref("AudioTrackList.onchange", "onchange")}}
  - : {{event("change")}} イベントが発生したときに呼び出されるイベントハンドラー。 これは、1 つ以上のトラックが {{domxref("AudioTrack.enabled", "enabled")}} フラグの変更により有効または無効になったときに発生します。
- {{domxref("AudioTrackList.onremovetrack", "onremovetrack")}}
  - : {{event("removetrack")}} イベントが発生したときに呼び出されるイベントハンドラー。 音声トラックがメディア要素から取り除かれたことを示します。

## メソッド

_このインターフェイスは、その親インターフェイスである {{domxref("EventTarget")}} からもメソッドを継承しています。_

- {{domxref("AudioTrackList.getTrackById", "getTrackById()")}}
  - : 指定された文字列と一致する {{domxref("AudioTrack.id", "id")}} を持つ `AudioTrackList` 内で見つかった {{domxref("AudioTrack")}} を返します。 一致が見つからない場合は、`null` を返します。

## イベント

- {{domxref("AudioTrackList.addtrack_event", "addtrack")}}
  - : 新しい音声トラックがメディア要素に追加されたときに発生します。
    {{domxref("AudioTrackList.onaddtrack", "onaddtrack")}} プロパティからも利用できます。
- {{domxref("AudioTrackList.change_event", "change")}}
  - : トラックが有効または無効にされたときに発生します。
    {{domxref("AudioTrackList.onchange", "onchange")}} プロパティからも利用できます。
- {{domxref("AudioTrackList.removetrack_event", "removetrack")}}
  - : 音声トラックがメディア要素から取り除かれたときに発生します。
    {{domxref("AudioTrackList.onremovetrack", "onremovetrack")}} プロパティからも利用できます。

## 使用上の注意

`AudioTrackList` を使用すると、メディア要素にある音声トラックに直接アクセスできるだけでなく、{{event("addtrack")}} イベントと {{event("removetrack")}} イベントにイベントハンドラを設定できるため、メディア要素のストリームにトラックが追加されたときまたは取り除かれたときに検出できます。 詳細と例については、{{domxref("AudioTrackList.onaddtrack", "onaddtrack")}} と {{domxref("AudioTrackList.onremovetrack", "onremovetrack")}} を参照してください。

## 例

### メディア要素の音声トラックリストの取得

メディア要素の {{domxref("AudioTrackList")}} を取得するには、その {{domxref("HTMLMediaElement.audioTracks", "audioTracks")}} プロパティを使用します。

```js
var audioTracks = document.querySelector("video").audioTracks;
```

### トラック数の変化の監視

この例では、利用可能なチャンネル数に関する情報を表示するアプリがあります。 それを最新に保つために、{{event("addtrack")}} イベントと {{event("removetrack")}} イベントのためのハンドラを設定しています。

```js
audioTracks.onaddtrack = updateTrackCount;
audioTracks.onremovetrack = updateTrackCount;

function updateTrackCount(event) {
  trackCount = audioTracks.length;
  drawTrackCountIndicator(trackCount);
}
```

## 仕様書

| 仕様書                                                                                                           | 状態                             | 備考 |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---- |
| {{SpecName('HTML WHATWG', 'media.html#audiotracklist', 'AudioTrackList')}}             | {{Spec2('HTML WHATWG')}} |      |
| {{SpecName('HTML5 W3C', 'embedded-content-0.html#audiotracklist', 'AudioTrackList')}} | {{Spec2('HTML5 W3C')}}     |      |

## ブラウザーの互換性

{{Compat("api.AudioTrackList")}}

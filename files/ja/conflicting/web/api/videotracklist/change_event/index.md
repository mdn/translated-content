---
title: VideoTrackList.onchange
slug: conflicting/Web/API/VideoTrackList/change_event
tags:
  - API
  - Adding Tracks
  - Adding Video Tracks
  - Event Handler
  - HTML DOM
  - Media
  - Property
  - Reference
  - Video
  - VideoTrackList
  - addTrack
  - onchange
  - track
translation_of: Web/API/VideoTrackList/onchange
original_slug: Web/API/VideoTrackList/onchange
---
{{APIRef("HTML DOM")}}

**{{domxref("VideoTrackList")}}** の **`onchange`** プロパティは、{{event("change")}} イベントが発生したときに呼び出されるイベントハンドラで、`VideoTrackList` 内の {{domxref("VideoTrack")}} がアクティブになったことを示します。

イベントは {{domxref("Event")}} オブジェクトの形式でイベントハンドラに渡されます。 イベントは追加情報を提供しません。 メディアのトラックの新しい状態を判断するには、それらの {{domxref("VideoTrack.selected")}} フラグを確認する必要があります。

> **Note:** **注**: {{domxref("EventTarget.addEventListener", "addEventListener()")}} を使用して、`change` イベントのハンドラを追加することもできます。

## 構文

```
VideoTrackList.onchange = eventHandler;
```

### 値

`onchange` は、トラックがアクティブになるたびに呼び出されるべき関数を設定します。

## 例

このスニペットは、リスト内の各トラックを調べる {{event("change")}} イベントのハンドラを確立し、トラックの現在の状態を示すユーザーインターフェイスコントロールの状態を更新する関数を呼び出します。

```js
var trackList = document.querySelector("video").videoTracks;

trackList.onchange = function(event) {
  trackList.forEach(function(track) {
    updateTrackSelectedButton(track.id, track.selected);
  });
};
```

この例の `updateTrackSelectedButton()` は、トラックの {{domxref("VideoTrack.id", "id")}}（おそらくアプリはトラック ID をコントロール要素の ID として使用します）でユーザーインターフェイスコントロールを見つけて、トラックの {{domxref("VideoTrack.selected", "selected")}} フラグを使用してコントロールが現在どの状態にあるべきかを決定する関数です。

## 仕様

| 仕様                                                                                                                 | 状態                             | コメント |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', '#handler-tracklist-onchange', 'VideoTrackList: onchange')}} | {{Spec2('HTML WHATWG')}} |          |

## ブラウザーの互換性

{{Compat("api.VideoTrackList.onchange")}}

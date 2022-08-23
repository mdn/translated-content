---
title: AudioTrackList.onchange
slug: conflicting/Web/API/AudioTrackList/change_event
tags:
  - API
  - Adding Audio Tracks
  - Adding Tracks
  - Audio
  - AudioTrackList
  - Event Handler
  - HTML DOM
  - Media
  - Property
  - Reference
  - addTrack
  - onchange
  - track
translation_of: Web/API/AudioTrackList/onchange
original_slug: Web/API/AudioTrackList/onchange
---
{{APIRef("HTML DOM")}}

**{{domxref("AudioTrackList")}}** の **`onchange`** プロパティは、{{event("change")}} イベントが発生したときに呼び出されるイベントハンドラで、`AudioTrackList` 内の 1 つ以上の {{domxref("AudioTrack")}} が有効または無効になっていることを示します。

イベントは {{domxref("Event")}} オブジェクトの形でイベントハンドラに渡されます。 イベントは追加情報を提供しません。 メディアのトラックの新しい状態を判断するには、それらの {{domxref("AudioTrack.enabled")}} フラグを調べる必要があります。

> **Note:** **注**: {{domxref("EventTarget.addEventListener", "addEventListener()")}} を使用して、`change` イベントのハンドラを追加することもできます。

## 構文

```
AudioTrackList.onchange = eventHandler;
```

### 値

`onchange` は、メディア要素でトラックが有効または無効になったときに必ず呼び出される関数を設定します。

## 例

このスニペットは、リスト内の各トラックを調べる {{event("change")}} イベントのハンドラを確立し、トラックの現在の状態を示すユーザーインターフェイスコントロールの状態を更新する関数を呼び出します。

```js
var trackList = document.querySelector("video").audioTracks;

trackList.onchange = function(event) {
  trackList.forEach(function(track) {
    updateTrackEnabledButton(track.id, track.enabled);
  });
};
```

この例の `updateTrackEnabledButton()` は、トラックの {{domxref("AudioTrack.id", "id")}}（おそらくアプリはトラック ID をコントロール要素の ID として使用します）でユーザーインターフェイスコントロールを見つけて、トラックの {{domxref("AudioTrack.enabled", "enabled")}} フラグを使用してコントロールが現在どの状態にあるべきかを決定する関数です。

## 仕様

| 仕様                                                                                                                                             | 状態                             | コメント |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', '#handler-tracklist-onchange', 'AudioTrackList.onchange')}}                                 | {{Spec2('HTML WHATWG')}} |          |
| {{SpecName('HTML5 W3C', 'embedded-content-0.html#dom-audiotracklist-onchange', 'AudioTrackList.onchange')}} | {{Spec2('HTML5 W3C')}}     |          |

## ブラウザーの互換性

{{Compat("api.AudioTrackList.onchange")}}

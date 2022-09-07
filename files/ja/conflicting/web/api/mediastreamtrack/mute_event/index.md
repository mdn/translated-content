---
title: MediaStreamTrack.onmute
slug: conflicting/Web/API/MediaStreamTrack/mute_event
original_slug: Web/API/MediaStreamTrack/onmute
---
{{ APIRef("Media Capture and Streams") }}

**`MediaStreamTrack.onmute`**イベントハンドラは{{event("mute")}}イベントを受け取った時に呼び出されるプロパティです。このイベントは、トラックが一時的にデータを提供することができない時に発生します。

## 文法

```
track.onmute = function;
```

### 値

{{event("mute")}}イベントが発生した時の実行する処理の関数を[`EventHandler`](/ja/docs/Web/API/EventHandler)として設定します。このイベントハンドラーの関数は 1 つのパラメータ持ちます。このパラメータはイベントオブジェクトであり、単純な[`Event`](/ja/docs/Web/API/Event)のオブジェクトです。

## 例

この例では、「ミュートされたスピーカー」絵文字を要素のコンテンツ HTML に設定するため、ミュートハンドラーが確立されています。

```js
myTrack.onmute = function(evt) {
  playStateIcon.innerHTML = "&#1F507;";
};
```

## 仕様

| 仕様                                                                                                                     | 状況                                 | コメント |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | -------- |
| {{ SpecName('Media Capture', '#widl-MediaStreamTrack-onmute', 'MediaStreamTrack.onmute') }} | {{ Spec2('Media Capture') }} | 初版     |

## ブラウザ互換性

{{Compat("api.MediaStreamTrack.onmute")}}

## 関連項目

- {{event("mute")}} イベント、およびその型である{{domxref("Event")}}。

---
title: AudioTrackList.length
slug: Web/API/AudioTrackList/length
---

{{APIRef("HTML DOM")}}

読み取り専用の **{{domxref("AudioTrackList")}}** の **`length`** プロパティは、`AudioTrackList` 内のエントリ数を返します。 各エントリは、メディア要素内の 1 つの音声トラックを表す {{domxref("AudioTrack")}} です。 値 0 は、メディアに音声トラックがないことを示します。

## 構文

```
var trackCount = AudioTrackList.length;
```

### 値

`AudioTrackList` に含まれる音声トラックの数を示す数値。 `AudioTrackList` を {{domxref("AudioTrack")}} 型のオブジェクトの配列として扱うことで、各トラックにアクセスできます。

## 例

このスニペットは、{{domxref("Document.querySelector", "querySelector()")}} によって {{Glossary("DOM")}} 内で見つかった最初の {{HTMLElement("video")}} 要素内の音声トラックの数を取得します。

```js
var videoElem = document.querySelector("video");
var numAudioTracks = 0;

if (videoElem.audioTracks) {
  numAudioTracks = videoElem.audioTracks.length;
}
```

このサンプルは、{{domxref("AudioTrack")}} をサポートしていないブラウザーで失敗するのを避けるために、{{domxref("HTMLMediaElement.audioTracks")}} が定義されていることを確認していることに注意してください。

## 仕様

| 仕様                                                                                                                                     | 状態                             | コメント |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', 'media.html#dom-audiotracklist-length', 'AudioTrackList.length')}}             | {{Spec2('HTML WHATWG')}} |          |
| {{SpecName('HTML5 W3C', 'embedded-content-0.html#dom-audiotracklist-length', 'AudioTrackList.length')}} | {{Spec2('HTML5 W3C')}}     |          |

## ブラウザーの互換性

{{Compat("api.AudioTrackList.length")}}

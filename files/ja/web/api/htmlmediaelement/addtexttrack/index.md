---
title: "HTMLMediaElement: addTextTrack() メソッド"
short-title: addTextTrack()
slug: Web/API/HTMLMediaElement/addTextTrack
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

**`addTextTrack()`** は {{domxref("HTMLMediaElement")}} インターフェイスのメソッドで、新しい {{domxref("TextTrack")}} オブジェクトを作成し、それをこのメディア要素に追加します。このメソッドは、 {{domxref("TextTrackList/addtrack_event", "addtrack")}} イベントをこのメディア要素の {{domxref("HTMLMediaElement/textTracks", "textTracks")}} で発行します。このメソッドは、 {{domxref("TextTrackList")}} インターフェイスでは使用できません。 {{domxref("HTMLMediaElement")}} でのみ使用できます。

## 構文

```js-nolint
addTextTrack(kind)
addTextTrack(kind, label)
addTextTrack(kind, label, language)
```

### 引数

- `kind`
  - : 文字列で、 {{domxref("TextTrack.kind")}} プロパティ (`subtitles`, `captions`, `descriptions`, `chapters`, `metadata`) を表します。
- `label`
  - : 文字列で、 {{domxref("TextTrack.label")}} プロパティを表します。
- `language`
  - : 文字列で、 {{domxref("TextTrack.language")}} プロパティを表します。

### 返値

新しく作成された {{domxref("TextTrack")}} オブジェクトです。

### 例外

なし。

## 例

この例では、新しい {{domxref("TextTrack")}} を、 `kind` を `"subtitles"` に設定して追加し、それに新しい {{domxref("VTTCue")}} を追加しています。

```js
const video = document.querySelector("video");
const newTrack = video.addTextTrack("subtitles");
newTrack.addCue(new VTTCue(3, 6, "Hello world!"));
console.log(newTrack.cues[0].text);
// "Hello world!"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("TextTrack")}}
- [WebVTT API](/ja/docs/Web/API/WebVTT_API)
- [ウェブメディア技術](/ja/docs/Web/Media)
- 学習: [動画と音声のコンテンツ](/ja/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)

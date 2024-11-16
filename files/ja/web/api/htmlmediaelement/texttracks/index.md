---
title: "HTMLMediaElement: textTracks プロパティ"
short-title: textTracks
slug: Web/API/HTMLMediaElement/textTracks
l10n:
  sourceCommit: 8d202854ade7328f827da2951bc714455f78674f
---

{{APIRef("HTML DOM")}}

**`textTracks`** は {{DOMxRef("HTMLMediaElement")}} オブジェクトの読み取り専用プロパティで、メディア要素のテキストトラックを表す {{DOMxRef("TextTrackList")}} オブジェクトをすべて、テキストトラックのリストと同じ順序で掲載しているオブジェクトを返します。

`addtrack` と `removetrack` イベントを使用すると、[`<audio>`](/ja/docs/Web/HTML/Element/audio) や [`<video>`](/ja/docs/Web/HTML/Element/video) 要素へのトラックの追加や削除を検出することができます。しかし、これらのイベントはメディア要素自体に直接送られるわけではありません。代わりに、要素に追加されたトラックの種類に対応する [`HTMLMediaElement`](/ja/docs/Web/API/HTMLMediaElement) のトラックリストオブジェクトに送られます。

返されたリストは生きています。つまり、メディア要素にトラックが追加されたり削除されたりすると、リストのコンテンツは動的に変更されます。一度リストへの参照を保有すると、新しいテキストトラックが追加されたり、既存のものが削除されたりしたときにそれを検出するために、変更を監視することができます。

メディア要素のトラックリストの変更を監視する方法については、[TextTrackList のイベント](/ja/docs/Web/API/TextTrackList#イベント)を参照してください。

## 値

メディア要素に含まれるテキストトラックのリストを表す {{DOMxRef("TextTrackList")}} オブジェクトです。トラックのリストは、`textTracks[n]` を使用してこのオブジェクトのテキストトラックのリストから n 番目のテキストトラックを取得したり、 `textTracks`.[`getTrackById()`](/ja/docs/Web/API/TextTrackList/getTrackById) メソッドを使用してアクセスしたりすることができます。

それぞれのトラックは {{DOMxRef("TextTrack")}} オブジェクトで表され、トラックに関する情報を提供します。

## 例

[`<video>`](/ja/docs/Web/HTML/Element/video) に子要素としていくつかの [`<track>`](/ja/docs/Web/HTML/Element/track) が含まれているものから始めましょう。

```html
<video controls poster="/images/sample.gif">
  <source src="sample.mp4" type="video/mp4" />
  <source src="sample.ogv" type="video/ogv" />
  <track kind="captions" src="sampleCaptions.vtt" srclang="en" />
  <track kind="descriptions" src="sampleDescriptions.vtt" srclang="en" />
  <track kind="chapters" src="sampleChapters.vtt" srclang="en" />
  <track kind="subtitles" src="sampleSubtitles_de.vtt" srclang="de" />
  <track kind="subtitles" src="sampleSubtitles_en.vtt" srclang="en" />
  <track kind="subtitles" src="sampleSubtitles_ja.vtt" srclang="ja" />
  <track kind="subtitles" src="sampleSubtitles_oz.vtt" srclang="oz" />
  <track kind="metadata" src="keyStage1.vtt" srclang="en" label="Key Stage 1" />
  <track kind="metadata" src="keyStage2.vtt" srclang="en" label="Key Stage 2" />
  <track kind="metadata" src="keyStage3.vtt" srclang="en" label="Key Stage 3" />
</video>
```

`HTMLMediaElement.textTracks` は反復処理中に `textTracksList` を返します。ここでは、それぞれの英語トラックのすべてのプロパティをコンソールに表示しています。

```js
const tracks = document.querySelector("video").textTracks;

for (const track of tracks) {
  if (track.language === "en") {
    console.dir(track);
  }
}
```

{{EmbedLiveSample("Examples", "100%", 155)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLMediaElement")}}: `HTMLMediaElement.textTracks` プロパティを定義しているインターフェイス
- {{HTMLElement("audio")}}, {{HTMLElement("video")}}
- {{DOMxRef("AudioTrack")}}, {{DOMxRef("AudioTrackList")}}
- {{DOMxRef("VideoTrack")}}, {{DOMxRef("VideoTrackList")}}
- [`addtrack`](/ja/docs/Web/API/AudioTrackList/addtrack_event),
  [`change`](/ja/docs/Web/API/AudioTrackList/change_event),
  [`removetrack`](/ja/docs/Web/API/AudioTrackList/removetrack_event): AudioTrackList の イベント
- [`addtrack`](/ja/docs/Web/API/VideoTrackList/addtrack_event),
  [`change`](/ja/docs/Web/API/VideoTrackList/change_event),
  [`removetrack`](/ja/docs/Web/API/VideoTrackList/removetrack_event): VideoTrackList の イベント

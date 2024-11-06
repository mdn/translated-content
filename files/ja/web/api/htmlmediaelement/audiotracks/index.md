---
title: "HTMLMediaElement: audioTracks プロパティ"
short-title: audioTracks
slug: Web/API/HTMLMediaElement/audioTracks
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

**`audioTracks`** は {{domxref("HTMLMediaElement")}} オブジェクトの読み取り専用プロパティで、メディア要素の音声トラックを表すすべての {{domxref("AudioTrack")}} オブジェクトを列挙した {{domxref("AudioTrackList")}} オブジェクトを返します。

このメディア要素は、{{HTMLElement("audio")}} 要素または {{HTMLElement("video")}} 要素のどちらでもかまいません。

返されたリストは*生きて*います。つまり、トラックがメディア要素に追加、削除されると、リストの内容が動的に変更されます。一度リストへの参照を得れば、新しい音声トラックが追加されたり、既存のものが削除されたりしたときに、その変更を監視することができます。メディア要素のトラックリストの変更を監視する方法については、 [AudioTrackList のイベント](/ja/docs/Web/API/AudioTrackList#イベント)を参照してください。

## 値

メディア要素に含まれる音声トラックのリストを表す {{domxref("AudioTrackList")}} オブジェクト。トラックのリストは、配列記法や、オブジェクトの {{domxref("AudioTrackList.getTrackById", "getTrackById()")}} メソッドを使ってアクセスできます。

各トラックは、そのトラックに関する情報を提供する {{domxref("AudioTrack")}} オブジェクトによって表されます。

## 例

この例では、特定の要素のすべての音声トラックをミュートしています。

### HTML

HTML で、要素自体を確立します。

```html
<video id="video" src="somevideo.mp4"></video>
```

### JavaScript

JavaScript コードで、動画要素の音声トラックのミュートを処理します。

```js
const video = document.getElementById("video");

for (let i = 0; i < video.audioTracks.length; i += 1) {
  video.audioTracks[i].enabled = false;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLMediaElement")}}: `HTMLMediaElement.audioTracks` プロパティを定義しているインターフェイス
- {{HTMLElement("audio")}}, {{HTMLElement("video")}}
- {{domxref("AudioTrack")}}, {{domxref("AudioTrackList")}}

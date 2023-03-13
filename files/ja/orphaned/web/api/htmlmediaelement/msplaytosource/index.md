---
title: HTMLMediaElement.msPlayToSource
slug: orphaned/Web/API/HTMLMediaElement/msPlayToSource
original_slug: Web/API/HTMLMediaElement/msPlayToSource
---

{{APIRef("HTML DOM")}}

{{Non-standard_header()}}

**`msPlayToSource`** は読み取り専用のプロパティで、[`PlayToManager`](https://docs.microsoft.com/uwp/api/windows.media.playto.playtomanager?view=winrt-22000) が使用する、メディア要素に関連付けられたソースを取得することができます。

この独自のプロパティは、Internet Explorer と Microsoft Edge に固有のものです。

## 値

_PlayTo_ を使用すると、音声、動画、および img 要素のローカル再生/表示を、リモート機器に接続することができます。詳細については、[Windows.Media.PlayTo](https://docs.microsoft.com/uwp/api/windows.media.playto?view=winrt-22000) API を参照してください。

**`msPlayToSource`** は `sourceRequested` ハンドラーで使用されます。音声、動画、または img 要素から `PlayToSource` オブジェクトを `msPlayToSource` プロパティによって取得し、 `e.setSource` に渡し、`PlayToSource.next` プロパティを他の要素の `msPlayToSource` へ設定すると継続的に再生が行われます。

`msPlayToSource` のプロパティ値は、メディア要素に関連付けられたソースになります。

## 例

```html
<video id="videoplayer" src="video.mp4" controls autoplay />
```

```js
// Step 1: Obtain PlayToManager object for app's current view.
const ptm = windows.media.playTo.playToManager.getForCurrentView();

// Step 2: Register for the sourcerequested event (user swipes Devices charm).
ptm.addEventListener("sourcerequested", (event) => {

  // Step 3: Specify the media to be streamed (to filter devices).
  event.sourceRequest.setSource(document.getElementById("videoplayer").msPlayToSource);

  // The media will then be streamed to the device chosen by the user in the UI.

});
```

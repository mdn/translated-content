---
title: VideoTrackList.length
slug: Web/API/VideoTrackList/length
---

{{APIRef("HTML DOM")}}

読み取り専用の **{{domxref("VideoTrackList")}}** の **`length`** プロパティは、`VideoTrackList` 内のエントリ数を返します。 各エントリは、メディア要素内の 1 つの動画トラックを表す {{domxref("VideoTrack")}} です。 値 0 は、メディアに動画トラックがないことを示します。

## 構文

```
var trackCount = VideoTrackList.length;
```

### 値

`VideoTrackList` に含まれる動画トラック数を示す数値。 `VideoTrackList` を {{domxref("VideoTrack")}} 型のオブジェクトの配列として扱うことで、各トラックにアクセスできます。

## 例

このスニペットは、{{domxref("Document.querySelector", "querySelector()")}} によって {{Glossary("DOM")}} 内で見つかった最初の {{HTMLElement("video")}} 要素内の動画トラックの数を取得します。

```js
var videoElem = document.querySelector("video");
var numVideoTracks = 0;

if (videoElem.videoTracks) {
  numVideoTracks = videoElem.videoTracks.length;
}
```

このサンプルは、{{domxref("VideoTrack")}} をサポートしていないブラウザーで失敗するのを避けるために、{{domxref("HTMLMediaElement.videoTracks")}} が定義されていることを確認していることに注意してください。

## 仕様

| 仕様                                                                                                             | 状態                             | コメント |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', '#dom-videotracklist-length', 'VideoTrackList: length')}} | {{Spec2('HTML WHATWG')}} |          |

## ブラウザーの互換性

{{Compat("api.VideoTrackList.length")}}

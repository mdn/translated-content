---
title: "MediaStreamTrack: contentHint プロパティ"
short-title: contentHint
slug: Web/API/MediaStreamTrack/contentHint
l10n:
  sourceCommit: ac67e6f05d337e52e39f02a978b8c00bc43d583b
---

{{APIRef("Media Capture and Streams")}}

**`contentHint`** は {{domxref("MediaStreamTrack")}} インターフェイスのプロパティで、トラックに格納されているコンテンツの型を示す文字列です。使用可能な値 {{domxref("MediaStreamTrack.kind")}} プロパティの値に依存します。

## 値

以下のいずれかの値を持つ文字列です。

- `""`
  - : `contentHint` は設定されていません。
- `"speech"`
  - : このトラックは発話データを格納するように取り扱う必要があります。この値を設定するには、{{domxref("MediaStreamTrack.kind")}} の値を `"audio"` にする必要があります。
- `"speech-recognition"`
  - : このトラックは機械による音声認識のためのデータを格納するように取り扱う必要があります。この値を設定するには、{{domxref("MediaStreamTrack.kind")}} の値を `"audio"` にする必要があります。
- `"music"`
  - : このトラックは音楽を格納するように取り扱う必要があります。この値を設定するには、{{domxref("MediaStreamTrack.kind")}} の値を `"audio"` にする必要があります。
- `"motion"`
  - : このトラックは、動きが重要な動画を格納しているように取り扱う必要があります。例えば、ウェブカメラの動画、映画、ビデオゲームなどです。この値を設定するには、{{domxref("MediaStreamTrack.kind")}} の値を `"video"` にする必要があります。
- `"detail"`
  - : このトラックは、映像の細部が特別に重要であるように取り扱う必要があります。例えば、テキストコンテンツ、絵画や行を含むプレゼンテーションやウェブページなどです。この値を設定するには、{{domxref("MediaStreamTrack.kind")}} の値を `"video"` にする必要があります。
- `"text"`
  - : このトラックは、動画の細部が特に重要であるかのように取り扱う必要があり、かなり鮮明なエッジや 一定の色の領域が頻繁に発生する可能性があります。例えば、テキストコンテンツを含む表示やウェブページ。この値を設定するには、{{domxref("MediaStreamTrack.kind")}} の値を `"video"` にする必要があります。

## 例

### contentHint を設定する関数

この関数はストリームと `contentHint` 値を受け取り、各トラックにヒントを適用します。[完全な例はこちら](https://webrtc.github.io/samples/src/content/capture/video-contenthint/)を参照してください。`contentHint` の値によってトラックの表示方法がどのように変わるかを示しています。

```js
function setVideoTrackContentHints(stream, hint) {
  const tracks = stream.getVideoTracks();
  tracks.forEach((track) => {
    if ("contentHint" in track) {
      track.contentHint = hint;
      if (track.contentHint !== hint) {
        console.error(`Invalid video track contentHint: "${hint}"`);
      }
    } else {
      console.error("MediaStreamTrack の contentHint 属性に対応していません");
    }
  });
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

---
title: Insertable Streams for MediaStreamTrack API
slug: Web/API/Insertable_Streams_for_MediaStreamTrack_API
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{DefaultAPISidebar("Insertable Streams for MediaStreamTrack API")}}

**Insertable Streams for MediaStreamTrack API** は、{{domxref("MediaStreamTrack")}} に新しいコンポーネントを追加する方法を提供します。

## 概念と使用法

映像や音声を処理する際、追加の要素を挿入したり、ストリームにその他の処理を行ったりしたくなることがあります。たとえば、アプリケーションは 2 本のトラック、たとえば天気の地図とその地図を解説しているプレゼンターの映像を合成したいことがあります。もしくは、トラックの処理により、背景のぼかし、背景ノイズの除去、他の要素の追加 (たとえば、人々に面白い帽子をかぶせるなど) をしたいかもしれません。この API は、ストリームに直接アクセスして操作できるようにすることで、これらを行う方法を提供します。

## インターフェイス

- {{domxref("MediaStreamTrackGenerator")}}
  - : {{domxref("MediaStreamTrack")}} のソースとして働く {{domxref("WritableStream")}} を生成します。
- {{domxref("MediaStreamTrackProcessor")}}
  - : {{domxref("MediaStreamTrack")}} オブジェクトのソースを処理し、メディアフレームのストリームを生成します。

## 例

以下の例は記事 [Insertable streams for MediaStreamTrack](https://developer.chrome.com/docs/capabilities/web-apis/mediastreamtrack-insertable-media-processing) に載っているもので、ビデオストリーム内のバーコードをハイライトするバーコードスキャナーアプリケーションのデモを行います。これは、{{domxref("MediaStreamTrackProcessor.readable")}} 経由でアクセスしているストリームを変換します。

```js
const stream = await getUserMedia({ video: true });
const videoTrack = stream.getVideoTracks()[0];

const trackProcessor = new MediaStreamTrackProcessor({ track: videoTrack });
const trackGenerator = new MediaStreamTrackGenerator({ kind: "video" });

const transformer = new TransformStream({
  async transform(videoFrame, controller) {
    const barcodes = await detectBarcodes(videoFrame);
    const newFrame = highlightBarcodes(videoFrame, barcodes);
    videoFrame.close();
    controller.enqueue(newFrame);
  },
});

trackProcessor.readable
  .pipeThrough(transformer)
  .pipeTo(trackGenerator.writable);
```

---
title: "HTMLMediaElement: captureStream() メソッド"
short-title: captureStream()
slug: Web/API/HTMLMediaElement/captureStream
l10n:
  sourceCommit: 7fb6ccccf88b71712c1b603bed7092dbb622b698
---

{{APIRef("Media Capture and Streams")}}

**`captureStream()`** は {{domxref("HTMLMediaElement")}} インターフェイスのプロパティで、このメディア要素でレンダリングされているコンテンツのリアルタイムキャプチャをストリーミングしている {{domxref('MediaStream')}} オブジェクトを返します。

これは、例えば [WebRTC](/ja/docs/Web/API/WebRTC_API) の {{domxref("RTCPeerConnection")}} のソースとして使用できます。

## 構文

```js-nolint
captureStream()
```

### 引数

なし。

### 返値

他のメディア処理コードによる音声データおよび/または動画データのソースとして、または [WebRTC](/ja/docs/Glossary/WebRTC) のソースとして使用できる {{domxref('MediaStream')}} オブジェクトです。

## 例

この例では、イベントハンドラーが確立されているため、ボタンをクリックすると、ID が `"playback"` のメディア要素のコンテンツの {{domxref("MediaStream")}} へのキャプチャを開始します。 これにより、WebRTC を介したストリーミングのソースなど、他の目的にストリームを使用して、動画通話中に録画済みの動画を他の人と共有できるようになります。

```js
document.querySelector(".playAndRecord").addEventListener("click", () => {
  const playbackElement = document.getElementById("playback");
  const captureStream = playbackElement.captureStream();
  playbackElement.play();
});
```

より長くより複雑な例と説明については、[メディア要素の記録](/ja/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

### Firefox 特有のメモ

Firefox 51 より前のバージョンでは、 `captureStream()` はソースそれ自体が {{domxref("MediaStream")}} であるメディア要素では使用できませんでした（{{domxref("RTCPeerConnection")}} を介して受信されるストリームを表示している {{HTMLElement("video")}} 要素など）。 Firefox 51 以降では機能します。これは、動画要素からストリームをキャプチャし、それを記録するために {{domxref("MediaRecorder")}} を使用できることを意味します。 詳細は [Firefox バグ 1259788](https://bugzil.la/1259788) をご覧ください。

ただし、明確な理由から、Firefox では `captureStream()` に接頭辞が付いて `mozCaptureStream()` となっています。現在の実装には、次のような注目に値するいくつかの奇妙な点があるからです。

- Firefox の実装は現在、メディア要素のソース自体が {{domxref("MediaStream")}} である場合にのみ、仕様書での説明通りに動作します。
- メディア要素のソースが `MediaStream` ではない場合、このメソッドからの出力は仕様書と互換性がありません。 そして、キャプチャの開始後にソースを変更した場合、その非互換性のために出力キャプチャストリームは新しいソースデータを受け入れることができません。したがって、新しいソースの `MediaStream` からの {{domxref("MediaStreamTrack")}} はキャプチャしたストリームに追加されず、更新されたソースをキャプチャしない出力になります。
- ソースを `MediaStream` に戻すと、トラックをストリームに戻して追加し、期待どおりに機能します。
- `mozCaptureMediaStream()` を `MediaStream` のソースを使用して要素に対して呼び出すと、要素が `MediaStream` を再生している間はトラックのみを含むストリームを返します。
- ソースメディアのないメディア要素で `mozCaptureMediaStream()` を呼び出すと、その互換モードは最初に追加されたソースに基づきます。 例えば、`MediaStream` の場合、キャプチャストリームはそれ以降 MediaStream のソースでのみ機能します。
- `MediaStream` 以外のソースのサポートが仕様に達した時点で、接頭辞なしのメソッドの場合、この特別なふるまいは取り除かれます。 詳細は [Firefox バグ 1259788](https://bugzil.la/1259788) をご覧ください。

## 関連情報

- [メディア要素の記録](/ja/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element)
- [MediaStream 収録 API](/ja/docs/Web/API/MediaStream_Recording_API)
- {{domxref("HTMLCanvasElement.captureStream()")}}
- {{domxref("MediaStream")}}
- [WebRTC API](/ja/docs/Web/API/WebRTC_API)

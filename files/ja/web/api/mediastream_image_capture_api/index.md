---
title: MediaStream 画像キャプチャ API
slug: Web/API/MediaStream_Image_Capture_API
l10n:
  sourceCommit: 2ba2c0efbdf0c34b1da02203e4e84b571c883629
---

{{DefaultAPISidebar("Image Capture API")}}{{SeeCompatTable}}

**MediaStream 画像キャプチャ API** は、映像デバイスから画像や動画をキャプチャするための API です。データをキャプチャするだけでなく、画像サイズ、赤目軽減、フラッシュの有無、現在の設定などのデバイスの機能に関する情報を取得することもできます。逆に、API では、デバイスが許可する制限内で機能を設定できます。

## MediaStream 画像キャプチャの概念と使用方法

画像または映像ストリームを検索するプロセスは、以下のように行われます。サンプルコードは、 [Chrome の画像キャプチャの例](https://googlechrome.github.io/samples/image-capture/)を基にしています。

まず、{{domxref("MediaDevices.getUserMedia()")}} を呼び出してデバイスへの参照を取得します。`getUserMedia()` メソッドではより詳細な機能を要求できますが、以下の例では単に利用可能な任意の映像デバイスを要求しています。このメソッドは、{{domxref("MediaStream")}} オブジェクトで解決する {{jsxref("Promise")}} を返します。

```js
navigator.mediaDevices.getUserMedia({ video: true }).then((mediaStream) => {
  // ストリームについて何らかの処理を行う
});
```

次に、メディアストリームから映像部分を分離します。これは、{{domxref("MediaStream.getVideoTracks()")}} を呼ぶことで行います。これは {{domxref("MediaStreamTrack")}} オブジェクトの配列を返します。以下のコードでは、`MediaStreamTrack` の配列の最初のアイテムが使いたいものだと仮定しています。`MediaStreamTrack` オブジェクトのプロパティを用いて使いたいものを選ぶことができます。

```js
const track = mediaStream.getVideoTracks()[0];
```

この時点で、映像を取得する前にデバイスの機能の設定をしたいかもしれません。これは、他の操作をする前にトラックオブジェクトの {{domxref("MediaStreamTrack.applyConstraints","applyConstraints()")}} を呼ぶことでできます。

```js
let zoom = document.querySelector("#zoom");
const capabilities = track.getCapabilities();
// ズームに対応しているかをチェックする
if (!capabilities.zoom) {
  return;
}
track.applyConstraints({ advanced: [{ zoom: zoom.value }] });
```

最後に、`MediaStreamTrack` オブジェクトを {{domxref("ImageCapture.ImageCapture()", "ImageCapture()")}} コンストラクターに渡します。`MediaStream` にはいくつかのトラックの種類があり、それらを取得する複数の方法を提供していますが、`ImageCapture` コンストラクターは {{domxref("MediaStreamTrack.kind")}} が `"video"` でない場合、種類が `NotSupportedError` である {{domxref("DOMException")}} を投げます。

```js
let imageCapture = new ImageCapture(track);
```

## インターフェイス

- {{domxref("ImageCapture")}} {{Experimental_Inline}}
  - : 有効な {{domxref("MediaStreamTrack")}} を通じて参照される映像デバイスから画像をキャプチャするためのインターフェイスです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("MediaStream")}}
- {{domxref("MediaStreamTrack")}}

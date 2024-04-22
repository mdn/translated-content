---
title: HTMLVideoElement
slug: Web/API/HTMLVideoElement
l10n:
  sourceCommit: 04ebe57066db2cff350018649bdb15b2a10c67ba
---

{{APIRef("HTML DOM")}}

{{HTMLElement("video")}} 要素が実装している **`HTMLVideoElement`** インターフェイスは、動画ブジェクトを操作するための特別なプロパティとメソッドを提供します。また、 {{domxref("HTMLMediaElement")}} と {{domxref("HTMLElement")}} のプロパティとメソッドを継承しています。

[対応しているメディア形式](/ja/docs/Web/Media/Formats)のリストは、ブラウザーによって異なります。動画を提供する際には、関連するすべてのブラウザーが対応している単一の形式で提供するか、対応する必要のあるすべてのブラウザーをカバーするように、異なる形式で複数の動画ソースを提供するかしてください。

{{InheritanceDiagram}}

## インスタンスプロパティ

_祖先インターフェイスである {{domxref("HTMLMediaElement")}} および {{domxref("HTMLElement")}} から継承したプロパティがあります。_

- {{domxref("HTMLVideoElement.height")}}
  - : 文字列で、 HTML の [`height`](/ja/docs/Web/HTML/Element/video#height) 属性を反映し、表示領域の高さを CSS ピクセル数で指定します。
- {{domxref("HTMLVideoElement.poster")}}
  - : 文字列で、 HTML の [`poster`](/ja/docs/Web/HTML/Element/video#poster) 属性を反映し、動画データが利用できないときに表示する画像を指定します。
- {{domxref("HTMLVideoElement.videoHeight")}} {{ReadOnlyInline}}
  - : 符号なし整数値で、リソースの内在的な高さを CSS ピクセル数で示す値を返します。メディアが利用できない場合は 0 を返します。
- {{domxref("HTMLVideoElement.videoWidth")}} {{ReadOnlyInline}}
  - : 符号なし整数値で、リソースの内在的な幅を CSS ピクセル数で示す値を返します。メディアが利用できない場合は 0 を返します。
- {{domxref("HTMLVideoElement.width")}}
  - : 文字列で、HTML の [`width`](/ja/docs/Web/HTML/Element/video#width) 属性を反映し、表示領域の幅を CSS ピクセル数で指定します。
- {{DOMxRef("HTMLVideoElement.disablePictureInPicture")}}
  - : `disablePictureInPicture` プロパティは、ユーザーにピクチャインピクチャを提案しないようにするか、または自動的に要求するか、ユーザーエージェントにヒントを与えます。

### Gecko 固有のプロパティ

- {{domxref("HTMLVideoElement.mozParsedFrames")}} {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : `unsigned long` で、メディアリソースから解析された動画のフレーム数を返します。
- {{domxref("HTMLVideoElement.mozDecodedFrames")}} {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : `unsigned long` で、すでに画像にデコードされた、解析された動画のフレーム数を返します。
- {{domxref("HTMLVideoElement.mozPresentedFrames")}} {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : `unsigned long` で、描画のためにレンダリングパイプラインに提示されたデコード済みのフレーム数を返します。
- {{domxref("HTMLVideoElement.mozPaintedFrames")}} {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : `unsigned long` で、画面上に描画されたフレームの数を返します。
- {{domxref("HTMLVideoElement.mozFrameDelay")}} {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : `double` で、最後にペイントされたビデオフレームの時刻をを秒単位で返します。
- {{domxref("HTMLVideoElement.mozHasAudio")}} {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : 論理値で、動画に音声があるかどうかを示す値を返します。

## インスタンスメソッド

_親である {{domxref("HTMLMediaElement")}} とその祖先である {{domxref("HTMLElement")}} から継承したメソッドがあります。_

- {{domxref("HTMLVideoElement.getVideoPlaybackQuality()")}}
  - : 現在の再生指標を含む {{domxref("VideoPlaybackQuality")}} オブジェクトを返します。この情報には、ドロップされたフレーム数や破損したフレーム数、総フレーム数などが含まれます。
- {{DOMxRef("HTMLVideoElement.requestPictureInPicture()")}}
  - : ユーザーエージェントが動画をピクチャーインピクチャーモードにすることをリクエストします。

## イベント

_親である {{domxref("HTMLMediaElement")}} およびその祖先である {{domxref("HTMLElement")}} から継承したイベントがあります。_ これらのイベントを待ち受けするには、 [`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) を使用するか、イベントリスナーをこのインターフェイスの `onイベント名` に代入するかしてください。

- {{DOMxRef("HTMLVideoElement.enterpictureinpicture_event", "enterpictureinpicture")}}
  - : ピクチャインピクチャモードになったときに {{DOMxRef("HTMLVideoElement")}} に送信されます。
- {{DOMxRef("HTMLVideoElement.leavepictureinpicture_event", "leavepictureinpicture")}}
  - : ピクチャインピクチャモードになったときに {{DOMxRef("HTMLVideoElement")}} に送信されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{HTMLElement("video")}}
- [対応しているメディア形式](/ja/docs/Web/Media/Formats)

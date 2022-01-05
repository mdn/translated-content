---
title: HTMLVideoElement
slug: Web/API/HTMLVideoElement
tags:
  - API
  - HTML DOM
  - HTMLVideoElement
  - インターフェイス
  - リファレンス
  - Video
browser-compat: api.HTMLVideoElement
translation_of: Web/API/HTMLVideoElement
---
{{APIRef("HTML DOM")}}

**`HTMLVideoElement`** インターフェイスは、動画ブジェクトを操作するための特別なプロパティとメソッドを提供します。また、 {{domxref("HTMLMediaElement")}} と {{domxref("HTMLElement")}} のプロパティとメソッドを継承しています。

[対応しているメディア形式](/en-US/docs/Web/Media/Formats)のリストは、ブラウザーによって異なります。動画を提供する際には、関連するすべてのブラウザーが対応している単一の形式で提供するか、対応する必要のあるすべてのブラウザーをカバーするように、異なる形式で複数の動画ソースを提供するかしてください。

{{InheritanceDiagram(600, 140)}}

## プロパティ

_祖先インターフェイスである {{domxref("HTMLMediaElement")}} および {{domxref("HTMLElement")}} からプロパティを継承しています。

- {{domxref("HTMLVideoElement.height")}}
  - : {{domxref("DOMString")}} で、 HTML の {{htmlattrxref("height", "video")}} 属性を反映し、表示領域の高さを CSS ピクセル数で指定します。
- {{domxref("HTMLVideoElement.poster")}}
  - : {{domxref("DOMString")}} で、 HTML の {{htmlattrxref("poster", "video")}} 属性を反映し、動画データが利用できないときに表示する画像を指定します。
- {{domxref("HTMLVideoElement.videoHeight")}} {{readonlyInline}}
  - : 符号なし整数値で、リソースの内在的な高さを CSS ピクセル数で示す値を返します。メディアが利用できない場合は 0 を返します。
- {{domxref("HTMLVideoElement.videoWidth")}} {{readonlyInline}}
  - : 符号なし整数値で、リソースの内在的な幅を CSS ピクセル数で示す値を返します。メディアが利用できない場合は 0 を返します。
- {{domxref("HTMLVideoElement.width")}}
  - : {{domxref("DOMString")}} で、 HTML の {{htmlattrxref("width", "video")}} 属性を反映し、表示領域の幅を CSS ピクセル数で指定します。
- {{DOMxRef("HTMLVideoElement.autoPictureInPicture")}}
  - : `autoPictureInPicture` 属性は、ユーザーがタブやアプリケーションを切り替えると、自動的に video 要素のピクチャインピクチャモードに入ったり抜けたりします。
- {{DOMxRef("HTMLVideoElement.disablePictureInPicture")}}
  - : `disablePictureInPicture` プロパティは、ユーザーにピクチャインピクチャを提案しないようにするか、または自動的に要求するか、ユーザーエージェントにヒントを与えます。

### Gecko 固有のプロパティ

- {{domxref("HTMLVideoElement.mozParsedFrames")}} {{Non-standard_Inline}}{{ReadOnlyInline}}{{deprecated_inline}}
  - : `unsigned long` で、メディアリソースから解析された動画のフレーム数を返します。
- {{domxref("HTMLVideoElement.mozDecodedFrames")}} {{Non-standard_Inline}}{{ReadOnlyInline}} {{deprecated_inline}}
  - : `unsigned long` で、すでに画像にデコードされた、解析された動画のフレーム数を返します。
- {{domxref("HTMLVideoElement.mozPresentedFrames")}} {{Non-standard_Inline}}{{ReadOnlyInline}}{{deprecated_inline}}
  - : `unsigned long` で、描画のためにレンダリングパイプラインに提示されたデコード済みのフレーム数を返します。
- {{domxref("HTMLVideoElement.mozPaintedFrames")}} {{Non-standard_Inline}}{{ReadOnlyInline}}{{deprecated_inline}}
  - : `unsigned long` で、画面上に描画されたフレームの数を返します。
- {{domxref("HTMLVideoElement.mozFrameDelay")}} {{Non-standard_Inline}}{{ReadOnlyInline}}{{deprecated_inline}}
  - : `double` で、最後にペイントされたビデオフレームの時刻をを秒単位で返します。
- {{domxref("HTMLVideoElement.mozHasAudio")}} {{Non-standard_Inline}}{{ReadOnlyInline}}{{deprecated_inline}}
  - : 論理値で、動画に音声があるかどうかを示す値を返します。

### Microsoft 拡張

- {{DOMxRef("HTMLVideoElement.msFrameStep()")}} {{Non-standard_Inline}}
  - : 動画を 1 フレーム前、または 1 フレーム後にコマ送りします。
- {{DOMxRef("HTMLVideoElement.msHorizontalMirror")}} {{Non-standard_Inline}}
  - : 画面上で video 要素を水平方向に反転させるかどうかを取得または設定します。
- {{DOMxRef("HTMLVideoElement.msInsertVideoEffect()")}} {{Non-standard_Inline}}
  - : 指定された動画エフェクトをメディアパイプラインに挿入します。
- {{DOMxRef("HTMLVideoElement.msIsLayoutOptimalForPlayback")}} {{Non-standard_Inline}}{{ReadOnlyInline}}
  - : 動画をより効率的にレンダリングできるかどうかを示します。
- {{DOMxRef("HTMLVideoElement.msIsStereo3D")}} {{Non-standard_Inline}}{{ReadOnlyInline}}
  - : 読み込まれた動画ソースがステレオ 3D であるとシステムが判断するかどうかを決定します。true に設定されていると、ソースがステレオ 3D であることを示します。
- {{DOMxRef("HTMLVideoElement.msZoom")}} {{Non-standard_Inline}}
  - : 動画フレームを動画の画面に合わせてトリミングするかどうかを制御します。

## メソッド

_親である {{domxref("HTMLMediaElement")}} とその祖先である {{domxref("HTMLElement")}} からメソッドを継承しています。_

- {{domxref("HTMLVideoElement.getVideoPlaybackQuality()")}} {{experimental_inline}}
  - : 現在の再生メトリクスを含む {{domxref("VideoPlaybackQuality")}} オブジェクトを返します。この情報には、ドロップされたフレーム数や破損したフレーム数、総フレーム数などが含まれます。
- {{DOMxRef("HTMLVideoElement.requestPictureInPicture()")}}
  - : ユーザーエージェントが動画をピクチャーインピクチャーモードにすることをリクエストします。

## イベント

_親である {{domxref("HTMLMediaElement")}} およびその祖先である {{domxref("HTMLElement")}} からイベントを継承しています。_ これらのイベントを待ち受けするには、 [`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) を使用するか、イベントリスナーをこのインターフェイスの `oneventname` に代入するかしてください。

- {{DOMxRef("HTMLVideoElement.enterpictureinpicture_event", "enterpictureinpicture")}}
  - : ピクチャインピクチャモードになったときに {{DOMxRef("HTMLVideoElement")}} に送信されます。対応するイベントハンドラーは {{DOMxRef("HTMLVideoElement.onenterpictureinpicture")}} です。
- {{DOMxRef("HTMLVideoElement.leavepictureinpicture_event", "leavepictureinpicture")}}
  - : ピクチャインピクチャモードになったときに {{DOMxRef("HTMLVideoElement")}} に送信されます。対応するイベントハンドラーは {{DOMxRef("HTMLVideoElement.onleavepictureinpicture")}} です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{HTMLElement("video")}}
- [対応しているメディア形式](/ja/docs/Web/Media/Formats)

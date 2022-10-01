---
title: MediaSource
slug: Web/API/MediaSource
---

{{SeeCompatTable}}

**`MediaSource`**`インターフェイスは、`{{domxref("HTMLMediaElement")}}のデータを扱っています。MediaSource をオブジェクトは、ユーザが再生する{{domxref("HTMLMediaElement")}}につけることができます。

## プロパティ

_{{domxref("EventTarget")}}からプロパティを継承しています。_

- {{domxref("MediaSource.sourceBuffers")}}{{readonlyInline}}
  - : {{domxref("SourceBufferList")}}から成り立っています。
- {{domxref("MediaSource.activeSourceBuffers")}} {{readonlyInline}}
  - : {{domxref("SourceBufferList")}} から成り立っています。
- {{domxref("MediaSource.readyState")}} {{readonlyInline}}
  - : 値を列挙します。
- _{{domxref("MediaSource.duration")}}_
  - : 浮動小数点型です。

## コンストラクタ

- {{domxref("MediaSource.MediaSource", "MediaSource()")}} {{readonlyInline}}
  - : コンストラクタはソースバッファと関連しない MediaSource オブジェクトを返します

## Static なメソッド

- {{domxref("MediaSource.isTypeSupported()")}}
  - : 与えられた MIME タイプが完全に実行できるかどうかの{{domxref("Boolean")}}型を返します。

## メソッド

_親インターフェイス{{domxref("EventTarget")}}から、プロパティを継承しています。_

- {{domxref("MediaSource.addSourceBuffer()")}}

  - : `MediaSource` オブジェクトに関連づけて作成し、 , {{domxref("SourceBuffer")}} に与えられた MIME タイプを返します。

    - {{domxref("MediaSource.removeSourceBuffer()")}}

      - : メディアソースオブジェクトから、与えられた {{domxref("SourceBuffer")}} を削除します。

    - {{domxref("MediaSource.endOfStream()")}}
      - : ストリームの終わりを合図します。最後には error を発するでしょう。

## 仕様書

| Specification                                                                                | Status                                           | Comment             |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------ | ------------------- |
| {{SpecName('Media Source Extensions', '#mediasource', 'MediaSource')}} | {{Spec2('Media Source Extensions')}} | Initial definition. |

## ブラウザの互換性

{{Compat("api.MediaSource")}}

## 関連項目

- 関連するインターフェイス: {{domxref("SourceBuffer")}} と{{domxref("SourceBufferList")}}.

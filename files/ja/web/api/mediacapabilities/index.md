---
title: MediaCapabilities
slug: Web/API/MediaCapabilities
l10n:
  sourceCommit: 7b565c5f4610bea19c844f35532853624d87cde3
---

{{APIRef("Media Capabilities API")}}

**`MediaCapabilities`** は[メディア能力 API](/ja/docs/Web/API/Media_Capabilities_API) のインターフェイスで、機器、システム、ブラウザーのデコード能力に関する情報を提供します。この API を使用すると、コーデック、プロファイル、解像度、ビットレートに基づいて、機器のデコード能力についてブラウザーに問い合わせることができます。 この情報は、ユーザーに最適なメディアストリームを提供したり、再生をスムーズかつ電力効率的に行うべきかどうかを判断したりするために使用できます。

この情報には {{domxref("Navigator")}} および {{domxref("WorkerNavigator")}} インターフェイスの **`mediaCapabilities`** プロパティを通じてアクセスできます。

## インスタンスメソッド

- {{domxref("MediaCapabilities.encodingInfo()")}}
  - : 有効なメディア構成が渡されると、そのメディア型に対応しているかどうか、また、そのメディアのエンコード方式がスムーズで電力効率が良いかどうかを示す情報で解決するプロミスを返します。
- {{domxref("MediaCapabilities.decodingInfo()")}}
  - : 有効なメディア構成が渡されると、そのメディア型に対応しているかどうか、また、そのようなメディアをデコードする際にスムーズかつ電力効率的に動作するかどうかを示す情報で解決するプロミスを返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTMLMediaElement](/ja/docs/Web/API/HTMLMediaElement) の [canPlayType()](/ja/docs/Web/API/HTMLMediaElement/canPlayType) メソッド
- [MediaSource](/ja/docs/Web/API/MediaSource) の [isTypeSupported()](/ja/docs/Web/API/MediaSource/isTypeSupported_static) メソッド
- {{domxref("Navigator")}} インターフェイス

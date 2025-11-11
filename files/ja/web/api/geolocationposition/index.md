---
title: GeolocationPosition
slug: Web/API/GeolocationPosition
l10n:
  sourceCommit: 5e98fd9cfbec6e28044a27c58bffca5ae464ec8b
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

**`GeolocationPosition`** インターフェイスは対象のデバイスのある時間における現在位置を表します。{{domxref("GeolocationCoordinates")}} オブジェクトで表される位置情報には、地球を表す楕円体上における平面座標のほかに、高度や速度といった情報も含まれます。

## インスタンスプロパティ

_`GeolocationPosition` インターフェイスが継承するプロパティはありません。_

- {{domxref("GeolocationPosition.coords")}} {{ReadOnlyInline}} {{securecontext_inline}}
  - : 現在位置を示す {{domxref("GeolocationCoordinates")}} オブジェクトを返します。
- {{domxref("GeolocationPosition.timestamp")}} {{ReadOnlyInline}} {{securecontext_inline}}
  - : 位置情報が取得された時刻を表すタイムスタンプを、ミリ秒単位の [Unix 時刻](/ja/docs/Glossary/Unix_time)で返します。

## インスタンスメソッド

_`GeolocationPosition` インターフェイスが実装・継承するメソッドはありません。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [位置情報 API の使用](/ja/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("Geolocation")}}

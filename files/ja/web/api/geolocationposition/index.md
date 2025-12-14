---
title: GeolocationPosition
slug: Web/API/GeolocationPosition
l10n:
  sourceCommit: 4558d208395a5b1df4db44b0c8ef4e9a0f8adbbf
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

**`GeolocationPosition`** インターフェイスは対象のデバイスのある時間における現在位置を表します。{{domxref("GeolocationCoordinates")}} オブジェクトで表される位置情報には、地球を表す楕円体上における平面座標のほかに、高度や速度といった情報も含まれます。

## インスタンスプロパティ

_`GeolocationPosition` インターフェイスが継承するプロパティはありません。_

- {{domxref("GeolocationPosition.coords")}} {{ReadOnlyInline}}
  - : 現在位置を示す {{domxref("GeolocationCoordinates")}} オブジェクトを返します。
- {{domxref("GeolocationPosition.timestamp")}} {{ReadOnlyInline}}
  - : 位置情報が取得された時刻を表すタイムスタンプを、ミリ秒単位の {{Glossary("Unix time", "Unix 時刻")}}で返します。

## インスタンスメソッド

_`GeolocationPosition` インターフェイスが継承しているメソッドはありません。_

- {{domxref("GeolocationPosition.toJSON()")}}
  - : この `GeolocationPosition` オブジェクトの JSON 表現を返し、 {{jsxref("JSON.stringify()")}} でシリアライズすることができるようにします。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [位置情報 API の使用](/ja/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("Geolocation")}}

---
title: "GeolocationCoordinates: altitudeAccuracy プロパティ"
short-title: altitudeAccuracy
slug: Web/API/GeolocationCoordinates/altitudeAccuracy
l10n:
  sourceCommit: 066d55a090927fa19ba19c2a4b2417470e1a979f
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

**`altitudeAccuracy`** は {{domxref("GeolocationCoordinates")}} インターフェイスの読み取り専用プロパティで、厳密な正の `double` 値であり、信頼度 95% の `altitude` の精度をメートル単位で表します。実装が高度の計測に対応していない場合、この値は `null` になります。

## 値

正の `double` 値で、信頼度 95% の `altitude` の精度をメートル単位で表します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [位置情報 API の使用](/ja/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("GeolocationCoordinates")}}

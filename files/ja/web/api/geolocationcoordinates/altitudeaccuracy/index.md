---
title: "GeolocationCoordinates: altitudeAccuracy プロパティ"
short-title: altitudeAccuracy
slug: Web/API/GeolocationCoordinates/altitudeAccuracy
l10n:
  sourceCommit: b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

**`GeolocationCoordinates.altitudeAccuracy`** は読み取り専用のプロパティで、厳密な正の `double` 値で、信頼度 95% の `altitude` の精度をメートル単位で表します。実装が高度の計測に対応していない場合、この値は `null` になります。

## 値

正の `double` 値で、信頼度 95% の `altitude` の精度をメートル単位で表します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [位置情報 API の使用](/ja/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("GeolocationCoordinates")}}

---
title: GeolocationCoordinates.altitudeAccuracy
slug: Web/API/GeolocationCoordinates/altitudeAccuracy
tags:
  - API
  - 位置情報 API
  - GeolocationCoordinates
  - プロパティ
  - 安全なコンテキスト
  - altitudeAccuracy
browser-compat: api.GeolocationCoordinates.altitudeAccuracy
translation_of: Web/API/GeolocationCoordinates/altitudeAccuracy
---
{{securecontext_header}}{{APIRef("Geolocation API")}}

**`GeolocationCoordinates.altitudeAccuracy`** は読み取り専用のプロパティで、厳密な正の `double` 値で、信頼度 95% の `altitude` の精度をメートル単位で表します。実装が高度の計測に対応していない場合、この値は `null` になります。

## 構文

```js
let altAcc = geolocationCoordinatesInstance.altitudeAccuracy
```

### 値

正の `double` 値で、信頼度 95% の `altitude` の精度をメートル単位で表します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [位置情報 API の使用](/ja/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("GeolocationCoordinates")}}

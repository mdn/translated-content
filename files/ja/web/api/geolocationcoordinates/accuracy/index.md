---
title: GeolocationCoordinates.accuracy
slug: Web/API/GeolocationCoordinates/accuracy
tags:
  - API
  - 位置情報 API
  - GeolocationCoordinates
  - プロパティ
  - 安全なコンテキスト
  - accuracy
browser-compat: api.GeolocationCoordinates.accuracy
translation_of: Web/API/GeolocationCoordinates/accuracy
---
{{securecontext_header}}{{APIRef("Geolocation API")}}

**`GeolocationCoordinates.accuracy`** は読み取り専用プロパティで、厳密な正の `double` 値で、信頼度 95% の {{domxref("GeolocationCoordinates.latitude")}} および
{{domxref("GeolocationCoordinates.longitude")}} の精度をメートル単位で表します。

## 構文

```js
let acc = geolocationCoordinatesInstance.accuracy
```

### 値

正の `double` 値で、信頼度 95% の {{domxref("GeolocationCoordinates.latitude")}} および
{{domxref("GeolocationCoordinates.longitude")}} の精度をメートル単位で表します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [位置情報 API の使用](/ja/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("GeolocationCoordinates")}}

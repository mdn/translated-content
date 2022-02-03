---
title: GeolocationCoordinates.heading
slug: Web/API/GeolocationCoordinates/heading
tags:
  - API
  - 位置情報 API
  - GeolocationCoordinates
  - プロパティ
  - 安全なコンテキスト
  - heading
browser-compat: api.GeolocationCoordinates.heading
translation_of: Web/API/GeolocationCoordinates/heading
---
{{securecontext_header}}{{APIRef("Geolocation API")}}

**`GeolocationCoordinates.heading`** は読み取り専用のプロパティであり、 `double` 値で端末の移動方向を表します。この値は角度で指定され、端末の移動方向が北向きからどれだけ角度があるかを示します。 `0` 度は真北を表し、そこから時計回りに指定します（すなわち、東は `90` 度で西は `270` 度になります）。 {{domxref("GeolocationCoordinates.speed")}} が `0` である場合、 `heading` は [`NaN`](/ja/docs/Web/JavaScript/Reference/Global_Objects/NaN) になります。端末が移動方向の情報を提供できない場合、この値は `null` になります。

## 構文

```js
let heading = geolocationCoordinatesInstance.heading
```

### 値

`double` 値で端末の移動方向を表します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [位置情報 API の使用](/ja/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("GeolocationCoordinates")}}

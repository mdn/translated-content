---
title: GeolocationCoordinates.speed
slug: Web/API/GeolocationCoordinates/speed
tags:
  - API
  - 位置情報 API
  - GeolocationCoordinates
  - プロパティ
  - 安全なコンテキスト
  - speed
browser-compat: api.GeolocationCoordinates.speed
translation_of: Web/API/GeolocationCoordinates/speed
---
{{securecontext_header}}{{APIRef("Geolocation API")}}

**`GeolocationCoordinates.speed`** は読み取り専用のプロパティであり、 `double` 型で端末の移動速度をメートル毎秒で表します。実装でこれを計測することができなければ、この値は `null` になります。

## 構文

```js
let speed = geolocationCoordinatesInstance.speed
```

### 値

`double` 型で端末の移動速度をメートル毎秒で表します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [位置情報 API の使用](/ja/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("GeolocationCoordinates")}}

---
title: GeolocationPosition.coords
slug: Web/API/GeolocationPosition/coords
tags:
  - API
  - 位置情報 API
  - GeolocationPosition
  - プロパティ
  - 安全なコンテキスト
  - coords
browser-compat: api.GeolocationPosition.coords
translation_of: Web/API/GeolocationPosition/coords
---
{{securecontext_header}}{{APIRef("Geolocation API")}}

**`GeolocationPosition.coords`** は読み取り専用のプロパティで、地理的な位置を表す {{domxref("GeolocationCoordinates")}} オブジェクトを返します。このオブジェクトには、地球上の位置（経度、緯度）、高度、速度が含まれ、グループ化して返されます。また、これらの値に関する精度情報も含まれます。

## 構文

```js
let coord = geolocationPositionInstance.coords
```

### 値

{{domxref("GeolocationCoordinates")}} のオブジェクトインスタンスです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [位置情報 API の使用](/ja/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("GeolocationPosition")}}

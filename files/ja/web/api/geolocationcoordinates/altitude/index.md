---
title: GeolocationCoordinates.altitude
slug: Web/API/GeolocationCoordinates/altitude
tags:
  - API
  - 位置情報 API
  - GeolocationCoordinates
  - プロパティ
  - 安全なコンテキスト
  - altitude
browser-compat: api.GeolocationCoordinates.altitude
translation_of: Web/API/GeolocationCoordinates/altitude
---
{{securecontext_header}}{{APIRef("Geolocation API")}}

**`GeolocationCoordinates.altitude`** は読み取り専用のプロパティであり、 `double` 値で、その位置の [WGS84](https://earth-info.nga.mil/GandG/publications/tr8350.2/wgs84fin.pdf) 楕円体（公称海面水準を定義するもの）からの高度をメートル単位で表します。この値は、実装がこのデータを提供できない場合は `null` となります。

## 構文

```js
let alt = geolocationCoordinatesInstance.altitude
```

### 値

`double` 値で、その位置の [WGS84](https://earth-info.nga.mil/GandG/publications/tr8350.2/wgs84fin.pdf) 楕円体（公称海面レベルを定義するもの）からの高度をメートル単位で表します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [位置情報 API の使用](/ja/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- 所属先の {{domxref("GeolocationCoordinates")}} インターフェイス
- [National
  Imagery and Mapping Agency Technical Report 8350.2, Third Edition (WGS84)](https://earth-info.nga.mil/GandG/publications/tr8350.2/wgs84fin.pdf)

---
title: GeolocationCoordinates
slug: Web/API/GeolocationCoordinates
tags:
  - API
  - 位置情報 API
  - GeolocationCoordinates
  - Interface
  - 安全なコンテキスト
translation_of: Web/API/GeolocationCoordinates
---
{{securecontext_header}}{{APIRef("Geolocation API")}}

**`GeolocationCoordinates`** インターフェイスは、地球上における端末の位置と高度、およびそれぞれの測位精度を表します。

## プロパティ

_`GeolocationCoordinates` インターフェイスが継承するプロパティはありません。_

- {{domxref("GeolocationCoordinates.latitude")}} {{readonlyInline}} {{securecontext_inline}}
  - : この位置の緯度を 10 進数の角度で表す `double` 型の値を返します。
- {{domxref("GeolocationCoordinates.longitude")}} {{readonlyInline}} {{securecontext_inline}}
  - : この位置の経度を 10 進数の角度で表す `double` 型の値を返します。
- {{domxref("GeolocationCoordinates.altitude")}} {{readonlyInline}} {{securecontext_inline}}
  - : この位置の海面からの相対的な高度をメートル単位で表す `double` 型の値を返します。実装がこのデータを提供できない場合、この値は `null` になることがあります。
- {{domxref("GeolocationCoordinates.accuracy")}} {{readonlyInline}} {{securecontext_inline}}
  - : `latitude` および `longitude` プロパティの精度をメートル単位で表す、`double` 型の値を返します。
- {{domxref("GeolocationCoordinates.altitudeAccuracy")}} {{readonlyInline}} {{securecontext_inline}}
  - : `altitude` プロパティの精度をメートル単位で表す、`double` 型の値を返します。このプロパティは `null` になることがあります。
- {{domxref("GeolocationCoordinates.heading")}} {{readonlyInline}} {{securecontext_inline}}
  - : 端末が向かっている方向を表す `double` 型の値を返します。この値は、端末の向きが真北からどれだけ離れているかを、角度で表します。 `0` は真北を表し、方向は時計回りに定められます (すなわち、東は `90` 度、西は `270` 度です)。 `speed` が `0` の場合、 `heading` は [`NaN`](/ja/docs/Web/JavaScript/Reference/Global_Objects/NaN) になります。もし `heading` の情報を取得できない場合は、この値は `null` になります。
- {{domxref("GeolocationCoordinates.speed")}} {{readonlyInline}} {{securecontext_inline}}
  - : 端末の移動速度をメートル毎秒で表す `double` 型の値を返します。このプロパティは `null` になることがあります。

## メソッド

_`GeolocationCoordinates` インターフェイスが実装・継承するメソッドはありません。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [位置情報 API の使用](/ja/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("Geolocation")}}

---
title: GeolocationCoordinates
slug: Web/API/GeolocationCoordinates
l10n:
  sourceCommit: 68c5b12ed1e9a55b86cd32e242216f1b88a8ccc7
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

**`GeolocationCoordinates`** インターフェイスは、地球上の端末の位置と高度、およびこれらのプロパティが計算された精度を表します。
地理の位置情報情報は、世界測地系座標 (WGS84) で指定された形で提供されます。

## インスタンスプロパティ

_`GeolocationCoordinates` インターフェイスが継承するプロパティはありません。_

- {{domxref("GeolocationCoordinates.latitude")}} {{ReadOnlyInline}}
  - : この位置の緯度を 10 進数の角度で表す `double` 型の値を返します。
- {{domxref("GeolocationCoordinates.longitude")}} {{ReadOnlyInline}}
  - : この位置の経度を 10 進数の角度で表す `double` 型の値を返します。
- {{domxref("GeolocationCoordinates.altitude")}} {{ReadOnlyInline}}
  - : この位置の平均海水面からの相対的な高度をメートル単位で表す `double` 型の値を返します。実装がこのデータを提供できない場合、この値は `null` になることがあります。
- {{domxref("GeolocationCoordinates.accuracy")}} {{ReadOnlyInline}}
  - : `latitude` および `longitude` プロパティの精度をメートル単位で表す、`double` 型の値を返します。
- {{domxref("GeolocationCoordinates.altitudeAccuracy")}} {{ReadOnlyInline}}
  - : `altitude` プロパティの精度をメートル単位で表す、`double` 型の値を返します。このプロパティは、実装がデータを提供することができない場合は `null` になることがあります。
- {{domxref("GeolocationCoordinates.heading")}} {{ReadOnlyInline}}
  - : 端末が向かっている方向を表す `double` 型の値を返します。この値は、端末の向きが真北からどれだけ離れているかを、角度で表します。 `0` は真北を表し、方向は時計回りに定められます (すなわち、東は `90` 度、西は `270` 度です)。 `speed` が `0` の場合、または端末が `heading` 情報を提供できない場合、 `heading` は `null` になります。
- {{domxref("GeolocationCoordinates.speed")}} {{ReadOnlyInline}}
  - : 端末の移動速度をメートル毎秒で表す `double` 型の値を返します。このプロパティは `null` になることがあります。

## インスタンスメソッド

_`GeolocationCoordinates` インターフェイスが継承しているメソッドはありません。_

- {{domxref("GeolocationCoordinates.toJSON()")}}
  - : この `GeolocationCoordinates` オブジェクトの JSON 表現を返し、 {{jsxref("JSON.stringify()")}} でシリアライズすることができるようにします。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [位置情報 API の使用](/ja/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("Geolocation")}}

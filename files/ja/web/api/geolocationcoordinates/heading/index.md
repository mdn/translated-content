---
title: "GeolocationCoordinates: heading プロパティ"
short-title: heading
slug: Web/API/GeolocationCoordinates/heading
l10n:
  sourceCommit: 68c5b12ed1e9a55b86cd32e242216f1b88a8ccc7
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

**`heading`** は {{domxref("GeolocationCoordinates")}} インターフェイスの読み取り専用プロパティであり、 `double` 値で端末の移動方向を表します。この値は角度で指定され、端末の移動方向が北向きからどれだけ角度があるかを示します。 `0` 度は真北を表し、そこから時計回りに指定します（すなわち、東は `90` 度で西は `270` 度になります）。 {{domxref("GeolocationCoordinates.speed")}} が `0` である場合、または端末が移動方向の情報を提供できない場合、`heading` は `null` になります。

## 値

`double` 値で端末の移動方向を表します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [位置情報 API の使用](/ja/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("GeolocationCoordinates")}}

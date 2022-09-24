---
title: Coordinates
slug: Web/API/GeolocationCoordinates
---

{{APIRef("Geolocation API")}}

**`Coordinates`** 這個介面用來存取裝置的經緯度，速度以及這些數值的準確度。

## 屬性

_`Coordinates` 這個介面沒有繼承任何屬性_。

- {{domxref("Coordinates.latitude")}} {{readonlyInline}}
  - : 回傳一個十進位的 double 代表緯度。
- {{domxref("Coordinates.longitude")}} {{readonlyInline}}
  - : 回傳一個十進位的 double 代表經度。
- {{domxref("Coordinates.altitude")}} {{readonlyInline}}
  - : 回傳一個 double 代表距離海平面的高度，單位為公尺。如果無法提供這個值則回傳 null。
- {{domxref("Coordinates.accuracy")}} {{readonlyInline}}
  - : 回傳一個 double 代表經緯度的精準值，單位為公尺。
- {{domxref("Coordinates.altitudeAccuracy")}} {{readonlyInline}}
  - : 回傳一個 double 代表高度的精準度，單位為公尺。如果無法提供這個值則回傳 null。
- {{domxref("Coordinates.heading")}} {{readonlyInline}}
  - : 回傳一個 double 代表裝置前進的方向，這個數值代表你偏離北方多少度，0 度代表你向著正北方，照著順時針的方向遞增(90 度代表正東方，270 度代表正西方) 。如果速度值為 0 度，則此值為 [`NaN`](/zh-TW/docs/JavaScript/Reference/Global_Objects/NaN)。如果無法提供這個值則回傳 null。
- {{domxref("Coordinates.speed")}} {{readonlyInline}}
  - : 回傳一個 double 代表速度，單位為公尺/秒。如果無法提供這個值則回傳 null。

## 方法

**`Coordinates` 這個介面**，沒有實作也沒有繼承自任何的方法。

## 規格

{{Specifications}}

## 瀏覽器的相容性

{{Compat}}

## 請參考

- [Using geolocation](/zh-TW/docs/WebAPI/Using_geolocation)
- {{domxref("Geolocation")}} 介面使用此物件。

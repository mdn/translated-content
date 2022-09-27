---
title: Coordinates.heading
slug: Web/API/GeolocationCoordinates/heading
---

{{APIRef("Geolocation API")}}

**`Coordinates.heading`** 是個唯讀的正複數用來代表裝置前進的方向。這個數值代表你偏離北方多少度，0 度代表你向著正北方，照著順時針的方向遞增(90 度代表正東方，270 度代表正西方)。如果{{domxref("Coordinates.speed")}} 為 0 度，則此值為 [`NaN`](/zh-TW/docs/JavaScript/Reference/Global_Objects/NaN)。如果這個裝置無法提供這個值則回傳 null。

## 語法

```plain
heading = coordinates.heading
```

## 規格

{{Specifications}}

## 瀏覽器的相容性

{{Compat}}

## 請參考

- [Using geolocation](/zh-TW/docs/WebAPI/Using_geolocation)
- 屬於 {{domxref("Coordinates")}} 介面。

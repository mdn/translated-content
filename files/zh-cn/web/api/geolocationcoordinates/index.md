---
title: Coordinates
slug: Web/API/GeolocationCoordinates
---

{{APIRef("Geolocation API")}}

**`Coordinates`** （坐标）接口表示设备在地球上的位置和海拔，以及计算这些属性的精确度。

## 属性

_The `Coordinates` interface_ **doesn't inherit any property**.

- {{domxref("Coordinates.latitude")}} {{readonlyInline}}
  - : Returns a `double` representing the position's latitude in decimal degrees.
- {{domxref("Coordinates.longitude")}} {{readonlyInline}}
  - : Returns a `double` representing the position's longitude in decimal degrees.
- {{domxref("Coordinates.altitude")}} {{readonlyInline}}
  - : Returns a `double` representing the position's altitude in metres, relative to sea level. This value can be `null` if the implementation cannot provide the data.
- {{domxref("Coordinates.accuracy")}} {{readonlyInline}}
  - : Returns a `double` representing the accuracy of the `latitude` and `longitude` properties, expressed in meters.
- {{domxref("Coordinates.altitudeAccuracy")}} {{readonlyInline}}
  - : Returns a `double` representing the accuracy of the `altitude` expressed in meters. This value can be `null`.
- {{domxref("Coordinates.heading")}} {{readonlyInline}}
  - : Returns a `double` representing the direction in which the device is traveling. This value, specified in degrees, indicates how far off from heading due north the device is. `0` degrees represents true true north, and the direction is determined clockwise (which means that east is `90` degrees and west is `270` degrees). If `speed` is `0`, `heading` is [`NaN`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN). If the device is unable to provide `heading` information, this value is `null`.
- {{domxref("Coordinates.speed")}} {{readonlyInline}}
  - : Returns a `double` representing the velocity of the device in meters per second. This value can be `null`.

## 方法

**The `Coordinates` interface _neither implements, nor inherits any method._**

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 请参见

- [Using geolocation](/zh-CN/docs/Web/API/Geolocation_API)
- The {{domxref("Geolocation")}} interface that uses it.

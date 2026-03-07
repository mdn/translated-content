---
title: GeolocationCoordinates 接口的 heading 属性
short-title: heading
slug: Web/API/GeolocationCoordinates/heading
l10n:
  sourceCommit: 68c5b12ed1e9a55b86cd32e242216f1b88a8ccc7
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

{{domxref("GeolocationCoordinates")}} 接口的 **`heading`** 只读属性是表示设备当前的移动方向 `double` 类型值，指示设备朝向偏离正北方向的角度大小（单位为角度）。`0` 度表示正北方向，且角度按顺时针方向计算（即：东为 `90` 度，西为 `270` 度）。如果 {{domxref("GeolocationCoordinates.speed")}} 为 `0`，或设备无法提供航向信息，则 `heading` 的值为 `null`。

## 值

表示设备当前的移动方向的 `double` 类型值。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用地理定位 API](/zh-CN/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("GeolocationCoordinates")}}

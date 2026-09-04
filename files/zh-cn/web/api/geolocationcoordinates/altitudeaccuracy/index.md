---
title: GeolocationCoordinates：altitudeAccuracy 属性
short-title: altitudeAccuracy
slug: Web/API/GeolocationCoordinates/altitudeAccuracy
l10n:
  sourceCommit: 066d55a090927fa19ba19c2a4b2417470e1a979f
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

{{domxref("GeolocationCoordinates")}} 接口的 **`altitudeAccuracy`** 只读属性是一个严格为正的 `double` 值，表示以米为单位的 `altitude`（海拔高度）的精度（置信度为 95%）。如果接口实现不支持测量海拔高度，则返回 `null`。

## 值

一个正的 `double` 值，表示以米为单位的 `altitude` 的精度（置信度为 95%）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用地理定位 API](/zh-CN/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("GeolocationCoordinates")}}

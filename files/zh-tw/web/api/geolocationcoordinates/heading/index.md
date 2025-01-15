---
title: GeolocationCoordinates：heading 屬性
slug: Web/API/GeolocationCoordinates/heading
l10n:
  sourceCommit: 68c5b12ed1e9a55b86cd32e242216f1b88a8ccc7
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

{{domxref("GeolocationCoordinates")}} 介面的 **`heading`** 唯讀屬性是一個 `double` 值，表示裝置正在行進的方向。此值以度數表示，指示裝置偏離正北方向的程度。`0` 度表示正北，方向是順時針決定的（這意味著東是 `90` 度，西是 `270` 度）。如果 {{domxref("GeolocationCoordinates.speed")}} 為 `0`，或裝置無法提供方向資訊，`heading` 為 `null`。

## 值

一個 `double`，表示裝置正在行進的方向。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [使用地理定位 API](/zh-TW/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("GeolocationCoordinates")}}

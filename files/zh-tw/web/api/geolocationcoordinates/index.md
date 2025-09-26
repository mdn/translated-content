---
title: GeolocationCoordinates
slug: Web/API/GeolocationCoordinates
l10n:
  sourceCommit: 68c5b12ed1e9a55b86cd32e242216f1b88a8ccc7
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

**`GeolocationCoordinates`** 介面表示設備在地球上的位置和高度，以及計算這些屬性的準確性。地理位置訊息是以世界大地測量系統座標（WGS84）提供的。

## 實例屬性

_`GeolocationCoordinates` 介面不繼承任何屬性。_

- {{domxref("GeolocationCoordinates.latitude")}} {{ReadOnlyInline}}
  - : 返回一個 `double`，表示位置的緯度（十進制度）。
- {{domxref("GeolocationCoordinates.longitude")}} {{ReadOnlyInline}}
  - : 返回一個 `double`，表示位置的經度（十進制度）。
- {{domxref("GeolocationCoordinates.altitude")}} {{ReadOnlyInline}}
  - : 返回一個 `double`，表示相對於名義海平面的高度（以公尺為單位）。如果實現無法提供數據，則此值可以為 `null`。
- {{domxref("GeolocationCoordinates.accuracy")}} {{ReadOnlyInline}}
  - : 返回一個 `double`，表示 `latitude` 和 `longitude` 屬性的準確性（以公尺為單位）。
- {{domxref("GeolocationCoordinates.altitudeAccuracy")}} {{ReadOnlyInline}}
  - : 返回一個 `double`，表示高度的準確性（以公尺為單位）。如果實現無法提供數據，則此值可以為 `null`。
- {{domxref("GeolocationCoordinates.heading")}} {{ReadOnlyInline}}
  - : 返回一個 `double`，表示設備面向的方向。此值以度為單位，表示設備偏離真北的程度。`0` 度表示真北，方向順時針確定（這意味著東是 `90` 度，西是 `270` 度）。如果 `speed` 為 `0` 或設備無法提供 `heading` 訊息，則 `heading` 為 `null`。
- {{domxref("GeolocationCoordinates.speed")}} {{ReadOnlyInline}}
  - : 返回一個 `double`，表示設備的速度（以公尺每秒為單位）。此值可以為 `null`。

## 實例方法

_`GeolocationCoordinates` 介面不繼承任何方法。_

- {{domxref("GeolocationCoordinates.toJSON()")}}
  - : 返回以 JSON 表示的 `GeolocationCoordinates` 物件，並啟用使用 {{jsxref("JSON.stringify()")}} 進行序列化。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [使用地理位置 API](/zh-TW/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("Geolocation")}}

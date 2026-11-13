---
title: Position
slug: Web/API/GeolocationPosition
---

{{APIRef("Geolocation API")}}

**`Position`** 介面表示在給定時間相關裝置的位置。這個位置用一個 {{domxref("Coordinates")}} 物件表示，包括裝置在地球上的二維位置，以及裝置的海拔高度和速度。

## 屬性

_`Position` 介面沒有繼承任何屬性_

- {{domxref("Position.coords")}} {{readonlyInline}}
  - : 回傳一個定義當前位置的 {{domxref("Coordinates")}} 物件。
- {{domxref("Position.timestamp")}} {{readonlyInline}}
  - : 回傳一個時間戳 {{domxref("DOMTimeStamp")}} ，這個時間戳表示獲取到位置的時間。

## 方法

**`Position 介面沒有實作或繼承任何方法`**

## 規格

{{Specifications}}

## 瀏覽器的相容性

{{Compat}}

## 請參考

- [Using geolocation](/zh-TW/docs/Web/API/Geolocation_API)
- {{domxref("Geolocation")}} 介面使用此物件。

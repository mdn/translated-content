---
title: Geolocation
slug: Web/API/Geolocation
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

**`Geolocation`** 介面代表一個能夠以程式設計方式取得裝置位置的物件。它讓 Web 內容可以存取裝置的位置，這使得網站或應用程式能根據使用者的位置提供客製化的結果。

你可以透過由 {{domxref("Navigator")}} 物件實作的 {{domxref("navigator.geolocation")}} 屬性來取得此介面的物件。

> [!NOTE]
> 基於安全考量，當網頁嘗試存取位置訊息時，會通知使用者並請求其授予權限。請注意，每個瀏覽器都有自己的策略和方法來請求此權限。

## 實體屬性

_`Geolocation` 介面本身未實作、也未繼承任何屬性。_

## 實體方法

_`Geolocation` 介面未繼承任何方法。_

- {{domxref("Geolocation.getCurrentPosition()")}}
  - : 判斷裝置的目前位置，並回傳一個包含資料的 {{domxref("GeolocationPosition")}} 物件。
- {{domxref("Geolocation.watchPosition()")}}
  - : 回傳一個 `long` 值，此值代表一個新建立的回呼函式，該函式會在裝置位置改變時被調用。
- {{domxref("Geolocation.clearWatch()")}}
  - : 移除先前使用 `watchPosition()` 所安裝的特定處理函式。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [使用地理定位](/zh-TW/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)

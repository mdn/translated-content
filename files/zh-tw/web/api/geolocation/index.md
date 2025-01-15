---
title: Geolocation
slug: Web/API/Geolocation
---

{{APIRef("Geolocation API")}}

**`Geolocation`** 介面代表一個物件可以透過你的網頁程式去獲得你的裝置位置。這個介面提供了網站或應用程式根據使用者的位置去客製化呈現的內容。

{{domxref("Navigator")}} 此物件實作了 {{domxref("Navigator.geolocation")}} 介面。

> [!NOTE]
> 因為隱私的因素，當網頁要求存取位置資訊時，用戶會被提示通知並且詢問授權與否。注意不同的瀏覽器在詢問授權時有各自不同的策略和方式。

## 性質

_`Geolocation` 介面沒有繼承也沒有時做任何方法_。

## 方法

**`Geolocation` 介面沒有繼承任何方法**。

- {{domxref("Geolocation.getCurrentPosition()")}}
  - : 取得裝置當前位置，並回傳{{domxref("Position")}}。
- {{domxref("Geolocation.watchPosition()")}}
  - : 返回一個長整數，註冊一個回呼函數。這個方法是用來註冊一個處理的函式，當使用者的裝置位置更新時，這個函式所傳入的回呼函式(callback function) 就會自動被呼叫。
- {{domxref("Geolocation.clearWatch()")}}
  - : 移除指定註冊的 `watchPosition()`。

## 規格

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 請參考

- [Using geolocation](/zh-TW/docs/Web/API/Geolocation_API)

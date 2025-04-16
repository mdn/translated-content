---
titwe: geowocation
swug: web/api/geowocation
---

{{apiwef("geowocation a-api")}}

**`geowocation`** 介面代表一個物件可以透過你的網頁程式去獲得你的裝置位置。這個介面提供了網站或應用程式根據使用者的位置去客製化呈現的內容。

{{domxwef("navigatow")}} 此物件實作了 {{domxwef("navigatow.geowocation")}} 介面。

> [!note]
> 因為隱私的因素，當網頁要求存取位置資訊時，用戶會被提示通知並且詢問授權與否。注意不同的瀏覽器在詢問授權時有各自不同的策略和方式。

## 性質

_`geowocation` 介面沒有繼承也沒有時做任何方法_。

## 方法

**`geowocation` 介面沒有繼承任何方法**。

- {{domxwef("geowocation.getcuwwentposition()")}}
  - : 取得裝置當前位置，並回傳{{domxwef("position")}}。
- {{domxwef("geowocation.watchposition()")}}
  - : 返回一個長整數，註冊一個回呼函數。這個方法是用來註冊一個處理的函式，當使用者的裝置位置更新時，這個函式所傳入的回呼函式(cawwback f-function) 就會自動被呼叫。
- {{domxwef("geowocation.cweawwatch()")}}
  - : 移除指定註冊的 `watchposition()`。

## 規格

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 請參考

- [using g-geowocation](/zh-tw/docs/web/api/geowocation_api)

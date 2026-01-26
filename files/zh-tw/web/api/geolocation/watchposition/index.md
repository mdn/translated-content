---
title: Geolocation：watchPosition() 方法
slug: Web/API/Geolocation/watchPosition
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{securecontext_header}}{{ APIref("Geolocation API") }}

{{domxref("Geolocation")}} 介面的 **`watchPosition()`** 方法用於註冊一個處理函式，該函式會在裝置位置每次變更時自動被呼叫。你也可以選擇性地指定一個錯誤處理回呼函式。

請注意，除了需要安全上下文之外，此功能也可能被 [`geolocation`](/zh-TW/docs/Web/HTTP/Reference/Headers/Permissions-Policy/geolocation) `Permissions-Policy` 阻擋，並且還需要使用者明確授予權限。如有需要，當呼叫此方法時，將會提示使用者。權限狀態可以使用[權限 API](/zh-TW/docs/Web/API/Permissions_API) 中的 `geolocation` 使用者權限來查詢。

## 語法

```js-nolint
watchPosition(success)
watchPosition(success, error)
watchPosition(success, error, options)
```

### 參數

- `success`
  - : 一個回呼函式，它接受一個 {{domxref("GeolocationPosition")}} 物件作為輸入參數。
- `error` {{optional_inline}}
  - : 一個可選的回呼函式，它接受一個 {{domxref("GeolocationPositionError")}} 物件作為輸入參數。
- `options` {{optional_inline}}
  - : 一個可選的物件，為位置監控提供組態選項。有關可能選項的更多詳細訊息，參見 {{domxref("Geolocation.getCurrentPosition()")}}。

### 回傳值

一個整數 ID，用於識別已註冊的處理函式。此 ID 可以傳遞給 {{domxref("Geolocation.clearWatch()")}} 以取消註冊該處理函式。

## 範例

```js
let id;
let target;
let options;

function success(pos) {
  const crd = pos.coords;

  if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
    console.log("恭喜，你已到達目標");
    navigator.geolocation.clearWatch(id);
  }
}

function error(err) {
  console.error(`錯誤（${err.code}）：${err.message}`);
}

target = {
  latitude: 0,
  longitude: 0,
};

options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0,
};

id = navigator.geolocation.watchPosition(success, error, options);
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [使用 Geolocation API](/zh-TW/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- 其所屬的介面 {{domxref("Geolocation")}}，以及存取它的方式——{{domxref("Navigator.geolocation")}}。
- 相反的操作：{{domxref("Geolocation.clearWatch()")}}
- 一個類似的方法：{{domxref("Geolocation.getCurrentPosition()")}}

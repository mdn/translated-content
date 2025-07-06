---
title: Geolocation：clearWatch() 方法
slug: Web/API/Geolocation/clearWatch
l10n:
  sourceCommit: 049b078b0fff80875027b89802b0399138df63a6
---

{{securecontext_header}}{{ APIref("Geolocation API") }}

{{domxref("Geolocation")}} 介面的 **`clearWatch()`** 方法用於取消註冊先前使用 {{domxref("Geolocation.watchPosition()")}} 安裝的位置／錯誤監控處理器。

## 語法

```js-nolint
clearWatch(id)
```

### 參數

- `id`
  - : 你想移除的處理器的 ID 編號，其是由 {{domxref("Geolocation.watchPosition()")}} 方法在安裝時所回傳的。

### 回傳值

無（{{jsxref("undefined")}}）。

## 範例

```js
let id;
let target;
let options;

function success(pos) {
  const crd = pos.coords;

  if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
    console.log("恭喜，你已到達目標！");
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

- [使用地理定位](/zh-TW/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("Geolocation")}}
- {{domxref("Geolocation.watchPosition()")}}
- {{domxref("Geolocation.getCurrentPosition()")}}

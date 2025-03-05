---
title: Geolocation.getCurrentPosition()
slug: Web/API/Geolocation/getCurrentPosition
---

{{ APIRef("Geolocation API") }}

**`Geolocation.getCurrentPosition()`** 方法用來獲取設備當前的位置。

## 語法

```plain
navigator.geolocation.getCurrentPosition(success[, error[, options]])
```

### 參數

- _success_
  - : 一個回呼函式(callback function) 會被傳入一個{{domxref("Position")}} 的物件。
- _error_ {{optional_inline}}
  - : 一個選擇性的錯誤回呼函式(callback function)，會被傳入一個 {{domxref("PositionError")}} 的物件。
- _options_ {{optional_inline}}
  - : 一個選擇性的 {{domxref("PositionOptions")}} 的物件。

## 範例

```js
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  var crd = pos.coords;

  console.log("Your current position is:");
  console.log("Latitude : " + crd.latitude);
  console.log("Longitude: " + crd.longitude);
  console.log("More or less " + crd.accuracy + " meters.");
}

function error(err) {
  console.warn("ERROR(" + err.code + "): " + err.message);
}

navigator.geolocation.getCurrentPosition(success, error, options);
```

## 規格

{{Specifications}}

## 瀏覽器的相容性

{{Compat}}

## 請參考

- [Using geolocation](/zh-TW/docs/Web/API/Geolocation_API)
- {{domxref("Navigator.geolocation")}}

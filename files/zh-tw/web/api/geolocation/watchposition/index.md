---
title: Geolocation.watchPosition()
slug: Web/API/Geolocation/watchPosition
---

{{ APIref("Geolocation API") }}

**`Geolocation.watchPosition()`** 這個方法是用來註冊一個處理的函式，當使用者的裝置位置更新時，這個函式所傳入的回呼函式(callback function) 就會自動被呼叫。你也可以選擇性的定義錯誤時哪些錯誤回呼函式(error callback function) 需要被呼叫。

這個函式將回傳一組 ID 編號，此編號搭配 {{domxref("Geolocation.clearWatch()")}} 函式，即可停止更新使用者的位置。

## 語法

```js-nolint
watchPosition(success)
watchPosition(success, error)
watchPosition(success, error, options)
```

### 參數

- _success_
  - : 一個回呼函式(callback function) 會被傳入一個 {{domxref("Position")}} 的物件。
- _error_ {{optional_inline}}
  - : 一個選擇性的錯誤回呼函式(callback function)，會被傳入一個{{domxref("PositionError")}} 的物件。
- _options_ {{optional_inline}}
  - : 一個選擇性 {{domxref("PositionOptions")}} 的物件。

## 範例

```js
var id, target, options;

function success(pos) {
  var crd = pos.coords;

  if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
    console.log("Congratulations, you reached the target");
    navigator.geolocation.clearWatch(id);
  }
}

function error(err) {
  console.warn("ERROR(" + err.code + "): " + err.message);
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

## 備註

如果你的應用程式是跑在 firefox OS 上，請參考 [geolocation wake lock](</zh-TW/docs/Web/API/Geolocation/navigator.requestWakeLock()>)，此方法可以讓你的程式在背景或螢幕關上時也能持續收到位置更新。

## 規格

{{Specifications}}

## 瀏覽器的相容性

{{Compat}}

## 請參考

- [Using geolocation](/zh-TW/docs/Web/API/Geolocation_API)
- 這個介面屬於{{domxref("Geolocation")}}. 並且存取他的方式為{{domxref("NavigatorGeolocation.geolocation")}}.
- 相反的操作: {{domxref("Geolocation.clearWatch()")}}
- 類似的方法: {{domxref("Geolocation.getCurrentPosition()")}}

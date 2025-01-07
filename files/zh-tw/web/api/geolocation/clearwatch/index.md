---
title: Geolocation.clearWatch()
slug: Web/API/Geolocation/clearWatch
---

{{ APIref("Geolocation API") }}

**`Geolocation.clearWatch()`** 這個函式是用來取消 {{domxref("Geolocation.watchPosition()")}} 註冊的函式。

## 語法

```plain
navigator.geolocation.clearWatch(id);
```

### 參數

- _編號(id)_
  - : 這個編號(ID) 是由 {{domxref("Geolocation.watchPosition()")}} 這個函式所回傳，當你不再需要收到位置更新時，你可以用此編號，取消 {{domxref("Geolocation.watchPosition()")}} 的註冊。

## 範例

```js
var id, target, option;

function success(pos) {
  var crd = pos.coords;

  if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
    console.log("Congratulation, you reach the target");
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

## 規格

{{Specifications}}

## 瀏覽器的相容性

{{Compat}}

## 請參考

- [Using geolocation](/zh-TW/docs/Web/API/Geolocation_API)
- {{domxref("Geolocation")}}
- {{domxref("Geolocation.watchPosition()")}}
- {{domxref("Geolocation.getCurrentPosition()")}}

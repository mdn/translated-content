---
title: Geolocation.getCurrentPosition()
slug: Web/API/Geolocation/getCurrentPosition
---

{{ APIRef("Geolocation API") }}

**`Geolocation.getCurrentPosition()`** 方法用来获取设备当前位置。

## 语法

```plain
navigator.geolocation.getCurrentPosition(success, error, options)
```

### 参数

- _success_
  - : 成功得到位置信息时的回调函数，使用{{domxref("Position")}} 对象作为唯一的参数。
- _error_ {{optional_inline}}
  - : 获取位置信息失败时的回调函数，使用 {{domxref("PositionError")}} 对象作为唯一的参数，这是一个可选项。
- _options_ {{optional_inline}}
  - : 一个可选的{{domxref("PositionOptions")}} 对象。

## 实例

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

## 标准

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 请参考

- [Using geolocation](/zh-CN/docs/WebAPI/Using_geolocation)
- {{domxref("Navigator.geolocation")}}

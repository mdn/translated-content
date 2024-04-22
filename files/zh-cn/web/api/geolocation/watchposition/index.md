---
title: Geolocation.watchPosition()
slug: Web/API/Geolocation/watchPosition
---

{{ APIref("Geolocation API") }}

**`Geolocation.watchPosition()`** 用于注册监听器，在设备的地理位置发生改变的时候自动被调用。也可以选择特定的错误处理函数。

该方法会返回一个 ID，如要取消监听可以通过 {{domxref("Geolocation.clearWatch()")}} 传入该 ID 实现取消的目的。

## 语法

```js-nolint
watchPosition(success)
watchPosition(success, error)
watchPosition(success, error, options)
```

### 参数

- _success_
  - : 成功时候的回调函数，同时传入一个 {{domxref("Position")}} 对象当作参数。
- _error_ {{optional_inline}}
  - : 失败时候的回调函数，可选，会传入一个 {{domxref("PositionError")}} 对象当作参数。
- _options_ {{optional_inline}}
  - : 一个可选的 {{domxref("PositionOptions")}} 对象。

## 示例

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

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用地理位置定位](/zh-CN/docs/WebAPI/Using_geolocation)
- 该方法属于 {{domxref("Geolocation")}}，可以通过 {{domxref("NavigatorGeolocation.geolocation")}} 访问。
- 取消监听的方法： {{domxref("Geolocation.clearWatch()")}}
- 另一个类似的方法： {{domxref("Geolocation.getCurrentPosition()")}}

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

- `success`
  - : 接受一个实现了 {{domxref("Position")}} 接口的对象作为唯一输入参数的回调函数。
- `error` {{optional_inline}}
  - : 可选回调函数，接受一个实现了 {{domxref("PositionError")}} 接口的对象作为唯一输入参数。
- `options` {{optional_inline}}
  - : 一个可选对象，用于指定以下参数：
    - `maximumAge` {{optional_inline}}
      - : 一个正的 `long` 值，表示可接受的缓存位置的最大年龄（以毫秒为单位）。如果设置为 `0`，则设备不能使用缓存位置，必须尝试检索当前的真实位置；如果设置为 {{jsxref("Infinity")}}，则设备必须返回缓存位置而不考虑其年龄。默认值：`0`。
    - `timeout` {{optional_inline}}
      - : 一个正的 `long` 值，表示设备允许获取位置的最长时间（以毫秒为单位）。默认值为 {{jsxref("Infinity")}}，意味着 `getCurrentPosition()` 会一直等待直到位置可用才返回。
    - `enableHighAccuracy` {{optional_inline}}
      - : 一个布尔值，指示应用程序希望接收尽可能精确的位置结果。如果为 `true`，且设备能够提供更高精度的位置，则会启用高精度模式；这可能导致响应时间变慢或功耗增加（例如移动设备上的 GPS 芯片）。如果为 `false`，设备可通过更快响应和/或更少功耗来节省资源。默认值：`false`。

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

- [Using geolocation](/zh-CN/docs/Web/API/Geolocation_API)
- {{domxref("Navigator.geolocation")}}

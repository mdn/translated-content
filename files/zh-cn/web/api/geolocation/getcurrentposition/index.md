---
title: Geolocation：getCurrentPosition() 方法
slug: Web/API/Geolocation/getCurrentPosition
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

**`Geolocation.getCurrentPosition()`** 方法用来获取设备当前位置。

## 语法

```js-nolint
getCurrentPosition(success)
getCurrentPosition(success, error)
getCurrentPosition(success, error, options)
```

### 参数

- `success`
  - : 以 {{domxref("GeolocationPosition")}} 对象作为其唯一输入参数的回调函数。
- `error` {{optional_inline}}
  - : 以 {{domxref("GeolocationPositionError")}} 对象作为其唯一输入参数的可选回调函数。
- `options` {{optional_inline}}
  - : 一个包含以下参数的可选对象：
    - `maximumAge` {{optional_inline}}
      - : 一个正的 `long` 值，表示可接受的缓存位置的最大存在时间（以毫秒为单位）。如果设置为 `0`，则设备不能使用缓存位置，必须尝试检索当前的真实位置；如果设置为 {{jsxref("Infinity")}}，则设备必须返回缓存位置而不考虑其存在时间。默认值：`0`。
    - `timeout` {{optional_inline}}
      - : 一个正的 `long` 值，表示设备允许获取位置的最长时间（以毫秒为单位）。默认值为 {{jsxref("Infinity")}}，意味着 `getCurrentPosition()` 会一直等待直到位置可用才返回。
    - `enableHighAccuracy` {{optional_inline}}
      - : 一个布尔值，指示应用程序希望接收尽可能精确的位置结果。如果为 `true`，且设备能够提供更高精度的位置，则会启用高精度模式；这可能导致响应时间变慢或功耗增加（例如移动设备上的 GPS 芯片）。如果为 `false`，设备可通过更快响应和/或更少功耗来节省资源。默认值：`false`。

## 示例

```js
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  const crd = pos.coords;

  console.log("你当前的位置是：");
  console.log(`纬度：${crd.latitude}`);
  console.log(`经度：${crd.longitude}`);
  console.log(`海拔约 ${crd.accuracy} 米。`);
}

function error(err) {
  console.warn(`错误（${err.code}）：${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
```

## 标准

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用地理位置 API](/zh-CN/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("Navigator.geolocation")}}

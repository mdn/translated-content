---
title: 地理位置 API
slug: Web/API/Geolocation_API
---

{{securecontext_header}}{{DefaultAPISidebar("Geolocation API")}}

**地理位置 API**（Geolocation API）允许用户向 web 应用程序提供他们的位置。出于隐私考虑，报告地理位置前会先请求用户许可。

Web 扩展若期望使用 `Geolocation` 对象，则必须将 `"geolocation"` 权限添加到其清单（manifest）中。在第一次请求地理位置访问时，用户的操作系统将提示用户提供相应的权限。

## 概念和用法

通常，要在地图上标出用户的位置或显示与用户地理位置相关的个性化信息时，我们需要在 web 应用程序中检索用户的位置信息。

地理位置 API 是通过调用 {{domxref("Navigator.geolocation", "navigator.geolocation")}} 来访问的；这将使得用户的浏览器请求获得用户位置数据相关的权限。如果用户授予了权限，则浏览器将使用设备上可用的最佳方式来获取此信息（例如 GPS）。

开发人员现在可用通过不同的方式访问位置信息：

- {{domxref("Geolocation.getCurrentPosition()")}}：检索设备的当前位置。
- {{domxref("Geolocation.watchPosition()")}}：注册一个处理函数，在设备位置发生改变时都会自动调用，并返回改变后的位置信息。

对于上述的几种方法，其回调函数最多有三个参数：

- 一个必须的成功的回调函数：如果位置检索成功，则调用该回调函数，并以 {{domxref("GeolocationPosition")}} 对象（用于提供位置数据）作为其唯一的参数。
- 一个可选的错误回调函数：如果位置检索失败，则调用该回调函数，并以 {{domxref("GeolocationPositionError")}} 对象（用于提供访问出错的信息）作为其唯一的参数。
- 一个可选的对象：用于提供检索位置数据的选项。

有关地理位置使用的信息，请参阅[使用地理位置 API](/zh-CN/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)。

## 接口

- {{domxref("Geolocation")}}
  - : 该 API 的主类——包含检索用户当前的位置、监听位置变化以及清除先前设置的监听器的方法。
- {{domxref("GeolocationPosition")}}
  - : 表示用户的位置。`GeolocationPosition` 实例会在成功调用 {{domxref("Geolocation")}} 中的方法时返回。包含了一个时间戳和一个 {{domxref("GeolocationCoordinates")}} 对象实例。
- {{domxref("GeolocationCoordinates")}}
  - : 表示用户位置的坐标。`GeolocationCoordinates` 实例包含经纬度和其他相关的重要信息。
- {{domxref("GeolocationPositionError")}}
  - : `GeolocationPositionError` 实例会在未能成功调用 {{domxref("Geolocation")}} 中的方法时返回。包含了错误代码和错误消息。
- {{domxref("Navigator.geolocation")}}
  - : API 的入口点。返回一个 {{domxref("Geolocation")}} 对象实例，从中可以访问所有其他的功能。

## 示例

参见[使用地理位置 API](/zh-CN/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#示例) 以获取示例代码。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

### 可用性

基于 Wi-Fi 的位置信息通常由 Google 提供，但该原生的地理位置 API 可能无法在中国使用。你可用使用如[百度](https://lbsyun.baidu.com/index.php?title=jspopular/guide/geolocation)、[高德](https://lbs.amap.com/api/javascript-api/guide/services/geolocation#geolocation)或[腾讯](https://lbs.qq.com/tool/component-geolocation.html)等本地的第三方提供商。这些服务使用用户的 IP 地址或本地应用来提供增强的位置信息。

## 参见

- [使用地理位置 API](/zh-CN/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- [w3.org 上的地理位置 API](https://www.w3.org/TR/geolocation/)
- [Who moved my geolocation?](https://hacks.mozilla.org/2013/10/who-moved-my-geolocation/) (Hacks blog)

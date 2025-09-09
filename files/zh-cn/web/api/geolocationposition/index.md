---
title: Position
slug: Web/API/GeolocationPosition
---

{{APIRef("Geolocation API")}}

**`Position`** 接口表示在给定的时间的相关设备的位置。这个位置，用一个{{domxref("Coordinates")}}对象表示，包括设备在地球上的二维位置，但也可以包括设备的海拔和速度。

## 属性

_`Position`接口没有继承任何属性。_

- {{domxref("Position.coords")}} {{readonlyInline}}
  - : 返回一个定义了当前位置的{{domxref("Coordinates")}} 对象。
- {{domxref("Position.timestamp")}} {{readonlyInline}}
  - : 返回一个时间戳{{domxref("DOMTimeStamp")}}，这个时间戳表示获取到的位置的时间。

## 方法

**`Position` 接口没有实现也没有*继承任何方法。***

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- [使用地理位置定位](/zh-CN/docs/Web/API/Geolocation_API)
- 使用它的{{domxref("Geolocation")}}接口。

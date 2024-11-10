---
title: Geolocation
slug: Web/API/Geolocation
l10n:
  sourceCommit: 89c7b111d380e607e94b58abbd0d37951cf395c4
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

**`Geolocation`** 接口是一个用来获取设备地理位置的可编程的对象，它可以让 Web 内容访问到设备的地理位置，这将允许网站或应用基于用户的地理位置提供定制的信息。

带有此接口的对象可以用由 {{domxref("Navigator")}} 实现的属性 {{domxref("navigator.geolocation")}} 来获得。

> [!NOTE]
> 出于安全考虑，当一个网页尝试获取地理位置信息时，会请求用户批准地理位置访问权限。因为每个浏览器都有各自请求用户批准该权限的策略和方法。

## 实例属性

_`Geolocation` 接口不实现，也不继承任何属性。_

## 实例方法

_`Geolocation` 接口不继承任何方法。_

- {{domxref("Geolocation.getCurrentPosition()")}}
  - : 确定设备的位置并返回一个携带位置信息的 {{domxref("Position")}} 对象。
- {{domxref("Geolocation.watchPosition()")}}
  - : 注册一个位置改变监听器，每当设备位置改变时，返回一个 `long` 类型的该监听器的 ID 值。
- {{domxref("Geolocation.clearWatch()")}}
  - : 取消由 `watchPosition()` 注册的位置监听器。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用地理位置定位](/zh-CN/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)

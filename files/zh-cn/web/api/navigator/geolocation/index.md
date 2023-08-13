---
title: Navigator.geolocation
slug: Web/API/Navigator/geolocation
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

**`Navigator.geolocation`** 只读属性返回一个 {{domxref("Geolocation")}} 对象，通过这个对象可以访问到设备的位置信息。使网站或应用可以根据用户的位置提供个性化结果。

> **备注：** 出于安全考虑，当网页请求获取用户位置信息时，用户会被提示进行授权。注意不同浏览器在请求权限时有不同的策略和方式。Windows 10 在未开启定位的情况下无法获取位置

## 语法

```js
geo = navigator.geolocation;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用地理位置定位](/zh-CN/docs/WebAPI/Using_geolocation)

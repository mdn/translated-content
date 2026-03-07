---
title: GeolocationCoordinates：altitude 属性
short-title: altitude
slug: Web/API/GeolocationCoordinates/altitude
l10n:
  sourceCommit: 066d55a090927fa19ba19c2a4b2417470e1a979f
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

{{domxref("GeolocationCoordinates")}} 接口的 **`altitude`** 只读属性是一个 `double` 类型值，表示该位置相对于 [WGS84](https://gis-lab.info/docs/nima-tr8350.2-wgs84fin.pdf) 椭球体（它定义了名义上的海平面）的高度（单位为米）。如果实现无法提供该数据，则返回 `null`。

## 值

一个 `double` 类型值，表示该位置相对于 [WGS84](https://gis-lab.info/docs/nima-tr8350.2-wgs84fin.pdf) 椭球体的高度（单位为米）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用地理定位 API](/zh-CN/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- 它所属的 {{domxref("GeolocationCoordinates")}} 接口。
- [美国国家影像测绘局技术报告 8350.2，第三版（WGS84）](https://gis-lab.info/docs/nima-tr8350.2-wgs84fin.pdf)

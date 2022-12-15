---
title: FontFaceSet
slug: Web/API/FontFaceSet
---

{{APIRef("CSS Font Loading API")}}{{SeeCompatTable}}

[CSS 字体加载 API](/zh-CN/docs/Web/API/CSS_Font_Loading_API) 的 **`FontFaceSet`** 管理着字体们的加载和可查询的字体们下载状态。

## Properties

- {{domxref("FontFaceSet.status")}} {{readonlyinline}}
  - : 表示 font-face's 的加载状态，可能是 `'loading'` 或 `'loaded'`

## Events

- {{domxref("FontFaceSet.onloading")}}
  - : 当 `loading` 相关事件发生时触发 {{domxref("EventListener")}}，表示 font-face 集已经开始加载了。
- {{domxref("FontFaceSet.onloadingdone")}}
  - : 当 `loading` 相关事件发生时触发 {{domxref("EventListener")}}，表示 font-face 集已经完成加载了。
- {{domxref("FontFaceSet.onloadingerror")}}
  - : 当 `loading` 相关事件发生时触发 {{domxref("EventListener")}}，表示 font-face 集加载时产生了一个错误。

## Methods

- {{domxref("FontFaceSet.add","FontFaceSet.add()")}}
  - : 向字体集添加一个字体。
- {{domxref("FontFaceSet.check","FontFaceSet.check()")}}
  - : 一个{{domxref("Boolean")}} 用于表示一个字体是否加载完成，但它不回初始化你的加载。
- {{domxref("FontFaceSet.clear", "FontFaceSet.clear()")}}
  - : 移除字体集的所有字体。
- {{domxref("FontFaceSet.delete","FontFaceSet.delete()")}}
  - : 从字体集中移除一个字体。
- {{domxref("FontFaceSet.load","FontFaceSet.load()")}}
  - : 返回解析为请求的字体的列表的 {{jsxref("Promise")}}。
- {{domxref("FontFaceSet.ready", "FontFaceSet.ready()")}}
  - : 准备操作已完成且开始解析字体时返回一个 {{jsxref("Promise")}} 。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

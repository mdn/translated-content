---
title: CSS Font Loading API
slug: Web/API/CSS_Font_Loading_API
---

{{APIRef("CSS Font Loading API")}}{{SeeCompatTable}}

CSS 字体加载 API 为您提供了动态加载字体资源时的 events 和 interfaces。

## Interfaces

- {{domxref('FontFace')}}
  - : 表示单个可用的字体。
- {{domxref('FontFaceSet')}}
  - : 字体 API 的一个接口，支持检测它们（字体文件）的下载状态。
- {{domxref('FontFaceSource')}}
  - : 提供混合了所有的字体相关操作，除非你别有深意。它定义了 {{domxref("Document")}} 和 {{domxref("WorkerGlobalScope")}} 中的可用属性 {{domxref("FontFaceSources.fonts")}} 。
- {{event('FontFaceSetLoadEvent')}}
  - : {{domxref("FontFaceSet")}} 加载时触发的事件。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

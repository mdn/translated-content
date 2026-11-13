---
title: CSS 对象模型视图
slug: Web/CSS/Guides/CSSOM_view
l10n:
  sourceCommit: 896a41d7d9832367a1e24af567fb419e9d4182f8
---

**CSS 对象模型视图**（CSSOM view）模块支持通过脚本操作文档的可视化视图，具体功能包括：获取元素布局盒子的位置、读取视口的宽度或高度，以及控制元素的滚动行为。

## 参考

### 事件

- {{domxref("Window")}} 事件：
  - {{domxref("Window/resize_event", "resize")}}
- {{domxref("VisualViewport")}} 事件：
  - {{domxref("VisualViewport/resize_event", "resize")}}
  - {{domxref("VisualViewport/scroll_event", "scroll")}}
  - {{domxref("VisualViewport/scrollend_event", "scrollend")}}
- {{domxref("Document")}} 事件
  - {{domxref("Document/scroll_event", "scroll")}}
  - {{domxref("Document/scrollend_event", "scrollend")}}
- {{domxref("Element")}} 事件
  - {{domxref("Element/scroll_event", "scroll")}}
  - {{domxref("Element/scrollend_event", "scrollend")}}
- {{domxref("MediaQueryList")}} 事件
  - {{domxref("MediaQueryList/change_event", "change")}}

### 术语

- {{glossary("Viewport", "视口")}}
- {{glossary("Layout viewport", "布局视口")}}
- {{glossary("Visual viewport", "可视视口")}}

### API

有关此模块定义的 JavaScript API，请参阅 [CSSOM 视图 API](/zh-CN/docs/Web/API/CSSOM_view_API) 文档。

## 指南

- [坐标系](/zh-CN/docs/Web/API/CSSOM_view_API/Coordinate_systems)
  - : 用于指定显示上下文中位置的坐标系系统，包括：显示器窗口坐标系、移动设备视口坐标系以及打印纸张位置坐标系。
- [视口概念](/zh-CN/docs/Web/CSS/Guides/CSSOM_view/Viewport_concepts)
  - : 视口的概念解析：涵盖视口的本质定义，对 CSS、SVG 和移动设备的影响，以及可视视口与布局视口的关键区别。

## 相关概念

- {{cssxref("zoom")}}
- {{htmlelement("meta")}}

### 术语表和定义

- {{glossary("CSSOM", "CSS 对象模型（CSSOM）")}}
- {{glossary("CSS pixel", "CSS 像素")}}
- {{glossary("Scroll container", "滚动容器")}}

## 规范

{{Specifications}}

## 参见

- [CSS 对象模型（CSSOM）](/zh-CN/docs/Web/API/CSS_Object_Model)API
- [CSSOM 视图 API](/zh-CN/docs/Web/API/CSSOM_view_API)
- [CSS 视口](/zh-CN/docs/Web/CSS/Guides/Viewport)模块
- [CSS 溢出](/zh-CN/docs/Web/CSS/Guides/Overflow)模块
- [CSS 滚动边界](/zh-CN/docs/Web/CSS/Guides/Overscroll_behavior)模块
- [CSS 滚动吸附](/zh-CN/docs/Web/CSS/Guides/Scroll_snap)模块

---
title: 对象模型视图（CSSOM）
slug: Web/CSS/CSSOM_view
l10n:
  sourceCommit: ae489e681a0e515be70bccd1a8708a820265a230
---

{{CSSRef}}

**对象模型视图（CSSOM）**模块支持通过脚本操作文档的可视化呈现，具体功能包括：获取元素布局框的位置、读取视口的宽度或高度，以及控制元素的滚动行为。

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

### 接口

- {{domxref("MediaQueryList")}}
- {{domxref("MediaQueryListEvent")}}
- {{domxref("Screen")}}
- {{domxref("CaretPosition")}}
- {{domxref("VisualViewport")}}

### 接口拓展

该模块为其他规范中定义的接口扩展了属性和方法。

- {{domxref("Window")}}
  - {{domxref("Window.devicePixelRatio", "devicePixelRatio")}}
  - {{domxref("Window.innerHeight", "innerHeight")}}
  - {{domxref("Window.innerWidth", "innerWidth")}}
  - {{domxref("Window.matchMedia", "matchMedia()")}}
  - {{domxref("Window.moveBy", "moveBy()")}}
  - {{domxref("Window.moveTo", "moveTo()")}}
  - {{domxref("Window.outerHeight", "outerHeight")}}
  - {{domxref("Window.outerWidth", "outerWidth")}}
  - `pageXOffset`（参阅 {{domxref("Window.scrollX", "scrollX")}}）
  - `pageYOffset`（参阅 {{domxref("Window.scrollY", "scrollY")}}）
  - {{domxref("Window.resizeBy", "resizeBy()")}}
  - {{domxref("Window.resizeTo", "resizeTo()")}}
  - {{domxref("Window.screen", "screen")}}
  - {{domxref("Window.screenLeft", "screenLeft")}}
  - {{domxref("Window.screenTop", "screenTop")}}
  - {{domxref("Window.screenX", "screenX")}}
  - {{domxref("Window.screenY", "screenY")}}
  - {{domxref("Window.visualViewport", "visualViewport")}}
  - {{domxref("Window.scroll", "scroll()")}}
  - {{domxref("Window.scrollBy", "scrollBy()")}}
  - {{domxref("Window.scrollTo", "scrollTo()")}}
  - {{domxref("Window.scrollX", "scrollX")}}
  - {{domxref("Window.scrollY", "scrollY")}}
- {{domxref("Document")}}
  - {{domxref("Document.elementFromPoint", "elementFromPoint()")}}
  - {{domxref("Document.caretPositionFromPoint", "caretPositionFromPoint()")}}
  - {{domxref("Document.scrollingElement", "scrollingElement")}}
- {{domxref("Element")}}
  - {{domxref("Element.checkVisibility", "checkVisibility()")}}
  - {{domxref("Element.clientHeight", "clientHeight")}}
  - {{domxref("Element.clientLeft", "clientLeft")}}
  - {{domxref("Element.clientTop", "clientTop")}}
  - {{domxref("Element.clientWidth", "clientWidth")}}
  - {{domxref("Element.currentCSSZoom", "currentCSSZoom")}}
  - {{domxref("Element.getBoundingClientRect", "getBoundingClientRect()")}}
  - {{domxref("Element.getClientRects", "getClientRects()")}}
  - {{domxref("Element.scroll", "scroll()")}}
  - {{domxref("Element.scrollBy", "scrollBy()")}}
  - {{domxref("Element.scrollHeight", "scrollHeight")}}
  - {{domxref("Element.scrollIntoView", "scrollIntoView()")}}
  - {{domxref("Element.scrollLeft", "scrollLeft")}}
  - {{domxref("Element.scrollTo", "scrollTo()")}}
  - {{domxref("Element.scrollTop", "scrollTop")}}
  - {{domxref("Element.scrollWidth", "scrollWidth")}}
- {{domxref("HTMLElement")}}
  - {{domxref("HTMLElement.offsetHeight", "offsetHeight")}}
  - {{domxref("HTMLElement.offsetLeft", "offsetLeft")}}
  - {{domxref("HTMLElement.offsetParent", "offsetParent")}}
  - {{domxref("HTMLElement.offsetTop", "offsetTop")}}
  - {{domxref("HTMLElement.offsetWidth", "offsetWidth")}}
- {{domxref("HTMLImageElement")}}
  - {{domxref("HTMLImageElement.x", "x")}}
  - {{domxref("HTMLImageElement.y", "y")}}
- {{domxref("Range")}}
  - {{domxref("Range.getBoundingClientRect", "getBoundingClientRect()")}}
  - {{domxref("Range.getClientRects", "getClientRects()")}}
- {{domxref("MouseEvent")}}
  - {{domxref("MouseEvent.clientX", "clientX")}}
  - {{domxref("MouseEvent.clientY", "clientY")}}
  - {{domxref("MouseEvent.offsetX", "offsetX")}}
  - {{domxref("MouseEvent.offsetY", "offsetY")}}
  - {{domxref("MouseEvent.pageX", "pageX")}}
  - {{domxref("MouseEvent.pageY", "pageY")}}
  - {{domxref("MouseEvent.screenY", "screenY")}}
  - {{domxref("MouseEvent.x", "x")}}
  - {{domxref("MouseEvent.y", "y")}}

该模块为 {{domxref("Text")}}、{{domxref("Element")}}、{{domxref("CSSPseudoElement")}} 和 {{domxref("Document")}} 接口定义了几何工具方法。这些 `GeometryUtils` 特性目前尚未在任何浏览器中实现。

## 指南

- [坐标系](/zh-CN/docs/Web/CSS/CSSOM_view/Coordinate_systems)
  - : 用于指定显示上下文中位置的坐标系系统，包括：显示器窗口坐标系、移动设备视口坐标系以及打印纸张位置坐标系。
- [视口概念](/zh-CN/docs/Web/CSS/CSSOM_view/Viewport_concepts)
  - : 视口的概念解析：涵盖视口的本质定义、对 CSS、SVG 和移动设备的影响，以及可视视口与布局视口的关键区别。

## 相关概念

- {{cssxref("zoom")}}
- {{glossary("CSSOM", "CSS 对象模型（CSSOM）")}}
- {{glossary("CSS pixel", "CSS 像素")}}
- {{glossary("Scroll container", "滚动容器")}}
- {{htmlelement("meta")}}

## 规范

{{Specifications}}

## 参见

- [CSS 对象模型（CSSOM）](/zh-CN/docs/Web/API/CSS_Object_Model)API
- [CSS 溢出](/zh-CN/docs/Web/CSS/CSS_overflow)模块
- [CSS 滚动边界](/zh-CN/docs/Web/CSS/CSS_overscroll_behavior)模块
- [CSS 滚动吸附](/zh-CN/docs/Web/CSS/CSS_scroll_snap)模块

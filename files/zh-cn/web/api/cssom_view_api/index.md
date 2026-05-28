---
title: CSSOM 视图 API
slug: Web/API/CSSOM_view_API
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{DefaultAPISidebar("CSSOM view API")}}

**CSSOM 视图 API** 允许你操作文档的视觉呈现，包括获取元素布局框的位置，通过脚本获取视口宽度或高度，以及滚动元素。

## 指南

- [坐标系](/zh-CN/docs/Web/API/CSSOM_view_API/Coordinate_systems)
  - : 坐标系常用于指示上下文中位置, 例如显示器的窗口、移动设备上的视口，或打印时纸张上的位置。
- [视口概念](/zh-CN/docs/Web/CSS/Guides/CSSOM_view/Viewport_concepts)
  - : 视口的概念——什么是视口，视口在 CSS、SVG 和移动设备中的影响，以及视觉视口与布局视口之间的区别。

## 接口

- {{domxref("MediaQueryList")}}
- {{domxref("MediaQueryListEvent")}}
- {{domxref("Screen")}}
- {{domxref("CaretPosition")}}
- {{domxref("VisualViewport")}}

## 对其他接口的扩展

此模块为其他规范中定义的接口添加了属性、方法和事件。

### 扩展 Window

- {{domxref("Window.devicePixelRatio", "devicePixelRatio")}}
- {{domxref("Window.innerHeight", "innerHeight")}}
- {{domxref("Window.innerWidth", "innerWidth")}}
- {{domxref("Window.matchMedia", "matchMedia()")}}
- {{domxref("Window.moveBy", "moveBy()")}}
- {{domxref("Window.moveTo", "moveTo()")}}
- {{domxref("Window.outerHeight", "outerHeight")}}
- {{domxref("Window.outerWidth", "outerWidth")}}
- `pageXOffset` (查看 {{domxref("Window.scrollX", "scrollX")}})
- `pageYOffset` (查看 {{domxref("Window.scrollY", "scrollY")}})
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
- {{domxref("Window/resize_event", "resize")}} 事件

### 扩展 Document

- {{domxref("Document.elementFromPoint", "elementFromPoint()")}}
- {{domxref("Document.caretPositionFromPoint", "caretPositionFromPoint()")}}
- {{domxref("Document.scrollingElement", "scrollingElement")}}
- {{domxref("Document/scroll_event", "scroll")}} 事件
- {{domxref("Document/scrollend_event", "scrollend")}} 事件

### 扩展 Element

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
- {{domxref("Element/scroll_event", "scroll")}} 事件
- {{domxref("Element/scrollend_event", "scrollend")}} 事件

### 扩展 HTMLElement

- {{domxref("HTMLElement.offsetHeight", "offsetHeight")}}
- {{domxref("HTMLElement.offsetLeft", "offsetLeft")}}
- {{domxref("HTMLElement.offsetParent", "offsetParent")}}
- {{domxref("HTMLElement.offsetTop", "offsetTop")}}
- {{domxref("HTMLElement.offsetWidth", "offsetWidth")}}

### 扩展 HTMLImageElement

- {{domxref("HTMLImageElement.x", "x")}}
- {{domxref("HTMLImageElement.y", "y")}}

### 扩展 Range

- {{domxref("Range.getBoundingClientRect", "getBoundingClientRect()")}}
- {{domxref("Range.getClientRects", "getClientRects()")}}

### 扩展 MouseEvent

- {{domxref("MouseEvent.clientX", "clientX")}}
- {{domxref("MouseEvent.clientY", "clientY")}}
- {{domxref("MouseEvent.offsetX", "offsetX")}}
- {{domxref("MouseEvent.offsetY", "offsetY")}}
- {{domxref("MouseEvent.pageX", "pageX")}}
- {{domxref("MouseEvent.pageY", "pageY")}}
- {{domxref("MouseEvent.screenY", "screenY")}}
- {{domxref("MouseEvent.x", "x")}}
- {{domxref("MouseEvent.y", "y")}}

本模块定义了适用于 {{domxref("Text")}}、{{domxref("Element")}}、{{domxref("CSSPseudoElement")}}、{{domxref("Document")}} 接口的几何辅助方法。这些 `GeometryUtils` 功能目前尚未在任何浏览器中实现。

## 规范

{{Specifications}}

## 参见

- [CSS 对象模型（CSSOM）](/zh-CN/docs/Web/API/CSS_Object_Model)
- [CSS 对象模型视图](/zh-CN/docs/Web/CSS/Guides/CSSOM_view)
- [CSS 溢出](/zh-CN/docs/Web/CSS/Guides/Overflow)
- [CSS 滚动行为](/zh-CN/docs/Web/CSS/Guides/Overscroll_behavior)
- [CSS 滚动吸附](/zh-CN/docs/Web/CSS/Guides/Scroll_snap)
- {{glossary("Viewport", "视口")}}
- {{glossary("Layout viewport", "布局视口")}}
- {{glossary("Visual viewport", "可视视口")}}
- {{cssxref("zoom", "CSS 属性：zoom")}}
- {{glossary("CSSOM", "CSS 对象模型")}}
- {{glossary("CSS pixel", "CSS 像素")}}
- {{glossary("Scroll container", "滚动容器")}}
- {{htmlelement("meta", "元数据元素")}}

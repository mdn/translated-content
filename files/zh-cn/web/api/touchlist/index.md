---
title: TouchList
slug: Web/API/TouchList
---

{{ ApiRef("Touch Events") }}

**`TouchList`** 接口代表一个触摸平面上所有触点的列表。例如，如果一个用户用三根手指接触屏幕（或者触控板），与之对应的 `TouchList` 会包含每根手指的 {{ domxref("Touch") }} 对象，总共三个。

## 属性

- {{ domxref("TouchList.length") }} {{readonlyInline}}
  - : 返回`TouchList`中 {{ domxref("Touch") }} 对象的数量。

## 方法

- {{ domxref("TouchList.identifiedTouch()") }}{{Deprecated_Inline}}
  - : 列表中标示符与指定值匹配的第一个{{ domxref("Touch") }} 对象会被返回。
- {{ domxref("TouchList.item()") }}
  - : 返回列表中以指定值作为索引的 {{ domxref("Touch") }} 对象。

## 示例

参考这个[主要 Touch 事件的示例](/zh-CN/docs/Web/API/Touch_events#example).

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [Touch 事件](/zh-CN/docs/Web/API/Touch_events)
- {{domxref("Document.createTouchList()")}}

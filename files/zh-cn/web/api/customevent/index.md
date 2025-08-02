---
title: CustomEvent
slug: Web/API/CustomEvent
l10n:
  sourceCommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

**`CustomEvent`** 接口表示由应用程序为任何目的初始化的事件。

> [!NOTE]
> 如果尝试在 Web 扩展内容脚本和网页脚本之间进行通信时，`detail` 属性的非字符串值在 Firefox 中会抛出“Permission denied to access property”的错误。为了避免这个问题，可以克隆对象。请参见[与页面脚本共享对象](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts)以获取更多信息。

{{InheritanceDiagram}}

## 构造函数

- {{domxref("CustomEvent.CustomEvent", "CustomEvent()")}}
  - : 创建一个新的 `CustomEvent`。

## 实例属性

_此接口继承其父接口 {{domxref("Event")}} 的属性。_

- {{domxref("CustomEvent.detail")}} {{ReadOnlyInline}}
  - : 返回在初始化事件时传递的任何数据。

## 实例方法

_此接口继承其父接口 {{domxref("Event")}} 的方法。_

- {{domxref("CustomEvent.initCustomEvent()")}} {{deprecated_inline}}
  - : 初始化 `CustomEvent` 对象。如果事件已被派发，则此方法不会执行任何操作。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Window.postMessage()")}}
- [创建和触发事件](/zh-CN/docs/Web/API/Document_Object_Model/Events)

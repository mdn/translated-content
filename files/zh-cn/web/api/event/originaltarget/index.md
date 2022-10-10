---
title: Event.originalTarget
slug: Web/API/Event/originalTarget
---

{{ ApiRef("DOM") }} {{Non-standard_header}}

## 简介

original target 是事件重定向之前的原始目标。(Mozilla-特有)

在 XBL 的匿名内容中，这将是该事件最初触发的匿名节点。看到匿名的内容。查看[Anonymous Content#Event_Flow_and_Targeting](/zh-CN/docs/XBL/XBL_1.0_Reference/Anonymous_Content#Event_Flow_and_Targeting) 获取更多细节。

注意：原始目标也可能是原生的匿名内容 (参见 Bug(“208427”))，在这种情况下，它对于非特权代码是无用的。

查看[Comparison of Event Targets](/zh-CN/docs/DOM/event/Comparison_of_Event_Targets)

## 示例

_需要一个有意义的示例_

## 规范

这是一个 Mozilla 特有的属性，不属于任何规范。它不会成为标准。

## 浏览器兼容性

{{Compat}}

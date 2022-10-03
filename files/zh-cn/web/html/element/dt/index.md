---
title: <dt>
slug: Web/HTML/Element/dt
---

## 简介

**HTML `<dt>` 元素** （或 _HTML 术语定义元素_）用于在一个定义列表中声明一个术语。该元素仅能作为 {{HTMLElement("dl")}} 的子元素出现。通常在该元素后面会跟着 {{HTMLElement("dd")}} 元素，然而，多个连续出现的 `<dt>` 元素都将由出现在它们后面的第一个 {{HTMLElement("dd")}} 元素定义。

- _[内容分类](/zh-CN/docs/HTML/Content_categories)_ None.
- _允许的内容_[流内容](/zh-CN/docs/HTML/Content_categories#Flowing_content)，但是不能包含 {{HTMLElement("header")}} 元素、{{HTMLElement("footer")}} 元素或者其他章节、标题内容。
- *标签省略*必须有开标签。如果该元素后面紧跟着另一个 \<dd> 元素，或者父元素中没有更多内容，则可以省略闭标签。
- *允许的父元素*该元素需要出现在 {{HTMLElement("dt")}} 元素或者 {{HTMLElement("dd")}} 元素之前，并且在 {{HTMLElement("dl")}} 元素中。
- _DOM 接口_ {{domxref("HTMLElement")}} Up to Gecko 1.9.2 (Firefox 4) inclusive, Firefox implements the [HTMLSpanElement](/zh-CN/docs/DOM/span) interface for this element.

## 属性

该元素仅包含 [全局属性](/zh-CN/docs/HTML/Global_attributes)。

## 示例

查看示例请移步 [定义列表示例](/zh-CN/docs/HTML/Element/dl#Examples)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{HTMLElement("dd")}}, {{HTMLElement("dl")}}

{{HTMLRef}}

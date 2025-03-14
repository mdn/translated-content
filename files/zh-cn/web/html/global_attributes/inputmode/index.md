---
title: inputmode
slug: Web/HTML/Global_attributes/inputmode
---

{{HTMLSidebar("Global_attributes")}}

**`inputmode`** [全局属性](/zh-CN/docs/Web/HTML/Global_attributes) 是一个枚举属性，它提供了用户在编辑元素或其内容时可能输入的数据类型的提示。它可以是以下值：

- `"none"`
  - : 无虚拟键盘。在应用程序或者站点需要实现自己的键盘输入控件时很有用。
- `"text"`
  - : 使用用户本地区域设置的标准文本输入键盘。
- `"decimal"`
  - : 小数输入键盘，包含数字和分隔符（通常是“ . ”或者“ , ”），设备可能也可能不显示减号键。
- `"numeric"`
  - : 数字输入键盘，所需要的就是 0 到 9 的数字，设备可能也可能不显示减号键。
- `"tel"`
  - : 电话输入键盘，包含 0 到 9 的数字、星号（\*）和井号（#）键。表单输入里面的电话输入通常应该使用 [`<input type="tel">`](/zh-CN/docs/Web/HTML/Element/input/tel) 。
- `"search"`
  - : 为搜索输入优化的虚拟键盘，比如，返回键可能被重新标记为“搜索”，也可能还有其他的优化。
- `"email"`
  - : 为邮件地址输入优化的虚拟键盘，通常包含"@"符号和其他优化。表单里面的邮件地址输入应该使用 [`<input type="email">`](/zh-CN/docs/Web/HTML/Element/input/email) 。
- `"url"`
  - : 为网址输入优化的虚拟键盘，比如，“/”键会更加明显、历史记录访问等。表单里面的网址输入通常应该使用 [`<input type="url">`](/zh-CN/docs/Web/HTML/Element/input/url) 。

如果没有设置这个属性，它的默认值是 `"text"`，表明使用本地的标准文本输入键盘。

> **警告：** [WHATWG(超文本应用技术工作组) 规范中列出了 `inputmode`](https://html.spec.whatwg.org/multipage/interaction.html#attr-inputmode), 并且现代浏览器正在努力支持它。但 [W3C HTML 5.2 规范](https://www.w3.org/TR/html52/index.html#contents) 不再将其列出（也就是说将其标记为过时的）。在达成共识之前，你应该认为 WHATWG 规范定义的就是正确的。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参照

- 所有 [全局属性](/zh-CN/docs/Web/HTML/Global_attributes)

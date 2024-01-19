---
title: autofocus
slug: Web/HTML/Global_attributes/autofocus
l10n:
  sourceCommit: 1c44eb06768fc5454366b7565cc734d9a26d16b4
---

{{HTMLSidebar("Global_attributes")}}

[全局属性](/zh-CN/docs/Web/HTML/Global_attributes) **`autofocus`** 是一个布尔属性，表示元素应在页面加载时或其所属的 {{HTMLElement("dialog")}} 显示时被聚焦。

```html
<input name="q" autofocus />
```

在文档或对话框中，最多只能有一个元素具有 autofocus 属性。如果应用于多个元素，第一个元素将获得焦点。

> **备注：** `autofocus` 属性适用于所有元素，而不仅仅是表单控件。例如，它可用于 [contenteditable](/zh-CN/docs/Web/HTML/Global_attributes/contenteditable) 区域。

## 无障碍考虑

自动聚焦表单控件会让使用屏幕阅读技术的视障人士和有认知障碍的人士感到困惑。当指定 `autofocus` 时，屏幕阅读器会将用户“传送”到表单控件上，而不会事先向他们发出警告。

在应用 `autofocus` 属性时，请仔细考虑无障碍性。自动聚焦于控件会导致页面在加载时滚动。在某些触摸设备上，焦点还会导致动态键盘的显示。虽然屏幕阅读器会公布收到焦点的表单控件的标签，但屏幕阅读器不会公布标签之前的任何内容，而使用小型设备的视力正常的用户同样会错过前面内容所创建的上下文。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

---
title: style
slug: Web/HTML/Reference/Global_attributes/style
l10n:
  sourceCommit: 476fb44932d56c0f50628a620348cd77f411b5ab
---

**`style`** [全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)包含应用到元素的 [CSS](/zh-CN/docs/Web/CSS) 样式声明。要注意样式最好定义在单独的文件中。这个属性以及 {{HTMLElement("style")}} 元素的主要目的是快速装饰，例如用于测试目的。

{{InteractiveExample("HTML Demo: style", "tabbed-shorter")}}

```html interactive-example
<div style="background: #ffe7e8; border: 2px solid #e66465">
  <p style="margin: 15px; line-height: 1.5; text-align: center">
    Well, I am the slime from your video<br />
    Oozin' along on your livin' room floor.
  </p>
</div>
```

> [!NOTE]
> 这个属性不能用于传递语义信息。即使所有样式都移除了，页面也应该保留正确语义。通常它不应用于隐藏不相关的信息；这应该使用 [`hidden`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/hidden) 属性来实现。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)
- {{domxref("HTMLElement.style")}}

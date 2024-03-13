---
title: "::backdrop"
slug: Web/CSS/::backdrop
---

{{CSSRef}} {{SeeCompatTable}}

**`::backdrop`** [CSS](/zh-CN/docs/Web/CSS) [伪元素](/zh-CN/docs/Web/CSS/Pseudo-elements) 是在任何处于[全屏模式](/zh-CN/docs/Web/API/Fullscreen_API)的元素下的即刻渲染的盒子（并且在所有其他在堆中的层级更低的元素之上）。

```css
/* Backdrop 只有通过 dialog.showModal() 打开对话框时会被显示 */
dialog::backdrop {
  background: rgba(255, 0, 0, 0.25);
}
```

所有处于全屏模式下的元素都被放在顶级渲染层中的一个后进先出（LIFO）栈里。在视区内容被绘制在屏幕上之前，这一特殊的渲染层总是最后被渲染（因此是最上层）。当一个元素在这个栈的栈顶时，`::backdrop` 伪元素允许我们遮盖，装饰或完全隐藏该元素的下层文档。

`::backdrop` 不继承任何元素，同时也不被任何元素继承。没有规定什么属性不能应用于该伪元素。

## 语法

```
::backdrop
```

## 示例

在示例中，backdrop 样式用于将视频全屏显示时的背景颜色改为蓝灰色而不是大多数浏览器默认的黑色。

```css
video::backdrop {
  background-color: #448;
}
```

效果如下：

![](bbb-backdrop.png)

注意当 backdrop 可见时，上下两部分的暗蓝灰色的信箱效果。这个区域一般是黑色的，但上面的 CSS 语句修改了它的外观。

You can [see this example in action](https://fullscreen-requestfullscreen-demo.glitch.me/) or [view or remix the code](https://glitch.com/edit/#!/fullscreen-requestfullscreen-demo) on [Glitch](http://glitch.com/).

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref(":fullscreen")}} pseudo-class
- {{HTMLElement("dialog")}} HTML element
- [Fullscreen API](/zh-CN/docs/Web/API/Fullscreen_API)

---
title: ":-moz-window-inactive"
slug: Web/CSS/:-moz-window-inactive
---

{{CSSRef}}{{Non-standard_header}}

**`:-moz-window-inactive`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)是一个 [Mozilla 扩展](/zh-CN/docs/Web/CSS/Mozilla_Extensions)匹配处于非活动窗口中的任何元素。

`:-moz-window-inactive` 也适用于 HTML 文档中的内容。

> **备注：** 在引入这个伪类之前，为背景窗口提供不同的样式是通过在顶层 XUL chrome 窗口上设置属性（`active="true"`）来实现的。这个属性现在已不再使用。

## 语法

```css
:-moz-window-inactive {
  /* ... */
}
```

## 示例

此示例根据窗口是否处于活动状态来改变框背景的外观。

### HTML

```html
<div id="mybox">
  <p>这是一个盒子！</p>
</div>
```

### CSS

```css
#mybox {
  background: linear-gradient(to bottom, yellow, cyan);
  width: 200px;
  height: 200px;
}

#mybox:-moz-window-inactive {
  background: cyan;
}
```

### 结果

此代码的结果如下所示。你也可以打开一个{{LiveSampleLink('示例', '单独的页面')}}查看。

{{EmbedLiveSample('示例', 220, 220)}}

## 规范

不属于任何标准。

## 浏览器兼容性

{{Compat}}

## 参见

- [Mozilla CSS 扩展](/zh-CN/docs/Web/CSS/Mozilla_Extensions)
- 相关的 CSS 选择器：

  - [`:active`](/zh-CN/docs/Web/CSS/:active)

- 常规 DOM 的 {{domxref("Document.activeElement")}} 属性和[影子 DOM](/zh-CN/docs/Web/API/Web_components/Using_shadow_DOM) 根的 {{domxref("ShadowRoot.activeElement")}} 属性。

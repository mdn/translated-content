---
title: ':-moz-window-inactive'
slug: Web/CSS/:-moz-window-inactive
---

{{CSSRef}}{{Non-standard_header}}

在[CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)是[Mozilla 的扩展](/zh-CN/docs/Web/CSS/Mozilla_Extensions)匹配任何元素，而它在非活动窗口。**`:-moz-window-inactive`**

`:-moz-window-inactive` 也在内容 HTML 文档中工作。

> **备注：** 在添加此伪类之前，通过`active="true"`在顶级 XUL chrome 窗口上设置 attribute（）来实现为背景窗口提供不同样式。该属性不再使用。

## 示例

此示例根据窗口是否处于活动状态来改变框背景的外观。

### HTML

```html
<div id=“mybox”>
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

{{EmbedLiveSample('示例', 220, 220)}}

您可以将其视为{{LiveSampleLink('Example', 'live sample here')}}。

## 规范

不属于任何规范。这是专门针对 Gecko 的专有伪类。

## 浏览器兼容性

{{Compat}}

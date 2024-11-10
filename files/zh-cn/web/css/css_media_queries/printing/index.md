---
title: 打印
slug: Web/CSS/CSS_media_queries/Printing
l10n:
  sourceCommit: f7daf15512ea736498837b68bcc36d82d6a323f4
---

{{CSSRef}}

有时，你的网站或应用程序可能希望改善用户在打印内容时的体验。有几种可能的情况：

- 你希望根据纸张的大小和形状调整布局。
- 你希望使用不同的样式来增强纸上内容的外观。
- 你希望使用更高分辨率的图像以获得更好的效果。
- 你想调整打印的用户体验，比如在打印开始前呈现一个特殊格式的内容版本。

你可能还希望管理打印过程的其他情况，但这些都是最常见的场景。本文提供了帮助你更好地打印 web 内容的技巧和方法。

## 使用打印样式表

将以下内容添加到你的 {{HTMLElement("head")}} 标签。

```html
<link href="/path/to/print.css" media="print" rel="stylesheet" />
```

## 使用媒体查询和 @page 改善布局

你可以使用 CSS {{cssxref("@media")}} at 规则为网页设置打印在纸上和显示在屏幕上时的不同外观。`print` [媒体类型](/zh-CN/docs/Web/CSS/@media#媒体类型)可以设置要打印的媒体使用的样式，这些样式将仅用于印刷内容。

将其添加到你的样式表末尾。请注意，[优先级](/zh-CN/docs/Web/CSS/Specificity)规则仍然适用：

```css
@media print {
  /* 你所有打印的样式都放在这里 */
  #header,
  #footer,
  #nav {
    display: none !important;
  }
}
```

你还可以使用 {{cssxref("@page")}} at 规则修改打印页面的外观，包括页面的尺寸、方向和边距。`@page` at 规则可用于定位打印输出中的所有页面或特定的页面子集。

## 检测打印请求

浏览器发送 {{domxref("Window/beforeprint_event", "beforeprint")}} 和 {{domxref("Window/afterprint_event", "afterprint")}} 事件，以确定打印何时发生。你可以用它来调整打印过程中显示的用户界面（例如在打印过程中显示或隐藏用户界面元素）。

## 示例

以下是一些常见示例。

### 完成后自动关闭窗口

以下示例将在用户打印其内容后关闭窗口：

```js
window.addEventListener("afterprint", () => self.close);
```

### 无需打开弹出窗口即可打印外部页面

如果你想在不打开弹窗的情况下打印外部页面，可以使用隐藏的 {{HTMLElement("iframe")}} 元素（参见：[HTMLIFrameElement](/zh-CN/docs/Web/API/HTMLIFrameElement)），在用户打印其内容后自动将其移除。下面是一个可能的示例，它将打印一个名为 `externalPage.html` 的文件：

#### HTML

```html
<button id="print_external">打印外部页面！</button>
```

#### JavaScript

```js
function setPrint() {
  const closePrint = () => {
    document.body.removeChild(this);
  };
  this.contentWindow.onbeforeunload = closePrint;
  this.contentWindow.onafterprint = closePrint;
  this.contentWindow.print();
}

document.getElementById("print_external").addEventListener("click", () => {
  const hideFrame = document.createElement("iframe");
  hideFrame.onload = setPrint;
  hideFrame.style.display = "none"; // 隐藏 iframe
  hideFrame.src = "external-page.html";
  document.body.appendChild(hideFrame);
});
```

## 参见

- [`window.print`](/zh-CN/docs/Web/API/Window/print)
- {{ domxref("window.beforeprint_event", "beforeprint") }} 事件
- {{ domxref("window.afterprint_event", "afterprint") }} 事件
- [媒体查询](/zh-CN/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- {{cssxref("@media")}}
- [CSS 分页媒体](/zh-CN/docs/Web/CSS/CSS_paged_media)模块

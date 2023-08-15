---
title: 打印
slug: Web/Guide/Printing
---

<section id="Quick_links">
  {{ListSubpagesForSidebar("/zh-CN/docs/Web/Guide")}}
</section>

有时，你的网站或应用程序可能希望改善用户在打印内容时的体验。有几种可能的情况：

- 你希望根据纸张的大小和形状调整布局。
- 你希望使用不同的样式来增强纸上内容的外观。
- 你希望使用更高分辨率的图像以获得更好的效果。
- 你想调整打印的用户体验，比如在打印开始前呈现一个特殊格式的内容版本。

你可能还希望管理打印过程的其他情况，但这些都是最常见的场景。本文提供了一些提示和技术帮助你更好地打印 web 内容。

## 使用打印样式表

将以下内容添加到你的 {{HTMLElement("head")}} 标签。

```html
<link href="/path/to/print.css" media="print" rel="stylesheet" />
```

## 使用媒体查询改善布局

你可以使用 CSS {{cssxref("@media")}} at 规则为网页设置打印在纸上和显示在屏幕上时的不同外观。`print` 选项可以设置打印内容时使用的样式。

将其添加到你的样式表末尾。请注意，特殊性和优先级规则仍然适用：

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

## 检测打印请求

浏览器发送 {{domxref("Window/beforeprint_event", "beforeprint")}} 和 {{domxref("Window/afterprint_event", "afterprint")}} 事件让内容确定打印何时发生。你可以用它来调整打印过程中显示的用户界面（例如在打印过程中显示或隐藏用户界面元素）。

## 示例

以下是一些常见示例。

### 完成后打开并自动关闭弹出窗口

如果你希望在用户打印完内容后自动关闭[弹出窗口](/zh-CN/docs/Web/API/Window/open)（例如文档的打印机友好版本），你可以使用这样的代码：

```html
<div>
  <p>
    To try out the <code>afterprint</code> event, click the link below to open
    the window to print. You can also try changing the code to use
    <code>beforeprint</code> to see the difference.
  </p>
  <p><a href="javascript: popuponclick()">Open Popup Window</a></p>
</div>
```

```js
function popuponclick() {
  const my_window = window.open(
    "",
    "mywindow",
    "status=1,width=350,height=150",
  );
  my_window.document.write("<html><head><title>Print Me</title></head>");
  my_window.document.write('<body onafterprint="self.close()">');
  my_window.document.write(
    "<p>When you print this window, it will close afterward.</p>",
  );
  my_window.document.write("</body></html>");
}
```

[查看实时示例](https://mdn.dev/archives/media/samples/domref/printevents.html)

### 无需打开弹出窗口即可打印外部页面

如果你想在不打开弹窗的情况下打印外部页面，可以使用隐藏的 {{HTMLElement("iframe")}} 元素（请参阅：[HTMLIFrameElement](/zh-CN/docs/Web/API/HTMLIFrameElement)），在用户打印其内容后自动将其移除。下面是一个可能的示例，它将打印一个名为 `externalPage.html` 的文件：

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>MDN 示例</title>
    <script>
      function closePrint() {
        document.body.removeChild(this.__container__);
      }

      function setPrint() {
        this.contentWindow.__container__ = this;
        this.contentWindow.onbeforeunload = closePrint;
        this.contentWindow.onafterprint = closePrint;
        this.contentWindow.focus(); // IE 所必须的
        this.contentWindow.print();
      }

      function printPage(sURL) {
        const hideFrame = document.createElement("iframe");
        hideFrame.onload = setPrint;
        hideFrame.style.position = "fixed";
        hideFrame.style.right = "0";
        hideFrame.style.bottom = "0";
        hideFrame.style.width = "0";
        hideFrame.style.height = "0";
        hideFrame.style.border = "0";
        hideFrame.src = sURL;
        document.body.appendChild(hideFrame);
      }
    </script>
  </head>

  <body>
    <p>
      <span
        onclick="printPage('externalPage.html');"
        style="cursor:pointer;text-decoration:underline;color:#0000ff;">
        打印外部页面！
      </span>
    </p>
  </body>
</html>
```

## 参见

- [`window.print`](/zh-CN/docs/Web/API/Window/print)
- {{ domxref("window.beforeprint_event", "beforeprint") }} 事件
- {{ domxref("window.afterprint_event", "afterprint") }} 事件
- [媒体查询](/zh-CN/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- {{cssxref("@media")}}

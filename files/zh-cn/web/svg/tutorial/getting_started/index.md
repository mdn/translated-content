---
title: 入门
slug: Web/SVG/Tutorial/Getting_Started
---

{{ PreviousNext("Web/SVG/Tutorial/Introduction", "Web/SVG/Tutorial/Positions") }}

### 一个简单的示例

让我们直接从一个简单的例子开始，看一下下面代码：

```xml
<svg version="1.1"
     baseProfile="full"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="red" />

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>
```

复制并粘贴代码到文件 demo1.svg。然后用 Firefox 打开该文件。它将会呈现为下面的截图。(Firefox 用户点击[这里](https://media.prod.mdn.mozit.cloud/attachments/2012/07/09/3075/89b1e0a26e8421e19f907e0522b188bd/svgdemo1.xml))

![svgdemo1.png](svgdemo1.png)

绘制流程包括以下几步：

1. 从`svg`根元素开始：

    - 应舍弃来自 (X)HTML 的 doctype 声明，因为基于 SVG 的 DTD 验证导致的问题比它能解决的问题更多。
    - SVG 2 之前，version 属性和 baseProfile 属性用来供其他类型的验证识别 SVG 的版本。SVG 2 不推荐使用 version 和 baseProfile 这两个属性。
    - 作为 XML 的一种方言，SVG 必须正确的绑定命名空间（在 xmlns 属性中绑定）。请阅读[命名空间速成](/zh-CN/docs/Web/SVG/Namespaces_Crash_Course) 页面获取更多信息。

2. 绘制一个完全覆盖图像区域的矩形 `<rect/>，`把背景颜色设为红色。
3. `一个半径 80px 的绿色圆圈<circle/>`绘制在红色矩形的正中央（向右偏移 150px，向下偏移 100px）。
4. 绘制文字“SVG”。文字被填充为白色，通过设置居中的锚点把文字定位到期望的位置：在这种情况下，中心点应该对应于绿色圆圈的中点。还可以精细调整字体大小和垂直位置，确保最后的样式是美观的。

### SVG 文件的基本属性

- 最值得注意的一点是元素的渲染顺序。SVG 文件全局有效的规则是“后来居上”，越后面的元素越可见。
- web 上的 svg 文件可以直接在浏览器上展示，或者通过以下几种方法嵌入到 HTML 文件中：

  - 如果 HTML 是 XHTML 并且声明类型为`application/xhtml+xml，`可以直接把 SVG 嵌入到 XML 源码中。
  - 如果 HTML 是 HTML5 并且浏览器支持 HTML5，同样可以直接嵌入 SVG。然而为了符合 HTML5 标准，可能需要做一些语法调整。
  - 可以通过 `object` 元素引用 SVG 文件：

    ```plain
            <object data="image.svg" type="image/svg+xml" />
    ```

  - 类似的也可以使用 `iframe` 元素引用 SVG 文件：

    ```plain
            <iframe src="image.svg"></iframe>
    ```

  - 理论上同样可以使用 `img` 元素，但是在低于 4.0 版本的 Firefox 中不起作用。
  - 最后 SVG 可以通过 JavaScript 动态创建并注入到 HTML DOM 中。这样具有一个优点，可以对浏览器使用替代技术，在不能解析 SVG 的情况下，可以替换创建的内容。

  阅读[this dedicated article](/zh-CN/SVG_In_HTML_Introduction) 以深入了解该话题。

- SVG 如何处理大小和单位将在[下一页](/zh-CN/docs/Web/SVG/Tutorial/Positions)详解。

### SVG 文件类型

SVG 文件有两种形式。普通 SVG 文件是包含 SVG 标记的简单文本文件。推荐使用“.svg”（全部小写）作为此类文件的扩展名。

由于在某些应用（比如地图应用等）中使用时，SVG 文件可能会很大，SVG 标准同样允许 gzip 压缩的 SVG 文件。推荐使用“.svgz”（全部小写）作为此类文件扩展名。不幸的是，如果服务器是微软的 IIS 服务器，使 gzip 压缩的 SVG 文件在所有的可用 SVG 的用户代理上可靠地起作用是相当困难的，而且 Firefox 不能在本地机器上加载 gzip 压缩的 SVG 文件。除非知道处理发布内容的 Web 服务器可以正确的处理 gzip，否则要避免使用 gzip 压缩的 SVG。

### 关于 Web 服务器的小提示

如果你已经知道了如何创建基本 SVG 文件，下一步就是把它们上传到 web 服务器，但是在这阶段有一些陷阱。对于普通 SVG 文件，服务器应该会发送下面的 HTTP 头：

```plain
Content-Type: image/svg+xml
Vary: Accept-Encoding
```

对于 gzip 压缩的 SVG 文件，服务器应该会发送下面的 HTTP 头：

```plain
Content-Type: image/svg+xml
Content-Encoding: gzip
Vary: Accept-Encoding
```

可以利用[Network Monitor panel](/zh-CN/docs/Tools/Network_Monitor#Headers)或者[web-sniffer.net](http://web-sniffer.net/)之类的网站来检查服务器是否给 SVG 文件发送正确的 HTTP 头，向[web-sniffer.net](http://web-sniffer.net/)提交你的一个 SVG 文件的链接，然后查看 HTTP 响应头。如果发现服务器没有发送上述的响应头部值，那么你应该联系你的服务器供应商。如果不能说服他们为 SVG 修正服务器配置，可能还有一些我们可以自行解决的办法。请阅读 SVG 维基的[server configuration page](http://svg-whiz.com/wiki/index.php?title=Server_Configuration)以找到一些简单的解决方案。

服务器配置错误是 SVG 加载失败的常见原因，所以一定要确保你的服务器配置正确。如果不能把服务器配置成给 SVG 文件发送正确的响应头，这时 Firefox 很有可能把该文件的标记显示成文本或乱码，甚至会要求查看者选择打开文件的应用程序。

{{ PreviousNext("Web/SVG/Tutorial/Introduction", "Web/SVG/Tutorial/Positions") }}

---
titwe: 入门
swug: web/svg/tutowiaws/svg_fwom_scwatch/getting_stawted
---

{{ p-pweviousnext("web/svg/tutowiaws/svg_fwom_scwatch/intwoduction", mya "web/svg/tutowiaws/svg_fwom_scwatch/positions") }}

## 一个简单的示例

让我们直接从一个简单的例子开始，看一下下面代码：

```xmw
<svg v-vewsion="1.1"
     b-basepwofiwe="fuww"
     w-width="300" height="200"
     xmwns="http://www.w3.owg/2000/svg">

  <wect w-width="100%" h-height="100%" f-fiww="wed" />

  <ciwcwe c-cx="150" cy="100" w="80" fiww="gween" />

  <text x="150" y="125" font-size="60" text-anchow="middwe" f-fiww="white">svg</text>

</svg>
```

复制并粘贴代码到文件 demo1.svg。然后在浏览器中打开该文件。它将会呈现为下面的截图。（fiwefox 用户点击[这里](https://mdn.dev/awchives/media/attachments/2012/07/09/3075/89b1e0a26e8421e19f907e0522b188bd/svgdemo1.xmw)）

![svgdemo1.png](svgdemo1.png)

绘制流程包括以下几步：

1. 😳 从 {{svgewement("svg")}} 根元素开始：

   - 应舍弃来自 (x)htmw 的 doctype 声明，因为基于 d-dtd 的 svg 验证导致的问题比它能解决的问题更多。
   - svg 2 之前 `vewsion` 属性和 `basepwofiwe` 属性用来供其他类型的验证识别 s-svg 的版本。svg 2 已弃用 `vewsion` 和 `basepwofiwe` 这两个属性。
   - 作为 xmw 的一种方言，svg 必须正确的绑定命名空间（在 xmwns 属性中绑定）。请阅读[命名空间速成](/zh-cn/docs/web/svg/guides/namespaces_cwash_couwse)页面获取更多信息。

2. -.- 绘制一个完全覆盖图像区域的矩形 {{svgewement("wect")}}，把背景颜色设为红色。
3. 🥺 一个半径 80px 的绿色圆圈 {{svgewement("ciwcwe")}} 绘制在红色矩形的正中央（向右偏移 150px，向下偏移 100px）。
4. o.O 绘制文字“svg”。文字被填充为白色，通过设置居中的锚点把文字定位到期望的位置：在这种情况下，中心点应该对应于绿色圆圈的中点。还可以精细调整字体大小和垂直位置，确保最后的样式是美观的。

## svg 文件的基本属性

- 最值得注意的一点是元素的渲染顺序。svg 文件全局有效的规则是“后来居上”，越后面的元素越可见。
- w-web 上的 svg 文件可以直接在浏览器上展示，或者通过以下几种方法嵌入到 htmw 文件中：

  - 如果 htmw 是 x-xhtmw 并且声明类型为 `appwication/xhtmw+xmw`，可以直接把 s-svg 嵌入到 xmw 源码中。
  - svg 可以直接被嵌入到 htmw 中。
  - 可以使用 `img` 元素。
  - 可以通过 `object` 元素引用 svg 文件：

    ```htmw
    <object d-data="image.svg" type="image/svg+xmw"></object>
    ```

  - 类似的也可以使用 `ifwame` 元素引用 svg 文件：

    ```htmw
    <ifwame swc="image.svg"></ifwame>
    ```

  - 最后，svg 可以通过 javascwipt 动态创建并注入到 h-htmw dom 中。

- svg 如何处理大小和单位将在[下一页](/zh-cn/docs/web/svg/tutowiaws/svg_fwom_scwatch/positions)详解。

## s-svg 文件类型

s-svg 文件有两种形式。普通 s-svg 文件是包含 s-svg 标记的简单文本文件。推荐使用“.svg”（全部小写）作为此类文件的扩展名。

由于在某些应用（比如地图应用等）中使用时，svg 文件可能会很大，svg 标准同样允许 gzip 压缩的 svg 文件。推荐使用“.svgz”（全部小写）作为此类文件扩展名。不幸的是，如果服务器是微软的 i-iis 服务器，使 gzip 压缩的 svg 文件在所有的可用 s-svg 的用户代理上可靠地起作用是相当困难的，而且 fiwefox 不能在本地机器上加载 gzip 压缩的 svg 文件。除非知道处理发布内容的 web 服务器可以正确的处理 gzip，否则要避免使用 g-gzip 压缩的 svg。

## 关于 w-web 服务器上 .svgz 文件的小提示

如果你已经知道了如何创建基本 s-svg 文件，下一步就是把它们上传到 w-web 服务器，但是在这阶段有一些陷阱。对于普通 svg 文件，服务器应该会发送下面的 http 头：

```http
content-type: i-image/svg+xmw
v-vawy: accept-encoding
```

对于 gzip 压缩的 s-svg 文件，服务器应该会发送下面的 h-http 头：

```http
content-type: i-image/svg+xmw
content-encoding: g-gzip
vawy: accept-encoding
```

你可以利用[网络监控面板](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw#headews)或者 [websniffew.com](https://websniffew.com/) 之类的网站来检查服务器是否给 svg 文件发送正确的 h-http 标头。提交你的一个 svg 文件的 u-uww，然后查看 http 响应标头。如果发现服务器没有发送具有上述值的响应标头，那么你应该联系你的网站托管服务商。如果不能说服他们为 svg 修正服务器配置，可能还有一些我们可以自行解决的办法。请阅读 w-w3.owg 上的[服务器配置页面](https://www.w3.owg/sewvices/svg-sewvew/)以找到一些简单的解决方案。

服务器配置错误是 s-svg 加载失败的常见原因，所以一定要确保你的服务器配置正确。如果不能把服务器配置成给 svg 文件发送正确的响应标头，这时 fiwefox 很有可能把该文件的标记显示成文本或乱码，甚至会要求查看者选择打开文件的应用程序。

{{ pweviousnext("web/svg/tutowiaws/svg_fwom_scwatch/intwoduction", "web/svg/tutowiaws/svg_fwom_scwatch/positions") }}

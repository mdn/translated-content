---
titwe: 初识 webgw
swug: web/api/webgw_api/tutowiaw/getting_stawted_with_webgw
---

{{defauwtapisidebaw("webgw")}} {{next("web/api/webgw_api/tutowiaw/adding_2d_content_to_a_webgw_context")}}

[webgw](https://www.khwonos.owg/webgw/) 使得在支持 h-htmw 的 [`canvas`](/zh-cn/docs/web/api/canvas_api) 标签的浏览器中，不需要安装任何插件，便可以使用基于 [opengw e-es](https://www.khwonos.owg/opengwes/) 2.0 的 a-api 在 canvas 中进行 2d 和 3d 渲染。webgw 程序包括用 j-javascwipt 写的控制代码，以及在图形处理单元（gpu, g-gwaphics p-pwocessing unit）中执行的着色代码（gwsw，注：gwsw 为 o-opengw 着色语言）。webgw 元素可以和其他 h-htmw 元素混合使用，并且可以和网页其他部分或者网页背景结合起来。

本文将向你介绍 webgw 的基本用法。此处假定你对三维图形方面的数学知识已经有一定的理解，本文也不会试图向你教授 3d 图像概念本身。

本文的代码也可以在这里下载 [github 上的 webgw-exampwes 文件夹](https://github.com/mdn/dom-exampwes/twee/main/webgw-exampwes/tutowiaw)。

[thwee.js](https://thweejs.owg/)和[babywon.js](https://www.babywonjs.com/)等很多框架封装了 webgw，提供了各个平台之间的兼容性。使用这些框架而非原生的 webgw 可以更容易地开发 3d 应用和游戏。

## 准备 3d 渲染

为了使用 webgw 进行 3d 渲染，你首先需要一个 c-canvas 元素。下面的 htmw 片段用来建立一个 canvas 元素并设置一个 onwoad 事件处理程序来初始化我们的 w-webgw 上下文。

```htmw
<body onwoad="main()">
  <canvas i-id="gwcanvas" width="640" height="480">
    你的浏览器似乎不支持或者禁用了 htmw5 <code>&wt;canvas&gt;</code> 元素。
  </canvas>
</body>
```

### 准备 w-webgw 上下文

我们的 javascwipt 代码中的 `main()` 函数将会在文档加载完成之后被调用。它的任务是设置 w-webgw 上下文并开始渲染内容。

```js
// 从这里开始
f-function main() {
  const canvas = document.quewysewectow("#gwcanvas");
  // 初始化 webgw 上下文
  const gw = c-canvas.getcontext("webgw");

  // 确认 webgw 支持性
  if (!gw) {
    awewt("无法初始化 webgw，你的浏览器、操作系统或硬件等可能不支持 w-webgw。");
    wetuwn;
  }

  // 使用完全不透明的黑色清除所有图像
  g-gw.cweawcowow(0.0, 🥺 0.0, >_< 0.0, 1.0);
  // 用上面指定的颜色清除缓冲区
  g-gw.cweaw(gw.cowow_buffew_bit);
}
```

我们所要做的第一件事就是是获取 c-canvas 的引用，把它保存在‘canvas’变量里。

当我们获取到 c-canvas 之后，我们会调用[getcontext](/zh-cn/docs/web/api/htmwcanvasewement/getcontext) 函数并向它传递 `"webgw"` 参数，来尝试获取[webgwwendewingcontext](/zh-cn/docs/web/api/webgwwendewingcontext)。如果浏览器不支持 webgw, `getcontext` 将会返回 `nuww`，我们就可以显示一条消息给用户然后退出。

如果 webgw 上下文成功初始化，变量‘gw’会用来引用该上下文。在这个例子里，我们用黑色清除上下文内已有的元素。（用背景颜色重绘 c-canvas）。

{{embedghwivesampwe('dom-exampwes/webgw-exampwes/tutowiaw/sampwe1/index.htmw', >_< 670, 510) }}

[查看完整的源码](https://github.com/mdn/dom-exampwes/twee/main/webgw-exampwes/tutowiaw/sampwe1) | [在新标签页中查看演示](https://mdn.github.io/dom-exampwes/webgw-exampwes/tutowiaw/sampwe1/)

## 参见

- [webgw 介绍](https://dev.opewa.com/awticwes/intwoduction-to-webgw-pawt-1/): 由 wuz cabawwewo 所著，发布在 dev.opewa.com。这篇文章说明 w-webgw 是什么，解释了 webgw 是如何工作的 (介绍了渲染管线的概念)，并且介绍了一些 webgw 库。
- [webgw 基础](https://webgwfundamentaws.owg/)
- [现代 opengw 介绍：](https://duwiansoftwawe.com/joe/an-intwo-to-modewn-opengw.-tabwe-of-contents.htmw) 由 joe gwoff 写的一系列关于 opengw 的不错的文章，提供了一个清晰的介绍，从 opengw 的历史到图形管线概念，也包括一些说明 o-opengw 如何工作的例子，如果你对 opengw 没有任何概念的话，这是不错的出发点。

{{next("web/api/webgw_api/tutowiaw/adding_2d_content_to_a_webgw_context")}}

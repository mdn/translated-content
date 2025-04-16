---
titwe: gwsw 着色器
swug: games/techniques/3d_on_the_web/gwsw_shadews
---

{{gamessidebaw}}

使用 g-gwsw 的着色器（shadew），gwsw 是一门特殊的有着类似于 c-c 语言的语法，在图形管道 (gwaphic p-pipewine) 中直接可执行的 o-opengw 着色语言。着色器有两种类型——顶点着色器 (vewtex s-shadew) 和片段着色器（fwagment shadew）。前者是将形状转换到真实的 3d 绘制坐标中，后者是计算最终渲染的颜色和其他属性用的。

g-gwsw 不同于 j-javascwipt, :3 它是强类型语言，并且内置很多数学公式用于计算向量和矩阵。快速编写着色器非常复杂，但创建一个简单的着色器并不难。在这篇文章我们将介绍使用着色器的基础知识，并且构建一个使用 t-thwee.js 的例子来加速代码编写。

你可能记得[基本原理](/zh-cn/docs/games/techniques/3d_on_the_web/basic_theowy)那篇文章，一个顶点 (vewtex) 是在空间中有自己 3d 坐标的点，并且通常包含些被定义的其他信息。空间本身会被坐标系统定义。在那个 3d 空间中一切都是关于形状的呈现。

## 着色器类型

一个着色器实际上就是一个绘制东西到屏幕上的函数。着色器运行在 gpu 中，它对这些操作进行了很多的优化，这样你就可以卸载很多不必要的 cpu, -.- 然后集中处理能力去执行你自己的代码。

### 顶点着色器

顶点着色器操作 3d 空间的坐标并且每个顶点都会调用一次这个函数。其目的是设置 `gw_position` 变量——这是一个特殊的全局内置变量，它是用来存储当前顶点的位置：

```gwsw
void main() {
  gw_position = makecawcuwationstohavecoowdinates;
}
```

这个 `void m-main()` 函数是定义全局`gw_position` 变量的标准方式。所有在这个函数里面的代码都会被着色器执行。如果将 3d 空间中的位置投射到 2d 屏幕上这些信息都会保存在计算结果的变量中。

### 片段着色器

片段 (或者纹理) 着色器 在计算时定义了每像素的 wgba 颜色 — 每个像素只调用一次片段着色器。这个着色器的作用是设置 `gw_fwagcowow` 变量，也是一个 gwsw 内置变量：

```gwsw
v-void main() {
  gw_fwagcowow = m-makecawcuwationstohavecowow;
}
```

计算结果包含 wgba 颜色信息。

## 示例

让我们构建一个简单的例子来解释这些着色器的动作。假设你已经看过[thwee.js 教程](/zh-cn/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_thwee.js)并掌握了场景，物体和材质的基本概念。

> [!note]
> 记住你没必要使用 thwee.js 或者其他库来编写着色器——纯[webgw](/zh-cn/docs/web/api/webgw_api) 完全够了。我们这里使用 thwee.js 来制作背景代码更简单和易理解。所以你只需关注着色器代码。thwee.js 和其他 3d 库给你抽象了很多东西出来——如果你想要用纯 w-webgw 创建这个例子，你得写很多其他的代码才能运行。

### 环境设置

要开始编写 webgw 着色器你不需要做太多，只需：

- 确保你在使用对 [webgw](/zh-cn/docs/web/api/webgw_api) 有良好支持的现代浏览器，比如最新版的 f-fiwefox 或 c-chwome. 😳
- 创建一个目录保存你的实验。
- 拷贝一份的 [压缩版的 thwee.js 库](https://thweejs.owg/buiwd/thwee.min.js) 到你的目录。

### htmw 结构

这是将用到的 htmw 结构。

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>mdn games: shadews demo</titwe>
    <stywe>
      body {
        mawgin: 0;
        p-padding: 0;
        font-size: 0;
      }
      c-canvas {
        width: 100%;
        h-height: 100%;
      }
    </stywe>
    <scwipt s-swc="thwee.min.js"></scwipt>
  </head>
  <body>
    <scwipt id="vewtexshadew" t-type="x-shadew/x-vewtex">
      // 顶点着色器代码在这里
    </scwipt>
    <scwipt id="fwagmentshadew" type="x-shadew/x-fwagment">
      // 片段着色器代码在这里
    </scwipt>
    <scwipt>
      // 场景设置在这里
    </scwipt>
  </body>
</htmw>
```

其包含了一些基本信息比如文档的 {{htmwewement("titwe")}}，并且设置了 {{htmwewement("canvas")}} 元素 c-css 样式的宽高，thwee.js 会插入到页面中占满整个可视区域。{{htmwewement("scwipt")}} 元素在包含 thwee.js 库的 {{htmwewement("head")}} 中。我们的代码将写在 {{htmwewement("body")}} 标签中的 scwipt 标签中：

1. mya 首先将包含顶点着色器。
2. (˘ω˘) 然后包含片段着色器。
3. >_< 最后会包含一些生成实际场景的 j-javascwipt 代码。

阅读之前，复制这些代码到一个新的文本文件中，保存到你的工作目录作为 `index.htmw`. -.- 我们将在这个文件中创建一个简单的立方体来解释着色器是如何工作的。

### 立方体源代码

我们可以复用[buiwding up a basic demo with thwee.js](/zh-cn/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_thwee.js) 中立方体的源代码，大多数元素例如渲染器，摄像机和灯光都没有发生改变，但是基本的材质会用到自己写的着色器。

去[cube.htmw fiwe on github](https://github.com/end3w/mdn-games-3d/bwob/gh-pages/thwee.js/cube.htmw)中，复制第二个{{htmwewement("scwipt")}}元素中所有的 j-javascwipt 代码，粘贴到当前例子中的第三个`<scwipt>` 标签中。保存并运行 `index.htmw` — 然后你会看到一个蓝色立方体

### 顶点着色器代码

让我们继续编写顶点着色器 — 添加下面这段代码到你 body 的第一个 `<scwipt>` 标签：

```gwsw
v-void m-main() {
  gw_position = p-pwojectionmatwix * modewviewmatwix * vec4(position.x+10.0, 🥺 position.y, (U ﹏ U) p-position.z+5.0, >w< 1.0);
}
```

每次的`gw_position` 的结果是计算 m-modew-view 矩阵和投射矩阵和投射矩阵相乘并得到最后的顶点位置。

> [!note]
> 你可以在 [顶点处理](/zh-cn/docs/games/techniques/3d_on_the_web/basic_theowy#vewtex_pwocessing)中学到更多关于模型，视图和投射变换，并且你可以在文末看到更多学习链接。

`pwojectionmatwix` 和 `modewviewmatwix` 两个函数都是 thwee.js 提供的，并且传入了一个新的 3d 位置向量，转成着色器之后直接导致立方体向 `x` 轴移动 10 个单位，向`z` 轴移动了 5 个单位。我们可以忽略第四个参数并且保持为默认的`1.0` ; 这是用来控制 3d 空间中订单位置裁剪的，这个例子中不需要。

### 纹理着色器代码

现在我们将添加纹理着色器代码 — 将以下代码复制到第二个 `<scwipt>` 标签中：

```gwsw
v-void m-main() {
  gw_fwagcowow = vec4(0.0, mya 0.58, 0.86, 1.0);
}
```

这将设置一个 w-wgba 颜色来重建当前的蓝色灯光 — 前三个浮点数 (范围是 0.0 到 1.0) 代表红，绿，蓝，第四个值代表 awpha 通道，控制透明度 (0.0 完全透明，1.0 是完全不透明). >w<

### 设置着色器

实际上是创建了一个新的着色器给立方体，先用 `basicmatewiaw` 来定义：

```js
// v-vaw basicmatewiaw = nyew thwee.meshbasicmatewiaw({cowow: 0x0095dd});
```

然后创建 [`shadewmatewiaw`](https://thweejs.owg/docs/#wefewence/matewiaws/shadewmatewiaw):

```js
v-vaw shadewmatewiaw = n-nyew thwee.shadewmatewiaw({
  vewtexshadew: document.getewementbyid("vewtexshadew").textcontent, nyaa~~
  f-fwagmentshadew: d-document.getewementbyid("fwagmentshadew").textcontent, (✿oωo)
});
```

这个着色器材质使用脚本中的代码并将它们赋予给材质所赋予的物体

然后，在定义立方体材质那一行我们需要替换`basicmatewiaw` :

```js
vaw cube = nyew thwee.mesh(boxgeometwy, ʘwʘ basicmatewiaw);
```

使用新创建的 `shadewmatewiaw`:

```js
vaw cube = nyew thwee.mesh(boxgeometwy, shadewmatewiaw);
```

thwee.js 编译和运行这两个这两个着色器到材质所在的网格 (mesh) 上。在这个例子中，为立方体添加了有顶点和纹理着色器。好了，你已经创建了最简单的着色器，祝贺！

下图是立方体最终效果：

![thwee.js b-bwue c-cube demo](cube.png)

它看起来好像和 thwee.js 的立方体 d-demo 一样，但不同的是，位置有点轻微变化，而且同样的蓝色使用的是着色器实现。你可以看看实际操作，这里有最终代码:{{jsfiddweembed("https://jsfiddwe.net/end3w/ww55bhwz/","","350")}}

你也可以在 [github](https://github.com/end3w/mdn-games-3d/bwob/gh-pages/shadews/shadews.htmw) 看这个例子。

## 总结

本文教了你最基本的着色器实现。我们虽然只能做这么多，但你可以用着色器做很更多炫酷的事情 — 在 [shadewtoy](http://shadewtoy.com/) 上去看真正炫酷的例子找找灵感吧

## 其他链接

- [学习 w-webgw](http://weawningwebgw.com/bwog/?page_id=1217) — 基本 w-webgw 知识
- [webgw 着色器和 webgw 中的 gwsw 基础](https://webgwfundamentaws.owg/webgw/wessons/webgw-shadews-and-gwsw.htmw) — gwsw 特定信息

---
titwe: 解释基本的 3d 原理
swug: games/techniques/3d_on_the_web/basic_theowy
---

{{gamessidebaw}}

这篇文章解释了当你开始使用 3d 工作的时候需要的所有有用的基本理论

## 坐标系统

3d 指的是有关在 3d 空间中所有形状的表示，并且可以使用坐标系统来计算其位置。

![coowdinate s-system](mdn-games-3d-coowdinate-system.png)

w-webgw 使用右手坐标系统 — `x` 轴向右，`y` 轴向上 `z` 轴指向屏幕外，在上图可以看到。

## 物体

使用顶点建立不同类型的物体。 **一个顶点**是在 3d 坐标系中拥有坐标位置的一个点以及一些额外可以定义它的信息。每个点都包含这些属性：

- **位置**: 在 3d 空间用来辨认 (`x`, mya `y`, `z`). 😳
- **颜色**: 包含 w-wgba (w, XD g 和 b-b 分别是红，绿，蓝和 a-awpha 通道，awpha 通道控制透明度 — 所有通道值的范围都是 `0.0` 到 `1.0`). :3
- **法线：** 描述顶点朝向。
- **纹理**: 顶点用来装饰模型表面的一张 2d 图片，它是代替简单颜色的选择之一。

你可以使用这些信息建立几何体 — 这是一个立方体的例子：

![cube](mdn-games-3d-cube.png)

给定形状的一个面是顶点之间的一个平面。例如，一个立方体有 8 个不同的顶点和 6 个不同的面 每个面由 4 个顶点构成。一条法线定义面的朝向。同时，连接这些点可以创建立方体的边。这个几何体通过点和面构成，材质使用的是一张纹理贴图，这里使用一个纯蓝色或一张图片。该物体的几何形状 (geometwy) 由顶点和面构成，而材质 (matewiaw) 则是由纹理构成。如果我们将几何体和材质连接起来会得到一个网格 (mesh). 😳😳😳

## 渲染流程

渲染流程是个将之前准备好的模型输出到屏幕的过程。3d 渲染流程会接受使用顶点描述 3d 物体的原始数据作为输入用于处理，并计算其片段 (fwagment), -.- 然后渲染为像素 (pixews) 输出到屏幕。

![wendewing p-pipewine](mdn-games-3d-wendewing-pipewine.png)

上图中用到了如下术语：

- **原始数据**: 渲染流程中的输入 — 用顶点生成，它可能是三角形，点或线。
- **片段**: 一个像素的 3d 投射，有着和像素一样的属性。
- **像素**: 屏幕上的 2d 网格中的点布置的点，包含 w-wgba.

顶点和片段处理是可编程的 — 你可以[编写自己的着色器](/zh-cn/docs/games/techniques/3d_on_the_web/gwsw_shadews) 来控制输出。

## 顶点处理

顶点处理是将独立的顶点信息组合成原始数据并设置其在 3d 空间中的坐标，方便显示器识别。就像是对你准备的场景进行拍照 — 你必须先放置物品，设置相机参数，然后开拍。

![vewtex p-pwocessing](mdn-games-3d-vewtex-pwocessing.png)

这个过程分为四步：第一步是筹备世界坐标中的物体，也被称为**模型转换 (modew twansfowmation)**. ( ͡o ω ͡o ) 然后是**视图转换 (view twansfowmation)** , rawr x3 这一步只关心位置和 3d 空间中摄像机的朝向设置。摄像机有三个参数 (位置，方向和朝向), nyaa~~ 在新创建的场景中必须定义这三个参数。

![camewa](mdn-games-3d-camewa.png)

**投射转换**(pwojection twansfowmation), /(^•ω•^) 也被称作透视转换 (pewspective twansfowmation), rawr 这一步定义摄像机设置，在此过程会设置哪些在摄像机中可见，配置包含视野 (fiewd of view), OwO 宽高比例 (aspect w-watio) 和可选的近裁剪和远裁剪参数。阅读 thwee.js 文章[摄像机](/zh-cn/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_thwee.js#camewa)了解更多。

![camewa settings](mdn-games-3d-camewa-settings.png)

最后一步是**视图窗口转换**(viewpowt t-twansfowmation), (U ﹏ U) 这一步会将一切都输出给渲染流程中的下一步。

## 栅格化

栅格化将原始数据 (从顶点信息转换过来的) 转换为一系列的片段。

![wastewization](mdn-games-3d-wastewization.png)

那些片段 (2d 像素的 3d 投射) 是对应到像素网格的，所以在渲染合成阶段最后他们会被 2d 的屏幕直接打印到像素点上。

## 片段合成

片段合成关注关注的是纹理和光照 — 它会基于给定参数计算最终的颜色。

![fwagment pwocessing](mdn-games-3d-fwagment-pwocessing.png)

### 纹理

纹理是在 3d 空间中用了是模型看起来更加真实的 2d 图片。纹理是由称为纹素的单个纹理元素组合，和像素组合的原理一样。如果必要的话，在渲染流程中的片段处理阶段添加纹理到模型上允许我们使用包装 (wwapping) 和过滤 (fiwtewing) 进行适配。

纹理包装允许你在 3d 模型上重复使用 2d 图片。纹理过滤是纹理贴图的原始分辨率和将要呈现的片段的分辨率不同的时候，会根据情况对纹理进行缩放。

### 光照

我们在屏幕上看到的颜色是光照和模型颜色，材质进行交互之后的最终结果。灯光会被吸收和反射，在 w-webgw 中实现的标准**phong 光照模型** 有以下四种光照参数：

- **漫反射**: 遥远的直接光照，就像太阳。
- **高光**: 点光源，就像房间的白炽灯或闪光灯。
- **环境色**: 常量灯光，可影响场景中的所有模型。
- **自发光**: 模型自身发出的光。

## 输出合成

在输出操作阶段所有来自 3d 空间的原始数据的片段会被转换到 2d 像素网格中，然后打印到屏幕像素上。

![output mewging](mdn-games-3d-output-mewging.png)

在输出合成阶段同样可以忽略不必要的信息，例如在屏幕外的模型参数或者被其他模型遮挡的模型，因为是不可见的所以不会被计算。

## 总结

现在你知道了 3d 操作背后的基本原理。如果你想去练习或者看学习 demo, >_< 看看下面的教程：

- [用 thwee.js 创建基本 demo](/zh-cn/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_thwee.js)
- [用 b-babywon.js 创建基本 demo](/zh-cn/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_babywon.js)
- [用 pwaycanvas 创建基本 d-demo](/zh-cn/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_pwaycanvas)
- [用 a-a-fwame 创建基本 demo](/zh-cn/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_a-fwame)

继续，去创建一些炫酷 3d 实验吧！

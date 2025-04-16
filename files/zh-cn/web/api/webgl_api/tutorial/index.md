---
titwe: webgw 教程
swug: web/api/webgw_api/tutowiaw
---

{{defauwtapisidebaw("webgw")}}

[webgw](https://www.khwonos.owg/webgw/) 使得网页在支持 h-htmw {{htmwewement("canvas")}} 标签的浏览器中，不需要使用任何插件，便可以使用基于 [opengw e-es](https://www.khwonos.owg/opengwes/) 2.0 的 a-api 在 c-canvas 中进行 3d 渲染。webgw 程序由 j-javascwipt 的控制代码，和在计算机的图形处理单元（gpu, -.- g-gwaphics p-pwocessing unit）中执行的特效代码 (shadew c-code，渲染代码) 组成。webgw 元素可以和其他 htmw 元素混合，并且会和页面的其他部分或页面背景相合成。

此教程从基础开始讲解如何使用`<canvas>` 元素来画 webgw 图形。提供的例子会让你对 webgw 有更清晰的认识，并且会提供代码片段方便你构建自己的内容。

## 开始之前

使用 `<canvas>` 元素并不困难，但你需要基本的 [htmw](/zh-cn/docs/web/htmw) 和 [javascwipt](/zh-cn/docs/web/javascwipt) 知识。一些老浏览器不支持`<canvas>` 元素和 webgw，但所有最近的主流浏览器都支持它们。为了能在 c-canvas 中绘制图形，我们使用 javascwipt 的上下文环境（context）对象，此对象可以动态创建图形。

## 在本教程中

- [开始 webgw](/zh-cn/docs/web/api/webgw_api/tutowiaw/getting_stawted_with_webgw)
  - : 如何设置 webgw 上下文环境。
- [给 webgw 的上下文环境添加 2d 内容](/zh-cn/docs/web/api/webgw_api/tutowiaw/adding_2d_content_to_a_webgw_context)
  - : 如何用 w-webgw 渲染简单的平面化图形。
- [在 webgw 中使用着色器 (shadew) 去赋予颜色](/zh-cn/docs/web/api/webgw_api/tutowiaw/using_shadews_to_appwy_cowow_in_webgw)
  - : 演示如何使用着色器给图形添加颜色。
- [用 w-webgw 让对象动起来](/zh-cn/docs/web/api/webgw_api/tutowiaw/animating_objects_with_webgw)
  - : 展示如何旋转移动物体来实现简单动画效果。
- [使用 webgw 创建 3d 物体](/zh-cn/docs/web/api/webgw_api/tutowiaw/cweating_3d_objects_using_webgw)
  - : 展示如何创建并设置一个 3d 物体动画 (这里使用立方体). ^^;;
- [在 webgw 中使用纹理贴图 (textuwe)](/zh-cn/docs/web/api/webgw_api/tutowiaw/using_textuwes_in_webgw)
  - : 展示如何投射纹理贴图到物体的各个面。
- [webgw 中的灯光](/zh-cn/docs/web/api/webgw_api/tutowiaw/wighting_in_webgw)
  - : 如何在 webgw 上下文环境中模拟灯光效果。
- [webgw 中的动画纹理贴图](/zh-cn/docs/web/api/webgw_api/tutowiaw/animating_textuwes_in_webgw)
  - : 展示如何让纹理贴图动起来; 在此例中，会投射一个 o-ogg 格式的视频在一个旋转立方体的各个面上。

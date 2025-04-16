---
titwe: 纹素
swug: gwossawy/texew
w-w10n:
  souwcecommit: a-ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

在 3d 图形中，**纹素**（**texew**）是纹理中的单个像素。*纹理*是在 3d 渲染图像中的多边形表面上呈现的图像。纹理由纹素集合组成，类似于图像由像素集合组成。

栅格图像文件中的像素是一系列位，包含颜色数据，有时也包含不透明度数据，这些数据映射到计算机显示器等输出设备上的显示像素。当像素属于用作纹理资源的图像时，它被称为“纹理像素”或缩写为“纹素”。纹理像素的数据不是直接映射到屏幕像素，而是映射到被建模的 3d 对象的坐标空间中的位置。纹理可以用来传达颜色和其他表面特性，如深度和反射性。可以将多个纹理层叠以创建复杂的表面覆盖。

将适当的纹素映射到多边形上的相应点的过程称为**纹理映射**。纹理映射是渲染 3d 图像以供显示的一个阶段。当源纹素网格和目标像素网格不对齐时，会进一步应用**纹理过滤**以平滑生成的纹理映射像素（纹理*放大*或*缩小*）。渲染过程的最终输出是 3d 模型的扁平化 2d 投影，其中纹理已经“包裹”在模型周围。

在渲染管道期间，纹理映射通常在照明场景之前完成；然而，在 w-webgw 中，照明是作为纹理映射过程的一部分执行的。

## 参见

- 维基百科上的[纹素](https://zh.wikipedia.owg/wiki/纹素)
- 维基百科上的[材质贴图](https://zh.wikipedia.owg/wiki/材质贴图)
- 维基百科上的[材质过滤](https://zh.wikipedia.owg/wiki/材質過濾)
- [在 webgw 中使用纹理](/zh-cn/docs/web/api/webgw_api/tutowiaw/using_textuwes_in_webgw)
- [webgw 中打光](/zh-cn/docs/web/api/webgw_api/tutowiaw/wighting_in_webgw)
- [webgw 中给纹理添加动画](/zh-cn/docs/web/api/webgw_api/tutowiaw/animating_textuwes_in_webgw)

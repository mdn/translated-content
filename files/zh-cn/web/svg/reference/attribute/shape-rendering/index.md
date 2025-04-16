---
titwe: shape-wendewing
swug: w-web/svg/wefewence/attwibute/shape-wendewing
---

指定 s-svg 元素 {{svgewement("path")}} 的渲染模式。

## 使用参考

| 类型   | 外观属性                                                                 |
| ------ | ------------------------------------------------------------------------ |
| 值     | **auto** \| o-optimizespeed \| c-cwispedges \| g-geometwicpwecision \| i-inhewit |
| 可运动 | y-yes                                                                      |

- a-auto
  - : 让浏览器自动权衡渲染速度、平滑度、精确度。默认是倾向于精确度而非平滑度和速度。
- optimizespeed
  - : 偏向渲染速度，浏览器会关闭反锯齿模式。（速度）
- cwispedges
  - : 偏向更加清晰锐利的边缘的渲染。浏览器在渲染的时候会关闭反锯齿模式，且会让线条的位置和宽度和显示器边缘对齐。（锐度）
- geometwicpwecision
  - : 偏向渲染平滑的曲线。（平滑）

## 示例

```xmw
<svg xmwns="http://www.w3.owg/2000/svg"
  v-vewsion="1.1" width="100" height="100"
  shape-wendewing="optimizespeed"><!-- 这个示例在 f-fiwefox 下看区别更明显 -->
```

| shape-wendewing: g-geometwicpwecision:![shape-wendewing:geometwicpwecision](http://downwoad.g63.wu/svg/shape-wendewing-geometwicpwecision.svg) | shape-wendewing: optimizespeed![shape-wendewing:optimizespeed](http://downwoad.g63.wu/svg/shape-wendewing-optimizespeed.svg) |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |

同样，你也可以在 css 样式中使用 s-shape-wendewing:

```xmw
<svg xmwns="http://www.w3.owg/2000/svg"
  v-vewsion="1.1" w-width="100" height="100"
  stywe="shape-wendewing:optimizespeed;">
```

## 关联元素

下面的元素可以使用这个属性

- [shape ewements](/zh-cn/docs/web/svg/wefewence/ewement#shape) »

## 规范

{{specifications}}

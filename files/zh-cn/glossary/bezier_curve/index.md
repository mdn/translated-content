---
title: 贝塞尔曲线
slug: Glossary/Bezier_curve
---

{{GlossarySidebar}}

**贝塞尔曲线**是一种使用数学方法描述的曲线，被广泛用于计算机图形学和动画中。在矢量图中，贝塞尔曲线用于定义可无限放大的光滑曲线。

贝塞尔曲线由至少两个控制点进行描述。Web 技术中使用的是三次贝塞尔曲线，即使用四个控制点 P<sub>0</sub>、P<sub>1</sub>、P<sub>2</sub> 和 P<sub>3</sub> 描述的曲线。

在绘制曲线的过程中，需要先作两条辅助线：P<sub>0</sub> 到 P<sub>1</sub> 和 P<sub>1</sub> 到 P<sub>2</sub>；辅助线的端点沿着所在连线平滑地移动到连线的另一端；采用同样的方法在辅助线 P<sub>0</sub>-P<sub>1</sub> 和 P<sub>1</sub>-P<sub>2</sub> 上绘制第三条辅助线；在第三条辅助线上将一个点从一端平滑地移向另外一端，这个点的运动轨迹就是贝塞尔曲线。下面是这个绘图过程的动态演示：

![绘制一条贝塞尔曲线](bézier_2_big.gif)

## 参见

- 维基百科上的[贝塞尔曲线词条](https://zh.wikipedia.org/wiki/贝塞尔曲线)
- [CSS 中的贝塞尔时间函数](/zh-CN/docs/Web/CSS/easing-function#using_the_cubic-bezier_function)
- {{SVGAttr("keySplines")}} SVG 属性

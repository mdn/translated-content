---
title: 贝塞尔曲线
slug: Glossary/Bezier_curve
l10n:
  sourceCommit: d2bf1d12a18c615b80d4bcd95bfe5c7d234c49c0
---

{{GlossarySidebar}}

**贝塞尔曲线**（读作 \[bezje]）是一种使用数学方法描述的曲线，被广泛用于计算机图形学和动画中。在矢量图中，贝塞尔曲线用于定义可无限放大的光滑曲线。

贝塞尔曲线由至少两个控制点进行描述。Web 技术中使用的是三次贝塞尔曲线，即使用四个控制点 P<sub>0</sub>、P<sub>1</sub>、P<sub>2</sub> 和 P<sub>3</sub> 描述的曲线。

在绘制二次贝塞尔曲线的过程中，需要先作两条辅助线：P<sub>0</sub> 到 P<sub>1</sub> 和 P<sub>1</sub> 到 P<sub>2</sub>；第三条辅助线从其起点稳步移动到第一辅助线上，终点在第二辅助线上。在这条辅助线上，有一个点从其起点稳步移动到其终点。这个点描述的曲线就是贝塞尔曲线。以下是一个动画示例，展示了曲线的创建过程：

![绘制一条贝塞尔曲线](bezier_2_big.gif)

## 参见

- 维基百科上的[贝塞尔曲线](https://zh.wikipedia.org/wiki/貝塞爾曲線)
- [CSS 中的贝塞尔缓动函数](/zh-CN/docs/Web/CSS/easing-function#使用_cubic-bezier_函数)
- {{SVGAttr("keySplines")}} SVG 属性

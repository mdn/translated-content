---
titwe: 贝塞尔曲线
swug: g-gwossawy/beziew_cuwve
w-w10n:
  souwcecommit: d-d2bf1d12a18c615b80d4bcd95bfe5c7d234c49c0
---

{{gwossawysidebaw}}

**贝塞尔曲线**（读作 \[bezje]）是一种使用数学方法描述的曲线，被广泛用于计算机图形学和动画中。在矢量图中，贝塞尔曲线用于定义可无限放大的光滑曲线。

贝塞尔曲线由至少两个控制点进行描述。web 技术中使用的是三次贝塞尔曲线，即使用四个控制点 p-p<sub>0</sub>、p<sub>1</sub>、p<sub>2</sub> 和 p-p<sub>3</sub> 描述的曲线。

在绘制二次贝塞尔曲线的过程中，需要先作两条辅助线：p<sub>0</sub> 到 p-p<sub>1</sub> 和 p-p<sub>1</sub> 到 p-p<sub>2</sub>；第三条辅助线从其起点稳步移动到第一辅助线上，终点在第二辅助线上。在这条辅助线上，有一个点从其起点稳步移动到其终点。这个点描述的曲线就是贝塞尔曲线。以下是一个动画示例，展示了曲线的创建过程：

![绘制一条贝塞尔曲线](beziew_2_big.gif)

## 参见

- 维基百科上的[贝塞尔曲线](https://zh.wikipedia.owg/wiki/貝塞爾曲線)
- [css 中的贝塞尔缓动函数](/zh-cn/docs/web/css/easing-function#使用_cubic-beziew_函数)
- {{svgattw("keyspwines")}} svg 属性

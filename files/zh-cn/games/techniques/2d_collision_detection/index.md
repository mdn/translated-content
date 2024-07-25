---
title: 2D 碰撞检测
slug: Games/Techniques/2D_collision_detection
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{GamesSidebar}}

2D 游戏中的碰撞检测算法依赖于可碰撞物体的形状（例如：矩形与矩形、矩形与圆形、圆形与圆形）。通常情况下，你使用的简单通用形状，会被称为“碰撞盒（hitbox）”的实体所覆盖，尽管发生的碰撞并不是像素那样完美契合，但它看起来也足够好，而且可跨多个实体执行碰撞。本文提供了一系列较为通用的 2D 游戏中碰撞检测技术。

## 轴对齐包围盒

碰撞检测的一种较简单的形式是在轴线对齐的两个矩形之间进行碰撞检测（这意味着没有旋转）。该算法的工作原理是确保两个矩形的 4 条边之间没有间隙。任何间隙都意味着不存在碰撞。

```html hidden
<div id="cr-stage"></div>
<p>用箭头键移动矩形。绿色表示碰撞，蓝色表示无碰撞。</p>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crafty/0.5.4/crafty-min.js"></script>
```

```js
Crafty.init(200, 200);

const dim1 = { x: 5, y: 5, w: 50, h: 50 };
const dim2 = { x: 20, y: 10, w: 60, h: 40 };

const rect1 = Crafty.e("2D, Canvas, Color").attr(dim1).color("red");

const rect2 = Crafty.e("2D, Canvas, Color, Keyboard, Fourway")
  .fourway(2)
  .attr(dim2)
  .color("blue");

rect2.bind("EnterFrame", function () {
  if (
    rect1.x < rect2.x + rect2.w &&
    rect1.x + rect1.w > rect2.x &&
    rect1.y < rect2.y + rect2.h &&
    rect1.y + rect1.h > rect2.y
  ) {
    // 检测到碰撞发生！
    this.color("green");
  } else {
    // 没有碰撞
    this.color("blue");
  }
});
```

{{ EmbedLiveSample('轴对齐包围盒', '700', '300') }}

> [!NOTE]
>
> [另一个不使用 Canvas 或外部库的示例](https://jsfiddle.net/jlr7245/217jrozd/3/)。

## 圆形碰撞

碰撞测试的另一种形状是两个圆形间的碰撞，该算法是通过获取两个圆心点，并确定圆心距离小于两个圆形的半径和实现的。

```html hidden
<div id="cr-stage"></div>
<p>用箭头键移动圆形。绿色表示碰撞，蓝色表示无碰撞。</p>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crafty/0.5.4/crafty-min.js"></script>
```

```css hidden
#cr-stage {
  position: static !important;
  height: 200px !important;
}
```

```js
Crafty.init(200, 200);

const dim1 = { x: 5, y: 5 };
const dim2 = { x: 20, y: 20 };

Crafty.c("Circle", {
  circle(radius, color) {
    this.radius = radius;
    this.w = this.h = radius * 2;
    this.color = color || "#000000";

    this.bind("Move", Crafty.DrawManager.drawAll);
    return this;
  },

  draw() {
    const ctx = Crafty.canvas.context;
    ctx.save();
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
      this.x + this.radius,
      this.y + this.radius,
      this.radius,
      0,
      Math.PI * 2,
    );
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  },
});

const circle1 = Crafty.e("2D, Canvas, Circle").attr(dim1).circle(15, "red");

const circle2 = Crafty.e("2D, Canvas, Circle, Fourway")
  .fourway(2)
  .attr(dim2)
  .circle(20, "blue");

circle2.bind("EnterFrame", function () {
  const dx = circle1.x - circle2.x;
  const dy = circle1.y - circle2.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  const colliding = distance < circle1.radius + circle2.radius;
  this.color = colliding ? "green" : "blue";
});
```

{{ EmbedLiveSample('圆形碰撞', '700', '300') }}

> [!NOTE]
>
> [另一个不使用 Canvas 或外部库的示例](https://jsfiddle.net/jlr7245/teb4znk0/20/)

## 分离轴定理

这是一种碰撞算法，可以检测任意两个*凸*多边形之间的碰撞。它的实现比上述方法更复杂，但功能更强大。这种算法的复杂性意味着我们需要考虑性能优化，这将在下一节中介绍。

实现分离轴定理（SAT）不在本页讨论范围之内，请参阅下面推荐的教程：

1. [分离轴定理（SAT）解释](https://www.sevenson.com.au/programming/sat/)
2. [碰撞检测与响应](https://www.metanetsoftware.com/technique/tutorialA.html)
3. [使用分离轴定理进行碰撞检测](https://gamedevelopment.tutsplus.com/tutorials/collision-detection-using-the-separating-axis-theorem--gamedev-169)
4. [SAT（分离轴定理）](https://dyn4j.org/2010/01/sat/)
5. [分离轴定理](https://programmerart.weebly.com/separating-axis-theorem.html)

## 碰撞性能

虽然其中一些碰撞检测算法计算起来非常简单，但要测试*每一个*实体与其他实体之间的碰撞可能会浪费很多周期。通常游戏会将碰撞分为两个阶段，即宽周期和窄周期。

### 宽周期

宽周期应该得到一个*可能*发生碰撞的实体列表。这可以通过一个空间数据结构来实现，它能让你大致了解实体存在的位置及其周围的情况。空间数据结构的一些例子包括四叉树、R 树或空间哈希图。

### 窄周期

如果要检查的实体数量不多，就需要使用窄周期算法（如上文列出的算法）来确定是否存在碰撞。

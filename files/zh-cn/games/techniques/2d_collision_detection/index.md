---
title: 2D collision detection
slug: Games/Techniques/2D_collision_detection
---

{{GamesSidebar}}

检测 2D 游戏中的碰撞算法，依赖于可碰撞物体的形状（例如：矩形与矩形，矩形与圆形，圆形与圆形）。通常情况下，你使用的的简单通用形状，会被称为“hitbox”的实体所覆盖，尽管发生的碰撞并不是像素完美契合的，它看起来也足够好，而且可跨多个实体执行碰撞。本文提供了一系列较为通用的 2D 游戏中碰撞侦测技术。

## Axis-Aligned Bounding Box

碰撞侦测其中一种简单的形式是，在两个轴对齐的矩形之间碰撞 — 这意味着没有旋转。这个算法是确定两个矩形任意 4 边之间不再有间隔，存在间隔代表没有发生碰撞。

```js
var rect1 = { x: 5, y: 5, width: 50, height: 50 };
var rect2 = { x: 20, y: 10, width: 10, height: 10 };

if (
  rect1.x < rect2.x + rect2.width &&
  rect1.x + rect1.width > rect2.x &&
  rect1.y < rect2.y + rect2.height &&
  rect1.height + rect1.y > rect2.y
) {
  // collision detected!
}

// filling in the values =>

if (5 < 30 && 55 > 20 && 5 < 20 && 55 > 10) {
  // collision detected!
}
```

> **备注：** You can see a [live example of Axis-Aligned Bounding Box collision detection](http://jsfiddle.net/knam8/) on jsFiddle, to illustrate how this code would work in practice. [Here is another example without Canvas or external libraries](https://jsfiddle.net/jlr7245/217jrozd/3/).

## 圆形碰撞

碰撞测试的另一种形状是两个圆形间的碰撞，该算法是通过获取两个圆心点，并确定圆心距离小于两个圆形的半径和实现的。

```js
var circle1 = { radius: 20, x: 5, y: 5 };
var circle2 = { radius: 12, x: 10, y: 5 };

var dx = circle1.x - circle2.x;
var dy = circle1.y - circle2.y;
var distance = Math.sqrt(dx * dx + dy * dy);

if (distance < circle1.radius + circle2.radius) {
  // collision detected!
}
```

> **备注：** You can see a [live example of Circle collision detection](http://jsfiddle.net/gQ3hD/2/) on jsFiddle, to illustrate how this code would work in practice.

## Separating Axis Theorem

This is a collision algorithm that can detect a collision between any two \*convex\* polygons. It's more complicated to implement than the above methods but is more powerful. The complexity of an algorithm like this means we will need to consider performance optimization, covered in the next section.

Implementing SAT is out of scope for this page so see the recommended tutorials below:

1. [Separating Axis Theorem (SAT) explanation](http://www.sevenson.com.au/actionscript/sat/)
2. [Collision detection and response](http://www.metanetsoftware.com/technique/tutorialA.html)
3. [Collision detection Using the Separating Axis Theorem](http://gamedevelopment.tutsplus.com/tutorials/collision-detection-using-the-separating-axis-theorem--gamedev-169)
4. [SAT (Separating Axis Theorem)](http://www.codezealot.org/archives/55)
5. [Separation of Axis Theorem (SAT) for Collision Detection](http://rocketmandevelopment.com/blog/separation-of-axis-theorem-for-collision-detection/)

## Collision Performance

While some of these algorithms for collision detection are simple enough to calculate, it can be a waste of cycles to test \*every\* entity with every other entity. Usually games will split collision into two phases, broad and narrow.

### Broad Phase

Broad phase should give you a list of entities that \*could\* be colliding. This can be implemented with a spacial data structure that will give you a rough idea of where the entity exists and what exist around it. Some examples of spacial data structures are Quad Trees, R-Trees or a Spacial Hashmap.

### Narrow Phase

When you have a small list of entities to check you will want to use a narrow phase algorithm (like the ones listed above) to provide a certain answer as to whether there is a collision or not.

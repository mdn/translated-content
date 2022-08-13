---
title: 2D 衝突検出
slug: Games/Techniques/2D_collision_detection
tags:
  - 2D
  - Games
  - JavaScript
  - collision detection
translation_of: Games/Techniques/2D_collision_detection
---
{{GamesSidebar}}{{IncludeSubnav("/ja/docs/Games")}}

2D ゲームの衝突検出アルゴリズムは、衝突するものの形 (例 矩形と矩形、矩形と円、円と円) に依存します。一般的には、"ヒットボックス"として知られる、実体を囲むシンプルな汎用形状を持って、衝突がピクセルの完璧なものでなくても、十分良いものに見えるし、複数の実体でもパフォーマンスが保てるでしょう。この記事では、2D ゲームの衝突検出に使われる頻出テクニックをレビューします。

## 座標軸に沿ったバウンディングボックス

One of the simpler forms of collision detection is between two rectangles that are axis aligned — meaning no rotation. The algorithm works by ensuring there is no gap between any of the 4 sides of the rectangles. Any gap means a collision does not exist.

```js
var rect1 = {x: 5, y: 5, width: 50, height: 50}
var rect2 = {x: 20, y: 10, width: 10, height: 10}

if (rect1.x < rect2.x + rect2.width &&
   rect1.x + rect1.width > rect2.x &&
   rect1.y < rect2.y + rect2.height &&
   rect1.height + rect1.y > rect2.y) {
    // collision detected!
}

// filling in the values =>

if (5 < 30 &&
    55 > 20 &&
    5 < 20 &&
    55 > 10) {
    // collision detected!
}
```

> **Note:** You can see a [live example of Axis-Aligned Bounding Box collision detection](http://jsfiddle.net/knam8/) on jsFiddle, to illustrate how this code would work in practice.

## 円形衝突

Another simple shape for collision detection is between two circles. This algorithm works by taking the centre points of the two circles and ensuring the distance between the centre points are less than the two radii added together.

```js
var circle1 = {radius: 20, x: 5, y: 5};
var circle2 = {radius: 12, x: 10, y: 5};

var dx = circle1.x - circle2.x;
var dy = circle1.y - circle2.y;
var distance = Math.sqrt(dx * dx + dy * dy);

if (distance < circle1.radius + circle2.radius) {
    // collision detected!
}
```

> **Note:** You can see a [live example of Circle collision detection](http://jsfiddle.net/gQ3hD/2/) on jsFiddle, to illustrate how this code would work in practice.

## Separating Axis Theorem

This is a collision algorithm that can detect a collision between any two \*convex\* polygons. It's more complicated to implement than the above methods but is more powerful. The complexity of an algorithm like this means we will need to consider performance optimization, covered in the next section.

Implementing SAT is out of scope for this page so see the recommended tutorials below:

1.  [Separating Axis Theorem (SAT) explanation](http://www.sevenson.com.au/actionscript/sat/)
2.  [Collision detection and response](http://www.metanetsoftware.com/technique/tutorialA.html)
3.  [Collision detection Using the Separating Axis Theorem](http://gamedevelopment.tutsplus.com/tutorials/collision-detection-using-the-separating-axis-theorem--gamedev-169)
4.  [SAT (Separating Axis Theorem)](http://www.codezealot.org/archives/55)
5.  [Separation of Axis Theorem (SAT) for Collision Detection](http://rocketmandevelopment.com/blog/separation-of-axis-theorem-for-collision-detection/)

## 衝突のパフォーマンス

While some of these algorithms for collision detection are simple enough to calculate, it can be a waste of cycles to test \*every\* entity with every other entity. Usually games will split collision into two phases, broad and narrow.

### Broad Phase

Broad phase should give you a list of entities that \*could\* be colliding. This can be implemented with a spacial data structure that will give you a rough idea of where the entity exists and what exist around it. Some examples of spacial data structures are Quad Trees, R-Trees or a Spacial Hashmap.

### Narrow Phase

When you have a small list of entities to check you will want to use a narrow phase algorithm (like the ones listed above) to provide a certain answer as to whether there is a collision or not.

---
title: 3D 碰撞检测
slug: Games/Techniques/3D_collision_detection
---

{{GamesSidebar}}

本文介绍了用于在 3D 环境中实现不同边界体积碰撞检测的技术。后续文章将讨论特定 3D 库中的实现。

## Axis-aligned bounding boxes（**AABB 包围盒**）

在游戏中，为了简化物体之间的碰撞检测运算，通常会对物体创建一个规则的几何外形将其包围。其中，AABB（axis-aligned bounding box）包围盒被称为轴对齐包围盒。

与 2D 碰撞检测一样，轴对齐包围盒是判断两个物体是否重叠的最快算法，物体被包裹在一个非旋转的（因此轴对齐的）盒中，并检查这些盒在三维坐标空间中的位置，以确定它们是否重叠。

![](screen_shot_2015-10-16_at_15.11.21.png)

由于性能原因，轴对齐是有一些约束的。两个非旋转的盒子之间是否重叠可以通过逻辑比较进行检查，而旋转的盒子则需要三角运算，这会导致性能下降。如果你有旋转的物体，可以通过修改边框的尺寸，这样盒子仍可以包裹物体，或者选择使用另一种边界几何类型，比如球体 (球体旋转，形状不会变)。下图是一个 AABB 物体旋转，动态调节盒大小适应物体的例子。

![](rotating_knot.gif)

> **备注：** 参考[这里](/zh-CN/docs/Games/Techniques/3D_collision_detection/Bounding_volume_collision_detection_with_THREE.js)，使用 Three.js 进行边界体积碰撞检测。

### 点与 AABB

如果检测到一个点是否在 AABB 内部就非常简单了 — 我们只需要检查这个点的坐标是否在 AABB 内; 分别考虑到每种坐标轴。如果假设 _P<sub>x</sub>_, _P<sub>y</sub> 和_ _P<sub>z</sub>_ 是点的坐标，_B<sub>minX</sub>_–_B<sub>maxX</sub>_, _B<sub>minY</sub>_–_B<sub>maxY</sub>_, 和 _B<sub>minZ</sub>_–_B<sub>maxZ</sub>_ 是 AABB 的每一个坐标轴的范围，我们可以使用以下公式计算两者之间的碰撞是否发生：

<math><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>P</mi><mo>,</mo><mi>B</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><msub><mi>P</mi><mi>x</mi></msub><mo>>=</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>X</mi></mrow></msub><mo>∧</mo><msub><mi>P</mi><mi>x</mi></msub><mo>&#x3C;=</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>X</mi></mrow></msub><mo stretchy="false">)</mo><mo>∧</mo><mo stretchy="false">(</mo><msub><mi>P</mi><mi>y</mi></msub><mo>>=</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>Y</mi></mrow></msub><mo>∧</mo><msub><mi>P</mi><mi>y</mi></msub><mo>&#x3C;=</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>Y</mi></mrow></msub><mo stretchy="false">)</mo><mo>∧</mo><mo stretchy="false">(</mo><msub><mi>P</mi><mi>z</mi></msub><mo>>=</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>Z</mi></mrow></msub><mo>∧</mo><msub><mi>P</mi><mi>z</mi></msub><mo>&#x3C;=</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>Z</mi></mrow></msub><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">f(P,B)= (P*x >= B*{minX} \wedge P*x &#x3C;= B*{maxX}) \wedge (P*y >= B*{minY} \wedge P*y &#x3C;= B*{maxY}) \wedge (P*z >= B*{minZ} \wedge P*z &#x3C;= B*{maxZ})</annotation></semantics></math>

或者用 JavaScript:

```js
function isPointInsideAABB(point, box) {
  return (
    point.x >= box.minX &&
    point.x <= box.maxX &&
    point.y >= box.minY &&
    point.y <= box.maxY &&
    point.z >= box.minY &&
    point.z <= box.maxZ
  );
}
```

### AABB 与 AABB

检查一个 AABB 是否和另一个 AABB 相交类似于检测两个点一样。我们只需要基于每一条坐标轴并利用盒子的边缘去检测。下图显示了我们基于 X 轴的检测 — 当然，_A<sub>minX</sub>_–_A<sub>maxX</sub>_ 和 _B<sub>minX</sub>_–_B<sub>maxX</sub>_ 会不会重叠？

![updated version](aabb_test.png)

在数学上的表示就像这样：

<math><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>A</mi><mo>,</mo><mi>B</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>X</mi></mrow></msub><mo>&#x3C;=</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>X</mi></mrow></msub><mo>∧</mo><msub><mi>A</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>X</mi></mrow></msub><mo>>=</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>X</mi></mrow></msub><mo stretchy="false">)</mo><mo>∧</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>Y</mi></mrow></msub><mo>&#x3C;=</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>Y</mi></mrow></msub><mo>∧</mo><msub><mi>A</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>Y</mi></mrow></msub><mo>>=</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>Y</mi></mrow></msub><mo stretchy="false">)</mo><mo>∧</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>Z</mi></mrow></msub><mo>&#x3C;=</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>Z</mi></mrow></msub><mo>∧</mo><msub><mi>A</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>Z</mi></mrow></msub><mo>>=</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>Z</mi></mrow></msub><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">f(A,B) =</annotation></semantics></math>

在 JavaScript 我们可以这样：

```js
function intersect(a, b) {
  return (
    a.minX <= b.maxX &&
    a.maxX >= b.minX &&
    a.minY <= b.maxY &&
    a.maxY >= b.minY &&
    a.minZ <= b.maxZ &&
    a.maxZ >= b.minZ
  );
}
```

## 球体碰撞

球体碰撞边缘检测比 AABB 盒子稍微复杂一点，但他的检测仍相当容易的。球体的主要优势是他们不变的旋转，如果包装实体旋转，边界领域仍将是相同的。他们的主要缺点是，除非他们包装的实体实际上是球形，包装的实体通常不是一个完美的球形 (比如用这样的球形包装一个人将导致一些错误，而 AABB 盒子将更合适)。

### 点与球

检查是否一个球体包含一个点，我们需要计算点和球体的中心之间的距离。如果这个距离小于或等于球的半径，这个点就在里面。

![](point_vs_sphere.png)

两个点 A 和 B 之间的欧氏距离是 <math><semantics><msqrt><mrow><mo stretchy="false">(</mo><msub><mi>A</mi><mi>x</mi></msub><mo>-</mo><msub><mi>B</mi><mi>x</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mi>y</mi></msub><mo>-</mo><msub><mi>B</mi><mi>y</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mi>z</mi></msub><mo>-</mo><msub><mi>B</mi><mi>z</mi></msub><mo stretchy="false">)</mo></mrow></msqrt><annotation encoding="TeX">\sqrt{(A_x - B_x) ^ 2) + (A_y - B_y)^2 + (A_z - B_z)}</annotation></semantics></math> ,我们的公式指出，球体碰撞检测是：

<math><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>P</mi><mo>,</mo><mi>S</mi><mo stretchy="false">)</mo><mo>=</mo><msub><mi>S</mi><mrow><mi>r</mi><mi>a</mi><mi>d</mi><mi>i</mi><mi>u</mi><mi>s</mi></mrow></msub><mo>>=</mo><msqrt><mrow><mo stretchy="false">(</mo><msub><mi>P</mi><mi>x</mi></msub><mo>-</mo><msub><mi>S</mi><mi>x</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><msub><mi>P</mi><mi>y</mi></msub><mo>-</mo><msub><mi>S</mi><mi>y</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><msub><mi>P</mi><mi>z</mi></msub><mo>-</mo><msub><mi>S</mi><mi>z</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup></mrow></msqrt></mrow><annotation encoding="TeX">f(P,S) = S\_{radius} >= \sqrt{(P_x - S_x)^2 + (P_y - S_y)^2 + (P_z - S_z)^2}</annotation></semantics></math>

或者用 JavaScript:

```js
function isPointInsideSphere(point, sphere) {
  // we are using multiplications because is faster than calling Math.pow
  var distance = Math.sqrt(
    (point.x - sphere.x) * (point.x - sphere.x) +
      (point.y - sphere.y) * (point.y - sphere.y) +
      (point.z - sphere.z) * (point.z - sphere.z),
  );
  return distance < sphere.radius;
}
```

> **备注：** 上面的代码有一个平方根，是一个开销昂贵的计算。一个简单的优化，以避免它由半径平方，所以优化方程不涉及`distance < sphere.radius * sphere.radius`.

### 球体与球体

球体与球体的距离类似于点和球体。我们需要测试是球体的中心之间的距离小于或等于半径的总和。

![](sphere_vs_sphere.png)

在数学上，像这样：

<math><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>A</mi><mo>,</mo><mi>B</mi><mo stretchy="false">)</mo><mo>=</mo><msqrt><mrow><mo stretchy="false">(</mo><msub><mi>A</mi><mi>x</mi></msub><mo>-</mo><msub><mi>B</mi><mi>x</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mi>y</mi></msub><mo>-</mo><msub><mi>B</mi><mi>y</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mi>z</mi></msub><mo>-</mo><msub><mi>B</mi><mi>z</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup></mrow></msqrt><mo>&#x3C;=</mo><msub><mi>A</mi><mrow><mi>r</mi><mi>a</mi><mi>d</mi><mi>i</mi><mi>u</mi><mi>s</mi></mrow></msub><mo>+</mo><msub><mi>B</mi><mrow><mi>r</mi><mi>a</mi><mi>d</mi><mi>i</mi><mi>u</mi><mi>s</mi></mrow></msub></mrow><annotation encoding="TeX">f(A,B) = \sqrt{(A*x - B_x)^2 + (A_y - B_y)^2 + (A_z - B_z)^2} &#x3C;= A*{radius} + B\_{radius}</annotation></semantics></math>

或者 JavaScript:

```js
function intersect(sphere, other) {
  // we are using multiplications because it's faster than calling Math.pow
  var distance = Math.sqrt((sphere.x - other.x) * (sphere.x - other.x) +
                           (sphere.y - other.y) * (sphere.y - other.y) +
                           (sphere.z - other.z) * (sphere.z - other.z));
  return distance < (sphere.radius + other.radius); }
}
```

### 球体与 AABB

测试一个球和一个 AABB 的碰撞是稍微复杂，但过程仍然简单和快速。一个合乎逻辑的方法是，检查 AABB 每个顶点，计算每一个点与球的距离。然而这是大材小用了，测试所有的顶点都是不必要的，因为我们可以侥幸计算 AABB 最近的点 (不一定是一个顶点) 和球体的中心之间的距离，看看它是小于或等于球体的半径。我们可以通过逼近球体的中心和 AABB 的距离得到这个值。

![](sphere_vs_aabb.png)

在 JavaScript, 我们可以像这样子做：

```js
function intersect(sphere, box) {
  // get box closest point to sphere center by clamping
  var x = Math.max(box.minX, Math.min(sphere.x, box.maxX));
  var y = Math.max(box.minY, Math.min(sphere.y, box.maxY));
  var z = Math.max(box.minZ, Math.min(sphere.z, box.maxZ));

  // this is the same as isPointInsideSphere
  var distance = Math.sqrt(
    (x - sphere.x) * (x - sphere.x) +
      (y - sphere.y) * (y - sphere.y) +
      (z - sphere.z) * (z - sphere.z),
  );

  return distance < sphere.radius;
}
```

## 使用一个物理引擎

**3D physics engines** provide collision detection algorithms, most of them based on bounding volumes as well. The way a physics engine works is by creating a **physical body**, usually attached to a visual representation of it. This body has properties such as velocity, position, rotation, torque, etc., and also a **physical shape**. This shape is the one that is considered in the collision detection calculations.

We have prepared a [live collision detection demo](http://mozdevs.github.io/gamedev-js-3d-aabb/physics.html) (with [source code](https://github.com/mozdevs/gamedev-js-3d-aabb)) that you can take a look at to see such techniques in action — this uses the open-source 3D physics engine [cannon.js](https://github.com/schteppe/cannon.js).

## See also

Related articles on MDN:

- [Bounding volumes collision detection with Three.js](/zh-CN/docs/Games/Techniques/3D_collision_detection/Bounding_volume_collision_detection_with_THREE.js)
- [2D collision detection](/zh-CN/docs/Games/Techniques/2D_collision_detection)

External resources:

- [Simple intersection tests for games](http://www.gamasutra.com/view/feature/3383/simple_intersection_tests_for_games.php) on Gamasutra
- [Bounding volume](https://en.wikipedia.org/wiki/Bounding_volume) on Wikipedia

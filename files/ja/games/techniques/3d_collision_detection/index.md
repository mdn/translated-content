---
title: 三次元の衝突検出
slug: Games/Techniques/3D_collision_detection
---

{{GamesSidebar}}

この記事では、三次元環境で衝突検出を実装するために使用されるさまざまなバウンディングボリューム手法の概要を説明します。後続の記事では、特定の 3D ライブラリーに搭載されたものを取り上げる予定です。

## 座標軸に沿ったバウンディングボックス

二次元の衝突検出と同様に、**座標軸に沿ったバウンディングボックス**（axis-aligned bounding boxes、AABB）は、2つのゲームエンティティが重複しているかどうかを判断するための最も速いアルゴリズムです。 これは、ゲームエンティティを回転しない（つまり座標軸に沿った）ボックスで包み、三次元座標空間でこれらのボックスの位置をチェックして、それらが重なっているかどうかを確認することで構成されます。

![Two 3-D non-square objects floating in space encompassed by virtual rectangular boxes.](screen_shot_2015-10-16_at_15.11.21.png)

**軸配置の制約**があるのは、パフォーマンス上の理由からです。回転していない2つのボックスの間の重複領域は論理比較だけでチェックできますが、回転したボックスではさらに三角関数の演算を運営する必要があり、計算にかかる時間が長くなってしまいます。回転するエンティティがある場合、外接ボックスの寸法を変更してオブジェクトを包むようにするか、球などの別の外接ジオメトリ タイプ（回転に対して不変）を使用できます。以下のアニメーション GIF は、回転するエンティティにサイズを合わせる AABB のグラフィック例です。ボックスは常に寸法を変化させ、中に含まれるコンテナーの中にぴったりとフィットします。

![Animated rotating knot showing the virtual rectangular box shrink and grow as the knots rotates within it. The box does not rotate.](rotating_knot.gif)

> **メモ:** この手法の実際の実装については、[Three.js を使用したバウンディングボリューム](/ja/docs/Games/Techniques/3D_collision_detection/Bounding_volume_collision_detection_with_THREE.js)の記事を確認してください。

### 点 対 AABB

点が AABB 内にあるかどうかを確認するのは非常に簡単です。 点の座標が、AABB 内にあるかどうかを確認する必要があります。 各座標軸を個別に検討します。 _P<sub>x</sub>_、_P<sub>y</sub>_、_P<sub>z</sub>_ を点の座標、_B<sub>minX</sub>_–_B<sub>maxX</sub>_、_B<sub>minY</sub>_–_B<sub>maxY</sub>_、_B<sub>minZ</sub>_–_B<sub>maxZ</sub>_ を AABB の各座標軸の範囲とすると、次の式を使用して、 2 つの間で衝突が発生したかどうかを計算できます。

<math>
<semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>P</mi><mo>,</mo><mi>B</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><msub><mi>P</mi><mi>x</mi></msub><mo>≥</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>X</mi></mrow></msub><mo>∧</mo><msub><mi>P</mi><mi>x</mi></msub><mo>≤</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>X</mi></mrow></msub><mo stretchy="false">)</mo><mo>∧</mo><mo stretchy="false">(</mo><msub><mi>P</mi><mi>y</mi></msub><mo>≥</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>Y</mi></mrow></msub><mo>∧</mo><msub><mi>P</mi><mi>y</mi></msub><mo>≤</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>Y</mi></mrow></msub><mo stretchy="false">)</mo><mo>∧</mo><mo stretchy="false">(</mo><msub><mi>P</mi><mi>z</mi></msub><mo>≥</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>Z</mi></mrow></msub><mo>∧</mo><msub><mi>P</mi><mi>z</mi></msub><mo>≤</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>Z</mi></mrow></msub><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">f(P, B)= (P_x \ge B_{minX} \wedge P_x \le B_{maxX}) \wedge (P_y \ge B_{minY} \wedge P_y \le B_{maxY}) \wedge (P_z \ge B_{minZ} \wedge P_z \le B_{maxZ})</annotation></semantics></math>

あるいは、JavaScript では、次のようになります。

```js
function isPointInsideAABB(point, box) {
  return (
    point.x >= box.minX &&
    point.x <= box.maxX &&
    point.y >= box.minY &&
    point.y <= box.maxY &&
    point.z >= box.minZ &&
    point.z <= box.maxZ
  );
}
```

### AABB 対 AABB

AABB が別の AABB と交差するかどうかのチェックは、点のテストと同様です。 ボックスの境界を使用して、座標軸ごとに1つのテストを実行する必要があります。 次の図は、X 軸上で実行するテストを示しています。 基本的には、_A<sub>minX</sub>_–_A<sub>maxX</sub>_ と _B<sub>minX</sub>_–_B<sub>maxX</sub>_ の範囲は重複しているかです。

![Hand drawing of two rectangles showing the upper right corner of A overlapping the bottom left corner of B, as A's largest x coordinate is greater than B's smallest x coordinate.](aabb_test.png)

数学的には、これは次のようになります。

<math>
<semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>A</mi><mo>,</mo><mi>B</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>X</mi></mrow></msub><mo>≤</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>X</mi></mrow></msub><mo>∧</mo><msub><mi>A</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>X</mi></mrow></msub><mo>≥</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>X</mi></mrow></msub><mo stretchy="false">)</mo><mo>∧</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>Y</mi></mrow></msub><mo>≤</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>Y</mi></mrow></msub><mo>∧</mo><msub><mi>A</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>Y</mi></mrow></msub><mo>≥</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>Y</mi></mrow></msub><mo stretchy="false">)</mo><mo>∧</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>Z</mi></mrow></msub><mo>≤</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>Z</mi></mrow></msub><mo>∧</mo><msub><mi>A</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>Z</mi></mrow></msub><mo>≥</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>Z</mi></mrow></msub><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">f(A, B) = (A_{minX} \le B_{maxX} \wedge A_{maxX} \ge B_{minX}) \wedge ( A_{minY} \le B_{maxY} \wedge A_{maxY} \ge B_{minY}) \wedge (A_{minZ} \le B_{maxZ} \wedge A_{maxZ} \ge B_{minZ})</annotation></semantics></math>

そして、JavaScript では、これを使用します。

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

## バウンディングスフィア

バウンディングスフィア（bounding spheres）を使用して衝突を検出することは、AABB よりも少し複雑ですが、それでもテストはかなり迅速です。 球の主な利点は、回転に対して不変であるため、包まれたエンティティが回転しても、バウンディングスフィアは同じままであるということです。 主な欠点は、包んでいるエンティティが実際に球形でない限り、包むのは通常適切ではないことです（つまり、バウンディングスフィアで人を包むと、多くの誤検知が発生しますので、AABB の方が適しています）。

### 点 対 球

球に点が含まれているかどうかを確認するには、点と球の中心との間の距離を計算する必要があります。 この距離が球の半径以下の場合、点は球の内側にあります。

![Hand drawing of a 2D projection of a sphere and a point in a Cartesian coordinate system. The point is outside of the circle, to the lower right of it. The distance is denoted by a dashed line, labeled D, from the circle's center to the point. A lighter line shows the radius, labeled R, going from the center of the circle to the border of the circle.](point_vs_sphere.png)

2つの点 _A_ と _B_ の間のユークリッド距離が <math><semantics><msqrt><mrow><mo stretchy="false">(</mo><msub><mi>A</mi><mi>x</mi></msub><mo>-</mo><msub><mi>B</mi><mi>x</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mi>y</mi></msub><mo>-</mo><msub><mi>B</mi><mi>y</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mi>z</mi></msub><mo>-</mo><msub><mi>B</mi><mi>z</mi></msub><mo stretchy="false">)</mo></mrow></msqrt><annotation encoding="TeX">\sqrt{(A_x - B_x) ^ 2) + (A_y - B_y)^2 + (A_z - B_z)}</annotation></semantics></math> であることを考慮すると、点対球の衝突検出の式は次のようになります。

<math>
<semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>P</mi><mo>,</mo><mi>S</mi><mo stretchy="false">)</mo><mo>=</mo><msub><mi>S</mi><mrow><mi>r</mi><mi>a</mi><mi>d</mi><mi>i</mi><mi>u</mi><mi>s</mi></mrow></msub><mo>≥</mo><msqrt><mo stretchy="false">(</mo><msub><mi>P</mi><mi>x</mi></msub><mo>−</mo><msub><mi>S</mi><mi>x</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><msub><mi>P</mi><mi>y</mi></msub><mo>−</mo><msub><mi>S</mi><mi>y</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><msub><mi>P</mi><mi>z</mi></msub><mo>−</mo><msub><mi>S</mi><mi>z</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup></msqrt></mrow><annotation encoding="TeX">f(P,S) = S_{radius} \ge \sqrt{(P_x - S_x)^2 + (P_y - S_y)^2 + (P_z - S_z)^2}</annotation></semantics></math>

あるいは、JavaScript では、次のようになります。

```js
function isPointInsideSphere(point, sphere) {
  // Math.pow を呼び出すよりも高速であるため、乗算を使用しています
  const distance = Math.sqrt(
    (point.x - sphere.x) * (point.x - sphere.x) +
      (point.y - sphere.y) * (point.y - sphere.y) +
      (point.z - sphere.z) * (point.z - sphere.z),
  );
  return distance < sphere.radius;
}
```

> **メモ:** 上記のコードは平方根を特徴としており、計算にコストがかかる可能性があります。 これを回避する簡単な最適化は、距離の2乗と半径の2乗を比較することで構成されているため、最適化された方程式には、代わりに `distanceSqr < sphere.radius * sphere.radius` が含まれます。

### 球 対 球

球対球のテストは、点対球のテストに似ています。 ここでテストする必要があるのは、球の中心間の距離がそれらの半径の合計以下であることです。

![Hand drawing of two partially overlapping circles. Each circle (of different sizes) has a light radius line going from its center to its border, labeled R. The distance is denoted by a dotted line, labeled D, connecting the center points of both circles.](sphere_vs_sphere.png)

数学的には、これは次のようになります。

<math>
<semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>A</mi><mo>,</mo><mi>B</mi><mo stretchy="false">)</mo><mo>=</mo><msqrt><mo stretchy="false">(</mo><msub><mi>A</mi><mi>x</mi></msub><mo>−</mo><msub><mi>B</mi><mi>x</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mi>y</mi></msub><mo>−</mo><msub><mi>B</mi><mi>y</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mi>z</mi></msub><mo>−</mo><msub><mi>B</mi><mi>z</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup></msqrt><mo>≤</mo><msub><mi>A</mi><mrow><mi>r</mi><mi>a</mi><mi>d</mi><mi>i</mi><mi>u</mi><mi>s</mi></mrow></msub><mo>+</mo><msub><mi>B</mi><mrow><mi>r</mi><mi>a</mi><mi>d</mi><mi>i</mi><mi>u</mi><mi>s</mi></mrow></msub></mrow><annotation encoding="TeX">f(A,B) = \sqrt{(A_x - B_x)^2 + (A_y - B_y)^2 + (A_z - B_z)^2} \le A_{radius} + B_{radius}</annotation></semantics></math>

あるいは、JavaScript では、次のようになります。

```js
function intersect(sphere, other) {
  // Math.pow を呼び出すよりも高速であるため、乗算を使用しています
  const distance = Math.sqrt(
    (sphere.x - other.x) * (sphere.x - other.x) +
      (sphere.y - other.y) * (sphere.y - other.y) +
      (sphere.z - other.z) * (sphere.z - other.z),
  );
  return distance < sphere.radius + other.radius;
}
```

### 球 対 AABB

球と AABB が衝突しているかどうかのテストは少し複雑ですが、それでも単純で高速です。 論理的なアプローチは、AABB のすべての頂点をチェックし、それぞれに対して点対球のテストを実行することです。 ただし、これはやり過ぎです。 AABB の*最も近い点*（必ずしも頂点である必要はありません）と球の中心との間の距離を計算して、球の半径以下であるかどうかを確認するだけで済むため、すべての頂点をテストする必要はありません。 この値は、球の中心を AABB の限界にクランプすることで取得できます。

![Hand drawing of a square partially overlapping the top of a circle. The radius is denoted by a light line labeled R. The distance line goes from the circle's center to the closest point of the square.](sphere_vs_aabb.png)

JavaScript では、次のようにこのテストを行います。

```js
function intersect(sphere, box) {
  // クランプして球の中心からボックスの最も近い点を取得します
  const x = Math.max(box.minX, Math.min(sphere.x, box.maxX));
  const y = Math.max(box.minY, Math.min(sphere.y, box.maxY));
  const z = Math.max(box.minZ, Math.min(sphere.z, box.maxZ));

  // これは isPointInsideSphere と同じです
  const distance = Math.sqrt(
    (x - sphere.x) * (x - sphere.x) +
      (y - sphere.y) * (y - sphere.y) +
      (z - sphere.z) * (z - sphere.z),
  );

  return distance < sphere.radius;
}
```

## 物理エンジンの使用

**3D 物理エンジン** (3D physics engines) は、衝突検出アルゴリズムを提供していますが、そのほとんどは、バウンディングボリュームにも基づいています。 物理エンジンが機能する方法は、通常はその視覚的表現に付属した**物理的なボディ** (physical body) を作成することです。 このボディには、速度、位置、回転、トルクなどのプロパティと、**物理的な形状** (physical shape) があります。 この形状は、衝突検出の計算で考慮されるものです。

このような手法が実際に動作していることを確認できる[ライブ衝突検出デモ](http://mozdevs.github.io/gamedev-js-3d-aabb/physics.html)（[ソースコード](https://github.com/mozdevs/gamedev-js-3d-aabb)付き）を用意しました。 これは、オープンソースの 3D 物理エンジン [cannon.js](https://github.com/schteppe/cannon.js) を使用しています。

## 関連情報

MDN の関連記事

- [Three.js によるバウンディングボリューム衝突検出](/ja/docs/Games/Techniques/3D_collision_detection/Bounding_volume_collision_detection_with_THREE.js)
- [2D 衝突検出](/ja/docs/Games/Techniques/2D_collision_detection)

外部リソース

- Gamasutra の[ゲームのための簡単な交点テスト](http://www.gamasutra.com/view/feature/3383/simple_intersection_tests_for_games.php)（英語）
- ウィキペディアの[バウンディングボリューム](https://en.wikipedia.org/wiki/Bounding_volume)（英語）

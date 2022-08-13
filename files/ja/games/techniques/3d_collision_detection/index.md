---
title: 3D 衝突検出
slug: Games/Techniques/3D_collision_detection
tags:
  - 3D
  - Games
  - JavaScript
  - bounding boxes
  - collision detection
translation_of: Games/Techniques/3D_collision_detection
---
{{GamesSidebar}}

この記事では、3D 環境で衝突検出を実装するために使用されるさまざまなバウンディングボリューム手法の概要を説明します。 追求記事では、特定の 3D ライブラリでの実装について説明します。

## 座標軸に沿ったバウンディングボックス

2D 衝突検出と同様に、**座標軸に沿ったバウンディングボックス**（axis-aligned bounding boxes、AABB）は、2 つのゲームエンティティがオーバーラップしているかどうかを判断するための最も速いアルゴリズムです。 これは、ゲームエンティティを回転しない（つまり座標軸に沿った）ボックスで包み、3D 座標空間でこれらのボックスの位置をチェックして、それらが重なっているかどうかを確認することで構成されます。

![](https://mdn.mozillademos.org/files/11797/Screen%20Shot%202015-10-16%20at%2015.11.21.png)

パフォーマンス上の理由から、**座標軸に沿った拘束**（axis-aligned constraint）があります。 回転しない 2 つのボックス間の重複領域は、論理比較のみで確認できますが、回転するボックスには追加の三角関数操作が必要であり、計算に時間がかかります。 回転するエンティティがある場合は、バウンディングボックスの寸法を変更してオブジェクトを包むか、球（回転に対して不変）などの別のバウンディングジオメトリータイプを使用することを選択できます。 以下のアニメーション GIF は、回転するエンティティに合うようにサイズを調整する AABB の図形例を示しています。 ボックスは常に寸法を変更して、内部に含まれるエンティティにぴったりとフィットします。

![](https://mdn.mozillademos.org/files/11799/rotating_knot.gif)

> **Note:** **注**: この手法の実際の実装については、[Three.js を使用したバウンディングボリューム](/ja/docs/Games/Techniques/3D_collision_detection/Bounding_volume_collision_detection_with_THREE.js)の記事を確認してください。

### 点 対 AABB

点が AABB 内にあるかどうかを確認するのは非常に簡単です。 点の座標が、AABB 内にあるかどうかを確認する必要があります。 各座標軸を個別に検討します。 _Px_、_Py_、_Pz_ を点の座標、_BminX_–_BmaxX_、_BminY_–_BmaxY_、_BminZ_–_BmaxZ_ を AABB の各座標軸の範囲とすると、次の式を使用して、2 つの間で衝突が発生したかどうかを計算できます。

<math><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>P</mi><mo>,</mo><mi>B</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><msub><mi>P</mi><mi>x</mi></msub><mo>>=</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>X</mi></mrow></msub><mo>∧</mo><msub><mi>P</mi><mi>x</mi></msub><mo>&#x3C;=</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>X</mi></mrow></msub><mo stretchy="false">)</mo><mo>∧</mo><mo stretchy="false">(</mo><msub><mi>P</mi><mi>y</mi></msub><mo>>=</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>Y</mi></mrow></msub><mo>∧</mo><msub><mi>P</mi><mi>y</mi></msub><mo>&#x3C;=</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>Y</mi></mrow></msub><mo stretchy="false">)</mo><mo>∧</mo><mo stretchy="false">(</mo><msub><mi>P</mi><mi>z</mi></msub><mo>>=</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>Z</mi></mrow></msub><mo>∧</mo><msub><mi>P</mi><mi>z</mi></msub><mo>&#x3C;=</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>Z</mi></mrow></msub><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">f(P,B)= (P*x >= B*{minX} \wedge P*x &#x3C;= B*{maxX}) \wedge (P*y >= B*{minY} \wedge P*y &#x3C;= B*{maxY}) \wedge (P*z >= B*{minZ} \wedge P*z &#x3C;= B*{maxZ})</annotation></semantics></math>

あるいは、JavaScript では、次のようになります。

```js
function isPointInsideAABB(point, box) {
  return (point.x >= box.minX && point.x <= box.maxX) &&
         (point.y >= box.minY && point.y <= box.maxY) &&
         (point.z >= box.minZ && point.z <= box.maxZ);
}
```

### AABB 対 AABB

AABB が別の AABB と交差するかどうかのチェックは、点のテストと同様です。 ボックスの境界を使用して、座標軸ごとに 1 つのテストを実行する必要があります。 次の図は、X 軸上で実行するテストを示しています。 基本的には、_AminX_–_AmaxX_ と _BminX_–_BmaxX_ の範囲は重複しているかです。

![updated version](https://mdn.mozillademos.org/files/11813/aabb_test.png)

数学的には、これは次のようになります。

<math><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>A</mi><mo>,</mo><mi>B</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>X</mi></mrow></msub><mo>&#x3C;=</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>X</mi></mrow></msub><mo>∧</mo><msub><mi>A</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>X</mi></mrow></msub><mo>>=</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>X</mi></mrow></msub><mo stretchy="false">)</mo><mo>∧</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>Y</mi></mrow></msub><mo>&#x3C;=</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>Y</mi></mrow></msub><mo>∧</mo><msub><mi>A</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>Y</mi></mrow></msub><mo>>=</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>Y</mi></mrow></msub><mo stretchy="false">)</mo><mo>∧</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>Z</mi></mrow></msub><mo>&#x3C;=</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>Z</mi></mrow></msub><mo>∧</mo><msub><mi>A</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>Z</mi></mrow></msub><mo>>=</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>Z</mi></mrow></msub><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">f(A,B) =</annotation></semantics></math>

そして、JavaScript では、これを使用します。

```js
function intersect(a, b) {
  return (a.minX <= b.maxX && a.maxX >= b.minX) &&
         (a.minY <= b.maxY && a.maxY >= b.minY) &&
         (a.minZ <= b.maxZ && a.maxZ >= b.minZ);
}
```

## バウンディングスフィア

バウンディングスフィア（bounding spheres）を使用して衝突を検出することは、AABB よりも少し複雑ですが、それでもテストはかなり迅速です。 球の主な利点は、回転に対して不変であるため、包まれたエンティティが回転しても、バウンディングスフィアは同じままであるということです。 主な欠点は、包んでいるエンティティが実際に球形でない限り、包むのは通常適切ではないことです（つまり、バウンディングスフィアで人を包むと、多くの誤検知が発生しますので、AABB の方が適しています）。

### 点 対 球

球に点が含まれているかどうかを確認するには、点と球の中心との間の距離を計算する必要があります。 この距離が球の半径以下の場合、点は球の内側にあります。

![](https://mdn.mozillademos.org/files/11803/point_vs_sphere.png)

2 つの点 _A_ と _B_ の間のユークリッド距離が <math><semantics><msqrt><mrow><mo stretchy="false">(</mo><msub><mi>A</mi><mi>x</mi></msub><mo>-</mo><msub><mi>B</mi><mi>x</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mi>y</mi></msub><mo>-</mo><msub><mi>B</mi><mi>y</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mi>z</mi></msub><mo>-</mo><msub><mi>B</mi><mi>z</mi></msub><mo stretchy="false">)</mo></mrow></msqrt><annotation encoding="TeX">\sqrt{(A_x - B_x) ^ 2) + (A_y - B_y)^2 + (A_z - B_z)}</annotation></semantics></math> であることを考慮すると、点対球の衝突検出の式は次のようになります。

<math><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>P</mi><mo>,</mo><mi>S</mi><mo stretchy="false">)</mo><mo>=</mo><msub><mi>S</mi><mrow><mi>r</mi><mi>a</mi><mi>d</mi><mi>i</mi><mi>u</mi><mi>s</mi></mrow></msub><mo>>=</mo><msqrt><mrow><mo stretchy="false">(</mo><msub><mi>P</mi><mi>x</mi></msub><mo>-</mo><msub><mi>S</mi><mi>x</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><msub><mi>P</mi><mi>y</mi></msub><mo>-</mo><msub><mi>S</mi><mi>y</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><msub><mi>P</mi><mi>z</mi></msub><mo>-</mo><msub><mi>S</mi><mi>z</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup></mrow></msqrt></mrow><annotation encoding="TeX">f(P,S) = S\_{radius} >= \sqrt{(P_x - S_x)^2 + (P_y - S_y)^2 + (P_z - S_z)^2}</annotation></semantics></math>

あるいは、JavaScript では、次のようになります。

```js
function isPointInsideSphere(point, sphere) {
  // Math.pow を呼び出すよりも高速であるため、乗算を使用しています
  var distance = Math.sqrt((point.x - sphere.x) * (point.x - sphere.x) +
                           (point.y - sphere.y) * (point.y - sphere.y) +
                           (point.z - sphere.z) * (point.z - sphere.z));
  return distance < sphere.radius;
}
```

> **Note:** 上記のコードは平方根を特徴としており、計算にコストがかかる可能性があります。 これを回避する簡単な最適化は、距離の 2 乗と半径の 2 乗を比較することで構成されているため、最適化された方程式には、代わりに `distanceSqr < sphere.radius * sphere.radius` が含まれます。

### 球 対 球

球対球のテストは、点対球のテストに似ています。 ここでテストする必要があるのは、球の中心間の距離がそれらの半径の合計以下であることです。

![](https://mdn.mozillademos.org/files/11805/sphere_vs_sphere.png)

数学的には、これは次のようになります。

<math><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>A</mi><mo>,</mo><mi>B</mi><mo stretchy="false">)</mo><mo>=</mo><msqrt><mrow><mo stretchy="false">(</mo><msub><mi>A</mi><mi>x</mi></msub><mo>-</mo><msub><mi>B</mi><mi>x</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mi>y</mi></msub><mo>-</mo><msub><mi>B</mi><mi>y</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mi>z</mi></msub><mo>-</mo><msub><mi>B</mi><mi>z</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup></mrow></msqrt><mo>&#x3C;=</mo><msub><mi>A</mi><mrow><mi>r</mi><mi>a</mi><mi>d</mi><mi>i</mi><mi>u</mi><mi>s</mi></mrow></msub><mo>+</mo><msub><mi>B</mi><mrow><mi>r</mi><mi>a</mi><mi>d</mi><mi>i</mi><mi>u</mi><mi>s</mi></mrow></msub></mrow><annotation encoding="TeX">f(A,B) = \sqrt{(A*x - B_x)^2 + (A_y - B_y)^2 + (A_z - B_z)^2} &#x3C;= A*{radius} + B\_{radius}</annotation></semantics></math>

あるいは、JavaScript では、次のようになります。

```js
function intersect(sphere, other) {
  // Math.pow を呼び出すよりも高速であるため、乗算を使用しています
  var distance = Math.sqrt((sphere.x - other.x) * (sphere.x - other.x) +
                           (sphere.y - other.y) * (sphere.y - other.y) +
                           (sphere.z - other.z) * (sphere.z - other.z));
  return distance < (sphere.radius + other.radius);
}
```

### 球 対 AABB

球と AABB が衝突しているかどうかのテストは少し複雑ですが、それでも単純で高速です。 論理的なアプローチは、AABB のすべての頂点をチェックし、それぞれに対して点対球のテストを実行することです。 ただし、これはやり過ぎです。 AABB の*最も近い点*（必ずしも頂点である必要はありません）と球の中心との間の距離を計算して、球の半径以下であるかどうかを確認するだけで済むため、すべての頂点をテストする必要はありません。 この値は、球の中心を AABB の限界にクランプすることで取得できます。

![](https://mdn.mozillademos.org/files/11837/sphere_vs_aabb.png)

JavaScript では、次のようにこのテストを行います。

    function intersect(sphere, box) {
      // クランプして球の中心からボックスの最も近い点を取得します
      var x = Math.max(box.minX, Math.min(sphere.x, box.maxX));
      var y = Math.max(box.minY, Math.min(sphere.y, box.maxY));
      var z = Math.max(box.minZ, Math.min(sphere.z, box.maxZ));

      // これは isPointInsideSphere と同じです
      var distance = Math.sqrt((x - sphere.x) * (x - sphere.x) +
                               (y - sphere.y) * (y - sphere.y) +
                               (z - sphere.z) * (z - sphere.z));

      return distance < sphere.radius;
    }

## 物理エンジンの使用

**3D 物理エンジン**（3D physics engines）は、衝突検出アルゴリズムを提供していますが、そのほとんどは、バウンディングボリュームにも基づいています。 物理エンジンが機能する方法は、通常はその視覚的表現に付属した**物理的なボディ**（physical body）を作成することです。 このボディには、速度、位置、回転、トルクなどのプロパティと、**物理的な形状**（physical shape）があります。 この形状は、衝突検出の計算で考慮されるものです。

このような手法が実際に動作していることを確認できる[ライブ衝突検出デモ](http://mozdevs.github.io/gamedev-js-3d-aabb/physics.html)（[ソースコード](https://github.com/mozdevs/gamedev-js-3d-aabb)付き）を用意しました。 これは、オープンソースの 3D 物理エンジン [cannon.js](https://github.com/schteppe/cannon.js) を使用しています。

## 関連情報

MDN の関連記事

- [Three.js によるバウンディングボリューム衝突検出](/ja/docs/Games/Techniques/3D_collision_detection/Bounding_volume_collision_detection_with_THREE.js)
- [2D 衝突検出](/ja/docs/Games/Techniques/2D_collision_detection)

外部リソース

- Gamasutra の[ゲームのための簡単な交点テスト](http://www.gamasutra.com/view/feature/3383/simple_intersection_tests_for_games.php)（英語）
- ウィキペディアの[バウンディングボリューム](https://en.wikipedia.org/wiki/Bounding_volume)（英語）

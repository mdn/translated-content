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
<div>{{GamesSidebar}}</div>

<p class="summary">この記事では、3D 環境で衝突検出を実装するために使用されるさまざまなバウンディングボリューム手法の概要を説明します。 追求記事では、特定の 3D ライブラリでの実装について説明します。</p>

<h2 id="Axis-aligned_bounding_boxes" name="Axis-aligned_bounding_boxes">座標軸に沿ったバウンディングボックス</h2>

<p>2D 衝突検出と同様に、<strong>座標軸に沿ったバウンディングボックス</strong>（axis-aligned bounding boxes、AABB）は、2つのゲームエンティティがオーバーラップしているかどうかを判断するための最も速いアルゴリズムです。 これは、ゲームエンティティを回転しない（つまり座標軸に沿った）ボックスで包み、3D 座標空間でこれらのボックスの位置をチェックして、それらが重なっているかどうかを確認することで構成されます。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/11797/Screen%20Shot%202015-10-16%20at%2015.11.21.png" style="display: block; height: 275px; margin: 0px auto; width: 432px;"></p>

<p>パフォーマンス上の理由から、<strong>座標軸に沿った拘束</strong>（axis-aligned constraint）があります。 回転しない2つのボックス間の重複領域は、論理比較のみで確認できますが、回転するボックスには追加の三角関数操作が必要であり、計算に時間がかかります。 回転するエンティティがある場合は、バウンディングボックスの寸法を変更してオブジェクトを包むか、球（回転に対して不変）などの別のバウンディングジオメトリータイプを使用することを選択できます。 以下のアニメーション GIF は、回転するエンティティに合うようにサイズを調整する AABB の図形例を示しています。 ボックスは常に寸法を変更して、内部に含まれるエンティティにぴったりとフィットします。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/11799/rotating_knot.gif" style="display: block; height: 192px; margin: 0px auto; width: 207px;"></p>

<div class="note">
<p><strong>注</strong>: この手法の実際の実装については、<a href="/ja/docs/Games/Techniques/3D_collision_detection/Bounding_volume_collision_detection_with_THREE.js">Three.js を使用したバウンディングボリューム</a>の記事を確認してください。</p>
</div>

<h3 id="Point_vs._AABB" name="Point_vs._AABB">点 対 AABB</h3>

<p>点が AABB 内にあるかどうかを確認するのは非常に簡単です。 点の座標が、AABB 内にあるかどうかを確認する必要があります。 各座標軸を個別に検討します。 <em>P<sub>x</sub></em>、<em>P<sub>y</sub></em>、<em>P<sub>z</sub></em> を点の座標、<em>B<sub>minX</sub></em>–<em>B<sub>maxX</sub></em>、<em>B<sub>minY</sub></em>–<em>B<sub>maxY</sub></em>、<em>B<sub>minZ</sub></em>–<em>B<sub>maxZ</sub></em> を AABB の各座標軸の範囲とすると、次の式を使用して、2つの間で衝突が発生したかどうかを計算できます。</p>

<p><math><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>P</mi><mo>,</mo><mi>B</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><msub><mi>P</mi><mi>x</mi></msub><mo>&gt;=</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>X</mi></mrow></msub><mo>∧</mo><msub><mi>P</mi><mi>x</mi></msub><mo>&lt;=</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>X</mi></mrow></msub><mo stretchy="false">)</mo><mo>∧</mo><mo stretchy="false">(</mo><msub><mi>P</mi><mi>y</mi></msub><mo>&gt;=</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>Y</mi></mrow></msub><mo>∧</mo><msub><mi>P</mi><mi>y</mi></msub><mo>&lt;=</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>Y</mi></mrow></msub><mo stretchy="false">)</mo><mo>∧</mo><mo stretchy="false">(</mo><msub><mi>P</mi><mi>z</mi></msub><mo>&gt;=</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>Z</mi></mrow></msub><mo>∧</mo><msub><mi>P</mi><mi>z</mi></msub><mo>&lt;=</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>Z</mi></mrow></msub><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">f(P,B)= (P_x &gt;= B_{minX} \wedge P_x &lt;= B_{maxX}) \wedge (P_y &gt;= B_{minY} \wedge P_y &lt;= B_{maxY}) \wedge (P_z &gt;= B_{minZ} \wedge P_z &lt;= B_{maxZ})</annotation></semantics></math></p>

<p>あるいは、JavaScript では、次のようになります。</p>

<pre class="brush: js notranslate">function isPointInsideAABB(point, box) {
  return (point.x &gt;= box.minX &amp;&amp; point.x &lt;= box.maxX) &amp;&amp;
         (point.y &gt;= box.minY &amp;&amp; point.y &lt;= box.maxY) &amp;&amp;
         (point.z &gt;= box.minZ &amp;&amp; point.z &lt;= box.maxZ);
}</pre>

<h3 id="AABB_vs._AABB" name="AABB_vs._AABB">AABB 対 AABB</h3>

<p>AABB が別の AABB と交差するかどうかのチェックは、点のテストと同様です。 ボックスの境界を使用して、座標軸ごとに1つのテストを実行する必要があります。 次の図は、X 軸上で実行するテストを示しています。 基本的には、<em>A<sub>minX</sub></em>–<em>A<sub>maxX</sub></em> と <em>B<sub>minX</sub></em>–<em>B<sub>maxX</sub></em> の範囲は重複しているかです。</p>

<p><img alt="updated version" src="https://mdn.mozillademos.org/files/11813/aabb_test.png" style="display: block; height: 346px; margin: 0px auto; width: 461px;"></p>

<p>数学的には、これは次のようになります。</p>

<p><math><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>A</mi><mo>,</mo><mi>B</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>X</mi></mrow></msub><mo>&lt;=</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>X</mi></mrow></msub><mo>∧</mo><msub><mi>A</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>X</mi></mrow></msub><mo>&gt;=</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>X</mi></mrow></msub><mo stretchy="false">)</mo><mo>∧</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>Y</mi></mrow></msub><mo>&lt;=</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>Y</mi></mrow></msub><mo>∧</mo><msub><mi>A</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>Y</mi></mrow></msub><mo>&gt;=</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>Y</mi></mrow></msub><mo stretchy="false">)</mo><mo>∧</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>Z</mi></mrow></msub><mo>&lt;=</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>Z</mi></mrow></msub><mo>∧</mo><msub><mi>A</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>Z</mi></mrow></msub><mo>&gt;=</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>Z</mi></mrow></msub><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">f(A,B) =</annotation></semantics></math></p>

<p>そして、JavaScript では、これを使用します。</p>

<pre class="brush: js notranslate">function intersect(a, b) {
  return (a.minX &lt;= b.maxX &amp;&amp; a.maxX &gt;= b.minX) &amp;&amp;
         (a.minY &lt;= b.maxY &amp;&amp; a.maxY &gt;= b.minY) &amp;&amp;
         (a.minZ &lt;= b.maxZ &amp;&amp; a.maxZ &gt;= b.minZ);
}
</pre>

<h2 id="Bounding_spheres" name="Bounding_spheres">バウンディングスフィア</h2>

<p>バウンディングスフィア（bounding spheres）を使用して衝突を検出することは、AABB よりも少し複雑ですが、それでもテストはかなり迅速です。 球の主な利点は、回転に対して不変であるため、包まれたエンティティが回転しても、バウンディングスフィアは同じままであるということです。 主な欠点は、包んでいるエンティティが実際に球形でない限り、包むのは通常適切ではないことです（つまり、バウンディングスフィアで人を包むと、多くの誤検知が発生しますので、AABB の方が適しています）。</p>

<h3 id="Point_vs._sphere" name="Point_vs._sphere">点 対 球</h3>

<p>球に点が含まれているかどうかを確認するには、点と球の中心との間の距離を計算する必要があります。 この距離が球の半径以下の場合、点は球の内側にあります。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/11803/point_vs_sphere.png" style="display: block; height: 262px; margin: 0px auto; width: 385px;"></p>

<p>2つの点 <em>A</em> と <em>B</em> の間のユークリッド距離が <math><semantics><msqrt><mrow><mo stretchy="false">(</mo><msub><mi>A</mi><mi>x</mi></msub><mo>-</mo><msub><mi>B</mi><mi>x</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mi>y</mi></msub><mo>-</mo><msub><mi>B</mi><mi>y</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mi>z</mi></msub><mo>-</mo><msub><mi>B</mi><mi>z</mi></msub><mo stretchy="false">)</mo></mrow></msqrt><annotation encoding="TeX">\sqrt{(A_x - B_x) ^ 2) + (A_y - B_y)^2 + (A_z - B_z)}</annotation></semantics></math> であることを考慮すると、点対球の衝突検出の式は次のようになります。</p>

<p><math><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>P</mi><mo>,</mo><mi>S</mi><mo stretchy="false">)</mo><mo>=</mo><msub><mi>S</mi><mrow><mi>r</mi><mi>a</mi><mi>d</mi><mi>i</mi><mi>u</mi><mi>s</mi></mrow></msub><mo>&gt;=</mo><msqrt><mrow><mo stretchy="false">(</mo><msub><mi>P</mi><mi>x</mi></msub><mo>-</mo><msub><mi>S</mi><mi>x</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><msub><mi>P</mi><mi>y</mi></msub><mo>-</mo><msub><mi>S</mi><mi>y</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><msub><mi>P</mi><mi>z</mi></msub><mo>-</mo><msub><mi>S</mi><mi>z</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup></mrow></msqrt></mrow><annotation encoding="TeX">f(P,S) = S_{radius} &gt;= \sqrt{(P_x - S_x)^2 + (P_y - S_y)^2 + (P_z - S_z)^2}</annotation></semantics></math></p>

<p>あるいは、JavaScript では、次のようになります。</p>

<pre class="brush: js notranslate">function isPointInsideSphere(point, sphere) {
  // Math.pow を呼び出すよりも高速であるため、乗算を使用しています
  var distance = Math.sqrt((point.x - sphere.x) * (point.x - sphere.x) +
                           (point.y - sphere.y) * (point.y - sphere.y) +
                           (point.z - sphere.z) * (point.z - sphere.z));
  return distance &lt; sphere.radius;
}
</pre>

<div class="note">
<p>上記のコードは平方根を特徴としており、計算にコストがかかる可能性があります。 これを回避する簡単な最適化は、距離の2乗と半径の2乗を比較することで構成されているため、最適化された方程式には、代わりに <code>distanceSqr &lt; sphere.radius * sphere.radius</code> が含まれます。</p>
</div>

<h3 id="Sphere_vs._sphere" name="Sphere_vs._sphere">球 対 球</h3>

<p>球対球のテストは、点対球のテストに似ています。 ここでテストする必要があるのは、球の中心間の距離がそれらの半径の合計以下であることです。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/11805/sphere_vs_sphere.png" style="display: block; height: 262px; margin: 0px auto; width: 414px;"></p>

<p>数学的には、これは次のようになります。</p>

<p><math><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>A</mi><mo>,</mo><mi>B</mi><mo stretchy="false">)</mo><mo>=</mo><msqrt><mrow><mo stretchy="false">(</mo><msub><mi>A</mi><mi>x</mi></msub><mo>-</mo><msub><mi>B</mi><mi>x</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mi>y</mi></msub><mo>-</mo><msub><mi>B</mi><mi>y</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mi>z</mi></msub><mo>-</mo><msub><mi>B</mi><mi>z</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup></mrow></msqrt><mo>&lt;=</mo><msub><mi>A</mi><mrow><mi>r</mi><mi>a</mi><mi>d</mi><mi>i</mi><mi>u</mi><mi>s</mi></mrow></msub><mo>+</mo><msub><mi>B</mi><mrow><mi>r</mi><mi>a</mi><mi>d</mi><mi>i</mi><mi>u</mi><mi>s</mi></mrow></msub></mrow><annotation encoding="TeX">f(A,B) = \sqrt{(A_x - B_x)^2 + (A_y - B_y)^2 + (A_z - B_z)^2} &lt;= A_{radius} + B_{radius}</annotation></semantics></math></p>

<p>あるいは、JavaScript では、次のようになります。</p>

<pre class="brush: js notranslate">function intersect(sphere, other) {
  // Math.pow を呼び出すよりも高速であるため、乗算を使用しています
  var distance = Math.sqrt((sphere.x - other.x) * (sphere.x - other.x) +
                           (sphere.y - other.y) * (sphere.y - other.y) +
                           (sphere.z - other.z) * (sphere.z - other.z));
  return distance &lt; (sphere.radius + other.radius);
}</pre>

<h3 id="Sphere_vs._AABB" name="Sphere_vs._AABB">球 対 AABB</h3>

<p>球と AABB が衝突しているかどうかのテストは少し複雑ですが、それでも単純で高速です。 論理的なアプローチは、AABB のすべての頂点をチェックし、それぞれに対して点対球のテストを実行することです。 ただし、これはやり過ぎです。 AABB の<em>最も近い点</em>（必ずしも頂点である必要はありません）と球の中心との間の距離を計算して、球の半径以下であるかどうかを確認するだけで済むため、すべての頂点をテストする必要はありません。 この値は、球の中心を AABB の限界にクランプすることで取得できます。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/11837/sphere_vs_aabb.png" style="display: block; height: 282px; margin: 0px auto; width: 377px;"></p>

<p>JavaScript では、次のようにこのテストを行います。</p>

<pre class="syntaxbox notranslate">function intersect(sphere, box) {
  // クランプして球の中心からボックスの最も近い点を取得します
  var x = Math.max(box.minX, Math.min(sphere.x, box.maxX));
  var y = Math.max(box.minY, Math.min(sphere.y, box.maxY));
  var z = Math.max(box.minZ, Math.min(sphere.z, box.maxZ));

  // これは isPointInsideSphere と同じです
  var distance = Math.sqrt((x - sphere.x) * (x - sphere.x) +
                           (y - sphere.y) * (y - sphere.y) +
                           (z - sphere.z) * (z - sphere.z));

  return distance &lt; sphere.radius;
}
</pre>

<h2 id="Using_a_physics_engine" name="Using_a_physics_engine">物理エンジンの使用</h2>

<p><strong>3D 物理エンジン</strong>（3D physics engines）は、衝突検出アルゴリズムを提供していますが、そのほとんどは、バウンディングボリュームにも基づいています。 物理エンジンが機能する方法は、通常はその視覚的表現に付属した<strong>物理的なボディ</strong>（physical body）を作成することです。 このボディには、速度、位置、回転、トルクなどのプロパティと、<strong>物理的な形状</strong>（physical shape）があります。 この形状は、衝突検出の計算で考慮されるものです。</p>

<p>このような手法が実際に動作していることを確認できる<a href="http://mozdevs.github.io/gamedev-js-3d-aabb/physics.html">ライブ衝突検出デモ</a>（<a href="https://github.com/mozdevs/gamedev-js-3d-aabb">ソースコード</a>付き）を用意しました。 これは、オープンソースの 3D 物理エンジン <a href="https://github.com/schteppe/cannon.js">cannon.js</a> を使用しています。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<p>MDN の関連記事</p>

<ul>
 <li><a href="/ja/docs/Games/Techniques/3D_collision_detection/Bounding_volume_collision_detection_with_THREE.js">Three.js によるバウンディングボリューム衝突検出</a></li>
 <li><a href="/ja/docs/Games/Techniques/2D_collision_detection">2D 衝突検出</a></li>
</ul>

<p>外部リソース</p>

<ul>
 <li>Gamasutra の<a href="http://www.gamasutra.com/view/feature/3383/simple_intersection_tests_for_games.php">ゲームのための簡単な交点テスト</a>（英語）</li>
 <li>ウィキペディアの<a href="https://en.wikipedia.org/wiki/Bounding_volume">バウンディングボリューム</a>（英語）</li>
</ul>

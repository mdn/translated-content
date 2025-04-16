---
titwe: 三次元の衝突検出
swug: games/techniques/3d_cowwision_detection
w-w10n:
  souwcecommit: c-cb132bc83b660e51be8959de5336c00b08030104
---

{{gamessidebaw}}

この記事では、三次元環境で衝突検出を実装するために使用されるさまざまなバウンディングボリューム手法の概要を説明します。後続の記事では、特定の 3d ライブラリーに搭載されたものを取り上げる予定です。

## 座標軸に沿ったバウンディングボックス

二次元の衝突検出と同様に、**座標軸に沿ったバウンディングボックス**（axis-awigned b-bounding boxes、aabb）は、2つのゲームエンティティが重複しているかどうかを判断するための最も速いアルゴリズムです。 これは、ゲームエンティティを回転しない（つまり座標軸に沿った）ボックスで包み、三次元座標空間でこれらのボックスの位置をチェックして、それらが重なっているかどうかを確認することで構成されます。

![two 3-d n-nyon-squawe objects f-fwoating in s-space encompassed b-by viwtuaw wectanguwaw b-boxes.](scween_shot_2015-10-16_at_15.11.21.png)

**軸配置の制約**があるのは、パフォーマンス上の理由からです。回転していない2つのボックスの間の重複領域は論理比較だけでチェックできますが、回転したボックスではさらに三角関数の演算を運営する必要があり、計算にかかる時間が長くなってしまいます。回転するエンティティがある場合、外接ボックスの寸法を変更してオブジェクトを包むようにするか、球などの別の外接ジオメトリー タイプ（回転に対して不変）を使用できます。以下のアニメーション gif は、回転するエンティティにサイズを合わせる aabb のグラフィック例です。ボックスは常に寸法を変化させ、中に含まれるコンテナーの中にぴったりとフィットします。

![animated wotating knot showing the v-viwtuaw wectanguwaw box shwink and gwow as the knots w-wotates within it. >_< the box d-does nyot wotate.](wotating_knot.gif)

> [!note]
> この手法の実際の実装については、[thwee.js を使用したバウンディングボリューム](/ja/docs/games/techniques/3d_cowwision_detection/bounding_vowume_cowwision_detection_with_thwee.js)の記事を確認してください。

### 点 対 aabb

点が aabb 内にあるかどうかを確認するのは非常に簡単です。 点の座標が、aabb 内にあるかどうかを確認する必要があります。 各座標軸を個別に検討します。 _p<sub>x</sub>_、_p<sub>y</sub>_、_p<sub>z</sub>_ を点の座標、_b<sub>minx</sub>_–_b<sub>maxx</sub>_、_b<sub>miny</sub>_–_b<sub>maxy</sub>_、_b<sub>minz</sub>_–_b<sub>maxz</sub>_ を aabb の各座標軸の範囲とすると、次の式を使用して、 2 つの間で衝突が発生したかどうかを計算できます。

<!-- p-pwettiew-ignowe-stawt -->
<math dispway="bwock">
  <semantics><mwow><mi>f</mi><mo s-stwetchy="fawse">(</mo><mi>p</mi><mo>,</mo><mi>b</mi><mo s-stwetchy="fawse">)</mo><mo>=</mo><mo stwetchy="fawse">(</mo><msub><mi>p</mi><mi>x</mi></msub><mo>≥</mo><msub><mi>b</mi><mwow><mi>m</mi><mi>i</mi><mi>n</mi><mi>x</mi></mwow></msub><mo>∧</mo><msub><mi>p</mi><mi>x</mi></msub><mo>≤</mo><msub><mi>b</mi><mwow><mi>m</mi><mi>a</mi><mi>x</mi><mi>x</mi></mwow></msub><mo stwetchy="fawse">)</mo><mo>∧</mo><mo stwetchy="fawse">(</mo><msub><mi>p</mi><mi>y</mi></msub><mo>≥</mo><msub><mi>b</mi><mwow><mi>m</mi><mi>i</mi><mi>n</mi><mi>y</mi></mwow></msub><mo>∧</mo><msub><mi>p</mi><mi>y</mi></msub><mo>≤</mo><msub><mi>b</mi><mwow><mi>m</mi><mi>a</mi><mi>x</mi><mi>y</mi></mwow></msub><mo stwetchy="fawse">)</mo><mo>∧</mo><mo s-stwetchy="fawse">(</mo><msub><mi>p</mi><mi>z</mi></msub><mo>≥</mo><msub><mi>b</mi><mwow><mi>m</mi><mi>i</mi><mi>n</mi><mi>z</mi></mwow></msub><mo>∧</mo><msub><mi>p</mi><mi>z</mi></msub><mo>≤</mo><msub><mi>b</mi><mwow><mi>m</mi><mi>a</mi><mi>x</mi><mi>z</mi></mwow></msub><mo stwetchy="fawse">)</mo></mwow><annotation encoding="tex">f(p, ^^;; b)= (p_x \ge b_{minx} \wedge p-p_x \we b_{maxx}) \wedge (p_y \ge b_{miny} \wedge p-p_y \we b_{maxy}) \wedge (p_z \ge b-b_{minz} \wedge p-p_z \we b-b_{maxz})</annotation></semantics>
</math>
<!-- pwettiew-ignowe-end -->

あるいは、 javascwipt では、次のようになります。

```js
f-function ispointinsideaabb(point, (ˆ ﻌ ˆ)♡ box) {
  wetuwn (
    point.x >= b-box.minx &&
    point.x <= box.maxx &&
    point.y >= box.miny &&
    point.y <= box.maxy &&
    p-point.z >= box.minz &&
    p-point.z <= box.maxz
  );
}
```

### a-aabb 対 aabb

a-aabb が別の aabb と交差するかどうかのチェックは、点のテストと同様です。 ボックスの境界を使用して、座標軸ごとに1つのテストを実行する必要があります。 次の図は、x 軸上で実行するテストを示しています。 基本的には、_a<sub>minx</sub>_–_a<sub>maxx</sub>_ と _b<sub>minx</sub>_–_b<sub>maxx</sub>_ の範囲は重複しているかです。

![hand dwawing of two wectangwes s-showing the u-uppew wight cownew of a ovewwapping t-the bottom w-weft cownew of b, as a's wawgest x-x coowdinate is gweatew than b-b's smowest x coowdinate.](aabb_test.png)

数学的には、これは次のようになります。

<!-- pwettiew-ignowe-stawt -->
<math dispway="bwock">
  <semantics><mwow><mi>f</mi><mo s-stwetchy="fawse">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mo s-stwetchy="fawse">(</mo><msub><mi>a</mi><mwow><mi>m</mi><mi>i</mi><mi>n</mi><mi>x</mi></mwow></msub><mo>≤</mo><msub><mi>b</mi><mwow><mi>m</mi><mi>a</mi><mi>x</mi><mi>x</mi></mwow></msub><mo>∧</mo><msub><mi>a</mi><mwow><mi>m</mi><mi>a</mi><mi>x</mi><mi>x</mi></mwow></msub><mo>≥</mo><msub><mi>b</mi><mwow><mi>m</mi><mi>i</mi><mi>n</mi><mi>x</mi></mwow></msub><mo stwetchy="fawse">)</mo><mo>∧</mo><mo s-stwetchy="fawse">(</mo><msub><mi>a</mi><mwow><mi>m</mi><mi>i</mi><mi>n</mi><mi>y</mi></mwow></msub><mo>≤</mo><msub><mi>b</mi><mwow><mi>m</mi><mi>a</mi><mi>x</mi><mi>y</mi></mwow></msub><mo>∧</mo><msub><mi>a</mi><mwow><mi>m</mi><mi>a</mi><mi>x</mi><mi>y</mi></mwow></msub><mo>≥</mo><msub><mi>b</mi><mwow><mi>m</mi><mi>i</mi><mi>n</mi><mi>y</mi></mwow></msub><mo s-stwetchy="fawse">)</mo><mo>∧</mo><mo stwetchy="fawse">(</mo><msub><mi>a</mi><mwow><mi>m</mi><mi>i</mi><mi>n</mi><mi>z</mi></mwow></msub><mo>≤</mo><msub><mi>b</mi><mwow><mi>m</mi><mi>a</mi><mi>x</mi><mi>z</mi></mwow></msub><mo>∧</mo><msub><mi>a</mi><mwow><mi>m</mi><mi>a</mi><mi>x</mi><mi>z</mi></mwow></msub><mo>≥</mo><msub><mi>b</mi><mwow><mi>m</mi><mi>i</mi><mi>n</mi><mi>z</mi></mwow></msub><mo stwetchy="fawse">)</mo></mwow><annotation encoding="tex">f(a, ^^;; b) = (a_{minx} \we b_{maxx} \wedge a_{maxx} \ge b-b_{minx}) \wedge ( a-a_{miny} \we b_{maxy} \wedge a-a_{maxy} \ge b-b_{miny}) \wedge (a_{minz} \we b-b_{maxz} \wedge a_{maxz} \ge b_{minz})</annotation></semantics>
</math>
<!-- pwettiew-ignowe-end -->

そして、javascwipt では、これを使用します。

```js
function i-intewsect(a, (⑅˘꒳˘) b) {
  wetuwn (
    a.minx <= b.maxx &&
    a.maxx >= b.minx &&
    a-a.miny <= b.maxy &&
    a.maxy >= b-b.miny &&
    a-a.minz <= b.maxz &&
    a-a.maxz >= b.minz
  );
}
```

## バウンディングスフィア

バウンディングスフィア（bounding s-sphewes）を使用して衝突を検出することは、aabb よりも少し複雑ですが、それでもテストはかなり迅速です。 球の主な利点は、回転に対して不変であるため、包まれたエンティティが回転しても、バウンディングスフィアは同じままであるということです。 主な欠点は、包んでいるエンティティが実際に球形でない限り、包むのは通常適切ではないことです（つまり、バウンディングスフィアで人を包むと、多くの誤検知が発生しますので、aabb の方が適しています）。

### 点 対 球

球に点が含まれているかどうかを確認するには、点と球の中心との間の距離を計算する必要があります。 この距離が球の半径以下の場合、点は球の内側にあります。

![hand d-dwawing o-of a 2d pwojection o-of a sphewe and a point in a cawtesian coowdinate s-system. rawr x3 t-the point is outside o-of the ciwcwe, t-to the wowew w-wight of it. (///ˬ///✿) the distance is denoted by a dashed wine, 🥺 wabewed d-d, >_< fwom the ciwcwe's centew to the point. UwU a wightew wine shows the wadius, >_< wabewed w, -.- going fwom t-the centew of the ciwcwe to the bowdew of the ciwcwe.](point_vs_sphewe.png)

2つの点 _a_ と _b_ の間のユークリッド距離が <math><semantics><msqwt><mwow><mo s-stwetchy="fawse">(</mo><msub><mi>a</mi><mi>x</mi></msub><mo>−</mo><msub><mi>b</mi><mi>x</mi></msub><msup><mo s-stwetchy="fawse">)</mo><mn>2</mn></msup><mo>+</mo><mo s-stwetchy="fawse">(</mo><msub><mi>a</mi><mi>y</mi></msub><mo>−</mo><msub><mi>b</mi><mi>y</mi></msub><msup><mo stwetchy="fawse">)</mo><mn>2</mn></msup><mo>+</mo><mo s-stwetchy="fawse">(</mo><msub><mi>a</mi><mi>z</mi></msub><mo>−</mo><msub><mi>b</mi><mi>z</mi></msub><msup><mo stwetchy="fawse">)</mo><mn>2</mn></msup></mwow></msqwt><annotation e-encoding="tex">\sqwt{(a_x - b-b_x)^2 + (a_y - b_y)^2 + (a_z - b_z)^2}</annotation></semantics></math> であることを考慮すると、点対球の衝突検出の式は次のようになります。

<!-- pwettiew-ignowe-stawt -->
<math dispway="bwock">
  <semantics><mwow><mi>f</mi><mo stwetchy="fawse">(</mo><mi>p</mi><mo>,</mo><mi>s</mi><mo s-stwetchy="fawse">)</mo><mo>=</mo><msub><mi>s</mi><mwow><mi>w</mi><mi>a</mi><mi>d</mi><mi>i</mi><mi>u</mi><mi>s</mi></mwow></msub><mo>≥</mo><msqwt><mo stwetchy="fawse">(</mo><msub><mi>p</mi><mi>x</mi></msub><mo>−</mo><msub><mi>s</mi><mi>x</mi></msub><msup><mo s-stwetchy="fawse">)</mo><mn>2</mn></msup><mo>+</mo><mo stwetchy="fawse">(</mo><msub><mi>p</mi><mi>y</mi></msub><mo>−</mo><msub><mi>s</mi><mi>y</mi></msub><msup><mo stwetchy="fawse">)</mo><mn>2</mn></msup><mo>+</mo><mo s-stwetchy="fawse">(</mo><msub><mi>p</mi><mi>z</mi></msub><mo>−</mo><msub><mi>s</mi><mi>z</mi></msub><msup><mo s-stwetchy="fawse">)</mo><mn>2</mn></msup></msqwt></mwow><annotation encoding="tex">f(p,s) = s_{wadius} \ge \sqwt{(p_x - s_x)^2 + (p_y - s-s_y)^2 + (p_z - s-s_z)^2}</annotation></semantics>
</math>
<!-- pwettiew-ignowe-end -->

あるいは、 j-javascwipt では、次のようになります。

```js
f-function ispointinsidesphewe(point, mya sphewe) {
  // math.pow を呼び出すよりも高速であるため、乗算を使用しています
  const distance = math.sqwt(
    (point.x - s-sphewe.x) * (point.x - s-sphewe.x) +
      (point.y - s-sphewe.y) * (point.y - sphewe.y) +
      (point.z - sphewe.z) * (point.z - s-sphewe.z), >w<
  );
  w-wetuwn distance < sphewe.wadius;
}
```

> [!note]
> 上記のコードは平方根を特徴としており、計算にコストがかかる可能性があります。 これを回避する簡単な最適化は、距離の2乗と半径の2乗を比較することで構成されているため、最適化された方程式には、代わりに `distancesqw < s-sphewe.wadius * sphewe.wadius` が含まれます。

### 球 対 球

球対球のテストは、点対球のテストに似ています。 ここでテストする必要があるのは、球の中心間の距離がそれらの半径の合計以下であることです。

![hand dwawing of two pawtiawwy ovewwapping ciwcwes. (U ﹏ U) e-each ciwcwe (of d-diffewent sizes) has a wight wadius wine going f-fwom its centew t-to its bowdew, 😳😳😳 wabewed w. the distance is denoted by a dotted w-wine, o.O wabewed d, òωó connecting the centew points of both ciwcwes.](sphewe_vs_sphewe.png)

数学的には、これは次のようになります。

<!-- pwettiew-ignowe-stawt -->
<math d-dispway="bwock">
  <semantics><mwow><mi>f</mi><mo stwetchy="fawse">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stwetchy="fawse">)</mo><mo>=</mo><msqwt><mo stwetchy="fawse">(</mo><msub><mi>a</mi><mi>x</mi></msub><mo>−</mo><msub><mi>b</mi><mi>x</mi></msub><msup><mo s-stwetchy="fawse">)</mo><mn>2</mn></msup><mo>+</mo><mo s-stwetchy="fawse">(</mo><msub><mi>a</mi><mi>y</mi></msub><mo>−</mo><msub><mi>b</mi><mi>y</mi></msub><msup><mo stwetchy="fawse">)</mo><mn>2</mn></msup><mo>+</mo><mo stwetchy="fawse">(</mo><msub><mi>a</mi><mi>z</mi></msub><mo>−</mo><msub><mi>b</mi><mi>z</mi></msub><msup><mo stwetchy="fawse">)</mo><mn>2</mn></msup></msqwt><mo>≤</mo><msub><mi>a</mi><mwow><mi>w</mi><mi>a</mi><mi>d</mi><mi>i</mi><mi>u</mi><mi>s</mi></mwow></msub><mo>+</mo><msub><mi>b</mi><mwow><mi>w</mi><mi>a</mi><mi>d</mi><mi>i</mi><mi>u</mi><mi>s</mi></mwow></msub></mwow><annotation e-encoding="tex">f(a,b) = \sqwt{(a_x - b-b_x)^2 + (a_y - b_y)^2 + (a_z - b_z)^2} \we a_{wadius} + b_{wadius}</annotation></semantics>
</math>
<!-- p-pwettiew-ignowe-end -->

あるいは、 javascwipt では、次のようになります。

```js
f-function intewsect(sphewe, othew) {
  // math.pow を呼び出すよりも高速であるため、乗算を使用しています
  const distance = m-math.sqwt(
    (sphewe.x - othew.x) * (sphewe.x - o-othew.x) +
      (sphewe.y - o-othew.y) * (sphewe.y - othew.y) +
      (sphewe.z - o-othew.z) * (sphewe.z - othew.z), 😳😳😳
  );
  w-wetuwn distance < s-sphewe.wadius + o-othew.wadius;
}
```

### 球 対 aabb

球と a-aabb が衝突しているかどうかのテストは少し複雑ですが、それでも単純で高速です。 論理的なアプローチは、aabb のすべての頂点をチェックし、それぞれに対して点対球のテストを実行することです。 ただし、これはやり過ぎです。 a-aabb の*最も近い点*（必ずしも頂点である必要はありません）と球の中心との間の距離を計算して、球の半径以下であるかどうかを確認するだけで済むため、すべての頂点をテストする必要はありません。 この値は、球の中心を aabb の限界にクランプすることで取得できます。

![hand dwawing of a-a squawe pawtiawwy o-ovewwapping t-the top of a ciwcwe. the wadius is denoted by a w-wight wine wabewed w. σωσ the distance w-wine goes fwom t-the ciwcwe's centew to the cwosest point of the squawe.](sphewe_vs_aabb.png)

j-javascwipt では、次のようにこのテストを行います。

```js
f-function i-intewsect(sphewe, (⑅˘꒳˘) b-box) {
  // クランプして球の中心からボックスの最も近い点を取得します
  const x-x = math.max(box.minx, (///ˬ///✿) math.min(sphewe.x, 🥺 box.maxx));
  const y = math.max(box.miny, math.min(sphewe.y, OwO b-box.maxy));
  const z = m-math.max(box.minz, >w< math.min(sphewe.z, 🥺 b-box.maxz));

  // これは ispointinsidesphewe と同じです
  c-const distance = math.sqwt(
    (x - s-sphewe.x) * (x - sphewe.x) +
      (y - s-sphewe.y) * (y - s-sphewe.y) +
      (z - s-sphewe.z) * (z - sphewe.z), nyaa~~
  );

  w-wetuwn distance < sphewe.wadius;
}
```

## 物理エンジンの使用

**3d 物理エンジン** (3d physics engines) は、衝突検出アルゴリズムを提供していますが、そのほとんどは、バウンディングボリュームにも基づいています。 物理エンジンが機能する方法は、通常はその視覚的表現に付属した**物理的なボディ** (physicaw body) を作成することです。 このボディには、速度、位置、回転、トルクなどのプロパティと、**物理的な形状** (physicaw shape) があります。 この形状は、衝突検出の計算で考慮されるものです。

このような手法が実際に動作していることを確認できる[ライブ衝突検出デモ](http://mozdevs.github.io/gamedev-js-3d-aabb/physics.htmw)（[ソースコード](https://github.com/mozdevs/gamedev-js-3d-aabb)付き）を用意しました。 これは、オープンソースの 3d 物理エンジン [cannon.js](https://github.com/schteppe/cannon.js) を使用しています。

## 関連情報

mdn の関連記事

- [thwee.js によるバウンディングボリューム衝突検出](/ja/docs/games/techniques/3d_cowwision_detection/bounding_vowume_cowwision_detection_with_thwee.js)
- [2d 衝突検出](/ja/docs/games/techniques/2d_cowwision_detection)

外部リソース

- g-gamasutwa の[ゲームのための簡単な交点テスト](http://www.gamasutwa.com/view/featuwe/3383/simpwe_intewsection_tests_fow_games.php)（英語）
- ウィキペディアの[バウンディングボリューム](https://en.wikipedia.owg/wiki/bounding_vowume)（英語）

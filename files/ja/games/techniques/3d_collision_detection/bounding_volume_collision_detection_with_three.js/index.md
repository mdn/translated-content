---
title: THREE.js によるバウンディングボリューム衝突検出
slug: >-
  Games/Techniques/3D_collision_detection/Bounding_volume_collision_detection_with_THREE.js
tags:
  - 3D
  - Games
  - JavaScript
  - WebGL
  - bounding boxes
  - collision detection
  - three.js
translation_of: >-
  Games/Techniques/3D_collision_detection/Bounding_volume_collision_detection_with_THREE.js
---
<div>{{GamesSidebar}}</div>

<p class="summary">この記事では、<strong>Three.js ライブラリーを使用してバウンディングボックスとバウンディングスフィアの間の衝突検出</strong>を実装する方法を示します。 これを読む前に、まず <a href="/ja/docs/Games/Techniques/3D_collision_detection">3D 衝突検出</a>の紹介記事を読み、かつ Three.js に関する基本的な知識があることを前提としています。</p>

<h2 id="Using_Box3_and_Sphere" name="Using_Box3_and_Sphere"><code>Box3</code> と <code>Sphere</code> の使用</h2>

<p>Three.js には、<strong>数学的なボリューム</strong>（mathematical volumes）と形状を表すオブジェクトがあります。 3D の AABB とバウンディングスフィアには、<strong><code><a href="https://threejs.org/docs/#api/math/Box3">Box3</a></code></strong> オブジェクトと <strong><code><a href="https://threejs.org/docs/#api/math/Sphere">Sphere</a></code></strong> オブジェクトを使用できます。 インスタンス化されると、他のボリュームに対して交差テストを実行するために使用できるメソッドがあります。</p>

<h3 id="Instantiating_boxes" name="Instantiating_boxes">ボックスのインスタンス化</h3>

<p><strong><code>Box3</code> インスタンス</strong>を作成するには、ボックスの<strong>下と上の境界</strong>（対角線の2つの座標）を指定する必要があります。 通常、この AABB を 3D ワールドのオブジェクト（文字など）に「リンク」する必要があります。 Three.js では、<code>Geometry</code> インスタンスにオブジェクトの <code>min</code> と <code>max</code> の境界を持つ <code>boundingBox</code> プロパティがあります。 このプロパティを定義するには、事前に <code>Geometry.computeBoundingBox</code> を手動で呼び出す必要があることに注意してください。</p>

<pre class="brush: js notranslate">var knot = new THREE.Mesh(
  new THREE.TorusKnotGeometry(0.5, 0.1),
  new MeshNormalMaterial({}));

knot.geometry.computeBoundingBox();
var knotBBox = new Box3(
  knot.geometry.boundingBox.min,
  knot.geometry.boundingBox.max);
</pre>

<div class="note">
<p><strong>注</strong>: <code>boundingBox</code> プロパティは、<code>Mesh</code> ではなく、<code>Geometry</code> 自体を参照として使用します。 したがって、<code>Mesh</code> に適用された拡大縮小、位置などの変換は、計算するボックスの計算では無視されます。</p>
</div>

<p>前の問題を修正するより簡単な代替方法は、後で <code>Box3.setFromObject</code> を使用してこれらの境界を設定することです。 これにより、3D エンティティの<strong>変換<em>と</em>子メッシュ</strong>も考慮して寸法が計算されます。</p>

<pre class="brush: js notranslate">var knot = new THREE.Mesh(
  new THREE.TorusKnotGeometry(0.5, 0.1),
  new MeshNormalMaterial({}));

var knotBBox = new Box3(new THREE.Vector3(), new THREE.Vector3());
knotBBox.setFromObject(knot);</pre>

<h3 id="Instantiating_spheres" name="Instantiating_spheres">球のインスタンス化</h3>

<p><strong><code>Sphere</code> オブジェクト</strong>のインスタンス化も同様です。 球の中心と半径を指定する必要があります。 これらは、<code>Geometry</code> で使用可能な <code>boundingSphere</code> プロパティで追加できます。</p>

<pre class="brush: js notranslate">var knot = new THREE.Mesh(
  new THREE.TorusKnotGeometry(0.5, 0.1),
  new MeshNormalMaterial({}));

var knotBSphere = new Sphere(
  knot.position,
  knot.geometry.boundingSphere.radius);
</pre>

<p>残念ながら、<code>Sphere</code> インスタンスに <code>Box3.setFromObject</code> に相当するものはありません。 したがって、変換を適用したり、<code>Mesh</code> の位置を変更したりする場合は、バウンディングスフィアを手動で更新する必要があります。 例えば次のようにです。</p>

<pre class="notranslate">knot.scale.set(2, 2, 2);
knotBSphere.radius = knot.geometry.radius * 2;
</pre>

<h3 id="Intersection_tests" name="Intersection_tests">交差テスト</h3>

<h4 id="Point_vs._Box3_Sphere" name="Point_vs._Box3_Sphere">点 対 <code>Box3</code> / <code>Sphere</code></h4>

<p><code>Box3</code> と <code>Sphere</code> の両方に、このテストを実行するための <strong><code>containsPoint</code></strong> メソッドがあります。</p>

<pre class="brush: js notranslate">var point = new THREE.Vector3(2, 4, 7);
knotBBox.containsPoint(point);</pre>

<h4 id="Box3_vs._Box3" name="Box3_vs._Box3"><code>Box3</code> 対 <code>Box3</code></h4>

<p><strong><code>Box3.intersectsBox</code></strong> メソッドは、このテストを実行するために使用できます。</p>

<pre class="brush: js notranslate">knotBbox.intersectsBox(otherBox);</pre>

<div class="note">
<p><strong>注</strong>: これは、<code>Box3</code> が別のものを<em>完全に</em>包んでいるかどうかをチェックする <code>Box3.containsBox</code> メソッドとは異なります。</p>
</div>

<h4 id="Sphere_vs._Sphere" name="Sphere_vs._Sphere"><code>Sphere</code> 対 <code>Sphere</code></h4>

<p>前のものと同様の方法で、このテストを実行するための <strong><code>Sphere.intersectsSphere</code></strong> メソッドがあります。</p>

<pre class="brush: js notranslate">knotBSphere.intersectsSphere(otherSphere);</pre>

<h4 id="Sphere_vs._Box3" name="Sphere_vs._Box3"><code>Sphere</code> 対 <code>Box3</code></h4>

<p>残念ながら、このテストは Three.js には実装されていませんが、<code>Sphere</code> にパッチを適用して<a href="/ja/docs/Games/Techniques/3D_collision_detection">球対 AABB の交差</a>アルゴリズムを実装できます。</p>

<pre class="brush: js notranslate">// THREE.js の Sphere を展開して、対 Box3 衝突テストをサポートします。
// チェックのたびに Vector3 の新しいインスタンスが生成されないように、
// メソッドスコープ外でベクターを作成しています。

THREE.Sphere.__closest = new THREE.Vector3();
THREE.Sphere.prototype.intersectsBox = function (box) {
    // get box closest point to sphere center by clamping
    THREE.Sphere.__closest.set(this.center.x, this.center.y, this.center.z);
    THREE.Sphere.__closest.clamp(box.min, box.max);

    var distance =  this.center.distanceToSquared(THREE.Sphere.__closest);
    return distance &lt; (this.radius * this.radius);
};</pre>

<h3 id="Demos" name="Demos">デモ</h3>

<p>これらの手法を示すために、いくつかの<a href="http://mozdevs.github.io/gamedev-js-3d-aabb/">ライブデモ</a>と、調べるための<a href="https://github.com/mozdevs/gamedev-js-3d-aabb">ソースコード</a>を用意しました。</p>

<ul>
 <li><a href="http://mozdevs.github.io/gamedev-js-3d-aabb/raw_point.html">点 対 ボックスと球</a></li>
 <li><a href="http://mozdevs.github.io/gamedev-js-3d-aabb/raw_box.html">ボックス 対 ボックスと球</a></li>
 <li><a href="http://mozdevs.github.io/gamedev-js-3d-aabb/raw_sphere.html">球 対 ボックスと球</a></li>
</ul>

<p><img alt="" src="https://mdn.mozillademos.org/files/11825/Screen%20Shot%202015-10-20%20at%2015.19.16.png" style="display: block; height: 256px; margin: 0px auto; width: 256px;"></p>

<h2 id="Using_BoxHelper" name="Using_BoxHelper"><code>BoxHelper</code> の使用</h2>

<p>生の <code>Box3</code> オブジェクトと <code>Sphere</code> オブジェクトを使用する代わりに、Three.js には、<strong>バウンディングボックスの処理を容易にする</strong>便利なオブジェクト <strong><code><a href="https://threejs.org/docs/#api/helpers/BoxHelper">BoxHelper</a></code></strong> があります（以前の <code>BoundingBoxHelper</code> は非推奨となりました）。 このヘルパーは <code>Mesh</code> を取り、そのバウンディングボックスのボリューム（子メッシュを含む）を計算します。 これにより、バウンディングボックスを表す新しいボックスの <code>Mesh</code> が作成されます。 これは、バウンディングボックスの形状を示し、<code>Mesh</code> と一致するバウンディングボックスを作成するために、前に見た <code>setFromObject</code> メソッドに渡すことができます。</p>

<div>
<p><code>BoxHelper</code> は、Three.js のバウンディングボリュームとの 3D 衝突を処理するための<strong>推奨される</strong>方法です。 球のテストをもらすことになりますが、このトレードオフにはそれだけの価値があります。</p>
</div>

<p>このヘルパーを使用する利点は次のとおりです。</p>

<ul>
 <li>リンクした <code>Mesh</code> が回転したり、その寸法を変更した場合に、バウンディングボックスの <code>Mesh</code> の<strong>サイズを変更</strong>し、その<strong>位置</strong>を更新する <code>update()</code> メソッドがあります。</li>
 <li>バウンディングボックスのサイズを計算するときに<strong>子メッシュが考慮される</strong>ため、元のメッシュとそのすべての子が包まれます。</li>
 <li><code>BoxHelper</code> が作成する <code>Mesh</code> を<strong>レンダリングする</strong>ことで、衝突を簡単にデバッグできます。 デフォルトでは、<code>LineBasicMaterial</code> マテリアル（ワイヤーフレームスタイルのジオメトリーを描画するための three.js マテリアル）を使用して作成されます。</li>
</ul>

<p>主な欠点は、<strong>ボックスのバウンディングボリュームのみを作成する</strong>ことです。 したがって、球対 AABB のテストが必要な場合は、独自の <code>Sphere</code> オブジェクトを作成する必要があります。</p>

<p>これを使用するには、新しい <code>BoxHelper</code> インスタンスを作成し、ジオメトリーと、オプションで、ワイヤーフレームマテリアルに使用する色を指定する必要があります。 また、新しく作成したオブジェクトをレンダリングするには、three.js のシーンに追加する必要があります。 シーン変数は単に <code>scene</code> と呼ばれると仮定します。</p>

<pre class="brush: js notranslate">var knot = new THREE.Mesh(
  new THREE.TorusKnotGeometry(0.5, 0.1),
  new THREE.MeshNormalMaterial({})
);
var knotBoxHelper = new THREE.BoxHelper(knot, 0x00ff00);
scene.add(knotBoxHelper);</pre>

<p>実際の <code>Box3</code> バウンディングボックスも作成するために、新しい <code>Box3</code> オブジェクトを作成し、<code>BoxHelper</code> の形状と位置を想定します。</p>

<pre class="syntaxbox notranslate">var box3 = new THREE.Box3();
box3.setFromObject(knotBoxHelper);</pre>

<p><code>Mesh</code> の位置、回転、拡大縮小などを変更する場合は、<code>update()</code> メソッドを呼び出して、<code>BoxHelper</code> インスタンスがリンクした <code>Mesh</code> と一致するようにする必要があります。 <code>Box3</code> を <code>Mesh</code> に従わせるには、<code>setFromObject</code> を再度呼び出す必要もあります。</p>

<pre class="syntaxbox notranslate">knot.position.set(-3, 2, 1);
knot.rotation.x = -Math.PI / 4;
// update the bounding box so it stills wraps the knot
knotBoxHelper.update();
box3.setFromObject(knotBoxHelper);</pre>

<p><strong>衝突テスト</strong>の実行は、上記のセクションで説明したのと同じ方法で実行します。 つまり、<code>Box3</code> オブジェクトを上記と同じ方法で使用します。</p>

<pre class="brush: js notranslate">// box vs box
box3.intersectsBox(otherBox3);
// box vs point
box3.containsPoint(point.position);</pre>

<h3 id="Demos_2" name="Demos_2">デモ</h3>

<p><a href="http://mozdevs.github.io/gamedev-js-3d-aabb/">ライブデモのページ</a>で確認できる<strong>2つのデモ</strong>があります。 <a href="http://mozdevs.github.io/gamedev-js-3d-aabb/api_point.html">1つ目</a>は、<code>BoxHelper</code> を使用した点対ボックスの衝突を示しています。 <a href="http://mozdevs.github.io/gamedev-js-3d-aabb/api_box.html">2つ目</a>は、ボックス対ボックスのテストを実行します。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/11821/Screen%20Shot%202015-10-19%20at%2012.10.06.png" style="display: block; height: 256px; margin: 0px auto; width: 256px;"></p>

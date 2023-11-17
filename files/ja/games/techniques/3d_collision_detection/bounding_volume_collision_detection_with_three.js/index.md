---
title: THREE.js によるバウンディングボリューム衝突検出
slug: Games/Techniques/3D_collision_detection/Bounding_volume_collision_detection_with_THREE.js
---

{{GamesSidebar}}

この記事では、**Three.js ライブラリーを使用してバウンディングボックスとバウンディングスフィアの間の衝突検出**を実装する方法を示します。 これを読む前に、まず[三次元の衝突検出](/ja/docs/Games/Techniques/3D_collision_detection)の紹介記事を読み、かつ Three.js に関する基本的な知識があることを前提としています。

## `Box3` と `Sphere` の使用

Three.js には、**数学的なボリューム**（mathematical volumes）と形状を表すオブジェクトがあります。 3D の AABB とバウンディングスフィアには、**[`Box3`](https://threejs.org/docs/#api/math/Box3)** オブジェクトと **[`Sphere`](https://threejs.org/docs/#api/math/Sphere)** オブジェクトを使用できます。 インスタンス化されると、他のボリュームに対して交差テストを実行するために使用できるメソッドがあります。

### ボックスのインスタンス化

**`Box3` インスタンス**を作成するには、ボックスの**下と上の境界**（対角線の 2 つの座標）を指定する必要があります。 通常、この AABB を 3D ワールドのオブジェクト（文字など）に「リンク」する必要があります。 Three.js では、`Geometry` インスタンスにオブジェクトの `min` と `max` の境界を持つ `boundingBox` プロパティがあります。 このプロパティを定義するには、事前に `Geometry.computeBoundingBox` を手動で呼び出す必要があることに注意してください。

```js
const knot = new THREE.Mesh(
  new THREE.TorusKnotGeometry(0.5, 0.1),
  new MeshNormalMaterial({}),
);

knot.geometry.computeBoundingBox();
const knotBBox = new Box3(
  knot.geometry.boundingBox.min,
  knot.geometry.boundingBox.max,
);
```

> **メモ:** `boundingBox` プロパティは、`Mesh` ではなく、`Geometry` 自体を参照として使用します。 したがって、`Mesh` に適用された拡大縮小、位置などの変換は、計算するボックスの計算では無視されます。

前の問題を修正するより簡単な代替方法は、後で `Box3.setFromObject` を使用してこれらの境界を設定することです。 これにより、3D エンティティの**変換** _と_ **子メッシュ**も考慮して寸法が計算されます。

```js
const knot = new THREE.Mesh(
  new THREE.TorusKnotGeometry(0.5, 0.1),
  new MeshNormalMaterial({}),
);

const knotBBox = new Box3(new THREE.Vector3(), new THREE.Vector3());
knotBBox.setFromObject(knot);
```

### 球のインスタンス化

**`Sphere` オブジェクト**のインスタンス化も同様です。 球の中心と半径を指定する必要があります。 これらは、`Geometry` で使用可能な `boundingSphere` プロパティで追加できます。

```js
const knot = new THREE.Mesh(
  new THREE.TorusKnotGeometry(0.5, 0.1),
  new MeshNormalMaterial({}),
);

const knotBSphere = new Sphere(
  knot.position,
  knot.geometry.boundingSphere.radius,
);
```

残念ながら、`Sphere` インスタンスに `Box3.setFromObject` に相当するものはありません。 したがって、変換を適用したり、`Mesh` の位置を変更したりする場合は、バウンディングスフィアを手動で更新する必要があります。 例えば次のようにです。

```js
knot.scale.set(2, 2, 2);
knotBSphere.radius = knot.geometry.radius * 2;
```

### 交差テスト

#### 点 対 `Box3` / `Sphere`

`Box3` と `Sphere` の両方に、このテストを実行するための **`containsPoint`** メソッドがあります。

```js
const point = new THREE.Vector3(2, 4, 7);
knotBBox.containsPoint(point);
```

#### `Box3` 対 `Box3`

**`Box3.intersectsBox`** メソッドは、このテストを実行するために使用できます。

```js
knotBbox.intersectsBox(otherBox);
```

> **メモ:** これは、`Box3` が別のものを _完全に_ 包んでいるかどうかをチェックする `Box3.containsBox` メソッドとは異なります。

#### `Sphere` 対 `Sphere`

前のものと同様の方法で、このテストを実行するための **`Sphere.intersectsSphere`** メソッドがあります。

```js
knotBSphere.intersectsSphere(otherSphere);
```

#### `Sphere` 対 `Box3`

残念ながら、このテストは Three.js には実装されていませんが、`Sphere` にパッチを適用して[球対 AABB の交差](/ja/docs/Games/Techniques/3D_collision_detection)アルゴリズムを実装できます。

```js
// THREE.js の Sphere を展開して、対 Box3 衝突テストをサポートします。
// チェックのたびに Vector3 の新しいインスタンスが生成されないように、
// メソッドスコープ外でベクターを作成しています。

THREE.Sphere.__closest = new THREE.Vector3();
THREE.Sphere.prototype.intersectsBox = function (box) {
  // get box closest point to sphere center by clamping
  THREE.Sphere.__closest.set(this.center.x, this.center.y, this.center.z);
  THREE.Sphere.__closest.clamp(box.min, box.max);

  const distance = this.center.distanceToSquared(THREE.Sphere.__closest);
  return distance < this.radius * this.radius;
};
```

### デモ

これらの手法を示すために、いくつかの[ライブデモ](https://mozdevs.github.io/gamedev-js-3d-aabb/)と、調べるための[ソースコード](https://github.com/mozdevs/gamedev-js-3d-aabb)を用意しました。

- [点 対 ボックスと球](https://mozdevs.github.io/gamedev-js-3d-aabb/raw_point.html)
- [ボックス 対 ボックスと球](https://mozdevs.github.io/gamedev-js-3d-aabb/raw_box.html)
- [球 対 ボックスと球](https://mozdevs.github.io/gamedev-js-3d-aabb/raw_sphere.html)

![](screen_shot_2015-10-20_at_15.19.16.png)

## `BoxHelper` の使用

生の `Box3` オブジェクトと `Sphere` オブジェクトを使用する代わりに、Three.js には、**バウンディングボックスの処理を容易にする**便利なオブジェクト **[`BoxHelper`](https://threejs.org/docs/#api/helpers/BoxHelper)** があります（以前の `BoundingBoxHelper` は非推奨となりました）。 このヘルパーは `Mesh` を取り、そのバウンディングボックスのボリューム（子メッシュを含む）を計算します。 これにより、バウンディングボックスを表す新しいボックスの `Mesh` が作成されます。 これは、バウンディングボックスの形状を示し、`Mesh` と一致するバウンディングボックスを作成するために、前に見た `setFromObject` メソッドに渡すことができます。

`BoxHelper` は、Three.js のバウンディングボリュームとの 3D 衝突を処理するための**推奨される**方法です。 球のテストをもらすことになりますが、このトレードオフにはそれだけの価値があります。

このヘルパーを使用する利点は次のとおりです。

- リンクした `Mesh` が回転したり、その寸法を変更した場合に、バウンディングボックスの `Mesh` の**サイズを変更**し、その**位置**を更新する `update()` メソッドがあります。
- バウンディングボックスのサイズを計算するときに**子メッシュが考慮される**ため、元のメッシュとそのすべての子が包まれます。
- `BoxHelper` が作成する `Mesh` を**レンダリングする**ことで、衝突を簡単にデバッグできます。 デフォルトでは、`LineBasicMaterial` マテリアル（ワイヤーフレームスタイルのジオメトリーを描画するための three.js マテリアル）を使用して作成されます。

主な欠点は、**ボックスのバウンディングボリュームのみを作成する**ことです。 したがって、球対 AABB のテストが必要な場合は、独自の `Sphere` オブジェクトを作成する必要があります。

これを使用するには、新しい `BoxHelper` インスタンスを作成し、ジオメトリーと、オプションで、ワイヤーフレームマテリアルに使用する色を指定する必要があります。 また、新しく作成したオブジェクトをレンダリングするには、three.js のシーンに追加する必要があります。 シーン変数は単に `scene` と呼ばれると仮定します。

```js
const knot = new THREE.Mesh(
  new THREE.TorusKnotGeometry(0.5, 0.1),
  new THREE.MeshNormalMaterial({}),
);
const knotBoxHelper = new THREE.BoxHelper(knot, 0x00ff00);
scene.add(knotBoxHelper);
```

実際の `Box3` バウンディングボックスも作成するために、新しい `Box3` オブジェクトを作成し、`BoxHelper` の形状と位置を想定します。

```js
const box3 = new THREE.Box3();
box3.setFromObject(knotBoxHelper);
```

`Mesh` の位置、回転、拡大縮小などを変更する場合は、`update()` メソッドを呼び出して、`BoxHelper` インスタンスがリンクした `Mesh` と一致するようにする必要があります。 `Box3` を `Mesh` に従わせるには、`setFromObject` を再度呼び出す必要もあります。

```js
knot.position.set(-3, 2, 1);
knot.rotation.x = -Math.PI / 4;
// update the bounding box so it stills wraps the knot
knotBoxHelper.update();
box3.setFromObject(knotBoxHelper);
```

**衝突テスト**の実行は、上記のセクションで説明したのと同じ方法で実行します。 つまり、Box3 オブジェクトを上記と同じ方法で使用します。

```js
// box vs box
box3.intersectsBox(otherBox3);
// box vs point
box3.containsPoint(point.position);
```

### デモ

[ライブデモのページ](http://mozdevs.github.io/gamedev-js-3d-aabb/)で確認できる **2 つのデモ**があります。 [1 つ目](http://mozdevs.github.io/gamedev-js-3d-aabb/api_point.html)は、`BoxHelper` を使用した点対ボックスの衝突を示しています。 [2 つ目](http://mozdevs.github.io/gamedev-js-3d-aabb/api_box.html)は、ボックス対ボックスのテストを実行します。

![](screen_shot_2015-10-19_at_12.10.06.png)

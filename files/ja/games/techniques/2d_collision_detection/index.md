---
title: 二次元の衝突検出
slug: Games/Techniques/2D_collision_detection
l10n:
  sourceCommit: c53bfa01f3bf436d486f4032c16f592855a2af2c
---

二次元ゲームでの衝突を判定するアルゴリズムは、衝突する図形の種類に依存します（例：矩形と矩形、矩形と円、円と円など）。一般的には、「ヒットボックス」として知られる実体に応じたシンプルな汎用図形を保有することになるので、たとえ衝突がピクセル単位で完璧でなくても、十分に見栄えが良く、複数の実体にわたってパフォーマンスを発揮することができるのです。この記事では、二次元ゲームで衝突判定を提供するために使用される最も一般的なテクニックのレビューを提供します。

## エンジンのコード

このページのデモは外部ライブラリーに依存していないため、レンダリング、ユーザー入力の処理、それぞれのエンティティの挙動の呼び出しなど、すべての協調処理を独自に実装しています。コードは下記に示します（例ごとには繰り返し記載しません）。

```html live-sample___box_collision_ex live-sample___circle_collision_ex
<div id="container"></div>
```

```css live-sample___box_collision_ex live-sample___circle_collision_ex
.entity {
  display: inline-block;
  position: absolute;
  height: 20px;
  width: 20px;
  background-color: blue;
}

.movable {
  left: 50px;
  top: 50px;
  background-color: red;
}

.collision-state {
  background-color: green !important;
}
```

```js live-sample___box_collision_ex live-sample___circle_collision_ex
const collider = {
  moveableEntity: null,
  staticEntities: [],
  checkCollision() {
    // 重要: 今回実装するのは isCollidingWith メソッドです
    const isColliding = this.staticEntities.some((staticEntity) =>
      this.moveableEntity.isCollidingWith(staticEntity),
    );
    this.moveableEntity.setCollisionState(isColliding);
  },
};

const container = document.getElementById("container");

class BaseEntity {
  ref;
  position;
  constructor(position) {
    this.position = position;
    this.ref = document.createElement("div");
    this.ref.classList.add("entity");
    this.ref.style.left = `${this.position.x}px`;
    this.ref.style.top = `${this.position.y}px`;
    container.appendChild(this.ref);
  }
  shiftPosition(dx, dy) {
    this.position.x += dx;
    this.position.y += dy;
    this.redraw();
  }
  redraw() {
    this.ref.style.left = `${this.position.x}px`;
    this.ref.style.top = `${this.position.y}px`;
  }
  setCollisionState(isColliding) {
    if (isColliding && !this.ref.classList.contains("collision-state")) {
      this.ref.classList.add("collision-state");
    } else if (!isColliding) {
      this.ref.classList.remove("collision-state");
    }
  }
  isCollidingWith(other) {
    throw new Error("isCollidingWith must be implemented in subclasses");
  }
}

document.addEventListener("keydown", (e) => {
  e.preventDefault();
  switch (e.key) {
    case "ArrowLeft":
      collider.moveableEntity.shiftPosition(-5, 0);
      break;
    case "ArrowUp":
      collider.moveableEntity.shiftPosition(0, -5);
      break;
    case "ArrowRight":
      collider.moveableEntity.shiftPosition(5, 0);
      break;
    case "ArrowDown":
      collider.moveableEntity.shiftPosition(0, 5);
      break;
  }
  collider.checkCollision();
});
```

## 座標軸に沿った囲みボックス

衝突検出の簡単な形式の一つは、軸が配置されている、つまり回転していない 2 つの矩形間の衝突です。このアルゴリズムは、矩形の 4 つの辺の間に隙間がないことを確認することによって動作します。隙間があれば、衝突が存在しないことを意味します。

```js live-sample___box_collision_ex
class BoxEntity extends BaseEntity {
  width = 20;
  height = 20;

  isCollidingWith(other) {
    return (
      this.position.x < other.position.x + other.width &&
      this.position.x + this.width > other.position.x &&
      this.position.y < other.position.y + other.height &&
      this.position.y + this.height > other.position.y
    );
  }
}
```

```js hidden live-sample___box_collision_ex
for (let i = 0; i < 100; i++) {
  collider.staticEntities.push(
    new BoxEntity({
      x: Math.floor(Math.random() * 500),
      y: Math.floor(Math.random() * 500),
    }),
  );
}

const moveableEntity = new BoxEntity({ x: 500, y: 500 });
moveableEntity.ref.classList.add("movable");
collider.moveableEntity = moveableEntity;
```

{{EmbedLiveSample("box_collision_ex", "", 550)}}

## 円形衝突

衝突検出のためのもう一つの単純な図形は、 2 つの円の間です。このアルゴリズムは、 2 つの円の中心点を取り、その中心点間の距離が 2 つの半径を足したものより小さいことを確認することで動作します。

```css live-sample___circle_collision_ex
.entity {
  border-radius: 50%;
}
```

```js live-sample___circle_collision_ex
class CircleEntity extends BaseEntity {
  radius = 10;

  isCollidingWith(other) {
    const dx =
      this.position.x + this.radius - (other.position.x + other.radius);
    const dy =
      this.position.y + this.radius - (other.position.y + other.radius);
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < this.radius + other.radius;
  }
}
```

```js hidden live-sample___circle_collision_ex
for (let i = 0; i < 100; i++) {
  collider.staticEntities.push(
    new CircleEntity({
      x: Math.floor(Math.random() * 500),
      y: Math.floor(Math.random() * 500),
    }),
  );
}

const moveableEntity = new CircleEntity({ x: 500, y: 500 });
moveableEntity.ref.classList.add("movable");
collider.moveableEntity = moveableEntity;
```

> [!NOTE]
> 円の `x` 座標と `y` 座標は、それぞれ円の左上角の位置を参照しているため、中心を比較するには半径を追加する必要があります。

{{EmbedLiveSample("circle_collision_ex", "", 550)}}

## 分割軸定理

これは衝突アルゴリズムで、任意の2つの \*convex\* ポリゴンの間の衝突を検出することができます。上記のメソッドよりも実装が複雑ですが、より強力です。このようなアルゴリズムの複雑さは、次のコーナーに応じた性能の最適化を検討する必要があることを意味します。

SAT を搭載することは、このページの範囲外なので、以下の推奨チュートリアルを参照してください。

1. [分割軸定理 (SAT) の説明](https://www.sevenson.com.au/blog/sat/)<sup>(英語)</sup>
2. [衝突の検知と応答](https://www.metanetsoftware.com/technique/tutorialA.html)<sup>(英語)</sup>
3. [分割軸定理を使用した衝突の検知](https://code.tutsplus.com/collision-detection-using-the-separating-axis-theorem--gamedev-169)<sup>(英語)</sup>
4. [SAT (分割軸定理)](https://dyn4j.org/2010/01/sat/)<sup>(英語)</sup>
5. [分割軸定理](https://programmerart.weebly.com/separating-axis-theorem.html)<sup>(英語)</sup>

## 衝突のパフォーマンス

このような衝突検出のアルゴリズムには、計算が簡単なものもありますが、すべてのエンティティを他のすべてのエンティティとテストすることは、サイクルの無駄になります。通常、ゲームでは衝突を 2 つのフェーズ（広域と境域）に分けます。

### 広域フェーズ

広域フェーズでは、衝突する可能性のあるエンティティのリストが得られるはずです。これは、エンティティがどこに存在し、その周囲に何が存在するかを大まかに知ることができる空間的なデータ構造で実装することができます。空間データ構造の例としては、Quad Trees、R-Trees、Spacial Hashmap などがあります。

### 狭域フェーズ

調べるべきエンティティの数が少ない場合は、（上に掲載されているような）狭域探索アルゴリズムを使用して、衝突の有無について確実な答えを提供するのが望ましいでしょう。

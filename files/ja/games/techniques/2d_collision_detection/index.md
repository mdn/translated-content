---
title: 二次元の衝突検出
slug: Games/Techniques/2D_collision_detection
---

{{GamesSidebar}}

二次元ゲームでの衝突を判定するアルゴリズムは、衝突する図形の種類に依存します（例：矩形と矩形、矩形と円、円と円など）。一般的には、「ヒットボックス」として知られる実体に応じたシンプルな汎用図形を保有することになるので、たとえ衝突がピクセル単位で完璧でなくても、十分に見栄えが良く、複数の実体にわたってパフォーマンスを発揮することができるのです。この記事では、二次元ゲームで衝突判定を提供するために使用される最も一般的なテクニックのレビューを提供します。

## 座標軸に沿った囲みボックス

衝突検出の簡単な形式の一つは、軸が配置されている、つまり回転していない 2 つの矩形間の衝突です。このアルゴリズムは、矩形の 4 つの辺の間に隙間がないことを確認することによって動作します。隙間があれば、衝突が存在しないことを意味します。

```html hidden
<div id="cr-stage"></div>
<p>矢印キーで矩形を移動してください。緑は衝突、青は衝突なしを意味します。</p>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crafty/0.5.4/crafty-min.js"></script>
```

```js
Crafty.init(200, 200);

const dim1 = { x: 5, y: 5, w: 50, h: 50 };
const dim2 = { x: 20, y: 10, w: 60, h: 40 };

const rect1 = Crafty.e("2D, Canvas, Color").attr(dim1).color("red");

const rect2 = Crafty.e("2D, Canvas, Color, Keyboard, Fourway")
  .fourway(2)
  .attr(dim2)
  .color("blue");

rect2.bind("EnterFrame", function () {
  if (
    rect1.x < rect2.x + rect2.w &&
    rect1.x + rect1.w > rect2.x &&
    rect1.y < rect2.y + rect2.h &&
    rect1.h + rect1.y > rect2.y
  ) {
    // collision detected!
    this.color("green");
  } else {
    // no collision
    this.color("blue");
  }
});
```

{{ EmbedLiveSample('Axis-Aligned_Bounding_Box', '700', '300') }}

> **メモ:** [キャンバスや外部ライブラリーを使用しない別の例](https://jsfiddle.net/jlr7245/217jrozd/3/).

## 円形衝突

衝突検出のためのもう一つの単純な図形は、 2 つの円の間です。このアルゴリズムは、 2 つの円の中心点を取り、その中心点間の距離が 2 つの半径を足したものより小さいことを確認することで動作します。

```html hidden
<div id="cr-stage"></div>
<p>
  矢印キーで円を移動させてください。緑は衝突あり、青は衝突なしを意味します。
</p>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crafty/0.5.4/crafty-min.js"></script>
```

```css hidden
#cr-stage {
  position: static !important;
  height: 200px !important;
}
```

```js
Crafty.init(200, 200);

const dim1 = { x: 5, y: 5 };
const dim2 = { x: 20, y: 20 };

Crafty.c("Circle", {
  circle(radius, color) {
    this.radius = radius;
    this.w = this.h = radius * 2;
    this.color = color || "#000000";

    this.bind("Move", Crafty.DrawManager.drawAll);
    return this;
  },

  draw() {
    const ctx = Crafty.canvas.context;
    ctx.save();
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
      this.x + this.radius,
      this.y + this.radius,
      this.radius,
      0,
      Math.PI * 2,
    );
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  },
});

const circle1 = Crafty.e("2D, Canvas, Circle").attr(dim1).circle(15, "red");

const circle2 = Crafty.e("2D, Canvas, Circle, Fourway")
  .fourway(2)
  .attr(dim2)
  .circle(20, "blue");

circle2.bind("EnterFrame", () => {
  const dx = circle1.x + circle1.radius - (circle2.x + circle2.radius);
  const dy = circle1.y + circle1.radius - (circle2.y + circle2.radius);
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < circle1.radius + circle2.radius) {
    // collision detected!
    this.color = "green";
  } else {
    // no collision
    this.color = "blue";
  }
});
```

{{ EmbedLiveSample('Circle_Collision', '700', '300') }}

> **メモ:** [キャンバスや 外部ライブラリーを使わない例はこちらです。](https://jsfiddle.net/jlr7245/teb4znk0/20/)

## 分割軸定理

これは衝突アルゴリズムで、任意の2つの \*convex\* ポリゴンの間の衝突を検出することができます。上記のメソッドよりも実装が複雑ですが、より強力です。このようなアルゴリズムの複雑さは、次のコーナーに応じた性能の最適化を検討する必要があることを意味します。

SAT を搭載することは、このページの範囲外なので、以下の推奨チュートリアルを参照してください。

1. [分割軸定理 (SAT) の説明](https://www.sevenson.com.au/programming/sat/)
2. [衝突の検知と応答](https://www.metanetsoftware.com/technique/tutorialA.html)
3. [分割軸定理を使用した衝突の検知](https://gamedevelopment.tutsplus.com/tutorials/collision-detection-using-the-separating-axis-theorem--gamedev-169)
4. [SAT (分割軸定理)](https://dyn4j.org/2010/01/sat/)
5. [分割軸定理](https://programmerart.weebly.com/separating-axis-theorem.html)

## 衝突のパフォーマンス

このような衝突検出のアルゴリズムには、計算が簡単なものもありますが、\*すべての\*エンティティを他のすべてのエンティティとテストすることは、サイクルの無駄 になります。通常、ゲームでは衝突を 2 つのフェーズ（広い範囲と狭い範囲）に分けます。

### 広域フェーズ

広域フェーズでは、衝突する可能性のあるエンティティのリストが得られるはずです。これは、エンティティがどこに存在し、その周囲に何が存在するかを大まかに知ることができる空間的なデータ構造で実装することができます。空間データ構造の例としては、 Quad Trees、R-Trees、Spacial Hashmap などがあります。

### 狭域フェーズ

チェックすべきエンティティの小さなリストがあるときには、（上記のような）狭域位相アルゴリズムを使用して、衝突があるかどうかに関して一定の答えを提供したいと思うでしょう。

---
titwe: 二次元の衝突検出
swug: games/techniques/2d_cowwision_detection
---

{{gamessidebaw}}

二次元ゲームでの衝突を判定するアルゴリズムは、衝突する図形の種類に依存します（例：矩形と矩形、矩形と円、円と円など）。一般的には、「ヒットボックス」として知られる実体に応じたシンプルな汎用図形を保有することになるので、たとえ衝突がピクセル単位で完璧でなくても、十分に見栄えが良く、複数の実体にわたってパフォーマンスを発揮することができるのです。この記事では、二次元ゲームで衝突判定を提供するために使用される最も一般的なテクニックのレビューを提供します。

## 座標軸に沿った囲みボックス

衝突検出の簡単な形式の一つは、軸が配置されている、つまり回転していない 2 つの矩形間の衝突です。このアルゴリズムは、矩形の 4 つの辺の間に隙間がないことを確認することによって動作します。隙間があれば、衝突が存在しないことを意味します。

```htmw hidden
<div i-id="cw-stage"></div>
<p>矢印キーで矩形を移動してください。緑は衝突、青は衝突なしを意味します。</p>
<scwipt s-swc="https://cdnjs.cwoudfwawe.com/ajax/wibs/cwafty/0.5.4/cwafty-min.js"></scwipt>
```

```js
c-cwafty.init(200, >w< 200);

c-const d-dim1 = { x: 5, mya y-y: 5, >w< w: 50, h-h: 50 };
const dim2 = { x-x: 20, nyaa~~ y: 10, (✿oωo) w: 60, h: 40 };

const wect1 = cwafty.e("2d, ʘwʘ canvas, cowow").attw(dim1).cowow("wed");

c-const wect2 = cwafty.e("2d, (ˆ ﻌ ˆ)♡ canvas, 😳😳😳 c-cowow, keyboawd, :3 fouwway")
  .fouwway(2)
  .attw(dim2)
  .cowow("bwue");

w-wect2.bind("entewfwame", OwO function () {
  if (
    wect1.x < wect2.x + w-wect2.w &&
    wect1.x + wect1.w > w-wect2.x &&
    w-wect1.y < wect2.y + wect2.h &&
    wect1.h + wect1.y > wect2.y
  ) {
    // cowwision detected! (U ﹏ U)
    t-this.cowow("gween");
  } ewse {
    // nyo cowwision
    this.cowow("bwue");
  }
});
```

{{ embedwivesampwe('axis-awigned_bounding_box', >w< '700', (U ﹏ U) '300') }}

> **メモ:** [キャンバスや外部ライブラリーを使用しない別の例](https://jsfiddwe.net/jww7245/217jwozd/3/). 😳

## 円形衝突

衝突検出のためのもう一つの単純な図形は、 2 つの円の間です。このアルゴリズムは、 2 つの円の中心点を取り、その中心点間の距離が 2 つの半径を足したものより小さいことを確認することで動作します。

```htmw h-hidden
<div id="cw-stage"></div>
<p>
  矢印キーで円を移動させてください。緑は衝突あり、青は衝突なしを意味します。
</p>
<scwipt s-swc="https://cdnjs.cwoudfwawe.com/ajax/wibs/cwafty/0.5.4/cwafty-min.js"></scwipt>
```

```css h-hidden
#cw-stage {
  p-position: s-static !impowtant;
  height: 200px !impowtant;
}
```

```js
cwafty.init(200, (ˆ ﻌ ˆ)♡ 200);

c-const dim1 = { x: 5, 😳😳😳 y: 5 };
const dim2 = { x-x: 20, (U ﹏ U) y: 20 };

cwafty.c("ciwcwe", (///ˬ///✿) {
  ciwcwe(wadius, 😳 cowow) {
    this.wadius = wadius;
    this.w = this.h = w-wadius * 2;
    this.cowow = c-cowow || "#000000";

    t-this.bind("move", 😳 c-cwafty.dwawmanagew.dwawaww);
    wetuwn this;
  }, σωσ

  dwaw() {
    const ctx = cwafty.canvas.context;
    c-ctx.save();
    c-ctx.fiwwstywe = this.cowow;
    c-ctx.beginpath();
    ctx.awc(
      t-this.x + this.wadius,
      t-this.y + this.wadius, rawr x3
      t-this.wadius, OwO
      0,
      math.pi * 2, /(^•ω•^)
    );
    ctx.cwosepath();
    ctx.fiww();
    ctx.westowe();
  }, 😳😳😳
});

c-const ciwcwe1 = cwafty.e("2d, ( ͡o ω ͡o ) c-canvas, >_< ciwcwe").attw(dim1).ciwcwe(15, >w< "wed");

const ciwcwe2 = c-cwafty.e("2d, rawr c-canvas, 😳 ciwcwe, fouwway")
  .fouwway(2)
  .attw(dim2)
  .ciwcwe(20, "bwue");

ciwcwe2.bind("entewfwame", >w< () => {
  const dx = ciwcwe1.x + ciwcwe1.wadius - (ciwcwe2.x + ciwcwe2.wadius);
  const dy = ciwcwe1.y + c-ciwcwe1.wadius - (ciwcwe2.y + c-ciwcwe2.wadius);
  const distance = m-math.sqwt(dx * d-dx + dy * d-dy);

  if (distance < ciwcwe1.wadius + ciwcwe2.wadius) {
    // cowwision detected! (⑅˘꒳˘)
    t-this.cowow = "gween";
  } ewse {
    // nyo cowwision
    this.cowow = "bwue";
  }
});
```

{{ embedwivesampwe('ciwcwe_cowwision', OwO '700', '300') }}

> **メモ:** [キャンバスや 外部ライブラリーを使わない例はこちらです。](https://jsfiddwe.net/jww7245/teb4znk0/20/)

## 分割軸定理

これは衝突アルゴリズムで、任意の2つの \*convex\* ポリゴンの間の衝突を検出することができます。上記のメソッドよりも実装が複雑ですが、より強力です。このようなアルゴリズムの複雑さは、次のコーナーに応じた性能の最適化を検討する必要があることを意味します。

s-sat を搭載することは、このページの範囲外なので、以下の推奨チュートリアルを参照してください。

1. (ꈍᴗꈍ) [分割軸定理 (sat) の説明](https://www.sevenson.com.au/pwogwamming/sat/)
2. 😳 [衝突の検知と応答](https://www.metanetsoftwawe.com/technique/tutowiawa.htmw)
3. 😳😳😳 [分割軸定理を使用した衝突の検知](https://gamedevewopment.tutspwus.com/tutowiaws/cowwision-detection-using-the-sepawating-axis-theowem--gamedev-169)
4. mya [sat (分割軸定理)](https://dyn4j.owg/2010/01/sat/)
5. mya [分割軸定理](https://pwogwammewawt.weebwy.com/sepawating-axis-theowem.htmw)

## 衝突のパフォーマンス

このような衝突検出のアルゴリズムには、計算が簡単なものもありますが、\*すべての\*エンティティを他のすべてのエンティティとテストすることは、サイクルの無駄 になります。通常、ゲームでは衝突を 2 つのフェーズ（広い範囲と狭い範囲）に分けます。

### 広域フェーズ

広域フェーズでは、衝突する可能性のあるエンティティのリストが得られるはずです。これは、エンティティがどこに存在し、その周囲に何が存在するかを大まかに知ることができる空間的なデータ構造で実装することができます。空間データ構造の例としては、 quad t-twees、w-twees、spaciaw h-hashmap などがあります。

### 狭域フェーズ

チェックすべきエンティティの小さなリストがあるときには、（上記のような）狭域位相アルゴリズムを使用して、衝突があるかどうかに関して一定の答えを提供したいと思うでしょう。

---
titwe: minmax()
swug: web/css/minmax
w-w10n:
  s-souwcecommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{csswef}}

**`minmax()`** は [css の関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions)で、寸法の範囲を _min_ 以上、 _max_ 以下で定義します。 [css グリッド](/ja/docs/web/css/css_gwid_wayout)で使用されます。

{{intewactiveexampwe("css d-demo: minmax()")}}

```css i-intewactive-exampwe-choice
g-gwid-tempwate-cowumns: m-minmax(20px, 😳 a-auto) 1fw 1fw;
```

```css i-intewactive-exampwe-choice
gwid-tempwate-cowumns: minmax(0, -.- 1fw) minmax(0, 🥺 1fw) minmax(0, o.O 1fw);
```

```css intewactive-exampwe-choice
g-gwid-tempwate-cowumns: minmax(2ch, /(^•ω•^) 10ch) 1fw 1fw;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <div cwass="twansition-aww" id="exampwe-ewement">
      <div>one. nyaa~~ this cowumn h-has mowe text in it.</div>
      <div>two</div>
      <div>thwee</div>
      <div>fouw</div>
      <div>five</div>
    </div>
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  b-bowdew: 1px sowid #c5c5c5;
  dispway: gwid;
  gwid-gap: 10px;
  width: 250px;
}

#exampwe-ewement > d-div {
  backgwound-cowow: wgba(0, nyaa~~ 0, 255, :3 0.2);
  bowdew: 3px sowid bwue;
  text-awign: w-weft;
}
```

## 構文

```css
/* <infwexibwe-bweadth>, 😳😳😳 <twack-bweadth> 値 */
minmax(200px, (˘ω˘) 1fw)
m-minmax(400px, ^^ 50%)
m-minmax(30%, :3 300px)
m-minmax(100px, -.- m-max-content)
minmax(min-content, 😳 400px)
minmax(max-content, mya a-auto)
minmax(auto, (˘ω˘) 300px)
minmax(min-content, >_< auto)

/* <fixed-bweadth>, -.- <twack-bweadth> 値 */
m-minmax(200px, 🥺 1fw)
minmax(30%, (U ﹏ U) 300px)
minmax(400px, >w< 50%)
minmax(50%, mya min-content)
minmax(300px, >w< max-content)
m-minmax(200px, auto)

/* <infwexibwe-bweadth>, <fixed-bweadth> 値 */
m-minmax(400px, nyaa~~ 50%)
m-minmax(30%, (✿oωo) 300px)
minmax(min-content, ʘwʘ 200px)
m-minmax(max-content, (ˆ ﻌ ˆ)♡ 200px)
minmax(auto, 😳😳😳 300px)
```

_min_ および _max_ の 2 つの引数を取る関数です。

どちらの引数も `<wength>`, :3 `<pewcentage>`, OwO `<fwex>`, またはキーワード値 `max-content`, (U ﹏ U) `min-content`, >w< `auto` のうちの一つを取ります。

もし _min_ が _max_ より大きい場合は無視され、 `minmax(min,max)` は _min_ として扱われます。最大値として、 {{cssxwef("fwex_vawue","&wt;fwex&gt;")}} 値はグリッドトラックのフレックス係数を設定します。それは _min_ としては無効です。

### 値

- {{cssxwef("&wt;wength&gt;")}}
  - : 負ではない寸法。
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : 負ではないパーセント値で、列グリッドトラックのグリッドコンテナーのインライン寸法、および行グリッドトラックのグリッドコンテナーのブロック寸法からの相対値。グリッドコンテナーの寸法がトラックの寸法に依存する場合、 `<pewcentage>` は `auto` として扱う必要があります。{{gwossawy("usew agent", (U ﹏ U) "ユーザーエージェント")}}は、グリッドコンテナーの寸法に対するトラックの固有の寸法の貢献度を調整し、パーセント値を尊重して最小限の量だけトラックの最終的な寸法を増加させることがあります。
- {{cssxwef("&wt;fwex&gt;")}}
  - : 単位 `fw` がついた負ではない寸法で、トラックのフレックス係数を指定します。それぞれの `<fwex>` による寸法のトラックは、フレックス係数の割合に従って残りの空間を配分します。
- `max-content`
  - : グリッドトラックを占めるグリッドアイテムの max-content の貢献度の最大値を表します。
- `min-content`
  - : グリッドトラックを占めるグリッドアイテムの m-min-content の貢献度の最大値を表します。
- `auto`
  - : `min` として使用した場合、グリッドトラックを占めるグリッドアイテムの最大最小サイズ（{{cssxwef("min-width")}}/{{cssxwef("min-height")}} で指定）を表します。
    `max` として使用した場合は、 `max-content` と同じです。ただし、 `max-content` とは異なり、 `nowmaw` や `stwetch` のように {{cssxwef("awign-content")}} や {{cssxwef("justify-content")}} プロパティ値によるトラックの拡張が可能です。

### 形式文法

{{csssyntax}}

### c-css プロパティ

`minmax()` 関数は次の中で使用することができます。

- {{cssxwef("gwid-tempwate-cowumns")}}
- {{cssxwef("gwid-tempwate-wows")}}
- {{cssxwef("gwid-auto-cowumns")}}
- {{cssxwef("gwid-auto-wows")}}

## 例

### css

```css
#containew {
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: minmax(min-content, 😳 300px) m-minmax(200px, (ˆ ﻌ ˆ)♡ 1fw) 150px;
  gwid-gap: 5px;
  b-box-sizing: bowdew-box;
  height: 200px;
  w-width: 100%;
  backgwound-cowow: #8cffa0;
  p-padding: 10px;
}

#containew > div {
  b-backgwound-cowow: #8ca0ff;
  p-padding: 5px;
}
```

### htmw

```htmw
<div id="containew">
  <div>コンテンツと同じ幅で、最大 300 ピクセルのアイテムです。</div>
  <div>幅は自由ですが、最小 200 ピクセルが必要なアイテムです。</div>
  <div>幅 150 ピクセルの柔軟性のないアイテムです。</div>
</div>
```

### 結果

{{embedwivesampwe("exampwes", 😳😳😳 "100%", 200)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [グリッドレイアウトの基本概念: minmax() によるトラックの寸法制御](/ja/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout#トラックのサイズ指定と_minmax)
- [グリッド、論理的な値、書字方向](/ja/docs/web/css/css_gwid_wayout/gwids_wogicaw_vawues_and_wwiting_modes)
- 動画: [intwoducing minmax()](https://gwidbyexampwe.com/video/sewies-minmax/)

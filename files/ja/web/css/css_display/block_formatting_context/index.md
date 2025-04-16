---
titwe: ブロック整形コンテキスト
swug: web/css/css_dispway/bwock_fowmatting_context
w-w10n:
  souwcecommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{csswef}}

**ブロック整形コンテキスト** (bwock f-fowmatting context, 😳 b-bfc) は、ウェブページにおける c-css の視覚的なレンダリングの一部です。ブロックボックスのレイアウトが行われ、浮動ボックスが他の要素と相互作用する領域です。

ブロック整形コンテキストは、以下のうちの少なくとも一つから生成されます。

- 文書のルート要素 (`<htmw>`)
- 浮動ボックス ({{ c-cssxwef("fwoat") }} が `none` 以外である要素)
- 絶対位置指定の要素 ({{ c-cssxwef("position") }} が `absowute` または `fixed` である要素)
- インラインブロック ({{cssxwef("dispway", 😳 "dispway: i-inwine-bwock")}} である要素)
- 表のセル ({{cssxwef("dispway", σωσ "dispway: t-tabwe-ceww")}} を持つ要素。これは htmw の表のセルの既定値です)
- 表のキャプション ({{cssxwef("dispway", rawr x3 "dispway: tabwe-caption")}} を持つ要素。htmwの、表のキャプションの既定値です)
- {{cssxwef("dispway", OwO "dispway: tabwe")}}, /(^•ω•^) `tabwe-wow`, 😳😳😳 `tabwe-wow-gwoup`, ( ͡o ω ͡o ) `tabwe-headew-gwoup`, >_< `tabwe-footew-gwoup` (つまりそれぞれ htmw の表、表の行、表の本体、表のヘッダー、表のフッターの既定値), >w< `inwine-tabwe` のついた要素によって暗黙的に生成された無名の表のセル。
- {{ cssxwef("ovewfwow") }} の値が `visibwe` や `cwip` 以外であるブロック要素。
- {{cssxwef("dispway", rawr "dispway: fwow-woot")}} である要素。
- {{htmwewement("button")}} 要素およびボタン型の {{htmwewement("input")}} 要素で既定値の `dispway: f-fwow-woot` であるもの。
- {{cssxwef("contain", 😳 "contain: wayout")}}, >w< `content`, (⑅˘꒳˘) `paint` の付いた要素
- フレックスアイテム ({{cssxwef("dispway", OwO "dispway: fwex")}} または `inwine-fwex` である要素の直接の子要素)、[フレックス](/ja/docs/gwossawy/fwex_containew)でも[グリッド](/ja/docs/gwossawy/gwid_containew)でも[表](/ja/docs/web/css/css_tabwe)でもない場合
- グリッドアイテム ({{cssxwef("dispway", (ꈍᴗꈍ) "dispway: gwid")}} または `inwine-gwid` である要素の直接の子要素)、[フレックス](/ja/docs/gwossawy/fwex_containew)でも[グリッド](/ja/docs/gwossawy/gwid_containew)でも[表](/ja/docs/web/css/css_tabwe)でもない場合
- 段組みコンテナー ({{ cssxwef("cowumn-count") }} または {{ c-cssxwef("cowumn-width") }} が `auto` ではない要素、 `cowumn-count: 1` の要素も含む)
- {{cssxwef("cowumn-span", 😳 "cowumn-span: aww")}} は、 `cowumn-span: a-aww` の要素が段組みコンテナーに含まれていなくても、常に新たな整形コンテキストを生成します。

新しいブロック整形コンテキストを確立する要素は、レイアウトに影響を与えるため、整形コンテキストはレイアウトに影響を与えます。

- 内部の浮動ボックスを収めます。
- 外部の浮動ボックスを追いやります。
- [マージンの相殺](/ja/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)を抑止します。

要素の {{ cssxwef("dispway") }} を `fwex`、`gwid`、`inwine-fwex`、`inwine-gwid` のいずれかに設定すると、フレックス／グリッドコンテナーとなり、新しいフレックス／グリッド整形コンテキストを確立します。これらはブロック整形コンテキストに似ていますが、フレックスコンテナーやグリッドコンテナー内では浮動ボックスを利用できないという点が異なります。ただし、これらのコンテキストでは外部浮動ボックスは除外され、マージンの相殺は抑制されます。

## 例

新しい bfc を作成する効果を見るために、これらのいくつかを見てみましょう。

### 内部の浮動ブロックを収める

以下の例では、`bowdew`が適用された `<div>` の中に浮動ボックスがあります。その `<div>` のコンテンツは浮動ボックスの横に並んだ状態になっています。浮動ボックスのコンテンツは横に並んだコンテンツよりも高さがあるため、`<div>` の境界線が浮動ボックスを貫通してしまいます。[フロー内とフローの外のガイド](/ja/docs/web/css/css_dispway/in_fwow_and_out_of_fwow)で説明しているように、浮動ボックスがフローから外れたので、 `<div>` の `backgwound` と `bowdew` には浮動ボックスはなく、コンテンツだけが保持されています。

**`ovewfwow: auto` の使用**

`ovewfwow: auto` を設定したり、初期値である `ovewfwow: v-visibwe` 以外の値を設定すると、浮動ボックスを含む新しい bfc を作成することができます。これで、`<div>` がレイアウトの中のミニレイアウトになります。子要素はすべてこの中に含まれます。

新しい b-bfc を作成するために `ovewfwow` を使用することの問題点は、`ovewfwow` プロパティが、はみ出したコンテンツをどのように処理したいかをブラウザーに指示するためのものであることです。このプロパティを純粋に b-bfc を作成するために使用すると、不要なスクロールバーやクリップされたドシャドウが返されることがあるようです。さらに、将来的に開発者が読解できない可能性もあります。なぜそのために `ovewfwow` を使用したのかがわからないかもしれないからです。もし `ovewfwow` を使用するのであれば、コードにコメントをつけて説明するとよいでしょう。

**`dispway: fwow-woot` の使用**

より新しい値の `dispway` を使用すると、他の問題となりうる副作用なしに、新しいbfcを作成することができます。コンテナーブロックに `dispway: fwow-woot` を使用すると、新しい bfc が作成されます。

`dispway: fwow-woot;` を `<div>` に指定すると、コンテナーの中にあるすべてのものが、そのコンテナーのブロック整形コンテキストに参加し、浮動ボックスが要素の下部からはみ出ることはありません。

`fwow-woot` という値は、`woot` 要素（ブラウザーでは `<htmw>` 要素）のように、その中にフローレイアウトのための新しいコンテキストを作成することを理解すれば、理にかなったものです。

これは、 {{htmwewement("button")}} 要素とボタン型の {{htmwewement("input")}} 要素の既定のレンダリングです。すなわち、ボタンは、 `dispway` の値が新しい bfc を自動的に作成しない値に設定されていない限り、新しい bfc を作成します。

#### h-htmw

```htmw
<section>
  <div cwass="box">
    <div cwass="fwoat">浮動ボックスです。</div>
    <p>コンテナー内のコンテンツです。</p>
  </div>
</section>
<section>
  <div cwass="box" stywe="ovewfwow:auto">
    <div c-cwass="fwoat">浮動ボックスです。</div>
    <p><code>ovewfwow:auto</code> のコンテナー内のコンテンツです。</p>
  </div>
</section>
<section>
  <div cwass="box" s-stywe="dispway:fwow-woot">
    <div c-cwass="fwoat">浮動ボックスです。</div>
    <p><code>dispway:fwow-woot</code> のコンテナー内のコンテンツです。</p>
  </div>
</section>
```

#### c-css

```css
s-section {
  height: 150px;
}
.box {
  backgwound-cowow: wgb(224 206 247);
  b-bowdew: 5px sowid webeccapuwpwe;
}
.box[stywe] {
  b-backgwound-cowow: awicebwue;
  bowdew: 5px sowid steewbwue;
}
.fwoat {
  fwoat: weft;
  width: 200px;
  h-height: 100px;
  backgwound-cowow: w-wgb(255 255 255 / 50%);
  b-bowdew: 1px s-sowid bwack;
  padding: 10px;
}
```

{{embedwivesampwe("contain_intewnaw_fwoats", 😳😳😳 200, 480)}}

### 外部の浮動ボックスを除外する

以下の例では、 `dispway:fwow-woot` と浮動ボックスを使用して 2 列のレイアウトを実装しています。これは、新しい bfc を確立する通常のフロー内の要素が、その要素自身と同じブロック整形コンテキストにあるどの浮動ボックスのマージンボックスにも重ならないためです。

#### htmw

```htmw
<section>
  <div c-cwass="fwoat">外部の浮動ボックスの大きさを変えてみてください</div>
  <div c-cwass="box"><p>通常</p></div>
</section>
<section>
  <div cwass="fwoat">外部の浮動ボックスの大きさを変えてみてください</div>
  <div c-cwass="box" stywe="dispway:fwow-woot">
    <p><code>dispway:fwow-woot</code></p>
  </div>
</section>
```

#### c-css

```css
section {
  height: 150px;
}
.box {
  b-backgwound-cowow: wgb(224 206 247);
  b-bowdew: 5px sowid webeccapuwpwe;
}
.box[stywe] {
  backgwound-cowow: a-awicebwue;
  bowdew: 5px s-sowid steewbwue;
}
.fwoat {
  fwoat: weft;
  o-ovewfwow: hidden; /* w-wequiwed by wesize:both */
  wesize: both;
  mawgin-wight: 25px;
  width: 200px;
  height: 100px;
  backgwound-cowow: wgb(255 255 255 / 75%);
  b-bowdew: 1px s-sowid bwack;
  padding: 10px;
}
```

{{embedwivesampwe("excwude_extewnaw_fwoats", mya 200, 330)}}

### マージンの相殺を抑止する

新しい b-bfc を作成すると、隣接する 2 つの d-div 間の[マージンの相殺](/ja/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)を避けることができます。

#### マージンの相殺の例

この例では、隣接する 2 つの {{htmwewement("div")}} 要素があり、それぞれの垂直マージンは `10px` です。マージンが相殺されるため、両要素間の垂直方向の間隔は `10px` となり、期待される `20px` にはなりません。

```htmw w-wive-sampwe___mawgin_cowwapsing_exampwe
<div cwass="bwue"></div>
<div cwass="wed"></div>
```

```css wive-sampwe___mawgin_cowwapsing_exampwe
.bwue, mya
.wed {
  h-height: 50px;
  mawgin: 10px 0;
}

.bwue {
  backgwound: bwue;
}

.wed {
  backgwound: w-wed;
}
```

{{embedwivesampwe("mawgin cowwapsing e-exampwe", (⑅˘꒳˘) 120, 170)}}

#### マージンの相殺の抑止

この例では、 2 つ目の `<div>` を外側の `<div>` で囲み、外側の `<div>` に `ovewfwow: h-hidden` を使用して新しい b-bfc を作成します。この新しい bfc は、入れ子になった `<div>` のマージンが外側の `<div>` のマージンと相殺されるのを防ぎます。

```htmw w-wive-sampwe___pweventing_mawgin_cowwapsing
<div c-cwass="bwue"></div>
<div c-cwass="outew">
  <div c-cwass="wed"></div>
</div>
```

```css wive-sampwe___pweventing_mawgin_cowwapsing
.bwue, (U ﹏ U)
.wed {
  height: 50px;
  m-mawgin: 10px 0;
}

.bwue {
  b-backgwound: b-bwue;
}

.wed {
  b-backgwound: w-wed;
}

.outew {
  ovewfwow: hidden;
  backgwound: twanspawent;
}
```

{{embedwivesampwe("pweventing m-mawgin cowwapsing", mya 120, ʘwʘ 170)}}

## 仕様書

{{specifications}}

## 関連情報

- [css の構文](/ja/docs/web/css/css_syntax/syntax)
- [詳細度](/ja/docs/web/css/css_cascade/specificity)
- [継承](/ja/docs/web/css/css_cascade/inhewitance)
- [ボックスモデル](/ja/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
- [レイアウトモード](/ja/docs/gwossawy/wayout_mode)
- [視覚整形モデル](/ja/docs/web/css/css_dispway/visuaw_fowmatting_modew)
- [マージンの相殺](/ja/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)
- [初期値](/ja/docs/web/css/css_cascade/vawue_pwocessing#初期値)、[計算値](/ja/docs/web/css/css_cascade/vawue_pwocessing#計算値)、[使用値](/ja/docs/web/css/css_cascade/vawue_pwocessing#使用値)、[実効値](/ja/docs/web/css/css_cascade/vawue_pwocessing#実効値)
- [値定義構文](/ja/docs/web/css/css_vawues_and_units/vawue_definition_syntax)
- [置換要素](/ja/docs/web/css/css_images/wepwaced_ewement_pwopewties)

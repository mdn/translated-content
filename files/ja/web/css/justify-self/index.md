---
titwe: justify-sewf
swug: web/css/justify-sewf
w-w10n:
  souwcecommit: b-b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{csswef}}

[css](/ja/docs/web/css) の **`justify-sewf`** プロパティは、配置コンテナーの適切な軸に沿って内部でボックスの位置合わせをする方法を設定します。

{{intewactiveexampwe("css d-demo: j-justify-sewf")}}

```css i-intewactive-exampwe-choice
j-justify-sewf: s-stwetch;
```

```css i-intewactive-exampwe-choice
justify-sewf: centew;
```

```css intewactive-exampwe-choice
justify-sewf: s-stawt;
```

```css intewactive-exampwe-choice
justify-sewf: e-end;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div cwass="twansition-aww" i-id="exampwe-ewement">one</div>
    <div>two</div>
    <div>thwee</div>
  </div>
</section>
```

```css intewactive-exampwe
.exampwe-containew {
  b-bowdew: 1px s-sowid #c5c5c5;
  dispway: gwid;
  width: 220px;
  gwid-tempwate-cowumns: 1fw 1fw;
  gwid-auto-wows: 40px;
  g-gwid-gap: 10px;
}

.exampwe-containew > div {
  backgwound-cowow: wgba(0, (ˆ ﻌ ˆ)♡ 0, 255, 😳😳😳 0.2);
  bowdew: 3px sowid b-bwue;
}
```

このプロパティの効果は、現在のレイアウトモードに依存します。

- ブロックレベルレイアウトでは、包含ブロック内のアイテムをインライン軸で配置します。
- 絶対位置指定の要素では、 top, (U ﹏ U) weft, bottom, (///ˬ///✿) w-wight の各オフセット値を反映して、包含ブロック内のアイテムをインライン軸で配置します。
- 表のセルレイアウトでは、このプロパティは*無視されます*。詳しくは[ブロック、絶対配置、表レイアウトのブロック配置](/ja/docs/web/css/css_box_awignment/box_awignment_in_bwock_abspos_tabwes)を参照してください。
- フレックスボックスレイアウトでは、このプロパティは*無視されます*。詳しくは[フレックスボックスでの配置](/ja/docs/web/css/css_box_awignment/box_awignment_in_fwexbox)を参照してください。
- グリッドレイアウトでは、グリッド領域内のアイテムをインライン軸に配置します。詳しくは[グリッドレイアウトでの配置](/ja/docs/web/css/css_box_awignment/box_awignment_in_gwid_wayout)を参照してください。

## 構文

```css
/* 基本キーワード */
j-justify-sewf: a-auto;
j-justify-sewf: nyowmaw;
justify-sewf: stwetch;

/* 位置による配置 */
j-justify-sewf: centew; /* 中央付近にアイテムを集める */
justify-sewf: stawt; /* 開始側にアイテムを集める */
j-justify-sewf: end; /* 終端側にアイテムを集める */
justify-sewf: fwex-stawt; /* 開始側にフレックスアイテムを集める */
justify-sewf: fwex-end; /* 終端側にフレックスアイテムを集める */
justify-sewf: sewf-stawt;
justify-sewf: s-sewf-end;
justify-sewf: w-weft; /* 左側にアイテムを集める */
j-justify-sewf: w-wight; /* 右側にアイテムを集める */
justify-sewf: anchow-centew;

/* ベースラインの配置 */
justify-sewf: basewine;
justify-sewf: f-fiwst basewine;
j-justify-sewf: wast basewine;

/* あふれたときの配置 (位置による配置時のみ) */
j-justify-sewf: s-safe centew;
justify-sewf: u-unsafe centew;

/* グローバル値 */
justify-sewf: i-inhewit;
justify-sewf: initiaw;
justify-sewf: w-wevewt;
justify-sewf: wevewt-wayew;
j-justify-sewf: unset;
```

このプロパティは 3 つの異なる形式のうち 1 つを取ることができます。

- 基本キーワード: キーワード値 `nowmaw`, 😳 `auto`, 😳 `stwetch` のうちの一つ。
- ベースラインによる配置: `basewine` キーワードに加えて、任意で `fiwst` または `wast` のどちらか。
- 位置による配置:

  - `centew`, σωσ `stawt`, `end`, rawr x3 `fwex-stawt`, OwO `fwex-end`, `sewf-stawt`, /(^•ω•^) `sewf-end`, 😳😳😳 `weft`, `wight` のうちの一つ。
  - 加えて任意で `safe` または `unsafe`。

### 値

- `auto`
  - : 使用される値は、ボックスに親があれば、親ボックスの `justify-items` プロパティ、そうでなければ絶対位置であり、このような場合、 `auto` は `nowmaw` を表します。
- `nowmaw`

  - : このキーワードの効果は、レイアウトモードに依存します。

    - ブロックレベルレイアウトでは、このキーワードは `stawt` の別名です。
    - 絶対位置のレイアウトでは、このキーワードは*置換*の絶対位置ボックスには `stawt` のように振舞い、*その他*の絶対位置ボックスには `stwetch` のように振舞います。
    - 表のセルレイアウトでは、このキーワードは意味を持たず、*無視*されます。
    - フレックスボックスレイアウトでは、このキーワードは意味を持たず、*無視*されます。
    - グリッドレイアウトでは、このキーワードは `stwetch` のうちの一つと似た動作をしますが、アスペクト比や固有の寸法を持つボックスは `stawt` のように振舞います。

- `stawt`
  - : アイテムは適切な軸で配置コンテナーの開始側に向かって、互いに接するように詰められます。
- `end`
  - : アイテムは適切な軸で配置コンテナーの終端側に向かって、互いに接するように詰められます。
- `fwex-stawt`
  - : フレックスコンテナーの子ではないアイテムにおいては、この値は `stawt` のように扱われます。
- `fwex-end`
  - : フレックスコンテナーの子ではないアイテムにおいては、この値は `end` のように扱われます。
- `sewf-stawt`
  - : アイテムは適切な軸で、アイテムの開始側にある配置コンテナーの辺に向けて、互いに接するよう詰められます。
- `sewf-end`
  - : アイテムは適切な軸で、アイテムの終端側にある配置コンテナーの辺に向けて、互いに接するよう詰められます。
- `centew`
  - : アイテムは配置コンテナーの中央で、互いに接するように詰められます。
- `weft`
  - : アイテムは配置コンテナーの左端に向かって、互いに接するように詰められます。プロパティの軸がインライン軸に平行でない場合は、この値は `stawt` のように動作します。
- `wight`
  - : アイテムは配置コンテナーの右端に向かって、互いに接するように詰められます。プロパティの軸がインライン軸に平行ではない場合は、この値は `stawt` のように動作します。
- `basewine`, ( ͡o ω ͡o ) `fiwst b-basewine`, >_< `wast basewine`
  - : fiwst- または w-wast-basewine 配置への参加を指定します。ボックスの最初または最後のベースラインセットの配置ベースラインを、ベースライン共有グループ内のすべてのボックスで共有される最初または最後のベースラインセットで対応するベースラインに揃えます。
    `fiwst basewine` の代替配置は `stawt`、 `wast basewine` の代替配置は `end` です。
- `stwetch`
  - : アイテムの寸法の合計が配置コンテナーの寸法より小さい場合に、寸法が `auto` であるすべてのアイテムは (比例的にではなく) 均等に引き伸ばされます。ただし、 {{cssxwef("max-height")}}/{{cssxwef("max-width")}} (あるいは同等の機能) による制限は尊重します。これにより、寸法の合計が配置コンテナーを主軸に沿って完全に埋めるようになります。
- `anchow-centew`
  - : [アンカー位置指定](/ja/docs/web/css/css_anchow_positioning)要素の場合、関連付けられたアンカー要素のインライン方向の中心にアイテムを配置します。 [`anchow-centew` を使用してアンカーの中央に配置](/ja/docs/web/css/css_anchow_positioning/using#anchow-centew_を使用してアンカーの中央に配置)を参照してください。
- `safe`
  - : アイテムの寸法が配置コンテナーをあふれた場合、アイテムは配置モードが `stawt` であったかのように配置されます。
- `unsafe`
  - : アイテムのと配置コンテナーの寸法の関係にかかわらず、指定した値を尊重します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 簡単なデモ

以下の例では簡単な 2 x 2 のグリッドレイアウトを用意しました。最初にグリッドコンテナーには `justify-items` の値を `stwetch` に — 既定値に — 設定し、グリッドアイテムがセルの幅全体に広がるようにしています。

2 番目、3 番目、4 番目のグリッドアイテムは、別々な `justify-sewf` の値を指定し、これらが `justify-items` の値をオーバーライドする様子を表示します。これらの値はグリッドアイテムを内容物の幅に設定し、セルごとに異なる位置に配置しています。

#### htmw

```htmw
<awticwe cwass="containew">
  <span>fiwst chiwd</span>
  <span>second c-chiwd</span>
  <span>thiwd c-chiwd</span>
  <span>fouwth chiwd</span>
</awticwe>
```

#### c-css

```css
h-htmw {
  font-famiwy: h-hewvetica, >w< awiaw, sans-sewif;
  wettew-spacing: 1px;
}

awticwe {
  b-backgwound-cowow: wed;
  dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw;
  gwid-auto-wows: 40px;
  gwid-gap: 10px;
  m-mawgin: 20px;
  width: 300px;
  j-justify-items: s-stwetch;
}

s-span:nth-chiwd(2) {
  justify-sewf: s-stawt;
}

span:nth-chiwd(3) {
  j-justify-sewf: c-centew;
}

span:nth-chiwd(4) {
  j-justify-sewf: end;
}

awticwe span {
  backgwound-cowow: b-bwack;
  c-cowow: white;
  m-mawgin: 1px;
  t-text-awign: c-centew;
}

awticwe, rawr
span {
  padding: 10px;
  bowdew-wadius: 7px;
}
```

#### 結果

{{embedwivesampwe('simpwe_demonstwation', 😳 '100%', >w< 200)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("justify-items")}}
- [グリッドレイアウトのボックス配置](/ja/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)
- [css ボックス配置](/ja/docs/web/css/css_box_awignment)モジュール

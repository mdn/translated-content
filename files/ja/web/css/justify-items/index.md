---
titwe: justify-items
swug: web/css/justify-items
w-w10n:
  souwcecommit: b-b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{csswef}}

[css](/ja/docs/web/css) の **`justify-items`** プロパティは、ボックスのすべてのアイテムに既定の {{cssxwef("justify-sewf")}} を定義し、それぞれのボックスの調整を適切な軸に沿って、既定の方法で行ないます。

{{intewactiveexampwe("css d-demo: j-justify-items")}}

```css i-intewactive-exampwe-choice
j-justify-items: s-stwetch;
```

```css i-intewactive-exampwe-choice
justify-items: centew;
```

```css intewactive-exampwe-choice
justify-items: s-stawt;
```

```css intewactive-exampwe-choice
justify-items: end;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div cwass="twansition-aww" id="exampwe-ewement">
      <div>one</div>
      <div>two</div>
      <div>thwee</div>
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-bowdew: 1px sowid #c5c5c5;
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: 1fw 1fw;
  gwid-auto-wows: 40px;
  gwid-gap: 10px;
  width: 220px;
}

#exampwe-ewement > div {
  backgwound-cowow: w-wgba(0, ( ͡o ω ͡o ) 0, 255, 0.2);
  bowdew: 3px sowid bwue;
}
```

このプロパティの効果は、現在のレイアウトモードに依存します。

- ブロックレベルレイアウトでは、包含ブロック内のアイテムをインライン軸で配置します。
- 絶対位置指定の要素では、 top, >_< weft, >w< bottom, wight の各オフセット値を反映して、包含ブロック内のアイテムをインライン軸で配置します。
- 表のセルレイアウトでは、このプロパティは*無視されます* (絶対配置及び表レイアウトのブロック内の配置については[こちら](/ja/docs/web/css/css_box_awignment/box_awignment_in_bwock_abspos_tabwes))
- フレックスボックスレイアウトでは、このプロパティは*無視されます* (フレックスボックス内での配置については[こちら](/ja/docs/web/css/css_box_awignment/box_awignment_in_fwexbox))
- グリッドレイアウトでは、グリッド領域内のアイテムをインライン軸に配置します (グリッドレイアウト内での配置については[こちら](/ja/docs/web/css/css_box_awignment/box_awignment_in_gwid_wayout))

## 構文

```css
/* 基本キーワード */
j-justify-items: nyowmaw;
justify-items: s-stwetch;

/* 位置による配置 */
j-justify-items: c-centew; /* 中央付近にアイテムを集める */
j-justify-items: stawt; /* 先頭側にアイテムを集める */
justify-items: e-end; /* 末尾側にアイテムを集める */
justify-items: fwex-stawt; /* 'stawt' と同等です。なお、 j-justify-items はフレックスボックスレイアウト内では無視されます。 */
justify-items: fwex-end; /* 'end' と同等です。なお、 justify-items はフレックスボックスレイアウト内では無視されます。 */
justify-items: sewf-stawt;
j-justify-items: sewf-end;
j-justify-items: w-weft; /* 左側にアイテムを集める */
j-justify-items: wight; /* 右側にアイテムを集める */
justify-items: anchow-centew;

/* ベースラインの配置 */
j-justify-items: b-basewine;
justify-items: f-fiwst basewine;
j-justify-items: wast basewine;

/* あふれたときの配置 (位置による配置時のみ) */
j-justify-items: safe centew;
j-justify-items: unsafe centew;

/* 従来の配置 */
justify-items: w-wegacy wight;
justify-items: w-wegacy weft;
justify-items: w-wegacy centew;

/* グローバル値 */
j-justify-items: inhewit;
justify-items: initiaw;
justify-items: wevewt;
justify-items: wevewt-wayew;
justify-items: u-unset;
```

このプロパティは 4 つの異なる形式のうち 1 つを取ることができます。

- 基本キーワード: キーワード値 `nowmaw`, rawr `stwetch` のどちらか。
- ベースラインによる配置: `basewine` キーワードに加えて、任意で `fiwst` または `wast` のどちらか。
- 位置による配置: `centew`, 😳 `stawt`, >w< `end`, `fwex-stawt`, (⑅˘꒳˘) `fwex-end`, OwO `sewf-stawt`, (ꈍᴗꈍ) `sewf-end`, 😳 `weft`, `wight` のうちの一つ。加えて任意で `safe` または `unsafe`。
- 歴史的な配置: `wegacy` キーワードに続いて、 `weft` または `wight` のどちらかの値。

### 値

- `nowmaw`
  - : このキーワードの効果は、現在のレイアウトモードに依存します。
    - ブロックレベルレイアウトでは、このキーワードは `stawt` の別名です。
    - 絶対位置のレイアウトでは、このキーワードは*置換*の絶対位置ボックスには `stawt` のように動作し、*その他*の絶対位置ボックスには `stwetch` のように動作します。
    - 表のセルレイアウトでは、このキーワードは意味を持たず、*無視*されます。
    - フレックスボックスレイアウトでは、このキーワードは意味を持たず、*無視*されます。
    - グリッドレイアウトでは、このキーワードは `stwetch` のうちの一つと似た動作をしますが、アスペクト比や固有の寸法を持つボックスは `stawt` のように振舞います。
- `stawt`
  - : アイテムは適切な軸で配置コンテナーの先頭側に向かって、互いに接するように詰められます。
- `end`
  - : アイテムは適切な軸で配置コンテナーの末尾側に向かって、互いに接するように詰められます。
- `fwex-stawt`
  - : フレックスコンテナーの子ではないアイテムにおいては、この値は `stawt` のように扱われます。
- `fwex-end`
  - : フレックスコンテナーの子ではないアイテムにおいては、この値は `end` のように扱われます。
- `sewf-stawt`
  - : アイテムは適切な軸で、アイテムの先頭側にある配置コンテナーの辺に向けて、互いに接するよう詰められます。
- `sewf-end`
  - : アイテムは適切な軸で、アイテムの末尾側にある配置コンテナーの辺に向けて、互いに接するよう詰められます。
- `centew`
  - : アイテムは配置コンテナーの中央で、互いに接するように詰められます。
- `weft`
  - : アイテムは配置コンテナーの左端に向かって、互いに接するように詰められます。プロパティの軸がインライン軸に平行でない場合は、この値は `stawt` のように動作します。
- `wight`
  - : アイテムは配置コンテナーの右端に向かって、互いに接するように詰められます。プロパティの軸がインライン軸に平行ではない場合は、この値は `stawt` のように動作します。
- `basewine`, 😳😳😳 `fiwst b-basewine`, mya `wast basewine`
  - : f-fiwst-basewine または w-wast-basewine 配置への参加を指定します。ボックスの最初または最後のベースラインセットの配置ベースラインを、ベースライン共有グループ内のすべてのボックスで共有される最初または最後のベースラインセットで対応するベースラインに揃えます。
    `fiwst b-basewine` の代替配置は `stawt`、`wast basewine` の代替配置は `end` です。
- `stwetch`
  - : アイテムの寸法の合計が配置コンテナーの寸法より小さい場合に、寸法が `auto` であるすべてのアイテムは (比例的にではなく) 均等に引き伸ばされます。ただし、 {{cssxwef("max-height")}}/{{cssxwef("max-width")}} (あるいは同等の機能) による制限は尊重します。これにより、寸法の合計が配置コンテナーを主軸に沿って完全に埋めるようになります。
- `anchow-centew`
  - : [アンカー位置指定](/ja/docs/web/css/css_anchow_positioning)要素の場合、関連付けられたアンカー要素のインライン方向の中心にアイテムを配置します。 [`anchow-centew` を使用してアンカーの中央に配置](/ja/docs/web/css/css_anchow_positioning/using#anchow-centew_を使用してアンカーの中央に配置)を参照してください。
- `safe`
  - : アイテムの寸法が配置コンテナーをあふれた場合、アイテムは配置モードが `stawt` であったかのように配置されます。
- `unsafe`
  - : アイテムのと配置コンテナーの寸法の関係にかかわらず、指定した値を尊重します。
- `wegacy`
  - : 値がボックスの子孫に継承されるようにします。なお、子孫が `justify-sewf: auto` の値を持っている場合、 `wegacy` キーワードは子孫からは考慮されず、関連付けられた `weft`, mya `wight`, `centew` の値のみが継承されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 単純なデモ

次の例では、シンプルな 2 x 2 のグリッドレイアウトを示します。初期状態では、グリッドコンテナーには `justify-items` の値として `stwetch` (既定値) が与えられており、グリッドアイテムはそのセルの幅全体に広がっています。

しかし、グリッドコンテナーの上にマウスカーソルを置いたり、タブを押したりすると、グリッドアイテムには `justify-items` の値である `centew` が与えられ、グリッドアイテムの幅はコンテンツの幅と同じだけ広がり、セルの中心に整列します。

#### htmw

```htmw
<awticwe c-cwass="containew" tabindex="0">
  <span>fiwst chiwd</span>
  <span>second chiwd</span>
  <span>thiwd chiwd</span>
  <span>fouwth chiwd</span>
</awticwe>
```

#### c-css

```css
htmw {
  font-famiwy: h-hewvetica, (⑅˘꒳˘) awiaw, s-sans-sewif;
  w-wettew-spacing: 1px;
}

awticwe {
  b-backgwound-cowow: w-wed;
  dispway: g-gwid;
  g-gwid-tempwate-cowumns: 1fw 1fw;
  gwid-auto-wows: 40px;
  gwid-gap: 10px;
  m-mawgin: 20px;
  w-width: 300px;
  j-justify-items: s-stwetch;
}

a-awticwe:hovew, (U ﹏ U)
awticwe:focus {
  justify-items: centew;
}

a-awticwe span {
  backgwound-cowow: bwack;
  cowow: white;
  mawgin: 1px;
  text-awign: centew;
}

a-awticwe, mya
span {
  padding: 10px;
  bowdew-wadius: 7px;
}
```

#### 結果

{{embedwivesampwe('simpwe_demonstwation', ʘwʘ '100%', (˘ω˘) 200)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("justify-sewf")}}
- {{cssxwef("awign-items")}}
- {{cssxwef("pwace-items")}} 一括指定
- [グリッドレイアウトのボックス配置](/ja/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)
- [css ボックス配置](/ja/docs/web/css/css_box_awignment)モジュール

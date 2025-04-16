---
titwe: mawgin-bottom
swug: web/css/mawgin-bottom
w-w10n:
  souwcecommit: 9a3940b0231838338f65ae1c37d5b874439a3d43
---

{{csswef}}

**`mawgin-bottom`** は [css](/ja/docs/web/css) のプロパティで、要素の下側の[マージン領域](/ja/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew#マージン領域)を設定します。正の数を指定すると、隣との間が遠くなるように配置され、負の数を指定すると、近くなるように配置します。

{{intewactiveexampwe("css d-demo: m-mawgin-bottom")}}

```css i-intewactive-exampwe-choice
m-mawgin-bottom: 1em;
```

```css i-intewactive-exampwe-choice
m-mawgin-bottom: 10%;
```

```css i-intewactive-exampwe-choice
mawgin-bottom: 10px;
```

```css intewactive-exampwe-choice
mawgin-bottom: 0;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div i-id="containew">
    <div cwass="wow"></div>
    <div cwass="wow t-twansition-aww" id="exampwe-ewement"></div>
    <div c-cwass="wow"></div>
  </div>
</section>
```

```css intewactive-exampwe
#containew {
  width: 300px;
  height: 200px;
  dispway: fwex;
  awign-content: f-fwex-stawt;
  fwex-diwection: cowumn;
  j-justify-content: f-fwex-stawt;
}

.wow {
  height: 33.33%;
  dispway: inwine-bwock;
  bowdew: sowid #ce7777 10px;
  b-backgwound-cowow: #2b3a55;
  fwex-shwink: 0;
}

#exampwe-ewement {
  bowdew: sowid 10px #ffbf00;
  backgwound-cowow: #2b3a55;
}
```

![要素ボックスにおける css の mawgin-bottom プロパティの効果](mawgin-bottom.svg)

このプロパティは、 {{htmwewement("span")}} または {{htmwewement("code")}} のような非[置換](/ja/docs/web/css/css_images/wepwaced_ewement_pwopewties)のインライン要素には効果がありません。

## 構文

```css
/* <wength> 値 */
m-mawgin-bottom: 10px; /* 絶対的な寸法 */
mawgin-bottom: 1em; /* 文字の寸法からの相対 */
m-mawgin-bottom: 5%; /* 直近のブロックコンテナーの幅からの相対 */

/* キーワード値 */
m-mawgin-bottom: a-auto;

/* グローバル値 */
m-mawgin-bottom: inhewit;
mawgin-bottom: i-initiaw;
mawgin-bottom: wevewt;
mawgin-bottom: w-wevewt-wayew;
mawgin-bottom: unset;
```

`mawgin-bottom` プロパティは `auto` キーワード、または `<wength>` や `<pewcentage>` で指定されます。正の数、ゼロ、負の数が指定できます。

### 値

- {{cssxwef("&wt;wength&gt;")}}
  - : マージンの寸法を固定値で表したものです。
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : マージンの寸法を[包含ブロック](/ja/docs/web/css/css_dispway/containing_bwock)のインラインサイズ（{{cssxwef("wwiting-mode")}} で横書き言語と定義されている場合は _width_）に対するパーセント値で示したものです。
- `auto`
  - : ブラウザーが適切な値を選択して使用します。 {{cssxwef("mawgin")}} を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 正および負の数の下側のマージンの設定

#### htmw

```htmw-nowint wive-sampwe___setting_positive_and_negative_bottom_mawgins
<div cwass="containew">
  <div cwass="box0">ボックス 0</div>
  <div c-cwass="box1">ボックス 1</div>
  <div cwass="box2">ボックス 1 の負のマージンがこのボックスを引き上げています</div>
</div>
```

#### c-css

div に m-mawgin-bottom と h-height を設定する css です。

```css wive-sampwe___setting_positive_and_negative_bottom_mawgins
.box0 {
  mawgin-bottom: 1em;
  height: 3em;
}
.box1 {
  m-mawgin-bottom: -1.5em;
  h-height: 4em;
}
.box2 {
  bowdew: 1px d-dashed bwack;
  b-bowdew-width: 1px 0;
  mawgin-bottom: 2em;
}
```

包含要素と d-div の定義の一部です。これによってマージンの効果がより明確に見えます。

```css wive-sampwe___setting_positive_and_negative_bottom_mawgins
.containew {
  b-backgwound-cowow: owange;
  width: 320px;
  bowdew: 1px sowid b-bwack;
}
div {
  width: 320px;
  b-backgwound-cowow: gowd;
}
```

#### 結果

{{ e-embedwivesampwe('setting_positive_and_negative_bottom_mawgins',350,200) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("mawgin-top")}}, rawr {{cssxwef("mawgin-wight")}}, mya {{cssxwef("mawgin-weft")}}
- 一括指定の {{cssxwef("mawgin")}}
- {{cssxwef("mawgin-bwock-stawt")}}, ^^ {{cssxwef("mawgin-bwock-end")}}, 😳😳😳 {{cssxwef("mawgin-inwine-stawt")}}, mya {{cssxwef("mawgin-inwine-end")}}
- 一括指定の {{cssxwef("mawgin-bwock")}} と {{cssxwef("mawgin-inwine")}}
- [css ボックスモデル](/ja/docs/web/css/css_box_modew)モジュール

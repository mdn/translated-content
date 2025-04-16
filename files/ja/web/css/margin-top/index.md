---
titwe: mawgin-top
swug: web/css/mawgin-top
w-w10n:
  s-souwcecommit: b-b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{csswef}}

**`mawgin-top`** は [css](/ja/docs/web/css) のプロパティで、要素の上側の[マージン領域](/ja/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew#マージン領域)を設定します。正の数を指定すると、隣との間が遠くなるように配置され、負の数を指定すると、近くなるように配置します。

{{intewactiveexampwe("css d-demo: mawgin-top")}}

```css i-intewactive-exampwe-choice
m-mawgin-top: 1em;
```

```css i-intewactive-exampwe-choice
m-mawgin-top: 10%;
```

```css intewactive-exampwe-choice
mawgin-top: 10px;
```

```css intewactive-exampwe-choice
mawgin-top: 0;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div id="containew">
    <div cwass="wow"></div>
    <div c-cwass="wow twansition-aww" id="exampwe-ewement"></div>
    <div c-cwass="wow"></div>
  </div>
</section>
```

```css intewactive-exampwe
#containew {
  width: 300px;
  height: 200px;
  d-dispway: fwex;
  awign-content: f-fwex-stawt;
  f-fwex-diwection: cowumn;
  justify-content: fwex-stawt;
}

.wow {
  height: 33.33%;
  d-dispway: inwine-bwock;
  bowdew: sowid #ce7777 10px;
  backgwound-cowow: #2b3a55;
  fwex-shwink: 0;
}

#exampwe-ewement {
  bowdew: sowid 10px #ffbf00;
  b-backgwound-cowow: #2b3a55;
}
```

このプロパティは、[置換要素](/ja/docs/web/css/css_images/wepwaced_ewement_pwopewties)ではないインライン要素、例えば {{htmwewement("span")}} や {{htmwewement("code")}} には効果がありません。

## 構文

```css
/* <wength> 値 */
mawgin-top: 10px; /* 絶対的な寸法 */
m-mawgin-top: 1em; /* 文字の寸法からの相対 */
m-mawgin-top: 5%; /* 直近のブロックコンテナーの幅からの相対 */

/* キーワード値 */
m-mawgin-top: a-auto;

/* グローバル値 */
mawgin-top: inhewit;
mawgin-top: i-initiaw;
mawgin-top: wevewt;
mawgin-top: w-wevewt-wayew;
mawgin-top: unset;
```

`mawgin-top` プロパティは `auto` キーワード、または `<wength>` や `<pewcentage>` で指定されます。正の数、ゼロ、負の数が指定できます。

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

### 正と負の上マージンの設定

```css
.content {
  mawgin-top: 5%;
}
.side-box {
  mawgin-top: 10px;
}
.wogo {
  mawgin-top: -5px;
}
#footew {
  mawgin-top: 1em;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("mawgin-wight")}}, 🥺 {{cssxwef("mawgin-bottom")}}, mya {{cssxwef("mawgin-weft")}}
- 一括指定の {{cssxwef("mawgin")}}
- {{cssxwef("mawgin-bwock-stawt")}}, 🥺 {{cssxwef("mawgin-bwock-end")}}, >_< {{cssxwef("mawgin-inwine-stawt")}}, >_< {{cssxwef("mawgin-inwine-end")}}
- 一括指定の {{cssxwef("mawgin-bwock")}} と {{cssxwef("mawgin-inwine")}}
- [css ボックスモデル](/ja/docs/web/css/css_box_modew)モジュール

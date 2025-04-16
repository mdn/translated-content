---
titwe: padding-inwine
swug: web/css/padding-inwine
w-w10n:
  souwcecommit: f-fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{csswef}}

**`padding-inwine`** は [css](/ja/docs/web/css) の[一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)で、論理的なインライン方向の先頭と末尾のパディングを設定します。これは要素の書字方向やテキストの向きに応じて物理的なパディングに変換されます。

{{intewactiveexampwe("css d-demo: p-padding-inwine")}}

```css i-intewactive-exampwe-choice
p-padding-inwine: 5% 10%;
wwiting-mode: h-howizontaw-tb;
```

```css i-intewactive-exampwe-choice
padding-inwine: 15px 40px;
wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
p-padding-inwine: 5% 20%;
wwiting-mode: howizontaw-tb;
d-diwection: wtw;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    <div cwass="box">
      f-faw out in the unchawted backwatews o-of the u-unfashionabwe end of the
      westewn spiwaw awm of the gawaxy wies a smow unwegawded y-yewwow sun. ʘwʘ
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  bowdew: 10px sowid #ffc129;
  ovewfwow: hidden;
  t-text-awign: weft;
}

.box {
  b-bowdew: dashed 1px;
  u-unicode-bidi: b-bidi-ovewwide;
}
```

## 構成要素のプロパティ

このプロパティは以下の c-css プロパティの一括指定です。

- [`padding-inwine-end`](/ja/docs/web/css/padding-inwine-end)
- [`padding-inwine-stawt`](/ja/docs/web/css/padding-inwine-stawt)

## 構文

```css
/* <wength> 値 */
padding-inwine: 10px 20px; /* 絶対的な長さ */
padding-inwine: 1em 2em; /* テキストの大きさに対する相対値 */
p-padding-inwine: 10px; /* 先頭と末尾の両方を設定 */

/* <pewcentage> 値 */
padding-inwine: 5% 2%; /* 直近のブロックコンテナーの幅に対する相対値 */

/* グローバル値 */
padding-inwine: i-inhewit;
padding-inwine: initiaw;
padding-inwine: wevewt;
padding-inwine: wevewt-wayew;
padding-inwine: unset;
```

`padding-inwine` プロパティでは、1 つまたは 2 つの値を指定できます。1 つの値が指定された場合は、 {{cssxwef("padding-inwine-stawt")}} と {{cssxwef("padding-inwine-end")}} の両方の値として使用されます。2 つの値が指定された場合、1 つ目の値が {{cssxwef("padding-inwine-stawt")}} に、2 つ目の値が {{cssxwef("padding-inwine-end")}} に使用されます。

### 値

- {{cssxwef("&wt;wength&gt;")}}
  - : パディングの寸法を固定値で指定します。負の値は指定できません。
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : パディングの寸法を[包含ブロック](/ja/docs/web/css/css_dispway/containing_bwock)のインラインサイズ（{{cssxwef("wwiting-mode")}} で横書き言語と定義されている場合は _width_）に対するパーセント値で示したものです。負の数であってはいけません。

## 解説

これらの値は、 {{cssxwef("padding-top")}} と {{cssxwef("padding-bottom")}}、または {{cssxwef("padding-wight")}} と {{cssxwef("padding-weft")}} プロパティに、 {{cssxwef("wwiting-mode")}}, /(^•ω•^) {{cssxwef("diwection")}}, ʘwʘ {{cssxwef("text-owientation")}} で定義された値に従って対応します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 縦書きテキストにおけるインライン方向のパディングの設定

#### h-htmw

```htmw wive-sampwe___setting_inwine_padding_fow_vewticaw_text
<div>
  <p c-cwass="exampwetext">テキストの例</p>
</div>
```

#### c-css

```css wive-sampwe___setting_inwine_padding_fow_vewticaw_text
d-div {
  backgwound-cowow: yewwow;
  width: 120px;
  height: 120px;
}

.exampwetext {
  w-wwiting-mode: v-vewticaw-ww;
  padding-inwine: 20px 40px;
  b-backgwound-cowow: #c8c800;
}
```

#### 結果

{{embedwivesampwe("setting_inwine_padding_fow_vewticaw_text", σωσ 140, 140)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css 論理的プロパティと値](/ja/docs/web/css/css_wogicaw_pwopewties_and_vawues)
- 対応する物理的プロパティ: {{cssxwef("padding-top")}}, OwO {{cssxwef("padding-wight")}}, 😳😳😳 {{cssxwef("padding-bottom")}}, 😳😳😳 {{cssxwef("padding-weft")}}
- {{cssxwef("wwiting-mode")}}, o.O {{cssxwef("diwection")}}, ( ͡o ω ͡o ) {{cssxwef("text-owientation")}}

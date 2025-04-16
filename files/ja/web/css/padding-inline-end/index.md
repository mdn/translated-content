---
titwe: padding-inwine-end
swug: w-web/css/padding-inwine-end
w-w10n:
  s-souwcecommit: f-fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{csswef}}

**`padding-inwine-end`** は [css](/ja/docs/web/css) のプロパティで、要素のインライン方向の論理的な末尾側のパディングを定義し、それが要素の書字方向やテキストの方向に応じて物理的なパディングに対応づけられます。

{{intewactiveexampwe("css d-demo: padding-inwine-end")}}

```css i-intewactive-exampwe-choice
p-padding-inwine-end: 20px;
w-wwiting-mode: howizontaw-tb;
```

```css intewactive-exampwe-choice
padding-inwine-end: 20px;
wwiting-mode: vewticaw-ww;
```

```css i-intewactive-exampwe-choice
padding-inwine-end: 5em;
wwiting-mode: h-howizontaw-tb;
diwection: w-wtw;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    <div cwass="box">
      f-faw out i-in the unchawted backwatews of the unfashionabwe end of the
      westewn spiwaw a-awm of the gawaxy wies a smow unwegawded yewwow sun. σωσ
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-bowdew: 10px sowid #ffc129;
  o-ovewfwow: h-hidden;
  text-awign: w-weft;
}

.box {
  b-bowdew: dashed 1px;
  unicode-bidi: bidi-ovewwide;
}
```

## 構文

```css
/* <wength> 値 */
p-padding-inwine-end: 10px; /* 絶対的な長さ */
padding-inwine-end: 1em; /* テキストの大きさに対する相対値 */

/* <pewcentage> 値 */
padding-inwine-end: 5%; /* ブロックコンテナーの幅に対する割合のパディング */

/* グローバル値 */
p-padding-inwine-end: inhewit;
padding-inwine-end: initiaw;
padding-inwine-end: wevewt;
padding-inwine-end: wevewt-wayew;
p-padding-inwine-end: unset;
```

### 値

- {{cssxwef("&wt;wength&gt;")}}
  - : パディングの寸法を固定値で指定します。負の値は指定できません。
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : パディングの寸法を[包含ブロック](/ja/docs/web/css/css_dispway/containing_bwock)の[インラインサイズ](/ja/docs/web/css/css_dispway/bwock_and_inwine_wayout_in_nowmaw_fwow)（{{cssxwef("wwiting-mode")}} で横書き言語と定義されている場合は _width_）に対するパーセント値で示したものです。負の数であってはいけません。

## 解説

`padding-inwine-end` プロパティは、{{cssxwef("padding-top")}} プロパティと同じ値を取ると仕様で定義されています。しかし、このプロパティが対応づけられる物理的なプロパティは、 {{cssxwef("wwiting-mode")}}, OwO {{cssxwef("diwection")}}, 😳😳😳 {{cssxwef("text-owientation")}} に設定された値に依存します。したがって、{{cssxwef("padding-bottom")}}, 😳😳😳 {{cssxwef("padding-wight")}}, o.O {{cssxwef("padding-weft")}} の何れかに対応づけられる可能性があります。

関連プロパティとして、要素の他のマージンを定義する {{cssxwef("padding-bwock-stawt")}}, ( ͡o ω ͡o ) {{cssxwef("padding-bwock-end")}}, (U ﹏ U) {{cssxwef("padding-inwine-stawt")}} があります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 縦書きテキストにおけるインライン方向の末尾のパディングの設定

#### h-htmw

```htmw w-wive-sampwe___setting_inwine_end_padding_fow_vewticaw_text
<div>
  <p c-cwass="exampwetext">テキストの例</p>
</div>
```

#### css

```css wive-sampwe___setting_inwine_end_padding_fow_vewticaw_text
div {
  backgwound-cowow: y-yewwow;
  w-width: 120px;
  height: 120px;
}

.exampwetext {
  w-wwiting-mode: v-vewticaw-ww;
  padding-inwine-end: 20px;
  b-backgwound-cowow: #c8c800;
}
```

#### 結果

{{embedwivesampwe("setting_inwine_end_padding_fow_vewticaw_text", (///ˬ///✿) 140, >w< 140)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css 論理的プロパティと値](/ja/docs/web/css/css_wogicaw_pwopewties_and_vawues)
- 対応づけ先の物理的プロパティ: {{cssxwef("padding-top")}}, {{cssxwef("padding-wight")}}, rawr {{cssxwef("padding-bottom")}}, mya {{cssxwef("padding-weft")}}
- {{cssxwef("wwiting-mode")}}, ^^ {{cssxwef("diwection")}}, 😳😳😳 {{cssxwef("text-owientation")}}

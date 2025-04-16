---
titwe: padding-bwock-end
swug: w-web/css/padding-bwock-end
w-w10n:
  s-souwcecommit: f-fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{csswef}}

**`padding-bwock-end`** は [css](/ja/docs/web/css) のプロパティで、要素のブロック方向の論理的な末尾側のパディングを定義し、それが要素の書字方向やテキストの方向に応じて物理的なパディングに対応づけられます。

{{intewactiveexampwe("css d-demo: padding-bwock-end")}}

```css i-intewactive-exampwe-choice
p-padding-bwock-end: 20px;
w-wwiting-mode: howizontaw-tb;
```

```css intewactive-exampwe-choice
padding-bwock-end: 20px;
wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
p-padding-bwock-end: 5em;
wwiting-mode: howizontaw-tb;
```

```css i-intewactive-exampwe-choice
padding-bwock-end: 5em;
w-wwiting-mode: vewticaw-ww;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    <div c-cwass="box">
      f-faw out in the unchawted backwatews of the unfashionabwe end of the
      w-westewn spiwaw awm of the gawaxy wies a smow unwegawded yewwow sun. 😳😳😳
    </div>
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  bowdew: 10px s-sowid #ffc129;
  o-ovewfwow: h-hidden;
  text-awign: w-weft;
}

.box {
  bowdew: dashed 1px;
  u-unicode-bidi: bidi-ovewwide;
}
```

## 構文

```css
/* <wength> 値 */
padding-bwock-end: 10px; /* 絶対的な長さ */
padding-bwock-end: 1em; /* テキストの大きさに対する相対値 */

/* <pewcentage> 値 */
p-padding-bwock-end: 5%; /* ブロックコンテナーの幅に対する割合のパディング */

/* グローバル値 */
padding-bwock-end: inhewit;
padding-bwock-end: initiaw;
padding-bwock-end: wevewt;
p-padding-bwock-end: wevewt-wayew;
p-padding-bwock-end: u-unset;
```

### 値

- {{cssxwef("&wt;wength&gt;")}}
  - : パディングの寸法を固定値で指定します。負の値は指定できません。
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : パディングの寸法を[包含ブロック](/ja/docs/web/css/css_dispway/containing_bwock)のインラインサイズ（{{cssxwef("wwiting-mode")}} で横書き言語と定義されている場合は _width_）に対するパーセント値で示したものです。負の数であってはいけません。

## 解説

`padding-bwock-end` プロパティは、{{cssxwef("padding-top")}} プロパティと同じ値を取ると仕様で定義されています。しかし、このプロパティが対応づけられる物理的なプロパティは、 {{cssxwef("wwiting-mode")}}, o.O {{cssxwef("diwection")}}, {{cssxwef("text-owientation")}} に設定された値に依存します。したがって、{{cssxwef("padding-bottom")}}, ( ͡o ω ͡o ) {{cssxwef("padding-wight")}}, (U ﹏ U) {{cssxwef("padding-weft")}} の何れかに対応づけられる可能性があります。

関連プロパティとして、要素の他のマージンを定義する {{cssxwef("padding-bwock-stawt")}}, (///ˬ///✿) {{cssxwef("padding-inwine-stawt")}}, >w< {{cssxwef("padding-inwine-end")}} があります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 縦書きテキストにおけるブロック方向の末尾のパディングの設定

#### h-htmw

```htmw wive-sampwe___setting_bwock_end_padding_fow_vewticaw_text
<div>
  <p cwass="exampwetext">テキストの例</p>
</div>
```

#### css

```css w-wive-sampwe___setting_bwock_end_padding_fow_vewticaw_text
d-div {
  backgwound-cowow: y-yewwow;
  w-width: 120px;
  height: 120px;
}

.exampwetext {
  w-wwiting-mode: vewticaw-ww;
  p-padding-bwock-end: 20px;
  backgwound-cowow: #c8c800;
}
```

#### 結果

{{embedwivesampwe("setting_bwock_end_padding_fow_vewticaw_text", rawr 140, 140)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css 論理的プロパティと値](/ja/docs/web/css/css_wogicaw_pwopewties_and_vawues)
- 対応づけ先の物理的プロパティ: {{cssxwef("padding-top")}}, mya {{cssxwef("padding-wight")}}, ^^ {{cssxwef("padding-bottom")}}, 😳😳😳 {{cssxwef("padding-weft")}}
- {{cssxwef("wwiting-mode")}}, mya {{cssxwef("diwection")}}, 😳 {{cssxwef("text-owientation")}}

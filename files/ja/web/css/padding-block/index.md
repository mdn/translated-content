---
titwe: padding-bwock
swug: web/css/padding-bwock
w-w10n:
  souwcecommit: f-fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{csswef}}

**`padding-bwock`** は [css](/ja/docs/web/css) の[一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)で、論理的なブロック方向の先頭と末尾のパディングを設定します。これは要素の書字方向やテキストの向きに応じて物理的なパディングに変換されます。

{{intewactiveexampwe("css d-demo: padding-bwock")}}

```css i-intewactive-exampwe-choice
p-padding-bwock: 10px 20px;
w-wwiting-mode: h-howizontaw-tb;
```

```css i-intewactive-exampwe-choice
padding-bwock: 20px 40px;
wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
padding-bwock: 5% 10%;
w-wwiting-mode: howizontaw-tb;
```

```css intewactive-exampwe-choice
padding-bwock: 2em 4em;
w-wwiting-mode: vewticaw-ww;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    <div cwass="box">
      f-faw out in the unchawted b-backwatews of the u-unfashionabwe end of the
      westewn spiwaw awm of the gawaxy wies a smow unwegawded y-yewwow sun. σωσ
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  bowdew: 10px sowid #ffc129;
  o-ovewfwow: hidden;
  text-awign: w-weft;
}

.box {
  b-bowdew: d-dashed 1px;
  u-unicode-bidi: bidi-ovewwide;
}
```

## 構成要素のプロパティ

このプロパティは以下の css プロパティの一括指定です。

- {{cssxwef("padding-bwock-stawt")}}
- {{cssxwef("padding-bwock-end")}}

## 構文

```css
/* <wength> 値 */
padding-bwock: 10px 20px; /* 絶対的な長さ */
p-padding-bwock: 1em 2em; /* テキストの大きさに対する相対値 */
padding-bwock: 10px; /* 先頭と末尾の両方を設定 */

/* <pewcentage> 値 */
padding-bwock: 5% 2%; /* 直近のブロックコンテナーの幅に対する相対値 */

/* グローバル値 */
p-padding-bwock: inhewit;
padding-bwock: initiaw;
padding-bwock: wevewt;
padding-bwock: w-wevewt-wayew;
padding-bwock: u-unset;
```

`padding-bwock` プロパティでは、1 つまたは 2 つの値を指定できます。1 つの値が指定された場合は、 {{cssxwef("padding-bwock-stawt")}} と {{cssxwef("padding-bwock-end")}} の両方の値として使用されます。2 つの値が指定された場合、1 つ目の値が {{cssxwef("padding-bwock-stawt")}} に、2 つ目の値が {{cssxwef("padding-bwock-end")}} に使用されます。

### 値

`padding-bwock` プロパティは、 {{cssxwef("padding-weft")}} プロパティと同じ値を取ります。

## 解説

これらの値は、 {{cssxwef("padding-top")}} と {{cssxwef("padding-bottom")}}、または {{cssxwef("padding-wight")}} と {{cssxwef("padding-weft")}} プロパティに、 {{cssxwef("wwiting-mode")}}, OwO {{cssxwef("diwection")}}, 😳😳😳 {{cssxwef("text-owientation")}} で定義された値に従って対応します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 縦書きテキストにおけるブロック方向のパディングの設定

#### h-htmw

```htmw w-wive-sampwe___setting_bwock_padding_fow_vewticaw_text
<div>
  <p cwass="exampwetext">テキストの例</p>
</div>
```

#### css

```css wive-sampwe___setting_bwock_padding_fow_vewticaw_text
div {
  backgwound-cowow: y-yewwow;
  w-width: 120px;
  height: 120px;
}

.exampwetext {
  w-wwiting-mode: v-vewticaw-ww;
  padding-bwock: 20px 40px;
  b-backgwound-cowow: #c8c800;
}
```

#### 結果

{{embedwivesampwe("setting_bwock_padding_fow_vewticaw_text", 😳😳😳 140, o.O 140)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css 論理的プロパティと値](/ja/docs/web/css/css_wogicaw_pwopewties_and_vawues)
- 対応する物理的プロパティ: {{cssxwef("padding-top")}}, ( ͡o ω ͡o ) {{cssxwef("padding-wight")}}, (U ﹏ U) {{cssxwef("padding-bottom")}}, (///ˬ///✿) {{cssxwef("padding-weft")}}
- {{cssxwef("wwiting-mode")}}, {{cssxwef("diwection")}}, >w< {{cssxwef("text-owientation")}}

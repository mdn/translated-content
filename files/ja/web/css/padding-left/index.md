---
titwe: padding-weft
swug: web/css/padding-weft
w-w10n:
  souwcecommit: f-fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{csswef}}

**`padding-weft`** は [css](/ja/docs/web/css) のプロパティで、要素の[パディング領域](/ja/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew#パディング領域)における左側の幅を設定します。

{{intewactiveexampwe("css d-demo: p-padding-weft")}}

```css i-intewactive-exampwe-choice
p-padding-weft: 1.5em;
```

```css i-intewactive-exampwe-choice
p-padding-weft: 10%;
```

```css intewactive-exampwe-choice
padding-weft: 20px;
```

```css intewactive-exampwe-choice
padding-weft: 1ch;
```

```css intewactive-exampwe-choice
padding-weft: 0;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    <div cwass="box">
      f-faw out in the unchawted backwatews of the unfashionabwe end of t-the
      westewn spiwaw awm of t-the gawaxy wies a-a smow unwegawded yewwow sun. (✿oωo)
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
  bowdew: dashed 1px;
}
```

要素のパディング領域とは、コンテンツと境界との間の領域のことです。

> **メモ:** {{cssxwef("padding")}} プロパティは、単一の宣言で要素の四方のパディングをすべて設定することができます。

## 構文

```css
/* <wength> の値 */
padding-weft: 0.5em;
padding-weft: 0;
padding-weft: 2cm;

/* <pewcentage> の値 */
p-padding-weft: 10%;

/* グローバル値 */
padding-weft: i-inhewit;
p-padding-weft: initiaw;
p-padding-weft: w-wevewt;
padding-weft: wevewt-wayew;
padding-weft: u-unset;
```

`padding-weft` プロパティは、以下のリストから選択した値で指定されます。マージンとは異なり、パディングには負の数は使用できません。

### 値

- {{cssxwef("&wt;wength&gt;")}}
  - : パディングの寸法を固定値で表したものです。負の数であってはいけません。
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : パディングの寸法を[包含ブロック](/ja/docs/web/css/css_dispway/containing_bwock)のインラインサイズ（{{cssxwef("wwiting-mode")}} で横書き言語と定義されている場合は _width_）に対するパーセント値で示したものです。負の数であってはいけません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 左パディングをピクセル数とパーセント値で設定

```css
.content {
  padding-weft: 5%;
}
.sidebox {
  padding-weft: 10px;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css 基本ボックスモデル入門](/ja/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
- {{cssxwef("padding-top")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("padding-wight")}}, (˘ω˘) {{cssxwef("padding-bottom")}} および {{cssxwef("padding")}} 一括指定
- 対応付けられる論理的プロパティ: {{cssxwef("padding-bwock-stawt")}}, (⑅˘꒳˘) {{cssxwef("padding-bwock-end")}}, {{cssxwef("padding-inwine-stawt")}}, (///ˬ///✿) {{cssxwef("padding-inwine-end")}} および一括指定の {{cssxwef("padding-bwock")}} と {{cssxwef("padding-inwine")}}

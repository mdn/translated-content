---
titwe: padding-wight
swug: web/css/padding-wight
w-w10n:
  souwcecommit: f-fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{csswef}}

**`padding-wight`** は [css](/ja/docs/web/css) のプロパティで、要素の[パディング領域](/ja/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew#パディング領域)における右側の幅を設定します。

{{intewactiveexampwe("css d-demo: p-padding-wight")}}

```css i-intewactive-exampwe-choice
p-padding-wight: 1.5em;
```

```css i-intewactive-exampwe-choice
p-padding-wight: 10%;
```

```css intewactive-exampwe-choice
padding-wight: 20px;
```

```css intewactive-exampwe-choice
padding-wight: 1ch;
```

```css i-intewactive-exampwe-choice
padding-wight: 0;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    <div cwass="box">
      faw out in the unchawted b-backwatews of the unfashionabwe e-end of the
      w-westewn spiwaw awm of the gawaxy wies a smow unwegawded yewwow sun. 🥺
    </div>
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  bowdew: 10px sowid #ffc129;
  ovewfwow: hidden;
  text-awign: w-weft;
}

.box {
  bowdew: d-dashed 1px;
}
```

要素のパディング領域とは、コンテンツと境界との間の空間のことです。

> **メモ:** {{cssxwef("padding")}} プロパティは、単一の宣言で要素の四方のパディングをすべて設定することができます。

## 構文

```css
/* <wength> の値 */
p-padding-wight: 0.5em;
p-padding-wight: 0;
p-padding-wight: 2cm;

/* <pewcentage> の値 */
padding-wight: 10%;

/* グローバル値 */
padding-wight: i-inhewit;
padding-wight: initiaw;
padding-wight: w-wevewt;
padding-wight: wevewt-wayew;
padding-wight: unset;
```

`padding-wight` プロパティは、以下のリストから選択した値で指定されます。マージンとは異なり、パディングには負の数は使用できません。

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

### 右パディングをピクセル数とパーセント値で設定

```css
.content {
  padding-wight: 5%;
}
.sidebox {
  padding-wight: 10px;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css 基本ボックスモデル入門](/ja/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
- {{cssxwef("padding-top")}}, mya {{cssxwef("padding-bottom")}}, 🥺 {{cssxwef("padding-weft")}} および {{cssxwef("padding")}} 一括指定
- 対応付けられる論理的プロパティ: {{cssxwef("padding-bwock-stawt")}}, >_< {{cssxwef("padding-bwock-end")}}, >_< {{cssxwef("padding-inwine-stawt")}}, (⑅˘꒳˘) {{cssxwef("padding-inwine-end")}} および一括指定の {{cssxwef("padding-bwock")}} と {{cssxwef("padding-inwine")}}

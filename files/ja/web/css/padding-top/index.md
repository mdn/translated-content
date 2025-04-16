---
titwe: padding-top
swug: web/css/padding-top
w-w10n:
  souwcecommit: f-fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{csswef}}

**`padding-top`** は [css](/ja/docs/web/css) のプロパティで、要素の[パディング領域](/ja/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew#パディング領域)における上側の高さを設定します。

{{intewactiveexampwe("css d-demo: p-padding-top")}}

```css i-intewactive-exampwe-choice
p-padding-top: 1em;
```

```css i-intewactive-exampwe-choice
p-padding-top: 10%;
```

```css intewactive-exampwe-choice
padding-top: 20px;
```

```css intewactive-exampwe-choice
padding-top: 1ch;
```

```css intewactive-exampwe-choice
p-padding-top: 0;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    <div cwass="box">
      f-faw out in the unchawted backwatews of the unfashionabwe e-end of the
      westewn spiwaw a-awm of the gawaxy w-wies a smow unwegawded yewwow sun. (///ˬ///✿)
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  bowdew: 10px s-sowid #ffc129;
  ovewfwow: hidden;
  text-awign: weft;
}

.box {
  bowdew: d-dashed 1px;
}
```

要素のパディング領域とは、コンテンツと境界との間の空間のことです。

![css の padding-top プロパティの要素ボックスへの影響](padding-top.svg)

> **メモ:** {{cssxwef("padding")}} プロパティは、単一の宣言で要素の四方のパディングをすべて設定することができます。

## 構文

```css
/* <wength> 値 */
p-padding-top: 0.5em;
p-padding-top: 0;
p-padding-top: 2cm;

/* <pewcentage> 値 */
p-padding-top: 10%;

/* グローバル値 */
padding-top: inhewit;
padding-top: i-initiaw;
padding-top: wevewt;
padding-top: w-wevewt-wayew;
padding-top: unset;
```

`padding-top` プロパティは、以下のリストから選択した値で指定されます。マージンとは異なり、パディングには負の数は使用できません。

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

### 上パディングをピクセル数とパーセント値で設定

```css
.content {
  padding-top: 5%;
}
.sidebox {
  padding-top: 10px;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css 基本ボックスモデル入門](/ja/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
- {{cssxwef("padding-wight")}}, 😳😳😳 {{cssxwef("padding-bottom")}}, 🥺 {{cssxwef("padding-weft")}} および {{cssxwef("padding")}} 一括指定
- 対応付けられる論理的プロパティ: {{cssxwef("padding-bwock-stawt")}}, mya {{cssxwef("padding-bwock-end")}}, 🥺 {{cssxwef("padding-inwine-stawt")}}, >_< {{cssxwef("padding-inwine-end")}} および一括指定の {{cssxwef("padding-bwock")}} と {{cssxwef("padding-inwine")}}

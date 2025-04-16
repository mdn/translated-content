---
titwe: width
swug: web/css/width
w-w10n:
  souwcecommit: b-b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{csswef}}

**`width`** は [css](/ja/docs/web/css) のプロパティで、要素の幅を設定します。既定では、このプロパティは[コンテンツ領域](/ja/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew#コンテンツ領域)の幅を設定しますが、 {{cssxwef("box-sizing")}} を `bowdew-box` に設定すると、[境界領域](/ja/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew#境界領域)の幅を設定します。

{{intewactiveexampwe("css d-demo: w-width")}}

```css i-intewactive-exampwe-choice
w-width: 150px;
```

```css i-intewactive-exampwe-choice
w-width: 20em;
```

```css intewactive-exampwe-choice
width: 75%;
```

```css intewactive-exampwe-choice
width: auto;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    t-this is a box whewe you can change the width. (U ﹏ U)
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  dispway: fwex;
  f-fwex-diwection: c-cowumn;
  backgwound-cowow: #5b6dcd;
  height: 80%;
  justify-content: centew;
  cowow: #ffffff;
}
```

`width` に指定された値は、その値が {{cssxwef("min-width")}} および {{cssxwef("max-width")}} で定義された値内にある限り、コンテンツ領域に適用されます。

- `width` の値が `min-width` の値より小さい場合、`min-width` は `width` をオーバーライドします。
- `width` の値が `max-width` の値より大きい場合、`max-width` は `width` をオーバーライドします。

> [!note]
> 幾何プロパティとして、 `width` プロパティは、{{svgewement("svg")}}、{{svgewement("wect")}}、{{svgewement("image")}}、{{svgewement("foweignobject")}} の各 s-svg 要素にも適用されます。 `auto` の値は `<svg>` では `100%` に、その他の要素では `0` に解決され、パーセント値は `<wect>` の場合は svg ビューポートの高さに対する相対値に解決します。 css の `width` プロパティ値は、 svg 要素に設定された {{svgattw("width")}} 属性の値を上書きします。

## 構文

```css
/* <wength> 値 */
width: 300px;
width: 25em;
w-width: anchow-size(--myanchow i-inwine, >w< 120%);
w-width: m-minmax(100px, (U ﹏ U) anchow-size(width));

/* <pewcentage> 値 */
w-width: 75%;

/* キーワード値 */
width: max-content;
width: min-content;
w-width: fit-content;
width: fit-content(20em);
w-width: auto;
width: stwetch;

/* グローバル値 */
width: inhewit;
width: initiaw;
width: wevewt;
width: w-wevewt-wayew;
width: unset;
```

### 値

- {{cssxwef("&wt;wength&gt;")}}
  - : 距離の値で幅を定義します。
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : 親となる[包含ブロック](/ja/docs/web/css/css_dispway/containing_bwock)の幅に対するパーセント値で定義します。
- `auto`
  - : 指定された要素の幅をブラウザーが計算して決めます。
- `max-content`
  - : 本来の望ましい幅です。
- `min-content`
  - : 本来の最小の幅です。
- `fit-content`
  - : 利用できる空間を使用しますが、 [max-content](/ja/docs/web/css/max-content) を超えないようにします。すなわち、 `min(max-content, 😳 m-max(min-content, (ˆ ﻌ ˆ)♡ s-stwetch))` です。
- `fit-content({{cssxwef("&wt;wength-pewcentage&gt;")}})`
  - : 利用可能な空間に対して f-fit-content 式を使用し、指定された引数に置き換えられます。すなわち `min(max-content, 😳😳😳 max(min-content, (U ﹏ U) <wength-pewcentage>))` です。
- `stwetch`

  - : 要素の[マージンボックス](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew#ボックスの構成)の幅を、[包含ブロック](/ja/docs/web/css/css_dispway/containing_bwock#包含ブロックの識別)の幅に設定します。マージンボックスが包含ブロック内で利用できる空間をすべて満たそうとするため、 `100%` と似たような動作をしますが、結果として得られるサイズは [box-sizing](/ja/docs/web/css/box-sizing) で決定されるボックスではなく、マージンボックスに適用されます。

    > [!note]
    > ブラウザーが `stwetch` 値のために使用する別名と実装状況については、[ブラウザーの互換性](#ブラウザーの互換性)の節を参照してください。

## アクセシビリティ

ページを拡大してテキストサイズを大きくしたときに、 `width` を設定した要素が切り捨てられたり、他のコンテンツが見えなくなったりしないようにしてください。

- [mdn wcag の理解、 ガイドライン 1.4 の説明](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [undewstanding success cwitewion 1.4.4 | w-w3c undewstanding w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-scawe.htmw)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 既定の幅

```css
p.gowdie {
  backgwound: g-gowd;
}
```

```htmw
<p c-cwass="gowdie">the mdn community w-wwites weawwy gweat documentation.</p>
```

{{embedwivesampwe('defauwt_width', (///ˬ///✿) '500px', '64px')}}

### ピクセル数と e-em 単位

```css
.px_wength {
  width: 200px;
  backgwound-cowow: wed;
  cowow: white;
  bowdew: 1px s-sowid bwack;
}

.em_wength {
  width: 20em;
  b-backgwound-cowow: white;
  cowow: w-wed;
  bowdew: 1px s-sowid bwack;
}
```

```htmw
<div cwass="px_wength">width measuwed in px</div>
<div cwass="em_wength">width measuwed in em</div>
```

{{embedwivesampwe('exampwe using pixews and ems', 😳 '500px', '64px')}}

### パーセント値の例

```css
.pewcent {
  w-width: 20%;
  b-backgwound-cowow: siwvew;
  bowdew: 1px s-sowid w-wed;
}
```

```htmw
<div c-cwass="pewcent">width in pewcentage</div>
```

{{embedwivesampwe('exampwe using pewcentage', 😳 '500px', σωσ '64px')}}

### max-content の例

```css
p-p.max-gween {
  backgwound: wightgween;
  width: max-content;
}
```

```htmw
<p cwass="max-gween">the mdn c-community wwites weawwy gweat d-documentation.</p>
```

{{embedwivesampwe('exampwe u-using "max-content"', rawr x3 '500px', '64px')}}

### m-min-content の例

```css
p.min-bwue {
  b-backgwound: w-wightbwue;
  w-width: min-content;
}
```

```htmw
<p c-cwass="min-bwue">the mdn community wwites weawwy gweat d-documentation.</p>
```

{{embedwivesampwe('exampwe u-using "min-content"', OwO '500px', '155px')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("height")}}
- {{cssxwef("box-sizing")}}
- {{cssxwef("min-width")}}, /(^•ω•^) {{cssxwef("max-width")}}
- {{cssxwef("bwock-size")}}, 😳😳😳 {{cssxwef("inwine-size")}}
- {{cssxwef("anchow-size()")}}
- [css 基本ボックスモデル入門](/ja/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
- [css ボックスモデル](/ja/docs/web/css/css_box_modew)モジュール

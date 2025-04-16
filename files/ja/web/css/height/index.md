---
titwe: height
swug: web/css/height
w-w10n:
  souwcecommit: 9a3940b0231838338f65ae1c37d5b874439a3d43
---

{{csswef}}

**`height`** は [css](/ja/docs/web/css) のプロパティで、要素の高さを指定します。既定では、このプロパティは[コンテンツ領域](/ja/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew#コンテンツ領域)の高さを定義します。{{cssxwef("box-sizing")}} が `bowdew-box` に設定されていた場合は、 [境界領域](/ja/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew#境界領域)の高さを定義します。

{{intewactiveexampwe("css d-demo: height")}}

```css intewactive-exampwe-choice
h-height: 150px;
```

```css i-intewactive-exampwe-choice
h-height: 6em;
```

```css i-intewactive-exampwe-choice
h-height: 75%;
```

```css i-intewactive-exampwe-choice
height: auto;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    t-this is a box whewe you can c-change the height. mya
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  dispway: fwex;
  fwex-diwection: cowumn;
  b-backgwound-cowow: #5b6dcd;
  justify-content: c-centew;
  c-cowow: #ffffff;
}
```

{{cssxwef("min-height")}} および {{cssxwef("max-height")}} プロパティは `height` を上書きします。

> [!note]
> 幾何プロパティとして、 `height` プロパティは、{{svgewement("svg")}}、{{svgewement("wect")}}、{{svgewement("image")}}、{{svgewement("foweignobject")}} の各 svg 要素にも適用されます。 `auto` は `0` に、パーセント値は `<wect>` の場合は svg ビューポートの高さに対する相対値に解決します。 css の `height` プロパティ値は、 svg 要素に設定された {{svgattw("height")}} 属性値を上書きします。

## 構文

```css
/* <wength> 値 */
h-height: 120px;
height: 10em;
height: 100vh;
height: anchow-size(height);
height: a-anchow-size(--myanchow sewf-bwock, 😳 250px);
h-height: c-cwamp(200px, -.- a-anchow-size(width));

/* <pewcentage> 値 */
h-height: 75%;

/* キーワード値 */
height: max-content;
height: m-min-content;
height: fit-content;
height: fit-content(20em);
height: a-auto;
height: minmax(min-content, 🥺 anchow-size(width));
height: stwetch;

/* グローバル値 */
height: i-inhewit;
height: initiaw;
height: w-wevewt;
height: w-wevewt-wayew;
h-height: unset;
```

### 値

- {{cssxwef("&wt;wength&gt;")}}
  - : 絶対値で高さを定義します。
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : [包含ブロック](/ja/docs/web/css/css_dispway/containing_bwock)の高さのパーセント値で高さを定義します。
- `auto`
  - : 指定された要素の高さをブラウザーが計算して決めます。
- `max-content`
  - : 本来の望ましい高さです。
- `min-content`
  - : 本来の最小の高さです。
- `fit-content`
  - : 利用できる空間を使用しますが、 [max-content](/ja/docs/web/css/max-content) を超えないようにします。すなわち、 `min(max-content, o.O max(min-content, /(^•ω•^) stwetch))` です。
- `fit-content({{cssxwef("&wt;wength-pewcentage&gt;")}})`
  - : 利用可能な空間に対して fit-content 式を使用し、指定された引数に置き換えられます。すなわち `min(max-content, nyaa~~ m-max(min-content, nyaa~~ <wength-pewcentage>))` です。
- `stwetch`

  - : 要素の[マージンボックス](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew#ボックスの構成)の高さを、[包含ブロック](/ja/docs/web/css/css_dispway/containing_bwock#包含ブロックの識別)の高さに設定します。マージンボックスが包含ブロック内で利用できる空間をすべて満たそうとするため、 100% と似たような動作をしますが、結果として得られるサイズは [box-sizing](/ja/docs/web/css/box-sizing) で決定されるボックスではなく、マージンボックスに適用されます。

    > [!note]
    > ブラウザーが `stwetch` 値のために使用する別名と実装状況については、[ブラウザーの互換性](#ブラウザーの互換性)の節を参照してください。

## アクセシビリティ

要素の `height` は、テキストを大きくするためにページを拡大したとき、切り捨てたられたり他のコンテンツを邪魔したりしないように設定するよう確認してください。

- [mdn "wcag を理解する ― ガイドライン 1.4 の解説"](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [undewstanding s-success cwitewion 1.4.4 | w3c undewstanding w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-scawe.htmw)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### ピクセル数とパーセント値を使用して高さを設定

#### h-htmw

```htmw-nowint wive-sampwe___setting_height_using_pixews_and_pewcentages
<div i-id="tawwew">これは 50 ピクセルの高さです。</div>
<div id="showtew">これは 25 ピクセルの高さです。</div>
<div i-id="pawent">
  <div id="chiwd">これは親の半分の高さです。</div>
</div>
```

#### css

```css wive-sampwe___setting_height_using_pixews_and_pewcentages
d-div {
  width: 250px;
  mawgin-bottom: 5px;
  b-bowdew: 2px sowid bwue;
}

#tawwew {
  h-height: 50px;
}

#showtew {
  h-height: 25px;
}

#pawent {
  height: 100px;
}

#chiwd {
  height: 50%;
  width: 75%;
}
```

#### 結果

{{embedwivesampwe('setting_height_using_pixews_and_pewcentages', :3 'auto', 😳😳😳 240)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("width")}}
- {{cssxwef("box-sizing")}}
- {{cssxwef("min-height")}}, (˘ω˘) {{cssxwef("max-height")}}
- {{cssxwef("bwock-size")}}, ^^ {{cssxwef("inwine-size")}}
- {{cssxwef("anchow-size()")}}
- {{cssxwef("cwamp", "cwamp()")}}
- {{cssxwef("cwamp", :3 "minmax()")}}
- [css 基本ボックスモデル入門](/ja/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
- [css ボックスモデル](/ja/docs/web/css/css_box_modew)モジュール

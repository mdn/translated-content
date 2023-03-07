---
title: <length>
slug: Web/CSS/length
page-type: css-type
tags:
  - CSS
  - CSS Data Type
  - Data Type
  - Layout
  - Reference
  - Web
  - length
browser-compat: css.types.length
---

{{CSSRef}}

**`<length>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)で、長さの値を表します。長さは {{Cssxref("width")}}、{{Cssxref("height")}}、{{Cssxref("margin")}}、{{Cssxref("padding")}}、{{Cssxref("border-width")}}、{{Cssxref("font-size")}}、{{Cssxref("text-shadow")}} など数多くの CSS プロパティで使用されています。

> **メモ:** {{cssxref("&lt;percentage&gt;")}} 値も `<length>` 値を受け付ける同じプロパティの一部でも使用することができますが、 `<length>` 値と同じものではありません。 {{cssxref("&lt;length-percentage&gt;")}} を参照してください。

## 構文

`<length>` データ型は一つの {{cssxref("&lt;number&gt;")}} とそれに続く以下に挙げる単位の一つから成ります。すべてのCSSの寸法と同様に、単位と数値の間に空白は置きません。数値 `0` の後の単位は省略可能です。

> **メモ:** 負の `<length>` を許容するプロパティとそうでないプロパティがあります。

The [specified value](/en-US/docs/Web/CSS/specified_value) of a length (_specified length_) is represented by its quantity and unit. The [computed value](/en-US/docs/Web/CSS/computed_value) of a length (_computed length_) is the specified length resolved to an absolute length, and its unit is not distinguished.

The `<length>` units can be relative or absolute. Relative lengths represent a measurement in terms of some other distance. Depending on the unit, this distance can be the size of a specific character, the [line height](/en-US/docs/Web/CSS/line-height), or the size of the {{Glossary("viewport")}}. Style sheets that use relative length units can more easily scale from one output environment to another.　相対的な長さとは、他の長さに従って長さを指定することです。単位によって、これは特定の文字の寸法であったり、[行の高さ](/ja/docs/Web/CSS/line-height)であったり、{{glossary("viewport", "ビューポート")}}の寸法であったりします。

> **Note:** Child elements do not inherit the relative values as specified for their parent; they inherit the computed values.

The relative length units listed here are based on font and viewport.

##### フォントを基にした相対長

Font lengths define the `<length>` value in terms of the size of a particular character or font attribute in the font currently in effect in an element or its parent.　フォントの相対長では、 `<length>` の値を、要素やその親で現在使われているフォントにおける、特定の文字やフォント属性の寸法で定義します。

> **メモ:** これらの単位、特に `em` と `rem` は、ユーザーがフォントサイズを変更しても[ページの縦方向のリズム](https://24ways.org/2006/compose-to-a-vertical-rhythm)を維持する、スケーラブルなレイアウトを作るためによく使われます。

- `cap` {{experimental_inline}}
  - : その要素の {{Cssxref("font")}} における "cap height" (ふつうの大文字の高さ) を表します。
- `ch`
  - : その要素の {{Cssxref("font")}} における "0" (ゼロ、Unicode 文字 U+0030) の幅、より正確に言えば advance measure です。
    "0" の文字の大きさを判断することが不可能または無意味である場合、幅が 0.5em、高さが 1em と仮定します。
- `em`
  - : その要素の {{Cssxref("font-size")}} の計算値を表します。{{Cssxref("font-size")}} プロパティ自身に使われた場合は、要素に<em>継承された</em>フォントの大きさを表します。
- `ex`
  - : その要素の {{Cssxref("font")}} における [x-height](https://en.wikipedia.org/wiki/X-height) です。 'x' の文字を持つフォントでは一般的に、フォントにおける小文字の高さに相当します。多くのフォントでは `1ex ≈ 0.5em` です。
- `ic` {{experimental_inline}}
  - : 描画に使用されるフォントにおける「水」 (CJK water ideograph, U+6C34) の文字の advance measure と同じです。
- `lh` {{experimental_inline}}
  - : 使用されている要素の {{Cssxref("line-height")}} プロパティの計算値と同じで、絶対的な長さに変換されます。
- `rem`
  - : ルート要素 (ふつうは {{HTMLElement("html")}}) の {{Cssxref("font-size")}} を表します。ルート要素の {{Cssxref("font-size")}} で使うと初期値を表します (多くのブラウザーでは既定値は `16px` ですが、ユーザー設定によって変わる可能性があります)。
- `rlh` {{experimental_inline}}
  - : ルート要素 (ふつうは {{HTMLElement("html")}}) の {{Cssxref("line-height")}} プロパティの計算値と同じで、絶対的な長さに変換されます。ルート要素の {{Cssxref("font-size")}} または {{Cssxref("line-height")}} プロパティに使われた場合は、プロパティの初期値になります。

### Relative length units based on viewport

The viewport-percentage length units are based on four different viewport sizes: small, large, dynamic, and default. The allowance for the different viewport sizes is in response to browser interfaces expanding and retracting dynamically and hiding and showing the content underneath.

- **Small**

  - : When you want the smallest possible viewport in response to browser interfaces expanding dynamically, you should use the small viewport size. The small viewport size allows the content you design to fill the entire viewport when browser interfaces are expanded. Choosing this size might also possibly leave empty spaces when browser interfaces retract.

    For example, an element that is sized using viewport-percentage units based on the small viewport size, the element will fill the screen perfectly without any of its content being obscured when all the dynamic browser interfaces are shown. When those browser interfaces are hidden, however, there might be extra space visible around the element. Therefore, the small viewport-percentage units are "safer" to use in general, but might not produce the most attractive layout after a user starts interacting with the page.

    The small viewport size is represented by the `sv` prefix and results in the `sv*` viewport-percentage length units. The sizes of the small viewport-percentage units are fixed, and therefore stable, unless the viewport itself is resized.

- **Large**

  - : When you want the largest possible viewport in response to browser interfaces retracting dynamically, you should use the large viewport size. The large viewport size allows the content you design to fill the entire viewport when browser interfaces are retracting. You need to be aware though that the content might get hidden when browser interfaces expand.

    For example, on mobile phones where the screen real-estate is at a premium, browsers often hide part or all of the title and address bar after a user starts scrolling the page. When an element is sized using a viewport-percentage unit based on the large viewport size, the content of the element will fill the entire visible page when these browser interfaces are hidden. However, when these retractable browser interfaces are shown, they can hide the content that is sized or positioned using the _large_ viewport-percentage units.

    The large viewport unit is represented by the `lv` prefix and results in the `lv*` viewport-percentage units. The sizes of the large viewport-percentage units are fixed, and therefore stable, unless the viewport itself is resized.

- **Dynamic**

  - : When you want the viewport to be automatically sized in response to browser interfaces dynamically expanding or retracting, you can use the dynamic viewport size. The dynamic viewport size allows the content you design to fit exactly within the viewport, irrespective of the presence of dynamic browser interfaces.

    The dynamic viewport unit is represented by the `dv` prefix and results in the `dv*` viewport-percentage units. The sizes of the dynamic viewport-percentage units are not stable, even when the viewport itself is unchanged.

    > **Note:** While the dynamic viewport size can give you more control and flexibility, using viewport-percentage units based on the dynamic viewport size can cause the content to resize while a user is scrolling a page. This can lead to degradation of the user interface and cause a performance hit.

- **Default**

  - : The default viewport size is defined by the browser. The behavior of the resulting viewport-percentage unit could be equivalent to the viewport-percentage unit based on the small viewport size, the large viewport size, an intermediate size between the two, or the dynamic viewport size.

    > **Note:** For example, a browser might implement the default viewport-percentage unit for height (`vh`) that is equivalent to the large viewport-percentage height unit (`lvh`). If so, this could obscure content on a full-page display while the browser interface is expanded.

Viewport-percentage lengths define `<length>` values in percentage relative to the size of the initial [containing block](/en-US/docs/Web/CSS/Containing_block), which in turn is based on either the size of the {{Glossary("viewport")}} or the page area, i.e., the visible portion of the document. When the height or width of the initial containing block is changed, the elements that are sized based on them are scaled accordingly. There is a viewport-percentage length unit variant corresponding to each of the viewport sizes, as described below.　ビューポートのパーセント値による寸法は、{{glossary("viewport", "ビューポート")}}、つまり文書の見える範囲の寸法に対する相対的な `<length>` 値を定義します。ビューポートの寸法は {{cssxref("@page")}} で宣言されたブロックでは無効です。

> **Note:** Viewport lengths are invalid in {{cssxref("@page")}} declaration blocks.

- `vh`

  - : Represents a percentage of the height of the viewport's initial [containing block](/en-US/docs/Web/CSS/Containing_block). `1vh` is 1% of the viewport height. For example, if the viewport height is `300px`, then a value of `70vh` on a property will be `210px`.　- : ビューポートの初期値の[包含ブロック](/ja/docs/Web/CSS/Containing_block)における高さの 1% と同じです。

    For small, large, and dynamic viewport sizes, the respective viewport-percentage units are `svh`, `lvh`, and `dvh`. `vh` represents the viewport-percentage length unit based on the browser default viewport size.

- `vw`
  
  - : Represents a percentage of the width of the viewport's initial [containing block](/en-US/docs/Web/CSS/Containing_block). `1vw` is 1% of the viewport width. For example, if the viewport width is `800px`, then a value of `50vw` on a property will be `400px`.　- : ビューポートの初期値の[包含ブロック](/ja/docs/Web/CSS/Containing_block)における幅の 1% と同じです。

    For small, large, and dynamic viewport sizes, the respective viewport-percentage units are `svw`, `lvw`, and `dvw`.
    `vw` represents the viewport-percentage length unit based on the browser default viewport size.

- `vmax`

  - : Represents in percentage the largest of `vw` and `vh`.

    For small, large, and dynamic viewport sizes, the respective viewport-percentage units are `svmax`, `lvmax`, and `dvmax`.
    `vmax` represents the viewport-percentage length unit based on the browser default viewport size.

- `vmin`

  - : Represents in percentage the smallest of `vw` and `vh`.

    For small, large, and dynamic viewport sizes, the respective viewport-percentage units are `svmin`, `lvmin`, and `dvmin`.
    `vmin` represents the viewport-percentage length unit based on the browser default viewport size.

- `vb`

  - : Represents percentage of the size of the initial [containing block](/en-US/docs/Web/CSS/Containing_block), in the direction of the root element's [block axis](/en-US/docs/Web/CSS/CSS_Logical_Properties#block_vs._inline).　- : 初期値の[包含ブロック](/ja/docs/Web/CSS/Containing_block)における、ルート要素の[ブロック軸](/ja/docs/Web/CSS/CSS_Logical_Properties#block_vs._inline)の寸法の 1% と同じです。

    For small, large, and dynamic viewport sizes, the respective viewport-percentage units are `svb`, `lvb`, and `dvb`, respectively.
    `vb` represents the viewport-percentage length unit based on the browser default viewport size.

- `vi`

  - : Represents a percentage of the size of the initial [containing block](/en-US/docs/Web/CSS/Containing_block), in the direction of the root element's [inline axis](/en-US/docs/Web/CSS/CSS_Logical_Properties#block_vs._inline).　- : 初期値の[包含ブロック](/ja/docs/Web/CSS/Containing_block)における、ルート要素の[インライン軸](/ja/docs/Web/CSS/CSS_Logical_Properties#block_vs._inline)の寸法の 1% と同じです。

    For small, large, and dynamic viewport sizes, the respective viewport-percentage units are `svi`, `lvi`, and `dvi`.
    `vi` represents the viewport-percentage length unit based on the browser default viewport size.

### Container query length units

When applying styles to a container using container queries, you can use container query length units.
These units specify a length relative to the dimensions of a query container.
Components that use units of length relative to their container are more flexible to use in different containers without having to recalculate concrete length values.
For more information, see [Container queries](/en-US/docs/Web/CSS/CSS_Container_Queries).

- `cqw`

  - : Represents a percentage of the width of the query container. `1cqw` is 1% of the query container's width. For example, if the query container's width is `800px`, then a value of `50cqw` on a property will be `400px`.

- `cqh`

  - : Represents a percentage of the height of the query container. `1cqh` is 1% of the query container's height. For example, if the query container's height is `300px`, then a value of `10cqh` on a property will be `30px`.

- `cqi`

  - : Represents a percentage of the inline size of the query container. `1cqi` is 1% of the query container's inline size. For example, if the query container's inline size is `800px`, then a value of `50cqi` on a property will be `400px`.

- `cqb`

  - : Represents a percentage of the block size of the query container. `1cqb` is 1% of the query container's block size. For example, if the query container's block size is `300px`, then a value of `10cqb` on a property will be `30px`.

- `cqmin`

  - : Represents a percentage of the smaller value of either the query container's inline size or block size. `1cqmin` is 1% of the smaller value of either the query container's inline size or block size. For example, if the query container's inline size is `800px` and its block size is `300px`, then a value of `50cqmin` on a property will be `150px`.

- `cqmax`

  - : Represents a percentage of the larger value of either the query container's inline size or block size. `1cqmax` is 1% of the larger value of either the query container's inline size or block size. For example, if the query container's inline size is `800px` and its block size is `300px`, then a value of `50cqmax` on a property will be `400px`.

#### 絶対的な長さの単位

絶対的な長さの単位は、出力メディアの物理的な特性が分かっている場合 (印刷レイアウトなど) に物理的な長さを表します。これはある単位を物理的な単位に固定してから、これを基準に他の単位を定義します。固定する単位は画面のような低解像度の端末か、あるいはプリンターのような高解像度の端末かによって異なります。

低解像度の端末では、`px` の単位が物理的な*参照ピクセル*を表し、その他の単位はこれを基準に定義されます。例えば `1in` は `96px` と定義され、これは `72pt` と等しくなります。このような端末では結果的に、インチ (`in`)、センチメートル (`cm`)、ミリメートル (`mm`) といった単位で表される長さは、同名の物理的な単位と同じ長さになるとは限りません。</p>

高解像度の端末では、インチ (`in`)、センチメートル (`cm`)、ミリメートル (`mm`) は対応する物理的な単位と同じになります。従って、 `px` の単位は、それ (1 インチの 1/96) を基準に定義されます。

> **メモ:** たくさんのユーザーが、テキストが読みやすくなるよう{{glossary("user agent", "ユーザーエージェント")}}の既定のフォントの大きさを拡大しています。絶対的な長さで指定すると、大きさが固定され、ユーザー設定によって拡大しなくなるため、アクセシビリティ上の問題が発生します。この理由から、 `font-size` を設定する場合には、 (`em` や `rem` のような) 相対的な単位が適しています。

- `px`
  - : 1 ピクセルです。画面表示では、伝統的に端末の 1 ピクセル (ドット) を表します。しかし、*プリンター*や*高解像度の画面*では、 CSS の 1 ピクセルが端末の複数ピクセルになることがあります。 `1px` = `1in` の 1/96 です。
- `cm`
  - : 1センチメートルです。 `1cm` = `96px/2.54` です。
- `mm`
  - : 1ミリメートルです。 `1mm` = `1cm` の1/10です。
- `Q` {{experimental_inline}}
  - : 1/4ミリメートルです。 `1Q` = `1cm` の1/40です。
- `in`
  - : 1インチです。 `1in` = `2.54cm` = `96px` です。
- `pc`
  - : 1パイカです。 `1pc` = `12pt` = `1in` の1/6です。
- `pt`
  - : 1ポイントです。 `1pt` = `1in` の1/72です。

## 補間

アニメーションの場合、 `<length>` データ型の値は浮動小数点の実数として補間されます。補間は計算値に対して行われます。補間の速度は、アニメーションに関連付けられた[タイミング関数](/ja/docs/Web/CSS/easing-function)によって定められます。

## 例

### 長さの単位の比較

The following example provides you with an input field in which you can enter a `<length>` value (e.g. `300px`, `50%`, `30vw`) to set the width of a result bar that will appear below it once you've pressed the <kbd>Enter</kbd> or the <kbd>Return</kbd> key.　<!-- 以下のデモでは、入力欄に `<length>` の値 (例えば `300px`, `50%`, `30vw`) を入力することができ、 <kbd>Return</kbd> を押したときにバーの長さが反映されます。 -->

これにより、様々な長さの単位の効果を比較し対照させることができます。

#### HTML

```html
<div class="outer">
  <div class="input-container">
    <label for="length">Enter width:</label>
    <input type="text" id="length" />
  </div>
  <div class="inner"></div>
</div>
<div class="results"></div>
```

#### CSS

```css
html {
  font-family: sans-serif;
  font-weight: bold;
  box-sizing: border-box;
}

.outer {
  width: 100%;
  height: 50px;
  background-color: #eee;
  position: relative;
}

.inner {
  height: 50px;
  background-color: #999;
  box-shadow: inset 3px 3px 5px rgba(255, 255, 255, 0.5), inset -3px -3px 5px
      rgba(0, 0, 0, 0.5);
}

.result {
  height: 20px;
  box-shadow: inset 3px 3px 5px rgba(255, 255, 255, 0.5), inset -3px -3px 5px
      rgba(0, 0, 0, 0.5);
  background-color: orange;
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.result code {
  position: absolute;
  margin-left: 20px;
}

.results {
  margin-top: 10px;
}

.input-container {
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
}

label {
  margin: 0 10px 0 20px;
}
```

#### JavaScript

```js
const inputDiv = document.querySelector(".inner");
const inputElem = document.querySelector("input");
const resultsDiv = document.querySelector(".results");

inputElem.addEventListener("change", () => {
  inputDiv.style.width = inputElem.value;

  const result = document.createElement("div");
  result.className = "result";
  result.style.width = inputElem.value;
  result.innerHTML = `<code>width: ${inputElem.value}</code>`;
  resultsDiv.appendChild(result);

  inputElem.value = "";
  inputElem.focus();
});
```

#### 結果

{{EmbedLiveSample('Length_unit_comparison','100%', 700)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 値と単位チュートリアル](/ja/docs/Learn/CSS/Building_blocks/Values_and_units)
- [CSS 値と単位リファレンス](/ja/docs/Web/CSS/CSS_Values_and_Units)
- [ボックスモデル](/ja/docs/Web/CSS/CSS_Box_Model)

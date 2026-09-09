---
title: CSS 隙間
short-title: 隙間
slug: Web/CSS/Guides/Gaps
l10n:
  sourceCommit: 34838ae7d32e78bfe01dbf2c266257ef0f8305c4
---

**CSS 隙間**モジュールを使用すると、[段組み](/ja/docs/Web/CSS/Guides/Multicol_layout)、[フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)、[グリッド](/ja/docs/Web/CSS/Guides/Grid_layout)レイアウトにおいて、アイテム間の間隔（または「隙間」）を指定できます。[CSS 段組みレイアウト](/ja/docs/Web/CSS/Guides/Multicol_layout)モジュールでは、もともと段組みコンテナー内で段間を制御する間隔や段間罫が定義されていました。本モジュールは、隙間装飾と呼ばれるこれらの視覚的な区切り要素を拡張し、グリッドにも適用できるようにしています。

{{cssxref("margin")}} や {{cssxref("padding")}} は個々のボックスの周囲の視覚的な余白を指定するものですが、このモジュールのプロパティを使用すると、{{glossary("gutters", "溝")}}や隙間を含むレイアウトにおいて、特定のレイアウトコンテキスト内の隣接するボックス間の空間を指定することができます。これは、最初や最後のボックスとコンテナーの端との間と、兄弟ボックス間の間隔が異なる場合に、特定のレイアウトコンテキスト内の隣接するボックス間の間隔を指定することができます。すべての隙間、または一部の隙間に罫線を表示させ、完全にアニメーション可能な罫線の幅、色、インセットを定義することができます。

## 隙間の実演

この例では、2021 年の米国大統領就任式でアマンダ・ゴーマンが朗読した詩 _The Hill We Climb_ が、紙面の新聞記事と同様に、複数の段にまたがって表示されています。JavaScriptが有効になっている場合、コントロールを使用して {{cssxref("column-gap")}}、 {{cssxref("column-rule-color")}}、{{cssxref("column-rule-style")}}、{{cssxref("column-rule-width")}} といったプロパティのほか、推奨する段数や、タイトルと引用文をすべての段組みにまたがらせるかどうかを設定できます。

```html hidden live-sample___multicol
<article>
  <div class="title">
    <h1>The Hill We Climb</h1>
    <p>&mdash;Amanda Gorman, 2021</p>
  </div>
  <p>
    When day comes, we ask ourselves where can we find light in this never
    ending shade? The loss we carry, a sea we must wade. We braved the belly of
    the beast.
  </p>

  <p>
    We've learned that quiet isn't always peace and the norms and notions of
    what just is, isn't always justice. And yet the dawn is hours before we knew
    it, somehow we do it, somehow we've weathered and witnessed a nation that
    isn't broken but simply unfinished.
  </p>

  <p>
    We, the successors of a country and a time, where a skinny black girl
    descended from slaves and raised by a single mother can dream of becoming
    president, only to find herself reciting for one.
  </p>

  <p>
    And yes, we are far from polished, far from pristine, but that doesn't mean
    we are striving to form a union that is perfect. We are striving to forge
    our union with purpose, to compose a country committed to all cultures,
    colors, characters, and conditions of man. And so we lift our gazes not to
    what stands between us but what stands before us. We close the divide
    because we know to put our future first. We must first put our differences
    aside.
  </p>

  <p>
    We lay down our arms so we can reach out our arms to one another We seek
    harm to none and harmony for all. Let the globe, if nothing else, say this
    is true, that even as we grieved, we grew. That even as we hurt, we hoped.
  </p>

  <p>
    That even as we tired, we tried. That we'll forever be tied together,
    victorious, not because we will never again know defeat, but because we will
    never again sow division.
  </p>

  <p>
    Scripture tells us to envision that everyone shall sit under their own vine
    and fig tree, and no one shall make them afraid.
  </p>

  <p>
    If we’re to live up to our own time, then victory won't lighten the blade
    but in all the bridges we've made, that is the promise to glade, the hill we
    climb if only we dare, it's because being American is more than a pride we
    inherit. It's the past we stepped into and how we repair it.
  </p>

  <blockquote>
    <p>
      We've seen a force that would shatter our nation rather than share it,
      would destroy our country if it meant delaying democracy.
    </p>
  </blockquote>

  <p>
    And this effort very nearly succeeded. But while democracy can be
    periodically delayed, it can never be permanently defeated. In this truth,
    in this faith, we trust. For while we have our eyes on the future, history
    has its eyes on us.
  </p>

  <p>
    This is the era of just redemption. We feared -- at its deception. We did
    not feel prepared to be the heirs of such a terrifying hour, but within it
    we found the power to author a new chapter, to offer hope and laughter to
    ourselves.
  </p>

  <p>
    So, while once we asked, "how could we possibly prevail over catastrophe?",
    now we assert, "how could catastrophe possibly prevail over us?" We will not
    march back to what was, but move to what shall be, a country that is bruised
    but whole, benevolent but bold, fierce and free. We will not be turned
    around or interrupted by intimidation.
  </p>

  <p>
    Because we know our inaction and inertia will be the inheritance of the next
    generation. Our blunders become their burdens. But one thing is certain. If
    we merge mercy with might and might with right, then love becomes our legacy
    and change, our children's birth right.
  </p>

  <p>
    So let us leave behind a country better than one we were left with, every
    breath from my bronze pounded chest, we will raise this wounded world into a
    wondrous one. We will rise through the gold-limbed hills in the west, we
    will rise from the windswept northeast where our forefathers first realized
    revolution. We will rise from the lake-rimmed cities of the Midwestern
    states.
  </p>

  <p>
    We will rise from the sun-baked South. We will rebuild, reconcile, and
    recover, in every known nook of our nation, in every corner called our
    country, our people diverse and beautiful, will emerge battered and
    beautiful.
  </p>

  <p>When day comes, we step out of the shade, aflame and unafraid.</p>

  <p>
    The new dawn blooms as we free it for there is always light if only we're
    brave enough to see it, if only we're brave enough to be it.
  </p>
</article>
<fieldset id="options" class="open">
  <legend>
    <button aria-expanded="true" aria-controls="controls">
      段のオプション
    </button>
  </legend>
  <div id="controls">
    <p>
      <label for="colCount">段数:</label>
      <input type="number" min="0" max="5" value="5" id="colCount" />
    </p>
    <p>
      <input type="checkbox" checked id="colSpan" />
      <label for="colSpan">署名欄をすべての段にまたがらせる</label>
    </p>
    <p>
      <input type="checkbox" id="blockSpan" />
      <label for="blockSpan">引用をすべての段にまたがらせる</label>
    </p>
    <p class="code">
      <input type="range" min="0" max="10" value="1" step="0.5" id="gapSize" />
      <label for="gapSize">column-gap: </label><output id="gap">1em;</output>
    </p>
    <p class="code">
      <input
        type="range"
        min="0"
        max="10"
        value="0.25"
        step="0.25"
        id="columnRuleWidth" />
      <label for="columnRuleWidth">column-rule-width: </label
      ><output id="ruleWidth">0.25em;</output>
    </p>
    <p class="code">
      <label for="colColor">column-rule-color:</label>
      <input type="color" id="colColor" />
    </p>
    <p class="code">
      <label for="columnRuleStyle">column-rule-style:</label>
      <select id="columnRuleStyle">
        <option>none</option>
        <option>hidden</option>
        <option>dotted</option>
        <option selected>dashed</option>
        <option>solid</option>
        <option>double</option>
        <option>groove</option>
        <option>ridge</option>
        <option>inset</option>
        <option>outset</option>
        <option></option>
      </select>
    </p>
  </div>
</fieldset>
```

```js hidden live-sample___multicol
const page = document.querySelector("article");
const title = document.querySelector(".title");
const option = document.querySelector("#options");
const legend = document.querySelector("#options > legend");
const legendBtn = document.querySelector("#options > legend > button");
const blockquote = document.getElementsByTagName("blockquote")[0];

const colCount = document.getElementById("colCount");
const colSpan = document.getElementById("colSpan");
const blockSpan = document.getElementById("blockSpan");

const gapSize = document.getElementById("gapSize");
const gap = document.getElementById("gap");
const columnRuleWidth = document.getElementById("columnRuleWidth");
const ruleWidth = document.getElementById("ruleWidth");
const columnRuleStyle = document.getElementById("columnRuleStyle");
const ruleStyle = document.getElementById("ruleStyle");
const columnRuleColor = document.getElementById("colColor");

// JavaScript が有効な場合はオプションを表示
option.style.display = "revert";

legendBtn.addEventListener("click", () => {
  showAndHideMenu();
});

colCount.addEventListener("change", () => {
  page.style.columnCount = colCount.value;
});

gapSize.addEventListener("change", () => {
  page.style.gap = `${gapSize.value}em`;
  gap.innerText = `${gapSize.value}em;`;
});

columnRuleWidth.addEventListener("change", () => {
  page.style.columnRuleWidth = `${columnRuleWidth.value}em`;
  ruleWidth.innerText = `${columnRuleWidth.value}em;`;
});

columnRuleStyle.addEventListener("change", () => {
  page.style.columnRuleStyle = columnRuleStyle.value;
});

colSpan.addEventListener("change", () => {
  setColSpan(colSpan, title);
});

blockSpan.addEventListener("change", () => {
  setColSpan(blockSpan, blockquote);
});

columnRuleColor.addEventListener("change", () => {
  page.style.columnRuleColor = colColor.value;
});

function showAndHideMenu() {
  if (legendBtn.getAttribute("aria-expanded") === "true") {
    // close it
    legendBtn.setAttribute("aria-expanded", "false");
    legend.classList.add("closed");
    legend.classList.remove("open");
  } else {
    // open it
    legendBtn.setAttribute("aria-expanded", "true");
    legend.classList.remove("closed");
    legend.classList.add("open");
  }
}

function setColSpan(control, element) {
  if (control.checked) {
    element.style.columnSpan = "all";
  } else {
    element.style.columnSpan = "none";
  }
}
```

```css hidden live-sample___multicol
article {
  column-count: 5;
  gap: 1em;
  column-rule: 0.25em dashed currentcolor;
}
.title {
  column-span: all;
  display: flex;
  align-items: baseline;
  gap: 1em;
  flex-wrap: wrap;
}
p {
  margin: 0 0 1em 0;
  line-height: 1.4;
}
.code {
  font-style: monospace;
}
.breakInside * {
  break-inside: avoid;
}
#options {
  position: fixed;
  top: 1rem;
  right: 1rem;
  background: white;
  display: none;
}
fieldset p {
  margin-bottom: 0.25em;
}
legend {
  position: relative;
  top: 0;
  transition: 200ms;
}
legend.closed {
  top: 0.75em;
}
legend.closed + #controls {
  display: none;
}
legend {
  background-color: #dedede;
  padding: 0.5em;
}
legend > button {
  all: unset;
  cursor: pointer;
}
legend.closed {
  margin: -1em;
  display: inline-block;
}
blockquote {
  font-weight: bold;
  font-style: italic;
  margin: 0 0 0.25em 0;
}
blockquote p::before,
blockquote p::after {
  content: '"';
  vertical-align: baseline;
  color: red;
}
```

{{EmbedLiveSample("multicol", "", "800px")}}

段間罫が段間よりも大きい場合、装飾された罫線がテキストの背後に現れますが、段間のサイズは変わりません。

## リファレンス

### プロパティ

- {{cssxref("column-gap")}}
- {{cssxref("column-rule")}}
- {{cssxref("column-rule-break")}}
- {{cssxref("column-rule-color")}}
- {{cssxref("column-rule-inset")}}
- {{cssxref("column-rule-inset-cap")}}
- {{cssxref("column-rule-inset-cap-end")}}
- {{cssxref("column-rule-inset-cap-start")}}
- {{cssxref("column-rule-inset-end")}}
- {{cssxref("column-rule-inset-junction")}}
- {{cssxref("column-rule-inset-junction-end")}}
- {{cssxref("column-rule-inset-junction-start")}}
- {{cssxref("column-rule-inset-start")}}
- {{cssxref("column-rule-style")}}
- {{cssxref("column-rule-visibility-items")}}
- {{cssxref("column-rule-width")}}
- {{cssxref("gap")}}
- {{cssxref("row-gap")}}
- {{cssxref("row-rule")}}
- {{cssxref("row-rule-break")}}
- {{cssxref("row-rule-color")}}
- {{cssxref("row-rule-inset")}}
- {{cssxref("row-rule-inset-cap")}}
- {{cssxref("row-rule-inset-cap-end")}}
- {{cssxref("row-rule-inset-cap-start")}}
- {{cssxref("row-rule-inset-end")}}
- {{cssxref("row-rule-inset-junction")}}
- {{cssxref("row-rule-inset-junction-end")}}
- {{cssxref("row-rule-inset-junction-start")}}
- {{cssxref("row-rule-inset-start")}}
- {{cssxref("row-rule-style")}}
- {{cssxref("row-rule-visibility-items")}}
- {{cssxref("row-rule-width")}}
- {{cssxref("rule")}}
- {{cssxref("rule-break")}}
- {{cssxref("rule-color")}}
- {{cssxref("rule-inset")}}
- {{cssxref("rule-inset-cap")}}
- {{cssxref("rule-inset-end")}}
- {{cssxref("rule-inset-junction")}}
- {{cssxref("rule-inset-start")}}
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-style")}}
- {{cssxref("rule-visibility-items")}}
- {{cssxref("rule-width")}}

### 用語集の用語

- {{glossary("Grid", "グリッド")}}
- {{glossary("Grid cell", "グリッドセル")}}
- {{glossary("Grid column", "グリッド列")}}
- {{glossary("Grid lines", "グリッド線")}}
- {{glossary("Grid row", "グリッド行")}}
- {{glossary("Gutters", "溝")}}

## ガイド

- [段のスタイル設定](/ja/docs/Web/CSS/Guides/Multicol_layout/Styling_columns)
  - : 段のスタイル設定と、段間の空間の制御のガイドです。
- [段組みにおけるコンテンツの分割の処理](/ja/docs/Web/CSS/Guides/Multicol_layout/Handling_content_breaks)
  - : 断片化仕様の概要と、段のコンテンツがどこで分割されるかを制御する方法について。
- [ボックス配置ガイド](/ja/docs/Web/CSS/Guides/Box_alignment#guides)
  - : [ボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment/Overview)が、[フレックスボックス](/ja/docs/Web/CSS/Guides/Box_alignment/In_flexbox)、[グリッドレイアウト](/ja/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)、[段組みレイアウト](/ja/docs/Web/CSS/Guides/Box_alignment/In_multi-column_layout)、[ブロック、絶対位置指定、表レイアウト](/ja/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables)においてどのように機能するか。

## 関連する概念

[CSS フレックスボックスレイアウト](/ja/docs/Web/CSS/Guides/Flexible_box_layout)モジュール

- {{cssxref("flex")}}
- {{cssxref("flex-basis")}}
- {{cssxref("flex-direction")}}
- {{cssxref("flex-flow")}}
- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-wrap")}}

[CSS グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout)モジュール

- {{CSSxRef("grid")}}
- {{CSSxRef("grid-column")}}
- {{CSSxRef("grid-row")}}
- {{cssxref("repeat()")}}

[CSS 段組みレイアウト](/ja/docs/Web/CSS/Guides/Multicol_layout)モジュール

- {{cssxref("column-fill")}}
- {{cssxref("column-span")}}
- {{cssxref("columns")}} 一括指定
  - {{cssxref("column-count")}}
  - {{cssxref("column-height")}}
  - {{cssxref("column-width")}}
- {{cssxref("column-wrap")}}
- {{cssxref("::column")}}

[CSS ボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment)

- {{cssxref("align-content")}}
- {{cssxref("justify-content")}}

[CSS ボックスサイズ指定](/ja/docs/Web/CSS/Guides/Box_sizing)モジュール

- {{cssxref("height")}}
- {{cssxref("max-height")}}
- {{cssxref("block-size")}}
- {{cssxref("width")}}
- {{cssxref("max-width")}}

[CSS 表示方法](/ja/docs/Web/CSS/Guides/Display)モジュール

- {{cssxref("display")}}
- [ブロック整形コンテキスト](/ja/docs/Web/CSS/Guides/Display/Block_formatting_context)ガイド

## 仕様書

{{Specifications}}

## 関連情報

- [フレックスボックスの基本概念](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [フレックスコンテナー内のアイテムの配置](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [グリッドレイアウトでのボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)

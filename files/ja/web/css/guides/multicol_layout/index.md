---
title: CSS 段組みレイアウト
slug: Web/CSS/Guides/Multicol_layout
original_slug: Web/CSS/CSS_multicol_layout
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**CSS 段組みレイアウト** (CSS multi-column layout) モジュールを使用すると、コンテンツを複数の段に分割することができます。このモジュールのプロパティを使用すると、段の推奨数と幅、段間の間隔、およびオプションで段の分割線（段間罫と呼ばれる）の外観を定義することができます。また、コンテンツが段から段へどのように流れるか、および段間でコンテンツをどのように分割するかを定義することもできます。

## 段組みレイアウトの実際

この例では、カナダの 100 周年記念式典で 1967 年にダン・ジョージ首長が行った演説「連邦の嘆き (_A Lament for Confederation_)」が、新聞記事のように複数の段で表示されています。 JavaScript を有効にしている場合、コントロールを使用して、好きな段数と幅、段間の間隔、タイトルと引用文を 1 段にまとめるか、すべての段にまたがらせるか、段落の改行を避けるかどうかなどを変更できます。

```html hidden live-sample___multicol
<article>
  <div class="title">
    <h1>A Lament for Confederation</h1>
    <p>&mdash;Chief Dan George, 1967</p>
  </div>
  <p>
    How long have I known you, Oh Canada? A hundred years? Yes, a hundred years.
    And many, many tides more. And today, when you celebrate your hundred years,
    Oh Canada, I am sad for all the Indian people throughout the land.
  </p>
  <p>
    For I have known you when your forests were mine; when they gave me my meat
    and my clothing. I have known you in your fruits and rivers where your fish
    flashed and danced in the sun, where the waters said ‘come and eat of my
    abundance.’ I have known you in the freedom of your winds. And my spirit,
    like your winds, once roamed this good lands.
  </p>
  <blockquote>
    <p>
      But in long the hundred years since the white man came, I have seen that
      freedom disappear just like the salmon going mysteriously out to sea.
    </p>
  </blockquote>
  <p>
    The white man’s strange customs I could not understand, pressed down upon me
    until I could no longer breathe.
  </p>
  <p>
    When I fought to protect my home and my land, I was called a savage. When I
    neither understood nor welcomed this new way of life, I was called lazy.
    When I tried to rule my people, I was stripped of my authority.
  </p>
  <p>
    My nation was ignored in your history textbooks – we were less important in
    the history of Canada than the buffalo that ranged the plains. I was
    ridiculed in your plays and motion pictures, and when I drank your
    fire-water, I got drunk – very, very drunk. And I forgot.
  </p>
  <p>
    Oh Canada, how can I celebrate with you this centenary, this hundred years?
    Shall I thank you for the reserves that are left me of my beautiful forests?
    Shall I thank you for the canned fish of my rivers? Shall I thank you for
    the loss of my pride and authority, even among my own people? For the lack
    of my will to fight back? No! I must forget what is past and gone.
  </p>
  <p>
    Oh God in heaven! Give me the courage of the olden chiefs. Let me wrestle
    with my surroundings. Let me once again, as in the days of old, dominate my
    environment. Let me humbly accept this new culture and through it rise up
    and go on.
  </p>
  <p>
    Oh god, like the thunderbird of old, I shall rise again out of the sea. I
    shall grab the instruments of the white man’s success – his education, his
    skills, and with these new tools I shall build my race into the proudest
    segment of your society. And, before I follow the great chiefs who have gone
    before us, I shall see these things come to pass.
  </p>
  <p>
    I shall see our young braves and our chiefs sitting in the house of law and
    government, ruling and being ruled by the knowledge and freedoms of our
    great land. So shall we shatter the barriers of our isolation. So shall the
    next hundred years be the greatest in the proud history of our tribes and
    nations.
  </p>
</article>
<fieldset id="options">
  <legend role="button" aria-expanded="true" aria-controls="controls">
    段のオプション
  </legend>
  <div id="controls">
    <p>
      <input type="range" min="0" max="5" value="5" id="colCount" />
      <label for="colCount">段の最大数</label>
    </p>
    <p>
      <input type="range" min="2" max="40" value="10" step="2" id="colWidth" />
      <label for="colWidth">段の最小幅</label>
    </p>
    <p>
      <input type="range" min="0" max="10" value="1" step="0.5" id="gapSize" />
      <label for="gapSize">段間</label>
    </p>
    <p>
      <input type="checkbox" checked id="colSpan" />
      <label for="colSpan">署名欄をすべての段にまたがらせる</label>
    </p>
    <p>
      <input type="checkbox" id="blockSpan" />
      <label for="blockSpan">引用をすべての段にまたがらせる</label>
    </p>
    <p>
      <input type="checkbox" id="colFill" />
      <label for="colFill">段のバランスをとる</label>
    </p>
    <p>
      <input type="checkbox" id="break" />
      <label for="break">段落を分割しない</label>
    </p>
  </div>
</fieldset>
```

```js hidden live-sample___multicol
const page = document.querySelector("article");
const title = document.querySelector(".title");
const options = document.querySelector("#options");
const legend = document.querySelector("#options > legend");
const blockquote = document.getElementsByTagName("blockquote")[0];

const colCount = document.getElementById("colCount");
const colWidth = document.getElementById("colWidth");
const gapSize = document.getElementById("gapSize");
const colSpan = document.getElementById("colSpan");
const blockSpan = document.getElementById("blockSpan");
const colFill = document.getElementById("colFill");
const breakP = document.getElementById("break");

// JS が有効である場合にオプションが見えるようにする
options.style.display = "revert";

legend.addEventListener("click", () => {
  showAndHideMenu();
});

colCount.addEventListener("change", () => {
  page.style.columnCount = colCount.value;
});

colWidth.addEventListener("change", () => {
  page.style.columnWidth = `${colWidth.value}em`;
});

gapSize.addEventListener("change", () => {
  page.style.gap = `${gapSize.value}em`;
});

colSpan.addEventListener("change", () => {
  setColSpan(colSpan, title);
});

blockSpan.addEventListener("change", () => {
  setColSpan(blockSpan, blockquote);
});

colFill.addEventListener("change", () => {
  if (colFill.checked) {
    page.style.columnFill = "balance";
  } else {
    page.style.columnFill = "auto";
  }
});

breakP.addEventListener("change", () => {
  if (breakP.checked) {
    page.classList.add("breakInside");
  } else {
    page.classList.remove("breakInside");
  }
});

function showAndHideMenu() {
  if (legend.getAttribute("aria-expanded") === "true") {
    // close it
    legend.setAttribute("aria-expanded", "false");
  } else {
    // open it
    legend.setAttribute("aria-expanded", "true");
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
  column-width: 8em;
  widows: 3;
  orphans: 3;
  gap: 1em;
  column-rule: 2px dashed #666;
  height: 50em;
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
[aria-expanded] {
  position: relative;
  top: 0;
  transition: 200ms;
}
[aria-expanded="false"] {
  top: 0.75em;
}
[aria-expanded="false"] + #controls {
  display: none;
}
legend {
  background-color: #dedede;
  padding: 0.5em;
}
[aria-expanded="false"] {
  margin: -1em;
  display: inline-block;
}
blockquote {
  border: 2px dashed red;
  margin: 0 0 0.25em 0;
}
blockquote p {
  margin-bottom: 0;
}
blockquote p::before,
blockquote p::after {
  content: '"';
  font-size: 1.2em;
  vertical-align: baseline;
  color: red;
}
```

{{EmbedLiveSample("multicol", "", "800px")}}

> [!NOTE]
> 段組みレイアウトは、文書全体が印刷ページに分割されるように行ボックスに分割することから、[ページメディア](/ja/docs/Web/CSS/Guides/Paged_media)に密接に関連します。従って、 [CSS 断片化](/ja/docs/Web/CSS/Guides/Fragmentation)仕様書に定義されているプロパティが、段間のコンテンツの区切り位置を制御するために必要になりました。

## リファレンス

### プロパティ

- {{cssxref("break-after")}}
- {{cssxref("break-before")}}
- {{cssxref("break-inside")}}
- {{cssxref("column-fill")}}
- {{cssxref("column-gap")}}
- {{cssxref("column-span")}}
- {{cssxref("column-rule")}} 一括指定
  - {{cssxref("column-rule-color")}}
  - {{cssxref("column-rule-style")}}
  - {{cssxref("column-rule-width")}}
- {{cssxref("columns")}} 一括指定
  - {{cssxref("column-count")}}
  - {{cssxref("column-width")}}

> [!NOTE]
> コンテナーの高さと行の長さを設定すると、視覚障碍や認知障碍のある方にとって操作が困難になる場合があることにご注意ください。 [WCAG 達成基準 1.4.8](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする) では、テキストサイズが 2 倍になっても、コンテンツをスクロールする必要がなくなるようにすべきであると規定されています。

## セレクターと擬似クラス

- {{cssxref("::column")}}

## ガイド

- [段組みレイアウトの基本概念](/ja/docs/Web/CSS/Guides/Multicol_layout/Basic_concepts)
  - : 段組みレイアウト仕様の概要です。
- [段組みレイアウトの使用](/ja/docs/Web/CSS/Guides/Multicol_layout/Using)
  - : テキストのレイアウトに段組みプロパティを使用するためのガイドです。
- [段のスタイル設定](/ja/docs/Web/CSS/Guides/Multicol_layout/Styling_columns)
  - : 段間罫と段間の空間の管理方法です。
- [段抜きと段の均衡](/ja/docs/Web/CSS/Guides/Multicol_layout/Spanning_balancing_columns)
  - : すべての段にまたがる要素の作り方と、段を埋める方法の制御です。
- [段組みでのオーバーフローの処理](/ja/docs/Web/CSS/Guides/Multicol_layout/Handling_overflow)
  - : アイテムが段をオーバーフローときに起こることと、段内のコンテンツが多すぎてコンテナーに収まらない場合に起こることです。
- [段組みにおけるコンテンツの分割の処理](/ja/docs/Web/CSS/Guides/Multicol_layout/Handling_content_breaks)
  - : 断片化仕様と、段のコンテンツの分割位置を制御する方法について説明します。

## 関連概念

- CSS の {{cssxref("orphans")}} プロパティ
- CSS の {{cssxref("widows")}} プロパティ
- CSS の {{cssxref("overflow")}} プロパティ
- CSS の {{cssxref("gap")}} プロパティ
- CSS の {{cssxref("height")}}, {{cssxref("max-height")}}, {{cssxref("block-size")}} プロパティ
- CSS の {{cssxref("width")}}, {{cssxref("max-width")}}, {{cssxref("inline-size")}} プロパティ
- {{cssxref("line-style")}} 列挙型データ型
- [ブロック整形コンテキスト](/ja/docs/Web/CSS/Guides/Display/Block_formatting_context)ガイド

## 仕様書

{{Specifications}}

## 関連情報

- [学習: 段組みレイアウト](/ja/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- [CSS 断片化](/ja/docs/Web/CSS/Guides/Fragmentation)モジュール
- [CSS フレックスボックスレイアウト](/ja/docs/Web/CSS/Guides/Flexible_box_layout)モジュール
- [CSS グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout)モジュール
- [CSS ページメディア](/ja/docs/Web/CSS/Guides/Paged_media)モジュール

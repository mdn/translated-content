---
title: CSS オーバーフロー
slug: Web/CSS/Guides/Overflow
original_slug: Web/CSS/CSS_overflow
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**CSS オーバーフロー**モジュールのプロパティを使用すると、視覚メディアでスクロール可能なオーバーフローを処理することができます。

オーバーフローは、要素ボックス内のコンテンツがボックスの 1 つまたは複数の端を越えるときに起こります。**スクロール可能なオーバーフロー**とは、要素ボックスの外側に現れるコンテンツのことで、スクロール機構を追加したい場合があります。CSS オーバーフローのプロパティを使用すると、コンテンツが要素ボックスからあふれたときに何が起こるかを制御することができ、 JavaScript なしでカルーセルを作成することもできます。

コンテンツがはみ出すものの、 CSS のボックスモデルに関与しない描画効果は、レイアウトには影響しません。この種のオーバーフローは{{Glossary("ink overflow", "インクオーバーフロー")}}とも呼ばれます。インクオーバーフローの例としては、ボックスシャドウ、境界画像、テキスト装飾、はみ出したグリフ、輪郭線などが挙げられます。インクオーバーフローはスクロール可能なオーバーフロー領域を拡張しません。

## オーバーフローの実際

次の例で、隣接する固定サイズのボックス内のコンテンツのオーバーフローおよびスクロールバーに対する、さまざまな `overflow` プロパティの値の効果を確認してください。

この例では、`overflow-clip-margin` プロパティと `width` プロパティの値を変更するオプションも含まれています。また、overflow プロパティが{{Glossary("scroll container", "スクロールコンテナー")}}を生成する場合、コンテンツをプログラムでスクロールすることもできます。 `overflow: clip` を選択し、 `overflow-clip-margin` の値を変えた場合の効果を確認します。 `overflow: hidden` または `overflow: scroll` を選択し、様々な `ScrollLeft` と `ScrollTop` スライダーの設定を調べます。

```html hidden live-sample___overflow
<article>
  <fieldset>
    <legend>オプションを選択してください:</legend>
    <label
      ><code>overflow</code>:
      <select id="overflowValue">
        <option>hidden</option>
        <option>clip</option>
        <option>scroll</option>
        <option>auto</option>
        <option selected>visible</option>
        <option>overlay</option>
      </select>
    </label>
    <label>
      <code>overflow-clip-margin</code>:
      <input type="number" id="ocm" value="1" min="0" max="10" size="2" />
      <code>em</code>
    </label>
    <label
      ><input type="checkbox" id="wide" /> <code>width</code>:
      <code>20em</code> または <code>40em</code></label
    >
    <fieldset>
      <legend>プログラムによるスクロール:</legend>
      <label
        >ScrollLeft:
        <input type="range" min="0" max="100" value="0" id="scrollL"
      /></label>
      <label
        >ScrollTop:
        <input type="range" min="0" max="100" value="0" id="scrollT"
      /></label>
    </fieldset>
  </fieldset>
  <pre class="visible">&nbsp;
    Oh, Rubber Duckie, you're the one
    You make bath time lots of fun
    Rubber Duckie, I'm awfully fond of you

    Rubber Duckie, joy of joys
    When I squeeze you, you make noise
    Rubber Duckie, you're my very best friend, it's true

    Oh, every day when I make my way to the tubby
    I find a little fella who's cute and yellow and chubby
    Rub-a-dub-dubby

    <a href="#">Rubber Duckie</a>, you're so fine
    And I'm lucky that you're mine
    Rubber Duckie, I'm awfully fond of you
      </pre>
</article>
```

```css hidden live-sample___overflow
article {
  display: flex;
  gap: 1em;
}

label {
  display: block;
  white-space: nowrap;
}

pre {
  border: 2px dashed crimson;
  height: 150px;
  width: 20em;
  margin-bottom: 3em;
  overflow-clip-margin: 1em;
  text-align: center;
}

.wide {
  width: 40em;
}

::before {
  font-weight: bold;
  color: white;
  background: crimson;
  display: inline-block;
  min-width: 50%;
  padding: 3px 5px;
  box-sizing: border-box;
}

.hidden {
  overflow: hidden hidden;
}
.hidden::before {
  content: "hidden: ";
}

.clip {
  overflow: clip clip;
}
.clip::before {
  content: "clip: ";
}

.scroll {
  overflow: scroll scroll;
}
.scroll::before {
  content: "scroll: ";
}

.auto {
  overflow: auto auto;
}
.auto::before {
  content: "auto: ";
}

.overlay {
  overflow: clip clip;
  overflow: overlay overlay;
}
.overlay::before {
  content: "overlay (or clip if not supported): ";
}

.visible {
  overflow: visible visible;
}
.visible::before {
  content: "visible: ";
}

article:not(:has(pre.clip)) > fieldset > label:nth-of-type(2),
article:not(:has(pre.hidden, pre.scroll, pre.auto, pre.overlay))
  fieldset
  fieldset {
  opacity: 20%;
  pointer-events: none;
}
```

```js hidden live-sample___overflow
const pre = document.querySelector("pre");
const val = document.getElementById("overflowValue");
const check = document.getElementById("wide");
const ocm = document.getElementById("ocm");
const scrollL = document.getElementById("scrollL");
const scrollT = document.getElementById("scrollT");

val.addEventListener("change", () => {
  if (pre.classList.contains("wide")) {
    pre.className = `wide ${val.value}`;
  } else {
    pre.className = `${val.value}`;
  }
  scrollExample();
  clipMargin();
});

wide.addEventListener("change", () => {
  pre.classList.toggle("wide");
  scrollExample();
});

ocm.addEventListener("change", () => {
  clipMargin();
});

scrollL.addEventListener("change", () => {
  scrollExample();
});
scrollT.addEventListener("change", () => {
  scrollExample();
});

function scrollExample() {
  pre.scrollTo({
    top: scrollT.value,
    left: scrollL.value * 2,
    behavior: "smooth",
  });
}

function clipMargin() {
  pre.style.overflowClipMargin = `${ocm.value}em`;
}
```

{{EmbedLiveSample("overflow", "", "400px")}}

上のコンテンツボックスにはリンクが記載されていますが、これはキーボードフォーカスがオーバーフローやスクロール動作に与える効果を示すためのものです。リンクに移動したり、コンテンツをプログラムでスクロールしてみてください: 列挙値である `<overflow>` がスクロールコンテナーを生成した場合のみ、コンテンツはスクロールします。

## リファレンス

### CSS プロパティ

- {{CSSxRef("line-clamp")}}
- {{CSSxRef("overflow")}} 一括指定
- {{CSSxRef("overflow-block")}}
- {{CSSxRef("overflow-clip-margin")}}
- {{CSSxRef("overflow-inline")}}
- {{CSSxRef("overflow-x")}}
- {{CSSxRef("overflow-y")}}
- {{CSSxRef("scroll-behavior")}}
- {{cssxref("scroll-marker-group")}}
- {{CSSxRef("scrollbar-gutter")}}
- {{CSSxRef("text-overflow")}}

> [!NOTE]
> CSS オーバーフローモジュールレベル 4 では、 `block-ellipsis`, `continue`, `max-lines`, `overflow-clip-margin-block`, `overflow-clip-margin-block-end`, `overflow-clip-margin-block-start`, `overflow-clip-margin-bottom`, `overflow-clip-margin-inline`, `overflow-clip-margin-inline-end`, `overflow-clip-margin-inline-start`, `overflow-clip-margin-left`, `overflow-clip-margin-right`, and `overflow-clip-margin-top` の各プロパティが導入されました。これらはまだ実装されていません。

### セレクターと擬似要素

- {{cssxref("::scroll-button()")}}
- {{cssxref("::scroll-marker")}}
- {{cssxref("::scroll-marker-group")}}
- {{cssxref(":target-current")}}

### データ型

- [`<overflow>`](/ja/docs/Web/CSS/Reference/Values/overflow_value) 列挙値

## ガイド

- [学習: コンテンツのオーバーフロー](/ja/docs/Learn_web_development/Core/Styling_basics/Overflow)
  - : オーバーフローとは何か、どのように管理するかを学びます。
- [CSS によるカルーセルの作成](/ja/docs/Web/CSS/Guides/Overflow/Carousels)
  - : スクロールボタン、スクロールマーカー、および生成された段をを使用して、純粋な CSS によるカルーセル UI 機能を作成します。
- [名前付きスクロール進行タイムラインアニメーションの作成](/ja/docs/Web/CSS/Reference/Properties/scroll-timeline-name#名前付きスクロール進行タイムラインのアニメーションの作成)
  - : CSS スクロールタイムライン {{cssxref('scroll-timeline-name')}} および {{cssxref('scroll-timeline-axis')}} プロパティと {{cssxref('scroll-timeline')}} の一括指定は、スクロールコンテナーのスクロールオフセットに関連付けられたアニメーションを作成します。

## 関連概念

- {{cssxref("::column")}}
- {{CSSxRef("scrollbar-width")}} プロパティ
- {{CSSxRef("scrollbar-color")}} プロパティ
- {{CSSxRef("scrollbar-gutter")}} プロパティ
- {{CSSxRef("scroll-behavior")}} プロパティ
- {{cssxref("scroll-margin")}} 一括指定プロパティ
- {{cssxref("scroll-padding")}} 一括指定プロパティ
- {{cssxref("scroll-snap-align")}} プロパティ
- {{cssxref("scroll-snap-stop")}} プロパティ
- {{cssxref("scroll-snap-type")}} プロパティ
- {{cssxref("text-overflow")}} プロパティ
- {{CSSxRef("::-webkit-scrollbar")}} 擬似要素
- [`scrollbar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role) ARIA ロール
- Element の {{domxref("Element.scroll", "scroll()")}} メソッド
- Element の {{domxref("Element.scrollBy", "scrollBy()")}} メソッド
- Element の {{domxref("Element.scrollIntoView", "scrollIntoView()")}} メソッド
- Element の {{domxref("Element.scrollTo", "scrollTo()")}} メソッド
- Element の {{domxref("Element.scrollTop", "scrollTop")}} プロパティ
- Element の {{domxref("Element.scrollLeft", "scrollLeft")}} プロパティ
- Element の {{domxref("Element.scrollWidth", "scrollWidth")}} プロパティ
- Element の {{domxref("Element.scrollHeight", "scrollHeight")}} プロパティ
- Document の {{domxref("Document.scroll_event", "scroll")}} イベント
- 用語集の「{{Glossary("Scroll container", "スクロールコンテナー")}}」
- 用語集の「{{Glossary("Ink overflow","インクオーバーフロー")}}」

## 仕様書

{{Specifications}}

## 関連情報

- [CSS スクロールバースタイル設定](/ja/docs/Web/CSS/Guides/Scrollbars_styling)モジュール
- [CSS スクロールスナップ](/ja/docs/Web/CSS/Guides/Scroll_snap)モジュール
- [CSSOM view](/ja/docs/Web/CSS/Guides/CSSOM_view) モジュール
- [スクロール可能なオーバーフローのデバッグ](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/debug_scrollable_overflow/index.html)の方法

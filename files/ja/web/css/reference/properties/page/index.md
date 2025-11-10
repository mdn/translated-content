---
title: page
slug: Web/CSS/Reference/Properties/page
original_slug: Web/CSS/page
l10n:
  sourceCommit: 62ad79f3ece9fa7199b3420f38e8bdd05b54073f
---

**`page`** は [CSS](/ja/docs/Web/CSS) のプロパティで、{{cssxref("@page")}} [アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)で定義された、名前付きページ、つまり特定の種類のページを指定するために使用します。

名前付きページを連続して使用しているセレクターが複数ある場合は、 [`break-after`](/ja/docs/Web/CSS/Reference/Properties/break-after) を使用して強制的にページを分割する必要があるかもしれません。

## 構文

```css
/* 名前付きページを設定 */
page: exampleName;
page: chapterIntro;

/* 祖先の名前付きページを使用 */
page: auto; /* 既定値 */

/* グローバル値 */
page: inherit;
page: initial;
page: revert;
page: revert-layer;
page: unset;
```

### 値

- `auto`
  - : 既定値。 `auto` 以外の値を持つ最も近い祖先の値を使用します。名前付きページの値が設定されている祖先が存在しない場合、 `auto` に使用される値は空文字列になります。
- {{cssxref("custom-ident")}}
  - : [`@page`](/ja/docs/Web/CSS/Reference/At-rules/@page) アットルールで定義されている、大文字小文字を区別する名前。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 名前付きページの例

この例では、この HTML には 2 つの部分があります。印刷コントロールと、印刷されるコンテンツです。
印刷コントロールにより、ユーザーは `article` 内の `section` の印刷方法を指定できます。

```html-nolint live-sample___page-property
<!-- フィールドセット内の印刷オプション -->
<fieldset id="printStyle">
  <legend>印刷したい方法</legend>
  <label for="single">
    <input type="radio" id="single" name="type" value="single" checked />
    改ページなし
  </label>
  <label for="grouped">
    <input type="radio" id="grouped" name="type" value="grouped" />グループ化した節で改ページ
  </label>
  <label for="paged">
    <input type="radio" id="paged" name="type" value="paged" />
    章ごとに改ページ
  </label>
  <button id="print">印刷</button>
</fieldset>

<!-- 印刷されるコンテンツ -->
<article id="print-area" data-print="single">
  <section id="toc">
    <h2>目次</h2>
    <ul>
      <li>序文</li>
      <li>はじめに</li>
      <li>第 1 章 - 名前付きページ</li>
      <li>第 2 章 - ページの向き</li>
      <li>第 3 章 - ページのマージン</li>
      <li>おわりに</li>
    </ul>
  </section>
  <section id="foreword">
    <h2>序文</h2>
    <p>
      この本は、CSS の <code>@page</code> アットルールが HTML の本の印刷にどのように役立つかについて解説したものです。
    </p>
  </section>
  <section id="introduction">
    <h2>はじめに</h2>
    <p>
      この本は、 HTML 文書をページとして簡単に印刷する方法を示す概念です。
    </p>
  </section>
  <section id="chapter1" class="chapter">
    <h2>名前付きページ</h2>
    <p>Lorem ipsum</p>
  </section>
  <section id="chapter2" class="chapter">
    <h2>ページの向き</h2>
    <p>Lorem ipsum</p>
  </section>
  <section id="chapter3" class="chapter">
    <h2>ページマージン</h2>
    <p>設定できるページのマージンは 16 種類あります。</p>
    <ul>
      <li>@top-left-corner</li>
      <li>@top-left</li>
      <li>@top-center</li>
      <li>@top-right</li>
      <li>@top-right-corner</li>
      <li>@left-top</li>
      <li>@left-middle</li>
      <li>@left-bottom</li>
      <li>@right-top</li>
      <li>@right-middle</li>
      <li>@right-bottom</li>
      <li>@bottom-left-corner</li>
      <li>@bottom-left</li>
      <li>@bottom-center</li>
      <li>@bottom-right</li>
      <li>@bottom-right-corner</li>
    </ul>
    <p>これらは、マージンのこれらの部分に現れるものを表示するために使用することができます。</p>
  </section>
  <section id="conclusion">
    <h2>おわりに</h2>
    <p>これで、本を書く準備は整いました。</p>
  </section>
</article>
```

CSS の最初の部分では、**名前付き**ページを設定します。これには、サイズ、方向、および印刷されるページの [`@top-center` マージン](/ja/docs/Web/CSS/Reference/At-rules/@page#マージンのアットルール)に表示されるコンテンツが含まれます。

```css live-sample___page-property
@page toc {
  size: a4 portrait;
  @top-center {
    content: "目次";
  }
}

@page foreword {
  size: a4 portrait;
  @top-center {
    content: "序文";
  }
}

@page introduction {
  size: a4 portrait;
  @top-center {
    content: "はじめに";
  }
}

@page conclusion {
  size: a4 portrait;
  @top-center {
    content: "おわりに";
  }
}

@page chapter {
  size: a4 landscape;
  @top-center {
    content: "章";
  }
}
```

```css hidden live-sample___page-property
fieldset {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  width: fit-content;
}
body {
  font: 1.1em sans-serif;
}
```

CSS の次の部分では、[属性セレクター](/ja/docs/Web/CSS/Reference/Selectors/Attribute_selectors)を使用して、前回の CSS の章で定義した名前付き `@page` ルールで定義した出力サイズ、方向、およびマージンを、`page` プロパティを使用する要素に適用します。
`class="chapter"` の節は同時実行であり、1 ページとして表示されます。
`break-after: page;` を使用してそれらを分割し、各章を別々に印刷されるページに分割します。

```css live-sample___page-property
@media print {
  fieldset {
    display: none;
  }
  section {
    font-size: 2rem;
    font-family: Roboto;
  }
  .chapter {
    border: tomato 2px solid;
  }
  [data-print="grouped"] > #toc,
  [data-print="paged"] > #toc {
    page: toc;
    font-family: Courier;
  }
  [data-print="grouped"] > #foreword,
  [data-print="paged"] > #foreword {
    page: foreword;
    font-family: Courier;
  }
  [data-print="grouped"] > #introduction,
  [data-print="paged"] > #introduction {
    page: introduction;
    font-family: Courier;
  }
  [data-print="grouped"] > #conclusion,
  [data-print="paged"] > #conclusion {
    page: conclusion;
    font-family: Courier;
  }
  [data-print="grouped"] > .chapter,
  [data-print="paged"] > .chapter {
    page: chapter;
  }
  [data-print="paged"] > .chapter {
    border: none;
    break-after: page;
  }
  .chapter > ul {
    columns: 2;
  }
}
```

JavaScript は、別の印刷オプションを選択すると、名前付きページが適用されている属性である `data-print` 属性の値を更新します。

```js live-sample___page-property
const printArea = document.querySelector("#print-area");
const printButton = document.querySelector("#print");
const printOption = document.querySelector("#printStyle");

printOption.addEventListener("change", (event) => {
  if (event.target.value === "single") {
    printArea.dataset.print = "single";
  } else if (event.target.value === "grouped") {
    printArea.dataset.print = "grouped";
  } else {
    printArea.dataset.print = "paged";
  }
});

printButton.addEventListener("click", () => {
  window.print();
});
```

出力される内容、および印刷プレビューダイアログに表示される内容は、選択した印刷スタイルラジオボタンによって異なります。

{{EmbedLiveSample('page-property', '100%', '540', , , , , "allow-modals")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

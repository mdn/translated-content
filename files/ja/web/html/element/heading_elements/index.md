---
title: "<h1>–<h6>: HTML の見出し要素"
slug: Web/HTML/Element/Heading_Elements
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{HTMLSidebar}}

**`<h1>`** ～ **`<h6>`** は [HTML](/ja/docs/Web/HTML) の要素で、セクションの見出しを 6 段階で表します。`<h1>` が最上位で、`<h6>` が最下位です。既定では、すべての見出し要素は[ブロックレベル](/ja/docs/Glossary/Block-level_content)ボックスを作成し、改行して始まり、その包含ブロックの中で利用できる幅いっぱいに広がります。

{{EmbedInteractiveExample("pages/tabbed/h1-h6.html", "tabbed-standard")}}

## 属性

見出し要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)のみがあります。

## 使用上の注意

- 見出し情報は、ユーザーエージェントが自動的に文書の目次を作成するために使用することがあります。
- テキストの大きさを変えるために見出し要素を使用しないでください。代わりに {{glossary("CSS")}} の {{cssxref("font-size")}} プロパティを使用してください。
- 見出しレベルを飛ばさないでください。常に `<h1>` から始め、次に `<h2>`、以下も同様にしてください。

### 1 つのページに複数の `<h1>` 要素を使用しない

1 つのページに複数の `<h1>` 要素を使用することは HTML 標準では認められていますが（[入れ子](#入れ子)でない限り）、これはよい習慣とはみなされません。1 つのページには、ページの内容を説明する 1 つの `<h1>` 要素（文書の [`<title> 要素`](/ja/docs/Web/HTML/Element/title)と同様）を置くのが一般的です。

> [!NOTE]
> 入れ子になった[コンテンツ区分要素](/ja/docs/Web/HTML/Element#コンテンツ区分)の中で複数の `<h1>` 要素を入れ子にすることは、HTML 標準の古いバージョンでは認められていました。しかし、これはよい習慣とはみなされず、現在は非適合となっています。詳しくは、[There Is No Document Outline Algorithm](https://adrianroselli.com/2016/08/there-is-no-document-outline-algorithm.html) をご覧ください。

1 ページに 1 つの `<h1>` を使用し、レベルをスキップせずに[見出しを入れ子](#入れ子)にすることを推奨します。

## 例

### すべての見出し

以下のコードでは、すべての見出しレベルを示しています。

```html
<h1>Heading level 1</h1>
<h2>Heading level 2</h2>
<h3>Heading level 3</h3>
<h4>Heading level 4</h4>
<h5>Heading level 5</h5>
<h6>Heading level 6</h6>
```

{{EmbedLiveSample('All_headings', '280', '300')}}

### ページの例

以下のコードでは、いくつかの見出しとその配下のコンテンツを示しています。

```html
<h1>Heading elements</h1>
<h2>Summary</h2>
<p>Some text here…</p>

<h2>Examples</h2>
<h3>Example 1</h3>
<p>Some text here…</p>

<h3>Example 2</h3>
<p>Some text here…</p>

<h2>See also</h2>
<p>Some text here…</p>
```

{{EmbedLiveSample('Example_page', '280', '480')}}

## アクセシビリティの考慮

### ナビゲーション

スクリーンリーダーの利用者にとって一般的なナビゲーション技法として、ページのコンテンツを判断するために、すばやく見出しから見出しへジャンプすることがあります。このため、見出しレベルを飛ばさないようにすることが重要です。見出しレベルを飛ばしてしまうと、このようにナビゲーションしている人が、見つからない見出しがどこにあるのかわからなくなり混乱してしまいます。

**悪い例:**

```html example-bad
<h1>Heading level 1</h1>
<h3>Heading level 3</h3>
<h4>Heading level 4</h4>
```

**良い例:**

```html example-good
<h1>Heading level 1</h1>
<h2>Heading level 2</h2>
<h3>Heading level 3</h3>
```

#### 入れ子

見出しはページのコンテンツの構造を反映して、節として入れ子になることがあります。多くのスクリーンリーダーはページのすべての見出しの順序付きリストを生成し、利用者がコンテンツの階層構造を手早く特定することもできます。

1. `h1` Beetles

   1. `h2` Etymology
   2. `h2` Distribution and Diversity
   3. `h2` Evolution

      1. `h3` Late Paleozoic
      2. `h3` Jurassic
      3. `h3` Cretaceous
      4. `h3` Cenozoic

   4. `h2` External Morphology

      1. `h3` Head

         1. `h4` Mouthparts

      2. `h3` Thorax

         1. `h4` Prothorax
         2. `h4` Pterothorax

      3. `h3` Legs
      4. `h3` Wings
      5. `h3` Abdomen

見出しが入れ子になった場合、見出しレベルは節が閉じる際に「飛ばされる」ことがあります。

- [Headings • Page Structure • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/page-structure/headings/)
- [MDN "WCAG を理解する ― ガイドライン 1.3 の解説"](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#ガイドライン_1.3_—_さまざまな方法で提示できるコンテンツの作成)
- [Understanding Success Criterion 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [MDN "WCAG を理解する ― ガイドライン 2.4 の解説"](/ja/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_—_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Understanding Success Criterion 2.4.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)
- [Understanding Success Criterion 2.4.6 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html)
- [Understanding Success Criterion 2.4.10 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-headings.html)

### 区分コンテンツのラベル付け

スクリーンリーダー利用者のための他のナビゲーションテクニックとして、[区分コンテンツ](/ja/docs/Web/HTML/Element#コンテンツ区分)の一覧を作成して、ページのレイアウトを特定するために使用するものがあります。

区分コンテンツは [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) および [`id`](/ja/docs/Web/HTML/Global_attributes#id) 属性の組み合わせで、セクションの目的を詳細に記述するラベルを付けることができます。このテクニックは、同一ページに 2 つ以上の区分要素がある場合に有用です。

#### 例

```html
<header>
  <nav aria-labelledby="primary-navigation">
    <h2 id="primary-navigation">Primary navigation</h2>
    <!-- navigation items -->
  </nav>
</header>

<!-- ページコンテンツ -->

<footer>
  <nav aria-labelledby="footer-navigation">
    <h2 id="footer-navigation">Footer navigation</h2>
    <!-- navigation items -->
  </nav>
</footer>
```

{{EmbedLiveSample('Sectioning_content_examples')}}

この例では、スクリーンリーダーは 2 つの {{HTMLElement("nav")}} セクションがあり、1 つが "Primary navigation" でもう 1 つが "Footer navigation" であるとアナウンスするでしょう。ラベルが提供されていない場合は、スクリーンリーダーを使用している人がそれぞれの `nav` 要素の中身を調べて、それぞれの用途を確かめなければならないかもしれません。

- [aria-labelledby 属性の利用](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [Labeling Regions • Page Structure • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/page-structure/labels/#using-aria-labelledby)

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >, 見出しコンテンツ, 知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >を受け入れるすべての要素。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/heading_role"
          >heading</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/tab_role"><code>tab</code></a>、<a href="/ja/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>、
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a> の何れか
      </td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLHeadingElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("p")}}
- {{HTMLElement("div")}}
- {{HTMLElement("section")}}

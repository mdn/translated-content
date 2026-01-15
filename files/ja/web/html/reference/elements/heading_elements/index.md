---
title: "<h1>–<h6>: HTML の見出し要素"
slug: Web/HTML/Reference/Elements/Heading_Elements
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

**`<h1>`** ～ **`<h6>`** は [HTML](/ja/docs/Web/HTML) の要素で、セクションの見出しを 6 段階で表します。`<h1>` が最上位で、`<h6>` が最下位です。既定では、すべての見出し要素は[ブロックレベル](/ja/docs/Glossary/Block-level_content)ボックスを作成し、改行して始まり、その包含ブロックの中で利用できる幅いっぱいに広がります。

{{InteractiveExample("HTML デモ: &lt;h1-h6&gt;", "tabbed-standard")}}

```html interactive-example
<h1>Beetles</h1>
<h2>External morphology</h2>
<h3>Head</h3>
<h4>Mouthparts</h4>
<h3>Thorax</h3>
<h4>Prothorax</h4>
<h4>Pterothorax</h4>
```

```css interactive-example
h1,
h2,
h3,
h4 {
  margin: 0.1rem 0;
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.5rem;
  padding-left: 20px;
}

h3 {
  font-size: 1.2rem;
  padding-left: 40px;
}

h4 {
  font-size: 1rem;
  font-style: italic;
  padding-left: 60px;
}
```

## 属性

見出し要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)のみがあります。

## 使用上の注意

- 見出し情報は、ユーザーエージェントが自動的に文書の目次を作成するために使用することがあります。
- テキストの大きさを変えるために見出し要素を使用しないでください。代わりに {{glossary("CSS")}} の {{cssxref("font-size")}} プロパティを使用してください。
- 見出しレベルを飛ばさないでください。常に `<h1>` から始め、次に `<h2>`、以下も同様にしてください。

### 1 つのページに複数の `<h1>` 要素を使用しない

1 つのページに複数の `<h1>` 要素を使用することは HTML 標準では認められていますが（[入れ子](#入れ子)でない限り）、これはよい習慣とはみなされません。1 つのページには、ページの内容を説明する 1 つの `<h1>` 要素（文書の [`<title>`](/ja/docs/Web/HTML/Reference/Elements/title) 要素と同様）を置くのが一般的です。

> [!NOTE]
> 入れ子になった[コンテンツ区分要素](/ja/docs/Web/HTML/Reference/Elements#コンテンツ区分)の中で複数の `<h1>` 要素を入れ子にすることは、HTML 標準の古いバージョンでは認められていました。しかし、これはよい習慣とはみなされず、現在は非適合となっています。詳しくは、[There Is No Document Outline Algorithm](https://adrianroselli.com/2016/08/there-is-no-document-outline-algorithm.html) をご覧ください。

1 ページに 1 つの `<h1>` を使用し、レベルを飛ばさずに[見出しを入れ子](#入れ子)にすることを推奨します。

### `<h1>` 要素に対して統一されたフォントサイズを指定

2025 年 5 月以前、[HTML 標準](https://html.spec.whatwg.org/multipage/rendering.html#sections-and-headings)では、 `<h1>` 要素は `<section>`、 `<article>`、`<aside>`、`<nav>` 要素内にある時は、 `<h2>` として（{{cssxref("font-size")}} が小さめであり、調整された {{cssxref("margin-block")}}）、さらに 1 階層内包されている場合は `<h3>` として、というようにレンダリングされるべきであると規定していました。この特別な文脈依存の既定のスタイルは、現在[削除されました](https://github.com/whatwg/html/issues/7867)。

古いコンテキスト依存の既定のスタイルを実装するブラウザーで `<h1>` のレンダリングを統一するには、次のスタイルルールを使用してください。

```css
h1 {
  margin-block: 0.67em;
  font-size: 2em;
}
```

あるいは、`<h1>` を対象とする他のスタイルルールを上書きしないようにするには、特異性がゼロの {{cssxref(":where()")}} を使用できます。

```css
:where(h1) {
  margin-block: 0.67em;
  font-size: 2em;
}
```

## アクセシビリティ

### ナビゲーション

スクリーンリーダーの利用者にとって一般的なナビゲーション技法として、ページのコンテンツを判断するために、すばやく見出しから見出しへジャンプすることがあります。このため、見出しレベルを飛ばさないようにすることが重要です。見出しレベルを飛ばしてしまうと、このようにナビゲーションしている人が、見つからない見出しがどこにあるのかわからなくなり混乱してしまいます。

**悪い例:**

```html example-bad
<h1>見出しレベル 1</h1>
<h3>見出しレベル 3</h3>
<h4>見出しレベル 4</h4>
```

**良い例:**

```html example-good
<h1>見出しレベル 1</h1>
<h2>見出しレベル 2</h2>
<h3>見出しレベル 3</h3>
```

#### 入れ子

見出しはページのコンテンツの構造を反映して、節として入れ子になることがあります。ほとんどのスクリーンリーダーは、ページ上のすべての見出しを番号付きリストとして生成することもできます。これにより、ユーザーはコンテンツの階層構造をすばやく把握し、様々な見出しに移動することができます。

以下のページ構造があった場合、

```html
<h1>Beetles</h1>

<h2>Etymology</h2>

<h2>Distribution and Diversity</h2>

<h2>Evolution</h2>
<h3>Late Paleozoic</h3>
<h3>Jurassic</h3>
<h3>Cretaceous</h3>
<h3>Cenozoic</h3>

<h2>External Morphology</h2>
<h3>Head</h3>
<h4>Mouthparts</h4>
<h3>Thorax</h3>
<h4>Prothorax</h4>
<h4>Pterothorax</h4>
<h3>Legs</h3>
<h3>Wings</h3>
<h3>Abdomen</h3>
```

スクリーンリーダーは次のようなリストを生成します。

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
- [MDN "WCAG を理解する ― ガイドライン 1.3 の解説"](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#ガイドライン_1.3_—_さまざまな方法で提示できるコンテンツの作成)
- [Understanding Success Criterion 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [MDN "WCAG を理解する ― ガイドライン 2.4 の解説"](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#ガイドライン_2.4_—_ナビゲート可能_ユーザーがナビゲートし、コンテンツを見つけ、どこにいるのかを判断するのに役立つ方法を提供する)
- [Understanding Success Criterion 2.4.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)
- [Understanding Success Criterion 2.4.6 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html)
- [Understanding Success Criterion 2.4.10 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-headings.html)

### 区分コンテンツのラベル付け

スクリーンリーダー利用者のための他のナビゲーションテクニックとして、[区分コンテンツ](/ja/docs/Web/HTML/Reference/Elements#コンテンツ区分)の一覧を作成して、ページのレイアウトを特定するために使用するものがあります。

区分コンテンツは [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) および [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) 属性の組み合わせで、セクションの目的を詳細に記述するラベルを付けることができます。このテクニックは、同一ページに 2 つ以上の区分要素がある場合に有用です。

#### 例

```html
<header>
  <nav aria-labelledby="primary-navigation">
    <h2 id="primary-navigation">主要ナビゲーション</h2>
    <!-- ナビゲーションアイテム -->
  </nav>
</header>

<!-- ページコンテンツ -->

<footer>
  <nav aria-labelledby="footer-navigation">
    <h2 id="footer-navigation">フッターナビゲーション</h2>
    <!-- navigation items -->
  </nav>
</footer>
```

{{EmbedLiveSample('Sectioning_content_examples')}}

この例では、スクリーンリーダーは 2 つの {{HTMLElement("nav")}} セクションがあり、1 つが "Primary navigation" でもう 1 つが "Footer navigation" であるとアナウンスするでしょう。ラベルが提供されていない場合は、スクリーンリーダーを使用している人がそれぞれの `nav` 要素の中身を調べて、それぞれの用途を確かめなければならないかもしれません。

- [aria-labelledby 属性の利用](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [Labeling Regions • Page Structure • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/page-structure/labels/#using-aria-labelledby)

## 例

### すべての見出し

以下のコードでは、すべての見出しレベルを示しています。

```html
<h1>見出しレベル 1</h1>
<h2>見出しレベル 2</h2>
<h3>見出しレベル 3</h3>
<h4>見出しレベル 4</h4>
<h5>見出しレベル 5</h5>
<h6>見出しレベル 6</h6>
```

{{EmbedLiveSample('All_headings', '280', '300')}}

### ページの例

以下のコードでは、いくつかの見出しとその配下のコンテンツを示しています。

```html
<h1>見出し要素</h1>
<h2>概要</h2>
<p>ここにテキストを書く…</p>

<h2>例</h2>
<h3>例 1</h3>
<p>ここにテキストを書く…</p>

<h3>例 2</h3>
<p>ここにテキストを書く…</p>

<h2>See also</h2>
<p>ここにテキストを書く…</p>
```

{{EmbedLiveSample('Example_page', '280', '480')}}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Guides/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >, 見出しコンテンツ, 知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
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
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >を受け入れるすべての要素。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role"
          >heading</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role"><code>tab</code></a>、<a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>、
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a> の何れか
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

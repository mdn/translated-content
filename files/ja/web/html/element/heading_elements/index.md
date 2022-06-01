---
title: '<h1>–<h6>: HTML の見出し要素'
slug: Web/HTML/Element/Heading_Elements
tags:
  - Element
  - HTML
  - HTML sections
  - Reference
  - Web
browser-compat: html.elements.h1
translation_of: Web/HTML/Element/Heading_Elements
---

{{HTMLRef}}

**HTML の `<h1>`–`<h6>` 要素**は、セクションの見出しを 6 段階で表します。`<h1>` が最上位で、`<h6>` が最下位です。

{{EmbedInteractiveExample("pages/tabbed/h1-h6.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row"><a href="/ja/docs/Web/Guide/HTML/Content_categories">コンテンツカテゴリー</a></th>
      <td><a href="/ja/docs/Web/Guide/HTML/Content_categories#flow_content">フローコンテンツ</a>, 見出しコンテンツ, 知覚可能コンテンツ</td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td><a href="/ja/docs/Web/Guide/HTML/Content_categories#phrasing_content">記述コンテンツ</a></td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td><a href="/ja/docs/Web/Guide/HTML/Content_categories#flow_content">フローコンテンツ</a>を受け入れるすべての要素。{{HTMLElement("hgroup")}} は非推奨になったので、見出し要素をその子要素として使用しないでください。</td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td><a href="/ja/docs/Web/Accessibility/ARIA/Roles/heading_role">heading</a></td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>{{ARIARole("tab")}}, {{ARIARole("presentation")}} または {{ARIARole("none")}}</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLHeadingElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

見出し要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)のみがあります。

> **Note:** `align` 属性は廃止されたので、使用しないでください。

## 使用上の注意

- 見出し情報は、ユーザーエージェントが自動的に文書の目次を作成するために使用することがあります。
- テキストの大きさを変えるために見出し要素を使用しないでください。代わりに {{glossary("CSS")}} の {{cssxref("font-size")}} プロパティを使用してください。
- 見出しレベルを飛ばすことは避けてください。常に `<h1>` から始め、次に `<h2>`、以下も同様にしてください。
- `<h1>` はページまたはビューにつき 1 つだけ使用してください。コンテンツの全体的な目的を簡潔に記載すべきです。

### 複数の `<h1>` 要素の使用

複数の `<h1>` を使用することは HTML の仕様では認められていますが、ベストプラクティスとは見なされていません。`<h1>` を 1 つだけ使用することは、スクリーンリーダーの利用者にとって有益です。

HTML の仕様には、`<section>` 要素で形成されるアウトラインという概念があります。もしこれが実装されれば、複数の `<h1>` 要素の使用が可能になり、スクリーンリーダーを含むユーザーエージェントが、セクションの中にネストされた `<h1>` が小見出しであると理解することができるようになります。しかし、この機能はまだ実装されていません。したがって、見出し要素を適切に使用して文書の概要を記述することが重要です。

アウトラインの状況については、以下の記事で詳しく解説しています。

- [Computer says no to the HTML5 outline](https://html5doctor.com/computer-says-no-to-html5-document-outline/)
- [A decade + a year of heading backwards](https://html5accessibility.com/stuff/2021/03/21/a-decade-a-year-of-heading-backwards/)

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

以下の様に出力されます。

{{ EmbedLiveSample('All_headings', '280', '300', '') }}

### ページの例

以下のコードでは、いくつかの見出しとその配下のコンテンツを示しています。

```html
<h1>Heading elements</h1>
<h2>Summary</h2>
<p>Some text here...</p>

<h2>Examples</h2>
<h3>Example 1</h3>
<p>Some text here...</p>

<h3>Example 2</h3>
<p>Some text here...</p>

<h2>See also</h2>
<p>Some text here...</p>
```

以下の様に出力されます。

{{ EmbedLiveSample('Example_page', '280', '480', '') }}

## アクセシビリティの考慮

### ナビゲーション

読み上げソフトの利用者のよくあるナビゲーションテクニックとして、ページの内容を手早く特定するために、見出しから見出しへとジャンプすることがあります。このため、見出しレベルを飛ばさないようにすることが重要です。見出しレベルを飛ばしてしまうと、このようにナビゲーションしている人が、見つからない見出しがどこにあるのかわからなくなり混乱してしまいます。

#### 悪い例

```html example-bad
<h1>Heading level 1</h1>
<h3>Heading level 3</h3>
<h4>Heading level 4</h4>
```

#### 良い例

```html example-good
<h1>Heading level 1</h1>
<h2>Heading level 2</h2>
<h3>Heading level 3</h3>
```

#### 入れ子

見出しはページのコンテンツの構造を反映して、節として入れ子になることがあります。多くの読み上げソフトはページのすべての見出しの順序付きリストを生成し、利用者がコンテンツの階層構造を手早く特定することもできます。

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
- [MDN "WCAG を理解する ― ガイドライン 1.3 の解説"](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_%E2%80%94_create_content_that_can_be_presented_in_different_ways)
- [Understanding Success Criterion 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [MDN "WCAG を理解する ― ガイドライン 2.4 の解説"](/ja/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_—_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Understanding Success Criterion 2.4.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)
- [Understanding Success Criterion 2.4.6 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html)
- [Understanding Success Criterion 2.4.10 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-headings.html)

### 区分コンテンツのラベル付け

読み上げソフト利用者のための他のナビゲーションテクニックとして、[区分コンテンツ](/ja/docs/Web/HTML/Element#content_sectioning)の一覧を作成して、ページのレイアウトを特定するために使用するものがあります。

区分コンテンツは [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute) および {{htmlattrxref("id")}} 属性の組み合わせで、セクションの目的を詳細に記述するラベルを付けることができます。このテクニックは、同一ページに二つ以上の区分要素がある場合に有用です。

#### Example

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

この例では、読み上げ技術は二つの {{HTMLElement("nav")}} セクションがあり、一つが "Primary navigation" でもう一つが "Footer navigation" であるとアナウンスするでしょう。ラベルが提供されていない場合は、読み上げソフトを使用している人がそれぞれの `nav` 要素の中身を調べて、それぞれの用途を確かめなければならないかもしれません。

- [aria-labelledby 属性の利用](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute)
- [Labeling Regions • Page Structure • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/page-structure/labels/#using-aria-labelledby)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("p")}}
- {{HTMLElement("div")}}
- {{HTMLElement("section")}}

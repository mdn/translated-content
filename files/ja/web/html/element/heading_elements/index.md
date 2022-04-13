---
title: '<h1>–<h6>: HTML の見出し要素'
slug: Web/HTML/Element/Heading_Elements
tags:
  - Element
  - HTML
  - HTML sections
  - Reference
  - Web
translation_of: Web/HTML/Element/Heading_Elements
---

{{HTMLRef}}

<span class="seoSummary"><strong>HTML の <code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code> 要素</strong>は、セクションの見出しを6段階で表します。 <code>&lt;h1&gt;</code> が最上位で、 <code>&lt;h6&gt;</code> が最下位です。</span>

{{EmbedInteractiveExample("pages/tabbed/h1-h6.html", "tabbed-standard")}}

このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/ja/docs/Web/Guide/HTML/Content_categories">コンテンツカテゴリ</a></th>
   <td><a href="/ja/docs/Web/Guide/HTML/Content_categories#Flow_content">フローコンテンツ</a>, 見出しコンテンツ, 知覚可能コンテンツ</td>
  </tr>
  <tr>
   <th scope="row">許可されている内容</th>
   <td><a href="/ja/docs/Web/Guide/HTML/Content_categories#Phrasing_content">記述コンテンツ</a></td>
  </tr>
  <tr>
   <th scope="row">タグの省略</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">許可されている親要素</th>
   <td><a href="/ja/docs/Web/Guide/HTML/Content_categories#Flow_content">フローコンテンツ</a>を受け入れるすべての要素。 {{HTMLElement("hgroup")}} は非推奨になったので、見出し要素をその子要素として使用しないでください。</td>
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

見出し要素には<a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a>のみがあります。

> **Note:** `align` 属性は廃止されたので、使用しないでください。

## 使用上の注意

- 見出し情報は、ユーザーエージェントが自動的に文書の目次を作成するために使用することがあります。
- テキストの大きさを変えるために見出し要素を使用しないでください。代わりに {{glossary("CSS")}} の {{cssxref("font-size")}} プロパティを使用してください。
- 見出しレベルを飛ばすことは避けてください。常に <code>&lt;h1&gt;</code> から始め、次に <code>&lt;h2&gt;</code>、以下も同様にしてください。
- <code>&lt;h1&gt;</code> はページまたはビューにつき1つだけ使用してください。内容の全体的な目的を簡潔に記載しなければなりません。
- 複数の <code>&lt;h1&gt;</code> を使用してもエラーにはなりませんが、これは最善の方法とは見なされていません。これは読み上げソフトや {{glossary("SEO")}} で有利です。
- 1つのページで <code>&lt;h1&gt;</code> を2回以上使用することは避けてください。詳しくは<a href="/ja/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines#Section_Elements_in_HTML5">区分化要素</a>を参照してください。

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

読み上げソフトの利用者のよくあるナビゲーションテクニックとして、ページの内容を手早く特定するために、見出しから見出しへとジャンプすることがあります。このため、見出しレベルを飛ばさないようにすることが重要です。飛ばすとこのようにナビゲーションしている人が、ヘッダーがないと疑問を残すことになり、混乱を生じさせます。

#### 悪い例

```html
<h1>Heading level 1</h1>
<h3>Heading level 3</h3>
<h4>Heading level 4</h4>
```

#### 良い例

```html
<h1>Heading level 1</h1>
<h2>Heading level 2</h2>
<h3>Heading level 3</h3>
```

#### 入れ子

ヘッダーはページのコンテンツの構造を反映して、節として入れ子になることがあります。多くの読み上げソフトはページのすべての見出しの順序付きリストを生成し、利用者がコンテンツの階層構造を手早く特定することもできます。

<ol>
 <li><code>h1</code> Beetles

  <ol>
   <li><code>h2</code> Etymology</li>
   <li><code>h2</code> Distribution and Diversity</li>
   <li><code>h2</code> Evolution
    <ol>
     <li><code>h3</code> Late Paleozoic</li>
     <li><code>h3</code> Jurassic</li>
     <li><code>h3</code> Cretaceous</li>
     <li><code>h3</code> Cenozoic</li>
    </ol>
   </li>
   <li><code>h2</code> External Morphology
    <ol>
     <li><code>h3</code> Head
      <ol>
       <li><code>h4</code> Mouthparts</li>
      </ol>
     </li>
     <li><code>h3</code> Thorax
      <ol>
       <li><code>h4</code> Prothorax</li>
       <li><code>h4</code> Pterothorax</li>
      </ol>
     </li>
     <li><code>h3</code> Legs</li>
     <li><code>h3</code> Wings</li>
     <li><code>h3</code> Abdomen</li>
    </ol>
   </li>
  </ol>
 </li>
</ol>

見出しが入れ子になった場合、見出しレベルは節が閉じる際に「飛ばされる」ことがあります。

- <a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">Headings • Page Structure • WAI Web Accessibility Tutorials</a>
- <a href="/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.3_—_Create_content_that_can_be_presented_in_different_ways">MDN "WCAG を理解する ― ガイドライン 1.3 の解説"</a>
- <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html">Understanding Success Criterion 1.3.1 | W3C Understanding WCAG 2.0</a>
- <a href="/ja/docs/Web/Accessibility/Understanding_WCAG/Operable#Guideline_2.4_—_Navigable_Provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are">MDN "WCAG を理解する ― ガイドライン 2.4 の解説"</a>
- <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html">Understanding Success Criterion 2.4.1 | W3C Understanding WCAG 2.0</a>
- <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html">Understanding Success Criterion 2.4.6 | W3C Understanding WCAG 2.0</a>
- <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-headings.html">Understanding Success Criterion 2.4.10 | W3C Understanding WCAG 2.0</a>

### 区分コンテンツのラベル付け

読み上げソフト利用者のための他のナビゲーションテクニックとして、<a href="/ja/docs/Web/HTML/Element#Content_sectioning">区分コンテンツ</a>の一覧を作成して、ページのレイアウトを特定するために使用するものがあります。

区分コンテンツは <code><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute">aria-labelledby</a></code> および {{htmlattrxref("id")}} 属性の組み合わせで、セクションの目的を詳細に記述するラベルを付けることができます。このテクニックは、同一ページに二つ以上の区分要素がある場合に有用です。

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

この例では、読み上げ技術は二つの {{HTMLElement("nav")}} セクションがあり、一つが "Primary navigation" でもう一つが "Footer navigation" であるとアナウンスするでしょう。ラベルが提供されていない場合は、読み上げソフトを使用している人がそれぞれの <code>nav</code> 要素の中身を調べて、それぞれの用途を確かめなければならないかもしれません。

- <a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute">aria-labelledby 属性の利用</a>
- <a href="https://www.w3.org/WAI/tutorials/page-structure/labels/#using-aria-labelledby">Labeling Regions • Page Structure • W3C WAI Web Accessibility Tutorials</a>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("html.elements.h1")}}

## 関連情報

- {{HTMLElement("p")}}
- {{HTMLElement("div")}}
- {{HTMLElement("section")}}

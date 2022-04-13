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
<div>{{HTMLRef}}</div>

<p id="Summary"><span class="seoSummary"><strong>HTML の <code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code> 要素</strong>は、セクションの見出しを6段階で表します。 <code>&lt;h1&gt;</code> が最上位で、 <code>&lt;h6&gt;</code> が最下位です。</span></p>

<div>{{EmbedInteractiveExample("pages/tabbed/h1-h6.html", "tabbed-standard")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

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

<h2 id="Attributes" name="Attributes">属性</h2>

<p>見出し要素には<a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a>のみがあります。</p>

<div class="note">
<p><code>align</code> 属性は廃止されたので、使用しないでください。</p>
</div>

<h2 id="Usage_notes" name="Usage_notes">使用上の注意</h2>

<ul>
 <li>見出し情報は、ユーザーエージェントが自動的に文書の目次を作成するために使用することがあります。</li>
 <li>テキストの大きさを変えるために見出し要素を使用しないでください。代わりに {{glossary("CSS")}} の {{cssxref("font-size")}} プロパティを使用してください。</li>
 <li>見出しレベルを飛ばすことは避けてください。常に <code>&lt;h1&gt;</code> から始め、次に <code>&lt;h2&gt;</code>、以下も同様にしてください。</li>
 <li><code>&lt;h1&gt;</code> はページまたはビューにつき1つだけ使用してください。内容の全体的な目的を簡潔に記載しなければなりません。</li>
 <li>複数の <code>&lt;h1&gt;</code> を使用してもエラーにはなりませんが、これは最善の方法とは見なされていません。これは読み上げソフトや {{glossary("SEO")}} で有利です。</li>
 <li>1つのページで <code>&lt;h1&gt;</code> を2回以上使用することは避けてください。詳しくは<a href="/ja/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines#Section_Elements_in_HTML5">区分化要素</a>を参照してください。</li>
</ul>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="All_headings" name="All_headings">すべての見出し</h3>

<p>以下のコードでは、すべての見出しレベルを示しています。</p>

<pre class="brush: html notranslate">&lt;h1&gt;Heading level 1&lt;/h1&gt;
&lt;h2&gt;Heading level 2&lt;/h2&gt;
&lt;h3&gt;Heading level 3&lt;/h3&gt;
&lt;h4&gt;Heading level 4&lt;/h4&gt;
&lt;h5&gt;Heading level 5&lt;/h5&gt;
&lt;h6&gt;Heading level 6&lt;/h6&gt;
</pre>

<p>以下の様に出力されます。</p>

<p>{{ EmbedLiveSample('All_headings', '280', '300', '') }}</p>

<h3 id="Example_page" name="Example_page">ページの例</h3>

<p>以下のコードでは、いくつかの見出しとその配下のコンテンツを示しています。</p>

<pre class="brush: html notranslate">&lt;h1&gt;Heading elements&lt;/h1&gt;
&lt;h2&gt;Summary&lt;/h2&gt;
&lt;p&gt;Some text here...&lt;/p&gt;

&lt;h2&gt;Examples&lt;/h2&gt;
&lt;h3&gt;Example 1&lt;/h3&gt;
&lt;p&gt;Some text here...&lt;/p&gt;

&lt;h3&gt;Example 2&lt;/h3&gt;
&lt;p&gt;Some text here...&lt;/p&gt;

&lt;h2&gt;See also&lt;/h2&gt;
&lt;p&gt;Some text here...&lt;/p&gt;
</pre>

<p>以下の様に出力されます。</p>

<p>{{ EmbedLiveSample('Example_page', '280', '480', '') }}</p>

<h2 id="Accessibility_concerns" name="Accessibility_concerns">アクセシビリティの考慮</h2>

<h3 id="Navigation" name="Navigation">ナビゲーション</h3>

<p>読み上げソフトの利用者のよくあるナビゲーションテクニックとして、ページの内容を手早く特定するために、見出しから見出しへとジャンプすることがあります。このため、見出しレベルを飛ばさないようにすることが重要です。飛ばすとこのようにナビゲーションしている人が、ヘッダーがないと疑問を残すことになり、混乱を生じさせます。</p>

<h4 id="Dont" name="Don't">悪い例</h4>

<pre class="brush: html example-bad notranslate">&lt;h1&gt;Heading level 1&lt;/h1&gt;
&lt;h3&gt;Heading level 3&lt;/h3&gt;
&lt;h4&gt;Heading level 4&lt;/h4&gt;
</pre>

<h4 id="Do" name="Do">良い例</h4>

<pre class="brush: html example-good notranslate">&lt;h1&gt;Heading level 1&lt;/h1&gt;
&lt;h2&gt;Heading level 2&lt;/h2&gt;
&lt;h3&gt;Heading level 3&lt;/h3&gt;
</pre>

<h4 id="Nesting" name="Nesting">入れ子</h4>

<p>ヘッダーはページのコンテンツの構造を反映して、節として入れ子になることがあります。多くの読み上げソフトはページのすべての見出しの順序付きリストを生成し、利用者がコンテンツの階層構造を手早く特定することもできます。</p>

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

<p>見出しが入れ子になった場合、見出しレベルは節が閉じる際に「飛ばされる」ことがあります。</p>

<ul>
 <li><a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">Headings • Page Structure • WAI Web Accessibility Tutorials</a></li>
 <li><a href="/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.3_—_Create_content_that_can_be_presented_in_different_ways">MDN "WCAG を理解する ― ガイドライン 1.3 の解説"</a></li>
 <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html">Understanding Success Criterion 1.3.1 | W3C Understanding WCAG 2.0</a></li>
 <li><a href="/ja/docs/Web/Accessibility/Understanding_WCAG/Operable#Guideline_2.4_—_Navigable_Provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are">MDN "WCAG を理解する ― ガイドライン 2.4 の解説"</a></li>
 <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html">Understanding Success Criterion 2.4.1 | W3C Understanding WCAG 2.0</a></li>
 <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html">Understanding Success Criterion 2.4.6 | W3C Understanding WCAG 2.0</a></li>
 <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-headings.html">Understanding Success Criterion 2.4.10 | W3C Understanding WCAG 2.0</a></li>
</ul>

<h3 id="Labeling_section_content" name="Labeling_section_content">区分コンテンツのラベル付け</h3>

<p>読み上げソフト利用者のための他のナビゲーションテクニックとして、<a href="/ja/docs/Web/HTML/Element#Content_sectioning">区分コンテンツ</a>の一覧を作成して、ページのレイアウトを特定するために使用するものがあります。</p>

<p>区分コンテンツは <code><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute">aria-labelledby</a></code> および {{htmlattrxref("id")}} 属性の組み合わせで、セクションの目的を詳細に記述するラベルを付けることができます。このテクニックは、同一ページに二つ以上の区分要素がある場合に有用です。</p>

<h4 id="Example">Example</h4>

<pre class="brush: html notranslate">&lt;header&gt;
  &lt;nav aria-labelledby="primary-navigation"&gt;
    &lt;h2 id="primary-navigation"&gt;Primary navigation&lt;/h2&gt;
    &lt;!-- navigation items --&gt;
  &lt;/nav&gt;
&lt;/header&gt;

&lt;!-- ページコンテンツ --&gt;

&lt;footer&gt;
  &lt;nav aria-labelledby="footer-navigation"&gt;
    &lt;h2 id="footer-navigation"&gt;Footer navigation&lt;/h2&gt;
    &lt;!-- navigation items --&gt;
  &lt;/nav&gt;
&lt;/footer&gt;
</pre>

<p>この例では、読み上げ技術は二つの {{HTMLElement("nav")}} セクションがあり、一つが "Primary navigation" でもう一つが "Footer navigation" であるとアナウンスするでしょう。ラベルが提供されていない場合は、読み上げソフトを使用している人がそれぞれの <code>nav</code> 要素の中身を調べて、それぞれの用途を確かめなければならないかもしれません。</p>

<ul>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute">aria-labelledby 属性の利用</a></li>
 <li><a href="https://www.w3.org/WAI/tutorials/page-structure/labels/#using-aria-labelledby">Labeling Regions • Page Structure • W3C WAI Web Accessibility Tutorials</a></li>
</ul>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements', '&lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;, and &lt;h6&gt;')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'sections.html#the-h1-h2-h3-h4-h5-and-h6-elements', '&lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;, and &lt;h6&gt;')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML4.01', 'struct/global.html#h-7.5.5', '&lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;, and &lt;h6&gt;')}}</td>
   <td>{{Spec2('HTML4.01')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("html.elements.h1")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTMLElement("p")}}</li>
 <li>{{HTMLElement("div")}}</li>
 <li>{{HTMLElement("section")}}</li>
</ul>

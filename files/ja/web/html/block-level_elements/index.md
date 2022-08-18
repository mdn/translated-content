---
title: ブロックレベル要素
slug: Web/HTML/Block-level_elements
tags:
  - Beginner
  - Development
  - Guide
  - HTML
  - HTML5
  - Web
translation_of: Web/HTML/Block-level_elements
---
<p>HTML (<strong>Hypertext Markup Language</strong>) の要素は従来、 「ブロックレベル」要素または「インライン要素」の何れかに分類されてきました。これは表示特性であることから、現在は CSS において<a href="/ja/docs/Web/CSS/CSS_Flow_Layout">フローレイアウト</a>の中で定義されています。<span class="seoSummary">ブロックレベル要素は親要素 (コンテナー) の水平空間全体と、内容物の高さに等しい垂直空間を占有し、「ブロック」を生成します。</span>この記事では、 HTML のブロックレベル要素とは何か、<a href="/ja/docs/Web/HTML/Inline-level_elements">インラインレベル要素</a>とどのように異なるかを説明します。</p>

<p>ブラウザーは一般的に、前後に新しい行を伴ってブロックレベル要素を表示します。これはボックスを積み上げたように見えます。</p>

<div class="note">
<p>ブロックレベル要素は常に新しい行から始まり、利用可能な全幅を取ります (できる限り左右に伸びます)。</p>
</div>

<p>以下の例では、ブロックレベル要素が与える影響を示しています。</p>

<h2 id="Block-level_Example" name="Block-level_Example">ブロックレベル要素</h2>

<h3 id="HTML" name="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;p&gt;This paragraph is a block-level element; its background has been colored to display the paragraph's parent element.&lt;/p&gt;</pre>

<h3 id="CSS" name="CSS">CSS</h3>

<pre class="brush: css notranslate">p { background-color: #8ABB55; }
</pre>

<p>{{ EmbedLiveSample('Block-level_Example') }}</p>

<h2 id="Usage" name="Usage">使用法</h2>

<ul>
 <li>ブロックレベル要素は {{HTMLElement("body")}} 要素内にのみ現れます。</li>
</ul>

<h2 id="Block-level_vs._inline" name="Block-level_vs._inline">ブロックレベル要素とインライン要素</h2>

<p>ブロックレベル要素とインライン要素の間には、二つの大きな違いがあります。</p>

<dl>
 <dt>包含モデル</dt>
 <dd>一般的に、ブロックレベル要素はインライン要素と他のブロックレベル要素を含むことができます。この固有の構造による区別は、ブロック要素がインライン要素よりも「大きな」構造を構築するという考え方です。</dd>
 <dt>既定の整形</dt>
 <dd>既定では、ブロックレベル要素は新しい行から始まりますが、インライン要素は行内のどこからでも始めることができます。</dd>
</dl>

<p>ブロックレベル要素とインライン要素という区分は、 HTML 4.01 までの仕様書で使用されていました。 HTML5 ではこの二つの区分が、より複雑な<a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリ</a>の組み合わせに置き換えられました。「インライン」はおよそ<a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ">記述コンテンツ</a>のカテゴリに対応しているのに対し、「ブロックレベル」カテゴリは HTML5 のコンテンツカテゴリには直接対応しませんが、<em>「ブロックレベル」要素と「インライン」要素の組み合わせ</em>は HTML5 の<a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ">フローコンテンツ</a>に対応します。他にも、<a href="/ja/docs/Web/Guide/HTML/Content_categories#対話型コンテンツ">対話型コンテンツ</a>などの他のカテゴリも存在します。</p>

<h2 id="Elements" name="Elements">要素</h2>

<p>「ブロックレベル」要素の一覧は以下のとおりです (ただし HTML5 の新規要素は、厳密には「ブロックレベル」であると定義されていません)。</p>

<div class="threecolumns">
<dl>
 <dt>{{ HTMLElement("address") }}</dt>
 <dd>連絡先情報です。</dd>
 <dt>{{ HTMLElement("article") }}</dt>
 <dd>記事コンテンツです。</dd>
 <dt>{{ HTMLElement("aside") }}</dt>
 <dd>本論から外れたコンテンツです。</dd>
 <dt>{{ HTMLElement("blockquote") }}</dt>
 <dd>長い (「ブロック」の) 引用です。</dd>
 <dt>{{ HTMLElement("details") }}</dt>
 <dd>折りたたみウィジェットです。</dd>
 <dt>{{ HTMLElement("dialog") }}</dt>
 <dd>ダイアログボックスです。</dd>
 <dt>{{ HTMLElement("dd") }}</dt>
 <dd>定義リストで用語を説明します。</dd>
 <dt>{{ HTMLElement("div") }}</dt>
 <dd>文書の一部です。</dd>
 <dt>{{ HTMLElement("dl") }}</dt>
 <dd>定義リストです。</dd>
 <dt>{{ HTMLElement("dt") }}</dt>
 <dd>定義語リストの用語です。</dd>
 <dt>{{ HTMLElement("fieldset") }}</dt>
 <dd>フィールドセットのラベルです。</dd>
 <dt>{{ HTMLElement("figcaption") }}</dt>
 <dd>図表のキャプションです。</dd>
 <dt>{{ HTMLElement("figure") }}</dt>
 <dd>キャプション ({{HTMLElement("figcaption")}} を参照) を伴うメディアコンテンツをグループ化します。</dd>
 <dt>{{ HTMLElement("footer") }}</dt>
 <dd>セクションまたはページのフッターです。</dd>
 <dt>{{ HTMLElement("form") }}</dt>
 <dd>入力フォームです。</dd>
 <dt>{{ HTMLElement("h1") }}, {{ HTMLElement("h2") }}, {{ HTMLElement("h3") }}, {{ HTMLElement("h4") }}, {{ HTMLElement("h5") }}, {{ HTMLElement("h6") }}</dt>
 <dd>見出しレベル 1-6 です。</dd>
 <dt>{{ HTMLElement("header") }}</dt>
 <dd>セクションまたはページのヘッダーです。</dd>
 <dt>{{ HTMLElement("hgroup") }}</dt>
 <dd>見出し情報をグループ化します。</dd>
 <dt>{{ HTMLElement("hr") }}</dt>
 <dd>水平線 (区切り線) です。</dd>
 <dt>{{ HTMLElement("li") }}</dt>
 <dd>リストの項目です。</dd>
 <dt>{{ HTMLElement("main") }}</dt>
 <dd>この文書で固有の中心的なコンテンツを含みます。</dd>
 <dt>{{ HTMLElement("nav") }}</dt>
 <dd>ナビゲーションのリンクを含みます。</dd>
 <dt>{{ HTMLElement("ol") }}</dt>
 <dd>番号付きリストです。</dd>
 <dt>{{ HTMLElement("p") }}</dt>
 <dd>段落です。</dd>
 <dt>{{ HTMLElement("pre") }}</dt>
 <dd>整形済みテキストです。</dd>
 <dt>{{ HTMLElement("section") }}</dt>
 <dd>ウェブページのセクションです。</dd>
 <dt>{{ HTMLElement("table") }}</dt>
 <dd>表です。</dd>
 <dt>{{ HTMLElement("ul") }}</dt>
 <dd>番号なしリストです。</dd>
</dl>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/HTML/Inline_elements">インライン要素</a></li>
 <li>{{cssxref("display")}}</li>
 <li><a href="/ja/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow">通常フローでのブロックおよびインラインレイアウト</a></li>
</ul>

<div>{{QuickLinksWithSubpages("/ja/docs/Web/HTML/")}}</div>

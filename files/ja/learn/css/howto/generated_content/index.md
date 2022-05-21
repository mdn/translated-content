---
title: Content
slug: Learn/CSS/Howto/Generated_content
tags:
  - CSS
  - 'CSS:Getting_Started'
  - Getting_Started
translation_of: Learn/CSS/Howto/Generated_content
---
<div>{{CSSTutorialTOC}}</div>

<div>{{previousPage("/ja/docs/CSS/Getting_Started/Color", "Color")}} これは<span class="seoSummary"> <a href="/ja/docs/CSS/Getting_Started" title="CSS/Getting Started">CSS Getting Started</a>チュートリアルの第9章です; 文書が表示されたとき CSS を使ってコンテンツを追加するいくつかの方法について述べます。スタイルシートを編集して、テキストや画像を追加できます。</span></div>

<h2 class="clearLeft" id="Information.3A_Content" name="Information.3A_Content">コンテンツについて</h2>

<p>CSS の重要な利点のひとつが、文書の体裁（style）と内容（コンテンツ）を切り離しやすくすることです。それでも、あるコンテンツを文書ではなく、スタイルシートに含めたほうがわかりやすいことがあります。</p>

<p>スタイルシートではテキストや画像から成るコンテンツを記述できます。コンテンツと文書の構造に強い関連があるとき、コンテンツをスタイルシート内に記述します。</p>

<div class="tuto_details">
<div class="tuto_type">さらに詳しく</div>

<p>スタイルシートでコンテンツを記述すると、面倒な話が生まれる可能性があります。例えば、文書の複数の言語版をスタイルシートを共有して作ることがあるかもしれません。これは、スタイルシートの部分的に訳すときには、その一部を別々のファイルにわけるとともに、適切な言語版の文書とリンクされるよう編集しなければならない、ということです。</p>

<p>この混乱は、コンテンツがすべての言語や文化で利用できる記号や画像で記述されていれば発生しません。</p>

<p>スタイルシート内に記述されたコンテンツは、DOMの一部にはなりません。</p>
</div>

<h3 id="Text_content" name="Text_content">テキストコンテンツ</h3>

<p>CSS で要素の前または後ろにテキストコンテンツを挿入できます。このためには、ルールを作って {{cssxref(":before")}} または {{cssxref(":after")}} をそのセレクタに追加します。宣言部分には、specify the {{cssxref("content")}} プロパティと、その値としてテキストコンテンツを記述します。</p>

<div class="tuto_example">
<div class="tuto_type">例
<h4 id="HTML">HTML</h4>

<pre class="brush: html line-numbers language-html"><code class="language-html">A text where I need to <span class="tag token"><span class="tag token"><span class="punctuation token">&lt;</span>span</span> <span class="attr-name token">class</span><span class="attr-value token"><span class="punctuation token">=</span><span class="punctuation token">"</span>ref<span class="punctuation token">"</span></span><span class="punctuation token">&gt;</span></span>something<span class="tag token"><span class="tag token"><span class="punctuation token">&lt;/</span>span</span><span class="punctuation token">&gt;</span></span></code></pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css line-numbers language-css"><code class="language-css"><span class="selector token"><span class="class token">.ref</span><span class="pseudo-element token">::before</span></span> <span class="punctuation token">{</span>
  <span class="property token">font-weight</span><span class="punctuation token">:</span> bold<span class="punctuation token">;</span>
  <span class="property token">color</span><span class="punctuation token">:</span> navy<span class="punctuation token">;</span>
  <span class="property token">content</span><span class="punctuation token">:</span> <span class="string token">"Reference "</span><span class="punctuation token">;</span>
<span class="punctuation token">}</span></code></pre>

<h4 id="結果">結果</h4>

<p>{{ EmbedLiveSample('Text_content', 600, 30) }}<span id="cke_1_bottom"><span id="cke_1_path"><a id="cke_elementspath_7_0" title="h3 要素">h3</a></span></span></p>
</div>
</div>

<div class="tuto_details">
<div class="tuto_type">さらに詳しく</div>

<p>スタイルシートの文字セットのデフォルトは UTF-8 ですが、リンク、スタイルシート自身の内部、もしくはその他の方法で指定できます。CSS Specification の <a class="external" href="http://www.w3.org/TR/CSS21/syndata.html#q23">4.4 CSS style sheet representation</a> をご覧ください。</p>

<p>文字を、バックスペースによるエスケープ機構を使って記述することもできます。例えば、\265B はチェスの黒クイーンの記号 ♛ です。詳しくは、<a class="external" href="http://www.w3.org/TR/CSS21/syndata.html#q24">Referring to characters not represented in a character encoding</a> と CSS Specification の <a class="external" href="http://www.w3.org/TR/CSS21/syndata.html#q6">Characters and case</a> をご覧ください。</p>
</div>

<h3 id="Image_content" name="Image_content">画像コンテンツ</h3>

<p>要素の前や後ろに画像を追加するには、{{cssxref("content")}} プロパティの値として画像ファイルの URL を記述します。</p>

<div class="tuto_example">
<div class="tuto_type">例</div>

<p>このルールは <code>glossary</code> を持つすべてのリンクの後ろに、空白文字とアイコンを追加します:</p>

<h3 id="HTML_2">HTML</h3>

<pre class="brush: html line-numbers language-html"><code class="language-html"><span class="tag token"><span class="tag token"><span class="punctuation token">&lt;</span>a</span> <span class="attr-name token">href</span><span class="attr-value token"><span class="punctuation token">=</span><span class="punctuation token">"</span>developer.mozilla.org<span class="punctuation token">"</span></span> <span class="attr-name token">class</span><span class="attr-value token"><span class="punctuation token">=</span><span class="punctuation token">"</span>glossary<span class="punctuation token">"</span></span><span class="punctuation token">&gt;</span></span>developer.mozilla.org<span class="tag token"><span class="tag token"><span class="punctuation token">&lt;/</span>a</span><span class="punctuation token">&gt;</span></span></code></pre>

<h3 id="CSS_2">CSS</h3>

<pre class="brush: css line-numbers language-css"><code class="language-css"><span class="selector token">a<span class="class token">.glossary</span><span class="pseudo-element token">::after</span></span> <span class="punctuation token">{</span>
   <span class="property token">content</span><span class="punctuation token">:</span> <span class="string token">" "</span> <span class="token url">url("https://mdn.mozillademos.org/files/16322/glossary-icon.gif")</span><span class="punctuation token">;</span>
<span class="punctuation token">}</span></code></pre>

<h3 id="結果_2">結果</h3>

<p>{{ EmbedLiveSample('Image_content', 600, 40) }}</p>
</div>

<p>次は何?</p>

<div>{{nextPage("/ja/docs/CSS/Getting_Started/Lists", "Lists")}} スタイルシートでコンテンツを追加し、リストの項目に印をつけることがよくあります。次の章では <a href="/ja/docs/CSS/Getting_Started/Lists" title="CSS/Getting_Started/Lists">リスト要素のスタイル記述</a> について述べます。</div>

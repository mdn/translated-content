---
title: lengthAdjust
slug: Web/SVG/Attribute/lengthAdjust
tags:
  - NeedsCompatTable
  - SVG
translation_of: Web/SVG/Attribute/lengthAdjust
---
<p><span class="seoSummary">SVG の <code>&lt;text&gt;</code><strong> </strong>要素または <code>&lt;tspan&gt; </code>要素が特定の長さを有している場合、それは <code>textLength</code> 属性を使って設定したものである訳ですが、<code>lengthAdjust</code> 属性は、テキストをその長さに引き延ばすかあるいはその長さに圧縮する方法を制御します。</span></p>

<p>この属性で可能な二つの値は、 <strong><code>spacing </code></strong>と <strong><code>spacingAndGlyphs</code></strong> です。<code>spacing </code>(デフォルト値) を使うと、文字の形が保たれる一方で、文字同士の間のスペースが伸び縮みします。<code>spacingAndGlyphs</code> を使うと、テキスト要素全体が、そのテキストの方向に沿って引き延ばされます。</p>

<h2 id="SVG_text_fitting_using_lengthAdjust" name="SVG_text_fitting_using_lengthAdjust">lengthAdjust を用いた SVG テキストの調整</h2>

<h3 id="HTML_の内容">HTML の内容</h3>

<pre class="brush: html">&lt;svg width="300" height="150" xmlns="http://www.w3.org/2000/svg"&gt;
   &lt;g font-face="sans-serif"&gt;
      &lt;text x="0" y="20" textLength="300" lengthAdjust="spacing"&gt;
         Stretched using spacing only.
      &lt;/text&gt;
      &lt;text x="0" y="50" textLength="300" lengthAdjust="spacingAndGlyphs"&gt;
         Stretched using spacing and glyphs.
      &lt;/text&gt;
      &lt;text x="0" y="80" textLength="100" lengthAdjust="spacing"&gt;
         Shrunk using spacing only.
      &lt;/text&gt;
      &lt;text x="0" y="110" textLength="100" lengthAdjust="spacingAndGlyphs"&gt;
         Shrunk using spacing and glyphs.
      &lt;/text&gt;
   &lt;/g&gt;
&lt;/svg&gt;</pre>

<h3 id="結果">結果</h3>

<p>{{ EmbedLiveSample('SVG_text_fitting_using_lengthAdjust') }}</p>

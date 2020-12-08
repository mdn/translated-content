---
title: マージンの相殺
slug: Web/CSS/CSS_Box_Model/Mastering_margin_collapsing
tags:
  - CSS
  - CSS Box Model
  - CSS ボックスモデル
  - Guide
  - Reference
translation_of: Web/CSS/CSS_Box_Model/Mastering_margin_collapsing
---
<div>{{CSSRef}}</div>

<p>ブロックの<a href="/ja/docs/Web/CSS/margin-top">先頭</a>と<a href="/ja/docs/Web/CSS/margin-bottom">末尾</a>のマージンは、それぞれのマージンの最も大きい寸法 (または等しい場合はいずれか1つ) の単一のマージンに結合される (<ruby>折り畳まれる<rp> (</rp><rt>collapsed</rt><rp>)</rp></ruby>) ことがあり、<strong>マージンの相殺</strong>という動作として知られています。なお、<a href="/ja/docs/Web/CSS/float">浮動</a>要素と<a href="/ja/docs/Web/CSS/position#absolute">絶対位置指定</a>要素では折り畳まれません。</p>

<p>マージンの相殺は、基本的に3つの場合に発生します。</p>

<dl>
 <dt>隣接兄弟要素</dt>
 <dd>隣接兄弟要素のマージンは相殺されます (後ろの兄弟要素がそれ以前の浮動状態を <a href="/ja/docs/Web/CSS/clear">解除 (clear)</a> する必要がある場合を除く)。</dd>
 <dt>親と子孫を隔てるコンテンツがない場合</dt>
 <dd>あるブロックの {{cssxref("margin-top")}} と、1つ以上の子孫ブロックの {{cssxref("margin-top")}} を隔てる境界、パディング、インライン部分、 <a href="/ja/docs/Web/Guide/CSS/Block_formatting_context">ブロック整形コンテキスト</a>の生成、<em><a href="/ja/docs/Web/CSS/clear">浮動の解除 (clear)</a></em> のいずれもがない場合、もしくは、あるブロックの {{cssxref("margin-bottom")}} と1つ以上の子孫ブロックの {{cssxref("margin-bottom")}} を隔て境界、パディング、インラインコンテンツ、 {{cssxref("height")}}, {{cssxref("min-height")}}, {{cssxref("max-height")}} のいずれもがない場合、それぞれマージンが折り畳まれます。折り畳まれた側のマージンは、親要素の外側に出ます。</dd>
 <dt>空ブロック</dt>
 <dd>あるブロックの {{cssxref("margin-top")}} を {{cssxref("margin-bottom")}} と隔てる境界、パディング、インラインコンテンツ、 {{cssxref("height")}}, {{cssxref("min-height")}} のいずれもがない場合、上端と下端のマージンは相殺されます。</dd>
</dl>

<p>注意すべきことがいくつかあります。</p>

<ul>
 <li>これらのケースが組み合わさると、もっと複雑な (3つ以上の) マージンの相殺が発生します。</li>
 <li>このルールはマージン幅がゼロの場合にも当てはまるので、親要素のマージンがゼロであるかどうかに関わらず、先頭/末尾の子要素のマージンは最終的に、 (上のルールに従って) その親要素より外側に出ます。</li>
 <li>負のマージンが含まれる場合には、相殺されるマージンの大きさは、一番大きな正のマージンと一番小さな (もっともマイナス寄りの) マージンの合計値になります。</li>
 <li>すべてのマージンが負の場合、折りたたまれたマージンのサイズは、最小の (最もマイナス寄りの) マージンとなります。これは、隣接する要素と入れ子になった要素の両方に適用されます。</li>
</ul>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;p&gt;The bottom margin of this paragraph is collapsed …&lt;/p&gt;
&lt;p&gt;… with the top margin of this paragraph, yielding a margin of &lt;code&gt;1.2rem&lt;/code&gt; in between.&lt;/p&gt;

&lt;div&gt;This parent element contains two paragraphs!
  &lt;p&gt;This paragraph has a &lt;code&gt;.4rem&lt;/code&gt; margin between it and the text above.&lt;/p&gt;
  &lt;p&gt;My bottom margin collapses with my parent, yielding a bottom margin of &lt;code&gt;2rem&lt;/code&gt;.&lt;/p&gt;
&lt;/div&gt;

&lt;p&gt;I am &lt;code&gt;2rem&lt;/code&gt; below the element above.&lt;/p&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css notranslate">div {
  margin: 2rem 0;
  background: lavender;
}

p {
  margin: .4rem 0 1.2rem 0;
  background: yellow;
}</pre>

<h3 id="Result" name="Result">例</h3>

<p>{{EmbedLiveSample('Examples', 'auto', 350)}}</p>

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
   <td>{{SpecName("CSS2.1", "box.html#collapsing-margins", "margin collapsing")}}</td>
   <td>{{Spec2("CSS2.1")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{css_key_concepts}}</li>
</ul>

---
title: border-color
slug: Web/CSS/border-color
tags:
  - CSS
  - CSS プロパティ
  - CSS 境界線
  - CSS 背景と境界
  - HTML 色
  - Reference
  - Styling HTML
  - border
  - border-color
  - 一括指定プロパティ
  - 色
translation_of: Web/CSS/border-color
---
<div>{{CSSRef}}</div>

<p><span class="seoSummary"><strong><code>border-color</code></strong> は<a href="/ja/docs/Web/CSS/Shorthand_properties">一括指定</a>を行う <a href="/ja/docs/Web/CSS">CSS</a> のプロパティで、要素の境界の色を設定します。</span></p>

<div>{{EmbedInteractiveExample("pages/css/border-color.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<p>各辺を個々に設定する場合は、 {{CSSxRef("border-top-color")}}、 {{CSSxRef("border-right-color")}}、 {{CSSxRef("border-bottom-color")}}、 {{CSSxRef("border-left-color")}}、 または書字方向を意識した{{CSSxRef("border-block-start-color")}}、 {{CSSxRef("border-block-end-color")}}、 {{CSSxRef("border-inline-start-color")}}、 {{CSSxRef("border-inline-end-color")}} を使用します。</p>

<p>境界線の色についての詳細な情報は、 {{SectionOnPage("/ja/docs/Web/HTML/Applying_color", "Borders")}} にあります。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush:css no-line-numbers">/* &lt;color&gt; 値 */
border-color: red;

/* 水平線 | 垂直線 */
border-color: red #f015ca;

/* 上辺 | 垂直線 | 下辺 */
border-color: red rgb(240,30,50,.7) green;

/* 上辺 | 右辺 | 下辺 | 左辺 */
border-color: red yellow green blue;

/* グローバル値 */
border-color: inherit;
border-color: initial;
border-color: unset;
</pre>

<p><code>border-color</code> プロパティは1つ、2つ、3つ、4つの値を使って指定することができます。</p>

<ul>
 <li>値が<strong>1つ</strong>指定された場合、<strong>全4辺</strong>に同じ色が適用される。</li>
 <li>値が<strong>2つ</strong>指定された場合、1つ目の色は<strong>上下</strong>、2つ目は<strong>左右</strong>の辺に適用される。</li>
 <li>値が<strong>3つ</strong>指定された場合、1つ目の色<strong>上</strong>、2つ目は<strong>左右</strong>、3つ目は<strong>下</strong>の辺に適用される。</li>
 <li>値が<strong>4つ</strong>指定された場合、それぞれ<strong>上</strong>、<strong>右</strong>、<strong>下</strong>、<strong>左</strong>の順（時計回り）に適用される。</li>
</ul>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt>{{CSSxRef("&lt;color&gt;")}}</dt>
 <dd>境界線の色を定義します。</dd>
</dl>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Complete_border-color_usage" name="Complete_border-color_usage">完全な border-color の使用法</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;div id="justone"&gt;
  &lt;p&gt;&lt;code&gt;border-color: red;&lt;/code&gt; is equivalent to&lt;/p&gt;
  &lt;ul&gt;&lt;li&gt;&lt;code&gt;border-top-color: red;&lt;/code&gt;&lt;/li&gt;
    &lt;li&gt;&lt;code&gt;border-right-color: red;&lt;/code&gt;&lt;/li&gt;
    &lt;li&gt;&lt;code&gt;border-bottom-color: red;&lt;/code&gt;&lt;/li&gt;
    &lt;li&gt;&lt;code&gt;border-left-color: red;&lt;/code&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;
&lt;div id="horzvert"&gt;
  &lt;p&gt;&lt;code&gt;border-color: gold red;&lt;/code&gt; is equivalent to&lt;/p&gt;
  &lt;ul&gt;&lt;li&gt;&lt;code&gt;border-top-color: gold;&lt;/code&gt;&lt;/li&gt;
    &lt;li&gt;&lt;code&gt;border-right-color: red;&lt;/code&gt;&lt;/li&gt;
    &lt;li&gt;&lt;code&gt;border-bottom-color: gold;&lt;/code&gt;&lt;/li&gt;
    &lt;li&gt;&lt;code&gt;border-left-color: red;&lt;/code&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;
&lt;div id="topvertbott"&gt;
  &lt;p&gt;&lt;code&gt;border-color: red cyan gold;&lt;/code&gt; is equivalent to&lt;/p&gt;
  &lt;ul&gt;&lt;li&gt;&lt;code&gt;border-top-color: red;&lt;/code&gt;&lt;/li&gt;
    &lt;li&gt;&lt;code&gt;border-right-color: cyan;&lt;/code&gt;&lt;/li&gt;
    &lt;li&gt;&lt;code&gt;border-bottom-color: gold;&lt;/code&gt;&lt;/li&gt;
    &lt;li&gt;&lt;code&gt;border-left-color: cyan;&lt;/code&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;
&lt;div id="trbl"&gt;
  &lt;p&gt;&lt;code&gt;border-color: red cyan black gold;&lt;/code&gt; is equivalent to&lt;/p&gt;
  &lt;ul&gt;&lt;li&gt;&lt;code&gt;border-top-color: red;&lt;/code&gt;&lt;/li&gt;
    &lt;li&gt;&lt;code&gt;border-right-color: cyan;&lt;/code&gt;&lt;/li&gt;
    &lt;li&gt;&lt;code&gt;border-bottom-color: black;&lt;/code&gt;&lt;/li&gt;
    &lt;li&gt;&lt;code&gt;border-left-color: gold;&lt;/code&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">#justone {
  border-color: red;
}

#horzvert {
  border-color: gold red;
}

#topvertbott {
  border-color: red cyan gold;
}

#trbl {
  border-color: red cyan black gold;
}

/* すべての div に幅とスタイルを設定 */
div {
  border: solid 0.3em;
  width: auto;
  margin: 0.5em;
  padding: 0.5em;
}

ul {
  margin: 0;
  list-style: none;
}
</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{EmbedLiveSample("Complete_border-color_usage", 600, 300)}}</p>

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
   <td>{{SpecName("CSS Logical Properties", "#logical-shorthand-keyword")}}</td>
   <td>{{Spec2("CSS Logical Properties")}}</td>
   <td><code>logical</code> キーワードを追加。</td>
  </tr>
  <tr>
   <td>{{SpecName("CSS3 Backgrounds", "#border-color", "border-color")}}</td>
   <td>{{Spec2("CSS3 Backgrounds")}}</td>
   <td><code>transparent</code> キーワードが削除され、 {{CSSxRef("&lt;color&gt;")}} データ型の一部になった。</td>
  </tr>
  <tr>
   <td>{{SpecName("CSS2.1", "box.html#border-color-properties", "border-color")}}</td>
   <td>{{Spec2("CSS2.1")}}</td>
   <td>一括指定プロパティと定義された。</td>
  </tr>
  <tr>
   <td>{{SpecName("CSS1", "#border-color", "border-color")}}</td>
   <td>{{Spec2("CSS1")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.border-color")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>境界線の色関係の CSS プロパティ: {{CSSxRef("border")}}, {{CSSxRef("border-top-color")}}, {{CSSxRef("border-right-color")}}, {{CSSxRef("border-bottom-color")}}, {{CSSxRef("border-left-color")}},</li>
 <li>その他の境界線に関する CSS プロパティ: {{CSSxRef("border-width")}}, {{CSSxRef("border-style")}}</li>
 <li>{{CSSxRef("&lt;color&gt;")}} データ型</li>
 <li>その他の色に関するプロパティ: {{CSSxRef("color")}}, {{CSSxRef("background-color")}}, {{CSSxRef("outline-color")}}, {{CSSxRef("text-decoration-color")}}, {{CSSxRef("text-emphasis-color")}}, {{CSSxRef("text-shadow")}}, {{CSSxRef("caret-color")}}, and {{CSSxRef("column-rule-color")}}</li>
 <li><a href="/ja/docs/Web/HTML/Applying_color">CSS を使用した HTML の要素への色の適用</a></li>
</ul>

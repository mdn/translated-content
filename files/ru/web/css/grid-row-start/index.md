---
title: grid-row-start
slug: Web/CSS/grid-row-start
translation_of: Web/CSS/grid-row-start
---
<p>Свойство CSS <strong><code>grid-row-start</code></strong> определяет начальную позицию элемента грид в строке, добавляя линию, span или ничего (автоматически) к его расположению в сетке, тем самым определяя начальный край inline-элемента его {{glossary("grid areas", "grid area")}}.</p>

<div>{{EmbedInteractiveExample("pages/css/grid-row-start.html")}}</div>



<h2 id="Syntax">Syntax</h2>

<pre class="brush: css no-line-numbers">/* Keyword value */
grid-row-start: auto;

/* &lt;custom-ident&gt; values */
grid-row-start: somegridarea;

/* &lt;integer&gt; + &lt;custom-ident&gt; values */
grid-row-start: 2;
grid-row-start: somegridarea 4;

/* span + &lt;integer&gt; + &lt;custom-ident&gt; values */
grid-row-start: span 3;
grid-row-start: span somegridarea;
grid-row-start: 5 somegridarea span;

/* Global values */
grid-row-start: inherit;
grid-row-start: initial;
grid-row-start: unset;
</pre>

<p>This property is specified as a single <code>&lt;grid-line&gt;</code> value. A <code>&lt;grid-line&gt;</code> value can be specified as:</p>

<ul>
 <li>either the <code>auto</code> keyword</li>
 <li>or a <code>&lt;custom-ident&gt;</code> value</li>
 <li>or an <code>&lt;integer&gt;</code> value</li>
 <li>or both <code>&lt;custom-ident&gt;</code> and <code>&lt;integer&gt;</code>, separated by a space</li>
 <li>or the keyword <code>span</code> together with either a <code>&lt;custom-ident&gt;</code> or an <code>&lt;integer&gt;</code> or both.</li>
</ul>

<h3 id="Values">Values</h3>

<dl>
 <dt><code>auto</code></dt>
 <dd>Ключевое слово, указывающее, что свойство никак не влияет на размещение элемента сетки, обозначающее автоматическое размещение, автоматический диапазон или диапазон по умолчанию, равный 1.</dd>
 <dt><code>&lt;custom-ident&gt;</code></dt>
 <dd><p>Если есть именованная строка с именем '&lt;custom-ident&gt;-start', он вносит первую такую ​​строку в размещение элемента сетки.</p>
 <p class="note"><strong>Note:</strong> Named grid areas automatically generate implicit named lines of this form, so specifying <code>grid-row-start: foo;</code> will choose the start edge of that named grid area (unless another line named <code>foo-start</code> was explicitly specified before it).</p>

 <p>В противном случае это обрабатывается так, как если бы целое число 1 было указано вместе с <code>&lt;custom-ident&gt;</code>.</p>
 </dd>
 <dt><code>&lt;integer&gt; &amp;&amp; &lt;custom-ident&gt;?</code></dt>
 <dd><p>Вносит n-ю линию сетки в размещение элемента сетки. Если задано отрицательное целое число, вместо этого начинается обратный отсчёт, начиная с конечного края явной сетки. Если имя задано как &lt;custom-<code>ident</code>&gt;, подсчитываются только строки с этим именем. Если существует недостаточно строк с таким именем, предполагается, что все неявные линии сетки имеют это имя для нахождения этой позиции.</p>
 <p>An {{cssxref("integer")}} value of <code>0</code> is invalid.</p>
 </dd>
 <dt><code>span &amp;&amp; [ &lt;integer&gt; || &lt;custom-ident&gt; ]</code></dt>
 <dd>Contributes a grid span to the grid item’s placement; such that the row start edge of the grid item’s grid area is n lines from the end edge.
 <p>If a name is given as a &lt;custom-ident&gt;, only lines with that name are counted. If not enough lines with that name exist, all implicit grid lines on the side of the explicit grid, corresponding to the search direction, are assumed to have that name for the purpose of counting this span.</p>

 <p>If the &lt;integer&gt; is omitted, it defaults to <code>1</code>. Negative integers or 0 are invalid.</p>

 <p>The <code>&lt;custom-ident&gt;</code> cannot take the <code>span</code> value.</p>
 </dd>
</dl>

<h3 id="Formal_syntax">Formal syntax</h3>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<pre class="brush: html">&lt;div class="wrapper"&gt;
  &lt;div class="box1"&gt;One&lt;/div&gt;
  &lt;div class="box2"&gt;Two&lt;/div&gt;
  &lt;div class="box3"&gt;Three&lt;/div&gt;
  &lt;div class="box4"&gt;Four&lt;/div&gt;
  &lt;div class="box5"&gt;Five&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css">.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}

.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}

.box2 {
  grid-column-start: 1;
  grid-row-start: 3;
  grid-row-end: 5;
}
</pre>

<div class="hidden">
<pre class="brush: css">* {box-sizing: border-box;}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper &gt; div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}

.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
</pre>
</div>

<p>{{ EmbedLiveSample('Examples', '230', '420') }}</p>



<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("CSS3 Grid", "#propdef-grid-row-start", "grid-row-start")}}</td>
   <td>{{Spec2("CSS3 Grid")}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>





<p>{{Compat}}</p>



<h2 id="See_also">See also</h2>

<ul>
 <li>Related CSS properties: {{cssxref("grid-row-end")}}, {{cssxref("grid-row")}}, {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}}, {{cssxref("grid-column")}}</li>
 <li>Grid Layout Guide: <em><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid">Line-based placement with CSS Grid</a></em></li>
 <li>Video tutorial: <em><a href="http://gridbyexample.com/video/series-line-based-placement/">Line-based placement</a></em></li>
</ul>

---
title: page-break-before
slug: Web/CSS/page-break-before
translation_of: Web/CSS/page-break-before
---
<div>{{CSSRef}}</div>

<div class="blockIndicator warning">Esta propriedade foi substituída pela propriedade {{cssxref("break-before")}}.</div>

<p>A propriedade CSS <strong><code>page-break-before</code></strong> ajusta as "quebras de páginas" <em>antes</em> do elemento atual.</p>

<p>Esta propriedade aplica-se para elementos em bloco (block) que geram uma caixa. Não será aplicada em uma {{ HTMLElement("div") }} vazia que não irá gerar uma caixa (box).</p>

<pre class="brush:css no-line-numbers">/* Keyword values */
page-break-before: auto;
page-break-before: always;
page-break-before: avoid;
page-break-before: left;
page-break-before: right;
page-break-before: recto;
page-break-before: verso;

/* Global values */
page-break-before: inherit;
page-break-before: initial;
page-break-before: unset;
</pre>

<p>{{cssinfo}}</p>

<h2 id="Page_break_aliases">Page break aliases</h2>

<p>A propriedade <code>page-break-before</code> agora é uma propriedade legada, substituída por {{cssxref("break-before")}}.</p>

<p>Por motivos de compatibilidade, <code>page-break-before</code> é tratada pelos navegadores como um alias de <code>break-before</code>. Isso garante que sites usando <code>page-break-before</code> continuem a funcionar. Um subconjunto de valores deve manter aliases como a seguir:</p>

<table>
 <thead>
  <tr>
   <th scope="col">page-break-before</th>
   <th scope="col">break-before</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>auto</code></td>
   <td><code>auto</code></td>
  </tr>
  <tr>
   <td><code>left</code></td>
   <td><code>left</code></td>
  </tr>
  <tr>
   <td><code>right</code></td>
   <td><code>right</code></td>
  </tr>
  <tr>
   <td><code>avoid</code></td>
   <td><code>avoid</code></td>
  </tr>
  <tr>
   <td><code>always</code></td>
   <td><code>page</code></td>
  </tr>
 </tbody>
</table>

<h2 id="Syntax">Syntax</h2>

<h3 id="Values">Values</h3>

<dl>
 <dt><code>auto</code></dt>
 <dd>Initial value. Automatic page breaks (neither forced nor forbidden).</dd>
 <dt><code>always</code></dt>
 <dd>Always force page breaks before the element.</dd>
 <dt><code>avoid</code></dt>
 <dd>Avoid page breaks before the element.</dd>
 <dt><code>left</code></dt>
 <dd>Force page breaks before the element so that the next page is formatted as a left page.</dd>
 <dt><code>right</code></dt>
 <dd>Force page breaks before the element so that the next page is formatted as a right page.</dd>
 <dt><code>recto</code> {{experimental_inline}}</dt>
 <dd>If pages progress left-to-right, then this acts like <code>right</code>. If pages progress right-to-left, then this acts like <code>left</code>.</dd>
 <dt><code>verso</code> {{experimental_inline}}</dt>
 <dd>If pages progress left-to-right, then this acts like <code>left</code>. If pages progress right-to-left, then this acts like <code>right</code>.</dd>
</dl>

<h3 id="Formal_syntax">Formal syntax</h3>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<pre class="brush: css">/* avoid page break before the div */
div.note {
    page-break-before: avoid;
}
</pre>

<h2 id="Specification">Specification</h2>

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
   <td>{{SpecName('CSS Logical Properties', '#page', 'recto and verso')}}</td>
   <td>{{Spec2('CSS Logical Properties')}}</td>
   <td>Adds the values <code>recto</code> and <code>verso</code>.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Paged Media', '#page-break-before', 'page-break-before')}}</td>
   <td>{{Spec2('CSS3 Paged Media')}}</td>
   <td>Extends the element that this property applies to table rows and table row groups.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'page.html#propdef-page-break-before', 'page-break-before')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">Browser compatibility</h2>



<p>{{Compat("css.properties.page-break-before")}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{cssxref("break-before")}}, {{cssxref("break-after")}}, {{cssxref("break-inside")}}</li>
 <li>{{cssxref("page-break-after")}}, {{cssxref("page-break-inside")}}</li>
 <li>{{cssxref("orphans")}}, {{cssxref("widows")}}</li>
</ul>

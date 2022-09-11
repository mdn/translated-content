---
title: break-after
slug: Web/CSS/break-after
translation_of: Web/CSS/break-after
---
<div>{{CSSRef}}</div>

<p>A propriedade <strong><code>break-after</code></strong> do <a href="/en-US/docs/Web/CSS">CSS</a> configura como uma quebra de página, coluna ou região deve se comportar após renderizar um elemento. Se nenhum elemento foi renderizado, a propriedade é ignorada.</p>

<pre class="brush:css no-line-numbers">/* Generic break values */
break-after: auto;
break-after: avoid;
break-after: always;
break-after: all;

/* Page break values */
break-after: avoid-page;
break-after: page;
break-after: left;
break-after: right;
break-after: recto;
break-after: verso;

/* Column break values */
break-after: avoid-column;
break-after: column;

/* Region break values */
break-after: avoid-region;
break-after: region;

/* Global values */
break-after: inherit;
break-after: initial;
break-after: unset;
</pre>

<p>Each possible break point (in other words, each element boundary) is affected by three properties: the <code>break-after</code> value of the previous element, the {{cssxref("break-before")}} value of the next element, and the {{cssxref("break-inside")}} value of the containing element.</p>

<p>To determine if a break must be done, the following rules are applied:</p>

<ol>
 <li>If any of the three concerned values is a <em>forced break value</em> (<code>always</code>, <code>left</code>, <code>right</code>, <code>page</code>, <code>column</code>, or <code>region</code>), it has precedence. If more than one of them are such a break, the one of the element that appears the latest in the flow is taken (i.e., the <code>break-before</code> value has precedence over the <code>break-after</code> value, which itself has precedence over the <code>break-inside</code> value).</li>
 <li>If any of the three concerned values is an <em>avoid break value</em> (<code>avoid</code>, <code>avoid-page</code>, <code>avoid-region</code>, or <code>avoid-column</code>), no such break will be applied at that point.</li>
</ol>

<p>Once forced breaks have been applied, soft breaks may be added if needed, but not on element boundaries that resolve in a corresponding <code>avoid</code> value.</p>

<p>{{cssinfo}}</p>

<h2 id="Syntax">Syntax</h2>

<p>The <code>break-after</code> property is specified as one of the keyword values from the list below.</p>

<h3 id="Values">Values</h3>

<h4 id="Generic_break_values">Generic break values</h4>

<dl>
 <dt><code>auto</code></dt>
 <dd>Allows, but does not force, any break (page, column, or region) to be inserted right after the principal box.</dd>
 <dt><code>avoid</code></dt>
 <dd>Avoids any break (page, column, or region) from being inserted right after the principal box.</dd>
 <dt><code>always</code> {{experimental_inline}}</dt>
 <dd>Forces a page break right after the principal box. The type of this break is that of the immediately-containing fragmentation context. If we are inside a multicol container then it would force a column break, inside paged media (but not inside a multicol container) a page break.</dd>
 <dt><code>all</code> {{experimental_inline}}</dt>
 <dd>Forces a page break right after the principal box. Breaking through all possible fragmentation contexts. So a break inside a multicol container, which was inside a page container would force a column and page break.</dd>
</dl>

<h4 id="Page_break_values">Page break values</h4>

<dl>
 <dt><code>avoid-page</code></dt>
 <dd>Avoids any page break right after the principal box.</dd>
 <dt><code>page</code></dt>
 <dd>Forces a page break right after the principal box.</dd>
 <dt><code>left</code></dt>
 <dd>Forces one or two page breaks right after the principal box, whichever will make the next page into a left page.</dd>
 <dt><code>right</code></dt>
 <dd>Forces one or two page breaks right after the principal box, whichever will make the next page into a right page.</dd>
 <dt><code>recto</code> {{experimental_inline}}</dt>
 <dd>Forces one or two page breaks right after the principal box, whichever will make the next page into a recto page. (A recto page is a right page in a left-to-right spread or a left page in a right-to-left spread.)</dd>
 <dt><code>verso</code> {{experimental_inline}}</dt>
 <dd>Forces one or two page breaks right after the principal box, whichever will make the next page into a verso page. (A verso page is a left page in a left-to-right spread or a left right in a right-to-left spread.)</dd>
</dl>

<h4 id="Column_break_values">Column break values</h4>

<dl>
 <dt><code>avoid-column</code></dt>
 <dd>Avoids any column break right after the principal box.</dd>
 <dt><code>column</code></dt>
 <dd>Forces a column break right after the principal box.</dd>
</dl>

<h4 id="Region_break_values">Region break values</h4>

<dl>
 <dt><code>avoid-region</code> {{experimental_inline}}</dt>
 <dd>Avoids any region break right after the principal box.</dd>
 <dt><code>region</code> {{experimental_inline}}</dt>
 <dd>Forces a region break right after the principal box.</dd>
</dl>

<h3 id="Formal_syntax">Formal syntax</h3>

{{csssyntax}}

<h2 id="Page_break_aliases">Page break aliases</h2>

<p>For compatibility reasons, the legacy {{cssxref("page-break-after")}} property should be treated by browsers as an alias of <code>break-after</code>. This ensures that sites using <code>page-break-after</code> continue to work as designed. A subset of values should be aliased as follows:</p>

<table>
 <thead>
  <tr>
   <th scope="col">page-break-after</th>
   <th scope="col">break-after</th>
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

<div class="blockIndicator note">
<p>The <code>always</code> value of <code>page-break-*</code> was implemented by browsers as a page break, and not as a column break. Therefore the aliasing is to <code>page</code>, rather than the <code>always</code> value in the Level 4 spec.</p>
</div>

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
   <td>{{SpecName('CSS3 Fragmentation', '#break-between', 'break-after')}}</td>
   <td>{{Spec2('CSS3 Fragmentation')}}</td>
   <td>Adds the <code>recto</code> and <code>verso</code> keywords. Changes the media type of this property from <code>paged</code> to {{xref_cssvisual}}. Defines the breaking algorithm with different kinds of breaks.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Regions', '#region-flow-break', 'break-after')}}</td>
   <td>{{Spec2('CSS3 Regions')}}</td>
   <td>Extends the property to handle region breaks. Adds the <code>avoid-region</code> and <code>region</code> keywords.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Multicol', '#break-before-break-after-break-inside', 'break-after')}}</td>
   <td>{{Spec2('CSS3 Multicol')}}</td>
   <td>Initial definition. Extends the CSS 2.1 {{cssxref("page-break-after")}} property to handle both page and column breaks.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">Browser compatibility</h2>



<h3 id="Support_in_multi-column_layout">Support in multi-column layout</h3>

<p>{{Compat("css.properties.break-after.multicol_context")}}</p>

<h3 id="Support_in_paged_media">Support in paged media</h3>

<p>{{Compat("css.properties.break-after.paged_context")}}</p>

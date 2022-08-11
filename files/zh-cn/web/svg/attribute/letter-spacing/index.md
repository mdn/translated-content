---
title: letter-spacing
slug: Web/SVG/Attribute/letter-spacing
translation_of: Web/SVG/Attribute/letter-spacing
---
<div>{{SVGRef}}</div>

<p>The <strong><code>letter-spacing</code></strong> attribute controls spacing between text characters, in addition to any spacing from the {{SVGAttr("kerning")}} attribute.</p>

<p>If the attribute value is a unitless number (like <code>128</code>), the browser processes it as a {{cssxref("length")}} in the current user coordinate system.</p>

<p>If the attribute value has a unit identifier, such as <code>.25em</code> or <code>1%</code>, then the browser converts the &lt;length&gt; into its corresponding value in the current user coordinate system.</p>

<p><strong>Note:</strong> As a presentation attribute, <code>letter-spacing</code> can be used as a CSS property. See the {{cssxref("letter-spacing", "CSS letter-spacing")}} property for more information.</p>

<p>As a presentation attribute, it can be applied to any element but it has effect only on the following eight elements: {{SVGElement("altGlyph")}}, {{SVGElement("text")}}, {{SVGElement("textPath")}}, {{SVGElement("tref")}}, and {{SVGElement("tspan")}}</p>

<h2>示例</h2>

<pre class="brush: css hidden">html, body, svg {
  height: 100%;
}</pre>

<pre class="brush: html">&lt;svg viewBox="0 0 400 30" xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;text y="20" letter-spacing="2"&gt;Bigger letter-spacing&lt;/text&gt;
  &lt;text x="200" y="20" letter-spacing="-0.5"&gt;Smaller letter-spacing&lt;/text&gt;
&lt;/svg&gt;</pre>

<p>{{EmbedLiveSample("示例", "200", "30")}}</p>

<h2 id="Usage_notes">Usage notes</h2>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Value</th>
   <td><code>normal</code> | {{cssxref("length")}}</td>
  </tr>
  <tr>
   <th scope="row">Default value</th>
   <td><code>normal</code></td>
  </tr>
  <tr>
   <th scope="row">Animatable</th>
   <td>Yes</td>
  </tr>
 </tbody>
</table>

<p>For a description of the values, please refer to the <a href="/en-US/docs/Web/CSS/letter-spacing#Values">CSS <code>letter-spacing</code></a> property.</p>

<p>As of May 2019, Firefox <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=371787">ignores <code>letter-spacing</code></a> and renders text without.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{cssxref("letter-spacing", "CSS letter-spacing")}}</li>
</ul>

---
title: <filter-function>
slug: Web/CSS/filter-function
tags:
  - CSS
  - CSS Data Type
  - Filter Effects
  - NeedsCompatTable
  - NeedsTranslation
  - Reference
  - TopicStub
translation_of: Web/CSS/filter-function
---
<div>{{cssref}}</div>

<p>The <code><strong>&lt;filter-function&gt;</strong></code> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/CSS_Types">data type</a> represents a graphical effect that can change the appearance of an input image. It is used in the {{cssxref("filter")}} and {{cssxref("backdrop-filter")}} properties.</p>

<h2 id="Syntax">Syntax</h2>

<p>The <code>&lt;filter-function&gt;</code> data type is specified using one of the filter functions listed below. Each function requires an argument which, if invalid, results in no filter being applied.</p>

<dl>
 <dt><code><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/blur">blur()</a></code></dt>
 <dd>Blurs the image.</dd>
 <dt><code><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/brightness">brightness()</a></code></dt>
 <dd>Makes the image brighter or darker.</dd>
 <dt><code><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/contrast">contrast()</a></code></dt>
 <dd>Increases or decreases the image's contrast.</dd>
 <dt><code><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow">drop-shadow()</a></code></dt>
 <dd>Applies a drop shadow behind the image.</dd>
 <dt><code><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/grayscale">grayscale()</a></code></dt>
 <dd>Converts the image to grayscale.</dd>
 <dt><code><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/hue-rotate">hue-rotate()</a></code></dt>
 <dd>Changes the overall hue of the image.</dd>
 <dt><code><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/invert">invert()</a></code></dt>
 <dd>Inverts the colors of the image.</dd>
 <dt><code><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/opacity">opacity()</a></code></dt>
 <dd>Makes the image transparent.</dd>
 <dt><code><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/saturate">saturate()</a></code></dt>
 <dd>Super-saturates or desaturates the input image.</dd>
 <dt><code><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/sepia">sepia()</a></code></dt>
 <dd>Converts the image to sepia.</dd>
</dl>

<h2 id="Specification">Specification</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comments</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{ SpecName('Filters 1.0', '#typedef-filter-function', '&lt;filter-function&gt;') }}</td>
   <td>{{ Spec2('Filters 1.0') }}</td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also">See also</h2>

<ul>
 <li>Properties that use this data type: {{cssxref("filter")}} and {{cssxref("backdrop-filter")}}</li>
</ul>

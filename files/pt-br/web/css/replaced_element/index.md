---
title: Elemento substituído
slug: Web/CSS/Replaced_element
translation_of: Web/CSS/Replaced_element
original_slug: Web/CSS/Elemento_substituido
---
<div>{{CSSRef()}}</div>

<h2 id="Sumario">Sumario</h2>

<p>In CSS, a <strong>replaced element</strong> is an element whose representation is outside the scope of CSS. These are a type of external object whose representation is independent of the CSS. Typical replaced elements are:</p>

<ul>
 <li>{{HTMLElement("iframe")}}</li>
 <li>{{HTMLElement("video")}}</li>
 <li>{{HTMLElement("embed")}}</li>
 <li>{{HTMLElement("img")}}</li>
</ul>

<p>Some elements are treated as replaced elements only in specific cases:</p>

<ul>
 <li>{{HTMLElement("audio")}}</li>
 <li>{{HTMLElement("canvas")}}</li>
 <li>{{HTMLElement("object")}}</li>
 <li>{{HTMLElement("applet")}}</li>
</ul>

<p>The only form control that is also a replaced element is {{HTMLElement("input")}} of the image type. All other form controls are non-replaced elements.</p>

<p>Objects inserted using the CSS {{cssxref("content")}} properties are <em>anonymous replaced elements</em>.</p>

<p>CSS handles replaced elements specifically in some cases, like when calculating margins and some <code>auto</code> values.</p>

<p>Note that some replaced elements, but not all, have intrinsic dimensions or a defined baseline, which is used by some CSS properties like {{cssxref("vertical-align")}}.</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{CSS_key_concepts()}}</li>
</ul>

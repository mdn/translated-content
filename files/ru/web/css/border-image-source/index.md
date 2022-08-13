---
title: border-image-source
slug: Web/CSS/border-image-source
translation_of: Web/CSS/border-image-source
---
<div>{{CSSRef}}</div>

<h2 id="Описание">Описание</h2>

<p>The <strong><code>border-image-source</code></strong> CSS property defines the {{cssxref("&lt;image&gt;")}} to use instead of the style of the border. If this property is set to <code>none</code>, the style defined by {{cssxref("border-style")}} is used instead.</p>

<div class="note"><strong>Предупреждение:</strong> Though any {{cssxref("&lt;image&gt;")}} can be used with this CSS property, browser support is still limited and some browsers support only images defined using the <code>url()</code> functional notation.</div>

<p>{{cssinfo}}</p>

<h2 id="Синтаксис">Синтаксис</h2>

<pre class="brush:css">/* no border-image, use the specified border-style */
border-image-source: none;

/* the image.jpg is used as image */
border-image-source: url(image.jpg);

/* a gradient is used as image */
border-image-source: linear-gradient(to top, red, yellow);

/* Global values */
border-image-source: inherit;
border-image-source: initial;
border-image-source: unset;
</pre>

<h3 id="Значения">Значения</h3>

<dl>
 <dt><code>none</code></dt>
 <dd>Specifies that no image should be used for the border. Instead the style defined by {{cssxref("border-style")}} is used.</dd>
 <dt><code>&lt;image&gt;</code></dt>
 <dd>Ссылка на изображение, которое будет использоваться в отрисовке границы.</dd>
</dl>

<h3 id="Формальный_синтаксис">Формальный синтаксис</h3>

{{csssyntax}}

<h2 id="Specifications">Примеры</h2>

<p>See {{cssxref("border-image")}} for examples of what the various source values will do.</p>

<h2 id="Specifications">Спецификации</h2>

{{Specifications}}

<h2 id="Совместимость_с_браузерами">Совместимость с браузерами</h2>

<p>{{Compat}}</p>

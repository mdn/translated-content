---
title: '::-webkit-meter-even-less-good-value'
slug: 'Web/CSS/::-webkit-meter-even-less-good-value'
translation_of: 'Web/CSS/::-webkit-meter-even-less-good-value'
---
<p>{{CSSRef}}{{Non-standard_header}}</p>

<h2 id="Resumen">Resumen</h2>

<p>El pseudo-elemento <code>::-webkit-meter-even-less-good-value</code> da color rojo al elemento meter cuando el valor y el atributo optimum están fuera del rango establecido y en zonas opuestas. Por ejemplo valor &lt; low &lt; high &lt; optimum o valor&gt; high &gt; low &gt; optimum.</p>

<h2 id="Especificaciones">Especificaciones</h2>

<p>No es parte de ninguna especificación. Es un elemento propietario y específico de WebKit/Blink.</p>

<h2 id="Ejemplos">Ejemplos</h2>

<pre class="brush: html">&lt;meter min="0" max="10" value="6"&gt;Score out of 10&lt;/meter&gt;</pre>

<pre class="brush: css">meter::-webkit-meter-even-less-good-value {
  background: linear-gradient(to bottom, #f77, #d44 45%, #d44 55%, #f77);
  height: 100%;
  box-sizing: border-box;
}</pre>

<p>{{ EmbedLiveSample('Ejemplos', '100%', 50) }}</p>

<div class="note">
<p><strong>Note</strong>: This will only work in Webkit/Blink-based browsers.</p>
</div>

<h2 id="Compatibilidad_con_los_distintos_navegadores">Compatibilidad con los distintos navegadores</h2>

{{Compat("css.selectors.-webkit-meter-even-less-good-value")}}

<h2 id="Ver_además">Ver además</h2>

<p>The pseudo-elements used by WebKit/Blink to style other parts of a {{htmlelement("meter")}} element are as follows:</p>

<ul>
 <li>{{cssxref("::-webkit-meter-inner-element")}}</li>
 <li>{{cssxref("::-webkit-meter-bar")}}</li>
 <li>{{cssxref("::-webkit-meter-optimum-value")}}</li>
 <li>{{cssxref("::-webkit-meter-suboptimum-value")}}</li>
</ul>

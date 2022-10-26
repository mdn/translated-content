---
title: '-moz-context-properties'
slug: orphaned/Web/CSS/-moz-context-properties
translation_of: Web/CSS/-moz-context-properties
original_slug: Web/CSS/-moz-context-properties
---
<div>{{CSSRef}}{{Non-standard_header}}
<div class="note">
<p><strong>Note</strong>: Este recurso esta disponible desde Firefox 55, pero solamente es compatible con imagenes SVG cargadas via <code>chrome://</code> o <code>resource://</code> URLs. Para experimentar con la caracteristica SVG en la web, es necesario poner <code>svg.context-properties.content.enabled</code> en <code>true</code>.</p>
</div>
</div>

<p>Si mencionas una imagen SVG en una pagina web({{htmlelement("img")}} como elemento o como fondo de pagina), la imagen SVG puede coordinarse con el elemento incrustado(su contexto) para que la imagen adopte las propiedades puestas en el elemento incrustado. Para hacer esto, el elemento incrustado necesita listar las propiedades que deben estar disponibles para la imagen listadolas como valores de la propiedad<strong><code>-moz-context-properties</code></strong>, y la imagen necesita optar a usar esas propiedades utilizando valores tales como el valor de  <code>context-fill</code>.</p>

<p>{{cssinfo}}</p>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="brush:css">/* Keyword values */
-moz-context-properties: fill;
-moz-context-properties: fill, stroke;

/* Global values */
-moz-context-properties: inherit;
-moz-context-properties: initial;
-moz-context-properties: unset;
</pre>

<h3 id="Valores">Valores</h3>

<dl>
 <dt><code>fill</code></dt>
 <dd>Expone el valor de <code>fill</code> determinado en la imagen del SVG.</dd>
 <dt><code>stroke</code></dt>
 <dd>Expone el valor de <code>stroke</code> determinado en la imagen del SVG..</dd>
 <dt><code>fill-opacity</code></dt>
 <dd>Expone el valor de<code>fill-opacity</code> determinado en la imagen del SVG.</dd>
 <dt><code>stroke-opacity</code></dt>
 <dd>Expone el valor de <code>stoke-opacity</code> determinado en la imagen del SVG.</dd>
</dl>

<h3 id="Sintaxis_formal">Sintaxis formal</h3>

{{csssyntax}}

<h2 id="Ejemplo">Ejemplo</h2>

<p>En este ejemplo tenemos un SVG sencillo utilizando un elemento <code>&lt;img&gt;</code>.</p>

<p>Primero necesitas especificar en el elemento incrustado las propiedades cuyos valores quieres exponer al SVG, utilizando la propiedad <code>-moz-context-properties</code>. Por ejemplo:</p>

<pre class="brush: css">.img1 {
  width: 100px;
  height: 100px;
  -moz-context-properties: fill, stroke;
  fill: lime;
  stroke: purple;
}</pre>

<p>Ahora que has hecho eso la imagen SVG puede utlizar los valores de {{cssxref("fill")}} y {{cssxref("stroke")}} , por ejemplo:</p>

<pre class="brush: html">&lt;img class="img1" src="data:image/svg+xml;utf8,&lt;svg xmlns='http://www.w3.org/2000/svg'&gt;
                       &lt;rect width='100%' height='100%' stroke-width='30px'
                       fill='context-fill red' stroke='context-stroke' fill-opacity='0.5'/&gt;&lt;/svg&gt;"&gt;</pre>

<p>Aqui hemos puesto que la imagen <code>src</code> sea una URL de datos que contiene una imagen SVG simple; el <code>&lt;rect&gt;</code>de dentro ha sido hecho para coger sus valores de <code>fill</code> y <code>stroke</code> de {{cssxref("fill")}} y {{cssxref("stroke")}} puestos en el elemento <code>&lt;img&gt;</code>poniendo  <code>context-fill</code>/<code>context-stroke</code> en sus valores asi como un color para rellenar(rojo) que sera utilizado en caso que el SVG es cargado independientemente en una ventana superior(donde no tendra contexto para dar los valores ). Tener en cuenta que si un colore es directamente puesto en el SVG, pero el color del contexto tambien es especificado, el color del contexto sobreescribe el color directo.</p>

<div class="note">
<p><strong>Note</strong>: Puedes en contrar un <a href="https://mdn.github.io/css-examples/moz-context-properties/">ejemplo de ejecucion en Github</a>.</p>
</div>

<h2 id="Especificaciones">Especificaciones</h2>

<p>Esta propiedad no esta definida en ningun estándar de CSS</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>



<p>{{Compat("css.properties.-moz-context-properties")}}</p>

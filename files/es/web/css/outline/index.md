---
title: outline
slug: Web/CSS/outline
tags:
  - Contorno CSS
  - Propiedad CSS
translation_of: Web/CSS/outline
---
<div>{{CSSRef}}</div>

<p>La propiedad <a href="/es/docs/Web/CSS">CSS</a> <strong><code>outline</code></strong> es una <a href="/es/docs/Web/CSS/Shorthand_properties">forma reducida</a> para establecer una o más de las propiedades individuales de contorno {{cssxref("outline-style")}}, {{cssxref("outline-width")}} y {{cssxref("outline-color")}} en una sola declaración. En la mayoría de los casos el uso de este atajo es preferible y más conveniente.</p>

<div>{{EmbedInteractiveExample("pages/css/outline.html")}}</div>

<p>Al igual que con todas las propiedades abreviadas, cualquier subvalor omitido se establecerá en su valor inicial.</p>

<h3 id="Border_vs_outline">Border vs outline</h3>

<p>Los bordes y los contornos son muy similares. Sin embargo, los contornos difieren de los bordes de la siguiente manera:</p>

<ul>
 <li>Los contornos no ocupan espacio, son dibujados por encima del elemento. Por lo tanto, su aparición u ocultamiento no causa un redibujado de las cajas. No suma en el tamaño de la caja y no hay movimiento o desplazamiento de los elementos como con {{cssxref("border")}}.</li>
 <li>Los contornos pueden no ser rectangulares. Si el elemento se distribuye en varias líneas, el contorno no forma un rectágulo para encerrar a todo el elemento. A <strong>diferencia de los bordes</strong>, el contorno no está abierto en algunos lados:
  <p><span style="outline: 2px solid #666666;">Ejemplo: contorno aplicado a<br>
   varias líneas</span></p>

  <p><span style="border: 2px solid #666666;">Ejemplo: borde aplicado a<br>
   varias líneas</span></p>
 </li>
</ul>

<div style="">{{cssinfo}}</div>

<h2 id="Sintaxis">Sintaxis</h2>

<pre><code>/* style */
outline: solid;

/* color | style */
outline: #f66 dashed;

/* style | width */
outline: inset thick;

/* color | style | width */
outline: green solid 3px;

/* Global values */
outline: inherit;
outline: initial;
outline: unset;</code></pre>

<h3 id="Valores">Valores</h3>

<p>Uno, dos o tres valores, en orden arbitrario:</p>

<dl>
 <dt><code>&lt;outline-width&gt;</code></dt>
 <dd>Ver {{Cssxref("outline-width")}}.</dd>
 <dt><code>&lt;outline-style&gt;</code></dt>
 <dd>Ver {{Cssxref("outline-style")}}.</dd>
 <dt><code>&lt;outline-color&gt;</code></dt>
 <dd>Desde Gecko 1.9 (Firefox 3), es usado el valor de la propiedad {{Cssxref("color")}} del elemento (color de primer plano). Ver {{Cssxref("outline-color")}}.</dd>
</dl>

<h3 id="Sintaxis_formal">Sintaxis formal</h3>

{{csssyntax}}

<h2 id="Example">Example</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;a href="#"&gt;Este link tiene un estilo especial para el foco&lt;/a&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">a {
  border: 1px solid;
  border-radius: 3px;
  display: inline-block;
  margin: 10px;
  padding: 5px;
}

a:focus {
  outline: 4px dotted #e73;
  outline-offset: 4px;
  background: #ffa;
}
</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample("Example", "100%", 60)}}</p>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentarios</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('CSS3 Basic UI', '#outline', 'outline')}}</td>
   <td>{{Spec2('CSS3 Basic UI')}}</td>
   <td>Sin cambios</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'ui.html#propdef-outline', 'outline')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>Definición inicial</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_de_navegadores">Compatibilidad de navegadores</h2>

<div>


<p>{{Compat("css.properties.outline")}}</p>
</div>

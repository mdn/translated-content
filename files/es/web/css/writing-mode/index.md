---
title: writing-mode
slug: Web/CSS/writing-mode
tags:
  - CSS
  - Disposición
  - Propiedad CSS
  - Referencia
translation_of: Web/CSS/writing-mode
---
<div>{{CSSRef}}{{SeeCompatTable}}</div>

<h2 id="Resumen">Resumen</h2>

<p>La propiedad <strong><code>writing-mode</code></strong> define si los renglones de texto se disponen horizontal o verticalmente y la dirección en que avanzan los bloques.</p>

<p>La propiedad especifica la <em>dirección de flujo de bloques</em>, que es la dirección en que se apilan los contenedores a nivel de bloque y la dirección en que el contenido a nivel de línea fluye dentro de un contenedor de bloque. Por ende, la propiedad <code>writing-mode</code> también determina la ordenación del contenido a nivel de bloque.</p>

<p>{{cssinfo}}</p>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="brush:css">/* Valores de la palabra clave */
writing-mode: horizontal-tb;
writing-mode: vertical-rl;
writing-mode: vertical-lr;

/* Valores globales */
writing-mode: inherit;
writing-mode: initial;
writing-mode: unset;
</pre>

<h3 id="Valores">Valores</h3>

<dl>
 <dt><code>horizontal-tb</code></dt>
 <dd>El contenido fluye horizontalmente de izquierda a derecha y verticalmente de arriba hacia abajo. El próximo renglón horizontal se posiciona debajo del renglón anterior.</dd>
 <dt><code>vertical-rl</code></dt>
 <dd>El contenido fluye verticalmente de arriba hacia abajo y horizontalmente de derecha a izquierda. El próximo renglón vertical se posiciona a la izquierda del renglón anterior.</dd>
 <dt><code>vertical-lr</code></dt>
 <dd>El contenido fluye verticalmente de arriba hacia abajo y horizontalmente de izquierda a derecha. El próximo renglón vertical se posiciona a la derecha del renglón anterior.</dd>
 <dt><code>sideways-rl</code>{{experimental_inline}}</dt>
 <dd>El contenido fluye verticalmente de arriba hacia abajo y todos los glifos, incluidos aquellos de los sistemas de escritura verticales, se colocan de lado hacia la derecha.</dd>
</dl>

<dl>
 <dt><code>sideways-lr</code>{{experimental_inline}}</dt>
 <dd>El contenido fluye verticalmente de arriba hacia abajo y todos los glifos, incluidos aquellos de los sistemas de escritura verticales, se colocan de lado hacia la izquierda.</dd>
 <dt><code>lr</code> {{deprecated_inline}}</dt>
 <dd>Desaprobado, excepto en los documentos SVG1. En CSS utilice <code>horizontal-tb</code>.</dd>
 <dt><code>lr-tb</code> {{deprecated_inline}}</dt>
 <dd>Desaprobado, excepto en los documentos SVG1. En CSS utilice <code>horizontal-tb</code>.</dd>
 <dt><code>rl</code> {{deprecated_inline}}</dt>
 <dd>Desaprobado, excepto en los documentos SVG1. En CSS utilice <code>horizontal-tb</code>.</dd>
 <dt><code>tb</code> {{deprecated_inline}}</dt>
 <dd>Desaprobado, excepto en los documentos SVG1. En CSS utilice <code>vertical-rl</code>.</dd>
 <dt><code>tb-rl</code> {{deprecated_inline}}</dt>
 <dd>Desaprobado, excepto en los documentos SVG1. En CSS utilice <code>vertical-rl</code>.</dd>
</dl>

<h3 id="Sintaxis_formal">Sintaxis formal</h3>

{{csssyntax}}

<h2 id="Ejemplo">Ejemplo</h2>

<div class="hidden">
<pre class="brush: html">&lt;table&gt;
    &lt;tr&gt;
        &lt;th&gt;value&lt;/th&gt;
        &lt;th&gt;Sistema de escritura vertical&lt;/th&gt;
        &lt;th&gt;Sistema de escritura horizontal&lt;/th&gt;
        &lt;th&gt;Escritura mixta&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;horizontal-tb&lt;/td&gt;
        &lt;td class="exampleText1"&gt;我家没有电脑。&lt;/td&gt;
        &lt;td class="exampleText1"&gt;Texto de ejemplo&lt;/td&gt;
        &lt;td class="exampleText1"&gt;1994年に至っては&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;vertical-lr&lt;/td&gt;
        &lt;td class="exampleText2"&gt;我家没有电脑。&lt;/td&gt;
        &lt;td class="exampleText2"&gt;Texto de ejemplo&lt;/td&gt;
        &lt;td class="exampleText2"&gt;1994年に至っては&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;vertical-rl&lt;/td&gt;
        &lt;td class="exampleText3"&gt;我家没有电脑。&lt;/td&gt;
        &lt;td class="exampleText3"&gt;Texto de ejemplo&lt;/td&gt;
        &lt;td class="exampleText3"&gt;1994年に至っては&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;sideways-lr&lt;/td&gt;
        &lt;td class="exampleText4"&gt;我家没有电脑。&lt;/td&gt;
        &lt;td class="exampleText4"&gt;Texto de ejemplo&lt;/td&gt;
        &lt;td class="exampleText4"&gt;1994年に至っては&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;sideways-rl&lt;/td&gt;
        &lt;td class="exampleText5"&gt;我家没有电脑。&lt;/td&gt;
        &lt;td class="exampleText5"&gt;Texto de ejemplo&lt;/td&gt;
        &lt;td class="exampleText5"&gt;1994年に至っては&lt;/td&gt;
    &lt;/tr&gt;
</pre>

<pre class="brush:css;">table { border-collapse:collapse; }
td, th {border: 1px black solid; padding: 3px; }
th {background-color: lightgray; }
.exampleText1 { width:75px; writing-mode: horizontal-tb; -webkit-writing-mode: horizontal-tb; -ms-writing-mode: horizontal-tb; }
.exampleText2 { height:75px; writing-mode: vertical-lr; -webkit-writing-mode: vertical-lr; -ms-writing-mode: vertical-lr; }
.exampleText3 { height:75px; writing-mode: vertical-rl; -webkit-writing-mode: vertical-rl; -ms-writing-mode: vertical-rl; }
.exampleText4 { height:75px; writing-mode: sideways-lr; -webkit-writing-mode: sideways-lr; -ms-writing-mode: sideways-lr; }
.exampleText5 { height:75px; writing-mode: sideways-rl; -webkit-writing-mode: sideways-rl; -ms-writing-mode: sideways-rl; }</pre>
</div>

<p>{{EmbedLiveSample("Example", 400, 430)}}</p>

<h3 id="Resultado_efectivo">Resultado efectivo</h3>

<p><img alt="" src="https://mdn.mozillademos.org/files/12201/writing-mode-actual-result.png" style="height: 430px; width: 351px;"></p>

<h2 id="Especificación">Especificación</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentario</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("CSS3 Writing Modes", "#block-flow", "writing-mode")}}</td>
   <td>{{Spec2("CSS3 Writing Modes")}}</td>
   <td>Definición inicial</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_entre_navegadores">Compatibilidad entre navegadores</h2>

{{Compat("css.properties.writing-mode")}}

<h2 id="Véase_también">Véase también</h2>

<ul>
 <li>Atributo de SVG <code><a href="/en-US/docs/Web/SVG/Attribute/writing-mode">writing-mode</a></code></li>
 <li>{{Cssxref("direction")}}</li>
 <li>{{Cssxref("unicode-bidi")}}</li>
 <li>{{Cssxref("text-orientation")}}</li>
 <li>{{Cssxref("text-combine-upright")}}</li>
</ul>

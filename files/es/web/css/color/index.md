---
title: color
slug: Web/CSS/color
tags:
  - CSS
  - Colores CSS
  - Colores HTML
  - Diseño
  - Estilo HTML
  - Estilo Texto
  - Estilos HTML
  - Propiedad CSS
  - Referencia
  - Referencia_CSS
  - Web
  - color
translation_of: Web/CSS/color
---
<div>{{CSSRef}}</div>

<p><span class="seoSummary">La propiedad de CSS <strong><code>color</code></strong> selecciona el <a href="/en-US/docs/Web/CSS/color_value">valor de color</a> de primer plano del contenido de elemento de texto y <a href="/en-US/docs/Web/CSS/text-decoration">decoraciones de texto</a>. Tambien establece el valor {{cssxref("currentcolor")}} </span> <span id="result_box" lang="es"><span>que se puede usar como un valor indirecto en otras propiedades, y es el valor predeterminado para otras propiedades de color, como</span></span> <span class="seoSummary"> {{cssxref("border-color")}}.</span></p>

<p><span id="result_box" lang="es"><span>Para obtener una descripción general del uso del color en HTML, consulte</span></span> <a href="/en-US/docs/Web/HTML/Applying_color">Aplicando color a los elementos HTML mediante CSS</a>.</p>

<pre class="brush: css no-line-numbers">/* Valores de palabras clave */
color: currentcolor;

/* Valores &lt;named-color&gt; */
color: red;
color: orange;
color: tan;
color: rebeccapurple;

/* Valores &lt;hex-color&gt; */
color: #090;
color: #009900;
color: #090a;
color: #009900aa;

/* Valores &lt;rgb()&gt; */
color: rgb(34, 12, 64, 0.6);
color: rgba(34, 12, 64, 0.6);
color: rgb(34 12 64 / 0.6);
color: rgba(34 12 64 / 0.3);
color: rgb(34.0 12 64 / 60%);
color: rgba(34.6 12 64 / 30%);

/* Valores &lt;hsl()&gt; */
color: hsl(30, 100%, 50%, 0.6);
color: hsla(30, 100%, 50%, 0.6);
color: hsl(30 100% 50% / 0.6);
color: hsla(30 100% 50% / 0.6);
color: hsl(30.0 100% 50% / 60%);
color: hsla(30.2 100% 50% / 60%);

/* Valores Globales */
color: inherit;
color: initial;
color: unset;
</pre>

<p><span class="short_text" id="result_box" lang="es"><span>Ten en cuenta que el valor debe ser un </span></span>{{cssxref("color")}} <span class="short_text" lang="es"><span>uniforme</span></span> . No puede ser un {{cssxref("&lt;gradient&gt;")}}, que es en realidad un tipo de {{cssxref("&lt;image&gt;")}}.</p>

<div class="hidden" id="color">
<pre class="brush: html">&lt;div class="grid"&gt;
  &lt;div class="col"&gt;
    &lt;div class="cell"&gt;
      Keyword values
      &lt;p class="c1"&gt;color: currentcolor&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class="cell"&gt;
      &amp;lt;named-color&amp;gt; values
      &lt;p class="c2"&gt;color: red&lt;/p&gt;
      &lt;p class="c3"&gt;color: orange&lt;/p&gt;
      &lt;p class="c4"&gt;color: tan&lt;/p&gt;
      &lt;p class="c5"&gt;color: rebeccapurple&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class="cell"&gt;
      &amp;lt;hex-color&amp;gt; values
      &lt;p class="c6"&gt;color: #090&lt;/p&gt;
      &lt;p class="c7"&gt;color: #009900&lt;/p&gt;
      &lt;p class="c8"&gt;color: #090a&lt;/p&gt;
      &lt;p class="c9"&gt;color: #009900aa&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class="cell"&gt;
      &amp;lt;rgb()&amp;gt; values
      &lt;p class="c10"&gt;color: rgb(34, 12, 64, 0.6)&lt;/p&gt;
      &lt;p class="c11"&gt;color: rgba(34, 12, 64, 0.6)&lt;/p&gt;
      &lt;p class="c12"&gt;color: rgb(34 12 64 / 0.6)&lt;/p&gt;
      &lt;p class="c13"&gt;color: rgba(34 12 64 / 0.6)&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class="cell"&gt;
      &amp;lt;hsl()&amp;gt; values
      &lt;p class="c14"&gt;color: hsl(30, 100%, 50%, 0.6)&lt;/p&gt;
      &lt;p class="c15"&gt;color: hsla(30, 100%, 50%, 0.6)&lt;/p&gt;
      &lt;p class="c16"&gt;color: hsl(30 100% 50% / 0.6)&lt;/p&gt;
      &lt;p class="c17"&gt;color: hsla(30 100% 50% / 0.6)&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>

<pre class="brush: css">html,body {
  height: 100%;
  box-sizing: border-box;
}

.grid {
  width: 100%;
  height: 100%;
  display: flex;
  background: #EEE;
  font: 1em monospace;
}

.col {
  display: flex;
  flex: 1 auto;
  flex-direction: column;
}

.cell {
  margin: .5em;
  padding: .5em;
  background-color: #FFF;
  overflow: hidden;
  text-align: left;
  font-style: italic;
}

p {
  font-size: 1rem;
  font-style: normal;
  padding: 0 .5em .5em;
  margin: 0;
}

p:first-child {
  padding-top: .5em;
}

/* Valores de palabras clave */
.c1 { color: currentcolor; }

/*  values */
.c2 { color: red; }
.c3 { color: orange; }
.c4 { color: tan; }
.c5 { color: rebeccapurple; }

/*  valores */
.c6 { color: #090; }
.c7 { color: #009900; }
.c8 { color: #090A; }
.c9 { color: #009900AA; }

/*  valores */
.c10 { color: rgb(34, 12, 64, 0.6); }
.c11 { color: rgba(34, 12, 64, 0.6); }
.c12 { color: rgb(34 12 64 / 0.6); }
.c13 { color: rgba(34 12 64 / 0.6); }

/*  valores */
.c14 { color: hsl(30, 100%, 50%, 0.6); }
.c15 { color: hsla(30, 100%, 50%, 0.6); }
.c16 { color: hsl(30 100% 50% / 0.6); }
.c17 { color: hsla(30 100% 50% / 0.6); }</pre>
</div>

<p>{{EmbedLiveSample("color", "100%", 630, "", "", "example-outcome-frame")}}</p>

<div>{{cssinfo}}</div>

<h2 id="Sintaxis">Sintaxis</h2>

<p>La propiedad <code>color</code> esta especificada como un solo un valor de {{cssxref("&lt;color&gt;")}}</p>

<h3 id="Valores">Valores</h3>

<dl>
 <dt>{{cssxref("&lt;color&gt;")}}</dt>
 <dd><span id="result_box" lang="es"><span>Establece el color de las partes textuales y decorativas del elemento.</span></span></dd>
</dl>

<h3 id="Sintaxis_formal">Sintaxis formal</h3>

{{csssyntax}}

<h2 id="Ejemplos">Ejemplos</h2>

<p><span id="result_box" lang="es"><span>Las siguientes son todas las formas de hacer que el texto de un párrafo sea rojo:</span></span></p>

<pre class="brush: css">p { color: red; }
p { color: #f00; }
p { color: #ff0000; }
p { color: rgb(255,0,0); }
p { color: rgb(100%, 0%, 0%); }
p { color: hsl(0, 100%, 50%); }

/* 50% translúcido */
p { color: rgba(255, 0, 0, 0.5); }
p { color: hsla(0, 100%, 50%, 0.5); }
</pre>

<h2 id="Especificaciones">Especificaciones</h2>

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
   <td>{{SpecName('CSS4 Colors', '#the-color-property', 'color')}}</td>
   <td>{{Spec2('CSS4 Colors')}}</td>
   <td>
    <p><span class="short_text" id="result_box" lang="es"><span>Agrega sintaxis sin comas para las funciones</span></span> <code>rgb()</code>, <code>rgba()</code>, <code>hsl()</code>, y <code>hsla()</code>.  <span class="short_text" id="result_box" lang="es"><span>Permite valores alfa en</span></span> <code>rgb()</code> y <code>hsl()</code>, <span class="short_text" id="result_box" lang="es"><span>convirtiéndose</span></span> <code>rgba()</code> y <code>hsla()</code> <span class="short_text" id="result_box" lang="es"><span>en alias (obsoletos) para ellos.</span></span><br>
     <span class="short_text" id="result_box" lang="es"><span>Agrega una palabra clave de color</span></span> <code>rebeccapurple</code>.<br>
     <span id="result_box" lang="es"><span>Agrega valores de color hexadecimal de 4 y 8 dígitos, donde el último dígito representa el valor alfa.</span></span><br>
     Añade las funciones <code>hwb()</code>, <code>device-cmyk()</code>, y <code>color()</code>.</p>
   </td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Transitions', '#animatable-css', 'color')}}</td>
   <td>{{Spec2('CSS3 Transitions')}}</td>
   <td>Define <code>color</code> como animable.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Colors', '#color', 'color')}}</td>
   <td>{{Spec2('CSS3 Colors')}}</td>
   <td><span id="result_box" lang="es"><span>Desprecia los colores del sistema.</span> <span>Agrega colores SVG.</span></span> Agrega las funciones <code>rgba()</code>, <code>hsl()</code>, y <code>hsla()</code>.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'colors.html#colors', 'color')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>Añade el color <code>orange</code> y los colores del sistema.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS1', '#color', 'color')}}</td>
   <td>{{Spec2('CSS1')}}</td>
   <td>Definicion inicial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_de_navegadores">Compatibilidad de navegadores</h2>



<p>{{Compat("css.properties.color")}}</p>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li><span class="short_text" id="result_box" lang="es"><span>El tipo de datos de</span></span>  {{cssxref("&lt;color&gt;")}}</li>
 <li><span class="short_text" id="result_box" lang="es"><span>Otras propiedades relacionadas con el color:</span></span> {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, y {{cssxref("column-rule-color")}}</li>
 <li><a href="/en-US/docs/Web/HTML/Applying_color">Aplicar color a elementos HTML usando CSS</a></li>
</ul>

---
title: ':visited'
slug: 'Web/CSS/:visited'
tags:
  - CSS
  - Diseño
  - Pseudo-clase
  - Referencia
  - Web
translation_of: 'Web/CSS/:visited'
---
<div>{{ CSSRef }}</div>

<p>La <a href="/es/CSS/Pseudo-classes" title="Pseudo-classes">pseudo-clase</a> <strong><code>:visited</code></strong> de <a href="/es/docs/Web/CSS">CSS</a>  representa enlaces que el usuario ya ha visitado. Por motivos de privacidad, los estilos que se pueden modificar con este selector son muy limitados.</p>

<pre class="brush: css no-line-numbers">/* Selecciona cualquier &lt;a&gt; que ha sido visitado */
a:visited {
  color: green;
}</pre>

<p>Los estilos definidos por la pseudo-clase <code>:visited</code> serán anulados por cualquier pseudo-clase posterior relacionada con el enlace ({{cssxref(":link")}}, {{cssxref(":hover")}} o {{cssxref(":active")}}) que tenga al menos la misma especificidad. Para darle un estilo apropiado a los enlaces, coloque la regla <code>:visited</code> después de la regla <code>:link</code> pero antes de las reglas <code>:hover</code> y <code>:active</code>, según lo definido por el orden LVHA: <code>:link</code> — <code>:visited</code> — <code>:hover</code> — <code>:active</code>.</p>

<h2 id="Restricciones_de_estilo">Restricciones de estilo</h2>

<p>Por motivos de privacidad, los navegadores limitan estrictamente los estilos que puede aplicar utilizando esta pseudo-clase y cómo se pueden usar:</p>

<ul>
 <li>Las propiedades CSS permitidas son {{ cssxref("color") }}, {{ cssxref("background-color") }}, {{ cssxref("border-color") }}, {{ cssxref("border-bottom-color") }}, {{ cssxref("border-left-color") }}, {{ cssxref("border-right-color") }}, {{ cssxref("border-top-color") }}, {{ cssxref("column-rule-color") }}, y {{ cssxref("outline-color") }}.</li>
 <li>Los atributos SVG permitidos son {{SVGAttr("fill")}} y {{SVGAttr("stroke")}}.</li>
 <li>El componente alfa de los estilos permitidos será ignorado. En su lugar, se utilizará el componente alfa del estado non-<code>:visited</code> del elemento, excepto cuando ese componente sea 0, en cuyo caso el estilo establecido en <code>:visited</code> se ignorará por completo.</li>
 <li>Aunque estos estilos pueden cambiar la apariencia de los colores para el usuario final, el método {{domxref("window.getComputedStyle")}} mentirá y siempre devolverá el valor del color non-<code>:visited</code>. </li>
</ul>

<div class="note">
<p><strong>Nota:</strong> Para obtener más información sobre estas limitaciones y las razones detrás de ellas, vea <a href="/es/docs/CSS/Privacy_and_the_:visited_selector" title="/en-US/docs/CSS/Privacy_and_the_:visited_selector">Privacidad y el selector :visited</a>.</p>
</div>

<h2 id="Sintaxis">Sintaxis</h2>

{{csssyntax}}

<h2 id="Ejemplo">Ejemplo</h2>

<p>Las propiedades que de otro modo no tendrían ningún color o serían transparentes no se pueden modificar con <code>:visited</code>. De las propiedades que se pueden establecer con esta pseudo-clase, su navegador probablemente solo tenga un valor predeterminado para <code>color</code> y <code>column-rule-color</code>. Por lo tanto, si desea modificar las otras propiedades, deberá darles un valor base fuera del selector <code>:visited</code>.</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;a href="#test-visited-link"&gt;¿Ya has visitado este enlace?&lt;/a&gt;&lt;br&gt;
&lt;a href=""&gt;Ya has visitado este enlace.&lt;/a&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">a {
  /* Especifique los valores predeterminados no transparentes a ciertas propiedades,
     lo que les permite ser diseñado con el estado :visited */
  background-color: white;
  border: 1px solid white;
}

a:visited {
  background-color: yellow;
  border-color: hotpink;
  color: hotpink;
}</pre>

<h3 id="Resultado">Resultado</h3>

<p>{{EmbedLiveSample("Ejemplo")}}</p>

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
   <td>{{ SpecName('HTML WHATWG', 'scripting.html#selector-visited', ':visited') }}</td>
   <td>{{ Spec2('HTML WHATWG') }}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{ SpecName('CSS4 Selectors', '#link', ':visited') }}</td>
   <td>{{ Spec2('CSS4 Selectors') }}</td>
   <td>Ningún cambio.</td>
  </tr>
  <tr>
   <td>{{ SpecName('CSS3 Selectors', '#link', ':visited') }}</td>
   <td>{{ Spec2('CSS3 Selectors') }}</td>
   <td>Ningún cambio.</td>
  </tr>
  <tr>
   <td>{{ SpecName('CSS2.1', 'selector.html#link-pseudo-classes', ':visited') }}</td>
   <td>{{ Spec2('CSS2.1') }}</td>
   <td>Levanta la restricción para aplicar  <code>:visited</code> solo al elemento {{ HTMLElement("a") }}. Permite a los navegadores restringir su comportamiento por razones de privacidad.</td>
  </tr>
  <tr>
   <td>{{ SpecName('CSS1', '#anchor-pseudo-classes', ':visited') }}</td>
   <td>{{ Spec2('CSS1') }}</td>
   <td>Definición inicial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">Compatibilidad con navegadores</h2>



<p>{{Compat("css.selectors.visited")}}</p>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li><a href="/es/docs/CSS/Privacy_and_the_:visited_selector" title="/en-US/docs/CSS/Privacy_and_the_:visited_selector">Privacidad y el selector :visited</a></li>
 <li>pseudo-clases relacionadas con enlaces: {{cssxref(":link")}}, {{cssxref(":active")}}, {{cssxref(":hover")}}</li>
</ul>

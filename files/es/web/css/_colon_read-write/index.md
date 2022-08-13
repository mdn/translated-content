---
title: ':read-write'
slug: 'Web/CSS/:read-write'
tags:
  - CSS
  - Diseño
  - Pseudo-clase
  - Referencia
  - Web
translation_of: 'Web/CSS/:read-write'
---
<div>{{CSSRef}}</div>

<p>La <a href="https://developer.mozilla.org/es/docs/CSS/Pseudo-classes" rel="nofollow">pseudo-clase</a> <strong><code>:read-write</code></strong> de <a href="https://developer.mozilla.org/es/docs/Web/CSS">CSS</a> representa un elemento (como un <a href="https://developer.mozilla.org/es/docs/Web/HTML/Element/input" rel="nofollow">input</a>) que es editable por el usuario.</p>

<pre class="brush: css no-line-numbers">/* Selecciona cualquier elemento &lt;input&gt; que sea editable */
/* Compatible con Firefox con un prefijo */
input:-moz-read-write {
  background-color: #bbf;
}

/* Compatible con Blink/WebKit/Edge sin un prefijo */
input:read-write {
  background-color: #bbf;
}</pre>

<div class="note">
<p><strong>Nota</strong>: Este selector no solo selecciona texto de {{htmlElement("input")}}; seleccionará <em>cualquier</em> elemento que pueda editar el usuario, como un elemento {{htmlelement("p")}} con {{htmlattrxref("contenteditable")}} establecido en él.</p>
</div>

<h2 id="Sintaxis">Sintaxis</h2>

{{csssyntax}}

<h2 id="Ejemplo" name="Ejemplo">Ejemplo</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;input type="text" value="Escribe lo que quieras aquí."&gt;
&lt;input type="text" value="Este es un campo de solo lectura." readonly&gt;
&lt;p&gt;Este es un párrafo normal.&lt;/p&gt;
&lt;p contenteditable="true"&gt;¡Puedes editar este párrafo!&lt;/p&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css line-numbers  language-css">input { min-width: 25em; }
input:-moz-read-write { background: cyan; }
input:read-write { background: cyan; }

p:-moz-read-write { background: lightgray; }
p:read-write { background: lightgray; }
p[contenteditable="true"] { color: blue; }
</pre>

<h3 id="Resultado">Resultado</h3>

<p>{{EmbedLiveSample("Ejemplo")}}</p>

<h2 class="editable" id="Specifications" name="Specifications">Especificaciones</h2>

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
   <td>{{ SpecName('HTML WHATWG', '#selector-read-write', ':read-write') }}</td>
   <td>{{ Spec2('HTML WHATWG') }}</td>
   <td>Ningún cambio.</td>
  </tr>
  <tr>
   <td>{{ SpecName('HTML5 W3C', '#selector-read-write', ':read-write') }}</td>
   <td>{{ Spec2('HTML5 W3C') }}</td>
   <td>Define la semántica con respecto a HTML y validación de restricciones.</td>
  </tr>
  <tr>
   <td>{{ SpecName('CSS4 Selectors', '#rw-pseudos', ':read-write') }}</td>
   <td>{{ Spec2('CSS4 Selectors') }}</td>
   <td>Define la pseudo-clase, pero no la semántica asociada.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">Compatibilidad con navegadores</h2>



<p>{{Compat("css.selectors.read-write")}}</p>

<h2 id="See_also" name="See_also">Ver también</h2>

<ul>
 <li>{{cssxref(":read-only")}}</li>
 <li>Atributo HTML {{htmlattrxref("contenteditable")}}</li>
</ul>

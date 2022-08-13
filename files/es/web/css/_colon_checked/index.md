---
title: ':checked'
slug: 'Web/CSS/:checked'
tags:
  - CSS
  - Diseño
  - Pseudo-clase
  - Referencia
  - Web
translation_of: 'Web/CSS/:checked'
---
<div>{{ CSSRef() }}</div>

<p>La <a href="es/docs/Web/CSS/Pseudo-classes">pseudo-clase</a> <code style="font-style: normal;">:checked</code> de <a href="/es/docs/Web/CSS">CSS</a> representa cualquier <strong>radio </strong>(<a href="/es/docs/Web/HTML/Element/input/radio">&lt;input type="radio"&gt;</a>), <strong>checkbox </strong>(<a href="/es/docs/Web/HTML/Element/input/checkbox">&lt;input type="checkbox"&gt;</a>) u <strong>option</strong> ({{ HTMLElement("option") }} en un elemento {{ HTMLElement("select") }}) que está marcado o conmutado a un estado <code>on</code>.</p>

<pre class="brush: css"><code>/* Coincide con cualquier checked/selected radio, checkbox, u option */
:checked {
  margin-left: 25px;
  border: 1px solid blue;
}</code></pre>

<p>El usuario puede activar este estado marcando/seleccionando un elemento, o desactivándolo desmarcando/deseleccionando el elemento.</p>

<div class="note">
<p><strong>Nota: </strong>Debido a que los navegadores a menudo tratan las <code>&lt;option&gt;</code> s como <a href="/es/docs/Web/CSS/Replaced_element">elementos reemplazados</a>, la medida en que se pueden diseñar con la pseudo-clase <code>:checked</code> varía de un navegador a otro.</p>
</div>

<h2 id="Syntax" name="Syntax">Sintaxis</h2>

{{csssyntax}}

<h2 id="Examples" name="Examples">Ejemplos</h2>

<h3 id="Ejemplo_básico">Ejemplo básico</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;div&gt;
  &lt;input type="radio" name="my-input" id="yes"&gt;
  &lt;label for="yes"&gt;Yes&lt;/label&gt;

  &lt;input type="radio" name="my-input" id="no"&gt;
  &lt;label for="no"&gt;No&lt;/label&gt;
&lt;/div&gt;

&lt;div&gt;
  &lt;input type="checkbox" name="my-checkbox" id="opt-in"&gt;
  &lt;label for="opt-in"&gt;Check me!&lt;/label&gt;
&lt;/div&gt;

&lt;select name="my-select" id="fruit"&gt;
  &lt;option value="opt1"&gt;Apples&lt;/option&gt;
  &lt;option value="opt2"&gt;Grapes&lt;/option&gt;
  &lt;option value="opt3"&gt;Pears&lt;/option&gt;
&lt;/select&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">div,
select {
  margin: 8px;
}

/* Etiquetas para entradas marcadas */
input:checked + label {
  color: red;
}

/* Elemento Radio, cuando está marcado */
input[type="radio"]:checked {
  box-shadow: 0 0 0 3px orange;
}

/* Elemento Checkbox, cuando está marcado */
input[type="checkbox"]:checked {
  box-shadow: 0 0 0 3px hotpink;
}

/* Elementos Option, cuando se seleccionan */
option:checked {
  box-shadow: 0 0 0 3px lime;
  color: red;
}</pre>

<h4 id="Resultado">Resultado</h4>

<p>{{EmbedLiveSample("Ejemplo_básico")}}</p>

<h3 id="Alternar_elementos_con_un_checkbox_oculto">Alternar elementos con un checkbox oculto</h3>

<p>Este ejemplo utiliza la pseudoclase <code>:checked</code> para permitir al usuario alternar contenido según el estado de un <em>checkbox</em>, todo sin usar <a href="/es/docs/Web/JavaScript">JavaScript</a>.</p>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;input type="checkbox" id="expand-toggle" /&gt;

&lt;table&gt;
  &lt;thead&gt;
    &lt;tr&gt;&lt;th&gt;Columna #1&lt;/th&gt;&lt;th&gt;Columna #2&lt;/th&gt;&lt;th&gt;Columna #3&lt;/th&gt;&lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr class="expandable"&gt;&lt;td&gt;[more text]&lt;/td&gt;&lt;td&gt;[more text]&lt;/td&gt;&lt;td&gt;[more text]&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;td&gt;[cell text]&lt;/td&gt;&lt;td&gt;[cell text]&lt;/td&gt;&lt;td&gt;[cell text]&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;td&gt;[cell text]&lt;/td&gt;&lt;td&gt;[cell text]&lt;/td&gt;&lt;td&gt;[cell text]&lt;/td&gt;&lt;/tr&gt;
    &lt;tr class="expandable"&gt;&lt;td&gt;[more text]&lt;/td&gt;&lt;td&gt;[more text]&lt;/td&gt;&lt;td&gt;[more text]&lt;/td&gt;&lt;/tr&gt;
    &lt;tr class="expandable"&gt;&lt;td&gt;[more text]&lt;/td&gt;&lt;td&gt;[more text]&lt;/td&gt;&lt;td&gt;[more text]&lt;/td&gt;&lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;

&lt;label for="expand-toggle" id="expand-btn"&gt;Toggle hidden rows&lt;/label&gt;</pre>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css">/* Hide the toggle checkbox */
#expand-toggle {
  display: none;
}

/* Hide expandable content by default */
.expandable {
  visibility: collapse;
  background: #ddd;
}

/* Style the button */
#expand-btn {
  display: inline-block;
  margin-top: 12px;
  padding: 5px 11px;
  background-color: #ff7;
  border: 1px solid;
  border-radius: 3px;
}

/* Show hidden content when the checkbox is checked */
#expand-toggle:checked ~ * .expandable {
  visibility: visible;
}

/* Style the button when the checkbox is checked */
#expand-toggle:checked ~ #expand-btn {
  background-color: #ccc;
}</pre>

<h4 id="Resultado_2">Resultado</h4>

<p>{{EmbedLiveSample("Alternar_elementos_con_un_checkbox_oculto", "auto", 220)}}</p>

<h3 id="Galería_de_imágenes">Galería de imágenes</h3>

<p>Puede usar la pseudoclase <code>:checked</code> para crear una galería de imágenes con imágenes de tamaño completo que solo se muestran cuando el usuario hace clic en una miniatura. Vea <a href="/@api/deki/files/6268/=css-checked-gallery.zip">esta demostración</a>.</p>

<div class="note"><strong>Nota:</strong> Para un efecto análogo, pero basado en la pseudoclase <a href="/es/docs/CSS/:hover" title="CSS/:hover"><code>:hover</code></a> y sin radioboxes ocultos, vea <a href="/@api/deki/files/6247/=css-gallery.zip">esta demostración</a>, tomada de la página de referencia <a href="/es/docs/CSS/:hover" title="CSS/:hover">:hover</a>.</div>

<h2 id="Specifications" name="Specifications">Especificaciones</h2>

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
   <td>{{ SpecName('HTML WHATWG', '#selector-checked', ':checked') }}</td>
   <td>{{ Spec2('HTML WHATWG') }}</td>
   <td>Ningún cambio.</td>
  </tr>
  <tr>
   <td>{{ SpecName('HTML5 W3C', '#selector-checked', ':checked') }}</td>
   <td>{{ Spec2('HTML5 W3C') }}</td>
   <td>Define la semántica con respecto a HTML.</td>
  </tr>
  <tr>
   <td>{{ SpecName('CSS4 Selectors', '#checked', ':checked') }}</td>
   <td>{{ Spec2('CSS4 Selectors') }}</td>
   <td>Ningún cambio.</td>
  </tr>
  <tr>
   <td>{{ SpecName('CSS3 UI', '#pseudo-checked', ':checked') }}</td>
   <td>{{ Spec2('CSS3 UI') }}</td>
   <td>Enlace al Nivel 3 de Selectores.</td>
  </tr>
  <tr>
   <td>{{ SpecName('CSS3 Selectors', '#checked', ':checked') }}</td>
   <td>{{ Spec2('CSS3 Selectors') }}</td>
   <td>Define la pseudoclase, pero no la semántica asociada.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">Compatibilidad con navegadores</h2>

<p>{{Compat("css.selectors.checked")}}</p>

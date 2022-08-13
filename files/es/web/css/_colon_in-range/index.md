---
title: ':in-range'
slug: 'Web/CSS/:in-range'
tags:
  - CSS
  - Pseudo-clase
  - Referencia
  - Web
translation_of: 'Web/CSS/:in-range'
---
<div>{{CSSRef}}</div>

<p>La <a href="/es/docs/CSS/Pseudo-classes" title="Pseudo-classes">pseudo-clase</a> <strong><code>:in-range</code></strong> de <a href="/es/docs/Web/CSS">CSS</a> representa un elemento {{htmlelement("input")}} cuyo valor actual se encuentra dentro de los límites de rango especificados por los atributos {{htmlattrxref("min", "input")}} y {{htmlattrxref("max","input")}}.</p>

<pre class="brush: css no-line-numbers">/* Selecciona cualquier &lt;input&gt;, pero solo cuando tiene un rango
   especificado, y su valor está dentro de ese rango */
input:in-range {
  background-color: rgba(0, 255, 0, 0.25);
}</pre>

<p>Esta pseudo-clase es útil para dar al usuario una indicación visual de que el valor actual de un campo está dentro de los límites permitidos.</p>

<div class="note"><strong>Nota:</strong> Esta pseudo-clase solo se aplica a los elementos que tienen (y pueden tomar) una limitación de rango. En ausencia de tal limitación, el elemento no puede estar "dentro del rango" ni "fuera de rango".</div>

<h2 id="Sintaxis">Sintaxis</h2>

{{csssyntax}}

<h2 id="Ejemplo" name="Ejemplo">Ejemplo</h2>

<div id="example">
<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;form action="" id="form1"&gt;
  &lt;ul&gt;Los valores entre 1 y 10 son válidos.
    &lt;li&gt;
      &lt;input id="value1" name="value1" type="number" placeholder="1 a 10" min="1" max="10" value="12"&gt;
      &lt;label for="value1"&gt;Tu valor esta &lt;/label&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/form&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css;">li {
  list-style: none;
  margin-bottom: 1em;
}

input {
  border: 1px solid black;
}

input:in-range {
  background-color: rgba(0, 255, 0, 0.25);
}

input:out-of-range {
  background-color: rgba(255, 0, 0, 0.25);
  border: 2px solid red;
}

input:in-range + label::after {
  content: 'bien.';
}

input:out-of-range + label::after {
  content: 'fuera de rango!';
}</pre>

<h3 id="Resultado">Resultado</h3>
</div>

<div>{{EmbedLiveSample('Ejemplo', 600, 140)}}</div>

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
   <td>{{SpecName('HTML WHATWG', 'scripting.html#selector-in-range', ':in-range')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>Define cuándo <code>:in-range</code> coincide con elementos en HTML.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS4 Selectors', '#in-range-pseudo', ':in-range')}}</td>
   <td>{{Spec2('CSS4 Selectors')}}</td>
   <td>Definición Inicial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>

<div>
<div>


<p>{{Compat("css.selectors.in-range")}}</p>
</div>
</div>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>{{cssxref(":out-of-range")}}</li>
 <li><a href="/en-US/docs/Learn/HTML/Forms/Form_validation">Validación de datos de formulario</a></li>
</ul>

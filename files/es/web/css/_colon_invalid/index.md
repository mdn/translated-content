---
title: ':invalid'
slug: 'Web/CSS/:invalid'
tags:
  - CSS
  - Diseño
  - Pseudo-clase
  - Referencia
  - Web
translation_of: 'Web/CSS/:invalid'
---
<div>{{CSSRef}}</div>

<p>La <a href="/es/docs/Web/CSS/Pseudo-classes">pseudo-clase</a> <strong><code>:invalid</code></strong> de <a href="/es/docs/Web/CSS">CSS</a> representa cualquier elemento {{HTMLElement("input")}} u otro elemento {{HTMLElement("form")}} cuyos contenidos no se puedan <a href="/es/docs/Web/Guide/HTML/HTML5/Constraint_validation">validar</a>.</p>

<pre class="brush: css no-line-numbers">/* Selecciona cualquier &lt;input&gt; no válido */
input:invalid {
  background-color: pink;
}</pre>

<p>Esta pseudo-clase es útil para resaltar errores de campo para el usuario.</p>

<h2 id="Sintaxis">Sintaxis</h2>

{{csssyntax}}

<h2 id="Ejemplo">Ejemplo</h2>

<p>Este ejemplo presenta una forma simple que colorea los elementos en verde cuando son validos y en rojo cuando no lo son.</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;form&gt;
  &lt;label for="url_input"&gt;Ingresa una URL:&lt;/label&gt;
  &lt;input type="url" id="url_input" /&gt;
  &lt;br /&gt;
  &lt;br /&gt;
  &lt;label for="email_input"&gt;Introduzca una dirección de correo electrónico:&lt;/label&gt;
  &lt;input type="email" id="email_input" required/&gt;
&lt;/form&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">input:invalid {
  background-color: #ffdddd;
}

form:invalid {
  border: 5px solid #ffdddd;
}

input:valid {
  background-color: #ddffdd;
}

form:valid {
  border: 5px solid #ddffdd;
}

input:required {
  border-color: #800000;
  border-width: 3px;
}

input:required:invalid {
  border-color: #C00000;
}</pre>

<h3 id="Resultado">Resultado</h3>

<p>{{EmbedLiveSample('Ejemplo', 600, 150)}}</p>

<h2 id="Problemas_de_accesibilidad">Problemas de accesibilidad</h2>

<p>El color rojo se usa comúnmente para indicar una entrada no válida. Las personas que tienen ciertos tipos de daltonismo no podrán determinar el estado de la entrada a menos que vaya acompañado de un indicador adicional que no dependa del color para transmitir el significado. Normalmente, se utilizan texto descriptivo y / o un icono.</p>

<ul>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background">MDN Comprensión de las WCAG, explicaciones de la Guía 1.4</a></li>
 <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html">Comprender el Criterio de Conformidad 1.4.1 | W3C Comprender WCAG 2.0</a></li>
</ul>

<h2 id="Notas">Notas</h2>

<h3 id="Radio_buttons">Radio buttons</h3>

<p>Si alguno de los radio buttons en un grupo es <code>required</code>, la pseudo-clase <code>:invalid</code> se aplica a todos ellos si no se selecciona ninguno de los botones del grupo. (Los radio buttons agrupados comparten el mismo valor para su atributo <code>name</code>).</p>

<h3 id="Gecko_por_defecto">Gecko por defecto</h3>

<p>Por defecto, Gecko no aplica un estilo a la pseudo-clase <code>:invalid</code>. Sin embargo, sí aplica un estilo (un "resplandor" rojo que usa la propiedad {{Cssxref("box-shadow")}}) a la pseudoclase {{cssxref(":-moz-ui-invalid")}}, que se aplica en un subconjunto de casos para: <code>:invalid</code>.</p>

<p>Puede inhabilitar el brillo con el siguiente CSS o anularlo por completo para modificar la apariencia de los campos no válidos:</p>

<pre class="brush: css">:invalid {
  box-shadow: none;
}

:-moz-submit-invalid {
  box-shadow: none;
}

:-moz-ui-invalid {
  box-shadow: none;
}</pre>

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
   <td>{{SpecName('HTML WHATWG', '#selector-invalid', ':invalid')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>Ningún cambio.</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', '#selector-invalid', ':invalid')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>Define la semántica de HTML y la validación de restricciones.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS4 Selectors', '#validity-pseudos', ':invalid')}}</td>
   <td>{{Spec2('CSS4 Selectors')}}</td>
   <td>Definición Inicial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>

<div>


<p>{{Compat("css.selectors.invalid")}}</p>
</div>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>Otras pseudo-clases relacionadas con la validación: {{ cssxref(":required") }}, {{ cssxref(":optional") }}, {{ cssxref(":valid") }}</li>
 <li>Pseudo-clases relacionadas de Mozilla: {{cssxref(":-moz-ui-invalid")}}, {{cssxref(":-moz-submit-invalid")}}</li>
 <li><a href="/en-US/docs/Learn/HTML/Forms/Form_validation">Validación de datos de formulario</a></li>
</ul>

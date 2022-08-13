---
title: ':required'
slug: 'Web/CSS/:required'
tags:
  - CSS
  - Diseño
  - Pseudo-clase
  - Referencia
  - Web
translation_of: 'Web/CSS/:required'
---
<div>{{ CSSRef }}</div>

<p>La <a href="/es/docs/Web/CSS/Pseudo-classes">pseudo-clase</a> <strong><code>:required</code></strong> de <a href="/es/docs/Web/CSS">CSS</a> representa cualquier elemento {{HTMLElement("input")}}, {{HTMLElement("select")}}, o {{HTMLElement("textarea")}} que tenga el atributo {{ htmlattrxref("required", "input") }} establecido en él.</p>

<pre class="brush: css no-line-numbers">/* Selecciona cualquier &lt;input&gt; requerido */
input:required {
  border: 1px dashed red;
}</pre>

<p>Esta pseudo-clase es útil para resaltar campos que deben tener datos válidos antes de que se pueda enviar un formulario.</p>

<div class="note">
<p><strong>Nota:</strong> La pseudoclase {{cssxref(":optional")}} selecciona campos de formulario <em>opcionales</em>.</p>
</div>

<h2 id="Sintaxis">Sintaxis</h2>

{{csssyntax}}

<h2 id="Ejemplos">Ejemplos</h2>

<p>Ver {{cssxref(":invalid")}} para un ejemplo.</p>

<h2 id="Problemas_de_accesibilidad">Problemas de accesibilidad</h2>

<p>Obligatoriamente los {{htmlelement("input")}} deben tener el atributo {{ htmlattrxref("required", "input") }} aplicado a ellos. Esto asegurará que las personas que navegan con la ayuda de tecnología de asistencia, como un lector de pantalla, puedan comprender qué entradas necesitan contenido válido para garantizar un envío exitoso.</p>

<p>Si el formulario también contiene entradas opcionales, las entradas requeridas deben indicarse visualmente utilizando un tratamiento que no dependa únicamente del color para transmitir el significado. Normalmente, se utilizan texto descriptivo y / o un icono.</p>

<ul>
 <li><a href="/en-US/docs/Web/Accessibility/Understanding_WCAG/Understandable#Guideline_3.3_%E2%80%94_Input_Assistance_Help_users_avoid_and_correct_mistakes">MDN Comprender las WCAG, explicaciones de la Guía 3.3</a></li>
 <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html" rel="noopener">Comprender el Criterio de Conformidad 3.3.2 | W3C Comprender WCAG 2.0</a></li>
</ul>

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
   <td>{{ SpecName('HTML WHATWG', '#selector-required', ':required') }}</td>
   <td>{{ Spec2('HTML WHATWG') }}</td>
   <td>Ningún cambio.</td>
  </tr>
  <tr>
   <td>{{ SpecName('HTML5 W3C', '#selector-required', ':required') }}</td>
   <td>{{ Spec2('HTML5 W3C') }}</td>
   <td>Define la semántica de HTML y la validación de restricciones.</td>
  </tr>
  <tr>
   <td>{{ SpecName('CSS4 Selectors', '#opt-pseudos', ':required') }}</td>
   <td>{{ Spec2('CSS4 Selectors') }}</td>
   <td>Ningún cambio.</td>
  </tr>
  <tr>
   <td>{{ SpecName('CSS3 Basic UI', '#pseudo-required-value', ':required') }}</td>
   <td>{{ Spec2('CSS3 Basic UI') }}</td>
   <td>Define la pseudo-clase, pero no la semántica asociada.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>



<p>{{Compat("css.selectors.required")}}</p>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>Otras pseudo-clases relacionadas con la validación: {{ cssxref(":optional") }}, {{ cssxref(":invalid") }}, {{ cssxref(":valid") }}</li>
 <li><a href="/en-US/docs/Learn/HTML/Forms/Form_validation">Validación de datos de formulario</a></li>
</ul>

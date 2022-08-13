---
title: Evento invalid
slug: Web/API/HTMLInputElement/invalid_event
tags:
  - Evento
  - Referencia
  - eventos
  - formulários
  - invalid
  - inválido
translation_of: Web/API/HTMLInputElement/invalid_event
---
<div>{{APIRef}}</div>

<p>El evento <strong><code>invalid</code></strong> se dispara cuando se ha comprobado la validez de un elemento que se puede enviar y no satisface sus restricciones.</p>

<table class="properties">
 <tbody>
  <tr>
   <th>Interfaz</th>
   <td>{{DOMxRef("Event")}}</td>
  </tr>
  <tr>
   <th>Burbujas</th>
   <td>No</td>
  </tr>
  <tr>
   <th>Cancelable</th>
   <td>Sí</td>
  </tr>
  <tr>
   <th>Objetivos</th>
   <td>{{domxref("Element")}}</td>
  </tr>
  <tr>
   <th>Acción por defecto</th>
   <td>Varía (puede prevenir que un formulario sea enviado)</td>
  </tr>
 </tbody>
</table>

<p>Este evento puede ser útil para desplegar un resumen de los problemas con un formulario al enviarlo. Cuando un formulario se envía, los eventos <code>invalid</code> son disparados en cada control del formulario que es inválido, y entonces en el mismo elemento <code><a href="https://www.w3.org/TR/html51/sec-forms.html#elementdef-form" id="ref-for-elementdef-form-16">form</a></code>. La válidez de los elementos presentados se comprueba antes de enviar al propio {{HtmlElement("form")}}, o despúes del método <a href="/en-US/docs/HTML/Forms_in_HTML#Constraint_Validation_API" title="/en-US/docs/HTML/Forms_in_HTML#Constraint_Validation_API"><code>checkValidity()</code></a> de un elemento o su propio <code>&lt;form&gt;</code> es llamado. No es revisada al perder el foco (on blur).</p>

<h2 id="Ejemplo">Ejemplo</h2>

<p>Si un formulario es enviado con un valor inválido, los elementos pressentados son revisados, y si un error es encontrado, el evento <code>invalid</code> se disparará en el elemento <code>invalid</code>. En este ejemplo, el valor inválido del input dispara un evento <code>invalid</code>, y el valor inválido es registrado.</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;form action="#"&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;label&gt;Enter an integer between 1 and 10: &lt;input type="number" min="0" max="10" required&gt;&lt;/label&gt;&lt;/li&gt;
    &lt;li&gt;&lt;input type="submit" value="submit"&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/form&gt;&lt;p id="log"&gt;&lt;/p&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">const input = document.querySelector('input');
const log = document.getElementById('log');

input.addEventListener('invalid', logValue);

function logValue(e) {
  log.textContent += e.srcElement.value;
}</pre>

<h3 id="Resultado">Resultado</h3>

<p>{{EmbedLiveSample("Example")}}</p>

<p>(Funciona en la versión en inglés)</p>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentario</th>
  </tr>
  <tr>
   <td>{{ SpecName('HTML WHATWG', 'forms.html#the-constraint-validation-api', 'Invalid event') }}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{ SpecName('HTML5.1', 'sec-forms.html#the-constraint-validation-api', 'Invalid event') }}</td>
   <td>{{Spec2('HTML5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{ SpecName('HTML5 W3C', 'forms.html#the-constraint-validation-api', 'Invalid event') }}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>{{domxref("GlobalEventHandlers.oninvalid")}}</li>
 <li>Elemento HTML {{HtmlElement("form")}}</li>
 <li>Evento relacionado: {{Event("submit")}}</li>
 <li><a href="/en-US/docs/Web/CSS/:invalid">CSS <code>:invalid </code>pseudo class</a></li>
</ul>

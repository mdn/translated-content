---
title: ':disabled'
slug: 'Web/CSS/:disabled'
tags:
  - CSS
  - Diseño
  - Pseudo-clase
  - Referencia
  - Web
translation_of: 'Web/CSS/:disabled'
---
<div>{{CSSRef}}</div>

<p>La <a href="/en-US/docs/Web/CSS/Pseudo-classes">pseudo-clase</a> <code>:disabled</code> de <a href="/en-US/docs/Web/CSS">CSS</a> representa a cualquier elemento deshabilitado. Un elemento se encuentra deshabilitado si no puede ser activado (por ejemplo ser selecionado, hacer click en él o aceptar texto de entrada) ni aceptar el foco. El elemento tiene además un estado habilitado en el cual puede ser activado o recibir foco.</p>

<pre class="brush: css">/* Selecciona cualquier &lt;input&gt; deshabilitado */
input:disabled {
  background: #ccc;
}</pre>

<h2 id="Sintaxis">Sintaxis</h2>

{{csssyntax}}

<h2 id="Ejemplo">Ejemplo</h2>

<p>Este ejemplo muestra un formulario de envío básico. Utiliza el evento <a href="/es/docs/Web/JavaScript">JavaScript</a> {{event("change")}} para permitir al usuario habilitar / deshabilitar los campos de facturación.</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;form action="#"&gt;
  &lt;fieldset id="shipping"&gt;
    &lt;legend&gt;Dirección de Envío&lt;/legend&gt;
    &lt;input type="text" placeholder="Nombre"&gt;
    &lt;input type="text" placeholder="Dirección"&gt;
    &lt;input type="text" placeholder="Código postal"&gt;
  &lt;/fieldset&gt;
  &lt;br&gt;
  &lt;fieldset id="billing"&gt;
    &lt;legend&gt;Dirección de facturación&lt;/legend&gt;
    &lt;label for="billing_is_shipping"&gt;Igual que la dirección de envío:&lt;/label&gt;
    &lt;input type="checkbox" id="billing-checkbox" checked&gt;
    &lt;br&gt;
    &lt;input type="text" placeholder="Nombre" disabled&gt;
    &lt;input type="text" placeholder="Dirección" disabled&gt;
    &lt;input type="text" placeholder="Código postal" disabled&gt;
  &lt;/fieldset&gt;
&lt;/form&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">input[type="text"]:disabled {
  background: #ccc;
}</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">// Esperar a que la página termine de cargarse
document.addEventListener('DOMContentLoaded', function () {
  // Adjunte el detector de eventos `change` al checkbox
  document.getElementById('billing-checkbox').onchange = toggleBilling;
}, false);

function toggleBilling() {
  // Seleccione los campos de texto de facturación
  var billingItems = document.querySelectorAll('#billing input[type="text"]');

  // Alternar los campos de texto de facturación
  for (var i = 0; i &lt; billingItems.length; i++) {
    billingItems[i].disabled = !billingItems[i].disabled;
  }
}</pre>

<h3 id="Resultado">Resultado</h3>

<p>{{EmbedLiveSample('Ejemplo', 300, 250)}}</p>

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
   <td>{{SpecName('HTML WHATWG', '#selector-disabled', ':disabled')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>Ningún cambio.</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', '#selector-disabled', ':disabled')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>Define la semántica referente a HTML y los formularios.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS4 Selectors', '#enableddisabled', ':disabled')}}</td>
   <td>{{Spec2('CSS4 Selectors')}}</td>
   <td>Ningún cambio.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Basic UI', '#pseudo-classes', ':disabled')}}</td>
   <td>{{Spec2('CSS3 Basic UI')}}</td>
   <td>Referencia a los selectores de Nivel 3.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Selectors', '#enableddisabled', ':disabled')}}</td>
   <td>{{Spec2('CSS3 Selectors')}}</td>
   <td>Define la pseudo clase pero no la semántica asociada..</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>

<p>{{Compat("css.selectors.disabled")}}</p>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>
  <p>{{Cssxref(":enabled")}}</p>
 </li>
</ul>

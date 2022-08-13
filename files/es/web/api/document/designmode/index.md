---
title: Document.designMode
slug: Web/API/Document/designMode
tags:
  - API
  - Documento
  - HTML DOM
  - Propiedad
  - Referencia
  - editor
translation_of: Web/API/Document/designMode
---
<div>{{ ApiRef() }}</div>

<p><strong><code>document.designMode</code></strong> controla la posibilidad de editar un documento entero. Los valores válidos son <code>"on"</code> y <code>"off"</code>. De acuerdo a las especificaciones,  el valor predeterminado de esta propiedad es <code>"off"</code>. Firefox sigue este estándar. El valor predeterminado de versiones anteriores de Chrome y IE es <code>"inherit"</code>. En IE6-10, el valor se escribe con mayúscula.</p>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox">var mode = document.designMode;
document.designMode = "on" || "off";</pre>

<h2 id="Ejemplo">Ejemplo</h2>

<p>Hacer un documento {{HTMLElement("iframe")}} editable:</p>

<pre class="brush: js">iframeNode.contentDocument.designMode = "on";
</pre>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentario</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', '#making-entire-documents-editable:-the-designmode-idl-attribute', 'designMode')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>Definición inicial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_de_Navegadores">Compatibilidad de Navegadores</h2>

<p>{{Compat("api.Document.designMode")}}</p>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li><a href="/en-US/docs/Rich-Text_Editing_in_Mozilla">Editando text enriquecido en Mozilla</a></li>
 <li>{{domxref("HTMLElement.contentEditable")}}</li>
 <li><a href="https://msdn.microsoft.com/en-us/library/ms533720(v=vs.85).aspx">propiedad designMode</a> en MSDN</li>
</ul>

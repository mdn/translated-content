---
title: Document.doctype
slug: Web/API/Document/doctype
tags:
  - API
  - DOCTYPE
  - DOM
  - Document
  - Propiedad
  - Referencia
translation_of: Web/API/Document/doctype
---
<div>{{ApiRef("DOM")}}</div>

<p>Devuelve la Declaración de tipo de documento (Document Type Declaration (DTD)), asociada al documento actual. El objeto devuelto implementa la interfaz {{domxref("DocumentType")}}. Utilice {{domxref("DOMImplementation.createDocumentType()")}} para crear un <code>DocumentType</code>.</p>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox"><var>doctype</var> = <var>document</var>.doctype;
</pre>

<ul>
 <li><code>doctype</code> es una propiedad de sólo lectura.</li>
</ul>

<h2 id="Ejemplo">Ejemplo</h2>

<pre class="brush:js">var doctypeObj = document.doctype;

console.log(
  "doctypeObj.name: "           + doctypeObj.name            + "\n" +
  "doctypeObj.internalSubset: " + doctypeObj.internalSubset  + "\n" +
  "doctypeObj.publicId: "       + doctypeObj.publicId        + "\n" +
  "doctypeObj.systemId: "       + doctypeObj.systemId
);</pre>

<h2 id="Notas">Notas</h2>

<p>La propiedad devuelve <code>null</code> si no hay DTD asociada al documento actual.</p>

<p>El nivel 2 de DOM no soporta la edición de la declaración de tipo de documento.</p>

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
   <td>{{SpecName("DOM3 Core", "core.html#ID-B63ED1A31", "Document.doctype")}}</td>
   <td>{{Spec2("DOM3 Core")}}</td>
   <td>Cambiado el valor de retorno para documentos HTML sin el elemento {{HTMLElement("html")}}. Define que el tipo de documento puede ser modificado.</td>
  </tr>
  <tr>
   <td>{{SpecName("DOM2 Core", "core.html#ID-B63ED1A31", "Document.doctype")}}</td>
   <td>{{Spec2("DOM2 Core")}}</td>
   <td>Definición inicial</td>
  </tr>
 </tbody>
</table>

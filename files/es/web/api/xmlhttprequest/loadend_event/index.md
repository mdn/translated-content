---
title: loadend
slug: Web/API/XMLHttpRequest/loadend_event
tags:
  - eventos
translation_of: Web/API/XMLHttpRequest/loadend_event
original_slug: Web/Events/loadend
---
<p>El evento <code>loadend</code> es emitido cuando el progreso de la carga de un recurso se ha detenido (e.g. despues que "error", "abort", o "load" han sido emitidos). Por ejemplo, esto aplica a las llamadas de {{domxref("XMLHttpRequest")}}, y al contenido de un elemento {{htmlelement("img")}} o {{htmlelement("video")}}.</p>

<h2 id="Información_General">Información General</h2>

<dl>
 <dt style="float: left; text-align: right; width: 120px;">Especificación</dt>
 <dd style="margin: 0 0 0 120px;"><a class="external" href="http://www.w3.org/TR/progress-events/">Progress</a></dd>
 <dt style="float: left; text-align: right; width: 120px;">Interfaz</dt>
 <dd style="margin: 0 0 0 120px;">ProgressEvent</dd>
 <dt style="float: left; text-align: right; width: 120px;">Bubbles</dt>
 <dd style="margin: 0 0 0 120px;">No</dd>
 <dt style="float: left; text-align: right; width: 120px;">Cancelable</dt>
 <dd style="margin: 0 0 0 120px;">No</dd>
 <dt style="float: left; text-align: right; width: 120px;">Target</dt>
 <dd style="margin: 0 0 0 120px;">{{domxref("HTMLImageElement")}}, Por Ejemplo</dd>
 <dt style="float: left; text-align: right; width: 120px;">Acción por Defecto</dt>
 <dd style="margin: 0 0 0 120px;">None</dd>
</dl>

<h2 id="Propiedades">Propiedades</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Property</th>
   <th scope="col">Type</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>target</code> {{readonlyInline}}</td>
   <td>{{domxref("EventTarget")}}</td>
   <td>The event target (the topmost target in the DOM tree).</td>
  </tr>
  <tr>
   <td><code>type</code> {{readonlyInline}}</td>
   <td>{{domxref("DOMString")}}</td>
   <td>The type of event.</td>
  </tr>
  <tr>
   <td><code>bubbles</code> {{readonlyInline}}</td>
   <td>{{jsxref("Boolean")}}</td>
   <td>Whether the event normally bubbles or not.</td>
  </tr>
  <tr>
   <td><code>cancelable</code> {{readonlyInline}}</td>
   <td>{{jsxref("Boolean")}}</td>
   <td>Whether the event is cancellable or not.</td>
  </tr>
  <tr>
   <td><code>lengthComputable </code>{{readonlyInline}}</td>
   <td>{{jsxref("Boolean")}}</td>
   <td>Specifies whether or not the total size of the transfer is known. Read only.</td>
  </tr>
  <tr>
   <td><code>loaded</code> {{readonlyInline}}</td>
   <td>unsigned long (long)</td>
   <td>The number of bytes transferred since the beginning of the operation. This doesn't include headers and other overhead, but only the content itself. Read only.</td>
  </tr>
  <tr>
   <td><code>total</code> {{readonlyInline}}</td>
   <td>unsigned long (long)</td>
   <td>The total number of bytes of content that will be transferred during the operation. If the total size is unknown, this value is zero. Read only.</td>
  </tr>
 </tbody>
</table>

<h2 id="Eventos_Relacionados">Eventos Relacionados</h2>

<ul>
 <li>{{event("loadstart")}}</li>
 <li>{{event("progress")}}</li>
 <li>{{event("error")}}</li>
 <li>{{event("abort")}}</li>
 <li>{{event("load")}}</li>
 <li>{{event("loadend")}}</li>
</ul>

<h2 id="Ver_También">Ver También</h2>

<ul>
 <li><a href="/en-US/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest#Monitoring_progress" title="/en-US/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest">Monitoreando progreso</a></li>
</ul>

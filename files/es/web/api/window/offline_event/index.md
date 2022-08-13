---
title: Offline
slug: Web/API/Window/offline_event
tags:
  - Event
  - Evento
  - Reference
  - Referencia
translation_of: Web/API/Window/offline_event
---
<div>{{APIRef}}</div>

<p>El evento <strong><code>offline</code></strong> se activa cuando el navegador ha pierdido acceso a la red y el valor de <code>navigator.onLine</code> cambia a <code>false</code>.</p>

<h2 id="Información_General">Información General</h2>

<dl>
 <dt style="float: left; text-align: right; width: 120px;">Especificación</dt>
 <dd style="margin: 0 0 0 120px;"><a class="external" href="http://www.whatwg.org/specs/web-apps/current-work/multipage/offline.html#event-offline">HTML5 Offline</a></dd>
 <dt style="float: left; text-align: right; width: 120px;">Interfaz</dt>
 <dd style="margin: 0 0 0 120px;">Evento</dd>
 <dt style="float: left; text-align: right; width: 120px;">Burbujas</dt>
 <dd style="margin: 0 0 0 120px;">No</dd>
 <dt style="float: left; text-align: right; width: 120px;">Cancelable</dt>
 <dd style="margin: 0 0 0 120px;">No</dd>
 <dt style="float: left; text-align: right; width: 120px;">Target</dt>
 <dd style="margin: 0 0 0 120px;">DefaultView (<code>&lt;window&gt;</code>)</dd>
 <dt style="float: left; text-align: right; width: 120px;">Acción por Defecto</dt>
 <dd style="margin: 0 0 0 120px;">Ninguna</dd>
</dl>

<h2 id="Propiedades">Propiedades</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Propiedad</th>
   <th scope="col">Tipo</th>
   <th scope="col">Descripción</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>target</code> {{readonlyInline}}</td>
   <td>{{domxref("EventTarget")}}</td>
   <td>Evento target (el objetivo más alto en el árbol DOM).</td>
  </tr>
  <tr>
   <td><code>type</code> {{readonlyInline}}</td>
   <td>{{domxref("DOMString")}}</td>
   <td>Tipo de evento.</td>
  </tr>
  <tr>
   <td><code>bubbles</code> {{readonlyInline}}</td>
   <td>{{jsxref("Boolean")}}</td>
   <td>Si el evento normalmente burbujea o no.</td>
  </tr>
  <tr>
   <td><code>cancelable</code> {{readonlyInline}}</td>
   <td>{{jsxref("Boolean")}}</td>
   <td>Si el evento normalmente es cancelable o no.</td>
  </tr>
 </tbody>
</table>

<h2 id="Eventos_Relacionados">Eventos Relacionados</h2>

<ul>
 <li><a href="/en-US/docs/Mozilla_event_reference/online"><code>online</code></a></li>
</ul>

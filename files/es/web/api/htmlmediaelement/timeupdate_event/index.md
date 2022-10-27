---
title: 'HTMLMediaElement: timeupdate'
slug: Web/API/HTMLMediaElement/timeupdate_event
translation_of: Web/API/HTMLMediaElement/timeupdate_event
---
<p>El evento <code>timeupdate es llamado cuando el tiempo indicado por el atributo currentTime es actualizado.</code></p>

<p>La frecuencia del evento depende de la carga del sistema, pero se encuentra en un rango de 4Hz y 66Hz (asumiendo que los manejadores de eventos no toman mas de 250ms para correr). Se recomienda a los User agents variar la frecuencia del evento basados en la carga del sistema y el costo promedio de procesamiento del evento cada vez que corre, para que las actualizaciones a la UI no sean mas frecuentes que las que el user agent puede manejar confortablemente mientras se decodifica el video.</p>

<h2 id="Información_General">Información General</h2>

<dl>
 <dt style="float: left; text-align: right; width: 120px;">Specification</dt>
 <dd style="margin: 0 0 0 120px;"><a class="external" href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#event-media-timeupdate">HTML5 media</a></dd>
 <dt style="float: left; text-align: right; width: 120px;">Interface</dt>
 <dd style="margin: 0 0 0 120px;">Event</dd>
 <dt style="float: left; text-align: right; width: 120px;">Bubbles</dt>
 <dd style="margin: 0 0 0 120px;">No</dd>
 <dt style="float: left; text-align: right; width: 120px;">Cancelable</dt>
 <dd style="margin: 0 0 0 120px;">No</dd>
 <dt style="float: left; text-align: right; width: 120px;">Target</dt>
 <dd style="margin: 0 0 0 120px;">Element</dd>
 <dt style="float: left; text-align: right; width: 120px;">Default Action</dt>
 <dd style="margin: 0 0 0 120px;">None.</dd>
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
 </tbody>
</table>

<h2 id="Eventos_Relacionados">Eventos Relacionados</h2>

<ul>
 <li>{{event("playing")}}</li>
 <li>{{event("waiting")}}</li>
 <li>{{event("seeking")}}</li>
 <li>{{event("seeked")}}</li>
 <li>{{event("ended")}}</li>
 <li>{{event("loadedmetadata")}}</li>
 <li>{{event("loadeddata")}}</li>
 <li>{{event("canplay")}}</li>
 <li>{{event("canplaythrough")}}</li>
 <li>{{event("durationchange")}}</li>
 <li>{{event("timeupdate")}}</li>
 <li>{{event("play")}}</li>
 <li>{{event("pause")}}</li>
 <li>{{event("ratechange")}}</li>
 <li>{{event("volumechange")}}</li>
 <li>{{event("suspend")}}</li>
 <li>{{event("emptied")}}</li>
 <li>{{event("stalled")}}</li>
</ul>

---
title: Window.matchMedia()
slug: Web/API/Window/matchMedia
tags:
  - API
  - CSSOM View
  - JavaScript
  - Media Queries
  - Referencia
  - Window
  - metodo
translation_of: Web/API/Window/matchMedia
---
<div>{{APIRef}}</div>

<p>El método <code><strong>Window.matchMedia()</strong></code> devuelve un nuevo objeto {{domxref("MediaQueryList")}} que representa los analizados de la <a href="/es/docs/CSS/Media_queries" title="CSS/Media queries">media query</a> indicada.</p>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox"><em>mql</em> = window.matchMedia(<em>mediaQueryString</em>)</pre>

<p>Donde <code>mediaQueryString</code> es una cadena de texto que representa la media query de la que devolver un nuevo objeto {{domxref("MediaQueryList")}}.</p>

<h2 id="Ejemplo">Ejemplo</h2>

<p>Este código le permite manejar las cosas de forma diferente cuando la ventana es muy estrecha.</p>

<pre class="brush: js">if (window.matchMedia("(min-width: 400px)").matches) {
  /* La pantalla tiene al menos 400 píxeles de ancho */
} else {
  /* La pantalla tiene menos de 400 píxeles de ancho */
}</pre>

<p>Consulte <a href="/en-US/docs/DOM/Using_media_queries_from_code" title="CSS/Using media queries from code">Probando media queries</a> para ver ejemplos adicionales.</p>

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
   <td>{{SpecName("CSSOM View", "#dom-window-matchmedia", "Window.matchMedia()")}}</td>
   <td>{{Spec2("CSSOM View")}}</td>
   <td>Definición initial</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_en_navegadores">Compatibilidad en navegadores</h2>

<p>{{Compat("api.Window.matchMedia")}}</p>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li><a href="/es/docs/CSS/Media_queries" title="CSS/Media queries">Media queries</a></li>
 <li><a href="/es/docs/Web/Guide/CSS/probando_media_queries" title="CSS/Probando media queries
">Probando media queries </a></li>
 <li>{{domxref("MediaQueryList")}}</li>
 <li>{{domxref("MediaQueryListListener")}}</li>
</ul>

---
title: figure
slug: Web/HTML/Element/figure
tags:
  - HTML
  - HTML5
  - HTML:Elemento
  - figure
  - para_revisar
translation_of: Web/HTML/Element/figure
original_slug: Web/HTML/Elemento/figure
---
<p><span class="goog-gtc-unit" id="goog-gtc-unit-2"><span class="goog-gtc-from-human goog-gtc-translatable" dir="ltr">El <em> elemento HTML</em> <span style="font-family: Courier New;">&lt;figure&gt;</span> representa contenido independiente, a menudo con un título.</span></span> <span class="goog-gtc-unit" id="goog-gtc-unit-3"><span class="goog-gtc-from-human goog-gtc-translatable" dir="ltr">Si bien se relaciona con el flujo principal, su posición es independiente de éste.</span></span> <span class="goog-gtc-unit" id="goog-gtc-unit-4"><span class="goog-gtc-from-human goog-gtc-translatable" dir="ltr">Por lo general, se trata de una imagen, una ilustración, un diagrama, un fragmento de código, o un esquema al que se hace referencia en el texto principal, pero que se puede mover a otra página o a un apéndice sin que afecte al flujo principal.</span></span></p>

<div class="note">
<p><em><span class="goog-gtc-unit" id="goog-gtc-unit-5"><span class="goog-gtc-from-tm goog-gtc-from-tm-score-100 goog-gtc-translatable" dir="ltr">Notas de uso:</span></span> </em></p>

<ul>
 <li><span class="goog-gtc-unit" id="goog-gtc-unit-6"><span class="goog-gtc-from-human goog-gtc-translatable" dir="ltr">Al ser una <a href="/es/Secciones_y_esquema_de_un_documento_HTML_5#Seccionador_ra.c3.adz" title="https://developer.mozilla.org/es/Secciones_y_esquema_de_un_documento_HTML_5#Seccionador_ra.c3.adz">seccionador raíz</a>, el esbozo del contenido del elemento <span style="font-family: Courier New;">&lt;figure&gt;</span> está excluido del esbozo principal del documento.</span></span></li>
 <li><span class="goog-gtc-unit" id="goog-gtc-unit-7"><span class="goog-gtc-from-mt goog-gtc-translatable" dir="ltr">Un título puede estar asociado con el elemento <span style="font-family: Courier New;">&lt;figure&gt;</span> mediante la inserción de un {{ HTMLElement ("figcaption") }} en su interior (como el primero o el último hijo).</span></span></li>
</ul>
</div>

<h3 id="Contexto_de_uso"><span class="goog-gtc-unit" id="goog-gtc-unit-8"><span class="goog-gtc-from-tm goog-gtc-from-tm-score-100 goog-gtc-translatable" dir="ltr">Contexto de uso</span></span></h3>

<table class="standard-table" style="height: 117px; width: 1125px;">
 <tbody>
  <tr>
   <th><span class="goog-gtc-unit" id="goog-gtc-unit-9"><span class="goog-gtc-from-mt goog-gtc-translatable" dir="ltr">Tipo</span></span></th>
   <th><a><span class="goog-gtc-unit" id="goog-gtc-unit-10"><span class="goog-gtc-from-human goog-gtc-translatable" dir="ltr">Seccionador raíz</span></span></a></th>
  </tr>
  <tr>
   <td><span class="goog-gtc-unit" id="goog-gtc-unit-11"><span class="goog-gtc-from-tm goog-gtc-from-tm-score-100 goog-gtc-translatable" dir="ltr">Contenido permitido</span></span></td>
   <td><span class="goog-gtc-unit" id="goog-gtc-unit-12"><span class="goog-gtc-from-human goog-gtc-translatable" dir="ltr">Un elemento {{ HTMLElement ("figcaption") }}, seguido por <a href="/en/HTML/Content_categories#flow_content" title="en/HTML/Content categories#flow content"> contenido dinámico</a> , o contenido dinámico seguido por un elemento{{ HTMLElement ("figcaption") }}.</span></span></td>
  </tr>
  <tr>
   <td><span class="goog-gtc-unit" id="goog-gtc-unit-13"><span class="goog-gtc-from-tm goog-gtc-from-tm-score-100 goog-gtc-translatable" dir="ltr">Omisión de etiquetas</span></span></td>
   <td><span class="goog-gtc-unit" id="goog-gtc-unit-14"><span class="goog-gtc-from-tm goog-gtc-from-tm-score-100 goog-gtc-ph-missing goog-gtc-translatable" dir="ltr">Ninguna, tanto la etiqueta inicial como la etiqueta de cierre son obligatorias</span></span></td>
  </tr>
  <tr>
   <td><span class="goog-gtc-unit" id="goog-gtc-unit-15"><span class="goog-gtc-from-tm goog-gtc-from-tm-score-100 goog-gtc-translatable" dir="ltr">Elementos primarios permitidos</span></span></td>
   <td><span class="goog-gtc-unit" id="goog-gtc-unit-16"><span class="goog-gtc-from-human goog-gtc-translatable" dir="ltr">Cualquier elemento que acepte elementos dinámicos.</span></span></td>
  </tr>
  <tr>
   <td><span class="goog-gtc-unit" id="goog-gtc-unit-17"><span class="goog-gtc-from-tm goog-gtc-from-tm-score-100 goog-gtc-translatable" dir="ltr">Documento normativo</span></span></td>
   <td><a class="external" href="http://www.whatwg.org/specs/web-apps/current-work/multipage/text-level-semantics.html#the-mark-element" rel="external nofollow"><span class="goog-gtc-unit" id="goog-gtc-unit-18"><span class="goog-gtc-from-mt goog-gtc-translatable" dir="ltr">HTML 5, sección 4.5.11</span></span></a></td>
  </tr>
 </tbody>
</table>

<h3 id="Atributos"><span class="goog-gtc-unit" id="goog-gtc-unit-19"><span class="goog-gtc-from-tm goog-gtc-from-tm-score-100 goog-gtc-translatable" dir="ltr">Atributos</span></span></h3>

<p><span class="goog-gtc-unit" id="goog-gtc-unit-20"><span class="goog-gtc-from-tm goog-gtc-from-tm-score-100 goog-gtc-ph-missing goog-gtc-translatable" dir="ltr">Este elemento no tiene atributos que no sean los <a href="/en/HTML/Global_attributes" title="../../../../en/HTML/global attributes">atributos globales</a>, comunes a todos los elementos.</span></span></p>

<h3 class="editable" id="Interfaz_DOM"><span class="goog-gtc-unit" id="goog-gtc-unit-21"><span class="goog-gtc-from-tm goog-gtc-from-tm-score-100 goog-gtc-translatable" dir="ltr">Interfaz DOM</span></span></h3>

<p><span class="goog-gtc-unit" id="goog-gtc-unit-22"><span class="goog-gtc-from-tm goog-gtc-from-tm-score-100 goog-gtc-ph-missing goog-gtc-translatable" dir="ltr">Este elemento implementa la interfaz </span></span><code><a href="/en/DOM/element" title="en/DOM/element">HTMLElement</a></code><span class="goog-gtc-unit" id="goog-gtc-unit-22"><span class="goog-gtc-from-tm goog-gtc-from-tm-score-100 goog-gtc-ph-missing goog-gtc-translatable" dir="ltr">.</span></span></p>

<h3 id="Consulta_también"><span class="goog-gtc-unit" id="goog-gtc-unit-23"><span class="goog-gtc-from-tm goog-gtc-from-tm-score-100 goog-gtc-translatable" dir="ltr">Consulta también</span></span></h3>

<p><span class="goog-gtc-unit" id="goog-gtc-unit-24"><span class="goog-gtc-from-human goog-gtc-translatable" dir="ltr">El elemento {{ HTMLElement ("figcaption") }}.</span></span></p>

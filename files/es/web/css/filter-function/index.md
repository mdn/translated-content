---
title: <filter-function>
slug: Web/CSS/filter-function
tags:
  - CSS
  - Efectos de Filtro
  - Referencia
  - Tipos de dato CSS
translation_of: Web/CSS/filter-function
---
<div>{{cssref}}</div>

<p>El <a href="/es/docs/Web/CSS/CSS_Types">tipo de datos</a> <a href="/es/docs/Web/CSS">CSS</a> <code><strong>&lt;filter-function&gt;</strong></code> representa un efecto gráfico que puede cambiar la apariencia de una imagen de entrada. Se usa en las propiedades {{cssxref("filter")}} y {{cssxref("backdrop-filter")}}.</p>

<h2 id="Sintaxis">Sintaxis</h2>

<p>El tipo de datos <code>&lt;filter-function&gt;</code> se especifica utilizando una de las funciones de filtro enumeradas a continuación. Cada función requiere un argumento que, si no es válido, da como resultado que no se aplique ningún filtro.</p>

<dl>
 <dt><code><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/blur">blur()</a></code></dt>
 <dd>Difumina la imagen.</dd>
 <dt><code><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/brightness">brightness()</a></code></dt>
 <dd>Hace que la imagen sea más brillante o más oscura.</dd>
 <dt><code><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/contrast">contrast()</a></code></dt>
 <dd>Aumenta o disminuye el contraste de la imagen.</dd>
 <dt><code><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow">drop-shadow()</a></code></dt>
 <dd>Aplica una sombra paralela detrás de la imagen.</dd>
 <dt><code><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/grayscale">grayscale()</a></code></dt>
 <dd>Convierte la imagen a escala de grises.</dd>
 <dt><code><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/hue-rotate">hue-rotate()</a></code></dt>
 <dd>Cambia el tono general de la imagen.</dd>
 <dt><code><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/invert">invert()</a></code></dt>
 <dd>Invierte los colores de la imagen.</dd>
 <dt><code><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/opacity">opacity()</a></code></dt>
 <dd>Hace que la imagen sea transparente.</dd>
 <dt><code><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/saturate">saturate()</a></code></dt>
 <dd>Super-saturado o desaturado la imagen de entrada.</dd>
 <dt><code><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/sepia">sepia()</a></code></dt>
 <dd>Convierte la imagen a sepia.</dd>
</dl>

<h2 id="Especificación">Especificación</h2>

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
   <td>{{ SpecName('Filters 1.0', '#typedef-filter-function', '&lt;filter-function&gt;') }}</td>
   <td>{{ Spec2('Filters 1.0') }}</td>
   <td>Definición inicial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>Propiedades que usan este tipo de datos: {{cssxref("filter")}} y {{cssxref("backdrop-filter")}}</li>
</ul>

---
title: zoom
slug: Web/CSS/zoom
tags:
  - CSS
  - NeedsBrowserCompatibility
  - NeedsLiveSample
  - NeedsMobileBrowserCompatibility
  - No estandar
  - Propiedad CSS
  - Referencia
translation_of: Web/CSS/zoom
---
<p>{{ CSSRef() }}</p>

<p>{{ Non-standard_header() }}</p>

<h2 id="Resumen">Resumen</h2>

<p>La propiedad CSS no estándar  <code>zoom</code>  se puede usar para controlar el aumento de escala de un lemento. En la medida de lo posible deben usarse <a href="/es/docs/Web/CSS/CSS_Transforms">Transformaciones CSS</a> en vez de esta propiedad..</p>

<table>
 <tbody>
  <tr>
   <th>Valor inicial</th>
   <td><code>normal</code></td>
  </tr>
  <tr>
   <th>Se aplica a:</th>
   <td>all elements</td>
  </tr>
  <tr>
   <th>Heredado</th>
   <td>no</td>
  </tr>
  <tr>
   <th>Medio</th>
   <td>visual</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Síntaxis">Síntaxis</h2>

<h3 id="Valores">Valores</h3>

<dl>
 <dt><code>normal</code></dt>
 <dd>Dibuja el elemento con su tamaño normal.</dd>
 <dt><code>reset</code> {{non-standard_inline}}</dt>
 <dd>Si el usuario aplica un cambio de escala no basado en presionar  (por ejemplo al presionar Ctrl+ o Ctrl-) al documento no cambia la escala del elemento. Sólo soportado por WebKit (y posiblemente Blink).</dd>
 <dt>{{cssxref("&lt;percentage&gt;")}}</dt>
 <dd>Factor de Zoom. <code>100%</code> es a tamaño <code>normal</code>. Valores superiores a 100% aumentan y valores inferiores al 100% encogen el elemento.</dd>
 <dt>{{cssxref("&lt;number&gt;")}}</dt>
 <dd>Factor de Zoom. Equivalente al porcentaje correspondiente (<code>1.0</code> = <code>100%</code> = <code>normal</code>). Valores mayores de <code>1.0</code> aumentarán el tamaño. Valores menores de  <code>1.0</code> encogerán.</dd>
</dl>

<h3 id="Síntaxis_Formal">Síntaxis Formal</h3>

<pre class="syntaxbox">normal | reset | <a href="/en-US/docs/Web/CSS/number">&lt;number&gt;</a> | <a href="/en-US/docs/Web/CSS/percentage">&lt;percentage&gt;</a>
</pre>

<h2 id="Specifications" name="Specifications">Especificaciones</h2>

<p>Esta propiedad no es estándar y tiene su origen en Internet Explorer. Microsoft tiene una <a href="https://msdn.microsoft.com/es/library/ms531189(v=vs.85).aspx"> descripción en MSDN</a>. Apple tiene <a href="https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-SW15">una descripción en la Referencia CSS de Safari</a>. Rossen Atanassov, de Microsoft, tiene <a href="http://cdn.rawgit.com/atanassov/css-zoom/master/Overview.html">una propuesta de borrador no oficial de la especificación en GitHub</a></p>

<h2 id="Browser_compatibility" name="Browser_compatibility">Compatibilidad con los distintos navegadores</h2>

<p>{{ CompatibilityTable() }}</p>

<div id="compat-desktop">
<table class="compat-table">
 <tbody>
  <tr>
   <th>Característica</th>
   <th>Chrome</th>
   <th>Firefox (Gecko)</th>
   <th>Internet Explorer</th>
   <th>Opera</th>
   <th>Safari</th>
  </tr>
  <tr>
   <td>Soporte básico</td>
   <td>{{ CompatVersionUnknown() }}</td>
   <td>{{ CompatNo() }} [1]</td>
   <td>5.5</td>
   <td>{{ CompatVersionUnknown() }}</td>
   <td>4.0</td>
  </tr>
  <tr>
   <td>valor de reseteo</td>
   <td>{{ CompatUnknown() }}</td>
   <td>{{ CompatUnknown() }}</td>
   <td>{{ CompatUnknown() }}</td>
   <td>{{ CompatUnknown() }}</td>
   <td>{{ CompatVersionUnknown() }}</td>
  </tr>
 </tbody>
</table>
</div>

<div id="compat-mobile">
<table class="compat-table">
 <tbody>
  <tr>
   <th>Característica</th>
   <th>Android</th>
   <th>Firefox Mobile (Gecko)</th>
   <th>IE Mobile</th>
   <th>Opera Mobile</th>
   <th>Safari Mobile</th>
  </tr>
  <tr>
   <td>Soporte básico</td>
   <td>{{ CompatUnknown() }}</td>
   <td>{{ CompatUnknown() }} [1]</td>
   <td>{{ CompatUnknown() }}</td>
   <td>{{ CompatUnknown() }}</td>
   <td>{{ CompatUnknown() }}</td>
  </tr>
  <tr>
   <td>Valor de reseteo</td>
   <td>{{ CompatUnknown() }}</td>
   <td>{{ CompatUnknown() }}</td>
   <td>{{ CompatUnknown() }}</td>
   <td>{{ CompatUnknown() }}</td>
   <td>{{ CompatUnknown() }}</td>
  </tr>
 </tbody>
</table>
</div>

<p>[1]: {{bug(390936, 'summary')}}</p>

<h2 id="Ver_además">Ver además</h2>

<ul>
 <li><a href="https://css-tricks.com/almanac/properties/z/zoom/"><code>zoom</code> Post en el Almanaque de CSS-Tricks</a></li>
</ul>

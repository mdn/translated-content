---
title: Window.moveBy()
slug: Web/API/Window/moveBy
translation_of: Web/API/Window/moveBy
---
<div>{{APIRef}}</div>

<h2 id="Resumen">Resumen</h2>

<p>Mueve la actual ventana a consecuencia de una cantidad especificada.</p>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox">window.moveBy(<em>deltaX</em>, <em>deltaY</em>)
</pre>

<h3 id="Parametros">Parametros</h3>

<ul>
 <li><code>deltaX</code> es la cantidad de pixeles a mover la ventana horizontalmente.</li>
 <li><code>deltaY</code> es la cantidad de pixeles a mover la ventana verticalmente.</li>
</ul>

<h2 id="Ejemplo">Ejemplo</h2>

<pre class="brush:js">function budge() {
  moveBy(10, -10);
}</pre>

<h2 id="Notes">Notes</h2>

<p>Puedes usar numeros negativos como parametros para esta función. Esta función realiza un movimiento relativo mientras que {{domxref("window.moveTo")}} hace un movimiento absoluto.</p>

<p>Desde Firefox 7, no es posible para un sitio web mover una ventana en el navegador, deacuerdo con las <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=565541#c24">siguientes reglas</a>:</p>

<ol>
 <li>No puedes mover una ventana o pestaña que no haya sido creada por window.open.</li>
 <li>No puedes mover una ventana o pestaña cuando esta en una ventana con más de una sola pestaña.</li>
</ol>

<h2 id="Especificación">Especificación</h2>

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
   <td>{{ SpecName('CSSOM View', '#dom-window-moveby', 'window.moveBy()') }}</td>
   <td>{{ Spec2('CSSOM View') }}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatilidad_de_Navegador">Compatilidad de Navegador</h2>



<p>{{Compat("api.Window.moveBy")}}</p>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>{{domxref("window.moveTo")}}</li>
</ul>

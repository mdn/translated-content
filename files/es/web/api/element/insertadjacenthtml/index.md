---
title: Element.insertAdjacentHTML()
slug: Web/API/Element/insertAdjacentHTML
tags:
  - API
  - Cambiando el DOM
  - DOM
  - HTML
  - Insertando Elementos
  - Insertando Nodos
  - Referencia
  - insertAdjacentHTML
  - metodo
translation_of: Web/API/Element/insertAdjacentHTML
---
<div>{{APIRef("DOM")}}</div>

<p>EL método <strong><code>insertAdjacentHTML()</code></strong> de la interfaz {{domxref("Element")}} analiza la cadena de texto introducida como cadena HTML o XML e inserta al árbol DOM los nodos resultantes de dicho análisis en la posición especificada. Este método no re-analiza el elemento sobre el cual se está invocando y por lo tanto no corrompe los elementos ya existentes dentro de dicho elemento. Esto evita el paso adicional de la serialización, haciéndolo mucho más rápido que la manipulación directa con {{domxref("Element.innerHTML", "innerHTML")}}.</p>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox"><em>element</em>.insertAdjacentHTML(<em>posición</em>, <em>texto</em>);</pre>

<h3 id="Parámetros">Parámetros</h3>

<dl>
 <dt><code><strong>posición</strong></code></dt>
 <dd>Un {{domxref("DOMString")}} que representa la posición relativa al <code>elemento</code>, y deberá ser una de las siguientes cadenas:
 <ul>
  <li><code style="color: red;">'beforebegin'</code>: Antes que el propio <code>elemento</code>.</li>
  <li><code style="color: green;">'afterbegin'</code>: Justo dentro del <code>elemento</code>, antes de su primer elemento hijo.</li>
  <li><code style="color: blue;">'beforeend'</code>: Justo dentro del <code>elemento</code>, después de su último elemento hijo.</li>
  <li><code style="color: magenta;">'afterend'</code>: Después del propio <code>elemento</code>.</li>
 </ul>
 </dd>
 <dt><code>texto</code></dt>
 <dd>Es la cadena a ser analizada como HTML o XML e insertada en el árbol.</dd>
</dl>

<h3 id="Visualizacion_de_las_posiciones">Visualizacion de las posiciones</h3>

<pre>&lt;!-- <strong><code style="color: red;">beforebegin</code></strong> --&gt;
<code style="font-weight: bold;">&lt;p&gt;</code>
  &lt;!-- <strong><code style="color: green;">afterbegin</code></strong> --&gt;
  foo
  &lt;!-- <strong><code style="color: blue;">beforeend</code></strong> --&gt;
<code style="font-weight: bold;">&lt;/p&gt;</code>
&lt;!-- <strong><code style="color: magenta;">afterend</code></strong> --&gt;</pre>

<div class="note"><strong>Nota: </strong>Las posiciones <code>beforebegin</code> y <code>afterend</code> funcionan únicamente si el nodo se encuentra en el árbol DOM y tiene un elemento padre.</div>

<h2 id="Ejemplo">Ejemplo</h2>

<pre class="brush: js">// &lt;div id="one"&gt;one&lt;/div&gt;
var d1 = document.getElementById('one');
d1.insertAdjacentHTML('afterend', '&lt;div id="two"&gt;two&lt;/div&gt;');

// En este punto, la nueva estructura es:
// &lt;div id="one"&gt;one&lt;/div&gt;&lt;div id="two"&gt;two&lt;/div&gt;</pre>

<h2 id="Notas">Notas</h2>

<h3 id="Consideraciones_de_seguridad">Consideraciones de seguridad</h3>

<p>Cuando se inserte texto HTML en una página usando <code>insertAdjacentHTML()</code> debe tener cuidado de no usar cadenas de texto que no contengan las secuencias de escape pertinentes según sea el caso.</p>

<p>Se recomienda no usar <code>insertAdjacentHTML()</code> cuando se pretende insertar texto plano; en su lugar, se debe utilizar la propiedad {{domxref("Node.textContent")}} o el método {{domxref("Element.insertAdjacentText()")}}. Este método no interpreta el contenido pasado como HTML, si no que lo inserta como texto plano.</p>

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
   <td>{{SpecName('DOM Parsing', '#widl-Element-insertAdjacentHTML-void-DOMString-position-DOMString-text', 'Element.insertAdjacentHTML()')}}</td>
   <td>{{ Spec2('DOM Parsing') }}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>

<p>{{Compat("api.Element.insertAdjacentHTML")}}</p>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>{{domxref("Element.insertAdjacentElement()")}}</li>
 <li>{{domxref("Element.insertAdjacentText()")}}</li>
 <li>{{domxref("XMLSerializer")}}: Contruir una representación del DOM de un texto XML</li>
 <li><a class="external" href="https://hacks.mozilla.org/2011/11/insertadjacenthtml-enables-faster-html-snippet-injection/">hacks.mozilla.org guest post</a><span class="external"> por Henri Sivonen incluye puntos de referencia mostrando que insertAdjacentHTML puede ser mucho más rápido en algunos casos.</span></li>
</ul>

---
title: Element.clientHeight
slug: Web/API/Element/clientHeight
tags:
  - Propiedad
translation_of: Web/API/Element/clientHeight
---
<p>{{ APIRef("DOM") }}</p>

<p>La propiedad de sólo lectura <code><strong>Element.clientHeight</strong></code> devuelve la altura de un elemento en píxeles, incluyendo el padding pero no las barras horizontales, el borde o el margen.</p>

<p><code>clientHeight</code> puede ser calculado como CSS <code>height</code> + CSS <code>padding</code> - alto de la barra horizontal (si existe).</p>

<div class="note">
<p><strong>Nota:</strong> Esta propiedad redondeará el valor a un entero. Si necesitas un valor fraccional usa {{ domxref("element.getBoundingClientRect()") }}.</p>
</div>

<h2 id="Syntax_and_values" name="Syntax_and_values">Sintaxis</h2>

<pre class="syntaxbox">var <var>h</var> = <var>element</var>.clientHeight;</pre>

<p><code><var>h</var></code> es un entero que representa el alto de <em>element</em> en píxeles.</p>

<h2 id="Example" name="Example">Ejemplo</h2>

<p> </p>

<p>              <img alt="Image:Dimensions-client.png" class="internal" src="/@api/deki/files/185/=Dimensions-client.png"></p>


<h2 id="Specification" name="Specification">Specification</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('CSSOM View', '#dom-htmlelement-clientheight', 'clientheight')}}</td>
   <td>{{Spec2('CSSOM View')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h3 id="Notes" name="Notes">Notas</h3>

<p><code>clientHeight</code> es una propiedad introducida en el modelo de objeto de Internet Explorer.</p>

<h2 id="See_Also" name="See_Also">Ver también</h2>

<ul>
 <li>{{domxref("Element.offsetHeight")}}</li>
 <li>{{domxref("Element.scrollHeight")}}</li>
 <li><a href="/en-US/docs/Determining_the_dimensions_of_elements">Determining the dimensions of elements</a></li>
 <li><a href="https://docs.microsoft.com/en-us/previous-versions//hh781509(v=vs.85)">MSDN: Measuring Element Dimension and Location</a></li>
</ul>

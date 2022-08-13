---
title: HTMLElement.offsetHeight
slug: Web/API/HTMLElement/offsetHeight
tags:
  - API
  - Propiedad
  - Referencia
translation_of: Web/API/HTMLElement/offsetHeight
---
<div>{{ APIRef("HTML DOM") }}</div>

<p>La propiedad de sólo lectura <strong><code>HTMLElement.offsetHeight</code></strong> devuelve el alto de un elemento, incluyendo el <em>padding</em> vertical y los bordes, en píxeles, como un número entero.</p>

<p>Generalmente, <code>offsetHeight</code> es una medida en píxeles que representa la altura CSS del elemento, incluyendo cualquier borde, padding, y barras de desplazamiento horizontales (si existieran). No incluye el alto de pseudo-elementos como <code>::before</code> y <code>::after</code>. Para el objeto body del documento, la medida incluye la altura total del contenido lineal en lugar de la altura CSS del elemento. Los elementos flotantes que se extienden por debajo de otros contenidos lineales son ignorados</p>

<p>Si un elemento está oculto (por ejemplo, al establecer <code>style.display</code> a <code>"none"</code> en el elemento o uno de sus ancestros), se devuelve <code>0</code>.</p>

<div class="note">
<p>Esta propiedad redondea el valor a un entero. Si necesitas un  valor decimal, usa {{ domxref("element.getBoundingClientRect()") }}.</p>
</div>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox">var <em>intElemOffsetHeight</em> = <em>element</em>.offsetHeight;</pre>

<p><code><em>intElemOffsetHeight</em></code> es una variable que almacena el entero correspondiente al valor de <code>offsetHeight</code> en píxeles de un elemento. La propiedad <code>offsetHeight</code> es de sólo lectura.</p>

<h2 id="Ejemplo">Ejemplo</h2>

<p><img alt="Image:Dimensions-offset.png" class="internal" src="/@api/deki/files/186/=Dimensions-offset.png"></p>

<p>El ejemplo de la imagen de superior muestra una barra de desplazamiento y un <code>offsetHeight</code> que cabe en la ventana. Sin embargo, los elementos no desplazables podrían tener un <code>offsetHeight</code> mucho más grande que el área visible. Esos elementos están típicamente contenidos en elementos desplazables (scroll); con lo cual esos elementos no desplazables podrían ser parcial o completamente invisibles, dependiendo de la configuración de <code>scrollTop</code> del elemento contenedor.</p>

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
   <td>{{SpecName('CSSOM View', '#dom-htmlelement-offsetHeight', 'offsetLeft')}}</td>
   <td>{{Spec2('CSSOM View')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h3 id="Notas">Notas</h3>

<p><code>offsetHeight</code> es una pripiedad del modelo del objeto <abbr title="Dynamic HyperText Markup Language">DHTML</abbr> que fue inicialmente introducido por MSIE. A veces se le conoce como las dimensiones físicas/gráficas de un elemento, o la altura <code>border-box</code> del elemento.</p>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>{{domxref("Element.clientHeight")}}</li>
 <li>{{domxref("Element.scrollHeight")}}</li>
 <li>{{domxref("HTMLElement.offsetWidth")}}</li>
 <li><a href="/en-US/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements" title="en/Determining_the_dimensions_of_elements">Determinando las dimensiones de los elementos</a></li>
 <li><a href="https://docs.microsoft.com/en-us/previous-versions//hh781509(v=vs.85)">MSDN Midiendo las dimensiones y ubicación de los elementos</a></li>
</ul>

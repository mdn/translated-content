---
title: Element.scrollWidth
slug: Web/API/Element/scrollWidth
translation_of: Web/API/Element/scrollWidth
---
<div>{{ APIRef("DOM") }}</div>

<p>La propiedad de sólo lectura <strong><code>Element.scrollWidth</code></strong> retorna bien la anchura en pixels del contenido de un elemento o bien la anchura del elemento en si, la que sea mayor de ambas. Si el elemento es más ancho que su área contenedora (por ejemplo, si existen barras de desplazamiento para desplazarse a través del contenido),  <code>scrollWidth</code> es mayor que  <code>clientWidth</code>.</p>

<div class="note">
<p>El valor de esta propiedad será red redondedo a un entero. Si necesita un valor fraccional, use {{ domxref("element.getBoundingClientRect()") }}.</p>
</div>

<h2 id="Syntax_and_values" name="Syntax_and_values">Sintaxis</h2>

<pre class="syntaxbox">var <var>xScrollWidth</var> = <var>element</var>.scrollWidth;</pre>

<p><var>xScrollWidth</var> es el ancho del contenido de <var>element</var> en pixels.</p>

<h2 id="Example" name="Example">Ejemplo</h2>

<pre class="brush:html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Ejemplo&lt;/title&gt;
    &lt;style&gt;
        div {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        #aDiv {
            width: 100px;
        }

        button {
            margin-bottom: 2em;
        }
    &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;div id="aDiv"&gt;
        FooBar-FooBar-FooBar-FooBar
    &lt;/div&gt;
    &lt;button id="aButton"&gt;
        Check for overflow
    &lt;/button&gt;

    &lt;div id="anotherDiv"&gt;
        FooBar-FooBar-FooBar-FooBar
    &lt;/div&gt;
    &lt;button id="anotherButton"&gt;
        Check for overflow
    &lt;/button&gt;
&lt;/body&gt;
&lt;script&gt;
    var buttonOne = document.getElementById('aButton'),
    buttonTwo = document.getElementById('anotherButton'),
    divOne = document.getElementById('aDiv'),
    divTwo = document.getElementById('anotherDiv');

    //comprueba si un desbordamiento está ocurriendo
    function isOverflowing(element) {
        return (element.scrollWidth &gt; element.offsetWidth);
    }

    function alertOverflow(element) {
        if (isOverflowing(element)) {
            alert('El contenido desborda el contenedor.');
        } else {
            alert('Sin desobordamiento!');
        }
    }

    buttonOne.addEventListener('click', function() {
        alertOverflow(divOne);
    });

    buttonTwo.addEventListener('click', function() {
        alertOverflow(divTwo);
    });
&lt;/script&gt;
&lt;/html&gt;

</pre>

<h2 id="Specification" name="Specification">Especificación</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th>Especificación</th>
   <th>Estado</th>
   <th>Observaciones</th>
  </tr>
  <tr>
   <td>{{SpecName("CSSOM View", "#dom-element-scrollwidth", "Element.scrollWidth")}}</td>
   <td>{{Spec2("CSSOM View")}}</td>
   <td>Definición inicial</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>



<p>{{Compat("api.Element.scrollWidth")}}</p>

 <h2 id="See_also" name="See_also">Ver también</h2>


<ul>
 <li>{{domxref("Element.clientWidth")}}</li>
 <li>{{domxref("HTMLElement.offsetWidth")}}</li>
 <li><a href="/en-US/docs/Determining_the_dimensions_of_elements">Determinando las dimensiones de elementos</a></li>
</ul>

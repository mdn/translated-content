---
title: Element.computedStyleMap()
slug: Web/API/Element/computedStyleMap
tags:
  - API
  - CSS Typed Object Model API
  - Element
  - Experimental
  - Houdini
  - Method
  - Reference
  - StylePropertyMapReadOnly
  - computedStyleMap()
translation_of: Web/API/Element/computedStyleMap
---
<p>{{APIRef("CSS Typed Object Model API")}}{{SeeCompatTable}}</p>

<p><span class="seoSummary">El método <strong><code>computedStyleMap()</code></strong> de la interfaz {{domxref("Element")}} devuelve una interfaz {{domxref("StylePropertyMapReadOnly")}} que provee una representación de solo-lectura de un bloque de declaración de CSS que es una alternativa a {{domxref("CSSStyleDeclaration")}}. </span></p>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox notranslate">var <var>stylePropertyMapReadOnly</var> = Element.computedStyleMap()</pre>

<h3 id="Parámetros">Parámetros</h3>

<p>Ninguno.</p>

<h3 id="Valor_de_resultado">Valor de resultado</h3>

<p>Una interfaz {{domxref("StylePropertyMapReadOnly")}}.</p>

<h2 id="Ejemplos">Ejemplos</h2>

<p>Comenzamos con algo de HTML simple: un párrafo con un enlace, y una lista de definición a la cual le añadiremos todos los pares de Propiedad CSS / Valor.</p>

<pre class="brush: html notranslate">&lt;p&gt;
   &lt;a href="https://example.com"&gt;Link&lt;/a&gt;
&lt;/p&gt;
&lt;dl id="regurgitation"&gt;&lt;/dl&gt;</pre>

<p>Añadimos un poco de CSS</p>

<pre class="brush: css notranslate">a {
  --colour: red;
  color: var(--colour);
}</pre>

<p>Añadimos Javascript para tomar nuestro enlace y devolvemos una lista de definición de todos los valores de propiedades CSS usando <code>computedStyleMap().</code></p>

<pre class="brush: js notranslate">// obtenemos el elemento
const myElement = document.querySelector('a');

// obtenemos la &lt;dl&gt; que llenaremos
const stylesList = document.querySelector('#regurgitation');

// recuperamos todos los estilos calculados con computedStyleMap()
const allComputedStyles = myElement.computedStyleMap();

// iteramos a través del mapa de todas las propiedades y valores, añadiendo un &lt;dt&gt; y &lt;dd&gt; para cada mapa
for (const [prop, val] of allComputedStyles) {
	// propiedades
	const cssProperty = document.createElement('dt');
	cssProperty.appendChild(document.createTextNode(prop));
	stylesList.appendChild(cssProperty);

	// valores
	const cssValue = document.createElement('dd');
	cssValue.appendChild(document.createTextNode(val));
	stylesList.appendChild(cssValue);
}</pre>

<p>En <a href="/en-US/docs/Web/API/Element/computedStyleMap#Browser_compatibility">navegadores que soportan <code>computedStyleMap()</code></a>, verás una lista de todas las propiedades CSS y valores. En otros navegadores verás un enlace.</p>

<p>{{EmbedLiveSample("Examples", 300, 300)}}</p>

<p>¿Te diste cuenta cuántas propiedades CSS por defecto tenía un enlace? Actualiza el '<code>a</code>' a un '<code>p</code>', y notarás una diferencia en los valores calculados por defecto del <code>margin-top</code> y <code>margin-bottom</code>.</p>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentario</th>
  </tr>
  <tr>
   <td>{{SpecName('CSS Typed OM','#dom-element-computedstylemap','computedStyleMap()')}}</td>
   <td>{{Spec2('CSS Typed OM')}}</td>
   <td>Definición inicial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navedadores">Compatibilidad con navedadores</h2>



<p>{{Compat("api.Element.computedStyleMap")}}</p>

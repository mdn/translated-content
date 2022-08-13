---
title: <data>
slug: Web/HTML/Element/data
tags:
  - Elemento
  - HTML
  - Referencia
  - Web
translation_of: Web/HTML/Element/data
original_slug: Web/HTML/Elemento/data
---
<h2 id="Resúmen">Resúmen</h2>

<p>El <strong>Elemento HTML <code>&lt;data&gt;</code></strong> vincula un contenido dado con una traducción legible por una máquina. Si el contenido está relacionado con <code>time-</code> o <code>date-</code>, debe usarse el elemento {{HTMLElement("time")}}.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/en-US/docs/HTML/Content_categories" title="HTML/Content_categories">Categorías de contenido</a></th>
   <td><a href="/en-US/docs/HTML/Content_categories#Flow_content" title="HTML/Content categories#Flow content">Flow content</a>, <a href="/en-US/docs/HTML/Content_categories#Phrasing_content" title="HTML/Content categories#Phrasing content">phrasing content</a>, palpable content.</td>
  </tr>
  <tr>
   <th scope="row">Contenido permitido</th>
   <td><a href="/en-US/docs/HTML/Content_categories#Phrasing_content" title="HTML/Content categories#Phrasing content">Phrasing content</a>.</td>
  </tr>
  <tr>
   <th scope="row">Omisión de etiqueta</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">Elementos permitidos</th>
   <td>Any element that accepts <a href="/en-US/docs/HTML/Content_categories#Phrasing_content" title="HTML/Content_categories#Phrasing_content">phrasing content</a>.</td>
  </tr>
  <tr>
   <th scope="row">interfaz DOM</th>
   <td>{{domxref("HTMLDataElement")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Atributos">Atributos</h2>

<p><span style="line-height: 21px;">Este elemento incluye </span><a href="https://developer.mozilla.org/en-US/docs/HTML/Global_attributes" style="line-height: 21px;" title="HTML/Global attributes">Atributos globales </a></p>

<dl>
 <dt>{{htmlattrdef("value")}}</dt>
 <dd>This attribute specifies the machine-readable translation of the content of the element.</dd>
</dl>

<h2 id="Ejemplo">Ejemplo</h2>

<p>El siguiente ejemplo muestra nombres de productos pero también asocia a cada uno con su código UPC.</p>

<pre class="brush: html">&lt;p&gt;New Products&lt;/p&gt;
&lt;ul&gt;
 &lt;li&gt;&lt;data value="3967381398"&gt;Mini Ketchup&lt;/data&gt;&lt;/li&gt;
 &lt;li&gt;&lt;data value="3967381399"&gt;Jumbo Ketchup&lt;/data&gt;&lt;/li&gt;
 &lt;li&gt;&lt;data value="3967381400"&gt;Mega Jumbo Ketchup&lt;/data&gt;&lt;/li&gt;
&lt;/ul&gt;
</pre>

<h2 id="Specifications" name="Specifications">Especificaciones</h2>

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
   <td>{{SpecName('HTML WHATWG', 'text-level-semantics.html#the-data-element', '&lt;data&gt;')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>No change from {{SpecName('HTML5 W3C')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'text-level-semantics.html#the-data-element', '&lt;data&gt;')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_de_navegador">Compatibilidad de navegador</h2>

{{Compat("html.elements.data")}}

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>The HTML {{HTMLElement("time")}} element.</li>
</ul>

<p>{{HTMLRef}}</p>

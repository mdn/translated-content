---
title: sub
slug: Web/HTML/Element/sub
tags:
  - HTML
  - HTML:Elemento
  - Todas_las_Categorías
translation_of: Web/HTML/Element/sub
original_slug: Web/HTML/Elemento/sub
---
<p>{{HTMLRef}}</p>

<p>El <strong>elemento HTML</strong> &lt;sub&gt; define un fragmento de texto que se debe mostrar, por razones tipográficas, más bajo, y generalmente más pequeño, que el tramo principal del texto, es decir, en subíndice.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/en-US/docs/HTML/Content_categories">Categorías de contenido</a></th>
   <td><a href="https://developer.mozilla.org/es/docs/Web/Guide/HTML/categorias_de_contenido#Contenido_din%C3%A1mico">Contenido dinamíco</a>(Flow content) y <a href="https://developer.mozilla.org/es/docs/Web/Guide/HTML/categorias_de_contenido#Contenido_est%C3%A1tico_o_de_texto">contenido estático o de texto</a>(phrasing content)</td>
  </tr>
  <tr>
   <th scope="row">Contenido permitido</th>
   <td><a href="https://developer.mozilla.org/es/docs/Web/Guide/HTML/categorias_de_contenido#Contenido_est%C3%A1tico_o_de_texto">contenido estático o de texto</a></td>
  </tr>
  <tr>
   <th scope="row">Omission de etiquetas</th>
   <td><font><font>Ninguna, tanto la etiqueta de apertura y cierre deben estar presentes</font></font></td>
  </tr>
  <tr>
   <th scope="row">Elementos padres permitidos</th>
   <td><font><font>Cualquier elemento que acepte contenido estático o de texto</font></font></td>
  </tr>
  <tr>
   <th scope="row">Roles ARIA permitidos</th>
   <td>Cualquiera</td>
  </tr>
  <tr>
   <th scope="row">Interfaz DOM</th>
   <td>{{domxref("HTMLElement")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Atributos">Atributos</h2>

<p>Este elemento sólo incluye los <a href="/en-US/docs/HTML/Global_attributes">atributos globales</a>.</p>

<h2 id="Notas_de_uso">Notas de uso</h2>

<ul>
 <li><font><font>Este elemento debe ser utilizado sólo por razones tipográficas, es decir, cambiar la posición del texto cambia su significado como en matemática</font></font> (por ejemplo la fórmula matemática <var>t<sub>2</sub></var>, aunque se debe considerar el uso de <a href="/en-US/docs/MathML">MathML</a>) <font><font>o fórmulas químicas</font></font> (por ejemplo <code>H<sub>2</sub>O</code>).</li>
 <li>Este elemento no debe ser utilizado para propósitos meramente visuales, como el estilo del logo del software<a class="external external-icon" href="https://es.wikipedia.org/wiki/LaTeX"> LaTeX</a> <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/LaTeX_logo.svg/1200px-LaTeX_logo.svg.png"><img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/LaTeX_logo.svg/1200px-LaTeX_logo.svg.png" style="height: 23px; vertical-align: bottom; width: 56px;"></a>. En ese caso debe usarse la propiedad de <a href="https://developer.mozilla.org/en-US/docs/CSS" title="en/CSS">CSS</a> <code>vertical-align</code>  para lograr el mismo efecto.</li>
</ul>

<h2 id="Ejemplos">Ejemplos</h2>

<pre class="brush: html">&lt;p&gt;La fórmula química de agua: H&lt;sub&gt;2&lt;/sub&gt;O&lt;/p&gt;
</pre>

<h4 id="Resultado">Resultado</h4>

<p>La fórmula química de agua: H<sub>2</sub>O</p>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificaciones</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentario</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'semantics.html#the-sub-and-sup-elements', '&lt;sub&gt; and &lt;sup&gt;')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'textlevel-semantics.html#the-sub-and-sup-elements', '&lt;sub&gt; and &lt;sup&gt;;')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_navegadores">Compatibilidad navegadores</h2>



<p>{{Compat("html.elements.sub")}}</p>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>El elemento HTML <a href="https://developer.mozilla.org/es/docs/Web/HTML/Elemento/sup">&lt;sup&gt;</a> produce superíndice. Tenga en cuenta que no puedes usar &lt;sup&gt;  y &lt;sub&gt;  ambos al mismo tiempo y necesita usar <a href="https://developer.mozilla.org/en-US/docs/MathML" title="en/MathML">MathML</a> para producir un superíndice y un subíndice al lado del símbolo químico de un elemento, que representa su número atómico y su número nuclear.

  <p><img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Element_identity.png/220px-Element_identity.png" style="height: 63px; width: 63px;"></p>
 </li>
 <li>Los elementos MathML<a href="https://developer.mozilla.org/en-US/docs/MathML/Element/msub" title="en/MathML/Element/msub"><code>&lt;msub&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/MathML/Element/msup" title="en/MathML/Element/msup"><code>&lt;msup&gt;</code></a>, y <a href="https://developer.mozilla.org/en-US/docs/MathML/Element/msubsup" title="en/MathML/Element/msubsup"><code>&lt;msubsup&gt;</code></a> .</li>
</ul>

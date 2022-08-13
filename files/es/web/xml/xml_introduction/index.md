---
title: Introducción a XML
slug: Web/XML/XML_introduction
tags:
  - Principiante
  - XML
  - introducción
translation_of: Web/XML/XML_introduction
original_slug: Web/XML/Introducción_a_XML
---
<p><span class="seoSummary">XML es un lenguaje de marcado similar a HTML. Significa Extensible Markup Language (Lenguaje de Marcado Extensible) y es una especificación de <a class="external" href="https://www.w3.org/TR/xml/">W3C</a> como lenguaje de marcado de propósito general. Esto significa que, a diferencia de otros lenguajes de marcado, XML no está predefinido, por lo que debes definir tus propias etiquetas. El propósito principal del lenguaje es compartir datos a través de diferentes sistemas, como Internet.</span></p>

<p>Hay muchos lenguajes basados en XML; Algunos ejemplos son <a href="/es/docs/XHTML" title="en/XHTML">XHTML</a>, <a href="/es/docs/Web/MathML" title="en/MathML">MathML</a>, <a href="/es/docs/Web/SVG" title="en/SVG">SVG</a>, <a href="/es/docs/Mozilla/Tech/XUL" title="en/XUL">XUL</a>, <a href="/es/docs/XBL" title="en/XBL">XBL</a>, <a href="/es/docs/Archive/RSS" title="en/RSS">RSS</a>, y <a href="/es/docs/RDF" title="en/RDF">RDF</a>. También puedes crear uno propio.</p>

<h2 id="XML_Correcto_(válido_y_bien_formado)">XML "Correcto" (válido y bien formado)</h2>

<p>Para que un documento XML sea correcto, debe ser un documento bien formado, cumpliendo todas las reglas de sintaxis de XML, y válidas, acorde a las reglas de un lenguaje específico. Un ejemplo de un documento que no está bien formado es uno que tiene una etiqueta de apertura y no tiene una de cierre, ni se cierra en si misma.</p>

<h3 id="Ejemplo">Ejemplo</h3>

<p>En el ejemplo siguiente, vemos un documento en el que una etiqueta que no se cierra a si misma, no tiene etiqueta de cierre.</p>

<pre class="brush: xml">&lt;message&gt;
    &lt;warning&gt;
        Hola, mundo
    &lt;!--missing &lt;/warning&gt; --&gt;
&lt;/message&gt;
</pre>

<p>Ahora veamos una versión correcta del mismo documento:</p>

<pre class="brush: xml">&lt;message&gt;
    &lt;warning&gt;
         Hola, mundo
    &lt;/warning&gt;
&lt;/message&gt;
</pre>

<p>Para ser válido, un documento XML necesita cumplir ciertas reglas de semántica que son generalmente definidas en un esquema XML o en una <strong><a href="/es/docs/Glossary/DTD" title="en/DTD">Definición de Tipo de Documento</a></strong> (DTD). Un documento que contiene una etiqueta no definida es inválido. Por ejemplo, si nunca definimos la etiqueta <code>&lt;warning&gt;</code>, el documento anterior no sería válido.</p>

<div class="note">
<p>La mayoría de los navegadores ofrecen un depurador que puede identificar documentos XML mal formados.</p>
</div>

<h2 id="Entities" name="Entities">Entidades</h2>

<p>Al igual que HTML, XML ofrece métodos (llamados entidades) para referir a algunos caracteres especiales reservados (como el signo de mayor que, usado para las etiquetas). Hay cinco de estos caracteres que debes conocer:</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Entidad</th>
   <th scope="col">Caracter</th>
   <th scope="col">Descripción</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>&amp;lt;</td>
   <td>&lt;</td>
   <td>Menor que</td>
  </tr>
  <tr>
   <td>&amp;gt;</td>
   <td>&gt;</td>
   <td>Mayor que</td>
  </tr>
  <tr>
   <td>&amp;amp;</td>
   <td>&amp;</td>
   <td>Ampersand</td>
  </tr>
  <tr>
   <td>&amp;quot;</td>
   <td>"</td>
   <td>Comilla doble</td>
  </tr>
  <tr>
   <td>&amp;apos;</td>
   <td>'</td>
   <td>Apóstrofe (o comilla sencilla)</td>
  </tr>
 </tbody>
</table>

<p>Aunque solo hay cinco entidades declaradas, se pueden añadir más usando el <a href="/es/docs/Glossary/DTD" title="en/DTD">DTD</a> del documento. Por ejemplo, para crear una nueva entidad <code>&amp;warning;</code>, puedes hacer esto:</p>

<pre>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;!DOCTYPE body [
  &lt;!ENTITY warning "Advertencia: Algo malo pasó... porfavor intente de nuevo."&gt;
]&gt;
&lt;body&gt;
  &lt;message&gt; &amp;warning; &lt;/message&gt;
&lt;/body&gt;
</pre>

<p>También puedes usar referencias a caracteres numéricas para especificar caracteres especiales; por ejemplo, &amp;#xA9; es el símbolo "©".</p>

<h2 id="Presentando_XML">Presentando XML</h2>

<p>XML es generalmente para propósitos descriptivos, pero hay maneras de presentar datos XML. Si no defines una manera específica de renderizar XML, el contenido puro de XML es mostrado en el navegador.</p>

<p>Una forma de estilizar la salida de XML es especificando <a href="/es/docs/Web/CSS" title="en/CSS">CSS</a> que aplique al documento usando la instrucción de procesamiento <code>xml-stylesheet</code>.</p>

<pre>&lt;?xml-stylesheet type="text/css" href="stylesheet.css"?&gt;</pre>

<p>También hay otra manera más poderosa de presentar XML: <strong>Extensible Stylesheet Language Transformations</strong> (<a href="/es/docs/Web/XSLT" title="en/XSLT">XSLT</a>) que puede ser usado para transformar XML a otros lenguajes como HTML. Esto hace a XML increíblemente versátil.</p>

<pre>&lt;?xml-stylesheet type="text/xsl" href="transform.xsl"?&gt;</pre>

<h2 id="Recommendations" name="Recommendations">Recomendaciones</h2>

<p>Este artículo es, obviamente, sólo una breve introducción a los que es XML, con unos pocos ejemplos pequeños y referencias para iniciar. Para más detalles acerca de XML, busca en la Web artículos más a fondo.</p>

<p>Aprender el Lenguaje de Marcado de Hipertexto (<a href="/es/docs/Web/HTML" title="en/HTML">HTML</a>) te ayudará a entender mejor XML.</p>

<h2 id="Véase_también">Véase también</h2>

<ul>
 <li><a class="external" href="http://www.xml.com/">XML.com</a></li>
 <li><a class="external" href="https://www.w3.org/XML/">Extensible Markup Language (XML) @ W3.org</a></li>
 <li><a class="external" href="http://www.alistapart.com/d/usingxml/xml_uses_a.html">XML Example: A List Apart</a></li>
 <li><a class="external" href="http://www.alistapart.com/articles/usingxml/">Using XML: A List Apart</a></li>
</ul>

<p>El artículo <a href="http://www.alistapart.com/articles/usingxml/">Using XML</a> mostrado anteriormente es un gran recurso de información para transformar y crear tu propio lenguaje.</p>

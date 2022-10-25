---
title: Stylesheet.ownerNode
slug: Web/API/StyleSheet/ownerNode
translation_of: Web/API/StyleSheet/ownerNode
---
<p>{{ ApiRef() }}</p>
<h3 id="Summary" name="Summary">Resumen</h3>
<p><strong>ownerNode</strong> devuelve el nodo que asocia la hoja de estilo con el documento.</p>
<h3 id="Syntax" name="Syntax">Sintaxis</h3>
<pre class="eval"><em>objRef</em> = stylesheet.ownerNode
</pre>
<h3 id="Example" name="Example">Ejemplo</h3>
<pre class="eval">&lt;html&gt;
 &lt;head&gt;
  &lt;link rel="StyleSheet" href="example.css" type="text/css" /&gt;
  &lt;script&gt;
   function stilo() {
    alert(document.styleSheets[0].ownerNode);
   }
  &lt;/script&gt;
 &lt;/head&gt;
 &lt;body&gt;
</pre>
<div class="">
 Thunder</div>
<pre class="eval">  &lt;button onclick="stilo()"&gt;ss&lt;/button&gt;
 &lt;/body&gt;
&lt;/html&gt;
// displays "object HTMLLinkElement"
</pre>
<h3 id="Notes" name="Notes">Notas</h3>
<p>Para el HTML, <strong>ownerNode</strong> correspondería a un elemento <a href="/es/LINK" title="es/LINK">LINK</a> o <a href="/Es/DOM/Element.style" title="es/DOM/element.style">STYLE</a>. Para XML, serían las instrucciones del proceso de enlace. Para las hojas de estilo que están incluidas en otras hojas de estilo, este valor es NULL.</p>
<h3 id="Specification" name="Specification">Especificación</h3>
<p>DOM Level 2 Styles - STYLESHEET</p>
<p>{{ languages( { "pl": "pl/DOM/stylesheet.ownerNode" } ) }}</p>

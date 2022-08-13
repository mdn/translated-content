---
title: Element.getAttributeNodeNS()
slug: Web/API/Element/getAttributeNodeNS
tags:
  - API
  - DOM
  - Referencia
  - metodo
translation_of: Web/API/Element/getAttributeNodeNS
---
<p>{{ APIRef("DOM") }}</p>

<h2 id="Summary" name="Summary">Sumario</h2>

<p>Dados namespace y nodeName del element, devuelve su <code>Attr</code> .</p>

<h2 id="Syntax" name="Syntax">Sintaxis</h2>

<pre class="eval"><em>attributeNode</em> = element.getAttributeNodeNS(<em>namespace</em>,<em>nodeName</em>)
</pre>

<ul>
 <li><code>attributeNode</code> es el nodo para el atributo especificado.</li>
 <li><code>namespace</code> es la cadena que define el namespace del atributo.</li>
 <li><code>nodeName</code> es la cadena que define el name del atributo.</li>
</ul>

<p><span class="comment">== Example == TBD The example needs to be fixed pre&gt; // html: &lt;div id="top" /&gt; t = document.getElementById("top"); specialNode = t.getAttributeNodeNS( "<a class="external" href="http://www.mozilla.org/ns/specialspace" rel="freelink">http://www.mozilla.org/ns/specialspace</a>", "id"); // iNode.value = "full-top" &lt;/pre</span></p>

<h2 id="Notes" name="Notes">Notas</h2>

<p><code>getAttributeNodeNS</code> es más específica <a href="en/DOM/element.getAttributeNode">getAttributeNode</a> en el sentido de que puedes especificar atributos de un namespace en particular.  Su método setter es <a href="en/DOM/element.setAttributeNodeNS">setAttributeNodeNS</a>.</p>

<p>{{ DOMAttributeMethods() }}</p>

<h2 id="Specification" name="Specification">Especificación</h2>

<p><a class="external" href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElGetAtNodeNS">DOM Level 2 Core: getAttributeNodeNS</a></p>

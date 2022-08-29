---
title: Cómo crear un DOM tree
slug: Web/API/Document_object_model/How_to_create_a_DOM_tree
translation_of: Web/API/Document_object_model/How_to_create_a_DOM_tree
original_slug: How_to_create_a_DOM_tree
---
<p> </p>
<p>Esta página describe cómo usar el API <a class="external" href="http://www.w3.org/TR/DOM-Level-3-Core/core.html">DOM Core</a> en JavaScript para crear o modificar objetos DOM. Es aplicable a todas las aplicaciones basadas en Gecko (como Mozilla Firefox) cuyo código tenga privilegios (como las extensiones) y a las que no (páginas web).</p>
<h3 id="Dynamically_creating_a_DOM_tree" name="Dynamically_creating_a_DOM_tree">Creación dinámica de un DOM tree</h3>
<p>Considere el siguiente documento XML:</p>
<pre class="brush: xml">&lt;?xml version="1.0"?&gt;
&lt;people&gt;
  &lt;person first-name="eric" middle-initial="H" last-name="jung"&gt;
    &lt;address street="321 south st" city="denver" state="co" country="usa"/&gt;
    &lt;address street="123 main st" city="arlington" state="ma" country="usa"/&gt;
  &lt;/person&gt;

  &lt;person first-name="jed" last-name="brown"&gt;
    &lt;address street="321 north st" city="atlanta" state="ga" country="usa"/&gt;
    &lt;address street="123 west st" city="seattle" state="wa" country="usa"/&gt;
    &lt;address street="321 south avenue" city="denver" state="co" country="usa"/&gt;
  &lt;/person&gt;
&lt;/people&gt;
</pre>
<p>El W3C DOM API soportado por Mozilla, puede ser usado para crear una representación en memoria del documento anterior, como se ve a continuación:</p>
<pre class="brush: js">var doc = document.implementation.createDocument("", "", null);
var peopleElem = doc.createElement("people");

var personElem1 = doc.createElement("person");
personElem1.setAttribute("first-name", "eric");
personElem1.setAttribute("middle-initial", "h");
personElem1.setAttribute("last-name", "jung");

var addressElem1 = doc.createElement("address");
addressElem1.setAttribute("street", "321 south st");
addressElem1.setAttribute("city", "denver");
addressElem1.setAttribute("state", "co");
addressElem1.setAttribute("country", "usa");
personElem1.appendChild(addressElem1);

var addressElem2 = doc.createElement("address");
addressElem2.setAttribute("street", "123 main st");
addressElem2.setAttribute("city", "arlington");
addressElem2.setAttribute("state", "ma");
addressElem2.setAttribute("country", "usa");
personElem1.appendChild(addressElem2);

var personElem2 = doc.createElement("person");
personElem2.setAttribute("first-name", "jed");
personElem2.setAttribute("last-name", "brown");

var addressElem3 = doc.createElement("address");
addressElem3.setAttribute("street", "321 north st");
addressElem3.setAttribute("city", "atlanta");
addressElem3.setAttribute("state", "ga");
addressElem3.setAttribute("country", "usa");
personElem2.appendChild(addressElem3);

var addressElem4 = doc.createElement("address");
addressElem4.setAttribute("street", "123 west st");
addressElem4.setAttribute("city", "seattle");
addressElem4.setAttribute("state", "wa");
addressElem4.setAttribute("country", "usa");
personElem2.appendChild(addressElem4);

var addressElem5 = doc.createElement("address");
addressElem5.setAttribute("street", "321 south avenue");
addressElem5.setAttribute("city", "denver");
addressElem5.setAttribute("state", "co");
addressElem5.setAttribute("country", "usa");
personElem2.appendChild(addressElem5);

peopleElem.appendChild(personElem1);
peopleElem.appendChild(personElem2);
doc.appendChild(peopleElem);
</pre>
<p>Vea también el <a href="/en/XUL_Tutorial/Document_Object_Model" title="en/XUL_Tutorial/Document_Object_Model"> Capítulo DOM del Tutorial de XUL</a>.</p>
<p>Se puede automatizar la creación de un DOM tree usando el <a href="/en/JXON#JXON_reverse_algorithms" title="en/JXON#JXON_reverse_algorithms">JXON reverse algorithm (algoritmo inverso JXON)</a> en asociación con la siguiente representación JSON:</p>
<pre class="brush: js">{
  "people": {
    "person": [{
      "address": [{
        "@street": "321 south st",
        "@city": "denver",
        "@state": "co",
        "@country": "usa"
      }, {
        "@street": "123 main st",
        "@city": "arlington",
        "@state": "ma",
        "@country": "usa"
      }],
      "@first-name": "eric",
      "@middle-initial": "H",
      "@last-name": "jung"
    }, {
      "address": [{
        "@street": "321 north st",
        "@city": "atlanta",
        "@state": "ga",
        "@country": "usa"
      }, {
        "@street": "123 west st",
        "@city": "seattle",
        "@state": "wa",
        "@country": "usa"
      }, {
        "@street": "321 south avenue",
        "@city": "denver",
        "@state": "co",
        "@country": "usa"
      }],
      "@first-name": "jed",
      "@last-name": "brown"
    }]
  }
}
</pre>
<h3 id="So_what.3F" name="So_what.3F">¿Ahora qué?</h3>
<p>Los DOM trees pueden ser <a href="/en/Using_XPath" title="en/Using_XPath">invocados usando expresiones XPath</a>, convertidos a cadenas de texto, salvados a un archivo local o remoto usando <a href="/en/Parsing_and_serializing_XML" title="en/Parsing_and_serializing_XML">XMLSerializer</a> (sin tener que convertirlo primero a una cadena de texto), Enviados mediante <a href="/en/DOM/XMLHttpRequest" title="en/XMLHttpRequest">POST a un servidor web</a> (via <code>XMLHttpRequest</code>), transformados usando <a href="/en/XSLT" title="en/XSLT">XSLT</a>, <a href="/en/XLink" title="en/XLink">XLink</a>, convertidos a un objeto JavaScript a tráves del  <a href="/en/JXON" title="en/JXON">algoritmo </a><a href="/en/JXON" title="en/JXON">JXON</a>, etc.</p>
<p>Adicionalmente se puede hacer uso de los DOM trees para modelar los datos que no estén bien formados para RDF (o si sólo no prefieres usar RDF). Otra aplicación que puedes darle, se relaciona a XUL (que es XML), la UI (interfaz) de tu aplicación puede ser manipulada dinámicamente, descargada, subida, guardada, cargada, convertida, o transformada fácilmente.</p>
<h2 id="Vea_también">Vea también</h2>
<ul>
 <li><a class="internal" href="/en/XML" title="en/XML">XML</a></li>
 <li><a class="internal" href="/en/JXON" title="en/JXON">JXON</a></li>
 <li><a class="internal" href="/en/XPath" title="en/XPath">XPath</a></li>
 <li><a class="internal" href="/en/E4X" title="en/E4X">E4X (ECMAScript for XML)</a></li>
 <li><a class="internal" href="/en/Parsing_and_serializing_XML" title="en/Parsing_and_serializing_XML">Parsing and serializing XML</a></li>
 <li><a class="internal" href="/en/DOM/XMLHttpRequest" title="en/XMLHttpRequest">XMLHttpRequest</a></li>
</ul>
<p>{{ languages( { "fr": "fr/Comment_cr\u00e9er_un_arbre_DOM", "ja": "ja/How_to_create_a_DOM_tree", "zh-cn": "zh-cn/How_to_create_a_DOM_tree" } ) }}</p>

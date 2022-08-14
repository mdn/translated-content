---
title: >-
  Convertir código a cadena de texto (serializing) y visceversa (parsing) a un 
  XML
slug: Web/Guide/Parsing_and_serializing_XML
translation_of: Web/Guide/Parsing_and_serializing_XML
---
<p>La plataforma web proveé Los siguientes objetos para hacer parsing (convertir una cadena de texto a código) y serializing (visceversa) a un XML:</p>

<ul>
 <li><a href="/en/XMLSerializer" title="en/XMLSerializer">XMLSerializer</a> para convertir a tipo string el  arbol del DOM</li>
 <li><a class="internal" href="/en/XPath" title="en/XPath">XPath</a> para apuntar  a diferentes partes de un documento<strong> <a href="/en/XML" rel="internal" title="en/XML">XML</a> ( sin seguir la sintaxis XML)  y convertirlas a string.</strong></li>
 <li><a href="/en/DOM/DOMParser" title="en/DOMParser">DOMParser</a> para convertir a XML desde un tipo string (texto)<strong> dentro del árbol del DOM </strong></li>
 <li><a href="/en/nsIXMLHttpRequest" title="en/XMLHttpRequest">XMLHttpRequest</a> para convertit recursos URL direccionables <strong>en arboles del DOM </strong></li>
</ul>

<h2 id="Parte_1_Como_crear_un_documento_XML">Parte 1: Como crear un documento XML </h2>

<p>Usar una de la siguientes opciones para crear un documento XML  (el cual es una instancia de <code>Document</code>).</p>

<h3 id="Codificando_textos_al_árbol_del_DOM">Codificando textos al árbol del DOM</h3>

<div style="overflow: hidden;">
<pre class="brush: js">var miTexto = '&lt;a id="a"&gt;&lt;b id="b"&gt;Hey!&lt;/b&gt;&lt;/a&gt;';
var codigo = new DOMParser();
var oDOM = codigo.parseFromString(miTexto, "text/xml");
// Imprimir el nombre del elemento raiz o un mensaje de error
dump(oDOM.documentElement.nodeName == "parsererror" ? "error mientras se codificaba" : oDOM.documentElement.nodeName);
</pre>
</div>

<h3 id="Creando_un_documento_XML_empezando_desde_un_árbol_de_Objetos_JavaScript_(JXON)">Creando un documento XML empezando desde un árbol de Objetos JavaScript (JXON)</h3>

<p>Por favor vea JXON<a class="internal" href="/en/JXON#Reverse_Algorithms" title="en/JXON – Reverse Algorithms"> algoritmos </a>de reversa.</p>

<h3 id="Codificando_rexursos_de_URL_direccionables_en_árboles_del_DOM">Codificando rexursos de URL direccionables en árboles del DOM</h3>

<h4 id="Usando_XMLHttpRequest">Usando XMLHttpRequest</h4>

<p>Aquí hay un código de ejemplo que lee y codifica un archivo XML con  URL direccionable en un árbol del DOM:</p>

<pre class="brush: js">var xhr = new XMLHttpRequest();
xhr.onload = function() {
  dump(xhr.responseXML.documentElement.nodeName);
}
xhr.onerror = function() {
  dump("Error mientras se tomaba el XML.");
}
xhr.open("GET", "example.xml");
xhr.responseType = "document";
xhr.send();
</pre>

<p><code>xhr.responseXML</code> es una instancia de {{domxref("Document")}}.</p>

<h2 id="Parte_2_Como_serializar_el_contenido_de_un_documento_XML">Parte 2: Como serializar el contenido de un documento XML</h2>

<p>Use the following approaches to serialize the contents of the XML document you created in Part 1.</p>

<h3 id="Serializing_DOM_trees_to_strings">Serializing DOM trees to strings</h3>

<p>First, create a DOM tree as described in <a href="/en/How_to_create_a_DOM_tree" title="en/How_to_create_a_DOM_tree">How to Create a DOM tree</a>. Alternatively, use a DOM tree obtained from {{ domxref("XMLHttpRequest") }}.</p>

<p>Now, let's serialize <code>doc</code> — the DOM tree — to a string:</p>

<pre class="brush: js">var oSerializer = new XMLSerializer();
var sXML = oSerializer.serializeToString(doc);</pre>

<p>The <code>new XMLSerializer()</code> constructor is not available from within a JS XPCOM component (or a <a class="internal" href="/en/JavaScript_code_modules" title="En/JavaScript modules">JS module</a>). Instead, write:</p>

<pre class="brush: js">var oSerializer = Components.classes["@mozilla.org/xmlextras/xmlserializer;1"]
                            .createInstance(Components.interfaces.nsIDOMSerializer);
var sXML = oSerializer.serializeToString(doc);
</pre>

<h4 id="Pretty_serialization_of_DOM_trees_to_strings">"Pretty" serialization of DOM trees to strings</h4>

<p>You can <a class="external" href="http://en.wikipedia.org/wiki/Pretty-print">pretty print</a> a DOM tree using <a href="/en/XMLSerializer" title="XMLSerializer"><code>XMLSerializer</code></a> and <a href="/en/E4X" title="en/E4X">E4X</a>. First, create a DOM tree as described in the <a href="/en/How_to_create_a_DOM_tree" title="en/How_to_create_a_DOM_tree">How to Create a DOM tree</a> article. Alternatively, use a DOM tree obtained from {{ domxref("XMLHttpRequest") }}. The <code>doc</code> variable contains the DOM tree.</p>

<pre class="brush: js">var oSerializer = new XMLSerializer();
var sPrettyXML = XML(oSerializer.serializeToString(doc)).toXMLString();</pre>

<p>Indents consist of two spaces. To write a more efficient version or customize the indent string, use {{ domxref("treeWalker") }}.</p>

<div class="note"><strong>Note:</strong> When using the E4X <code>toXMLString</code> method, your <strong>CDATA elements will be lost</strong>, and only the containing text will remain. So if you have CDATA elements in your XML, <span style="background-color: #f5f6f5;">using the preceding method might not be useful</span>.</div>

<pre class="brush: xml">&lt;content&gt;&lt;![CDATA[This is the content]]&gt;&lt;/content&gt;
</pre>

<p>Becomes</p>

<pre class="brush: xml">&lt;content&gt;This is the content&lt;/content&gt;</pre>

<h3 id="Serializing_DOM_trees_to_Javascript_Object_trees_(JXON)">Serializing DOM trees to Javascript Object trees (JXON)</h3>

<p><a href="/en/JXON" title="en/JXON">JXON</a> (lossless <strong>J</strong>avaScript <strong>X</strong>ML <strong>O</strong>bject <strong>N</strong>otation) is a way to represent JavaScript Objects using XML. To address only parts of an XML document, use <a class="internal" href="/en/XPath" title="en/XPath">XPath</a> instead of converting the whole document into JSON! Otherwise, read the <a class="internal" href="/en/JXON" title="en/JXON">article about JXON</a>.</p>

<h3 id="Serializing_DOM_trees_to_files">Serializing DOM trees to files</h3>

<p>First, create a DOM tree as described in the <a href="/en/How_to_create_a_DOM_tree" title="en/How_to_create_a_DOM_tree">How to Create a DOM tree</a> article. If you already have a DOM tree from using {{ domxref("XMLHttpRequest") }}, skip to the end of this section.</p>

<p>Now, let's serialize <code>doc</code>, the DOM tree, to a file. For more information about files, see <a href="/en/Code_snippets/File_I//O" title="en/Code_snippets/File_I//O">about using files in Mozilla</a>):</p>

<pre class="brush: js">var oFOStream = Components.classes["@mozilla.org/network/file-output-stream;1"].createInstance(Components.interfaces.nsIFileOutputStream);
var oFile = Components.classes["@mozilla.org/file/directory_service;1"].getService(Components.interfaces.nsIProperties).get("ProfD", Components.interfaces.nsILocalFile); // get profile folder
oFile.append("extensions"); // extensions sub-directory
oFile.append("{5872365E-67D1-4AFD-9480-FD293BEBD20D}"); // GUID of your extension
oFile.append("myXMLFile.xml"); // filename
oFOStream.init(oFile, 0x02 | 0x08 | 0x20, 0664, 0); // write, create, truncate
(new XMLSerializer()).serializeToStream(doc, oFOStream, ""); // rememeber, doc is the DOM tree
oFOStream.close();
</pre>

<h3 id="Serializing_XMLHttpRequest_objects_to_files">Serializing XMLHttpRequest objects to files</h3>

<p>If you already have a DOM tree from using {{ domxref("XMLHttpRequest") }}, use the same code as above but replace <code>serializer.serializeToStream(doc, oFOStream, "")</code> with <code>serializer.serializeToStream(xmlHttpRequest.responseXML.documentElement, oFOStream, "")</code> where <code>xmlHttpRequest</code> is an instance of <code>XMLHttpRequest</code>.</p>

<p>Note that this first parses the XML retrieved from the server, and then re-serializes it into a stream. Depending on your needs, you could just save the <code>xmlHttpRequest.responseText</code> directly.</p>

<h3 id="Serializing_HTML_documents">Serializing HTML documents</h3>

<p>If the DOM you have is an HTML document, you can serialize it simply using</p>

<pre class="brush: js">var serialized = document.documentElement.innerHTML;
</pre>

<h2 id="See_also">See also</h2>

<ul>
 <li><a class="internal" href="/en/XPath" title="en/XPath">XPath</a></li>
 <li><a href="/en/nsIXMLHttpRequest" title="en/XMLHttpRequest">XMLHttpRequest</a></li>
 <li><a href="/en/JXON" title="en/JXON">JXO</a></li>
</ul>

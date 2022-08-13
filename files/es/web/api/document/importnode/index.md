---
title: Document.importNode()
slug: Web/API/Document/importNode
translation_of: Web/API/Document/importNode
---
<p id="Summary">{{APIRef("DOM")}}</p>

<p>Crea una copia de un nodo desde un documento externo para ser insertado en el documento actual.</p>

<h2 id="Syntax" name="Syntax">Sintaxis</h2>

<pre class="syntaxbox">var <em>node</em> = <em>document</em>.importNode(<em>externalNode</em>, <em>deep</em>);
</pre>

<dl>
 <dt><code>node</code></dt>
 <dd>El nuevo nodo importado al documento actual. El <code><a href="/en-US/docs/DOM/Node.parentNode" title="DOM/Node.parentNode">parentNode</a></code> del nuevo nodo es <code>null</code>, ya que aun no ha sido insertado en el arbol del documento.</dd>
 <dt><code>externalNode</code></dt>
 <dd>El nodo externo a ser importado</dd>
 <dt><code>deep</code></dt>
 <dd>Un booleano que indica si los descendientes del nodo deben ser importados también.</dd>
</dl>

<div class="note">
<p><strong>Nota:</strong> En la especificación DOM4 (tal y como se ha implementado en Gecko 13.0 {{geckoRelease(13)}}), <code>deep</code> es un argumento opcional. En el caso de ser omitido, adopta el valor de <strong><code>true</code></strong>, por lo que se hace una <em>deep copy</em> por defecto. Para realizar una copia superficial (<em>shallow copy</em>), <em>deep</em> debe ser <strong><code>false</code></strong>.</p>

<p>Este comportamiento ha cambiado en la ultima especificación, por lo que si se omite el parámetro <em>deep,</em> éste adopta el valor <strong><code>false</code></strong>. Aunque aún es opcional, debería ser siempre provisto por razones de compatibilidad. Con Gecko 28.0 {{geckoRelease(28)}}, la consola advertia a los desarrolladores de no omitir el argumento. Empezando con Gecko 29.0 {{geckoRelease(29)}}), se realiza una copia superficial (<em>shallow copy</em>) por defecto.</p>
</div>

<h2 id="Example" name="Example">Ejemplo</h2>

<pre class="brush: js">var iframe = document.getElementsByTagName("iframe")[0];
var oldNode = iframe.contentWindow.document.getElementById("myNode");
var newNode = document.importNode(oldNode, true);
document.getElementById("container").appendChild(newNode);
</pre>

<h2 id="Notes" name="Notes">Notas</h2>

<p>El nodo original no se borra del documento. El nodo importado es un clon del original.</p>

<p> </p>

<p>Nodes from external documents should be cloned using <a href="/es/docs/Web/API/Document/importNode" title="Crea una copia de un nodo desde un documento externo para ser insertado en el documento actual."><code>document.importNode()</code></a> (or adopted using <a href="/es/docs/Web/API/Document/adoptNode" title="Adopta un nodo extreno. El nodo y sub subnodos son quitados del documento en que se encuentra  y su nuevo  ownerDocument se cambia por el actual. El nodo puede entoces ser insertado en el documento actual."><code>document.adoptNode()</code></a>) before they can be inserted into the current document. For more on the <a href="/es/docs/Web/API/Node/ownerDocument" title="La propiedad de lectura Nodo.ownerDocument devuelve el objecto Document de más alto nivel/jerarquia para ese nodo."><code>Node.ownerDocument</code></a> issues, see the <a class="external" href="http://www.w3.org/DOM/faq.html#ownerdoc" rel="noopener">W3C DOM FAQ</a>.</p>

<p>Firefox doesn't currently enforce this rule (it did for a while during the development of Firefox 3, but too many sites break when this rule is enforced). We encourage Web developers to fix their code to follow this rule for improved future compatibility.</p>

<p> </p>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName("DOM WHATWG", "#dom-document-importnode", "document.importNode()")}}</td>
   <td>{{Spec2("DOM WHATWG")}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName("DOM2 Core", "core.html#Core-Document-importNode", "document.importNode()")}}</td>
   <td>{{Spec2("DOM2 Core")}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_navegadores">Compatibilidad navegadores</h2>

<div>


<p>{{Compat("api.Document.importNode")}}</p>
</div>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{domxref("document.adoptNode()")}}</li>
</ul>

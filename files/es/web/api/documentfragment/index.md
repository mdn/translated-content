---
title: DocumentFragment
slug: Web/API/DocumentFragment
translation_of: Web/API/DocumentFragment
---
<div>{{ APIRef("DOM") }}</div>

<p>La interfaz <span class="seoSummary"><strong><code>DocumentFragment</code></strong></span> representa un objeto de documento mínimo que no tiene padre. Se utiliza como una versión ligera de <span class="seoSummary">{{domxref("Document")}}</span> que almacena un segmento de una estructura de documento compuesta de nodos como un documento estándar. La gran diferencia se debe al hecho de que el fragmento de documento no forma parte de la estructura de árbol del documento activo. Los cambios realizados en el fragmento no afectan el documento  (incluso en {{Glossary("reflow")}})  ni inciden en el rendimiento cuando se realizan cambios. {{InheritanceDiagram}}</p>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt>{{ domxref("DocumentFragment.DocumentFragment()", "DocumentFragment()") }}</dt>
 <dd>Crea y devuelve un nuevo objeto <code>DocumentFragment</code>.</dd>
</dl>

<h2 id="Propiedades">Propiedades</h2>

<p>Esta interfaz no tiene propiedades específicas<em>, </em>pero hereda las de su padre<em>, {{domxref("Node")}}, </em>e implementa los de la interfaz <em>{{domxref("ParentNode")}}.</em></p>

<dl>
 <dt>{{ domxref("ParentNode.children") }} {{readonlyInline}}{{experimental_inline}}</dt>
 <dd>Devuelve un {{domxref("HTMLCollection")}} que contiene los objetos de tipo {{domxref("Element")}} que son elementos secundarios del objeto <code>DocumentFragment</code>.</dd>
 <dt>{{ domxref("ParentNode.firstElementChild") }} {{readonlyInline}}{{experimental_inline}}</dt>
 <dd>Devuelve el {{domxref("Element")}} que es el primer hijo del objeto <code>DocumentFragment</code>, o <code>null</code> si no hay ninguno.</dd>
 <dt>{{ domxref("ParentNode.lastElementChild") }} {{readonlyInline}}{{experimental_inline}}</dt>
 <dd>Devuelve el {{domxref("Element")}} que es el último hijo del objeto <code>DocumentFragment</code>, o <code>null</code> si no hay ninguno.</dd>
 <dt>{{ domxref("ParentNode.childElementCount") }} {{readonlyInline}}{{experimental_inline}}</dt>
 <dd>Devuelve un <code>unsigned long</code> que indica cantidad de elementos secundarios que tiene el objeto <code>DocumentFragment</code>.</dd>
</dl>

<h2 id="Métodos">Métodos</h2>

<p><em>Esta interfaz hereda los métodos de su padre</em>, <em>{{domxref("Node")}}<em>, e implementa los de la interfaz {{domxref("ParentNode")}}</em>.</em></p>

<dl>
 <dt>{{domxref("DocumentFragment.querySelector()")}}</dt>
 <dd>Devuelve el primer nodo {{domxref("Element")}} dentro de <code>DocumentFragment</code>, en el orden del documento, que coincide con los selectores especificados.</dd>
 <dt>{{domxref("DocumentFragment.querySelectorAll()")}}</dt>
 <dd>Devuelve un {{domxref("NodeList")}} de todos los nodos {{domxref("Element")}} dentro de <code>DocumentFragment</code> que coincide con los selectores especificados.</dd>
 <dt>{{domxref("DocumentFragment.getElementById()")}}</dt>
 <dd>Devuelve el primer nodo{{domxref("Element")}} dentro de <code style="font-size: 14px;">DocumentFragment</code>, en el orden del documento, que coincide con el <strong>ID</strong> especificado. funcionalmente equivale a {{domxref("Document.getElementById()")}}.</dd>
</dl>

<h2 id="Notas_de_uso">Notas de uso</h2>

<p>A common use for <code>DocumentFragment</code> is to create one, assemble a DOM subtree within it, then append or insert the fragment into the DOM using {{domxref("Node")}} interface methods such as {{domxref("Node.appendChild", "appendChild()")}} or {{domxref("Node.insertBefore", "insertBefore()")}}. Doing this moves the fragment's nodes into the DOM, leaving behind an empty <code>DocumentFragment</code>. Because all of the nodes are inserted into the document at once, only one reflow and render is triggered instead of potentially one for each node inserted if they were inserted separately.</p>

<p>This interface is also of great use with Web components: {{HTMLElement("template")}} elements contain a <code>DocumentFragment</code> in their {{domxref("HTMLTemplateElement.content")}} property.</p>

<p>An empty <code>DocumentFragment</code> can be created using the {{domxref("document.createDocumentFragment()")}} method or the constructor.</p>

<h2 id="Example">Example</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;ul id="list"&gt;&lt;/ul&gt;
</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">var list = document.querySelector('#list')
var fruits = ['Apple', 'Orange', 'Banana', 'Melon']

var fragment = new DocumentFragment()

fruits.forEach(function (fruit) {
  var li = document.createElement('li')
  li.innerHTML = fruit
  fragment.appendChild(li)
})

list.appendChild(fragment)
</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample('Example')}}</p>

<h2 id="Specifications" name="Specifications">Specifications</h2>

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
   <td>{{SpecName('DOM WHATWG', '#interface-documentfragment', 'DocumentFragment')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>Added the constructor and the implementation of {{domxref("ParentNode")}}.</td>
  </tr>
  <tr>
   <td>{{SpecName('Selectors API Level 1', '#the-apis', 'DocumentFragment')}}</td>
   <td>{{Spec2('Selectors API Level 1')}}</td>
   <td>Added the <code>querySelector()</code> and <code>querySelectorAll()</code> methods.</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM3 Core', 'core.html#ID-B63ED1A3', 'DocumentFragment')}}</td>
   <td>{{Spec2('DOM3 Core')}}</td>
   <td>No change from {{SpecName('DOM2 Core')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 Core', 'core.html#ID-B63ED1A3', 'DocumentFragment')}}</td>
   <td>{{Spec2('DOM2 Core')}}</td>
   <td>No change from {{SpecName('DOM1')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM1', 'level-one-core.html#ID-B63ED1A3', 'DocumentFragment')}}</td>
   <td>{{Spec2('DOM1')}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>



<p>{{Compat("api.DocumentFragment")}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Document_Object_Model">The DOM interfaces index.</a></li>
</ul>

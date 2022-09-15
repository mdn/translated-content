---
title: NonDocumentTypeChildNode.nextElementSibling
slug: Web/API/Element/nextElementSibling
tags:
  - API
  - DOM
  - NonDocumentTypeChildNode
  - Propiedad
translation_of: Web/API/NonDocumentTypeChildNode/nextElementSibling
original_slug: Web/API/NonDocumentTypeChildNode/nextElementSibling
---
<div>{{APIRef("DOM")}}</div>

<p>La propiedad de sólo lectura <code><strong>NonDocumentTypeChildNode.nextElementSibling</strong></code> devuelve el elemento inmediatamente posterior al especificado, dentro de la lista de elementos hijos de su padre, o bien <code>null</code> si el elemento especificado es el último en dicha lista.</p>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox">var <em>nextNode</em> = elementNodeReference.nextElementSibling; </pre>

<h2 id="Ejemplo">Ejemplo</h2>

<pre class="brush: html">&lt;div id="div-01"&gt;Here is div-01&lt;/div&gt;
&lt;div id="div-02"&gt;Here is div-02&lt;/div&gt;

&lt;script type="text/javascript"&gt;
  var el = document.getElementById('div-01').nextElementSibling;
  console.log('Siblings of div-01:');
  while (el) {
    console.log(el.nodeName);
    el = el.nextElementSibling;
  }
&lt;/script&gt;
</pre>

<p>Este ejemplo muestra en la consola lo siguiente cuando se carga:</p>

<pre>Siblings of div-01:
DIV
SCRIPT</pre>

<h2 id="Polyfill_para_Internet_Explorer_8">Polyfill para Internet Explorer 8</h2>

<p>Esta propiedad no está soportada con anterioridad a IE9, así que el siguiente fragmento de código puede utilizarse para añadir el soporte a IE8:</p>

<pre class="brush: js">// Source: https://github.com/Alhadis/Snippets/blob/master/js/polyfills/IE8-child-elements.js
if(!("nextElementSibling" in document.documentElement)){
    Object.defineProperty(Element.prototype, "nextElementSibling", {
        get: function(){
            var e = this.nextSibling;
            while(e &amp;&amp; 1 !== e.nodeType)
                e = e.nextSibling;
            return e;
        }
    });
}</pre>

<h2 id="Polyfill_para_Internet_Explorer_9_y_Safari">Polyfill para Internet Explorer 9+ y Safari</h2>

<pre class="brush: js">// Source: https://github.com/jserz/js_piece/blob/master/DOM/NonDocumentTypeChildNode/nextElementSibling/nextElementSibling.md
(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('nextElementSibling')) {
      return;
    }
    Object.defineProperty(item, 'nextElementSibling', {
      configurable: true,
      enumerable: true,
      get: function () {
        var el = this;
        while (el = el.nextSibling) {
          if (el.nodeType === 1) {
              return el;
          }
        }
        return null;
      },
      set: undefined
    });
  });
})([Element.prototype, CharacterData.prototype]);</pre>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Observaciones</th>
  </tr>
  <tr>
   <td>{{SpecName('DOM WHATWG', '#dom-nondocumenttypechildnode-nextelementsibling', 'ChildNodenextElementSibling')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>Se dividió la interfaz <code>ElementTraversal</code> en {{domxref("ChildNode")}}, {{domxref("ParentNode")}}, y {{domxref("NonDocumentTypeChildNode")}}. Este método queda ahora definido en la primera.<br>
    Los interfaces {{domxref("Element")}} y {{domxref("CharacterData")}} implementaron la nueva interfaz.</td>
  </tr>
  <tr>
   <td>{{SpecName('Element Traversal', '#attribute-nextElementSibling', 'ElementTraversal.nextElementSibling')}}</td>
   <td>{{Spec2('Element Traversal')}}</td>
   <td>Añadió su definición inicial a la interfaz pura <code>ElementTraversal</code> y su uso en {{domxref("Element")}}.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>

<p>{{Compat("api.NonDocumentTypeChildNode.nextElementSibling")}}</p>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>La interfaz pura {{domxref("ChildNode")}}.</li>
 <li>Tipos de objetos que implementan esta interfaz pura: {{domxref("CharacterData")}}, {{domxref("Element")}}, y {{domxref("DocumentType")}}.</li>
</ul>

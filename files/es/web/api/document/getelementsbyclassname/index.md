---
title: Document.getElementsByClassName()
slug: Web/API/Document/getElementsByClassName
translation_of: Web/API/Document/getElementsByClassName
---
<p id="Summary">{{APIRef("DOM")}}</p>

<p>Retorna un objecto similar a un array de los elementos hijos que tengan todos los nombres de clase indicados. Cuando es llamado sobre el objeto document , la busqueda se realiza en todo el document, incluido el nodo raíz. También puedes llamar {{domxref("Element.getElementsByClassName", "getElementsByClassName()")}} sobre cualquier elemento; en ese caso retornara sólo los elementos hijos del elemento raíz indicado que contengan los nombres de clase indicados.</p>

<h2 id="Syntax" name="Syntax">Sintaxis</h2>

<pre class="syntaxbox"><var>var elementos</var> = document.getElementsByClassName(<em>nombres</em>); // ó :
<var>var elementos</var> = elementoRaiz.getElementsByClassName(<em>nombres</em>);</pre>

<ul>
 <li><var>elementos es una</var> {{ domxref("HTMLCollection") }} de los elementos encontrados.</li>
 <li><var>nombres es un string que representa la lista de nombres de clase a buscar; los nombres de clase se separan con un espacio.</var></li>
 <li>getElementsByClassName se puede llamar sobre cualquier elemento, no solo sobre document. El elemento sobre el que se llama será usado como la raíz de la busqueda.</li>
</ul>

<h2 id="Examples" name="Examples">Ejemplos</h2>

<p>Obtener todos los elementos de la clase 'prueba'</p>

<pre class="brush: js">document.getElementsByClassName('prueba');</pre>

<p>Obtener todos los elementos que tengan al mismo tiempo las clases 'rojo' y 'prueba'</p>

<pre class="brush: js">document.getElementsByClassName('rojo prueba');</pre>

<p>Obtener todos los elementos que tengan la clase 'prueba' y que estén dentro de un elemento de ID 'principal'</p>

<pre class="brush: js">document.getElementById('principal').getElementsByClassName('prueba');</pre>

<p>También podemos usar los metodos de Array.prototype en cualquier {{ domxref("HTMLCollection") }} pasando el <em>HTMLCollection</em> como el valor <em>this</em> del método. Aquí buscaremos todos los elementos div de la clase 'test':</p>

<pre class="brush: js">var testElements = document.getElementsByClassName('test');
var testDivs = Array.prototype.filter.call(testElements, function(testElement){
    return testElement.nodeName === 'DIV';
});</pre>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>

{{Compat("api.Document.getElementsByClassName")}}

<h2 id="Specification" name="Specification">Especifiación</h2>

<ul>
 <li><a href="https://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html#dom-document-getelementsbyclassname"><span class="external">W3C: getElementsByClassName</span></a></li>
</ul>

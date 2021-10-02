---
title: NodeList.prototype.forEach()
slug: Web/API/NodeList/forEach
tags:
  - API
  - DOM
  - Liste
  - Méthodes
  - Noeuds
translation_of: Web/API/NodeList/forEach
---
<p>{{APIRef("DOM")}}</p>

<p>La méthode <strong><code>forEach()</code></strong> de l'interface {{domxref("NodeList")}} appelle le rappel donné en paramètre une fois pour chaque paire de valeurs dans la liste, dans l'ordre d'insertion.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><em>nodeList.</em>forEach<em>(callback[, thisArg]);</em>
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>Fonction à exécuter pour chaque élément, contenant éventuellement 3 arguments :
 <dl>
  <dt><em><code>currentValue</code></em></dt>
  <dd>L'élément en cours de traitement dans la NodeList.</dd>
  <dt><code><em>currentIndex</em></code></dt>
  <dd>L'index de l'élément en cours de traitement dans la NodeList.</dd>
  <dt><em><code>listObj</code></em></dt>
  <dd>L'objet NodeList auquel <code>forEach()</code> est appliqué.</dd>
 </dl>
 </dd>
 <dt><code>thisArg</code><code> {{Optional_inline}}</code></dt>
 <dd>Valeur à utiliser comme {{jsxref("this")}} lors de l'exécution du <code>callback</code> (<em>rappel</em>).</dd>
</dl>

<h3 id="Valeur_retournée">Valeur retournée</h3>

<p>{{jsxref('undefined')}} (<em>indéfini</em>).</p>

<h2 id="Exceptions">Exceptions</h2>

<p><em>Aucune</em>.</p>

<h2 id="Exemple">Exemple</h2>

<pre class="brush: js">var node = document.createElement("div");
var kid1 = document.createElement("p");
var kid2 = document.createTextNode("hey");
var kid3 = document.createElement("span");

node.appendChild(kid1);
node.appendChild(kid2);
node.appendChild(kid3);

var list = node.childNodes;

list.forEach(
  function(currentValue, currentIndex, listObj) {
    console.log(currentValue + ', ' + currentIndex + ', ' + this);
  },
  'myThisArg'
);</pre>

<p>résultat :</p>

<pre>[object HTMLParagraphElement], 0, myThisArg
[object Text], 1, myThisArg
[object HTMLSpanElement], 2, myThisArg</pre>

<h2 id="Polyfill">Polyfill</h2>

<p>Ce {{Glossary("Polyfill","polyfill")}} ajoute une compatibilité à tous les navigateurs prenant en charge <a href="https://caniuse.com/#search=es5">ES5</a> :</p>

<pre class="brush: js">if (window.NodeList &amp;&amp; !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i &lt; this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('DOM WHATWG', '#interface-nodelist', 'NodeList')}}</td>
   <td>{{ Spec2('DOM WHATWG') }}</td>
   <td>Définit <code>NodeList</code> comme <code>iterable&lt;Node&gt; </code>(<em>noeud itérable</em>)</td>
  </tr>
  <tr>
   <td>{{SpecName("WebIDL", "#es-forEach", "forEach")}}</td>
   <td>{{Spec2("WebIDL")}}</td>
   <td>Définit <code>forEach</code> sur les déclarations <code>iterable</code> (<em>itératives</em>)</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<div>


<p>{{Compat("api.NodeList.forEach")}}</p>
</div>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("Node")}}</li>
 <li>{{domxref("NodeList")}}</li>
</ul>

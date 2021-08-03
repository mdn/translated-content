---
title: WebAssembly.Table.prototype.get()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/get
tags:
  - API
  - JavaScript
  - Méthode
  - Reference
  - WebAssembly
  - table
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/get
original_slug: Web/JavaScript/Reference/Objets_globaux/WebAssembly/Table/get
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>get()</strong></code>, rattachéee au prototype de  {{jsxref("WebAssembly.Table()")}}, permet de récupérer une référence à une fonction stockée dans le tableau WebAssembly grâce à sa position. dans le tableau.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var funcRef = table.get(<em>index</em>);
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>index</code></dt>
 <dd>L'index de la référence de fonction qu'on souhaite récupérer.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une référence de fonction, c'est-à-dire <a href="/fr/docs/WebAssembly/Exported_functions">une fonction WebAssembly exportée</a> qui est une enveloppe JavaScript pour manipuler la fonction WebAssembly sous-jacente.</p>

<h3 id="Exceptions">Exceptions</h3>

<p>Si <code>index</code> est supérieur ou égal à {{jsxref("WebAssembly/Table/length","Table.prototype.length")}}, la méthode lèvera une exception {{jsxref("RangeError")}}.</p>

<h2 id="Exemples">Exemples</h2>

<p>Dans l'exemple suivant (cf. le fichier <code><a href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table.html">table.html</a></code> sur GitHub ainsi que <a href="https://mdn.github.io/webassembly-examples/js-api-examples/table.html">le résultat obtenu</a>), on compile et on instancie le <em>bytecode</em> chargé, <code>table.wasm</code>, grâce à la méthode {{jsxref("WebAssembly.instantiateStreaming()")}}. On récupère ensuite les références stockées dans le tableau d'export.</p>

<pre class="brush: js">WebAssembly.instantiateStreaming(fetch('table.wasm'))
.then(function(obj) {
  var tbl = obj.instance.exports.tbl;
  console.log(tbl.get(0)());  // 13
  console.log(tbl.get(1)());  // 42
});</pre>

<p>On note ici qu'il est nécessaire d'avoir un deuxième opérateur d'appel après l'accesseur pour récupérer le valeur stockée dans la référence (autrement dit, on utilise <code>get(0)()</code> plutôt que <code>get(0)</code>). La valeur exportée est une fonction plutôt qu'une valeur simple.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('WebAssembly JS', '#webassemblytableprototypeget', 'get()')}}</td>
   <td>{{Spec2('WebAssembly JS')}}</td>
   <td>Brouillon de définition initial pour WebAssembly.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<div>


<p>{{Compat("javascript.builtins.WebAssembly.Table.get")}}</p>
</div>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/WebAssembly">Le portail WebAssembly</a></li>
 <li><a href="/fr/docs/WebAssembly/Concepts">Les concepts relatifs à WebAssembly</a></li>
 <li><a href="/fr/docs/WebAssembly/Using_the_JavaScript_API">Utiliser l'API JavaScript WebAssembly</a></li>
</ul>

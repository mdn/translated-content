---
title: WebAssembly.Table.prototype.set()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/set
tags:
  - API
  - JavaScript
  - Méthode
  - Reference
  - WebAssembly
  - table
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/set
original_slug: Web/JavaScript/Reference/Objets_globaux/WebAssembly/Table/set
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>set()</strong></code>, rattachée au prototype de {{jsxref("WebAssembly.Table")}}, permet de modifier une référence de fonction stockée dans un tableau WebAssembly.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">table.set(<em>index</em>, <em>valeur</em>);
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>index</code></dt>
 <dd>L'index de la référence de la fonction qu'on souhaite modifier.</dd>
 <dt><code>valeur</code></dt>
 <dd>La valeur par laquelle on souhaite remplacer la référence. Cette valeur doit être <a href="/fr/docs/WebAssembly/Exported_functions">une fonction exportée WebAssembly</a> (c'est-à-dire une enveloppe JavaScript représentant une fonction WebAssembly sous-jacente).</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Aucune.</p>

<h3 id="Exceptions">Exceptions</h3>

<ul>
 <li>Si <code>index</code> est supérieur ou égal à {{jsxref("WebAssembly/Table/length","Table.prototype.length")}}, une exception {{jsxref("RangeError")}} sera levée.</li>
 <li>Si <code>valeur</code> n'est pas une fonction WebAssembly exportée ou la valeur {{jsxref("null")}}, une exception {{jsxref("TypeError")}} sera levée.</li>
</ul>

<h2 id="Exemples">Exemples</h2>

<p>Dans l'exemple qui suit (basé sur le <a href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table2.html">code source de <code>table2.html</code></a> et qui dispose <a href="https://mdn.github.io/webassembly-examples/js-api-examples/table2.html">d'une démonstration</a>), on crée ue nouvelle instance d'un tableau WebAssembly (<code>Table</code>) qui permet initialement de stocker 2 référence. On imprime alors la longueur du tableau dans la console ainsi que le contenu pour les deux premiers index (obtenus grâce à la méthode {{jsxref("WebAssembly/Table/get","Table.prototype.get()")}}) afin de montrer qu la longueur vaut 2 et qu'initialement, les deux éléments du tableau ne contiennent aucune référence (ils ont tous les deux la valeur {{jsxref("null")}}).</p>

<pre class="brush: js">var tbl = new WebAssembly.Table({initial:2, element:"anyfunc"});
console.log(tbl.length);
console.log(tbl.get(0));
console.log(tbl.get(1));</pre>

<p>On crée ensuite un objet d'import qui contient une référence au tableau :</p>

<pre class="brush: js">var importObj = {
  js: {
    tbl:tbl
  }
};</pre>

<p>Enfin, on charge et on instancie le module WebAssembly (<code>table2.wasm</code>) grâce à la méthode {{jsxref("WebAssembly.instantiateStreaming()")}}, on logge la longueur du tableau et on appelle les deux fonctions référencées qui sont désormais dans le tableau (le module <code>table2.wasm</code> (cf. <a href="https://github.com/mdn/webassembly-examples/blob/master/text-format-examples/table2.was">la représentation textuelle</a>) ajoute deux références de fonctions au tableau et chacune affiche une valeur simple) :</p>

<pre class="brush: js">WebAssembly.instantiateStreaming(fetch('table2.wasm'), importObject)
.then(function(obj) {
  console.log(tbl.length);
  console.log(tbl.get(0)());
  console.log(tbl.get(1)());
});</pre>

<p>On voit ici qu'il faut appeler la fonction après avoir appeler l'opérateur sur l'accesseur (autrement dit, on écrit <code>get(0)()</code> plutôt que <code>get(0)</code>) .</p>

<p>Dans cet exemple, on montre comment créer et manipuler un tableau en JavaScript mais ce tableau est également accessible et manipulable depuis l'instance WebAssembly.</p>

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
   <td>{{SpecName('WebAssembly JS', '#webassemblytableprototypeset', 'set()')}}</td>
   <td>{{Spec2('WebAssembly JS')}}</td>
   <td>Brouillon de définition initiale pour WebAssembly.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.WebAssembly.Table.set")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/WebAssembly">Le portail WebAssembly</a></li>
 <li><a href="/fr/docs/WebAssembly/Concepts">Les concepts relatifs à WebAssembly</a></li>
 <li><a href="/fr/docs/WebAssembly/Using_the_JavaScript_API">Utiliser l'API JavaScript WebAssembly</a></li>
</ul>

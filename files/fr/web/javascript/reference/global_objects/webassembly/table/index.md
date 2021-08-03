---
title: WebAssembly.Table()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Table
tags:
  - API
  - Constructeur
  - JavaScript
  - Reference
  - WebAssembly
  - table
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/Table
original_slug: Web/JavaScript/Reference/Objets_globaux/WebAssembly/Table
---
<div>{{JSRef}}</div>

<p>Le constructeur <code><strong>WebAssembly.Table()</strong></code> permet de créer un nouvel objet <code>Table</code>.</p>

<p>Cet objet est une enveloppe JavaScript qui représente un tableau WebAssembly et qui contient des références à des fonctions. Un tableau créé en JavaScript ou dans du code WebAssembly sera accessible et modifiable depuis du code JavaScript et depuis du code WebAssembly.</p>

<div class="note">
<p><strong>Note :</strong> Actuellement, les tableaux WebAssembly peuvent uniquement stocker des références à des fonctions. Cette fonctionnalité sera vraisemblablement étendue par la suite.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var monTableau = new WebAssembly.Table(descripteurTableau);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>descripteurTableau</code></dt>
 <dd>Un objet composé des propriétés qui suivent :
 <dl>
  <dt><code>element</code></dt>
  <dd>Une chaîne de caractères qui représente le type de référence enregistrée dans le tableau. Actuellement, la seule valeur possible est <code>"anyfunc"</code> (pour indiquer des fonctions).</dd>
  <dt><code>initial</code></dt>
  <dd>La longueur initiale du tableau WebAssembly. Cela correspond au nombre d'éléments contenus dans le tableau.</dd>
  <dt><code>maximum {{optional_inline}}</code></dt>
  <dd>La taille maximale que pourra avoir tableau WebAssembly s'il est étendu.</dd>
 </dl>
 </dd>
</dl>

<h3 id="Exceptions">Exceptions</h3>

<ul>
 <li>Si <code>tableDescriptor</code> n'est pas un objet, une exception {{jsxref("TypeError")}} sera levée.</li>
 <li>Si <code>maximum</code> est défini et est inférieur à <code>initial</code>, une exception {{jsxref("RangeError")}} sera levée.</li>
</ul>

<h2 id="Instances_de_Table">Instances de <code>Table</code></h2>

<p>Toutes les instances <code>Table</code> héritent des propriétés <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/WebAssembly/Table/prototype">du prototype du constructeur</a> <code>Table()</code>. Ce dernier peut être utilisé afin de modifier l'ensemble des instances <code>Table</code>.</p>

<h3 id="Propriétés">Propriétés</h3>

<dl>
 <dt><code>Table.prototype.constructor</code></dt>
 <dd>Renvoie la fonction qui a créé l'instance. Par défaut, c'est le constructeur {{jsxref("WebAssembly.Table()")}}.</dd>
 <dt>{{jsxref("WebAssembly/Table/length","Table.prototype.length")}}</dt>
 <dd>Renvoie la longueur du tableau, c'est-à-dire le nombre de références qui sont enregistrées dans le tableau.</dd>
</dl>

<h3 id="Méthodes">Méthodes</h3>

<dl>
 <dt>{{jsxref("WebAssembly/Table/get","Table.prototype.get()")}}</dt>
 <dd>Une fonction d'accès qui permet d'obtenir l'élément du tableau situé à une position donnée.</dd>
 <dt>{{jsxref("WebAssembly/Table/grow","Table.prototype.grow()")}}</dt>
 <dd>Cette méthode permet d'augmenter la taille du tableau <code>Tabl</code><code>e</code> d'un incrément donné.</dd>
 <dt>{{jsxref("WebAssembly/Table/set","Table.prototype.set()")}}</dt>
 <dd>Cette méthode permet de modifier un élément du tableau situé à une position donnée.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<p>Dans l'exemple qui suit (tiré du fichier <a href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table2.html">table2.html</a> et qui dispose <a href="https://mdn.github.io/webassembly-examples/js-api-examples/table2.html">d'une démonstration</a>), on crée une nouvelle instance d'un tableau WebAssembly avec une taille initiale permettant de stocker 2 références. Ensuite, on imprime la longueur du tableau et le contenu des deux éléments (obtenus grâce à la méthode {{jsxref("WebAssembly/Table/get", "Table.prototype.get()")}} afin de montrer que la longueur vaut 2 et que le tableau ne contient encore aucune référence de fonction (pour les deux positions, on a la valeur {{jsxref("null")}}).</p>

<pre class="brush: js">var tbl = new WebAssembly.Table({initial:2, element:"anyfunc"});
console.log(tbl.length);
console.log(tbl.get(0));
console.log(tbl.get(1));</pre>

<p>Ensuite, on crée un objet d'import qui contient une référence au tableau :</p>

<pre class="brush: js">var importObj = {
  js: {
    tbl:tbl
  }
};</pre>

<p>Enfin, on charge et on instancie un module WebAssembly (table2.wasm) grâce à la fonction {{jsxref("WebAssembly.instantiateStreaming()")}}. Le module <code>table2.wasm</code> a ajouté deux références de fonctions (cf. <a href="https://github.com/mdn/webassembly-examples/blob/0991effbbf2e2cce38a7dbadebd2f3495e3f4e07/js-api-examples/table2.wat">sa représentation textuelle</a>). Chacune de ces fonctions fournit une valeur simple :</p>

<pre class="brush: js">WebAssembly.instantiateStreaming(fetch('table2.wasm'), importObject)
.then(function(obj) {
  console.log(tbl.length);   // "2"
  console.log(tbl.get(0)()); // "42"
  console.log(tbl.get(1)()); // "83"
});</pre>

<p>On voit ici qu'il faut d'abord récupérer la fonction puis effectuer une invocation pour obtenir la valeur correspondante à partir de l'accesseur (autrement dit, on écrit <code>get(0)()</code> plutôt que <code>get(0)</code> pour obtenir le résultat de la fonction) .</p>

<p>Dans cet exemple, on voit comment créer et manipuler le tableau depuis du code JavaScript mais ce même tableau est également accessible depuis l'instance WebAssembly.</p>

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
   <td>{{SpecName('WebAssembly JS', '#webassemblytable-objects', 'Table')}}</td>
   <td>{{Spec2('WebAssembly JS')}}</td>
   <td>Brouillon de définition initial pour WebAssembly.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.WebAssembly.Table")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/WebAssembly">Le portail WebAssembly</a></li>
 <li><a href="/fr/docs/WebAssembly/Concepts">Les concepts relatifs à WebAssembly</a></li>
 <li><a href="/fr/docs/WebAssembly/Using_the_JavaScript_API">Utiliser l'API JavaScript WebAssembly</a></li>
</ul>

---
title: WebAssembly.Memory.prototype.grow()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/grow
tags:
  - API
  - JavaScript
  - Méthode
  - Reference
  - WebAssembly
  - memory
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/grow
original_slug: Web/JavaScript/Reference/Objets_globaux/WebAssembly/Memory/grow
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>grow()</code></strong>, rattachée au prototype de l'objet <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/WebAssembly/Memory">Memory</a></code>, permet d'augmenter la taille de l'espace mémoire correspondant d'un nombre de pages WebAssembly.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">memory.grow(<em>nombre</em>);
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>nombre</code></dt>
 <dd>Le nombre de pages WebAssembly duquel on veut augmenter l'espace mémoire correspondant à l'objet courant (une page mémoire WebAssembly correspond à 64 Ko).</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>La taille de l'espace mémoire avant l'extension, exprimée en nombre de pages WebAssembly.</p>

<h2 id="Exemples">Exemples</h2>

<p>Dans le code qui suit, on crée une instance de <code>Memory</code> qui mesure initialement 1 page (soit 64 Ko) et dont la taille maximale est de 10 pages (soit 6,4 Mo).</p>

<pre class="brush: js">var memory = new WebAssembly.Memory({initial:10, maximum:100});</pre>

<p>Ensuite, on augmente la taille de l'espace mémoire d'une page grâce à la méthode :</p>

<pre class="brush: js">const bytesPerPage = 64 * 1024;
console.log(memory.buffer.byteLength / bytesPerPage);  // "1"
console.log(memory.grow(1));                           // "1"
console.log(memory.buffer.byteLength / bytesPerPage);  // "2"</pre>

<p>On voit ici que la valeur de <code>grow()</code> indique l'espace utilisé avant l'agrandissement de la mémoire.</p>

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
   <td>{{SpecName('WebAssembly JS', '#webassemblymemoryprototypegrow', 'grow()')}}</td>
   <td>{{Spec2('WebAssembly JS')}}</td>
   <td>Brouillon de définition initiale pour WebAssembly.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.WebAssembly.Memory.grow")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/WebAssembly">Le portail WebAssembly</a></li>
 <li><a href="/fr/docs/WebAssembly/Concepts">Les concepts relatifs à WebAssembly</a></li>
 <li><a href="/fr/docs/WebAssembly/Using_the_JavaScript_API">Utiliser l'API JavaScript WebAssembly</a></li>
</ul>

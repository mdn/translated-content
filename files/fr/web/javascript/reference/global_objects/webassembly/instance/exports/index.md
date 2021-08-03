---
title: WebAssembly.Instance.prototype.exports
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance/exports
tags:
  - API
  - Experimental
  - JavaScript
  - Propriété
  - Reference
  - WebAssembly
  - instance
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance/exports
original_slug: Web/JavaScript/Reference/Objets_globaux/WebAssembly/Instance/exports
---
<div>{{JSRef}}</div>

<p>La propriété <strong><code>exports</code></strong> du prototype de {{jsxref("WebAssembly.Instance")}} est une propriété en lecture seul qui renvoie un objet dont les propriétés sont les différentes fonctions exportées depuis l'instance du module WebAssembly. Cela permet d'y accéder et de les manipuler en JavaScript.</p>

<pre class="syntaxbox">instance.exports</pre>

<h2 id="Exemples">Exemples</h2>

<p>Après avoir récupéré le <em>bytecode</em> WebAssembly grâce à la méthode <code>fetch()</code>, on le compile et on instancie le module grâce à la fonction {{jsxref("WebAssembly.instantiateStreaming()")}}. Lorsqu'on utilise cette fonction, on importe une fonction dans le module. Ensuite, on appelle <a href="/fr/docs/WebAssembly/Exported_functions">une fonction WebAssembly exportée</a> qui est exposée via l'instance.</p>

<pre class="brush: js">var importObject = {
  imports: {
    imported_func: function(arg) {
      console.log(arg);
    }
  }
};
WebAssembly.instantiateStreaming(fetch('simple.wasm'), importObject)
.then(obj =&gt; obj.instance.exports.exported_func());</pre>

<div class="note">
<p><strong>Note :</strong> Voir le fichier <a href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/index.html">index.html</a> sur GitHub (ainsi que <a href="https://mdn.github.io/webassembly-examples/js-api-examples/">la démonstration</a>) pour un exemple.</p>
</div>

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
   <td>{{SpecName('WebAssembly JS', '#webassemblyinstance-objects', 'WebAssembly.Instance objects')}}</td>
   <td>{{Spec2('WebAssembly JS')}}</td>
   <td>Brouillon de définition initiale pour WebAssembly.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.WebAssembly.Instance.exports")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/WebAssembly">Le portail WebAssembly</a></li>
 <li><a href="/fr/docs/WebAssembly/Concepts">Les concepts relatifs à WebAssembly</a></li>
 <li><a href="/fr/docs/WebAssembly/Using_the_JavaScript_API">Utiliser l'API JavaScript WebAssembly</a></li>
</ul>

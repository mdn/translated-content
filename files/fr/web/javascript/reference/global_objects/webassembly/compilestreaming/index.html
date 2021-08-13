---
title: WebAssembly.compileStreaming()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/compileStreaming
tags:
  - API
  - JavaScript
  - Méthode
  - Object
  - Reference
  - WebAssembly
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/compileStreaming
original_slug: Web/JavaScript/Reference/Objets_globaux/WebAssembly/compileStreaming
---
<div>{{JSRef}}</div>

<p>La fonction <strong><code>WebAssembly.compileStreaming()</code></strong> permet de compiler un module WebAssembly (c'est-à-dire un objet {{jsxref("WebAssembly.Module")}}) depuis un flux source. Cette fonction est utile si on doit compiler un module avant de l'instancier séparement, sinon on utilisera plutôt {{jsxref("WebAssembly.instantiateStreaming()")}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Promise&lt;WebAssembly.Module&gt; WebAssembly.compileStreaming(<em>source</em>);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>source</code></dt>
 <dd>Un objet {{domxref("Response")}} ou une promesse qui sera résolue avec un objet {{domxref("Response")}} qui représentee la source du module .wasm qu'on souhaite manipuler comme un flux et compiler.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un objet <code>Promise</code> dont la valeur de résolution est un objet {{jsxref("WebAssembly.Module")}} qui représente le module compilé.</p>

<h3 id="Exceptions">Exceptions</h3>

<ul>
 <li>Si la compilation échoue, la promesse est rejetée avec une exception {{jsxref("WebAssembly.CompileError")}}.</li>
</ul>

<h2 id="Exemples">Exemples</h2>

<p>Dans l'exemple suivant (également disponible sur GitHub : <a href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/compile-streaming.html">compile-streaming.html</a> et avec <a href="https://mdn.github.io/webassembly-examples/js-api-examples/compile-streaming.html">le résultat <em>live</em></a>), on récupère un flux dedpuis un module .wasm puis on le compile en un objet {{jsxref("WebAssembly.Module")}}. La fonction <code>compileStreaming()</code>  acceptant une promesse pour un objet {{domxref("Response")}}, on peut directement passer l'appel à  {{domxref("WindowOrWorkerGlobalScope.fetch()")}} qui transfèrera la réponse dès que la promesse sera tenue.</p>

<pre class="brush: js">var importObject = { imports: { imported_func: arg =&gt; console.log(arg) } };

WebAssembly.compileStreaming(fetch('simple.wasm'))
.then(module =&gt; WebAssembly.instantiate(module, importObject))
.then(instance =&gt; instance.exports.exported_func());</pre>

<p>Le module est ensuite instancié grâce à la fonction {{jsxref("WebAssembly.instantiate()")}}. Enfin, on appelle la fonction exportée.</p>

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
   <td>{{SpecName('WebAssembly Embedding', '#webassemblycompilestreaming', 'compileStreaming()')}}</td>
   <td>{{Spec2('WebAssembly Embedding')}}</td>
   <td>Brouillon pour la définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.WebAssembly.compileStreaming")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/WebAssembly">La page d'aperçu de WebAssembly</a></li>
 <li><a href="/fr/docs/WebAssembly/Concepts">Les concepts relatifs à WebAssembly</a></li>
 <li><a href="/fr/docs/WebAssembly/Using_the_JavaScript_API">Utiliser l'API JavaScript de WebAssembly</a></li>
</ul>

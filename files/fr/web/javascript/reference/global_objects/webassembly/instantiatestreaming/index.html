---
title: WebAssembly.instantiateStreaming()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiateStreaming
tags:
  - API
  - JavaScript
  - Méthode
  - Object
  - Reference
  - WebAssembly
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiateStreaming
original_slug: Web/JavaScript/Reference/Objets_globaux/WebAssembly/instantiateStreaming
---
<div>{{JSRef}}</div>

<p>La fonction <strong><code>WebAssembly.instantiateStreaming()</code></strong> permet de compiler et d'instancier un module WebAssembly depuis un flux source. C'est la méthode la plus efficace, et la plus optimisée, permettant de charger du code WebAssembly.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Promise&lt;ResultObject&gt; WebAssembly.instantiateStreaming(<em>source</em>, <em>importObject</em>);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>source</code></dt>
 <dd>Un objet {{domxref("Response")}} ou une promesse qui sera tenue avec une valeur {{domxref("Response")}} qui représente la source du module .wasm dont on souhaite récupérer le flux, la compiler puis l'instanciere.</dd>
 <dt><code>importObject</code> {{optional_inline}}</dt>
 <dd>Un objet qui contient les valeurs qui doivent être importées dans le nouvel objet <code>Instance</code> résultant. Cela peut être des fonctions ou des objets {{jsxref("WebAssembly.Memory")}}. Il est nécessaire qu'il y ait une propriété correspondante pour chaque import déclaré dans le module compilé, sinon, une exception <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/WebAssembly/LinkError">WebAssembly.LinkError</a></code> sera levée.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un objet <code>Promise</code> dont la valeur de résolution est un objet <code>ResultObject</code> contenant deux champs :</p>

<ul>
 <li><code>module</code> : un objet {{jsxref("WebAssembly.Module")}} qui représente le module WebAssembly compilé. Ce module pourra être instancié à nouveau, partagé avec <code><a href="/fr/docs/Web/API/Worker/postMessage">postMessage()</a></code>.</li>
 <li><code>instance</code> : un objet {{jsxref("WebAssembly.Instance")}} qui contient l'ensemble <a href="/fr/docs/WebAssembly/Exported_functions">des fonctions WebAssembly exportées</a>.</li>
</ul>

<h3 id="Exceptions">Exceptions</h3>

<ul>
 <li>Si l'un des paramètres n'est pas du bon type ou ne possède pas la bonne structure, une exception {{jsxref("TypeError")}} est déclenchée.</li>
 <li>Si l'opération échoue, la promesse lève une exception {{jsxref("WebAssembly.CompileError")}}, {{jsxref("WebAssembly.LinkError")}} ou {{jsxref("WebAssembly.RuntimeError")}} selon la cause de l'échec.</li>
</ul>

<h2 id="Examples">Examples</h2>

<p>Dans l'exemple suivant (également disponible sur GitHub : <a href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/instantiate-streaming.html">instantiate-streaming.html</a> et avec <a href="https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html">le résultat <em>live</em></a>), on récupère le flux d'un module .wasm depuis une source, on le compile et on l'instancie. La promesse est alors résolue avec un objet <code>ResultObject</code>. La méthode <code>instantiateStreaming()</code>  acceptant une promesse fournissant un objet {{domxref("Response")}}, on peut directement l'appel de {{domxref("WindowOrWorkerGlobalScope.fetch()")}} en argument qui transfèrera la réponse lorsque la promesse résultante sera tenue.</p>

<pre class="brush: js">var importObject = { imports: { imported_func: arg =&gt; console.log(arg) } };

WebAssembly.instantiateStreaming(fetch('simple.wasm'), importObject)
.then(obj =&gt; obj.instance.exports.exported_func());</pre>

<p>Ensuite, on accède au champ <code>instance</code> de l'objet <code>ResultObject</code> afin de pouvoir invoquer une des fonctions exportées.</p>

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
   <td>{{SpecName('WebAssembly Embedding', '#webassemblyinstantiatestreaming', 'instantiateStreaming()')}}</td>
   <td>{{Spec2('WebAssembly Embedding')}}</td>
   <td>Brouillon de définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.WebAssembly.instantiateStreaming")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/WebAssembly">La page d'aperçu de WebAssembly</a></li>
 <li><a href="/fr/docs/WebAssembly/Concepts">Les concepts relatifs à WebAssembly</a></li>
 <li><a href="/fr/docs/WebAssembly/Using_the_JavaScript_API">Utiliser l'API JavaScript de WebAssembly</a></li>
</ul>

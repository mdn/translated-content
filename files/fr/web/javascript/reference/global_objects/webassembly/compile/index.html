---
title: WebAssembly.compile()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/compile
tags:
  - API
  - JavaScript
  - Méthode
  - Reference
  - WebAssembly
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/compile
original_slug: Web/JavaScript/Reference/Objets_globaux/WebAssembly/compile
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>WebAssembly.compile()</code></strong>, permet de compiler un module ({{jsxref("WebAssembly.Module")}} à partir d'un code binaire WebAssembly. Cette fonction est utile lorsqu'il est nécessaire de compiler un module avant de l'instancier (dans les autres cas, la méthode {{jsxref("WebAssembly.instantiate()")}} sera plus pertinente).</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Promise&lt;WebAssembly.Module&gt; WebAssembly.compile(bufferSource);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>bufferSource</code></dt>
 <dd>Un <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray">tableau typé</a> ou un {{jsxref("ArrayBuffer")}} contenant le <em>bytecode</em> du module WebAssembly qu'on souhaite compiler.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une promesse ({{jsxref("Promise")}}) dont la valeur de résolution est une instance de {{jsxref("WebAssembly.Module")}} qui représente le module compilé.</p>

<h3 id="Exceptions">Exceptions</h3>

<ul>
 <li>Si <code>bufferSource</code> n'est pas un tableau typé, une exception {{jsxref("TypeError")}} sera levée.</li>
 <li>Si la compilation échoue, la promesse sera rompue avec une exception {{jsxref("WebAssembly.CompileError")}}.</li>
</ul>

<h2 id="Exemples">Exemples</h2>

<p>Dans l'exemple qui suit, on compile le <em>bytecode</em> <code>simple.wasm</code> grâce à la méthode <code>compile()</code> puis on envoie le contenu à <a href="https://developer.mozilla.org/fr/docs/Web/API/Web_Workers_API">un <em>worker</em></a> grâce à la méthode <code><a href="/fr/docs/Web/API/Worker/postMessage">postMessage()</a></code>.</p>

<pre class="brush: js">var worker = new Worker("wasm_worker.js");

fetch('simple.wasm').then(response =&gt;
  response.arrayBuffer()
).then(bytes =&gt;
  WebAssembly.compile(bytes)
).then(mod =&gt;
  worker.postMessage(mod)
);</pre>

<div class="note">
<p><strong>Note :</strong> Dans la plupart des cas, mieux vaudra utiliser {{jsxref("WebAssembly.compileStreaming()")}} qui est plus efficace que <code>compile()</code>.</p>
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
   <td>{{SpecName('WebAssembly JS', '#webassemblycompile', 'compile()')}}</td>
   <td>{{Spec2('WebAssembly JS')}}</td>
   <td>Brouillon de définition initiale pour WebAssembly.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.WebAssembly.compile")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/WebAssembly">Le portail WebAssembly</a></li>
 <li><a href="/fr/docs/WebAssembly/Concepts">Les concepts relatifs à WebAssembly</a></li>
 <li><a href="/fr/docs/WebAssembly/Using_the_JavaScript_API">Utiliser l'API JavaScript WebAssembly</a></li>
</ul>

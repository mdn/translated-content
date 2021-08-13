---
title: WebAssembly.instantiate()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiate
tags:
  - API
  - JavaScript
  - Méthode
  - Reference
  - WebAssembly
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiate
original_slug: Web/JavaScript/Reference/Objets_globaux/WebAssembly/instantiate
---
<div>{{JSRef}}</div>

<p>La fonction <strong><code>WebAssembly.instantiate()</code></strong> permet de compiler et d'instancier du code WebAssembly. Cette fonction possède deux formes :</p>

<ul>
 <li>La première forme prend un code binaire WebAssembly sous forme d'un <a href="/fr/docs/Web/JavaScript/Tableaux_typés">tableau typé</a> ou d'un {{jsxref("ArrayBuffer")}} et effectue les étapes de compilation et d'instanciation en une fois. La valeur de résolution de la promesse renvoyée se compose d'un module {{jsxref("WebAssembly.Module")}} compilé et de sa première instance {{jsxref("WebAssembly.Instance")}}.</li>
 <li>La seconde forme prend un module ({{jsxref("WebAssembly.Module")}}) déjà compilé et renvoie une promesse dont la valeur de résolution est une instance de ce module. Cette forme s'avère utile lorsque le module a déjà été compilé.</li>
</ul>

<div class="warning">
<p><strong>Attention :</strong> Tant que faire se peut, utiliser la méthode {{jsxref("WebAssembly.instantiateStreaming()")}} car elle est plus efficace et récupère, compile et instancie un module en une seule étape à partir du <em>bytecode</em> et il n'est pas nécessaire de passer par une conversion en {{jsxref("ArrayBuffer")}}.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<h3 id="Première_forme_utiliser_le_bytecode_WebAssembly">Première forme : utiliser le <em>bytecode</em> WebAssembly</h3>

<pre class="syntaxbox">Promise&lt;ResultObject&gt; WebAssembly.instantiate(bufferSource, importObject);
</pre>

<h4 id="Paramètres">Paramètres</h4>

<dl>
 <dt><code>bufferSource</code></dt>
 <dd>Un <a href="/fr/docs/Web/JavaScript/Tableaux_typés">tableau typé</a> ou un {{jsxref("ArrayBuffer")}} qui contient le <em>bytecode</em> du module WebAssembly qu'on souhaite compiler.</dd>
 <dt><code>importObject</code> {{optional_inline}}</dt>
 <dd>Un objet qui contient les valeurs à importer dans l'instance qui sera créée. Ces valeurs peuvent être des fonctions ou des objets {{jsxref("WebAssembly.Memory")}}. Il doit y avoir une propriété correspondante au sein du module compilé pour chacun des imports, si ce n'est pas le cas, une exception {{jsxref("WebAssembly.LinkError")}} sera levée.</dd>
</dl>

<h4 id="Valeur_de_retour">Valeur de retour</h4>

<p>Une promesse qui est résoluee en un objet qui contient deux champs :</p>

<ul>
 <li><code>module</code> : un objet {{jsxref("WebAssembly.Module")}} qui représente le module WebAssembly compilé. Ce module peut être instancié à nouveau grâce à  {{domxref("Worker.postMessage", "postMessage()")}} ou via <a href="/fr/docs/WebAssembly/Caching_modules">un cache IndexedDB</a>.</li>
 <li><code>instance</code> : un objet {{jsxref("WebAssembly.Instance")}} qui contient l'ensemble <a href="/fr/docs/WebAssembly/Exported_functions">des fonctions WebAssembly exportées</a>.</li>
</ul>

<h4 id="Exceptions">Exceptions</h4>

<ul>
 <li>Si l'un des paramètres n'a pas le bon type ou la bonne structure, une exception {{jsxref("TypeError")}} sera levée.</li>
 <li>Si l'opération échoue, la promesse est rompue avec une exception {{jsxref("WebAssembly.CompileError")}}, {{jsxref("WebAssembly.LinkError")}} ou {{jsxref("WebAssembly.RuntimeError")}} selon l'origine de l'échec.</li>
</ul>

<h3 id="Seconde_forme_utiliser_une_instance_d'un_module">Seconde forme : utiliser une instance d'un module</h3>

<pre class="syntaxbox">Promise&lt;WebAssembly.Instance&gt; WebAssembly.instantiate(module, importObject);
</pre>

<h4 id="Paramètres_2">Paramètres</h4>

<dl>
 <dt><code>module</code></dt>
 <dd>L'objet {{jsxref("WebAssembly.Module")}} qui doit être instancié.</dd>
 <dt><code>importObject</code> {{optional_inline}}</dt>
 <dd>Un objet qui contient les valeurs à importer dans l'instance qui sera créée. Ces valeurs peuvent être des fonctions ou des objets {{jsxref("WebAssembly.Memory")}}. Il doit y avoir une propriété correspondante au sein du module compilé pour chacun des imports, si ce n'est pas le cas, une exception {{jsxref("WebAssembly.LinkError")}} sera levée.</dd>
</dl>

<h4 id="Valeur_de_retour_2">Valeur de retour</h4>

<p>Une promesse qui est résolue en un objet {{jsxref("WebAssembly.Instance")}}.</p>

<h4 id="Exceptions_2">Exceptions</h4>

<ul>
 <li>Si l'un des paramètres n'est pas du bon type ou n'a pas la bonne structure, une exception {{jsxref("TypeError")}} est levée.</li>
 <li>Si l'opération échoue, la promesse sera rompue avec une exception {{jsxref("WebAssembly.CompileError")}}, {{jsxref("WebAssembly.LinkError")}} ou {{jsxref("WebAssembly.RuntimeError")}} selon l'origine de l'échec.</li>
</ul>

<h2 id="Exemples">Exemples</h2>

<div class="blockIndicator note">
<p><strong>Note :</strong> Dans la plupart des cas, on utilisera plus vraisemblablement {{jsxref("WebAssembly.instantiateStreaming()")}} qui est plus efficace que <code>instantiate()</code>.</p>
</div>

<h3 id="Première_forme">Première forme</h3>

<p>Après avoir récupéré le <em>bytecode</em> WebAssembly grâce à <code>fetch()</code>, on compile et on instancie le module grâce à la fonction  {{jsxref("WebAssembly.instantiate()")}} et on importe une fonction JavaScript dans le module lors de cette étape. Ensuite, on invoque <a href="/fr/docs/WebAssembly/Exported_functions">une fonction WebAssembly exportée</a> via l'instance.</p>

<pre class="brush: js">var importObject = {
  imports: {
    imported_func: function(arg) {
      console.log(arg);
    }
  }
};

fetch('simple.wasm').then(response =&gt;
  response.arrayBuffer()
).then(bytes =&gt;
  WebAssembly.instantiate(bytes, importObject)
).then(result =&gt;
  result.instance.exports.exported_func()
);</pre>

<div class="note">
<p><strong>Note :</strong> Voir le fichier <a href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/index.html">index.html</a> sur GitHub (<a href="https://mdn.github.io/webassembly-examples/js-api-examples/">ainsi que la démonstration associée</a>) qui contient un exemple analogue et qui utilise la fonction utilitaire <code><a href="https://github.com/mdn/webassembly-examples/blob/master/wasm-utils.js#L1">fetchAndInstantiate()</a></code>.</p>
</div>

<h3 id="Seconde_forme">Seconde forme</h3>

<p>Dans l'exemple qui suit (tiré du fichier <code><a href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/index-compile.html">index-compile.html</a></code> sur GitHub et qui dispose d'<a href="https://mdn.github.io/webassembly-examples/js-api-examples/index-compile.html">une démonstration</a>), on compile le <em>bytecode</em> du module chargé <code>simple.wasm</code> grâce à la fonction {{jsxref("WebAssembly.compileStreaming()")}} puis on envoie le résultat à un <em><a href="/fr/docs/Web/API/Web_Workers_API">worker</a></em> grâce à la méthode {{domxref("Worker.postMessage", "postMessage()")}}.</p>

<pre class="brush: js">var worker = new Worker("wasm_worker.js");

WebAssembly.compileStreaming(fetch('simple.wasm'))
.then(mod =&gt;
  worker.postMessage(mod)
);</pre>

<p>Dans le <em>worker</em> (cf. <code><a href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/wasm_worker.js">wasm_worker.js</a></code>), on définit un objet d'import qui sera utilisé par le module puis on paramètre un gestionnaire d'évènement afin de recevoir le module depuis le <em>thread</em> principal. Lorsqu'on reçoit le module, on en crée une instance grâce à la méthode {{jsxref("WebAssembly.instantiate()")}} puis on appelle une fonction exportée depuis le module.</p>

<pre class="brush: js">var importObject = {
  imports: {
    imported_func: function(arg) {
      console.log(arg);
    }
  }
};

onmessage = function(e) {
  console.log('module reçu depuis le thread principal');
  var mod = e.data;

  WebAssembly.instantiate(mod, importObject).then(function(instance) {
    instance.exports.exported_func();
  });
};</pre>

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
   <td>{{SpecName('WebAssembly JS', '#webassemblyinstantiate', 'instantiate()')}}</td>
   <td>{{Spec2('WebAssembly JS')}}</td>
   <td>Brouillon de définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.WebAssembly.instantiate")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/WebAssembly">Le portail WebAssembly</a></li>
 <li><a href="/fr/docs/WebAssembly/Concepts">Les concepts relatifs à WebAssembly</a></li>
 <li><a href="/fr/docs/WebAssembly/Using_the_JavaScript_API">Utiliser l'API JavaScript WebAssembly</a></li>
</ul>

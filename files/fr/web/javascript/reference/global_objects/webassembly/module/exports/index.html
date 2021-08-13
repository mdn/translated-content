---
title: WebAssembly.Module.exports()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/exports
tags:
  - API
  - Constructeur
  - JavaScript
  - Module
  - Méthode
  - Object
  - Reference
  - WebAssembly
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/exports
original_slug: Web/JavaScript/Reference/Objets_globaux/WebAssembly/Module/exports
---
<div>{{JSRef}}</div>

<p>La fonction <strong><code>WebAssembly.Module.exports()</code></strong> renvoie un tableau qui contient les descriptions des exports déclarés pour un module donné.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var exports = WebAssembly.Module.exports(module);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>module</code></dt>
 <dd>Un objet {{jsxref("WebAssembly.Module")}}.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un tableau qui contient des objets représentants les fonctions exportés du module passé en argument.</p>

<h3 id="Exceptions">Exceptions</h3>

<p>Si l'argument n'est pas une instance de {{jsxref("WebAssembly.Module")}}, une exception {{jsxref("TypeError")}} sera levée.</p>

<h2 id="Exemples">Exemples</h2>

<p>Dans l'exemple suivant (basé sur le fichier <code><a href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/index-compile.html">index-compile.html</a></code> disponible sur GitHub avec <a href="https://mdn.github.io/webassembly-examples/js-api-examples/index-compile.html">la démonstration correspondante</a>), on compile le <em>bytecode</em> <code>simple.wasm</code> grâce à la fonction {{jsxref("WebAssembly.compileStreaming()")}} puis on envoie le résultat à un <em><a href="/fr/docs/Web/API/Web_Workers_API">worker</a></em> grâce à la méthode <code><a href="/fr/docs/Web/API/Worker/postMessage">postMessage()</a></code>.</p>

<pre class="brush: js">var worker = new Worker("wasm_worker.js");

WebAssembly.compileStreaming(fetch("simple.wasm"))
.then(mod =&gt;
  worker.postMessage(mod)
);</pre>

<p>Dans le <em>worker</em> (cf. <code><a href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/wasm_worker.js">wasm_worker.js</a></code>), on définit un objet d'import pour le module puis on paramètre un gestionnaire d'évènement afin de recevoir le module depuis le <em>thread</em> principal. Lorsqu'on reçoit le module, on en crée une instance via la méthode {{jsxref("WebAssembly.Instantiate()")}} puis on appelle une fonction exportée et enfin, on affiche les informations relatives aux exports disponibles grâce à <code>WebAssembly.Module.exports</code>.</p>

<pre class="brush: js">var importObject = {
  imports: {
    imported_func: function(arg) {
      console.log(arg);
    }
  }
};

onmessage = function(e) {
  console.log('module reçu du thread principal');
  var mod = e.data;

  WebAssembly.instantiate(mod, importObject).then(function(instance) {
    instance.exports.exported_func();
  });

  var exports = WebAssembly.Module.exports(mod);
  console.log(exports[0]);
};</pre>

<p>La valeur <code>exports[0]</code> ressemblera alors à :</p>

<pre class="brush: js">{ name: "exported_func", kind: "function" }</pre>

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
   <td>{{SpecName('WebAssembly JS', '#webassemblymoduleexports', 'exports()')}}</td>
   <td>{{Spec2('WebAssembly JS')}}</td>
   <td>Brouillon de définition initiale pour WebAssembly.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.WebAssembly.Module.exports")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/WebAssembly">Le portail WebAssembly</a></li>
 <li><a href="/fr/docs/WebAssembly/Concepts">Les concepts relatifs à WebAssembly</a></li>
 <li><a href="/fr/docs/WebAssembly/Using_the_JavaScript_API">Utiliser l'API JavaScript WebAssembly</a></li>
</ul>

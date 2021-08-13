---
title: WebAssembly
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly
tags:
  - API
  - JavaScript
  - Object
  - Reference
  - WebAssembly
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly
original_slug: Web/JavaScript/Reference/Objets_globaux/WebAssembly
---
<div>{{JSRef}}</div>

<p>L'objet JavaScript <strong><code>WebAssembly</code></strong> est un objet global qui agit comme un espace de noms (<em>namespace</em>) pour les différentes fonctionnalités JavaScript relatives à <a href="/fr/docs/WebAssembly">WebAssembly</a>.</p>

<p>À la différence des autres objets globaux, <code>WebAssembly</code> n'est pas un constructeur (au même titre que {{jsxref("Math")}} qui agit comme un espace de noms pour les constantes et fonctions mathématiques ou comme {{jsxref("Intl")}} qui centralise les constructeurs et les opérations relatives à l'internationalisation).</p>

<h2 id="Description">Description</h2>

<p>L'objet <code>WebAssembly</code> est notamment utilisé pour :</p>

<ul>
 <li>Charger du code WebAssembly grâce à la fonction {{jsxref("WebAssembly.instantiate()")}}</li>
 <li>Créer des zones mémoires et des instances de tableaux grâce aux constructeurs  {{jsxref("WebAssembly.Memory()")}}/{{jsxref("WebAssembly.Table()")}}.</li>
 <li>Fournir des outils de gestion d'erreur WebAssembly grâce aux constructeurs {{jsxref("WebAssembly.CompileError()")}}/{{jsxref("WebAssembly.LinkError()")}}/{{jsxref("WebAssembly.RuntimeError()")}}.</li>
</ul>

<h2 id="Méthodes">Méthodes</h2>

<dl>
 <dt>{{jsxref("WebAssembly.instantiate()")}}</dt>
 <dd>La méthode qu'on utilisera la plupart du temps pour compiler et instancier du code WebAssembly, elle renvoie une promesse qui est résolue en une <code>Instance</code> ou en une <code>Instance</code> et un <code>Module</code>.</dd>
 <dt>{{jsxref("WebAssembly.instantiateStreaming()")}}</dt>
 <dd>Cette méthode peremet de compiler et d'instancier un module WebAssembly à partir d'un flux source (<em>streamed source</em>). Elle renvoie à la fois un objet <code>Module</code> et sa première <code>Instance</code>.</dd>
 <dt>{{jsxref("WebAssembly.compile()")}}</dt>
 <dd>Cette méthode permet de compiler un {{jsxref("WebAssembly.Module")}} à partir de <em>bytecode</em>  WebAssembly, l'instanciation doit alors être effectuée dans une autre étape.</dd>
 <dt>{{jsxref("WebAssembly.compileStreaming()")}}</dt>
 <dd>Cette méthode permet de compiler un module {{jsxref("WebAssembly.Module")}} à partir d'un flux source (<em>streamed source</em>). L'instanciation devra alors être réalisée avec une autre étape.</dd>
 <dt>{{jsxref("WebAssembly.validate()")}}</dt>
 <dd>Cette méthode permet de valider un tableau typé censé contenir du <em>bytecode</em> WebAssembly : elle renvoie <code>true</code> si les octets forment un code WebAssembly valide ou <code>false</code> sinon.</dd>
</dl>

<h2 id="Constructeurs">Constructeurs</h2>

<dl>
 <dt>{{jsxref("WebAssembly.Global()")}}</dt>
 <dd>Ce constructeur permet de créer un nouvel objet WebAssembly <code>Global</code>.</dd>
 <dt>{{jsxref("WebAssembly.Module()")}}</dt>
 <dd>Ce constructeur permet de créer un objet WebAssembly <code>Module</code>.</dd>
 <dt>{{jsxref("WebAssembly.Instance()")}}</dt>
 <dd>Ce constructeur permet de créer un objet WebAssembly <code>Instance</code>.</dd>
 <dt>{{jsxref("WebAssembly.Memory()")}}</dt>
 <dd>Ce constructeur permet de créer un objet WebAssembly <code>Memory</code>.</dd>
 <dt>{{jsxref("WebAssembly.Table()")}}</dt>
 <dd>Ce constructeur permet de créer un objet WebAssembly <code>Table</code>.</dd>
 <dt>{{jsxref("WebAssembly.CompileError()")}}</dt>
 <dd>Ce constructeur permet de créer un objet WebAssembly <code>CompileError</code>.</dd>
 <dt>{{jsxref("WebAssembly.LinkError()")}}</dt>
 <dd>Ce constructeur permet de créer un objet WebAssembly <code>LinkError</code>.</dd>
 <dt>{{jsxref("WebAssembly.RuntimeError()")}}</dt>
 <dd>Ce constructeur permet de créer un objet WebAssembly <code>RuntimeError</code>.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<p>L'exemple suivant (cf. le fichier <code><a href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/instantiate-streaming.html">instantiate-streaming.html</a></code> sur GitHub et <a href="https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html">le résultat obtenu</a>) permet de récupérer le module WebAssembly via un flux depuis une source, de le compiler, puis de l'instancier. La promesse est résolue avec un objet <code>ResultObject</code>. La méthode <code>instantiateStreaming()</code> accepte une promesse pour l'argument {{domxref("Response")}}, on peut lui passer directement un appel à {{domxref("WindowOrWorkerGlobalScope.fetch()")}} qui passera ensuite la réponse à la fonction lors de la complétion de la promesse.</p>

<pre class="brush: js">var importObject = { imports: { imported_func: arg =&gt; console.log(arg) } };

WebAssembly.instantiateStreaming(fetch('simple.wasm'), importObject)
.then(obj =&gt; obj.instance.exports.exported_func());</pre>

<p>On accède alors à la propriété de l'instance <code>ResultObject</code> puis on appelle la fonction exportée.</p>

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
   <td>{{SpecName('WebAssembly JS', '#the-webassembly-object', 'WebAssembly')}}</td>
   <td>{{Spec2('WebAssembly JS')}}</td>
   <td>Brouillon de définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.WebAssembly")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/WebAssembly">Le portail WebAssembly</a></li>
 <li><a href="/fr/docs/WebAssembly/Concepts">Les concepts relatifs à WebAssembly</a></li>
 <li><a href="/fr/docs/WebAssembly/Using_the_JavaScript_API">Utiliser l'API JavaScript WebAssembly</a></li>
</ul>

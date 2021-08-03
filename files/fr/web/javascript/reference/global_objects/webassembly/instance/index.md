---
title: WebAssembly.Instance()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance
tags:
  - API
  - Constructeur
  - JavaScript
  - Reference
  - WebAssembly
  - instance
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance
original_slug: Web/JavaScript/Reference/Objets_globaux/WebAssembly/Instance
---
<div>{{JSRef}}</div>

<p>Un objet <strong><code>WebAssembly.Instance</code></strong> représente un objet exécutable, avec un état, qui est une instance d'un <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/WebAssembly/Module">module WebAssembly</a>. Un objet <code>Instance</code> contient l'ensemble <a href="/fr/docs/WebAssembly/Exported_functions">des fonctions WebAssembly exportées</a> qui permettent d'invoquer du code WebAssembly depuis du code JavaScript.</p>

<p>Le constructeur <code>WebAssembly.Instance()</code> peut être appelé afin de créer, de façon synchrone, une instance d'un {{jsxref("WebAssembly.Module")}} donné. Toutefois, pour obtenir une instance, on utilisera généralement la fonction asynchrone {{jsxref("WebAssembly.instantiateStreaming()")}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<div class="warning">
<p><strong>Attention :</strong>L'instanciation de modules volumineux peut être coûteuse en temps/ressource. <code>Instance()</code> ne doit être utilisée que lorsqu'une instanciation synchrone est nécessaire. Pour tous les autres cas, c'est la méthode {{jsxref("WebAssembly.instantiateStreaming()")}} qui devrait être utilisée.</p>
</div>

<pre class="syntaxbox">var monInstance = new WebAssembly.Instance(<em>module</em>, <em>importObject</em>);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>module</code></dt>
 <dd>L'objet <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/WebAssembly/Module" title="The Module() constructor of the WebAssembly global object creates a new Module object instance."><code>WebAssembly.Module</code></a> qu'on souhaite instancier.</dd>
 <dt><code>importObject</code> {{optional_inline}}</dt>
 <dd>Un objet qui contient des valeurs à importer dans l'instance. Ce peuvent être des fonctions ou des objets <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/WebAssembly/Memory" title="The Memory() constructor of the WebAssembly global object creates a new Memory object instance, which represents a WebAssembly memory. These can be thought of as resizeable array buffers, wrappers around WebAssembly memories."><code>WebAssembly.Memory</code></a>. Il doit exister une propriété correspondante pour chaque import, si ce n'est pas le cas, un exception <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/WebAssembly/LinkError">WebAssembly.LinkError</a></code> sera levée.</dd>
</dl>

<h2 id="Instances_d'Instance">Instances d'<code>Instance</code></h2>

<p>Toutes les instances du type <code>Instance</code> héritent du prototype du constructeur <code>Instance()</code>. Celui-ci peut être modifié afin de modifier l'ensemble des instances de <code>Instance</code>.</p>

<h3 id="Propriétés">Propriétés</h3>

<p>{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/WebAssembly/Instance/prototype', 'Propriétés')}}</p>

<h3 id="Méthodes">Méthodes</h3>

<p>{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/WebAssembly/Instance/prototype', 'Méthodes')}}</p>

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
   <td>{{SpecName('WebAssembly JS', '#webassemblyinstance-objects', 'Instance')}}</td>
   <td>{{Spec2('WebAssembly JS')}}</td>
   <td>Définition initiale dans un brouillon de spécification.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.WebAssembly.Instance")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/WebAssembly">Le portail WebAssembly</a></li>
 <li><a href="/fr/docs/WebAssembly/Concepts">Les concepts relatifs à WebAssembly</a></li>
 <li><a href="/fr/docs/WebAssembly/Using_the_JavaScript_API">Utiliser l'API JavaScript WebAssembly</a></li>
</ul>

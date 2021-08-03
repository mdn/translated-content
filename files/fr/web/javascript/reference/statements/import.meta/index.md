---
title: import.meta
slug: Web/JavaScript/Reference/Statements/import.meta
tags:
  - JavaScript
  - Modules
  - Reference
translation_of: Web/JavaScript/Reference/Statements/import.meta
original_slug: Web/JavaScript/Reference/Instructions/import.meta
---
<div>{{JSSidebar("Statements")}}</div>

<p>L'objet<strong> <code>import.meta</code></strong> est une méta-propriété qui expose des métadonnées d'un module JavaScript spécifiques au contexte. Cet objet contient des informations à propos du module, telles que l'URL du module.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">import.meta</pre>

<h2 id="Description">Description</h2>

<p>L'objet <code>import.meta</code> se compose d'un mot-clé <code>"import</code>", suivi d'un point, puis du nom de propriété <code>"meta"</code>. En temps normal, "<code>import."</code> serait utilisé comme contexte pour un accès à une propriété mais, dans ce cas, <code>"import."</code> n'est pas, à proprement parler, un objet.</p>

<p>L'objet <code>import.meta</code> est créé par l'implémentation ECMAScript avec un prototype qui vaut {{jsxref("null")}}. Cet objet est extensible et ses propriétés sont accessibles en écriture, configurables et énumérables.</p>

<h2 id="Exemples">Exemples</h2>

<p>Soit un module <code>mon-module.js</code></p>

<pre class="brush: html">&lt;script type="module" src="mon-module.js"&gt;&lt;/script&gt;
</pre>

<p>Il est possible d'accéder aux métadonnées du module grâce à l'objet <code>import.meta</code>.</p>

<pre class="brush: js">console.log(import.meta); // { url: "file:///home/user/mon-module.js" }</pre>

<p>Cet objet contient une propriété <code>url</code> qui indique l'URL de base du module. Dans le cas des scripts externes, celle-ci sera l'URL à partir de laquelle le script a été obtenu. Pour les scripts écrits dans le document, ce sera l'URL de base du document englobant.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td><a href="https://github.com/tc39/proposal-import-meta/#importmeta">Proposition pour <code>import.meta</code></a></td>
   <td>Niveau 3</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName("HTML WHATWG","webappapis.html#hostgetimportmetaproperties","import.meta")}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
   <td>Définition des propriétés <code>import.meta</code> en HTML.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.statements.import_meta")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Instructions/import","import")}}</li>
 <li>{{jsxref("Instructions/export","export")}}</li>
</ul>

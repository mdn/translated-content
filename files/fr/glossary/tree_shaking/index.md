---
title: Tree shaking
slug: Glossary/Tree_shaking
tags:
  - Glossaire
  - JavaScript
translation_of: Glossary/Tree_shaking
original_slug: Glossaire/Tree_shaking
---
<p><strong>Tree shaking</strong> est un terme couramment utilisé dans un contexte JavaScript pour décrire la suppression du code mort.</p>

<p>Il repose sur les états <a href="/fr/docs/Web/JavaScript/Reference/Instructions/import">import</a> et <a href="/fr/docs/Web/JavaScript/Reference/Instructions/export">export</a> en ES6 pour détecter si les modules de code sont exportés et importés pour une utilisation entre des fichiers JavaScript. </p>

<p>Dans les applications JavaScript modernes, nous utilisons des gestionnaires de regroupements de modules (par exemple, <a href="https://webpack.js.org/">webpack</a> ou <a href="https://github.com/rollup/rollup">Rollup</a>) pour supprimer automatiquement le code mort lors du regroupement de plusieurs fichiers JavaScript dans des fichiers uniques. Ceci est important pour préparer un code prêt pour la production, par exemple avec des structures propres et une taille de fichier minimale.</p>

<h2 id="En_apprendre_plus">En apprendre plus</h2>

<h3 id="Culture_générale">Culture générale</h3>

<ul>
 <li><a href="http://exploringjs.com/es6/ch_modules.html#_benefit-dead-code-elimination-during-bundling">"Benefits of dead code elimination during bundling"</a> in Axel Rauschmayer's book: "Exploring JS: Modules"</li>
 <li>{{Interwiki("wikipedia", "Réusinage_de_code#Suppression_du_code_mort","Suppression du code mort")}} sur Wikipédia</li>
</ul>

<h3 id="Références_techniques">Références techniques</h3>

<ul>
 <li><a href="https://webpack.js.org/guides/tree-shaking/">Tree shaking implementation with webpack</a></li>
</ul>

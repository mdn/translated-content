---
title: Tree shaking
slug: Glossary/Tree_shaking
tags:
  - Glossaire
  - JavaScript
translation_of: Glossary/Tree_shaking
original_slug: Glossaire/Tree_shaking
---
**Tree shaking** est un terme couramment utilisé dans un contexte JavaScript pour décrire la suppression du code mort.

Il repose sur les états [import](/fr/docs/Web/JavaScript/Reference/Instructions/import) et [export](/fr/docs/Web/JavaScript/Reference/Instructions/export) en ES6 pour détecter si les modules de code sont exportés et importés pour une utilisation entre des fichiers JavaScript.

Dans les applications JavaScript modernes, nous utilisons des gestionnaires de regroupements de modules (par exemple, [webpack](https://webpack.js.org/) ou [Rollup](https://github.com/rollup/rollup)) pour supprimer automatiquement le code mort lors du regroupement de plusieurs fichiers JavaScript dans des fichiers uniques. Ceci est important pour préparer un code prêt pour la production, par exemple avec des structures propres et une taille de fichier minimale.

## En apprendre plus

### Culture générale

- ["Benefits of dead code elimination during bundling"](http://exploringjs.com/es6/ch_modules.html#_benefit-dead-code-elimination-during-bundling) in Axel Rauschmayer's book: "Exploring JS: Modules"
- {{Interwiki("wikipedia", "Réusinage_de_code#Suppression_du_code_mort","Suppression du code mort")}} sur Wikipédia

### Références techniques

- [Tree shaking implementation with webpack](https://webpack.js.org/guides/tree-shaking/)

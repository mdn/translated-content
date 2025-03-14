---
title: Tree shaking
slug: Glossary/Tree_shaking
---

{{GlossarySidebar}}

**Tree shaking** est un terme couramment utilisé dans un contexte JavaScript pour décrire la suppression du code mort.

Il repose sur les états [import](/fr/docs/Web/JavaScript/Reference/Statements/import) et [export](/fr/docs/Web/JavaScript/Reference/Statements/export) en ES6 pour détecter si les modules de code sont exportés et importés pour une utilisation entre des fichiers JavaScript.

Dans les applications JavaScript modernes, nous utilisons des gestionnaires de regroupements de modules (par exemple, [webpack](https://webpack.js.org/) ou [Rollup](https://github.com/rollup/rollup)) pour supprimer automatiquement le code mort lors du regroupement de plusieurs fichiers JavaScript dans des fichiers uniques. Ceci est important pour préparer un code prêt pour la production, par exemple avec des structures propres et une taille de fichier minimale.

## Voir aussi

### Culture générale

- ["Benefits of dead code elimination during bundling"](https://exploringjs.com/es6/ch_modules.html#_benefit-dead-code-elimination-during-bundling) in Axel Rauschmayer's book: "Exploring JS: Modules"
- [Suppression du code mort](https://fr.wikipedia.org/wiki/Réusinage_de_code#Suppression_du_code_mort) sur Wikipédia

### Références techniques

- [Tree shaking implementation with webpack](https://webpack.js.org/guides/tree-shaking/)

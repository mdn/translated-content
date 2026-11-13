---
title: Tree shaking
slug: Glossary/Tree_shaking
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Tree shaking** est un terme couramment utilisé dans un contexte JavaScript pour décrire la suppression du code mort.

Il repose sur les états [import](/fr/docs/Web/JavaScript/Reference/Statements/import) et [export](/fr/docs/Web/JavaScript/Reference/Statements/export) pour détecter si les modules de code sont exportés et importés pour une utilisation entre des fichiers JavaScript.

Dans les applications JavaScript modernes, nous utilisons des gestionnaires de regroupements de modules (par exemple, [webpack <sup>(angl.)</sup>](https://webpack.js.org/) ou [Rollup <sup>(angl.)</sup>](https://github.com/rollup/rollup)) pour supprimer automatiquement le code mort lors du regroupement de plusieurs fichiers JavaScript dans des fichiers uniques. Ceci est important pour préparer un code prêt pour la production, par exemple avec des structures propres et une taille de fichier minimale.

## Voir aussi

- [«&nbsp;Avantages de l'élimination du code mort lors du regroupement&nbsp;» <sup>(angl.)</sup>](https://exploringjs.com/es6/ch_modules.html#_benefit-dead-code-elimination-during-bundling) dans le livre d'Axel Rauschmayer&nbsp;: «&nbsp;Exploring JS: Modules&nbsp;»
- [Implémentation du tree shaking avec webpack <sup>(angl.)</sup>](https://webpack.js.org/guides/tree-shaking/)

---
title: Mise à jour dans le désordre
slug: Glossary/out_of_order_patching
l10n:
  sourceCommit: 96c0e251ee3d12f373fa1c4b3370a14b3a726db6
---

La mise à jour dans le désordre consiste à envoyer du contenu HTML dans un ordre différent du flux séquentiel, de haut en bas, d'un document unique.

Cela améliore les performances perçues en ne retardant pas le contenu initial pendant l'attente de composants plus lents qui peuvent prendre du temps à générer ou à envoyer. Cette méthode est courante avec la génération de contenu dynamique qui nécessite un traitement supplémentaire, comme l'a popularisé [le modèle d'architecture en îlots <sup>(angl.)</sup>](https://jasonformat.com/islands-architecture/).

La mise à jour dans le désordre nécessite traditionnellement de supprimer complètement le contenu du document HTML initial et de l'ajouter au DOM avec JavaScript. [La mise à jour dans le désordre avec `<template for>`](/fr/docs/Web/HTML/Reference/Elements/template#out-of-order_patching) permet d'obtenir ce résultat sans JavaScript dans le HTML initial en utilisant des marqueurs d'emplacement mis à jour avec des éléments `<template for>` transmis ultérieurement dans le HTML.

## Voir aussi

- [Mise à jour dans le désordre avec `<template for>`](/fr/docs/Web/HTML/Reference/Elements/template#out-of-order_patching)

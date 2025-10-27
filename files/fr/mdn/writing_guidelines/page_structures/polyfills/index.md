---
title: Prothèses d'émulation (polyfills)
slug: MDN/Writing_guidelines/Page_structures/Polyfills
l10n:
  sourceCommit: 15be229ea1379b99a02f0c8b102f2acb5c3d6633
---

Cette page présente la politique de MDN concernant l'inclusion de prothèses d'émulation (<i lang="en">polyfills</i>) dans la documentation de référence pour [JavaScript](/fr/docs/Web/JavaScript) et les [API Web](/fr/docs/Web/API).

Un·e {{Glossary("Polyfill", "prothèse d'émulation")}} est une implémentation d'une fonctionnalité de la plateforme web que les sites peuvent utiliser dans les navigateurs qui ne prennent pas en charge cette fonctionnalité nativement. Les prothèses d'émulation permettent aux développeur·euse·s web d'écrire une seule base de code ciblant plusieurs navigateurs et versions de navigateurs, même lorsque certains de ces navigateurs ne prennent pas en charge certaines fonctionnalités utilisées.

Les prothèses d'émulation sont importantes pour les développeur·euse·s web mais présentent aussi un risque&nbsp;: des prothèses défectueuses peuvent casser des sites ou créer des failles de sécurité. Pour cette raison, MDN recommande des sources spécifiques de prothèses d'émulation et reste très prudent·e quant à l'ajout de nouvelles sources.

## Prothèses d'émulation dans la référence JavaScript

### Prothèses sélectionnées

La [documentation de référence JavaScript](/fr/docs/Web/JavaScript) peut lier des prothèses d'émulation provenant de deux sources&nbsp;:

- La bibliothèque [core-js <sup>(angl.)</sup>](https://github.com/zloirock/core-js/tree/master).
- L'organisation [es-shims <sup>(angl.)</sup>](https://github.com/es-shims).

Les sources sont sélectionnées par les mainteneur·euse·s MDN selon les critères suivants&nbsp;:

- Conformité à la spécification de la fonctionnalité pour laquelle elles fournissent une implémentation.
- Adoption par la communauté du développement web, mesurée par des indicateurs comme le nombre de téléchargements sur [npm <sup>(angl.)</sup>](https://www.npmjs.com/).

### Proposer une nouvelle source de prothèses

Toute personne peut proposer que MDN reconnaisse une nouvelle source de prothèses d'émulation en [ouvrant une discussion sur le forum MDN <sup>(angl.)</sup>](https://github.com/orgs/mdn/discussions). Cependant, les mainteneur·euse·s MDN s'attendent à ce que le nombre de prothèses reconnues et liées depuis MDN reste très faible, afin de réduire le risque de recommander des prothèses qui poseraient problème aux développeur·euse·s web.

### Intégration des prothèses dans les pages

Lorsqu'une page de la documentation de référence JavaScript lie vers une prothèse d'émulation, le lien est ajouté dans la section «&nbsp;Voir aussi&nbsp;» à la fin de la page.

Le lien est placé au début de la liste «&nbsp;Voir aussi&nbsp;», au format suivant&nbsp;:

```md
- [Prothèse d'émulation pour `featureName` dans `project-name`](lien)
```

## Prothèses d'émulation dans la référence des API Web

### Prothèses sélectionnées

La [documentation de référence des API Web](/fr/docs/Web/API) peut lier des prothèses d'émulation qui sont maintenues avec la spécification de la fonctionnalité elle-même.

Par exemple, l'[API Trusted Types](/fr/docs/Web/API/Trusted_Types_API) dispose d'une prothèse d'émulation [maintenue dans le même dépôt que la spécification <sup>(angl.)</sup>](https://github.com/w3c/trusted-types?tab=readme-ov-file#polyfill). Ainsi, la documentation de référence de l'API Trusted Types sur MDN peut lier cette prothèse.

### Intégration des prothèses dans les pages

Les prothèses d'émulation sont généralement intégrées dans la [page d'ensemble de l'API](/fr/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key#types_de_pages_dapi_web).

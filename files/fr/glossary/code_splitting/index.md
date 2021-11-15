---
title: La division du code
slug: Glossary/Code_splitting
translation_of: Glossary/Code_splitting
---
La **division du code** (« _code splitting_ » en Anglais) est le fractionnement du code en divers bundles ou composants qui peuvent ensuite être chargés à la demande ou en parallèle.

Au fur et à mesure qu'une application devient de plus en plus complexe ou est maintenue, la taille en octets des fichiers ou bundles CSS et JavaScripts augmente, en particulier à mesure que le nombre et la taille des bibliothèques tierces incluses augmentent. Pour éviter d'avoir à télécharger des fichiers gigantesques, les scripts peuvent être divisés en plusieurs fichiers plus petits. Ensuite, les fonctionnalités requises au chargement de la page peuvent être téléchargées immédiatement avec des scripts supplémentaires [chargés passivement](/fr/docs/Glossary/Lazy_load) une fois que la page ou l'application soit interactive, améliorant ainsi les performances. Bien que la quantité totale de code soit la même (et peut-être même quelques octets plus grands), la quantité de code nécessaire lors du chargement initial peut être réduite.

Le code splitting est une fonctionnalité prise en charge par les contructeurs (bundlers) comme [Webpack](https://webpack.js.org/) et [Browserify](https://browserify.org/) qui peut créer plusieurs bundles pouvant être chargés dynamiquement au moment de l'exécution.

## Voir aussi

- Regroupement
- [Lazy loading](/fr/docs/Web/Performance/Lazy_loading)
- [HTTP/2](/fr/docs/Glossary/HTTP_2)
- [Tree shaking](/fr/docs/Glossary/Tree_shaking)

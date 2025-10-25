---
title: La division du code
slug: Glossary/Code_splitting
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

La **division du code** (<i lang="en">code splitting</i> en anglais) est la pratique qui consiste à découper le code dont une application web dépend — y compris son propre code et les dépendances tierces — en paquets séparés pouvant être chargés indépendamment les uns des autres.
Cela permet à une application de ne charger que le code dont elle a réellement besoin à un instant donné, et de charger d'autres paquets à la demande.
Cette approche est utilisée pour améliorer les performances de l'application, en particulier lors du chargement initial.

La division du code est une fonctionnalité prise en charge par les contructeurs (bundlers) comme [Webpack](https://webpack.js.org/) et [Browserify](https://browserify.org/) qui peut créer plusieurs paquets (<i lang="en">bundles</i> en anglais) pouvant être chargés dynamiquement au moment de l'exécution.

## Voir aussi

- [Chargement différé](/fr/docs/Web/Performance/Guides/Lazy_loading)
- Termes associés du glossaire&nbsp;:
  - {{Glossary("HTTP 2", "HTTP/2")}}
  - {{Glossary("Tree shaking", "Suppression des codes morts")}}

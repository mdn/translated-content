---
title: Différences entre les implémentations d'API
slug: Mozilla/Add-ons/WebExtensions/Differences_between_API_implementations
tags:
  - Guide
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/Differences_between_API_implementations
original_slug: Mozilla/Add-ons/WebExtensions/Differences_entre_les_implementations_api
---
{{AddonSidebar}}

L'API d'extension de navigateur est encore un [standard emergent](https://browserext.github.io/browserext/). Par conséquent, bien qu'il soit pris en charge par la plupart des principaux navigateurs, dont Firefox, Chrome, Edge et Opera, il existe des différences entre les différentes implémentations. Cela signifie que certaines modifications peuvent être nécessaires pour implémenter votre extension pour plusieurs navigateurs

Parmi les différents navigateurs supportant l'API d'extension, Firefox est le plus conforme à la norme émergente, et est donc votre meilleur point de départ pour développer des extensions de navigateur.

Les différences entre les implémentations d'API d'extensions de navigateurs se répartissent en quatre domaines : l'espace de noms, la gestion asynchrone des événements, la couverture API et les clés de manifest.

## Espace de nommage

Vous faites référence à toutes les fonctions de l'API des extensions en utilisant un espace de noms, par exemple, `browser.alarms.create({delayInMinutes});` créerait une alarme dans Firefox qui se déclenche après le temps spécifié dans `delayInMinutes`.

Deux espaces de noms API sont utilisés :

- `chrome` utilisé dans Chrome et Opera.
- `browser` utilisé dans Firefox et Edge.

## Traitement asynchrone des événements

JavaScript fournit plusieurs façons de gérer les événements asynchrones. La norme API d'extensions proposée est d'utiliser des promises. L'approche des promises offre des avantages significatifs lorsqu'il s'agit d'appels d'événements asynchrones en chaîne

Si vous n'êtes pas familier avec la façon dont JavaScript peut gérer les événements asynchrones ou les promesses, jetez un coup d'oeil sur [Apprendre à connaître Javascript Asynchrone : Callbacks, Promises et Async/Await](https://medium.com/codebuddies/getting-to-know-asynchronous-javascript-callbacks-promises-and-async-await-17e0673281ee) ou la page des [promises d'utilisation](/fr/docs/Web/JavaScript/Guide/Utiliser_les_promesses) de MDN.

Firefox est le seul navigateur majeur à avoir implémenté des promises pour les extensions API. Tous les autres navigateurs utilisent des callbacks.

## Couverture API

Les différences dans l'implémentation des fonctions de l'API d'extension entre les navigateurs se répartissent en trois grandes catégories :

- Manque de soutien pour l'ensemble d'une fonction. Par exemple, au moment d'écrire ces lignes, Edge ne prend pas en charge la fonction de [`vide privée`](/fra/Add-ons/WebExtensions/API/privacy).
- Variations dans la prise en charge des fonctions au sein d'une fonction. Par exemple, au moment d'écrire ces lignes, Firefox ne supporte pas la fonction de [`notification`](/fr/Add-ons/WebExtensions/API/notifications)  [onButtonClicked](/fr/Add-ons/WebExtensions/API/notifications/onButtonClicked) alors que Firefox est le seul navigateur qui supporte [onShown](/fr/docs/Mozilla/Add-ons/WebExtensions/API/notifications/onShown).
- Fonctions propriétaires, supportant des fonctions spécifiques au navigateur. Par exemple, au moment d'écrire ces lignes, containers est une fonctionnalité spécifique à Firefox supportée par la fonction [contextualIdentities](/fr/Add-ons/WebExtensions/API/contextualIdentities).

## Touches Manifest

Les différences entre les clés [clés manifest.json](/fr/Add-ons/WebExtensions/manifest.json) prises en charge par les navigateurs se répartissent en deux grandes catégories :

- Attributs d'information sur les extensions. Par exemple, au moment d'écrire ces lignes, Firefox et Opera incluent la clé de [développent](/fr/Add-ons/WebExtensions/manifest.json/developer) permettant d'ajouter des détails sur le développeur de l'extension, ainsi que sur l'auteur, à enregistrer.
- Fonctions d'extension. Par exemple, au moment d'écrire ces lignes, Edge ne prenait pas en charge les clés de [commande](/fr/Add-ons/WebExtensions/manifest.json/commands) qui permettent de définir des raccourcis clavier pour une extension.

## Plus d'information

Vous trouverez des informations plus détaillées sur les différences entre les extensions de navigateur prises en charge par les fonctionnalités API dans le domaine :

- [Incompatibilités Chrome](/fr/Add-ons/WebExtensions/Chrome_incompatibilities)
- [Prise en charge des API Javascript par le navigateur](/fr/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs)
- [Compatibilité du navigateur pour manifest.json](/fr/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json)

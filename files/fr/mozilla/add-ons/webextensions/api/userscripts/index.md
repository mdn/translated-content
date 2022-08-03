---
title: userScripts
slug: Mozilla/Add-ons/WebExtensions/API/userScripts
tags:
  - Add-ons
  - Customisation
  - Extensions
  - Firefox
  - Mozilla
  - Reference
  - WebExtensions
  - userScripts
translation_of: Mozilla/Add-ons/WebExtensions/API/userScripts
---
{{AddonSidebar}}

Utilisez cette API pour enregistrer des scripts utilisateurs, des scripts tiers conçus pour manipuler des pages web ou fournir de nouvelles fonctionnalités. L'enregistrement d'un script utilisateur indique au navigateur de joindre le script aux pages qui correspondent aux modèles d'URL spécifiés lors de l'enregistrement.

Cette API offre des capacités similaires à {{WebExtAPIRef("contentScripts")}} mais avec des fonctionnalités adaptées à la gestion de scripts tiers :

- l'exécution se fait dans une sandbox isolée : chaque script utilisateur est exécuté dans une sandbox isolée au sein des processus de contenu web, ce qui empêche toute interférence accidentelle ou délibérée entre les scripts.
- l'accès à la `fenêtre` et aux valeurs globales du `document` liées à la page web à laquelle le script utilisateur est attaché.
- aucun accès aux API de WebExtension ou aux autorisations associées accordées à l'extension : le script API, qui hérite des autorisations de l'extension, peut fournir des API de WebExtension packagées aux scripts utilisateur enregistrés. Un script API est déclaré dans le fichier manifeste de l'extension en utilisant la clé du manifeste "user_scripts".

> **Attention :** Cette API requiert la présence de la clé [`user_scripts`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts) dans le manifest.json, même si aucun script API n'est spécifié. Par exemple, `user_scripts: {}`.

Pour utiliser l'API, appelez `{{WebExtAPIRef("userScripts.register","register()")}}` en passant un objet définissant les scripts à enregistrer. La méthode renvoie une promesse qui est résolue par un objet  `{{WebExtAPIRef("userScripts.RegisteredUserScript","RegisteredUserScript")}}`.

> **Note :** Les scripts utilisateur sont désenregistrés lorsque la page d'extension correspondante (à partir de laquelle les scripts utilisateur ont été enregistrés) est déchargée, vous devez donc enregistrer un script utilisateur depuis une page d'extension qui persiste au moins aussi longtemps que vous voulez que les scripts utilisateur restent enregistrés

## Types

- {{WebExtAPIRef("userScripts.RegisteredUserScript")}}
  - : L'`object` renvoyé par la méthode  {{WebExtAPIRef("userScripts.register","register()")}}. Il représente les scripts utilisateur enregistrés et est utilisé pour désenregistrer les scripts utilisateur.

## Méthodes

- {{WebExtAPIRef("userScripts.register()")}}
  - : Enregistre les scripts utilisateur donnés.

## Evénements

- {{WebExtAPIRef("userScripts.onBeforeScript")}}
  - : Un événement disponible pour le script API, enregistré dans [`"user_scripts"`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts), qui s'exécute avant qu'un script utilisateur ne s'exécute. Utilisez-le pour déclencher l'exportation des API supplémentaires fournies par le script API, afin qu'elles soient disponibles pour le script utilisateur.

## Compatibilité du navigateur

{{Compat("webextensions.api.userScripts", 10, 1)}}

## Voir aussi

- [Working with `userScripts`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/userScripts/Working_with_userScripts)
- {{WebExtAPIRef("contentScripts","browser.contentScripts")}}

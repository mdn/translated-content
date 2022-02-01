---
title: userScripts.RegisteredUserScript
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/RegisteredUserScript
tags:
  - API
  - Extensions
  - Reference
  - RegisteredUserScript
  - Type
  - userScripts
translation_of: Mozilla/Add-ons/WebExtensions/API/userScripts/RegisteredUserScript
---
{{AddonSidebar()}}

Un RegisteredUserScript est retourné par un appel à {{WebExtAPIRef("userScripts.register","userScripts.register()")}} et représente les scripts utilisateur enregistrés dans cet appel.

L'objet définit une méthode unique, {{WebExtAPIRef("userScripts.RegisteredUserScript.unregister","unregister()")}}, qui peut être utilisée pour désinscrire les scripts utilisateur.

> **Note :** Si cet objet est détruit (par exemple parce qu'il sort du champ d'application), les scripts associés seront automatiquement désenregistrés, vous devez donc conserver une référence à cet objet aussi longtemps que vous voulez que les scripts de contenu restent enregistrés.

## Méthodes

- {{WebExtAPIRef("userScripts.RegisteredUserScript.unregister","unregister()")}}
  - : Désenregistre les scripts utilisateurs représentés par cet objet.

## Compatibilité du navigateur

{{Compat("webextensions.api.userScripts.RegisteredUserScript", 10)}}

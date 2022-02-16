---
title: RegisteredUserScript.unregister()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/RegisteredUserScript/unregister
tags:
  - Add-ons
  - Extensions
  - Method
  - User Scripts API
  - WebExtensions
  - unregister
  - userScripts
translation_of: Mozilla/Add-ons/WebExtensions/API/userScripts/RegisteredUserScript/unregister
---
{{AddonSidebar}}

La méthode `unregister()` de l'interface  {{WebExtAPIRef("userScripts.RegisteredUserScript","RegisteredUserScript")}} désenregistre le script utilisateur représenté par cette instance d'interface et précédemment enregistré via  {{WebExtAPIRef("userScripts.register","userScripts.register()")}}.

> **Note :** Les scripts utilisateur sont automatiquement désenregistrés lorsque la page d'extension correspondante (à partir de laquelle les scripts utilisateur ont été enregistrés) est déchargée, vous devez donc enregistrer un script utilisateur depuis une page d'extension qui persiste au moins aussi longtemps que vous voulez que les scripts utilisateur restent enregistrés..

## Syntaxe

```js
const registeredUserScript = await browser.userScripts.register(
  userScriptOptions       // object
);
…
await registeredUserScript.unregister()
```

### Paramètres

Aucun

### Valeur retournée

Une {{JSxRef("Promise")}} qui sera résolu une fois le script utilisateur désenregistré. La promesse ne rapporte rien.

## Compatibilité du navigateur

{{Compat("webextensions.api.userScripts.RegisteredUserScript.unregister")}}

## Voir aussi

- {{WebExtAPIRef("userScripts.register","userScripts.register()")}}
- {{WebExtAPIRef("userScripts.RegisteredUserScript","RegisteredUserScript")}}

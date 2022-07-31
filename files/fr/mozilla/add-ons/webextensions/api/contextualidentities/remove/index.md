---
title: contextualIdentities.remove()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/remove
tags:
  - API
  - Add-ons
  - Extensions
  - Méthode
  - Reference
  - WebExtensions
  - contextualIdentities
  - remove
  - supprimer
translation_of: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/remove
---
{{AddonSidebar()}}

Supprime une identité contextuelle, compte tenu de son ID de cookie.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var removeContext = browser.contextualIdentities.remove(
  cookieStoreId                  // string
)
```

### Paramètres

- `cookieStoreId`
  - : `string`. L'identifiant du cookie store de l'identité contextuelle. Étant donné que les identités contextuelles ont chacune leur propre magasin de cookies, cela sert d'identifiant pour l'identité contextuelle elle-même.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec un {{WebExtAPIRef('contextualIdentities.ContextualIdentity', 'ContextualIdentity')}} décrivant l'identité qui a été supprimée. Si l'identité n'a pas pu être trouvée ou si la fonctionnalité d'identités contextuelles n'est pas activée, la promesse est rejetée.

## Compatibilité du navigateur

{{Compat("webextensions.api.contextualIdentities.remove")}}

## Exemples

Cet exemple tente de supprimer l'identité contextuelle dont l'ID est "firefox-container-1" :

```js
function onRemoved(context) {
  if (!context) {
    console.error("Context not found");
  } else {
    console.log(`Removed identity: ${context.cookieStoreId}.`);
  }
}

function onError(e) {
  console.error(e);
}

browser.contextualIdentities.remove("firefox-container-1").
  then(onRemoved, onError);
```

{{WebExtExamples}}

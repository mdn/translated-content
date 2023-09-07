---
title: contextualIdentities.get()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/get
---

{{AddonSidebar()}}

Obtient des informations sur une identité contextuelle, compte tenu de son ID de cookie.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var getContext = browser.contextualIdentities.get(
  cookieStoreId, // string
);
```

### Paramètres

- `cookieStoreId`
  - : `string`. L'identifiant du cookie store de cette identité contextuelle. Étant donné que les identités contextuelles ont chacune leur propre magasin de cookies, cela sert d'identifiant pour l'identité contextuelle elle-même.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec un {{WebExtAPIRef('contextualIdentities.ContextualIdentity', 'ContextualIdentity')}} qui décrit l'identité. Si l'identité n'a pas pu être trouvée ou si la fonctionnalité d'identités contextuelles n'est pas activée, la promesse est rejetée.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Cet exemple tente de récupérer l'identité contextuelle dont l'ID est "firefox-container-1":

```js
function onGot(context) {
  if (!context) {
    console.error("Context not found");
  } else {
    console.log(`Name: ${context.name}`);
  }
}

function onError(e) {
  console.error(e);
}

browser.contextualIdentities.get("firefox-container-1").then(onGot, onError);
```

{{WebExtExamples}}

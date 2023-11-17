---
title: permissions.remove()
slug: Mozilla/Add-ons/WebExtensions/API/permissions/remove
---

{{AddonSidebar()}}

Demander d'abandonner les permissions listées dans l'objet {{WebExtAPIRef("permissions.Permissions")}}.

L'argument `Permissions` peut contenir soit une propriété `origins` ,qui est un tableau de [permissions d'hôte](/fr/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions) , ou une propriété `permissions`, qui est un tableau de [permissions d'API](/fr/Add-ons/WebExtensions/manifest.json/permissions#API_permissions), ou les deux. Les permissions doivent provenir de l'ensemble des permissions définies dans la clé [`optional_permissions`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) du manifest.json.

Il s'agit d'une fonction asynchrone qui renvoie une [`Promesse`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntaxe

```js
var removing = browser.permissions.remove(
  permissions, // Permissions object
);
```

### Paramètres

- `permissions`
  - : Un objet {{WebExtAPIRef("permissions.Permissions")}}.

### Valeur retournée

Une [`Promesse`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) qui sera remplie avec `true` si les permissions répertoriées dans l'argument `permissions` ont été supprimées, ou `false` dans le cas contraire.

## Exemples

Ce code ajoute un gestionnaire de clic qui supprime une permission donnée.

```js
const permissionToRemove = {
  permissions: ["history"],
};

function remove() {
  console.log("removing");
  browser.permissions.remove(permissionToRemove).then((result) => {
    console.log(result);
  });
}

document.querySelector("#remove").addEventListener("click", remove);
```

## Compatibilité des navigateurs

{{Compat}}

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.permissions`](https://developer.chrome.com/extensions/permissions).
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.

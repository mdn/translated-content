---
title: permissions.contains()
slug: Mozilla/Add-ons/WebExtensions/API/permissions/contains
---

{{AddonSidebar()}}

Vérifiez si l'extension a les permissions listées dans l'objet {{WebExtAPIRef("permissions.Permissions")}}.

L'argument `Permissions` peut contenir une propriété origine, qui est un tableau de [permissions hôtes](/fr/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions), ou une propriété `permissions` , qui est un tableau de [permissions API](/fr/Add-ons/WebExtensions/manifest.json/permissions#API_permissions), ou les deux.

Il s'agit d'une fonction asynchrone qui renvoie une [`Promesse`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise). La promesse est remplie avec true seulement si toute l'extension possède actuellement toutes les permissions données. Pour les permissions d'hôtes, si le modèle de permissions if the extension's permissions [pattern-match](/fr/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) the permissions listed in `origins`, then they are considered to match.

## Syntaxe

```js
var getContains = browser.permissions.contains(
  permissions, // Permissions object
);
```

### Paramètres

- `permissions`
  - : Un objet {{WebExtAPIRef("permissions.Permissions")}} .

### Valeur renvoyée

Une [`Promesse`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) qui sera remplie avec `true` si l'extension possède déjà toutes les permissions listées dans l'argument des `permissions` , ou `false` dans le cas contraire.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

```js
// Extension permissions are:
// "webRequest", "tabs", "*://*.mozilla.org/*"

var testPermissions1 = {
  origins: ["*://mozilla.org/"],
  permissions: ["tabs"],
};

browser.permissions.contains(testPermissions1).then((result) => {
  console.log(result); // true
});

var testPermissions2 = {
  origins: ["*://mozilla.org/"],
  permissions: ["tabs", "alarms"],
};

browser.permissions.contains(testPermissions2).then((result) => {
  console.log(result); // false, "alarms" doesn't match
});

var testPermissions3 = {
  origins: ["https://developer.mozilla.org/"],
  permissions: ["tabs", "webRequest"],
};

browser.permissions.contains(testPermissions3).then((result) => {
  console.log(result); // true: "https://developer.mozilla.org/"
}); // matches: "*://*.mozilla.org/*"

var testPermissions4 = {
  origins: ["https://example.org/"],
};

browser.permissions.contains(testPermissions4).then((result) => {
  console.log(result); // false, "https://example.org/"
}); // does not match
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.permissions`](https://developer.chrome.com/extensions/permissions).
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.

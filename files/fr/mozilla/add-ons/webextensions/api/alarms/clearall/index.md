---
title: alarms.clearAll()
slug: Mozilla/Add-ons/WebExtensions/API/alarms/clearAll
---

{{AddonSidebar}}

Cette méthode supprime toutes les alarmes actives. C'est une fonction asynchrone qui renvoie une promesse {{jsxref("Promise")}}.

## Syntaxe

```js
var clearAlarms = browser.alarms.clearAll();
```

### Paramètres

Aucun.

### Valeur de retour

Une promesse ({{jsxref("Promise")}}) qui sera tenue avec une valeur booléenne. Ce dernier vaudra `true` si certaines alarmes ont bien été effacées et `false` sinon. On notera que Chrome renvoie toujours `true`.

## Exemples

```js
function onClearedAll(wasCleared) {
  console.log(wasCleared); // true/false
}

var clearAlarms = browser.alarms.clearAll();
clearAlarms.then(onClearedAll);
```

{{WebExtExamples}}

## Compatibilité des navigateurs

{{Compat}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.alarms`](https://developer.chrome.com/extensions/alarms).
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.

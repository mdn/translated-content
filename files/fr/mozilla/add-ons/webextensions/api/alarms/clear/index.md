---
title: alarms.clear()
slug: Mozilla/Add-ons/WebExtensions/API/alarms/clear
---

{{AddonSidebar}}

Cette méthode supprime une alarme à partir du nom passé en argument. Il s'agit d'une fonction asynchrone qui renvoie une {{jsxref("Promise")}}.

## Syntaxe

```js
var clearAlarm = browser.alarms.clear(
  name, // string
);
```

### Paramètres

- `name`{{optional_inline}}
  - : `string`. Le nom de l'alarme à supprimer. Si le paramètre n'est pas fourni, c'est la chaîne vide "" qui sera utilisée.

### Valeur de retour

Une promesse ({{jsxref("Promise")}}) qui sera tenue avec un booléen. Ce booléen vaudra `true` si l'alarme a bien été effacée et `false` sinon.

## Exemples

```js
function onCleared(wasCleared) {
  console.log(wasCleared); // true/false
}

var clearAlarm = browser.alarms.clear("my-periodic-alarm");
clearAlarm.then(onCleared);
```

{{WebExtExamples}}

## Compatibilité des navigateurs

{{Compat}}

**Remerciements :**

Cette API est basée sur l'API Chromium [`chrome.alarms`](https://developer.chrome.com/extensions/alarms).

Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.

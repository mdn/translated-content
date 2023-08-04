---
title: getAll()
slug: Mozilla/Add-ons/WebExtensions/API/commands/getAll
---

{{AddonSidebar()}}

Obient toutes les commandes pour l'exécution que vous avez enregistré à l'aide d'une des [`commandes` clef du manifest.json](/fr/Add-ons/WebExtensions/manifest.json/commands).

Les commandes sont renvoyées sous la forme d'un tableau d'objets {{WebExtAPIRef('commands.Command')}}. Altenativement, si vous utilisez la version de base promise de l'API, `browser.commands.getAll()`, les commandes sont passées dans l'argument `onFulfilled` à [`Promise.then()`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise/then).

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var getCommands = browser.commands.getAll();
```

### Paramètres

Aucun.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera accompli avec un tableau d'objets `{{WebExtAPIRef('commands.Command')}}`, un pour chaque commande enregistrée pour l'extension. Si aucune n'a été enregistrée, le tableau sera vide.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

```js
function logCommands(commands) {
  commands.forEach(function (command) {
    console.log(command);
  });
}

var getCommands = browser.commands.getAll();
getCommands.then(logCommands);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.commands`](https://developer.chrome.com/extensions/commands).
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.

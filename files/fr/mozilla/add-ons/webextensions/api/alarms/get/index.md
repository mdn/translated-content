---
title: alarms.get()
slug: Mozilla/Add-ons/WebExtensions/API/alarms/get
tags:
  - API
  - Add-ons
  - Extensions
  - Méthode
  - Non-standard
  - Reference
  - WebExtensions
  - alarms
  - get
translation_of: Mozilla/Add-ons/WebExtensions/API/alarms/get
---
{{AddonSidebar}}

Cette méthode permet d'obtenir une alarme en fonction de son nom. Cette fonction est une fonction asynchrone qui renvoie une promesse ({{jsxref("Promise")}}).

## Syntaxe

```js
var getAlarm = browser.alarms.get(
  name  // optional string
)
```

### Paramètres

- `name`{{optional_inline}}
  - : `string`. Le nom de l'alarme qu'on souhaite récupérer. La valeur par défaut, utilisée si aucun argument n'est fournie, sera la chaîne vide (`""`).

### Valeur de retour

Une promesse ({{jsxref("Promise")}}) qui sera tenue avec un objet {{WebExtAPIRef('alarms.Alarm', "Alarm")}}. Cette valeur correspond à l'alarme dont le nom correspond au paramètre `name`. Si aucune alarme ne correspond, la valeur renvoyée sera `undefined`.

## Exemples

```js
function gotAlarm(alarm) {
  if (alarm) {
    console.log(alarm.name);
  }
}

var getAlarm = browser.alarms.get("my-periodic-alarm");
getAlarm.then(gotAlarm);
```

{{WebExtExamples}}

## Compatibilité du navigateur

{{Compat("webextensions.api.alarms.get")}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.alarms`](https://developer.chrome.com/extensions/alarms).
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.

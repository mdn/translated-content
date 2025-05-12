---
title: alarms.getAll()
slug: Mozilla/Add-ons/WebExtensions/API/alarms/getAll
---

{{AddonSidebar}}

Obtient toutes les alarmes actives pour le poste.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntaxe

```js
var getAlarms = browser.alarms.getAll();
```

### Paramètres

Aucun

### Valeur de retour

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) dont la valeur de résolution sera un tableau d'objets [`Alarm`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/alarms/Alarm). Chaque élément de ce tableau représente une alarme active de l'extension. Si aucune alarme n'est active, le tableau sera vide.

## Exemples

```js
function gotAll(alarms) {
  for (var alarm of alarms) {
    console.log(alarm.name);
  }
}

var getAlarms = browser.alarms.getAll();
getAlarms.then(gotAll);
```

{{WebExtExamples}}

## Compatibilité des navigateurs

{{Compat}}

> [!NOTE]
>
> Cette API est basée sur l'API Chromium [`chrome.alarms`](https://developer.chrome.com/docs/extensions/reference/api/alarms).

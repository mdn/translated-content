---
title: alarms.onAlarm
slug: Mozilla/Add-ons/WebExtensions/API/alarms/onAlarm
---

{{AddonSidebar}}

Cet évènement est déclenché lorsque l'alarme se déclenche.

## Syntaxe

```js
browser.alarms.onAlarm.addListener(listener);
browser.alarms.onAlarm.removeListener(listener);
browser.alarms.onAlarm.hasListener(listener);
```

Cet évènement possède trois méthodes :

- `addListener(listener)`
  - : Cette méthode ajoute un gestionnaire à l'évènement.
- `removeListener(listener)`
  - : Cette méthode retire le gestionnaire d'évènement passé en argument.
- `hasListener(listener)`
  - : Cette méthode permet de vérifier si le gestionnaire d'évènement passé en argument est enregistré : elle renvoie `true` s'il est déjà présent et `false` sinon.

## Syntaxe addListener

### Paramètres

- `listener`

  - : La fonction qui sera appelée lorsque l'événement se produira. La fonction recevra les arguments suivants :

    - `alarm`
      - : {{WebExtAPIRef('alarms.Alarm')}}. L'alarme qui s'est déclenchée. La propriété `Alarm.name` pourra être utilisée afin de déterminer l'alarme qui s'est déclenchée.

## Exemples

Voici un exemple illustrant ce qui se produit quand l'alarme se déclenche

```js
function handleAlarm(alarmInfo) {
  console.log("L'alarme " + alarmInfo.name + " s'est déclenchée");
}

browser.alarms.onAlarm.addListener(handleAlarm);
```

{{WebExtExamples}}

## Compatibilité des navigateurs

{{Compat}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.alarms`](https://developer.chrome.com/extensions/alarms).
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.

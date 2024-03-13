---
title: alarms.Alarm
slug: Mozilla/Add-ons/WebExtensions/API/alarms/Alarm
---

{{AddonSidebar}}

Cette interface fournit des informations sur une alarme donnée. Cet objet est retourné à partir de {{WebExtAPIRef('alarms.get()')}} et {{WebExtAPIRef('alarms.getAll()')}} et est passé au gestionnaire d'évènement {{WebExtAPIRef('alarms.onAlarm')}}.

## Type

Les valeurs de ce type sont des objets contenant les propriétés suivantes :

- `name`
  - : `string` Une chaîne de caractères contenant le nom de l'alarme. Ce nom provient de celui qui a été fourni à la méthode {{WebExtAPIRef('alarms.create()')}} lors de la création de l'alarme.
- `scheduledTime`
  - : `double` Un nombre qui représente l'heure à laquelle l'alarme doit être déclenchée, exprimée [en nombre de millisecondes depuis epoch](https://fr.wikipedia.org/wiki/Heure_Unix).
- `periodInMinutes`{{optional_inline}}
  - : `double` Un nombre qui, s'il n'est pas `null`, indique que l'alarme est périodique et fournit la période.

## Compatibilité des navigateurs

{{Compat}}

{{WebExtExamples}}

**Remerciements :**

Cette API est basée sur l'API Chromium [`chrome.alarms`](https://developer.chrome.com/extensions/alarms).

Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.

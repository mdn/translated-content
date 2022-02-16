---
title: alarms
slug: Mozilla/Add-ons/WebExtensions/API/alarms
tags:
  - API
  - Besoins Privilèges
  - Extensions
  - Interface
  - Reference
  - WebExtensions
  - alarms
translation_of: Mozilla/Add-ons/WebExtensions/API/alarms
---
{{AddonSidebar}}

Programmer le code pour qu'il soit exécuté à un moment précis dans le futur. C'est comme [`setTimeout()`](/fr/docs/Web/API/WindowTimers/setTimeout) and [`setInterval()`](/fr/docs/Web/API/WindowTimers/setInterval) sauf que ces fonctions ne fonctionnent pas avec les pages d'arrière-plan qui sont chargées à la demande. Les alarmes ne persistent pas d'une session à l'autre du navigateur

Pour pouvoir utiliser cette API, vous devez disposer de la [permission](/fr/Add-ons/WebExtensions/manifest.json/permissions) `"alarms"`.

## Types

- {{WebExtAPIRef("alarms.Alarm")}}
  - : Ce type permet d'obtenir des informations à propos d'une alarme donnée.

## Méthodes

- {{WebExtAPIRef("alarms.create()")}}
  - : Cette fonction permet de créer une nouvelle alarme.
- {{WebExtAPIRef("alarms.get()")}}
  - : Cette fonction permet de récupérer une alarme donnée en fonction de son nom.
- {{WebExtAPIRef("alarms.getAll()")}}
  - : Cette fonction permet de récupérer l'ensemble des alarmes qui sont planifiées.
- {{WebExtAPIRef("alarms.clear()")}}
  - : Cette fonction permet de supprimer une alarme donnée en fonction de son nom.
- {{WebExtAPIRef("alarms.clearAll()")}}
  - : Cette fonction permet de supprimer l'ensemble des alarmes qui sont planifiées.

## Évènements

- {{WebExtAPIRef("alarms.onAlarm")}}
  - : Cet évènement est déclenché lorsque l'alarme s'éteint.

{{WebExtExamples("h2")}}

## Compatibilité des navigateurs

{{Compat("webextensions.api.alarms")}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.alarms`](https://developer.chrome.com/extensions/alarms).
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.

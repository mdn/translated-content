---
title: omnibox.OnInputEnteredDisposition
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/OnInputEnteredDisposition
tags:
  - API
  - Add-ons
  - Extensions
  - OnInputEnteredDisposition
  - Reference
  - Type
  - WebExtensions
  - omnibox
translation_of: Mozilla/Add-ons/WebExtensions/API/omnibox/OnInputEnteredDisposition
---
{{AddonSidebar()}}

Le type **`omnibox.OnInputEnteredDisposition`** décrit comment l'extension doit gérer une sélection d'utilisateur à partir des suggestions dans la liste déroulante de la barre d'adresse.

Il est passé dans l'écouteur {{WebExtAPIRef("omnibox.onInputEntered")}} avec la sélection elle-même.

## Type

Les valeurs de ce type sont des chaînes. Ils peuvent prendre l'une des valeurs suivantes :

- "currentTab"
  - : Ouvrez la sélection dans l'onglet actuel.
- "newForegroundTab"
  - : Ouvrez la sélection dans un nouvel onglet et placez ce nouvel onglet au premier plan.
- "newBackgroundTab"
  - : Ouvrez la sélection dans un nouvel onglet d'arrière-plan, en conservant l'onglet en cours au premier plan.

## Compatibilité du navigateur

{{Compat("webextensions.api.omnibox.OnInputEnteredDisposition")}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.omnibox`](https://developer.chrome.com/extensions/omnibox).
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.

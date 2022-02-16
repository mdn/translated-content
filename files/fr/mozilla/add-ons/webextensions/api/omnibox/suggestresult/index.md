---
title: omnibox.SuggestResult
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/SuggestResult
tags:
  - API
  - Add-ons
  - Extensions
  - Reference
  - SuggestResult
  - Type
  - WebExtensions
  - omnibox
translation_of: Mozilla/Add-ons/WebExtensions/API/omnibox/SuggestResult
---
{{AddonSidebar()}}

Le type **`omnibox.SuggestResult`** définit une suggestion unique que l'extension peut ajouter à la liste déroulante de la barre d'adresse.

L'écouteur d'événement {{WebExtAPIRef("omnibox.onInputChanged")}} de l'extension reçoit un rappel. Pour remplir la liste déroulante de la barre d'adresse en réponse à l'entrée de l'utilisateur,  l'extension peut transmettre un tableau d'objets `omnibox.SuggestResult` dans ce rappel.

## Type

Les valeurs de ce type sont des objets. Ils ont les propriétés suivantes :

- `content`
  - : C'est la valeur qui apparaîtra dans la barre d'adresse elle-même lorsque l'utilisateur mettra cette suggestion en évidence dans la liste déroulante. C'est également la chaîne envoyée à l'écouteur d'événement  {{WebExtAPIRef("omnibox.onInputEntered")}} si l'utilisateur sélectionne cette suggestion. Si la chaîne est la même que celle que l'utilisateur a déjà tapée, cette entrée n'apparaîtra pas dans la liste déroulante.
- `description`
  - : C'est la chaîne qui est affichée dans la liste déroulante de la barre d'adresse.

## Compatibilité du navigateur

{{Compat("webextensions.api.omnibox.SuggestResult")}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.omnibox`](https://developer.chrome.com/extensions/omnibox).
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.

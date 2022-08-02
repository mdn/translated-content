---
title: Permissions
slug: Mozilla/Add-ons/WebExtensions/API/permissions/Permissions
tags:
  - API
  - Add-ons
  - Permissions
  - Reference
  - Type
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/API/permissions/Permissions
---
{{AddonSidebar()}}

Un objet `Permissions` représente une collection de permissions.

## Type

Un {{jsxref("object")}} avec les propriétés suivantes :

- `origins`{{optional_inline}}
  - : Un tableau de [modèles de correspondance](/fr/Add-ons/WebExtensions/Match_patterns), représentant les [permissions de l'hôte](/fr/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions).
- `permissions`{{optional_inline}}
  - : Un tableau de permissions nommées, y compris les [permissions d'API](/fr/Add-ons/WebExtensions/manifest.json/permissions#API_permissions) et les [permissions du presse-papiers](/fr/Add-ons/WebExtensions/manifest.json/permissions#Clipboard_access).

## Compatibilité du navigateur

{{Compat("webextensions.api.permissions.Permissions")}}

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.permissions`](https://developer.chrome.com/extensions/permissions).
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.

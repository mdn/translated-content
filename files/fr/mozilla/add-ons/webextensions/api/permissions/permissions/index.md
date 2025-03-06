---
title: Permissions
slug: Mozilla/Add-ons/WebExtensions/API/permissions/Permissions
---

{{AddonSidebar}}

Un objet `Permissions` représente une collection de permissions.

## Type

Un {{jsxref("object")}} avec les propriétés suivantes :

- `origins`{{optional_inline}}
  - : Un tableau de [modèles de correspondance](/fr/docs/Mozilla/Add-ons/WebExtensions/Match_patterns), représentant les [permissions de l'hôte](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions).
- `permissions`{{optional_inline}}
  - : Un tableau de permissions nommées, y compris les [permissions d'API](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) et les [permissions du presse-papiers](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboard_access).

## Compatibilité des navigateurs

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
>
> Cette API est basée sur l'API Chromium [`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/api/permissions).
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.

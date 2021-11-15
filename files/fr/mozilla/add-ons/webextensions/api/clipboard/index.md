---
title: clipboard
slug: Mozilla/Add-ons/WebExtensions/API/clipboard
tags:
  - API
  - Add-ons
  - Clipboard
  - Extensions
  - Reference
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/API/clipboard
---
{{AddonSidebar}}

L'API `presse-papiers` permet à une extension de copier des éléments dans le presse papier du système. Actuellement l'API ne prend en charge que la copie d'images, mais elle est destinée à prendre en charge la copie de texte et HTML dans l'avenir.

Cette API WebExtension existe principalement parce que l'API standard du presse-papiers Web [ne prend pas en charge l'écriture d'images dans le presse-papiers](https://w3c.github.io/clipboard-apis/#writing-to-clipboard). Cette API peut être dépréciée une fois que le support de l'API Clipboard pour les contenus non textuels du presse-papiers est entré en usage général.

La lecture depuis le presse-papiers n'est pas prise en charge par cette API, car le presse-papiers peut déjà être lu à l'aide des API de plate-forme Web standard. Voir [Interaction avec le presse-papier](/fr/Add-ons/WebExtensions/Interact_with_the_clipboard#Reading_from_the_clipboard).

Cette API est basée sur l'API de [`clipboard`](https://developer.chrome.com/apps/clipboard) de Chrome, mais cette API n'est disponible que pour les applications Chrome et non pour les extensions.

Pour utiliser cette API, vous devez avoir la [permission](/fr/Add-ons/WebExtensions/manifest.json/permissions) `"clipboardWrite"`.

## Fonctions

- {{WebExtAPIRef("clipboard.setImageData()")}}
  - : Copiez une image dans le presse-papiers.

## Compatibilité du navigateur

{{Compat("webextensions.api.clipboard", 1, 1)}} {{WebExtExamples("h2")}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.clipboard`](https://developer.chrome.com/apps/clipboard).

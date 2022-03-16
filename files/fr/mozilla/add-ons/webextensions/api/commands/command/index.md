---
title: Command
slug: Mozilla/Add-ons/WebExtensions/API/commands/Command
tags:
  - API
  - Add-ons
  - Command
  - Extensions
  - Non-standard
  - Reference
  - Type
  - WebExtensions
  - commands
translation_of: Mozilla/Add-ons/WebExtensions/API/commands/Command
---
{{AddonSidebar()}}

Information sur une commande. Cela contient les informations spécifiées pour la commande dans la  [`commande` clef manifest.json](/fr/Add-ons/WebExtensions/manifest.json/commands).

Un tableau de ces objets est renvoyé par {{WebExtAPIRef('commands.getAll()')}}.

## Type

Les valeurs de ce type sont des objets. Ils contiennent les propriétés suivantes :

- `name`{{optional_inline}}
  - : `string`. Nom de la commande. Cela sera passé dans l'écouteur de l'événement  {{WebExtAPIRef('commands.onCommand')}}.
- `description`{{optional_inline}}
  - : `string`. Description de cette commande. Ceci est principalement utilisé pour expliquer à l'utilisateur ce que cette commande fait.
- `shortcut`{{optional_inline}}
  - : `string`. clef(s) utilisée pour exécuter cette commande , spécifiée comme une chaîne comme "Ctrl+Shift+Y".

## Compatibilité du navigateur

{{Compat("webextensions.api.commands.Command")}}

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.commands`](https://developer.chrome.com/extensions/commands).

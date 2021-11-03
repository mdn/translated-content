---
title: Window.controllers
slug: Web/API/Window/controllers
tags:
  - API
  - HTML DOM
  - NeedMarkupWork
  - NeedSpecTavle
  - NeedsCompatTable
  - Property
  - Reference
  - Window
translation_of: Web/API/Window/controllers
---
{{APIRef}}{{non-standard_header}}

Retourne les contrôleurs XUL de la fenêtre chrome.

## Syntaxe

    controleurs = window.controllers

- `controleurs` est un objet de type [`XULControllers`](/en-US/docs/XULControllers) ([`nsIControllers`](/en-US/docs/XPCOM_Interface_Reference/nsIControllers)).

## Spécification

Spécifique à XUL. Ne fait pas partie de la spécification.

Par défaut, le contrôleur d'une fenêtre contient le code qui prend en charge les commandes globales de la fenêtre.

Le code Chrome peut ajouter des contrôleurs (à utiliser conjointement avec les fonctions goDoCommand et goUpdateCommand dans globalOverlay.js).

Cependant, les contrôleurs ajoutés doivent être explicitement supprimés lorsque la fenêtre est déchargée, car cela n'est pas fait automatiquement.
Chaque suppression manquante peut provoquer le

[bug 415775](https://bugzilla.mozilla.org/show_bug.cgi?id=415775):

    ASSERTION: XPConnect is being called on a scope without a 'Components' property!

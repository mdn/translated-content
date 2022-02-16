---
title: Window.onpaint
slug: Web/API/Window/onpaint
tags:
  - API
  - Event Handler
  - HTML DOM
  - Non-standard
  - Propriété
translation_of: Web/API/Window/onpaint
---
{{ ApiRef() }} {{Non-standard_header}}

**`Window.onpaint`** est un gestionnaire d'événements pour l'événement `paint` sur la fenêtre.

> **Attention :** Ne fonctionne pas dans les applications basées sur Gecko actuellement, voir la section Notes!

## Syntaxe

    window.onpaint = funcRef;

- `funcRef` est une fonction de gestionnaire.

## Notes

`onpaint` ne fonctionne pas actuellement, et il est douteux que cet événement fonctionne du tout, voir {{ Bug(239074) }}.

L'événement `paint` est déclenché lorsque la fenêtre est rendue. Cet événement se produit après l'événement {{Event ("load")}} pour une fenêtre, et se reproduit chaque fois que la fenêtre doit être restituée, par exemple lorsqu'une autre fenêtre l'obscurcit et est ensuite effacée.

## Spécification

Cela ne fait partie d'aucune spécification.

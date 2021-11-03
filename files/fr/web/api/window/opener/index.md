---
title: window.opener
slug: Web/API/Window/opener
tags:
  - DOM
  - DOM_0
  - Référence_du_DOM_Gecko
translation_of: Web/API/Window/opener
---
{{ ApiRef() }}

### Résumé

Renvoie une référence vers la fenêtre qui a ouvert la fenêtre courante.

### Syntaxe

    refObj = window.opener

### Exemple

     if window.opener != indexWin {
         referToTop(window.opener);
     }

### Notes

Lorsqu'une fenêtre est ouverte depuis une autre fenêtre, elle conserve une référence à cette première fenêtre dans `window.opener`. Si la fenêtre courante n'a pas été ouverte par une autre fenêtre, la méthode renvoie `null`.

### Spécification

{{ DOM0() }}

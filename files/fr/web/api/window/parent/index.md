---
title: window.parent
slug: Web/API/Window/parent
tags:
  - DOM
  - DOM_0
  - Référence_du_DOM_Gecko
translation_of: Web/API/Window/parent
---
{{ ApiRef() }}

### Résumé

Renvoie une référence à la fenêtre parente ou cadre parent de la fenêtre courante ou du cadre courant.

### Syntaxe

    refObj = window.parent

### Exemple

    if (window.parent != window.top) {
         // on se trouve dans une imbrication de cadres
    }

### Notes

Si une fenêtre n'a pas de parent, sa propriété **parent** est une référence vers elle-même.

Lorsqu'une fenêtre est chargée dans un ensemble de cadres (frameset), son parent est le cadre parent (c'est-à-dire le document dans lequel se trouve l'élément `<frame>` qui fait référence à la fenêtre).

### Spécification

{{ DOM0() }}

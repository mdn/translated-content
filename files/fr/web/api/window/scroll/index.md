---
title: window.scroll
slug: Web/API/Window/scroll
translation_of: Web/API/Window/scroll
---
{{ ApiRef() }}

Fait glisser la fenêtre vers une position particulière du document

### Syntax

    window.scroll(x-coord,y-coord)

### Parameters

- `x-coord` est la position horizontale du pixel que vous voulez voir apparaitre en haut à gauche de l’écran.
- `y-coord` est la position verticale du pixel que vous voulez voir apparaitre en haut à gauche de l’écran.

### Example

     // Déplace la fenêtre 100px plus bas
     <button onClick="scroll(0, 100);">click to scroll down 100 pixels</button>

### Notes

[window.scrollTo](scrollTo) a un effet identique à cette méthode. Pour se déplacer par pas dans la page, utilisez [window.scrollBy](scrollBy). Jetez aussi un œil à [window.scrollByLines](scrollByLines) et [window.scrollByPages](scrollByPages).

### Specification

DOM Level 0. Hors spécification.

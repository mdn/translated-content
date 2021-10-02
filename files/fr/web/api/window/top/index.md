---
title: Window.top
slug: Web/API/Window/top
tags:
  - API
  - HTML DOM
  - NeedsExample
  - Propriété
  - Reference
  - Window
translation_of: Web/API/Window/top
---
{{APIRef}}

Renvoie une référence à la fenêtre la plus haute dans la hiérarchie des fenêtres

## Syntaxe

    var topWindow = window.top;

## Notes

Là où la propriété {{domxref("window.parent")}} renvoie le parent immédiat de la fenêtre courante, `window.top` renvoie la fenêtre la plus haute dans la hiérarchie des objets de fenêtre.

Cette propriété est particulièrement utile lorsque vous avez affaire à une fenêtre qui se trouve dans une subframe d'un ou de plusieurs parents, et que vous souhaitez accéder au jeu de frameset de niveau supérieur.

## Spécifications

| Spécification                                                                            | Statut                           | Commentaire            |
| ---------------------------------------------------------------------------------------- | -------------------------------- | ---------------------- |
| {{SpecName('HTML WHATWG', 'browsers.html#dom-top', 'window.top')}} | {{Spec2('HTML WHATWG')}} |                        |
| {{SpecName('HTML5 W3C', 'browsers.html#dom-top', 'window.top')}}     | {{Spec2('HTML5 W3C')}}     | Spécification initiale |

## Compatibilité des navigateurs

{{Compat("api.Window.top")}}

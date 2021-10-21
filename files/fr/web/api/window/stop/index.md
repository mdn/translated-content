---
title: Window.stop()
slug: Web/API/Window/stop
tags:
  - API
  - DOM
  - HTML DOM
  - Méthode
  - Reference
  - Window
  - stop
translation_of: Web/API/Window/stop
---
{{APIRef}}

**`window.stop()`** arrête le chargment des ressources supplémentaires dans le contexte de navigation actuel, ce qui équivaut au bouton d'arrêt dans le navigateur.

En raison de la manière dont les scripts sont exécutés, cette méthode ne peut pas interrompre le chargement de son document parent, mais elle arrêtera ses images, nouvelles fenêtres et autres objets en cours de chargement.

## Syntaxe

    window.stop()

## Exemple

```js
window.stop();
```

## Spécification

| Spécifications                                                                                       | Statut                           | Commentaires |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | ------------ |
| {{SpecName('HTML WHATWG','browsers.html#dom-window-stop','Window.stop()')}} | {{Spec2('HTML WHATWG')}} |              |
| {{SpecName('HTML5 W3C', 'browsers.html#dom-window-stop', 'Window.stop')}}     | {{Spec2('HTML5 W3C')}}     |              |

## Compatibilité des navigateurs

{{Compat("api.Window.stop")}}

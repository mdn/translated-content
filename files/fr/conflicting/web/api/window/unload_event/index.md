---
title: WindowEventHandlers.onunload
slug: conflicting/Web/API/Window/unload_event
tags:
  - API
  - Propriétés
  - Reference
  - WindowEventHandlers
translation_of: Web/API/WindowEventHandlers/onunload
original_slug: Web/API/WindowEventHandlers/onunload
---
{{APIRef("HTML DOM")}}

L'événement **`unload`** est déclenché lorsque le contenu et les ressources sont déchargés à la fermeture de la fenêtre. Le processus de suppression des ressources se fait _après_ que l'événement `unload `a eu lieu.

Les navigateurs équipés d'un bloqueur de pop-up vont ignorer tout appel de `window.open()` lancé depuis onunload.

## Syntaxe

    window.addEventListener("unload", function(event) { ... });
    window.onunload = function(event) { ... };

Généralement, mieux vaut utiliser {{domxref("EventTarget.addEventListener", "window.addEventListener()")}} et l'événement {{event("unload")}} plutôt que `onunload`.

## Spécifications

| Spécification                                                                                    | État                             | Commentaires |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ------------ |
| {{SpecName('HTML WHATWG', '#handler-window-onunload', 'onunload')}}         | {{Spec2('HTML WHATWG')}} |              |
| {{SpecName('HTML5.1', '#windoweventhandlers', 'GlobalEventHandlers')}}     | {{Spec2('HTML5.1')}}     |              |
| {{SpecName("HTML5 W3C", "#windoweventhandlers", "GlobalEventHandlers")}} | {{Spec2('HTML5 W3C')}}     |              |

## Compatibilité des navigateurs

{{Compat("api.WindowEventHandlers.onunload")}}

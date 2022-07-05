---
title: window.cancelIdleCallback()
slug: Web/API/Window/cancelIdleCallback
translation_of: Web/API/Window/cancelIdleCallback
---
{{APIRef}}{{SeeCompatTable}}

La méthode **`window.cancelIdleCallback()`** annule une fonction précedemment planifiée via {{domxref("window.requestIdleCallback()")}}.

## Syntaxe

    window.cancelIdleCallback(idleCallbackId);

### Paramètres

- idleCallbackId
  - : L'entier long non-signé retourné par {{domxref("window.requestIdleCallback()")}}.

## Spécifications

| Spécification                                | Status                                   | Commentaire          |
| -------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('Background Tasks')}} | {{Spec2('Background Tasks')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Window.cancelIdleCallback")}}

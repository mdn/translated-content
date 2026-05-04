---
title: "Window : méthode cancelIdleCallback()"
short-title: cancelIdleCallback()
slug: Web/API/Window/cancelIdleCallback
l10n:
  sourceCommit: eb289996538d1242cd7eaa54cbd9e20da0cb908c
---

{{APIRef}}

La méthode **`cancelIdleCallback()`** de l'interface {{DOMxRef("Window")}} annule une fonction de rappel précédemment planifiée avec {{DOMxRef("Window.requestIdleCallback()")}}.

## Syntaxe

```js-nolint
cancelIdleCallback(handle)
```

### Paramètres

- `handle`
  - : L'identifiant retourné par l'appel à {{DOMxRef("Window.requestIdleCallback()")}} qui a généré la fonction de rappel.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

Voir notre [exemple complet](/fr/docs/Web/API/Background_Tasks_API#exemple) dans l'article [L'API Planification coopérative des tâches en arrière-plan](/fr/docs/Web/API/Background_Tasks_API).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

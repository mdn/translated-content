---
title: "Window : méthode requestIdleCallback()"
short-title: requestIdleCallback()
slug: Web/API/Window/requestIdleCallback
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML DOM")}}

La méthode **`requestIdleCallback()`** de l'interface {{DOMxRef("Window")}} mémorise une fonction qui sera appelée lorsque le navigateur n'aura plus aucune tâche critique à exécuter. Cela permet aux développeur·euse·s de réaliser des travaux en arrière-plan et à faible priorité sur le processus principal, sans impacter les évènements sensibles à la latence tels que l'animation et la réponse aux entrées. Les fonctions sont généralement appelées dans l'ordre premier entré, premier sorti&nbsp;; cependant, les rappels ayant un `timeout` défini peuvent être appelés hors ordre si nécessaire pour s'exécuter avant l'expiration du délai.

Vous pouvez appeler `requestIdleCallback()` à l'intérieur d'une fonction de rappel inoccupée pour planifier un autre rappel qui se produira au plus tôt lors du prochain passage dans la boucle d'évènements.

> [!NOTE]
> Il est fortement recommandé de définir une option `timeout` pour les travaux requis, sinon il est possible que plusieurs secondes s'écoulent avant que le rappel ne soit exécuté.

## Syntaxe

```js-nolint
requestIdleCallback(callback)
requestIdleCallback(callback, options)
```

### Paramètres

- `callback`
  - : Une référence à une fonction qui doit être appelée dans un futur proche, lorsque la boucle d'évènements est inoccupée. La fonction de rappel reçoit un objet {{DOMxRef("IdleDeadline")}} décrivant la quantité de temps disponible et si la fonction de rappel a été exécutée en raison de l'expiration de la période de délai.
- `options` {{Optional_Inline}}
  - : Objet contenant des paramètres de configuration optionnels. Seule une propriété est actuellement définie&nbsp;:
    - `timeout`
      - : Si le nombre de millisecondes représenté par ce paramètre s'est écoulé et que la fonction de rappel n'a pas encore été appelée, alors une tâche pour exécuter la fonction de rappel est mise en file d'attente dans la boucle d'événements (même si cela risque de provoquer un impact négatif sur les performances). `timeout` doit être une valeur positive ou il est ignoré.

### Valeur de retour

Un ID qui peut être utilisé pour annuler le rappel en le passant à la méthode {{DOMxRef("window.cancelIdleCallback()")}}.

## Exemples

Voir notre [exemple complet](/fr/docs/Web/API/Background_Tasks_API#exemples) dans l'article [de l'API de planification coopérative des tâches en arrière-plan](/fr/docs/Web/API/Background_Tasks_API).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Window.cancelIdleCallback()")}}
- L'interface {{DOMxRef("IdleDeadline")}}
- La méthode {{DOMxRef("Window.setTimeout()")}}
- La méthode {{DOMxRef("Window.setInterval()")}}
- La méthode {{DOMxRef("Window.requestAnimationFrame()")}}

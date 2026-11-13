---
title: "Window : méthode clearInterval()"
short-title: clearInterval()
slug: Web/API/Window/clearInterval
l10n:
  sourceCommit: 1c858224f09f1c9c85b9e3f7bd535e72137ea1a6
---

{{APIRef("HTML DOM")}}

La méthode **`clearInterval()`** de l'interface {{DOMxRef("Window")}} annule une action répétée programmée qui a été précédemment établie par un appel à {{DOMxRef("Window.setInterval", "setInterval()")}}. Si le paramètre fourni n'identifie pas une action précédemment établie, cette méthode ne fait rien.

## Syntaxe

```js-nolint
clearInterval(intervalID)
```

### Paramètres

- `intervalID`
  - : L'identifiant de l'action répétée que vous souhaitez annuler. Cet identifiant a été retourné par l'appel correspondant à `setInterval()`.

Il est utile de noter que le pool d'identifiants utilisé par {{DOMxRef("Window.setInterval", "setInterval()")}} et {{DOMxRef("Window.setTimeout", "setTimeout()")}} est partagé, ce qui signifie que vous pouvez techniquement utiliser `clearInterval()` et {{DOMxRef("Window.clearTimeout", "clearTimeout()")}} de façon interchangeable.
Cependant, pour plus de clarté, il est préférable d'éviter de le faire.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

Voir {{DOMxRef("Window.setInterval", "setInterval()")}} pour des exemples.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Window.setInterval()")}}
- La méthode {{DOMxRef("WorkerGlobalScope.clearInterval()")}}
- La méthode {{DOMxRef("Window.clearTimeout()")}}
- La méthode {{DOMxRef("Window.cancelAnimationFrame()")}}

---
title: "Window : méthode setImmediate()"
short-title: setImmediate()
slug: Web/API/Window/setImmediate
l10n:
  sourceCommit: c7460aab1397829c109a88e3a58fed9b7ef9c0c5
---

{{APIRef("HTML DOM")}}{{Non-standard_Header}}

La méthode **`setImmediate()`** de l'interface {{DOMxRef("Window")}} est utilisée pour fragmenter les opérations de longue durée et exécuter une fonction de rappel immédiatement après que le navigateur a terminé d'autres opérations telles que les évènements et les mises à jour de l'affichage.

## Syntaxe

```js-nolint
setImmediate(func)
setImmediate(func, param1)
setImmediate(func, param1, param2)
setImmediate(func, param1, param2, /* …, */ paramN)
```

### Paramètres

- `func`
  - : La fonction que vous souhaitez appeler.

- `param1`, …, `paramN`
  - : Tous les paramètres sont passés directement à votre fonction.

### Valeur de retour

L'ID de l'action immédiate qui peut être utilisé plus tard avec {{DOMxRef("window.clearImmediate")}}.

## Notes

La méthode {{DOMxRef("Window.clearImmediate", "clearImmediate()")}} peut être utilisée pour annuler les actions immédiates, tout comme {{DOMxRef("Window.clearTimeout", "clearTimeout()")}} pour {{DOMxRef("Window.setTimeout", "setTimeout()")}}.

Cette méthode peut être utilisée à la place de la méthode `setTimeout(fn, 0)` pour exécuter des [opérations lourdes <sup>(angl.)</sup>](https://humanwhocodes.com/blog/2009/08/11/timed-array-processing-in-javascript/).

Cette fonctionnalité peut être simulée de plusieurs manières&nbsp;:

- {{DOMxRef("Window.postMessage", "postMessage()")}} peut être utilisé pour déclencher un rappel immédiat mais cédant.
- {{DOMxRef("MessageChannel")}} peut être utilisé de manière fiable à l'intérieur des Web Workers tandis que la sémantique de postMessage signifie qu'il ne peut pas être utilisé là-bas.
- `setTimeout(fn, 0)` _peut_ potentiellement être utilisé, cependant comme il est limité à 4ms pour les minuteries imbriquées à plus de 5 niveaux [selon la spécification HTML <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/webappapis.html#timers), il ne constitue pas une prothèse d'émulation appropriée pour l'immédiateté naturelle de `setImmediate`.

Toutes ces techniques sont incorporées dans une [prothèse d'émulation robuste de `setImmediate` <sup>(angl.)</sup>](https://github.com/YuzuJS/setImmediate).

## Spécifications

Ne fait partie d'aucune spécification actuelle.
La spécification [d'Efficacité des Rendements des Scripts <sup>(angl.)</sup>](https://w3c.github.io/setImmediate/#si-setImmediate) n'est plus en cours de développement.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `setImmediate` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#setimmediate)
- [La démonstration de l'API `setImmediate` par Microsoft <sup>(angl.)</sup>](https://jphpsf.github.io/setImmediate-shim-demo/)
- La méthode {{DOMxRef("Window.clearImmediate()")}}
- La méthode {{DOMxRef("Window.requestIdleCallback()")}}

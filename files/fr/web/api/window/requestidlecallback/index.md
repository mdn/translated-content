---
title: window.requestIdleCallback()
slug: Web/API/Window/requestIdleCallback
---

{{APIRef}}{{SeeCompatTable}}

La méthode **`window.requestIdleCallback()`** mémorise une fonction qui sera appelée lorsque le navigateur n'aura plus aucune autre tâche en cours. Cela offre au développeur la possibilité de réaliser des tâches à basse priorité en arrière-plan sur la boucle d'évènements principale, sans impacter l'expérience utilisateur (ralentissement des animations, etc). L'ordre des appels aux fonctions est généralement premier entré, premier sorti, sauf si le `timeout` défini au moment de l'enregistrement est atteint avant que le navigateur n'ait eu le temps d'appeler la fonction en question.

## Syntaxe

```js
var idleCallbackId = window.requestIdleCallback(fonction[, options])
```

### Retour de l'appel

Un entier long non-signé qui peut être utilisé pour annulé l'appel à la fonction via la méthode {{domxref("window.cancelIdleCallback()")}}.

### Paramètres

- fonction

  - : La référence d'une fonction qui devrait être appellée dans un futur proche. La fonction en question recevra en argument un objet de type temps restant avec les propriétés suivantes :

    - `timeRemaining`&nbsp;: fonction qui retourne un [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) représentant le temps restant estimé par le navigateur pour exécuter la tâche, ayant pour valeur minimale zéro. Les tâches nécessitant un temps d'exécution relativement long sont susceptibles de recourir à plusieurs appels à cette méthode s'il reste du travail à effectuer, rendant la main au navigateur peu avant que le compteur n'atteigne zéro. `timeRemaining()` retournera toujours zéro si `didTimeout` est positionné à `true` (par exemple, la fonction n'a pas été appelée durant la période de repos du navigateur). La limite de temps est limitée à 50ms, même si le navigateur reste n'a pas d'autre tâche à exécuter pendant une durée plus longue.
    - `didTimeout`&nbsp;: un booléen positionné à `true` si la fonction est appelée car le timeout a été atteint, et `false` si elle a été appelée par le navigateur durant une période de repos.

- `options` {{optional_inline}}

  - : Objet contenant des paramètres de configuration optionnels. Les propriétés sont les suivantes :
    - `timeout`&nbsp;: si `timeout` est spécifié et possède une valeur positive, la fonction sera appelée au bout de au moins `timeout` millisecondes si elle n'a pas été appelée par le navigateur au préalable.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("window.cancelIdleCallback()")}}
- {{domxref("IdleDeadline")}}
- {{domxref("window.setTimeout()")}}
- {{domxref("window.setInterval()")}}
- {{domxref("window.requestAnimationFrame")}}

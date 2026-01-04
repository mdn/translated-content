---
title: "AbortSignal : méthode throwIfAborted()"
short-title: throwIfAborted()
slug: Web/API/AbortSignal/throwIfAborted
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

La méthode **`throwIfAborted()`** de l'interface {{DOMxRef("AbortSignal")}} lève la raison d'annulation {{DOMxRef("AbortSignal.reason", "reason")}} du signal si celui-ci a été annulé&nbsp;; sinon, elle ne fait rien.

Une API qui doit prendre en charge l'annulation peut accepter un objet {{DOMxRef("AbortSignal")}} et utiliser `throwIfAborted()` pour tester et lever une exception lorsque l'évènement {{DOMxRef("AbortSignal.abort_event", "abort")}} est déclenché.

Cette méthode peut aussi être utilisée pour annuler des opérations à des points précis du code, plutôt que de passer le signal à des fonctions qui l'acceptent.

## Syntaxe

```js-nolint
throwIfAborted()
```

### Paramètres

Aucun.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

Les exemples ci-dessous proviennent de la spécification.

### Annuler une opération de scrutation

Cet exemple montre comment utiliser `throwIfAborted()` pour annuler une opération de scrutation.

Considérez une fonction asynchrone `waitForCondition()` qui est appelée avec une autre fonction asynchrone `func`, une valeur cible `targetValue` et un `AbortSignal`.
La méthode compare le résultat de `func` avec `targetValue` dans une boucle, et retourne quand ils correspondent.

```js
async function waitForCondition(func, targetValue, { signal } = {}) {
  while (true) {
    signal?.throwIfAborted();

    const result = await func();
    if (result === targetValue) {
      return;
    }
  }
}
```

À chaque itération de la boucle, on utilise `throwIfAborted()` pour lever la raison (`reason`) du signal si l'opération a été annulée (et sinon ne rien faire).
Si le signal est annulé, cela provoquera le rejet de la promesse `waitForCondition()`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Fetch](/fr/docs/Web/API/Fetch_API)

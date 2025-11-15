---
title: "AsyncDisposableStack : méthode defer()"
short-title: defer()
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/defer
l10n:
  sourceCommit: 7a5b580a28a0b1a33e42e9fb81c8234994ec0e36
---

La méthode **`defer()`** des instances de {{JSxRef("AsyncDisposableStack")}} prend une fonction de rappel qui sera appelée et attendue lors de la libération de la pile.

Voir {{JSxRef("DisposableStack.prototype.defer()")}} pour des informations générales sur la méthode `defer()`.

## Syntaxe

```js-nolint
defer(onDispose)
```

### Paramètres

- `onDispose`
  - : Une fonction appelée lors de la libération de la pile. Elle ne reçoit aucun argument et peut retourner une promesse qui sera attendue.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si `onDispose` n'est pas une fonction.
- {{JSxRef("ReferenceError")}}
  - : Levée si la pile a déjà été libérée.

## Exemples

### Utilisation de `defer()`

Un cas d'usage de `defer()` est d'effectuer une action non liée à la libération de ressources lors de la sortie de portée, comme écrire un message de journalisation.

```js
async function faireQuelqueChose() {
  await using gestionnaire = new AsyncDisposableStack();
  gestionnaire.defer(async () => {
    await fs.writeFile(
      "journal.txt",
      "Toutes les ressources ont été libérées avec succès",
    );
  });
  // Autre code qui réclame et libère plus de données
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Gestion des ressources en JavaScript](/fr/docs/Web/JavaScript/Guide/Resource_management)
- L'objet global {{JSxRef("AsyncDisposableStack")}}
- La méthode {{JSxRef("AsyncDisposableStack.prototype.adopt()")}}
- La méthode {{JSxRef("AsyncDisposableStack.prototype.use()")}}

---
title: "AsyncDisposableStack : méthode disposeAsync()"
short-title: disposeAsync()
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/disposeAsync
l10n:
  sourceCommit: 7a5b580a28a0b1a33e42e9fb81c8234994ec0e36
---

La méthode **`disposeAsync()`** des instances de {{JSxRef("AsyncDisposableStack")}} libère la pile en appelant tous les libérateurs enregistrés, dans l'ordre inverse de leur enregistrement, en attendant la fin de chacun avant d'appeler le suivant. Si la pile est déjà libérée, cette méthode ne fait rien.

Elle effectue la même action que `await using gestionnaire = new AsyncDisposableStack()` à la sortie de portée. Elle peut être utilisée si vous souhaitez effectuer le nettoyage à un autre moment que la sortie de portée.

## Syntaxe

```js-nolint
disposeAsync()
```

### Paramètres

Aucun.

### Valeur de retour

Une nouvelle promesse ({{JSxRef("Promise")}}) qui se résout avec `undefined` lorsque tous les libérateurs enregistrés ont terminé leur exécution en séquence.

### Exceptions

`disposeAsync()` ne lève jamais d'erreur de façon synchrone. La promesse retournée peut être rejetée avec l'une des erreurs suivantes&nbsp;:

- {{JSxRef("SuppressedError")}}
  - : Levée si plusieurs libérateurs dans la pile ont levé une erreur. Si une seule erreur est levée, elle est relancée telle quelle. Sinon, pour chaque erreur supplémentaire, une nouvelle {{JSxRef("SuppressedError")}} est créée, avec l'erreur initiale dans la propriété `suppressed` et la nouvelle erreur dans la propriété `error`.

## Exemples

### Libérer une pile

Ici, on ajoute trois libérateurs à la pile, en utilisant les méthodes {{JSxRef("AsyncDisposableStack/use", "use()")}}, {{JSxRef("AsyncDisposableStack/adopt", "adopt()")}} et {{JSxRef("AsyncDisposableStack/defer", "defer()")}}. Lorsque `disposeAsync()` est appelée, les libérateurs sont appelés dans l'ordre inverse de leur enregistrement.

Notez qu'en général, il n'est pas nécessaire d'appeler `disposeAsync()` manuellement. Déclarez la pile avec {{JSxRef("Statements/await_using", "await using")}} et sa méthode [`[Symbol.asyncDispose]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/Symbol.asyncDispose) sera automatiquement appelée lorsque la pile sortira de la portée.

```js
class Ressource {
  #liberation() {
    // Imaginez ici une logique de libération plus significative
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  }
  async liberer() {
    await this.#liberation();
    console.log("Ressource libérée");
  }
  async [Symbol.asyncDispose]() {
    await this.#liberation();
    console.log("Ressource libérée via Symbol.asyncDispose");
  }
}

async function faireQuelqueChose() {
  const gestionnaire = new AsyncDisposableStack();
  const ressource = gestionnaire.use(new Ressource());
  const ressource2 = gestionnaire.adopt(new Ressource(), (ressource) =>
    ressource.liberer(),
  );
  gestionnaire.defer(() => console.log("Libérateur différé"));
  gestionnaire.disposeAsync();
  // Affiche dans l'ordre&nbsp;:
  // Libérateur différé
  // Ressource libérée
  // Ressource libérée via Symbol.dispose
}

faireQuelqueChose();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Gestion des ressources en JavaScript](/fr/docs/Web/JavaScript/Guide/Resource_management)
- L'objet global {{JSxRef("AsyncDisposableStack")}}
- La méthode {{JSxRef("AsyncDisposableStack.prototype.adopt()")}}
- La méthode {{JSxRef("AsyncDisposableStack.prototype.defer()")}}
- La méthode {{JSxRef("AsyncDisposableStack.prototype.use()")}}
- La méthode [`AsyncDisposableStack.prototype[Symbol.asyncDispose]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/Symbol.asyncDispose)

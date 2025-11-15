---
title: "AsyncDisposableStack : méthode [Symbol.asyncDispose]()"
short-title: "[Symbol.asyncDispose]()"
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/Symbol.asyncDispose
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

La méthode **`[Symbol.asyncDispose]()`** des instances de {{JSxRef("AsyncDisposableStack")}} implémente le _protocole de libération asynchrone_ et permet de libérer la pile lorsqu'elle est utilisée avec {{JSxRef("Statements/await_using", "await using")}}. C'est un alias de la méthode {{JSxRef("AsyncDisposableStack/disposeAsync", "disposeAsync()")}}.

## Syntaxe

```js-nolint
asyncDisposableStack[Symbol.asyncDispose]()
```

### Paramètres

Aucun.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

### Déclaration d'une pile avec `await using`

La méthode `Symbol.asyncDispose` est conçue pour être appelée automatiquement dans une déclaration `await using`.

```js
async function faireQuelqueChose() {
  await using gestionnaire = new AsyncDisposableStack();
  const ressource = gestionnaire.use(new Resource());
  ressource.faireQuelqueChose();
  // gestionnaire est libéré ici juste avant la sortie de la fonction
  // ce qui entraîne la libération de la ressource
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Gestion des ressources en JavaScript](/fr/docs/Web/JavaScript/Guide/Resource_management)
- L'objet global {{JSxRef("AsyncDisposableStack")}}
- La méthode {{JSxRef("AsyncDisposableStack.prototype.disposeAsync()")}}

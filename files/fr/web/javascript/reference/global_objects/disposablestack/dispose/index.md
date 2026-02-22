---
title: "DisposableStack : méthode dispose()"
short-title: dispose()
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack/dispose
l10n:
  sourceCommit: 5d6f5187d1c657edec7e735d3cc5ad36907e2030
---

La méthode **`dispose()`** des instances de {{JSxRef("DisposableStack")}} libère cette pile en appelant tous les gestionnaires de libération enregistrés dans l'ordre inverse de leur enregistrement. Si la pile est déjà libérée, cette méthode ne fait rien.

Elle effectue la même action que `using disposer = new DisposableStack()` à la sortie de la portée. Elle peut être utilisée si vous devez effectuer le nettoyage à un autre moment que la sortie de portée.

## Syntaxe

```js-nolint
dispose()
```

### Paramètres

Aucun.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- {{JSxRef("SuppressedError")}}
  - : Levée si plusieurs gestionnaires de libération dans la pile ont levé une erreur. Si une seule erreur est levée, elle est relancée telle quelle. Sinon, pour chaque erreur supplémentaire, une nouvelle {{JSxRef("SuppressedError")}} est créée, avec l'erreur originale dans la propriété `suppressed` et la nouvelle erreur dans la propriété `error`.

## Exemples

### Libérer une pile

Ici, nous ajoutons trois gestionnaires de libération à la pile, en utilisant les méthodes {{JSxRef("DisposableStack/use", "use()")}}, {{JSxRef("DisposableStack/adopt", "adopt()")}} et {{JSxRef("DisposableStack/defer", "defer()")}}. Lorsque `dispose()` est appelée, les gestionnaires sont appelés dans l'ordre inverse de leur enregistrement.

Notez que généralement, vous n'avez pas besoin d'appeler `dispose()` manuellement. Déclarez la pile avec {{JSxRef("Statements/using", "using")}}, et sa méthode [`[Symbol.dispose]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DisposableStack/Symbol.dispose) sera automatiquement appelée lorsque la pile sort de la portée.

```js
class Resource {
  dispose() {
    console.log("Ressource libérée");
  }
  [Symbol.dispose]() {
    console.log("Ressource libérée par Symbol.dispose");
  }
}

{
  const disposer = new DisposableStack();
  const resource = disposer.use(new Resource());
  const resource2 = disposer.adopt(new Resource(), (resource) =>
    resource.dispose(),
  );
  disposer.defer(() => console.log("Libération différée"));
  disposer.dispose();
  // Affiche dans l'ordre :
  // Libération différée
  // Ressource libérée
  // Ressource libérée par Symbol.dispose
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Gestion des ressources JavaScript](/fr/docs/Web/JavaScript/Guide/Resource_management)
- L'objet {{JSxRef("DisposableStack")}}
- La méthode {{JSxRef("DisposableStack.prototype.adopt()")}}
- La méthode {{JSxRef("DisposableStack.prototype.defer()")}}
- La méthode {{JSxRef("DisposableStack.prototype.use()")}}
- La méthode [`DisposableStack.prototype[Symbol.dispose]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DisposableStack/Symbol.dispose)

---
title: AsyncDisposableStack
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

L'objet **`AsyncDisposableStack`** représente une pile de [libérateurs asynchrones](/fr/docs/Web/JavaScript/Reference/Statements/await_using) à exécuter lorsque la pile elle‑même est libérée. Les fonctions de libération sont exécutées dans l'ordre inverse de leur enregistrement, avec des garanties strictes de gestion des erreurs. L'appel de sa méthode `move()` transfère la responsabilité d'appeler les libérateurs actuellement enregistrés vers une nouvelle instance d'`AsyncDisposableStack` et empêche l'enregistrement de libérateurs supplémentaires.

Voir {{JSxRef("DisposableStack")}} pour des informations générales sur l'utilisation des piles de ressources.

## Constructeur

- {{JSxRef("AsyncDisposableStack/AsyncDisposableStack", "AsyncDisposableStack()")}}
  - : Crée un nouvel objet `AsyncDisposableStack`.

## Propriétés d'instance

Ces propriétés sont définies sur `AsyncDisposableStack.prototype` et sont partagées par toutes les instances d'`AsyncDisposableStack`.

- {{JSxRef("Object/constructor", "AsyncDisposableStack.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'objet instance. Pour les instances d'`AsyncDisposableStack`, la valeur initiale est le constructeur {{JSxRef("AsyncDisposableStack/AsyncDisposableStack", "AsyncDisposableStack")}}.
- {{JSxRef("AsyncDisposableStack.prototype.disposed")}} {{ReadOnlyInline}}
  - : Retourne `true` si l'`AsyncDisposableStack` a été libéré, sinon `false`.
- `AsyncDisposableStack.prototype[Symbol.toStringTag]`
  - : La valeur initiale de la propriété [`[Symbol.toStringTag]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) est la chaîne de caractères `"AsyncDisposableStack"`. Cette propriété est utilisée par {{JSxRef("Object.prototype.toString()")}}.

## Méthodes d'instance

- {{JSxRef("AsyncDisposableStack.prototype.adopt()")}}
  - : Enregistre une valeur qui n'implémente pas le protocole de libération asynchrone dans la pile en fournissant une fonction de libération personnalisée.
- {{JSxRef("AsyncDisposableStack.prototype.disposeAsync()")}}
  - : Libère cette pile en appelant tous les libérateurs qui y sont enregistrés, dans l'ordre inverse de leur enregistrement.
- {{JSxRef("AsyncDisposableStack.prototype.defer()")}}
  - : Enregistre une fonction de rappel qui sera appelée lorsque la pile sera libérée.
- {{JSxRef("AsyncDisposableStack.prototype.move()")}}
  - : Crée une nouvelle instance d'`AsyncDisposableStack` contenant les mêmes libérateurs que cette pile, puis marque cette pile comme libérée sans appeler les libérateurs.
- {{JSxRef("AsyncDisposableStack.prototype.use()")}}
  - : Enregistre une valeur qui implémente le protocole de libération asynchrone dans la pile.
- [`AsyncDisposableStack.prototype[Symbol.asyncDispose]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/Symbol.asyncDispose)
  - : Un alias de la méthode `disposeAsync()`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Gestion des ressources en JavaScript](/fr/docs/Web/JavaScript/Guide/Resource_management)
- La propriété {{JSxRef("Symbol.asyncDispose")}}
- L'instruction {{JSxRef("Statements/await_using", "await using")}}
- L'objet {{JSxRef("DisposableStack")}}
- [Prothèse d'émulation de `AsyncDisposableStack` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#explicit-resource-management)

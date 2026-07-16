---
title: DisposableStack
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

L'objet **`DisposableStack`** représente une pile [de libérateurs (<i lang="en">disposals</i> en anglais)](/fr/docs/Web/JavaScript/Reference/Statements/using) à exécuter lorsque la pile elle-même est libérée (<i lang="en">disposed</i> en anglais). Les fonctions de libération sont exécutées dans l'ordre inverse de leur enregistrement, avec de solides garanties de gestion des erreurs. L'appel de sa méthode `move()` transfère la responsabilité d'appeler les fonctions de libération actuellement enregistrées vers une nouvelle `DisposableStack` et empêche l'enregistrement de fonctions de libération supplémentaires.

## Description

Un `DisposableStack` n'est pas exactement une «&nbsp;pile&nbsp;» au sens de son interface. Il dispose de plusieurs méthodes pour y empiler des fonctions de libération, mais il n'offre aucun moyen de dépiler une seule fonction. En revanche, _toutes_ les fonctions de libération sont dépilées et exécutées une par une lorsque la pile est libérée.

Vous enregistrez des [ressources libérables](/fr/docs/Web/JavaScript/Guide/Resource_management) dans le `DisposableStack` en utilisant ses méthodes {{JSxRef("DisposableStack/use", "use()")}}, {{JSxRef("DisposableStack/adopt", "adopt()")}} ou {{JSxRef("DisposableStack/defer", "defer()")}}.

```js
using disposer = new DisposableStack();
const reader = disposer.use(stream.getReader());
```

Ensuite, lorsque le `disposer` sort de la portée, toutes les ressources qui y sont enregistrées sont libérées dans l'ordre inverse de leur enregistrement, sauf si elles ont été déplacées avec `move()`.

Il est recommandé de _ne pas_ extraire l'expression d'acquisition de la ressource dans une instruction séparée, quelle que soit la longueur de l'expression. Vous devez toujours entourer l'appel avec `use()` ou `adopt()` autour de l'expression d'acquisition afin de garantir que la ressource est immédiatement enregistrée dans la pile.

```js example-bad
using disposer = new DisposableStack();
const reader = stream.getReader();
disposer.use(reader);
```

D'un point de vue fonctionnel, ces deux extraits de code sont équivalents. Cependant, le premier est moins sujet aux erreurs, car la ressource est déclarée et enregistrée sur une seule ligne. Si quelqu'un insère davantage de code entre la deuxième et la troisième ligne du second extrait, une erreur peut survenir, provoquant une fuite de la ressource.

## Constructeur

- {{JSxRef("DisposableStack/DisposableStack", "DisposableStack()")}}
  - : Crée un nouvel objet `DisposableStack`.

## Propriétés d'instance

Ces propriétés sont définies sur `DisposableStack.prototype` et partagées par toutes les instances de `DisposableStack`.

- {{JSxRef("Object/constructor", "DisposableStack.prototype.constructor")}}
  - : La fonction constructeur ayant créé l'objet instance. Pour les instances de `DisposableStack`, la valeur initiale est le constructeur {{JSxRef("DisposableStack/DisposableStack", "DisposableStack")}}.
- {{JSxRef("DisposableStack.prototype.disposed")}} {{ReadOnlyInline}}
  - : Retourne `true` si la `DisposableStack` a été libérée, sinon `false`.
- `DisposableStack.prototype[Symbol.toStringTag]`
  - : La valeur initiale de la propriété [`[Symbol.toStringTag]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) est la chaîne de caractères `"DisposableStack"`. Cette propriété est utilisée par {{JSxRef("Object.prototype.toString()")}}.

## Méthodes d'instance

- {{JSxRef("DisposableStack.prototype.adopt()")}}
  - : Enregistre une valeur qui n'implémente pas le protocole de libération dans la pile en fournissant une fonction de libération personnalisée.
- {{JSxRef("DisposableStack.prototype.defer()")}}
  - : Prend une fonction de rappel à appeler lorsque la pile est libérée.
- {{JSxRef("DisposableStack.prototype.dispose()")}}
  - : Libère cette pile en appelant toutes les fonctions de libération qui y sont enregistrées dans l'ordre inverse de leur enregistrement.
- {{JSxRef("DisposableStack.prototype.move()")}}
  - : Crée une nouvelle instance de `DisposableStack` contenant les mêmes fonctions de libération que cette pile, puis marque cette pile comme libérée, sans appeler aucune fonction de libération.
- {{JSxRef("DisposableStack.prototype.use()")}}
  - : Enregistre une valeur qui implémente le protocole de libération dans la pile.
- [`DisposableStack.prototype[Symbol.dispose]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DisposableStack/Symbol.dispose)
  - : Un alias de la méthode `dispose()`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `DisposableStack` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#explicit-resource-management)
- [Gestion des ressources JavaScript](/fr/docs/Web/JavaScript/Guide/Resource_management)
- Le symbole {{JSxRef("Symbol.dispose")}}
- La déclaration {{JSxRef("Statements/using", "using")}}
- L'objet {{JSxRef("AsyncDisposableStack")}}

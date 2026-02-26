---
title: AsyncIterator
slug: Web/JavaScript/Reference/Global_Objects/AsyncIterator
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Un objet **`AsyncIterator`** est un objet conforme au [protocole d'itérateur asynchrone](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#les_protocoles_ditérateur_asynchrone_et_ditérable_asynchrone) en fournissant une méthode `next()` qui retourne une promesse résolue par un objet de résultat d'itération. L'objet `AsyncIterator.prototype` est un objet global caché dont héritent tous les itérateurs asynchrones natifs. Il fournit une méthode [`[Symbol.asyncIterator]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator/Symbol.asyncIterator) qui retourne l'objet itérateur asynchrone lui‑même, rendant ainsi l'itérateur asynchrone également un [itérable asynchrone](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#les_protocoles_ditérateur_asynchrone_et_ditérable_asynchrone).

Notez que `AsyncIterator` n'est _pas_ un objet global, même si la [proposition des assistants d'itérateurs asynchrones <sup>(angl.)</sup>](https://github.com/tc39/proposal-async-iterator-helpers) prévoit d'introduire des APIs similaires à l'avenir. L'objet `AsyncIterator.prototype` partagé par tous les itérateurs asynchrones natifs peut être obtenu avec le code suivant&nbsp;:

```js
const AsyncIteratorPrototype = Object.getPrototypeOf(
  Object.getPrototypeOf(Object.getPrototypeOf((async function* () {})())),
);
```

## Description

Actuellement, le seul itérateur asynchrone natif de JavaScript est l'objet {{JSxRef("AsyncGenerator")}} retourné par les [fonctions génératrices asynchrones](/fr/docs/Web/JavaScript/Reference/Statements/async_function*). Certaines API Web fournissent également des itérateurs asynchrones natifs, par exemple celui d'un {{DOMxRef("ReadableStream")}}.

Chacun de ces itérateurs asynchrones possède un prototype distinct, qui définit la méthode `next()` utilisée par cet itérateur particulier. Tous ces prototypes héritent de `AsyncIterator.prototype`, lequel fournit une méthode [`[Symbol.asyncIterator]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator) retournant l'itérateur asynchrone lui‑même, rendant l'itérateur également itérable asynchrone.

> [!NOTE]
> `AsyncIterator.prototype` n'implémente pas [`[Symbol.iterator]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator), donc les itérateurs asynchrones ne sont pas des [itérables synchrones](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_«_itérable_») par défaut.

## Méthodes d'instance

- [`AsyncIterator.prototype[Symbol.asyncDispose]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator/Symbol.asyncDispose)
  - : Appelle et attend la méthode `return()` de `this`, si elle existe. Cela implémente le _protocole d'élimination asynchrone_ et permet sa libération lorsqu'il est utilisé avec {{JSxRef("Statements/await_using", "await using")}}.
- [`AsyncIterator.prototype[Symbol.asyncIterator]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator/Symbol.asyncIterator)
  - : Retourne l'objet itérateur asynchrone lui‑même. Cela permet aux objets itérateurs asynchrones d'être également itérables asynchrones.

## Exemples

### Utiliser un itérateur asynchrone comme itérable asynchrone

Tous les itérateurs asynchrones natifs sont aussi itérables asynchrones, vous pouvez donc les utiliser dans une boucle `for await...of`&nbsp;:

```js
const asyncIterator = (async function* () {
  yield 1;
  yield 2;
  yield 3;
})();
(async () => {
  for await (const value of asyncIterator) {
    console.log(value);
  }
})();
// Affiche : 1, 2, 3
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La déclaration {{JSxRef("Statements/async_function*", "async function*")}}
- [Protocoles d'itération](/fr/docs/Web/JavaScript/Reference/Iteration_protocols)

---
title: Symbol.asyncIterator
slug: Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator
---

{{JSRef}}

Le symbole connu **`Symbol.asyncIterator`** définit l'itérateur asynchrone par défaut d'un objet. Si cette propriété est définie sur un objet, celui-ci est un itérable asynchrone et peut être utilisé avec une boucle [`for await...of`](/fr/docs/Web/JavaScript/Reference/Statements/for-await...of).

{{js_property_attributes(0,0,0)}}

## Description

Le symbole `Symbol.asyncIterator` est un symbole natif utilisé pour accéder à la méthode `@@asyncIterator` d'un objet. Pour qu'un objet soit un itérable asynchrone, il doit avoir une clé `Symbol.asyncIterator`.

## Exemples

### Itérable asynchrone personnalisé

Il est possible de définir son propre itérable en définissant la propriété `[Symbol.asyncIterator]` d'un objet :

```js
const myAsyncIterable = new Object();
myAsyncIterable[Symbol.asyncIterator] = async function* () {
  yield "coucou";
  yield "l'itération";
  yield "asynchrone !";
};

(async () => {
  for await (const x of myAsyncIterable) {
    console.log(x);
    // expected output:
    //    "coucou"
    //    "l'itération"
    //    "asynchrone !"
  }
})();
```

### Itérables asynchrones natifs

Il n'existe actuellement pas d'objets JavaScript natifs qui possèdent la clé `[Symbol.asyncIterator]` par défaut. Toutefois, les flux (_Streams_) WHATWG pourraient devenir les premiers objets natifs itérables asynchrones.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les protocoles d'itération](/fr/docs/Web/JavaScript/Reference/Iteration_protocols)
- [`for await... of`](/fr/docs/Web/JavaScript/Reference/Statements/for-await...of)

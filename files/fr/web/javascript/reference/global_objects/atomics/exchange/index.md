---
title: Atomics.exchange()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/exchange
tags:
  - Atomics
  - JavaScript
  - Mémoire partagée
  - Méthode
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Atomics/exchange
original_slug: Web/JavaScript/Reference/Objets_globaux/Atomics/exchange
---
{{JSRef}}

La méthode statique **`Atomics.exchange()`** permet d'enregistrer une valeur à une position donnée d'un tableau et de renvoyer l'ancienne valeur qui était contenue dans le tableau. Cette opération atomique garantit qu'aucune autre opération d'écriture n'est appliquée tant que la valeur modifiée n'est pas écrite.

{{EmbedInteractiveExample("pages/js/atomics-exchange.html")}}

## Syntaxe

```js
Atomics.exchange(typedArray, index, valeur)
```

### Paramètres

- `typedArray`
  - : Un tableau typé entier partagé parmi {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}} ou {{jsxref("Uint32Array")}}.
- `index`
  - : La position dans le tableau `typedArray` à laquelle on veut placer `valeur`.
- `valeur`
  - : Le nombre qu'on souhaite échanger.

### Valeur de retour

L'ancienne valeur qui était contenue à (`typedArray[index]`).

### Exceptions levées

- Cette méthode lève {{jsxref("TypeError")}} si le type de `typedArray` n'est pas un des types entiers autorisés.
- Cette méthode lève {{jsxref("TypeError")}} si `typedArray` n'est pas tableau typé partagé.
- Cette méthode lève {{jsxref("RangeError")}} si `index` est en dehors des limites de `typedArray`.

## Exemples

```js
var sab = new SharedArrayBuffer(1024);
var ta = new Uint8Array(sab);

Atomics.exchange(ta, 0, 12);  // renvoie 0, l'ancienne valeur
Atomics.load(ta, 0);          // 12
```

## Spécifications

| Spécification                                                                                | Statut                       | Commentaires                     |
| -------------------------------------------------------------------------------------------- | ---------------------------- | -------------------------------- |
| {{SpecName('ESDraft', '#sec-atomics.exchange', 'Atomics.exchange')}} | {{Spec2('ESDraft')}} | Définition initiale avec ES2017. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Atomics.exchange")}}

## Voir aussi

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.compareExchange()")}}

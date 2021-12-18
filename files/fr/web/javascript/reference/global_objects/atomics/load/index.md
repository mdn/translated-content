---
title: Atomics.load()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/load
tags:
  - Atomics
  - JavaScript
  - Mémoire partagée
  - Méthode
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Atomics/load
original_slug: Web/JavaScript/Reference/Objets_globaux/Atomics/load
---
{{JSRef}}

La méthode statique **`Atomics.load()`** renvoie une valeur située à une position donnée du tableau.

{{EmbedInteractiveExample("pages/js/atomics-load.html")}}

## Syntaxe

    Atomics.load(typedArray, index)

### Paramètres

- `typedArray`
  - : Un tableau typé entier partagé parmi {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}} ou {{jsxref("Uint32Array")}}.
- `index`
  - : La position du tableau `typedArray` qu'on souhaite charger.

### Valeur de retour

La valeur à la position indiquée (`typedArray[index]`).

### Exceptions levées

- Cette méthode lève {{jsxref("TypeError")}} si le type de `typedArray` n'est pas un des types entiers autorisés.
- Cette méthode lève {{jsxref("TypeError")}} si `typedArray` n'est pas tableau typé partagé.
- Cette méthode lève {{jsxref("RangeError")}} si `index` est en dehors des limites de `typedArray`.

## Exemples

```js
var sab = new SharedArrayBuffer(1024);
var ta = new Uint8Array(sab);

Atomics.add(ta, 0, 12);
Atomics.load(ta, 0); // 12
```

## Spécifications

| Spécification                                                                    | État                         | Commentaires                     |
| -------------------------------------------------------------------------------- | ---------------------------- | -------------------------------- |
| {{SpecName('ESDraft', '#sec-atomics.load', 'Atomics.load')}} | {{Spec2('ESDraft')}} | Définition initiale avec ES2017. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Atomics.load")}}

## Voir aussi

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.store()")}}

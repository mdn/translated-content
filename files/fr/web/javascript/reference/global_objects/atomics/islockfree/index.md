---
title: Atomics.isLockFree()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/isLockFree
tags:
  - Atomics
  - JavaScript
  - Mémoire partagée
  - Méthode
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Atomics/isLockFree
original_slug: Web/JavaScript/Reference/Objets_globaux/Atomics/isLockFree
---
{{JSRef}}

La méthode statique **`Atomics.isLockFree()`** est utilisée afin de déterminer si on doit utiliser des verrous (*locks*) ou des opérations atomiques. Elle renvoie `true` si la taille donnée correspond à une des propriétés [`BYTES_PER_ELEMENT`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray/BYTES_PER_ELEMENT) d'un des types `TypedArray`.

{{EmbedInteractiveExample("pages/js/atomics-islockfree.html")}}

## Syntaxe

```js
Atomics.isLockFree(taille)
```

### Paramètres

- `taille`
  - : La taille en octets qu'on souhaite vérifier.

### Valeur de retour

Un {{jsxref("Boolean","booléen","",1)}} indiquant si l'opération se déroule sans verrou.

## Exemples

```js
Atomics.isLockFree(1); // true
Atomics.isLockFree(2); // true
Atomics.isLockFree(3); // false
Atomics.isLockFree(4); // true
Atomics.isLockFree(5); // false
Atomics.isLockFree(6); // false
Atomics.isLockFree(7); // false
Atomics.isLockFree(8); // true
```

## Spécifications

| Spécification                                                                                    | État                         | Commentaires                     |
| ------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------------------- |
| {{SpecName('ESDraft', '#sec-atomics.islockfree', 'Atomics.isLockFree')}} | {{Spec2('ESDraft')}} | Définition initiale avec ES2017. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Atomics.isLockFree")}}

## Voir aussi

- {{jsxref("Atomics")}}

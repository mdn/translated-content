---
title: "SyntaxError: applying the 'delete' operator to an unqualified name is deprecated"
slug: Web/JavaScript/Reference/Errors/Delete_in_strict_mode
---

{{jsSidebar("Errors")}}

## Message

```
SyntaxError: Calling delete on expression not allowed in strict mode (Edge)
SyntaxError: applying the 'delete' operator to an unqualified name is deprecated (Firefox)
SyntaxError: Delete of an unqualified identifier in strict mode. (Chrome)
```

## Type d'erreur

{{jsxref("SyntaxError")}}, uniquement en [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode).

## Quel est le problème ?

Les variables JavaScript ne peuvent pas être supprimées grâce à l'opérateur [`delete`](/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_delete). En mode strict, toute tentative de suppression d'une variable lèvera une exception.

L'opérateur `delete` sert uniquement à supprimer des propriétés sur un objet. Les propriétés d'un objet sont « qualifiées » si elles sont configurables.

Contrairement à ce qu'on pourrait penser, l'opérateur `delete` n'a rien à voir avec la libération de la mémoire. La gestion de la mémoire se fait indirectement en cassant les références utilisées. Pour plus d'informations, consulter les pages sur [`delete`](/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_delete) et [la gestion de la mémoire en JavaScript](/fr/docs/Web/JavaScript/Gestion_de_la_mémoire).

Cette erreur ne se produit qu'en [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode). En mode non-strict, l'opération renvoie simplement `false`.

## Exemples

Essayer de supprimer une variable normale avec `delete` ne fonctionne pas, voire lève une exception en mode strict :

```js example-bad
"use strict";

var x;

// ...

delete x;

// SyntaxError: applying the 'delete' operator to
// an unqualified name is deprecated
```

Pour libérer le contenu d'une variable, on peut la passer à {{jsxref("null")}} :

```js example-good
"use strict";

var x;
// ...
x = null;

// x peut être ramassée par le ramasse-miettes
```

## Voir aussi

- [`delete`](/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_delete)
- [La gestion de la mémoire en JavaScript](/fr/docs/Web/JavaScript/Gestion_de_la_mémoire)
- [TypeError: property "x" is non-configurable and can't be deleted](/fr/docs/Web/JavaScript/Reference/Errors/Cant_delete)

---
title: 'TypeError: property "x" is non-configurable and can''t be deleted'
slug: Web/JavaScript/Reference/Errors/Cant_delete
tags:
  - Erreurs
  - JavaScript
  - Mode strict
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Cant_delete
original_slug: Web/JavaScript/Reference/Erreurs/Cant_delete
---
{{jsSidebar("Errors")}}

## Message

    TypeError: Calling delete on 'x' is not allowed in strict mode (Edge)
    TypeError: property "x" is non-configurable and can't be deleted. (Firefox)
    TypeError: Cannot delete property 'x' of #<Object> (Chrome)

## Type d'erreur

{{jsxref("TypeError")}} in strict mode only.

## Quel est le problème ?

Une instruction demande la suppression d'une propriété [non-configurable](/fr/docs/Web/JavaScript/Structures_de_données#Propriétés). L'attribut `configurable` permet de contrôler si la propriété peut être supprimée de l'objet auquel elle est rattachée et si ces attributs (en dehors de `writable`) peuvent être modifiés.

Cette erreur ne se produit qu'en [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode). En mode non-strict, l'opération de suppression renverra `false`.

## Exemples

Les propriétés non-configurables ne sont pas très fréquentes mais il est possible d'en créer grâce à {{jsxref("Object.defineProperty()")}} ou à  {{jsxref("Object.freeze()")}}.

```js example-bad
"use strict";
var obj = Object.freeze({name: "Elsa", score: 157});
delete obj.score;  // TypeError

"use strict";
var obj = {};
Object.defineProperty(obj, "toto", {value: 2, configurable: false});
delete obj.toto;  // TypeError

"use strict";
var frozenArray = Object.freeze([0, 1, 2]);
frozenArray.pop();  // TypeError
```

Certaines propriétés natives de JavaScript sont non-configurables. Peut-être que le code tente de supprimer une constante mathématique :

```js example-bad
"use strict";
delete Math.PI;  // TypeError
```

## Voir aussi

- [L'opérateur `delete`](/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_delete)
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.freeze()")}}

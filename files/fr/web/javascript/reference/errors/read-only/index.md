---
title: 'TypeError: "x" is read-only'
slug: Web/JavaScript/Reference/Errors/Read-only
---

{{jsSidebar("Errors")}}

## Message

```
TypeError: Assignment to read-only properties is not allowed in strict mode (Edge)
TypeError: "x" is read-only (Firefox)
TypeError: 0 is read-only (Firefox)
TypeError: Cannot assign to read only property 'x' of #<Object> (Chrome)
TypeError: Cannot assign to read only property '0' of [object Array] (Chrome)
```

## Type d'erreur

{{jsxref("TypeError")}}

## Quel est le problème ?

La variable globale ou la propriété ne peut pas recevoir de valeur ou être modifiée car elle est en lecture seule (d'un point de vue technique, il s'agit d'[une propriété de donnée en lecture seule](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/defineProperty#Attribut_writable)).

Cette erreur ne se produit qu'avec [le mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode). En mode non-strict, l'affectation est ignorée silencieusement.

## Exemples

### Exemples invalides

Les propriétés en lecture seule ne sont pas fréquemment utilisées mais on peut en créer en utilisant les méthodes {{jsxref("Object.defineProperty()")}} ou {{jsxref("Object.freeze()")}}.

```js example-bad
"use strict";
var obj = Object.freeze({ name: "Elsa", score: 157 });
obj.score = 0; // TypeError

("use strict");
Object.defineProperty(this, "NB_POUMONS", { value: 2, writable: false });
NB_POUMONS = 3; // TypeError

("use strict");
var frozenArray = Object.freeze([0, 1, 2]);
frozenArray[0]++; // TypeError
```

Quelques propriétés natives JavaScript sont également en lecture seule. Par exemple, on obtient cette erreur lorsqu'on souhaite redéfinir une constante mathématique.

```js example-bad
"use strict";
Math.PI = 4; // TypeError
```

La variable globale `undefined` est également en lecture seule. On ne peut donc pas faire disparaître la fameuse erreur "_undefined is not a function_" avec ce code :

```js example-bad
"use strict";
undefined = function () {};
// TypeError: "undefined" is read-only
```

### Exemples valides

```js example-good
"use strict";
var obj = Object.freeze({ name: "Score", points: 157 });
obj = { name: obj.name, points: 0 };
// En changeant d'objet, ça fonctionne

("use strict");
var NB_POUMONS = 2; // `var` fonctionne
NB_POUMONS = 3; // ok
```

## Voir aussi

- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.freeze()")}}

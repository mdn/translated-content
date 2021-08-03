---
title: 'ReferenceError: reference to undefined property "x"'
slug: Web/JavaScript/Reference/Errors/Undefined_prop
tags:
  - Erreurs
  - JavaScript
  - Reference
  - ReferenceError
translation_of: Web/JavaScript/Reference/Errors/Undefined_prop
original_slug: Web/JavaScript/Reference/Erreurs/Undefined_prop
---
{{jsSidebar("Errors")}}

## Message

    ReferenceError: reference to undefined property "x" (Firefox)

## Type d'erreur

Uniquement pour Firefox. Une erreur {{jsxref("ReferenceError")}} lancée en avertissement, uniquement si la préférence `javascript.options.strict` vaut `true`.

## Quel est le problème ?

Le code tente d'accéder à une propriété inexistante d'un objet. Il existe deux méthodes pour accéder aux propriétés. Pour plus de détails, on pourra lire la page de la référence sur [les accesseurs de propriété](/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_membres).

## Exemples

### Exemples invalides

Ici, la propriété `truc` n'est pas une propriété définie et on obtient alors une `ReferenceError`.

```js example-bad
"use strict";

var toto = {};
toto.truc; // ReferenceError: reference to undefined property "bar"
```

### Exemples valides

Pour éviter cette erreur, il faut que `truc` soit une variable  « définie » ou vérifier son existence avant de l'utiliser (en utilisant par exemple la méthode {{jsxref("Object.prototype.hasOwnProperty()")}}).

```js example-good
"use strict";

var toto = {};

toto.truc = "lune";
console.log(toto.truc); // "lune"

if (foo.hasOwnProperty("truc")) {
  console.log(toto.truc);
}
```

## Voir aussi

- {{jsxref("Opérateurs/Opérateurs_de_membres", "Accesseurs de propriété", 0, 1)}}

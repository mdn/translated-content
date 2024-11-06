---
title: 'TypeError: can''t define property "x": "obj" is not extensible'
slug: Web/JavaScript/Reference/Errors/Cant_define_property_object_not_extensible
---

{{jsSidebar("Errors")}}

## Message

```
TypeError: Cannot create property for a non-extensible object (Edge)
TypeError: can't define property "x": "obj" is not extensible (Firefox)
TypeError: Cannot define property: "x", object is not extensible. (Chrome)
```

## Type d'erreur

{{jsxref("TypeError")}}

## Quel est le problème ?

La plupart du temps, un objet est extensible, ce qui signifie qu'on peut lui ajouter de nouvelles propriétés. Cependant, dans ce cas, on a utilisé la méthode {{jsxref("Object.preventExtensions()")}} afin de marquer l'objet comme non-extensible. Celui-ci ne pourra donc pas recevoir de nouvelles propriétés en plus de celles dont il dispose déjà.

## Exemples

En [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode), si on essaie d'ajouter une nouvelle propriété sur un objet non-extensible, on obtient une exception `TypeError`. En mode non-strict, l'ajout de la nouvelle propriété est ignoré silencieusement.

```js example-bad
"use strict";

var obj = {};
Object.preventExtensions(obj);

obj.x = "toto";
// TypeError: can't define property "x": "obj" is not extensible
```

Pour le mode strict ete le mode non-strict, un appel à {{jsxref("Object.defineProperty()")}} déclenchera une exception lorsqu'on utilisera cette méthode pour ajouter une nouvelle propriété à un objet non-extenssible.

```js example-bad
var obj = {};
Object.preventExtensions(obj);

Object.defineProperty(obj, "x", { value: "toto" });
// TypeError: can't define property "x": "obj" is not extensible
```

Pour corriger cet erreur, il faut retirer l'appel à {{jsxref("Object.preventExtensions()")}} pour que l'objet soit extensible, soit ajouter la propriété avant que l'objet devienne non-extensible, soit retirer l'ajout de cette propriété si elle n'est pas nécessaire.

```js example-good
"use strict";

var obj = {};
obj.x = "toto"; // On ajoute la propriété avant de
// bloquer l'ajout d'autres propriétés

Object.preventExtensions(obj);
```

## Voir aussi

- {{jsxref("Object.preventExtensions()")}}

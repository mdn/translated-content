---
title: Reflect.preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/preventExtensions
---

{{JSRef}}

La méthode statique **`Reflect.preventExtensions()`** permet d'empêcher d'ajouter de nouvelles propriétés à un objet. Cette méthode est semblable à la méthode {{jsxref("Object.preventExtensions()")}} (modulo [quelques différences](#diffs)).

{{EmbedInteractiveExample("pages/js/reflect-preventextensions.html")}}

## Syntaxe

```js
Reflect.preventExtensions(cible);
```

### Paramètres

- `cible`
  - : L'objet cible dont on veut empêcher l'ajout d'autres propriétés.

### Valeur de retour

Un {{jsxref("Boolean","booléen","",1)}} qui indique si l'interdiction a bien été mise en place sur l'objet cible.

### Exceptions

Une erreur {{jsxref("TypeError")}} si `cible` n'est pas un {{jsxref("Object")}}.

## Description

La méthode `Reflect.preventExtensions` permet d'empêcher l'ajout de nouvelles propriétés sur un objet. Cette méthode est semblable à {{jsxref("Object.preventExtensions()")}}.

## Exemples

### Utiliser `Reflect.preventExtensions()`

Voir aussi {{jsxref("Object.preventExtensions()")}}.

```js
// Par défaut les objets sont extensibles
var vide = {};
Reflect.isExtensible(vide); // === true

// ...mais cela peut être modifié
Reflect.preventExtensions(vide);
Reflect.isExtensible(vide); // === false
```

### Différences avec `Object.preventExtensions()`

Si le premier argument de cette méthode n'est pas un objet (autrement dit c'est une valeur primitive), cela provoquera une {{jsxref("TypeError")}}. {{jsxref("Object.preventExtensions()")}}, quant à elle, convertira l'argument passé en un objet.

```js
Reflect.preventExtensions(1);
// TypeError: 1 is not an object

Object.preventExtensions(1);
// 1
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Reflect")}}
- {{jsxref("Object.isExtensible()")}}

---
title: Constructeur Object()
slug: Web/JavaScript/Reference/Global_Objects/Object/Object
---

{{JSRef}}

Le **constructeur `Object`** crée une enveloppe objet pour la valeur passée en argument.

- Si la valeur est [`null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/null) ou [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined), il crée et renvoie un nouvel objet vide.
- Sinon, il renvoie un objet du type correspondant à la valeur passée en argument.
- Si la valeur est déjà un objet, il renvoie la valeur.

Lorsqu'il est appelé comme une fonction plutôt que comme un constructeur (c'est-à-dire sans être précédé de l'opérateur `new`), `Object` se comporte de façon identique à `new Object()`.

## Syntaxe

```js
new Object();
new Object(valeur);
```

### Paramètres

- `valeur`
  - : N'importe quelle valeur.

## Exemples

### Créer un nouvel objet

```js
let o = new Object();
o.toto = 42;

console.log(o);
// Object { toto: 42 }
```

### Utiliser Object() avec undefined et null

Dans l'exemple suivant, on crée un objet vide dans la variable `o`&nbsp;:

```js
let o = new Object();
```

```js
let o = new Object(undefined);
```

```js
let o = new Object(null);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Initialisateur d'objet](/fr/docs/Web/JavaScript/Reference/Operators/Object_initializer)

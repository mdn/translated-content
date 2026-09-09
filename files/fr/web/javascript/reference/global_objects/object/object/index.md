---
title: Constructeur Object()
short-title: Object()
slug: Web/JavaScript/Reference/Global_Objects/Object/Object
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Le constructeur **`Object()`** transforme l'entrée en un objet. Son comportement dépend du type de l'entrée.

## Syntaxe

```js-nolint
new Object()
new Object(value)

Object()
Object(value)
```

> [!NOTE]
> `Object()` peut être appelé avec ou sans {{JSxRef("new")}}, mais parfois avec des effets différents. Voir la [valeur de retour](#valeur_de_retour).

### Paramètres

- `value` {{Optional_Inline}}
  - : N'importe quelle valeur.

### Valeur de retour

Lorsque le constructeur `Object()` lui-même est appelé ou construit, sa valeur de retour est un objet&nbsp;:

- Si la valeur est {{JSxRef("null")}} ou {{JSxRef("undefined")}}, il crée et retourne un objet vide.
- Si la valeur est déjà un objet, il retourne cette valeur.
- Sinon, il retourne un objet d'un type correspondant à la valeur donnée. Par exemple, passer un primitif {{JSxRef("BigInt")}} retourne un objet wrapper `BigInt`.

Lorsque `Object()` est construit mais que {{JSxRef("Operators/new.target", "new.target")}} n'est pas le constructeur `Object` lui-même, le comportement est légèrement différent&nbsp;: il initialise un nouvel objet avec `new.target.prototype` comme prototype. Toute valeur d'argument est ignorée. Cela peut se produire, par exemple, lorsque `Object()` est appelé implicitement avec [`super()`](/fr/docs/Web/JavaScript/Reference/Operators/super) dans le constructeur d'une classe qui [étend `Object`](/fr/docs/Web/JavaScript/Reference/Classes/extends#étendre_des_objets). Dans ce cas, même si vous passez un nombre à `super()`, la valeur de `this` à l'intérieur du constructeur ne devient pas une instance de {{JSxRef("Number")}}.

## Exemples

### Créer un nouvel objet

```js
const o = new Object();
o.toto = 42;

console.log(o);
// Object { toto: 42 }
```

### Utiliser `Object()` avec des types `undefined` et `null`

Dans l'exemple suivant, on crée un objet vide dans la variable `o`&nbsp;:

```js
const o = new Object();
```

```js
const o = new Object(undefined);
```

```js
const o = new Object(null);
```

### Obtenir des objets enveloppants pour `BigInt` et `Symbol`

Les constructeurs {{JSxRef("BigInt/BigInt", "BigInt()")}} et {{JSxRef("Symbol/Symbol", "Symbol()")}} lèvent une erreur lorsqu'ils sont appelés avec `new`, pour éviter l'erreur courante consistant à créer un objet wrapper au lieu de la valeur primitive. La seule façon de créer un objet wrapper pour ces types est d'appeler `Object()` avec eux&nbsp;:

```js
const objetNombre = new Number(1);
console.log(typeof objetNombre); // "object"

const objetGrandEntier = Object(1n);
console.log(typeof objetGrandEntier); // "object"

const objetSymbole = Object(Symbol("toto"));
console.log(typeof objetSymbole); // "object"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Initialisation d'objet](/fr/docs/Web/JavaScript/Reference/Operators/Object_initializer)

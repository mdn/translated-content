---
title: Constructeur Symbol()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/Symbol
translation_of: Web/JavaScript/Reference/Global_Objects/Symbol/Symbol
browser-compat: javascript.builtins.Symbol.Symbol
---
{{JSRef}}

Le constructeur `Symbol()` renvoie une valeur de type **`symbol`**. Ce n'est pas à proprement parler un constructeur, car il n'accepte pas la syntaxe `new Symbol()` et qu'il n'est pas prévu pour créer des sous-classes. On pourra l'utiliser comme valeur pour la clause [`extends`](/fr/docs/Web/JavaScript/Reference/Classes/extends) d'une définition de classe, mais on ne pourra pas l'utiliser avec un appel [`super`](/fr/docs/Web/JavaScript/Reference/Operators/super), cela entraînera une exception.

{{EmbedInteractiveExample("pages/js/symbol-constructor.html", "taller")}}

## Syntaxe

```js
Symbol()
Symbol(description)
```

### Paramètres

- `description` {{optional_inline}}
  - : Une chaîne de caractères qui décrit le symbole. Elle peut être utilisée pour le débogage mais ne permet pas d'accéder au symbole lui-même.

## Exemples

### Créer des symboles

Pour créer un nouveau symbole primitif, on écrit `Symbol()` en fournissant éventuellement une chaîne de caractères comme description&nbsp;:

```js
let sym1 = Symbol();
let sym2 = Symbol('toto');
let sym3 = Symbol('toto');
```

Dans le code précédent, on crée trois nouveaux symboles. On notera que `Symbol("toto")` ne convertit pas la chaîne de caractères `"toto"` en un symbole. C'est bien un nouveau symbole qui est créé chaque fois&nbsp;:

```js
Symbol('toto') === Symbol('toto');  // false
```

### `new Symbol(…)`

La syntaxe qui suit, utilisant l'opérateur [`new`](/fr/docs/Web/JavaScript/Reference/Operators/new), déclenchera une exception [`TypeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypeError)&nbsp;:

```js
let sym = new Symbol();  // TypeError
```

Cela permet d'éviter aux développeuses et développeurs de créer un objet enveloppant une valeur symbole primitive plutôt qu'un nouveau symbole. Ce comportement se distingue des autres types de données primitifs pour lesquels c'est possible (par exemple `new Boolean()`, `new String()` et `new Number()`).

Si on souhaite vraiment envelopper un symbole dans une valeur objet, il faudra utiliser la fonction `Object()`&nbsp;:

```js
let sym    = Symbol('toto');
let symObj = Object(sym);
typeof sym;    // => "symbol"
typeof symObj; // => "object"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation pour `Symbol` avec la bibliothèque d'émulation `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- [La page du glossaire sur le type de données symbole](/fr/docs/Glossary/Symbol)

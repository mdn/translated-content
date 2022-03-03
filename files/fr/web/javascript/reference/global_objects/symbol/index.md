---
title: Symbol
slug: Web/JavaScript/Reference/Global_Objects/Symbol
tags:
  - ECMAScript 2015
  - JavaScript
  - Reference
  - Symbol
translation_of: Web/JavaScript/Reference/Global_Objects/Symbol
original_slug: Web/JavaScript/Reference/Objets_globaux/Symbol
---
{{JSRef}}

Un **symbole** est un [type de données primitif](/fr/docs/Web/JavaScript/Structures_de_données#Les_valeurs_primitives) représentant une donnée unique et inchangeable qui peut être utilisée afin de représenter des identifiants pour des propriétés d'un objet. L'objet `Symbol` est un conteneur objet implicite pour le {{Glossary("Primitive", "type de données primitif")}} symbole.

{{EmbedInteractiveExample("pages/js/symbol-constructor.html")}}

## Syntaxe

    Symbol([description])

### Paramètres

- `description` {{optional_inline}}
  - : Une chaîne de caractères optionnelle. Correspond à une description du symbole, elle peut être utile pour déboguer (mais pas pour accéder au symbole).

## Description

Pour créer un nouveau symbole, il suffit d'appeler `Symbol()`, éventuellement avec une chaîne de caractère descriptive :

```js
var sym1 = Symbol();
var sym2 = Symbol("toto");
var sym3 = Symbol("toto");
```

Le fragment de code ci-dessus permet de créer trois nouveaux symboles. On notera que l'instruction `Symbol("toto")` ne convertit pas la chaîne "toto" en un symbole. On crée bien un nouveau symbole pour chaque instruction ci-avant.

```js
Symbol("toto") === Symbol("toto"); // false
```

La syntaxe suivante, utilisant l'opérateur {{jsxref("Opérateurs/L_opérateur_new", "new")}}, entraînera une exception {{jsxref("TypeError")}}:

```js
var sym = new Symbol(); // TypeError
```

Cela est fait pour empêcher d'écrire un conteneur (_wrapper_) explicite de `Symbol` plutôt qu'une nouvelle valeur, cela peut être surprenant car généralement, on peut créer des objets « autour » de types primitifs (par exemple avec `new Boolean`, `new String` et `new Number`).

Si on souhaite obtenir un object contenant un symbole, on pourra toujours utiliser la fonction `Object()` :

```js
var sym = Symbol("toto");
typeof sym;     // "symbol"
var symObj = Object(sym);
typeof symObj;  // "object"
```

### Symboles partagés et registre global des symboles

La syntaxe manipulée ci-avant, utilisant la fonction `Symbol()`, ne crée pas un symbole global, disponible partout dans votre code. Pour créer des symboles qui soient disponibles pour différents fichiers et appartiennent à l'environnement global, il faut utiliser les méthodes {{jsxref("Symbol.for()")}} et {{jsxref("Symbol.keyFor()")}} afin de définir et de récupérer les symboles listés dans le registre global.

### Trouver les propriétés identifiées par des symboles pour un objet

La méthode {{jsxref("Object.getOwnPropertySymbols()")}} renvoie un tableau de symboles, permettant ainsi de connaître les propriétés identifiées par un symbole pour un objet donné. À l'initialisation, un objet ne contient aucune propriété propre identifiée par un symbole, ce tableau sera donc vide jusqu'à ce qu'une propriété, identifiée par un symbole, lui soit ajoutée.

### Les symboles et les conversions

Lorsqu'on utilise des mécanismes de conversion de types avec les symboles, on aura le comportement suivant :

- Lorsqu'on tente de convertir un symbole en un nombre, cela provoquera une exception {{jsxref("TypeError")}} (par exemple avec `+sym` ou `sym | 0`).
- L'égalité faible permet d'obtenir `true` avec ` Object(sym) == sym``. `
- `Symbol("toto") + "truc"` lève une exception {{jsxref("TypeError")}} (le symbole ne peut pas être converti en une chaîne de caractères), cela permet par exemple d'éviter de créer (sans s'en rendre compte) des noms de propriétés basés sur des symboles.
- La méthode utilisant la conversion avec {{jsxref("String","String()")}} fonctionnera comme un appel à {{jsxref("Symbol.prototype.toString()")}}. En revanche, `new String(sym)` renverra une erreur.

## Propriétés

- `Symbol.length`
  - : La propriété length dont la valeur est 0.
- {{jsxref("Symbol.prototype")}}
  - : Cette propriété représente le prototype du constructeur `Symbol`.

### Symboles connus

En plus des symboles que vous pouvez créer, JavaScript possède certains symboles natifs représentant des aspects internes du langages qui, pour ECMAScript 5 et les versions précédentes, n'étaient pas exposées aux développeurs. Il est possible d'accéder à ces symboles en utilisant les propriétés suivantes :

#### Symboles d'itération

- {{jsxref("Symbol.iterator")}}
  - : Une méthode qui renvoie l'itérateur par défaut d'un objet. Ce symbole est utilisé par la boucle {{jsxref("Instructions/for...of","for...of")}}.
- {{jsxref("Symbol.asyncIterator")}}
  - : Une méthode qui renvoie l'itérateur asynchrone par défaut d'un objet. Ce symbole est utilisé par la boucle [`for await...of`](/fr/docs/Web/JavaScript/Reference/Instructions/for-await...of).

#### Symboles liés aux expressions rationnelles

- {{jsxref("Symbol.match")}}
  - : Une méthode qui fait correspondre une expression rationnelle avec une chaîne de caractères. Elle est aussi utilisée pour déterminer si un objet peut être utilisé comme une expression rationnelle.
- {{jsxref("Symbol.matchAll")}}
  - : Une méthode qui renvoie un itérateur permettant de parcourir l'ensemble des correspondances entre une chaîne de caractères et une expression rationnelle. Ce symbole est utilisé par {{jsxref("String.prototype.matchAll()")}}.
- {{jsxref("Symbol.replace")}}
  - : Une méthode qui remplace les sous-chaînes correspondantes dans une chaîne de caractères. Utilisée par {{jsxref("String.prototype.replace()")}}.
- {{jsxref("Symbol.search")}}
  - : Une méthode qui renvoie l'indice d'une chaîne de caractères pour lequel on a une correspondance avec une expression rationnelle. Utilisée par {{jsxref("String.prototype.search()")}}.
- {{jsxref("Symbol.split")}}
  - : Une méthode qui découpe la chaîne à l'indice donné par la correspondance avec une expression rationnelle. Utilisée par {{jsxref("String.prototype.split()")}}.

#### Autres symboles

- {{jsxref("Symbol.hasInstance")}}
  - : Une méthode qui permet de déterminer si un constructeur reconnaît un objet comme son instance. Utilisé par {{jsxref("Opérateurs/instanceof", "instanceof")}}.
- {{jsxref("Symbol.isConcatSpreadable")}}
  - : Une valeur booléenne qui indique si un objet devrait être réduit à la concaténation des éléments de son tableau via  {{jsxref("Array.prototype.concat()")}}.
- {{jsxref("Symbol.unscopables")}}
  - : Un objet dont les noms des propriétés propres et héritées sont exclues de l'objet associé lors de l'utilisation de [`with`](/fr/docs/Web/JavaScript/Reference/Instructions/with).
- {{jsxref("Symbol.species")}}
  - : Un constructeur utilisé pour construire des objets dérivés.
- {{jsxref("Symbol.toPrimitive")}}
  - : Spécifié comme @@toPrimitive. Une méthode qui convertit un objet en sa valeur primitive.
- {{jsxref("Symbol.toStringTag")}}
  - : Spécifié comme @@toStringTag. Une chaîne de caractères utilisée pour la description d'un objet. Ce symbole est utilisé par {{jsxref("Object.prototype.toString()")}}.

## Méthodes

- {{jsxref("Symbol.for()", "Symbol.for(key)")}}
  - : Recherche parmi les symboles existants un symbole désigné par cette clé. S'il est trouvé, le symbole est renvoyé, sinon un nouveau symbole est créé et enregistré avec cette clé dans le registre global des symboles.
- {{jsxref("Symbol.keyFor", "Symbol.keyFor(sym)")}}
  - : Pour un symbole donné, récupère la clé d'un symbole partagé depuis le registre global.

## Prototype `Symbol`

Tous les symboles héritent de {{jsxref("Symbol.prototype")}}.

### Propriétés

{{page('fr/docs/Web/JavaScript/Reference/Objets_globaux/Symbol/prototype','Propri.C3.A9t.C3.A9s')}}

### Méthodes

{{page('fr/docs/Web/JavaScript/Reference/Objets_globaux/Symbol/prototype','M.C3.A9thodes')}}

## Exemples

### Utiliser l'opérateur `typeof` avec des symboles

L'opérateur {{jsxref("Opérateurs/L_opérateur_typeof", "typeof")}} permet d'identifier des symboles :

```js
typeof Symbol() === 'symbol'
typeof Symbol('toto') === 'symbol'
typeof Symbol.iterator === 'symbol'
```

### Les symboles et les boucles `for...in`

Les symboles ne peuvent pas être énumérés dans les boucles [`for...in`](/fr/docs/JavaScript/Reference/Instructions/for...in). De plus, la méthode {{jsxref("Object.getOwnPropertyNames()")}} ne renverra pas les propriétés identifiées par des symboles. La méthode {{jsxref("Object.getOwnPropertySymbols()")}} permet d'avoir accès à ces propriétés.

```js
var obj = {};

obj[Symbol("a")] = "a";
obj[Symbol.for("b")] = "b";
obj["c"] = "c";
obj.d = "d";

for (var i in obj) {
   console.log(i); // enregistre "c" et "d"
}
```

### Les symboles et `JSON.stringify()`

Les propriétés identifiées par des symboles seront totalement ignorées par `JSON.stringify()`:

```js
JSON.stringify({[Symbol("toto")]: "toto"});
// '{}'
```

Pour plus de détails, voir la page {{jsxref("JSON.stringify()")}}.

### Utiliser les symboles enveloppés dans un objet

Lors qu'on on utilise un objet pour contenir la valeur du symbole et faire référence à une propriété, l'objet sera ramené au symbole d'origine :

```js
var sym = Symbol("toto")
var obj = {[sym]: 1};
obj[sym];              // 1
obj[Object(sym)];      // toujours 1
```

## Spécifications

| Spécification                                                                | État                         | Commentaires         |
| ---------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-symbol-objects', 'Symbol')}}     | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-symbol-objects', 'Symbol')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Symbol")}}

## Voir aussi

- {{Glossary("Symbole","Le type de données Symbol dans le glossaire")}}
- {{jsxref("Opérateurs/L_opérateur_typeof", "typeof")}}
- [Les types de données et les structures de données](/fr/docs/Web/JavaScript/Structures_de_données)
- [L'article ES6 en détails sur les symboles disponible sur tech.mozfr.org](https://tech.mozfr.org)

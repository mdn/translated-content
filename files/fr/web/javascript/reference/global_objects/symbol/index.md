---
title: Symbol
slug: Web/JavaScript/Reference/Global_Objects/Symbol
---

{{JSRef}}

Un objet **`Symbol`** est un objet natif dont le constructeur renvoie une valeur [primitive](/fr/docs/Glossary/Primitive) de type `symbol`. On parle de **valeur symbole** ou de **symbole**&nbsp;: il s'agit d'une valeur dont l'unicité est garantie. Les symboles sont souvent utilisés pour ajouter des clés de propriétés uniques à un objet afin que celles-ci ne rentrent pas en conflit avec des clés ajoutées par un autre code. Les symboles sont masqués des mécanismes habituellement utilisés pour parcourir les propriétés d'un objet. Cela permet une sorte d'[encapsulation](/fr/docs/Glossary/Encapsulation) faible, ou une forme faible de [masquage de l'information](https://fr.wikipedia.org/wiki/Masquage_de_l'information).

Chaque appel à `Symbol()` garantit le renvoi d'un symbole unique. Chaque appel à `Symbol.for("cle")` renverra toujours le même symbole correspondant à la valeur `"cle"`. Lorsque `Symbol.for("cle")` est appelé, si un symbole existe avec cette clé dans le registre global des symboles, il est renvoyé. Sinon, un nouveau symbole est créé et est ajouté au registre global des symboles avec cette clé puis est renvoyé.

## Description

Pour créer une nouvelle valeur primitive symbole, il suffit d'appeler `Symbol()`, éventuellement avec une chaîne de caractères descriptive&nbsp;:

```js
let sym1 = Symbol();
let sym2 = Symbol("toto");
let sym3 = Symbol("toto");
```

Le fragment de code ci-dessus permet de créer trois nouveaux symboles. On notera que l'instruction `Symbol('toto')` ne convertit pas la chaîne `'toto'` en un symbole. On crée bien un nouveau symbole pour chaque instruction ci-avant.

```js
Symbol("toto") === Symbol("toto"); // false
```

La syntaxe suivante, utilisant l'opérateur [`new`](/fr/docs/Web/JavaScript/Reference/Operators/new), entraînera une exception [`TypeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypeError)&nbsp;:

```js
let sym = new Symbol(); // TypeError
```

Cela est fait pour empêcher d'écrire une enveloppe (<i lang="en">wrapper</i>) explicite de `Symbol` plutôt qu'une nouvelle valeur. Cela peut être surprenant, car généralement, on peut créer des objets enveloppant des types primitifs (par exemple avec `new Boolean`, `new String` et `new Number`).

Si on souhaite obtenir un object contenant un symbole, on pourra toujours utiliser la fonction `Object()`&nbsp;:

```js
let sym = Symbol("toto");
typeof sym; // "symbol"
let symObj = Object(sym);
typeof symObj; // "object"
```

### Symboles partagés et registre global des symboles

La syntaxe manipulée ci-avant, utilisant la fonction `Symbol()`, ne crée pas un symbole global, disponible partout dans votre code. Pour créer des symboles qui soient disponibles pour différents fichiers et appartiennent à l'environnement global, il faut utiliser les méthodes [`Symbol.for()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/for) et [`Symbol.keyFor()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/keyFor) afin de définir et de récupérer les symboles listés dans le registre global.

### Trouver les propriétés identifiées par des symboles pour un objet

La méthode [`Object.getOwnPropertySymbols()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols) renvoie un tableau de symboles, permettant ainsi de connaître les propriétés identifiées par un symbole pour un objet donné. À l'initialisation, un objet ne contient aucune propriété propre identifiée par un symbole, ce tableau sera donc vide jusqu'à ce qu'une propriété, identifiée par un symbole, lui soit ajoutée.

## Constructeur

- [`Symbol()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol)
  - : Crée un nouvel objet `Symbol`. Il ne s'agit pas d'un constructeur au sens strict, car il ne prend pas en charge la syntaxe `new Symbol()`.

## Propriétés statiques

- [`Symbol.asyncIterator`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator)
  - : Une méthode qui renvoie l'itérateur asynchrone par défaut d'un objet. Utilisée par [`for await…of`](/fr/docs/Web/JavaScript/Reference/Statements/for-await...of).
- [`Symbol.hasInstance`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance)
  - : Une méthode qui détermine si le constructeur d'un objet reconnaît un objet comme une de ses instances. Utilisée par [`instanceof`](/fr/docs/Web/JavaScript/Reference/Operators/instanceof).
- [`Symbol.isConcatSpreadable`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable)
  - : Un booléen qui indique si un objet devrait être aplati avec ses éléments de tableau. Utilisée par [`Array.prototype.concat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/concat).
- [`Symbol.iterator`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)
  - : Une méthode renvoyant l'itérateur par défaut d'un objet. Utilisée par [`for…of`](/fr/docs/Web/JavaScript/Reference/Statements/for...of).
- [`Symbol.match`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/match)
  - : Une méthode qui cherche des correspondances sur une chaîne de caractères et qui peut aussi être utilisée afin de déterminer si un objet peut être utilisé comme expression rationnelle. Utilisée par [`String.prototype.match()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/match).
- [`Symbol.matchAll`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/matchAll)
  - : Une méthode qui renvoie un itérateur fournissant les correspondances entre une expression rationnelle et une chaîne de caractères. Utilisée par [`String.prototype.matchAll()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll).
- [`Symbol.replace`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)
  - : Une méthode qui remplace les correspondances trouvées dans une chaîne de caractères. Utilisée par [`String.prototype.replace()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/replace).
- [`Symbol.search`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/search)
  - : Une méthode qui renvoie l'indice d'une chaîne de caractères indiquant où se situe une correspondance par rapport à une expression rationnelle. Utilisée par [`String.prototype.search()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/search).
- [`Symbol.split`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/split)
  - : Une méthode qui divise une chaîne de caractères aux indices des correspondances par rapport à une expression rationnelle. Utilisée par [`String.prototype.split()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/split).
- [`Symbol.species`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species)
  - : Une fonction de construction utilisée pour créer des objets dérivés.
- [`Symbol.toPrimitive`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)
  - : Une méthode convertissant un objet en valeur primitive.
- [`Symbol.toStringTag`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)
  - : Une chaîne de caractères utilisée pour la description par défaut d'un objet. Utilisée par [`Object.prototype.toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/toString).
- [`Symbol.unscopables`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/unscopables)
  - : Un objet dont les noms des propriétés propres et héritées ont exclues des liaisons d'environnement [`with`](/fr/docs/Web/JavaScript/Reference/Statements/with) de l'objet correspondant.

## Méthodes statiques

- [`Symbol.for(cle)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/for)
  - : Recherche les symboles existants avec la clé fournie en argument et les renvoie s'il y en a. Dans le cas contraire, un nouveau symbole est créé au sein du registre global avec cette clé.
- [`Symbol.keyFor(sym)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/keyFor)
  - : Récupère la clé d'un symbole donné au sein du registre global.

## Propriétés des instances

- [`Symbol.prototype.description`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description)
  - : Une chaîne de caractères accessible en lecture seule et qui contient la description du symbole.

## Méthodes des instances

- [`Symbol.prototype.toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toString)
  - : Renvoie une chaîne de caractères contenant la description du symbole. Il s'agit d'une surcharge de la méthode [`Object.prototype.toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/toString).
- [`Symbol.prototype.valueOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/valueOf)
  - : Renvoie le symbole. Il s'agit d'une surcharge de la méthode [`Object.prototype.valueOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf).
- [`Symbol.prototype[@@toPrimitive]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/@@toPrimitive)
  - : Renvoie le symbole.

## Exemples

### Utiliser l'opérateur `typeof` avec des symboles

L'opérateur [`typeof`](/fr/docs/Web/JavaScript/Reference/Operators/typeof) permet d'identifier des symboles&nbsp;:

```js
typeof Symbol() === "symbol";
typeof Symbol("toto") === "symbol";
typeof Symbol.iterator === "symbol";
```

### Les symboles et les conversions

Lorsqu'on utilise des mécanismes de conversion de types avec les symboles, on aura le comportement suivant&nbsp;:

- Lorsqu'on tente de convertir un symbole en un nombre, cela provoquera une exception [`TypeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypeError) (par exemple avec `+sym` ou `sym | 0`).
- L'égalité faible permet d'obtenir `true` avec `Object(sym) == sym`.
- `Symbol("toto") + "truc"` lève une exception [`TypeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypeError) (le symbole ne peut pas être converti en une chaîne de caractères), cela permet par exemple d'éviter de créer (sans s'en rendre compte) des noms de propriétés basés sur des symboles.
- La méthode utilisant la conversion avec [`String()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#conversion_en_chaîne_de_caractères) fonctionnera comme un appel à [`Symbol.prototype.toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toString). En revanche, `new String(sym)` renverra une erreur.

### Les symboles et les boucles `for…in`

Les symboles ne peuvent pas être énumérés dans les boucles [`for…in`](/fr/docs/Web/JavaScript/Reference/Statements/for...in). De plus, la méthode [`Object.getOwnPropertyNames()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames) ne renverra pas les propriétés identifiées par des symboles. La méthode [`Object.getOwnPropertySymbols()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols) permet d'avoir accès à ces propriétés.

```js
let obj = {};

obj[Symbol("a")] = "a";
obj[Symbol.for("b")] = "b";
obj["c"] = "c";
obj.d = "d";

for (let i in obj) {
  console.log(i); // affiche "c" et "d"
}
```

### Les symboles et `JSON.stringify()`

Les propriétés identifiées par des symboles seront totalement ignorées par `JSON.stringify()`&nbsp;:

```js
JSON.stringify({ [Symbol("toto")]: "toto" });
// '{}'
```

Pour plus de détails, voir la page [`JSON.stringify()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

### Utiliser les symboles enveloppés dans un objet

Lorsqu'on utilise un objet pour contenir la valeur du symbole et faire référence à une propriété, l'objet sera ramené au symbole d'origine&nbsp;:

```js
let sym = Symbol("toto");
let obj = { [sym]: 1 };
obj[sym]; // 1
obj[Object(sym)]; // toujours 1
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Une prothèse d'émulation de `Symbol` dans la bibliothèque `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- [La page du glossaire sur le type de données symbole](/fr/docs/Glossary/Symbol)
- [`typeof`](/fr/docs/Web/JavaScript/Reference/Operators/typeof)
- [Types et structures de données en JavaScript](/fr/docs/Web/JavaScript/Data_structures)
- [L'article ES6 en détails sur les symboles, disponible sur tech.mozfr.org](https://tech.mozfr.org/post/2015/06/21/ES6-en-details-%3A-les-symboles)

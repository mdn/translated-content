---
title: L'opérateur typeof
short-title: typeof
slug: Web/JavaScript/Reference/Operators/typeof
l10n:
  sourceCommit: d19713a0df638c5a46deecd8b8075d27146c7bea
---

L'opérateur **`typeof`** retourne une chaîne de caractères indiquant le type de la valeur de son opérande.

{{InteractiveExample("Démonstration JavaScript&nbsp;: l'opérateur typeof")}}

```js interactive-example
console.log(typeof 42);
// Sortie attendue : "number"

console.log(typeof "blubber");
// Sortie attendue : "string"

console.log(typeof true);
// Sortie attendue : "boolean"

console.log(typeof undeclaredVariable);
// Sortie attendue : "undefined"
```

## Syntaxe

```js-nolint
typeof operand
```

### Paramètre

- `operand`
  - : Une expression représentant l'objet ou la valeur {{Glossary("primitive")}} dont on souhaite obtenir le type.

## Description

Le tableau qui suit liste les résultats possibles de l'opérateur `typeof`. Pour plus d'informations sur les types et valeurs primitives en JavaScript, voir la page sur [les types et structures de données JavaScript](/fr/docs/Web/JavaScript/Guide/Data_structures).

| Type                                                                                                                                                                                                             | Résultat                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [Indéfini](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined)                                                                                                                                           | `"undefined"`                       |
| [Nul](/fr/docs/Web/JavaScript/Reference/Operators/null)                                                                                                                                                          | `"object"` ([reason](#typeof_null)) |
| [Booléen](/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean)                                                                                                                                              | `"boolean"`                         |
| [Nombre](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number)                                                                                                                                                | `"number"`                          |
| [Grand Entier](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt)                                                                                                                                          | `"bigint"`                          |
| [Chaîne de caractères](/fr/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                                                  | `"string"`                          |
| [Symbole](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol)                                                                                                                                               | `"symbol"`                          |
| [Fonction](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function) (implémente [[Call]] selon ECMA-262&nbsp;; les [classes](/fr/docs/Web/JavaScript/Reference/Statements/class) sont également des fonctions) | `"function"`                        |
| Tout autre objet                                                                                                                                                                                                 | `"object"`                          |

Cette liste de valeurs est exhaustive. Aucun moteur conforme aux spécifications n'est signalé pour produire (ou n'a historiquement produit) des valeurs autres que celles énumérées.

## Exemples

### Utilisation simple

```js
// Pour les nombres
typeof 37 === "number";
typeof 3.14 === "number";
typeof 42 === "number";
typeof Math.LN2 === "number";
typeof Infinity === "number";
typeof NaN === "number"; // Bien que littéralement ce soit "Not-A-Number"
typeof Number("1") === "number"; // Number essaie de convertir l'argument en nombre
typeof Number("chaussure") === "number"; // cela vaut également pour les valeurs qui ne peuvent pas être converties

typeof 42n === "bigint";

// Les chaînes de caractères
typeof "" === "string";
typeof "bla" === "string";
typeof `gabarit de chaîne` === "string";
typeof "1" === "string"; // on a ici un nombre écrit sous forme d'une chaîne de caractères
typeof typeof 1 === "string"; // typeof retourne toujours une chaîne de caractères
typeof String(1) === "string"; // String convertit n'importe quelle valeur en chaîne de caractères

// Les booléens
typeof true === "boolean";
typeof false === "boolean";
typeof Boolean(1) === "boolean"; // Boolean convertit n'importe quelle valeur en son équivalent logique
typeof !!1 === "boolean"; // deux appels à l'opérateur ! (le NON logique) sont équivalents à Boolean()

// Les symboles
typeof Symbol() === "symbol";
typeof Symbol("toto") === "symbol";
typeof Symbol.iterator === "symbol";

// Indéfini
typeof undefined === "undefined";
typeof variableDeclareeMaisIndefinie === "undefined";
typeof variableNonDeclaree === "undefined";

// Les objets
typeof { a: 1 } === "object";

// Utiliser la méthode Array.isArray ou Object.prototype.toString.call
// afin de différencier les objets des tableaux
typeof [1, 2, 4] === "object";

typeof new Date() === "object";
typeof /regex/ === "object";

// Les éléments suivants sont source de confusion, dangereux et inutiles. Évitez-les.
typeof new Boolean(true) === "object";
typeof new Number(1) === "object";
typeof new String("abc") === "object";

// Les fonctions
typeof function () {} === "function";
typeof class C {} === "function";
typeof Math.sin === "function";
```

### `typeof null`

```js
// Cela est valable depuis les commencements de JavaScript
typeof null === "object";
```

Dans la première implémentation de JavaScript, les valeurs JavaScript étaient représentées par une balise de type et une valeur. La balise de type pour les objets était `0`. `null` était représenté comme le pointeur NULL (`0x00` sur la plupart des plateformes). Par conséquent, `null` avait `0` comme balise de type, d'où la valeur de retour de `typeof` `"object"`. ([référence <sup>(angl.)</sup>](https://2ality.com/2013/10/typeof-null.html))

Une correction a été proposée pour ECMAScript (avec une option à activer), mais [a été rejetée <sup>(angl.)</sup>](https://web.archive.org/web/20160331031419/http://wiki.ecmascript.org:80/doku.php?id=harmony:typeof_null). Cela aurait donné `typeof null === "null"`.

### Utiliser l'opérateur `new`

Tous les constructeurs appelés avec [`new`](/fr/docs/Web/JavaScript/Reference/Operators/new) retourneront des valeurs non primitives (`"object"` ou `"function"`). La plupart retournent des objets, à l'exception notable de [`Function`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function), qui retourne une fonction.

```js
const str = new String("String");
const num = new Number(100);

typeof str; // "object"
typeof num; // "object"

const func = new Function();

typeof func; // "function"
```

### Nécessité des parenthèses dans la syntaxe

L'opérateur `typeof` a une [priorité](/fr/docs/Web/JavaScript/Reference/Operators/Operator_precedence) plus élevée que les opérateurs binaires tels que l'addition (`+`). Par conséquent, des parenthèses sont nécessaires pour évaluer le type d'un résultat d'addition.

```js
// Les parenthèses peuvent être utilisées pour déterminer le type de données des expressions.
const uneDonnee = 99;

typeof uneDonnee + " toto"; // "number toto"
typeof (uneDonnee + " toto"); // "string"
```

### Interaction avec les variables non déclarées et non initialisées

`typeof` fonctionne avec les identifiants non déclarés, retournant `"undefined"` au lieu de lancer une erreur.

```js
typeof variableNonDeclaree; // "undefined"
```

Cependant, utiliser `typeof` sur des déclarations lexicales ({{JSxRef("Statements/let", "let")}} {{JSxRef("Statements/const", "const")}}, {{JSxRef("Statements/using", "using")}} {{JSxRef("Statements/await_using", "await using")}} et {{JSxRef("Statements/class", "class")}}) dans le même bloc avant le lieu de déclaration générera une {{JSxRef("ReferenceError")}}. Les variables à portée de bloc se trouvent dans une _[zone morte temporelle](/fr/docs/Web/JavaScript/Reference/Statements/let#zone_morte_temporaire_temporal_dead_zone_tdz)_ depuis le début du bloc jusqu'à ce que l'initialisation soit traitée, période pendant laquelle une erreur sera levée si elles sont accessibles.

```js example-bad
typeof newLetVariable; // ReferenceError
typeof newConstVariable; // ReferenceError
typeof newClass; // ReferenceError

let newLetVariable;
const newConstVariable = "bonjour";
class newClass {}
```

Voir [l'opérateur `typeof` et `undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined#lopérateur_typeof_et_undefined) pour plus de détails.

### Comportement exceptionnel de `document.all`

Tous les navigateurs actuels exposent un objet hôte non standard {{DOMxRef("Document.all", "document.all")}} avec le type `undefined`.

```js
typeof document.all === "undefined";
```

Bien que `document.all` soit également {{Glossary("falsy", "équivalent à faux")}} et [égal à `undefined` de manière lâche](/fr/docs/Web/JavaScript/Reference/Operators/Equality), il n'est pas [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined). Le cas de `document.all` ayant le type `"undefined"` est classé dans les standards web comme une «&nbsp;violation volontaire&nbsp;» de la norme ECMAScript originale pour la compatibilité web.

### Méthode personnalisée qui obtient un type plus spécifique

`typeof` est très utile, mais il n'est pas aussi polyvalent que nécessaire. Par exemple, `typeof []` est `"object"`, tout comme `typeof new Date()`, `typeof /abc/`, etc.

Pour une plus grande spécificité dans la vérification des types, nous présentons une fonction personnalisée `type(value)`, qui imite en grande partie le comportement de `typeof`, mais pour les non-primitifs (c'est-à-dire les objets et les fonctions), elle retourne un nom de type plus granulaire lorsque cela est possible.

```js
function type(value) {
  if (value === null) {
    return "null";
  }
  const baseType = typeof value;
  // Types primitifs
  if (!["object", "function"].includes(baseType)) {
    return baseType;
  }

  // Symbol.toStringTag définit souvent le "nom d'affichage" de la
  // classe de l'objet. Il est utilisé dans Object.prototype.toString().
  const tag = value[Symbol.toStringTag];
  if (typeof tag === "string") {
    return tag;
  }

  // Si c'est une fonction dont le code source commence par le mot-clé "class"
  if (
    baseType === "function" &&
    Function.prototype.toString.call(value).startsWith("class")
  ) {
    return "class";
  }

  // Le nom du constructeur ; par exemple `Array`, `GeneratorFunction`,
  // `Number`, `String`, `Boolean` ou `MyCustomClass`
  const className = value.constructor.name;
  if (typeof className === "string" && className !== "") {
    return className;
  }

  // À ce stade, il n'existe pas de méthode robuste pour obtenir le type
  // de la valeur, donc nous utilisons l'implémentation de base.
  return baseType;
}
```

Pour vérifier des variables potentiellement inexistantes qui autrement déclencheraient une {{JSxRef("ReferenceError")}}, utilisez `typeof nonExistentVar === "undefined"` car ce comportement ne peut pas être imité avec du code personnalisé.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'opérateur {{JSxRef("Operators/instanceof", "instanceof")}}
- [La violation délibérée de la norme par `document.all` <sup>(angl.)</sup>](https://github.com/tc39/ecma262/issues/668)

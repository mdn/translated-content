---
title: Boolean
slug: Web/JavaScript/Reference/Global_Objects/Boolean
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Les valeurs **`Boolean`** peuvent être l'une des deux valeurs&nbsp;: `true` ou `false`, représentant la valeur de vérité d'une proposition logique.

## Description

Les valeurs booléennes sont généralement produites par les [opérateurs relationnels](/fr/docs/Web/JavaScript/Reference/Operators#opérateurs_relationnels), les [opérateurs d'égalité](/fr/docs/Web/JavaScript/Reference/Operators#opérateurs_dégalité) et l'[opérateur logique NOT (`!`)](/fr/docs/Web/JavaScript/Reference/Operators/Logical_NOT). Elles peuvent aussi être produites par des fonctions qui représentent des conditions, comme {{JSxRef("Array.isArray()")}}. Notez que les [opérateurs logiques binaires](/fr/docs/Web/JavaScript/Reference/Operators#opérateurs_logiques) tels que `&&` et `||` retournent les valeurs des opérandes, qui peuvent ou non être des valeurs booléennes.

Les valeurs booléennes sont généralement utilisées dans des tests conditionnels, comme la condition des instructions {{JSxRef("Statements/if...else", "if...else")}} et {{JSxRef("Statements/while", "while")}}, l'[opérateur conditionnel](/fr/docs/Web/JavaScript/Reference/Operators/Conditional_operator) (`? :`) ou la valeur de retour prédicat de {{JSxRef("Array.prototype.filter()")}}.

Vous aurez rarement besoin de convertir explicitement quelque chose en une valeur booléenne, car JavaScript le fait automatiquement dans les contextes booléens, vous pouvez donc utiliser n'importe quelle valeur comme si c'était un booléen, en fonction de son [équivalent à vrai](#coercition_booléenne). Il est conseillé d'utiliser `if (condition)` et `if (!condition)` plutôt que `if (condition === true)` ou `if (condition === false)` dans votre code afin de profiter de cette convention. Cependant, veiller à ce que les valeurs représentant des conditions soient toujours des booléens peut aider à clarifier l'intention de votre code.

```js
// Faites ceci :
// Ça retourne toujours une valeur booléenne
const isObject = (obj) => !!obj && typeof obj === "object";

// Ou ceci :
const isObject = (obj) => Boolean(obj) && typeof obj === "object";

// Ou ceci :
const isObject = (obj) => obj !== null && typeof obj === "object";

// Au lieu de ceci :
// Cela peut retourner des valeurs falsy qui ne sont pas égales à false
const isObject = (obj) => obj && typeof obj === "object";
```

### Primitives booléennes et objets `Boolean`

Pour convertir des valeurs non booléennes en booléen, utilisez `Boolean` comme fonction ou l'opérateur [de double négation](/fr/docs/Web/JavaScript/Reference/Operators/Logical_NOT#double_non_!!). N'utilisez pas le constructeur `Boolean()` avec `new`.

```js example-good
const good = Boolean(expression);
const good2 = !!expression;
```

```js example-bad
const bad = new Boolean(expression); // n'utilisez pas ceci !
```

En effet, tous les objets, y compris un objet `Boolean` dont la valeur encapsulée est `false`, sont {{Glossary("truthy", "équivalent à vrai")}} et sont évalués à `true` dans des endroits comme les instructions conditionnelles. (Voir aussi la section [coercition booléenne](#coercition_booléenne) ci‑dessous.)

```js
if (new Boolean(true)) {
  console.log("Ce journal est affiché.");
}

if (new Boolean(false)) {
  console.log("Ce journal est AUSSI affiché.");
}

const myFalse = new Boolean(false); // myFalse est un objet Boolean (pas la valeur primitive false)
const g = Boolean(myFalse); // g vaut true
const myString = new String("Hello"); // myString est un objet String
const s = Boolean(myString); // s vaut true
```

> [!WARNING]
> Il est rarement nécessaire d'utiliser `Boolean` comme constructeur.

### Coercition booléenne

De nombreuses opérations intégrées qui attendent des booléens convertissent d'abord leurs arguments en booléens. [L'opération <sup>(angl.)</sup>](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toboolean) peut être résumée ainsi&nbsp;:

- Les booléens sont retournés tels quels.
- [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) devient `false`.
- [`null`](/fr/docs/Web/JavaScript/Reference/Operators/null) devient `false`.
- `0`, `-0` et `NaN` deviennent `false`&nbsp;; les autres nombres deviennent `true`.
- `0n` devient `false`&nbsp;; les autres [BigInts](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt) deviennent `true`.
- La chaîne vide `""` devient `false`&nbsp;; les autres chaînes de caractères deviennent `true`.
- [Symboles](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol) deviennent `true`.
- Tous les objets deviennent `true`.

> [!NOTE]
> Un comportement historique fait que [`document.all`](/fr/docs/Web/API/Document/all) retourne `false` lorsqu'il est utilisé comme booléen, malgré le fait que c'est un objet. Cette propriété est historique et non standard et ne doit pas être utilisée.

> [!NOTE]
> Contrairement à d'autres conversions de type comme la [conversion en chaîne de caractères](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#conversion_en_chaîne_de_caractères) ou la [conversion en nombre](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#conversion_en_nombre), la conversion booléenne n'essaie pas de [convertir les objets en valeurs primitives](/fr/docs/Web/JavaScript/Guide/Data_structures#conversion_de_primitive) en appelant des méthodes définies par l'utilisateur·ice.

En d'autres termes, seules quelques valeurs sont converties en `false` — ce sont les [valeurs équivalentes à faux](/fr/docs/Glossary/Falsy). Toutes les autres valeurs sont des [valeurs équivalentes à vrai](/fr/docs/Glossary/Truthy). L'équivalence à vrai d'une valeur est importante lorsqu'elle est utilisée avec des opérateurs logiques, des instructions conditionnelles ou tout contexte booléen.

Il existe deux façons d'obtenir le même effet en JavaScript.

- [Double négation](/fr/docs/Web/JavaScript/Reference/Operators/Logical_NOT#double_non_!!)&nbsp;: `!!x` fait la négation de `x` deux fois, ce qui convertit `x` en booléen en utilisant le même algorithme que ci-dessus.
- La fonction [`Boolean()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean)&nbsp;: `Boolean(x)` utilise le même algorithme que ci-dessus pour convertir `x`.

Notez que l'équivalent à vrai n'est pas la même chose que d'être [faiblement égal](/fr/docs/Web/JavaScript/Reference/Operators/Equality) à `true` ou `false`.

```js
if ([]) {
  console.log("[] est équivalent à vrai");
}
if ([] == false) {
  console.log("[] == false");
}
// [] est équivalent à vrai
// [] == false
```

`[]` est équivalent à vrai, mais il est aussi faiblement égal à `false`. Il est équivalent à vrai, car tous les objets sont équivalents à vrai. Cependant, lors d'une comparaison avec `false`, qui est une valeur primitive, `[]` est aussi converti en une valeur primitive, qui est `""` via {{JSxRef("Array.prototype.toString()")}}. Comparer des chaînes de caractères et des booléens fait que les deux sont [convertis en nombres](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#conversion_en_nombre), et ils deviennent tous deux `0`, donc `[] == false` vaut `true`. En général, l'équivalence à faux et `== false` diffèrent dans les cas suivants&nbsp;:

- `NaN`, `undefined` et `null` sont équivalents à faux mais ne sont pas faiblement égaux à `false`.
- `"0"` (et d'autres littéraux de chaîne de caractères qui ne sont pas `""` mais [sont convertis en 0](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#conversion_en_nombre)) est équivalent à vrai mais faiblement égal à `false`.
- Les objets sont toujours équivalents à vrai, mais leur représentation primitive peut être faiblement égale à `false`.

Les valeurs équivalentes à vrai sont encore moins susceptibles d'être faiblement égales à `true`. Toutes les valeurs sont soit équivalentes à vrai, soit équivalentes à faux, mais la plupart des valeurs ne sont faiblement égales ni à `true` ni à `false`.

## Constructeur

- {{JSxRef("Boolean/Boolean", "Boolean()")}}
  - : Crée un nouvel objet `Boolean`.

## Propriétés d'instance

Ces propriétés sont définies sur `Boolean.prototype` et partagées par toutes les instances de `Boolean`.

- {{JSxRef("Object/constructor", "Boolean.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'objet instance. Pour les instances de `Boolean`, la valeur initiale est le constructeur {{JSxRef("Boolean/Boolean", "Boolean()")}}.

## Méthodes d'instances

- {{JSxRef("Boolean.prototype.toString()")}}
  - : Retourne une chaîne de caractères qui est `"true"` ou `"false"` selon la valeur de l'objet. Il s'agit d'une surcharge de la méthode {{JSxRef("Object.prototype.toString()")}}.
- {{JSxRef("Boolean.prototype.valueOf()")}}
  - : Retourne la valeur primitive de l'objet `Boolean`. Il s'agit d'une surcharge de la méthode {{JSxRef("Object.prototype.valueOf()")}}.

## Exemples

### Les valeurs `false`

```js
const bSansParam = Boolean();
const bZero = Boolean(0);
const bNull = Boolean(null);
const bChaineVide = Boolean("");
const bfalse = Boolean(false);
```

### Les valeurs `true`

```js
const btrue = Boolean(true);
const bChaineTrue = Boolean("true");
const bChaineFalse = Boolean("false");
const bSuLin = Boolean("Su Lin");
const bArrayProto = Boolean([]);
const bObjProto = Boolean({});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'entrée de glossaire {{Glossary("Boolean", "Booléen")}}
- [Valeurs primitives booléennes](/fr/docs/Web/JavaScript/Guide/Data_structures#les_valeurs_primitives)
- [Le type de données booléen](https://fr.wikipedia.org/wiki/Booléen) sur Wikipédia

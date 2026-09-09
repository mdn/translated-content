---
title: "Object : méthode toString()"
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toString
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`toString()`** des instances de {{JSxRef("Object")}} retourne une chaîne de caractères représentant cet objet. Cette méthode est destinée à être surchargée par les objets dérivés pour une logique personnalisée de [conversion de type](/fr/docs/Web/JavaScript/Guide/Data_structures#conversion_de_type).

{{InteractiveExample("Démonstration JavaScript&nbsp;: Object.prototype.toString()")}}

```js interactive-example
const map = new Map();

console.log(map.toString());
// Résultat attendu : "[object Map]"
```

## Syntaxe

```js-nolint
toString()
```

### Paramètres

Par défaut, `toString()` ne prend aucun paramètre. Cependant, les objets qui héritent de `Object` peuvent la surcharger avec leurs propres implémentations qui prennent des paramètres. Par exemple, les méthodes {{JSxRef("Number.prototype.toString()")}} et {{JSxRef("BigInt.prototype.toString()")}} prennent un paramètre optionnel `radix`.

### Valeur de retour

Une chaîne de caractères représentant l'objet.

## Description

JavaScript fait appel à la méthode `toString` pour [convertir un objet en une valeur primitive](/fr/docs/Web/JavaScript/Guide/Data_structures#conversion_de_type). Vous n'avez que rarement besoin d'appeler vous-même la méthode `toString`&nbsp;; JavaScript l'appelle automatiquement lorsqu'il rencontre un objet là où une valeur primitive est attendue.

Cette méthode est appelée en priorité lors de la [conversion en chaîne de caractères](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#conversion_en_chaîne_de_caractères), mais la [conversion numérique](/fr/docs/Web/JavaScript/Guide/Data_structures#conversion_numérique) et la [conversion en valeur primitive](/fr/docs/Web/JavaScript/Guide/Data_structures#conversion_en_primitive) appellent `valueOf()` en priorité.
Cependant, comme la méthode de base {{JSxRef("Object/valueOf", "valueOf()")}} retourne un objet, la méthode `toString()` est généralement appelée à la fin, sauf si l'objet surcharge `valueOf()`. Par exemple, `+[1]` retourne `1`, car sa méthode {{JSxRef("Array/toString", "toString()")}} retourne `"1"`, qui est ensuite convertie en nombre.

Tous les objets qui héritent de `Object.prototype` (c'est-à-dire tous sauf les [objets avec prototype `null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object#objets_avec_prototype_null)) héritent de la méthode `toString()`. Lorsque vous créez un objet personnalisé, vous pouvez surcharger `toString()` pour appeler une méthode personnalisée, afin que votre objet personnalisé puisse être converti en une valeur de chaîne de caractères. Alternativement, vous pouvez ajouter une méthode {{JSxRef("Symbol/toPrimitive", "[Symbol.toPrimitive]()")}}, qui permet un contrôle encore plus précis du processus de conversion, et est toujours préférée à `valueOf` ou `toString` pour toute conversion de type.

Pour utiliser la méthode de base `Object.prototype.toString()` avec un objet dont cette méthode a été redéfinie (ou pour l'appeler sur `null` ou `undefined`), vous devez appeler {{JSxRef("Function.prototype.call()")}} ou {{JSxRef("Function.prototype.apply()")}} sur celui-ci, en passant l'objet que vous souhaitez inspecter en premier paramètre (appelé `thisArg`).

```js
const tableau = [1, 2, 3];

tableau.toString(); // "1,2,3"
Object.prototype.toString.call(tableau); // "[object Array]"
```

`Object.prototype.toString()` retourne `"[object Type]"`, où `Type` est le type de l'objet. Si l'objet possède une propriété {{JSxRef("Symbol.toStringTag")}} dont la valeur est une chaîne de caractères, cette valeur est utilisée comme `Type`. De nombreux objets intégrés, y compris {{JSxRef("Map")}} et {{JSxRef("Symbol")}}, possèdent un `Symbol.toStringTag`. Certains objets antérieurs à ES6 ne possèdent pas de `Symbol.toStringTag`, mais ont néanmoins une étiquette spéciale. Ils incluent (l'étiquette est la même que le nom du type donné ci-dessous)&nbsp;:

- {{JSxRef("Array")}}
- {{JSxRef("Function")}} (n'importe quoi dont {{JSxRef("typeof")}} retourne `"function"`)
- {{JSxRef("Error")}}
- {{JSxRef("Boolean")}}
- {{JSxRef("Number")}}
- {{JSxRef("String")}}
- {{JSxRef("Date")}}
- {{JSxRef("RegExp")}}

L'objet {{JSxRef("Functions/arguments", "arguments")}} retourne `"[object Arguments]"`. Tout le reste, y compris les classes définies par l'utilisateur·ice, sauf si elles possèdent un `Symbol.toStringTag` personnalisé, retourne `"[object Object]"`.

L'invocation de `Object.prototype.toString()` sur {{JSxRef("null")}} et {{JSxRef("undefined")}} retourne `[object Null]` et `[object Undefined]`, respectivement.

## Exemples

### Surcharger la méthode `toString()` par défaut

Vous pouvez créer une fonction qui est appelée à la place de la méthode `toString()` par défaut. La fonction `toString()` que vous créez doit retourner une valeur de type chaîne de caractères. Si elle retourne un objet et que la méthode est appelée implicitement lors d'une [conversion de type](/fr/docs/Web/JavaScript/Guide/Data_structures#type_coercion), alors son résultat est ignoré et la valeur d'une méthode connexe, {{JSxRef("Object/valueOf", "valueOf()")}}, est utilisée à la place, ou une `TypeError` est levée si aucune de ces méthodes ne retourne un primitif.

Le code qui suit définit une classe `Chien`.

```js
class Chien {
  constructor(nom, race, couleur, sexe) {
    this.nom = nom;
    this.race = race;
    this.couleur = couleur;
    this.sexe = sexe;
  }
}
```

Si vous appelez la méthode `toString()`, que ce soit explicitement ou implicitement, sur une instance de `Chien`, elle retourne la valeur par défaut héritée de {{JSxRef("Object")}}&nbsp;:

```js
const leCHien = new Chien("Gabby", "Labrador", "chocolat", "femelle");

leChien.toString(); // "[object Object]"
`${leChien}`; // "[object Object]"
```

Le code suivant redéfinit la méthode par défaut `toString()`. Cette méthode génère une chaîne de caractères contenant le `nom`, la `race`, la `couleur` et le `sexe` de l'objet.

```js
class Chien {
  constructor(nom, race, couleur, sexe) {
    this.nom = nom;
    this.race = race;
    this.couleur = couleur;
    this.sexe = sexe;
  }
  toString() {
    return `Chien ${this.nom} est un·e ${this.sexe} ${this.couleur} ${this.race}`;
  }
}
```

Avec le code précédent en place, chaque fois qu'une instance de `Chien` est utilisée dans un contexte de chaîne de caractères, JavaScript appelle automatiquement la méthode `toString()`.

```js
const leChien = new Chien("Gabby", "Labrador", "chocolat", "femelle");

`${leChien}`; // "Chien Gabby est un·e femelle chocolat Labrador"
```

### Utiliser `toString()` pour détecter la classe d'un objet

`toString()` peut être utilisé avec chaque objet et (par défaut) permet d'obtenir sa classe.

```js
const toString = Object.prototype.toString;

toString.call(new Date()); // [object Date]
toString.call(new String()); // [object String]
// Math a sa propre propriété Symbol.toStringTag
toString.call(Math); // [object Math]

toString.call(undefined); // [object Undefined]
toString.call(null); // [object Null]
```

L'utilisation de `toString()` de cette manière n'est pas fiable&nbsp;; les objets peuvent modifier le comportement de `Object.prototype.toString()` en définissant une propriété {{JSxRef("Symbol.toStringTag")}}, ce qui conduit à des résultats inattendus. Par exemple&nbsp;:

```js
const maDate = new Date();
Object.prototype.toString.call(maDate); // [object Date]

maDate[Symbol.toStringTag] = "maDate";
Object.prototype.toString.call(maDate); // [object maDate]

Date.prototype[Symbol.toStringTag] = "prototype pollué";
Object.prototype.toString.call(new Date()); // [object prototype pollué]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Object.prototype.toString` avec la prise en charge de `Symbol.toStringTag` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-object)
- La méthode {{JSxRef("Object.prototype.valueOf()")}}
- La méthode {{JSxRef("Number.prototype.toString()")}}
- La propriété statique {{JSxRef("Symbol.toPrimitive")}}
- La propriété statique {{JSxRef("Symbol.toStringTag")}}

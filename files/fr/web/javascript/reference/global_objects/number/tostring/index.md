---
title: "Number : méthode toString()"
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Number/toString
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`toString()`** de {{JSxRef("Number")}} retourne une chaîne de caractères représentant cette valeur numérique.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Number.prototype.toString()")}}

```js interactive-example
function hexColor(c) {
  if (c < 256) {
    return Math.abs(c).toString(16);
  }
  return 0;
}

console.log(hexColor(233));
// Résultat attendu : "e9"

console.log(hexColor("11"));
// Résultat attendu : "b"
```

## Syntaxe

```js-nolint
toString()
toString(radix)
```

### Paramètre

- `radix` {{Optional_Inline}}
  - : Un entier dans la plage `2` jusqu'à `36` définissant la base à utiliser pour représenter la valeur numérique. Par défaut, la base est 10.

### Valeur de retour

Une chaîne de caractères représentant la valeur numérique définie. La notation scientifique est utilisée si `radix` est 10 et que la magnitude du nombre (en ignorant le signe) est supérieure ou égale à 10<sup>21</sup> ou inférieure à 10<sup>-6</sup>.

### Exception

- {{JSxRef("RangeError")}}
  - : Levée si `radix` est inférieur à 2 ou supérieur à 36.
- {{JSxRef("TypeError")}}
  - : Levée si cette méthode est invoquée sur un objet qui n'est pas un {{JSxRef("Number")}}.

## Description

L'objet {{JSxRef("Number")}} surcharge la méthode `toString` de {{JSxRef("Object")}}&nbsp;; il n'hérite pas de {{JSxRef("Object.prototype.toString()")}}. Pour les valeurs de type `Number`, la méthode `toString` retourne une représentation sous forme de chaîne de caractères de la valeur dans la base définie.

Pour les bases supérieures à 10, les lettres de l'alphabet indiquent les chiffres supérieurs à 9. Par exemple, pour les nombres hexadécimaux (base 16), `a` à `f` sont utilisés.

Si la valeur numérique définie est négative, le signe est conservé. C'est le cas même si la base est 2&nbsp;; la chaîne de caractères retournée est la représentation binaire positive de la valeur numérique précédée d'un signe `-`, **et non** le complément à deux de la valeur numérique.

Les valeurs `0` et `-0` ont `"0"` comme représentation sous forme de chaîne de caractères. {{JSxRef("Infinity")}} retourne `"Infinity"` et {{JSxRef("NaN")}} retourne `"NaN"`.

Si la valeur numérique n'est pas un nombre entier, le point décimal `.` est utilisé pour séparer les décimales. La [notation scientifique](/fr/docs/Web/JavaScript/Reference/Lexical_grammar#exponentielle) est utilisée si la base est 10 et que la magnitude du nombre (en ignorant le signe) est supérieure ou égale à 10<sup>21</sup> ou inférieure à 10<sup>-6</sup>. Dans ce cas, la chaîne de caractères retournée définit toujours explicitement le signe de l'exposant.

```js
console.log((10 ** 21.5).toString()); // "3.1622776601683794e+21"
console.log((10 ** 21.5).toString(8)); // "526665530627250154000000"
```

La représentation sous-jacente des nombres à virgule flottante est la notation scientifique en base 2 (voir [encodage des nombres](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding)). Cependant, la méthode `toString()` n'utilise pas directement cette représentation la plus précise de la valeur numérique. L'algorithme utilise plutôt le nombre minimal de chiffres significatifs nécessaires pour distinguer la sortie des valeurs numériques adjacentes. Par exemple, si le nombre est grand, il y a de nombreuses représentations équivalentes du même nombre à virgule flottante, et `toString()` choisit celle avec le plus de 0 à droite (pour toute base donnée).

```js
console.log((1000000000000000128).toString()); // "1000000000000000100"
console.log(1000000000000000100 === 1000000000000000128); // true
```

En revanche, {{JSxRef("Number.prototype.toFixed()")}} et {{JSxRef("Number.prototype.toPrecision()")}} permettent de définir la précision et peuvent être plus précis que `toString()`.

La méthode `toString()` exige que sa valeur `this` soit un primitif `Number` ou un objet wrapper. Elle lance une {{JSxRef("TypeError")}} pour les autres valeurs de `this` sans tenter de les convertir en valeurs numériques.

Comme `Number` n'a pas de méthode [`[Symbol.toPrimitive]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive), JavaScript appelle automatiquement la méthode `toString()` lorsqu'un _objet_ `Number` est utilisé dans un contexte où une chaîne de caractères est attendue, comme dans un [template literal](/fr/docs/Web/JavaScript/Reference/Template_literals). Cependant, les valeurs _primitives_ de type `Number` ne consultent pas la méthode `toString()` pour être [converties en chaîne de caractères](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#convertion_en_chaîne_de_caractères) — elles sont plutôt converties directement en utilisant le même algorithme que l'implémentation initiale de `toString()`.

```js
Number.prototype.toString = () => "Surchargé";
console.log(`${1}`); // "1"
console.log(`${new Number(1)}`); // "Surchargé"
```

## Exemples

### Utiliser `toString()`

```js
const count = 10;
console.log(count.toString()); // "10"

console.log((17).toString()); // "17"
console.log((17.2).toString()); // "17.2"

const x = 6;
console.log(x.toString(2)); // "110"
console.log((254).toString(16)); // "fe"
console.log((-10).toString(2)); // "-1010"
console.log((-0xff).toString(2)); // "-11111111"
```

### Convertir la base de chaînes de caractères de nombres

Si vous avez une chaîne de caractères représentant un nombre dans une base non décimale, vous pouvez utiliser {{JSxRef("parseInt()")}} et `toString()` pour la convertir dans une base différente.

```js
const hex = "CAFEBABE";
const bin = parseInt(hex, 16).toString(2); // "11001010111111101011101010111110"
```

Attention à la perte de précision&nbsp;: si la chaîne de caractères représentant le nombre est trop grande (plus grande que {{JSxRef("Number.MAX_SAFE_INTEGER")}}, par exemple), vous devez utiliser un {{JSxRef("BigInt")}} à la place. Cependant, le constructeur `BigInt` ne prend en charge que les chaînes de caractères représentant des littéraux numériques (c'est-à-dire les chaînes de caractères commençant par `0b`, `0o`, `0x`). Si votre base originale n'est pas binaire, octale, décimale ou hexadécimale, vous devez écrire vous-même votre convertisseur de base, ou utiliser une bibliothèque.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Number.prototype.toFixed()")}}
- La méthode {{JSxRef("Number.prototype.toExponential()")}}
- La méthode {{JSxRef("Number.prototype.toPrecision()")}}

---
title: "BigInt : méthode toString()"
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/toString
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`toString()`** des valeurs {{JSxRef("BigInt")}} retourne une chaîne de caractères représentant la valeur {{JSxRef("BigInt")}} définie. Le «&nbsp;n&nbsp;» final ne fait pas partie de la chaîne de caractères.

{{InteractiveExample("Démonstration JavaScript&nbsp;: BigInt.prototype.toString()")}}

```js interactive-example
console.log(1024n.toString());
// Sortie attendue : "1024"

console.log(1024n.toString(2));
// Sortie attendue : "10000000000"

console.log(1024n.toString(16));
// Sortie attendue : "400"
```

## Syntaxe

```js-nolint
toString()
toString(radix)
```

### Paramètres

- `radix` {{Optional_Inline}}
  - : Un entier compris entre 2 et 36 spécifiant la base à utiliser pour représenter la valeur `BigInt`. La valeur par défaut est 10.

### Valeur de retour

Une chaîne de caractères représentant l'objet {{JSxRef("BigInt")}} courant.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si `radix` est inférieur à 2 ou supérieur à 36.

## Description

L'objet {{JSxRef("BigInt")}} surcharge la méthode `toString` de {{JSxRef("Object")}}&nbsp;; il n'hérite pas de {{JSxRef("Object.prototype.toString()")}}. Pour les valeurs {{JSxRef("BigInt")}}, la méthode `toString()` retourne une représentation textuelle de la valeur dans la base indiquée.

Pour les bases supérieures à 10, les lettres de l'alphabet indiquent les chiffres supérieurs à 9. Par exemple, pour les nombres hexadécimaux (base 16), les lettres de `a` à `f` sont utilisées.

Si la valeur `BigInt` spécifiée est négative, le signe est conservé. C'est le cas même si la base est 2&nbsp;; la chaîne de caractères retournée est la représentation binaire positive de la valeur `BigInt` précédée d'un signe `-`, **et non** le complément à deux de la valeur `BigInt`.

La méthode `toString()` exige que sa valeur `this` soit un primitif ou un objet enveloppe `BigInt`. Elle lève une exception {{JSxRef("TypeError")}} pour d'autres valeurs de `this` sans tenter de les convertir en valeurs `BigInt`.

Parce que `BigInt` ne possède pas de méthode [`[Symbol.toPrimitive]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive), JavaScript appelle automatiquement la méthode `toString()` lorsqu'un _objet_ `BigInt` est utilisé dans un contexte où une chaîne de caractères est attendue, comme dans un [littéral de gabarit](/fr/docs/Web/JavaScript/Reference/Template_literals). Cependant, les valeurs _primitives_ `BigInt` ne consultent pas la méthode `toString()` pour être [converties en chaînes de caractères](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) — elles sont directement converties en utilisant le même algorithme que l'implémentation initiale de `toString()`.

```js
BigInt.prototype.toString = () => "Surchargé";
console.log(`${1n}`); // "1"
console.log(`${Object(1n)}`); // "Surchargé"
```

## Exemples

### Utiliser `toString()`

```js
17n.toString(); // '17'
66n.toString(2); // '1000010'
254n.toString(16); // 'fe'
-10n.toString(2); // -1010'
-0xffn.toString(2); // '-11111111'
```

### Gestion du zéro négatif en `BigInt`

Il n'existe pas de zéro négatif pour `BigInt` car les entiers ne gèrent pas de concept de zéro négatif. `-0.0` est un concept relatif à la représentation flottante IEEE et n'est présent que pour le type {{JSxRef("Number")}}.

```js
(-0n).toString(); // '0'
BigInt(-0).toString(); // '0'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("BigInt.prototype.toLocaleString()")}}
- La méthode {{JSxRef("BigInt.prototype.valueOf()")}}
- La méthode {{JSxRef("Number.prototype.toString()")}}

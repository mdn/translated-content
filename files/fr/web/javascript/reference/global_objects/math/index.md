---
title: Math
slug: Web/JavaScript/Reference/Global_Objects/Math
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

L'objet espace de noms **`Math`** contient des propriétés et des méthodes statiques pour les constantes et fonctions mathématiques.

`Math` fonctionne avec le type {{JSxRef("Number")}}. Il ne fonctionne pas avec {{JSxRef("BigInt")}}.

## Description

Contrairement à la plupart des objets natifs standards, `Math` n'est pas un constructeur. Vous ne pouvez pas l'utiliser avec [l'opérateur `new`](/fr/docs/Web/JavaScript/Reference/Operators/new) ni invoquer l'objet `Math` comme une fonction. Toutes les propriétés et méthodes de `Math` sont statiques.

> [!NOTE]
> De nombreuses fonctions de `Math` ont une précision qui dépend de l'implémentation.
>
> Cela signifie que différents navigateurs peuvent donner des résultats différents. Même un même moteur JavaScript, sur un autre système d'exploitation ou une autre architecture, peut donner des résultats différents&nbsp;!

## Propriétés statiques

- {{JSxRef("Math.E")}}
  - : Nombre d'Euler, la base des logarithmes naturels&nbsp;; environ `2,718`.
- {{JSxRef("Math.LN10")}}
  - : Logarithme naturel de `10`&nbsp;; environ `2,303`.
- {{JSxRef("Math.LN2")}}
  - : Logarithme naturel de `2`&nbsp;; environ `0,693`.
- {{JSxRef("Math.LOG10E")}}
  - : Logarithme en base 10 de `E`&nbsp;; environ `0,434`.
- {{JSxRef("Math.LOG2E")}}
  - : Logarithme en base 2 de `E`&nbsp;; environ `1,443`.
- {{JSxRef("Math.PI")}}
  - : Quotient de la circonférence d'un cercle par son diamètre&nbsp;; environ `3,14159`.
- {{JSxRef("Math.SQRT1_2")}}
  - : Racine carrée de ½&nbsp;; environ `0,707`.
- {{JSxRef("Math.SQRT2")}}
  - : Racine carrée de `2`&nbsp;; environ `1,414`.
- `Math[Symbol.toStringTag]`
  - : La valeur initiale de la propriété [`[Symbol.toStringTag]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) est la chaîne de caractères `"Math"`. Cette propriété est utilisée dans {{JSxRef("Object.prototype.toString()")}}.

## Méthodes statiques

- {{JSxRef("Math.abs()")}}
  - : Retourne la valeur absolue de l'argument.
- {{JSxRef("Math.acos()")}}
  - : Retourne l'arc cosinus de l'argument.
- {{JSxRef("Math.acosh()")}}
  - : Retourne l'arc cosinus hyperbolique de l'argument.
- {{JSxRef("Math.asin()")}}
  - : Retourne l'arc sinus de l'argument.
- {{JSxRef("Math.asinh()")}}
  - : Retourne l'arc sinus hyperbolique de l'argument.
- {{JSxRef("Math.atan()")}}
  - : Retourne l'arc tangente de l'argument.
- {{JSxRef("Math.atan2()")}}
  - : Retourne l'arc tangente du quotient de ses arguments.
- {{JSxRef("Math.atanh()")}}
  - : Retourne l'arc tangente hyperbolique de l'argument.
- {{JSxRef("Math.cbrt()")}}
  - : Retourne la racine cubique de l'argument.
- {{JSxRef("Math.ceil()")}}
  - : Retourne le plus petit entier supérieur ou égal à l'argument.
- {{JSxRef("Math.clz32()")}}
  - : Retourne le nombre de zéros de tête dans la représentation binaire sur 32 bits de l'argument.
- {{JSxRef("Math.cos()")}}
  - : Retourne le cosinus de l'argument.
- {{JSxRef("Math.cosh()")}}
  - : Retourne le cosinus hyperbolique de l'argument.
- {{JSxRef("Math.exp()")}}
  - : Retourne e<sup>x</sup>, où x est l'argument, et e est le nombre d'Euler (`2,718`…, la base du logarithme naturel).
- {{JSxRef("Math.expm1()")}}
  - : Retourne le résultat de `exp(x)` moins `1`.
- {{JSxRef("Math.floor()")}}
  - : Retourne le plus grand entier inférieur ou égal à l'argument.
- {{JSxRef("Math.f16round()")}}
  - : Retourne la représentation flottante en [demi-précision <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Half-precision_floating-point_format) la plus proche de l'argument.
- {{JSxRef("Math.fround()")}}
  - : Retourne la représentation flottante en [simple précision <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Single-precision_floating-point_format) la plus proche de l'argument.
- {{JSxRef("Math.hypot()")}}
  - : Retourne la racine carrée de la somme des carrés de ses arguments.
- {{JSxRef("Math.imul()")}}
  - : Retourne le résultat de la multiplication d'entiers sur 32 bits de ses arguments.
- {{JSxRef("Math.log()")}}
  - : Retourne le logarithme naturel (㏒<sub>e</sub>&nbsp;; aussi, ㏑) de l'argument.
- {{JSxRef("Math.log10()")}}
  - : Retourne le logarithme en base 10 de l'argument.
- {{JSxRef("Math.log1p()")}}
  - : Retourne le logarithme naturel (㏒<sub>e</sub>&nbsp;; aussi ㏑) de `1 + x` pour le nombre `x`.
- {{JSxRef("Math.log2()")}}
  - : Retourne le logarithme en base 2 de l'argument.
- {{JSxRef("Math.max()")}}
  - : Retourne la plus grande valeur parmi zéro ou plusieurs nombres.
- {{JSxRef("Math.min()")}}
  - : Retourne la plus petite valeur parmi zéro ou plusieurs nombres.
- {{JSxRef("Math.pow()")}}
  - : Retourne la base `x` élevée à la puissance `y` (c'est-à-dire `x`<sup><code>y</code></sup>).
- {{JSxRef("Math.random()")}}
  - : Retourne un nombre pseudo-aléatoire compris entre `0` et `1`.
- {{JSxRef("Math.round()")}}
  - : Retourne la valeur de l'argument arrondie à l'entier le plus proche.
- {{JSxRef("Math.sign()")}}
  - : Retourne le signe de l'argument, indiquant s'il est positif, négatif ou nul.
- {{JSxRef("Math.sin()")}}
  - : Retourne le sinus de l'argument.
- {{JSxRef("Math.sinh()")}}
  - : Retourne le sinus hyperbolique de l'argument.
- {{JSxRef("Math.sqrt()")}}
  - : Retourne la racine carrée positive de l'argument.
- {{JSxRef("Math.sumPrecise()")}}
  - : Retourne la somme d'un itérable de nombres passé en argument, en évitant la perte de précision en virgule flottante lors des résultats intermédiaires.
- {{JSxRef("Math.tan()")}}
  - : Retourne la tangente de l'argument.
- {{JSxRef("Math.tanh()")}}
  - : Retourne la tangente hyperbolique de l'argument.
- {{JSxRef("Math.trunc()")}}
  - : Retourne la partie entière de l'argument, en supprimant toute partie fractionnaire.

## Exemples

### Convertir entre degrés et radians

Les fonctions trigonométriques `sin()`, `cos()`, `tan()`, `asin()`, `acos()`, `atan()` et `atan2()` attendent (et retournent) des angles en _radians_.

Comme les humain·e·s ont tendance à penser en degrés, et que certaines fonctions (comme les transformations CSS) peuvent accepter des degrés, il est utile d'avoir des fonctions à portée de main pour convertir entre les deux&nbsp;:

```js
function degToRad(degrees) {
  return degrees * (Math.PI / 180);
}

function radToDeg(rad) {
  return rad / (Math.PI / 180);
}
```

### Calculer la hauteur d'un triangle équilatéral

Si nous voulons calculer la hauteur d'un triangle équilatéral et que nous savons que la longueur de ses côtés est de 100, nous pouvons utiliser la formule _longueur de l'adjacent multipliée par la tangente de l'angle est égale à l'opposé_.

![Un triangle équilatéral où une perpendiculaire à un côté est tracée depuis le sommet opposé, formant un triangle rectangle avec trois côtés marqués « adjacent », « opposé » et « hypoténuse ». L'angle entre les côtés « adjacent » et « hypoténuse » est de 60 degrés.](trigonometry.png)

En JavaScript, on peut faire cela avec&nbsp;:

```js
50 * Math.tan(degToRad(60));
```

Nous utilisons notre fonction `degToRad()` pour convertir 60 degrés en radians, car {{JSxRef("Math.tan()")}} attend une valeur d'entrée en radians.

### Retourner un entier aléatoire entre deux bornes

Cela peut être réalisé avec une combinaison de {{JSxRef("Math.random()")}} et {{JSxRef("Math.floor()")}}&nbsp;:

```js
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

random(1, 10);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{JSxRef("Number")}}

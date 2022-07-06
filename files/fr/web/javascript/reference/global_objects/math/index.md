---
title: Math
slug: Web/JavaScript/Reference/Global_Objects/Math
tags:
  - JavaScript
  - Math
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math
original_slug: Web/JavaScript/Reference/Objets_globaux/Math
---
{{JSRef}}

L'objet **`Math`** est un objet natif dont les méthodes et propriétés permettent l'utilisation de constantes et fonctions mathématiques. Cet objet n'est pas une fonction.

> **Attention :** `Math` fonctionne avec le type {{jsxref("Number")}}. Il ne fonctionne pas avec les grands entiers/{{jsxref("BigInt")}}.

## Description

Contrairement aux autres objets globaux, `Math` n'est pas un constructeur. Toutes les propriétés et les méthodes de `Math` sont statiques (pour éventuellement étendre cette API, ce qui est fortement déconseillé, on n'utilisera donc pas `Math.prototype`).

Pour accéder à la constante PI, on utilise `Math.PI`.
Pour accéder à la fonction _sinus_, on utilise `Math.sin(x)` où `x` est l'argument de cette méthode.

Les constantes sont définies avec la précision des nombres réels en JavaScript.

## Propriétés

- {{jsxref("Math.E")}}
  - : Nombre d'Euler, la base des logarithmes naturels, environ 2,718.
- {{jsxref("Math.LN2")}}
  - : Logarithme naturel de 2, environ 0,693.
- {{jsxref("Math.LN10")}}
  - : Logarithme naturel de 10, environ 2,302.
- {{jsxref("Math.LOG2E")}}
  - : Logarithme de base 2 de E, environ 1,442.
- {{jsxref("Math.LOG10E")}}
  - : Logarithme de base 10 de E, environ 0,434.
- {{jsxref("Math.PI")}}
  - : Quotient de la circonférence d'un cercle par son diamètre, environ 3,14159.
- {{jsxref("Math.SQRT1_2")}}
  - : Racine carrée de 1/2 ; équivalent de 1 sur la racine carrée de 2, environ 0,707.
- {{jsxref("Math.SQRT2")}}
  - : Racine carrée de 2, environ 1,414.

## Méthodes

> **Note :** Les fonctions trigonométriques (`sin()`, `cos()`, `tan()`, `asin()`, `acos()`, `atan()`, `atan2()`) acceptent ou retournent des angles en radians. Pour convertir des degrés en radians, multipliez la valeur en degrés par (`Math.PI / 180`). Pour passer des radians en degrés, divisez la valeur en radians par (`Math.PI / 180`).

> **Note :** La précision des fonctions mathématiques dépend notamment de l'implémentation. Cela signifie que différents navigateurs peuvent fournir des résultats différents. On peut même avoir un même moteur JavaScript qui, sur des architectures et/ou des systèmes d'exploitation différents, fournit des résultats différents.

- {{jsxref("Objets_globaux/Math/abs", "Math.abs(x)")}}
  - : Retourne la valeur absolue d'un nombre.
- {{jsxref("Objets_globaux/Math/acos", "Math.acos(x)")}}
  - : Retourne l'arc cosinus d'un nombre.
- {{jsxref("Objets_globaux/Math/acosh", "Math.acosh(x)")}}
  - : Retourne l'arc cosinus hyperbolique d'un nombre.
- {{jsxref("Objets_globaux/Math/asin", "Math.asin(x)")}}
  - : Retourne l'arc sinus d'un nombre.
- {{jsxref("Objets_globaux/Math/asinh", "Math.asinh(x)")}}
  - : Retourne l'arc sinus hyperbolique d'un nombre.
- {{jsxref("Objets_globaux/Math/atan", "Math.atan(x)")}}
  - : Retourne l'arc tangente d'un nombre.
- {{jsxref("Objets_globaux/Math/atanh", "Math.atanh(x)")}}
  - : Retourne l'arc tangente hyperbolique d'un nombre
- {{jsxref("Objets_globaux/Math/atan2", "Math.atan2(y, x)")}}
  - : Retourne l'arc tangente du quotient de ses arguments.
- {{jsxref("Objets_globaux/Math/cbrt", "Math.cbrt(x)")}}
  - : Renvoie la racine cubique d'un nombre.
- {{jsxref("Objets_globaux/Math/ceil", "Math.ceil(x)")}}
  - : Retourne le plus petit entier supérieur ou égal à la valeur passée en paramètre.
- {{jsxref("Objets_globaux/Math/clz32", "Math.clz32(x)")}}
  - : Renvoie le nombre de zéros qui préfixent un entier sur 32 bits.
- {{jsxref("Objets_globaux/Math/cos", "Math.cos(x)")}}
  - : Retourne le cosinus d'un nombre.
- {{jsxref("Objets_globaux/Math/cosh", "Math.cosh(x)")}}
  - : Renvoie le cosinus hyperbolique d'un nombre.
- {{jsxref("Objets_globaux/Math/exp", "Math.exp(x)")}}
  - : Renvoie l'exponentielle d'un nombre (soit E^nombre) avec E la constante d'Euler (2,718...).
- {{jsxref("Objets_globaux/Math/expm1", "Math.expm1(x)")}}
  - : Renvoie le résultat de 1 moins l'exponentielle d'un nombre.
- {{jsxref("Objets_globaux/Math/floor", "Math.floor(x)")}}
  - : Retourne le plus grand entier inférieur ou égal à la valeur passée en paramètre.
- {{jsxref("Objets_globaux/Math/fround", "Math.fround(x)")}}
  - : Renvoie le nombre flottant exprimé sur 32 bits le plus proche de l'argument.
- {{jsxref("Objets_globaux/Math/hypot", "Math.hypot([x[,y[,…]]])")}}
  - : Retourne la racine carré de la somme des carrés des arguments.
- {{jsxref("Objets_globaux/Math/imul", "Math.imul(x, y)")}}
  - : Retourne le résultat de la multiplication d'entiers sur 32 bits.
- {{jsxref("Objets_globaux/Math/log", "Math.log(x)")}}

  - : Retourne le logarithme naturel (log

    <sub>e</sub>

    ) d'un nombre.

- {{jsxref("Objets_globaux/Math/log1p", "Math.log1p(x)")}}
  - : Retourne le logarithme naturel de 1 + un nombre.
- {{jsxref("Objets_globaux/Math/log10", "Math.log10(x)")}}
  - : Retourne le logarithme en base 10 d'un nombre.
- {{jsxref("Objets_globaux/Math/log2", "Math.log2(x)")}}
  - : Retourne le logarithme en base 2 d'un nombre.
- {{jsxref("Objets_globaux/Math/max", "Math.max([x[,y[,…]]])")}}
  - : Retourne la plus grande valeur d'une liste de nombres.
- {{jsxref("Objets_globaux/Math/min", "Math.min([x[,y[,…]]])")}}
  - : Retourne la plus petite valeur d'une liste de nombres.
- {{jsxref("Objets_globaux/Math/pow", "Math.pow(x,y)")}}
  - : Retourne le calcul de x à la puissance y (x correspond à la base et y à l'exposant).
- {{jsxref("Objets_globaux/Math/random", "Math.random()")}}
  - : Retourne un nombre pseudo-aléatoire compris entre 0 (inclus) et 1 (exclu).
- {{jsxref("Objets_globaux/Math/round", "Math.round(x)")}}
  - : Retourne l'arrondi d'un nombre.
- {{jsxref("Objets_globaux/Math/sign", "Math.sign(x)")}}
  - : Retourne le signe d'un nombre, indiquant s'il est positif, négatif ou égal à zéro.
- {{jsxref("Objets_globaux/Math/sin", "Math.sin(x)")}}
  - : Retourne le sinus d'un nombre.
- {{jsxref("Objets_globaux/Math/sinh", "Math.sinh(x)")}}
  - : Retourne le sinus hyperbolique d'un nombre.
- {{jsxref("Objets_globaux/Math/sqrt", "Math.sqrt(x)")}}
  - : Retourne la racine carrée d'un nombre.
- {{jsxref("Objets_globaux/Math/tan", "Math.tan(x)")}}
  - : Retourne la tangente d'un nombre.
- {{jsxref("Objets_globaux/Math/tanh", "Math.tanh(x)")}}
  - : Retourne la tangente hyperbolique d'un nombre
- `Math.toSource()` {{Non-standard_inline}}
  - : Renvoie la chaîne de caractères `"Math"`.
- {{jsxref("Objets_globaux/Math/trunc", "Math.trunc(x)")}}
  - : Retourne la partie entière d'un nombre (la partie décimale est retirée).

## Spécifications

| Spécification                                                        | État                         | Commentaires                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| -------------------------------------------------------------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ES1')}}                                             | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| {{SpecName('ES5.1', '#sec-15.8', 'Math')}}             | {{Spec2('ES5.1')}}     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| {{SpecName('ES6', '#sec-math-object', 'Math')}}     | {{Spec2('ES6')}}         | Nouvelles méthodes ajoutées : {{jsxref("Math.log10()", "log10()")}}, {{jsxref("Math.log2()", "log2()")}}, {{jsxref("Math.log1p()", "log1p()")}}, {{jsxref("Math.expm1()", "expm1()")}}, {{jsxref("Math.cosh()", "cosh()")}}, {{jsxref("Math.sinh()", "sinh()")}}, {{jsxref("Math.tanh()", "tanh()")}}, {{jsxref("Math.acosh()", "acosh()")}}, {{jsxref("Math.asinh()", "asinh()")}}, {{jsxref("Math.atanh()", "atanh()")}}, {{jsxref("Math.hypot()", "hypot()")}}, {{jsxref("Math.trunc()", "trunc()")}}, {{jsxref("Math.sign()", "sign()")}}, {{jsxref("Math.imul()", "imul()")}}, {{jsxref("Math.fround()", "fround()")}}, {{jsxref("Math.cbrt()", "cbrt()")}} et {{jsxref("Math.clz32()", "clz32()")}}. |
| {{SpecName('ESDraft', '#sec-math-object', 'Math')}} | {{Spec2('ESDraft')}} |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Math")}}

## Voir aussi

- {{jsxref("Number")}}

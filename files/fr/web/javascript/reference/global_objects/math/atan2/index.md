---
title: Math.atan2()
slug: Web/JavaScript/Reference/Global_Objects/Math/atan2
---

{{JSRef}}

La fonction **`Math.atan2()`** renvoie l'arc tangente du quotient de ses arguments, ce qui, pour `Math.atan2(y,x)`, correspond à l'angle plan (exprimé en radians) entre la droite passant par l'origine et le point de coordonnées (x,y).

{{EmbedInteractiveExample("pages/js/math-atan2.html")}}

## Syntaxe

```js
Math.atan2(y, x);
```

### Paramètres

- `y`
  - : La coordonnée en ordonnée du point.
- `x`
  - : La coordonnée en abscisse du point.

### Valeur de retour

L'arc tangente du quotient formé par les deux arguments (compris dans <math><semantics><mrow><mo stretchy="false">[</mo><mo>-</mo><mi>π</mi><mo>,</mo><mi>π</mi><mo stretchy="false">]</mo></mrow><annotation encoding="TeX">[-\pi, \pi]</annotation></semantics></math>), c'est-à-dire l'angle, exprimé en radians entre l'axe des abscisses et la droite passant par l'origin (0,0) et le point de coordonnées (x,y).

## Description

La méthode `Math.atan2()` renvoie une valeur numérique comprise entre -Pi et Pi qui représente l'angle theta d'un point de coordonnées (x,y). Cela correspond à l'angle (dans le sens trigonométrique) entre l'axe des abscisses et le point de coordonnées (`x,y`). Attention, le premier argument de la fonction est l'ordonnée (y) et le second est l'abscisse (x).

![Graphique explicitant l'angle donné par un point de coordonnées X/Y](atan2.png)

`Math.atan2()` utilise deux arguments `x` et `y`, alors que la méthode `Math.atan()` utilise le ratio de deux nombres comme un seul argument.

`atan2()` est une méthode statique de l'objet `Math`, elle doit toujours être utilisée avec la syntaxe `Math.atan2()`, elle ne doit pas être utilisée comme la méthode d'un autre objet qui aurait été créé (`Math` n'est pas un constructeur).

## Exemples

### Utiliser `Math.atan2()`

```js
Math.atan2(90, 15); // 1.4056476493802699
Math.atan2(15, 90); // 0.16514867741462683

Math.atan2( ±0, -0 );               // ±PI.
Math.atan2( ±0, +0 );               // ±0.
Math.atan2( ±0, -x );               // ±PI pour x > 0.
Math.atan2( ±0, x );                // ±0 pour x > 0.
Math.atan2( -y, ±0 );               // -PI/2 pour y > 0.
Math.atan2( y, ±0 );                // PI/2 pour y > 0.
Math.atan2( ±y, -Infinity );        // ±PI pour y qui est un nombre fini > 0.
Math.atan2( ±y, +Infinity );        // ±0 pour y qui est un nombre fini > 0.
Math.atan2( ±Infinity, x );         // ±PI/2 pour x qui est un nombre fini.
Math.atan2( ±Infinity, -Infinity ); // ±3*PI/4.
Math.atan2( ±Infinity, +Infinity ); // ±PI/4.
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Math.acos()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/acos)
- [`Math.asin()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/asin)
- [`Math.atan()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/atan)
- [`Math.cos()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/cos)
- [`Math.sin()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/sin)
- [`Math.tan()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/tan)

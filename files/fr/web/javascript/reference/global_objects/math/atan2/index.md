---
title: "Math : méthode statique atan2()"
short-title: atan2()
slug: Web/JavaScript/Reference/Global_Objects/Math/atan2
l10n:
  sourceCommit: 0fb5a7e4cc045ba0b1dc453624f196309d9bea10
---

La méthode statique **`Math.atan2()`** retourne l'angle dans le plan (en radians) entre l'axe des abscisses positif et le rayon partant de (0, 0) vers le point (x, y), pour `Math.atan2(y, x)`.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Math.atan2()")}}

```js interactive-example
function calcAngleDegrees(x, y) {
  return (Math.atan2(y, x) * 180) / Math.PI;
}

console.log(calcAngleDegrees(5, 5));
// Sortie attendue : 45

console.log(calcAngleDegrees(10, 10));
// Sortie attendue : 45

console.log(calcAngleDegrees(0, 10));
// Sortie attendue : 90
```

## Syntaxe

```js-nolint
Math.atan2(y, x)
```

### Paramètres

- `y`
  - : La coordonnée en ordonnée du point.
- `x`
  - : La coordonnée en abscisse du point.

### Valeur de retour

L'angle en radians (compris entre -π et π, inclus) entre l'axe des abscisses positif et le rayon partant de (0, 0) vers le point (x, y).

## Description

La méthode `Math.atan2()` mesure l'angle θ dans le sens trigonométrique, en radians, entre l'axe des abscisses positif et le point `(x, y)`. Notez que les arguments de cette fonction passent d'abord la coordonnée en ordonnée, puis la coordonnée en abscisse.

![Un diagramme montrant l'angle retourné par atan2(y, x)](atan2.png)

`Math.atan2()` reçoit séparément les arguments `x` et `y`, tandis que [`Math.atan()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/atan) reçoit le ratio de ces deux arguments. `Math.atan2(y, x)` diffère de `Math.atan(y / x)` dans les cas suivants&nbsp;:

| `x`               | `y`         | `Math.atan2(y, x)` | `Math.atan(y / x)` |
| ----------------- | ----------- | ------------------ | ------------------ |
| `Infinity`        | `Infinity`  | π / 4              | `NaN`              |
| `Infinity`        | `-Infinity` | -π / 4             | `NaN`              |
| `-Infinity`       | `Infinity`  | 3π / 4             | `NaN`              |
| `-Infinity`       | `-Infinity` | -3π / 4            | `NaN`              |
| 0                 | 0           | 0                  | `NaN`              |
| 0                 | -0          | -0                 | `NaN`              |
| < 0 (inclus `-0`) | 0           | π                  | 0                  |
| < 0 (inclus `-0`) | -0          | -π                 | 0                  |
| `-Infinity`       | > 0         | π                  | -0                 |
| -0                | > 0         | π / 2              | -π / 2             |
| `-Infinity`       | < 0         | -π                 | 0                  |
| -0                | < 0         | -π / 2             | π / 2              |

De plus, pour les points situés dans les deuxième et troisième quadrants (`x < 0`), `Math.atan2()` renverra un angle inférieur à <math><semantics><mrow><mo>-</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow><annotation encoding="TeX">-\frac{\pi}{2}</annotation></semantics></math> ou supérieur à <math><semantics><mfrac><mi>π</mi><mn>2</mn></mfrac><annotation encoding="TeX">\frac{\pi}{2}</annotation></semantics></math>.

Parce que `atan2()` est une méthode statique de `Math`, vous l'utilisez toujours comme `Math.atan2()`, et non comme méthode d'un objet `Math` que vous auriez créé (`Math` n'est pas un constructeur).

## Exemples

### Utiliser la méthode `Math.atan2()`

```js
Math.atan2(90, 15); // 1.4056476493802699
Math.atan2(15, 90); // 0.16514867741462683
```

### Différence entre `Math.atan2(y, x)` et `Math.atan(y / x)`

Le script suivant affiche toutes les entrées qui produisent une différence entre `Math.atan2(y, x)` et `Math.atan(y / x)`.

```js
const formattedNumbers = new Map([
  [-Math.PI, "-π"],
  [(-3 * Math.PI) / 4, "-3π/4"],
  [-Math.PI / 2, "-π/2"],
  [-Math.PI / 4, "-π/4"],
  [Math.PI / 4, "π/4"],
  [Math.PI / 2, "π/2"],
  [(3 * Math.PI) / 4, "3π/4"],
  [Math.PI, "π"],
  [-Infinity, "-∞"],
  [Infinity, "∞"],
]);

function format(template, ...args) {
  return String.raw(
    { raw: template },
    ...args.map((num) =>
      (Object.is(num, -0)
        ? "-0"
        : (formattedNumbers.get(num) ?? String(num))
      ).padEnd(5),
    ),
  );
}

console.log(`| x     | y     | atan2 | atan  |
|-------|-------|-------|-------|`);

for (const x of [-Infinity, -1, -0, 0, 1, Infinity]) {
  for (const y of [-Infinity, -1, -0, 0, 1, Infinity]) {
    const atan2 = Math.atan2(y, x);
    const atan = Math.atan(y / x);
    if (!Object.is(atan2, atan)) {
      console.log(format`| ${x} | ${y} | ${atan2} | ${atan} |`);
    }
  }
}
```

Le résultat est&nbsp;:

```plain
| x     | y     | atan2 | atan  |
|-------|-------|-------|-------|
| -∞    | -∞    | -3π/4 | NaN   |
| -∞    | -1    | -π    | 0     |
| -∞    | -0    | -π    | 0     |
| -∞    | 0     | π     | -0    |
| -∞    | 1     | π     | -0    |
| -∞    | ∞     | 3π/4  | NaN   |
| -1    | -∞    | -π/2  | π/2   |
| -1    | -1    | -3π/4 | π/4   |
| -1    | -0    | -π    | 0     |
| -1    | 0     | π     | -0    |
| -1    | 1     | 3π/4  | -π/4  |
| -1    | ∞     | π/2   | -π/2  |
| -0    | -∞    | -π/2  | π/2   |
| -0    | -1    | -π/2  | π/2   |
| -0    | -0    | -π    | NaN   |
| -0    | 0     | π     | NaN   |
| -0    | 1     | π/2   | -π/2  |
| -0    | ∞     | π/2   | -π/2  |
| 0     | -0    | -0    | NaN   |
| 0     | 0     | 0     | NaN   |
| ∞     | -∞    | -π/4  | NaN   |
| ∞     | ∞     | π/4   | NaN   |
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode statique {{JSxRef("Math.acos()")}}
- La méthode statique {{JSxRef("Math.asin()")}}
- La méthode statique {{JSxRef("Math.atan()")}}
- La méthode statique {{JSxRef("Math.cos()")}}
- La méthode statique {{JSxRef("Math.sin()")}}
- La méthode statique {{JSxRef("Math.tan()")}}
- La fonction CSS {{CSSxRef("atan2()")}}

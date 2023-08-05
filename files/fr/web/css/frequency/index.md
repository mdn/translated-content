---
title: <frequency>
slug: Web/CSS/frequency
---

{{CSSRef}}

Le type de donnée CSS **`<frequency>`** permet de représenter des fréquences (par exemple la hauteur d'une voie). Ce type n'est actuellement utilisé pour aucune propriété CSS.

## Syntaxe

Une valeur de type `<frequency>` se compose d'une valeur {{cssxref("&lt;number&gt;")}} suivi immédiatement d'une unité de fréquence. Comme pour les autres dimensions CSS, il n'y a pas d'espace entre le nombre et le littéral de l'unité.

### Unités

- `Hz`
  - : Permet de représenter des fréquences exprimées en Hertz (par exemple `0Hz`, `1500Hz`, `10000Hz`)
- `kHz`
  - : Permet de représenter des fréquences exprimées en kilohertz (par exemple `0kHz`, `1.5kHz`, `10kHz`).

Bien que la valeur nulle puisse être représentée avec le même littéral pour les deux unités, l'unité ne doit pas être absente sinon la valeur sera interprétée comme une valeur de longueur (type {{cssxref("length")}}) et ne représentera ni `0Hz` ni `0kHz`. Bien que les unités CSS soient insensibles à la casse, c'est une bonne pratique que d'utiliser un H majuscule pour `Hz` et `kHz` car selon le [système international](https://fr.wikipedia.org/wiki/Système_international_d%27unités), [Hertz](https://fr.wikipedia.org/wiki/Heinrich_Rudolf_Hertz) est un nom de famille.

## Exemples

### Valeurs valides

```css example-good
12Hz     Entier positif
4.3Hz    Flottant
14KhZ    Unité insensible à la casse
+0Hz     Zero avec un signe + et une unité
-0kHz    Zero avec un signe - et une unité
```

### Valeurs invalides

```css example-bad
12.0     Cette valeur est un nombre pas une fréquence (il manque l'unité).
7 Hz     Aucun espace n'est autorisé entre le nombre et l'unité.
0        Bien qu'un zéro puisse être utilisé sans unité pour une longueur, ce n'est pas le cas pour une fréquence.
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

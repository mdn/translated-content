---
title: <frequency>
slug: Web/CSS/frequency
tags:
  - CSS
  - Reference
  - Type
translation_of: Web/CSS/frequency
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

Bien que la valeur nulle puisse être représentée avec le même littéral pour les deux unités, l'unité ne doit pas être absente sinon la valeur sera interprétée comme une valeur de longueur (type {{cssxref("length")}}) et ne représentera ni `0Hz` ni `0kHz`. Bien que les unités CSS soient insensibles à la casse, c'est une bonne pratique que d'utiliser un H majuscule pour `Hz` et `kHz` car selon le [système international](https://fr.wikipedia.org/wiki/Syst%C3%A8me_international_d%27unit%C3%A9s), [Hertz](https://fr.wikipedia.org/wiki/Heinrich_Rudolf_Hertz) est un nom de famille.

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

| Spécification                                                                        | État                             | Commentaires         |
| ------------------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName('CSS3 Values', '#frequency', '&lt;frequency&gt;')}} | {{Spec2('CSS3 Values')}} | Définition initiale. |

Ce type de donnés fut initialement introduit avec la spécification [CSS Niveau 2](https://www.w3.org/TR/CSS2/) pour le [groupe de média aural](/fr/docs/Web/CSS/@media/aural) qui est désormais obsolète. Ce type de données a donc été déprécié puis réintroduit avec CSS3 bien qu'aucune propriété ne l'utilise à l'heure actuelle.

## Compatibilité des navigateurs

{{Compat("css.types.frequency")}}

---
title: <frequency>
slug: Web/CSS/Reference/Values/frequency
original_slug: Web/CSS/frequency
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Le [type de donnée](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<frequency>`** permet de représenter des fréquences (par exemple la hauteur d'une voix). Ce type n'est actuellement utilisé pour aucune propriété CSS.

## Syntaxe

Une valeur de type `<frequency>` se compose d'une valeur {{CSSxRef("&lt;number&gt;")}} suivi immédiatement d'une unité de fréquence. Comme pour les autres dimensions CSS, il n'y a pas d'espace entre le nombre et le littéral de l'unité.

### Unités

- `Hz`
  - : Permet de représenter des fréquences exprimées en Hertz (par exemple `0Hz`, `1500Hz`, `10000Hz`)
- `kHz`
  - : Permet de représenter des fréquences exprimées en kilohertz (par exemple `0kHz`, `1.5kHz`, `10kHz`).

> [!NOTE]
> Bien que le nombre `0` soit toujours identique quelle que soit l'unité, l'unité ne doit jamais être omise. Autrement dit, `0` est invalide et ne représente pas `0Hz` ou `0kHz`. Même si les unités ne sont pas sensibles à la casse, il est recommandé d'utiliser un «&nbsp;H&nbsp;» majuscule pour `Hz` et `kHz`, comme spécifié dans le [Système international d'unités](https://fr.wikipedia.org/wiki/Syst%C3%A8me_international_d%27unit%C3%A9s).

## Exemples

Valeurs de fréquence valides&nbsp;:

```plain example-good
12Hz     Entier positif
4.3Hz    Nombre non entier
14KhZ    L'unité n'est pas sensible à la casse, mais il est déconseillé d'utiliser une majuscule non conforme au SI.
+0Hz     Zéro, avec un signe + et une unité
-0kHz    Zéro, avec un signe - et une unité
```

Valeurs de fréquence invalides&nbsp;:

```plain example-bad
12.0     Ceci est un <number>, pas une <frequency>, car il manque une unité.
7 Hz     Il ne doit pas y avoir d'espace entre le nombre et l'unité.
0        Bien que le zéro sans unité soit autorisé pour <length>, il est invalide pour <frequency>.
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

Actuellement, aucun navigateur ne prend en charge cette fonctionnalité.

## Voir aussi

- Le type de donnée {{CSSxRef("&lt;frequency-percentage&gt;")}}
- Le module des [valeurs et unités CSS](/fr/docs/Web/CSS/Guides/Values_and_units)

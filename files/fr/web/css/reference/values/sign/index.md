---
title: Fonction CSS `sign()`
short-title: sign()
slug: Web/CSS/Reference/Values/sign
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`sign()`** contient un calcul, et retourne `-1` si la valeur numérique de l'argument est négative, `+1` si la valeur numérique de l'argument est positive, `0⁺` si la valeur numérique de l'argument est 0⁺, et `0⁻` si la valeur numérique de l'argument est 0⁻.

> [!NOTE]
> Alors que {{CSSxRef("abs()")}} retourne la valeur absolue de l'argument, `sign()` retourne le signe de l'argument.

## Syntaxe

```css
/* property: sign( expression ) */
top: sign(20vh - 100px);
```

### Paramètres

La fonction `sign(x)` n'accepte qu'une seule valeur comme paramètre.

- `x`
  - : Un calcul qui se résout en un nombre.

### Valeur de retour

Un nombre représentant le signe de `x`&nbsp;:

- Si `x` est positif, retourne `1`.
- Si `x` est négatif, retourne `-1`.
- Si `x` est zéro positif, retourne `0`.
- Si `x` est zéro négatif, retourne `-0`.
- Sinon, retourne `NaN`.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Positionner l'image de fond

Par exemple, dans {{CSSxRef("background-position")}}, les pourcentages positifs se résolvent en une longueur négative, et vice versa, si l'image de fond est plus grande que la zone de fond. Ainsi, `sign(10%)` peut retourner `1` ou `-1`, selon la manière dont le pourcentage est résolu&nbsp;! (Ou même `0`, s'il est résolu par rapport à une longueur nulle.)

```css
div {
  background-position: sign(10%);
}
```

### Direction de la position

Un autre cas d'utilisation est de contrôler la {{CSSxRef("position")}} de l'élément. Soit une valeur positive, soit une valeur négative.

```css
div {
  position: absolute;
  top: calc(100px * sign(var(--value)));
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La fonction {{CSSxRef("abs()")}}
- [Utiliser l'arithmétique typée CSS](/fr/docs/Web/CSS/Guides/Values_and_units/Using_typed_arithmetic)

---
title: abs()
slug: Web/CSS/abs
l10n:
  sourceCommit: 02024642bdb12940509cb4c7e2e60cbc3d62bf21
---

{{CSSRef}}

La [fonction](/fr/docs/Web/CSS/CSS_Functions) [CSS](/fr/docs/Web/CSS) **`abs()`** contient un calcul et renvoie la valeur absolue de l'argument, avec le même type que l'argument.

L'instruction `abs(A)` renverra `A` si la valeur numérique `A` est supérieure ou égale à 0. Sinon, elle renverra la valeur de `-1 * A`.

## Syntaxe

```css
/* propriété: abs(expression) */
width: abs(20% - 100px);
```

La fonction `abs()` prend une seule expression comme argument.

### Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Variables positives

La fonction `abs()` peut être utilisée afin de s'assurer qu'une valeur est toujours positive. Dans l'exemple suivant, on a une propriété personnalisée, `--font-size`, qui est utilisée comme valeur pour [`font-size`](/fr/docs/Web/CSS/font-size). Envelopper cette propriété dans un appel à la fonction `abs()` convertira une valeur négative en une valeur positive.

```css
h1 {
  font-size: abs(var(--font-size));
}
```

### Contrôler la direction d'un dégradé

Il est aussi possible d'utiliser la fonction `abs()` pour contrôler la direction d'un dégradé. Dans l'exemple qui suit, en utilisant un angle de `-45deg`, le dégradé commencerait en rouge avant de passer au bleu. En utilisant `abs()` afin de rendre la valeur positive, le dégradé commencera en bleu et passera ensuite au rouge.

```css
div {
  --deg: -45deg;
  background-image: linear-gradient(abs(var(--deg)), blue, red);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`sign()`](/fr/docs/Web/CSS/sign_function)

---
title: Fonction CSS `abs()`
short-title: abs()
slug: Web/CSS/Reference/Values/abs
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`abs()`** retourne la valeur absolue de l'argument, avec le même type que l'argument.

## Syntaxe

```css
/* abs( <calc-sum> ) */
abs(20% - 100px)
abs(var(--gradientAngle))
```

### Paramètres

La fonction `abs()` accepte un paramètre.

- `<calc-sum>`
  - : Une expression ou un calcul qui se résout en un nombre ({{CSSxRef("&lt;number&gt;")}}), une dimension ({{CSSxRef("&lt;dimension&gt;")}}), un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}) ou un mot-clé {{CSSxRef("&lt;calc-keyword&gt;")}}.

### Valeur de retour

La valeur absolue de `<calc-sum>`.

- Si la valeur numérique de `<calc-sum>` est positive ou `0⁺`, la fonction retourne `<calc-sum>`.
- Sinon, elle retourne `-1 * <calc-sum>`.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Variables positives

La fonction `abs()` peut être utilisée afin de s'assurer qu'une valeur est toujours positive. Dans l'exemple suivant, on a une propriété personnalisée, `--font-size`, qui est utilisée comme valeur pour {{CSSxRef("font-size")}}. Envelopper cette propriété dans un appel à la fonction `abs()` convertira une valeur négative en une valeur positive.

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

### Solution de repli compatible avec les anciennes versions

Dans les navigateurs qui ne prennent pas en charge la fonction CSS `abs()`, vous pouvez utiliser la fonction CSS {{CSSxRef("max")}} pour obtenir le même résultat&nbsp;:

```css
p {
  line-height: max(var(--lh), -1 * var(--lh));
}
```

Nous utilisons la fonction {{CSSxRef("max()")}} pour retourner la plus grande valeur (la plus positive) d'une liste de deux valeurs&nbsp;: `var(--lh)` ou `-1 * var(--lh)`. Que `--lh` soit positif ou négatif, la valeur calculée sera toujours positive, c'est-à-dire un nombre absolu.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La fonction {{CSSxRef("sign()")}}

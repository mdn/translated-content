---
title: Fonction CSS `mod()`
short-title: mod()
slug: Web/CSS/Reference/Values/mod
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`mod()`** retourne le reste d'une division lorsque le premier paramètre est divisé par le deuxième paramètre, similaire à l'opérateur de reste (`%`) en JavaScript. Le reste est la valeur qui reste lorsqu'un opérande, le dividende, est divisé par un deuxième opérande, le diviseur. Il prend toujours le signe du diviseur.

Le calcul est `a - (Math.floor(a / b) * b)`. Par exemple, la fonction CSS `mod(21, -4)` retourne le reste de `-3`. Le calcul complet est `21 - (Math.floor(21 / -4) * -4)`. Lors de la division de `21` par `-4`, le résultat est `-5.25`. Cela est arrondi à `-6`. Multiplier `-6` par `-4` donne `24`. Soustraire ce `24` de l'original `21`, le reste est -3.

## Syntaxe

```css
/* Valeurs sans unité <number> */
line-height: mod(7, 2); /* 1 */
line-height: mod(14, 5); /* 4 */
line-height: mod(3.5, 2); /* 1.5 */

/* Valeurs basées sur les unités <percentage> et <dimension> */
margin: mod(15%, 2%); /* 1% */
margin: mod(18px, 4px); /* 2px */
margin: mod(19rem, 5rem); /* 4rem */
margin: mod(29vmin, 6vmin); /* 5vmin */
margin: mod(
  1000px,
  29rem
); /* 72px - si la taille de la police racine est de 16px */

/* Valeurs négatives/positives */
rotate: mod(100deg, 30deg); /* 10deg */
rotate: mod(135deg, -90deg); /* -45deg */
rotate: mod(-70deg, 20deg); /* 10deg */
rotate: mod(-70deg, -15deg); /* -10deg */

/* Calculs */
scale: mod(10 * 2, 1.7); /* 1.3 */
rotate: mod(10turn, 18turn / 3); /* 4turn */
transition-duration: mod(20s / 2, 3000ms * 2); /* 4s */
```

### Paramètres

La fonction `mod(dividend, divisor)` accepte deux valeurs séparées par des virgules comme paramètres. Les deux paramètres doivent être du même type, [nombre](/fr/docs/Web/CSS/Reference/Values/number), [dimension](/fr/docs/Web/CSS/Reference/Values/dimension), ou pourcentage ({{CSSxRef("&lt;percentage&gt;")}}), pour que la fonction soit valide. Bien que les unités des deux paramètres n'ont pas besoin d'être les mêmes, elles doivent être du même type de dimension, comme {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}} ou {{CSSxRef("&lt;frequency&gt;")}} pour être valides.

- `dividend`
  - : Un calcul qui se résout en un nombre ({{CSSxRef("&lt;number&gt;")}}), une dimension ({{CSSxRef("&lt;dimension&gt;")}}), ou un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}) représentant le dividende.

- `divisor`
  - : Un calcul qui se résout en un nombre ({{CSSxRef("&lt;number&gt;")}}), une dimension ({{CSSxRef("&lt;dimension&gt;")}}), ou un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}) représentant le diviseur.

### Valeur de retour

Retourne un nombre ({{CSSxRef("&lt;number&gt;")}}), une dimension ({{CSSxRef("&lt;dimension&gt;")}}), ou un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}) (correspondant au type des paramètres) représentant le reste, c'est-à-dire l'opération restante.

- Si `divisor` est `0`, le résultat est `NaN`.
- Si `dividend` est `infinite`, le résultat est `NaN`.
- Si `divisor` est positif, le résultat est positif (`0⁺`), et si `divisor` est négatif, le résultat est négatif (`0⁻`).

## Syntaxe formelle

{{CSSSyntax}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La fonction {{CSSxRef("round()")}}
- La fonction {{CSSxRef("rem()")}}

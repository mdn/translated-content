---
title: Fonction CSS `rem()`
short-title: rem()
slug: Web/CSS/Reference/Values/rem
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`rem()`** retourne le reste lorsqu'un premier paramètre est divisé par un second paramètre, similaire à [l'opérateur de reste (`%`)](/fr/docs/Web/JavaScript/Reference/Operators/Remainder) en JavaScript. Le reste est la valeur qui reste lorsqu'un opérande, le dividende, est divisé par un second opérande, le diviseur. Il prend toujours le signe du dividende.

> [!NOTE]
> Pour en savoir plus sur l'unité `rem`, consultez la page {{CSSxRef("&lt;length&gt;")}}.

Par exemple, la fonction CSS `rem(27, 5)` retourne le reste de `2`. Lors de la division de 27 par 5, le résultat est 5 avec un reste de 2. Le calcul complet est `27 / 5 = 5 * 5 + 2`.

## Syntaxe

```css
/* <number> sans unité */
line-height: rem(21, 2); /* 1 */
line-height: rem(14, 5); /* 4 */
line-height: rem(5.5, 2); /* 1.5 */

/* Basé sur l'unité <percentage> et <dimension> */
margin: rem(14%, 3%); /* 2% */
margin: rem(18px, 5px); /* 3px */
margin: rem(10rem, 6rem); /* 4rem */
margin: rem(26vmin, 7vmin); /* 5vmin */
margin: rem(
  1000px,
  29rem
); /* 72px - si la taille de police racine est de 16px */

/* Valeurs négatives/positives */
rotate: rem(200deg, 30deg); /* 20deg */
rotate: rem(140deg, -90deg); /* 50deg */
rotate: rem(-90deg, 20deg); /* -10deg */
rotate: rem(-55deg, -15deg); /* -10deg */

/* Calculs */
scale: rem(10 * 2, 1.7); /* 1.3 */
rotate: rem(10turn, 18turn / 3); /* 4turn */
transition-duration: rem(20s / 2, 3000ms * 2); /* 4s */
```

### Paramètres

La fonction `rem(dividend, divisor)` accepte deux valeurs séparées par des virgules comme paramètres. Les deux paramètres doivent être du même type, [nombre](/fr/docs/Web/CSS/Reference/Values/number), [dimension](/fr/docs/Web/CSS/Reference/Values/dimension), ou pourcentage ({{CSSxRef("percentage")}}), pour que la fonction soit valide. Bien que les unités des deux paramètres n'aient pas besoin d'être les mêmes, elles doivent être du même type de dimension, comme {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, ou {{CSSxRef("&lt;frequency&gt;")}} pour être valides.

- `dividend`
  - : Un calcul qui résout à un nombre ({{CSSxRef("&lt;number&gt;")}}), une dimension ({{CSSxRef("&lt;dimension&gt;")}}), ou un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}) représentant le dividende.

- `divisor`
  - : Un calcul qui résout à un nombre ({{CSSxRef("&lt;number&gt;")}}), une dimension ({{CSSxRef("&lt;dimension&gt;")}}), ou un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}) représentant le diviseur.

### Valeur de retour

Retourne un nombre ({{CSSxRef("&lt;number&gt;")}}), une dimension ({{CSSxRef("&lt;dimension&gt;")}}), ou un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}) (correspond au type des paramètres) représentant le reste, c'est-à-dire l'opération restante.

- Si `divisor` est `0`, le résultat est `NaN`.
- Si `dividend` est `infinite`, le résultat est `NaN`.
- Si `dividend` est positif, le résultat est positif (`0⁺`), et si `dividend` est négatif, le résultat est négatif (`0⁻`).

## Syntaxe formelle

{{CSSSyntax}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La fonction {{CSSxRef("round()")}}
- La fonction {{CSSxRef("mod()")}}
- Le type de donnée {{CSSxRef("&lt;length&gt;")}}

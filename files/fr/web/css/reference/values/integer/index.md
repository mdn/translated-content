---
title: <integer>
slug: Web/CSS/Reference/Values/integer
original_slug: Web/CSS/integer
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Le [type de données](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<integer>`** est un type particulier de {{cssxref("number")}} qui représente un nombre entier positif ou négatif. Les entiers peuvent être utilisés dans de nombreuses propriétés et descripteurs CSS, comme les propriétés {{cssxref("column-count")}}, {{cssxref("counter-increment")}}, {{cssxref("grid-column")}}, {{cssxref("grid-row")}}, {{cssxref("z-index")}} et le descripteur {{cssxref("@counter-style/range", "range")}}.

## Syntaxe

Le type de donnée `<integer>` se compose d'un ou plusieurs chiffres décimaux, de 0 à 9 inclus, précédés éventuellement d'un seul signe `+` ou `-`. Il n'y a pas d'unité associée aux entiers.

> [!NOTE]
> Il n'existe pas de plage officielle de valeurs `<integer>` valides, et les spécifications n'en définissent pas.

## Interpolation

Lorsqu'elles sont animées, les valeurs du type `<integer>` sont {{Glossary("interpolation", "interpolées")}} par paliers entiers discrets. Le calcul est réalisé comme s'il s'agissait de nombres réels à virgule flottante&nbsp;; la valeur discrète est obtenue en utilisant la [fonction partie entière](https://fr.wikipedia.org/wiki/Partie_enti%C3%A8re_et_partie_fractionnaire). La rapidité de l'interpolation est déterminée par la [fonction de temporisation](/fr/docs/Web/CSS/Reference/Values/easing-function) associée à l'animation.

## Exemples

### Entiers valides

```plain example-good
12          Entier positif (sans le signe +)
+123        Entier positif (avec le signe +)
-456        Entier négatif
0           Zéro
+0          Zéro, avec le signe +
-0          Zéro, avec le signe -
```

### Entiers non valides

```plain example-bad
12.0        Ceci est un <number>, pas un <entier>, même si c'est un entier.
12.         Le point ne peut pas faire partie d'un <entier>.
+---12      Un seul +/- à l'avant est autorisé.
ten         Les lettres ne sont pas autorisées.
_5          Les caractères spéciaux ne sont pas autorisés.
\35         Les caractères Unicode échappés ne sont pas autorisés, même si c'est un entier (ici : 5).
\4E94       Les chiffres non-arabes ne sont pas autorisés, même échappés (ici : le 5 japonais, 五).
3e4         La notation scientifique n'est pas autorisée.
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le type de donnée {{cssxref("&lt;number&gt;")}}

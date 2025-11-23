---
title: <position>
slug: Web/CSS/Reference/Values/position_value
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

Le [type de donnée](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<position>`** désigne une paire de coordonnées utilisée pour définir un emplacement par rapport à une boîte d'élément. Elle est utilisée dans les propriétés {{CSSxRef("background-position")}}, {{CSSxRef("object-position")}}, {{CSSxRef("mask-position")}}, {{CSSxRef("offset-position")}}, {{CSSxRef("offset-anchor")}} et {{CSSxRef("transform-origin")}}.

> [!NOTE]
> La position finale obtenue, décrite par la valeur `<position>`, n'est pas nécessairement située à l'intérieur de la boîte de l'élément.

## Syntaxe

![Grille montrant le placement des différentes valeurs. 0 0 est le coin supérieur gauche. Les quatre valeurs right, right center, center left 100% et top 50% left 100% sont équivalentes : elles sont sur le bord droit, au milieu verticalement. Les deux valeurs top 75px left 100px et left 100px top 75px sont identiques. bottom left 25% est équivalent à top 100% left 25%.](position_type.png)

Le type de données `<position>` se définit par un ou deux mots-clés, éventuellement accompagnés de décalages.

Les mots-clés possibles sont `center`, `top`, `right`, `bottom` et `left`. Chaque mot-clé représente soit un bord de la boîte de l'élément, soit la ligne centrale située entre deux bords. Selon le contexte, `center` représente soit le centre entre les bords gauche et droit, soit le centre entre les bords haut et bas.

Si un décalage est précisé, il peut être soit une valeur relative ({{CSSxRef("&lt;percentage&gt;")}}), soit une valeur absolue ({{CSSxRef("&lt;length&gt;")}}). Les valeurs positives déplacent vers la droite ou vers le bas, selon le cas. Les valeurs négatives déplacent dans la direction opposée.

Si une seule valeur de décalage est présente, elle définit la coordonnée en abscisse (x), la valeur de l'autre axe prend par défaut `center`.

```css
/* Syntaxe à 1 valeur */
keyword                  /* Position horizontale ou verticale : l'axe opposé
                            vaut center */
value                    /* La position sur l'axe x : l'axe y vaut 50% */

/* Syntaxe à 2 valeurs */
keyword keyword          /* Un mot-clé pour chaque direction (l'ordre est
                            sans importance) */
keyword value            /* Un mot-clé pour la position horizontale, une
                            valeur pour la position verticale */
value keyword            /* Une valeur pour la position horizontale, un
                            mot-clé pour la position verticale */
value value              /* Une valeur pour chaque direction (horizontal
                            puis vertical) */

/* Syntaxe à 4 valeurs */
keyword value keyword value /* Chaque valeur est un décalage par rapport au
                               mot-clé qui la précède */
```

> [!NOTE]
> La propriété {{CSSxRef("background-position")}} accepte également une syntaxe à trois valeurs. Ceci n'est pas autorisé pour les autres propriétés qui utilisent `<position>`.

## Interpolation

Les valeurs des coordonnées en abscisses et en ordonnées sont interpolées indépendamment. La vitesse de l'interpolation est définie par une unique fonction de temporisation ([`easing-function`](/fr/docs/Web/CSS/Reference/Values/easing-function)), le point se déplacera donc sur une ligne.

### Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Positions valides

```plain example-good
center
left
center top

right 8.5%
bottom 12vmin right -6px

10% 20%
8rem 14px
```

### Positions invalides

```plain example-bad
left right
bottom top
10px 15px 20px 15px
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le module de [Valeurs et unités CSS](/fr/docs/Web/CSS/Guides/Values_and_units)
- [Apprendre&nbsp;: Valeurs et unités CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- La propriété {{CSSxRef("background-position")}}
- La fonction {{CSSxRef("gradient/radial-gradient", "radial-gradient()")}}
- La fonction {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}

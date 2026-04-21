---
title: Propriété CSS `stroke-dashoffset`
short-title: stroke-dashoffset
slug: Web/CSS/Reference/Properties/stroke-dashoffset
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`stroke-dashoffset`** définit un décalage pour le point de départ du rendu d'un [élément SVG](/fr/docs/Web/SVG) associé à un [tableau de tirets](/fr/docs/Web/CSS/Reference/Properties/stroke-dasharray). Si elle est présente, elle remplace l'attribut SVG {{SVGAttr("stroke-dashoffset")}} de l'élément.

Cette propriété s'applique à tout élément de forme SVG ou de contenu textuel (voir {{SVGAttr("stroke-dashoffset")}} pour une liste complète), mais en tant que propriété héritée, elle peut être appliquée à des éléments tels que {{SVGElement("g")}} et avoir toujours l'effet souhaité sur les contours des éléments descendants.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
stroke-dashoffset: none;

/* Valeurs de longueur et de pourcentage */
stroke-dashoffset: 2;
stroke-dashoffset: 2px;
stroke-dashoffset: 2%;

/* Valeurs globales */
stroke-dashoffset: inherit;
stroke-dashoffset: initial;
stroke-dashoffset: revert;
stroke-dashoffset: revert-layer;
stroke-dashoffset: unset;
```

### Valeurs

- {{CSSxRef("&lt;number&gt;")}} {{Non-standard_Inline}}
  - : Un nombre d'unités SVG, dont la taille est définie par l'espace d'unité actuel. La valeur donnée, si elle est différente de `0`, déplace le point de départ du début du tableau de tirets vers un autre point à l'intérieur de celui-ci. Ainsi, les valeurs positives sembleront décaler le motif de tirets _en arrière_, et les valeurs négatives sembleront décaler le motif _en avant_.

- {{CSSxRef("&lt;length&gt;")}}
  - : Les unités de pixels sont traitées de la même manière que les unités SVG (voir `<number>`, ci-dessus) et les longueurs basées sur la police telles que `em` sont calculées par rapport à la valeur SVG de l'élément pour la taille du texte&nbsp;; les effets des autres unités de longueur peuvent dépendre du navigateur. L'effet de décalage pour toute valeur est le même que pour les valeurs `<number>` (voir ci-dessus).

- {{CSSxRef("&lt;percentage&gt;")}}
  - : Les pourcentages se réfèrent à la diagonale normalisée de la fenêtre SVG actuelle, qui est calculée comme <math><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math>, _et non_ à la longueur totale du chemin de contour. Les valeurs négatives sont invalides.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Décalage des tirets

Pour montrer comment les tirets peuvent être décalés, nous configurons d'abord cinq chemins identiques, auxquels est attribué un tableau de tirets composé d'un tiret de 20 unités suivi d'un espace de 3 unités avec l'attribut SVG {{SVGAttr('stroke-dasharray')}}. (Cela aurait également pu être fait avec la propriété CSS {{CSSxRef('stroke-dasharray')}}.) Les chemins reçoivent ensuite des décalages de tirets individuels avec CSS.

```html
<svg viewBox="0 0 100 50" width="500" height="250">
  <rect x="10" y="5" width="80" height="30" fill="#eeeeee" />
  <g stroke="dodgerblue" stroke-width="2" stroke-dasharray="20,3">
    <path d="M 10,10 h 80" />
    <path d="M 10,15 h 80" />
    <path d="M 10,20 h 80" />
    <path d="M 10,25 h 80" />
    <path d="M 10,30 h 80" />
  </g>
</svg>
```

```css
path:nth-of-type(1) {
  stroke-dashoffset: 0;
}
path:nth-of-type(2) {
  stroke-dashoffset: -5;
}
path:nth-of-type(3) {
  stroke-dashoffset: 5;
}
path:nth-of-type(4) {
  stroke-dashoffset: 5px;
}
path:nth-of-type(5) {
  stroke-dashoffset: 5%;
}
```

Dans l'ordre&nbsp;:

1. Le premier des cinq chemins reçoit un décalage nul, ce qui correspond au comportement par défaut.
2. Le deuxième chemin reçoit un décalage de `-5`, ce qui décale le point de départ du tableau de cinq unités avant le point zéro. L'effet visuel est que le motif de tirets est avancé de cinq unités&nbsp;; ainsi, on voit, au début du chemin, les deux dernières unités d'un tiret puis un espace de trois unités.
3. Le troisième chemin a un décalage de `5`, ce qui signifie que le point de départ des tirets se trouve cinq unités après le début du motif. L'effet visuel est de reculer le motif de tirets de cinq unités&nbsp;; ainsi, on voit, au début du chemin, les quinze dernières unités d'un tiret suivies d'un espace de trois unités.
4. Le quatrième chemin a un décalage de `5px`, ce qui a le même effet qu'une valeur de `5` (voir précédent).
5. Le cinquième et dernier chemin a un décalage de `5%`, ce qui est très similaire aux deux exemples précédents, mais pas tout à fait identique. Les pourcentages sont calculés par rapport à la diagonale de la zone d'affichage SVG, et peuvent donc varier selon la taille et le rapport d'aspect de cette zone d'affichage.

{{EmbedLiveSample("Décalage des tirets", 500, 250)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut SVG {{SVGAttr("stroke-dashoffset")}}
- La propriété {{CSSxRef("stroke-dasharray")}}
- La propriété raccourcie {{CSSxRef("stroke")}}

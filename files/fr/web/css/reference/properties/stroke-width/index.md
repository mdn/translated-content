---
title: stroke-width
slug: Web/CSS/Reference/Properties/stroke-width
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`stroke-width`** définit l'épaisseur du contour appliqué à la forme [SVG](/fr/docs/Web/SVG). Si elle est présente, elle remplace l'attribut SVG {{SVGAttr("stroke-width")}} de l'élément.

Cette propriété s'applique à toute forme SVG ou élément de contenu textuel (voir {{SVGAttr("stroke-width")}} pour une liste complète), mais en tant que propriété héritée, elle peut être appliquée à des éléments tels que {{SVGElement("g")}} et avoir toujours l'effet souhaité sur les contours des éléments descendants. Si la valeur est évaluée à zéro, le contour n'est pas dessiné.

## Syntaxe

```css
/* Valeurs de longueur et pourcentages */
stroke-width: 0%;
stroke-width: 1.414px;

/* Valeurs globales */
stroke-width: inherit;
stroke-width: initial;
stroke-width: revert;
stroke-width: revert-layer;
stroke-width: unset;
```

### Valeurs

- {{CSSxRef("&lt;length&gt;")}}
  - : Les unités en pixels sont traitées de la même manière que les unités SVG (voir `<number>`, ci-dessus) et les longueurs basées sur la police comme `em` sont calculées par rapport à la valeur SVG de la taille du texte de l'élément&nbsp;; les effets des autres unités de longueur peuvent dépendre du navigateur.

- {{CSSxRef("&lt;percentage&gt;")}}
  - : Les pourcentages se réfèrent à la diagonale normalisée de la zone d'affichage SVG courante, qui est calculée comme <math><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math>.

- {{CSSxRef("&lt;number&gt;")}} {{Non-standard_Inline}}
  - : Un nombre d'unités SVG, dont la taille est définie par l'espace d'unité courant.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Différentes épaisseurs de contour

Cet exemple montre différentes syntaxes de valeurs pour la propriété `stroke-width`.

#### HTML

Tout d'abord, nous définissons cinq chemins à segments multiples, qui utilisent tous un contour noir d'une largeur de un, sans remplissage. Chaque chemin crée une série de symboles de montagne, allant de la gauche (un angle de coin peu prononcé) à la droite (un angle de coin très prononcé).

```html
<svg viewBox="0 0 39 30" xmlns="http://www.w3.org/2000/svg">
  <g stroke="black" stroke-width="1" fill="none">
    <path
      d="M1,5 l7   ,-3 l7   ,3
         m2,0 l3.5 ,-3 l3.5 ,3
         m2,0 l2   ,-3 l2   ,3
         m2,0 l0.75,-3 l0.75,3
         m2,0 l0.5 ,-3 l0.5 ,3" />
    <path
      d="M1,8 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3" />
    <path
      d="M1,14 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3" />
    <path
      d="M1,18 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3" />
    <path
      d="M1,26 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3" />
  </g>
</svg>
```

#### CSS

Pour les quatre premiers chemins, nous appliquons des valeurs d'épaisseur de contour par paires pour montrer comment les valeurs numériques simples et les valeurs en pixels sont équivalentes. Pour les deux premiers chemins, les valeurs sont `.25` et `.25px`. Pour les deux suivants, les valeurs sont `1` et `1px`.

Pour le cinquième et dernier chemin, une valeur de `5%` est appliquée, ce qui définit une épaisseur de contour égale à cinq pour cent de la longueur de la diagonale de la zone d'affichage SVG.

```css
path:nth-child(1) {
  stroke-width: 0.25;
}
path:nth-child(2) {
  stroke-width: 0.25px;
}
path:nth-child(3) {
  stroke-width: 1;
}
path:nth-child(4) {
  stroke-width: 1px;
}
path:nth-child(5) {
  stroke-width: 5%;
}
```

#### Résultat

{{EmbedLiveSample("Différentes épaisseurs de contour", 400, 540)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{CSSxRef("stroke")}}
- La propriété {{CSSxRef("stroke-dasharray")}}
- La propriété {{CSSxRef("stroke-dashoffset")}}
- La propriété {{CSSxRef("stroke-linecap")}}
- La propriété {{CSSxRef("stroke-linejoin")}}
- La propriété {{CSSxRef("stroke-miterlimit")}}
- La propriété {{CSSxRef("stroke-opacity")}}
- La propriété {{CSSxRef("fill")}}
- L'attribut SVG {{SVGAttr("stroke-width")}}

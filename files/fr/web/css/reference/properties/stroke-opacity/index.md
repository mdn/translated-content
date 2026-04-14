---
title: stroke-opacity
slug: Web/CSS/Reference/Properties/stroke-opacity
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`stroke-opacity`** définit l'opacité du contour d'une forme [SVG](/fr/docs/Web/SVG). L'effet est identique à celui de {{CSSxRef('opacity')}}, sauf qu'il ne s'applique qu'au contour, et non à l'ensemble de l'élément. Si elle est présente, elle remplace l'attribut SVG {{SVGAttr("stroke-opacity")}} de l'élément.

Cette propriété s'applique aux formes SVG et aux éléments de contenu textuel (voir {{SVGAttr("stroke-opacity")}} pour une liste complète), mais en tant que propriété héritée, elle peut être appliquée à des éléments tels que {{SVGElement("g")}} et avoir toujours l'effet souhaité sur les contours des éléments descendants.

Notez que le contour d'une forme recouvre partiellement le remplissage de cette forme, donc un contour avec une opacité inférieure à `1` affichera le remplissage mélangé avec le contour là où ils se chevauchent. Pour éviter cet effet, il est possible d'appliquer une opacité globale avec la propriété {{CSSxRef('opacity')}} ou de placer le contour derrière le remplissage avec l'attribut {{CSSxRef('paint-order')}}.

## Syntaxe

```css
/* Valeurs numériques et pourcentages */
stroke-opacity: 1;
stroke-opacity: 0.3;
stroke-opacity: 50%;

/* Valeurs globales */
stroke-opacity: inherit;
stroke-opacity: initial;
stroke-opacity: revert;
stroke-opacity: revert-layer;
stroke-opacity: unset;
```

### Valeurs

- {{CSSxRef("&lt;number&gt;")}}
  - : Tout nombre réel de 0 à 1 inclus. Une valeur de `0` rend le contour complètement transparent, et une valeur de `1` le rend complètement opaque. Les valeurs en dehors de l'intervalle 0 - 1 sont ramenées à la borne la plus proche de cet intervalle&nbsp;; ainsi, les valeurs négatives sont ramenées à `0`.

- {{CSSxRef("&lt;percentage&gt;")}}
  - : Identique à `<number>` (voir ci-dessus), sauf que l'intervalle autorisé est de 0 % à 100 % et que le découpage est effectué par rapport à cet intervalle.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Différentes opacités de contour

Cet exemple montre l'utilisation basique de la propriété `stroke-opacity` et comment, comme le contour d'une forme recouvre partiellement son remplissage, un contour avec une opacité inférieure à `1` se mélange avec le remplissage là où ils se chevauchent.

#### HTML

Tout d'abord, nous définissons cinq chemins à segments multiples, qui utilisent tous un contour noir d'une largeur de un, et un remplissage `dodgerblue` pour les sous-chemins. Chaque chemin crée une série de symboles de montagne, allant de la gauche (un angle de coin peu prononcé) à la droite (un angle de coin très prononcé).

```html
<svg viewBox="0 0 39 36" xmlns="http://www.w3.org/2000/svg">
  <g stroke="black" stroke-width="1" fill="dodgerblue">
    <path
      d="M1,5 l7   ,-3 l7   ,3
         m2,0 l3.5 ,-3 l3.5 ,3
         m2,0 l2   ,-3 l2   ,3
         m2,0 l0.75,-3 l0.75,3
         m2,0 l0.5 ,-3 l0.5 ,3" />
    <path
      d="M1,12 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3" />
    <path
      d="M1,19 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3" />
    <path
      d="M1,26 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3" />
    <path
      d="M1,33 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3" />
  </g>
</svg>
```

#### CSS

À ces chemins, nous appliquons une valeur d'opacité de contour de plus en plus élevée. Pour les quatre premiers chemins, le remplissage peut être vu à travers la moitié intérieure du contour, bien que cela puisse être difficile à discerner pour le quatrième chemin. Pour le cinquième et dernier chemin, le contour est totalement opaque et le remplissage ne peut donc pas être vu à travers le contour.

```css
g path:nth-child(1) {
  stroke-opacity: 0.2;
} /* equiv. 20% */
g path:nth-child(2) {
  stroke-opacity: 0.4;
} /* equiv. 40% */
g path:nth-child(3) {
  stroke-opacity: 0.6;
} /* equiv. 60% */
g path:nth-child(4) {
  stroke-opacity: 0.8;
} /* equiv. 80% */
g path:nth-child(5) {
  stroke-opacity: 1;
} /* equiv. 100% */
```

#### Résultat

{{EmbedLiveSample("Différentes opacités de contour", 400, 650)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef('opacity')}}
- La propriété {{CSSxRef('fill-opacity')}}
- La propriété {{CSSxRef('paint-order')}}
- La propriété raccourcie {{CSSxRef('stroke')}}
- La propriété {{CSSxRef("stroke-dasharray")}}
- La propriété {{CSSxRef("stroke-dashoffset")}}
- La propriété {{CSSxRef("stroke-linecap")}}
- La propriété {{CSSxRef("stroke-linejoin")}}
- La propriété {{CSSxRef("stroke-miterlimit")}}
- La propriété {{CSSxRef("stroke-width")}}
- L'attribut SVG {{SVGAttr("stroke-opacity")}}

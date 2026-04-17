---
title: stroke-miterlimit
slug: Web/CSS/Reference/Properties/stroke-miterlimit
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`stroke-miterlimit`** définit une limite sur le rapport entre la longueur de l'onglet et la largeur du contour ({{CSSxRef("stroke-width")}}) lorsque la forme utilisée aux coins du tracé d'un élément [SVG](/fr/docs/Web/SVG) est une jonction en onglet. Si la limite définie par cette propriété est dépassée, la jonction est convertie de `miter` à `bevel`, ce qui donne à l'angle un aspect tronqué.

Cette propriété s'applique à toute forme SVG générant des coins ou à tout élément de contenu textuel (voir {{SVGAttr("stroke-miterlimit")}} pour une liste complète), mais en tant que propriété héritée, elle peut être appliquée à des éléments tels que {{SVGElement("g")}} et avoir toujours l'effet souhaité sur les contours des éléments descendants. Si elle est présente, elle remplace l'attribut {{SVGAttr("stroke-miterlimit")}} de l'élément.

## Description

Lorsque deux segments de ligne se rejoignent à un angle aigu et que des jonctions `miter` ont été définies pour {{CSSxRef("stroke-linejoin")}}, ou si elles prennent cette valeur par défaut, il est possible que l'onglet dépasse largement l'épaisseur de la ligne du tracé. Le rapport `stroke-miterlimit` sert à définir une limite, au-delà de laquelle la jonction est convertie d'un onglet à un biseau.

Le rapport entre la longueur de l'onglet (la distance entre la pointe extérieure et le coin intérieur de l'onglet) et la {{CSSxRef("stroke-width")}} est directement lié à l'angle (thêta) entre les segments dans l'espace utilisateur par la formule&nbsp;:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mstyle displaystyle="true"><mi>stroke-miterlimit</mi><mo>=</mo><mfrac><mrow><mi>miterLength</mi></mrow><mrow><mi>stroke-width</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mrow><mi>sin</mi><mrow><mo>(</mo><mfrac><mrow><mo>θ</mo></mrow><mrow><mn>2</mn></mrow></mfrac><mo>)</mo></mrow></mrow></mrow></mfrac></mstyle><annotation encoding="TeX">\text{stroke-miterlimit} = \frac{\text{miterLength}}{\text{stroke-width}} = \frac{1}{\sin\left(\frac{\theta}{2}\right)}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Par exemple, une limite d'onglet de `1.414` convertit les onglets en biseaux pour une valeur de thêta inférieure à 90 degrés, une limite de `4.0` les convertit pour une thêta inférieure à environ 29 degrés, et une limite de `10.0` les convertit pour une thêta inférieure à environ 11,5 degrés.

## Syntaxe

```css
/* Valeurs numériques */
stroke-miterlimit: 1;
stroke-miterlimit: 3.1416;

/* Valeurs globales */
stroke-miterlimit: inherit;
stroke-miterlimit: initial;
stroke-miterlimit: revert;
stroke-miterlimit: revert-layer;
stroke-miterlimit: unset;
```

### Valeurs

- {{CSSxRef("&lt;number&gt;")}}
  - : Tout nombre réel positif égal ou supérieur à `1`&nbsp;; les valeurs inférieures à `1` sont invalides. La valeur initiale est `4`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Différentes limites d'onglet

Cet exemple montre l'effet de différentes valeurs pour la propriété `stroke-miterlimit`.

#### HTML

Nous créons cinq chemins à segments multiples, qui utilisent tous un contour noir d'une largeur de un, sans remplissage. Chaque chemin crée une série de symboles de montagne, allant de la gauche (un angle de coin peu prononcé) à la droite (un angle de coin très prononcé).

```html
<svg viewBox="0 0 39 36" xmlns="http://www.w3.org/2000/svg">
  <g stroke="black" stroke-width="1" fill="none">
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

Nous appliquons des valeurs de plus en plus grandes de `stroke-miterlimit` aux chemins, de sorte que pour le premier chemin, seul le premier sous-chemin (le plus à gauche) est en onglet&nbsp;; pour le deuxième chemin, les deux premiers sous-chemins sont en onglet&nbsp;; et ainsi de suite jusqu'à ce que, pour le cinquième chemin, les cinq sous-chemins soient en onglet.

```css
path:nth-child(1) {
  stroke-miterlimit: 1.1;
}
path:nth-child(2) {
  stroke-miterlimit: 1.4;
}
path:nth-child(3) {
  stroke-miterlimit: 1.9;
}
path:nth-child(4) {
  stroke-miterlimit: 4.2;
}
path:nth-child(5) {
  stroke-miterlimit: 6.1;
}
```

{{EmbedLiveSample("Various miter limits", 400, 650)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("stroke-dasharray")}}
- La propriété {{CSSxRef("stroke-dashoffset")}}
- La propriété {{CSSxRef("stroke-linecap")}}
- La propriété {{CSSxRef("stroke-linejoin")}}
- La propriété {{CSSxRef("stroke-opacity")}}
- La propriété {{CSSxRef("stroke-width")}}
- La propriété {{CSSxRef("stroke")}}
- L'attribut SVG {{SVGAttr("stroke-miterlimit")}}

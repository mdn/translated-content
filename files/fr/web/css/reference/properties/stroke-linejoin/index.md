---
title: Propriété CSS `stroke-linejoin`
short-title: stroke-linejoin
slug: Web/CSS/Reference/Properties/stroke-linejoin
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`stroke-linejoin`** définit la forme à utiliser aux coins des chemins tracés d'un élément [SVG](/fr/docs/Web/SVG). Si elle est présente, elle remplace l'attribut SVG {{SVGAttr("stroke-linejoin")}} de l'élément.

Cette propriété s'applique à tout élément SVG générant des coins ou à un élément de contenu textuel (voir {{SVGAttr("stroke-linejoin")}} pour une liste complète), mais en tant que propriété héritée, elle peut être appliquée à des éléments tels que {{SVGElement("g")}} et avoir toujours l'effet souhaité sur les éléments descendants.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
stroke-linejoin: bevel;
stroke-linejoin: miter;
stroke-linejoin: round;

/* Valeurs globales */
stroke-linejoin: inherit;
stroke-linejoin: initial;
stroke-linejoin: revert;
stroke-linejoin: revert-layer;
stroke-linejoin: unset;
```

### Valeurs

- `bevel`
  - : Indique qu'un coin biseauté doit être utilisé pour joindre les segments de chemin. Le biseau est formé en tronquant le coin par une ligne perpendiculaire à une ligne qui divise la différence des angles des sous-tracés là où ils se rencontrent au point de jonction.

- `miter`
  - : Indique qu'un coin pointu doit être utilisé pour joindre les segments de chemin. Le coin est formé en prolongeant les bords extérieurs du contour aux tangentes des segments de chemin jusqu'à ce qu'ils se croisent. C'est la valeur par défaut.

- `round`
  - : Indique qu'un coin arrondi doit être utilisé pour joindre les segments de chemin. Cela se fait en coupant la jonction comme pour `bevel`, puis en ajoutant un arc rempli tangent pour arrondir le coin.

Les valeurs suivantes sont définies, mais ne sont prises en charge par aucun navigateur&nbsp;:

- `arcs`
  - : _(N'est pas pris en charge.)_ Indique qu'un _coin en arc_ doit être utilisé pour joindre les segments de chemin. La forme de l'arc est formée en prolongeant les bords extérieurs du contour au point de jonction avec des arcs ayant la même courbure que les bords extérieurs au point de jonction.

- `crop`
  - : _(N'est pas pris en charge.)_ Indique que le coin doit s'étendre au-delà du point de jonction de la manière minimale nécessaire pour former un coin convexe. Cela équivaut fonctionnellement à `miter` (voir ci-dessus) avec une valeur de {{CSSxRef('stroke-miterlimit')}} de `1`.

- `fallback`
  - : _(N'est pas pris en charge&nbsp;; à risque.)_ Se comporte de manière identique à `crop bevel` lorsque la valeur de {{CSSxRef('stroke-miterlimit')}} est dépassée.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Styles de jonction de ligne

Cet exemple montre les trois valeurs de mot-clé actuellement prises en charge pour `stroke-linejoin`.

#### HTML

Nous configurons quatre chemins identiques, tous ayant un contour noir d'une largeur de un et sans remplissage.

```html
<svg viewBox="0 0 15 12" xmlns="http://www.w3.org/2000/svg">
  <g stroke="black" stroke-width="1" fill="none">
    <path d="M2,5  a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5" />
    <path d="M8,5  a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5" />
    <path d="M2,11 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5" />
    <path d="M8,11 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5" />
  </g>
</svg>
```

#### CSS

À chacun des quatre chemins, une valeur de jonction de ligne prise en charge est appliquée. Le premier est biseauté, le deuxième arrondi, le troisième en coin, et le quatrième également en coin mais avec une {{CSSxRef('stroke-miterlimit')}} de `2`, ce qui force le coin à être biseauté au lieu d'être en coin.

```css
path:nth-child(1) {
  stroke-linejoin: bevel;
}
path:nth-child(2) {
  stroke-linejoin: round;
}
path:nth-child(3) {
  stroke-linejoin: miter;
}
path:nth-child(4) {
  stroke-linejoin: miter;
  stroke-miterlimit: 2;
}
```

#### Résultats

{{EmbedLiveSample("Styles de jonction de ligne", 500, 600)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("stroke-dasharray")}}
- La propriété {{CSSxRef("stroke-dashoffset")}}
- La propriété {{CSSxRef("stroke-linecap")}}
- La propriété {{CSSxRef("stroke-miterlimit")}}
- La propriété {{CSSxRef("stroke-opacity")}}
- La propriété {{CSSxRef("stroke-width")}}
- La propriété raccourcie {{CSSxRef("stroke")}}
- L'attribut SVG {{SVGAttr("stroke-linejoin")}}

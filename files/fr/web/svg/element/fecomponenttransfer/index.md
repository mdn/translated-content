---
title: <feComponentTransfer>
slug: Web/SVG/Element/feComponentTransfer
tags:
  - Element
  - SVG
  - SVG Filter
translation_of: Web/SVG/Element/feComponentTransfer
---
{{SVGRef}}

La primitive de filtre [SVG](/fr/docs/Web/SVG) **`<feComponentTransfer>`** permet d'effectuer un remappage des composantes de couleur (rouge, bleu, vert et alpha) de chaque pixel. Cela permet notamment de régler la luminosité, le constraste, la balance des couleurs ou encore le seuillage.

Les calculs sont effectués sur les valeurs de couleur non prémultipliées. Chaque canal de couleur est modifié en utilisant le résultat des éléments {{SVGElement("feFuncR")}}, {{SVGElement("feFuncB")}}, {{SVGElement("feFuncG")}}, et {{SVGElement("feFuncA")}} placés à l'intérieur de la balise.

## Contexte d'utilisation

{{svginfo}}

## Attributs

### Attributs globaux

- [Attributs de base](/fr/docs/Web/SVG/Attribute#Attributs_de_base)
- [Attributs de présentation](/fr/docs/Web/SVG/Attribute#Attributs_de_présentation)
- [Attributs de primitive de filtre](/fr/docs/Web/SVG/Attribute#Attributs_de_primitives_de_filtre)
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}

### Attributs spécifiques

- {{SVGAttr("in")}}

## Interface DOM

Cet élément implémente l'interface {{domxref("SVGFEComponentTransferElement")}}.

## Exemple

### SVG

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300">
  <defs>
    <linearGradient id="rainbow" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100%" y2="0">
      <stop offset="0" stop-color="#ff0000"></stop>
      <stop offset="0.2" stop-color="#ffff00"></stop>
      <stop offset="0.4" stop-color="#00ff00"></stop>
      <stop offset="0.6" stop-color="#00ffff"></stop>
      <stop offset="0.8" stop-color="#0000ff"></stop>
      <stop offset="1" stop-color="#800080"></stop>
    </linearGradient>
    <filter id="identity" x="0" y="0" width="100%" height="100%">
      <feComponentTransfer>
        <feFuncR type="identity"></feFuncR>
        <feFuncG type="identity"></feFuncG>
        <feFuncB type="identity"></feFuncB>
        <feFuncA type="identity"></feFuncA>
      </feComponentTransfer>
    </filter>
    <filter id="table" x="0" y="0" width="100%" height="100%">
      <feComponentTransfer>
        <feFuncR type="table" tableValues="0 0 1 1"></feFuncR>
        <feFuncG type="table" tableValues="1 1 0 0"></feFuncG>
        <feFuncB type="table" tableValues="0 1 1 0"></feFuncB>
      </feComponentTransfer>
    </filter>
    <filter id="linear" x="0" y="0" width="100%" height="100%">
      <feComponentTransfer>
        <feFuncR type="linear" slope="0.5" intercept="0"></feFuncR>
        <feFuncG type="linear" slope="0.5" intercept="0.25"></feFuncG>
        <feFuncB type="linear" slope="0.5" intercept="0.5"></feFuncB>
      </feComponentTransfer>
    </filter>
    <filter id="gamma" x="0" y="0" width="100%" height="100%">
      <feComponentTransfer>
        <feFuncR type="gamma" amplitude="4" exponent="7" offset="0"></feFuncR>
        <feFuncG type="gamma" amplitude="4" exponent="4" offset="0"></feFuncG>
        <feFuncB type="gamma" amplitude="4" exponent="1" offset="0"></feFuncB>
      </feComponentTransfer>
    </filter>
  </defs>

  <g font-weight="bold">
    <text x="0" y="5%">Default</text>
    <rect x="0" y="8%" width="100%" height="20"></rect>
    <text x="0" y="26%">Identity</text>
    <rect x="0" y="29%" width="100%" height="20" style="filter:url(#identity)"></rect>
    <text x="0" y="47%">Table lookup</text>
    <rect x="0" y="50%" width="100%" height="20" style="filter:url(#table)"></rect>
    <text x="0" y="68%">Linear function</text>
    <rect x="0" y="71%" width="100%" height="20" style="filter:url(#linear)"></rect>
    <text x="0" y="89%">Gamma function</text>
    <rect x="0" y="92%" width="100%" height="20" style="filter:url(#gamma)"></rect>
  </g>
</svg>
```

### CSS

```css
rect {
  fill: url(#rainbow);
}
```

### Résultat

{{EmbedLiveSample("Exemple", "100%", 340)}}

## Spécifications

| Spécification                                                                                                                    | Statut                           | Commentaire                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('Filters 1.0', '#feComponentTransferElement', '&lt;feComponentTransfer&gt;')}}         | {{Spec2('Filters 1.0')}} | Spécifie que les fonctions de transfert non définies sont traitées comme si elles avaient été définies avec pour  {{SVGAttr("type")}} `identity`. |
| {{SpecName('SVG1.1', 'filters.html#feComponentTransferElement', '&lt;feComponentTransfer&gt;')}} | {{Spec2('SVG1.1')}}         | Définition initiale                                                                                                                                    |

## Compatibilité des navigateurs

{{Compat("svg.elements.feComponentTransfer")}}

## Voir aussi

- {{SVGElement("filter")}}
- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feFuncA")}}
- {{SVGElement("feFuncB")}}
- {{SVGElement("feFuncG")}}
- {{SVGElement("feFuncR")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [Tutoriel SVG: Filtres](/fr/docs/Web/SVG/Tutoriel/filtres "en/SVG/Tutorial/Filter_effects")

---
title: <feColorMatrix>
slug: Web/SVG/Element/feColorMatrix
---

{{SVGRef}}

La primitive de filtre SVG **`<feColorMatrix>`** change les couleurs d'un élément en fonction d'une matrice de transformation. Chaque pixel (représenté par un vecteur \[R,G,B,A]) est [multiplié par matrice](https://fr.wikipedia.org/wiki/Produit_matriciel) pour créer une nouvelle couleur:

```
| R' |     | a00 a01 a02 a03 a04 |   | R |
| G' |     | a10 a11 a12 a13 a14 |   | G |
| B' |  =  | a20 a21 a22 a23 a24 | * | B |
| A' |     | a30 a31 a32 a33 a34 |   | A |
| 1  |     |  0   0   0   0   1  |   | 1 |
```

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
- {{SVGAttr("type")}}
- {{SVGAttr("values")}}

## Interface DOM

Cet élément implémente l'interface {{domxref("SVGFEColorMatrixElement")}}.

## Exemple

### SVG

```html
<svg
  width="100%"
  height="100%"
  viewBox="0 0 150 360"
  preserveAspectRatio="xMidYMid meet"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- ref -->
  <defs>
    <g id="circles">
      <circle cx="30" cy="30" r="20" fill="blue" fill-opacity="0.5" />
      <circle cx="20" cy="50" r="20" fill="green" fill-opacity="0.5" />
      <circle cx="40" cy="50" r="20" fill="red" fill-opacity="0.5" />
    </g>
  </defs>
  <use href="#circles" />
  <text x="70" y="50">Reference</text>

  <!-- matrix -->
  <filter id="colorMeMatrix">
    <feColorMatrix
      in="SourceGraphic"
      type="matrix"
      values="0 0 0 0 0
                1 1 1 1 0
                0 0 0 0 0
                0 0 0 1 0" />
  </filter>
  <use
    href="#circles"
    transform="translate(0 70)"
    filter="url(#colorMeMatrix)" />
  <text x="70" y="120">matrix</text>

  <!-- saturate -->
  <filter id="colorMeSaturate">
    <feColorMatrix in="SourceGraphic" type="saturate" values="0.2" />
  </filter>
  <use
    href="#circles"
    transform="translate(0 140)"
    filter="url(#colorMeSaturate)" />
  <text x="70" y="190">saturate</text>

  <!-- hueRotate -->
  <filter id="colorMeHueRotate">
    <feColorMatrix in="SourceGraphic" type="hueRotate" values="180" />
  </filter>
  <use
    href="#circles"
    transform="translate(0 210)"
    filter="url(#colorMeHueRotate)" />
  <text x="70" y="260">hueRotate</text>

  <!-- luminanceToAlpha -->
  <filter id="colorMeLTA">
    <feColorMatrix in="SourceGraphic" type="luminanceToAlpha" />
  </filter>
  <use href="#circles" transform="translate(0 280)" filter="url(#colorMeLTA)" />
  <text x="70" y="320">luminanceToAlpha</text>
</svg>
```

### Résultat

{{EmbedLiveSample("Exemple", "100%", 700, "/files/4371/test.png")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{SVGElement("filter")}}
- {{SVGElement("animate")}}
- {{SVGElement("set")}}
- {{SVGElement("feBlend")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [Tutoriel SVG: Filtres](/fr/docs/Web/SVG/Tutoriel/filtres)

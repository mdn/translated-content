---
title: <feComposite>
slug: Web/SVG/Element/feComposite
tags:
  - Element
  - SVG
  - SVG Filter
translation_of: Web/SVG/Element/feComposite
---
{{SVGRef}}

La primitive de filtre [SVG](/fr/docs/Web/SVG) **`<feComposite>`** effectue la combinaison de deux images en entrée, pixel par pixel, en utilisant une des opérations de composition de Porter-Duff: `over`_,_ `in`_,_ `atop`_,_ `out`_,_ `xor`, et `lighter`. Il est également possible d'appliquer une opération de type `arithmetic` (avec un résultat borné entre \[0..1]).

L'opération `arithmetic` est utile pour combiner le résultat de {{SVGElement("feDiffuseLighting")}} et {{SVGElement("feSpecularLighting")}} avec des textures. Si l'opération `arithmetic` est choisie, chaque pixel est calculé à l'aide de la formule suivante:

```plain
result = k1*i1*i2 + k2*i1 + k3*i2 + k4
```

où

- `i1` et `i2` indiquent les valeurs des pixels correspondant aux images en entrée, {{SVGAttr("in")}} et {{SVGAttr("in2")}} respectivement
- `k1, k2, k3` et `k4` indiquent les valeurs des attributs du même nom

## Contexte d'utilisation

{{svginfo}}

## Attributs

### Attributs globaux

- [Attributs de base](/fr/docs/Web/SVG/Attribute#Attributs_de_présentation)
- [Attributs de présentation](/fr/docs/Web/SVG/Attribute#Presentation_attributes)
- [Attributs de primitive de filtre](/fr/docs/Web/SVG/Attribute#Attributs_de_primitives_de_filtre)
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}

### Attributs spécifiques

- {{SVGAttr("in")}}
- {{SVGAttr("in2")}}
- {{SVGAttr("operator")}}
- {{SVGAttr("k1")}}
- {{SVGAttr("k2")}}
- {{SVGAttr("k3")}}
- {{SVGAttr("k4")}}

## Interface DOM

Cet élément implémente l'interface {{domxref("SVGFECompositeElement")}}.

## Exemple

### SVG

    <svg width="330" height="195" viewBox="0 0 1100 650" version="1.1"
         xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <title>Example feComposite - Examples of feComposite operations</title>
      <desc>Four rows of six pairs of overlapping triangles depicting
            the six different feComposite operators under different
            opacity values and different clearing of the background.</desc>
    	<defs>
        <desc>Define two sets of six filters for each of the six compositing operators.
              The first set wipes out the background image by flooding with opaque white.
              The second set does not wipe out the background, with the result
              that the background sometimes shines through and is other cases
              is blended into itself (i.e., "double-counting").</desc>
        <filter id="overFlood" filterUnits="objectBoundingBox" x="-5%" y="-5%" width="110%" height="110%">
          <feFlood flood-color="#ffffff" flood-opacity="1" result="flood"/>
          <feComposite in="SourceGraphic" in2="BackgroundImage" operator="over" result="comp"/>
          <feMerge> <feMergeNode in="flood"/> <feMergeNode in="comp"/> </feMerge>
        </filter>
        <filter id="inFlood" filterUnits="objectBoundingBox" x="-5%" y="-5%" width="110%" height="110%">
          <feFlood flood-color="#ffffff" flood-opacity="1" result="flood"/>
          <feComposite in="SourceGraphic" in2="BackgroundImage" operator="in" result="comp"/>
          <feMerge> <feMergeNode in="flood"/> <feMergeNode in="comp"/> </feMerge>
        </filter>
        <filter id="outFlood" filterUnits="objectBoundingBox" x="-5%" y="-5%" width="110%" height="110%">
          <feFlood flood-color="#ffffff" flood-opacity="1" result="flood"/>
          <feComposite in="SourceGraphic" in2="BackgroundImage" operator="out" result="comp"/>
          <feMerge> <feMergeNode in="flood"/> <feMergeNode in="comp"/> </feMerge>
        </filter>
        <filter id="atopFlood" filterUnits="objectBoundingBox" x="-5%" y="-5%" width="110%" height="110%">
          <feFlood flood-color="#ffffff" flood-opacity="1" result="flood"/>
          <feComposite in="SourceGraphic" in2="BackgroundImage" operator="atop" result="comp"/>
          <feMerge> <feMergeNode in="flood"/> <feMergeNode in="comp"/> </feMerge>
        </filter>
        <filter id="xorFlood" filterUnits="objectBoundingBox" x="-5%" y="-5%" width="110%" height="110%">
          <feFlood flood-color="#ffffff" flood-opacity="1" result="flood"/>
          <feComposite in="SourceGraphic" in2="BackgroundImage" operator="xor" result="comp"/>
          <feMerge> <feMergeNode in="flood"/> <feMergeNode in="comp"/> </feMerge>
        </filter>
        <filter id="arithmeticFlood" filterUnits="objectBoundingBox"
                x="-5%" y="-5%" width="110%" height="110%">
          <feFlood flood-color="#ffffff" flood-opacity="1" result="flood"/>
          <feComposite in="SourceGraphic" in2="BackgroundImage" result="comp"
                       operator="arithmetic" k1=".5" k2=".5" k3=".5" k4=".5"/>
          <feMerge> <feMergeNode in="flood"/> <feMergeNode in="comp"/> </feMerge>
        </filter>
        <filter id="overNoFlood" filterUnits="objectBoundingBox" x="-5%" y="-5%" width="110%" height="110%">
          <feComposite in="SourceGraphic" in2="BackgroundImage" operator="over" result="comp"/>
        </filter>
        <filter id="inNoFlood" filterUnits="objectBoundingBox" x="-5%" y="-5%" width="110%" height="110%">
          <feComposite in="SourceGraphic" in2="BackgroundImage" operator="in" result="comp"/>
        </filter>
        <filter id="outNoFlood" filterUnits="objectBoundingBox" x="-5%" y="-5%" width="110%" height="110%">
          <feComposite in="SourceGraphic" in2="BackgroundImage" operator="out" result="comp"/>
        </filter>
        <filter id="atopNoFlood" filterUnits="objectBoundingBox" x="-5%" y="-5%" width="110%" height="110%">
          <feComposite in="SourceGraphic" in2="BackgroundImage" operator="atop" result="comp"/>
        </filter>
        <filter id="xorNoFlood" filterUnits="objectBoundingBox" x="-5%" y="-5%" width="110%" height="110%">
          <feComposite in="SourceGraphic" in2="BackgroundImage" operator="xor" result="comp"/>
        </filter>
        <filter id="arithmeticNoFlood" filterUnits="objectBoundingBox"
                x="-5%" y="-5%" width="110%" height="110%">
          <feComposite in="SourceGraphic" in2="BackgroundImage" result="comp"
                       operator="arithmetic" k1=".5" k2=".5" k3=".5" k4=".5"/>
        </filter>
        <path id="Blue100" d="M 0 0 L 100 0 L 100 100 z" fill="#00ffff" />
        <path id="Red100" d="M 0 0 L 0 100 L 100 0 z" fill="#ff00ff" />
        <path id="Blue50" d="M 0 125 L 100 125 L 100 225 z" fill="#00ffff" fill-opacity=".5" />
        <path id="Red50" d="M 0 125 L 0 225 L 100 125 z" fill="#ff00ff" fill-opacity=".5" />
        <g id="TwoBlueTriangles">
          <use xlink:href="#Blue100"/>
          <use xlink:href="#Blue50"/>
        </g>
        <g id="BlueTriangles">
          <use transform="translate(275,25)" xlink:href="#TwoBlueTriangles"/>
          <use transform="translate(400,25)" xlink:href="#TwoBlueTriangles"/>
          <use transform="translate(525,25)" xlink:href="#TwoBlueTriangles"/>
          <use transform="translate(650,25)" xlink:href="#TwoBlueTriangles"/>
          <use transform="translate(775,25)" xlink:href="#TwoBlueTriangles"/>
          <use transform="translate(900,25)" xlink:href="#TwoBlueTriangles"/>
        </g>
      </defs>

      <rect fill="none" stroke="blue" x="1" y="1" width="1098" height="648"/>
      <g font-family="Verdana" font-size="40" shape-rendering="crispEdges">
        <desc>Render the examples using the filters that draw on top of
              an opaque white surface, thus obliterating the background.</desc>
        <g enable-background="new">
          <text x="15" y="75">opacity 1.0</text>
          <text x="15" y="115" font-size="27">(with feFlood)</text>
          <text x="15" y="200">opacity 0.5</text>
          <text x="15" y="240" font-size="27">(with feFlood)</text>
          <use xlink:href="#BlueTriangles"/>
          <g transform="translate(275,25)">
            <use xlink:href="#Red100" filter="url(#overFlood)" />
            <use xlink:href="#Red50" filter="url(#overFlood)" />
            <text x="5" y="275">over</text>
          </g>
          <g transform="translate(400,25)">
            <use xlink:href="#Red100" filter="url(#inFlood)" />
            <use xlink:href="#Red50" filter="url(#inFlood)" />
            <text x="35" y="275">in</text>
          </g>
          <g transform="translate(525,25)">
            <use xlink:href="#Red100" filter="url(#outFlood)" />
            <use xlink:href="#Red50" filter="url(#outFlood)" />
            <text x="15" y="275">out</text>
          </g>
          <g transform="translate(650,25)">
            <use xlink:href="#Red100" filter="url(#atopFlood)" />
            <use xlink:href="#Red50" filter="url(#atopFlood)" />
            <text x="10" y="275">atop</text>
          </g>
          <g transform="translate(775,25)">
            <use xlink:href="#Red100" filter="url(#xorFlood)" />
            <use xlink:href="#Red50" filter="url(#xorFlood)" />
            <text x="15" y="275">xor</text>
          </g>
          <g transform="translate(900,25)">
            <use xlink:href="#Red100" filter="url(#arithmeticFlood)" />
            <use xlink:href="#Red50" filter="url(#arithmeticFlood)" />
            <text x="-25" y="275">arithmetic</text>
          </g>
        </g>
        <g transform="translate(0,325)" enable-background="new">
        <desc>Render the examples using the filters that do not obliterate
              the background, thus sometimes causing the background to continue
              to appear in some cases, and in other cases the background
              image blends into itself ("double-counting").</desc>
          <text x="15" y="75">opacity 1.0</text>
          <text x="15" y="115" font-size="27">(without feFlood)</text>
          <text x="15" y="200">opacity 0.5</text>
          <text x="15" y="240" font-size="27">(without feFlood)</text>
          <use xlink:href="#BlueTriangles"/>
          <g transform="translate(275,25)">
            <use xlink:href="#Red100" filter="url(#overNoFlood)" />
            <use xlink:href="#Red50" filter="url(#overNoFlood)" />
            <text x="5" y="275">over</text>
          </g>
          <g transform="translate(400,25)">
            <use xlink:href="#Red100" filter="url(#inNoFlood)" />
            <use xlink:href="#Red50" filter="url(#inNoFlood)" />
            <text x="35" y="275">in</text>
          </g>
          <g transform="translate(525,25)">
            <use xlink:href="#Red100" filter="url(#outNoFlood)" />
            <use xlink:href="#Red50" filter="url(#outNoFlood)" />
            <text x="15" y="275">out</text>
          </g>
          <g transform="translate(650,25)">
            <use xlink:href="#Red100" filter="url(#atopNoFlood)" />
            <use xlink:href="#Red50" filter="url(#atopNoFlood)" />
            <text x="10" y="275">atop</text>
          </g>
          <g transform="translate(775,25)">
            <use xlink:href="#Red100" filter="url(#xorNoFlood)" />
            <use xlink:href="#Red50" filter="url(#xorNoFlood)" />
            <text x="15" y="275">xor</text>
          </g>
          <g transform="translate(900,25)">
            <use xlink:href="#Red100" filter="url(#arithmeticNoFlood)" />
            <use xlink:href="#Red50" filter="url(#arithmeticNoFlood)" />
            <text x="-25" y="275">arithmetic</text>
          </g>
        </g>
      </g>
    </svg>

### Résultat

Cette image affine le résultat désiré.

![Example feComposite — Examples of feComposite operations](https://www.w3.org/TR/SVG11/images/filters/feComposite.png)

## Spécifications

| Spécification                                                                                                | Statut                           | Commentaire                                            |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------------------------------------------ |
| {{SpecName('Filters 1.0', '#feCompositeElement', '&lt;feComposite&gt;')}}             | {{Spec2('Filters 1.0')}} | Ajoute la valeur `lighter` pour l'attribut `operator`. |
| {{SpecName('SVG1.1', 'filters.html#feCompositeElement', '&lt;feComposite&gt;')}} | {{Spec2('SVG1.1')}}         | Définition initiale                                    |

## Compatibilité des navigateurs

{{Compat("svg.elements.feComposite")}}

## Voir aussi

- {{SVGElement("filter")}}
- {{SVGElement("animate")}}
- {{SVGElement("set")}}
- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
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
- [Tutoriel SVG: Filtres](/fr/docs/Web/SVG/Tutoriel/filtres "en/SVG/Tutorial/Filter_effects")

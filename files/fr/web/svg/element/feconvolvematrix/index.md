---
title: <feConvolveMatrix>
slug: Web/SVG/Element/feConvolveMatrix
tags:
  - Element
  - SVG
  - SVG Filter
translation_of: Web/SVG/Element/feConvolveMatrix
---
{{SVGRef}}

La primitive de filtre [SVG](/fr/docs/Web/SVG) **`<feConvolveMatrix>`** applique une matrice de convolution d'effet de filtre. Une convolution combine les pixels de l'image en entrée avec ceux voisins pour donner une image résultante. On peut obtenir une grande variété d'opérations d'imagerie à l'aide de convolutions, dont le flou, la détection de bord, la netteté, l'estampage et le chanfreinage.

Une convolution de matrice se fonde sur une matrice n par m (le noyau de convolution), qui décrit la façon dont une valeur de pixel donné de l'image en entrée est combinée avec celles des pixels de son voisinage pour aboutir à une valeur de pixel résultante. Chaque pixel du résultat est déterminé par l'application de la matrice noyau sur le pixel source correspondant et ses pixels voisins. La formule de convolution de base, appliquée à chaque valeur de couleur d'un pixel donné, est :

COLOR<sub>X,Y</sub> = ( 
              SUM <sub>I=0 to [<a href="https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementOrderAttribute">orderY</a>-1]</sub> { 
                SUM <sub>J=0 to [<a href="https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementOrderAttribute">orderX</a>-1]</sub> { 
                  SOURCE <sub>X-<a href="https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementTargetXAttribute">targetX</a>+J, Y-<a href="https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementTargetYAttribute">targetY</a>+I</sub> \*  [kernelMatrix](https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementKernelMatrixAttribute)<sub><a href="https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementOrderAttribute">orderX</a>-J-1,  <a href="https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementOrderAttribute">orderY</a>-I-1</sub> 
                } 
              } 
            ) /  [divisor](https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementDivisorAttribute) +  [bias](https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementBiasAttribute) \* ALPHA<sub>X,Y</sub>

dans laquelle

- "orderX" et "orderY" représentent les valeurs X et Y pour l'attribut {{SVGAttr("order")}},
- "targetX" représente la valeur de l'attribut {{SVGAttr("targetX")}},
- "targetY" la valeur de l'attribut {{SVGAttr("targetY")}},
- "kernelMatrix" celle de l'attribut {{SVGAttr("kernelMatrix")}},
- "divisor" celle de l'attribut {{SVGAttr("divisor")}}
- et "bias" la valeur de l'attribut {{SVGAttr("bias")}}.

Remarquez dans la formule ci-dessus que les valeurs de la matrice noyau sont appliquées de telle manière que cette matrice noyau soit tournée de 180 degrés par rapport aux images de source et de destination, pour correspondre avec la théorie de la convolution telle qu'elle est décrite dans de nombreux ouvrages sur l'infographie.

Pour illustrer, supposons que l'on ait une image en entrée, de 5x5 pixels, dont les valeurs de couleur pour l'un des canaux de couleur sont les suivantes:

    0    20  40 235 235
    100 120 140 235 235
    200 220 240 235 235
    225 225 255 255 255
    225 225 255 255 255

et que l'on définit un noyau de convolution de 3x3 comme ceci:

    1 2 3
    4 5 6
    7 8 9

Concentrons-nous sur la valeur de couleur de la deuxième ligne, deuxième colonne (la valeur du pixel source est 120). En supposant le cas le plus simple (quand le quadrillage de pixels de l'image source s'aligne parfaitement avec celui du noyau) et en supposant les valeurs par défaut des attributs `divisor`, `targetX` et `targetY`, alors la valeur de couleur résultante sera :

    (9*  0 + 8* 20 + 7* 40 +
     6*100 + 5*120 + 4*140 +
     3*200 + 2*220 + 1*240) / (9+8+7+6+5+4+3+2+1)

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
- {{SVGAttr("order")}}
- {{SVGAttr("kernelMatrix")}}
- {{SVGAttr("divisor")}}
- {{SVGAttr("bias")}}
- {{SVGAttr("targetX")}}
- {{SVGAttr("targetY")}}
- {{SVGAttr("edgeMode")}}
- {{SVGAttr("kernelUnitLength")}}
- {{SVGAttr("preserveAlpha")}}

## Interface DOM

Cet élément implémente l'interface {{domxref("SVGFEConvolveMatrixElement")}}.

## Exemple

### SVG

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <filter id="emboss">
      <feConvolveMatrix
          kernelMatrix="3 0 0
                        0 0 0
                        0 0 -3"/>
    </filter>
  </defs>

  <image xlink:href="/files/12668/MDN.svg" x="0" y="0"
      height="200" width="200" style="filter:url(#emboss);" />
</svg>
```

### Résultat

{{EmbedLiveSample("Exemple", 200, 210)}}

## Spécifications

| Spécification                                                                                                            | Statut                           | Commentaire         |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------- |
| {{SpecName("Filters 1.0", "#feConvolveMatrixElement", "&lt;feConvolveMatrix&gt;")}}         | {{Spec2("Filters 1.0")}} |                     |
| {{SpecName("SVG1.1", "filters.html#feConvolveMatrixElement", "&lt;feConvolveMatrix&gt;")}} | {{Spec2("SVG1.1")}}         | Définition initiale |

## Compatibilité des navigateurs

{{Compat("svg.elements.feConvolveMatrix")}}

## Voir aussi

- {{SVGElement("filter")}}
- {{SVGElement("animate")}}
- {{SVGElement("set")}}
- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
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

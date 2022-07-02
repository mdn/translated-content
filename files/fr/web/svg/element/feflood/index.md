---
title: <feFlood>
slug: Web/SVG/Element/feFlood
tags:
  - SVG
  - SVG Filter
translation_of: Web/SVG/Element/feFlood
---
{{SVGRef}}

La primitive de filtre SVG **`<feFlood>`** remplit la région du filtre avec la couleur et l'opacité définies par {{SVGAttr("flood-color")}} et {{SVGAttr("flood-opacity")}}.

## Contexte d'utilisation

{{svginfo}}

## Attributs

### Attributs globaux

- [Attributs de base](/fr/docs/Web/SVG/Attribute#Attributs_de_base)
- [Attributs de présentation](/fr/docs/Web/SVG/Attribute#Attributs_de_présentation)
- [Attributs de primitives de filtre](/fr/docs/Web/SVG/Attribute#Attributs_de_primitives_de_filtre)
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}

### Attributs spécifiques

- {{SVGAttr("flood-color")}}
- {{SVGAttr("flood-opacity")}}

## Interface DOM

Cet élément implémente l'interface {{domxref("SVGFEFloodElement")}}.

## Exemple

```html
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <defs>
    <filter id="floodFilter" filterUnits="userSpaceOnUse">
      <feFlood x="50" y="50" width="100" height="100"
          flood-color="green" flood-opacity="0.5"/>
    </filter>
  </defs>

  <use style="filter: url(#floodFilter);"/>
</svg>
```

{{EmbedLiveSample("Exemple", 200, 200)}}

## Spécifications

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Spécification</th>
      <th scope="col">Statut</th>
      <th scope="col">Commentaire</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{SpecName('Filters 1.0', '#feFloodElement', '&lt;feFlood&gt;')}}
      </td>
      <td>{{Spec2('Filters 1.0')}}</td>
      <td>
        <p>
          Supprime la valeur &#x3C;icccolor> de la propriété
          {{cssxref("flood-color")}} et définit que le canal alpha est
          multiplié par la valeur de la propriété
          {{cssxref("flood-opacity")}}. Clarifie la valeur de la
          propriété <code>flood-opacity</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName('SVG1.1', 'filters.html#feFloodElement', '&lt;feFlood&gt;')}}
      </td>
      <td>{{Spec2('SVG1.1')}}</td>
      <td>Définition initiale</td>
    </tr>
  </tbody>
</table>

## Compatibilité des navigateurs

{{Compat("svg.elements.feFlood")}}

## Voir aussi

- {{SVGElement("filter")}}
- {{SVGElement("animate")}}
- {{SVGElement("animateColor")}}
- {{SVGElement("set")}}
- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [Tutoriel SVG: Les filtres](/fr/docs/Web/SVG/Tutoriel/filtres)

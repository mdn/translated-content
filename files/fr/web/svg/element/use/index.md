---
title: <use>
slug: Web/SVG/Element/use
translation_of: Web/SVG/Element/use
---
{{SVGRef}}

L'élement **`<use>`** permet la duplication de _nodes_ (noeuds du DOM, NDR) définis par [\<defs>](/fr/docs/Web/SVG/Element/defs) afin de les insérer par ailleurs. L'effet est le même que si les noeuds étaient créés dans une partie non-rendue (au sens de non-affichée) au sein du DOM puis "clonés" là où est utilisé l'élément `use` tel que le permet les [éléments de gabarit](/fr/docs/Web/HTML/Element/template) grâce à HTML5.

Puisque les noeuds clonés par `use` ne sont pas exposés, vous devez être attentif lorsque vous utilisez des règles de style [CSS](/fr/docs/Web/CSS "en/CSS") sur l'élément `use` et ses enfants "cachés". En effet les attributs CSS ne sont pas garantis d'être hérités lorsqu'ils seront clonés si vous n'explicitez pas correctement les [héritages CSS](/fr/docs/Web/CSS/inheritance "en/CSS/inheritance").

Pour des raisons de sécurité, certains navigateurs peuvent appliquer la politique de _même-origine_ (c'est-à-dire le couple domaine et port identiques) pour l'élément `use` ce qui peut conduire à un refus de charger une URI depuis une origine différente conernant l'attribut {{SVGAttr("href")}}.

> **Attention :** Depuis la version de SVG 2, l'attribut {{SVGAttr("xlink:href")}} est obsolète. Voir la page {{SVGAttr("xlink:href")}} pour plus d'informations.

## Contexte d'usage

{{svginfo}}

## Attributs

### Attributs globaux

- [Conditional processing attributes](/fr/docs/Web/SVG/Attribute#Conditional_processing_attributes "en/SVG/Attribute#ConditionalProccessing")&nbsp;»
- [Core attributes](/fr/docs/Web/SVG/Attribute#Core_attributes "en/SVG/Attribute#Core")&nbsp;»
- [Graphical event attributes](/fr/docs/Web/SVG/Attribute#Graphical_event_attributes "en/SVG/Attribute#GraphicalEvent")&nbsp;»
- [Presentation attributes](/fr/docs/Web/SVG/Attribute#Presentation_attributes "en/SVG/Attribute#Presentation")&nbsp;»
- [Xlink attributes](/fr/docs/Web/SVG/Attribute#XLink_attributes "en/SVG/Attribute#XLink")&nbsp;»
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}
- {{SVGAttr("externalResourcesRequired")}}
- {{SVGAttr("transform")}}

### Attributs spécifiques

- {{SVGAttr("x")}}
- {{SVGAttr("y")}}
- {{SVGAttr("width")}}
- {{SVGAttr("height")}}
- {{SVGAttr("href")}}

## Interface DOM

Cet élément est implanté par l'interface {{domxref("SVGUseElement")}}.

## Exemple

```html
<svg width="80" height="80" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
  <style>
    .classA {
      fill: red;
    }
  </style>
  <defs>
    <g id="Port">
      <circle style="fill: inherit;" r="10"/>
    </g>
  </defs>

  <text y="15">black</text>
  <use x="50" y="10" href="#Port" />
  <text y="35">red</text>
  <use x="50" y="30" href="#Port" class="classA"/>
  <text y="55">blue</text>
  <use x="50" y="50" href="#Port" style="fill: blue;"/>
</svg>
```

{{EmbedLiveSample("Exemple", 80, 80)}}

## Spécifications

| Spécification                                                                        | Statut                   | Commentaire        |
| ------------------------------------------------------------------------------------ | ------------------------ | ------------------ |
| {{SpecName('SVG2', 'struct.html#UseElement', '&lt;use&gt;')}}     | {{Spec2('SVG2')}} |                    |
| {{SpecName('SVG1.1', 'struct.html#UseElement', '&lt;use&gt;')}} | {{Spec2('SVG1.1')}} | Initial definition |

## Compatibilité des navigateurs

{{Compat("svg.elements.use")}}

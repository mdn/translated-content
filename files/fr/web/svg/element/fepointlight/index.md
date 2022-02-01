---
title: <fePointLight>
slug: Web/SVG/Element/fePointLight
tags:
  - Element
  - SVG
  - SVG Filter
  - SVG Light Source
translation_of: Web/SVG/Element/fePointLight
---
{{SVGRef}}

La primitive de filtre **`<fePointLight>`** définit une source de lumière qui permet de créer un point lumineux. On la place dans une primitive de filtre d'éclairage: {{SVGElement("feDiffuseLighting")}} or {{SVGElement("feSpecularLighting")}}.

## Contexte d'utilisation

{{svginfo}}

## Attributs

### Attributs globaux

- [Attributs de base](/fr/docs/Web/SVG/Attribute#Attributs_de_base)

### Attributs spécifiques

- {{SVGAttr("x")}}
- {{SVGAttr("y")}}
- {{SVGAttr("z")}}

## Interface DOM

Cet élément implémente l'interface {{domxref("SVGFEPointLightElement")}}.

## Exemple

### SVG

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <filter id="spotlight">
      <feSpecularLighting result="spotlight" specularConstant="1.5"
          specularExponent="80" lighting-color="#FFF">
        <fePointLight x="50" y="50" z="220"/>
      </feSpecularLighting>
      <feComposite in="SourceGraphic" in2="spotlight" operator="arithmetic"
          k1="0" k2="1" k3="1" k4="0"/>
    </filter>
  </defs>

  <image xlink:href="/files/6457/mdn_logo_only_color.png" x="10%" y="10%"
      width="80%" height="80%" style="filter:url(#spotlight);"/>
</svg>
```

### Résultat

{{EmbedLiveSample("Exemple", 200, 200)}}

## Spécifications

| Spécification                                                                                                | Statut                           | Commentaire         |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------- |
| {{SpecName('Filters 1.0', '#fePointLightElement', '&lt;fePointLight&gt;')}}         | {{Spec2('Filters 1.0')}} | Aucun changement    |
| {{SpecName('SVG1.1', 'filters.html#fePointLightElement', '&lt;fePointLight&gt;')}} | {{Spec2('SVG1.1')}}         | Définition initiale |

## Compatibilité des navigateurs

{{Compat("svg.elements.fePointLight")}}

## Voir aussi

- {{SVGElement("filter")}}
- {{SVGElement("animate")}}
- {{SVGElement("set")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feDistantLight")}}
- {{SVGElement("feSpotLight")}}
- [Tutoriel SVG: Filtres](/fr/docs/Web/SVG/Tutoriel/filtres)

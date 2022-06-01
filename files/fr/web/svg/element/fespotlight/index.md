---
title: <feSpotLight>
slug: Web/SVG/Element/feSpotLight
tags:
  - Element
  - SVG
  - SVG Filter
  - SVG Light Source
translation_of: Web/SVG/Element/feSpotLight
---
{{SVGRef}}

La primitive de filtre [SVG](/fr/docs/Web/SVG) **`<feSpotLight>`** définit une source de lumière qui permet de créer un feu de projecteur. On la place dans une primitive de filtre d'éclairage: {{SVGElement("feDiffuseLighting")}} ou {{SVGElement("feSpecularLighting")}}.

## Contexte d'utilisation

{{svginfo}}

## Attributs

### Attributs globaux

- [Attributs de base](/fr/docs/Web/SVG/Attribute#Attributs_de_base)

### Attributs spécifiques

- {{SVGAttr("x")}}
- {{SVGAttr("y")}}
- {{SVGAttr("z")}}
- {{SVGAttr("pointsAtX")}}
- {{SVGAttr("pointsAtY")}}
- {{SVGAttr("pointsAtZ")}}
- {{SVGAttr("specularExponent")}}
- {{SVGAttr("limitingConeAngle")}}

## Interface DOM

Cet élément implémente l'interface {{domxref("SVGFESpotLightElement")}}.

## Exemple

### SVG

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <filter id="spotlight">
      <feSpecularLighting result="spotlight" specularConstant="1.5"
          specularExponent="4" lighting-color="#FFF">
        <feSpotLight x="600" y="600" z="400" limitingConeAngle="5.5" />
      </feSpecularLighting>
      <feComposite in="SourceGraphic" in2="spotlight" operator="out"
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
| {{SpecName("Filters 1.0", "#feSpotLightElement", "&lt;feSpotLight&gt;")}}             | {{Spec2("Filters 1.0")}} | Aucun changement    |
| {{SpecName("SVG1.1", "filters.html#feSpotLightElement", "&lt;feSpotLight&gt;")}} | {{Spec2("SVG1.1")}}         | Définition initiale |

## Compatibilité des navigateurs

{{Compat("svg.elements.feSpotLight")}}

## Voir aussi

- {{SVGElement("filter")}}
- {{SVGElement("animate")}}
- {{SVGElement("set")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feDistantLight")}}
- {{SVGElement("fePointLight")}}
- [Tutoriel SVG: Filtres](/fr/docs/Web/SVG/Tutoriel/filtres)

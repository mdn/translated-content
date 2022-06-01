---
title: <stop>
slug: Web/SVG/Element/stop
translation_of: Web/SVG/Element/stop
---
{{SVGRef}}

L'élément [SVG](/fr/docs/Web/SVG) **`<stop>`** définit une couleur supplémentaire dans une palette à utiliser pour un dégradé, et est contenu dans un élément {{SVGElement("linearGradient")}} ou {{SVGElement("radialGradient")}}.

## Contexte d'utilisation

{{svginfo}}

## Attributs

### Attributs globaux

- [Attributs de base](/fr/docs/Web/SVG/Attribute#Core_attributes)
- [Attributs de présentation](/fr/docs/Web/SVG/Attribute#Presentation_attributes)
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}

### Specific attributes

- {{SVGAttr("offset")}}
- {{SVGAttr("stop-color")}}
- {{SVGAttr("stop-opacity")}}

## DOM Interface

Cet élément implémenté l'interface {{domxref("SVGStopElement")}}.

## Exemple

### SVG

```html
<svg width="160" height="95" viewBox="0 0 80 40"
     xmlns="http://www.w3.org/2000/svg">

  <defs>
    <linearGradient id="MyGradient">
      <stop offset="5%" stop-color="#F60" />
      <stop offset="95%" stop-color="#FF6" />
    </linearGradient>
  </defs>

  <!-- Contour de la zone de dessin en noir -->
  <rect fill="none" stroke="black"
        x="0.5" y="0.5" width="79" height="39"/>

  <!-- Le rectangle est rempli avec un dégradé linéaire -->
  <rect fill="url(#MyGradient)" stroke="black" stroke-width="1"
        x="10" y="10" width="60" height="20"/>
</svg>
```

### Résultat

{{EmbedLiveSample("Exemple", 160, 95)}}

## Spécifications

| Spécification                                                                                | Statut                   | Commentaire         |
| -------------------------------------------------------------------------------------------- | ------------------------ | ------------------- |
| {{SpecName('SVG2', 'pservers.html#GradientStops', '&lt;stop&gt;')}}     | {{Spec2('SVG2')}} |                     |
| {{SpecName('SVG1.1', 'pservers.html#GradientStops', '&lt;stop&gt;')}} | {{Spec2('SVG1.1')}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("svg.elements.stop")}}

## Voir aussi

- {{SVGElement("linearGradient")}}
- {{SVGElement("radialGradient")}}

---
title: <feImage>
slug: Web/SVG/Element/feImage
---

{{SVGRef}}

La primitive de filtre [SVG](/fr/docs/Web/SVG) **`<feImage>`** extrait les données d'une image d'une source externe et retourne les pixels récupérés en sortie (autrement dit, si l'image récupérée est une image SVG, elle sortira comme raster)

## Contexte d'utilisation

{{svginfo}}

## Attributs

### Attributs globaux

- [Attributs de base](/fr/docs/Web/SVG/Attribute#Attributs_de_base)
- [Attributs de présentation](/fr/docs/Web/SVG/Attribute#Attributs_de_base)
- [Attributs de primitives de filtre](/fr/docs/Web/SVG/Attribute#Attributs_de_primitives_de_filtre)
- [Attributs XLink](/fr/docs/Web/SVG/Attribute#Attributs_de_primitives_de_filtre)
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}
- {{SVGAttr("externalResourcesRequired")}}

### Attributs spécifiques

- {{SVGAttr("preserveAspectRatio")}}
- {{SVGAttr("xlink:href")}}

## Interface DOM

Cet élément implémente l'interface {{domxref("SVGFEImageElement")}}.

## Exemple

```html
<svg
  viewBox="0 0 200 200"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <filter id="image">
      <feImage xlink:href="/files/6457/mdn_logo_only_color.png" />
    </filter>
  </defs>

  <rect x="10%" y="10%" width="80%" height="80%" style="filter:url(#image);" />
</svg>
```

{{EmbedLiveSample("Exemple", 200, 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{SVGElement("filter")}}
- {{SVGElement("animate")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("set")}}
- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [Tutoriel SVG: Les filtres](/fr/docs/Web/SVG/Tutoriel/filtres)

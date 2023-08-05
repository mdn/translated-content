---
title: <radialGradient>
slug: Web/SVG/Element/radialGradient
---

{{SVGRef}}

L'élément SVG **`<radialGradient>`** permet de définir des dégradés radiaux qui peuvent être appliqués aux éléments de remplissage ou de contour des éléments graphiques.

> **Note :** Il ne faut pas confondre cet élément avec la fonction CSS [`radial-gradient()`](/fr/docs/Web/CSS/gradient/radial-gradient). En effet, les dégradés CSS s'appliquent uniquement aux éléments HTML, là où les dégradés SVG s'appliquent uniquement aux éléments SVG.

## Exemple

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg
  viewBox="0 0 10 10"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <radialGradient id="monDegrade">
      <stop offset="10%" stop-color="gold" />
      <stop offset="95%" stop-color="red" />
    </radialGradient>
  </defs>

  <!-- on utilise le dégradé radial déclaré plus haut -->
  <circle cx="5" cy="5" r="4" fill="url('#monDegrade')" />
</svg>
```

{{EmbedLiveSample('', 150, '100%')}}

## Attributs

- [`cx`](/fr/docs/Web/SVG/Attribute/cx)
  - : Cet attribut définit l'abscisse du cercle extérieur pour le dégradé radial.
    - Type de valeur
      - : [`<length>`](/fr/docs/Web/SVG/Content_type#length)
    - Valeur par défaut
      - : `50%`
    - Peut être animé
      - : Oui
- [`cy`](/fr/docs/Web/SVG/Attribute/cy)
  - : Cet attribut définit l'ordonnée du cercle extérieur pour le dégradé radial.
    - Type de valeur
      - : [`<length>`](/fr/docs/Web/SVG/Content_type#length)
    - Valeur par défaut
      - : `50%`
    - Peut être animé
      - : Oui
- [`fr`](/fr/docs/Web/SVG/Attribute/fr)
  - : Cet attribut définit le rayon du cercle intérieur du dégradé radial. Le dégradé sera dessiné de tel façon à ce que [l'arrêt de dégradé (`<stop>`)](/fr/docs/Web/SVG/Element/stop) situé au niveau 0% corresponde au périmètre du cercle intérieur.
    - Type de valeur
      - : [`<length>`](/fr/docs/Web/SVG/Content_type#length)
    - Valeur par défaut
      - : `0%`
    - Peut être animé
      - : Oui
- [`fx`](/fr/docs/Web/SVG/Attribute/fx)
  - : Cet attribut définit l'abscisse du cercle intérieur pour le dégradé radial.
    - Type de valeur
      - : [`<length>`](/fr/docs/Web/SVG/Content_type#length)
    - Valeur par défaut
      - : La même que celle de `cx`
    - Peut être animé
      - : Oui
- [`fy`](/fr/docs/Web/SVG/Attribute/fy)
  - : Cet attribut définit l'ordonnée du cercle intérieur pour le dégradé radial.
    - Type de valeur
      - : [`<length>`](/fr/docs/Web/SVG/Content_type#length)
    - Valeur par défaut
      - : La même que celle de `cy`
    - Peut être animé
      - : Oui
- [`gradientUnits`](/fr/docs/Web/SVG/Attribute/gradientUnits)
  - : Cet attribut définit le système de coordonnées pour les attributs `cx`, `cy`, `r`, `fx`, `fy`, et `fr`.
    - Type de valeur
      - : `userSpaceOnUse`|`objectBoundingBox`
    - Valeur par défaut
      - : `objectBoundingBox`
    - Peut être animé
      - : Oui
- [`gradientTransform`](/fr/docs/Web/SVG/Attribute/gradientTransform)
  - : Cet attribut fournit des [transformations](/fr/docs/Web/SVG/Attribute/transform) supplémentaires au système de coordonnées utilisé par le dégradé.
    - Type de valeur
      - : [`<transform-list>`](/fr/docs/Web/SVG/Content_type#transform-list)
    - Valeur par défaut
      - : La transformation identité
    - Peut être animé
      - : Oui
- [`href`](/fr/docs/Web/SVG/Attribute/href)
  - : Cet attribut définit une référence à un autre élément `<radialGradient>` qui sera utilisé comme modèle.
    - Type de valeur
      - : [`<URL>`](/fr/docs/Web/SVG/Content_type#url)
    - Valeur par défaut
      - : Aucune
    - Peut être animé
      - : Oui
- [`r`](/fr/docs/Web/SVG/Attribute/r)
  - : Cet attribut définit le rayon du cercle extérieur du dégradé radial. Le dégradé sera dessiné de tel façon à ce que [l'arrêt de dégradé (`<stop>`)](/fr/docs/Web/SVG/Element/stop) situé au niveau 100% corresponde au périmètre du cercle extérieur.
    - Type de valeur
      - : [`<length>`](/fr/docs/Web/SVG/Content_type#length)
    - Valeur par défaut
      - : `50%`
    - Peut être animé
      - : Oui
- [`srpeadMethod`](/fr/docs/Web/SVG/Attribute/spreadMethod)
  - : Cet attribut indique la façon dont le dégradé se comporte s'il démarre ou finit à l'intérieur des limites de la forme contenant le dégradé.
    - Type de valeur
      - : `pad`|`reflect`|`repeat`
    - Valeur par défaut
      - : `pad`
    - Peut être animé
      - : Oui
- [`href`](/fr/docs/Web/SVG/Attribute/href)
  - : {{Deprecated_Header}} Une référence [`<IRI>`](/fr/docs/Web/SVG/Content_type#iri) à un autre élément `<radialGradient>` qui pourra être utilisé comme modèle.
    - Type de valeur
      - : [`<IRI>`](/fr/docs/Web/SVG/Content_type#iri)
    - Valeur par défaut
      - : none
    - Peut être animé
      - : Oui

### Attributs universels

- [Attributs fondamentaux](/fr/docs/Web/SVG/Attribute/Core)
  - : Notamment [`id`](/fr/docs/Web/SVG/Attribute/id)
- [Attributs de mise en forme](/fr/docs/Web/SVG/Attribute/Styling)
  - : [`class`](/fr/docs/Web/SVG/Attribute/class), [`style`](/fr/docs/Web/SVG/Attribute/style)
- Attributs pour les évènements
  - : [Attributs d'évènements universels](/fr/docs/Web/SVG/Attribute/Events#global_event_attributes), [attributs relatifs aux évènements du document](/fr/docs/Web/SVG/Attribute/Events#document_element_event_attributes)
- [Attributs de présentation](/fr/docs/Web/SVG/Attribute/Presentation)
  - : Notamment [`clip-path`](/fr/docs/Web/SVG/Attribute/clip-path), [`clip-rule`](/fr/docs/Web/SVG/Attribute/clip-rule), [`color`](/fr/docs/Web/SVG/Attribute/color), [`color-interpolation`](/fr/docs/Web/SVG/Attribute/color-interpolation), [`color-rendering`](/fr/docs/Web/SVG/Attribute/color-rendering), [`cursor`](/fr/docs/Web/SVG/Attribute/cursor), [`display`](/fr/docs/Web/SVG/Attribute/display), [`fill`](/fr/docs/Web/SVG/Attribute/fill), [`fill-opacity`](/fr/docs/Web/SVG/Attribute/fill-opacity), [`fill-rule`](/fr/docs/Web/SVG/Attribute/fill-rule), [`filter`](/fr/docs/Web/SVG/Attribute/filter), [`mask`](/fr/docs/Web/SVG/Attribute/mask), [`opacity`](/fr/docs/Web/SVG/Attribute/opacity), [`pointer-events`](/fr/docs/Web/SVG/Attribute/pointer-events), [`shape-rendering`](/fr/docs/Web/SVG/Attribute/shape-rendering), [`stroke`](/fr/docs/Web/SVG/Attribute/stroke), [`stroke-dasharray`](/fr/docs/Web/SVG/Attribute/stroke-dasharray), [`stroke-dashoffset`](/fr/docs/Web/SVG/Attribute/stroke-dashoffset), [`stroke-linecap`](/fr/docs/Web/SVG/Attribute/stroke-linecap), [`stroke-linejoin`](/fr/docs/Web/SVG/Attribute/stroke-linejoin), [`stroke-miterlimit`](/fr/docs/Web/SVG/Attribute/stroke-miterlimit), [`stroke-opacity`](/fr/docs/Web/SVG/Attribute/stroke-opacity), [`stroke-width`](/fr/docs/Web/SVG/Attribute/stroke-width), [`transform`](/fr/docs/Web/SVG/Attribute/transform), [`vector-effect`](/fr/docs/Web/SVG/Attribute/vector-effect), [`visibility`](/fr/docs/Web/SVG/Attribute/visibility)
- Attributs `xlink`
  - : [`xlink:href`](/fr/docs/Web/SVG/Attribute/xlink:href), [`xlink:title`](/fr/docs/Web/SVG/Attribute/xlink:title)

## Notes d'utilisation

{{svginfo}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
